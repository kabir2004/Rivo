import fs from 'fs';
import path from 'path';
import https from 'https';

const get = (url) => new Promise((resolve, reject) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
      get(res.headers.location).then(resolve).catch(reject);
      return;
    }
    if (res.statusCode !== 200) {
      reject(new Error(`Failed with ${res.statusCode}`));
      return;
    }
    const data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => resolve(Buffer.concat(data)));
  }).on('error', reject);
});

const svglBase = 'https://raw.githubusercontent.com/pheralb/svgl/main/static/library/';
const horseBase = 'https://icon.horse/icon/';

const logos = {
  // SVGL (Best quality Vectors)
  'google.svg': svglBase + 'google.svg',
  'stripe.svg': svglBase + 'stripe.svg',
  'vercel.svg': svglBase + 'vercel.svg',
  'notion.svg': svglBase + 'notion.svg',
  'openai.svg': svglBase + 'openai.svg',
  'linear.svg': svglBase + 'linear.svg',
  'datadog.svg': svglBase + 'datadog.svg',
  'anthropic.svg': svglBase + 'anthropic.svg',
  
  // High-Res Favicons (Icon Horse fallback to bypass Clearbit DNS block)
  'janestreet.png': horseBase + 'janestreet.com',
  'citadel.png': horseBase + 'citadel.com',
  'rbc.png': horseBase + 'rbc.com',
  'cibc.png': horseBase + 'cibc.com',
  'td.png': horseBase + 'td.com',
  'scale.png': horseBase + 'scale.com',
  'f1.png': horseBase + 'formula1.com',
  'deel.png': horseBase + 'deel.com',
  'ramp.png': horseBase + 'ramp.com',
};

const dir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadAll() {
  for (const [filename, url] of Object.entries(logos)) {
    try {
      if (fs.existsSync(path.join(dir, filename))) {
        console.log(`Skipped ${filename} (exists)`);
        continue;
      }
      console.log(`Fetching ${filename}...`);
      const buffer = await get(url);
      fs.writeFileSync(path.join(dir, filename), buffer);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Error on ${filename}:`, e.message);
    }
  }
}

downloadAll();
