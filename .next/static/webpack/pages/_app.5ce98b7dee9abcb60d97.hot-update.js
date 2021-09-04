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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsImxvZ091dCIsImlzTG9nZ2VkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldEl0ZW0iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLDBCQUFiO0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDNUJDLE9BQUssRUFBTEEsS0FENEI7QUFFNUJDLFFBQU0sRUFBTkEsTUFGNEI7QUFHNUJDLFVBQVEsRUFBUkE7QUFINEIsQ0FBekI7O0FBTUwsU0FBU0YsS0FBVCxDQUFlRyxRQUFmLEVBQXlCQyxRQUF6QixFQUFtQztBQUMvQixNQUFJQyxJQUFJLEdBQUc7QUFBQ0YsWUFBUSxFQUFSQSxRQUFEO0FBQVdDLFlBQVEsRUFBUkE7QUFBWCxHQUFYO0FBQ0YsU0FBT0UsNENBQUssQ0FBQ0MsSUFBTixDQUFXVCxPQUFPLEdBQUMsY0FBbkIsRUFBbUNPLElBQW5DLEVBQXlDLEVBQXpDLENBQVA7QUFDRDs7QUFFRCxTQUFTSixNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLE1BQU1PLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsY0FBWSxDQUFDQyxVQUFiLENBQXdCLGFBQXhCO0FBQ0FILFFBQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7QUFDRDs7R0FKUVgsTTtVQUNRUSxxRDs7O0FBS2pCLFNBQVNQLFFBQVQsR0FBb0I7QUFDbEIsTUFBR1EsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDLElBQXhDLElBQWdESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsYUFBckIsTUFBd0NDLFNBQTNGLEVBQXFHO0FBQ25HLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWNlOThiN2RlZTlhYmNiNjBkOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBiYXNlVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MWA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW5EYXRhU2VydmljZSA9IHtcclxuICAgIGxvZ0luLFxyXG4gICAgbG9nT3V0LFxyXG4gICAgaXNMb2dnZWQsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nSW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgIGxldCBkYXRhID0ge3VzZXJuYW1lLCBwYXNzd29yZH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGJhc2VVcmwrJy9hdXRoL3NpZ25pbicsIGRhdGEsIHt9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9nT3V0KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzTG9nZ2VkKCkge1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IG51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9