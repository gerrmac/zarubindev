import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "content.yaml");
const targetPath = resolve(root, "src/data/content.generated.js");

const requiredKeys = [
  "about",
  "nav",
  "roles",
  "stats",
  "features",
  "skills",
  "projects",
  "contacts",
  "hero",
];

const data = parse(readFileSync(sourcePath, "utf8"));

for (const key of requiredKeys) {
  if (data[key] == null) {
    throw new Error(`content.yaml: missing required section "${key}"`);
  }
}

const codeFile = data.hero.code.file;
const codeLines = data.hero.code.lines.map((tokens) => ({ tokens }));
const quote = (value) => JSON.stringify(value, null, 2);

const out = [
  `export const about = ${quote(data.about)};`,
  `export const nav = ${quote(data.nav)};`,
  `export const roles = ${quote(data.roles)};`,
  `export const stats = ${quote(data.stats)};`,
  `export const features = ${quote(data.features)};`,
  `export const skillGroups = ${quote(data.skills)};`,
  `export const projects = ${quote(data.projects)};`,
  `export const contacts = ${quote(data.contacts)};`,
  `export const codeFile = ${quote(codeFile)};`,
  `export const codeLines = ${quote(codeLines)};`,
].join("\n\n");

writeFileSync(targetPath, `${out}\n`);
console.log(`Generated ${targetPath} from content.yaml`);
