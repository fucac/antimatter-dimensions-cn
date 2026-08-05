const fs = require('fs');
let content = fs.readFileSync('c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/src/core/secret-formula/news.js', 'utf8');
content = content.replace(/\r\n/g, '\n');

const find = `<span style='color: cyan'>Hello, I am Living_Person eight, also known as Life.</span><span style='color: red'>
        Hey, I'm SupersonicSeven, also known as Overlord.</span><span style='color: blue'>Hi, I am MidnightLight, also
        known as Midnight.</span>`;

console.log('Found:', content.includes(find));
console.log('Find length:', find.length);
console.log('Find first 100:', JSON.stringify(find.substring(0, 100)));

// Also try finding just the first line
const findShort = `<span style='color: cyan'>Hello, I am Living_Person eight`;
console.log('Short found:', content.includes(findShort));

// Find what's actually in the file around this area
const idx = content.indexOf('Hello, I am Living_Person eight');
if (idx >= 0) {
  console.log('Context around match:', JSON.stringify(content.substring(idx - 20, idx + 200)));
}
