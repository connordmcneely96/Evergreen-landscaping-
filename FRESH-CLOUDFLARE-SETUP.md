# 🚀 Fresh Cloudflare Pages Setup - Step by Step

## ✅ Create New Project (Fresh Start)

### Step 1: Delete Old Project (Optional)

1. Go to: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages
2. Find `evergreen-landscaping-okc`
3. Click the 3 dots → **Delete project**
4. Confirm deletion

### Step 2: Create New Project

1. Click **"Create a project"**
2. Select **"Connect to Git"**
3. Choose **GitHub**
4. Authorize Cloudflare (if needed)
5. Select repository: **`InnerAnimal/https-evergreenlandscapingokc.com`**
6. Click **"Begin setup"**

### Step 3: Configure Project Settings

**Project name**: `evergreen-landscaping-okc`

**Build settings**:
- **Framework preset**: `Next.js`
- **Production branch**: `main`
- **Root directory**: `/` (leave default)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Deploy command**: **LEAVE BLANK** (do not enter anything!)

**Environment variables** (click "Add variable"):
- **Variable name**: `NODE_VERSION`
- **Value**: `20`

### Step 4: Advanced Settings

Click **"Show advanced settings"**:

- **Node.js version**: `20`
- **Build cache**: Enabled
- **Preview deployments**: Enabled

### Step 5: Save and Deploy

1. Click **"Save and Deploy"**
2. Wait for build to complete (~2-3 minutes)
3. Site will be live at: `https://evergreen-landscaping-okc.pages.dev`

---

## 🎯 Correct Configuration Summary

| Setting | Value |
|---------|-------|
| **Project name** | `evergreen-landscaping-okc` |
| **Framework** | `Next.js` |
| **Build command** | `npm run build` |
| **Deploy command** | **BLANK** (nothing!) |
| **Build output** | `out` |
| **Root directory** | `/` |
| **Production branch** | `main` |
| **Node version** | `20` |

---

## ✅ What Will Happen

1. Cloudflare clones your GitHub repo
2. Runs `npm ci` (installs all dependencies)
3. Runs `npm run build` (builds Next.js app)
4. Finds `out/` directory
5. **Automatically deploys** (no deploy command needed!)
6. Site goes live

---

## 🔧 If You Keep Existing Project

If you want to fix the existing project instead:

1. Go to: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds
2. **DELETE** the deploy command (make it blank)
3. Set build output to: `out`
4. Add `NODE_VERSION=20` environment variable
5. Save and retry deployment

---

## 📋 Verification

After setup, check:

- ✅ Build succeeds (green checkmark)
- ✅ Deployment successful
- ✅ Site accessible at: `https://evergreen-landscaping-okc.pages.dev`
- ✅ All 4 pages load correctly

---

**The key is: NO deploy command! Cloudflare Pages handles deployment automatically.**

