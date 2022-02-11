webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/anime/animeSelectedReducer.jsx":
/*!*******************************************************!*\
  !*** ./store/reducers/anime/animeSelectedReducer.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./store/actions/index.jsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  id: undefined,
  nome: "",
  temporada: 0,
  possuiManga: true
};

var animeSelectedReducer = function animeSelectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SELECTED_DATA"]:
      if (action.payload) {
        return _objectSpread(_objectSpread({}, state), {}, {
          animeSelected: action.payload
        });
      } else {
        return {
          animeSelected: state
        };
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (animeSelectedReducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvYW5pbWUvYW5pbWVTZWxlY3RlZFJlZHVjZXIuanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlkIiwidW5kZWZpbmVkIiwibm9tZSIsInRlbXBvcmFkYSIsInBvc3N1aU1hbmdhIiwiYW5pbWVTZWxlY3RlZFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMT0FEX1NFTEVDVEVEX0RBVEEiLCJwYXlsb2FkIiwiYW5pbWVTZWxlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQUVDLElBQUUsRUFBRUMsU0FBTjtBQUFpQkMsTUFBSSxFQUFFLEVBQXZCO0FBQTJCQyxXQUFTLEVBQUUsQ0FBdEM7QUFBeUNDLGFBQVcsRUFBRTtBQUF0RCxDQUFyQjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlAsWUFBeUI7QUFBQSxNQUFYUSxNQUFXOztBQUU3RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFFRSxTQUFLQywyREFBTDtBQUNFLFVBQUdGLE1BQU0sQ0FBQ0csT0FBVixFQUFrQjtBQUNoQiwrQ0FDS0osS0FETDtBQUVFSyx1QkFBYSxFQUFFSixNQUFNLENBQUNHO0FBRnhCO0FBSUQsT0FMRCxNQUtPO0FBQ0wsZUFBTztBQUNMQyx1QkFBYSxFQUFFTDtBQURWLFNBQVA7QUFHRDs7QUFFSDtBQUNFLGFBQU9BLEtBQVA7QUFmSjtBQWlCRCxDQW5CRDs7QUFxQmVELG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODNhOWExY2E4ZTcyZGEyZTZmZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPQURfU0VMRUNURURfREFUQSwgTE9BRF9BTklNRV9MSVNUIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGlkOiB1bmRlZmluZWQsIG5vbWU6IFwiXCIsIHRlbXBvcmFkYTogMCwgcG9zc3VpTWFuZ2E6IHRydWUgfVxyXG5cclxuXHJcblxyXG5jb25zdCBhbmltZVNlbGVjdGVkUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIExPQURfU0VMRUNURURfREFUQTpcclxuICAgICAgaWYoYWN0aW9uLnBheWxvYWQpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFuaW1lU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBhbmltZVNlbGVjdGVkOiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbmltZVNlbGVjdGVkUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9