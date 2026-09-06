# Markdown 完整语法示例

这篇文档用于检查阅读器的常用 Markdown 渲染能力。它包含**粗体**、*斜体*、~~删除线~~、[外部链接](https://pages.github.com/)与 `inline code`。

## 标题层级

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

标题会自动出现在本页目录中，并生成可以直接跳转的内部锚点。试试跳到[表格章节](#表格)。

## 引用与列表

> 好的文档不仅准确，也应该容易浏览、搜索和分享。

无序列表：

- Markdown 内容与阅读器代码分离
- 文档可以放在多层文件夹中
  - 子列表也能正确显示
- 所有路径兼容 GitHub Pages 仓库子目录

有序列表：

1. 新建 Markdown 文件
2. 添加所需图片
3. 推送到 GitHub
4. 等待 Pages 自动发布

任务列表：

- [x] Markdown 渲染
- [x] 相对图片路径
- [x] 深色模式
- [ ] 添加你自己的文档

## 表格

| 功能 | 状态 | 说明 |
| --- | :---: | --- |
| 文档树 | ✅ | 支持多级目录 |
| 正文搜索 | ✅ | 输入至少两个字符 |
| 分享链接 | ✅ | 使用 `?file=docs/example.md` |

## 图片与 GIF

下面的图片使用相对于本文件的路径 `./images/reader-flow.svg`：

![Markdown 阅读流程](./images/reader-flow.svg)

普通 PNG、JPG、WebP 与 GIF 使用完全相同的写法；浏览器会自动播放 GIF。

## 数学公式

行内公式：质能方程 $E = mc^2$。

块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## 常用 HTML

<details>
  <summary>点击展开 HTML details 标签</summary>
  <p>Markdown 中的常用 HTML 标签会保留；危险脚本和事件属性会被清理。</p>
</details>

<mark>这段文字使用 HTML mark 标签高亮。</mark>

---

继续阅读：[Mermaid 图表示例](./mermaid-demo.md) · [代码高亮示例](./code-demo.md)
