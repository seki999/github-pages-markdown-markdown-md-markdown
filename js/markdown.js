(function () {
  "use strict";

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(/<[^>]+>/g, "")
      .replace(/[^\p{Letter}\p{Number}\s_-]/gu, "")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "section";
  }

  function createRenderer() {
    if (!window.markdownit || !window.hljs || !window.DOMPurify) {
      throw new Error("Markdown 渲染依赖未能载入，请检查网络连接或 CDN 是否可访问。");
    }

    const md = window.markdownit({
      html: true,
      linkify: true,
      typographer: true,
      breaks: false,
      highlight(code, language) {
        if (language && window.hljs.getLanguage(language)) {
          return window.hljs.highlight(code, { language, ignoreIllegals: true }).value;
        }
        return window.hljs.highlightAuto(code).value;
      }
    });

    if (window.markdownitTaskLists) {
      md.use(window.markdownitTaskLists, { enabled: false, label: true, labelAfter: true });
    }
    const texmathPlugin = typeof texmath !== "undefined" ? texmath : window.texmath;
    if (texmathPlugin && window.katex) {
      md.use(texmathPlugin, { engine: window.katex, delimiters: "dollars" });
    }

    const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);
    md.renderer.rules.fence = function (tokens, index, options, env, self) {
      const language = tokens[index].info.trim().split(/\s+/)[0].toLowerCase();
      if (language === "mermaid") {
        return `<div class="mermaid">${escapeHtml(tokens[index].content)}</div>`;
      }
      return defaultFence(tokens, index, options, env, self);
    };

    md.core.ruler.push("viewer_heading_ids", (state) => {
      const used = new Map();
      for (let index = 0; index < state.tokens.length; index += 1) {
        const token = state.tokens[index];
        if (token.type !== "heading_open") continue;
        const text = state.tokens[index + 1]?.content || "section";
        const base = slugify(text);
        const count = used.get(base) || 0;
        used.set(base, count + 1);
        token.attrSet("id", count ? `${base}-${count}` : base);
      }
    });

    return md;
  }

  function isSpecialUrl(value) {
    return /^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(value);
  }

  function resolveAssetUrl(value, documentUrl, appBaseUrl) {
    if (!value || isSpecialUrl(value)) return value;
    try {
      if (value.startsWith("/")) return new URL(value.replace(/^\/+/, ""), appBaseUrl).href;
      return new URL(value, new URL("./", documentUrl)).href;
    } catch {
      return value;
    }
  }

  function pathInsideApp(url, appBaseUrl) {
    if (url.origin !== appBaseUrl.origin || !url.pathname.startsWith(appBaseUrl.pathname)) return null;
    return decodeURIComponent(url.pathname.slice(appBaseUrl.pathname.length));
  }

  function postProcess(container, documentUrl, appBaseUrl) {
    const usedIds = new Set();

    for (const heading of container.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
      let base = heading.id || slugify(heading.textContent || "section");
      let id = base;
      let suffix = 1;
      while (usedIds.has(id)) id = `${base}-${suffix++}`;
      heading.id = id;
      usedIds.add(id);
    }

    for (const element of container.querySelectorAll("img[src], source[src], video[src], audio[src]")) {
      element.setAttribute("src", resolveAssetUrl(element.getAttribute("src"), documentUrl, appBaseUrl));
      if (element.tagName === "IMG") element.setAttribute("loading", "lazy");
    }

    for (const video of container.querySelectorAll("video[poster]")) {
      video.setAttribute("poster", resolveAssetUrl(video.getAttribute("poster"), documentUrl, appBaseUrl));
    }

    for (const link of container.querySelectorAll("a[href]")) {
      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) continue;
      if (/^(?:mailto:|tel:)/i.test(rawHref)) continue;

      try {
        const resolved = rawHref.startsWith("/")
          ? new URL(rawHref.replace(/^\/+/, ""), appBaseUrl)
          : new URL(rawHref, new URL("./", documentUrl));
        const appPath = pathInsideApp(resolved, appBaseUrl);

        if (appPath && /\.md$/i.test(appPath)) {
          const viewerUrl = new URL(window.location.href);
          viewerUrl.search = "";
          viewerUrl.hash = resolved.hash;
          viewerUrl.searchParams.set("file", appPath);
          link.href = viewerUrl.href;
        } else {
          link.href = resolved.href;
          if (resolved.origin !== window.location.origin) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          }
        }
      } catch {
        // Keep malformed links visible instead of stopping the whole document.
      }
    }

    for (const table of container.querySelectorAll("table")) {
      if (table.parentElement?.classList.contains("table-wrap")) continue;
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrap";
      table.before(wrapper);
      wrapper.append(table);
    }

    for (const pre of container.querySelectorAll("pre")) {
      if (pre.closest(".mermaid")) continue;
      const code = pre.querySelector("code");
      if (!code) continue;
      code.classList.add("hljs");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy";
      button.textContent = "复制";
      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || "");
          button.textContent = "已复制";
          window.setTimeout(() => { button.textContent = "复制"; }, 1400);
        } catch {
          button.textContent = "复制失败";
        }
      });
      pre.append(button);
    }
  }

  function extractTitle(container, fallback) {
    const firstHeading = container.querySelector("h1");
    if (firstHeading) {
      const title = firstHeading.textContent.trim();
      firstHeading.remove();
      return title;
    }
    return fallback.replace(/\.md$/i, "").split("/").pop();
  }

  function getToc(container) {
    return [...container.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((heading) => ({
      id: heading.id,
      level: Number(heading.tagName.slice(1)),
      text: heading.textContent.trim()
    }));
  }

  async function renderMermaid(container, theme) {
    const nodes = [...container.querySelectorAll(".mermaid")];
    if (!nodes.length) return;
    if (!window.mermaid) throw new Error("Mermaid 依赖未能载入。");
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: theme === "dark" ? "dark" : "default",
      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    });
    await window.mermaid.run({ nodes, suppressErrors: false });
  }

  function renderMarkdown(markdown, container, documentUrl, appBaseUrl) {
    const md = createRenderer();
    const rendered = md.render(markdown);
    container.innerHTML = window.DOMPurify.sanitize(rendered, {
      ADD_ATTR: ["target", "rel", "checked", "disabled"],
      ADD_TAGS: ["iframe"]
    });
    postProcess(container, documentUrl, appBaseUrl);
    return {
      title: extractTitle(container, decodeURIComponent(documentUrl.pathname)),
      toc: getToc(container)
    };
  }

  window.MarkdownViewer = window.MarkdownViewer || {};
  Object.assign(window.MarkdownViewer, { renderMarkdown, renderMermaid });
})();
