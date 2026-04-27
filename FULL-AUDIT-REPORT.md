# SEO Audit Report — lawsupport.ch (Morgan Hartley Consulting)
**Date:** 2026-04-27 | **Auditor:** Claude Code (seo-audit skill)

---

## SEO Health Score: 82/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 85 | 18.7 |
| Content Quality | 23% | 80 | 18.4 |
| On-Page SEO | 20% | 82 | 16.4 |
| Schema / Structured Data | 10% | 78 | 7.8 |
| Performance (CWV) | 10% | 88 | 8.8 |
| AI Search Readiness | 10% | 72 | 7.2 |
| Images | 5% | 95 | 4.75 |
| **TOTAL** | | | **82/100** |

---

## Business Type

**Type:** Legal services / Swiss corporate law firm
**Brand:** Morgan Hartley Consulting (lawsupport.ch domain)
**Location:** Baarerstrasse 135, 6300 Zug (main) + Zurich (secondary)
**Services:** Company formation, FINMA licensing, tax/accounting, immigration, IP, M&A
**Stack:** Astro + Cloudflare Pages (static HTML, excellent performance)

---

## Executive Summary

### Top 5 Critical Issues
1. ❌ **Blog section empty** — /blog/ has 0 published articles; this section actively hurts credibility
2. ❌ **Meta description = "Switzerland"** on 2 pages — clearly broken/placeholder content
3. ❌ **IndexNow not implemented** — Bing indexation lag without this free protocol
4. ❌ **FAQPage schema on commercial site** — no rich results since Aug 2023 restriction
5. ❌ **Person/Org sameAs lacks LinkedIn** — weak authority signal for ChatGPT/AIO

### Top 5 Quick Wins
1. ✅ Fix 2 broken meta descriptions (15 min)
2. ✅ Add `reviewedBy` + `citation` to Article schemas (30 min)
3. ✅ Add SearchAction to WebSite schema (10 min)
4. ✅ Trim 10 title tags to ≤60 chars (20 min)
5. ✅ Add lastmod to 20 sitemap entries (10 min)

---

## Technical SEO: 85/100

### robots.txt ✅
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot
Allow: /

