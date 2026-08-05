const fs = require('fs');
const path = require('path');

const newsFile = path.join(__dirname, 'src', 'core', 'secret-formula', 'news.js');

// Process all data files
const dataFiles = [];
for (let i = 1; i <= 20; i++) {
  const df = path.join(__dirname, `translate_data${i}.txt`);
  if (fs.existsSync(df)) dataFiles.push(df);
}

// Read file and normalize to LF for matching
let content = fs.readFileSync(newsFile, 'utf8');
const hasCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

let totalApplied = 0;
let totalAlready = 0;
let totalFailed = 0;
let allFailed = [];

for (const dataFile of dataFiles) {
  const data = fs.readFileSync(dataFile, 'utf8').replace(/\r\n/g, '\n');
  const blocks = data.split('<<<END>>>');

  for (const block of blocks) {
    const oldMatch = block.match(/<<<OLD>>>\s*([\s\S]*?)\s*<<<NEW>>>\s*([\s\S]*?)\s*$/);
    if (!oldMatch) continue;
    const oldText = oldMatch[1];
    const newText = oldMatch[2];

    if (content.includes(oldText)) {
      content = content.split(oldText).join(newText);
      totalApplied++;
    } else {
      if (content.includes(newText)) {
        totalAlready++;
      } else {
        totalFailed++;
        allFailed.push(oldText.substring(0, 100).replace(/\n/g, ' | '));
      }
    }
  }
}

// Convert back to CRLF if original had CRLF
if (hasCRLF) {
  content = content.replace(/\n/g, '\r\n');
}

fs.writeFileSync(newsFile, content, 'utf8');
console.log(`Applied: ${totalApplied}, Already translated: ${totalAlready}, Failed: ${totalFailed}`);
if (allFailed.length > 0) {
  console.log('Failed replacements:');
  allFailed.forEach(f => console.log('  ' + f));
}
