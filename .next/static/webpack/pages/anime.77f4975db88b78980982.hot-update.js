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
  try {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl, {
      headers: {
        "Authorization": localStorage.getItem('accessToken')
      }
    }).error(console.log(error));
  } catch (error) {
    console.log(error);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQW5pbWVEYXRhU2VydmljZS5qc3giXSwibmFtZXMiOlsiYmFzZVVybCIsIkFuaW1lRGF0YVNlcnZpY2UiLCJsaXN0YXJBbmltZXMiLCJsaXN0YXJBbmltZXNQb3JJZCIsIl9wb3N0IiwiX3B1dCIsIl9kZWxldGUiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJhbmltZSIsInBvc3QiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLGlDQUFoQjtBQUVPLElBQU1DLGdCQUFnQixHQUFHO0FBQzlCQyxjQUFZLEVBQVpBLFlBRDhCO0FBRTlCQyxtQkFBaUIsRUFBakJBLGlCQUY4QjtBQUc5QkMsT0FBSyxFQUFMQSxLQUg4QjtBQUk5QkMsTUFBSSxFQUFKQSxJQUo4QjtBQUs5QkMsU0FBTyxFQUFQQTtBQUw4QixDQUF6Qjs7QUFRUCxTQUFTSixZQUFULEdBQXdCO0FBQ3RCLE1BQUk7QUFDRixXQUFPSyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVSLE9BQVYsRUFBbUI7QUFDeEJTLGFBQU8sRUFBRTtBQUFFLHlCQUFpQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCO0FBQW5CO0FBRGUsS0FBbkIsRUFFRkMsS0FGRSxDQUVJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUZKLENBQVA7QUFHRCxHQUpELENBSUUsT0FBT0EsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFFRjs7QUFFRCxTQUFTVCxpQkFBVCxDQUEyQlksRUFBM0IsRUFBK0I7QUFDN0IsU0FBT1IsNENBQUssQ0FBQ0MsR0FBTixXQUFhUixPQUFiLGNBQXdCZSxFQUF4QixHQUE4QjtBQUNuQ04sV0FBTyxFQUFFO0FBQUUsdUJBQWlCQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckI7QUFBbkI7QUFEMEIsR0FBOUIsQ0FBUDtBQUdEOztBQUVELFNBQVNQLEtBQVQsQ0FBZVksS0FBZixFQUFxQjtBQUNuQixTQUFPVCw0Q0FBSyxDQUFDVSxJQUFOLFdBQWNqQixPQUFkLEdBQXlCZ0IsS0FBekIsRUFBZ0M7QUFDckNQLFdBQU8sRUFBRTtBQUFFLHVCQUFpQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCO0FBQW5CO0FBRDRCLEdBQWhDLENBQVA7QUFHRDs7QUFFRCxTQUFTTixJQUFULENBQWNXLEtBQWQsRUFBb0I7QUFDbEIsU0FBT1QsNENBQUssQ0FBQ1csR0FBTixXQUFhbEIsT0FBYixHQUF3QmdCLEtBQXhCLEVBQStCO0FBQ3BDUCxXQUFPLEVBQUU7QUFBRSx1QkFBaUJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQjtBQUFuQjtBQUQyQixHQUEvQixDQUFQO0FBR0Q7O0FBRUQsU0FBU0wsT0FBVCxDQUFpQlMsRUFBakIsRUFBcUI7QUFDbkIsU0FBT1IsNENBQUssVUFBTCxXQUFnQlAsT0FBaEIsY0FBMkJlLEVBQTNCLEdBQWlDO0FBQ3RDTixXQUFPLEVBQUU7QUFBRSx1QkFBaUJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQjtBQUFuQjtBQUQ2QixHQUFqQyxDQUFQO0FBR0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5pbWUuNzdmNDk3NWRiODhiNzg5ODA5ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS9hbmltZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQW5pbWVEYXRhU2VydmljZSA9IHtcclxuICBsaXN0YXJBbmltZXMsXHJcbiAgbGlzdGFyQW5pbWVzUG9ySWQsXHJcbiAgX3Bvc3QsXHJcbiAgX3B1dCxcclxuICBfZGVsZXRlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsaXN0YXJBbmltZXMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYmFzZVVybCwge1xyXG4gICAgICBoZWFkZXJzOiB7IFwiQXV0aG9yaXphdGlvblwiOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSB9XHJcbiAgICAgIH0pLmVycm9yKGNvbnNvbGUubG9nKGVycm9yKSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdGFyQW5pbWVzUG9ySWQoaWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2Jhc2VVcmx9LyR7aWR9YCwge1xyXG4gICAgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcG9zdChhbmltZSl7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7YmFzZVVybH1gLCBhbmltZSwge1xyXG4gICAgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9wdXQoYW5pbWUpe1xyXG4gIHJldHVybiBheGlvcy5wdXQoYCR7YmFzZVVybH1gLCBhbmltZSwge1xyXG4gICAgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kZWxldGUoaWQpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2Jhc2VVcmx9LyR7aWR9YCwge1xyXG4gICAgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgfVxyXG4gIH0pXHJcbn1cclxuIFxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=