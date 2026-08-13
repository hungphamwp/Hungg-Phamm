import urllib.request
import re
req = urllib.request.Request(
    'https://www.pexels.com/search/mooncake/',
    headers={'User-Agent': 'Mozilla/5.0'}
)
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    urls = re.findall(r'https://images\.pexels\.com/photos/\d+/pexels-photo-\d+\.jpeg', html)
    print(list(set(urls))[:15])
except Exception as e:
    print(e)
