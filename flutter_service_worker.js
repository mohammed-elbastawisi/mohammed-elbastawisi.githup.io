'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "042e77d9310d646aa17cffc5cadf9eaa",
"index.html": "8f97ea1f432c22a30fed6387aee95b3b",
"/": "8f97ea1f432c22a30fed6387aee95b3b",
"main.dart.js": "1984fc7d53974343551c4effbf2d77f2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3bc4082ad77887027b304dae02b1b11f",
"assets/AssetManifest.json": "65da9421c7cdf522f327dd901c05f5b5",
"assets/NOTICES": "01d0ea1d4fa01f4a3cd3b45ef6256457",
"assets/FontManifest.json": "750e8f9c4dc7d6afe609529eccb8a0a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "631de6e7ae710df9f59118398e48de69",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/home/info.png": "fd7b13e836c836182fbcaca8fe89152b",
"assets/assets/images/home/restaurantIcon_2.png": "172482805f83e0f37b28aaa5cf926e91",
"assets/assets/images/home/restaurantIcon_1.png": "d5348ec5361af5ec44f621fffe16d8b0",
"assets/assets/images/home/pin.png": "3a6cec617bd49855d773e555bcbbac36",
"assets/assets/images/home/pizza-slice.png": "93633cf7179eacd9b7e7b1a3a2a61409",
"assets/assets/images/home/dot.png": "6ba42aa482d36eb5f2a62fce52c11ef9",
"assets/assets/images/home/textFieldPin.png": "17d1973da65d2d9acad00d1fed9cf289",
"assets/assets/images/home/review.png": "ddec0197e6ed073d9dea0f23c40108a3",
"assets/assets/images/home/map.png": "51aa797b3aaee74a69f1b55cee1a959f",
"assets/assets/images/home/Vector.png": "ddbc22d3358515b5f66b13fd73850d8b",
"assets/assets/images/home/track.png": "67f823f4efb14999ab034fdf0b7849d4",
"assets/assets/images/home/heart.png": "f4967206c7e99db39474612fefd63df9",
"assets/assets/images/home/meal_3.png": "122c4fea12012cb761c72bad601a5ae3",
"assets/assets/images/home/photo_1.png": "7a618605c8030bc56a2f6fe0465ab1f0",
"assets/assets/images/home/alarm.png": "3bf8597cc76e90d61c8724c39d8da357",
"assets/assets/images/home/meal_2.png": "7710077e197a6e53a95068069c83b841",
"assets/assets/images/home/photo_2.png": "0930f72709c9ad3fddf2f909d34fce5c",
"assets/assets/images/home/meal_1.png": "24292b5a2dd5539dee4e24ff26dd5641",
"assets/assets/images/home/scanImage.png": "75e69ccc29b632ac6b51a139092f2db2",
"assets/assets/images/home/chicken-leg.png": "a9065d7aed2012ac732fdd490470f07c",
"assets/assets/images/home/mainImage.png": "9abfef5b1c60ed970e3ec3d3356d02ea",
"assets/assets/images/home/line_forward.png": "2ce76eb9f322030e3ce098145148076f",
"assets/assets/images/home/feel.png": "a949652d6919aa9ce6fb302349cb4f68",
"assets/assets/images/home/couple.png": "de081b420cf2c564c1f1b5ec333ff6b2",
"assets/assets/images/home/star.png": "48ecf92ac027067e55820145add25138",
"assets/assets/images/home/notification.png": "056815791434ddefc401c3337f265ec0",
"assets/assets/images/home/res1.png": "a3af03daa3d9e43bd95964649b952f8f",
"assets/assets/images/home/Dine%2520App.zip": "60fd9aa0bfc00f116775b295f7ba72e9",
"assets/assets/images/home/burger.png": "03b7d4695c1c5da943a2b7afb9164c01",
"assets/assets/images/home/res2.png": "5e26b5b866dee0052231dc67ed943a54",
"assets/assets/images/in_restaurant_images/shared.png": "233ee19e3b248a711fae8875541a7a3d",
"assets/assets/images/in_restaurant_images/in_restaurant.png": "2a671feea670ce75da6d536d2b44f306",
"assets/assets/images/in_restaurant_images/shopping.png": "6466a4495b9d56a7361afbc9180e4faa",
"assets/assets/images/in_restaurant_images/menu_background.png": "cc08cea593201a1fd3f179c940836fe6",
"assets/assets/images/in_restaurant_images/welcome_image.png": "94d77caa7d05c1ed567cbfe78eb72bcd",
"assets/assets/images/in_restaurant_images/meal_2.png": "045b12239cf945e9b09f7ec5b2e8482d",
"assets/assets/images/in_restaurant_images/fast-food.png": "f787298a56ea57712dbcc6bda5e9c6b1",
"assets/assets/images/in_restaurant_images/meal_1.png": "d71428d804bf65a43d54b4cb5709e9c5",
"assets/assets/images/in_restaurant_images/clock.png": "22fd4b3894db884bdff19e9b5031afe5",
"assets/assets/images/in_restaurant_images/pizza.png": "bc55e14ecd116cca28bd269a2071a9f9",
"assets/assets/images/in_restaurant_images/pasta.png": "668fa65bcb23468b974093e5dc3f60a7",
"assets/assets/images/in_restaurant_images/takeaway.png": "201468bf6e8f82aaa118daf051f9840a",
"assets/assets/images/in_restaurant_images/burger.png": "8f751fe3683eafe98feaef813459cab6",
"assets/assets/images/myPlaces/line_backward.png": "6a3617ad550b0b3a605281ded8c18360",
"assets/assets/images/myPlaces/trash.png": "80579f62b56a9f2300654345a9aade64",
"assets/assets/images/myPlaces/locationIcon.png": "b931cf04e9d56e56682183a9dd5db61c",
"assets/assets/images/myPlaces/resIcon.png": "9b62862833de2c842db3638b3e1f519a",
"assets/assets/images/myPlaces/order_image.png": "142f22b89976d2cec09fe6e29f787ac7",
"assets/assets/images/scan/background.png": "e7572b4e4a77b6788c12276115defc92",
"assets/assets/images/scan/sync_arrows.png": "c703da380dd58814be93bf85afd1bf95",
"assets/assets/images/more/bell.png": "d67562f891f7bd34539d2060ea8dcb93",
"assets/assets/images/more/userImage.png": "14d6f7c1c179e93f5eff42a38c247f28",
"assets/assets/images/more/settings.png": "84d2b95a5c9473533e9d970dec578a37",
"assets/assets/images/more/file-text.png": "ed1ac59c76b07a7df1871d85d800c546",
"assets/assets/images/more/logout.png": "2292b0e6e15eedac8c8bfb0b95ff5c9f",
"assets/assets/images/more/bell-white.png": "674f9964d9875034afd844b1ebe8ac87",
"assets/assets/images/more/heart.png": "9d411e64433b104dfc75a067b09c84bd",
"assets/assets/images/more/share.png": "25034108502570ab5d3f5caa72cc212b",
"assets/assets/images/more/notification.png": "afe8398ab1699f5ac62fc314b2169a05",
"assets/assets/images/explore/bread.png": "678d205c8c8076c08942d2d121940a02",
"assets/assets/images/explore/dinner.png": "0dbda1fff1b6adf5813ae59c3147f306",
"assets/assets/images/explore/filterIcon.png": "8d9b127ba8d3916404560d09c87d46f1",
"assets/assets/images/explore/breakfast.png": "c21335ac7c419b27ac0a8702204bb3fd",
"assets/assets/images/explore/pasta.png": "b1b78873cb169afe288a15fe3dd3f094",
"assets/assets/images/explore/launch.png": "872307a0f8aa3bb3a8faf06ba2602366",
"assets/assets/images/login/email.png": "efe60db3fc7952f2db9dc96608ec0fe0",
"assets/assets/images/login/login.png": "6c47fe89e23e9d6f1b685aee3a28f27e",
"assets/assets/images/login/UserIcon.png": "1b9d82bb83d4ed060e8a8533099c6987",
"assets/assets/images/login/EyeClosedIcon.png": "e6a76c0c6138fe0df6b6372bd17d2b30",
"assets/assets/images/login/LockIcon.png": "6e1aab3cf09a82fcfa2f88cd17e65d6a",
"assets/assets/images/login/SmartPhoneIcon.png": "980ed7b51eb0c8b0954268dfc1f5f01e",
"assets/assets/images/bottomBar/home.png": "df16afd12ef89cf29cf17ab491921e10",
"assets/assets/images/bottomBar/qr-code-scan.png": "32286ea15c1ab5da5b37a6557873c091",
"assets/assets/images/bottomBar/search.png": "a9ab4ccbcffdd12abbc32f8740e06c63",
"assets/assets/images/bottomBar/myPlaces.png": "f55ebdebe8545b260393e900fed3f9f9",
"assets/assets/images/bottomBar/home_unselected.png": "b0eea09fa2502d0c86aec645bf3ac28b",
"assets/assets/images/bottomBar/more.png": "4caa9a4d19204459f80850e1bf5395db",
"assets/assets/images/onboarding/onboardingDots_2.png": "790e19383eaa0c3a75eec5e541c2cb3b",
"assets/assets/images/onboarding/onboardingDots_1.png": "80d88e65f1ca49dfefe1dc43bc20fa9c",
"assets/assets/images/onboarding/onboardingDots.png": "b8ed8e908eb7577d8de47a0fe1f60744",
"assets/assets/images/onboarding/onboarding_4.png": "3c14a8e9a3fb79faa7272d234c3ea8de",
"assets/assets/images/onboarding/onboarding_1.png": "10c5b9eddca0bbdeca972d83e433661e",
"assets/assets/images/onboarding/onboarding_3.png": "d198dfbbab03c712fab4158b5f6eee17",
"assets/assets/images/onboarding/onboarding_2.png": "6610b7f778f1929bb9acb38005b6cdfc",
"assets/assets/fonts/ElMessiri-Regular.ttf": "04557065a426bd218b5acde9ae3c4695",
"assets/assets/fonts/ProximaNova.ttf": "bf9f5d50c1b928ff21436517a1a95ad9",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
