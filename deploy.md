# MCP Quiz App - Deployment Guide 🚀

## Quick Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

4. **Deploy:**
   ```bash
   vercel
   ```

5. **Follow prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` 
   - Project name? `mcp-quiz-app`
   - Directory? `./`
   - Override settings? `N`

### Method 2: Vercel Dashboard

1. **Build locally to test:**
   ```bash
   npm run build
   ```

2. **Push to GitHub/GitLab**

3. **Go to [vercel.com](https://vercel.com)**

4. **Import project:**
   - Click "New Project"
   - Import from Git
   - Select your repository

5. **Configure:**
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Deploy!**

## Environment Setup

No environment variables needed - this is a frontend-only app!

## Build Verification

Before deploying, verify the build works:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## Post-Deployment

After deployment, test:
- ✅ Quiz loads properly
- ✅ Questions display correctly
- ✅ Navigation works
- ✅ Results page shows
- ✅ Mobile responsive
- ✅ Local storage saves progress

## Troubleshooting

**Build fails?**
- Check Node.js version (18+)
- Clear node_modules: `rm -rf node_modules && npm install`

**App doesn't load?**
- Check browser console for errors
- Verify all files are included in build

**Questions not showing?**
- Check questions.json format
- Verify JSON is valid

## Custom Domain (Optional)

In Vercel dashboard:
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

---

**Your MCP Quiz App is ready for deployment! 🎉**
