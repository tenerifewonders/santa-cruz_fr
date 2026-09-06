const CACHE_NAME = "santa-cruz-fr-v3";

const ASSETS = [
"./",
  "./index.html",
  "./FR-SANTA-CRUZ.html",
  "./manifest.json",
  "./santa-cruz.geojson",
  "./icon-192.png",
  "./icon-512.png"
];

const AUDIO_URLS = [
"https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/3.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/3.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/8.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/9.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/10.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/11.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/12.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/13.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/14.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/santa-cruz_fr/7.8.mp3"
];

const TILES = [
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/13/3724/3418.png",
  "./tiles/13/3724/3419.png",
  "./tiles/13/3724/3420.png",
  "./tiles/13/3724/3421.png",
  "./tiles/13/3725/3418.png",
  "./tiles/13/3725/3419.png",
  "./tiles/13/3725/3420.png",
  "./tiles/13/3725/3421.png",
  "./tiles/13/3726/3418.png",
  "./tiles/13/3726/3419.png",
  "./tiles/13/3726/3420.png",
  "./tiles/13/3726/3421.png",
  "./tiles/13/3727/3418.png",
  "./tiles/13/3727/3419.png",
  "./tiles/13/3727/3420.png",
  "./tiles/13/3727/3421.png",
  "./tiles/14/7450/6837.png",
  "./tiles/14/7450/6838.png",
  "./tiles/14/7450/6839.png",
  "./tiles/14/7450/6840.png",
  "./tiles/14/7450/6841.png",
  "./tiles/14/7451/6837.png",
  "./tiles/14/7451/6838.png",
  "./tiles/14/7451/6839.png",
  "./tiles/14/7451/6840.png",
  "./tiles/14/7451/6841.png",
  "./tiles/14/7452/6837.png",
  "./tiles/14/7452/6838.png",
  "./tiles/14/7452/6839.png",
  "./tiles/14/7452/6840.png",
  "./tiles/14/7452/6841.png",
  "./tiles/14/7453/6837.png",
  "./tiles/14/7453/6838.png",
  "./tiles/14/7453/6839.png",
  "./tiles/14/7453/6840.png",
  "./tiles/14/7453/6841.png",
  "./tiles/14/7454/6837.png",
  "./tiles/14/7454/6838.png",
  "./tiles/14/7454/6839.png",
  "./tiles/14/7454/6840.png",
  "./tiles/14/7454/6841.png",
  "./tiles/15/14901/13676.png",
  "./tiles/15/14901/13677.png",
  "./tiles/15/14901/13678.png",
  "./tiles/15/14901/13679.png",
  "./tiles/15/14901/13680.png",
  "./tiles/15/14901/13681.png",
  "./tiles/15/14901/13682.png",
  "./tiles/15/14902/13676.png",
  "./tiles/15/14902/13677.png",
  "./tiles/15/14902/13678.png",
  "./tiles/15/14902/13679.png",
  "./tiles/15/14902/13680.png",
  "./tiles/15/14902/13681.png",
  "./tiles/15/14902/13682.png",
  "./tiles/15/14903/13676.png",
  "./tiles/15/14903/13677.png",
  "./tiles/15/14903/13678.png",
  "./tiles/15/14903/13679.png",
  "./tiles/15/14903/13680.png",
  "./tiles/15/14903/13681.png",
  "./tiles/15/14903/13682.png",
  "./tiles/15/14904/13676.png",
  "./tiles/15/14904/13677.png",
  "./tiles/15/14904/13678.png",
  "./tiles/15/14904/13679.png",
  "./tiles/15/14904/13680.png",
  "./tiles/15/14904/13681.png",
  "./tiles/15/14904/13682.png",
  "./tiles/15/14905/13676.png",
  "./tiles/15/14905/13677.png",
  "./tiles/15/14905/13678.png",
  "./tiles/15/14905/13679.png",
  "./tiles/15/14905/13680.png",
  "./tiles/15/14905/13681.png",
  "./tiles/15/14905/13682.png",
  "./tiles/15/14906/13676.png",
  "./tiles/15/14906/13677.png",
  "./tiles/15/14906/13678.png",
  "./tiles/15/14906/13679.png",
  "./tiles/15/14906/13680.png",
  "./tiles/15/14906/13681.png",
  "./tiles/15/14906/13682.png",
  "./tiles/15/14907/13676.png",
  "./tiles/15/14907/13677.png",
  "./tiles/15/14907/13678.png",
  "./tiles/15/14907/13679.png",
  "./tiles/15/14907/13680.png",
  "./tiles/15/14907/13681.png",
  "./tiles/15/14907/13682.png",
  "./tiles/16/29806/27355.png",
  "./tiles/16/29806/27356.png",
  "./tiles/16/29806/27357.png",
  "./tiles/16/29806/27358.png",
  "./tiles/16/29806/27359.png",
  "./tiles/16/29806/27360.png",
  "./tiles/16/29806/27361.png",
  "./tiles/16/29807/27355.png",
  "./tiles/16/29807/27356.png",
  "./tiles/16/29807/27357.png",
  "./tiles/16/29807/27358.png",
  "./tiles/16/29807/27359.png",
  "./tiles/16/29807/27360.png",
  "./tiles/16/29807/27361.png",
  "./tiles/16/29808/27355.png",
  "./tiles/16/29808/27356.png",
  "./tiles/16/29808/27357.png",
  "./tiles/16/29808/27358.png",
  "./tiles/16/29808/27359.png",
  "./tiles/16/29808/27360.png",
  "./tiles/16/29808/27361.png",
  "./tiles/16/29809/27355.png",
  "./tiles/16/29809/27356.png",
  "./tiles/16/29809/27357.png",
  "./tiles/16/29809/27358.png",
  "./tiles/16/29809/27359.png",
  "./tiles/16/29809/27360.png",
  "./tiles/16/29809/27361.png",
  "./tiles/16/29810/27355.png",
  "./tiles/16/29810/27356.png",
  "./tiles/16/29810/27357.png",
  "./tiles/16/29810/27358.png",
  "./tiles/16/29810/27359.png",
  "./tiles/16/29810/27360.png",
  "./tiles/16/29810/27361.png",
  "./tiles/16/29811/27355.png",
  "./tiles/16/29811/27356.png",
  "./tiles/16/29811/27357.png",
  "./tiles/16/29811/27358.png",
  "./tiles/16/29811/27359.png",
  "./tiles/16/29811/27360.png",
  "./tiles/16/29811/27361.png",
  "./tiles/16/29812/27355.png",
  "./tiles/16/29812/27356.png",
  "./tiles/16/29812/27357.png",
  "./tiles/16/29812/27358.png",
  "./tiles/16/29812/27359.png",
  "./tiles/16/29812/27360.png",
  "./tiles/16/29812/27361.png",
  "./tiles/17/59614/54710.png",
  "./tiles/17/59614/54711.png",
  "./tiles/17/59614/54712.png",
  "./tiles/17/59614/54713.png",
  "./tiles/17/59614/54714.png",
  "./tiles/17/59614/54715.png",
  "./tiles/17/59614/54716.png",
  "./tiles/17/59614/54717.png",
  "./tiles/17/59614/54718.png",
  "./tiles/17/59614/54719.png",
  "./tiles/17/59614/54720.png",
  "./tiles/17/59614/54721.png",
  "./tiles/17/59614/54722.png",
  "./tiles/17/59614/54723.png",
  "./tiles/17/59614/54724.png",
  "./tiles/17/59614/54725.png",
  "./tiles/17/59615/54710.png",
  "./tiles/17/59615/54711.png",
  "./tiles/17/59615/54712.png",
  "./tiles/17/59615/54713.png",
  "./tiles/17/59615/54714.png",
  "./tiles/17/59615/54715.png",
  "./tiles/17/59615/54716.png",
  "./tiles/17/59615/54717.png",
  "./tiles/17/59615/54718.png",
  "./tiles/17/59615/54719.png",
  "./tiles/17/59615/54720.png",
  "./tiles/17/59615/54721.png",
  "./tiles/17/59615/54722.png",
  "./tiles/17/59615/54723.png",
  "./tiles/17/59615/54724.png",
  "./tiles/17/59615/54725.png",
  "./tiles/17/59616/54710.png",
  "./tiles/17/59616/54711.png",
  "./tiles/17/59616/54712.png",
  "./tiles/17/59616/54713.png",
  "./tiles/17/59616/54714.png",
  "./tiles/17/59616/54715.png",
  "./tiles/17/59616/54716.png",
  "./tiles/17/59616/54717.png",
  "./tiles/17/59616/54718.png",
  "./tiles/17/59616/54719.png",
  "./tiles/17/59616/54720.png",
  "./tiles/17/59616/54721.png",
  "./tiles/17/59616/54722.png",
  "./tiles/17/59616/54723.png",
  "./tiles/17/59616/54724.png",
  "./tiles/17/59616/54725.png",
  "./tiles/17/59617/54710.png",
  "./tiles/17/59617/54711.png",
  "./tiles/17/59617/54712.png",
  "./tiles/17/59617/54713.png",
  "./tiles/17/59617/54714.png",
  "./tiles/17/59617/54715.png",
  "./tiles/17/59617/54716.png",
  "./tiles/17/59617/54717.png",
  "./tiles/17/59617/54718.png",
  "./tiles/17/59617/54719.png",
  "./tiles/17/59617/54720.png",
  "./tiles/17/59617/54721.png",
  "./tiles/17/59617/54722.png",
  "./tiles/17/59617/54723.png",
  "./tiles/17/59617/54724.png",
  "./tiles/17/59617/54725.png",
  "./tiles/17/59618/54710.png",
  "./tiles/17/59618/54711.png",
  "./tiles/17/59618/54712.png",
  "./tiles/17/59618/54713.png",
  "./tiles/17/59618/54714.png",
  "./tiles/17/59618/54715.png",
  "./tiles/17/59618/54716.png",
  "./tiles/17/59618/54717.png",
  "./tiles/17/59618/54718.png",
  "./tiles/17/59618/54719.png",
  "./tiles/17/59618/54720.png",
  "./tiles/17/59618/54721.png",
  "./tiles/17/59618/54722.png",
  "./tiles/17/59618/54723.png",
  "./tiles/17/59618/54724.png",
  "./tiles/17/59618/54725.png",
  "./tiles/17/59619/54710.png",
  "./tiles/17/59619/54711.png",
  "./tiles/17/59619/54712.png",
  "./tiles/17/59619/54713.png",
  "./tiles/17/59619/54714.png",
  "./tiles/17/59619/54715.png",
  "./tiles/17/59619/54716.png",
  "./tiles/17/59619/54717.png",
  "./tiles/17/59619/54718.png",
  "./tiles/17/59619/54719.png",
  "./tiles/17/59619/54720.png",
  "./tiles/17/59619/54721.png",
  "./tiles/17/59619/54722.png",
  "./tiles/17/59619/54723.png",
  "./tiles/17/59619/54724.png",
  "./tiles/17/59619/54725.png",
  "./tiles/17/59620/54710.png",
  "./tiles/17/59620/54711.png",
  "./tiles/17/59620/54712.png",
  "./tiles/17/59620/54713.png",
  "./tiles/17/59620/54714.png",
  "./tiles/17/59620/54715.png",
  "./tiles/17/59620/54716.png",
  "./tiles/17/59620/54717.png",
  "./tiles/17/59620/54718.png",
  "./tiles/17/59620/54719.png",
  "./tiles/17/59620/54720.png",
  "./tiles/17/59620/54721.png",
  "./tiles/17/59620/54722.png",
  "./tiles/17/59620/54723.png",
  "./tiles/17/59620/54724.png",
  "./tiles/17/59620/54725.png",
  "./tiles/17/59621/54710.png",
  "./tiles/17/59621/54711.png",
  "./tiles/17/59621/54712.png",
  "./tiles/17/59621/54713.png",
  "./tiles/17/59621/54714.png",
  "./tiles/17/59621/54715.png",
  "./tiles/17/59621/54716.png",
  "./tiles/17/59621/54717.png",
  "./tiles/17/59621/54718.png",
  "./tiles/17/59621/54719.png",
  "./tiles/17/59621/54720.png",
  "./tiles/17/59621/54721.png",
  "./tiles/17/59621/54722.png",
  "./tiles/17/59621/54723.png",
  "./tiles/17/59621/54724.png",
  "./tiles/17/59621/54725.png",
  "./tiles/17/59622/54710.png",
  "./tiles/17/59622/54711.png",
  "./tiles/17/59622/54712.png",
  "./tiles/17/59622/54713.png",
  "./tiles/17/59622/54714.png",
  "./tiles/17/59622/54715.png",
  "./tiles/17/59622/54716.png",
  "./tiles/17/59622/54717.png",
  "./tiles/17/59622/54718.png",
  "./tiles/17/59622/54719.png",
  "./tiles/17/59622/54720.png",
  "./tiles/17/59622/54721.png",
  "./tiles/17/59622/54722.png",
  "./tiles/17/59622/54723.png",
  "./tiles/17/59622/54724.png",
  "./tiles/17/59622/54725.png",
  "./tiles/17/59623/54710.png",
  "./tiles/17/59623/54711.png",
  "./tiles/17/59623/54712.png",
  "./tiles/17/59623/54713.png",
  "./tiles/17/59623/54714.png",
  "./tiles/17/59623/54715.png",
  "./tiles/17/59623/54716.png",
  "./tiles/17/59623/54717.png",
  "./tiles/17/59623/54718.png",
  "./tiles/17/59623/54719.png",
  "./tiles/17/59623/54720.png",
  "./tiles/17/59623/54721.png",
  "./tiles/17/59623/54722.png",
  "./tiles/17/59623/54723.png",
  "./tiles/17/59623/54724.png",
  "./tiles/17/59623/54725.png"
];

