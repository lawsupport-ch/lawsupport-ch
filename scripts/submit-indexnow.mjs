#!/usr/bin/env node
const KEY = '3cebbd9d53394dbeb1fb672d151c8c6c';
const HOST = 'lawsupport.ch';
const SITEMAP = `https://${HOST}/sitemap-0.xml`;

const xml = await (await fetch(SITEMAP)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`Submitting ${urls.length} URLs…`);

const body = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls };
const r = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});
console.log(`IndexNow: ${r.status} ${r.statusText}`);
if (!r.ok) console.log((await r.text()).slice(0, 500));
