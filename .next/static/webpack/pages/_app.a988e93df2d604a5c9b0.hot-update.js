webpackHotUpdate_N_E("pages/_app",{

/***/ "./services/LoginDataService.jsx":
/*!***************************************!*\
  !*** ./services/LoginDataService.jsx ***!
  \***************************************/
/*! exports provided: LoginDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataService", function() { return LoginDataService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();




var baseUrl = "http://localhost:8081";
var LoginDataService = {
  logIn: logIn,
  logOut: logOut,
  isLogged: isLogged
};

function logIn(username, password) {
  var data = {
    username: username,
    password: password
  };

  try {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/auth/signin', data, {});
  } catch (error) {
    return error.Promise;
  }
}

function logOut() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  localStorage.removeItem('accessToken');
  router.push('/');
}

_s(logOut, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

function isLogged() {
  if (localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) {
    return true;
  }

  return false;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsImxvZ091dCIsImlzTG9nZ2VkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJlcnJvciIsIlByb21pc2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldEl0ZW0iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sMEJBQWI7QUFFTyxJQUFNQyxnQkFBZ0IsR0FBRztBQUM1QkMsT0FBSyxFQUFMQSxLQUQ0QjtBQUU1QkMsUUFBTSxFQUFOQSxNQUY0QjtBQUc1QkMsVUFBUSxFQUFSQTtBQUg0QixDQUF6Qjs7QUFNTCxTQUFTRixLQUFULENBQWVHLFFBQWYsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQy9CLE1BQUlDLElBQUksR0FBRztBQUFDRixZQUFRLEVBQVJBLFFBQUQ7QUFBV0MsWUFBUSxFQUFSQTtBQUFYLEdBQVg7O0FBQ0YsTUFBSTtBQUNGLFdBQU9FLDRDQUFLLENBQUNDLElBQU4sQ0FBV1QsT0FBTyxHQUFDLGNBQW5CLEVBQW1DTyxJQUFuQyxFQUF5QyxFQUF6QyxDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU9HLEtBQVAsRUFBYztBQUNkLFdBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1IsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFNUyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLGNBQVksQ0FBQ0MsVUFBYixDQUF3QixhQUF4QjtBQUNBSCxRQUFNLENBQUNJLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0dBSlFiLE07VUFDUVUscUQ7OztBQUtqQixTQUFTVCxRQUFULEdBQW9CO0FBQ2xCLE1BQUdVLFlBQVksQ0FBQ0csT0FBYixDQUFxQixhQUFyQixNQUF3QyxJQUF4QyxJQUFnREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDQyxTQUEzRixFQUFxRztBQUNuRyxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5ODhlOTNkZjJkNjA0YTVjOWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UsIEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBiYXNlVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MWA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW5EYXRhU2VydmljZSA9IHtcclxuICAgIGxvZ0luLFxyXG4gICAgbG9nT3V0LFxyXG4gICAgaXNMb2dnZWQsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nSW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgIGxldCBkYXRhID0ge3VzZXJuYW1lLCBwYXNzd29yZH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KGJhc2VVcmwrJy9hdXRoL3NpZ25pbicsIGRhdGEsIHt9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yLlByb21pc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ091dCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc0xvZ2dlZCgpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpICE9PSBudWxsICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==