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
    return Promise.response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsImxvZ091dCIsImlzTG9nZ2VkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJlcnJvciIsIlByb21pc2UiLCJyZXNwb25zZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTywwQkFBYjtBQUVPLElBQU1DLGdCQUFnQixHQUFHO0FBQzVCQyxPQUFLLEVBQUxBLEtBRDRCO0FBRTVCQyxRQUFNLEVBQU5BLE1BRjRCO0FBRzVCQyxVQUFRLEVBQVJBO0FBSDRCLENBQXpCOztBQU1MLFNBQVNGLEtBQVQsQ0FBZUcsUUFBZixFQUF5QkMsUUFBekIsRUFBbUM7QUFDL0IsTUFBSUMsSUFBSSxHQUFHO0FBQUNGLFlBQVEsRUFBUkEsUUFBRDtBQUFXQyxZQUFRLEVBQVJBO0FBQVgsR0FBWDs7QUFDRixNQUFJO0FBQ0YsV0FBT0UsNENBQUssQ0FBQ0MsSUFBTixDQUFXVCxPQUFPLEdBQUMsY0FBbkIsRUFBbUNPLElBQW5DLEVBQXlDLEVBQXpDLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT0csS0FBUCxFQUFjO0FBQ2QsV0FBT0MsT0FBTyxDQUFDQyxRQUFmO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTVCxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLE1BQU1VLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsY0FBWSxDQUFDQyxVQUFiLENBQXdCLGFBQXhCO0FBQ0FILFFBQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7QUFDRDs7R0FKUWQsTTtVQUNRVyxxRDs7O0FBS2pCLFNBQVNWLFFBQVQsR0FBb0I7QUFDbEIsTUFBR1csWUFBWSxDQUFDRyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDLElBQXhDLElBQWdESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsYUFBckIsTUFBd0NDLFNBQTNGLEVBQXFHO0FBQ25HLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzJlOGYxOWE0OTA4Mzc3MDk3OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgxYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkRhdGFTZXJ2aWNlID0ge1xyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgICBpc0xvZ2dlZCxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2dJbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgbGV0IGRhdGEgPSB7dXNlcm5hbWUsIHBhc3N3b3JkfVxyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoYmFzZVVybCsnL2F1dGgvc2lnbmluJywgZGF0YSwge30pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNwb25zZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9nT3V0KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzTG9nZ2VkKCkge1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IG51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9