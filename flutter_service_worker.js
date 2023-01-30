'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "919ae779c1b635ac914d685e48fe7640",
"assets/assets/fonts/OFL.txt": "7829f3e4363bb3502faa39d1d30d9bd1",
"assets/assets/fonts/Roboto_Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto_MediumOFL.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/images/niStudioUs_logo.png": "dcdd9ac906d78ac5b9ebb6f357a90878",
"assets/assets/images/niStudioUs_logo_light.png": "3d7cecca07079c0ff6dec76b3e0c1c0d",
"assets/assets/images/niStudioUs_logo_light_hd.png": "8f4dc4f0edaf2c8f2495d5b452bac9e6",
"assets/assets/scribble_note/images/favicon.png": "29599795412ceb377b5a5d167143760c",
"assets/assets/scribble_note/images/features/appSettings/choose_background.png": "30c28989f5091885995c0262e937869c",
"assets/assets/scribble_note/images/features/appSettings/sign_in.png": "975d51f6b6a9207a3af54c4a020e1555",
"assets/assets/scribble_note/images/features/appSettings/skip_passcode.png": "cdacdbd5a2b1ebd2208fae67353a17b1",
"assets/assets/scribble_note/images/features/createNotes/gallery_permission.png": "cfd2aa667e1c4db7db4b0a15a1eff6e0",
"assets/assets/scribble_note/images/features/createNotes/tasks_sets.png": "fea5a27c6429e0838987c0de4a5c3f6c",
"assets/assets/scribble_note/images/features/createNotes/task_graph.png": "a3aea23afb45d7afa0921172c86b3aa4",
"assets/assets/scribble_note/images/features/manageAccess/step_1_navigation_settings.png": "424cee4f61cbc3e078c31d52f276025e",
"assets/assets/scribble_note/images/features/manageAccess/step_1_navigation_settings_icon.png": "4b1e58fefe54cc743e664180f8f2fd4a",
"assets/assets/scribble_note/images/features/manageAccess/step_2_manage_apps_app.png": "d6838a9cd1f3d76359965cb2c6024dad",
"assets/assets/scribble_note/images/features/manageAccess/step_2_navigation_manage_apps.png": "eabf1f9ae70180c6c058407ed6086da8",
"assets/assets/scribble_note/images/features/manageAccess/step_3_navigation_options.png": "952ac9d27674be05f9898982cf266c01",
"assets/assets/scribble_note/images/features/manageAccess/step_4_revoke_request.png": "5fe15b64d8d0ea723ccdcd12d44eb94a",
"assets/assets/scribble_note/images/features/manageAccess/step_5_revoke_confirm.png": "86bb0bffa53b786ccdc7074c1069e09a",
"assets/assets/scribble_note/images/features/overview/add_note.png": "4f75de27cd3c3438877bed3e45b6d59a",
"assets/assets/scribble_note/images/features/overview/add_task.png": "f4795692ab902f350e05b65beedd2c32",
"assets/assets/scribble_note/images/features/overview/edit_task.png": "b85c36827b59aaf02515233fb146aba5",
"assets/assets/scribble_note/images/features/overview/feature_overview_set1.png": "6079e198e1220233ea77c348fc24009e",
"assets/assets/scribble_note/images/features/overview/feature_overview_set2.png": "cdc0a29f306561f8e96b08b437e6d892",
"assets/assets/scribble_note/images/features/overview/insert_images.png": "5bcf86676d787c8a31ca76b965171a13",
"assets/assets/scribble_note/images/features/overview/logout.png": "260f0398bd664e75ffa44f2267f22906",
"assets/assets/scribble_note/images/features/overview/logout_button.png": "8b969cc044e0354231bbb1de244c04e6",
"assets/assets/scribble_note/images/features/overview/permission.png": "cfd2aa667e1c4db7db4b0a15a1eff6e0",
"assets/assets/scribble_note/images/features/overview/permission_gallery_denied.png": "1e6c7dfd49e16fbb7ab2cb35747fe31c",
"assets/assets/scribble_note/images/features/overview/profile_information.png": "4e87fdc0f0cf02d52cee40ff5526b223",
"assets/assets/scribble_note/images/features/overview/tasks_view.png": "66d7e4ef326314c2a92b0735a971b835",
"assets/assets/scribble_note/images/features/overview/task_graph.png": "a3aea23afb45d7afa0921172c86b3aa4",
"assets/assets/scribble_note/images/features/overview/themes_animation.png": "43291c844baa320d3ad0512e364932ed",
"assets/assets/scribble_note/images/features/overview/themes_settings.png": "43291c844baa320d3ad0512e364932ed",
"assets/assets/scribble_note/images/features/registration/login_view.png": "b63bcd60b827983c6bfa158ffa4c67b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b2e38a261a0b97bbd232c323d8a8bd1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "39bce4691b99a6446510b1861e31b370",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "0c5f854bc66c8ab4adc809585a428265",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "3b2813bd44c27b4ebfcc43e3d6ae0ea7",
"icons/Icon-512.png": "2594140b3bdcd5c9031403a6d3ea839a",
"icons/Icon-maskable-192.png": "3b2813bd44c27b4ebfcc43e3d6ae0ea7",
"icons/Icon-maskable-512.png": "2594140b3bdcd5c9031403a6d3ea839a",
"index.html": "a67670a321ba84a0a819bb5fd27c841a",
"/": "a67670a321ba84a0a819bb5fd27c841a",
"main.dart.js": "43ed4cd35b33a8991c9825adf9fd7ff8",
"manifest.json": "867f26d2c996adb8923d435ecf6b024c",
"version.json": "5176fe50e8ad2e2c9d5c02a32c7cfe06"
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
