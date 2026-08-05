const fs = require('fs');
const newsPath = 'c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/src/core/secret-formula/news.js';
let content = fs.readFileSync(newsPath, 'utf8');

// Fix ai757: escape inner quotes
const old1 = '问题是，我可以用一只手数出我写过多少次"我可以用一只手数出我写过多少次"的次数';
const new1 = '问题是，我可以用一只手数出我写过多少次\\"我可以用一只手数出我写过多少次\\"的次数';
if (content.includes(old1)) {
  content = content.replace(old1, new1);
  console.log('Fixed ai757');
} else {
  console.log('ai757 not found');
}

// Fix ai918: escape inner quotes
const old2 = '转到"帮助"选项卡';
const new2 = '转到\\"帮助\\"选项卡';
if (content.includes(old2)) {
  content = content.replace(old2, new2);
  console.log('Fixed ai918');
} else {
  console.log('ai918 not found');
}

fs.writeFileSync(newsPath, content, 'utf8');
console.log('Done');
