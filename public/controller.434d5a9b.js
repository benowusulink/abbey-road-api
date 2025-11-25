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
})({"5Jjbh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 8080;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e38af3a9434d5a9b";
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

},{}],"1py3K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Estates_controller", ()=>Estates_controller);
var _modelJs = require("../model/model.js");
var _viewJs = require("../view/view.js");
class Estates_controller {
    constructor(){
        this.model = new (0, _modelJs.Estates_model)();
        this.view = new (0, _viewJs.Estates_view)();
        this.model.registerListener((state)=>{
            this.view.render_page_elements(state);
        });
        this.model.fetch_estate_elements();
    }
}

},{"../model/model.js":"f90IX","../view/view.js":"2D2Fh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f90IX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Estates_model", ()=>Estates_model);
class Estates_model {
    constructor(){
        this.state = {
            loading: true,
            estate_elements: [],
            estate_elements_empty: null,
            estate_main_text: {
                id: null,
                text: ''
            }
        };
        this.listeners = [];
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
    fetch_estate_elements = ()=>{
        var res, res1, element, image, group, err;
        fetch("http://localhost:3001/api/estates-page/fetch_page_elements").then((res)=>{
            return res.json();
        }).then((res)=>{
            // successful fetch from estate_page tables  
            if (res.success && res.estate_page && typeof res.estate_page === 'object' && Array.isArray(res.estate_page.estate_page_images) && Array.isArray(res.estate_page.estate_page_elements)) {
                const estatePage = res.estate_page;
                // 1️⃣ Group estate_page_elements by estate_title
                const elementsMap = {};
                let mainTextObj = null;
                estatePage.estate_page_elements.forEach((element)=>{
                    // Capture main text object
                    if (element.estate_id === "estates-main-article1-p1") mainTextObj = {
                        id: element.estate_id,
                        estate_main_text: element.estate_main_text
                    };
                    // Group into a map first
                    if (element.estate_title) {
                        if (!elementsMap[element.estate_title]) elementsMap[element.estate_title] = [];
                        elementsMap[element.estate_title].push(element);
                    }
                });
                // Convert to array of groups
                let groupedElements = Object.entries(elementsMap).map(([title, items])=>({
                        estate_title: title,
                        elements: items
                    }));
                // 2️⃣ Group estate_page_images by estate_category
                const imagesMap = {};
                estatePage.estate_page_images.forEach((image)=>{
                    const category = image.estate_category;
                    if (category) {
                        if (!imagesMap[category]) imagesMap[category] = [];
                        imagesMap[category].push(image);
                    }
                });
                // 3️⃣ Merge images into groupedElements if estate_title matches estate_category
                groupedElements = groupedElements.map((group)=>{
                    const images = imagesMap[group.estate_title] || [];
                    return {
                        ...group,
                        images
                    };
                });
                this.setState({
                    loading: false,
                    estate_elements: groupedElements,
                    estate_elements_empty: null,
                    estate_main_text: {
                        id: mainTextObj.id,
                        text: mainTextObj.estate_main_text
                    }
                });
            } else // successful fetch but empty tables
            if (res.success && res.estate_page === null) this.setState({
                loading: false,
                estate_elements: [],
                estate_elements_empty: true,
                estate_main_text: {
                    id: null,
                    text: ''
                }
            });
            else this.setState({
                loading: false,
                estate_elements: [],
                estate_elements_empty: null,
                estate_main_text: {
                    id: null,
                    text: ''
                }
            });
        }).catch((err)=>{
            console.log(err);
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

},{}],"2D2Fh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Estates_view", ()=>Estates_view);
class Estates_view {
    constructor(){
        // stopping multiple re renders after initial render of elements
        this.initial_elements_render = false;
        this.estate_element_images = [];
        this.current_image_index = {};
        this.slideshowIntervals = {};
    }
    render_page_elements = (state)=>{
        // caching parent elements of page elements
        const estates_main_section1 = document.getElementById("estates-main-section1");
        const estates_main_text_parent_div = document.getElementById("estates-main-article1");
        // if elements are loading 
        if (state.loading) {
            // estates main text loading 
            const estates_main_text_loading = document.createElement("div");
            estates_main_text_loading.setAttribute("id", "estates-main-article1-p1-loading");
            estates_main_text_loading.classList.add("loading");
            estates_main_text_parent_div.appendChild(estates_main_text_loading);
            //estates main article loading
            const estates_main_section1_loading = document.createElement("div");
            estates_main_section1_loading.setAttribute("id", "estates-main-section1-loading");
            estates_main_section1_loading.classList.add("loading");
            estates_main_section1.appendChild(estates_main_section1_loading);
        } else {
            // remove loading elements
            const estates_main_text_loading = document.getElementById("estates-main-article1-p1-loading");
            const estates_main_section1_loading = document.getElementById("estates-main-section1-loading");
            estates_main_text_loading.remove();
            estates_main_section1_loading.remove();
            // if estate_elements & estate_main_text exist
            if (Array.isArray(state.estate_elements) && state.estate_elements.length > 0 && state.estate_elements.every((el)=>typeof el.estate_title === "string" && Array.isArray(el.elements) && Array.isArray(el.images)) && state.estate_main_text && typeof state.estate_main_text === "object" && typeof state.estate_main_text.id === "string" && typeof state.estate_main_text.text === "string" && this.initial_elements_render === false) {
                console.log(state.estate_main_text);
                // create estates main text
                const main_text_p = document.createElement("p");
                main_text_p.setAttribute("id", state.estate_main_text.id);
                // formatting text 
                const text = state.estate_main_text.text;
                const sentences = text.split(/(?<=\.)\s+(?=[A-Z])/);
                main_text_p.textContent = '';
                sentences.forEach((sentence, index)=>{
                    const textNode = document.createTextNode(sentence);
                    main_text_p.appendChild(textNode);
                    // Add a line break after every sentence except the last
                    if (index < sentences.length - 1) {
                        main_text_p.appendChild(document.createElement("br"));
                        main_text_p.appendChild(document.createElement("br"));
                    }
                });
                estates_main_text_parent_div.appendChild(main_text_p);
                // create article divs
                state.estate_elements.forEach((element)=>{
                    const article = document.createElement("article");
                    const mainDiv1 = document.createElement("div");
                    const mainDiv2 = document.createElement("div");
                    const mainDiv1_h3 = document.createElement("h3");
                    const mainDiv1_p = document.createElement("p");
                    const mainDiv1_div1 = document.createElement("div");
                    const mainDiv1_div2 = document.createElement("div");
                    const mainDiv1_div1_div1 = document.createElement("div");
                    const mainDiv1_div1_div2 = document.createElement("div");
                    const mainDiv1_div1_div1_a1 = document.createElement("a");
                    const mainDiv1_div1_div1_a2 = document.createElement("a");
                    const mainDiv1_div1_div2_p1 = document.createElement("p");
                    const mainDiv1_div1_div2_p2 = document.createElement("p");
                    const mainDiv2_div1 = document.createElement("div");
                    const mainDiv2_div1_div1 = document.createElement("div");
                    const mainDiv2_div1_div2 = document.createElement("div");
                    const mainDiv2_div1_div3 = document.createElement("div");
                    // adding relevant attributes 
                    article.setAttribute("id", element.estate_title);
                    article.classList.add("estates-main-section1-article1");
                    mainDiv1.classList.add("estates-main-section1-article1-div1");
                    mainDiv2.classList.add("estates-main-section1-article1-div2");
                    mainDiv1_h3.setAttribute("id", `${element.elements[0].estate_id}_title`);
                    mainDiv1_h3.classList.add("estates-main-section1-article1-div-h3");
                    mainDiv1_p.setAttribute("id", `${element.elements[0].estate_id}_desc`);
                    mainDiv1_p.classList.add("estates-main-section1-article1-div-p");
                    mainDiv1_div1.classList.add("estates-main-section1-article1-div-div1");
                    mainDiv1_div2.classList.add("estates-main-section1-article1-div-div1");
                    mainDiv1_div1_div1.classList.add("estates-main-section1-article1-div-div1");
                    mainDiv1_div1_div2.classList.add("estates-main-section1-article1-div2-div2-div1");
                    mainDiv1_div1_div1_a1.setAttribute("id", `${element.elements[0].estate_id}_google_maps`);
                    mainDiv1_div1_div1_a1.setAttribute("href", element.elements[0].estate_google_maps_url);
                    mainDiv1_div1_div1_a1.setAttribute("target", "_blank");
                    mainDiv1_div1_div1_a1.classList.add("estates-main-section1-article1-div2-div2-a");
                    mainDiv1_div1_div1_a2.setAttribute("id", `${element.elements[0].estate_id}_google_street`);
                    mainDiv1_div1_div1_a2.setAttribute("href", element.elements[0].estate_google_street_url);
                    mainDiv1_div1_div1_a2.setAttribute("target", "_blank");
                    mainDiv1_div1_div1_a2.classList.add("estates-main-section1-article1-div2-div2-a");
                    mainDiv1_div1_div2_p1.classList.add("estates-main-section1-article1-div2-div2-span1-p");
                    mainDiv1_div1_div2_p2.classList.add("estates-main-section1-article1-div2-div2-span1-p2");
                    mainDiv1_div1_div2_p2.setAttribute("id", `${element.elements[0].estate_id}_address`);
                    mainDiv2_div1.classList.add("estates-main-section1-article1-div2-div1");
                    mainDiv2_div1.setAttribute("id", `${element.estate_title}_img_div`);
                    mainDiv2_div1_div1.classList.add("estates-main-section1-article1-div2-div1-img-backward");
                    mainDiv2_div1_div1.setAttribute("id", `${element.estate_title}_div_backward`);
                    mainDiv2_div1_div2.classList.add("estates-main-section1-article1-div2-div1-img-forward");
                    mainDiv2_div1_div2.setAttribute("id", `${element.estate_title}_div_forward`);
                    mainDiv2_div1_div3.classList.add("estates-main-section1-article1-div2-div1-img-footer");
                    mainDiv2_div1_div3.setAttribute("id", `${element.estate_title}_div_footer`);
                    // adding text content 
                    mainDiv1_h3.textContent = element.elements[0].estate_title;
                    // formatting text 
                    const text = element.elements[0].estate_text;
                    const sentences = text.split(/(?<=\.)\s+(?=[A-Z])/);
                    mainDiv1_p.textContent = '';
                    sentences.forEach((sentence, index)=>{
                        const textNode = document.createTextNode(sentence);
                        mainDiv1_p.appendChild(textNode);
                        // Add a line break after every sentence except the last
                        if (index < sentences.length - 1) {
                            mainDiv1_p.appendChild(document.createElement("br"));
                            mainDiv1_p.appendChild(document.createElement("br"));
                        }
                    });
                    mainDiv1_div1_div1_a1.textContent = "Google Maps Location";
                    mainDiv1_div1_div1_a2.textContent = "Google Street Location";
                    mainDiv1_div1_div2_p1.textContent = "Address:";
                    mainDiv1_div1_div2_p2.textContent = element.elements[0].estate_address;
                    mainDiv2_div1_div1.textContent = "<";
                    mainDiv2_div1_div2.textContent = ">";
                    // appending elements
                    estates_main_section1.appendChild(article);
                    article.append(mainDiv1, mainDiv2);
                    mainDiv1.append(mainDiv1_h3, mainDiv1_p, mainDiv1_div1, mainDiv1_div2);
                    mainDiv2.appendChild(mainDiv2_div1);
                    mainDiv1_div1.appendChild(mainDiv1_div1_div1);
                    mainDiv1_div2.appendChild(mainDiv1_div1_div2);
                    mainDiv1_div1_div1.append(mainDiv1_div1_div1_a1, mainDiv1_div1_div1_a2);
                    mainDiv1_div1_div2.append(mainDiv1_div1_div2_p1, mainDiv1_div1_div2_p2);
                    mainDiv2.appendChild(mainDiv2_div1);
                    mainDiv2_div1.append(mainDiv2_div1_div1, mainDiv2_div1_div2, mainDiv2_div1_div3);
                    const images_object = {};
                    let image_index = 1;
                    // creating image elements & appending first image
                    element.images.forEach((image)=>{
                        const img = document.createElement("img");
                        img.classList.add("estates-main-section1-article1-div2-div1-img");
                        img.setAttribute("id", `${element.estate_title}_img_${image_index}`);
                        img.setAttribute("src", (0, image.estate_image_development_url));
                        if (!images_object[image.estate_category]) images_object[image.estate_category] = [];
                        images_object[image.estate_category].push(img);
                        image_index = image_index + 1;
                        console.log(image_index);
                    });
                    this.estate_element_images = [
                        ...this.estate_element_images,
                        images_object
                    ];
                    console.log(this.estate_element_images);
                });
                this.initial_elements_render = true;
                this.autochange_img_and_forward_and_backward_event_listener();
            } else {
                // caching parent containers 
                const main_p_article = document.getElementById("estates-main-article1");
                const main_p_section = document.getElementById("estates-main-section1");
                const p = document.createElement("p");
                const p2 = document.createElement("p");
                p.setAttribute("id", "estates-main-article1-p1");
                p.textContent = "Currently no information about our estates, Please visit Later";
                p2.setAttribute("id", "estates-main-section1-p1");
                p2.textContent = "Currently no information about our estates, Please visit Later";
                main_p_article.appendChild(p);
                main_p_section.appendChild(p2);
                console.error("Invalid or missing data");
            }
        }
    };
    autochange_img_and_forward_and_backward_event_listener = ()=>{
        // ensure trackers exist
        this.slideshowIntervals = this.slideshowIntervals || {};
        this.current_image_index = this.current_image_index || {};
        const articles = Array.from(document.getElementsByClassName("estates-main-section1-article1"));
        const change_image_id = (category, change_image)=>{
            // clear any existing interval for this category first
            if (this.slideshowIntervals[category]) clearInterval(this.slideshowIntervals[category]);
            const id = setInterval(change_image, 10000);
            this.slideshowIntervals[category] = id;
        };
        // fadeSwap: fade out current image, then insert & fade in new image
        const fadeSwap = (imgDiv, sourceImgElement)=>{
            const oldImg = imgDiv.querySelector(".estates-main-section1-article1-div2-div1-img");
            const newImg = sourceImgElement.cloneNode(true);
            newImg.classList.add("estates-main-section1-article1-div2-div1-img");
            newImg.classList.remove("show"); // start hidden
            const TRANS_MS = 1000; // must match CSS transition duration (500ms)
            if (oldImg) {
                // when old finishes fading out, remove it and insert new
                const onOldTransitionEnd = ()=>{
                    oldImg.removeEventListener("transitionend", onOldTransitionEnd);
                    if (oldImg.parentNode) oldImg.parentNode.removeChild(oldImg);
                    imgDiv.prepend(newImg);
                    // ensure browser registers insertion, then add show to fade in
                    requestAnimationFrame(()=>newImg.classList.add("show"));
                };
                // start fade-out
                oldImg.classList.remove("show");
                oldImg.addEventListener("transitionend", onOldTransitionEnd);
                // fallback in case transitionend doesn't fire
                setTimeout(()=>{
                    if (document.body.contains(oldImg)) {
                        oldImg.removeEventListener("transitionend", onOldTransitionEnd);
                        if (oldImg.parentNode) oldImg.parentNode.removeChild(oldImg);
                        imgDiv.prepend(newImg);
                        requestAnimationFrame(()=>newImg.classList.add("show"));
                    }
                }, TRANS_MS + 100);
            } else {
                // no old image, just insert and fade in
                imgDiv.prepend(newImg);
                requestAnimationFrame(()=>newImg.classList.add("show"));
            }
        };
        articles.forEach((article)=>{
            // for each article find the matching images array
            this.estate_element_images.forEach((img_cat)=>{
                const categoryName = Object.keys(img_cat)[0]; // string
                if (categoryName === article.id) {
                    const imagesArray = img_cat[categoryName]; // array of HTMLImageElement
                    if (!Array.isArray(imagesArray) || imagesArray.length === 0) return;
                    const imgDiv = document.getElementById(`${article.id}_img_div`);
                    if (!imgDiv) return;
                    // initialise index and show first image immediately
                    this.current_image_index[categoryName] = 0;
                    const firstImageClone = imagesArray[0].cloneNode(true);
                    firstImageClone.classList.add("estates-main-section1-article1-div2-div1-img", "show");
                    imgDiv.prepend(firstImageClone);
                    // slideshow change function: show next image (wrap)
                    const change_image = ()=>{
                        const len = imagesArray.length;
                        if (len <= 1) return; // nothing to rotate
                        const nextIndex = (this.current_image_index[categoryName] + 1) % len;
                        const nextSource = imagesArray[nextIndex];
                        fadeSwap(imgDiv, nextSource);
                        this.current_image_index[categoryName] = nextIndex;
                    };
                    // start interval for this category (keyed by categoryName)
                    change_image_id(categoryName, change_image);
                }
            });
            // event listeners for manual navigation
            const back_btn = document.getElementById(`${article.id}_div_backward`);
            const forward_btn = document.getElementById(`${article.id}_div_forward`);
            const event_listener = (event, direction)=>{
                const imgDiv = document.getElementById(`${article.id}_img_div`);
                const visibleImg = imgDiv && imgDiv.querySelector(".estates-main-section1-article1-div2-div1-img.show");
                const imgElement = visibleImg || imgDiv && imgDiv.children[0];
                if (!imgElement) return;
                const imgCatObj = this.estate_element_images.find((ic)=>Object.keys(ic)[0] === article.id);
                if (!imgCatObj) return;
                const imagesArray = Object.values(imgCatObj)[0];
                const len = imagesArray.length;
                if (!len) return;
                // find current index
                let currentIndex = imagesArray.findIndex((img)=>img.id === imgElement.id);
                if (currentIndex === -1) currentIndex = imagesArray.findIndex((img)=>img.src === imgElement.src);
                if (currentIndex === -1) return;
                // compute new index with correct wrap
                const newIndex = direction === "back" ? (currentIndex - 1 + len) % len : (currentIndex + 1) % len;
                // swap with fade
                fadeSwap(imgDiv, imagesArray[newIndex]);
                // update index tracker (keyed by category/article id)
                this.current_image_index[article.id] = newIndex;
                // stop/clear the auto-interval for this article (optional)
                if (this.slideshowIntervals && this.slideshowIntervals[article.id]) {
                    clearInterval(this.slideshowIntervals[article.id]);
                    delete this.slideshowIntervals[article.id];
                }
            };
            if (back_btn) back_btn.addEventListener("click", (e)=>event_listener(e, "back"));
            if (forward_btn) forward_btn.addEventListener("click", (e)=>event_listener(e, "forward"));
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5Jjbh"], null, "parcelRequire8ea6", {})

//# sourceMappingURL=controller.434d5a9b.js.map
