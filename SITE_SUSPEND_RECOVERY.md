# Site Suspend And Recovery Notes

## Scope

This document records what was changed to suspend the production website for filing review, and how a future agent should restore the site.

Project root:

- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网`

Production domain:

- `https://hopeyoungchem.com`
- `https://www.hopeyoungchem.com`

Vercel project:

- `maizhanyangs-projects/hopeyoungchem-website-2415`

Vercel account used in this session:

- `maizhanyang`

Suspension date:

- `2026-04-07`

## What Was Done

### 1. Production behavior was changed to full-site 404

The production site was not merely replaced with a maintenance page. It was configured to return `404` for all routes on Vercel.

File changed:

- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/vercel.json`

Current contents:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "routes": [
    {
      "src": "/(.*)",
      "status": 404
    }
  ]
}
```

This means:

- even if DNS is re-enabled without restoring code, the site will still return `404`
- restoring DNS alone is not enough to bring the website back

### 2. A local offline page implementation was added

The codebase also contains a local "site offline" mode and offline page UI. These changes are currently secondary to the Vercel 404 rule above.

Files added or changed for offline-mode UI:

- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/config/siteStatus.ts`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/pages/SiteOfflinePage.tsx`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/App.tsx`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/index.css`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/scripts/prerender.mjs`

Important:

- `src/config/siteStatus.ts` currently has `isOffline: true`
- if Vercel 404 config is removed but this flag remains `true`, the site will show the offline page instead of the original website

### 3. Production deployment was pushed

The repository was linked to the correct Vercel project and deployed to production.

Link command used:

```bash
vercel link --yes --project hopeyoungchem-website-2415 --scope maizhanyangs-projects
```

Production deploy command used:

```bash
vercel deploy --prod -y
```

Deployment result from this session:

- Deployment ID: `dpl_GB7f8LGwLSnNZBE3C7aA7sHEByKe`
- Production deployment URL: `https://hopeyoungchem-website-2415-h1ncv4gw6-maizhanyangs-projects.vercel.app`
- Inspector URL: `https://vercel.com/maizhanyangs-projects/hopeyoungchem-website-2415/GB7f8LGwLSnNZBE3C7aA7sHEByKe`

### 4. DNS was manually paused by the user in DNSPod

After the production 404 deployment, the user manually paused the domain in DNSPod.

Observed final DNS state during this session:

- `dig @fourteen.dnspod.net hopeyoungchem.com +short` returned no result
- `dig @fourteen.dnspod.net www.hopeyoungchem.com +short` returned no result
- recursive DNS queries returned `NXDOMAIN`

This means the domain is currently not resolving publicly.

Important:

- DNS pause was done manually in DNSPod by the user
- this repository does not contain DNS configuration
- a future agent must coordinate with DNSPod/Tencent Cloud if domain resolution needs to be restored

## Current Effective State

At the end of this session, the website is suspended in two layers:

1. DNS layer:
   `hopeyoungchem.com` and `www.hopeyoungchem.com` are paused in DNSPod and do not resolve.
2. Hosting layer:
   Vercel production is configured to return `404` for all routes.

Because of this dual lock:

- if DNS remains paused, the site stays unreachable
- if DNS is restored but Vercel config is unchanged, the site returns `404`
- only after both DNS and Vercel/code are restored will the site be back online

## How To Restore The Website

Restore should be done in this order.

### Step 1. Restore code behavior

Open:

- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/vercel.json`

Replace the current 404 config with the normal SPA rewrite config:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Step 2. Disable local offline mode

Open:

- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/config/siteStatus.ts`

Change:

```ts
isOffline: true
```

to:

```ts
isOffline: false
```

Optional cleanup:

- keep the offline page files for future reuse, or
- remove them if the team wants the repo cleaned up

### Step 3. Build locally and verify

From project root:

```bash
npm run build
```

Expected outcome:

- build succeeds
- prerender completes
- no production 404-only behavior remains in config

### Step 4. Redeploy production to Vercel

If `.vercel` is already linked, simply run:

```bash
vercel deploy --prod -y
```

If the project is not linked in a future environment, relink first:

```bash
vercel link --yes --project hopeyoungchem-website-2415 --scope maizhanyangs-projects
vercel deploy --prod -y
```

### Step 5. Restore DNS in DNSPod

In DNSPod / Tencent Cloud DNS, re-enable the website records for:

- `@`
- `www`

The exact record values should match the intended Vercel setup at that time. During this session the site previously resolved to:

- `76.76.21.21`

But the future agent should confirm the current correct Vercel DNS target before restoring records.

### Step 6. Verify restoration

Check DNS:

```bash
dig +short hopeyoungchem.com
dig +short www.hopeyoungchem.com
```

Check HTTP:

```bash
curl -I -L https://hopeyoungchem.com
curl -I -L https://www.hopeyoungchem.com
```

Expected restore outcome:

- DNS resolves again
- HTTP no longer returns `404` for every route
- homepage loads normally

## If The Goal Is Only Temporary Internal Preview

If the team only wants to preview the site without reopening the public domain:

1. restore `vercel.json`
2. set `isOffline: false`
3. deploy a Vercel preview instead of production:

```bash
vercel deploy -y
```

This allows preview testing without restoring public DNS.

## Files Touched During Suspension

Repository files changed in this session:

- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/vercel.json`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/config/siteStatus.ts`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/pages/SiteOfflinePage.tsx`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/App.tsx`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/src/index.css`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/scripts/prerender.mjs`
- `/Users/mac/Desktop/虹扬官网项目资料/虹扬官网/public/sitemap.xml`

Notes:

- `public/sitemap.xml` was regenerated during build
- `.vercel/` was created locally by `vercel link`, but it may be ignored by git depending on repo settings

## Recommended Future Restore Checklist

Before bringing the site back online, a future agent should confirm:

1. DNSPod records are ready to be re-enabled
2. `vercel.json` is restored to normal SPA rewrites
3. `src/config/siteStatus.ts` is set to `isOffline: false`
4. production deploy completed successfully
5. DNS has propagated
6. public domain opens normally

