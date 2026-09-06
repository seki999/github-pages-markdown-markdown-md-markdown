# 代码高亮示例

代码块由 highlight.js 自动高亮。将鼠标移动到代码块上，可以使用右上角的复制按钮。

## Python

```python
from pathlib import Path


def markdown_files(root: Path) -> list[Path]:
    """Return every Markdown file below root."""
    return sorted(root.rglob("*.md"))


for file in markdown_files(Path("docs")):
    print(file.as_posix())
```

## JavaScript

```javascript
async function loadMarkdown(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.text();
}
```

## HTML

```html
<article class="markdown-body">
  <h1>Hello, Markdown!</h1>
</article>
```

## CSS

```css
.markdown-body {
  max-width: 920px;
  line-height: 1.7;
}
```

## JSON

```json
{
  "projectName": "Markdown 文档中心",
  "files": [{ "path": "docs/README.md", "title": "首页" }]
}
```
