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
  const html = await fetchHTML('https://unsplash.com/s/photos/mooncake');
  const matches = [...html.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?ixlib=rb-4\.0\.3&auto=format&fit=crop/g)];
  // Get unique
  const unique = [...new Set(matches.map(m => m[0]))];
  console.log("Unsplash mooncake:", unique.slice(0, 5));
}
run();
