// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"2dVla":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 8080;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "880388a42d02c62c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"h8cLM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndexController", ()=>IndexController);
var _modelJs = require("../model/model.js");
var _viewJs = require("../view/view.js");
class IndexController {
    constructor(){
        this.model = new (0, _modelJs.IndexModel)();
        this.view = new (0, _viewJs.IndexView)();
        this.view.init();
        this.get_latest_news_and_events();
        this.get_index_page_elements();
        this.display_user_email();
        this.view.submit_user_email(this.submit_user_email);
        this.model.get_images().then((res)=>{
            console.log(res);
            this.view.render_images(res.images);
        }).catch((err)=>{
            console.log(err);
        });
    }
    display_user_email = ()=>{
        this.model.registerListener((state)=>{
            this.view.display_user_email(state);
        });
    };
    submit_user_email = (email)=>{
        this.model.submit_user_email(email);
    };
    get_index_page_elements = ()=>{
        this.model.registerListener((state)=>{
            this.view.render_editable_page_elements(state);
        });
        this.model.fetch_index_page_elements();
    };
    get_latest_news_and_events = ()=>{
        this.model.registerListener((state)=>{
            this.view.add_news_and_events(state);
        });
        this.model.fetch_latest_news_and_events();
    };
}

},{"../model/model.js":"jshoh","../view/view.js":"2lF4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jshoh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndexModel", ()=>IndexModel);
class IndexModel {
    constructor(){
        this.state = {
            events_and_news_table: {
                events_table: [],
                news_table: [],
                loading: false,
                error: null
            },
            user_email: {
                loading: false,
                user_email_address: '',
                user_email_submitted: null
            },
            index_page_elements: {
                loading: true,
                a_tag_elements: [],
                estate_elements: {
                    estate_text: {
                    },
                    estate_images: []
                },
                service_images: []
            }
        };
        this.listeners = [];
        this.images = [];
    }
    setState = (newState)=>{
        this.state = {
            ...this.state,
            ...newState
        };
        this.notifyListeners();
        console.log(this.state);
        return this.state;
    };
    registerListener = (listener)=>{
        this.listeners = [
            ...this.listeners,
            listener
        ];
        listener(this.state);
    };
    notifyListeners = ()=>{
        this.listeners.forEach((listener)=>{
            listener(this.state);
        });
    };
    submit_user_email = (email)=>{
        this.setState({
            user_email: {
                loading: true,
                user_email_address: email,
                user_email_submitted: null
            }
        });
        var res, res1, err;
        fetch("http://localhost:3001/api/index-page/submit_user_email", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_email: this.state.user_email.user_email_address
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
            if (res.success && res.data) this.setState({
                user_email: {
                    loading: false,
                    user_email_address: res.data,
                    user_email_submitted: true
                }
            });
        }).catch((err)=>{
            console.log(err);
            this.setState({
                user_email: {
                    loading: false,
                    user_email_address: email,
                    user_email_submitted: false
                }
            });
        });
    };
    fetch_latest_news_and_events = ()=>{
        this.setState({
            events_and_news_table: {
                events_table: [],
                news_table: [],
                loading: true,
                error: null
            }
        });
        var res, res1, err;
        fetch("http://localhost:3001/api/index-page/events_and_news").then((res)=>{
            return res.json();
        }).then((res)=>{
            if (res.status && res.data) this.setState({
                events_and_news_table: {
                    events_table: [
                        ...res.data.events_table
                    ],
                    news_table: [
                        ...res.data.news_table
                    ],
                    loading: false,
                    error: null
                }
            });
        }).catch((err)=>{
            this.setState({
                events_and_news_table: {
                    loading: false,
                    error: err,
                    events_table: [],
                    news_table: []
                }
            });
        });
    };
    // resident involvement section images 
    get_images = ()=>{
        var res, res1, err;
        return fetch("http://localhost:3001/api/resident-involvment-page/get_all_images").then((res)=>{
            return res.json();
        }).then((res)=>{
            if (res.success && res.data.length > 0) {
                console.log(res);
                this.images = res.data;
                return Promise.resolve({
                    status: true,
                    images: this.images
                });
            } else return Promise.reject({
                status: false
            });
        }).catch((err)=>{
            console.log(err);
            return Promise.reject({
                status: false
            });
        });
    };
    fetch_index_page_elements = ()=>{
        this.setState({
            index_page_elements: {
                loading: true,
                a_tag_elements: [],
                estate_elements: {
                    estate_text: '',
                    estate_images: []
                },
                service_images: []
            }
        });
        var res, res1, err;
        fetch("http://localhost:3001/api/index-page/fetch_page_elements").then((res)=>{
            return res.json();
        }).then((res)=>{
            if (res.success) this.setState({
                index_page_elements: {
                    loading: false,
                    a_tag_elements: res.a_tag_elements,
                    estate_elements: {
                        estate_text: res.estate_text,
                        estate_images: res.estate_images
                    },
                    service_images: res.service_images
                }
            });
            else this.setState({
                index_page_elements: {
                    loading: false,
                    a_tag_elements: [],
                    estate_elements: {
                        estate_text: '',
                        estate_images: []
                    },
                    service_images: []
                }
            });
        }).catch((err)=>{
            console.log(err);
            this.setState({
                index_page_elements: {
                    loading: false,
                    a_tag_elements: [],
                    estate_elements: {
                        estate_text: '',
                        estate_images: []
                    },
                    service_images: []
                }
            });
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2lF4C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndexView", ()=>IndexView);
class IndexView {
    constructor(){
        // caching elements that will be used within multiple view functions 
        // caching elements for index_main_article
        this.index_main_article1_div1_span = Array.from(document.getElementsByClassName("index-main-article1-div1-span"));
        this.index_main_article1_div2 = document.getElementById("index-main-article1-div2");
        this.index_main_article1_div3 = document.getElementById("index-main-article1-div3");
        this.index_main_article1_div4 = document.getElementById("index-main-article1-div4");
        this.index_main_article1_div5_span = Array.from(document.getElementsByClassName("index-main-article1-div5-span"));
        // caching elements for index_main_section1
        this.index_main_section1_nav1_span1 = Array.from(document.getElementsByClassName("index-main-section1-nav1-span1"));
        this.index_main_section1_div1 = document.getElementById("index-main-section1-div1");
        this.index_main_section1_div2 = document.getElementById("index-main-section1-div2");
        this.index_main_section1_div3 = document.getElementById("index-main-section1-div3");
        // caching elements for add latest news and events
        this.index_main_section1_div1_div4 = Array.from(document.getElementsByClassName("index-main-section1-div1-div4"));
        this.events_main_div = document.getElementById("index-main-section1-div2");
        this.news_main_div = document.getElementById("index-main-section1-div1");
        // caching variables for index_main_article1 & section1 setinterval timers
        this.index_main_article_set_timeout = null;
        this.index_main_section1_set_timeout = null;
        // stopping multiple rerenders on state change for latest news and events
        this.stop_latest_news_rerendering = false;
        this.stop_latest_events_rerendering = false;
        // init function for view functions that dont require state
        this.init = ()=>{
            this.index_main_article1_slideshow();
            this.index_main_section1_slideshow();
            this.event_listeners_for_index_main_section1_and_article1_slideshow();
        };
    }
    // function for index_main_article1_slideshow
    index_main_article1_slideshow = ()=>{
        // default number for slideshow to start on 
        let number = 1;
        // set interval function for slideshow (6 seconds)
        this.index_main_article_set_timeout = setInterval(()=>{
            console.log(`index-main-article1 slidwshow working`);
            // Remove current selected classes from navbars
            this.index_main_article1_div1_span.forEach((span, index)=>{
                span.classList.remove("index-main-article1-div1-span-selected");
            });
            this.index_main_article1_div5_span.forEach((span, index)=>{
                span.classList.remove("index-main-article1-div5-span-selected");
            });
            // Hide all article divs
            this.index_main_article1_div2.style.display = 'none';
            this.index_main_article1_div3.style.display = 'none';
            this.index_main_article1_div4.style.display = 'none';
            // Add selected class to correct navbars
            this.index_main_article1_div1_span[number].classList.add("index-main-article1-div1-span-selected");
            this.index_main_article1_div5_span[number].classList.add("index-main-article1-div5-span-selected");
            // conditional statement to render correct article based of default number
            switch(number){
                case 0:
                    this.index_main_article1_div2.style.display = 'block';
                    break;
                case 1:
                    this.index_main_article1_div3.style.display = 'flex';
                    break;
                case 2:
                    this.index_main_article1_div4.style.display = 'flex';
                    break;
            }
            // loop through 3 default numbers 
            number = (number + 1) % 3;
        }, 14000);
    };
    // function for index_main_section1_slideshow
    index_main_section1_slideshow = ()=>{
        // default number for slideshow to start on 
        let number = 1;
        // set interval function for slideshow (8 seconds)
        this.index_main_section1_set_timeout = setInterval(()=>{
            console.log(`index-main-section1 slidwshow working`);
            // Remove current selected classes from navbar
            this.index_main_section1_nav1_span1.forEach((span, index)=>{
                span.classList.remove("index-main-section1-nav1-span1-selected");
            });
            // Hide all article divs
            this.index_main_section1_div1.style.display = 'none';
            this.index_main_section1_div2.style.display = 'none';
            this.index_main_section1_div3.style.display = 'none';
            // Add selected class to correct navbars
            this.index_main_section1_nav1_span1[number].classList.add("index-main-section1-nav1-span1-selected");
            // conditional statement to render correct article based of default number
            switch(number){
                case 0:
                    this.index_main_section1_div1.style.display = 'block';
                    break;
                case 1:
                    this.index_main_section1_div2.style.display = 'block';
                    break;
                case 2:
                    this.index_main_section1_div3.style.display = 'block';
                    break;
            }
            // loop through 3 default numbers 
            number = (number + 1) % 3;
        }, 12000);
    };
    // function to add eventlisteners for index_main_section1 & article1
    // to click selected articles and cancel slideshow
    event_listeners_for_index_main_section1_and_article1_slideshow = ()=>{
        // event listeners for index_main_article navbar
        this.index_main_article1_div1_span.forEach((span)=>{
            span.addEventListener("click", ()=>{
                this.index_main_article1_div1_span.forEach((span)=>{
                    span.classList.remove("index-main-article1-div1-span-selected");
                });
                this.index_main_article1_div5_span.forEach((span)=>{
                    span.classList.remove("index-main-article1-div5-span-selected");
                });
                this.index_main_article1_div2.style.display = 'none';
                this.index_main_article1_div3.style.display = 'none';
                this.index_main_article1_div4.style.display = 'none';
                clearInterval(this.index_main_article_set_timeout);
                switch(span.id){
                    case "index-main-article1-div1-span1":
                        span.classList.add("index-main-article1-div1-span-selected");
                        this.index_main_article1_div2.style.display = 'block';
                        this.index_main_article1_div5_span.forEach((span)=>{
                            if (span.id === "index-main-article1-div5-span1") span.classList.add("index-main-article1-div5-span-selected");
                        });
                        break;
                    case "index-main-article1-div1-span2":
                        span.classList.add("index-main-article1-div1-span-selected");
                        this.index_main_article1_div3.style.display = 'flex';
                        this.index_main_article1_div5_span.forEach((span)=>{
                            if (span.id === "index-main-article1-div5-span2") span.classList.add("index-main-article1-div5-span-selected");
                        });
                        break;
                    case "index-main-article1-div1-span3":
                        span.classList.add("index-main-article1-div1-span-selected");
                        this.index_main_article1_div4.style.display = 'flex';
                        this.index_main_article1_div5_span.forEach((span)=>{
                            if (span.id === "index-main-article1-div5-span3") span.classList.add("index-main-article1-div5-span-selected");
                        });
                        break;
                }
            });
        });
        // event listeners for index_main_article footer
        this.index_main_article1_div5_span.forEach((span)=>{
            span.addEventListener("click", ()=>{
                this.index_main_article1_div1_span.forEach((span)=>{
                    span.classList.remove("index-main-article1-div1-span-selected");
                });
                this.index_main_article1_div5_span.forEach((span)=>{
                    span.classList.remove("index-main-article1-div5-span-selected");
                });
                this.index_main_article1_div2.style.display = 'none';
                this.index_main_article1_div3.style.display = 'none';
                this.index_main_article1_div4.style.display = 'none';
                clearInterval(this.index_main_article_set_timeout);
                switch(span.id){
                    case "index-main-article1-div5-span1":
                        span.classList.add("index-main-article1-div5-span-selected");
                        this.index_main_article1_div2.style.display = 'block';
                        this.index_main_article1_div1_span.forEach((span)=>{
                            if (span.id === "index-main-article1-div1-span1") span.classList.add("index-main-article1-div1-span-selected");
                        });
                        break;
                    case "index-main-article1-div5-span2":
                        span.classList.add("index-main-article1-div5-span-selected");
                        this.index_main_article1_div3.style.display = 'flex';
                        this.index_main_article1_div1_span.forEach((span)=>{
                            if (span.id === "index-main-article1-div1-span2") span.classList.add("index-main-article1-div1-span-selected");
                        });
                        break;
                    case "index-main-article1-div5-span3":
                        span.classList.add("index-main-article1-div5-span-selected");
                        this.index_main_article1_div4.style.display = 'flex';
                        this.index_main_article1_div1_span.forEach((span)=>{
                            if (span.id === "index-main-article1-div1-span3") span.classList.add("index-main-article1-div1-span-selected");
                        });
                        break;
                }
            });
        });
        // event listeners for index_main_section1
        this.index_main_section1_nav1_span1.forEach((span)=>{
            span.addEventListener("click", ()=>{
                this.index_main_section1_nav1_span1.forEach((span)=>{
                    span.classList.remove("index-main-section1-nav1-span1-selected");
                });
                this.index_main_section1_div1.style.display = 'none';
                this.index_main_section1_div2.style.display = 'none';
                this.index_main_section1_div3.style.display = 'none';
                clearInterval(this.index_main_section1_set_timeout);
                switch(span.id){
                    case "index-main-section1-nav1-span1":
                        span.classList.add("index-main-section1-nav1-span1-selected");
                        this.index_main_section1_div1.style.display = 'block';
                        break;
                    case "index-main-section1-nav1-span2":
                        span.classList.add("index-main-section1-nav1-span1-selected");
                        this.index_main_section1_div2.style.display = 'block';
                        break;
                    case "index-main-section1-nav1-span3":
                        span.classList.add("index-main-section1-nav1-span1-selected");
                        this.index_main_section1_div3.style.display = 'flex';
                        break;
                }
            });
        });
    };
    // function to add latest news/events on homepage
    add_news_and_events = (state)=>{
        if (state.events_and_news_table.loading) this.index_main_section1_div1_div4.forEach((div)=>{
            div.style.display = 'flex';
        });
        else {
            this.index_main_section1_div1_div4.forEach((div)=>{
                div.style.display = 'none';
            });
            if (state.events_and_news_table.events_table.length > 0 || state.events_and_news_table.news_table.length > 0) {
                if (state.events_and_news_table.events_table.length > 0 && !this.stop_latest_events_rerendering) {
                    state.events_and_news_table.events_table.forEach((event)=>{
                        const div1 = document.createElement("div");
                        const div2 = document.createElement("div");
                        const div3 = document.createElement("div");
                        const h4 = document.createElement("h4");
                        const h5 = document.createElement("h5");
                        const p = document.createElement("p");
                        const a = document.createElement("a");
                        const span = document.createElement("span");
                        this.events_main_div.append(div1);
                        div1.append(div2, div3);
                        div2.append(span, h4);
                        div3.append(h5, a);
                        a.appendChild(p);
                        div1.classList.add("index-main-section1-div1-div1");
                        div2.classList.add("index-main-section1-div1-div1-div1");
                        h4.classList.add("index-main-section1-div1-div1-div1-h4");
                        span.classList.add("index-main-section1-div1-div1-div1-h4-span");
                        div3.classList.add("index-main-section1-div1-div1-div2");
                        h5.classList.add("index-main-section1-div1-div1-div2-h5");
                        a.classList.add("index-main-section1-div1-div1-div2-a");
                        a.setAttribute("href", "./events.html");
                        p.classList.add("index-main-section1-div1-div1-div2-a-p");
                        span.textContent = `${event.event_headline}:`;
                        h4.textContent = event.event_description;
                        h5.textContent = event.event_date;
                        p.textContent = `Click here for more Information`;
                    });
                    const div = document.createElement("div");
                    const a = document.createElement("a");
                    this.events_main_div.append(div);
                    div.append(a);
                    div.classList.add("index-main-section1-div1-div2");
                    a.classList.add("index-main-section1-div1-div2-a");
                    a.setAttribute("href", "./events.html");
                    a.textContent = `Click here for More Events`;
                    this.stop_latest_events_rerendering = true;
                }
                if (state.events_and_news_table.news_table.length > 0 && !this.stop_latest_news_rerendering) {
                    state.events_and_news_table.news_table.forEach((news)=>{
                        const div1 = document.createElement("div");
                        const div2 = document.createElement("div");
                        const div3 = document.createElement("div");
                        const h4 = document.createElement("h4");
                        const h5 = document.createElement("h5");
                        const p = document.createElement("p");
                        const a = document.createElement("a");
                        const span = document.createElement("span");
                        this.news_main_div.append(div1);
                        div1.append(div2, div3);
                        div2.append(span, h4);
                        div3.append(h5, a);
                        a.appendChild(p);
                        div1.classList.add("index-main-section1-div1-div1");
                        div2.classList.add("index-main-section1-div1-div1-div1");
                        h4.classList.add("index-main-section1-div1-div1-div1-h4");
                        span.classList.add("index-main-section1-div1-div1-div1-h4-span");
                        div3.classList.add("index-main-section1-div1-div1-div2");
                        h5.classList.add("index-main-section1-div1-div1-div2-h5");
                        a.classList.add("index-main-section1-div1-div1-div2-a");
                        a.setAttribute("href", "./events.html");
                        p.classList.add("index-main-section1-div1-div1-div2-a-p");
                        span.textContent = `${news.news_headline}:`;
                        h4.textContent = news.news_article;
                        h5.textContent = news.news_date;
                        p.textContent = `Click here for more Information`;
                    });
                    const div = document.createElement("div");
                    const a = document.createElement("a");
                    this.news_main_div.append(div);
                    div.append(a);
                    div.classList.add("index-main-section1-div1-div2");
                    a.classList.add("index-main-section1-div1-div2-a");
                    a.setAttribute("href", "./news.html");
                    a.textContent = `Click here for More News`;
                    this.stop_latest_news_rerendering = true;
                }
            } else {
                this.index_main_section1_div1_div4.forEach((div)=>{
                    div.style.display = 'none';
                });
                if (state.events_and_news_table.events_table.length === 0 || state.events_and_news_table.news_table.length === 0) {
                    if (state.events_and_news_table.events_table.length === 0 && !this.stop_latest_events_rerendering) {
                        const div = document.createElement("div");
                        const h4 = document.createElement("div");
                        this.events_main_div.append(div);
                        div.append(h4);
                        div.classList.add("index-main-section1-div1-div3");
                        div.setAttribute("id", "no-events-display");
                        h4.classList.add("index-main-section1-div1-div3-h4");
                        h4.textContent = "Currently No Events to Display";
                        this.stop_latest_events_rerendering = true;
                    }
                    if (state.events_and_news_table.news_table.length === 0 && !this.stop_latest_news_rerendering) {
                        const div = document.createElement("div");
                        const h4 = document.createElement("div");
                        this.news_main_div.append(div);
                        div.append(h4);
                        div.classList.add("index-main-section1-div1-div3");
                        div.setAttribute("id", "no-news-display");
                        h4.classList.add("index-main-section1-div1-div3-h4");
                        h4.textContent = "Currently No News to Display";
                        this.stop_latest_news_rerendering = true;
                    }
                }
            }
        }
    };
    display_user_email = (state)=>{
        console.log(state.user_email);
        // if loading is true
        if (state.user_email.loading) {
            const index_main_section1_div3_span2 = document.getElementById("index-main-section1-div3-span2");
            const index_main_section1_div3_span2_h5 = document.getElementById("index-main-section1-div3-span2-h5");
            const loading = document.getElementById("index-main-section1-div3-span2-div1");
            index_main_section1_div3_span2.style.display = "flex";
            index_main_section1_div3_span2_h5.style.display = 'none';
            loading.style.display = 'block';
        } else {
            // if not loading and email sucessfully submitted
            if (!state.user_email.loading && state.user_email.user_email_submitted) {
                const index_main_section1_div3_span1_input1 = document.getElementById("index-main-section1-div3-span1-input1");
                const index_main_section1_div3_span2 = document.getElementById("index-main-section1-div3-span2");
                const index_main_section1_div3_span2_h5 = document.getElementById("index-main-section1-div3-span2-h5");
                const loading = document.getElementById("index-main-section1-div3-span2-div1");
                index_main_section1_div3_span2.style.display = "flex";
                index_main_section1_div3_span2_h5.style.display = 'flex';
                loading.style.display = 'none';
                index_main_section1_div3_span2_h5.classList.remove("index-main-section1-div3-span2-h5-error");
                index_main_section1_div3_span2_h5.classList.add("index-main-section1-div3-span2-h5-submitted");
                index_main_section1_div3_span2_h5.textContent = `Email Successfully submitted: ${state.user_email.user_email_address}`;
                index_main_section1_div3_span1_input1.value = '';
            } else if (!state.user_email.loading && state.user_email.user_email_submitted === false) {
                const index_main_section1_div3_span1_input1 = document.getElementById("index-main-section1-div3-span1-input1");
                const index_main_section1_div3_span2 = document.getElementById("index-main-section1-div3-span2");
                const index_main_section1_div3_span2_h5 = document.getElementById("index-main-section1-div3-span2-h5");
                const loading = document.getElementById("index-main-section1-div3-span2-div1");
                index_main_section1_div3_span2.style.display = "flex";
                index_main_section1_div3_span2_h5.style.display = 'flex';
                loading.style.display = 'none';
                index_main_section1_div3_span2_h5.classList.remove("index-main-section1-div3-span2-h5-submitted");
                index_main_section1_div3_span2_h5.classList.add("index-main-section1-div3-span2-h5-error");
                index_main_section1_div3_span2_h5.textContent = `Error Submitting Email`;
                index_main_section1_div3_span1_input1.value = '';
            }
        }
    };
    // function to send email input value to model 
    submit_user_email = (controllerFunction)=>{
        // cache input and btn
        const index_main_section1_div3_span1_btn1 = document.getElementById("index-main-section1-div3-span1-btn1");
        const index_main_section1_div3_span1_input1 = document.getElementById("index-main-section1-div3-span1-input1");
        // event listener for btn
        index_main_section1_div3_span1_btn1.addEventListener("click", ()=>{
            // if successful email enter
            if (index_main_section1_div3_span1_input1.value.length > 0 && index_main_section1_div3_span1_input1.value.includes("@") && index_main_section1_div3_span1_input1.value.includes(".") && index_main_section1_div3_span1_input1.value.length > 5) controllerFunction(index_main_section1_div3_span1_input1.value.trim());
            else {
                const index_main_section1_div3_span1_input1 = document.getElementById("index-main-section1-div3-span1-input1");
                const index_main_section1_div3_span2 = document.getElementById("index-main-section1-div3-span2");
                const index_main_section1_div3_span2_h5 = document.getElementById("index-main-section1-div3-span2-h5");
                const loading = document.getElementById("index-main-section1-div3-span2-div1");
                index_main_section1_div3_span2.style.display = "flex";
                index_main_section1_div3_span2_h5.style.display = 'flex';
                loading.style.display = 'none';
                index_main_section1_div3_span2_h5.classList.remove("index-main-section1-div3-span2-h5-submitted");
                index_main_section1_div3_span2_h5.classList.add("index-main-section1-div3-span2-h5-error");
                index_main_section1_div3_span2_h5.textContent = `Error Submitting Email ${index_main_section1_div3_span1_input1.value}`;
                index_main_section1_div3_span1_input1.value = '';
            }
        });
    };
    // function for resident in
    render_images = (images)=>{
        const img1 = document.getElementById("index-section2-div2-section1-div-img1");
        const img2 = document.getElementById("index-section2-div2-section1-div-img2");
        // Add fade class
        img1.classList.add("fade");
        img2.classList.add("fade");
        // Split arrays
        const array1 = images.filter((img)=>img.image_dev_url !== "http://localhost:3001/images/resident-involvment-images/resident-involvment8.webp" && img.image_dev_url !== "http://localhost:3001/images/resident-involvment-images/resident-involvment9.webp");
        const array2 = images.filter((img)=>img.image_dev_url === "http://localhost:3001/images/resident-involvment-images/resident-involvment8.webp" || img.image_dev_url === "http://localhost:3001/images/resident-involvment-images/resident-involvment9.webp");
        // Helper to choose URL
        const getSrc = (img)=>(0, img.image_dev_url);
        // --- Smooth update function ---
        const updateImage = (imgElement, newSrc)=>{
            imgElement.classList.add("hide"); // fade out
            setTimeout(()=>{
                imgElement.src = newSrc; // change src after fade out
                imgElement.classList.remove("hide"); // fade back in
            }, 1000); // matches CSS transition duration
        };
        // --- img1 loop (every 7s through array1) ---
        let i1 = 0;
        if (array1.length > 0) {
            img1.src = getSrc(array1[i1]);
            setInterval(()=>{
                i1 = (i1 + 1) % array1.length;
                updateImage(img1, getSrc(array1[i1]));
            }, 5000);
        }
        // --- img2 loop (every 10s through array2) ---
        let i2 = 0;
        if (array2.length > 0) {
            img2.src = getSrc(array2[i2]);
            setInterval(()=>{
                i2 = (i2 + 1) % array2.length;
                updateImage(img2, getSrc(array2[i2]));
            }, 15000);
        }
    };
    render_editable_page_elements = (state)=>{
        //caching html elements
        const a_tag1 = document.getElementById("a_tag1");
        const a_tag2 = document.getElementById("a_tag2");
        const about_estate_text_main_div = document.getElementById("index-section3-article1-div1");
        const about_estate_images_main_div = document.getElementById("index-section3-article1-div2");
        const service_images_main_div1 = document.getElementById("index-section1-section1-div1");
        const service_images_main_div2 = document.getElementById("index-section1-section1-div2");
        // if elements content is loading
        if (state.index_page_elements.loading) {
            console.log("loading");
            // creating loading divs,setting attributes and appending to dom
            const a_tag1_loading = document.createElement("div");
            a_tag1_loading.classList.add("loading", "index-main-atag-loading");
            a_tag1.replaceChildren();
            a_tag1.appendChild(a_tag1_loading);
            const a_tag2_loading = document.createElement("div");
            a_tag2_loading.classList.add("loading", "index-main-atag-loading");
            a_tag2.replaceChildren();
            a_tag2.appendChild(a_tag2_loading);
            const loadingDiv = document.getElementById("estates_text-loading");
            if (!loadingDiv) {
                const about_estate_text_main_div_loading = document.createElement("div");
                about_estate_text_main_div_loading.classList.add("loading");
                about_estate_text_main_div_loading.setAttribute("id", "estates_text-loading");
                about_estate_text_main_div.appendChild(about_estate_text_main_div_loading);
            }
            const about_estate_images_main_div_loading = document.createElement("div");
            about_estate_images_main_div_loading.classList.add("loading");
            about_estate_images_main_div.replaceChildren();
            about_estate_images_main_div.appendChild(about_estate_images_main_div_loading);
            const service_images_main_div_loading = document.createElement("div");
            service_images_main_div_loading.classList.add("loading");
            service_images_main_div1.replaceChildren();
            service_images_main_div2.replaceChildren();
            service_images_main_div1.appendChild(service_images_main_div_loading);
            service_images_main_div2.appendChild(service_images_main_div_loading.cloneNode(true));
        } else {
            // set a_tag elements
            state.index_page_elements.a_tag_elements.forEach((a_tag, index)=>{
                if (a_tag.id === "a_tag1") {
                    a_tag1.replaceChildren();
                    a_tag1.setAttribute("href", (0, a_tag.development_src));
                    const p = document.createElement("p");
                    p.classList.add("index-main-article1-div2-a1-p");
                    p.textContent = a_tag.title;
                    a_tag1.appendChild(p);
                    console.log(a_tag1);
                } else if (a_tag.id === "a_tag2") {
                    a_tag2.replaceChildren();
                    a_tag2.setAttribute("href", (0, a_tag.development_src));
                    const p = document.createElement("p");
                    p.classList.add("index-main-article1-div2-a1-p");
                    p.textContent = a_tag.title;
                    a_tag2.appendChild(p);
                }
                return;
            });
            // set about_estate_text text = 
            const estate_text_p = document.createElement("p");
            estate_text_p.setAttribute("id", state.index_page_elements.estate_elements.estate_text.id);
            estate_text_p.textContent = state.index_page_elements.estate_elements.estate_text;
            const loadingDiv = document.getElementById("estates_text-loading");
            console.log(loadingDiv);
            about_estate_text_main_div.removeChild(loadingDiv);
            about_estate_text_main_div.appendChild(estate_text_p);
            // set about_estate_images 
            about_estate_images_main_div.replaceChildren();
            state.index_page_elements.estate_elements.estate_images.forEach((img)=>{
                if (img.id === "index-section3-article1-div1-img1") {
                    const newImg = document.createElement("img");
                    newImg.setAttribute("id", img.id);
                    newImg.setAttribute("src", (0, img.development_src));
                    about_estate_images_main_div.appendChild(newImg);
                } else if (img.id === "index-section3-article1-div1-img2") {
                    const newImg = document.createElement("img");
                    newImg.setAttribute("id", img.id);
                    newImg.setAttribute("src", (0, img.development_src));
                    about_estate_images_main_div.appendChild(newImg);
                }
                return;
            });
            // set service_images
            service_images_main_div1.replaceChildren();
            service_images_main_div2.replaceChildren();
            state.index_page_elements.service_images.forEach((newImg)=>{
                const set_service_images_main_div1 = (newImg)=>{
                    const a = document.createElement("a");
                    const img = document.createElement("img");
                    const p = document.createElement("p");
                    a.classList.add("index-section1-section1-div-a");
                    a.setAttribute("href", "./services.html");
                    img.classList.add("index-section1-section1-div-a-img");
                    img.setAttribute("src", (0, newImg.development_src));
                    img.setAttribute("id", newImg.id);
                    p.classList.add("index-section1-section1-div-a-p");
                    p.textContent = newImg.title;
                    a.append(img, p);
                    service_images_main_div1.appendChild(a);
                };
                const set_service_images_main_div2 = (newImg)=>{
                    const a = document.createElement("a");
                    const img = document.createElement("img");
                    const p = document.createElement("p");
                    a.classList.add("index-section1-section1-div-a");
                    a.setAttribute("href", "./services.html");
                    img.classList.add("index-section1-section1-div-a-img");
                    img.setAttribute("src", (0, newImg.development_src));
                    img.setAttribute("id", newImg.id);
                    p.classList.add("index-section1-section1-div-a-p");
                    p.textContent = newImg.title;
                    a.append(img, p);
                    service_images_main_div2.appendChild(a);
                };
                switch(newImg.id){
                    case "index-section1-section1-div-a-img-r&m":
                        set_service_images_main_div1(newImg);
                        break;
                    case "index-section1-section1-div-a-img-movp":
                        set_service_images_main_div1(newImg);
                        break;
                    case "index-section1-section1-div-a-img-caec":
                        set_service_images_main_div1(newImg);
                        break;
                    case "index-section1-section1-div-a-img-taem":
                        set_service_images_main_div1(newImg);
                        break;
                    case "index-section1-section1-div-a-img-lettings":
                        set_service_images_main_div2(newImg);
                        break;
                    case "index-section1-section1-div-a-img-ha":
                        set_service_images_main_div2(newImg);
                        break;
                    case "index-section1-section1-div-a-img-governance":
                        set_service_images_main_div2(newImg);
                        break;
                    case "index-section1-section1-div-a-img-rs":
                        set_service_images_main_div2(newImg);
                        break;
                }
            });
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2dVla"], null, "parcelRequire8ea6", {})

//# sourceMappingURL=controller.2d02c62c.js.map
