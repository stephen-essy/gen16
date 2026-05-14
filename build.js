import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple build script for static HTML
// For a static site, we'll just bundle the analytics script
console.log('Build script for static HTML - no bundling needed');
console.log('Analytics will be injected via the @vercel/analytics package');
console.log('Build complete!');
