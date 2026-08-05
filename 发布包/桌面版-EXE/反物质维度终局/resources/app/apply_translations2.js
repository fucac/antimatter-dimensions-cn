const fs = require('fs');
const newsPath = 'c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/src/core/secret-formula/news.js';
const transPath = 'c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/translations2.txt';

let content = fs.readFileSync(newsPath, 'utf8');
const raw = fs.readFileSync(transPath, 'utf8');

// Apply to section starting from id: "ai636" (line 10002)
const marker = 'id: "ai636"';
const idx = content.indexOf(marker);
if (idx === -1) { console.log('Marker not found'); process.exit(1); }
const lineStart = content.lastIndexOf('\n', idx) + 1;
const before = content.substring(0, lineStart);
let after = content.substring(lineStart);

const lines = raw.split('\n');
let replaced = 0;
let notFound = [];

for (const line of lines) {
  if (line.startsWith('#') || line.trim() === '') continue;
  const sep = line.indexOf('|||');
  if (sep === -1) continue;
  const old = line.substring(0, sep);
  const neu = line.substring(sep + 3);
  // Also try escaped-quote version (file uses \" inside double-quoted JS strings)
  const oldEsc = old.replace(/"/g, '\\"');
  const neuEsc = neu.replace(/"/g, '\\"');
  if (after.includes(old)) {
    after = after.replace(old, () => neu);
    replaced++;
  } else if (after.includes(oldEsc)) {
    after = after.replace(oldEsc, () => neuEsc);
    replaced++;
  } else {
    notFound.push(old.substring(0, 60));
  }
}

fs.writeFileSync(newsPath, before + after, 'utf8');
console.log('Replaced:', replaced);
console.log('Not found:', notFound.length);
notFound.forEach(s => console.log('  NF:', s));
