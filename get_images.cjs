const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function run() {
  const url2 = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=Mooncake&gsrlimit=50&prop=imageinfo&iiprop=url&format=json';
  const data2 = await fetch(url2);
  if (data2.query && data2.query.pages) {
    const urls2 = Object.values(data2.query.pages).map(p => p.imageinfo ? p.imageinfo[0].url : null).filter(Boolean);
    console.log("All Mooncakes:\n" + urls2.join('\n'));
  }
}

run();
