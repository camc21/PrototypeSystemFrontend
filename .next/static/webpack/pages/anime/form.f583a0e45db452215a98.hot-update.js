webpackHotUpdate_N_E("pages/anime/form",{

/***/ "./pages/anime/form.jsx":
/*!******************************!*\
  !*** ./pages/anime/form.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox/checkbox.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/AnimeDataService */ "./services/AnimeDataService.jsx");



var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\anime\\form.jsx",
    _s = $RefreshSig$();














function AnimeForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.loadSelectedDataReducer.animeSelected;
  })),
      animeSelected = _useState[0],
      setAnimeSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(animeSelected ? animeSelected.nome : null),
      nome = _useState2[0],
      setNome = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(animeSelected ? animeSelected.possuiManga : false),
      possuiManga = _useState3[0],
      setPossuiManga = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(animeSelected ? animeSelected.temporada : null),
      temporada = _useState4[0],
      setTemporada = _useState4[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function showMessage() {
    router.push('/anime');
  }

  function _save() {
    var anime = {
      id: animeSelected.id,
      nome: nome,
      possuiManga: possuiManga,
      temporada: Number(temporada)
    };

    if (!anime.id) {
      console.log('if');
      console.log(anime); // AnimeDataService._post(anime).then(response => {
      //     toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro criado com sucesso!', life: 3000 });
      //     setTimeout(() => {
      //         console.log('EXECUTADO POST');
      //         router.push('/anime');
      //     }, 3000);
      // })
    } else {
      console.log('else');
      console.log(anime); // AnimeDataService._put(anime).then(response => {
      //     toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro alterado com sucesso!', life: 3000 });
      //     setTimeout(() => {
      //         console.log('EXECUTADO PUT');
      //         router.push('/anime');
      //     }, 3000);
      // })
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__["Fieldset"], {
      legend: "Anime Form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-fluid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field p-grid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "nome",
            className: "p-col-12 p-md-2",
            children: "Nome: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-col-12 p-md-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], {
              id: "nome",
              type: "text",
              value: nome,
              onChange: function onChange(e) {
                return setNome(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field p-grid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "temporada",
            className: "p-col-12 p-md-2",
            children: "Temporada:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-col-12 p-md-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], {
              id: "temporada",
              type: "text",
              value: temporada,
              onChange: function onChange(e) {
                return setTemporada(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field-checkbox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-field-checkbox",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
              inputId: "possuiManga",
              onChange: function onChange(e) {
                return setPossuiManga(e.checked);
              },
              checked: possuiManga
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "possuiManga",
              children: "Possui mang\xE1 ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/anime",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          id: "back-button",
          style: {
            marginRight: '15px'
          },
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        label: "Salvar",
        onClick: function onClick() {
          return _save();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(AnimeForm, "913d7vESe/z8RIqP295bxQdqO0o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = AnimeForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(AnimeForm));

var _c, _c2;

$RefreshReg$(_c, "AnimeForm");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvZm9ybS5qc3giXSwibmFtZXMiOlsiQW5pbWVGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsb2FkU2VsZWN0ZWREYXRhUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwibm9tZSIsInNldE5vbWUiLCJwb3NzdWlNYW5nYSIsInNldFBvc3N1aU1hbmdhIiwidGVtcG9yYWRhIiwic2V0VGVtcG9yYWRhIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93TWVzc2FnZSIsInB1c2giLCJfc2F2ZSIsImFuaW1lIiwiaWQiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBOztBQUlBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHVCQUFOLENBQThCQyxhQUF6QztBQUFBLEdBQUQsQ0FBWixDQUY1QjtBQUFBLE1BRWZBLGFBRmU7QUFBQSxNQUVBQyxnQkFGQTs7QUFBQSxtQkFJRUwsc0RBQVEsQ0FBQ0ksYUFBYSxHQUFHQSxhQUFhLENBQUNFLElBQWpCLEdBQXdCLElBQXRDLENBSlY7QUFBQSxNQUlmQSxJQUplO0FBQUEsTUFJVEMsT0FKUzs7QUFBQSxtQkFNZ0JQLHNEQUFRLENBQUNJLGFBQWEsR0FBR0EsYUFBYSxDQUFDSSxXQUFqQixHQUErQixLQUE3QyxDQU54QjtBQUFBLE1BTWZB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QyxhQUFsQjtBQUFnQyxzQkFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEsdUJBQUlmLGNBQWMsQ0FBQ2UsQ0FBQyxDQUFDRyxPQUFILENBQWxCO0FBQUEsZUFBM0M7QUFBMEUscUJBQU8sRUFBRW5CO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFPLHFCQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBd0JJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBRTtBQUFFb0IsdUJBQVcsRUFBRTtBQUFmLFdBQWhDO0FBQXlELGVBQUssRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSixlQTRCSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQXVCLGVBQU8sRUFBRTtBQUFBLGlCQUFNVixLQUFLLEVBQVg7QUFBQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFxQ0g7O0dBbEZRcEIsUztVQUU4Q0csdUQsRUFVcENjLHFEOzs7S0FaVmpCLFM7QUFvRk0scUVBQUErQixxRUFBUSxDQUFDL0IsU0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbmltZS9mb3JtLmY1ODNhMGU0NWRiNDUyMjE1YTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSAncHJpbWVyZWFjdC9maWVsZHNldCc7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdwcmltZXJlYWN0L2NoZWNrYm94JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ3ByaW1lcmVhY3QvdG9hc3QnO1xyXG5cclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcclxuXHJcbmltcG9ydCAncHJpbWVmbGV4L3ByaW1lZmxleC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FuaW1lRGF0YVNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBbmltZUZvcm0ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbYW5pbWVTZWxlY3RlZCwgc2V0QW5pbWVTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxvYWRTZWxlY3RlZERhdGFSZWR1Y2VyLmFuaW1lU2VsZWN0ZWQpKTtcclxuXHJcbiAgICBjb25zdCBbbm9tZSwgc2V0Tm9tZV0gPSB1c2VTdGF0ZShhbmltZVNlbGVjdGVkID8gYW5pbWVTZWxlY3RlZC5ub21lIDogbnVsbCk7XHJcblxyXG4gICAgY29uc3QgW3Bvc3N1aU1hbmdhLCBzZXRQb3NzdWlNYW5nYV0gPSB1c2VTdGF0ZShhbmltZVNlbGVjdGVkID8gYW5pbWVTZWxlY3RlZC5wb3NzdWlNYW5nYSA6IGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdGVtcG9yYWRhLCBzZXRUZW1wb3JhZGFdID0gdXNlU3RhdGUoYW5pbWVTZWxlY3RlZCA/IGFuaW1lU2VsZWN0ZWQudGVtcG9yYWRhIDogbnVsbCk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd01lc3NhZ2UoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9hbmltZScpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIF9zYXZlKCkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1lID0geyBpZDogYW5pbWVTZWxlY3RlZC5pZCwgbm9tZTogbm9tZSwgcG9zc3VpTWFuZ2E6IHBvc3N1aU1hbmdhLCB0ZW1wb3JhZGE6IE51bWJlcih0ZW1wb3JhZGEpIH07XHJcbiAgICAgICAgaWYgKCFhbmltZS5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWYnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYW5pbWUpO1xyXG4gICAgICAgICAgICAvLyBBbmltZURhdGFTZXJ2aWNlLl9wb3N0KGFuaW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNlc3NvJywgZGV0YWlsOiAnUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIScsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnRVhFQ1VUQURPIFBPU1QnKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICByb3V0ZXIucHVzaCgnL2FuaW1lJyk7XHJcbiAgICAgICAgICAgIC8vICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbmltZSk7XHJcbiAgICAgICAgICAgIC8vIEFuaW1lRGF0YVNlcnZpY2UuX3B1dChhbmltZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogJ3N1Y2Nlc3MnLCBzdW1tYXJ5OiAnU3VjZXNzbycsIGRldGFpbDogJ1JlZ2lzdHJvIGFsdGVyYWRvIGNvbSBzdWNlc3NvIScsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnRVhFQ1VUQURPIFBVVCcpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJvdXRlci5wdXNoKCcvYW5pbWUnKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkFuaW1lIEZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZmllbGQgcC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9tZVwiIGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMlwiPk5vbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cIm5vbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtub21lfSBvbkNoYW5nZT17KGUpID0+IHNldE5vbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZmllbGQgcC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVtcG9yYWRhXCIgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0yXCI+VGVtcG9yYWRhOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cInRlbXBvcmFkYVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RlbXBvcmFkYX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUZW1wb3JhZGEoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZmllbGQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggaW5wdXRJZD1cInBvc3N1aU1hbmdhXCIgb25DaGFuZ2U9e2UgPT4gc2V0UG9zc3VpTWFuZ2EoZS5jaGVja2VkKX0gY2hlY2tlZD17cG9zc3VpTWFuZ2F9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvc3N1aU1hbmdhXCI+UG9zc3VpIG1hbmfDoSA/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9J2JhY2stYnV0dG9uJyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzE1cHgnIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FsdmFyXCIgb25DbGljaz17KCkgPT4gX3NhdmUoKX0gLz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChBbmltZUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=