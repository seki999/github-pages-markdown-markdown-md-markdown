# 多层目录与相对图片

当前文件位于 `docs/guides/relative-paths.md`。

## 同级子目录图片

下图的 Markdown 写法是：

```md
![嵌套路径示例](./images/nested-example.svg)
```

![嵌套路径示例](./images/nested-example.svg)

阅读器会以**当前 Markdown 所在目录** `docs/guides/` 为基准解析它，因此最终请求的是 `docs/guides/images/nested-example.svg`。

## 上级目录文档链接

相对 Markdown 链接也会转换为阅读器直链：[返回文档首页](../README.md)。
