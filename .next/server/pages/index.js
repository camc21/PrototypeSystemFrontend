module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/reactstrap/dist/reactstrap.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/reactstrap/dist/reactstrap.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");
var classNames = __webpack_require__(/*! classnames */ "classnames");
var reactPopper = __webpack_require__(/*! react-popper */ "react-popper");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "react-transition-group");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    return propType.apply(void 0, [props, propName, componentName].concat([].slice.call(arguments, 3)));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func, DOMElement, PropTypes__default["default"].shape({
  current: PropTypes__default["default"].any
})]);
var tagPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
}), PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300 // $offcanvas-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var utils = {
  __proto__: null,
  getScrollbarWidth: getScrollbarWidth,
  setScrollbarWidth: setScrollbarWidth,
  isBodyOverflowing: isBodyOverflowing,
  getOriginalBodyPadding: getOriginalBodyPadding,
  conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
  setGlobalCssModule: setGlobalCssModule,
  mapToCssModules: mapToCssModules,
  omit: omit,
  pick: pick,
  warnOnce: warnOnce,
  deprecated: deprecated,
  DOMElement: DOMElement,
  targetPropType: targetPropType,
  tagPropType: tagPropType,
  TransitionTimeouts: TransitionTimeouts,
  TransitionPropTypeKeys: TransitionPropTypeKeys,
  TransitionStatuses: TransitionStatuses,
  keyCodes: keyCodes,
  PopperPlacements: PopperPlacements,
  canUseDOM: canUseDOM,
  isReactRefObj: isReactRefObj,
  toNumber: toNumber,
  isObject: isObject,
  isFunction: isFunction,
  findDOMElements: findDOMElements,
  isArrayOrNodeList: isArrayOrNodeList,
  getTarget: getTarget,
  defaultToggleEvents: defaultToggleEvents,
  addMultipleEventListeners: addMultipleEventListeners,
  focusableElements: focusableElements
};

var _excluded$1e = ["className", "cssModule", "fluid", "tag"];
var propTypes$1k = {
  tag: tagPropType,
  fluid: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1i = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1e);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = mapToCssModules(classNames__default["default"](className, containerClass), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Container.propTypes = propTypes$1k;
Container.defaultProps = defaultProps$1i;
var Container$1 = Container;

var _excluded$1d = ["className", "cssModule", "noGutters", "tag", "form", "widths"];
var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var rowColsPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var propTypes$1j = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes__default["default"].bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  form: PropTypes__default["default"].bool,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType
};
var defaultProps$1h = {
  tag: 'div',
  widths: rowColWidths
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1d);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = mapToCssModules(classNames__default["default"](className, noGutters ? 'gx-0' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes$1j;
Row.defaultProps = defaultProps$1h;
var Row$1 = Row;

var _excluded$1c = ["className", "cssModule", "widths", "tag"];
var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string]),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$1i = {
  tag: tagPropType,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  xxl: columnProps$1,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  widths: PropTypes__default["default"].array
};
var defaultProps$1g = {
  tag: 'div',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var getColumnClasses = function getColumnClasses(attributes, cssModule, widths) {
  if (widths === void 0) {
    widths = colWidths$1;
  }

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = attributes[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });
  return {
    colClasses: colClasses,
    attributes: attributes
  };
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1c);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classNames__default["default"](className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
};

Col.propTypes = propTypes$1i;
Col.defaultProps = defaultProps$1g;
var Col$1 = Col;

var _excluded$1b = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
var propTypes$1h = {
  light: PropTypes__default["default"].bool,
  dark: PropTypes__default["default"].bool,
  full: PropTypes__default["default"].bool,
  fixed: PropTypes__default["default"].string,
  sticky: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  role: PropTypes__default["default"].string,
  tag: tagPropType,
  container: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  expand: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  children: PropTypes__default["default"].node
};
var defaultProps$1f = {
  tag: 'nav',
  expand: false,
  container: 'fluid'
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-" + expand;
};

var Navbar = function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      container = props.container,
      Tag = props.tag,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1b);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  var containerClass = container && container === true ? 'container' : "container-" + container;
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), container ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: containerClass
  }, children) : children);
};

Navbar.propTypes = propTypes$1h;
Navbar.defaultProps = defaultProps$1f;
var Navbar$1 = Navbar;

var _excluded$1a = ["className", "cssModule", "tag"];
var propTypes$1g = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1e = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1a);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-brand'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavbarBrand.propTypes = propTypes$1g;
NavbarBrand.defaultProps = defaultProps$1e;
var NavbarBrand$1 = NavbarBrand;

var _excluded$19 = ["className", "cssModule", "active", "tag"];
var propTypes$1f = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1d = {
  tag: 'span'
};

var NavbarText = function NavbarText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$19);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavbarText.propTypes = propTypes$1f;
NavbarText.defaultProps = defaultProps$1d;
var NavbarText$1 = NavbarText;

var _excluded$18 = ["className", "cssModule", "children", "tag"];
var propTypes$1e = {
  tag: tagPropType,
  type: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node
};
var defaultProps$1c = {
  tag: 'button',
  type: 'button'
};

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$18);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-toggler'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    "aria-label": "Toggle navigation"
  }, attributes, {
    className: classes
  }), children || /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('navbar-toggler-icon', cssModule)
  }));
};

NavbarToggler.propTypes = propTypes$1e;
NavbarToggler.defaultProps = defaultProps$1c;
var NavbarToggler$1 = NavbarToggler;

var _excluded$17 = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
var propTypes$1d = {
  tabs: PropTypes__default["default"].bool,
  pills: PropTypes__default["default"].bool,
  vertical: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  horizontal: PropTypes__default["default"].string,
  justified: PropTypes__default["default"].bool,
  fill: PropTypes__default["default"].bool,
  navbar: PropTypes__default["default"].bool,
  card: PropTypes__default["default"].bool,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1b = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$17);

  var classes = mapToCssModules(classNames__default["default"](className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Nav.propTypes = propTypes$1d;
Nav.defaultProps = defaultProps$1b;
var Nav$1 = Nav;

var _excluded$16 = ["className", "cssModule", "active", "tag"];
var propTypes$1c = {
  tag: tagPropType,
  active: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1a = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$16);

  var classes = mapToCssModules(classNames__default["default"](className, 'nav-item', active ? 'active' : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavItem.propTypes = propTypes$1c;
NavItem.defaultProps = defaultProps$1a;
var NavItem$1 = NavItem;

var _excluded$15 = ["className", "cssModule", "active", "tag", "innerRef"];
var propTypes$1b = {
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  disabled: PropTypes__default["default"].bool,
  active: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  onClick: PropTypes__default["default"].func,
  href: PropTypes__default["default"].any
};
var defaultProps$19 = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$15);

    var classes = mapToCssModules(classNames__default["default"](className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(React__default["default"].Component);

NavLink.propTypes = propTypes$1b;
NavLink.defaultProps = defaultProps$19;
var NavLink$1 = NavLink;

var _excluded$14 = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
var propTypes$1a = {
  tag: tagPropType,
  listTag: tagPropType,
  className: PropTypes__default["default"].string,
  listClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  'aria-label': PropTypes__default["default"].string
};
var defaultProps$18 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$14);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"]('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/React__default["default"].createElement(ListTag, {
    className: listClasses
  }, children));
};

Breadcrumb.propTypes = propTypes$1a;
Breadcrumb.defaultProps = defaultProps$18;
var Breadcrumb$1 = Breadcrumb;

var _excluded$13 = ["className", "cssModule", "active", "tag"];
var propTypes$19 = {
  tag: tagPropType,
  active: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$17 = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$13);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
};

BreadcrumbItem.propTypes = propTypes$19;
BreadcrumbItem.defaultProps = defaultProps$17;
var BreadcrumbItem$1 = BreadcrumbItem;

var _excluded$12 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
var propTypes$18 = {
  active: PropTypes__default["default"].bool,
  'aria-label': PropTypes__default["default"].string,
  block: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool,
  outline: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  onClick: PropTypes__default["default"].func,
  size: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  close: PropTypes__default["default"].bool
};
var defaultProps$16 = {
  color: 'secondary',
  tag: 'button'
};

var Button = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      return this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$12);

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = mapToCssModules(classNames__default["default"](className, close && 'btn-close', close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'd-block w-100' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(React__default["default"].Component);

Button.propTypes = propTypes$18;
Button.defaultProps = defaultProps$16;
var Button$1 = Button;

var _excluded$11 = ["className"];
var propTypes$17 = {
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  onFocus: PropTypes__default["default"].func,
  defaultValue: PropTypes__default["default"].bool
};
var defaultProps$15 = {
  defaultValue: false
};

var ButtonToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ButtonToggle, _React$Component);

  function ButtonToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      toggled: props.defaultValue,
      focus: false
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ButtonToggle.prototype;

  _proto.onBlur = function onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({
      focus: false
    });
  };

  _proto.onFocus = function onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({
      focus: true
    });
  };

  _proto.onClick = function onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.setState(function (_ref) {
      var toggled = _ref.toggled;
      return {
        toggled: !toggled
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$11);

    var classes = mapToCssModules(classNames__default["default"](className, {
      focus: this.state.focus
    }), this.props.cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Button$1, _extends({
      active: this.state.toggled,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onClick: this.onClick,
      className: classes
    }, attributes));
  };

  return ButtonToggle;
}(React__default["default"].Component);

ButtonToggle.propTypes = propTypes$17;
ButtonToggle.defaultProps = defaultProps$15;
var ButtonToggle$1 = ButtonToggle;

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  disabled: PropTypes.bool
 * }
 */

var DropdownContext = React__default["default"].createContext({});

var _excluded$10 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
var propTypes$16 = {
  a11y: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  direction: PropTypes__default["default"].oneOf(['up', 'down', 'start', 'end', 'left', 'right']),
  group: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  nav: PropTypes__default["default"].bool,
  active: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  inNavbar: PropTypes__default["default"].bool,
  setActiveFromChild: PropTypes__default["default"].bool,
  menuRole: PropTypes__default["default"].oneOf(['listbox', 'menu'])
};
var defaultProps$14 = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind(_assertThisInitialized(_this));
    _this.containerRef = React__default["default"].createRef();
    _this.menuRef = React__default["default"].createRef();
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.handleMenuRef = function handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  };

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      // Callback that should be called by DropdownMenu to provide a ref to
      // a HTML tag that's used for the DropdownMenu
      onMenuRef: this.handleMenuRef,
      menuRole: this.props.menuRole
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenu = function getMenu() {
    return this.menuRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  };

  _proto.getItemType = function getItemType() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getMenuItems = function getMenuItems() {
    // In a real menu with a child DropdownMenu, `this.getMenu()` should never
    // be null, but it is sometimes null in tests. To mitigate that, we just
    // use `this.getContainer()` as the fallback `menuContainer`.
    var menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll("[role=\"" + this.getItemType() + "\"]"));
  };

  _proto.addEvents = function addEvents() {
    var _this2 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this2.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
    var container = this.getContainer();
    var menu = this.getMenu();
    var clickIsInContainer = container.contains(e.target) && container !== e.target;
    var clickIsInInput = container.classList.contains('input-group') && container.classList.contains('dropdown') && e.target.tagName === 'INPUT';
    var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;

    if ((clickIsInContainer && !clickIsInInput || clickIsInMenu) && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this4 = this;

    var isTargetMenuItem = e.target.getAttribute('role') === 'menuitem' || e.target.getAttribute('role') === 'option';
    var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
    var isTab = keyCodes.tab === e.which;

    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (isTargetMenuCtrl) {
      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        // Open the menu (if not open) and focus the first menu item
        if (!this.props.isOpen) {
          this.toggle(e);
        }

        setTimeout(function () {
          return _this4.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && isTab) {
        // Focus the first menu item if tabbing from an open menu. We need this
        // for cases where the DropdownMenu sets a custom container, which may
        // not be the natural next item to tab to from the DropdownToggle.
        e.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && isTargetMenuItem) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames, _ref;

    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        tag = _omit.tag,
        attrs = _objectWithoutPropertiesLoose(_omit, _excluded$10);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      React__default["default"].Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = mapToCssModules(classNames__default["default"](className, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {
      'btn-group': group
    }, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group, _classNames.dropup = direction === 'up', _classNames.dropstart = direction === 'start' || direction === 'left', _classNames.dropend = direction === 'end' || direction === 'right', _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, /*#__PURE__*/React__default["default"].createElement(reactPopper.Manager, null, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(React__default["default"].Component);

Dropdown.propTypes = propTypes$16;
Dropdown.defaultProps = defaultProps$14;
var Dropdown$1 = Dropdown;

var propTypes$15 = {
  children: PropTypes__default["default"].node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
    group: true
  }, props));
};

ButtonDropdown.propTypes = propTypes$15;
var ButtonDropdown$1 = ButtonDropdown;

var _excluded$$ = ["className", "cssModule", "size", "vertical", "tag"];
var propTypes$14 = {
  tag: tagPropType,
  'aria-label': PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  role: PropTypes__default["default"].string,
  size: PropTypes__default["default"].string,
  vertical: PropTypes__default["default"].bool
};
var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$$);

  var classes = mapToCssModules(classNames__default["default"](className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ButtonGroup.propTypes = propTypes$14;
ButtonGroup.defaultProps = defaultProps$13;
var ButtonGroup$1 = ButtonGroup;

var _excluded$_ = ["className", "cssModule", "tag"];
var propTypes$13 = {
  tag: tagPropType,
  'aria-label': PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  role: PropTypes__default["default"].string
};
var defaultProps$12 = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$_);

  var classes = mapToCssModules(classNames__default["default"](className, 'btn-toolbar'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ButtonToolbar.propTypes = propTypes$13;
ButtonToolbar.defaultProps = defaultProps$12;
var ButtonToolbar$1 = ButtonToolbar;

var _excluded$Z = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
var propTypes$12 = {
  children: PropTypes__default["default"].node,
  active: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  divider: PropTypes__default["default"].bool,
  tag: tagPropType,
  header: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].bool,
  text: PropTypes__default["default"].bool
};
var defaultProps$11 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.onClick = function onClick(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        header = _this$props.header,
        divider = _this$props.divider,
        text = _this$props.text;

    if (disabled || header || divider || text) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getTabIndex = function getTabIndex() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        header = _this$props2.header,
        divider = _this$props2.divider,
        text = _this$props2.text;

    if (disabled || header || divider || text) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? this.getRole() : undefined;

    var _omit = omit(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        text = _omit.text,
        props = _objectWithoutPropertiesLoose(_omit, _excluded$Z);

    var classes = mapToCssModules(classNames__default["default"](className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header && !text,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider,
      'dropdown-item-text': text
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      } else if (text) {
        Tag = 'span';
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(React__default["default"].Component);

DropdownItem.propTypes = propTypes$12;
DropdownItem.defaultProps = defaultProps$11;
DropdownItem.contextType = DropdownContext;
var DropdownItem$1 = DropdownItem;

var _excluded$Y = ["className", "cssModule", "dark", "end", "right", "tag", "flip", "modifiers", "persist", "strategy", "container"];
var propTypes$11 = {
  tag: tagPropType,
  children: PropTypes__default["default"].node.isRequired,
  dark: PropTypes__default["default"].bool,
  end: PropTypes__default["default"].bool,
  flip: PropTypes__default["default"].bool,
  modifiers: PropTypes__default["default"].array,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  persist: PropTypes__default["default"].bool,
  strategy: PropTypes__default["default"].string,
  container: targetPropType,
  right: deprecated(PropTypes__default["default"].bool, 'Please use "end" instead.')
};
var defaultProps$10 = {
  tag: 'div',
  flip: true,
  modifiers: []
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  start: 'left',
  end: 'right',
  down: 'bottom'
};

var DropdownMenu = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'listbox';
    }

    return 'menu';
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        dark = _this$props.dark,
        end = _this$props.end,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        strategy = _this$props.strategy,
        container = _this$props.container,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$Y);

    var classes = mapToCssModules(classNames__default["default"](className, 'dropdown-menu', {
      'dropdown-menu-dark': dark,
      'dropdown-menu-end': end || right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = end || right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = [].concat(modifiers, [{
        name: 'flip',
        enabled: !!flip
      }]);
      var popper = /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        strategy: strategy
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement;

        var combinedStyle = _objectSpread2(_objectSpread2({}, _this.props.style), style);

        var handleRef = function handleRef(tagRef) {
          // Send the ref to `react-popper`
          ref(tagRef); // Send the ref to the parent Dropdown so that clicks outside
          // it will cause it to close

          var onMenuRef = _this.context.onMenuRef;
          if (onMenuRef) onMenuRef(tagRef);
        };

        return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
          tabIndex: "-1",
          role: _this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "data-popper-placement": placement
        }));
      });

      if (container) {
        return ReactDOM__default["default"].createPortal(popper, getTarget(container));
      } else {
        return popper;
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "data-popper-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(React__default["default"].Component);
DropdownMenu.propTypes = propTypes$11;
DropdownMenu.defaultProps = defaultProps$10;
DropdownMenu.contextType = DropdownContext;
var DropdownMenu$1 = DropdownMenu;

var _excluded$X = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
var propTypes$10 = {
  caret: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  'aria-haspopup': PropTypes__default["default"].bool,
  split: PropTypes__default["default"].bool,
  tag: tagPropType,
  nav: PropTypes__default["default"].bool
};
var defaultProps$$ = {
  color: 'secondary',
  'aria-haspopup': true
};

var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.getRole = function getRole() {
    return this.context.menuRole || this.props['aria-haspopup'];
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$X);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = mapToCssModules(classNames__default["default"](className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button$1;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children: children
      }));
    }

    return /*#__PURE__*/React__default["default"].createElement(reactPopper.Reference, {
      innerRef: innerRef
    }, function (_ref) {
      var _ref2;

      var ref = _ref.ref;
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        "aria-haspopup": _this2.getRole(),
        children: children
      }));
    });
  };

  return DropdownToggle;
}(React__default["default"].Component);

DropdownToggle.propTypes = propTypes$10;
DropdownToggle.defaultProps = defaultProps$$;
DropdownToggle.contextType = DropdownContext;
var DropdownToggle$1 = DropdownToggle;

var _excluded$W = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

var propTypes$$ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),
  tag: tagPropType,
  baseClass: PropTypes__default["default"].string,
  baseClassActive: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
});

var defaultProps$_ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  "in": true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded$W);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classNames__default["default"](className, baseClass, isActive && baseClassActive), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$$;
Fade.defaultProps = defaultProps$_;

/**
 * AccordionContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  openId: PropTypes.string,    
 * }
 */

var AccordionContext = React__default["default"].createContext({});

var _excluded$V = ["flush", "open", "toggle", "className", "cssModule", "tag", "innerRef"];
var propTypes$_ = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  flush: PropTypes__default["default"].bool,
  open: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]).isRequired,
  toggle: PropTypes__default["default"].func.isRequired
};
var defaultProps$Z = {
  tag: 'div'
};

var Accordion = function Accordion(props) {
  var flush = props.flush,
      open = props.open,
      toggle = props.toggle,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$V);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion', {
    'accordion-flush': flush
  }), cssModule);
  var accordionContext = React.useMemo(function () {
    return {
      open: open,
      toggle: toggle
    };
  });
  return /*#__PURE__*/React__default["default"].createElement(AccordionContext.Provider, {
    value: accordionContext
  }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  })));
};

Accordion.propTypes = propTypes$_;
Accordion.defaultProps = defaultProps$Z;
var Accordion$1 = Accordion;

var _excluded$U = ["defaultOpen", "stayOpen"];
var propTypes$Z = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  defaultOpen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]),
  stayOpen: PropTypes__default["default"].bool
};
var defaultProps$Y = {
  tag: 'div'
};

var UncontrolledAccordion = function UncontrolledAccordion(_ref) {
  var defaultOpen = _ref.defaultOpen,
      stayOpen = _ref.stayOpen,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$U);

  var _useState = React.useState(defaultOpen || (stayOpen ? [] : undefined)),
      open = _useState[0],
      setOpen = _useState[1];

  var toggle = function toggle(id) {
    if (stayOpen) {
      open.includes(id) ? setOpen(open.filter(function (accordionId) {
        return accordionId !== id;
      })) : setOpen([].concat(open, [id]));
    } else {
      open === id ? setOpen(undefined) : setOpen(id);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(Accordion$1, _extends({}, props, {
    open: open,
    toggle: toggle
  }));
};

Accordion$1.propTypes = propTypes$Z;
Accordion$1.defaultProps = defaultProps$Y;
var UncontrolledAccordion$1 = UncontrolledAccordion;

var _excluded$T = ["className", "cssModule", "tag", "innerRef", "children", "targetId"];
var propTypes$Y = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  targetId: PropTypes__default["default"].string.isRequired
};
var defaultProps$X = {
  tag: 'h2'
};

var AccordionHeader = function AccordionHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      targetId = props.targetId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$T);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open,
      toggle = _useContext.toggle;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-header'), cssModule);
  var buttonClasses = mapToCssModules(classNames__default["default"]('accordion-button', {
    collapsed: !(Array.isArray(open) ? open.includes(targetId) : open === targetId)
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: buttonClasses,
    onClick: function onClick() {
      return toggle(targetId);
    }
  }, children));
};

AccordionHeader.propTypes = propTypes$Y;
AccordionHeader.defaultProps = defaultProps$X;
var AccordionHeader$1 = AccordionHeader;

var _excluded$S = ["className", "cssModule", "tag", "innerRef"];
var propTypes$X = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node
};
var defaultProps$W = {
  tag: 'div'
};

var AccordionItem$2 = function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$S);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

AccordionItem$2.propTypes = propTypes$X;
AccordionItem$2.defaultProps = defaultProps$W;
var AccordionItem$3 = AccordionItem$2;

var _excluded$R = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

var _transitionStatusToCl;

var propTypes$W = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  horizontal: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),
  tag: tagPropType,
  className: PropTypes__default["default"].node,
  navbar: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object])
});

var defaultProps$V = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  horizontal: false,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

var Collapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      dimension: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension(node) {
    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      dimension: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    this.getDimension(node); // eslint-disable-line no-unused-vars


    this.setState({
      dimension: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      dimension: null
    });
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        horizontal = _this$props.horizontal,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        otherProps = _objectWithoutPropertiesLoose(_this$props, _excluded$R);

    var dimension = this.state.dimension;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      "in": isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var _ref;

      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classNames__default["default"](className, horizontal && 'collapse-horizontal', collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = dimension === null ? null : (_ref = {}, _ref[horizontal ? 'width' : 'height'] = dimension, _ref);
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, childProps, {
        style: _objectSpread2(_objectSpread2({}, childProps.style), style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };

  return Collapse;
}(React.Component);

Collapse.propTypes = propTypes$W;
Collapse.defaultProps = defaultProps$V;
var Collapse$1 = Collapse;

var _excluded$Q = ["className", "cssModule", "tag", "innerRef", "children", "accordionId"];
var propTypes$V = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  accordionId: PropTypes__default["default"].string.isRequired
};
var defaultProps$U = {
  tag: 'div'
};

var AccordionItem = function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      accordionId = props.accordionId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$Q);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-collapse'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({}, attributes, {
    className: classes,
    ref: innerRef,
    isOpen: Array.isArray(open) ? open.includes(accordionId) : open === accordionId
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: "accordion-body"
  }, children));
};

AccordionItem.propTypes = propTypes$V;
AccordionItem.defaultProps = defaultProps$U;
var AccordionItem$1 = AccordionItem;

var _excluded$P = ["className", "cssModule", "color", "innerRef", "pill", "tag"];
var propTypes$U = {
  color: PropTypes__default["default"].string,
  pill: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$T = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      pill = props.pill,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$P);

  var classes = mapToCssModules(classNames__default["default"](className, 'badge', 'bg-' + color, pill ? 'rounded-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Badge.propTypes = propTypes$U;
Badge.defaultProps = defaultProps$T;
var Badge$1 = Badge;

var _excluded$O = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
var propTypes$T = {
  tag: tagPropType,
  inverse: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  body: PropTypes__default["default"].bool,
  outline: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$S = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$O);

  var classes = mapToCssModules(classNames__default["default"](className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes$T;
Card.defaultProps = defaultProps$S;
var Card$1 = Card;

var _excluded$N = ["className", "cssModule", "tag"];
var propTypes$S = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$R = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$N);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = propTypes$S;
CardGroup.defaultProps = defaultProps$R;
var CardGroup$1 = CardGroup;

var _excluded$M = ["className", "cssModule", "tag"];
var propTypes$R = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$Q = {
  tag: 'div'
};

var CardDeck = function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$M);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-deck'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardDeck.propTypes = propTypes$R;
CardDeck.defaultProps = defaultProps$Q;
var CardDeck$1 = CardDeck;

var _excluded$L = ["className", "cssModule", "tag"];
var propTypes$Q = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$P = {
  tag: 'div'
};

var CardColumns = function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$L);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-columns'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardColumns.propTypes = propTypes$Q;
CardColumns.defaultProps = defaultProps$P;
var CardColumns$1 = CardColumns;

var _excluded$K = ["className", "cssModule", "innerRef", "tag"];
var propTypes$P = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$O = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$K);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes$P;
CardBody.defaultProps = defaultProps$O;
var CardBody$1 = CardBody;

var _excluded$J = ["className", "cssModule", "tag", "innerRef"];
var propTypes$O = {
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$N = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$J);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-link'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

CardLink.propTypes = propTypes$O;
CardLink.defaultProps = defaultProps$N;
var CardLink$1 = CardLink;

var _excluded$I = ["className", "cssModule", "tag"];
var propTypes$N = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$M = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$I);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardFooter.propTypes = propTypes$N;
CardFooter.defaultProps = defaultProps$M;
var CardFooter$1 = CardFooter;

var _excluded$H = ["className", "cssModule", "tag"];
var propTypes$M = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$L = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$H);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = propTypes$M;
CardHeader.defaultProps = defaultProps$L;
var CardHeader$1 = CardHeader;

var _excluded$G = ["className", "cssModule", "top", "bottom", "tag"];
var propTypes$L = {
  tag: tagPropType,
  top: PropTypes__default["default"].bool,
  bottom: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$K = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$G);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classNames__default["default"](className, cardImgClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardImg.propTypes = propTypes$L;
CardImg.defaultProps = defaultProps$K;
var CardImg$1 = CardImg;

var _excluded$F = ["className", "cssModule", "tag"];
var propTypes$K = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$J = {
  tag: 'div'
};

var CardImgOverlay = function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$F);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-img-overlay'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardImgOverlay.propTypes = propTypes$K;
CardImgOverlay.defaultProps = defaultProps$J;
var CardImgOverlay$1 = CardImgOverlay;

var _excluded$E = ["in", "children", "cssModule", "slide", "tag", "className"];

var CarouselItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props["in"],
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, _excluded$E);

    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      "in": isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classNames__default["default"](className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return /*#__PURE__*/React__default["default"].createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(React__default["default"].Component);

CarouselItem.propTypes = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  tag: tagPropType,
  "in": PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  slide: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string
});
CarouselItem.defaultProps = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: PropTypes__default["default"].string
};
var CarouselItem$1 = CarouselItem;

/**
 * CarouselContext
 * {
 *  direction: PropTypes.oneOf(['start', 'end']).isRequired,
 * }
 */

var CarouselContext = React__default["default"].createContext({});

var SWIPE_THRESHOLD = 40;

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'end',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getContextValue = function getContextValue() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'end';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'start';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'start' : 'end';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'end' : 'start';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, [].slice.call(arguments));
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, [].slice.call(arguments));
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.state.activeIndex;
      return React__default["default"].cloneElement(item, {
        "in": isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className,
        dark = _this$props3.dark,
        fade = _this$props3.fade;
    var outerClasses = mapToCssModules(classNames__default["default"](className, 'carousel', fade, slide && 'slide', dark && 'carousel-dark'), cssModule);
    var innerClasses = mapToCssModules(classNames__default["default"]('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === CarouselItem$1;
    }); // Rendering only slides

    if (slidesOnly) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(children, innerClasses)));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = React__default["default"].cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
      value: this.getContextValue()
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
  };

  return Carousel;
}(React__default["default"].Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes__default["default"].number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes__default["default"].func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes__default["default"].func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes__default["default"].bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes__default["default"].oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes__default["default"].oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].bool]),
  children: PropTypes__default["default"].array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes__default["default"].func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes__default["default"].func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes__default["default"].bool,
  // make the controls, indicators and captions dark on the Carousel
  dark: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  className: PropTypes__default["default"].string,
  enableTouch: PropTypes__default["default"].bool
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false
};
Carousel.childContextTypes = {
  direction: PropTypes__default["default"].string
};
var Carousel$1 = Carousel;

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classNames__default["default"](className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classNames__default["default"]("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classNames__default["default"]('visually-hidden'), cssModule);
  return (
    /*#__PURE__*/
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    React__default["default"].createElement("a", {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
};

CarouselControl.propTypes = {
  direction: PropTypes__default["default"].oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes__default["default"].func.isRequired,
  cssModule: PropTypes__default["default"].object,
  directionText: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string
};
var CarouselControl$1 = CarouselControl;

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classNames__default["default"](className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classNames__default["default"]({
      active: activeIndex === idx
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": item.caption,
      "data-bs-target": true,
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    }, item.caption);
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: listClasses
  }, indicators);
};

CarouselIndicators.propTypes = {
  items: PropTypes__default["default"].array.isRequired,
  activeIndex: PropTypes__default["default"].number.isRequired,
  cssModule: PropTypes__default["default"].object,
  onClickHandler: PropTypes__default["default"].func.isRequired,
  className: PropTypes__default["default"].string
};
var CarouselIndicators$1 = CarouselIndicators;

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classNames__default["default"](className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, captionHeader), /*#__PURE__*/React__default["default"].createElement("p", null, captionText));
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes__default["default"].node,
  captionText: PropTypes__default["default"].node.isRequired,
  cssModule: PropTypes__default["default"].object,
  className: PropTypes__default["default"].string
};
var CarouselCaption$1 = CarouselCaption;

var _excluded$D = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
var propTypes$J = {
  items: PropTypes__default["default"].array.isRequired,
  indicators: PropTypes__default["default"].bool,
  controls: PropTypes__default["default"].bool,
  autoPlay: PropTypes__default["default"].bool,
  defaultActiveIndex: PropTypes__default["default"].number,
  activeIndex: PropTypes__default["default"].number,
  next: PropTypes__default["default"].func,
  previous: PropTypes__default["default"].func,
  goToIndex: PropTypes__default["default"].func
};

var UncontrolledCarousel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.previous = function previous() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$D);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      var key = item.key || item.src;
      return /*#__PURE__*/React__default["default"].createElement(CarouselItem$1, {
        onExiting: _this2.onExiting,
        onExited: _this2.onExited,
        key: key
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), /*#__PURE__*/React__default["default"].createElement(CarouselCaption$1, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return /*#__PURE__*/React__default["default"].createElement(Carousel$1, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && /*#__PURE__*/React__default["default"].createElement(CarouselIndicators$1, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl$1, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl$1, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(React.Component);

UncontrolledCarousel.propTypes = propTypes$J;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
var UncontrolledCarousel$1 = UncontrolledCarousel;

var _excluded$C = ["className", "cssModule", "tag"];
var propTypes$I = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$I = {
  tag: 'div'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$C);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-subtitle'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardSubtitle.propTypes = propTypes$I;
CardSubtitle.defaultProps = defaultProps$I;
var CardSubtitle$1 = CardSubtitle;

var _excluded$B = ["className", "cssModule", "tag"];
var propTypes$H = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$H = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$B);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardText.propTypes = propTypes$H;
CardText.defaultProps = defaultProps$H;
var CardText$1 = CardText;

var _excluded$A = ["className", "cssModule", "tag"];
var propTypes$G = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$G = {
  tag: 'div'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$A);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-title'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = propTypes$G;
CardTitle.defaultProps = defaultProps$G;
var CardTitle$1 = CardTitle;

var _excluded$z = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];

function noop$2() {}

var propTypes$F = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]).isRequired,
  popperClassName: PropTypes__default["default"].string,
  placement: PropTypes__default["default"].string,
  placementPrefix: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  hideArrow: PropTypes__default["default"].bool,
  tag: tagPropType,
  isOpen: PropTypes__default["default"].bool.isRequired,
  cssModule: PropTypes__default["default"].object,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  fallbackPlacements: PropTypes__default["default"].array,
  flip: PropTypes__default["default"].bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  onClosed: PropTypes__default["default"].func,
  fade: PropTypes__default["default"].bool,
  transition: PropTypes__default["default"].shape(Fade.propTypes)
};
var defaultProps$F = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: [0, 0],
  flip: true,
  container: 'body',
  modifiers: [],
  onClosed: noop$2,
  fade: true,
  transition: _objectSpread2({}, Fade.defaultProps)
};

var PopperContent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = typeof node === 'string' ? getTarget(node) : node;
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        offset = _this$props.offset,
        fallbackPlacements = _this$props.fallbackPlacements,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        boundariesElement = _this$props.boundariesElement,
        fade = _this$props.fade,
        transition = _this$props.transition,
        placement = _this$props.placement,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$z);

    var arrowClassName = mapToCssModules(classNames__default["default"]('arrow', _arrowClassName), cssModule);
    var popperClassName = mapToCssModules(classNames__default["default"](_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);
    var modifierNames = modifiers.map(function (m) {
      return m.name;
    });
    var baseModifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'flip',
      enabled: flip,
      options: {
        fallbackPlacements: fallbackPlacements
      }
    }, {
      name: 'preventOverflow',
      options: {
        boundary: boundariesElement
      }
    }].filter(function (m) {
      return !modifierNames.includes(m.name);
    });
    var extendedModifiers = [].concat(baseModifiers, modifiers);

    var popperTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, popperTransition, attrs, {
      "in": isOpen,
      onExited: this.onClosed,
      tag: tag
    }), /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement,
      strategy: strategy
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          popperPlacement = _ref.placement,
          isReferenceHidden = _ref.isReferenceHidden,
          arrowProps = _ref.arrowProps,
          update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "data-popper-placement": popperPlacement,
        "data-popper-reference-hidden": isReferenceHidden ? 'true' : undefined
      }, typeof children === 'function' ? children({
        update: update
      }) : children, !hideArrow && /*#__PURE__*/React__default["default"].createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(this.props.target);

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React__default["default"].Component);

PopperContent.propTypes = propTypes$F;
PopperContent.defaultProps = defaultProps$F;
var PopperContent$1 = PopperContent;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes__default["default"].object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};
var PopperTargetHelper$1 = PopperTargetHelper;

var propTypes$E = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]),
  placement: PropTypes__default["default"].oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  hideArrow: PropTypes__default["default"].bool,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  className: PropTypes__default["default"].string,
  innerClassName: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  popperClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].func,
  autohide: PropTypes__default["default"].bool,
  placementPrefix: PropTypes__default["default"].string,
  delay: PropTypes__default["default"].oneOfType([PropTypes__default["default"].shape({
    show: PropTypes__default["default"].number,
    hide: PropTypes__default["default"].number
  }), PropTypes__default["default"].number]),
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object]),
  trigger: PropTypes__default["default"].string,
  fade: PropTypes__default["default"].bool,
  flip: PropTypes__default["default"].bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps$E = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {},
  trigger: 'click',
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

function isInDOMSubtrees(element, subtreeRoots) {
  if (subtreeRoots === void 0) {
    subtreeRoots = [];
  }

  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(function (subTreeRoot) {
    return isInDOMSubtree(element, subTreeRoot);
  })[0];
}

