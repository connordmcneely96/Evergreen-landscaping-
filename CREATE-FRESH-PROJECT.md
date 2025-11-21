# 🆕 Create Fresh Cloudflare Pages Project

## Quick Setup (5 Minutes)

### 1. Go to Cloudflare Pages

**URL**: https://dash.cloudflare.com/ede6590ac0d2fb7daf155b35653457b2/pages

### 2. Create New Project

1. Click **"Create a project"** button (top right)
2. Click **"Connect to Git"**
3. Select **GitHub**
4. Authorize Cloudflare (if prompted)
5. Select repository: **`InnerAnimal/https-evergreenlandscapingokc.com`**
6. Click **"Begin setup"**

### 3. Fill Out the Form

**Project name**: 
```
evergreen-landscaping-okc
```

**Production branch**: 
```
main
```

**Framework preset**: 
```
Next.js
```

**Build command**: 
```
npm run build
```

**Build output directory**: 
```
out
```

**Deploy command**: 
```
(LEAVE THIS COMPLETELY BLANK - DO NOT TYPE ANYTHING!)
```

### 4. Add Environment Variable

Click **"Add variable"**:

- **Variable name**: `NODE_VERSION`
- **Value**: `20`

### 5. Advanced Settings (Optional)

Click **"Show advanced settings"**:

- **Node.js version**: `20`
- **Build cache**: ✅ Enabled
- **Preview deployments**: ✅ Enabled

### 6. Deploy

Click **"Save and Deploy"**

---

## ✅ Expected Result

After 2-3 minutes:

- ✅ Build completes successfully
- ✅ Site deployed to: `https://evergreen-landscaping-okc.pages.dev`
- ✅ All 4 pages working
- ✅ Logo and branding visible

---

## 🚨 Critical: Deploy Command Must Be Blank

**DO NOT** enter anything in the "Deploy command" field. Cloudflare Pages automatically deploys the build output - you don't need a deploy command!

If you see a field that says "Deploy command" or "Deploy command (optional)", leave it completely empty.

---

## 📞 If Something Goes Wrong

1. Check build logs in Cloudflare dashboard
2. Verify build output directory is `out`
3. Verify deploy command is blank
4. Verify `NODE_VERSION=20` is set

---

**That's it! The website will deploy automatically on every push to `main`.**

