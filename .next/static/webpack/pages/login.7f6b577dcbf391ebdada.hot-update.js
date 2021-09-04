webpackHotUpdate_N_E("pages/login",{

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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/auth/signin', data, {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsImxvZ091dCIsImlzTG9nZ2VkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldEl0ZW0iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sMEJBQWI7QUFFTyxJQUFNQyxnQkFBZ0IsR0FBRztBQUM1QkMsT0FBSyxFQUFMQSxLQUQ0QjtBQUU1QkMsUUFBTSxFQUFOQSxNQUY0QjtBQUc1QkMsVUFBUSxFQUFSQTtBQUg0QixDQUF6Qjs7QUFNTCxTQUFTRixLQUFULENBQWVHLFFBQWYsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQy9CLE1BQUlDLElBQUksR0FBRztBQUFDRixZQUFRLEVBQVJBLFFBQUQ7QUFBV0MsWUFBUSxFQUFSQTtBQUFYLEdBQVg7QUFDRixTQUFPRSw0Q0FBSyxDQUFDQyxJQUFOLENBQVdULE9BQU8sR0FBQyxjQUFuQixFQUFtQ08sSUFBbkMsRUFBeUMsRUFBekMsQ0FBUDtBQUNEOztBQUVELFNBQVNKLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsTUFBTU8sTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxjQUFZLENBQUNDLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQUgsUUFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjtBQUNEOztHQUpRWCxNO1VBQ1FRLHFEOzs7QUFLakIsU0FBU1AsUUFBVCxHQUFvQjtBQUNsQixNQUFHUSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsYUFBckIsTUFBd0MsSUFBeEMsSUFBZ0RILFlBQVksQ0FBQ0csT0FBYixDQUFxQixhQUFyQixNQUF3Q0MsU0FBM0YsRUFBcUc7QUFDbkcsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uN2Y2YjU3N2RjYmYzOTFlYmRhZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgxYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkRhdGFTZXJ2aWNlID0ge1xyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgICBpc0xvZ2dlZCxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2dJbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgbGV0IGRhdGEgPSB7dXNlcm5hbWUsIHBhc3N3b3JkfVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYmFzZVVybCsnL2F1dGgvc2lnbmluJywgZGF0YSwge30pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dPdXQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNMb2dnZWQoKSB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSAhPT0gbnVsbCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=