var TooltipPopoverWrapper = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

  function TooltipPopoverWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._targets = [];
    _this.currentTargetElement = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    _this._isMounted = false;
    return _this;
  }

  var _proto = TooltipPopoverWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  };

  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  };

  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  };

  _proto.onEscKeyDown = function onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  _proto.getRef = function getRef(ref) {
    var innerRef = this.props.innerRef;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  };

  _proto.getDelay = function getDelay(key) {
    var delay = this.props.delay;

    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  };

  _proto.getCurrentTarget = function getCurrentTarget(target) {
    if (!target) return null;

    var index = this._targets.indexOf(target);

    if (index >= 0) return this._targets[index];
    return this.getCurrentTarget(target.parentElement);
  };

  _proto.show = function show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e ? e.currentTarget || this.getCurrentTarget(e.target) : null;

      if (e && e.composedPath && typeof e.composedPath === 'function') {
        var path = e.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }

      this.toggle(e);
    }
  };

  _proto.showWithDelay = function showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
  };

  _proto.hide = function hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e);
    }
  };

  _proto.hideWithDelay = function hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
  };

  _proto.clearShowTimeout = function clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  };

  _proto.clearHideTimeout = function clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    var triggers = this.props.trigger.split(' ');

    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  };

  _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.addEventListener(type, handler, isBubble);
    });
  };

  _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.removeEventListener(type, handler, isBubble);
    });
  };

  _proto.addTargetEvents = function addTargetEvents() {
    if (this.props.trigger) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          document.addEventListener('click', this.handleDocumentClick, true);
        }

        if (this._targets && this._targets.length) {
          if (triggers.indexOf('hover') > -1) {
            this.addEventOnTargets('mouseover', this.showWithDelay, true);
            this.addEventOnTargets('mouseout', this.hideWithDelay, true);
          }

          if (triggers.indexOf('focus') > -1) {
            this.addEventOnTargets('focusin', this.show, true);
            this.addEventOnTargets('focusout', this.hide, true);
          }

          this.addEventOnTargets('keydown', this.onEscKeyDown, true);
        }
      }
    }
  };

  _proto.removeTargetEvents = function removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets('mouseover', this.showWithDelay, true);
      this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
      this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
      this.removeEventOnTargets('focusin', this.show, true);
      this.removeEventOnTargets('focusout', this.hide, true);
    }

    document.removeEventListener('click', this.handleDocumentClick, true);
  };

  _proto.updateTarget = function updateTarget() {
    var newTarget = getTarget(this.props.target, true);

    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled || !this._isMounted) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (this.props.isOpen) {
      this.updateTarget();
    }

    var target = this.currentTargetElement || this._targets[0];

    if (!target) {
      return null;
    }

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        innerClassName = _this$props.innerClassName,
        isOpen = _this$props.isOpen,
        hideArrow = _this$props.hideArrow,
        boundariesElement = _this$props.boundariesElement,
        placement = _this$props.placement,
        placementPrefix = _this$props.placementPrefix,
        arrowClassName = _this$props.arrowClassName,
        popperClassName = _this$props.popperClassName,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        offset = _this$props.offset,
        fade = _this$props.fade,
        flip = _this$props.flip,
        children = _this$props.children;
    var attributes = omit(this.props, Object.keys(propTypes$E));
    var popperClasses = mapToCssModules(popperClassName, cssModule);
    var classes = mapToCssModules(innerClassName, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(PopperContent$1, {
      className: className,
      target: target,
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      strategy: strategy,
      offset: offset,
      cssModule: cssModule,
      fade: fade,
      flip: flip
    }, function (_ref) {
      var update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
        ref: _this2.getRef,
        className: classes,
        role: "tooltip",
        onMouseOver: _this2.onMouseOverTooltipContent,
        onMouseLeave: _this2.onMouseLeaveTooltipContent,
        onKeyDown: _this2.onEscKeyDown
      }), typeof children === 'function' ? children({
        update: update
      }) : children);
    });
  };

  return TooltipPopoverWrapper;
}(React__default["default"].Component);

TooltipPopoverWrapper.propTypes = propTypes$E;
TooltipPopoverWrapper.defaultProps = defaultProps$E;
var TooltipPopoverWrapper$1 = TooltipPopoverWrapper;

var defaultProps$D = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
  offset: [0, 8]
};

var Popover = function Popover(props) {
  var popperClasses = classNames__default["default"]('popover', 'show', props.popperClassName);
  var classes = classNames__default["default"]('popover-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "popover-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Popover.propTypes = propTypes$E;
Popover.defaultProps = defaultProps$D;
var Popover$1 = Popover;

var omitKeys$4 = ['defaultOpen'];

var UncontrolledPopover = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledPopover, _Component);

  function UncontrolledPopover(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledPopover.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Popover$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  };

  return UncontrolledPopover;
}(React.Component);
UncontrolledPopover.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Popover$1.propTypes);

var _excluded$y = ["className", "cssModule", "tag"];
var propTypes$D = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$C = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$y);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverHeader.propTypes = propTypes$D;
PopoverHeader.defaultProps = defaultProps$C;
var PopoverHeader$1 = PopoverHeader;

var _excluded$x = ["className", "cssModule", "tag"];
var propTypes$C = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$B = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$x);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverBody.propTypes = propTypes$C;
PopoverBody.defaultProps = defaultProps$B;
var PopoverBody$1 = PopoverBody;

var _excluded$w = ["children", "className", "barClassName", "cssModule", "value", "min", "max", "animated", "striped", "color", "bar", "multi", "tag", "style", "barStyle", "barAriaValueText", "barAriaLabelledBy"];
var propTypes$B = {
  children: PropTypes__default["default"].node,
  bar: PropTypes__default["default"].bool,
  multi: PropTypes__default["default"].bool,
  tag: tagPropType,
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  min: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  max: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  animated: PropTypes__default["default"].bool,
  striped: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  barClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  style: PropTypes__default["default"].object,
  barStyle: PropTypes__default["default"].object,
  barAriaValueText: PropTypes__default["default"].string,
  barAriaLabelledBy: PropTypes__default["default"].string
};
var defaultProps$A = {
  tag: 'div',
  value: 0,
  min: 0,
  max: 100,
  style: {},
  barStyle: {}
};

var Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      min = props.min,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      style = props.style,
      barStyle = props.barStyle,
      barAriaValueText = props.barAriaValueText,
      barAriaLabelledBy = props.barAriaLabelledBy,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$w);

  var percent = toNumber(value) / toNumber(max) * 100;
  var progressClasses = mapToCssModules(classNames__default["default"](className, 'progress'), cssModule);
  var progressBarClasses = mapToCssModules(classNames__default["default"]('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? "bg-" + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
  var progressBarProps = {
    className: progressBarClasses,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, bar ? style : {}), barStyle), {}, {
      width: percent + "%"
    }),
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': barAriaValueText,
    'aria-labelledby': barAriaLabelledBy,
    children: children
  };

  if (bar) {
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, progressBarProps));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    style: style,
    className: progressClasses
  }), multi ? children : /*#__PURE__*/React__default["default"].createElement("div", progressBarProps));
};

Progress.propTypes = propTypes$B;
Progress.defaultProps = defaultProps$A;
var Progress$1 = Progress;

var propTypes$A = {
  children: PropTypes__default["default"].node.isRequired,
  node: PropTypes__default["default"].any
};

var Portal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM__default["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(React__default["default"].Component);

Portal.propTypes = propTypes$A;
var Portal$1 = Portal;

function noop$1() {}

var FadePropTypes$1 = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$z = {
  isOpen: PropTypes__default["default"].bool,
  autoFocus: PropTypes__default["default"].bool,
  centered: PropTypes__default["default"].bool,
  fullscreen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['sm', 'md', 'lg', 'xl'])]),
  scrollable: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  toggle: PropTypes__default["default"].func,
  keyboard: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,
  labelledBy: PropTypes__default["default"].string,
  backdrop: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['static'])]),
  onEnter: PropTypes__default["default"].func,
  onExit: PropTypes__default["default"].func,
  onOpened: PropTypes__default["default"].func,
  onClosed: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  wrapClassName: PropTypes__default["default"].string,
  modalClassName: PropTypes__default["default"].string,
  backdropClassName: PropTypes__default["default"].string,
  contentClassName: PropTypes__default["default"].string,
  external: PropTypes__default["default"].node,
  fade: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  backdropTransition: FadePropTypes$1,
  modalTransition: FadePropTypes$1,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  unmountOnClose: PropTypes__default["default"].bool,
  returnFocusAfterClose: PropTypes__default["default"].bool,
  container: targetPropType,
  trapFocus: PropTypes__default["default"].bool
};
var propsToOmit$1 = Object.keys(propTypes$z);
var defaultProps$z = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog && this._dialog.parentNode === ev.target) // initial focus when the Modal is opened
      return;
    if (this.modalIndex < Modal.openCount - 1) // last opened modal
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classNames__default["default"](document.body.className, mapToCssModules('modal-open', this.props.cssModule));
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = omit(this.props, propsToOmit$1);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classNames__default["default"](dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames['modal-fullscreen'] = this.props.fullscreen === true, _classNames["modal-fullscreen-" + this.props.fullscreen + "-down"] = typeof this.props.fullscreen === 'string', _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: mapToCssModules(classNames__default["default"]('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(React__default["default"].Component);

Modal.propTypes = propTypes$z;
Modal.defaultProps = defaultProps$z;
Modal.openCount = 0;
var Modal$1 = Modal;

var _excluded$v = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close"];
var propTypes$y = {
  tag: tagPropType,
  wrapTag: tagPropType,
  toggle: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  closeAriaLabel: PropTypes__default["default"].string,
  close: PropTypes__default["default"].object
};
var defaultProps$y = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$v);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), close || closeButton);
};

ModalHeader.propTypes = propTypes$y;
ModalHeader.defaultProps = defaultProps$y;
var ModalHeader$1 = ModalHeader;

var _excluded$u = ["className", "cssModule", "tag"];
var propTypes$x = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$x = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$u);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalBody.propTypes = propTypes$x;
ModalBody.defaultProps = defaultProps$x;
var ModalBody$1 = ModalBody;

var _excluded$t = ["className", "cssModule", "tag"];
var propTypes$w = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$w = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$t);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalFooter.propTypes = propTypes$w;
ModalFooter.defaultProps = defaultProps$w;
var ModalFooter$1 = ModalFooter;

var defaultProps$v = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus'
};

var Tooltip = function Tooltip(props) {
  var popperClasses = classNames__default["default"]('tooltip', 'show', props.popperClassName);
  var classes = classNames__default["default"]('tooltip-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "tooltip-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Tooltip.propTypes = propTypes$E;
Tooltip.defaultProps = defaultProps$v;
var Tooltip$1 = Tooltip;

var _excluded$s = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];
var propTypes$v = {
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  size: PropTypes__default["default"].string,
  bordered: PropTypes__default["default"].bool,
  borderless: PropTypes__default["default"].bool,
  striped: PropTypes__default["default"].bool,
  dark: PropTypes__default["default"].bool,
  hover: PropTypes__default["default"].bool,
  responsive: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  tag: tagPropType,
  responsiveTag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object])
};
var defaultProps$u = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$s);

  var classes = mapToCssModules(classNames__default["default"](className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes$v;
Table.defaultProps = defaultProps$u;
var Table$1 = Table;

var _excluded$r = ["className", "cssModule", "tag", "flush", "horizontal", "numbered"];
var propTypes$u = {
  tag: tagPropType,
  flush: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  horizontal: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  numbered: PropTypes__default["default"].bool
};
var defaultProps$t = {
  tag: 'ul',
  horizontal: false,
  numbered: false
};

var getHorizontalClass = function getHorizontalClass(horizontal) {
  if (horizontal === false) {
    return false;
  } else if (horizontal === true || horizontal === "xs") {
    return "list-group-horizontal";
  }

  return "list-group-horizontal-" + horizontal;
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      horizontal = props.horizontal,
      numbered = props.numbered,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$r);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group', // list-group-horizontal cannot currently be mixed with list-group-flush
  // we only try to apply horizontal classes if flush is false
  flush ? 'list-group-flush' : getHorizontalClass(horizontal), {
    'list-group-numbered': numbered
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroup.propTypes = propTypes$u;
ListGroup.defaultProps = defaultProps$t;
var ListGroup$1 = ListGroup;

var _excluded$q = ["className", "cssModule", "inline", "tag", "innerRef"];
var propTypes$t = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$s = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$q);

    var classes = mapToCssModules(classNames__default["default"](className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(React.Component);

Form.propTypes = propTypes$t;
Form.defaultProps = defaultProps$s;
var Form$1 = Form;

var _excluded$p = ["className", "cssModule", "valid", "tooltip", "tag"];
var propTypes$s = {
  children: PropTypes__default["default"].node,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  valid: PropTypes__default["default"].bool,
  tooltip: PropTypes__default["default"].bool
};
var defaultProps$r = {
  tag: 'div',
  valid: undefined
};

var FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$p);

  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = mapToCssModules(classNames__default["default"](className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormFeedback.propTypes = propTypes$s;
FormFeedback.defaultProps = defaultProps$r;
var FormFeedback$1 = FormFeedback;

var _excluded$o = ["className", "cssModule", "row", "disabled", "check", "inline", "floating", "tag"];
var propTypes$r = {
  children: PropTypes__default["default"].node,
  row: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  "switch": PropTypes__default["default"].bool,
  inline: PropTypes__default["default"].bool,
  floating: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$q = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      floating = props.floating,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$o);

  var formCheck = check || props["switch"];
  var classes = mapToCssModules(classNames__default["default"](className, row ? 'row' : false, formCheck ? 'form-check' : 'mb-3', props["switch"] ? 'form-switch' : false, formCheck && inline ? 'form-check-inline' : false, formCheck && disabled ? 'disabled' : false, floating && 'form-floating'), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormGroup.propTypes = propTypes$r;
FormGroup.defaultProps = defaultProps$q;
var FormGroup$1 = FormGroup;

var _excluded$n = ["className", "cssModule", "inline", "color", "tag"];
var propTypes$q = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$p = {
  tag: 'small',
  color: 'muted'
};

var FormText = function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$n);

  var classes = mapToCssModules(classNames__default["default"](className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormText.propTypes = propTypes$q;
FormText.defaultProps = defaultProps$p;
var FormText$1 = FormText;

var _excluded$m = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
var propTypes$p = {
  children: PropTypes__default["default"].node,
  type: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  bsSize: PropTypes__default["default"].string,
  valid: PropTypes__default["default"].bool,
  invalid: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  plaintext: PropTypes__default["default"].bool,
  addon: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$o = {
  type: 'text'
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$m);

    var checkInput = ['switch', 'radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (rangeInput) {
      formControlClass = 'form-range';
    } else if (selectInput) {
      formControlClass = "form-select";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classNames__default["default"](className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? selectInput ? "form-select-" + bsSize : "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type === 'switch' ? 'checkbox' : type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(React__default["default"].Component);

Input.propTypes = propTypes$p;
Input.defaultProps = defaultProps$o;
var Input$1 = Input;

var _excluded$l = ["className", "cssModule", "tag", "type", "size"];
var propTypes$o = {
  tag: tagPropType,
  type: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$n = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$l);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group', size ? "input-group-" + size : null), cssModule);

  if (props.type === 'dropdown') {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({}, attributes, {
      className: classes
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroup.propTypes = propTypes$o;
InputGroup.defaultProps = defaultProps$n;
var InputGroup$1 = InputGroup;

var _excluded$k = ["className", "cssModule", "tag"];
var propTypes$n = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$m = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$k);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroupText.propTypes = propTypes$n;
InputGroupText.defaultProps = defaultProps$m;
var InputGroupText$1 = InputGroupText;

var _excluded$j = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string, PropTypes__default["default"].number, PropTypes__default["default"].shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$m = {
  children: PropTypes__default["default"].node,
  hidden: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  "for": PropTypes__default["default"].string,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: PropTypes__default["default"].array
};
var defaultProps$l = {
  tag: 'label',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props["for"],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$j);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = mapToCssModules(classNames__default["default"](className, hidden ? 'visually-hidden' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : 'form-label'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

Label.propTypes = propTypes$m;
Label.defaultProps = defaultProps$l;
var Label$1 = Label;

var _excluded$i = ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"];
var propTypes$l = {
  body: PropTypes__default["default"].bool,
  bottom: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  heading: PropTypes__default["default"].bool,
  left: PropTypes__default["default"].bool,
  list: PropTypes__default["default"].bool,
  middle: PropTypes__default["default"].bool,
  object: PropTypes__default["default"].bool,
  right: PropTypes__default["default"].bool,
  tag: tagPropType,
  top: PropTypes__default["default"].bool
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$i);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = mapToCssModules(classNames__default["default"](className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Media.propTypes = propTypes$l;
var Media$1 = Media;

function noop() {}

var FadePropTypes = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$k = {
  autoFocus: PropTypes__default["default"].bool,
  backdrop: PropTypes__default["default"].bool,
  backdropClassName: PropTypes__default["default"].string,
  backdropTransition: FadePropTypes,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  container: targetPropType,
  cssModule: PropTypes__default["default"].object,
  direction: PropTypes__default["default"].oneOf(['start', 'end', 'bottom', 'top', 'left', 'right']),
  fade: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  isOpen: PropTypes__default["default"].bool,
  keyboard: PropTypes__default["default"].bool,
  labelledBy: PropTypes__default["default"].string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes__default["default"].func,
  onEnter: PropTypes__default["default"].func,
  onExit: PropTypes__default["default"].func,
  onOpened: PropTypes__default["default"].func,
  returnFocusAfterClose: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,
  scrollable: PropTypes__default["default"].bool,
  toggle: PropTypes__default["default"].func,
  trapFocus: PropTypes__default["default"].bool,
  unmountOnClose: PropTypes__default["default"].bool,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
var propsToOmit = Object.keys(propTypes$k);
var defaultProps$k = {
  isOpen: false,
  autoFocus: true,
  direction: 'start',
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  offcanvasTransition: {
    timeout: TransitionTimeouts.Offcanvas
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Offcanvas = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Offcanvas, _React$Component);

  function Offcanvas(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  var _proto = Offcanvas.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Offcanvas, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    } // now Offcanvas Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog === ev.target) // initial focus when the Offcanvas is opened
      return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) // last opened offcanvas
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Offcanvas
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Offcanvas
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.offcanvasTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && typeof this._dialog.focus === 'function') {
      this._dialog.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._backdrop;
      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) return; // last opened offcanvas

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      }
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Offcanvas.openCount === 0 && this.props.backdrop && !this.props.scrollable) {
      document.body.style.overflow = 'hidden';
    }

    this.offcanvasIndex = Offcanvas.openCount;
    Offcanvas.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    this.manageFocusAfterClose();
    Offcanvas.openCount = Math.max(0, Offcanvas.openCount - 1);
    document.body.style.overflow = null;
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        direction = _this$props2.direction,
        unmountOnClose = _this$props2.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isOffcanvasHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isOffcanvasHidden ? 'none' : 'block';
      var _this$props3 = this.props,
          className = _this$props3.className,
          backdropClassName = _this$props3.backdropClassName,
          cssModule = _this$props3.cssModule,
          isOpen = _this$props3.isOpen,
          backdrop = _this$props3.backdrop,
          role = _this$props3.role,
          labelledBy = _this$props3.labelledBy,
          style = _this$props3.style;
      var offcanvasAttributes = {
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var offcanvasTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.offcanvasTransition), {}, {
        baseClass: hasTransition ? this.props.offcanvasTransition.baseClass : '',
        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        innerRef: function innerRef(c) {
          _this2._backdrop = c;
        },
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', 'show', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      }));
      var attributes = omit(this.props, propsToOmit);
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, offcanvasAttributes, offcanvasTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas', className, "offcanvas-" + direction), cssModule),
        innerRef: function innerRef(c) {
          _this2._dialog = c;
        },
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          visibility: isOpen ? 'visible' : 'hidden'
        })
      }), this.props.children), Backdrop);
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Offcanvas;
}(React__default["default"].Component);

Offcanvas.propTypes = propTypes$k;
Offcanvas.defaultProps = defaultProps$k;
Offcanvas.openCount = 0;
var Offcanvas$1 = Offcanvas;

var _excluded$h = ["className", "cssModule", "tag"];
var propTypes$j = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$j = {
  tag: 'div'
};

var OffcanvasBody = function OffcanvasBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$h);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

OffcanvasBody.propTypes = propTypes$j;
OffcanvasBody.defaultProps = defaultProps$j;
var OffcanvasBody$1 = OffcanvasBody;

var _excluded$g = ["children", "className", "close", "closeAriaLabel", "cssModule", "tag", "toggle", "wrapTag"];
var propTypes$i = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  close: PropTypes__default["default"].object,
  closeAriaLabel: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  wrapTag: tagPropType
};
var defaultProps$i = {
  closeAriaLabel: 'Close',
  tag: 'h5',
  wrapTag: 'div'
};

var OffcanvasHeader = function OffcanvasHeader(props) {
  var closeButton;

  var children = props.children,
      className = props.className,
      close = props.close,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      toggle = props.toggle,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$g);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('offcanvas-title', cssModule)
  }, children), close || closeButton);
};

OffcanvasHeader.propTypes = propTypes$i;
OffcanvasHeader.defaultProps = defaultProps$i;
var OffcanvasHeader$1 = OffcanvasHeader;

var _excluded$f = ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"];
var propTypes$h = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  listClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  size: PropTypes__default["default"].string,
  tag: tagPropType,
  listTag: tagPropType,
  'aria-label': PropTypes__default["default"].string
};
var defaultProps$h = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var _classNames;

  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$f);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"](listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: classes,
    "aria-label": label
  }, /*#__PURE__*/React__default["default"].createElement(ListTag, _extends({}, attributes, {
    className: listClasses
  })));
};

Pagination.propTypes = propTypes$h;
Pagination.defaultProps = defaultProps$h;
var Pagination$1 = Pagination;

var _excluded$e = ["active", "className", "cssModule", "disabled", "tag"];
var propTypes$g = {
  active: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  tag: tagPropType
};
var defaultProps$g = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$e);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PaginationItem.propTypes = propTypes$g;
PaginationItem.defaultProps = defaultProps$g;
var PaginationItem$1 = PaginationItem;

var _excluded$d = ["className", "cssModule", "next", "previous", "first", "last", "tag"];
var propTypes$f = {
  'aria-label': PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  next: PropTypes__default["default"].bool,
  previous: PropTypes__default["default"].bool,
  first: PropTypes__default["default"].bool,
  last: PropTypes__default["default"].bool,
  tag: tagPropType
};
var defaultProps$f = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      first = props.first,
      last = props.last,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$d);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\xAB";
  } else if (last) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [/*#__PURE__*/React__default["default"].createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden",
      key: "ariaLabel"
    }, ariaLabel)];
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
};

PaginationLink.propTypes = propTypes$f;
PaginationLink.defaultProps = defaultProps$f;
var PaginationLink$1 = PaginationLink;

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = React__default["default"].createContext({});

var propTypes$e = {
  tag: tagPropType,
  activeTab: PropTypes__default["default"].any,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$e = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = omit(this.props, Object.keys(propTypes$e));
    var classes = mapToCssModules(classNames__default["default"]('tab-content', className), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(React.Component);

var TabContent$1 = TabContent;
TabContent.propTypes = propTypes$e;
TabContent.defaultProps = defaultProps$e;

var _excluded$c = ["className", "cssModule", "tabId", "tag"];
var propTypes$d = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tabId: PropTypes__default["default"].any
};
var defaultProps$d = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$c);

  var getClasses = function getClasses(activeTabId) {
    return mapToCssModules(classNames__default["default"]('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/React__default["default"].createElement(TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes$d;
TabPane.defaultProps = defaultProps$d;

var _excluded$b = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];
var propTypes$c = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  closeClassName: PropTypes__default["default"].string,
  closeAriaLabel: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  color: PropTypes__default["default"].string,
  fade: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  toggle: PropTypes__default["default"].func,
  tag: tagPropType,
  transition: PropTypes__default["default"].shape(Fade.propTypes),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$c = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$b);

  var classes = mapToCssModules(classNames__default["default"](className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classNames__default["default"]('btn-close', closeClassName), cssModule);

  var alertTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }) : null, children);
}

Alert.propTypes = propTypes$c;
Alert.defaultProps = defaultProps$c;

var _excluded$a = ["className", "cssModule", "tag", "isOpen", "children", "transition", "fade", "innerRef"];
var propTypes$b = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  fade: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  tag: tagPropType,
  transition: PropTypes__default["default"].shape(Fade.propTypes),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$b = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Toast(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      isOpen = props.isOpen,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$a);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast'), cssModule);

  var toastTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, toastTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), children);
}

Toast.propTypes = propTypes$b;
Toast.defaultProps = defaultProps$b;

var _excluded$9 = ["className", "cssModule", "innerRef", "tag"];
var propTypes$a = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$a = {
  tag: 'div'
};

var ToastBody = function ToastBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$9);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

ToastBody.propTypes = propTypes$a;
ToastBody.defaultProps = defaultProps$a;
var ToastBody$1 = ToastBody;

var _excluded$8 = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close", "tagClassName", "icon"];
var propTypes$9 = {
  tag: tagPropType,
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node]),
  wrapTag: tagPropType,
  toggle: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  closeAriaLabel: PropTypes__default["default"].string,
  charCode: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  close: PropTypes__default["default"].object
};
var defaultProps$9 = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'me-auto',
  closeAriaLabel: 'Close'
};

var ToastHeader = function ToastHeader(props) {
  var closeButton;
  var icon;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      tagClassName = props.tagClassName,
      iconProp = props.icon,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$8);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  if (typeof iconProp === "string") {
    icon = /*#__PURE__*/React__default["default"].createElement("svg", {
      className: mapToCssModules("rounded text-" + iconProp),
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid slice",
      focusable: "false",
      role: "img"
    }, /*#__PURE__*/React__default["default"].createElement("rect", {
      fill: "currentColor",
      width: "100%",
      height: "100%"
    }));
  } else if (iconProp) {
    icon = iconProp;
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), icon, /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules(classNames__default["default"](tagClassName, {
      "ms-2": icon != null
    }), cssModule)
  }, children), close || closeButton);
};

ToastHeader.propTypes = propTypes$9;
ToastHeader.defaultProps = defaultProps$9;
var ToastHeader$1 = ToastHeader;

var _excluded$7 = ["className", "cssModule", "tag", "active", "disabled", "action", "color"];
var propTypes$8 = {
  tag: tagPropType,
  active: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  action: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].any,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$8 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$7);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroupItem.propTypes = propTypes$8;
ListGroupItem.defaultProps = defaultProps$8;
var ListGroupItem$1 = ListGroupItem;

var _excluded$6 = ["className", "cssModule", "tag"];
var propTypes$7 = {
  tag: tagPropType,
  className: PropTypes__default["default"].any,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$7 = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$6);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-heading'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroupItemHeading.propTypes = propTypes$7;
ListGroupItemHeading.defaultProps = defaultProps$7;
var ListGroupItemHeading$1 = ListGroupItemHeading;

var _excluded$5 = ["className", "cssModule", "tag"];
var propTypes$6 = {
  tag: tagPropType,
  className: PropTypes__default["default"].any,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$6 = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$5);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroupItemText.propTypes = propTypes$6;
ListGroupItemText.defaultProps = defaultProps$6;
var ListGroupItemText$1 = ListGroupItemText;

var _excluded$4 = ["className", "cssModule", "tag", "type"];
var propTypes$5 = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  type: PropTypes__default["default"].string
};
var defaultProps$5 = {
  tag: 'ul'
};
var List = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      type = props.type,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$4);

  var classes = mapToCssModules(classNames__default["default"](className, type ? "list-" + type : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
List.name = 'List';
List.propTypes = propTypes$5;
List.defaultProps = defaultProps$5;
var List$1 = List;

var _excluded$3 = ["className", "cssModule", "tag"];
var propTypes$4 = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$4 = {
  tag: 'li'
};
var ListInlineItem = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$3);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-inline-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
ListInlineItem.name = 'ListInlineItem';
ListInlineItem.propTypes = propTypes$4;
ListInlineItem.defaultProps = defaultProps$4;
var ListInlineItem$1 = ListInlineItem;

var UncontrolledAlert = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledAlert.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  };

  return UncontrolledAlert;
}(React.Component);

var UncontrolledAlert$1 = UncontrolledAlert;

var omitKeys$3 = ['defaultOpen'];

var UncontrolledButtonDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(ButtonDropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  };

  return UncontrolledButtonDropdown;
}(React.Component);
UncontrolledButtonDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, ButtonDropdown$1.propTypes);

var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
var propTypes$3 = {
  defaultOpen: PropTypes__default["default"].bool,
  toggler: PropTypes__default["default"].string.isRequired,
  toggleEvents: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)
};
var defaultProps$3 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }

  var _proto = UncontrolledCollapse.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  };

  _proto.toggle = function toggle(e) {
    this.setState(function (_ref) {
      var isOpen = _ref.isOpen;
      return {
        isOpen: !isOpen
      };
    });
    e.preventDefault();
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  };

  return UncontrolledCollapse;
}(React.Component);

UncontrolledCollapse.propTypes = propTypes$3;
UncontrolledCollapse.defaultProps = defaultProps$3;
var UncontrolledCollapse$1 = UncontrolledCollapse;

var omitKeys$1 = ['defaultOpen'];

var UncontrolledDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledDropdown.prototype;

  _proto.toggle = function toggle(e) {
    var _this2 = this;

    var isOpen = !this.state.isOpen;
    this.setState({
      isOpen: isOpen
    }, function () {
      if (_this2.props.onToggle) {
        _this2.props.onToggle(e, isOpen);
      }
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  };

  return UncontrolledDropdown;
}(React.Component);
UncontrolledDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool,
  onToggle: PropTypes__default["default"].func
}, Dropdown$1.propTypes);

var omitKeys = ['defaultOpen'];

var UncontrolledTooltip = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledTooltip.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Tooltip$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };

  return UncontrolledTooltip;
}(React.Component);
UncontrolledTooltip.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Tooltip$1.propTypes);

var _excluded$2 = ["className", "cssModule", "type", "size", "color", "children", "tag"];
var propTypes$2 = {
  tag: tagPropType,
  type: PropTypes__default["default"].string,
  size: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].string
};
var defaultProps$2 = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

var Spinner = function Spinner(props) {
  var className = props.className,
      cssModule = props.cssModule,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$2);

  var classes = mapToCssModules(classNames__default["default"](className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    role: "status"
  }, attributes, {
    className: classes
  }), children && /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('visually-hidden', cssModule)
  }, children));
};

Spinner.propTypes = propTypes$2;
Spinner.defaultProps = defaultProps$2;
var Spinner$1 = Spinner;

var _excluded$1 = ["className", "cssModule", "color", "innerRef", "tag", "animation", "size", "widths"];

var propTypes$1 = _objectSpread2(_objectSpread2({}, Col$1.propTypes), {}, {
  color: PropTypes__default["default"].string,
  tag: tagPropType,
  animation: PropTypes__default["default"].oneOf(['glow', 'wave']),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  size: PropTypes__default["default"].oneOf(['lg', 'sm', 'xs'])
});

var defaultProps$1 = {
  tag: 'span'
};

var Placeholder = function Placeholder(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      Tag = props.tag,
      animation = props.animation,
      size = props.size,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"](className, colClasses, 'placeholder' + (animation ? '-' + animation : ''), size ? 'placeholder-' + size : false, color ? 'bg-' + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes,
    ref: innerRef
  }));
};

Placeholder.propTypes = propTypes$1;
Placeholder.defaultProps = defaultProps$1;
var Placeholder$1 = Placeholder;

var _excluded = ["cssModule", "className", "tag"];
var propTypes = {
  size: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  outline: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  tag: tagPropType
};
var defaultProps = {
  color: 'primary',
  tag: Button$1
};

var PlaceholderButton = function PlaceholderButton(props) {
  var cssModule = props.cssModule,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded);

  var _getColumnClasses = getColumnClasses(attributes, cssModule),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"]("placeholder", className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Button$1, _extends({}, modifiedAttributes, {
    className: classes,
    disabled: true
  }));
};

PlaceholderButton.propTypes = propTypes;
PlaceholderButton.defaultProps = defaultProps;
var PlaceholderButton$1 = PlaceholderButton;

(function () {
  if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  window.CustomEvent = CustomEvent;
})();

(function () {
  if (typeof Object.values === 'function') return;

  var values = function values(O) {
    return Object.keys(O).map(function (key) {
      return O[key];
    });
  };

  Object.values = values;
})();

var polyfill = {
  __proto__: null
};

exports.Accordion = Accordion$1;
exports.AccordionBody = AccordionItem$1;
exports.AccordionContext = AccordionContext;
exports.AccordionHeader = AccordionHeader$1;
exports.AccordionItem = AccordionItem$3;
exports.Alert = Alert;
exports.Badge = Badge$1;
exports.Breadcrumb = Breadcrumb$1;
exports.BreadcrumbItem = BreadcrumbItem$1;
exports.Button = Button$1;
exports.ButtonDropdown = ButtonDropdown$1;
exports.ButtonGroup = ButtonGroup$1;
exports.ButtonToggle = ButtonToggle$1;
exports.ButtonToolbar = ButtonToolbar$1;
exports.Card = Card$1;
exports.CardBody = CardBody$1;
exports.CardColumns = CardColumns$1;
exports.CardDeck = CardDeck$1;
exports.CardFooter = CardFooter$1;
exports.CardGroup = CardGroup$1;
exports.CardHeader = CardHeader$1;
exports.CardImg = CardImg$1;
exports.CardImgOverlay = CardImgOverlay$1;
exports.CardLink = CardLink$1;
exports.CardSubtitle = CardSubtitle$1;
exports.CardText = CardText$1;
exports.CardTitle = CardTitle$1;
exports.Carousel = Carousel$1;
exports.CarouselCaption = CarouselCaption$1;
exports.CarouselControl = CarouselControl$1;
exports.CarouselIndicators = CarouselIndicators$1;
exports.CarouselItem = CarouselItem$1;
exports.Col = Col$1;
exports.Collapse = Collapse$1;
exports.Container = Container$1;
exports.Dropdown = Dropdown$1;
exports.DropdownContext = DropdownContext;
exports.DropdownItem = DropdownItem$1;
exports.DropdownMenu = DropdownMenu$1;
exports.DropdownToggle = DropdownToggle$1;
exports.Fade = Fade;
exports.Form = Form$1;
exports.FormFeedback = FormFeedback$1;
exports.FormGroup = FormGroup$1;
exports.FormText = FormText$1;
exports.Input = Input$1;
exports.InputGroup = InputGroup$1;
exports.InputGroupText = InputGroupText$1;
exports.Label = Label$1;
exports.List = List$1;
exports.ListGroup = ListGroup$1;
exports.ListGroupItem = ListGroupItem$1;
exports.ListGroupItemHeading = ListGroupItemHeading$1;
exports.ListGroupItemText = ListGroupItemText$1;
exports.ListInlineItem = ListInlineItem$1;
exports.Media = Media$1;
exports.Modal = Modal$1;
exports.ModalBody = ModalBody$1;
exports.ModalFooter = ModalFooter$1;
exports.ModalHeader = ModalHeader$1;
exports.Nav = Nav$1;
exports.NavItem = NavItem$1;
exports.NavLink = NavLink$1;
exports.Navbar = Navbar$1;
exports.NavbarBrand = NavbarBrand$1;
exports.NavbarText = NavbarText$1;
exports.NavbarToggler = NavbarToggler$1;
exports.Offcanvas = Offcanvas$1;
exports.OffcanvasBody = OffcanvasBody$1;
exports.OffcanvasHeader = OffcanvasHeader$1;
exports.Pagination = Pagination$1;
exports.PaginationItem = PaginationItem$1;
exports.PaginationLink = PaginationLink$1;
exports.Placeholder = Placeholder$1;
exports.PlaceholderButton = PlaceholderButton$1;
exports.Polyfill = polyfill;
exports.Popover = Popover$1;
exports.PopoverBody = PopoverBody$1;
exports.PopoverHeader = PopoverHeader$1;
exports.PopperContent = PopperContent$1;
exports.PopperTargetHelper = PopperTargetHelper$1;
exports.Progress = Progress$1;
exports.Row = Row$1;
exports.Spinner = Spinner$1;
exports.TabContent = TabContent$1;
exports.TabPane = TabPane;
exports.Table = Table$1;
exports.Toast = Toast;
exports.ToastBody = ToastBody$1;
exports.ToastHeader = ToastHeader$1;
exports.Tooltip = Tooltip$1;
exports.UncontrolledAccordion = UncontrolledAccordion$1;
exports.UncontrolledAlert = UncontrolledAlert$1;
exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
exports.UncontrolledCarousel = UncontrolledCarousel$1;
exports.UncontrolledCollapse = UncontrolledCollapse$1;
exports.UncontrolledDropdown = UncontrolledDropdown;
exports.UncontrolledPopover = UncontrolledPopover;
exports.UncontrolledTooltip = UncontrolledTooltip;
exports.Util = utils;
//# sourceMappingURL=reactstrap.cjs.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.cjs");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\index.js";




