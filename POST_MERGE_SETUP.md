# Post-Merge Setup Instructions

After this PR is merged to the `main` branch, follow these steps to enable GitHub Pages:

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/priyesh-pandey-ai/revenue-time-forge
2. Click on **Settings** (top menu)
3. Scroll down and click on **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions** from the dropdown
5. Click **Save**

## Step 2: Wait for Deployment

The GitHub Actions workflow will automatically run when you merge to `main`. You can monitor the deployment:

1. Go to the **Actions** tab in your repository
2. You should see a workflow run named "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)

## Step 3: Access Your Site

Once the deployment is complete, the GitHub Pages URL will be visible in:
- Settings → Pages (under "Your site is live at...")
- The workflow run in the Actions tab

The exact URL will be provided by GitHub Pages based on your repository configuration.

## Troubleshooting

If the site doesn't load:
1. Check that GitHub Pages is enabled in Settings → Pages
2. Verify the workflow completed successfully in the Actions tab
3. Wait a few minutes for GitHub's CDN to update
4. Clear your browser cache

## Manual Deployment

To manually trigger a deployment:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch (main) and click **Run workflow**
