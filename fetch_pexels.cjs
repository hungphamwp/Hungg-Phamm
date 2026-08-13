const https = require('https');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const html = await fetchHTML('https://www.pexels.com/search/mooncake/');
  const matches = [...html.matchAll(/src="(https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg\?auto=compress&cs=tinysrgb&w=800)"/g)];
  console.log("Mooncake images:", matches.map(m => m[1]).slice(0, 5));
  
  const teaHtml = await fetchHTML('https://www.pexels.com/search/pastry%20tea%20dark/');
  const teaMatches = [...teaHtml.matchAll(/src="(https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg\?auto=compress&cs=tinysrgb&w=800)"/g)];
  console.log("Pastry images:", teaMatches.map(m => m[1]).slice(0, 5));
}
run();
