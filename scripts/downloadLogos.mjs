import fs from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const logos = {
  // SVG Full Wordmarks (from Wikimedia)
  'google-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'stripe-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
  'linear-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Linear_logo.svg',
  'vercel-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg',
  'notion-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
  'figma-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  'shopify-full.svg': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
  
  // Icon Logos (From Wikimedia) - for tiles
  'google-icon.svg': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',

  // Clearbit Icons - downloaded directly from my server env
  'cursor.png': 'https://logo.clearbit.com/cursor.com',
  'formula1.png': 'https://logo.clearbit.com/formula1.com',
  'deel.png': 'https://logo.clearbit.com/deel.com',
  'ramp.png': 'https://logo.clearbit.com/ramp.com',
  'jane-street.png': 'https://logo.clearbit.com/janestreet.com',
  'citadel.png': 'https://logo.clearbit.com/citadel.com',
  'rbc.png': 'https://logo.clearbit.com/rbc.com',
  'cibc.png': 'https://logo.clearbit.com/cibc.com',
  'td.png': 'https://logo.clearbit.com/td.com',
  'openai.png': 'https://logo.clearbit.com/openai.com',
  'scale.png': 'https://logo.clearbit.com/scale.com',
  'datadog.png': 'https://logo.clearbit.com/datadoghq.com',
  'anthropic.png': 'https://logo.clearbit.com/anthropic.com',
  'stripe-icon.png': 'https://logo.clearbit.com/stripe.com',
  'linear-icon.png': 'https://logo.clearbit.com/linear.app',
  'vercel-icon.png': 'https://logo.clearbit.com/vercel.com',
  'notion-icon.png': 'https://logo.clearbit.com/notion.so',
};

const dir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const [filename, url] of Object.entries(logos)) {
    try {
      console.log(`Downloading ${filename}...`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(dir, filename), buffer);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed ${filename}: ${e.message}`);
    }
  }
}

download();
