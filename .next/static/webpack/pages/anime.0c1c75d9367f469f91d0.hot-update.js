webpackHotUpdate_N_E("pages/anime",{

/***/ "./services/AnimeDataService.jsx":
/*!***************************************!*\
  !*** ./services/AnimeDataService.jsx ***!
  \***************************************/
/*! exports provided: AnimeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeDataService", function() { return AnimeDataService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseUrl = 'http://localhost:8081/api/anime';
var AnimeDataService = {
  listarAnimes: listarAnimes,
  listarAnimesPorId: listarAnimesPorId,
  _post: _post,
  _put: _put,
  _delete: _delete
};

function listarAnimes() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl, {
    headers: {
      "Authorization": localStorage.getItem('accessToken')
    }
  }).error(console.log(error));
}

function listarAnimesPorId(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(baseUrl, "/").concat(id), {
    headers: {
      "Authorization": localStorage.getItem('accessToken')
    }
  });
}

function _post(anime) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(baseUrl), anime, {
    headers: {
      "Authorization": localStorage.getItem('accessToken')
    }
  });
}

function _put(anime) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(baseUrl), anime, {
    headers: {
      "Authorization": localStorage.getItem('accessToken')
    }
  });
}

function _delete(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(baseUrl, "/").concat(id), {
    headers: {
      "Authorization": localStorage.getItem('accessToken')
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQW5pbWVEYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkFuaW1lRGF0YVNlcnZpY2UiLCJsaXN0YXJBbmltZXMiLCJsaXN0YXJBbmltZXNQb3JJZCIsIl9wb3N0IiwiX3B1dCIsIl9kZWxldGUiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJhbmltZSIsInBvc3QiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLGlDQUFoQjtBQUVPLElBQU1DLGdCQUFnQixHQUFHO0FBQzlCQyxjQUFZLEVBQVpBLFlBRDhCO0FBRTlCQyxtQkFBaUIsRUFBakJBLGlCQUY4QjtBQUc5QkMsT0FBSyxFQUFMQSxLQUg4QjtBQUk5QkMsTUFBSSxFQUFKQSxJQUo4QjtBQUs5QkMsU0FBTyxFQUFQQTtBQUw4QixDQUF6Qjs7QUFRUCxTQUFTSixZQUFULEdBQXdCO0FBQ3RCLFNBQU9LLDRDQUFLLENBQUNDLEdBQU4sQ0FBVVIsT0FBVixFQUFtQjtBQUN4QlMsV0FBTyxFQUFFO0FBQUUsdUJBQWlCQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckI7QUFBbkI7QUFEZSxHQUFuQixFQUVKQyxLQUZJLENBRUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBRkYsQ0FBUDtBQUdEOztBQUVELFNBQVNULGlCQUFULENBQTJCWSxFQUEzQixFQUErQjtBQUM3QixTQUFPUiw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFSLE9BQWIsY0FBd0JlLEVBQXhCLEdBQThCO0FBQ25DTixXQUFPLEVBQUU7QUFBRSx1QkFBaUJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQjtBQUFuQjtBQUQwQixHQUE5QixDQUFQO0FBR0Q7O0FBRUQsU0FBU1AsS0FBVCxDQUFlWSxLQUFmLEVBQXNCO0FBQ3BCLFNBQU9ULDRDQUFLLENBQUNVLElBQU4sV0FBY2pCLE9BQWQsR0FBeUJnQixLQUF6QixFQUFnQztBQUNyQ1AsV0FBTyxFQUFFO0FBQUUsdUJBQWlCQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckI7QUFBbkI7QUFENEIsR0FBaEMsQ0FBUDtBQUdEOztBQUVELFNBQVNOLElBQVQsQ0FBY1csS0FBZCxFQUFxQjtBQUNuQixTQUFPVCw0Q0FBSyxDQUFDVyxHQUFOLFdBQWFsQixPQUFiLEdBQXdCZ0IsS0FBeEIsRUFBK0I7QUFDcENQLFdBQU8sRUFBRTtBQUFFLHVCQUFpQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCO0FBQW5CO0FBRDJCLEdBQS9CLENBQVA7QUFHRDs7QUFFRCxTQUFTTCxPQUFULENBQWlCUyxFQUFqQixFQUFxQjtBQUNuQixTQUFPUiw0Q0FBSyxVQUFMLFdBQWdCUCxPQUFoQixjQUEyQmUsRUFBM0IsR0FBaUM7QUFDdENOLFdBQU8sRUFBRTtBQUFFLHVCQUFpQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCO0FBQW5CO0FBRDZCLEdBQWpDLENBQVA7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbmltZS4wYzFjNzVkOTM2N2Y0NjlmOTFkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpL2FuaW1lJztcclxuXHJcbmV4cG9ydCBjb25zdCBBbmltZURhdGFTZXJ2aWNlID0ge1xyXG4gIGxpc3RhckFuaW1lcyxcclxuICBsaXN0YXJBbmltZXNQb3JJZCxcclxuICBfcG9zdCxcclxuICBfcHV0LFxyXG4gIF9kZWxldGVcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxpc3RhckFuaW1lcygpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGJhc2VVcmwsIHtcclxuICAgIGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpIH1cclxuICB9KS5lcnJvcihjb25zb2xlLmxvZyhlcnJvcikpXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBsaXN0YXJBbmltZXNQb3JJZChpZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7YmFzZVVybH0vJHtpZH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7IFwiQXV0aG9yaXphdGlvblwiOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9wb3N0KGFuaW1lKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7YmFzZVVybH1gLCBhbmltZSwge1xyXG4gICAgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9wdXQoYW5pbWUpIHtcclxuICByZXR1cm4gYXhpb3MucHV0KGAke2Jhc2VVcmx9YCwgYW5pbWUsIHtcclxuICAgIGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVsZXRlKGlkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtiYXNlVXJsfS8ke2lkfWAsIHtcclxuICAgIGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=