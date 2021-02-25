const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');


const PUBLIC_DIR = path.join(__dirname, "../public");

function filenameFromUrl(url) {
  return url.substring(url.lastIndexOf('/') + 1);
}

async function saveFromUrlToPublicDir(url) {
  const filename = filenameFromUrl(url);
  const destination = path.join(PUBLIC_DIR, filename);
  const response = await fetch(url);
  const buffer = await response.buffer();
  await fs.promises.writeFile(destination, buffer);
  return filename;
}

module.exports = {
  saveFromUrlToPublicDir,
};