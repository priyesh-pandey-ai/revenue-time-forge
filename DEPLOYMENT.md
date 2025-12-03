# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages.

## Automatic Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages URL
Once deployed, the site will be accessible at: https://priyesh-pandey-ai.github.io/revenue-time-forge/

## Setup Instructions

To enable GitHub Pages for this repository:

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

## Manual Deployment

You can also trigger a deployment manually:

1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Local Preview

To preview the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Configuration

- The deployment is configured in `.github/workflows/deploy.yml`
- The base path is set to "/revenue-time-forge/" for GitHub Pages project site hosting in `vite.config.ts`
- The router basename is configured to "/revenue-time-forge" in `src/App.tsx`