function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/users.svg",
            alt: "users",
            style: {
              height: 53,
              width: 36,
              display: "inline",
              marginRight: "10px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/userEntity",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Usu\xE1rios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/accessProfile.svg",
            alt: "access-profile",
            style: {
              height: 53,
              width: 36,
              display: "inline",
              marginRight: "10px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/accessProfile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Perfil de Acesso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/anime.svg",
            alt: "access-profile",
            style: {
              height: 53,
              width: 36,
              display: "inline",
              marginRight: "10px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/anime",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Anime"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-popper":
/*!*******************************!*\
  !*** external "react-popper" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0c3RyYXAvZGlzdC9yZWFjdHN0cmFwLmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJtZXRob2QiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0NBQWtDLG1DQUFtQztBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSx1QkFBdUIseUJBQXlCO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLHVKQUF1SixtQkFBbUI7QUFDL0s7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxrRkFBa0Ysb0JBQW9CO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELGdEQUFnRDtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7OztBQUc1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGtGQUFrRjtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVELHlEQUF5RCxnREFBZ0Q7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDREQUE0RCxtREFBbUQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7O0FBRWhFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HOztBQUVwRztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBLDBFQUEwRSxxQ0FBcUM7QUFDL0c7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixnQkFBZ0I7QUFDNUY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7O0FBRW5GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRix3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUscURBQXFEO0FBQ2hJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0VBQStFLHlEQUF5RDtBQUN4STtBQUNBO0FBQ0EsT0FBTzs7QUFFUCw4RUFBOEUsd0RBQXdEO0FBQ3RJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHdIQUF3SDtBQUN4SDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0VBQXdFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlIQUFpSDtBQUNqSDtBQUNBO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1RUFBdUU7QUFDNUU7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0I7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCO0FBQ3RFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBQQUEwUDs7QUFFMVA7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUEsY0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREgsbUJBREo7QUFxQ0g7O0FBRWNKLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDOUNBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgcGFyc2VkSHJlZjogVXJsT2JqZWN0LFxuICBwYWdlczogc3RyaW5nW10sXG4gIGFwcGx5QmFzZVBhdGggPSB0cnVlXG4pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgcmV0dXJuIHBhcnNlZEhyZWZcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVtdXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhc1BhdGgpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xudmFyIHJlYWN0UG9wcGVyID0gcmVxdWlyZSgncmVhY3QtcG9wcGVyJyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciByZWFjdFRyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3QpO1xudmFyIFByb3BUeXBlc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUHJvcFR5cGVzKTtcbnZhciBjbGFzc05hbWVzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShjbGFzc05hbWVzKTtcbnZhciBSZWFjdERPTV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3RET00pO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuXG4gIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHN0eWxlcyAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi92NC4wLjAtYWxwaGEuNC9zY3NzL19tb2RhbC5zY3NzI0wxMDYtTDExM1xuXG4gIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn1cbmZ1bmN0aW9uIHNldFNjcm9sbGJhcldpZHRoKHBhZGRpbmcpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID4gMCA/IHBhZGRpbmcgKyBcInB4XCIgOiBudWxsO1xufVxuZnVuY3Rpb24gaXNCb2R5T3ZlcmZsb3dpbmcoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XG59XG5mdW5jdGlvbiBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKTtcbiAgcmV0dXJuIHBhcnNlSW50KHN0eWxlICYmIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLCAxMCk7XG59XG5mdW5jdGlvbiBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCkge1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi92NC4wLjAtYWxwaGEuNi9qcy9zcmMvbW9kYWwuanMjTDQzM1xuXG4gIHZhciBmaXhlZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJylbMF07XG4gIHZhciBib2R5UGFkZGluZyA9IGZpeGVkQ29udGVudCA/IHBhcnNlSW50KGZpeGVkQ29udGVudC5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgMCwgMTApIDogMDtcblxuICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcoKSkge1xuICAgIHNldFNjcm9sbGJhcldpZHRoKGJvZHlQYWRkaW5nICsgc2Nyb2xsYmFyV2lkdGgpO1xuICB9XG59XG52YXIgZ2xvYmFsQ3NzTW9kdWxlO1xuZnVuY3Rpb24gc2V0R2xvYmFsQ3NzTW9kdWxlKGNzc01vZHVsZSkge1xuICBnbG9iYWxDc3NNb2R1bGUgPSBjc3NNb2R1bGU7XG59XG5mdW5jdGlvbiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lLCBjc3NNb2R1bGUpIHtcbiAgaWYgKGNsYXNzTmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NOYW1lID0gJyc7XG4gIH1cblxuICBpZiAoY3NzTW9kdWxlID09PSB2b2lkIDApIHtcbiAgICBjc3NNb2R1bGUgPSBnbG9iYWxDc3NNb2R1bGU7XG4gIH1cblxuICBpZiAoIWNzc01vZHVsZSkgcmV0dXJuIGNsYXNzTmFtZTtcbiAgcmV0dXJuIGNsYXNzTmFtZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjc3NNb2R1bGVbY10gfHwgYztcbiAgfSkuam9pbignICcpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSBgb2JqYCB0aGF0IGFyZSBub3QgaW4gdGhlIGFycmF5IGBvbWl0S2V5c2AuXG4gKi9cblxuZnVuY3Rpb24gb21pdChvYmosIG9taXRLZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAob21pdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZmlsdGVyZWQgY29weSBvZiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBzcGVjaWZpZWQga2V5cy5cbiAqL1xuXG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICB2YXIgcGlja0tleXMgPSBBcnJheS5pc0FycmF5KGtleXMpID8ga2V5cyA6IFtrZXlzXTtcbiAgdmFyIGxlbmd0aCA9IHBpY2tLZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgbGVuZ3RoIC09IDE7XG4gICAga2V5ID0gcGlja0tleXNbbGVuZ3RoXTtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciB3YXJuZWQgPSB7fTtcbmZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCF3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHdhcm5lZFttZXNzYWdlXSA9IHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQocHJvcFR5cGUsIGV4cGxhbmF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9PSBudWxsICYmIHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3YXJuT25jZShcIlxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIHByb3BlcnR5IG9mIFxcXCJcIiArIGNvbXBvbmVudE5hbWUgKyBcIlxcXCIgaGFzIGJlZW4gZGVwcmVjYXRlZC5cXG5cIiArIGV4cGxhbmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcFR5cGUuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpKSk7XG4gIH07XG59IC8vIFNoaW0gRWxlbWVudCBpZiBuZWVkZWQgKGUuZy4gaW4gTm9kZSBlbnZpcm9ubWVudClcblxudmFyIEVsZW1lbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuRWxlbWVudCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuZnVuY3Rpb24gRE9NRWxlbWVudChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgYCcgKyBwcm9wTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLiBFeHBlY3RlZCBwcm9wIHRvIGJlIGFuIGluc3RhbmNlIG9mIEVsZW1lbnQuIFZhbGlkYXRpb24gZmFpbGVkLicpO1xuICB9XG59XG52YXIgdGFyZ2V0UHJvcFR5cGUgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgRE9NRWxlbWVudCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIGN1cnJlbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59KV0pO1xudmFyIHRhZ1Byb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAkJHR5cGVvZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zeW1ib2wsXG4gIHJlbmRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59KSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgJCR0eXBlb2Y6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3ltYm9sLFxuICByZW5kZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY1xufSldKSldKTtcbi8qIGVzbGludCBrZXktc3BhY2luZzogW1wiZXJyb3JcIiwgeyBhZnRlckNvbG9uOiB0cnVlLCBhbGlnbjogXCJ2YWx1ZVwiIH1dICovXG4vLyBUaGVzZSBhcmUgYWxsIHNldHVwIHRvIG1hdGNoIHdoYXQgaXMgaW4gdGhlIGJvb3RzdHJhcCBfdmFyaWFibGVzLnNjc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LWRldi9zY3NzL192YXJpYWJsZXMuc2Nzc1xuXG52YXIgVHJhbnNpdGlvblRpbWVvdXRzID0ge1xuICBGYWRlOiAxNTAsXG4gIC8vICR0cmFuc2l0aW9uLWZhZGVcbiAgQ29sbGFwc2U6IDM1MCxcbiAgLy8gJHRyYW5zaXRpb24tY29sbGFwc2VcbiAgTW9kYWw6IDMwMCxcbiAgLy8gJG1vZGFsLXRyYW5zaXRpb25cbiAgQ2Fyb3VzZWw6IDYwMCxcbiAgLy8gJGNhcm91c2VsLXRyYW5zaXRpb25cbiAgT2ZmY2FudmFzOiAzMDAgLy8gJG9mZmNhbnZhcy10cmFuc2l0aW9uXG5cbn07IC8vIER1cGxpY2F0ZWQgVHJhbnNpdGlvbi5wcm9wVHlwZSBrZXlzIHRvIGVuc3VyZSB0aGF0IFJlYWN0c3RyYXAgYnVpbGRzXG4vLyBmb3IgZGlzdHJpYnV0aW9uIHByb3Blcmx5IGV4Y2x1ZGUgdGhlc2Uga2V5cyBmb3IgbmVzdGVkIGNoaWxkIEhUTUwgYXR0cmlidXRlc1xuLy8gc2luY2UgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIHJlbW92ZXMgcHJvcFR5cGVzIGluIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG52YXIgVHJhbnNpdGlvblByb3BUeXBlS2V5cyA9IFsnaW4nLCAnbW91bnRPbkVudGVyJywgJ3VubW91bnRPbkV4aXQnLCAnYXBwZWFyJywgJ2VudGVyJywgJ2V4aXQnLCAndGltZW91dCcsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnXTtcbnZhciBUcmFuc2l0aW9uU3RhdHVzZXMgPSB7XG4gIEVOVEVSSU5HOiAnZW50ZXJpbmcnLFxuICBFTlRFUkVEOiAnZW50ZXJlZCcsXG4gIEVYSVRJTkc6ICdleGl0aW5nJyxcbiAgRVhJVEVEOiAnZXhpdGVkJ1xufTtcbnZhciBrZXlDb2RlcyA9IHtcbiAgZXNjOiAyNyxcbiAgc3BhY2U6IDMyLFxuICBlbnRlcjogMTMsXG4gIHRhYjogOSxcbiAgdXA6IDM4LFxuICBkb3duOiA0MCxcbiAgaG9tZTogMzYsXG4gIGVuZDogMzUsXG4gIG46IDc4LFxuICBwOiA4MFxufTtcbnZhciBQb3BwZXJQbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGlzUmVhY3RSZWZPYmoodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2N1cnJlbnQnIGluIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgdmFyIE5BTiA9IDAgLyAwO1xuXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnc3ltYm9sJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJykge1xuICAgIHJldHVybiBOQU47XG4gIH1cblxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IFwiXCIgKyBvdGhlciA6IG90aGVyO1xuICB9XG5cbiAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gL14wYlswMV0rJC9pLnRlc3QodmFsdWUpO1xuICByZXR1cm4gaXNCaW5hcnkgfHwgL14wb1swLTddKyQvaS50ZXN0KHZhbHVlKSA/IHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KSA6IC9eWy0rXTB4WzAtOWEtZl0rJC9pLnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgdGFnID09PSAnW29iamVjdCBQcm94eV0nO1xufVxuZnVuY3Rpb24gZmluZERPTUVsZW1lbnRzKHRhcmdldCkge1xuICBpZiAoaXNSZWFjdFJlZk9iaih0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5jdXJyZW50O1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBjYW5Vc2VET00pIHtcbiAgICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0YXJnZXQgJ1wiICsgdGFyZ2V0ICsgXCInIGNvdWxkIG5vdCBiZSBpZGVudGlmaWVkIGluIHRoZSBkb20sIHRpcDogY2hlY2sgc3BlbGxpbmdcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBpc0FycmF5T3JOb2RlTGlzdChlbHMpIHtcbiAgaWYgKGVscyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGVscykgfHwgY2FuVXNlRE9NICYmIHR5cGVvZiBlbHMubGVuZ3RoID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQsIGFsbEVsZW1lbnRzKSB7XG4gIHZhciBlbHMgPSBmaW5kRE9NRWxlbWVudHModGFyZ2V0KTtcblxuICBpZiAoYWxsRWxlbWVudHMpIHtcbiAgICBpZiAoaXNBcnJheU9yTm9kZUxpc3QoZWxzKSkge1xuICAgICAgcmV0dXJuIGVscztcbiAgICB9XG5cbiAgICBpZiAoZWxzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtlbHNdO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgICByZXR1cm4gZWxzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBlbHM7XG4gIH1cbn1cbnZhciBkZWZhdWx0VG9nZ2xlRXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ2NsaWNrJ107XG5mdW5jdGlvbiBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKF9lbHMsIGhhbmRsZXIsIF9ldmVudHMsIHVzZUNhcHR1cmUpIHtcbiAgdmFyIGVscyA9IF9lbHM7XG5cbiAgaWYgKCFpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgZWxzID0gW2Vsc107XG4gIH1cblxuICB2YXIgZXZlbnRzID0gX2V2ZW50cztcblxuICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIGlmICghaXNBcnJheU9yTm9kZUxpc3QoZWxzKSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJyB8fCAhQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgVGhlIGZpcnN0IGFyZ3VtZW50IG9mIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBET00gbm9kZSBvciBhbiBhcnJheSBvbiBET00gbm9kZXMgb3IgTm9kZUxpc3QuXFxuICAgICAgVGhlIHNlY29uZCBtdXN0IGJlIGEgZnVuY3Rpb24uXFxuICAgICAgVGhlIHRoaXJkIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCByZXByZXNlbnRzIERPTSBldmVudHNcXG4gICAgXCIpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChldmVudHMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG52YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1t0YWJpbmRleF06bm90KC5tb2RhbCknLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKSddO1xuXG52YXIgdXRpbHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0U2Nyb2xsYmFyV2lkdGg6IGdldFNjcm9sbGJhcldpZHRoLFxuICBzZXRTY3JvbGxiYXJXaWR0aDogc2V0U2Nyb2xsYmFyV2lkdGgsXG4gIGlzQm9keU92ZXJmbG93aW5nOiBpc0JvZHlPdmVyZmxvd2luZyxcbiAgZ2V0T3JpZ2luYWxCb2R5UGFkZGluZzogZ2V0T3JpZ2luYWxCb2R5UGFkZGluZyxcbiAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcjogY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcixcbiAgc2V0R2xvYmFsQ3NzTW9kdWxlOiBzZXRHbG9iYWxDc3NNb2R1bGUsXG4gIG1hcFRvQ3NzTW9kdWxlczogbWFwVG9Dc3NNb2R1bGVzLFxuICBvbWl0OiBvbWl0LFxuICBwaWNrOiBwaWNrLFxuICB3YXJuT25jZTogd2Fybk9uY2UsXG4gIGRlcHJlY2F0ZWQ6IGRlcHJlY2F0ZWQsXG4gIERPTUVsZW1lbnQ6IERPTUVsZW1lbnQsXG4gIHRhcmdldFByb3BUeXBlOiB0YXJnZXRQcm9wVHlwZSxcbiAgdGFnUHJvcFR5cGU6IHRhZ1Byb3BUeXBlLFxuICBUcmFuc2l0aW9uVGltZW91dHM6IFRyYW5zaXRpb25UaW1lb3V0cyxcbiAgVHJhbnNpdGlvblByb3BUeXBlS2V5czogVHJhbnNpdGlvblByb3BUeXBlS2V5cyxcbiAgVHJhbnNpdGlvblN0YXR1c2VzOiBUcmFuc2l0aW9uU3RhdHVzZXMsXG4gIGtleUNvZGVzOiBrZXlDb2RlcyxcbiAgUG9wcGVyUGxhY2VtZW50czogUG9wcGVyUGxhY2VtZW50cyxcbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG4gIGlzUmVhY3RSZWZPYmo6IGlzUmVhY3RSZWZPYmosXG4gIHRvTnVtYmVyOiB0b051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBmaW5kRE9NRWxlbWVudHM6IGZpbmRET01FbGVtZW50cyxcbiAgaXNBcnJheU9yTm9kZUxpc3Q6IGlzQXJyYXlPck5vZGVMaXN0LFxuICBnZXRUYXJnZXQ6IGdldFRhcmdldCxcbiAgZGVmYXVsdFRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50cyxcbiAgYWRkTXVsdGlwbGVFdmVudExpc3RlbmVyczogYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyxcbiAgZm9jdXNhYmxlRWxlbWVudHM6IGZvY3VzYWJsZUVsZW1lbnRzXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDFlID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZmx1aWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFrID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBmbHVpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWkgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDb250YWluZXIgPSBmdW5jdGlvbiBDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGZsdWlkID0gcHJvcHMuZmx1aWQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxZSk7XG5cbiAgdmFyIGNvbnRhaW5lckNsYXNzID0gJ2NvbnRhaW5lcic7XG5cbiAgaWYgKGZsdWlkID09PSB0cnVlKSB7XG4gICAgY29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyLWZsdWlkJztcbiAgfSBlbHNlIGlmIChmbHVpZCkge1xuICAgIGNvbnRhaW5lckNsYXNzID0gXCJjb250YWluZXItXCIgKyBmbHVpZDtcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3MpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxaztcbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWk7XG52YXIgQ29udGFpbmVyJDEgPSBDb250YWluZXI7XG5cbnZhciBfZXhjbHVkZWQkMWQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJub0d1dHRlcnNcIiwgXCJ0YWdcIiwgXCJmb3JtXCIsIFwid2lkdGhzXCJdO1xudmFyIHJvd0NvbFdpZHRocyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgcm93Q29sc1Byb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIHByb3BUeXBlcyQxaiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbm9HdXR0ZXJzOiBkZXByZWNhdGVkKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgXCJQbGVhc2UgdXNlIEJvb3RzdHJhcCA1IGd1dHRlciB1dGlsaXR5IGNsYXNzZXMuIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMC9sYXlvdXQvZ3V0dGVycy9cIiksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGZvcm06IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgeHM6IHJvd0NvbHNQcm9wVHlwZSxcbiAgc206IHJvd0NvbHNQcm9wVHlwZSxcbiAgbWQ6IHJvd0NvbHNQcm9wVHlwZSxcbiAgbGc6IHJvd0NvbHNQcm9wVHlwZSxcbiAgeGw6IHJvd0NvbHNQcm9wVHlwZSxcbiAgeHhsOiByb3dDb2xzUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFoID0ge1xuICB0YWc6ICdkaXYnLFxuICB3aWR0aHM6IHJvd0NvbFdpZHRoc1xufTtcblxudmFyIFJvdyA9IGZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbm9HdXR0ZXJzID0gcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxZCk7XG5cbiAgdmFyIGNvbENsYXNzZXMgPSBbXTtcbiAgd2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKGNvbFdpZHRoLCBpKSB7XG4gICAgdmFyIGNvbFNpemUgPSBwcm9wc1tjb2xXaWR0aF07XG4gICAgZGVsZXRlIGF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2xTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcbiAgICBjb2xDbGFzc2VzLnB1c2goaXNYcyA/IFwicm93LWNvbHMtXCIgKyBjb2xTaXplIDogXCJyb3ctY29scy1cIiArIGNvbFdpZHRoICsgXCItXCIgKyBjb2xTaXplKTtcbiAgfSk7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgbm9HdXR0ZXJzID8gJ2d4LTAnIDogbnVsbCwgZm9ybSA/ICdmb3JtLXJvdycgOiAncm93JywgY29sQ2xhc3NlcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Sb3cucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFqO1xuUm93LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxaDtcbnZhciBSb3ckMSA9IFJvdztcblxudmFyIF9leGNsdWRlZCQxYyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcIndpZHRoc1wiLCBcInRhZ1wiXTtcbnZhciBjb2xXaWR0aHMkMSA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgc3RyaW5nT3JOdW1iZXJQcm9wJDEgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSk7XG52YXIgY29sdW1uUHJvcHMkMSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBvcmRlcjogc3RyaW5nT3JOdW1iZXJQcm9wJDEsXG4gIG9mZnNldDogc3RyaW5nT3JOdW1iZXJQcm9wJDFcbn0pXSk7XG52YXIgcHJvcFR5cGVzJDFpID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB4czogY29sdW1uUHJvcHMkMSxcbiAgc206IGNvbHVtblByb3BzJDEsXG4gIG1kOiBjb2x1bW5Qcm9wcyQxLFxuICBsZzogY29sdW1uUHJvcHMkMSxcbiAgeGw6IGNvbHVtblByb3BzJDEsXG4gIHh4bDogY29sdW1uUHJvcHMkMSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgd2lkdGhzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxZyA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgd2lkdGhzOiBjb2xXaWR0aHMkMVxufTtcblxudmFyIGdldENvbHVtblNpemVDbGFzcyQxID0gZnVuY3Rpb24gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2xTaXplKSB7XG4gIGlmIChjb2xTaXplID09PSB0cnVlIHx8IGNvbFNpemUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sJyA6IFwiY29sLVwiICsgY29sV2lkdGg7XG4gIH0gZWxzZSBpZiAoY29sU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sLWF1dG8nIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLWF1dG9cIjtcbiAgfVxuXG4gIHJldHVybiBpc1hzID8gXCJjb2wtXCIgKyBjb2xTaXplIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZTtcbn07XG5cbnZhciBnZXRDb2x1bW5DbGFzc2VzID0gZnVuY3Rpb24gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUsIHdpZHRocykge1xuICBpZiAod2lkdGhzID09PSB2b2lkIDApIHtcbiAgICB3aWR0aHMgPSBjb2xXaWR0aHMkMTtcbiAgfVxuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2x1bW5Qcm9wID0gYXR0cmlidXRlc1tjb2xXaWR0aF07XG4gICAgZGVsZXRlIGF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2x1bW5Qcm9wICYmIGNvbHVtblByb3AgIT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcblxuICAgIGlmIChpc09iamVjdChjb2x1bW5Qcm9wKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgY29sU2l6ZUludGVyZml4ID0gaXNYcyA/ICctJyA6IFwiLVwiICsgY29sV2lkdGggKyBcIi1cIjtcbiAgICAgIHZhciBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyQxKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wLnNpemUpO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbY29sQ2xhc3NdID0gY29sdW1uUHJvcC5zaXplIHx8IGNvbHVtblByb3Auc2l6ZSA9PT0gJycsIF9jbGFzc05hbWVzW1wib3JkZXJcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub3JkZXJdID0gY29sdW1uUHJvcC5vcmRlciB8fCBjb2x1bW5Qcm9wLm9yZGVyID09PSAwLCBfY2xhc3NOYW1lc1tcIm9mZnNldFwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vZmZzZXRdID0gY29sdW1uUHJvcC5vZmZzZXQgfHwgY29sdW1uUHJvcC5vZmZzZXQgPT09IDAsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2NvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzJDEoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3ApO1xuXG4gICAgICBjb2xDbGFzc2VzLnB1c2goX2NvbENsYXNzKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvbENsYXNzZXM6IGNvbENsYXNzZXMsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufTtcblxudmFyIENvbCA9IGZ1bmN0aW9uIENvbChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWMpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIGlmICghY29sQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICBjb2xDbGFzc2VzLnB1c2goJ2NvbCcpO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBtb2RpZmllZEF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxaTtcbkNvbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWc7XG52YXIgQ29sJDEgPSBDb2w7XG5cbnZhciBfZXhjbHVkZWQkMWIgPSBbXCJleHBhbmRcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJsaWdodFwiLCBcImRhcmtcIiwgXCJmaXhlZFwiLCBcInN0aWNreVwiLCBcImNvbG9yXCIsIFwiY29udGFpbmVyXCIsIFwidGFnXCIsIFwiY2hpbGRyZW5cIl07XG52YXIgcHJvcFR5cGVzJDFoID0ge1xuICBsaWdodDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZ1bGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZml4ZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzdGlja3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjb250YWluZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGV4cGFuZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWYgPSB7XG4gIHRhZzogJ25hdicsXG4gIGV4cGFuZDogZmFsc2UsXG4gIGNvbnRhaW5lcjogJ2ZsdWlkJ1xufTtcblxudmFyIGdldEV4cGFuZENsYXNzID0gZnVuY3Rpb24gZ2V0RXhwYW5kQ2xhc3MoZXhwYW5kKSB7XG4gIGlmIChleHBhbmQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKGV4cGFuZCA9PT0gdHJ1ZSB8fCBleHBhbmQgPT09ICd4cycpIHtcbiAgICByZXR1cm4gJ25hdmJhci1leHBhbmQnO1xuICB9XG5cbiAgcmV0dXJuIFwibmF2YmFyLWV4cGFuZC1cIiArIGV4cGFuZDtcbn07XG5cbnZhciBOYXZiYXIgPSBmdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBleHBhbmQgPSBwcm9wcy5leHBhbmQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBsaWdodCA9IHByb3BzLmxpZ2h0LFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBmaXhlZCA9IHByb3BzLmZpeGVkLFxuICAgICAgc3RpY2t5ID0gcHJvcHMuc3RpY2t5LFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyJywgZ2V0RXhwYW5kQ2xhc3MoZXhwYW5kKSwgKF9jbGFzc05hbWVzID0ge1xuICAgICduYXZiYXItbGlnaHQnOiBsaWdodCxcbiAgICAnbmF2YmFyLWRhcmsnOiBkYXJrXG4gIH0sIF9jbGFzc05hbWVzW1wiYmctXCIgKyBjb2xvcl0gPSBjb2xvciwgX2NsYXNzTmFtZXNbXCJmaXhlZC1cIiArIGZpeGVkXSA9IGZpeGVkLCBfY2xhc3NOYW1lc1tcInN0aWNreS1cIiArIHN0aWNreV0gPSBzdGlja3ksIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gIHZhciBjb250YWluZXJDbGFzcyA9IGNvbnRhaW5lciAmJiBjb250YWluZXIgPT09IHRydWUgPyAnY29udGFpbmVyJyA6IFwiY29udGFpbmVyLVwiICsgY29udGFpbmVyO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNvbnRhaW5lciA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjb250YWluZXJDbGFzc1xuICB9LCBjaGlsZHJlbikgOiBjaGlsZHJlbik7XG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFoO1xuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZjtcbnZhciBOYXZiYXIkMSA9IE5hdmJhcjtcblxudmFyIF9leGNsdWRlZCQxYSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFlID0ge1xuICB0YWc6ICdhJ1xufTtcblxudmFyIE5hdmJhckJyYW5kID0gZnVuY3Rpb24gTmF2YmFyQnJhbmQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFhKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItYnJhbmQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk5hdmJhckJyYW5kLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZztcbk5hdmJhckJyYW5kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZTtcbnZhciBOYXZiYXJCcmFuZCQxID0gTmF2YmFyQnJhbmQ7XG5cbnZhciBfZXhjbHVkZWQkMTkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFmID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxZCA9IHtcbiAgdGFnOiAnc3Bhbidcbn07XG5cbnZhciBOYXZiYXJUZXh0ID0gZnVuY3Rpb24gTmF2YmFyVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhci10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5OYXZiYXJUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZjtcbk5hdmJhclRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFkO1xudmFyIE5hdmJhclRleHQkMSA9IE5hdmJhclRleHQ7XG5cbnZhciBfZXhjbHVkZWQkMTggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxYyA9IHtcbiAgdGFnOiAnYnV0dG9uJyxcbiAgdHlwZTogJ2J1dHRvbidcbn07XG5cbnZhciBOYXZiYXJUb2dnbGVyID0gZnVuY3Rpb24gTmF2YmFyVG9nZ2xlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE4KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItdG9nZ2xlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gfHwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ25hdmJhci10b2dnbGVyLWljb24nLCBjc3NNb2R1bGUpXG4gIH0pKTtcbn07XG5cbk5hdmJhclRvZ2dsZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFlO1xuTmF2YmFyVG9nZ2xlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWM7XG52YXIgTmF2YmFyVG9nZ2xlciQxID0gTmF2YmFyVG9nZ2xlcjtcblxudmFyIF9leGNsdWRlZCQxNyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhYnNcIiwgXCJwaWxsc1wiLCBcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiLCBcImp1c3RpZmllZFwiLCBcImZpbGxcIiwgXCJuYXZiYXJcIiwgXCJjYXJkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZCA9IHtcbiAgdGFiczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBwaWxsczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGp1c3RpZmllZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmaWxsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFiID0ge1xuICB0YWc6ICd1bCcsXG4gIHZlcnRpY2FsOiBmYWxzZVxufTtcblxudmFyIGdldFZlcnRpY2FsQ2xhc3MgPSBmdW5jdGlvbiBnZXRWZXJ0aWNhbENsYXNzKHZlcnRpY2FsKSB7XG4gIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAodmVydGljYWwgPT09IHRydWUgfHwgdmVydGljYWwgPT09ICd4cycpIHtcbiAgICByZXR1cm4gJ2ZsZXgtY29sdW1uJztcbiAgfVxuXG4gIHJldHVybiBcImZsZXgtXCIgKyB2ZXJ0aWNhbCArIFwiLWNvbHVtblwiO1xufTtcblxudmFyIE5hdiA9IGZ1bmN0aW9uIE5hdihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdGFicyA9IHByb3BzLnRhYnMsXG4gICAgICBwaWxscyA9IHByb3BzLnBpbGxzLFxuICAgICAgdmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIGhvcml6b250YWwgPSBwcm9wcy5ob3Jpem9udGFsLFxuICAgICAganVzdGlmaWVkID0gcHJvcHMuanVzdGlmaWVkLFxuICAgICAgZmlsbCA9IHByb3BzLmZpbGwsXG4gICAgICBuYXZiYXIgPSBwcm9wcy5uYXZiYXIsXG4gICAgICBjYXJkID0gcHJvcHMuY2FyZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIG5hdmJhciA/ICduYXZiYXItbmF2JyA6ICduYXYnLCBob3Jpem9udGFsID8gXCJqdXN0aWZ5LWNvbnRlbnQtXCIgKyBob3Jpem9udGFsIDogZmFsc2UsIGdldFZlcnRpY2FsQ2xhc3ModmVydGljYWwpLCB7XG4gICAgJ25hdi10YWJzJzogdGFicyxcbiAgICAnY2FyZC1oZWFkZXItdGFicyc6IGNhcmQgJiYgdGFicyxcbiAgICAnbmF2LXBpbGxzJzogcGlsbHMsXG4gICAgJ2NhcmQtaGVhZGVyLXBpbGxzJzogY2FyZCAmJiBwaWxscyxcbiAgICAnbmF2LWp1c3RpZmllZCc6IGp1c3RpZmllZCxcbiAgICAnbmF2LWZpbGwnOiBmaWxsXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTmF2LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZDtcbk5hdi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWI7XG52YXIgTmF2JDEgPSBOYXY7XG5cbnZhciBfZXhjbHVkZWQkMTYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFjID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWEgPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIE5hdkl0ZW0gPSBmdW5jdGlvbiBOYXZJdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2LWl0ZW0nLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk5hdkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFjO1xuTmF2SXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWE7XG52YXIgTmF2SXRlbSQxID0gTmF2SXRlbTtcblxudmFyIF9leGNsdWRlZCQxNSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyQxYiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBocmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTkgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgTmF2TGluayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOYXZMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOYXZMaW5rKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5hdkxpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmID09PSAnIycpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCQxNSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtbGluaycsIHtcbiAgICAgIGRpc2FibGVkOiBhdHRyaWJ1dGVzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIE5hdkxpbms7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxYjtcbk5hdkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE5O1xudmFyIE5hdkxpbmskMSA9IE5hdkxpbms7XG5cbnZhciBfZXhjbHVkZWQkMTQgPSBbXCJjbGFzc05hbWVcIiwgXCJsaXN0Q2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIiwgXCJsaXN0VGFnXCIsIFwiYXJpYS1sYWJlbFwiXTtcbnZhciBwcm9wVHlwZXMkMWEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkMTggPSB7XG4gIHRhZzogJ25hdicsXG4gIGxpc3RUYWc6ICdvbCcsXG4gICdhcmlhLWxhYmVsJzogJ2JyZWFkY3J1bWInXG59O1xuXG52YXIgQnJlYWRjcnVtYiA9IGZ1bmN0aW9uIEJyZWFkY3J1bWIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGxpc3RDbGFzc05hbWUgPSBwcm9wcy5saXN0Q2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIExpc3RUYWcgPSBwcm9wcy5saXN0VGFnLFxuICAgICAgbGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHZhciBsaXN0Q2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYnJlYWRjcnVtYicsIGxpc3RDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoTGlzdFRhZywge1xuICAgIGNsYXNzTmFtZTogbGlzdENsYXNzZXNcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cbkJyZWFkY3J1bWIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFhO1xuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTg7XG52YXIgQnJlYWRjcnVtYiQxID0gQnJlYWRjcnVtYjtcblxudmFyIF9leGNsdWRlZCQxMyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNyA9IHtcbiAgdGFnOiAnbGknXG59O1xuXG52YXIgQnJlYWRjcnVtYkl0ZW0gPSBmdW5jdGlvbiBCcmVhZGNydW1iSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgJ2JyZWFkY3J1bWItaXRlbScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYWN0aXZlID8gJ3BhZ2UnIDogdW5kZWZpbmVkXG4gIH0pKTtcbn07XG5cbkJyZWFkY3J1bWJJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxOTtcbkJyZWFkY3J1bWJJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNztcbnZhciBCcmVhZGNydW1iSXRlbSQxID0gQnJlYWRjcnVtYkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkMTIgPSBbXCJhY3RpdmVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiYmxvY2tcIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwib3V0bGluZVwiLCBcInNpemVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkMTggPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBibG9jazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG91dGxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNiA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB0YWc6ICdidXR0b24nXG59O1xuXG52YXIgQnV0dG9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJ1dHRvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aXZlID0gX3RoaXMkcHJvcHMuYWN0aXZlLFxuICAgICAgICBhcmlhTGFiZWwgPSBfdGhpcyRwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICBibG9jayA9IF90aGlzJHByb3BzLmJsb2NrLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsb3NlID0gX3RoaXMkcHJvcHMuY2xvc2UsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgY29sb3IgPSBfdGhpcyRwcm9wcy5jb2xvcixcbiAgICAgICAgb3V0bGluZSA9IF90aGlzJHByb3BzLm91dGxpbmUsXG4gICAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJDEyKTtcblxuICAgIHZhciBidG5PdXRsaW5lQ29sb3IgPSBcImJ0blwiICsgKG91dGxpbmUgPyAnLW91dGxpbmUnIDogJycpICsgXCItXCIgKyBjb2xvcjtcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNsb3NlICYmICdidG4tY2xvc2UnLCBjbG9zZSB8fCAnYnRuJywgY2xvc2UgfHwgYnRuT3V0bGluZUNvbG9yLCBzaXplID8gXCJidG4tXCIgKyBzaXplIDogZmFsc2UsIGJsb2NrID8gJ2QtYmxvY2sgdy0xMDAnIDogZmFsc2UsIHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICB9KSwgY3NzTW9kdWxlKTtcblxuICAgIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnYnV0dG9uJykge1xuICAgICAgVGFnID0gJ2EnO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0QXJpYUxhYmVsID0gY2xvc2UgPyAnQ2xvc2UnIDogbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiBhdHRyaWJ1dGVzLm9uQ2xpY2sgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICAgIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsIHx8IGRlZmF1bHRBcmlhTGFiZWxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIEJ1dHRvbjtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTg7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE2O1xudmFyIEJ1dHRvbiQxID0gQnV0dG9uO1xuXG52YXIgX2V4Y2x1ZGVkJDExID0gW1wiY2xhc3NOYW1lXCJdO1xudmFyIHByb3BUeXBlcyQxNyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTUgPSB7XG4gIGRlZmF1bHRWYWx1ZTogZmFsc2Vcbn07XG5cbnZhciBCdXR0b25Ub2dnbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnV0dG9uVG9nZ2xlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCdXR0b25Ub2dnbGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZ2dsZWQ6IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIGZvY3VzOiBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMub25CbHVyID0gX3RoaXMub25CbHVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRm9jdXMgPSBfdGhpcy5vbkZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCdXR0b25Ub2dnbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkJsdXIgPSBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1czogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvY3VzOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHRvZ2dsZWQgPSBfcmVmLnRvZ2dsZWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGVkOiAhdG9nZ2xlZFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkMTEpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgICBmb2N1czogdGhpcy5zdGF0ZS5mb2N1c1xuICAgIH0pLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b24kMSwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnRvZ2dsZWQsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSwgYXR0cmlidXRlcykpO1xuICB9O1xuXG4gIHJldHVybiBCdXR0b25Ub2dnbGU7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5CdXR0b25Ub2dnbGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE3O1xuQnV0dG9uVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNTtcbnZhciBCdXR0b25Ub2dnbGUkMSA9IEJ1dHRvblRvZ2dsZTtcblxuLyoqXG4gKiBEcm9wZG93bkNvbnRleHRcbiAqIHtcbiAqICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gKiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICogIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAnZG93bicsICdzdGFydCcsICdlbmQnXSkuaXNSZXF1aXJlZCxcbiAqICBpbk5hdmJhcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAqICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAqIH1cbiAqL1xuXG52YXIgRHJvcGRvd25Db250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgX2V4Y2x1ZGVkJDEwID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGlyZWN0aW9uXCIsIFwiaXNPcGVuXCIsIFwiZ3JvdXBcIiwgXCJzaXplXCIsIFwibmF2XCIsIFwic2V0QWN0aXZlRnJvbUNoaWxkXCIsIFwiYWN0aXZlXCIsIFwidGFnXCIsIFwibWVudVJvbGVcIl07XG52YXIgcHJvcFR5cGVzJDE2ID0ge1xuICBhMTF5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3VwJywgJ2Rvd24nLCAnc3RhcnQnLCAnZW5kJywgJ2xlZnQnLCAncmlnaHQnXSksXG4gIGdyb3VwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBuYXY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5OYXZiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2V0QWN0aXZlRnJvbUNoaWxkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1lbnVSb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnbGlzdGJveCcsICdtZW51J10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNCA9IHtcbiAgYTExeTogdHJ1ZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgZGlyZWN0aW9uOiAnZG93bicsXG4gIG5hdjogZmFsc2UsXG4gIGFjdGl2ZTogZmFsc2UsXG4gIGluTmF2YmFyOiBmYWxzZSxcbiAgc2V0QWN0aXZlRnJvbUNoaWxkOiBmYWxzZVxufTtcbnZhciBwcmV2ZW50RGVmYXVsdEtleXMgPSBba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyLCBrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93biwga2V5Q29kZXMuZW5kLCBrZXlDb2Rlcy5ob21lXTtcblxudmFyIERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmFkZEV2ZW50cyA9IF90aGlzLmFkZEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gX3RoaXMuaGFuZGxlS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW1vdmVFdmVudHMgPSBfdGhpcy5yZW1vdmVFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZU1lbnVSZWYgPSBfdGhpcy5oYW5kbGVNZW51UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5tZW51UmVmID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVJlZigpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZU1lbnVSZWYgPSBmdW5jdGlvbiBoYW5kbGVNZW51UmVmKG1lbnVSZWYpIHtcbiAgICB0aGlzLm1lbnVSZWYuY3VycmVudCA9IG1lbnVSZWY7XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRleHRWYWx1ZSA9IGZ1bmN0aW9uIGdldENvbnRleHRWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcbiAgICAgIGlzT3BlbjogdGhpcy5wcm9wcy5pc09wZW4sXG4gICAgICBkaXJlY3Rpb246IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAnZG93bicgJiYgdGhpcy5wcm9wcy5kcm9wdXAgPyAndXAnIDogdGhpcy5wcm9wcy5kaXJlY3Rpb24sXG4gICAgICBpbk5hdmJhcjogdGhpcy5wcm9wcy5pbk5hdmJhcixcbiAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgLy8gQ2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIGJ5IERyb3Bkb3duTWVudSB0byBwcm92aWRlIGEgcmVmIHRvXG4gICAgICAvLyBhIEhUTUwgdGFnIHRoYXQncyB1c2VkIGZvciB0aGUgRHJvcGRvd25NZW51XG4gICAgICBvbk1lbnVSZWY6IHRoaXMuaGFuZGxlTWVudVJlZixcbiAgICAgIG1lbnVSb2xlOiB0aGlzLnByb3BzLm1lbnVSb2xlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZVByb3BzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gIT09IHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaGFuZGxlUHJvcHMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50O1xuICB9O1xuXG4gIF9wcm90by5nZXRNZW51ID0gZnVuY3Rpb24gZ2V0TWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51UmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnVDdHJsID0gZnVuY3Rpb24gZ2V0TWVudUN0cmwoKSB7XG4gICAgaWYgKHRoaXMuXyRtZW51Q3RybCkgcmV0dXJuIHRoaXMuXyRtZW51Q3RybDtcbiAgICB0aGlzLl8kbWVudUN0cmwgPSB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWV4cGFuZGVkXScpO1xuICAgIHJldHVybiB0aGlzLl8kbWVudUN0cmw7XG4gIH07XG5cbiAgX3Byb3RvLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5tZW51Um9sZSA9PT0gJ2xpc3Rib3gnKSB7XG4gICAgICByZXR1cm4gJ29wdGlvbic7XG4gICAgfVxuXG4gICAgcmV0dXJuICdtZW51aXRlbSc7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnVJdGVtcyA9IGZ1bmN0aW9uIGdldE1lbnVJdGVtcygpIHtcbiAgICAvLyBJbiBhIHJlYWwgbWVudSB3aXRoIGEgY2hpbGQgRHJvcGRvd25NZW51LCBgdGhpcy5nZXRNZW51KClgIHNob3VsZCBuZXZlclxuICAgIC8vIGJlIG51bGwsIGJ1dCBpdCBpcyBzb21ldGltZXMgbnVsbCBpbiB0ZXN0cy4gVG8gbWl0aWdhdGUgdGhhdCwgd2UganVzdFxuICAgIC8vIHVzZSBgdGhpcy5nZXRDb250YWluZXIoKWAgYXMgdGhlIGZhbGxiYWNrIGBtZW51Q29udGFpbmVyYC5cbiAgICB2YXIgbWVudUNvbnRhaW5lciA9IHRoaXMuZ2V0TWVudSgpIHx8IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobWVudUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9XFxcIlwiICsgdGhpcy5nZXRJdGVtVHlwZSgpICsgXCJcXFwiXVwiKSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZEV2ZW50cyA9IGZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCcsICdrZXl1cCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgX3RoaXMyLmhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnLCAna2V5dXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIF90aGlzMy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgIGlmIChlICYmIChlLndoaWNoID09PSAzIHx8IGUudHlwZSA9PT0gJ2tleXVwJyAmJiBlLndoaWNoICE9PSBrZXlDb2Rlcy50YWIpKSByZXR1cm47XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgdmFyIG1lbnUgPSB0aGlzLmdldE1lbnUoKTtcbiAgICB2YXIgY2xpY2tJc0luQ29udGFpbmVyID0gY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBjb250YWluZXIgIT09IGUudGFyZ2V0O1xuICAgIHZhciBjbGlja0lzSW5JbnB1dCA9IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWdyb3VwJykgJiYgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSAmJiBlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnO1xuICAgIHZhciBjbGlja0lzSW5NZW51ID0gbWVudSAmJiBtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBtZW51ICE9PSBlLnRhcmdldDtcblxuICAgIGlmICgoY2xpY2tJc0luQ29udGFpbmVyICYmICFjbGlja0lzSW5JbnB1dCB8fCBjbGlja0lzSW5NZW51KSAmJiAoZS50eXBlICE9PSAna2V5dXAnIHx8IGUud2hpY2ggPT09IGtleUNvZGVzLnRhYikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGlzVGFyZ2V0TWVudUl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ21lbnVpdGVtJyB8fCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ29wdGlvbic7XG4gICAgdmFyIGlzVGFyZ2V0TWVudUN0cmwgPSB0aGlzLmdldE1lbnVDdHJsKCkgPT09IGUudGFyZ2V0O1xuICAgIHZhciBpc1RhYiA9IGtleUNvZGVzLnRhYiA9PT0gZS53aGljaDtcblxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpIHx8IGlzVGFiICYmICF0aGlzLnByb3BzLmExMXkgfHwgaXNUYWIgJiYgIShpc1RhcmdldE1lbnVJdGVtIHx8IGlzVGFyZ2V0TWVudUN0cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByZXZlbnREZWZhdWx0S2V5cy5pbmRleE9mKGUud2hpY2gpICE9PSAtMSB8fCBlLndoaWNoID49IDQ4ICYmIGUud2hpY2ggPD0gOTApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGlzVGFyZ2V0TWVudUN0cmwpIHtcbiAgICAgIGlmIChba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyLCBrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5kZXhPZihlLndoaWNoKSA+IC0xKSB7XG4gICAgICAgIC8vIE9wZW4gdGhlIG1lbnUgKGlmIG5vdCBvcGVuKSBhbmQgZm9jdXMgdGhlIGZpcnN0IG1lbnUgaXRlbVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmdldE1lbnVJdGVtcygpWzBdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBpc1RhYikge1xuICAgICAgICAvLyBGb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtIGlmIHRhYmJpbmcgZnJvbSBhbiBvcGVuIG1lbnUuIFdlIG5lZWQgdGhpc1xuICAgICAgICAvLyBmb3IgY2FzZXMgd2hlcmUgdGhlIERyb3Bkb3duTWVudSBzZXRzIGEgY3VzdG9tIGNvbnRhaW5lciwgd2hpY2ggbWF5XG4gICAgICAgIC8vIG5vdCBiZSB0aGUgbmF0dXJhbCBuZXh0IGl0ZW0gdG8gdGFiIHRvIGZyb20gdGhlIERyb3Bkb3duVG9nZ2xlLlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ2V0TWVudUl0ZW1zKClbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS53aGljaCA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBpc1RhcmdldE1lbnVJdGVtKSB7XG4gICAgICBpZiAoW2tleUNvZGVzLnRhYiwga2V5Q29kZXMuZXNjXS5pbmRleE9mKGUud2hpY2gpID4gLTEpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgICAgIHRoaXMuZ2V0TWVudUN0cmwoKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyXS5pbmRleE9mKGUud2hpY2gpID4gLTEpIHtcbiAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgdGhpcy5nZXRNZW51Q3RybCgpLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKFtrZXlDb2Rlcy5kb3duLCBrZXlDb2Rlcy51cF0uaW5kZXhPZihlLndoaWNoKSA+IC0xIHx8IFtrZXlDb2Rlcy5uLCBrZXlDb2Rlcy5wXS5pbmRleE9mKGUud2hpY2gpID4gLTEgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgIHZhciAkbWVudWl0ZW1zID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gJG1lbnVpdGVtcy5pbmRleE9mKGUudGFyZ2V0KTtcblxuICAgICAgICBpZiAoa2V5Q29kZXMudXAgPT09IGUud2hpY2ggfHwga2V5Q29kZXMucCA9PT0gZS53aGljaCAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ICE9PSAwID8gaW5kZXggLSAxIDogJG1lbnVpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmRvd24gPT09IGUud2hpY2ggfHwga2V5Q29kZXMubiA9PT0gZS53aGljaCAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ID09PSAkbWVudWl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1lbnVpdGVtc1tpbmRleF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMuZW5kID09PSBlLndoaWNoKSB7XG4gICAgICAgIHZhciBfJG1lbnVpdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG5cbiAgICAgICAgXyRtZW51aXRlbXNbXyRtZW51aXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMuaG9tZSA9PT0gZS53aGljaCkge1xuICAgICAgICB2YXIgXyRtZW51aXRlbXMyID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcblxuICAgICAgICBfJG1lbnVpdGVtczJbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB7XG4gICAgICAgIHZhciBfJG1lbnVpdGVtczMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuXG4gICAgICAgIHZhciBjaGFyUHJlc3NlZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8kbWVudWl0ZW1zMy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBmaXJzdExldHRlciA9IF8kbWVudWl0ZW1zM1tpXS50ZXh0Q29udGVudCAmJiBfJG1lbnVpdGVtczNbaV0udGV4dENvbnRlbnRbMF0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChmaXJzdExldHRlciA9PT0gY2hhclByZXNzZWQpIHtcbiAgICAgICAgICAgIF8kbWVudWl0ZW1zM1tpXS5mb2N1cygpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVByb3BzID0gZnVuY3Rpb24gaGFuZGxlUHJvcHMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcywgX3JlZjtcblxuICAgIHZhciBfb21pdCA9IG9taXQodGhpcy5wcm9wcywgWyd0b2dnbGUnLCAnZGlzYWJsZWQnLCAnaW5OYXZiYXInLCAnYTExeSddKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX29taXQuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfb21pdC5jc3NNb2R1bGUsXG4gICAgICAgIGRpcmVjdGlvbiA9IF9vbWl0LmRpcmVjdGlvbixcbiAgICAgICAgaXNPcGVuID0gX29taXQuaXNPcGVuLFxuICAgICAgICBncm91cCA9IF9vbWl0Lmdyb3VwLFxuICAgICAgICBzaXplID0gX29taXQuc2l6ZSxcbiAgICAgICAgbmF2ID0gX29taXQubmF2LFxuICAgICAgICBzZXRBY3RpdmVGcm9tQ2hpbGQgPSBfb21pdC5zZXRBY3RpdmVGcm9tQ2hpbGQsXG4gICAgICAgIGFjdGl2ZSA9IF9vbWl0LmFjdGl2ZSxcbiAgICAgICAgdGFnID0gX29taXQudGFnLFxuICAgICAgICBhdHRycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0LCBfZXhjbHVkZWQkMTApO1xuXG4gICAgdmFyIFRhZyA9IHRhZyB8fCAobmF2ID8gJ2xpJyA6ICdkaXYnKTtcbiAgICB2YXIgc3ViSXRlbUlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAoc2V0QWN0aXZlRnJvbUNoaWxkKSB7XG4gICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChkcm9wZG93bkl0ZW0pIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbSAmJiBkcm9wZG93bkl0ZW0ucHJvcHMuYWN0aXZlKSBzdWJJdGVtSXNBY3RpdmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBuYXYgJiYgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgc2V0QWN0aXZlRnJvbUNoaWxkICYmIHN1Ykl0ZW1Jc0FjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIChfY2xhc3NOYW1lcyA9IHtcbiAgICAgICdidG4tZ3JvdXAnOiBncm91cFxuICAgIH0sIF9jbGFzc05hbWVzW1wiYnRuLWdyb3VwLVwiICsgc2l6ZV0gPSAhIXNpemUsIF9jbGFzc05hbWVzLmRyb3Bkb3duID0gIWdyb3VwLCBfY2xhc3NOYW1lcy5kcm9wdXAgPSBkaXJlY3Rpb24gPT09ICd1cCcsIF9jbGFzc05hbWVzLmRyb3BzdGFydCA9IGRpcmVjdGlvbiA9PT0gJ3N0YXJ0JyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0JywgX2NsYXNzTmFtZXMuZHJvcGVuZCA9IGRpcmVjdGlvbiA9PT0gJ2VuZCcgfHwgZGlyZWN0aW9uID09PSAncmlnaHQnLCBfY2xhc3NOYW1lcy5zaG93ID0gaXNPcGVuLCBfY2xhc3NOYW1lc1snbmF2LWl0ZW0nXSA9IG5hdiwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuTWFuYWdlciwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJzLCAoX3JlZiA9IHt9LCBfcmVmW3R5cGVvZiBUYWcgPT09ICdzdHJpbmcnID8gJ3JlZicgOiAnaW5uZXJSZWYnXSA9IHRoaXMuY29udGFpbmVyUmVmLCBfcmVmKSwge1xuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTY7XG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTQ7XG52YXIgRHJvcGRvd24kMSA9IERyb3Bkb3duO1xuXG52YXIgcHJvcFR5cGVzJDE1ID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xuXG52YXIgQnV0dG9uRHJvcGRvd24gPSBmdW5jdGlvbiBCdXR0b25Ecm9wZG93bihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duJDEsIF9leHRlbmRzKHtcbiAgICBncm91cDogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxuQnV0dG9uRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE1O1xudmFyIEJ1dHRvbkRyb3Bkb3duJDEgPSBCdXR0b25Ecm9wZG93bjtcblxudmFyIF9leGNsdWRlZCQkID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwic2l6ZVwiLCBcInZlcnRpY2FsXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxNCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMyA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgcm9sZTogJ2dyb3VwJ1xufTtcblxudmFyIEJ1dHRvbkdyb3VwID0gZnVuY3Rpb24gQnV0dG9uR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgdmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJCQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgc2l6ZSA/ICdidG4tZ3JvdXAtJyArIHNpemUgOiBmYWxzZSwgdmVydGljYWwgPyAnYnRuLWdyb3VwLXZlcnRpY2FsJyA6ICdidG4tZ3JvdXAnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxNDtcbkJ1dHRvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMztcbnZhciBCdXR0b25Hcm91cCQxID0gQnV0dG9uR3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkXyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMiA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgcm9sZTogJ3Rvb2xiYXInXG59O1xuXG52YXIgQnV0dG9uVG9vbGJhciA9IGZ1bmN0aW9uIEJ1dHRvblRvb2xiYXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJF8pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2J0bi10b29sYmFyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5CdXR0b25Ub29sYmFyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMztcbkJ1dHRvblRvb2xiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEyO1xudmFyIEJ1dHRvblRvb2xiYXIkMSA9IEJ1dHRvblRvb2xiYXI7XG5cbnZhciBfZXhjbHVkZWQkWiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpdmlkZXJcIiwgXCJ0YWdcIiwgXCJoZWFkZXJcIiwgXCJhY3RpdmVcIiwgXCJ0ZXh0XCJdO1xudmFyIHByb3BUeXBlcyQxMiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpdmlkZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaGVhZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTEgPSB7XG4gIHRhZzogJ2J1dHRvbicsXG4gIHRvZ2dsZTogdHJ1ZVxufTtcblxudmFyIERyb3Bkb3duSXRlbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93bkl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duSXRlbShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdldFRhYkluZGV4ID0gX3RoaXMuZ2V0VGFiSW5kZXguYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duSXRlbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdvcHRpb24nO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudWl0ZW0nO1xuICB9O1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMuaGVhZGVyLFxuICAgICAgICBkaXZpZGVyID0gX3RoaXMkcHJvcHMuZGl2aWRlcixcbiAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzLnRleHQ7XG5cbiAgICBpZiAoZGlzYWJsZWQgfHwgaGVhZGVyIHx8IGRpdmlkZXIgfHwgdGV4dCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIHRoaXMuY29udGV4dC50b2dnbGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRUYWJJbmRleCA9IGZ1bmN0aW9uIGdldFRhYkluZGV4KCkge1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMyLmhlYWRlcixcbiAgICAgICAgZGl2aWRlciA9IF90aGlzJHByb3BzMi5kaXZpZGVyLFxuICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMyLnRleHQ7XG5cbiAgICBpZiAoZGlzYWJsZWQgfHwgaGVhZGVyIHx8IGRpdmlkZXIgfHwgdGV4dCkge1xuICAgICAgcmV0dXJuICctMSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcwJztcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciB0YWJJbmRleCA9IHRoaXMuZ2V0VGFiSW5kZXgoKTtcbiAgICB2YXIgcm9sZSA9IHRhYkluZGV4ID4gLTEgPyB0aGlzLmdldFJvbGUoKSA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBfb21pdCA9IG9taXQodGhpcy5wcm9wcywgWyd0b2dnbGUnXSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9vbWl0LmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX29taXQuY3NzTW9kdWxlLFxuICAgICAgICBkaXZpZGVyID0gX29taXQuZGl2aWRlcixcbiAgICAgICAgVGFnID0gX29taXQudGFnLFxuICAgICAgICBoZWFkZXIgPSBfb21pdC5oZWFkZXIsXG4gICAgICAgIGFjdGl2ZSA9IF9vbWl0LmFjdGl2ZSxcbiAgICAgICAgdGV4dCA9IF9vbWl0LnRleHQsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXQsIF9leGNsdWRlZCRaKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgJ2Ryb3Bkb3duLWl0ZW0nOiAhZGl2aWRlciAmJiAhaGVhZGVyICYmICF0ZXh0LFxuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAnZHJvcGRvd24taGVhZGVyJzogaGVhZGVyLFxuICAgICAgJ2Ryb3Bkb3duLWRpdmlkZXInOiBkaXZpZGVyLFxuICAgICAgJ2Ryb3Bkb3duLWl0ZW0tdGV4dCc6IHRleHRcbiAgICB9KSwgY3NzTW9kdWxlKTtcblxuICAgIGlmIChUYWcgPT09ICdidXR0b24nKSB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIFRhZyA9ICdoNic7XG4gICAgICB9IGVsc2UgaWYgKGRpdmlkZXIpIHtcbiAgICAgICAgVGFnID0gJ2Rpdic7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmhyZWYpIHtcbiAgICAgICAgVGFnID0gJ2EnO1xuICAgICAgfSBlbHNlIGlmICh0ZXh0KSB7XG4gICAgICAgIFRhZyA9ICdzcGFuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiAocHJvcHMub25DbGljayB8fCB0aGlzLnByb3BzLnRvZ2dsZSkgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICAgIH0sIHByb3BzLCB7XG4gICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICByb2xlOiByb2xlLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bkl0ZW07XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEyO1xuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMTtcbkRyb3Bkb3duSXRlbS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93bkl0ZW0kMSA9IERyb3Bkb3duSXRlbTtcblxudmFyIF9leGNsdWRlZCRZID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGFya1wiLCBcImVuZFwiLCBcInJpZ2h0XCIsIFwidGFnXCIsIFwiZmxpcFwiLCBcIm1vZGlmaWVyc1wiLCBcInBlcnNpc3RcIiwgXCJzdHJhdGVneVwiLCBcImNvbnRhaW5lclwiXTtcbnZhciBwcm9wVHlwZXMkMTEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUuaXNSZXF1aXJlZCxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBlbmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmxpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHBlcnNpc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3RyYXRlZ3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICByaWdodDogZGVwcmVjYXRlZChQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsICdQbGVhc2UgdXNlIFwiZW5kXCIgaW5zdGVhZC4nKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTAgPSB7XG4gIHRhZzogJ2RpdicsXG4gIGZsaXA6IHRydWUsXG4gIG1vZGlmaWVyczogW11cbn07XG52YXIgZGlyZWN0aW9uUG9zaXRpb25NYXAgPSB7XG4gIHVwOiAndG9wJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgc3RhcnQ6ICdsZWZ0JyxcbiAgZW5kOiAncmlnaHQnLFxuICBkb3duOiAnYm90dG9tJ1xufTtcblxudmFyIERyb3Bkb3duTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93bk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duTWVudSgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd25NZW51LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Um9sZSA9IGZ1bmN0aW9uIGdldFJvbGUoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5tZW51Um9sZSA9PT0gJ2xpc3Rib3gnKSB7XG4gICAgICByZXR1cm4gJ2xpc3Rib3gnO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudSc7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGRhcmsgPSBfdGhpcyRwcm9wcy5kYXJrLFxuICAgICAgICBlbmQgPSBfdGhpcyRwcm9wcy5lbmQsXG4gICAgICAgIHJpZ2h0ID0gX3RoaXMkcHJvcHMucmlnaHQsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIG1vZGlmaWVycyA9IF90aGlzJHByb3BzLm1vZGlmaWVycyxcbiAgICAgICAgcGVyc2lzdCA9IF90aGlzJHByb3BzLnBlcnNpc3QsXG4gICAgICAgIHN0cmF0ZWd5ID0gX3RoaXMkcHJvcHMuc3RyYXRlZ3ksXG4gICAgICAgIGNvbnRhaW5lciA9IF90aGlzJHByb3BzLmNvbnRhaW5lcixcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJFkpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnZHJvcGRvd24tbWVudScsIHtcbiAgICAgICdkcm9wZG93bi1tZW51LWRhcmsnOiBkYXJrLFxuICAgICAgJ2Ryb3Bkb3duLW1lbnUtZW5kJzogZW5kIHx8IHJpZ2h0LFxuICAgICAgc2hvdzogdGhpcy5jb250ZXh0LmlzT3BlblxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHZhciBUYWcgPSB0YWc7XG5cbiAgICBpZiAocGVyc2lzdCB8fCB0aGlzLmNvbnRleHQuaXNPcGVuICYmICF0aGlzLmNvbnRleHQuaW5OYXZiYXIpIHtcbiAgICAgIHZhciBwb3NpdGlvbjEgPSBkaXJlY3Rpb25Qb3NpdGlvbk1hcFt0aGlzLmNvbnRleHQuZGlyZWN0aW9uXSB8fCAnYm90dG9tJztcbiAgICAgIHZhciBwb3NpdGlvbjIgPSBlbmQgfHwgcmlnaHQgPyAnZW5kJyA6ICdzdGFydCc7XG4gICAgICB2YXIgcG9wZXJQbGFjZW1lbnQgPSBwb3NpdGlvbjEgKyBcIi1cIiArIHBvc2l0aW9uMjtcbiAgICAgIHZhciBwb3Blck1vZGlmaWVycyA9IFtdLmNvbmNhdChtb2RpZmllcnMsIFt7XG4gICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgZW5hYmxlZDogISFmbGlwXG4gICAgICB9XSk7XG4gICAgICB2YXIgcG9wcGVyID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlBvcHBlciwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBvcGVyUGxhY2VtZW50LFxuICAgICAgICBtb2RpZmllcnM6IHBvcGVyTW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneTogc3RyYXRlZ3lcbiAgICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBjb21iaW5lZFN0eWxlID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIF90aGlzLnByb3BzLnN0eWxlKSwgc3R5bGUpO1xuXG4gICAgICAgIHZhciBoYW5kbGVSZWYgPSBmdW5jdGlvbiBoYW5kbGVSZWYodGFnUmVmKSB7XG4gICAgICAgICAgLy8gU2VuZCB0aGUgcmVmIHRvIGByZWFjdC1wb3BwZXJgXG4gICAgICAgICAgcmVmKHRhZ1JlZik7IC8vIFNlbmQgdGhlIHJlZiB0byB0aGUgcGFyZW50IERyb3Bkb3duIHNvIHRoYXQgY2xpY2tzIG91dHNpZGVcbiAgICAgICAgICAvLyBpdCB3aWxsIGNhdXNlIGl0IHRvIGNsb3NlXG5cbiAgICAgICAgICB2YXIgb25NZW51UmVmID0gX3RoaXMuY29udGV4dC5vbk1lbnVSZWY7XG4gICAgICAgICAgaWYgKG9uTWVudVJlZikgb25NZW51UmVmKHRhZ1JlZik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgIHJvbGU6IF90aGlzLmdldFJvbGUoKSxcbiAgICAgICAgICByZWY6IGhhbmRsZVJlZlxuICAgICAgICB9LCBhdHRycywge1xuICAgICAgICAgIHN0eWxlOiBjb21iaW5lZFN0eWxlLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogIV90aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBwbGFjZW1lbnRcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVQb3J0YWwocG9wcGVyLCBnZXRUYXJnZXQoY29udGFpbmVyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcG9wcGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgcm9sZTogdGhpcy5nZXRSb2xlKClcbiAgICB9LCBhdHRycywge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiAhdGhpcy5jb250ZXh0LmlzT3BlbixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IGF0dHJzLnBsYWNlbWVudFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd25NZW51O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcbkRyb3Bkb3duTWVudS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTE7XG5Ecm9wZG93bk1lbnUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEwO1xuRHJvcGRvd25NZW51LmNvbnRleHRUeXBlID0gRHJvcGRvd25Db250ZXh0O1xudmFyIERyb3Bkb3duTWVudSQxID0gRHJvcGRvd25NZW51O1xuXG52YXIgX2V4Y2x1ZGVkJFggPSBbXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNzc01vZHVsZVwiLCBcImNhcmV0XCIsIFwic3BsaXRcIiwgXCJuYXZcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkMTAgPSB7XG4gIGNhcmV0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICAnYXJpYS1oYXNwb3B1cCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3BsaXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbmF2OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJCQgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlXG59O1xuXG52YXIgRHJvcGRvd25Ub2dnbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd25Ub2dnbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duVG9nZ2xlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duVG9nZ2xlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMuY29udGV4dC5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm5hdiAmJiAhdGhpcy5wcm9wcy50YWcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0LnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Um9sZSA9IGZ1bmN0aW9uIGdldFJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5tZW51Um9sZSB8fCB0aGlzLnByb3BzWydhcmlhLWhhc3BvcHVwJ107XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IgPSBfdGhpcyRwcm9wcy5jb2xvcixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjYXJldCA9IF90aGlzJHByb3BzLmNhcmV0LFxuICAgICAgICBzcGxpdCA9IF90aGlzJHByb3BzLnNwbGl0LFxuICAgICAgICBuYXYgPSBfdGhpcyRwcm9wcy5uYXYsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJFgpO1xuXG4gICAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10gfHwgJ1RvZ2dsZSBEcm9wZG93bic7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgICAnZHJvcGRvd24tdG9nZ2xlJzogY2FyZXQgfHwgc3BsaXQsXG4gICAgICAnZHJvcGRvd24tdG9nZ2xlLXNwbGl0Jzogc3BsaXQsXG4gICAgICAnbmF2LWxpbmsnOiBuYXZcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnID8gcHJvcHMuY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ2aXN1YWxseS1oaWRkZW5cIlxuICAgIH0sIGFyaWFMYWJlbCk7XG4gICAgdmFyIFRhZztcblxuICAgIGlmIChuYXYgJiYgIXRhZykge1xuICAgICAgVGFnID0gJ2EnO1xuICAgICAgcHJvcHMuaHJlZiA9ICcjJztcbiAgICB9IGVsc2UgaWYgKCF0YWcpIHtcbiAgICAgIFRhZyA9IEJ1dHRvbiQxO1xuICAgICAgcHJvcHMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHByb3BzLmNzc01vZHVsZSA9IGNzc01vZHVsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgVGFnID0gdGFnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHQuaW5OYXZiYXIpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogdGhpcy5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUmVmZXJlbmNlLCB7XG4gICAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICB2YXIgcmVmID0gX3JlZi5yZWY7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIHByb3BzLCAoX3JlZjIgPSB7fSwgX3JlZjJbdHlwZW9mIFRhZyA9PT0gJ3N0cmluZycgPyAncmVmJyA6ICdpbm5lclJlZiddID0gcmVmLCBfcmVmMiksIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNsaWNrOiBfdGhpczIub25DbGljayxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF90aGlzMi5jb250ZXh0LmlzT3BlbixcbiAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IF90aGlzMi5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93blRvZ2dsZTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duVG9nZ2xlLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMDtcbkRyb3Bkb3duVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQkO1xuRHJvcGRvd25Ub2dnbGUuY29udGV4dFR5cGUgPSBEcm9wZG93bkNvbnRleHQ7XG52YXIgRHJvcGRvd25Ub2dnbGUkMSA9IERyb3Bkb3duVG9nZ2xlO1xuXG52YXIgX2V4Y2x1ZGVkJFcgPSBbXCJ0YWdcIiwgXCJiYXNlQ2xhc3NcIiwgXCJiYXNlQ2xhc3NBY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcImlubmVyUmVmXCJdO1xuXG52YXIgcHJvcFR5cGVzJCQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUpLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYmFzZUNsYXNzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFzZUNsYXNzQWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyRfID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgYmFzZUNsYXNzOiAnZmFkZScsXG4gIGJhc2VDbGFzc0FjdGl2ZTogJ3Nob3cnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSxcbiAgYXBwZWFyOiB0cnVlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgXCJpblwiOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gRmFkZShwcm9wcykge1xuICB2YXIgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzLFxuICAgICAgYmFzZUNsYXNzQWN0aXZlID0gcHJvcHMuYmFzZUNsYXNzQWN0aXZlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRXKTtcblxuICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIHRyYW5zaXRpb25Qcm9wcywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHZhciBpc0FjdGl2ZSA9IHN0YXR1cyA9PT0gJ2VudGVyZWQnO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYmFzZUNsYXNzLCBpc0FjdGl2ZSAmJiBiYXNlQ2xhc3NBY3RpdmUpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9LCBjaGlsZFByb3BzLCB7XG4gICAgICByZWY6IGlubmVyUmVmXG4gICAgfSksIGNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbkZhZGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJCQ7XG5GYWRlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRfO1xuXG4vKipcbiAqIEFjY29yZGlvbkNvbnRleHRcbiAqIHtcbiAqICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gKiAgb3BlbklkOiBQcm9wVHlwZXMuc3RyaW5nLCAgICBcbiAqIH1cbiAqL1xuXG52YXIgQWNjb3JkaW9uQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIF9leGNsdWRlZCRWID0gW1wiZmx1c2hcIiwgXCJvcGVuXCIsIFwidG9nZ2xlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJF8gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgZmx1c2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZFxufTtcbnZhciBkZWZhdWx0UHJvcHMkWiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIEFjY29yZGlvbiA9IGZ1bmN0aW9uIEFjY29yZGlvbihwcm9wcykge1xuICB2YXIgZmx1c2ggPSBwcm9wcy5mbHVzaCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbicsIHtcbiAgICAnYWNjb3JkaW9uLWZsdXNoJzogZmx1c2hcbiAgfSksIGNzc01vZHVsZSk7XG4gIHZhciBhY2NvcmRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IG9wZW4sXG4gICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY29yZGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWNjb3JkaW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKSk7XG59O1xuXG5BY2NvcmRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJF87XG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFo7XG52YXIgQWNjb3JkaW9uJDEgPSBBY2NvcmRpb247XG5cbnZhciBfZXhjbHVkZWQkVSA9IFtcImRlZmF1bHRPcGVuXCIsIFwic3RheU9wZW5cIl07XG52YXIgcHJvcFR5cGVzJFogPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBzdGF5T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyRZID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgVW5jb250cm9sbGVkQWNjb3JkaW9uID0gZnVuY3Rpb24gVW5jb250cm9sbGVkQWNjb3JkaW9uKF9yZWYpIHtcbiAgdmFyIGRlZmF1bHRPcGVuID0gX3JlZi5kZWZhdWx0T3BlbixcbiAgICAgIHN0YXlPcGVuID0gX3JlZi5zdGF5T3BlbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJFUpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3BlbiB8fCAoc3RheU9wZW4gPyBbXSA6IHVuZGVmaW5lZCkpLFxuICAgICAgb3BlbiA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldE9wZW4gPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShpZCkge1xuICAgIGlmIChzdGF5T3Blbikge1xuICAgICAgb3Blbi5pbmNsdWRlcyhpZCkgPyBzZXRPcGVuKG9wZW4uZmlsdGVyKGZ1bmN0aW9uIChhY2NvcmRpb25JZCkge1xuICAgICAgICByZXR1cm4gYWNjb3JkaW9uSWQgIT09IGlkO1xuICAgICAgfSkpIDogc2V0T3BlbihbXS5jb25jYXQob3BlbiwgW2lkXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuID09PSBpZCA/IHNldE9wZW4odW5kZWZpbmVkKSA6IHNldE9wZW4oaWQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY29yZGlvbiQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBvcGVuOiBvcGVuLFxuICAgIHRvZ2dsZTogdG9nZ2xlXG4gIH0pKTtcbn07XG5cbkFjY29yZGlvbiQxLnByb3BUeXBlcyA9IHByb3BUeXBlcyRaO1xuQWNjb3JkaW9uJDEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFk7XG52YXIgVW5jb250cm9sbGVkQWNjb3JkaW9uJDEgPSBVbmNvbnRyb2xsZWRBY2NvcmRpb247XG5cbnZhciBfZXhjbHVkZWQkVCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YXJnZXRJZFwiXTtcbnZhciBwcm9wVHlwZXMkWSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICB0YXJnZXRJZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbnZhciBkZWZhdWx0UHJvcHMkWCA9IHtcbiAgdGFnOiAnaDInXG59O1xuXG52YXIgQWNjb3JkaW9uSGVhZGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRUKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEFjY29yZGlvbkNvbnRleHQpLFxuICAgICAgb3BlbiA9IF91c2VDb250ZXh0Lm9wZW4sXG4gICAgICB0b2dnbGUgPSBfdXNlQ29udGV4dC50b2dnbGU7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuICB2YXIgYnV0dG9uQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYWNjb3JkaW9uLWJ1dHRvbicsIHtcbiAgICBjb2xsYXBzZWQ6ICEoQXJyYXkuaXNBcnJheShvcGVuKSA/IG9wZW4uaW5jbHVkZXModGFyZ2V0SWQpIDogb3BlbiA9PT0gdGFyZ2V0SWQpXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uQ2xhc3NlcyxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZSh0YXJnZXRJZCk7XG4gICAgfVxuICB9LCBjaGlsZHJlbikpO1xufTtcblxuQWNjb3JkaW9uSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRZO1xuQWNjb3JkaW9uSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRYO1xudmFyIEFjY29yZGlvbkhlYWRlciQxID0gQWNjb3JkaW9uSGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJFMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkWCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRXID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSQyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbi1pdGVtJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cbkFjY29yZGlvbkl0ZW0kMi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkWDtcbkFjY29yZGlvbkl0ZW0kMi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVztcbnZhciBBY2NvcmRpb25JdGVtJDMgPSBBY2NvcmRpb25JdGVtJDI7XG5cbnZhciBfZXhjbHVkZWQkUiA9IFtcInRhZ1wiLCBcImhvcml6b250YWxcIiwgXCJpc09wZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJuYXZiYXJcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcImlubmVyUmVmXCJdO1xuXG52YXIgX3RyYW5zaXRpb25TdGF0dXNUb0NsO1xuXG52YXIgcHJvcFR5cGVzJFcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUpLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIG5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSlcbn0pO1xuXG52YXIgZGVmYXVsdFByb3BzJFYgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICBob3Jpem9udGFsOiBmYWxzZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIHRhZzogJ2RpdicsXG4gIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5Db2xsYXBzZVxufSk7XG5cbnZhciB0cmFuc2l0aW9uU3RhdHVzVG9DbGFzc0hhc2ggPSAoX3RyYW5zaXRpb25TdGF0dXNUb0NsID0ge30sIF90cmFuc2l0aW9uU3RhdHVzVG9DbFtUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJJTkddID0gJ2NvbGxhcHNpbmcnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSRURdID0gJ2NvbGxhcHNlIHNob3cnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRJTkddID0gJ2NvbGxhcHNpbmcnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRFRF0gPSAnY29sbGFwc2UnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2wpO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uQ2xhc3Moc3RhdHVzKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uU3RhdHVzVG9DbGFzc0hhc2hbc3RhdHVzXSB8fCAnY29sbGFwc2UnO1xufVxuXG52YXIgQ29sbGFwc2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29sbGFwc2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbGxhcHNlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9O1xuICAgIFsnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzW25hbWVdID0gX3RoaXNbbmFtZV0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5ob3Jpem9udGFsID8gbm9kZS5zY3JvbGxXaWR0aCA6IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuICB9O1xuXG4gIF9wcm90by5vbkVudGVyaW5nID0gZnVuY3Rpb24gb25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiB0aGlzLmdldERpbWVuc2lvbihub2RlKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIG9uRW50ZXJlZChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXQgPSBmdW5jdGlvbiBvbkV4aXQobm9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiB0aGlzLmdldERpbWVuc2lvbihub2RlKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRpbmcgPSBmdW5jdGlvbiBvbkV4aXRpbmcobm9kZSkge1xuICAgIC8vIGdldHRpbmcgdGhpcyB2YXJpYWJsZSB0cmlnZ2VycyBhIHJlZmxvd1xuICAgIHRoaXMuZ2V0RGltZW5zaW9uKG5vZGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiAwXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQobm9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBob3Jpem9udGFsID0gX3RoaXMkcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG5hdmJhciA9IF90aGlzJHByb3BzLm5hdmJhcixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRSKTtcblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbjtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgICB2YXIgY2hpbGRQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSksIGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgY29sbGFwc2VDbGFzcyA9IGdldFRyYW5zaXRpb25DbGFzcyhzdGF0dXMpO1xuICAgICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBob3Jpem9udGFsICYmICdjb2xsYXBzZS1ob3Jpem9udGFsJywgY29sbGFwc2VDbGFzcywgbmF2YmFyICYmICduYXZiYXItY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgICAgIHZhciBzdHlsZSA9IGRpbWVuc2lvbiA9PT0gbnVsbCA/IG51bGwgOiAoX3JlZiA9IHt9LCBfcmVmW2hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddID0gZGltZW5zaW9uLCBfcmVmKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNoaWxkUHJvcHMuc3R5bGUpLCBzdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcmVmOiBfdGhpczIucHJvcHMuaW5uZXJSZWZcbiAgICAgIH0pLCBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVztcbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRWO1xudmFyIENvbGxhcHNlJDEgPSBDb2xsYXBzZTtcblxudmFyIF9leGNsdWRlZCRRID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIiwgXCJjaGlsZHJlblwiLCBcImFjY29yZGlvbklkXCJdO1xudmFyIHByb3BUeXBlcyRWID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGFjY29yZGlvbklkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkXG59O1xudmFyIGRlZmF1bHRQcm9wcyRVID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYWNjb3JkaW9uSWQgPSBwcm9wcy5hY2NvcmRpb25JZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFEpO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQWNjb3JkaW9uQ29udGV4dCksXG4gICAgICBvcGVuID0gX3VzZUNvbnRleHQub3BlbjtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24tY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDb2xsYXBzZSQxLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGlzT3BlbjogQXJyYXkuaXNBcnJheShvcGVuKSA/IG9wZW4uaW5jbHVkZXMoYWNjb3JkaW9uSWQpIDogb3BlbiA9PT0gYWNjb3JkaW9uSWRcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLWJvZHlcIlxuICB9LCBjaGlsZHJlbikpO1xufTtcblxuQWNjb3JkaW9uSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVjtcbkFjY29yZGlvbkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFU7XG52YXIgQWNjb3JkaW9uSXRlbSQxID0gQWNjb3JkaW9uSXRlbTtcblxudmFyIF9leGNsdWRlZCRQID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJpbm5lclJlZlwiLCBcInBpbGxcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFUgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGlsbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFQgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgcGlsbDogZmFsc2UsXG4gIHRhZzogJ3NwYW4nXG59O1xuXG52YXIgQmFkZ2UgPSBmdW5jdGlvbiBCYWRnZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBwaWxsID0gcHJvcHMucGlsbCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFApO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2JhZGdlJywgJ2JnLScgKyBjb2xvciwgcGlsbCA/ICdyb3VuZGVkLXBpbGwnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnc3BhbicpIHtcbiAgICBUYWcgPSAnYSc7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5CYWRnZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVTtcbkJhZGdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRUO1xudmFyIEJhZGdlJDEgPSBCYWRnZTtcblxudmFyIF9leGNsdWRlZCRPID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJib2R5XCIsIFwiaW52ZXJzZVwiLCBcIm91dGxpbmVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkVCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW52ZXJzZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJvZHk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJFMgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkID0gZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJvZHkgPSBwcm9wcy5ib2R5LFxuICAgICAgaW52ZXJzZSA9IHByb3BzLmludmVyc2UsXG4gICAgICBvdXRsaW5lID0gcHJvcHMub3V0bGluZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRPKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkJywgaW52ZXJzZSA/ICd0ZXh0LXdoaXRlJyA6IGZhbHNlLCBib2R5ID8gJ2NhcmQtYm9keScgOiBmYWxzZSwgY29sb3IgPyAob3V0bGluZSA/ICdib3JkZXInIDogJ2JnJykgKyBcIi1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5DYXJkLnByb3BUeXBlcyA9IHByb3BUeXBlcyRUO1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUztcbnZhciBDYXJkJDEgPSBDYXJkO1xuXG52YXIgX2V4Y2x1ZGVkJE4gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFIgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkR3JvdXAgPSBmdW5jdGlvbiBDYXJkR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE4pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZ3JvdXAnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUztcbkNhcmRHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUjtcbnZhciBDYXJkR3JvdXAkMSA9IENhcmRHcm91cDtcblxudmFyIF9leGNsdWRlZCRNID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRSID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRRID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZERlY2sgPSBmdW5jdGlvbiBDYXJkRGVjayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1kZWNrJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkRGVjay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUjtcbkNhcmREZWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRRO1xudmFyIENhcmREZWNrJDEgPSBDYXJkRGVjaztcblxudmFyIF9leGNsdWRlZCRMID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRRID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRQID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZENvbHVtbnMgPSBmdW5jdGlvbiBDYXJkQ29sdW1ucyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1jb2x1bW5zJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkQ29sdW1ucy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUTtcbkNhcmRDb2x1bW5zLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRQO1xudmFyIENhcmRDb2x1bW5zJDEgPSBDYXJkQ29sdW1ucztcblxudmFyIF9leGNsdWRlZCRLID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFAgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkTyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRCb2R5ID0gZnVuY3Rpb24gQ2FyZEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRLKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuQ2FyZEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJFA7XG5DYXJkQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTztcbnZhciBDYXJkQm9keSQxID0gQ2FyZEJvZHk7XG5cbnZhciBfZXhjbHVkZWQkSiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRPID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJE4gPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgQ2FyZExpbmsgPSBmdW5jdGlvbiBDYXJkTGluayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEopO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtbGluaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTztcbkNhcmRMaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyROO1xudmFyIENhcmRMaW5rJDEgPSBDYXJkTGluaztcblxudmFyIF9leGNsdWRlZCRJID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyROID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRNID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZEZvb3RlciA9IGZ1bmN0aW9uIENhcmRGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZm9vdGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkRm9vdGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyROO1xuQ2FyZEZvb3Rlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTTtcbnZhciBDYXJkRm9vdGVyJDEgPSBDYXJkRm9vdGVyO1xuXG52YXIgX2V4Y2x1ZGVkJEggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJE0gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEwgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkSGVhZGVyID0gZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJE07XG5DYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRMO1xudmFyIENhcmRIZWFkZXIkMSA9IENhcmRIZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkRyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRvcFwiLCBcImJvdHRvbVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvdHRvbTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRLID0ge1xuICB0YWc6ICdpbWcnXG59O1xuXG52YXIgQ2FyZEltZyA9IGZ1bmN0aW9uIENhcmRJbWcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHRvcCA9IHByb3BzLnRvcCxcbiAgICAgIGJvdHRvbSA9IHByb3BzLmJvdHRvbSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEcpO1xuXG4gIHZhciBjYXJkSW1nQ2xhc3NOYW1lID0gJ2NhcmQtaW1nJztcblxuICBpZiAodG9wKSB7XG4gICAgY2FyZEltZ0NsYXNzTmFtZSA9ICdjYXJkLWltZy10b3AnO1xuICB9XG5cbiAgaWYgKGJvdHRvbSkge1xuICAgIGNhcmRJbWdDbGFzc05hbWUgPSAnY2FyZC1pbWctYm90dG9tJztcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY2FyZEltZ0NsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkSW1nLnByb3BUeXBlcyA9IHByb3BUeXBlcyRMO1xuQ2FyZEltZy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSztcbnZhciBDYXJkSW1nJDEgPSBDYXJkSW1nO1xuXG52YXIgX2V4Y2x1ZGVkJEYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEsgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEogPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkSW1nT3ZlcmxheSA9IGZ1bmN0aW9uIENhcmRJbWdPdmVybGF5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRGKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWltZy1vdmVybGF5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkSW1nT3ZlcmxheS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSztcbkNhcmRJbWdPdmVybGF5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRKO1xudmFyIENhcmRJbWdPdmVybGF5JDEgPSBDYXJkSW1nT3ZlcmxheTtcblxudmFyIF9leGNsdWRlZCRFID0gW1wiaW5cIiwgXCJjaGlsZHJlblwiLCBcImNzc01vZHVsZVwiLCBcInNsaWRlXCIsIFwidGFnXCIsIFwiY2xhc3NOYW1lXCJdO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENhcm91c2VsSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uRW50ZXIgPSBfdGhpcy5vbkVudGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBfdGhpcy5vbkVudGVyaW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdCA9IF90aGlzLm9uRXhpdC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBfdGhpcy5vbkV4aXRpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ZWQgPSBfdGhpcy5vbkV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWxJdGVtLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FbnRlciA9IGZ1bmN0aW9uIG9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiBvbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgLy8gZ2V0dGluZyB0aGlzIHZhcmlhYmxlIHRyaWdnZXJzIGEgcmVmbG93XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgIHJldHVybiBvZmZzZXRIZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdCA9IGZ1bmN0aW9uIG9uRXhpdChub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2xpZGUuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQobm9kZSkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWQuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNJbiA9IF90aGlzJHByb3BzW1wiaW5cIl0sXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgc2xpZGUgPSBfdGhpcyRwcm9wcy5zbGlkZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCB0cmFuc2l0aW9uUHJvcHMsIHtcbiAgICAgIGVudGVyOiBzbGlkZSxcbiAgICAgIGV4aXQ6IHNsaWRlLFxuICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMyLmNvbnRleHQuZGlyZWN0aW9uO1xuICAgICAgdmFyIGlzQWN0aXZlID0gc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJFRCB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HO1xuICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzTmFtZSA9IChzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FTlRFUklORyB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HKSAmJiBfdGhpczIuc3RhdGUuc3RhcnRBbmltYXRpb24gJiYgKGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyAnY2Fyb3VzZWwtaXRlbS1zdGFydCcgOiAnY2Fyb3VzZWwtaXRlbS1lbmQnKTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZSA9IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HICYmIChkaXJlY3Rpb24gPT09ICdlbmQnID8gJ2Nhcm91c2VsLWl0ZW0tbmV4dCcgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2Jyk7XG4gICAgICB2YXIgaXRlbUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaXRlbScsIGlzQWN0aXZlICYmICdhY3RpdmUnLCBkaXJlY3Rpb25DbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaXRlbUNsYXNzZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2Fyb3VzZWxJdGVtO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIFwiaW5cIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBzbGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59KTtcbkNhcm91c2VsSXRlbS5kZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICB0YWc6ICdkaXYnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuQ2Fyb3VzZWwsXG4gIHNsaWRlOiB0cnVlXG59KTtcbkNhcm91c2VsSXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWxJdGVtJDEgPSBDYXJvdXNlbEl0ZW07XG5cbi8qKlxuICogQ2Fyb3VzZWxDb250ZXh0XG4gKiB7XG4gKiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydzdGFydCcsICdlbmQnXSkuaXNSZXF1aXJlZCxcbiAqIH1cbiAqL1xuXG52YXIgQ2Fyb3VzZWxDb250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG5cbnZhciBDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDYXJvdXNlbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5oYW5kbGVLZXlQcmVzcyA9IF90aGlzLmhhbmRsZUtleVByZXNzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbmRlckl0ZW1zID0gX3RoaXMucmVuZGVySXRlbXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaG92ZXJTdGFydCA9IF90aGlzLmhvdmVyU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaG92ZXJFbmQgPSBfdGhpcy5ob3ZlckVuZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IF90aGlzLmhhbmRsZVRvdWNoRW5kLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvdWNoU3RhcnRYID0gMDtcbiAgICBfdGhpcy50b3VjaFN0YXJ0WSA9IDA7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVJbmRleDogX3RoaXMucHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICBkaXJlY3Rpb246ICdlbmQnLFxuICAgICAgaW5kaWNhdG9yQ2xpY2tlZDogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDYXJvdXNlbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldENvbnRleHRWYWx1ZSA9IGZ1bmN0aW9uIGdldENvbnRleHRWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmRpcmVjdGlvblxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU2V0IHVwIHRoZSBjeWNsZVxuICAgIGlmICh0aGlzLnByb3BzLnJpZGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoKTtcbiAgICB9IC8vIFRPRE86IG1vdmUgdGhpcyB0byB0aGUgc3BlY2lmaWMgY2Fyb3VzZWwgbGlrZSBib290c3RyYXAuIEN1cnJlbnRseSBpdCB3aWxsIHRyaWdnZXIgQUxMIGNhcm91c2VscyBvbiB0aGUgcGFnZS5cblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgfTtcblxuICBDYXJvdXNlbC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV3U3RhdGUgPSBudWxsO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHByZXZTdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uID0gcHJldlN0YXRlLmRpcmVjdGlvbixcbiAgICAgICAgaW5kaWNhdG9yQ2xpY2tlZCA9IHByZXZTdGF0ZS5pbmRpY2F0b3JDbGlja2VkO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uIHRvIHR1cm5cbiAgICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggPT09IGFjdGl2ZUluZGV4ICsgMSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnZW5kJztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleCAtIDEpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3N0YXJ0JztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4IDwgYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gaW5kaWNhdG9yQ2xpY2tlZCA/ICdzdGFydCcgOiAnZW5kJztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgICBkaXJlY3Rpb24gPSBpbmRpY2F0b3JDbGlja2VkID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IG5leHRQcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgIGluZGljYXRvckNsaWNrZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVJbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCkgcmV0dXJuO1xuICAgIHRoaXMuc2V0SW50ZXJ2YWwodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoX3NldEludGVydmFsKSB7XG4gICAgZnVuY3Rpb24gc2V0SW50ZXJ2YWwoKSB7XG4gICAgICByZXR1cm4gX3NldEludGVydmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3NldEludGVydmFsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBzZXRJbnRlcnZhbDtcbiAgfShmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSBub3QgdG8gaGF2ZSBtdWx0aXBsZSBpbnRlcnZhbHMgZ29pbmcuLi5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIGlmIChwcm9wcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5jeWNsZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wcy5uZXh0KCk7XG4gICAgICB9LCBwYXJzZUludChwcm9wcy5pbnRlcnZhbCwgMTApKTtcbiAgICB9XG4gIH0pO1xuXG4gIF9wcm90by5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKF9jbGVhckludGVydmFsKSB7XG4gICAgZnVuY3Rpb24gY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgIHJldHVybiBfY2xlYXJJbnRlcnZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2NsZWFySW50ZXJ2YWwudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWw7XG4gIH0oZnVuY3Rpb24gKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jeWNsZUludGVydmFsKTtcbiAgfSk7XG5cbiAgX3Byb3RvLmhvdmVyU3RhcnQgPSBmdW5jdGlvbiBob3ZlclN0YXJ0KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tb3VzZUVudGVyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgIChfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMpLm1vdXNlRW50ZXIuYXBwbHkoX3RoaXMkcHJvcHMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ob3ZlckVuZCA9IGZ1bmN0aW9uIGhvdmVyRW5kKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLnNldEludGVydmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW91c2VMZWF2ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgKF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMpLm1vdXNlTGVhdmUuYXBwbHkoX3RoaXMkcHJvcHMyLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlS2V5UHJlc3MgPSBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLnByb3BzLnByZXZpb3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLnByb3BzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZW5hYmxlVG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5lbmFibGVUb3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICB2YXIgY3VycmVudFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgdmFyIGRpZmZYID0gTWF0aC5hYnModGhpcy50b3VjaFN0YXJ0WCAtIGN1cnJlbnRYKTtcbiAgICB2YXIgZGlmZlkgPSBNYXRoLmFicyh0aGlzLnRvdWNoU3RhcnRZIC0gY3VycmVudFkpOyAvLyBEb24ndCBzd2lwZSBpZiBZLW1vdmVtZW50IGlzIGJpZ2dlciB0aGFuIFgtbW92ZW1lbnRcblxuICAgIGlmIChkaWZmWCA8IGRpZmZZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpZmZYIDwgU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRYIDwgdGhpcy50b3VjaFN0YXJ0WCkge1xuICAgICAgdGhpcy5wcm9wcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucHJldmlvdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckl0ZW1zID0gZnVuY3Rpb24gcmVuZGVySXRlbXMoY2Fyb3VzZWxJdGVtcywgY2xhc3NOYW1lKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgc2xpZGUgPSB0aGlzLnByb3BzLnNsaWRlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LCBjYXJvdXNlbEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBpc0luID0gaW5kZXggPT09IF90aGlzMi5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGl0ZW0sIHtcbiAgICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgICBzbGlkZTogc2xpZGVcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzMy5jc3NNb2R1bGUsXG4gICAgICAgIHNsaWRlID0gX3RoaXMkcHJvcHMzLnNsaWRlLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICBkYXJrID0gX3RoaXMkcHJvcHMzLmRhcmssXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wczMuZmFkZTtcbiAgICB2YXIgb3V0ZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsJywgZmFkZSwgc2xpZGUgJiYgJ3NsaWRlJywgZGFyayAmJiAnY2Fyb3VzZWwtZGFyaycpLCBjc3NNb2R1bGUpO1xuICAgIHZhciBpbm5lckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2Nhcm91c2VsLWlubmVyJyksIGNzc01vZHVsZSk7IC8vIGZpbHRlciBvdXQgYm9vbGVhbnMsIG51bGwsIG9yIHVuZGVmaW5lZFxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQgIT09IG51bGwgJiYgY2hpbGQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY2hpbGQgIT09ICdib29sZWFuJztcbiAgICB9KTtcbiAgICB2YXIgc2xpZGVzT25seSA9IGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09IENhcm91c2VsSXRlbSQxO1xuICAgIH0pOyAvLyBSZW5kZXJpbmcgb25seSBzbGlkZXNcblxuICAgIGlmIChzbGlkZXNPbmx5KSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBvdXRlckNsYXNzZXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5ob3ZlclN0YXJ0LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoY2hpbGRyZW4sIGlubmVyQ2xhc3NlcykpKTtcbiAgICB9IC8vIFJlbmRlcmluZyBzbGlkZXMgYW5kIGNvbnRyb2xzXG5cblxuICAgIGlmIChjaGlsZHJlblswXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB2YXIgX2Nhcm91c2VsSXRlbXMgPSBjaGlsZHJlblswXTtcbiAgICAgIHZhciBfY29udHJvbExlZnQgPSBjaGlsZHJlblsxXTtcbiAgICAgIHZhciBfY29udHJvbFJpZ2h0ID0gY2hpbGRyZW5bMl07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBvdXRlckNsYXNzZXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5ob3ZlclN0YXJ0LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoX2Nhcm91c2VsSXRlbXMsIGlubmVyQ2xhc3NlcyksIF9jb250cm9sTGVmdCwgX2NvbnRyb2xSaWdodCkpO1xuICAgIH0gLy8gUmVuZGVyaW5nIGluZGljYXRvcnMsIHNsaWRlcyBhbmQgY29udHJvbHNcblxuXG4gICAgdmFyIGluZGljYXRvcnMgPSBjaGlsZHJlblswXTtcblxuICAgIHZhciB3cmFwcGVkT25DbGljayA9IGZ1bmN0aW9uIHdyYXBwZWRPbkNsaWNrKGUpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5kaWNhdG9ycy5wcm9wcy5vbkNsaWNrSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoe1xuICAgICAgICAgIGluZGljYXRvckNsaWNrZWQ6IHRydWVcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbmRpY2F0b3JzLnByb3BzLm9uQ2xpY2tIYW5kbGVyKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHdyYXBwZWRJbmRpY2F0b3JzID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudChpbmRpY2F0b3JzLCB7XG4gICAgICBvbkNsaWNrSGFuZGxlcjogd3JhcHBlZE9uQ2xpY2tcbiAgICB9KTtcbiAgICB2YXIgY2Fyb3VzZWxJdGVtcyA9IGNoaWxkcmVuWzFdO1xuICAgIHZhciBjb250cm9sTGVmdCA9IGNoaWxkcmVuWzJdO1xuICAgIHZhciBjb250cm9sUmlnaHQgPSBjaGlsZHJlblszXTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhvdmVyU3RhcnQsXG4gICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmQsXG4gICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZXh0VmFsdWUoKVxuICAgIH0sIHdyYXBwZWRJbmRpY2F0b3JzLCB0aGlzLnJlbmRlckl0ZW1zKGNhcm91c2VsSXRlbXMsIGlubmVyQ2xhc3NlcyksIGNvbnRyb2xMZWZ0LCBjb250cm9sUmlnaHQpKTtcbiAgfTtcblxuICByZXR1cm4gQ2Fyb3VzZWw7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIC8vIHRoZSBjdXJyZW50IGFjdGl2ZSBzbGlkZSBvZiB0aGUgY2Fyb3VzZWxcbiAgYWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvLyBhIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBhZHZhbmNlIHRoZSBjYXJvdXNlbCB0byB0aGUgbmV4dCBzbGlkZSAodmlhIGFjdGl2ZUluZGV4KVxuICBuZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gYSBmdW5jdGlvbiB3aGljaCBzaG91bGQgYWR2YW5jZSB0aGUgY2Fyb3VzZWwgdG8gdGhlIHByZXZpb3VzIHNsaWRlICh2aWEgYWN0aXZlSW5kZXgpXG4gIHByZXZpb3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gY29udHJvbHMgaWYgdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgc2hvdWxkIGNvbnRyb2wgdGhlIGNhcm91c2VsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyogSWYgc2V0IHRvIFwiaG92ZXJcIiwgcGF1c2VzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvblxuICAgKiBtb3VzZWxlYXZlLiBJZiBzZXQgdG8gZmFsc2UsIGhvdmVyaW5nIG92ZXIgdGhlIGNhcm91c2VsIHdvbid0IHBhdXNlIGl0LiAoZGVmYXVsdDogXCJob3ZlclwiKVxuICAgKi9cbiAgcGF1c2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydob3ZlcicsIGZhbHNlXSksXG4gIC8vIEF1dG9wbGF5cyB0aGUgY2Fyb3VzZWwgYWZ0ZXIgdGhlIHVzZXIgbWFudWFsbHkgY3ljbGVzIHRoZSBmaXJzdCBpdGVtLiBJZiBcImNhcm91c2VsXCIsIGF1dG9wbGF5cyB0aGUgY2Fyb3VzZWwgb24gbG9hZC5cbiAgLy8gVGhpcyBpcyBob3cgYm9vdHN0cmFwIGRlZmluZXMgaXQuLi4gSSB3b3VsZCBwcmVmZXIgYSBib29sIG5hbWVkIGF1dG9wbGF5IG9yIHNvbWV0aGluZy4uLlxuICByaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnY2Fyb3VzZWwnXSksXG4gIC8vIHRoZSBpbnRlcnZhbCBhdCB3aGljaCB0aGUgY2Fyb3VzZWwgYXV0b21hdGljYWxseSBjeWNsZXMgKGRlZmF1bHQ6IDUwMDApXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlc1xuICBpbnRlcnZhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICAvLyBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBDYXJvdXNlbFxuICBtb3VzZUVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8vIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBleGl0cyB0aGUgQ2Fyb3VzZWxcbiAgbW91c2VMZWF2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvLyBjb250cm9scyB3aGV0aGVyIHRoZSBzbGlkZSBhbmltYXRpb24gb24gdGhlIENhcm91c2VsIHdvcmtzIG9yIG5vdFxuICBzbGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICAvLyBtYWtlIHRoZSBjb250cm9scywgaW5kaWNhdG9ycyBhbmQgY2FwdGlvbnMgZGFyayBvbiB0aGUgQ2Fyb3VzZWxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBlbmFibGVUb3VjaDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xuQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogdHJ1ZSxcbiAgZW5hYmxlVG91Y2g6IHRydWUsXG4gIGZhZGU6IGZhbHNlXG59O1xuQ2Fyb3VzZWwuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWwkMSA9IENhcm91c2VsO1xuXG52YXIgQ2Fyb3VzZWxDb250cm9sID0gZnVuY3Rpb24gQ2Fyb3VzZWxDb250cm9sKHByb3BzKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBvbkNsaWNrSGFuZGxlciA9IHByb3BzLm9uQ2xpY2tIYW5kbGVyLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZGlyZWN0aW9uVGV4dCA9IHByb3BzLmRpcmVjdGlvblRleHQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBhbmNob3JDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgXCJjYXJvdXNlbC1jb250cm9sLVwiICsgZGlyZWN0aW9uKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGljb25DbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKFwiY2Fyb3VzZWwtY29udHJvbC1cIiArIGRpcmVjdGlvbiArIFwiLWljb25cIiksIGNzc01vZHVsZSk7XG4gIHZhciBzY3JlZW5SZWFkZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd2aXN1YWxseS1oaWRkZW4nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gV2UgbmVlZCB0byBkaXNhYmxlIHRoaXMgbGludGluZyBydWxlIHRvIHVzZSBhbiBgPGE+YCBpbnN0ZWFkIG9mXG4gICAgLy8gYDxidXR0b24+YCBiZWNhdXNlIHRoYXQncyB3aGF0IHRoZSBCb290c3RyYXAgZXhhbXBsZXMgcmVxdWlyZTpcbiAgICAvLyBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjUvY29tcG9uZW50cy9jYXJvdXNlbC8jd2l0aC1jb250cm9sc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWRcbiAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgY2xhc3NOYW1lOiBhbmNob3JDbGFzc2VzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgfSxcbiAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICB0YWJJbmRleDogXCIwXCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNsaWNrSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBpY29uQ2xhc3NlcyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IHNjcmVlblJlYWRlckNsYXNzZXNcbiAgICB9LCBkaXJlY3Rpb25UZXh0IHx8IGRpcmVjdGlvbikpXG4gICk7XG59O1xuXG5DYXJvdXNlbENvbnRyb2wucHJvcFR5cGVzID0ge1xuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydwcmV2JywgJ25leHQnXSkuaXNSZXF1aXJlZCxcbiAgb25DbGlja0hhbmRsZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXJlY3Rpb25UZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbENvbnRyb2wkMSA9IENhcm91c2VsQ29udHJvbDtcblxudmFyIENhcm91c2VsSW5kaWNhdG9ycyA9IGZ1bmN0aW9uIENhcm91c2VsSW5kaWNhdG9ycyhwcm9wcykge1xuICB2YXIgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIGFjdGl2ZUluZGV4ID0gcHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBvbkNsaWNrSGFuZGxlciA9IHByb3BzLm9uQ2xpY2tIYW5kbGVyLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaW5kaWNhdG9ycycpLCBjc3NNb2R1bGUpO1xuICB2YXIgaW5kaWNhdG9ycyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgdmFyIGluZGljYXRvckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oe1xuICAgICAgYWN0aXZlOiBhY3RpdmVJbmRleCA9PT0gaWR4XG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogaXRlbS5jYXB0aW9uLFxuICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiB0cnVlLFxuICAgICAga2V5OiBcIlwiICsgKGl0ZW0ua2V5IHx8IE9iamVjdC52YWx1ZXMoaXRlbSkuam9pbignJykpLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25DbGlja0hhbmRsZXIoaWR4KTtcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6IGluZGljYXRvckNsYXNzZXNcbiAgICB9LCBpdGVtLmNhcHRpb24pO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3Nlc1xuICB9LCBpbmRpY2F0b3JzKTtcbn07XG5cbkNhcm91c2VsSW5kaWNhdG9ycy5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LmlzUmVxdWlyZWQsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlci5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWxJbmRpY2F0b3JzJDEgPSBDYXJvdXNlbEluZGljYXRvcnM7XG5cbnZhciBDYXJvdXNlbENhcHRpb24gPSBmdW5jdGlvbiBDYXJvdXNlbENhcHRpb24ocHJvcHMpIHtcbiAgdmFyIGNhcHRpb25IZWFkZXIgPSBwcm9wcy5jYXB0aW9uSGVhZGVyLFxuICAgICAgY2FwdGlvblRleHQgPSBwcm9wcy5jYXB0aW9uVGV4dCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtY2FwdGlvbicsICdkLW5vbmUnLCAnZC1tZC1ibG9jaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgY2FwdGlvbkhlYWRlciksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY2FwdGlvblRleHQpKTtcbn07XG5cbkNhcm91c2VsQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb25IZWFkZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2FwdGlvblRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsQ2FwdGlvbiQxID0gQ2Fyb3VzZWxDYXB0aW9uO1xuXG52YXIgX2V4Y2x1ZGVkJEQgPSBbXCJkZWZhdWx0QWN0aXZlSW5kZXhcIiwgXCJhdXRvUGxheVwiLCBcImluZGljYXRvcnNcIiwgXCJjb250cm9sc1wiLCBcIml0ZW1zXCIsIFwiZ29Ub0luZGV4XCJdO1xudmFyIHByb3BUeXBlcyRKID0ge1xuICBpdGVtczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheS5pc1JlcXVpcmVkLFxuICBpbmRpY2F0b3JzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbnRyb2xzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGF1dG9QbGF5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRlZmF1bHRBY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgbmV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBwcmV2aW91czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBnb1RvSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY1xufTtcblxudmFyIFVuY29udHJvbGxlZENhcm91c2VsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENhcm91c2VsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDYXJvdXNlbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSW5kZXg6IHByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCB8fCAwXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0ID0gX3RoaXMubmV4dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5wcmV2aW91cyA9IF90aGlzLnByZXZpb3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdvVG9JbmRleCA9IF90aGlzLmdvVG9JbmRleC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBfdGhpcy5vbkV4aXRpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ZWQgPSBfdGhpcy5vbkV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQ2Fyb3VzZWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkV4aXRpbmcgPSBmdW5jdGlvbiBvbkV4aXRpbmcoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHZhciBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVJbmRleDogbmV4dEluZGV4XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnByZXZpb3VzID0gZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgdmFyIG5leHRJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDAgPyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEgOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4IC0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXh0SW5kZXhcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ29Ub0luZGV4ID0gZnVuY3Rpb24gZ29Ub0luZGV4KG5ld0luZGV4KSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVJbmRleDogbmV3SW5kZXhcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXV0b1BsYXkgPSBfdGhpcyRwcm9wcy5hdXRvUGxheSxcbiAgICAgICAgaW5kaWNhdG9ycyA9IF90aGlzJHByb3BzLmluZGljYXRvcnMsXG4gICAgICAgIGNvbnRyb2xzID0gX3RoaXMkcHJvcHMuY29udHJvbHMsXG4gICAgICAgIGl0ZW1zID0gX3RoaXMkcHJvcHMuaXRlbXMsXG4gICAgICAgIGdvVG9JbmRleCA9IF90aGlzJHByb3BzLmdvVG9JbmRleCxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJEQpO1xuXG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgICB2YXIgc2xpZGVzID0gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gaXRlbS5rZXkgfHwgaXRlbS5zcmM7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsSXRlbSQxLCB7XG4gICAgICAgIG9uRXhpdGluZzogX3RoaXMyLm9uRXhpdGluZyxcbiAgICAgICAgb25FeGl0ZWQ6IF90aGlzMi5vbkV4aXRlZCxcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkLWJsb2NrIHctMTAwXCIsXG4gICAgICAgIHNyYzogaXRlbS5zcmMsXG4gICAgICAgIGFsdDogaXRlbS5hbHRUZXh0XG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ2FwdGlvbiQxLCB7XG4gICAgICAgIGNhcHRpb25UZXh0OiBpdGVtLmNhcHRpb24sXG4gICAgICAgIGNhcHRpb25IZWFkZXI6IGl0ZW0uaGVhZGVyIHx8IGl0ZW0uY2FwdGlvblxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWwkMSwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgbmV4dDogdGhpcy5uZXh0LFxuICAgICAgcHJldmlvdXM6IHRoaXMucHJldmlvdXMsXG4gICAgICByaWRlOiBhdXRvUGxheSA/ICdjYXJvdXNlbCcgOiB1bmRlZmluZWRcbiAgICB9LCBwcm9wcyksIGluZGljYXRvcnMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsSW5kaWNhdG9ycyQxLCB7XG4gICAgICBpdGVtczogaXRlbXMsXG4gICAgICBhY3RpdmVJbmRleDogcHJvcHMuYWN0aXZlSW5kZXggfHwgYWN0aXZlSW5kZXgsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogZ29Ub0luZGV4IHx8IHRoaXMuZ29Ub0luZGV4XG4gICAgfSksIHNsaWRlcywgY29udHJvbHMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udHJvbCQxLCB7XG4gICAgICBkaXJlY3Rpb246IFwicHJldlwiLFxuICAgICAgZGlyZWN0aW9uVGV4dDogXCJQcmV2aW91c1wiLFxuICAgICAgb25DbGlja0hhbmRsZXI6IHByb3BzLnByZXZpb3VzIHx8IHRoaXMucHJldmlvdXNcbiAgICB9KSwgY29udHJvbHMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udHJvbCQxLCB7XG4gICAgICBkaXJlY3Rpb246IFwibmV4dFwiLFxuICAgICAgZGlyZWN0aW9uVGV4dDogXCJOZXh0XCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMubmV4dCB8fCB0aGlzLm5leHRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENhcm91c2VsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSjtcblVuY29udHJvbGxlZENhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udHJvbHM6IHRydWUsXG4gIGluZGljYXRvcnM6IHRydWUsXG4gIGF1dG9QbGF5OiB0cnVlXG59O1xudmFyIFVuY29udHJvbGxlZENhcm91c2VsJDEgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbDtcblxudmFyIF9leGNsdWRlZCRDID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRJID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRJID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZFN1YnRpdGxlID0gZnVuY3Rpb24gQ2FyZFN1YnRpdGxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRDKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXN1YnRpdGxlJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkU3VidGl0bGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJEk7XG5DYXJkU3VidGl0bGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEk7XG52YXIgQ2FyZFN1YnRpdGxlJDEgPSBDYXJkU3VidGl0bGU7XG5cbnZhciBfZXhjbHVkZWQkQiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkSCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSCA9IHtcbiAgdGFnOiAncCdcbn07XG5cbnZhciBDYXJkVGV4dCA9IGZ1bmN0aW9uIENhcmRUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRCKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRIO1xuQ2FyZFRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEg7XG52YXIgQ2FyZFRleHQkMSA9IENhcmRUZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJEEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEcgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkVGl0bGUgPSBmdW5jdGlvbiBDYXJkVGl0bGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEEpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtdGl0bGUnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRUaXRsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRztcbkNhcmRUaXRsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRztcbnZhciBDYXJkVGl0bGUkMSA9IENhcmRUaXRsZTtcblxudmFyIF9leGNsdWRlZCR6ID0gW1wiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpc09wZW5cIiwgXCJmbGlwXCIsIFwidGFyZ2V0XCIsIFwib2Zmc2V0XCIsIFwiZmFsbGJhY2tQbGFjZW1lbnRzXCIsIFwicGxhY2VtZW50UHJlZml4XCIsIFwiYXJyb3dDbGFzc05hbWVcIiwgXCJoaWRlQXJyb3dcIiwgXCJwb3BwZXJDbGFzc05hbWVcIiwgXCJ0YWdcIiwgXCJjb250YWluZXJcIiwgXCJtb2RpZmllcnNcIiwgXCJzdHJhdGVneVwiLCBcImJvdW5kYXJpZXNFbGVtZW50XCIsIFwib25DbG9zZWRcIiwgXCJmYWRlXCIsIFwidHJhbnNpdGlvblwiLCBcInBsYWNlbWVudFwiXTtcblxuZnVuY3Rpb24gbm9vcCQyKCkge31cblxudmFyIHByb3BUeXBlcyRGID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSkuaXNSZXF1aXJlZCxcbiAgcG9wcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50UHJlZml4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYXJyb3dDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBoaWRlQXJyb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wuaXNSZXF1aXJlZCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb2Zmc2V0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIpLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIGZsaXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYm91bmRhcmllc0VsZW1lbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgRE9NRWxlbWVudF0pLFxuICBvbkNsb3NlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRyYW5zaXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpXG59O1xudmFyIGRlZmF1bHRQcm9wcyRGID0ge1xuICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCcsXG4gIHBsYWNlbWVudDogJ2F1dG8nLFxuICBoaWRlQXJyb3c6IGZhbHNlLFxuICBpc09wZW46IGZhbHNlLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgZmxpcDogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIG1vZGlmaWVyczogW10sXG4gIG9uQ2xvc2VkOiBub29wJDIsXG4gIGZhZGU6IHRydWUsXG4gIHRyYW5zaXRpb246IF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcylcbn07XG5cbnZhciBQb3BwZXJDb250ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvcHBlckNvbnRlbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHBlckNvbnRlbnQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zZXRUYXJnZXROb2RlID0gX3RoaXMuc2V0VGFyZ2V0Tm9kZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRUYXJnZXROb2RlID0gX3RoaXMuZ2V0VGFyZ2V0Tm9kZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DbG9zZWQgPSBfdGhpcy5vbkNsb3NlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuaXNPcGVuXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBQb3BwZXJDb250ZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuaXNPcGVuICYmICFzdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogcHJvcHMuaXNPcGVuXG4gICAgICB9O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUG9wcGVyQ29udGVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXMgJiYgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdICYmIHRoaXMuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRUYXJnZXROb2RlID0gZnVuY3Rpb24gc2V0VGFyZ2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy50YXJnZXROb2RlID0gdHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnID8gZ2V0VGFyZ2V0KG5vZGUpIDogbm9kZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGFyZ2V0Tm9kZSA9IGZ1bmN0aW9uIGdldFRhcmdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGFpbmVyTm9kZSA9IGZ1bmN0aW9uIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKCkge1xuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIG9mZnNldCA9IF90aGlzJHByb3BzLm9mZnNldCxcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwbGFjZW1lbnRQcmVmaXggPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnRQcmVmaXgsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIF9wb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBib3VuZGFyaWVzRWxlbWVudCA9IF90aGlzJHByb3BzLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgICBmYWRlID0gX3RoaXMkcHJvcHMuZmFkZSxcbiAgICAgICAgdHJhbnNpdGlvbiA9IF90aGlzJHByb3BzLnRyYW5zaXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJHopO1xuXG4gICAgdmFyIGFycm93Q2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdhcnJvdycsIF9hcnJvd0NsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gICAgdmFyIHBvcHBlckNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfcG9wcGVyQ2xhc3NOYW1lLCBwbGFjZW1lbnRQcmVmaXggPyBwbGFjZW1lbnRQcmVmaXggKyBcIi1hdXRvXCIgOiAnJyksIHRoaXMucHJvcHMuY3NzTW9kdWxlKTtcbiAgICB2YXIgbW9kaWZpZXJOYW1lcyA9IG1vZGlmaWVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfSk7XG4gICAgdmFyIGJhc2VNb2RpZmllcnMgPSBbe1xuICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgZW5hYmxlZDogZmxpcCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBmYWxsYmFja1BsYWNlbWVudHNcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJpZXNFbGVtZW50XG4gICAgICB9XG4gICAgfV0uZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gIW1vZGlmaWVyTmFtZXMuaW5jbHVkZXMobS5uYW1lKTtcbiAgICB9KTtcbiAgICB2YXIgZXh0ZW5kZWRNb2RpZmllcnMgPSBbXS5jb25jYXQoYmFzZU1vZGlmaWVycywgbW9kaWZpZXJzKTtcblxuICAgIHZhciBwb3BwZXJUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICB9KTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIHBvcHBlclRyYW5zaXRpb24sIGF0dHJzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgdGFnOiB0YWdcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlBvcHBlciwge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudDogdGhpcy50YXJnZXROb2RlLFxuICAgICAgbW9kaWZpZXJzOiBleHRlbmRlZE1vZGlmaWVycyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgcG9wcGVyUGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICAgICAgaXNSZWZlcmVuY2VIaWRkZW4gPSBfcmVmLmlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgICAgIGFycm93UHJvcHMgPSBfcmVmLmFycm93UHJvcHMsXG4gICAgICAgICAgdXBkYXRlID0gX3JlZi51cGRhdGU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IHBvcHBlclBsYWNlbWVudCxcbiAgICAgICAgXCJkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuXCI6IGlzUmVmZXJlbmNlSGlkZGVuID8gJ3RydWUnIDogdW5kZWZpbmVkXG4gICAgICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICB9KSA6IGNoaWxkcmVuLCAhaGlkZUFycm93ICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IGFycm93UHJvcHMucmVmLFxuICAgICAgICBjbGFzc05hbWU6IGFycm93Q2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogYXJyb3dQcm9wcy5zdHlsZVxuICAgICAgfSkpO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0VGFyZ2V0Tm9kZSh0aGlzLnByb3BzLnRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRhaW5lciA9PT0gJ2lubGluZScgPyB0aGlzLnJlbmRlckNoaWxkcmVuKCkgOiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuZ2V0UmVmXG4gICAgICB9LCB0aGlzLnJlbmRlckNoaWxkcmVuKCkpLCB0aGlzLmdldENvbnRhaW5lck5vZGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFBvcHBlckNvbnRlbnQ7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Qb3BwZXJDb250ZW50LnByb3BUeXBlcyA9IHByb3BUeXBlcyRGO1xuUG9wcGVyQ29udGVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRjtcbnZhciBQb3BwZXJDb250ZW50JDEgPSBQb3BwZXJDb250ZW50O1xuXG52YXIgUG9wcGVyVGFyZ2V0SGVscGVyID0gZnVuY3Rpb24gUG9wcGVyVGFyZ2V0SGVscGVyKHByb3BzLCBjb250ZXh0KSB7XG4gIGNvbnRleHQucG9wcGVyTWFuYWdlci5zZXRUYXJnZXROb2RlKGdldFRhcmdldChwcm9wcy50YXJnZXQpKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5Qb3BwZXJUYXJnZXRIZWxwZXIuY29udGV4dFR5cGVzID0ge1xuICBwb3BwZXJNYW5hZ2VyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wcGVyVGFyZ2V0SGVscGVyLnByb3BUeXBlcyA9IHtcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkXG59O1xudmFyIFBvcHBlclRhcmdldEhlbHBlciQxID0gUG9wcGVyVGFyZ2V0SGVscGVyO1xuXG52YXIgcHJvcFR5cGVzJEUgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFBvcHBlclBsYWNlbWVudHMpLFxuICB0YXJnZXQ6IHRhcmdldFByb3BUeXBlLmlzUmVxdWlyZWQsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBoaWRlQXJyb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYm91bmRhcmllc0VsZW1lbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgRE9NRWxlbWVudF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBpbm5lckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGFycm93Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcG9wcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGF1dG9oaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHBsYWNlbWVudFByZWZpeDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRlbGF5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICAgc2hvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgaGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJcbiAgfSksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIG1vZGlmaWVyczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgc3RyYXRlZ3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvZmZzZXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3RdKSxcbiAgdHJpZ2dlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmxpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIERFRkFVTFRfREVMQVlTID0ge1xuICBzaG93OiAwLFxuICBoaWRlOiA1MFxufTtcbnZhciBkZWZhdWx0UHJvcHMkRSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgaGlkZUFycm93OiBmYWxzZSxcbiAgYXV0b2hpZGU6IGZhbHNlLFxuICBkZWxheTogREVGQVVMVF9ERUxBWVMsXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge30sXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGZhZGU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGlzSW5ET01TdWJ0cmVlKGVsZW1lbnQsIHN1YnRyZWVSb290KSB7XG4gIHJldHVybiBzdWJ0cmVlUm9vdCAmJiAoZWxlbWVudCA9PT0gc3VidHJlZVJvb3QgfHwgc3VidHJlZVJvb3QuY29udGFpbnMoZWxlbWVudCkpO1xufVxuXG5mdW5jdGlvbiBpc0luRE9NU3VidHJlZXMoZWxlbWVudCwgc3VidHJlZVJvb3RzKSB7XG4gIGlmIChzdWJ0cmVlUm9vdHMgPT09IHZvaWQgMCkge1xuICAgIHN1YnRyZWVSb290cyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVSb290cyAmJiBzdWJ0cmVlUm9vdHMubGVuZ3RoICYmIHN1YnRyZWVSb290cy5maWx0ZXIoZnVuY3Rpb24gKHN1YlRyZWVSb290KSB7XG4gICAgcmV0dXJuIGlzSW5ET01TdWJ0cmVlKGVsZW1lbnQsIHN1YlRyZWVSb290KTtcbiAgfSlbMF07XG59XG5cbnZhciBUb29sdGlwUG9wb3ZlcldyYXBwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVG9vbHRpcFBvcG92ZXJXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb29sdGlwUG9wb3ZlcldyYXBwZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgIF90aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5hZGRUYXJnZXRFdmVudHMgPSBfdGhpcy5hZGRUYXJnZXRFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucmVtb3ZlVGFyZ2V0RXZlbnRzID0gX3RoaXMucmVtb3ZlVGFyZ2V0RXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zaG93V2l0aERlbGF5ID0gX3RoaXMuc2hvd1dpdGhEZWxheS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oaWRlV2l0aERlbGF5ID0gX3RoaXMuaGlkZVdpdGhEZWxheS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50ID0gX3RoaXMub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudCA9IF90aGlzLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnNob3cgPSBfdGhpcy5zaG93LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhpZGUgPSBfdGhpcy5oaWRlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXNjS2V5RG93biA9IF90aGlzLm9uRXNjS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgIH07XG4gICAgX3RoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUb29sdGlwUG9wb3ZlcldyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbW92ZVRhcmdldEV2ZW50cygpO1xuICAgIHRoaXMuX3RhcmdldHMgPSBudWxsO1xuICAgIHRoaXMuY2xlYXJTaG93VGltZW91dCgpO1xuICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICB9O1xuXG4gIFRvb2x0aXBQb3BvdmVyV3JhcHBlci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmlzT3BlbiAmJiAhc3RhdGUuaXNPcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgICAgfTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQgPSBmdW5jdGlvbiBvbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50ID0gZnVuY3Rpb24gb25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Fc2NLZXlEb3duID0gZnVuY3Rpb24gb25Fc2NLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmhpZGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgdmFyIGlubmVyUmVmID0gdGhpcy5wcm9wcy5pbm5lclJlZjtcblxuICAgIGlmIChpbm5lclJlZikge1xuICAgICAgaWYgKHR5cGVvZiBpbm5lclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbm5lclJlZihyZWYpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5uZXJSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlubmVyUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcG9wb3ZlciA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVsYXkgPSBmdW5jdGlvbiBnZXREZWxheShrZXkpIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBpc05hTihkZWxheVtrZXldKSA/IERFRkFVTFRfREVMQVlTW2tleV0gOiBkZWxheVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFRhcmdldCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIHRoaXMuX3RhcmdldHNbaW5kZXhdO1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRUYXJnZXQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gZSA/IGUuY3VycmVudFRhcmdldCB8fCB0aGlzLmdldEN1cnJlbnRUYXJnZXQoZS50YXJnZXQpIDogbnVsbDtcblxuICAgICAgaWYgKGUgJiYgZS5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGUuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IHBhdGggJiYgcGF0aFswXSB8fCB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3dXaXRoRGVsYXkgPSBmdW5jdGlvbiBzaG93V2l0aERlbGF5KGUpIHtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNob3cuYmluZCh0aGlzLCBlKSwgdGhpcy5nZXREZWxheSgnc2hvdycpKTtcbiAgfTtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGlkZVdpdGhEZWxheSA9IGZ1bmN0aW9uIGhpZGVXaXRoRGVsYXkoZSkge1xuICAgIGlmICh0aGlzLl9zaG93VGltZW91dCkge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclNob3dUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJTaG93VGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXQpO1xuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckhpZGVUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJIaWRlVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuICAgIHRoaXMuX2hpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVEb2N1bWVudENsaWNrID0gZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgdmFyIHRyaWdnZXJzID0gdGhpcy5wcm9wcy50cmlnZ2VyLnNwbGl0KCcgJyk7XG5cbiAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignbGVnYWN5JykgPiAtMSAmJiAodGhpcy5wcm9wcy5pc09wZW4gfHwgaXNJbkRPTVN1YnRyZWVzKGUudGFyZ2V0LCB0aGlzLl90YXJnZXRzKSkpIHtcbiAgICAgIGlmICh0aGlzLl9oaWRlVGltZW91dCkge1xuICAgICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFpc0luRE9NU3VidHJlZShlLnRhcmdldCwgdGhpcy5fcG9wb3ZlcikpIHtcbiAgICAgICAgdGhpcy5oaWRlV2l0aERlbGF5KGUpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5zaG93V2l0aERlbGF5KGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHJpZ2dlcnMuaW5kZXhPZignY2xpY2snKSA+IC0xICYmIGlzSW5ET01TdWJ0cmVlcyhlLnRhcmdldCwgdGhpcy5fdGFyZ2V0cykpIHtcbiAgICAgIGlmICh0aGlzLl9oaWRlVGltZW91dCkge1xuICAgICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNob3dXaXRoRGVsYXkoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVXaXRoRGVsYXkoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRFdmVudE9uVGFyZ2V0cyA9IGZ1bmN0aW9uIGFkZEV2ZW50T25UYXJnZXRzKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKSB7XG4gICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRPblRhcmdldHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudE9uVGFyZ2V0cyh0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSkge1xuICAgIHRoaXMuX3RhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRhcmdldEV2ZW50cyA9IGZ1bmN0aW9uIGFkZFRhcmdldEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyKSB7XG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ21hbnVhbCcpID09PSAtMSkge1xuICAgICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignY2xpY2snKSA+IC0xIHx8IHRyaWdnZXJzLmluZGV4T2YoJ2xlZ2FjeScpID4gLTEpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0cyAmJiB0aGlzLl90YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdob3ZlcicpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd1dpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdtb3VzZW91dCcsIHRoaXMuaGlkZVdpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2ZvY3VzJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnZm9jdXNpbicsIHRoaXMuc2hvdywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdmb2N1c291dCcsIHRoaXMuaGlkZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlVGFyZ2V0RXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90YXJnZXRzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdtb3VzZW92ZXInLCB0aGlzLnNob3dXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnbW91c2VvdXQnLCB0aGlzLmhpZGVXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ2ZvY3VzaW4nLCB0aGlzLnNob3csIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnZm9jdXNvdXQnLCB0aGlzLmhpZGUsIHRydWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVGFyZ2V0ID0gZnVuY3Rpb24gdXBkYXRlVGFyZ2V0KCkge1xuICAgIHZhciBuZXdUYXJnZXQgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy50YXJnZXQsIHRydWUpO1xuXG4gICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy5fdGFyZ2V0cykge1xuICAgICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBuZXdUYXJnZXQgPyBBcnJheS5mcm9tKG5ld1RhcmdldCkgOiBbXTtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50IHx8IHRoaXMuX3RhcmdldHNbMF07XG4gICAgICB0aGlzLmFkZFRhcmdldEV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgfHwgdGhpcy5fdGFyZ2V0c1swXTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgaW5uZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5pbm5lckNsYXNzTmFtZSxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gX3RoaXMkcHJvcHMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VtZW50UHJlZml4ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50UHJlZml4LFxuICAgICAgICBhcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBwb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIGNvbnRhaW5lciA9IF90aGlzJHByb3BzLmNvbnRhaW5lcixcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBvZmZzZXQgPSBfdGhpcyRwcm9wcy5vZmZzZXQsXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wcy5mYWRlLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzJEUpKTtcbiAgICB2YXIgcG9wcGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhwb3BwZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoaW5uZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3BwZXJDb250ZW50JDEsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBpc09wZW46IGlzT3BlbixcbiAgICAgIGhpZGVBcnJvdzogaGlkZUFycm93LFxuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnRQcmVmaXg6IHBsYWNlbWVudFByZWZpeCxcbiAgICAgIGFycm93Q2xhc3NOYW1lOiBhcnJvd0NsYXNzTmFtZSxcbiAgICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgZmFkZTogZmFkZSxcbiAgICAgIGZsaXA6IGZsaXBcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICByZWY6IF90aGlzMi5nZXRSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcm9sZTogXCJ0b29sdGlwXCIsXG4gICAgICAgIG9uTW91c2VPdmVyOiBfdGhpczIub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBfdGhpczIub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQsXG4gICAgICAgIG9uS2V5RG93bjogX3RoaXMyLm9uRXNjS2V5RG93blxuICAgICAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHtcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICAgIH0pIDogY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEU7XG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyJDEgPSBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG5cbnZhciBkZWZhdWx0UHJvcHMkRCA9IHtcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy1wb3BvdmVyJyxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgb2Zmc2V0OiBbMCwgOF1cbn07XG5cbnZhciBQb3BvdmVyID0gZnVuY3Rpb24gUG9wb3Zlcihwcm9wcykge1xuICB2YXIgcG9wcGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwb3BvdmVyJywgJ3Nob3cnLCBwcm9wcy5wb3BwZXJDbGFzc05hbWUpO1xuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwb3BvdmVyLWlubmVyJywgcHJvcHMuaW5uZXJDbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvb2x0aXBQb3BvdmVyV3JhcHBlciQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBhcnJvd0NsYXNzTmFtZTogXCJwb3BvdmVyLWFycm93XCIsXG4gICAgcG9wcGVyQ2xhc3NOYW1lOiBwb3BwZXJDbGFzc2VzLFxuICAgIGlubmVyQ2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblBvcG92ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyREO1xudmFyIFBvcG92ZXIkMSA9IFBvcG92ZXI7XG5cbnZhciBvbWl0S2V5cyQ0ID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkUG9wb3ZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRQb3BvdmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRQb3BvdmVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZFBvcG92ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3BvdmVyJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cyQ0KSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRQb3BvdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkUG9wb3Zlci5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIFBvcG92ZXIkMS5wcm9wVHlwZXMpO1xuXG52YXIgX2V4Y2x1ZGVkJHkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEMgPSB7XG4gIHRhZzogJ2gzJ1xufTtcblxudmFyIFBvcG92ZXJIZWFkZXIgPSBmdW5jdGlvbiBQb3BvdmVySGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwb3BvdmVyLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuUG9wb3ZlckhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRDtcblBvcG92ZXJIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEM7XG52YXIgUG9wb3ZlckhlYWRlciQxID0gUG9wb3ZlckhlYWRlcjtcblxudmFyIF9leGNsdWRlZCR4ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRDID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRCID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgUG9wb3ZlckJvZHkgPSBmdW5jdGlvbiBQb3BvdmVyQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkeCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncG9wb3Zlci1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Qb3BvdmVyQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQztcblBvcG92ZXJCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRCO1xudmFyIFBvcG92ZXJCb2R5JDEgPSBQb3BvdmVyQm9keTtcblxudmFyIF9leGNsdWRlZCR3ID0gW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJiYXJDbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YWx1ZVwiLCBcIm1pblwiLCBcIm1heFwiLCBcImFuaW1hdGVkXCIsIFwic3RyaXBlZFwiLCBcImNvbG9yXCIsIFwiYmFyXCIsIFwibXVsdGlcIiwgXCJ0YWdcIiwgXCJzdHlsZVwiLCBcImJhclN0eWxlXCIsIFwiYmFyQXJpYVZhbHVlVGV4dFwiLCBcImJhckFyaWFMYWJlbGxlZEJ5XCJdO1xudmFyIHByb3BUeXBlcyRCID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbXVsdGk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdmFsdWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgbWluOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIG1heDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBhbmltYXRlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHJpcGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc3R5bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBiYXJTdHlsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGJhckFyaWFWYWx1ZVRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYXJBcmlhTGFiZWxsZWRCeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJEEgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHZhbHVlOiAwLFxuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBzdHlsZToge30sXG4gIGJhclN0eWxlOiB7fVxufTtcblxudmFyIFByb2dyZXNzID0gZnVuY3Rpb24gUHJvZ3Jlc3MocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBiYXJDbGFzc05hbWUgPSBwcm9wcy5iYXJDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgYW5pbWF0ZWQgPSBwcm9wcy5hbmltYXRlZCxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJhciA9IHByb3BzLmJhcixcbiAgICAgIG11bHRpID0gcHJvcHMubXVsdGksXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgYmFyU3R5bGUgPSBwcm9wcy5iYXJTdHlsZSxcbiAgICAgIGJhckFyaWFWYWx1ZVRleHQgPSBwcm9wcy5iYXJBcmlhVmFsdWVUZXh0LFxuICAgICAgYmFyQXJpYUxhYmVsbGVkQnkgPSBwcm9wcy5iYXJBcmlhTGFiZWxsZWRCeSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHcpO1xuXG4gIHZhciBwZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpIC8gdG9OdW1iZXIobWF4KSAqIDEwMDtcbiAgdmFyIHByb2dyZXNzQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwcm9ncmVzcycpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwcm9ncmVzcy1iYXInLCBiYXIgPyBjbGFzc05hbWUgfHwgYmFyQ2xhc3NOYW1lIDogYmFyQ2xhc3NOYW1lLCBhbmltYXRlZCA/ICdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnIDogbnVsbCwgY29sb3IgPyBcImJnLVwiICsgY29sb3IgOiBudWxsLCBzdHJpcGVkIHx8IGFuaW1hdGVkID8gJ3Byb2dyZXNzLWJhci1zdHJpcGVkJyA6IG51bGwpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQmFyQ2xhc3NlcyxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGJhciA/IHN0eWxlIDoge30pLCBiYXJTdHlsZSksIHt9LCB7XG4gICAgICB3aWR0aDogcGVyY2VudCArIFwiJVwiXG4gICAgfSksXG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICdhcmlhLXZhbHVlbWluJzogbWluLFxuICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICdhcmlhLXZhbHVldGV4dCc6IGJhckFyaWFWYWx1ZVRleHQsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IGJhckFyaWFMYWJlbGxlZEJ5LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9O1xuXG4gIGlmIChiYXIpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHByb2dyZXNzQmFyUHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQ2xhc3Nlc1xuICB9KSwgbXVsdGkgPyBjaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBwcm9ncmVzc0JhclByb3BzKSk7XG59O1xuXG5Qcm9ncmVzcy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQjtcblByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRBO1xudmFyIFByb2dyZXNzJDEgPSBQcm9ncmVzcztcblxudmFyIHByb3BUeXBlcyRBID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLmlzUmVxdWlyZWQsXG4gIG5vZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59O1xuXG52YXIgUG9ydGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvcnRhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQb3J0YWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmRlZmF1bHROb2RlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZGVmYXVsdE5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuZGVmYXVsdE5vZGUgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5ub2RlICYmICF0aGlzLmRlZmF1bHROb2RlKSB7XG4gICAgICB0aGlzLmRlZmF1bHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGVmYXVsdE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucHJvcHMubm9kZSB8fCB0aGlzLmRlZmF1bHROb2RlKTtcbiAgfTtcblxuICByZXR1cm4gUG9ydGFsO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuUG9ydGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyRBO1xudmFyIFBvcnRhbCQxID0gUG9ydGFsO1xuXG5mdW5jdGlvbiBub29wJDEoKSB7fVxuXG52YXIgRmFkZVByb3BUeXBlcyQxID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyk7XG52YXIgcHJvcFR5cGVzJHogPSB7XG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2VudGVyZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZnVsbHNjcmVlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pXSksXG4gIHNjcm9sbGFibGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBrZXlib2FyZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc3RhdGljJ10pXSksXG4gIG9uRW50ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25FeGl0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtb2RhbENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGV4dGVybmFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgekluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyQxLFxuICBtb2RhbFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMkMSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgdHJhcEZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgcHJvcHNUb09taXQkMSA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyR6KTtcbnZhciBkZWZhdWx0UHJvcHMkeiA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiB0cnVlLFxuICBjZW50ZXJlZDogZmFsc2UsXG4gIHNjcm9sbGFibGU6IGZhbHNlLFxuICByb2xlOiAnZGlhbG9nJyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB6SW5kZXg6IDEwNTAsXG4gIGZhZGU6IHRydWUsXG4gIG9uT3BlbmVkOiBub29wJDEsXG4gIG9uQ2xvc2VkOiBub29wJDEsXG4gIG1vZGFsVHJhbnNpdGlvbjoge1xuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5Nb2RhbFxuICB9LFxuICBiYWNrZHJvcFRyYW5zaXRpb246IHtcbiAgICBtb3VudE9uRW50ZXI6IHRydWUsXG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkZhZGUgLy8gdXNlcyBzdGFuZGFyZCBmYWRlIHRyYW5zaXRpb25cblxuICB9LFxuICB1bm1vdW50T25DbG9zZTogdHJ1ZSxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiB0cnVlLFxuICBjb250YWluZXI6ICdib2R5JyxcbiAgdHJhcEZvY3VzOiBmYWxzZVxufTtcblxudmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1vZGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUVzY2FwZSA9IF90aGlzLmhhbmRsZUVzY2FwZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiA9IF90aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRhYiA9IF90aGlzLmhhbmRsZVRhYi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk9wZW5lZCA9IF90aGlzLm9uT3BlbmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudHJhcEZvY3VzID0gX3RoaXMudHJhcEZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNb2RhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgIG9uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9IC8vIHRyYXBzIGZvY3VzIGluc2lkZSB0aGUgTW9kYWwsIGV2ZW4gaWYgdGhlIGJyb3dzZXIgYWRkcmVzcyBiYXIgaXMgZm9jdXNlZFxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7IC8vIGxldCByZW5kZXIoKSByZW5kZXJzIE1vZGFsIERpYWxvZyBmaXJzdFxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBub3cgTW9kYWwgRGlhbG9nIGlzIHJlbmRlcmVkIGFuZCB3ZSBjYW4gcmVmZXIgdGhpcy5fZWxlbWVudCBhbmQgdGhpcy5fZGlhbG9nXG5cblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHByZXZQcm9wcy56SW5kZXggIT09IHRoaXMucHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by50cmFwRm9jdXMgPSBmdW5jdGlvbiB0cmFwRm9jdXMoZXYpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudHJhcEZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSAvL2VsZW1lbnQgaXMgbm90IGF0dGFjaGVkXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSA9PT0gZXYudGFyZ2V0KSAvLyBpbml0aWFsIGZvY3VzIHdoZW4gdGhlIE1vZGFsIGlzIG9wZW5lZFxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGFsSW5kZXggPCBNb2RhbC5vcGVuQ291bnQgLSAxKSAvLyBsYXN0IG9wZW5lZCBtb2RhbFxuICAgICAgcmV0dXJuO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGZvY3VzIGlzIGFscmVhZHkgaW5zaWRlIHRoZSBNb2RhbFxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBldi50YXJnZXQpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgLy8gb3RoZXJ3aXNlIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgTW9kYWxcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk9wZW5lZCA9IGZ1bmN0aW9uIG9uT3BlbmVkKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5wcm9wcy5vbk9wZW5lZCgpO1xuICAgICh0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi5vbkVudGVyZWQgfHwgbm9vcCQxKShub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xvc2VkID0gZnVuY3Rpb24gb25DbG9zZWQobm9kZSkge1xuICAgIHZhciB1bm1vdW50T25DbG9zZSA9IHRoaXMucHJvcHMudW5tb3VudE9uQ2xvc2U7IC8vIHNvIGFsbCBtZXRob2RzIGdldCBjYWxsZWQgYmVmb3JlIGl0IGlzIHVubW91bnRlZFxuXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlZCgpO1xuICAgICh0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi5vbkV4aXRlZCB8fCBub29wJDEpKG5vZGUpO1xuXG4gICAgaWYgKHVubW91bnRPbkNsb3NlKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9kaWFsb2cgJiYgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUgJiYgdHlwZW9mIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZUVsZW1lbnRzLmpvaW4oJywgJykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2VkQ2hpbGQgPSBmdW5jdGlvbiBnZXRGb2N1c2VkQ2hpbGQoKSB7XG4gICAgdmFyIGN1cnJlbnRGb2N1cztcbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICB0cnkge1xuICAgICAgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGZvY3VzYWJsZUNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50Rm9jdXM7XG4gIH0gLy8gbm90IG1vdXNlVXAgYmVjYXVzZSBzY3JvbGxiYXIgZmlyZXMgaXQsIHNob3VsZG4ndCBjbG9zZSB3aGVuIHVzZXIgc2Nyb2xsc1xuICA7XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuX21vdXNlRG93bkVsZW1lbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgYmFja2Ryb3AgPSB0aGlzLl9kaWFsb2cgPyB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSA6IG51bGw7XG5cbiAgICAgIGlmIChiYWNrZHJvcCAmJiBlLnRhcmdldCA9PT0gYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHRydWUpIHJldHVybjtcblxuICAgICAgaWYgKGJhY2tkcm9wICYmIGUudGFyZ2V0ID09PSBiYWNrZHJvcCAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlKSB7XG4gICAgaWYgKGUud2hpY2ggIT09IDkpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RhbEluZGV4IDwgTW9kYWwub3BlbkNvdW50IC0gMSkgcmV0dXJuOyAvLyBsYXN0IG9wZW5lZCBtb2RhbFxuXG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuICAgIHZhciB0b3RhbEZvY3VzYWJsZSA9IGZvY3VzYWJsZUNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAodG90YWxGb2N1c2FibGUgPT09IDApIHJldHVybjtcbiAgICB2YXIgY3VycmVudEZvY3VzID0gdGhpcy5nZXRGb2N1c2VkQ2hpbGQoKTtcbiAgICB2YXIgZm9jdXNlZEluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxGb2N1c2FibGU7IGkgKz0gMSkge1xuICAgICAgaWYgKGZvY3VzYWJsZUNoaWxkcmVuW2ldID09PSBjdXJyZW50Rm9jdXMpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblt0b3RhbEZvY3VzYWJsZSAtIDFdLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IHRvdGFsRm9jdXNhYmxlIC0gMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BNb3VzZURvd24oZSkge1xuICAgIHRoaXMuX21vdXNlRG93bkVsZW1lbnQgPSBlLnRhcmdldDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXNjYXBlID0gZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24gPSBmdW5jdGlvbiBoYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1N0YXRpY0JhY2tkcm9wQW5pbWF0aW9uOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyID0gZ2V0VGFyZ2V0KHRoaXMucHJvcHMuY29udGFpbmVyKTtcblxuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IGdldE9yaWdpbmFsQm9keVBhZGRpbmcoKTtcbiAgICBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCk7XG5cbiAgICBpZiAoTW9kYWwub3BlbkNvdW50ID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLCBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMubW9kYWxJbmRleCA9IE1vZGFsLm9wZW5Db3VudDtcbiAgICBNb2RhbC5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoTW9kYWwub3BlbkNvdW50IDw9IDEpIHtcbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7IC8vIFVzZSByZWdleCB0byBwcmV2ZW50IG1hdGNoaW5nIGBtb2RhbC1vcGVuYCBhcyBwYXJ0IG9mIGEgZGlmZmVyZW50IGNsYXNzLCBlLmcuIGBteS1tb2RhbC1vcGVuZWRgXG5cbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWVSZWdleCA9IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgbW9kYWxPcGVuQ2xhc3NOYW1lICsgXCIoIHwkKVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZShtb2RhbE9wZW5DbGFzc05hbWVSZWdleCwgJyAnKS50cmltKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgICBNb2RhbC5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBNb2RhbC5vcGVuQ291bnQgLSAxKTtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aCh0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyTW9kYWxEaWFsb2cgPSBmdW5jdGlvbiByZW5kZXJNb2RhbERpYWxvZygpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXMsXG4gICAgICAgIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgcHJvcHNUb09taXQkMSk7XG4gICAgdmFyIGRpYWxvZ0Jhc2VDbGFzcyA9ICdtb2RhbC1kaWFsb2cnO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRpYWxvZ0Jhc2VDbGFzcywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tcIm1vZGFsLVwiICsgdGhpcy5wcm9wcy5zaXplXSA9IHRoaXMucHJvcHMuc2l6ZSwgX2NsYXNzTmFtZXNbZGlhbG9nQmFzZUNsYXNzICsgXCItY2VudGVyZWRcIl0gPSB0aGlzLnByb3BzLmNlbnRlcmVkLCBfY2xhc3NOYW1lc1tkaWFsb2dCYXNlQ2xhc3MgKyBcIi1zY3JvbGxhYmxlXCJdID0gdGhpcy5wcm9wcy5zY3JvbGxhYmxlLCBfY2xhc3NOYW1lc1snbW9kYWwtZnVsbHNjcmVlbiddID0gdGhpcy5wcm9wcy5mdWxsc2NyZWVuID09PSB0cnVlLCBfY2xhc3NOYW1lc1tcIm1vZGFsLWZ1bGxzY3JlZW4tXCIgKyB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gKyBcIi1kb3duXCJdID0gdHlwZW9mIHRoaXMucHJvcHMuZnVsbHNjcmVlbiA9PT0gJ3N0cmluZycsIF9jbGFzc05hbWVzKSksIHRoaXMucHJvcHMuY3NzTW9kdWxlKSxcbiAgICAgIHJvbGU6IFwiZG9jdW1lbnRcIixcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgX3RoaXMzLl9kaWFsb2cgPSBjO1xuICAgICAgfVxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsLWNvbnRlbnQnLCB0aGlzLnByb3BzLmNvbnRlbnRDbGFzc05hbWUpLCB0aGlzLnByb3BzLmNzc01vZHVsZSlcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdW5tb3VudE9uQ2xvc2UgPSB0aGlzLnByb3BzLnVubW91bnRPbkNsb3NlO1xuXG4gICAgaWYgKCEhdGhpcy5fZWxlbWVudCAmJiAodGhpcy5zdGF0ZS5pc09wZW4gfHwgIXVubW91bnRPbkNsb3NlKSkge1xuICAgICAgdmFyIGlzTW9kYWxIaWRkZW4gPSAhIXRoaXMuX2VsZW1lbnQgJiYgIXRoaXMuc3RhdGUuaXNPcGVuICYmICF1bm1vdW50T25DbG9zZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzTW9kYWxIaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgd3JhcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi53cmFwQ2xhc3NOYW1lLFxuICAgICAgICAgIG1vZGFsQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLm1vZGFsQ2xhc3NOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmJhY2tkcm9wQ2xhc3NOYW1lLFxuICAgICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzMi5jc3NNb2R1bGUsXG4gICAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMyLmlzT3BlbixcbiAgICAgICAgICBiYWNrZHJvcCA9IF90aGlzJHByb3BzMi5iYWNrZHJvcCxcbiAgICAgICAgICByb2xlID0gX3RoaXMkcHJvcHMyLnJvbGUsXG4gICAgICAgICAgbGFiZWxsZWRCeSA9IF90aGlzJHByb3BzMi5sYWJlbGxlZEJ5LFxuICAgICAgICAgIGV4dGVybmFsID0gX3RoaXMkcHJvcHMyLmV4dGVybmFsLFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMyLmlubmVyUmVmO1xuICAgICAgdmFyIG1vZGFsQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93bixcbiAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVFc2NhcGUsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVUYWIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9LFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxsZWRCeSxcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgdGFiSW5kZXg6ICctMSdcbiAgICAgIH07XG4gICAgICB2YXIgaGFzVHJhbnNpdGlvbiA9IHRoaXMucHJvcHMuZmFkZTtcblxuICAgICAgdmFyIG1vZGFsVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBiYWNrZHJvcFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgQmFja2Ryb3AgPSBiYWNrZHJvcCAmJiAoaGFzVHJhbnNpdGlvbiA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYmFja2Ryb3BUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuICYmICEhYmFja2Ryb3AsXG4gICAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwtYmFja2Ryb3AnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSlcbiAgICAgIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbC1iYWNrZHJvcCcsICdzaG93JywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBvcnRhbCQxLCB7XG4gICAgICAgIG5vZGU6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKHdyYXBDbGFzc05hbWUpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIG1vZGFsQXR0cmlidXRlcywgbW9kYWxUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMub25PcGVuZWQsXG4gICAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsJywgbW9kYWxDbGFzc05hbWUsIHRoaXMuc3RhdGUuc2hvd1N0YXRpY0JhY2tkcm9wQW5pbWF0aW9uICYmICdtb2RhbC1zdGF0aWMnKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gICAgICB9KSwgZXh0ZXJuYWwsIHRoaXMucmVuZGVyTW9kYWxEaWFsb2coKSksIEJhY2tkcm9wKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBNb2RhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyR6O1xuTW9kYWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHo7XG5Nb2RhbC5vcGVuQ291bnQgPSAwO1xudmFyIE1vZGFsJDEgPSBNb2RhbDtcblxudmFyIF9leGNsdWRlZCR2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0b2dnbGVcIiwgXCJ0YWdcIiwgXCJ3cmFwVGFnXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjbG9zZVwiXTtcbnZhciBwcm9wVHlwZXMkeSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkeSA9IHtcbiAgdGFnOiAnaDUnLFxuICB3cmFwVGFnOiAnZGl2JyxcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZSdcbn07XG5cbnZhciBNb2RhbEhlYWRlciA9IGZ1bmN0aW9uIE1vZGFsSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbG9zZUJ1dHRvbjtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIFdyYXBUYWcgPSBwcm9wcy53cmFwVGFnLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR2KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdtb2RhbC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChXcmFwVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdtb2RhbC10aXRsZScsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59O1xuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkeTtcbk1vZGFsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR5O1xudmFyIE1vZGFsSGVhZGVyJDEgPSBNb2RhbEhlYWRlcjtcblxudmFyIF9leGNsdWRlZCR1ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyR4ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyR4ID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgTW9kYWxCb2R5ID0gZnVuY3Rpb24gTW9kYWxCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR1KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdtb2RhbC1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Nb2RhbEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJHg7XG5Nb2RhbEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHg7XG52YXIgTW9kYWxCb2R5JDEgPSBNb2RhbEJvZHk7XG5cbnZhciBfZXhjbHVkZWQkdCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkdyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkdyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIE1vZGFsRm9vdGVyID0gZnVuY3Rpb24gTW9kYWxGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ21vZGFsLWZvb3RlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTW9kYWxGb290ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJHc7XG5Nb2RhbEZvb3Rlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdztcbnZhciBNb2RhbEZvb3RlciQxID0gTW9kYWxGb290ZXI7XG5cbnZhciBkZWZhdWx0UHJvcHMkdiA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIHBsYWNlbWVudFByZWZpeDogJ2JzLXRvb2x0aXAnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59O1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMpIHtcbiAgdmFyIHBvcHBlckNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndG9vbHRpcCcsICdzaG93JywgcHJvcHMucG9wcGVyQ2xhc3NOYW1lKTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndG9vbHRpcC1pbm5lcicsIHByb3BzLmlubmVyQ2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwUG9wb3ZlcldyYXBwZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYXJyb3dDbGFzc05hbWU6IFwidG9vbHRpcC1hcnJvd1wiLFxuICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICBpbm5lckNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHByb3BUeXBlcyRFO1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdjtcbnZhciBUb29sdGlwJDEgPSBUb29sdGlwO1xuXG52YXIgX2V4Y2x1ZGVkJHMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJzaXplXCIsIFwiYm9yZGVyZWRcIiwgXCJib3JkZXJsZXNzXCIsIFwic3RyaXBlZFwiLCBcImRhcmtcIiwgXCJob3ZlclwiLCBcInJlc3BvbnNpdmVcIiwgXCJ0YWdcIiwgXCJyZXNwb25zaXZlVGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJHYgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBib3JkZXJlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3JkZXJsZXNzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN0cmlwZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByZXNwb25zaXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICByZXNwb25zaXZlVGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdF0pXG59O1xudmFyIGRlZmF1bHRQcm9wcyR1ID0ge1xuICB0YWc6ICd0YWJsZScsXG4gIHJlc3BvbnNpdmVUYWc6ICdkaXYnXG59O1xuXG52YXIgVGFibGUgPSBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBib3JkZXJlZCA9IHByb3BzLmJvcmRlcmVkLFxuICAgICAgYm9yZGVybGVzcyA9IHByb3BzLmJvcmRlcmxlc3MsXG4gICAgICBzdHJpcGVkID0gcHJvcHMuc3RyaXBlZCxcbiAgICAgIGRhcmsgPSBwcm9wcy5kYXJrLFxuICAgICAgaG92ZXIgPSBwcm9wcy5ob3ZlcixcbiAgICAgIHJlc3BvbnNpdmUgPSBwcm9wcy5yZXNwb25zaXZlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgUmVzcG9uc2l2ZVRhZyA9IHByb3BzLnJlc3BvbnNpdmVUYWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkcyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndGFibGUnLCBzaXplID8gJ3RhYmxlLScgKyBzaXplIDogZmFsc2UsIGJvcmRlcmVkID8gJ3RhYmxlLWJvcmRlcmVkJyA6IGZhbHNlLCBib3JkZXJsZXNzID8gJ3RhYmxlLWJvcmRlcmxlc3MnIDogZmFsc2UsIHN0cmlwZWQgPyAndGFibGUtc3RyaXBlZCcgOiBmYWxzZSwgZGFyayA/ICd0YWJsZS1kYXJrJyA6IGZhbHNlLCBob3ZlciA/ICd0YWJsZS1ob3ZlcicgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHZhciB0YWJsZSA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xuXG4gIGlmIChyZXNwb25zaXZlKSB7XG4gICAgdmFyIHJlc3BvbnNpdmVDbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMocmVzcG9uc2l2ZSA9PT0gdHJ1ZSA/ICd0YWJsZS1yZXNwb25zaXZlJyA6IFwidGFibGUtcmVzcG9uc2l2ZS1cIiArIHJlc3BvbnNpdmUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChSZXNwb25zaXZlVGFnLCB7XG4gICAgICBjbGFzc05hbWU6IHJlc3BvbnNpdmVDbGFzc05hbWVcbiAgICB9LCB0YWJsZSk7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59O1xuXG5UYWJsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdjtcblRhYmxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR1O1xudmFyIFRhYmxlJDEgPSBUYWJsZTtcblxudmFyIF9leGNsdWRlZCRyID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiZmx1c2hcIiwgXCJob3Jpem9udGFsXCIsIFwibnVtYmVyZWRcIl07XG52YXIgcHJvcFR5cGVzJHUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGZsdXNoOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGhvcml6b250YWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIG51bWJlcmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJHQgPSB7XG4gIHRhZzogJ3VsJyxcbiAgaG9yaXpvbnRhbDogZmFsc2UsXG4gIG51bWJlcmVkOiBmYWxzZVxufTtcblxudmFyIGdldEhvcml6b250YWxDbGFzcyA9IGZ1bmN0aW9uIGdldEhvcml6b250YWxDbGFzcyhob3Jpem9udGFsKSB7XG4gIGlmIChob3Jpem9udGFsID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSB0cnVlIHx8IGhvcml6b250YWwgPT09IFwieHNcIikge1xuICAgIHJldHVybiBcImxpc3QtZ3JvdXAtaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgcmV0dXJuIFwibGlzdC1ncm91cC1ob3Jpem9udGFsLVwiICsgaG9yaXpvbnRhbDtcbn07XG5cbnZhciBMaXN0R3JvdXAgPSBmdW5jdGlvbiBMaXN0R3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGZsdXNoID0gcHJvcHMuZmx1c2gsXG4gICAgICBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgIG51bWJlcmVkID0gcHJvcHMubnVtYmVyZWQsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRyKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWdyb3VwJywgLy8gbGlzdC1ncm91cC1ob3Jpem9udGFsIGNhbm5vdCBjdXJyZW50bHkgYmUgbWl4ZWQgd2l0aCBsaXN0LWdyb3VwLWZsdXNoXG4gIC8vIHdlIG9ubHkgdHJ5IHRvIGFwcGx5IGhvcml6b250YWwgY2xhc3NlcyBpZiBmbHVzaCBpcyBmYWxzZVxuICBmbHVzaCA/ICdsaXN0LWdyb3VwLWZsdXNoJyA6IGdldEhvcml6b250YWxDbGFzcyhob3Jpem9udGFsKSwge1xuICAgICdsaXN0LWdyb3VwLW51bWJlcmVkJzogbnVtYmVyZWRcbiAgfSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJHU7XG5MaXN0R3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHQ7XG52YXIgTGlzdEdyb3VwJDEgPSBMaXN0R3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkcSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubGluZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyR0ID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRzID0ge1xuICB0YWc6ICdmb3JtJ1xufTtcblxudmFyIEZvcm0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdWJtaXQgPSBfdGhpcy5zdWJtaXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZvcm0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5uZXJSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYocmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uc3VibWl0ID0gZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuc3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGlubGluZSA9IF90aGlzJHByb3BzLmlubGluZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRxKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgaW5saW5lID8gJ2Zvcm0taW5saW5lJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIEZvcm07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJHQ7XG5Gb3JtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRzO1xudmFyIEZvcm0kMSA9IEZvcm07XG5cbnZhciBfZXhjbHVkZWQkcCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInZhbGlkXCIsIFwidG9vbHRpcFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdmFsaWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdG9vbHRpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyRyID0ge1xuICB0YWc6ICdkaXYnLFxuICB2YWxpZDogdW5kZWZpbmVkXG59O1xuXG52YXIgRm9ybUZlZWRiYWNrID0gZnVuY3Rpb24gRm9ybUZlZWRiYWNrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWxpZCA9IHByb3BzLnZhbGlkLFxuICAgICAgdG9vbHRpcCA9IHByb3BzLnRvb2x0aXAsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRwKTtcblxuICB2YXIgdmFsaWRNb2RlID0gdG9vbHRpcCA/ICd0b29sdGlwJyA6ICdmZWVkYmFjayc7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgdmFsaWQgPyBcInZhbGlkLVwiICsgdmFsaWRNb2RlIDogXCJpbnZhbGlkLVwiICsgdmFsaWRNb2RlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkZvcm1GZWVkYmFjay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkcztcbkZvcm1GZWVkYmFjay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcjtcbnZhciBGb3JtRmVlZGJhY2skMSA9IEZvcm1GZWVkYmFjaztcblxudmFyIF9leGNsdWRlZCRvID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwicm93XCIsIFwiZGlzYWJsZWRcIiwgXCJjaGVja1wiLCBcImlubGluZVwiLCBcImZsb2F0aW5nXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRyID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICByb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hlY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgXCJzd2l0Y2hcIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmxvYXRpbmc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkcSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIEZvcm1Hcm91cCA9IGZ1bmN0aW9uIEZvcm1Hcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgcm93ID0gcHJvcHMucm93LFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGNoZWNrID0gcHJvcHMuY2hlY2ssXG4gICAgICBpbmxpbmUgPSBwcm9wcy5pbmxpbmUsXG4gICAgICBmbG9hdGluZyA9IHByb3BzLmZsb2F0aW5nLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbyk7XG5cbiAgdmFyIGZvcm1DaGVjayA9IGNoZWNrIHx8IHByb3BzW1wic3dpdGNoXCJdO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHJvdyA/ICdyb3cnIDogZmFsc2UsIGZvcm1DaGVjayA/ICdmb3JtLWNoZWNrJyA6ICdtYi0zJywgcHJvcHNbXCJzd2l0Y2hcIl0gPyAnZm9ybS1zd2l0Y2gnIDogZmFsc2UsIGZvcm1DaGVjayAmJiBpbmxpbmUgPyAnZm9ybS1jaGVjay1pbmxpbmUnIDogZmFsc2UsIGZvcm1DaGVjayAmJiBkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiBmYWxzZSwgZmxvYXRpbmcgJiYgJ2Zvcm0tZmxvYXRpbmcnKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoVGFnID09PSAnZmllbGRzZXQnKSB7XG4gICAgYXR0cmlidXRlcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkZvcm1Hcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkcjtcbkZvcm1Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcTtcbnZhciBGb3JtR3JvdXAkMSA9IEZvcm1Hcm91cDtcblxudmFyIF9leGNsdWRlZCRuID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5saW5lXCIsIFwiY29sb3JcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHEgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGlubGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHAgPSB7XG4gIHRhZzogJ3NtYWxsJyxcbiAgY29sb3I6ICdtdXRlZCdcbn07XG5cbnZhciBGb3JtVGV4dCA9IGZ1bmN0aW9uIEZvcm1UZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBpbmxpbmUgPSBwcm9wcy5pbmxpbmUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAhaW5saW5lID8gJ2Zvcm0tdGV4dCcgOiBmYWxzZSwgY29sb3IgPyBcInRleHQtXCIgKyBjb2xvciA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkZvcm1UZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRxO1xuRm9ybVRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHA7XG52YXIgRm9ybVRleHQkMSA9IEZvcm1UZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJG0gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0eXBlXCIsIFwiYnNTaXplXCIsIFwidmFsaWRcIiwgXCJpbnZhbGlkXCIsIFwidGFnXCIsIFwiYWRkb25cIiwgXCJwbGFpbnRleHRcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkcCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgYnNTaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdmFsaWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW52YWxpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIHBsYWludGV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhZGRvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRvID0ge1xuICB0eXBlOiAndGV4dCdcbn07XG5cbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbnB1dCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZm9jdXMgPSBfdGhpcy5mb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5wdXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5uZXJSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYocmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlLFxuICAgICAgICBic1NpemUgPSBfdGhpcyRwcm9wcy5ic1NpemUsXG4gICAgICAgIHZhbGlkID0gX3RoaXMkcHJvcHMudmFsaWQsXG4gICAgICAgIGludmFsaWQgPSBfdGhpcyRwcm9wcy5pbnZhbGlkLFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGFkZG9uID0gX3RoaXMkcHJvcHMuYWRkb24sXG4gICAgICAgIHBsYWludGV4dCA9IF90aGlzJHByb3BzLnBsYWludGV4dCxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkbSk7XG5cbiAgICB2YXIgY2hlY2tJbnB1dCA9IFsnc3dpdGNoJywgJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5kZXhPZih0eXBlKSA+IC0xO1xuICAgIHZhciBpc05vdGFOdW1iZXIgPSBuZXcgUmVnRXhwKCdcXFxcRCcsICdnJyk7XG4gICAgdmFyIHRleHRhcmVhSW5wdXQgPSB0eXBlID09PSAndGV4dGFyZWEnO1xuICAgIHZhciBzZWxlY3RJbnB1dCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuICAgIHZhciByYW5nZUlucHV0ID0gdHlwZSA9PT0gJ3JhbmdlJztcbiAgICB2YXIgVGFnID0gdGFnIHx8IChzZWxlY3RJbnB1dCB8fCB0ZXh0YXJlYUlucHV0ID8gdHlwZSA6ICdpbnB1dCcpO1xuICAgIHZhciBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tY29udHJvbCc7XG5cbiAgICBpZiAocGxhaW50ZXh0KSB7XG4gICAgICBmb3JtQ29udHJvbENsYXNzID0gZm9ybUNvbnRyb2xDbGFzcyArIFwiLXBsYWludGV4dFwiO1xuICAgICAgVGFnID0gdGFnIHx8ICdpbnB1dCc7XG4gICAgfSBlbHNlIGlmIChyYW5nZUlucHV0KSB7XG4gICAgICBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tcmFuZ2UnO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0SW5wdXQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSBcImZvcm0tc2VsZWN0XCI7XG4gICAgfSBlbHNlIGlmIChjaGVja0lucHV0KSB7XG4gICAgICBpZiAoYWRkb24pIHtcbiAgICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLnNpemUgJiYgaXNOb3RhTnVtYmVyLnRlc3QoYXR0cmlidXRlcy5zaXplKSkge1xuICAgICAgd2Fybk9uY2UoJ1BsZWFzZSB1c2UgdGhlIHByb3AgXCJic1NpemVcIiBpbnN0ZWFkIG9mIHRoZSBcInNpemVcIiB0byBib290c3RyYXBcXCdzIGlucHV0IHNpemluZy4nKTtcbiAgICAgIGJzU2l6ZSA9IGF0dHJpYnV0ZXMuc2l6ZTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNpemU7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBpbnZhbGlkICYmICdpcy1pbnZhbGlkJywgdmFsaWQgJiYgJ2lzLXZhbGlkJywgYnNTaXplID8gc2VsZWN0SW5wdXQgPyBcImZvcm0tc2VsZWN0LVwiICsgYnNTaXplIDogXCJmb3JtLWNvbnRyb2wtXCIgKyBic1NpemUgOiBmYWxzZSwgZm9ybUNvbnRyb2xDbGFzcyksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoVGFnID09PSAnaW5wdXQnIHx8IHRhZyAmJiB0eXBlb2YgdGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhdHRyaWJ1dGVzLnR5cGUgPSB0eXBlID09PSAnc3dpdGNoJyA/ICdjaGVja2JveCcgOiB0eXBlO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLmNoaWxkcmVuICYmICEocGxhaW50ZXh0IHx8IHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGVvZiBUYWcgIT09ICdzdHJpbmcnIHx8IFRhZyA9PT0gJ3NlbGVjdCcpKSB7XG4gICAgICB3YXJuT25jZShcIklucHV0IHdpdGggYSB0eXBlIG9mIFxcXCJcIiArIHR5cGUgKyBcIlxcXCIgY2Fubm90IGhhdmUgY2hpbGRyZW4uIFBsZWFzZSB1c2UgXFxcInZhbHVlXFxcIi9cXFwiZGVmYXVsdFZhbHVlXFxcIiBpbnN0ZWFkLlwiKTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIFwiYXJpYS1pbnZhbGlkXCI6IGludmFsaWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIElucHV0O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzJHA7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbztcbnZhciBJbnB1dCQxID0gSW5wdXQ7XG5cbnZhciBfZXhjbHVkZWQkbCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInR5cGVcIiwgXCJzaXplXCJdO1xudmFyIHByb3BUeXBlcyRvID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRuID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgSW5wdXRHcm91cCA9IGZ1bmN0aW9uIElucHV0R3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAnLCBzaXplID8gXCJpbnB1dC1ncm91cC1cIiArIHNpemUgOiBudWxsKSwgY3NzTW9kdWxlKTtcblxuICBpZiAocHJvcHMudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5JbnB1dEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyRvO1xuSW5wdXRHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbjtcbnZhciBJbnB1dEdyb3VwJDEgPSBJbnB1dEdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkJGsgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJG4gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJG0gPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG52YXIgSW5wdXRHcm91cFRleHQgPSBmdW5jdGlvbiBJbnB1dEdyb3VwVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkayk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAtdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuSW5wdXRHcm91cFRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJG47XG5JbnB1dEdyb3VwVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbTtcbnZhciBJbnB1dEdyb3VwVGV4dCQxID0gSW5wdXRHcm91cFRleHQ7XG5cbnZhciBfZXhjbHVkZWQkaiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImhpZGRlblwiLCBcIndpZHRoc1wiLCBcInRhZ1wiLCBcImNoZWNrXCIsIFwic2l6ZVwiLCBcImZvclwiXTtcbnZhciBjb2xXaWR0aHMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHN0cmluZ09yTnVtYmVyUHJvcCA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKTtcbnZhciBjb2x1bW5Qcm9wcyA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIHNpemU6IHN0cmluZ09yTnVtYmVyUHJvcCxcbiAgb3JkZXI6IHN0cmluZ09yTnVtYmVyUHJvcCxcbiAgb2Zmc2V0OiBzdHJpbmdPck51bWJlclByb3Bcbn0pXSk7XG52YXIgcHJvcFR5cGVzJG0gPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGhpZGRlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGVjazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgXCJmb3JcIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHhzOiBjb2x1bW5Qcm9wcyxcbiAgc206IGNvbHVtblByb3BzLFxuICBtZDogY29sdW1uUHJvcHMsXG4gIGxnOiBjb2x1bW5Qcm9wcyxcbiAgeGw6IGNvbHVtblByb3BzLFxuICB4eGw6IGNvbHVtblByb3BzLFxuICB3aWR0aHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlcbn07XG52YXIgZGVmYXVsdFByb3BzJGwgPSB7XG4gIHRhZzogJ2xhYmVsJyxcbiAgd2lkdGhzOiBjb2xXaWR0aHNcbn07XG5cbnZhciBnZXRDb2x1bW5TaXplQ2xhc3MgPSBmdW5jdGlvbiBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbFNpemUpIHtcbiAgaWYgKGNvbFNpemUgPT09IHRydWUgfHwgY29sU2l6ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wnIDogXCJjb2wtXCIgKyBjb2xXaWR0aDtcbiAgfSBlbHNlIGlmIChjb2xTaXplID09PSAnYXV0bycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wtYXV0bycgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItYXV0b1wiO1xuICB9XG5cbiAgcmV0dXJuIGlzWHMgPyBcImNvbC1cIiArIGNvbFNpemUgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItXCIgKyBjb2xTaXplO1xufTtcblxudmFyIExhYmVsID0gZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGhpZGRlbiA9IHByb3BzLmhpZGRlbixcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoZWNrID0gcHJvcHMuY2hlY2ssXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGh0bWxGb3IgPSBwcm9wc1tcImZvclwiXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGopO1xuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2x1bW5Qcm9wID0gcHJvcHNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sdW1uUHJvcCAmJiBjb2x1bW5Qcm9wICE9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG4gICAgdmFyIGNvbENsYXNzO1xuXG4gICAgaWYgKGlzT2JqZWN0KGNvbHVtblByb3ApKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBjb2xTaXplSW50ZXJmaXggPSBpc1hzID8gJy0nIDogXCItXCIgKyBjb2xXaWR0aCArIFwiLVwiO1xuICAgICAgY29sQ2xhc3MgPSBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3Auc2l6ZSk7XG4gICAgICBjb2xDbGFzc2VzLnB1c2gobWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tjb2xDbGFzc10gPSBjb2x1bW5Qcm9wLnNpemUgfHwgY29sdW1uUHJvcC5zaXplID09PSAnJywgX2NsYXNzTmFtZXNbXCJvcmRlclwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vcmRlcl0gPSBjb2x1bW5Qcm9wLm9yZGVyIHx8IGNvbHVtblByb3Aub3JkZXIgPT09IDAsIF9jbGFzc05hbWVzW1wib2Zmc2V0XCIgKyBjb2xTaXplSW50ZXJmaXggKyBjb2x1bW5Qcm9wLm9mZnNldF0gPSBjb2x1bW5Qcm9wLm9mZnNldCB8fCBjb2x1bW5Qcm9wLm9mZnNldCA9PT0gMCwgX2NsYXNzTmFtZXMpKSksIGNzc01vZHVsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wKTtcbiAgICAgIGNvbENsYXNzZXMucHVzaChjb2xDbGFzcyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBoaWRkZW4gPyAndmlzdWFsbHktaGlkZGVuJyA6IGZhbHNlLCBjaGVjayA/ICdmb3JtLWNoZWNrLWxhYmVsJyA6IGZhbHNlLCBzaXplID8gXCJjb2wtZm9ybS1sYWJlbC1cIiArIHNpemUgOiBmYWxzZSwgY29sQ2xhc3NlcywgY29sQ2xhc3Nlcy5sZW5ndGggPyAnY29sLWZvcm0tbGFiZWwnIDogJ2Zvcm0tbGFiZWwnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICBodG1sRm9yOiBodG1sRm9yXG4gIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTGFiZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzJG07XG5MYWJlbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbDtcbnZhciBMYWJlbCQxID0gTGFiZWw7XG5cbnZhciBfZXhjbHVkZWQkaSA9IFtcImJvZHlcIiwgXCJib3R0b21cIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJoZWFkaW5nXCIsIFwibGVmdFwiLCBcImxpc3RcIiwgXCJtaWRkbGVcIiwgXCJvYmplY3RcIiwgXCJyaWdodFwiLCBcInRhZ1wiLCBcInRvcFwiXTtcbnZhciBwcm9wVHlwZXMkbCA9IHtcbiAgYm9keTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3R0b206IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaGVhZGluZzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsZWZ0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxpc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbWlkZGxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9iamVjdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByaWdodDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcblxudmFyIE1lZGlhID0gZnVuY3Rpb24gTWVkaWEocHJvcHMpIHtcbiAgdmFyIGJvZHkgPSBwcm9wcy5ib2R5LFxuICAgICAgYm90dG9tID0gcHJvcHMuYm90dG9tLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaGVhZGluZyA9IHByb3BzLmhlYWRpbmcsXG4gICAgICBsZWZ0ID0gcHJvcHMubGVmdCxcbiAgICAgIGxpc3QgPSBwcm9wcy5saXN0LFxuICAgICAgbWlkZGxlID0gcHJvcHMubWlkZGxlLFxuICAgICAgb2JqZWN0ID0gcHJvcHMub2JqZWN0LFxuICAgICAgcmlnaHQgPSBwcm9wcy5yaWdodCxcbiAgICAgIHRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHRvcCA9IHByb3BzLnRvcCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGkpO1xuXG4gIHZhciBkZWZhdWx0VGFnO1xuXG4gIGlmIChoZWFkaW5nKSB7XG4gICAgZGVmYXVsdFRhZyA9ICdoNCc7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5ocmVmKSB7XG4gICAgZGVmYXVsdFRhZyA9ICdhJztcbiAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzLnNyYyB8fCBvYmplY3QpIHtcbiAgICBkZWZhdWx0VGFnID0gJ2ltZyc7XG4gIH0gZWxzZSBpZiAobGlzdCkge1xuICAgIGRlZmF1bHRUYWcgPSAndWwnO1xuICB9IGVsc2Uge1xuICAgIGRlZmF1bHRUYWcgPSAnZGl2JztcbiAgfVxuXG4gIHZhciBUYWcgPSB0YWcgfHwgZGVmYXVsdFRhZztcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgJ21lZGlhLWJvZHknOiBib2R5LFxuICAgICdtZWRpYS1oZWFkaW5nJzogaGVhZGluZyxcbiAgICAnbWVkaWEtbGVmdCc6IGxlZnQsXG4gICAgJ21lZGlhLXJpZ2h0JzogcmlnaHQsXG4gICAgJ21lZGlhLXRvcCc6IHRvcCxcbiAgICAnbWVkaWEtYm90dG9tJzogYm90dG9tLFxuICAgICdtZWRpYS1taWRkbGUnOiBtaWRkbGUsXG4gICAgJ21lZGlhLW9iamVjdCc6IG9iamVjdCxcbiAgICAnbWVkaWEtbGlzdCc6IGxpc3QsXG4gICAgbWVkaWE6ICFib2R5ICYmICFoZWFkaW5nICYmICFsZWZ0ICYmICFyaWdodCAmJiAhdG9wICYmICFib3R0b20gJiYgIW1pZGRsZSAmJiAhb2JqZWN0ICYmICFsaXN0XG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTWVkaWEucHJvcFR5cGVzID0gcHJvcFR5cGVzJGw7XG52YXIgTWVkaWEkMSA9IE1lZGlhO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIEZhZGVQcm9wVHlwZXMgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKTtcbnZhciBwcm9wVHlwZXMkayA9IHtcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJhY2tkcm9wQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydzdGFydCcsICdlbmQnLCAnYm90dG9tJywgJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0J10pLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvZmZjYW52YXNUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzLFxuICBvbkNsb3NlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbk9wZW5lZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNjcm9sbGFibGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHRyYXBGb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKVxufTtcbnZhciBwcm9wc1RvT21pdCA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyRrKTtcbnZhciBkZWZhdWx0UHJvcHMkayA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiB0cnVlLFxuICBkaXJlY3Rpb246ICdzdGFydCcsXG4gIHNjcm9sbGFibGU6IGZhbHNlLFxuICByb2xlOiAnZGlhbG9nJyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB6SW5kZXg6IDEwNTAsXG4gIGZhZGU6IHRydWUsXG4gIG9uT3BlbmVkOiBub29wLFxuICBvbkNsb3NlZDogbm9vcCxcbiAgb2ZmY2FudmFzVHJhbnNpdGlvbjoge1xuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5PZmZjYW52YXNcbiAgfSxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiB7XG4gICAgbW91bnRPbkVudGVyOiB0cnVlLFxuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5GYWRlIC8vIHVzZXMgc3RhbmRhcmQgZmFkZSB0cmFuc2l0aW9uXG5cbiAgfSxcbiAgdW5tb3VudE9uQ2xvc2U6IHRydWUsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIHRyYXBGb2N1czogZmFsc2Vcbn07XG5cbnZhciBPZmZjYW52YXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoT2ZmY2FudmFzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBPZmZjYW52YXMocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIF90aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuID0gX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA9IF90aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFc2NhcGUgPSBfdGhpcy5oYW5kbGVFc2NhcGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVGFiID0gX3RoaXMuaGFuZGxlVGFiLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uT3BlbmVkID0gX3RoaXMub25PcGVuZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DbG9zZWQgPSBfdGhpcy5vbkNsb3NlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBfdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBfdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50cmFwRm9jdXMgPSBfdGhpcy50cmFwRm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2ZmY2FudmFzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgICAgb25FbnRlciA9IF90aGlzJHByb3BzLm9uRW50ZXI7XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcigpO1xuICAgIH0gLy8gdHJhcHMgZm9jdXMgaW5zaWRlIHRoZSBPZmZjYW52YXMsIGV2ZW4gaWYgdGhlIGJyb3dzZXIgYWRkcmVzcyBiYXIgaXMgZm9jdXNlZFxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBub3cgT2ZmY2FudmFzIERpYWxvZyBpcyByZW5kZXJlZCBhbmQgd2UgY2FuIHJlZmVyIHRoaXMuX2VsZW1lbnQgYW5kIHRoaXMuX2RpYWxvZ1xuXG5cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXByZXZTdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiBwcmV2UHJvcHMuekluZGV4ICE9PSB0aGlzLnByb3BzLnpJbmRleCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhpdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8udHJhcEZvY3VzID0gZnVuY3Rpb24gdHJhcEZvY3VzKGV2KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRyYXBGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkgLy9lbGVtZW50IGlzIG5vdCBhdHRhY2hlZFxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9kaWFsb2cgPT09IGV2LnRhcmdldCkgLy8gaW5pdGlhbCBmb2N1cyB3aGVuIHRoZSBPZmZjYW52YXMgaXMgb3BlbmVkXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMub2ZmY2FudmFzSW5kZXggPCBPZmZjYW52YXMub3BlbkNvdW50IC0gMSkgLy8gbGFzdCBvcGVuZWQgb2ZmY2FudmFzXG4gICAgICByZXR1cm47XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZm9jdXMgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIE9mZmNhbnZhc1xuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBldi50YXJnZXQpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgLy8gb3RoZXJ3aXNlIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgT2ZmY2FudmFzXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25PcGVuZWQgPSBmdW5jdGlvbiBvbk9wZW5lZChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMucHJvcHMub25PcGVuZWQoKTtcbiAgICAodGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLm9uRW50ZXJlZCB8fCBub29wKShub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xvc2VkID0gZnVuY3Rpb24gb25DbG9zZWQobm9kZSkge1xuICAgIHZhciB1bm1vdW50T25DbG9zZSA9IHRoaXMucHJvcHMudW5tb3VudE9uQ2xvc2U7IC8vIHNvIGFsbCBtZXRob2RzIGdldCBjYWxsZWQgYmVmb3JlIGl0IGlzIHVubW91bnRlZFxuXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlZCgpO1xuICAgICh0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24ub25FeGl0ZWQgfHwgbm9vcCkobm9kZSk7XG5cbiAgICBpZiAodW5tb3VudE9uQ2xvc2UpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKTtcblxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0eXBlb2YgdGhpcy5fZGlhbG9nLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9kaWFsb2cuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzYWJsZUNoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVFbGVtZW50cy5qb2luKCcsICcpKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNlZENoaWxkID0gZnVuY3Rpb24gZ2V0Rm9jdXNlZENoaWxkKCkge1xuICAgIHZhciBjdXJyZW50Rm9jdXM7XG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBmb2N1c2FibGVDaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEZvY3VzO1xuICB9IC8vIG5vdCBtb3VzZVVwIGJlY2F1c2Ugc2Nyb2xsYmFyIGZpcmVzIGl0LCBzaG91bGRuJ3QgY2xvc2Ugd2hlbiB1c2VyIHNjcm9sbHNcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy5fYmFja2Ryb3A7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHRydWUpIHJldHVybjtcblxuICAgICAgaWYgKGJhY2tkcm9wICYmIGUudGFyZ2V0ID09PSBiYWNrZHJvcCAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlKSB7XG4gICAgaWYgKGUud2hpY2ggIT09IDkpIHJldHVybjtcbiAgICBpZiAodGhpcy5vZmZjYW52YXNJbmRleCA8IE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKSByZXR1cm47IC8vIGxhc3Qgb3BlbmVkIG9mZmNhbnZhc1xuXG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuICAgIHZhciB0b3RhbEZvY3VzYWJsZSA9IGZvY3VzYWJsZUNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAodG90YWxGb2N1c2FibGUgPT09IDApIHJldHVybjtcbiAgICB2YXIgY3VycmVudEZvY3VzID0gdGhpcy5nZXRGb2N1c2VkQ2hpbGQoKTtcbiAgICB2YXIgZm9jdXNlZEluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxGb2N1c2FibGU7IGkgKz0gMSkge1xuICAgICAgaWYgKGZvY3VzYWJsZUNoaWxkcmVuW2ldID09PSBjdXJyZW50Rm9jdXMpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblt0b3RhbEZvY3VzYWJsZSAtIDFdLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IHRvdGFsRm9jdXNhYmxlIC0gMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BNb3VzZURvd24oZSkge1xuICAgIHRoaXMuX21vdXNlRG93bkVsZW1lbnQgPSBlLnRhcmdldDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXNjYXBlID0gZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy5jb250YWluZXIpO1xuXG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZ2V0T3JpZ2luYWxCb2R5UGFkZGluZygpO1xuICAgIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKTtcblxuICAgIGlmIChPZmZjYW52YXMub3BlbkNvdW50ID09PSAwICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgJiYgIXRoaXMucHJvcHMuc2Nyb2xsYWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIHRoaXMub2ZmY2FudmFzSW5kZXggPSBPZmZjYW52YXMub3BlbkNvdW50O1xuICAgIE9mZmNhbnZhcy5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICAgIE9mZmNhbnZhcy5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBPZmZjYW52YXMub3BlbkNvdW50IC0gMSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgodGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczIuZGlyZWN0aW9uLFxuICAgICAgICB1bm1vdW50T25DbG9zZSA9IF90aGlzJHByb3BzMi51bm1vdW50T25DbG9zZTtcblxuICAgIGlmICghIXRoaXMuX2VsZW1lbnQgJiYgKHRoaXMuc3RhdGUuaXNPcGVuIHx8ICF1bm1vdW50T25DbG9zZSkpIHtcbiAgICAgIHZhciBpc09mZmNhbnZhc0hpZGRlbiA9ICEhdGhpcy5fZWxlbWVudCAmJiAhdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXVubW91bnRPbkNsb3NlO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNPZmZjYW52YXNIaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5iYWNrZHJvcENsYXNzTmFtZSxcbiAgICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczMuY3NzTW9kdWxlLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzMy5pc09wZW4sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfdGhpcyRwcm9wczMuYmFja2Ryb3AsXG4gICAgICAgICAgcm9sZSA9IF90aGlzJHByb3BzMy5yb2xlLFxuICAgICAgICAgIGxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wczMubGFiZWxsZWRCeSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMy5zdHlsZTtcbiAgICAgIHZhciBvZmZjYW52YXNBdHRyaWJ1dGVzID0ge1xuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUVzY2FwZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZVRhYixcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnksXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICB9O1xuICAgICAgdmFyIGhhc1RyYW5zaXRpb24gPSB0aGlzLnByb3BzLmZhZGU7XG5cbiAgICAgIHZhciBvZmZjYW52YXNUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBCYWNrZHJvcCA9IGJhY2tkcm9wICYmIChoYXNUcmFuc2l0aW9uID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBiYWNrZHJvcFRyYW5zaXRpb24sIHtcbiAgICAgICAgXCJpblwiOiBpc09wZW4gJiYgISFiYWNrZHJvcCxcbiAgICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX2JhY2tkcm9wID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMtYmFja2Ryb3AnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd25cbiAgICAgIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMtYmFja2Ryb3AnLCAnc2hvdycsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93blxuICAgICAgfSkpO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIHByb3BzVG9PbWl0KTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9ydGFsJDEsIHtcbiAgICAgICAgbm9kZTogdGhpcy5fZWxlbWVudFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBvZmZjYW52YXNBdHRyaWJ1dGVzLCBvZmZjYW52YXNUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMub25PcGVuZWQsXG4gICAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ29mZmNhbnZhcycsIGNsYXNzTmFtZSwgXCJvZmZjYW52YXMtXCIgKyBkaXJlY3Rpb24pLCBjc3NNb2R1bGUpLFxuICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoYykge1xuICAgICAgICAgIF90aGlzMi5fZGlhbG9nID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaXNPcGVuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcbiAgICAgICAgfSlcbiAgICAgIH0pLCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgQmFja2Ryb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgdGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT2ZmY2FudmFzO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuT2ZmY2FudmFzLnByb3BUeXBlcyA9IHByb3BUeXBlcyRrO1xuT2ZmY2FudmFzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRrO1xuT2ZmY2FudmFzLm9wZW5Db3VudCA9IDA7XG52YXIgT2ZmY2FudmFzJDEgPSBPZmZjYW52YXM7XG5cbnZhciBfZXhjbHVkZWQkaCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkaiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkaiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIE9mZmNhbnZhc0JvZHkgPSBmdW5jdGlvbiBPZmZjYW52YXNCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRoKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdvZmZjYW52YXMtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuT2ZmY2FudmFzQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkajtcbk9mZmNhbnZhc0JvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGo7XG52YXIgT2ZmY2FudmFzQm9keSQxID0gT2ZmY2FudmFzQm9keTtcblxudmFyIF9leGNsdWRlZCRnID0gW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVwiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidG9nZ2xlXCIsIFwid3JhcFRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkaSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICB3cmFwVGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkaSA9IHtcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZScsXG4gIHRhZzogJ2g1JyxcbiAgd3JhcFRhZzogJ2Rpdidcbn07XG5cbnZhciBPZmZjYW52YXNIZWFkZXIgPSBmdW5jdGlvbiBPZmZjYW52YXNIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uO1xuXG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGcpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ29mZmNhbnZhcy1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChXcmFwVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdvZmZjYW52YXMtdGl0bGUnLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufTtcblxuT2ZmY2FudmFzSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRpO1xuT2ZmY2FudmFzSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRpO1xudmFyIE9mZmNhbnZhc0hlYWRlciQxID0gT2ZmY2FudmFzSGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJGYgPSBbXCJjbGFzc05hbWVcIiwgXCJsaXN0Q2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwic2l6ZVwiLCBcInRhZ1wiLCBcImxpc3RUYWdcIiwgXCJhcmlhLWxhYmVsXCJdO1xudmFyIHByb3BUeXBlcyRoID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyRoID0ge1xuICB0YWc6ICduYXYnLFxuICBsaXN0VGFnOiAndWwnLFxuICAnYXJpYS1sYWJlbCc6ICdwYWdpbmF0aW9uJ1xufTtcblxudmFyIFBhZ2luYXRpb24gPSBmdW5jdGlvbiBQYWdpbmF0aW9uKHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgbGlzdENsYXNzTmFtZSA9IHByb3BzLmxpc3RDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIExpc3RUYWcgPSBwcm9wcy5saXN0VGFnLFxuICAgICAgbGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGxpc3RDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGxpc3RDbGFzc05hbWUsICdwYWdpbmF0aW9uJywgKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW1wicGFnaW5hdGlvbi1cIiArIHNpemVdID0gISFzaXplLCBfY2xhc3NOYW1lcykpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogbGFiZWxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KExpc3RUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3Nlc1xuICB9KSkpO1xufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkaDtcblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGg7XG52YXIgUGFnaW5hdGlvbiQxID0gUGFnaW5hdGlvbjtcblxudmFyIF9leGNsdWRlZCRlID0gW1wiYWN0aXZlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGlzYWJsZWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGcgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRnID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbnZhciBQYWdpbmF0aW9uSXRlbSA9IGZ1bmN0aW9uIFBhZ2luYXRpb25JdGVtKHByb3BzKSB7XG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncGFnZS1pdGVtJywge1xuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblBhZ2luYXRpb25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyRnO1xuUGFnaW5hdGlvbkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGc7XG52YXIgUGFnaW5hdGlvbkl0ZW0kMSA9IFBhZ2luYXRpb25JdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJGQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJuZXh0XCIsIFwicHJldmlvdXNcIiwgXCJmaXJzdFwiLCBcImxhc3RcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGYgPSB7XG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmlyc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGFzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRmID0ge1xuICB0YWc6ICdhJ1xufTtcblxudmFyIFBhZ2luYXRpb25MaW5rID0gZnVuY3Rpb24gUGFnaW5hdGlvbkxpbmsocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIG5leHQgPSBwcm9wcy5uZXh0LFxuICAgICAgcHJldmlvdXMgPSBwcm9wcy5wcmV2aW91cyxcbiAgICAgIGZpcnN0ID0gcHJvcHMuZmlyc3QsXG4gICAgICBsYXN0ID0gcHJvcHMubGFzdCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BhZ2UtbGluaycpLCBjc3NNb2R1bGUpO1xuICB2YXIgZGVmYXVsdEFyaWFMYWJlbDtcblxuICBpZiAocHJldmlvdXMpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ1ByZXZpb3VzJztcbiAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdOZXh0JztcbiAgfSBlbHNlIGlmIChmaXJzdCkge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnRmlyc3QnO1xuICB9IGVsc2UgaWYgKGxhc3QpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ0xhc3QnO1xuICB9XG5cbiAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10gfHwgZGVmYXVsdEFyaWFMYWJlbDtcbiAgdmFyIGRlZmF1bHRDYXJldDtcblxuICBpZiAocHJldmlvdXMpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxcdTIwMzlcIjtcbiAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHUyMDNBXCI7XG4gIH0gZWxzZSBpZiAoZmlyc3QpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxceEFCXCI7XG4gIH0gZWxzZSBpZiAobGFzdCkge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx4QkJcIjtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gIGlmIChjaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICBpZiAoIWF0dHJpYnV0ZXMuaHJlZiAmJiBUYWcgPT09ICdhJykge1xuICAgIFRhZyA9ICdidXR0b24nO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzIHx8IG5leHQgfHwgZmlyc3QgfHwgbGFzdCkge1xuICAgIGNoaWxkcmVuID0gWy8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGtleTogXCJjYXJldFwiXG4gICAgfSwgY2hpbGRyZW4gfHwgZGVmYXVsdENhcmV0KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwidmlzdWFsbHktaGlkZGVuXCIsXG4gICAgICBrZXk6IFwiYXJpYUxhYmVsXCJcbiAgICB9LCBhcmlhTGFiZWwpXTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG5QYWdpbmF0aW9uTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZjtcblBhZ2luYXRpb25MaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRmO1xudmFyIFBhZ2luYXRpb25MaW5rJDEgPSBQYWdpbmF0aW9uTGluaztcblxuLyoqXG4gKiBUYWJDb250ZXh0XG4gKiB7XG4gKiAgYWN0aXZlVGFiSWQ6IFByb3BUeXBlcy5hbnlcbiAqIH1cbiAqL1xuXG52YXIgVGFiQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIHByb3BUeXBlcyRlID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmVUYWI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRlID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgVGFiQ29udGVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUYWJDb250ZW50LCBfQ29tcG9uZW50KTtcblxuICBUYWJDb250ZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVUYWI6IG5leHRQcm9wcy5hY3RpdmVUYWJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gVGFiQ29udGVudChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlVGFiOiBfdGhpcy5wcm9wcy5hY3RpdmVUYWJcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUYWJDb250ZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWc7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcyRlKSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3RhYi1jb250ZW50JywgY2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhYkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGFjdGl2ZVRhYklkOiB0aGlzLnN0YXRlLmFjdGl2ZVRhYlxuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpO1xuICB9O1xuXG4gIHJldHVybiBUYWJDb250ZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVGFiQ29udGVudCQxID0gVGFiQ29udGVudDtcblRhYkNvbnRlbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzJGU7XG5UYWJDb250ZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRlO1xuXG52YXIgX2V4Y2x1ZGVkJGMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWJJZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkZCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdGFiSWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59O1xudmFyIGRlZmF1bHRQcm9wcyRkID0ge1xuICB0YWc6ICdkaXYnXG59O1xuZnVuY3Rpb24gVGFiUGFuZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdGFiSWQgPSBwcm9wcy50YWJJZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGMpO1xuXG4gIHZhciBnZXRDbGFzc2VzID0gZnVuY3Rpb24gZ2V0Q2xhc3NlcyhhY3RpdmVUYWJJZCkge1xuICAgIHJldHVybiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3RhYi1wYW5lJywgY2xhc3NOYW1lLCB7XG4gICAgICBhY3RpdmU6IHRhYklkID09PSBhY3RpdmVUYWJJZFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFiQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgYWN0aXZlVGFiSWQgPSBfcmVmLmFjdGl2ZVRhYklkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc2VzKGFjdGl2ZVRhYklkKVxuICAgIH0pKTtcbiAgfSk7XG59XG5UYWJQYW5lLnByb3BUeXBlcyA9IHByb3BUeXBlcyRkO1xuVGFiUGFuZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZDtcblxudmFyIF9leGNsdWRlZCRiID0gW1wiY2xhc3NOYW1lXCIsIFwiY2xvc2VDbGFzc05hbWVcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImNvbG9yXCIsIFwiaXNPcGVuXCIsIFwidG9nZ2xlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0cmFuc2l0aW9uXCIsIFwiZmFkZVwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRjID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbG9zZUNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlQXJpYUxhYmVsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYyA9IHtcbiAgY29sb3I6ICdzdWNjZXNzJyxcbiAgaXNPcGVuOiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJyxcbiAgZmFkZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xvc2VDbGFzc05hbWUgPSBwcm9wcy5jbG9zZUNsYXNzTmFtZSxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaXNPcGVuID0gcHJvcHMuaXNPcGVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgZmFkZSA9IHByb3BzLmZhZGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWxlcnQnLCBcImFsZXJ0LVwiICsgY29sb3IsIHtcbiAgICAnYWxlcnQtZGlzbWlzc2libGUnOiB0b2dnbGVcbiAgfSksIGNzc01vZHVsZSk7XG4gIHZhciBjbG9zZUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2J0bi1jbG9zZScsIGNsb3NlQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcblxuICB2YXIgYWxlcnRUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgYmFzZUNsYXNzOiBmYWRlID8gdHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICB0aW1lb3V0OiBmYWRlID8gdHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICB9KTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBhbGVydFRyYW5zaXRpb24sIHtcbiAgICB0YWc6IFRhZyxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJpblwiOiBpc09wZW4sXG4gICAgcm9sZTogXCJhbGVydFwiLFxuICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICB9KSwgdG9nZ2xlID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogY2xvc2VDbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbCxcbiAgICBvbkNsaWNrOiB0b2dnbGVcbiAgfSkgOiBudWxsLCBjaGlsZHJlbik7XG59XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRjO1xuQWxlcnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGM7XG5cbnZhciBfZXhjbHVkZWQkYSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlzT3BlblwiLCBcImNoaWxkcmVuXCIsIFwidHJhbnNpdGlvblwiLCBcImZhZGVcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkYiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYiA9IHtcbiAgaXNPcGVuOiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpc09wZW4gPSBwcm9wcy5pc09wZW4sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBmYWRlID0gcHJvcHMuZmFkZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRhKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdCcpLCBjc3NNb2R1bGUpO1xuXG4gIHZhciB0b2FzdFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0cmFuc2l0aW9uKSwge30sIHtcbiAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgIHRpbWVvdXQ6IGZhZGUgPyB0cmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gIH0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHRvYXN0VHJhbnNpdGlvbiwge1xuICAgIHRhZzogVGFnLFxuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImluXCI6IGlzT3BlbixcbiAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gIH0pLCBjaGlsZHJlbik7XG59XG5cblRvYXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRiO1xuVG9hc3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGI7XG5cbnZhciBfZXhjbHVkZWQkOSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubmVyUmVmXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRhID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJGEgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBUb2FzdEJvZHkgPSBmdW5jdGlvbiBUb2FzdEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdC1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cblRvYXN0Qm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkYTtcblRvYXN0Qm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkYTtcbnZhciBUb2FzdEJvZHkkMSA9IFRvYXN0Qm9keTtcblxudmFyIF9leGNsdWRlZCQ4ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0b2dnbGVcIiwgXCJ0YWdcIiwgXCJ3cmFwVGFnXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjbG9zZVwiLCBcInRhZ0NsYXNzTmFtZVwiLCBcImljb25cIl07XG52YXIgcHJvcFR5cGVzJDkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGljb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXSksXG4gIHdyYXBUYWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGFyQ29kZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBjbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDkgPSB7XG4gIHRhZzogJ3N0cm9uZycsXG4gIHdyYXBUYWc6ICdkaXYnLFxuICB0YWdDbGFzc05hbWU6ICdtZS1hdXRvJyxcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZSdcbn07XG5cbnZhciBUb2FzdEhlYWRlciA9IGZ1bmN0aW9uIFRvYXN0SGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbG9zZUJ1dHRvbjtcbiAgdmFyIGljb247XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgdGFnQ2xhc3NOYW1lID0gcHJvcHMudGFnQ2xhc3NOYW1lLFxuICAgICAgaWNvblByb3AgPSBwcm9wcy5pY29uLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkOCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndG9hc3QtaGVhZGVyJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKCFjbG9zZSAmJiB0b2dnbGUpIHtcbiAgICBjbG9zZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ2J0bi1jbG9zZScsIGNzc01vZHVsZSksXG4gICAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaWNvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpY29uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKFwicm91bmRlZCB0ZXh0LVwiICsgaWNvblByb3ApLFxuICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgcm9sZTogXCJpbWdcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9KSk7XG4gIH0gZWxzZSBpZiAoaWNvblByb3ApIHtcbiAgICBpY29uID0gaWNvblByb3A7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFdyYXBUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBpY29uLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0odGFnQ2xhc3NOYW1lLCB7XG4gICAgICBcIm1zLTJcIjogaWNvbiAhPSBudWxsXG4gICAgfSksIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59O1xuXG5Ub2FzdEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkOTtcblRvYXN0SGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ5O1xudmFyIFRvYXN0SGVhZGVyJDEgPSBUb2FzdEhlYWRlcjtcblxudmFyIF9leGNsdWRlZCQ3ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiYWN0aXZlXCIsIFwiZGlzYWJsZWRcIiwgXCJhY3Rpb25cIiwgXCJjb2xvclwiXTtcbnZhciBwcm9wVHlwZXMkOCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDggPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIGhhbmRsZURpc2FibGVkT25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZURpc2FibGVkT25DbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5cbnZhciBMaXN0R3JvdXBJdGVtID0gZnVuY3Rpb24gTGlzdEdyb3VwSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IGZhbHNlLCBhY3Rpb24gPyAnbGlzdC1ncm91cC1pdGVtLWFjdGlvbicgOiBmYWxzZSwgY29sb3IgPyBcImxpc3QtZ3JvdXAtaXRlbS1cIiArIGNvbG9yIDogZmFsc2UsICdsaXN0LWdyb3VwLWl0ZW0nKSwgY3NzTW9kdWxlKTsgLy8gUHJldmVudCBjbGljayBldmVudCB3aGVuIGRpc2FibGVkLlxuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGF0dHJpYnV0ZXMub25DbGljayA9IGhhbmRsZURpc2FibGVkT25DbGljaztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXBJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ4O1xuTGlzdEdyb3VwSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkODtcbnZhciBMaXN0R3JvdXBJdGVtJDEgPSBMaXN0R3JvdXBJdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJDYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDcgPSB7XG4gIHRhZzogJ2g1J1xufTtcblxudmFyIExpc3RHcm91cEl0ZW1IZWFkaW5nID0gZnVuY3Rpb24gTGlzdEdyb3VwSXRlbUhlYWRpbmcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXBJdGVtSGVhZGluZy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNztcbkxpc3RHcm91cEl0ZW1IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ3O1xudmFyIExpc3RHcm91cEl0ZW1IZWFkaW5nJDEgPSBMaXN0R3JvdXBJdGVtSGVhZGluZztcblxudmFyIF9leGNsdWRlZCQ1ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQ2ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQ2ID0ge1xuICB0YWc6ICdwJ1xufTtcblxudmFyIExpc3RHcm91cEl0ZW1UZXh0ID0gZnVuY3Rpb24gTGlzdEdyb3VwSXRlbVRleHQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDUpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAtaXRlbS10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXBJdGVtVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNjtcbkxpc3RHcm91cEl0ZW1UZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ2O1xudmFyIExpc3RHcm91cEl0ZW1UZXh0JDEgPSBMaXN0R3JvdXBJdGVtVGV4dDtcblxudmFyIF9leGNsdWRlZCQ0ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidHlwZVwiXTtcbnZhciBwcm9wVHlwZXMkNSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDUgPSB7XG4gIHRhZzogJ3VsJ1xufTtcbnZhciBMaXN0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ0KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHR5cGUgPyBcImxpc3QtXCIgKyB0eXBlIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5MaXN0Lm5hbWUgPSAnTGlzdCc7XG5MaXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQ1O1xuTGlzdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNTtcbnZhciBMaXN0JDEgPSBMaXN0O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDQgPSB7XG4gIHRhZzogJ2xpJ1xufTtcbnZhciBMaXN0SW5saW5lSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtaW5saW5lLWl0ZW0nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuTGlzdElubGluZUl0ZW0ubmFtZSA9ICdMaXN0SW5saW5lSXRlbSc7XG5MaXN0SW5saW5lSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNDtcbkxpc3RJbmxpbmVJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ0O1xudmFyIExpc3RJbmxpbmVJdGVtJDEgPSBMaXN0SW5saW5lSXRlbTtcblxudmFyIFVuY29udHJvbGxlZEFsZXJ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZEFsZXJ0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRBbGVydChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiB0cnVlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZEFsZXJ0LnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWxlcnQsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgdGhpcy5wcm9wcykpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRBbGVydDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIFVuY29udHJvbGxlZEFsZXJ0JDEgPSBVbmNvbnRyb2xsZWRBbGVydDtcblxudmFyIG9taXRLZXlzJDMgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b25Ecm9wZG93biQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkMykpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bi5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIEJ1dHRvbkRyb3Bkb3duJDEucHJvcFR5cGVzKTtcblxudmFyIG9taXRLZXlzJDIgPSBbJ3RvZ2dsZUV2ZW50cycsICdkZWZhdWx0T3BlbiddO1xudmFyIHByb3BUeXBlcyQzID0ge1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b2dnbGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0b2dnbGVFdmVudHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZylcbn07XG52YXIgZGVmYXVsdFByb3BzJDMgPSB7XG4gIHRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50c1xufTtcblxudmFyIFVuY29udHJvbGxlZENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENvbGxhcHNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDb2xsYXBzZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnRvZ2dsZXJzID0gbnVsbDtcbiAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRvZ2dsZXJzID0gZmluZERPTUVsZW1lbnRzKHRoaXMucHJvcHMudG9nZ2xlcik7XG5cbiAgICBpZiAodGhpcy50b2dnbGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKHRoaXMudG9nZ2xlcnMsIHRoaXMudG9nZ2xlLCB0aGlzLnByb3BzLnRvZ2dsZUV2ZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRvZ2dsZXJzLmxlbmd0aCAmJiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpc09wZW4gPSBfcmVmLmlzT3BlbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogIWlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENvbGxhcHNlJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDIpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENvbGxhcHNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDb2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMztcblVuY29udHJvbGxlZENvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQzO1xudmFyIFVuY29udHJvbGxlZENvbGxhcHNlJDEgPSBVbmNvbnRyb2xsZWRDb2xsYXBzZTtcblxudmFyIG9taXRLZXlzJDEgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWREcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWREcm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGlzT3BlbiA9ICF0aGlzLnN0YXRlLmlzT3BlbjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogaXNPcGVuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzMi5wcm9wcy5vblRvZ2dsZSkge1xuICAgICAgICBfdGhpczIucHJvcHMub25Ub2dnbGUoZSwgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDEpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZERyb3Bkb3duO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkRHJvcGRvd24ucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvblRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59LCBEcm9wZG93biQxLnByb3BUeXBlcyk7XG5cbnZhciBvbWl0S2V5cyA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZFRvb2x0aXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkVG9vbHRpcCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkVG9vbHRpcChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRUb29sdGlwLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZFRvb2x0aXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRUb29sdGlwLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgVG9vbHRpcCQxLnByb3BUeXBlcyk7XG5cbnZhciBfZXhjbHVkZWQkMiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInR5cGVcIiwgXCJzaXplXCIsIFwiY29sb3JcIiwgXCJjaGlsZHJlblwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkMiA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgdHlwZTogJ2JvcmRlcicsXG4gIGNoaWxkcmVuOiAnTG9hZGluZy4uLidcbn07XG5cbnZhciBTcGlubmVyID0gZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBzaXplID8gXCJzcGlubmVyLVwiICsgdHlwZSArIFwiLVwiICsgc2l6ZSA6IGZhbHNlLCBcInNwaW5uZXItXCIgKyB0eXBlLCBjb2xvciA/IFwidGV4dC1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwic3RhdHVzXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ3Zpc3VhbGx5LWhpZGRlbicsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDI7XG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQyO1xudmFyIFNwaW5uZXIkMSA9IFNwaW5uZXI7XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIiwgXCJhbmltYXRpb25cIiwgXCJzaXplXCIsIFwid2lkdGhzXCJdO1xuXG52YXIgcHJvcFR5cGVzJDEgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQ29sJDEucHJvcFR5cGVzKSwge30sIHtcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhbmltYXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydnbG93JywgJ3dhdmUnXSksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2xnJywgJ3NtJywgJ3hzJ10pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyQxID0ge1xuICB0YWc6ICdzcGFuJ1xufTtcblxudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxKTtcblxuICB2YXIgX2dldENvbHVtbkNsYXNzZXMgPSBnZXRDb2x1bW5DbGFzc2VzKGF0dHJpYnV0ZXMsIGNzc01vZHVsZSwgd2lkdGhzKSxcbiAgICAgIG1vZGlmaWVkQXR0cmlidXRlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmF0dHJpYnV0ZXMsXG4gICAgICBjb2xDbGFzc2VzID0gX2dldENvbHVtbkNsYXNzZXMuY29sQ2xhc3NlcztcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNvbENsYXNzZXMsICdwbGFjZWhvbGRlcicgKyAoYW5pbWF0aW9uID8gJy0nICsgYW5pbWF0aW9uIDogJycpLCBzaXplID8gJ3BsYWNlaG9sZGVyLScgKyBzaXplIDogZmFsc2UsIGNvbG9yID8gJ2JnLScgKyBjb2xvciA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBtb2RpZmllZEF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTtcblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxO1xudmFyIFBsYWNlaG9sZGVyJDEgPSBQbGFjZWhvbGRlcjtcblxudmFyIF9leGNsdWRlZCA9IFtcImNzc01vZHVsZVwiLCBcImNsYXNzTmFtZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMgPSB7XG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG91dGxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIHRhZzogQnV0dG9uJDFcbn07XG5cbnZhciBQbGFjZWhvbGRlckJ1dHRvbiA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyQnV0dG9uKHByb3BzKSB7XG4gIHZhciBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF9nZXRDb2x1bW5DbGFzc2VzID0gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKFwicGxhY2Vob2xkZXJcIiwgY2xhc3NOYW1lLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b24kMSwgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9KSk7XG59O1xuXG5QbGFjZWhvbGRlckJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5QbGFjZWhvbGRlckJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgUGxhY2Vob2xkZXJCdXR0b24kMSA9IFBsYWNlaG9sZGVyQnV0dG9uO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gIHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgIGRldGFpbDogbnVsbFxuICAgIH07XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcblxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgT2JqZWN0LnZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gIHZhciB2YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhPKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIE9ba2V5XTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QudmFsdWVzID0gdmFsdWVzO1xufSkoKTtcblxudmFyIHBvbHlmaWxsID0ge1xuICBfX3Byb3RvX186IG51bGxcbn07XG5cbmV4cG9ydHMuQWNjb3JkaW9uID0gQWNjb3JkaW9uJDE7XG5leHBvcnRzLkFjY29yZGlvbkJvZHkgPSBBY2NvcmRpb25JdGVtJDE7XG5leHBvcnRzLkFjY29yZGlvbkNvbnRleHQgPSBBY2NvcmRpb25Db250ZXh0O1xuZXhwb3J0cy5BY2NvcmRpb25IZWFkZXIgPSBBY2NvcmRpb25IZWFkZXIkMTtcbmV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IEFjY29yZGlvbkl0ZW0kMztcbmV4cG9ydHMuQWxlcnQgPSBBbGVydDtcbmV4cG9ydHMuQmFkZ2UgPSBCYWRnZSQxO1xuZXhwb3J0cy5CcmVhZGNydW1iID0gQnJlYWRjcnVtYiQxO1xuZXhwb3J0cy5CcmVhZGNydW1iSXRlbSA9IEJyZWFkY3J1bWJJdGVtJDE7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbiQxO1xuZXhwb3J0cy5CdXR0b25Ecm9wZG93biA9IEJ1dHRvbkRyb3Bkb3duJDE7XG5leHBvcnRzLkJ1dHRvbkdyb3VwID0gQnV0dG9uR3JvdXAkMTtcbmV4cG9ydHMuQnV0dG9uVG9nZ2xlID0gQnV0dG9uVG9nZ2xlJDE7XG5leHBvcnRzLkJ1dHRvblRvb2xiYXIgPSBCdXR0b25Ub29sYmFyJDE7XG5leHBvcnRzLkNhcmQgPSBDYXJkJDE7XG5leHBvcnRzLkNhcmRCb2R5ID0gQ2FyZEJvZHkkMTtcbmV4cG9ydHMuQ2FyZENvbHVtbnMgPSBDYXJkQ29sdW1ucyQxO1xuZXhwb3J0cy5DYXJkRGVjayA9IENhcmREZWNrJDE7XG5leHBvcnRzLkNhcmRGb290ZXIgPSBDYXJkRm9vdGVyJDE7XG5leHBvcnRzLkNhcmRHcm91cCA9IENhcmRHcm91cCQxO1xuZXhwb3J0cy5DYXJkSGVhZGVyID0gQ2FyZEhlYWRlciQxO1xuZXhwb3J0cy5DYXJkSW1nID0gQ2FyZEltZyQxO1xuZXhwb3J0cy5DYXJkSW1nT3ZlcmxheSA9IENhcmRJbWdPdmVybGF5JDE7XG5leHBvcnRzLkNhcmRMaW5rID0gQ2FyZExpbmskMTtcbmV4cG9ydHMuQ2FyZFN1YnRpdGxlID0gQ2FyZFN1YnRpdGxlJDE7XG5leHBvcnRzLkNhcmRUZXh0ID0gQ2FyZFRleHQkMTtcbmV4cG9ydHMuQ2FyZFRpdGxlID0gQ2FyZFRpdGxlJDE7XG5leHBvcnRzLkNhcm91c2VsID0gQ2Fyb3VzZWwkMTtcbmV4cG9ydHMuQ2Fyb3VzZWxDYXB0aW9uID0gQ2Fyb3VzZWxDYXB0aW9uJDE7XG5leHBvcnRzLkNhcm91c2VsQ29udHJvbCA9IENhcm91c2VsQ29udHJvbCQxO1xuZXhwb3J0cy5DYXJvdXNlbEluZGljYXRvcnMgPSBDYXJvdXNlbEluZGljYXRvcnMkMTtcbmV4cG9ydHMuQ2Fyb3VzZWxJdGVtID0gQ2Fyb3VzZWxJdGVtJDE7XG5leHBvcnRzLkNvbCA9IENvbCQxO1xuZXhwb3J0cy5Db2xsYXBzZSA9IENvbGxhcHNlJDE7XG5leHBvcnRzLkNvbnRhaW5lciA9IENvbnRhaW5lciQxO1xuZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duJDE7XG5leHBvcnRzLkRyb3Bkb3duQ29udGV4dCA9IERyb3Bkb3duQ29udGV4dDtcbmV4cG9ydHMuRHJvcGRvd25JdGVtID0gRHJvcGRvd25JdGVtJDE7XG5leHBvcnRzLkRyb3Bkb3duTWVudSA9IERyb3Bkb3duTWVudSQxO1xuZXhwb3J0cy5Ecm9wZG93blRvZ2dsZSA9IERyb3Bkb3duVG9nZ2xlJDE7XG5leHBvcnRzLkZhZGUgPSBGYWRlO1xuZXhwb3J0cy5Gb3JtID0gRm9ybSQxO1xuZXhwb3J0cy5Gb3JtRmVlZGJhY2sgPSBGb3JtRmVlZGJhY2skMTtcbmV4cG9ydHMuRm9ybUdyb3VwID0gRm9ybUdyb3VwJDE7XG5leHBvcnRzLkZvcm1UZXh0ID0gRm9ybVRleHQkMTtcbmV4cG9ydHMuSW5wdXQgPSBJbnB1dCQxO1xuZXhwb3J0cy5JbnB1dEdyb3VwID0gSW5wdXRHcm91cCQxO1xuZXhwb3J0cy5JbnB1dEdyb3VwVGV4dCA9IElucHV0R3JvdXBUZXh0JDE7XG5leHBvcnRzLkxhYmVsID0gTGFiZWwkMTtcbmV4cG9ydHMuTGlzdCA9IExpc3QkMTtcbmV4cG9ydHMuTGlzdEdyb3VwID0gTGlzdEdyb3VwJDE7XG5leHBvcnRzLkxpc3RHcm91cEl0ZW0gPSBMaXN0R3JvdXBJdGVtJDE7XG5leHBvcnRzLkxpc3RHcm91cEl0ZW1IZWFkaW5nID0gTGlzdEdyb3VwSXRlbUhlYWRpbmckMTtcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbVRleHQgPSBMaXN0R3JvdXBJdGVtVGV4dCQxO1xuZXhwb3J0cy5MaXN0SW5saW5lSXRlbSA9IExpc3RJbmxpbmVJdGVtJDE7XG5leHBvcnRzLk1lZGlhID0gTWVkaWEkMTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbCQxO1xuZXhwb3J0cy5Nb2RhbEJvZHkgPSBNb2RhbEJvZHkkMTtcbmV4cG9ydHMuTW9kYWxGb290ZXIgPSBNb2RhbEZvb3RlciQxO1xuZXhwb3J0cy5Nb2RhbEhlYWRlciA9IE1vZGFsSGVhZGVyJDE7XG5leHBvcnRzLk5hdiA9IE5hdiQxO1xuZXhwb3J0cy5OYXZJdGVtID0gTmF2SXRlbSQxO1xuZXhwb3J0cy5OYXZMaW5rID0gTmF2TGluayQxO1xuZXhwb3J0cy5OYXZiYXIgPSBOYXZiYXIkMTtcbmV4cG9ydHMuTmF2YmFyQnJhbmQgPSBOYXZiYXJCcmFuZCQxO1xuZXhwb3J0cy5OYXZiYXJUZXh0ID0gTmF2YmFyVGV4dCQxO1xuZXhwb3J0cy5OYXZiYXJUb2dnbGVyID0gTmF2YmFyVG9nZ2xlciQxO1xuZXhwb3J0cy5PZmZjYW52YXMgPSBPZmZjYW52YXMkMTtcbmV4cG9ydHMuT2ZmY2FudmFzQm9keSA9IE9mZmNhbnZhc0JvZHkkMTtcbmV4cG9ydHMuT2ZmY2FudmFzSGVhZGVyID0gT2ZmY2FudmFzSGVhZGVyJDE7XG5leHBvcnRzLlBhZ2luYXRpb24gPSBQYWdpbmF0aW9uJDE7XG5leHBvcnRzLlBhZ2luYXRpb25JdGVtID0gUGFnaW5hdGlvbkl0ZW0kMTtcbmV4cG9ydHMuUGFnaW5hdGlvbkxpbmsgPSBQYWdpbmF0aW9uTGluayQxO1xuZXhwb3J0cy5QbGFjZWhvbGRlciA9IFBsYWNlaG9sZGVyJDE7XG5leHBvcnRzLlBsYWNlaG9sZGVyQnV0dG9uID0gUGxhY2Vob2xkZXJCdXR0b24kMTtcbmV4cG9ydHMuUG9seWZpbGwgPSBwb2x5ZmlsbDtcbmV4cG9ydHMuUG9wb3ZlciA9IFBvcG92ZXIkMTtcbmV4cG9ydHMuUG9wb3ZlckJvZHkgPSBQb3BvdmVyQm9keSQxO1xuZXhwb3J0cy5Qb3BvdmVySGVhZGVyID0gUG9wb3ZlckhlYWRlciQxO1xuZXhwb3J0cy5Qb3BwZXJDb250ZW50ID0gUG9wcGVyQ29udGVudCQxO1xuZXhwb3J0cy5Qb3BwZXJUYXJnZXRIZWxwZXIgPSBQb3BwZXJUYXJnZXRIZWxwZXIkMTtcbmV4cG9ydHMuUHJvZ3Jlc3MgPSBQcm9ncmVzcyQxO1xuZXhwb3J0cy5Sb3cgPSBSb3ckMTtcbmV4cG9ydHMuU3Bpbm5lciA9IFNwaW5uZXIkMTtcbmV4cG9ydHMuVGFiQ29udGVudCA9IFRhYkNvbnRlbnQkMTtcbmV4cG9ydHMuVGFiUGFuZSA9IFRhYlBhbmU7XG5leHBvcnRzLlRhYmxlID0gVGFibGUkMTtcbmV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbmV4cG9ydHMuVG9hc3RCb2R5ID0gVG9hc3RCb2R5JDE7XG5leHBvcnRzLlRvYXN0SGVhZGVyID0gVG9hc3RIZWFkZXIkMTtcbmV4cG9ydHMuVG9vbHRpcCA9IFRvb2x0aXAkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQWNjb3JkaW9uID0gVW5jb250cm9sbGVkQWNjb3JkaW9uJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZEFsZXJ0ID0gVW5jb250cm9sbGVkQWxlcnQkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24gPSBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bjtcbmV4cG9ydHMuVW5jb250cm9sbGVkQ2Fyb3VzZWwgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbCQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRDb2xsYXBzZSA9IFVuY29udHJvbGxlZENvbGxhcHNlJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZERyb3Bkb3duID0gVW5jb250cm9sbGVkRHJvcGRvd247XG5leHBvcnRzLlVuY29udHJvbGxlZFBvcG92ZXIgPSBVbmNvbnRyb2xsZWRQb3BvdmVyO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRUb29sdGlwID0gVW5jb250cm9sbGVkVG9vbHRpcDtcbmV4cG9ydHMuVXRpbCA9IHV0aWxzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RzdHJhcC5janMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEluZGV4IChwcm9wcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3VzZXJzLnN2Z1wiIGFsdD0ndXNlcnMnIHN0eWxlPXt7IGhlaWdodDogNTMsIHdpZHRoOiAzNiAsIGRpc3BsYXk6IFwiaW5saW5lXCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VXN1w6FyaW9zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2FjY2Vzc1Byb2ZpbGUuc3ZnXCIgYWx0PSdhY2Nlc3MtcHJvZmlsZScgc3R5bGU9e3sgaGVpZ2h0OiA1Mywgd2lkdGg6IDM2ICwgZGlzcGxheTogXCJpbmxpbmVcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2Nlc3NQcm9maWxlXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UGVyZmlsIGRlIEFjZXNzbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9hbmltZS5zdmdcIiBhbHQ9J2FjY2Vzcy1wcm9maWxlJyBzdHlsZT17eyBoZWlnaHQ6IDUzLCB3aWR0aDogMzYgLCBkaXNwbGF5OiBcImlubGluZVwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BbmltZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoSW5kZXgpIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==