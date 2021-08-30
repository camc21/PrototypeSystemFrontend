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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginRight: '10px'
        },
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
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__["Fieldset"], {
      legend: "Anime",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "temporada",
            header: "Temporada"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "possuiManga",
            header: "Possui mang\xE1 ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            body: actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RhQW5pbWVzIiwic2V0TGlzdGFBbmltZXMiLCJhbmltZVNlbGVjaW9uYWRvIiwic2V0QW5pbWVTZWxlY2lvbmFkbyIsInVzZUVmZmVjdCIsImxpc3RhckFuaW1lcyIsIkFuaW1lRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxpc3RhckFuaW1lc1BvcklkIiwiaWRBbmltZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsInJvd0RhdGEiLCJtYXJnaW5SaWdodCIsImUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR2UsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUEsTUFHMUJHLGdCQUgwQjtBQUFBLE1BR1JDLG1CQUhROztBQU1qQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdCQUFZO0FBQ2YsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQSxZQUFULEdBQXVCO0FBQ25CQywrRUFBZ0IsQ0FBQ0QsWUFBakIsR0FBZ0NFLElBQWhDLENBQXFDLFVBQUFDLFFBQVEsRUFBSTtBQUM3Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBckI7QUFDQVYsb0JBQWMsQ0FBQ08sUUFBUSxDQUFDRyxJQUFWLENBQWQ7QUFDSCxLQUhEO0FBSUg7O0FBRUQsV0FBU0MsaUJBQVQsQ0FBMkJDLE9BQTNCLEVBQW1DO0FBQy9CUCwrRUFBZ0IsQ0FBQ00saUJBQWpCLENBQW1DQyxPQUFuQyxFQUE0Q04sSUFBNUMsQ0FBaUQsVUFBQUMsUUFBUSxFQUFJO0FBQ3pEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNBUix5QkFBbUIsQ0FBQ0ssUUFBUSxDQUFDRyxJQUFWLENBQW5CO0FBQ0gsS0FIRDtBQUlIOztBQUVELE1BQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3BDLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBQ0MscUJBQVcsRUFBRTtBQUFkLFNBQWY7QUFBc0MsWUFBSSxFQUFDLGNBQTNDO0FBQTBELGlCQUFTLEVBQUMsMENBQXBFO0FBQStHLGVBQU8sRUFBRTtBQUFBLGlCQUFNUCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssT0FBWixDQUFOO0FBQUE7QUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUMsYUFBYjtBQUEyQixpQkFBUyxFQUFDLG1DQUFyQztBQUF5RSxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sT0FBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVosQ0FBTjtBQUFBO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLG9CQURKO0FBTUgsR0FQRDs7QUFTQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDREQUFEO0FBQVUsWUFBTSxFQUFDLE9BQWpCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSSxxRUFBQyw4REFBRDtBQUNJLGVBQUssRUFBRWYsV0FEWDtBQUVJLHVCQUFhLEVBQUMsUUFGbEI7QUFHSSxtQkFBUyxFQUFFRSxnQkFIZjtBQUlJLDJCQUFpQixFQUFFLDJCQUFBZSxDQUFDLEVBQUk7QUFBQ2QsK0JBQW1CLENBQUNjLENBQUMsQ0FBQ0MsS0FBSCxDQUFuQixFQUE4QlQsT0FBTyxDQUFDQyxHQUFSLENBQVlPLENBQUMsQ0FBQ0MsS0FBZCxDQUE5QjtBQUFtRCxXQUpoRjtBQUtJLGlCQUFPLEVBQUMsU0FMWjtBQUFBLGtDQU1JLHFFQUFDLHdEQUFEO0FBQVEsaUJBQUssRUFBQyxNQUFkO0FBQXFCLGtCQUFNLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixlQU9JLHFFQUFDLHdEQUFEO0FBQVEsaUJBQUssRUFBQyxXQUFkO0FBQTBCLGtCQUFNLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSixlQVFJLHFFQUFDLHdEQUFEO0FBQVEsaUJBQUssRUFBQyxhQUFkO0FBQTRCLGtCQUFNLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSixlQVNJLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQUksRUFBRUo7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFtQkg7O0dBcER1QmpCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5pbWUuZjRjM2UzOGQxMmM2Y2EyMGU0NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tICdwcmltZXJlYWN0L2ZpZWxkc2V0JztcclxuXHJcbmltcG9ydCB7IEFuaW1lRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BbmltZURhdGFTZXJ2aWNlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtsaXN0YUFuaW1lcywgc2V0TGlzdGFBbmltZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FuaW1lU2VsZWNpb25hZG8sIHNldEFuaW1lU2VsZWNpb25hZG9dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxpc3RhckFuaW1lcygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbGlzdGFyQW5pbWVzKCl7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5saXN0YXJBbmltZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExpc3RhQW5pbWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGlzdGFyQW5pbWVzUG9ySWQoaWRBbmltZSl7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5saXN0YXJBbmltZXNQb3JJZChpZEFuaW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEFuaW1lU2VsZWNpb25hZG8ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICcxMHB4J319IGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiQW5pbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaXN0YUFuaW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17YW5pbWVTZWxlY2lvbmFkb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2UgPT4ge3NldEFuaW1lU2VsZWNpb25hZG8oZS52YWx1ZSksIGNvbnNvbGUubG9nKGUudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkQW5pbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5vbWVcIiBoZWFkZXI9XCJOb21lXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0ZW1wb3JhZGFcIiBoZWFkZXI9XCJUZW1wb3JhZGFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cInBvc3N1aU1hbmdhXCIgaGVhZGVyPVwiUG9zc3VpIG1hbmfDoSA/XCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==