webpackHotUpdate_N_E("pages/anime",{

/***/ "./pages/anime/index.jsx":
/*!*******************************!*\
  !*** ./pages/anime/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anime; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AnimeDataService */ "./services/AnimeDataService.jsx");



var _jsxFileName = "C:\\PROJETOS\\TESTE\\FRONTEND\\primereact-nextjs-quickstart\\pages\\anime\\index.jsx",
    _s = $RefreshSig$();







function Anime(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listaAnimes = _useState[0],
      setListaAnimes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      animeSelecionado = _useState2[0],
      setAnimeSelecionado = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    listarAnimes();
  }, []);

  function listarAnimes() {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_6__["AnimeDataService"].listarAnimes().then(function (response) {
      console.log(response.data);
      setListaAnimes(response.data);
    });
  }

  function listarAnimesPorId(idAnime) {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_6__["AnimeDataService"].listarAnimesPorId(idAnime).then(function (response) {
      console.log(response.data);
      setAnimeSelecionado(response.data);
    });
  }

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success p-mr-2",
        onClick: function onClick() {
          return console.log(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return console.log(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__["Fieldset"], {
      legend: "Anime",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        label: "carregar lista",
        onClick: function onClick() {
          return listarAnimes();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        label: "carregar por id",
        onClick: function onClick() {
          return listarAnimesPorId(1);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTable"], {
          value: listaAnimes,
          selectionMode: "single",
          selection: animeSelecionado,
          onSelectionChange: function onSelectionChange(e) {
            setAnimeSelecionado(e.value), console.log(e.value);
          },
          dataKey: "idAnime",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "nome",
            header: "Nome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "temporada",
            header: "Temporada"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "possuiManga",
            header: "Possui mang\xE1 ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            body: this.actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Anime, "6kuHj60tMiffsJCWAjY4Vd4q8bg=");

_c = Anime;

var _c;

$RefreshReg$(_c, "Anime");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RhQW5pbWVzIiwic2V0TGlzdGFBbmltZXMiLCJhbmltZVNlbGVjaW9uYWRvIiwic2V0QW5pbWVTZWxlY2lvbmFkbyIsInVzZUVmZmVjdCIsImxpc3RhckFuaW1lcyIsIkFuaW1lRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxpc3RhckFuaW1lc1BvcklkIiwiaWRBbmltZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsInJvd0RhdGEiLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRTFCQyxXQUYwQjtBQUFBLE1BRWJDLGNBRmE7O0FBQUEsbUJBR2VGLHNEQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BRzFCRyxnQkFIMEI7QUFBQSxNQUdSQyxtQkFIUTs7QUFNakNDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnQkFBWTtBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0EsWUFBVCxHQUF1QjtBQUNuQkMsK0VBQWdCLENBQUNELFlBQWpCLEdBQWdDRSxJQUFoQyxDQUFxQyxVQUFBQyxRQUFRLEVBQUk7QUFDN0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0FWLG9CQUFjLENBQUNPLFFBQVEsQ0FBQ0csSUFBVixDQUFkO0FBQ0gsS0FIRDtBQUlIOztBQUVELFdBQVNDLGlCQUFULENBQTJCQyxPQUEzQixFQUFtQztBQUMvQlAsK0VBQWdCLENBQUNNLGlCQUFqQixDQUFtQ0MsT0FBbkMsRUFBNENOLElBQTVDLENBQWlELFVBQUFDLFFBQVEsRUFBSTtBQUN6REMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBckI7QUFDQVIseUJBQW1CLENBQUNLLFFBQVEsQ0FBQ0csSUFBVixDQUFuQjtBQUNILEtBSEQ7QUFJSDs7QUFFRCxNQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBYTtBQUNwQyx3QkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw4QkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxjQUFiO0FBQTRCLGlCQUFTLEVBQUMsMENBQXRDO0FBQWlGLGVBQU8sRUFBRTtBQUFBLGlCQUFNTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssT0FBWixDQUFOO0FBQUE7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUMsYUFBYjtBQUEyQixpQkFBUyxFQUFDLG1DQUFyQztBQUF5RSxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sT0FBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVosQ0FBTjtBQUFBO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQU1ILEdBUEQ7O0FBU0Esc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyw0REFBRDtBQUFVLFlBQU0sRUFBQyxPQUFqQjtBQUFBLDhCQUNJLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLGdCQUFkO0FBQStCLGVBQU8sRUFBRTtBQUFBLGlCQUFNVixZQUFZLEVBQWxCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0kscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsaUJBQWQ7QUFBZ0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1PLGlCQUFpQixDQUFDLENBQUQsQ0FBdkI7QUFBQTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFLSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksZUFBSyxFQUFFWixXQURYO0FBRUksdUJBQWEsRUFBQyxRQUZsQjtBQUdJLG1CQUFTLEVBQUVFLGdCQUhmO0FBSUksMkJBQWlCLEVBQUUsMkJBQUFjLENBQUMsRUFBSTtBQUFDYiwrQkFBbUIsQ0FBQ2EsQ0FBQyxDQUFDQyxLQUFILENBQW5CLEVBQThCUixPQUFPLENBQUNDLEdBQVIsQ0FBWU0sQ0FBQyxDQUFDQyxLQUFkLENBQTlCO0FBQW1ELFdBSmhGO0FBS0ksaUJBQU8sRUFBQyxTQUxaO0FBQUEsa0NBTUkscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLE1BQWQ7QUFBcUIsa0JBQU0sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBT0kscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLFdBQWQ7QUFBMEIsa0JBQU0sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBUUkscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLGFBQWQ7QUFBNEIsa0JBQU0sRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLGVBU0kscUVBQUMsd0RBQUQ7QUFBUSxnQkFBSSxFQUFFLEtBQUtIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBdUJIOztHQXhEdUJqQixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FuaW1lLjc2MTg2MDYzMTBhZWIyZGQ3N2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSAncHJpbWVyZWFjdC9maWVsZHNldCc7XHJcblxyXG5pbXBvcnQgeyBBbmltZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQW5pbWVEYXRhU2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbbGlzdGFBbmltZXMsIHNldExpc3RhQW5pbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthbmltZVNlbGVjaW9uYWRvLCBzZXRBbmltZVNlbGVjaW9uYWRvXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsaXN0YXJBbmltZXMoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RhckFuaW1lcygpe1xyXG4gICAgICAgIEFuaW1lRGF0YVNlcnZpY2UubGlzdGFyQW5pbWVzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMaXN0YUFuaW1lcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RhckFuaW1lc1BvcklkKGlkQW5pbWUpe1xyXG4gICAgICAgIEFuaW1lRGF0YVNlcnZpY2UubGlzdGFyQW5pbWVzUG9ySWQoaWRBbmltZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRBbmltZVNlbGVjaW9uYWRvKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJBbmltZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cImNhcnJlZ2FyIGxpc3RhXCIgb25DbGljaz17KCkgPT4gbGlzdGFyQW5pbWVzKCl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiY2FycmVnYXIgcG9yIGlkXCIgb25DbGljaz17KCkgPT4gbGlzdGFyQW5pbWVzUG9ySWQoMSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpc3RhQW5pbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXthbmltZVNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiB7c2V0QW5pbWVTZWxlY2lvbmFkbyhlLnZhbHVlKSwgY29uc29sZS5sb2coZS52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRBbmltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibm9tZVwiIGhlYWRlcj1cIk5vbWVcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cInRlbXBvcmFkYVwiIGhlYWRlcj1cIlRlbXBvcmFkYVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwicG9zc3VpTWFuZ2FcIiBoZWFkZXI9XCJQb3NzdWkgbWFuZ8OhID9cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXt0aGlzLmFjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=