// 1. INSTALL: Pre-cache static assets and all audio files for offline use
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log("[SW] Pre-caching assets and audio for offline...");
      await cache.addAll(ASSETS).catch(err => console.warn("[SW] Asset pre-cache warning:", err));
      
      // Pre-fetch all audio files with clean GET requests (no range header) to ensure 200 OK status
      for (const url of AUDIO_URLS) {
        try {
          const req = new Request(url, { method: "GET" });
          const res = await fetch(req);
          if (res && res.status === 200) {
            await cache.put(url, res);
          }
        } catch (err) {
          console.warn("[SW] Audio pre-cache warning for:", url, err);
        }
      }

      // Pre-cache tiles if available
      if (TILES.length > 0) {
        await cache.addAll(TILES).catch(err => console.warn("[SW] Tiles pre-cache warning:", err));
      }
    })
  );
});

// 2. ACTIVATE: Clean old caches & claim clients
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// 3. FETCH: Smart Cache & HTTP Range Request handler for HTML5 <audio> offline playback
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Intercept audio requests (MP3s) or Supabase audio storage URLs
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Standard static assets & tiles
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (!netRes || netRes.status !== 200) {
          return netRes;
        }
        const resToCache = netRes.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files (iOS Safari & Android Chrome)
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  // If not cached yet, fetch online with clean GET
  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  // Handle Range Header for HTML5 <audio>
  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
