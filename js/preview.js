(function () {
  "use strict";

  const APP_BASE_URL = new URL("./", window.location.href);
  const PREVIEW_DOCUMENT_URL = new URL("docs/pasted-preview.md", APP_BASE_URL);
  const input = document.getElementById("markdown-input");
  const content = document.getElementById("preview-content");
  const empty = document.getElementById("preview-empty");
  const titleWrap = document.getElementById("preview-title-wrap");
  const title = document.getElementById("preview-title");
  const count = document.getElementById("editor-count");
  const status = document.getElementById("render-status");
  const clearButton = document.getElementById("clear-button");
  const themeButton = document.getElementById("theme-button");
  const themeIcon = document.getElementById("theme-icon");
  const themeLabel = document.getElementById("theme-label");
  let renderTimer = 0;
  let renderVersion = 0;

  setupTheme();
  input.addEventListener("input", scheduleRender);
  input.addEventListener("keydown", handleTabKey);
  clearButton.addEventListener("click", () => {
    input.value = "";
    input.focus();
    renderPreview();
  });
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next, true);
    renderPreview();
  });

  function scheduleRender() {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(renderPreview, 180);
    updateCount();
  }

  async function renderPreview() {
    const version = ++renderVersion;
    const markdown = input.value;
    updateCount();
    status.classList.remove("render-error");

    if (!markdown.trim()) {
      empty.hidden = false;
      titleWrap.hidden = true;
      content.replaceChildren();
      status.textContent = "等待输入";
      return;
    }

    try {
      const result = window.MarkdownViewer.renderMarkdown(
        markdown,
        content,
        PREVIEW_DOCUMENT_URL,
        APP_BASE_URL
      );
      if (version !== renderVersion) return;
      empty.hidden = true;
      titleWrap.hidden = false;
      title.textContent = result.title;
      status.textContent = "正在渲染图表…";
      await window.MarkdownViewer.renderMermaid(
        content,
        document.documentElement.dataset.theme
      );
      if (version === renderVersion) status.textContent = "预览已更新";
    } catch (error) {
      if (version !== renderVersion) return;
      status.textContent = `渲染失败：${error.message}`;
      status.classList.add("render-error");
      console.error(error);
    }
  }

  function updateCount() {
    const characters = input.value.length;
    const lines = characters ? input.value.split("\n").length : 0;
    count.textContent = `${characters} 个字符 · ${lines} 行`;
  }

  function handleTabKey(event) {
    if (event.key !== "Tab") return;
    event.preventDefault();
    const start = input.selectionStart;
    const end = input.selectionEnd;
    input.setRangeText("  ", start, end, "end");
    scheduleRender();
  }

  function setupTheme() {
    const saved = localStorage.getItem("markdown-viewer-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(saved === "dark" || saved === "light" ? saved : preferred, false);
  }

  function applyTheme(theme, persist) {
    document.documentElement.dataset.theme = theme;
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    themeLabel.textContent = theme === "dark" ? "浅色" : "深色";
    themeButton.setAttribute("aria-label", `切换${theme === "dark" ? "浅色" : "深色"}模式`);
    document.getElementById("highlight-theme-light").disabled = theme === "dark";
    document.getElementById("highlight-theme-dark").disabled = theme !== "dark";
    if (persist) localStorage.setItem("markdown-viewer-theme", theme);
  }
})();
