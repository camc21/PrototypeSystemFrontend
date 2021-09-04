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

  try {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/auth/signin', data, {});
  } catch (error) {
    return error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsImxvZ091dCIsImlzTG9nZ2VkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJlcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTywwQkFBYjtBQUVPLElBQU1DLGdCQUFnQixHQUFHO0FBQzVCQyxPQUFLLEVBQUxBLEtBRDRCO0FBRTVCQyxRQUFNLEVBQU5BLE1BRjRCO0FBRzVCQyxVQUFRLEVBQVJBO0FBSDRCLENBQXpCOztBQU1MLFNBQVNGLEtBQVQsQ0FBZUcsUUFBZixFQUF5QkMsUUFBekIsRUFBbUM7QUFDL0IsTUFBSUMsSUFBSSxHQUFHO0FBQUNGLFlBQVEsRUFBUkEsUUFBRDtBQUFXQyxZQUFRLEVBQVJBO0FBQVgsR0FBWDs7QUFDRixNQUFJO0FBQ0YsV0FBT0UsNENBQUssQ0FBQ0MsSUFBTixDQUFXVCxPQUFPLEdBQUMsY0FBbkIsRUFBbUNPLElBQW5DLEVBQXlDLEVBQXpDLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT0csS0FBUCxFQUFjO0FBQ2QsV0FBT0EsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1AsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFNUSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLGNBQVksQ0FBQ0MsVUFBYixDQUF3QixhQUF4QjtBQUNBSCxRQUFNLENBQUNJLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0dBSlFaLE07VUFDUVMscUQ7OztBQUtqQixTQUFTUixRQUFULEdBQW9CO0FBQ2xCLE1BQUdTLFlBQVksQ0FBQ0csT0FBYixDQUFxQixhQUFyQixNQUF3QyxJQUF4QyxJQUFnREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDQyxTQUEzRixFQUFxRztBQUNuRyxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4wY2JkZGMxODY2NzA5YTRkY2Y3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlLCBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgYmFzZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODFgO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luRGF0YVNlcnZpY2UgPSB7XHJcbiAgICBsb2dJbixcclxuICAgIGxvZ091dCxcclxuICAgIGlzTG9nZ2VkLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ0luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHt1c2VybmFtZSwgcGFzc3dvcmR9XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXhpb3MucG9zdChiYXNlVXJsKycvYXV0aC9zaWduaW4nLCBkYXRhLCB7fSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9nT3V0KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzTG9nZ2VkKCkge1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IG51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9