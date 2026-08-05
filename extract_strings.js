const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'core', 'secret-formula', 'achievements', 'normal-achievements.js');

const content = fs.readFileSync(filepath, 'utf-8');

// Extract all template literal strings (backtick strings)
const templateLiterals = new Set();
const regex = /`([^`]+)`/g;
let match;
while ((match = regex.exec(content)) !== null) {
  templateLiterals.add(match[1]);
}

// Sort and print them
const sorted = Array.from(templateLiterals).sort();
for (const s of sorted) {
  console.log(s);
}