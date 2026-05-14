# Gen16 Innovative Solutions

Excavator Rental Services website with Vercel Web Analytics integration.

## Features

- Static HTML website
- Vercel Web Analytics integration
- Responsive design
- Modern UI with custom styling

## Vercel Web Analytics

This project is configured with Vercel Web Analytics to track page views and user interactions.

### Setup

The analytics are configured using the latest Vercel Analytics approach:

1. **Package Installation**: `@vercel/analytics` package is installed via npm
2. **Script Integration**: Analytics script is injected in the HTML `<head>` section
3. **Configuration**: `vercel.json` enables analytics for the deployment

### How It Works

- The `window.va` function is initialized before the analytics script loads
- The analytics script is loaded asynchronously with `defer` attribute
- Data is sent to Vercel's analytics endpoint after deployment

### Viewing Analytics

After deployment to Vercel:
1. Go to your project dashboard on Vercel
2. Navigate to the Analytics tab
3. View real-time and historical data about your visitors

## Development

```bash
# Install dependencies
npm install

# Build (if needed)
npm run build

# Serve locally
npm run dev
```

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Or connect your Git repository for automatic deployments.

## Project Structure

```
.
├── index.html          # Main HTML file with analytics integration
├── analytics.js        # Analytics module (for future use)
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```
