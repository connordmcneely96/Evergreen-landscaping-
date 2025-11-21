# ✅ FIX: Required Deploy Command

## Cloudflare Says Deploy Command is Required

If Cloudflare requires a deploy command, use this:

### Deploy Command (Required Field)

**Enter this exactly**:
```
wrangler pages deploy out --project-name=evergreen-landscaping-okc1
```

### Complete Settings

**Build command**: 
```
npm run build
```

**Deploy command** (REQUIRED):
```
wrangler pages deploy out --project-name=evergreen-landscaping-okc1
```

**Build output directory**: 
```
out
```

**Root directory**: 
```
/
```

**Production branch**: 
```
main
```

---

## 🔧 Alternative: Use GitHub Actions Only

If you want to bypass Cloudflare's deploy command entirely:

1. **Disable automatic deployments** in Cloudflare dashboard
2. **Use GitHub Actions** to deploy (already configured)
3. GitHub Actions will handle everything

---

## ✅ What This Does

- `wrangler pages deploy` - Correct command for Pages (not Workers!)
- `out` - The build output directory
- `--project-name=evergreen-landscaping-okc1` - Your project name

This is the **correct** deploy command for Cloudflare Pages.

---

**Use that deploy command and it will work!**

