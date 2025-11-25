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
  var $parcel$bundleURL;function $parcel$resolve(url) {  url = importMap[url] || url;  if (!$parcel$bundleURL) {    try {      throw new Error();    } catch (err) {      var matches = ('' + err.stack).match(        /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g,      );      if (matches) {        $parcel$bundleURL = matches[0];      } else {        return distDir + url;      }    }  }  return new URL(distDir + url, $parcel$bundleURL).toString();}newRequire.resolve = $parcel$resolve;

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
})({"5rJf5":[function(require,module,exports,__globalThis) {
module.exports = require("3b9b804b64a02048")(module.bundle.resolve("controller.2d02c62c.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('h8cLM'));

},{"3b9b804b64a02048":"61B45","h8cLM":"h8cLM"}],"61B45":[function(require,module,exports,__globalThis) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports,__globalThis) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"4WV7Q":[function(require,module,exports,__globalThis) {
module.exports = require("f40341d4a63c23d1")(module.bundle.resolve("controller.13f3a181.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('iY9qo'));

},{"f40341d4a63c23d1":"61B45","iY9qo":"iY9qo"}],"iQY2i":[function(require,module,exports,__globalThis) {
module.exports = require("b286c242204b1eca")(module.bundle.resolve("controller.e410a36e.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('i6zKc'));

},{"b286c242204b1eca":"61B45","i6zKc":"i6zKc"}],"7Qp2M":[function(require,module,exports,__globalThis) {
module.exports = require("48233697fc6c17f1")(module.bundle.resolve("controller.e4bc8ad7.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('8Wel8'));

},{"48233697fc6c17f1":"61B45","8Wel8":"8Wel8"}],"0109V":[function(require,module,exports,__globalThis) {
module.exports = require("23848664ec305f17")(module.bundle.resolve("controller.bbe89ede.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('hr0CM'));

},{"23848664ec305f17":"61B45","hr0CM":"hr0CM"}],"ajkj5":[function(require,module,exports,__globalThis) {
module.exports = require("f8883702c3209da1")(module.bundle.resolve("controller.434d5a9b.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('1py3K'));

},{"f8883702c3209da1":"61B45","1py3K":"1py3K"}],"cLrHy":[function(require,module,exports,__globalThis) {
module.exports = require("a0a9c95a97218e5b")(module.bundle.resolve("controller.502bef71.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('lxj6j'));

},{"a0a9c95a97218e5b":"61B45","lxj6j":"lxj6j"}],"fUnsK":[function(require,module,exports,__globalThis) {
module.exports = require("1aa51481d8809127")(module.bundle.resolve("controller.e0fa032d.js")).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('a7k5r'));

},{"1aa51481d8809127":"61B45","a7k5r":"a7k5r"}]},[], null, "parcelRequire8ea6", {}, "./", "/")
const startApp = ()=>{
    if (window.location.pathname === "/" || window.location.pathname === "/abbey-road/" || window.location.pathname === "/index.html") parcelRequire8ea6("5rJf5").then((res)=>{
        new res.IndexController();
        console.log("index controller working");
    }).catch((error)=>{
        console.log(`index controller not working ${error}`);
    });
    else if (window.location.pathname === "/news_and_events" || window.location.pathname === "/news_and_events.html" || window.location.pathname === "/abbey-road/news_and_events.html") parcelRequire8ea6("4WV7Q").then((res)=>{
        new res.News_and_events_Controller();
        console.log("News_and_events controller working");
    }).catch((error)=>{
        console.log(`News_and_events controller not working ${error}`);
    });
    else if (window.location.pathname === "/contact" || window.location.pathname === "/contact.html" || window.location.pathname === "/abbey-road/contact.html") parcelRequire8ea6("iQY2i").then((res)=>{
        new res.ContactController();
        console.log("Contact controller working");
    }).catch((error)=>{
        console.log(`Contact controller not working ${error}`);
    });
    else if (window.location.pathname === "/resident-involvement" || window.location.pathname === "/resident-involvement.html" || window.location.pathname === "/abbey-road/resident-involvement.html") parcelRequire8ea6("7Qp2M").then((res)=>{
        new res.RIController();
        console.log("resident-involvement controller working");
    }).catch((error)=>{
        console.log(`resident-involvement controller not working ${error}`);
    });
    else if (window.location.pathname === "/login" || window.location.pathname === "/login.html" || window.location.pathname === "/abbey-road/login.html") parcelRequire8ea6("0109V").then((res)=>{
        new res.Login_controller();
        console.log("login-page controller working");
    }).catch((error)=>{
        console.log(`login-page controller not working ${error}`);
    });
    else if (window.location.pathname === "/estates" || window.location.pathname === "/estates.html" || window.location.pathname === "/abbey-road/estates.html") parcelRequire8ea6("ajkj5").then((res)=>{
        new res.Estates_controller();
        console.log("estates-page controller working");
    }).catch((error)=>{
        console.log(`estates-page controller not working ${error}`);
    });
    else if (window.location.pathname === "/services" || window.location.pathname === "/services.html" || window.location.pathname === "/abbey-road/services.html") parcelRequire8ea6("cLrHy").then((res)=>{
        new res.Services_controller();
        console.log("services controller working");
    }).catch((error)=>{
        console.log(`services controller not working ${error}`);
    });
    else if (window.location.pathname === "/governance" || window.location.pathname === "/governance.html" || window.location.pathname === "/abbey-road/governance.html") parcelRequire8ea6("fUnsK").then((res)=>{
        new res.Governance_controller();
        console.log("governance controller working");
    }).catch((error)=>{
        console.log(`governance controller not working ${error}`);
    });
};
startApp();

//# sourceMappingURL=public.005eec76.js.map
