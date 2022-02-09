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
      _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_12__["AnimeDataService"]._post(anime).then(function (response) {
        toast.current.show({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Registro criado com sucesso!',
          life: 3000
        });
        setTimeout(function () {
          console.log('EXECUTADO POST');
          router.push('/anime');
        }, 3000);
      });
    } else {
      _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_12__["AnimeDataService"]._put(anime).then(function (response) {
        toast.current.show({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Registro alterado com sucesso!',
          life: 3000
        });
        setTimeout(function () {
          console.log('EXECUTADO PUT');
          router.push('/anime');
        }, 3000);
      });
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
            lineNumber: 69,
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
              lineNumber: 71,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field p-grid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "temporada",
            className: "p-col-12 p-md-2",
            children: "Temporada:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
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
              lineNumber: 77,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "possuiManga",
              children: "Possui mang\xE1 ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
          lineNumber: 90,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        label: "Salvar",
        onClick: function onClick() {
          return _save();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvZm9ybS5qc3giXSwibmFtZXMiOlsiQW5pbWVGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsb2FkU2VsZWN0ZWREYXRhUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwibm9tZSIsInNldE5vbWUiLCJwb3NzdWlNYW5nYSIsInNldFBvc3N1aU1hbmdhIiwidGVtcG9yYWRhIiwic2V0VGVtcG9yYWRhIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93TWVzc2FnZSIsInB1c2giLCJfc2F2ZSIsImFuaW1lIiwiaWQiLCJOdW1iZXIiLCJBbmltZURhdGFTZXJ2aWNlIiwiX3Bvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsImxpZmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIl9wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2VkIiwibWFyZ2luUmlnaHQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7O0FBSUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsdUJBQU4sQ0FBOEJDLGFBQXpDO0FBQUEsR0FBRCxDQUFaLENBRjVCO0FBQUEsTUFFZkEsYUFGZTtBQUFBLE1BRUFDLGdCQUZBOztBQUFBLG1CQUlFTCxzREFBUSxDQUFDSSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ0UsSUFBakIsR0FBd0IsSUFBdEMs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QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsWUFBRSxFQUFDLGFBQVg7QUFBeUIsZUFBSyxFQUFFO0FBQUVnQyx1QkFBVyxFQUFFO0FBQWYsV0FBaEM7QUFBeUQsZUFBSyxFQUFDO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJKLGVBNEJJLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBdUIsZUFBTyxFQUFFO0FBQUEsaUJBQU10QixLQUFLLEVBQVg7QUFBQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFxQ0g7O0dBOUVRcEIsUztVQUU4Q0csdUQsRUFVcENjLHFEOzs7S0FaVmpCLFM7QUFnRk0scUVBQUEyQyxxRUFBUSxDQUFDM0MsU0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbmltZS9mb3JtLmZlOTYzYTQzMGQ5NTNiOWFlMmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSAncHJpbWVyZWFjdC9maWVsZHNldCc7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdwcmltZXJlYWN0L2NoZWNrYm94JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ3ByaW1lcmVhY3QvdG9hc3QnO1xyXG5cclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcclxuXHJcbmltcG9ydCAncHJpbWVmbGV4L3ByaW1lZmxleC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FuaW1lRGF0YVNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBbmltZUZvcm0ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbYW5pbWVTZWxlY3RlZCwgc2V0QW5pbWVTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxvYWRTZWxlY3RlZERhdGFSZWR1Y2VyLmFuaW1lU2VsZWN0ZWQpKTtcclxuXHJcbiAgICBjb25zdCBbbm9tZSwgc2V0Tm9tZV0gPSB1c2VTdGF0ZShhbmltZVNlbGVjdGVkID8gYW5pbWVTZWxlY3RlZC5ub21lIDogbnVsbCk7XHJcblxyXG4gICAgY29uc3QgW3Bvc3N1aU1hbmdhLCBzZXRQb3NzdWlNYW5nYV0gPSB1c2VTdGF0ZShhbmltZVNlbGVjdGVkID8gYW5pbWVTZWxlY3RlZC5wb3NzdWlNYW5nYSA6IGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdGVtcG9yYWRhLCBzZXRUZW1wb3JhZGFdID0gdXNlU3RhdGUoYW5pbWVTZWxlY3RlZCA/IGFuaW1lU2VsZWN0ZWQudGVtcG9yYWRhIDogbnVsbCk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd01lc3NhZ2UoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9hbmltZScpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIF9zYXZlKCkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1lID0geyBpZDogYW5pbWVTZWxlY3RlZC5pZCwgbm9tZTogbm9tZSwgcG9zc3VpTWFuZ2E6IHBvc3N1aU1hbmdhLCB0ZW1wb3JhZGE6IE51bWJlcih0ZW1wb3JhZGEpIH07XHJcbiAgICAgICAgaWYgKCFhbmltZS5pZCkge1xyXG4gICAgICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9wb3N0KGFuaW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNlc3NvJywgZGV0YWlsOiAnUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIScsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVhFQ1VUQURPIFBPU1QnKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2FuaW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9wdXQoYW5pbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ1N1Y2Vzc28nLCBkZXRhaWw6ICdSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyEnLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VYRUNVVEFETyBQVVQnKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2FuaW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJBbmltZSBGb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkIHAtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWVcIiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTJcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJub21lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bm9tZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROb21lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkIHAtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlbXBvcmFkYVwiIGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMlwiPlRlbXBvcmFkYTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJ0ZW1wb3JhZGFcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0ZW1wb3JhZGF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVtcG9yYWRhKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlucHV0SWQ9XCJwb3NzdWlNYW5nYVwiIG9uQ2hhbmdlPXtlID0+IHNldFBvc3N1aU1hbmdhKGUuY2hlY2tlZCl9IGNoZWNrZWQ9e3Bvc3N1aU1hbmdhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3NzdWlNYW5nYVwiPlBvc3N1aSBtYW5nw6EgPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYW5pbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPSdiYWNrLWJ1dHRvbicgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNXB4JyB9fSBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhbHZhclwiIG9uQ2xpY2s9eygpID0+IF9zYXZlKCl9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQW5pbWVGb3JtKTsiXSwic291cmNlUm9vdCI6IiJ9