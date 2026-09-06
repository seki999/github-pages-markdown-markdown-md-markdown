(function () {
  "use strict";

  function buildTree(files) {
    const root = { name: "", folders: new Map(), files: [] };

    for (const file of files) {
      const parts = file.path.split("/");
      const fileName = parts.pop();
      let node = root;

      for (const folderName of parts) {
        if (!node.folders.has(folderName)) {
          node.folders.set(folderName, { name: folderName, folders: new Map(), files: [] });
        }
        node = node.folders.get(folderName);
      }

      node.files.push({ ...file, fileName });
    }

    return root;
  }

  function renderTree(container, files, activePath, onSelect) {
    const tree = buildTree(files);
    container.replaceChildren(createList(tree, activePath, onSelect, true));
  }

  function createList(node, activePath, onSelect, isRoot) {
    const list = document.createElement("ul");
    list.className = "tree-list";

    const folders = [...node.folders.values()].sort((a, b) =>
      a.name.localeCompare(b.name, "zh-CN", { numeric: true })
    );

    for (const folder of folders) {
      const item = document.createElement("li");
      item.className = "tree-folder";

      const button = document.createElement("button");
      button.className = "folder-label";
      button.type = "button";
      button.textContent = folder.name;
      button.setAttribute("aria-expanded", "true");
      button.addEventListener("click", () => {
        const collapsed = item.classList.toggle("collapsed");
        button.setAttribute("aria-expanded", String(!collapsed));
      });

      item.append(button, createList(folder, activePath, onSelect, false));
      list.append(item);
    }

    const sortedFiles = [...node.files].sort((a, b) =>
      a.fileName.localeCompare(b.fileName, "zh-CN", { numeric: true })
    );

    for (const file of sortedFiles) {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.className = "file-button";
      button.type = "button";
      button.textContent = file.title || file.fileName.replace(/\.md$/i, "");
      button.title = file.path;
      button.dataset.path = file.path;
      if (file.path === activePath) button.setAttribute("aria-current", "page");
      button.addEventListener("click", () => onSelect(file.path));
      item.append(button);
      list.append(item);
    }

    if (isRoot && list.children.length === 0) {
      const empty = document.createElement("li");
      empty.className = "search-empty";
      empty.textContent = "尚无 Markdown 文档";
      list.append(empty);
    }

    return list;
  }

  window.MarkdownViewer = window.MarkdownViewer || {};
  window.MarkdownViewer.renderTree = renderTree;
})();
