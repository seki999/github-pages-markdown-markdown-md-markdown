(function () {
  "use strict";

  const APP_BASE_URL = new URL("./", window.location.href);
  const MANIFEST_URL = new URL("docs/index.json", APP_BASE_URL);
  const state = {
    manifest: null,
    currentPath: null,
    currentMarkdown: "",
    contentCache: new Map(),
    searchVersion: 0,
    headingObserver: null
  };

  const elements = {};

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    for (const id of [
      "project-name", "current-file", "theme-button", "theme-icon", "theme-label",
      "menu-button", "sidebar", "sidebar-backdrop", "search-input", "search-hint",
      "file-tree", "search-results", "document-count", "document-state", "document-card",
      "document-path", "document-title", "markdown-content", "toc-panel", "toc-list",
      "mobile-toc", "mobile-toc-list", "back-to-top"
    ]) elements[toCamel(id)] = document.getElementById(id);

    setupTheme();
    setupEvents();

    try {
      const response = await fetch(MANIFEST_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`无法读取文档索引（HTTP ${response.status}）`);
      state.manifest = await response.json();
      state.manifest.files = (state.manifest.files || []).filter((file) => isSafeMarkdownPath(file.path));

      const projectName = state.manifest.projectName || "Markdown 文档中心";
      elements.projectName.textContent = projectName;
      document.title = projectName;
      elements.documentCount.textContent = state.manifest.files.length;

      if (!state.manifest.files.length) throw new Error("文档索引为空。请在 docs/ 中加入 Markdown 后重新生成索引。");
      const requested = new URLSearchParams(window.location.search).get("file");
      const initialPath = requested && state.manifest.files.some((file) => file.path === requested)
        ? requested
        : state.manifest.files[0].path;

      window.MarkdownViewer.renderTree(elements.fileTree, state.manifest.files, initialPath, selectDocument);
      await loadDocument(initialPath, { updateUrl: Boolean(requested && requested !== initialPath), replace: true });
    } catch (error) {
      showError("阅读器启动失败", error.message);
      console.error(error);
    }
  }

  function toCamel(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  function isSafeMarkdownPath(path) {
    return typeof path === "string" && path.startsWith("docs/") && /\.md$/i.test(path) && !path.split("/").includes("..");
  }

  function encodePath(path) {
    return path.split("/").map(encodeURIComponent).join("/");
  }

  function setupEvents() {
    elements.themeButton.addEventListener("click", toggleTheme);
    elements.menuButton.addEventListener("click", () => setSidebarOpen(!elements.sidebar.classList.contains("open")));
    elements.sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));
    elements.searchInput.addEventListener("input", handleSearch);
    elements.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => elements.backToTop.classList.toggle("visible", window.scrollY > 500), { passive: true });
    window.addEventListener("popstate", () => {
      const path = new URLSearchParams(window.location.search).get("file");
      if (path && path !== state.currentPath && state.manifest?.files.some((file) => file.path === path)) {
        loadDocument(path, { updateUrl: false });
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) {
        event.preventDefault();
        elements.searchInput.focus();
      }
      if (event.key === "Escape") setSidebarOpen(false);
    });
  }

  function setupTheme() {
    const saved = localStorage.getItem("markdown-viewer-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(saved === "dark" || saved === "light" ? saved : preferred, false);
  }

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next, true);
    if (state.currentMarkdown && state.currentPath) renderCurrentMarkdown();
  }

  function applyTheme(theme, persist) {
    document.documentElement.dataset.theme = theme;
    elements.themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    elements.themeLabel.textContent = theme === "dark" ? "浅色" : "深色";
    elements.themeButton.setAttribute("aria-label", `切换${theme === "dark" ? "浅色" : "深色"}模式`);
    document.getElementById("highlight-theme-light").disabled = theme === "dark";
    document.getElementById("highlight-theme-dark").disabled = theme !== "dark";
    if (persist) localStorage.setItem("markdown-viewer-theme", theme);
  }

  function setSidebarOpen(open) {
    elements.sidebar.classList.toggle("open", open);
    elements.sidebarBackdrop.hidden = !open;
    elements.menuButton.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  async function selectDocument(path) {
    if (path === state.currentPath) {
      setSidebarOpen(false);
      return;
    }
    await loadDocument(path, { updateUrl: true });
    setSidebarOpen(false);
  }

  async function fetchMarkdown(path) {
    if (state.contentCache.has(path)) return state.contentCache.get(path);
    const url = new URL(encodePath(path), APP_BASE_URL);
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`无法加载 ${path}（HTTP ${response.status}）`);
    const markdown = await response.text();
    state.contentCache.set(path, markdown);
    return markdown;
  }

  async function loadDocument(path, options = {}) {
    showLoading(path);
    try {
      const markdown = await fetchMarkdown(path);
      state.currentPath = path;
      state.currentMarkdown = markdown;
      if (options.updateUrl) updateUrl(path, options.replace);
      elements.documentCard.hidden = false;
      elements.documentState.hidden = true;
      await renderCurrentMarkdown();
      window.MarkdownViewer.renderTree(elements.fileTree, state.manifest.files, path, selectDocument);
      elements.currentFile.textContent = path;
      elements.documentPath.textContent = path;
      document.title = `${elements.documentTitle.textContent} · ${state.manifest.projectName}`;
      requestAnimationFrame(scrollToRequestedAnchor);
    } catch (error) {
      showError("文档加载失败", error.message);
      console.error(error);
    }
  }

  async function renderCurrentMarkdown() {
    const documentUrl = new URL(encodePath(state.currentPath), APP_BASE_URL);
    const result = window.MarkdownViewer.renderMarkdown(
      state.currentMarkdown,
      elements.markdownContent,
      documentUrl,
      APP_BASE_URL
    );
    elements.documentTitle.textContent = result.title;
    renderToc(result.toc);
    try {
      await window.MarkdownViewer.renderMermaid(elements.markdownContent, document.documentElement.dataset.theme);
    } catch (error) {
      console.error("Mermaid rendering failed:", error);
    }
  }

  function updateUrl(path, replace = false) {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    url.searchParams.set("file", path);
    window.history[replace ? "replaceState" : "pushState"]({ path }, "", url);
  }

  function scrollToRequestedAnchor() {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    target?.scrollIntoView();
  }

  function showLoading(path) {
    elements.documentCard.hidden = true;
    elements.documentState.hidden = false;
    elements.documentState.className = "document-state";
    elements.documentState.innerHTML = '<div class="spinner" aria-hidden="true"></div><p>正在载入文档…</p>';
    elements.currentFile.textContent = path;
  }

  function showError(title, message) {
    elements.documentCard.hidden = true;
    elements.documentState.hidden = false;
    elements.documentState.className = "document-state error";
    elements.documentState.replaceChildren();
    const heading = document.createElement("h2");
    const paragraph = document.createElement("p");
    heading.textContent = title;
    paragraph.textContent = message;
    elements.documentState.append(heading, paragraph);
  }

  function renderToc(items) {
    for (const container of [elements.tocList, elements.mobileTocList]) {
      container.replaceChildren();
      if (!items.length) {
        const empty = document.createElement("span");
        empty.className = "toc-empty";
        empty.textContent = "此文档没有标题";
        container.append(empty);
        continue;
      }
      for (const item of items) {
        const link = document.createElement("a");
        link.className = `toc-link toc-level-${item.level}`;
        link.href = `#${encodeURIComponent(item.id)}`;
        link.dataset.headingId = item.id;
        link.textContent = item.text;
        container.append(link);
      }
    }
    elements.mobileToc.hidden = items.length === 0;
    observeHeadings(items);
  }

  function observeHeadings(items) {
    state.headingObserver?.disconnect();
    if (!items.length || !("IntersectionObserver" in window)) return;
    state.headingObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const id = visible[0].target.id;
      document.querySelectorAll(".toc-link").forEach((link) => link.classList.toggle("active", link.dataset.headingId === id));
    }, { rootMargin: `-${58 + 16}px 0px -72% 0px`, threshold: 0 });
    for (const item of items) {
      const heading = document.getElementById(item.id);
      if (heading) state.headingObserver.observe(heading);
    }
  }

  async function handleSearch() {
    const query = elements.searchInput.value.trim();
    const version = ++state.searchVersion;
    if (!query) {
      elements.fileTree.hidden = false;
      elements.searchResults.hidden = true;
      elements.searchHint.textContent = "输入至少 2 个字符可搜索正文";
      return;
    }

    elements.fileTree.hidden = true;
    elements.searchResults.hidden = false;
    const normalized = query.toLocaleLowerCase();
    let results = state.manifest.files
      .filter((file) => `${file.title} ${file.path}`.toLocaleLowerCase().includes(normalized))
      .map((file) => ({ file, snippet: file.path }));

    if (query.length >= 2) {
      elements.searchHint.textContent = "正在搜索正文…";
      const documents = await Promise.all(state.manifest.files.map(async (file) => {
        try { return { file, text: await fetchMarkdown(file.path) }; }
        catch { return { file, text: "" }; }
      }));
      if (version !== state.searchVersion) return;
      results = documents
        .filter(({ file, text }) => `${file.title} ${file.path} ${text}`.toLocaleLowerCase().includes(normalized))
        .map(({ file, text }) => ({ file, snippet: makeSnippet(text, normalized) || file.path }));
    }

    renderSearchResults(results);
    elements.searchHint.textContent = `找到 ${results.length} 篇文档`;
  }

  function makeSnippet(text, query) {
    const plain = text
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/[#>*_`\[\]()|-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const index = plain.toLocaleLowerCase().indexOf(query);
    if (index < 0) return "";
    const start = Math.max(0, index - 35);
    const end = Math.min(plain.length, index + query.length + 65);
    return `${start ? "…" : ""}${plain.slice(start, end)}${end < plain.length ? "…" : ""}`;
  }

  function renderSearchResults(results) {
    elements.searchResults.replaceChildren();
    if (!results.length) {
      const empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent = "没有匹配的文档";
      elements.searchResults.append(empty);
      return;
    }
    for (const { file, snippet } of results) {
      const button = document.createElement("button");
      button.className = "search-result";
      button.type = "button";
      const title = document.createElement("strong");
      const detail = document.createElement("span");
      title.textContent = file.title;
      detail.textContent = snippet;
      button.append(title, detail);
      button.addEventListener("click", () => selectDocument(file.path));
      elements.searchResults.append(button);
    }
  }
})();
