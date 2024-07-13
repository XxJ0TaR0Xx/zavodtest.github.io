'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f0ba72e8967fb17884d97861cd1a6242",
"assets/AssetManifest.bin.json": "e5a5afead394bb053e49622ad47df31d",
"assets/AssetManifest.json": "25904e504312ebcb367b5edc665f5260",
"assets/assets/artefacts/catalog.json": "ec75d6019f7e90f64e6ab215ce7afbf1",
"assets/assets/artefacts/produts_construction_equipment.json": "13c09d9331c0ac318e214e6acac5f95c",
"assets/assets/image/about_us.png": "90a5b123d3e2ce79b059dee5a54a546a",
"assets/assets/image/back_app_bar.png": "9251e06e337dd3d95aae7e5175d64020",
"assets/assets/image/logo.png": "3ef09e106e0aed9da23dce18e8250289",
"assets/assets/image/new_back.jpg": "f3a59adb8e021a16e78d1256e125d760",
"assets/assets/image/non_standard_equipment/container_for_lifting_bricks.png": "c5439a2140eec67a5bc1385c7e942806",
"assets/assets/image/non_standard_equipment/self_opening_container.png": "2d1eaa45fa6533cbdc12c044392d4f3a",
"assets/assets/image/product_construction_equipment/buckets_for_concrete.png": "de199d74f2be79c2ae4f247390c908c2",
"assets/assets/image/product_construction_equipment/circular_sawing_machines_sk_60.png": "55c93772c6c14c8fbf81051782f606cd",
"assets/assets/image/product_construction_equipment/containers_for_solution.png": "cdf184a686675111fd1aa4e1f5603a6e",
"assets/assets/image/product_construction_equipment/cutting_machines.png": "524f75eb28fb10286cac0277eb3643ca",
"assets/assets/image/product_construction_equipment/electric_steel_vibrators.png": "77379602d220e7a5d21356fa237c65ab",
"assets/assets/image/product_construction_equipment/electric_vibrating_plates.png": "6a70d0986e603d4fea343dfe4345e075",
"assets/assets/image/product_construction_equipment/pendulum_cutting_machines.png": "270333f4e0aa51d5e660ca52785e682e",
"assets/assets/image/product_construction_equipment/stanok.png": "24445fd740d08b71fcdb34ed320a3001",
"assets/assets/image/product_construction_equipment/steam_generator_stations.png": "cfa4ad2e4a21d07ed347ea4af67dc821",
"assets/assets/image/product_construction_equipment/the_outrigger_platform_k_1.3.png": "ad7d5d9f49375b673159bb8dba3ff12f",
"assets/assets/image/product_construction_equipment/vibrating_screen_ss_139.png": "1106e86e9e904811b9fd4c960637fac4",
"assets/assets/image/product_construction_equipment/vibrating_tables.png": "fc306c2301a10b37b040ff0e0d933da4",
"assets/assets/image/sirvice.png": "f4d7db960f2098c275025b0d3881469a",
"assets/assets/image/stanki/stanok.png": "59dac7034a6fb418e10237ce5112206c",
"assets/assets/image/stanki/stanok1.png": "8fd2e2842b2501e91a1d05b8111a925e",
"assets/assets/image/stanki/stanok2.png": "ec91e8c7a5867c82ef9d6577105807a4",
"assets/assets/image/tara.jpg": "fb9d7d0ceb10767b63ed7f0ab39479dd",
"assets/assets/image/transformed_service.jpeg": "6d470f364477b5c1bb372e52ed216b2b",
"assets/assets/image/zavod.png": "3c10b26cca71df220a3cf1a05df150a1",
"assets/assets/svg/arrow_down.svg": "9894451cff08961ec69af9214a276ca9",
"assets/assets/svg/arrow_left.svg": "3d8b5ddfbb4a131b21da373ec2df6190",
"assets/assets/svg/arrow_right.svg": "85158774bcd8581e55ecc029292de029",
"assets/assets/svg/logos_telegram.svg": "d6c16bdcb9c121e3cee946a8ccfaf91f",
"assets/assets/svg/logos_whatsapp-icon.svg": "fc9fdbe7202a0e2df0698314cfda15c4",
"assets/assets/svg/more_svg.svg": "7c40e87ae66a7e929e5c4f84e6729a62",
"assets/assets/svg/phone-svgrepo.svg": "5ac9719c1a42f926e80bb1c700ad560f",
"assets/FontManifest.json": "fb94d6ff29d56baa20172300a159c162",
"assets/fonts/MaterialIcons-Regular.otf": "b758412585de277f6fb7a6a10259cf41",
"assets/fonts/Montserrat_Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/fonts/Montserrat_Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/NOTICES": "52d20652a9ad24a4215be6f0145f91f9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "98e1fb5f8a26d499b038c5887c99a385",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d98d5ee2ae7a770909f7ac7be93f67a9",
"/": "d98d5ee2ae7a770909f7ac7be93f67a9",
"main.dart.js": "a9ee7cf8dd2a40da23656eb9abc11661",
"manifest.json": "5c1aca31d862d2eb05e26696a3afcfb0",
"version.json": "351ce7a3ec22552c8c9281a0d3fdac6f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
