# 🚨 URGENT FIX - Remove Deploy Command

## The Problem

Cloudflare Pages is still trying to run `npx wrangler deploy` which is WRONG for Pages.

**Error**: "It looks like you've run a Workers-specific command in a Pages project."

## ✅ SOLUTION: Remove Deploy Command in Dashboard

### Step 1: Go to Cloudflare Dashboard

**URL**: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages/evergreen-landscaping-okc/settings/builds

### Step 2: DELETE the Deploy Command

1. Scroll to **"Build configuration"** section
2. Find **"Deploy command"** field
3. **DELETE** everything in that field (make it completely blank)
4. **DO NOT** put anything there - leave it empty

### Step 3: Verify Settings

Make sure these are set correctly:

- ✅ **Build command**: `npm run build`
- ✅ **Deploy command**: **BLANK/EMPTY** (this is critical!)
- ✅ **Build output directory**: `out`
- ✅ **Root directory**: `/`
- ✅ **Framework preset**: `Next.js`

### Step 4: Add Environment Variable

- **Variable name**: `NODE_VERSION`
- **Value**: `20`

### Step 5: Save and Deploy

1. Click **"Save"** at the bottom
2. Go to **"Deployments"** tab
3. Click **"Retry deployment"** on the failed build

---

## 🔄 Alternative: Use GitHub Actions Only

If you can't remove the deploy command, **disable Cloudflare's auto-deploy** and use GitHub Actions only:

1. In Cloudflare dashboard, go to **Settings** → **Builds & deployments**
2. **Disable** "Automatic deployments"
3. GitHub Actions will handle all deployments automatically

---

## ✅ What Should Happen

After removing the deploy command:

1. Cloudflare runs: `npm run build` ✅
2. Build outputs to: `out/` directory ✅
3. Cloudflare automatically deploys the `out/` folder ✅
4. **NO** `wrangler deploy` command runs ✅

---

**The deploy command MUST be blank for Cloudflare Pages to work correctly!**

