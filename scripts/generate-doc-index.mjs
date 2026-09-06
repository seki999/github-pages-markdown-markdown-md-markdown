import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(projectRoot, "docs");
const outputPath = path.join(docsRoot, "index.json");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) files.push(absolute);
  }
  return files;
}

function titleFrom(markdown, filePath) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match?.[1].replace(/[*_`~]/g, "").trim() || path.basename(filePath, path.extname(filePath));
}

const markdownFiles = await walk(docsRoot);
const files = await Promise.all(markdownFiles.map(async (absolute) => {
  const markdown = await fs.readFile(absolute, "utf8");
  const relative = path.relative(projectRoot, absolute).split(path.sep).join("/");
  return { path: relative, title: titleFrom(markdown, absolute) };
}));

files.sort((a, b) => {
  if (a.path === "docs/README.md") return -1;
  if (b.path === "docs/README.md") return 1;
  return a.path.localeCompare(b.path, "zh-CN", { numeric: true });
});

const manifest = {
  projectName: "Markdown 文档中心",
  files
};

await fs.writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Generated docs/index.json with ${files.length} Markdown files.`);
