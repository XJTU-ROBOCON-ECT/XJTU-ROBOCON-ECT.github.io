import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

const root = resolve('dist');

if (!existsSync(root)) {
  console.error('dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath);
  }
};
walk(root);

const failures = [];
const attributePattern = /(?:href|src)=(?:"([^"]+)"|'([^']+)')/g;

for (const file of htmlFiles) {
  const markup = readFileSync(file, 'utf8');
  const publicFile = `/${relative(root, file).split(sep).join('/')}`;
  const pagePath = publicFile.endsWith('/index.html')
    ? publicFile.slice(0, -'index.html'.length)
    : publicFile;

  for (const match of markup.matchAll(attributePattern)) {
    const value = match[1] ?? match[2];
    if (!value || /^(?:https?:|mailto:|tel:|data:|javascript:|#|\/\/)/.test(value)) continue;

    const url = new URL(value, `https://local.invalid${pagePath}`);
    const pathname = decodeURIComponent(url.pathname);
    const diskPath = join(root, pathname.replace(/^\/+/, ''));
    const candidates = [diskPath, `${diskPath}.html`, join(diskPath, 'index.html')];

    if (!candidates.some((candidate) => existsSync(candidate))) {
      failures.push(`${publicFile}: ${value}`);
    }
  }
}

if (failures.length) {
  console.error(`Found ${failures.length} broken local link(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: no broken local links.`);