Sitemap: https://lawsupport.ch/sitemap-index.xml
```

**All major AI crawlers allowed. Excellent.**

Missing: `CCBot` block (optional, if concerned about LLM training data usage), `anthropic-ai`, `meta-externalagent`.

### Sitemap ✅
- Structure: `sitemap-index.xml` → `sitemap-0.xml`
- Total URLs: **116** (expected 176 per project notes — 60 pages may be missing from sitemap or project notes are outdated)
- ⚠️ **20 URLs without `<lastmod>`** — all hub/category pages and static pages:
  - /about/, /blog/, /contacts/, /team/morgan-hartley/, /terms/, /privacy-policy/
  - All 5 /services/* pages
  - 9 category hub pages
- Google uses lastmod for crawl prioritization. Hub pages should have lastmod = date of last content change

### Security Headers ✅
| Header | Value | Status |
|--------|-------|--------|
| strict-transport-security | max-age=31536000; includeSubDomains | ✅ |
| content-security-policy | default-src 'self'; script-src 'self' 'unsafe-inline' | ✅ |
| x-content-type-options | nosniff | ✅ |
| x-frame-options | DENY | ✅ |

⚠️ CSP uses `'unsafe-inline'` for scripts — acceptable for static sites but suboptimal. Consider nonce-based CSP for ideal score.

### Server Performance ✅
| Page | Response Time | HTML Size |
|------|--------------|-----------|
| Homepage | 0.08s | 50 KB |
| GmbH Formation | 0.09s | 76 KB |
| Crypto Licence | 0.11s | 102 KB |
| Corporate Tax | 0.09s | 76 KB |

Cloudflare Pages CDN: **excellent TTFB** worldwide.

⚠️ `cache-control: max-age=3600` — 1-hour cache TTL is short for static content. Recommend `max-age=86400` (1 day) with Cloudflare's edge cache, or let CF Pages manage it.

### IndexNow ❌
Not implemented. All 3 standard paths return 404:
- `/indexnow`, `/indexnow.txt`, `/.well-known/indexnow`

IndexNow enables instant Bing/Yandex indexation on publish. Free, 5-minute implementation.

---

## Content Quality: 80/100

### Content Volume
| Category | Pages | Avg Words (est.) |
|----------|-------|----------------|
| company-formation | 26 | ~5,000 |
| tax-accounting | 20 | ~4,500 |
| licensing | 16 | ~5,500 |
| immigration | 14 | ~4,000 |
| banking | 8 | ~4,000 |
| intellectual-property | 8 | ~4,500 |
| corporate-transactions | 5 | ~5,000 |
| corporate-services | 4 | ~3,500 |
| employment-law | 4 | ~4,500 |

**GmbH page:** 5,243 words ✅  
**Crypto licence page:** 8,829 words ✅ (excellent depth)  
**Corporate tax:** 5,461 words ✅

### E-E-A-T Assessment
- ✅ Named expert: Morgan Hartley (Swiss Bar, Canton Zurich; LLM Uni Zurich; lic.iur. Uni Bern)
- ✅ hasCredential schema on Person entity
- ✅ Author attribution on all Article schema
- ⚠️ Only 1 named team member — weakens "team of experts" claim
- ⚠️ About page: 724 words (thin for an authority E-E-A-T page — should be 1,500+)
- ❌ No LinkedIn profile linked for Morgan Hartley
- ❌ No Wikipedia/Wikidata entity for firm or lawyer

### Blog Section ❌ CRITICAL
`/blog/` exists in sitemap but contains **zero published articles** — only static introductory text (1,442 words). This is a significant missed opportunity:
- Blog section creates a dead end in the site structure
- Visitors expecting news/articles find nothing
- Google may interpret as neglected section
- **Recommendation:** Either remove /blog/ from sitemap, or publish at minimum 5 articles immediately

### AI Fingerprint Phrases
Only **4 pages** contain banned phrases — excellent compared to industry average:
| Page | Phrase |
|------|--------|
| /company-formation/holding-company-switzerland/ | "leverage" |
| /corporate-transactions/buy-company-switzerland/ | "leverage" |
| /licensing/banking-license-switzerland/ | "leverage" |
| /tax-accounting/bookkeeping-switzerland/ | "leverage" |

---

## On-Page SEO: 82/100

### Title Tags
- ✅ No missing titles (116/116)
- ✅ No duplicate titles
- ⚠️ **10 titles exceed 60 characters:**

| Length | URL | Title |
|--------|-----|-------|
| 66 | /licensing/crypto-fintech-licensing-switzerland/ | Crypto & Fintech Licensing in Switzerland: VASP, SRO & DLT |
| 64 | /employment-law/employment-law-switzerland/ | Employment Law Switzerland: Employer's Complete Guide (2026) |
| 63 | /tax-accounting/corporate-tax-switzerland/ | Corporate Tax Switzerland: Rates, Cantons & Planning (2026) |
| 62 | /tax-accounting/accounting-switzerland/ | Accounting in Switzerland: Rules, Costs & Deadlines (2026) |
| 62 | /licensing/ | Licensing & Permits in Switzerland — Guides & Articles |
| 62 | /intellectual-property/copyright-law-switzerland/ | Copyright Law Switzerland: Protection & Enforcement (2026) |
| 62 | /intellectual-property/ | IP & Commercial Law in Switzerland — Guides & Articles |
| 61 | /team/morgan-hartley/ | Morgan Hartley — Corporate Lawyer \| Morgan Hartley Consulting |
| 61 | /tax-accounting/corporate-tax-overview-switzerland/ | Swiss Corporate Tax: Rates, Returns & Cantonal Comparison |
| 61 | /corporate-transactions/ | Corporate Transactions in Switzerland — Guides & Articles |

Note: Google truncates at ~580px width (≈60 chars). HTML entity-encoded titles (e.g. `&amp;`) count as 1 char in browser rendering, so actual display may be slightly shorter.

### Meta Descriptions
- ✅ No missing descriptions (116/116)
- ❌ **2 broken meta descriptions = "Switzerland" (placeholder/build error):**
  - `/licensing/dlt-trading-facility-switzerland/` — "Switzerland"
  - `/tax-accounting/double-tax-treaties-switzerland/` — "Switzerland"

Correct meta descriptions needed for these pages.

### Headings
- ✅ H1 present on all 116 pages
- ✅ H1 ≈ title tag on most pages (good keyword signal consistency)
- ✅ Multi-level H2/H3 hierarchy on content pages

### Canonical Tags
- ✅ Canonical present on all pages checked
- ✅ Canonical matches sitemap URL (trailing slash consistent)

### Internal Linking
- ✅ No true orphan pages (every sitemap page is linked from at least 1 other page)
- ✅ Strong hub-and-spoke: /contacts/ gets 816 links (site-wide nav), /immigration/b-permit-switzerland/ gets 378 (cross-linked from relevant pages)
- ⚠️ `/services/*` pages separate from `/company-formation/` with overlapping topic area (see below)

### URL Structure
- ✅ Clean, descriptive slugs (keyword-rich, no params)
- ✅ 2-level hierarchy: /category/article-slug/
- ⚠️ Parallel topic trees: `/services/company-formation/` AND `/company-formation/` cover similar territory — potential topic dilution

---

## Schema / Structured Data: 78/100

### Current Implementation
Every page uses a single `@graph` block with:
- LegalService + LocalBusiness (org entity)
- WebSite
- Person (Morgan Hartley)
- WebPage
- BreadcrumbList (3 levels on articles)
- FAQPage (article pages, 10 questions each)
- Article (content pages, with author @id cross-reference)

### Validation Results

| Schema | Status | Issues |
|--------|--------|--------|
| LegalService + LocalBusiness | ✅ | Good — foundingDate, priceRange, openingHoursSpecification present |
| WebSite | ⚠️ | Missing SearchAction (Sitelinks search box) |
| Person (Morgan Hartley) | ⚠️ | sameAs only Twitter; missing LinkedIn, image on homepage variant |
| WebPage | ✅ | name, url, canonical cross-reference |
| BreadcrumbList | ✅ | 3 levels correct |
| Article | ⚠️ | Missing `reviewedBy` and `citation` properties |
| FAQPage | ❌ | RESTRICTED — commercial sites don't get rich results (Aug 2023) |

### Critical Issues

#### FAQPage (❌ Restricted)
FAQPage rich results restricted to government and healthcare authority sites since **August 2023**. 96 article pages each have 10 FAQ questions — these generate zero rich results. The schema is not harmful (helps AI/GEO), but the expectation of rich results is wrong.
- **Recommendation:** Keep FAQPage for GEO/AI signal, but don't expect SERP rich results.

### Missing Properties

**Article — add to all article pages:**
```json
{
  "reviewedBy": {
    "@id": "https://lawsupport.ch/#morgan-hartley"
  },
  "citation": [
    {"@type": "CreativeWork", "name": "Swiss Code of Obligations (OR/CO)", "url": "https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en"},
    {"@type": "CreativeWork", "name": "FINMA Official Website", "url": "https://www.finma.ch/en/"}
  ]
}
```

**WebSite — add SearchAction:**
```json
{
  "potentialAction": {
    "@type": "SearchAction",
    "target": {"@type": "EntryPoint", "urlTemplate": "https://lawsupport.ch/blog/?s={search_term_string}"},
    "query-input": "required name=search_term_string"
  }
}
```

**Person — add LinkedIn and description:**
```json
{
  "sameAs": [
    "https://x.com/Law_Switzerland",
    "[FILL: https://www.linkedin.com/in/morgan-hartley-...]"
  ],
  "description": "Swiss-admitted corporate lawyer specialising in company formation, M&A, FINMA licensing, and cross-border legal advice for businesses expanding to Switzerland.",
  "image": "https://lawsupport.ch/images/morgan-hartley.jpg"
}
```

**Organization — expand sameAs:**
```json
{
  "sameAs": [
    "https://x.com/Law_Switzerland",
    "https://www.instagram.com/law_support.switzerland",
    "[FILL: https://www.linkedin.com/company/morgan-hartley-consulting]",
    "[FILL: https://www.wikidata.org/wiki/QXXXXXXX]"
  ]
}
```

---

## Performance (CWV Estimates): 88/100

**Note:** Lab estimates only — Google API credentials not configured for CrUX field data.

| Metric | Estimate | Status |
|--------|----------|--------|
| TTFB | ~80-110ms | ✅ Excellent |
| LCP | Est. <2.0s | ✅ Good (static HTML, no JS hydration) |
| INP | Est. <200ms | ✅ Good (minimal JS) |
| CLS | Est. ~0 | ✅ Excellent (static layout) |

- Astro static output + Cloudflare CDN = optimal performance baseline
- No JS framework hydration overhead
- HTML size reasonable: 50-102KB per page

---

## Images: 95/100

- ✅ **0 images missing alt text** (477 images checked)
- Unknown: image format usage (WebP/AVIF) — likely implemented given Astro build
- Unknown: image compression levels

---

## AI Search Readiness: 72/100

### llms.txt ✅
Present at `/llms.txt`. Content quality: **good**.
- Covers: services, locations, contact, topics, author credentials
- Missing: direct page URLs with descriptions (only sitemap URL referenced at bottom)
- Missing: Key Facts section (specific numbers/statistics)

**Recommended upgrade:** Add specific data points and page index (similar to pattern applied to swissfirma.com).

### AI Crawlers ✅
All major AI crawlers allowed:
| Crawler | Status |
|---------|--------|
| GPTBot (OpenAI) | ✅ Allowed |
| OAI-SearchBot | ✅ Allowed |
| ClaudeBot | ✅ Allowed |
| PerplexityBot | ✅ Allowed |
| Applebot | ✅ Allowed |

Missing: `anthropic-ai`, `meta-externalagent`, `Bytespider` — consider adding.

### Brand Mention Signals
| Platform | Status |
|----------|--------|
| X/Twitter | ✅ Linked (sameAs) |
| Instagram | ✅ Linked (sameAs) |
| LinkedIn (company) | ❌ Not linked |
| LinkedIn (Morgan Hartley) | ❌ Not linked |
| Wikipedia/Wikidata | ❌ Not present |
| YouTube | ❌ Not present |

**Critical gap:** ChatGPT cites Wikipedia in 47.9% of responses; Perplexity cites Reddit in 46.7%. LinkedIn is a major B2B authority signal.

### Blog Section ❌
Empty blog significantly reduces content authority and prevents organic AI citation from new content.

---

## Action Plan

### Critical (fix immediately)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | Fix 2 broken meta descriptions ("Switzerland") | High | 15 min |
| 2 | Publish first blog articles (min. 3-5 posts) | High | 1-2 weeks |
| 3 | Remove /blog/ from sitemap if no posts planned | Medium | 10 min |

### High (fix within 1 week)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 4 | Trim 10 title tags to ≤60 chars | Medium | 30 min |
| 5 | Add `reviewedBy` + `citation` to Article schemas | Medium | 2h |
| 6 | Add SearchAction to WebSite schema | Low | 15 min |
| 7 | Remove "leverage" from 4 pages | Low | 20 min |
| 8 | Implement IndexNow protocol | Medium | 30 min |

### Medium (fix within 1 month)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 9 | Add lastmod to 20 hub pages in sitemap | Low | 30 min |
| 10 | Create LinkedIn company page + update sameAs | High | 2h |
| 11 | Add LinkedIn URL for Morgan Hartley to Person schema | Medium | 10 min |
| 12 | Expand About page from 724 to 1,500+ words | High | 3h |
| 13 | Upgrade llms.txt with page index + Key Facts | Medium | 1h |
| 14 | Increase cache-control TTL for static assets | Low | 15 min |

### Low (backlog)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 15 | Create Wikidata entity for Morgan Hartley Consulting | High (ChatGPT) | 30 min |
| 16 | Add 2nd team member with full Person schema | High | 2h |
| 17 | Implement CSP nonce-based (remove 'unsafe-inline') | Low | 4h |
| 18 | Add `anthropic-ai`, `Bytespider` to robots.txt | Low | 5 min |

---

## Missing Schema Opportunities

| Schema Type | Where Needed | Priority |
|-------------|-------------|----------|
| ProfilePage | /team/morgan-hartley/ | High |
| ContactPage | /contacts/ | Medium |
| Service (detailed with pricing) | /services/* pages | Medium |
| AggregateRating | Homepage, if verified reviews exist | Low |
| ItemList | Category hub pages (/company-formation/, etc.) | Low |

---

*Generated: 2026-04-27 | Tool: seo-audit skill | Crawled: 116 pages*
