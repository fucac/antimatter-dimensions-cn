/**
 * Workaround for tslib 2.3.1 missing tslib.es6.mjs.
 *
 * tslib 2.3.1's package.json only ships tslib.es6.js (ESM) but webpack's
 * resolve.extensions (vue-cli default includes .mjs) may try to resolve
 * tslib.es6.mjs, causing ENOENT build errors. This script copies the ESM
 * file to a .mjs counterpart so resolution succeeds.
 *
 * Safe: content is identical, only the extension differs. Runs on postinstall.
 */
const fs = require("fs");
const path = require("path");

const tslibDir = path.join(__dirname, "..", "node_modules", "tslib");
const src = path.join(tslibDir, "tslib.es6.js");
const dst = path.join(tslibDir, "tslib.es6.mjs");

if (!fs.existsSync(src)) {
  // tslib not installed (eg. fresh checkout before npm install); skip silently.
  process.exit(0);
}

if (fs.existsSync(dst)) {
  // Already patched. Ensure content matches to avoid stale copies.
  const srcContent = fs.readFileSync(src, "utf8");
  const dstContent = fs.readFileSync(dst, "utf8");
  if (srcContent === dstContent) process.exit(0);
}

try {
  fs.copyFileSync(src, dst);
  console.log("[fix-tslib] Created node_modules/tslib/tslib.es6.mjs");
} catch (e) {
  console.warn(`[fix-tslib] Failed to create tslib.es6.mjs: ${e.message}`);
}
