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
/* harmony import */ var D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox/checkbox.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/AnimeDataService */ "./services/AnimeDataService.jsx");
/* harmony import */ var _store_actions_anime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/anime */ "./store/actions/anime/index.jsx");




var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\anime\\form.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















function AnimeForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.animeSelectedReducer.animeSelected;
  })),
      animeSelected = _useState[0],
      setAnimeSelected = _useState[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(animeSelected);
  }, []);

  function _save() {
    if (!animeSelected.id) {
      _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_14__["AnimeDataService"]._post(animeSelected).then(function (response) {
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
      _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_14__["AnimeDataService"]._put(animeSelected).then(function (response) {
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

  function onChangeNome(e) {
    var animeAux = _objectSpread({}, animeSelected);

    animeAux.nome = e.target.value;
    setAnimeSelected(animeAux);
  }

  function onChangeTemporada(e) {
    var animeAux = _objectSpread({}, animeSelected);

    animeAux.temporada = e.value;
    setAnimeSelected(animeAux);
  }

  function onChangePossuiManga(e) {
    var animeAux = _objectSpread({}, animeSelected);

    animeAux.possuiManga = e.checked;
    setAnimeSelected(animeAux);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__["Fieldset"], {
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
            lineNumber: 85,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-col-12 p-md-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
              id: "nome",
              value: animeSelected && animeSelected.nome,
              onChange: function onChange(e) {
                return onChangeNome(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field p-grid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "temporada",
            className: "p-col-12 p-md-2",
            children: "Temporada:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-col-12 p-md-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__["InputNumber"], {
              id: "temporada",
              value: animeSelected && animeSelected.temporada,
              onChange: function onChange(e) {
                return onChangeTemporada(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field-checkbox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-field-checkbox",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
              inputId: "possuiManga",
              checked: animeSelected && animeSelected.possuiManga,
              onChange: function onChange(e) {
                return onChangePossuiManga(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "possuiManga",
              children: "Possui mang\xE1 ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/anime",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "back-button",
          style: {
            marginRight: '15px'
          },
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(AnimeForm, "wo0vZpYU9+joHF+oVRP4fEesZR4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = AnimeForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_12__["default"])(AnimeForm));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvZm9ybS5qc3giXSwibmFtZXMiOlsiQW5pbWVGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhbmltZVNlbGVjdGVkUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIl9zYXZlIiwiaWQiLCJBbmltZURhdGFTZXJ2aWNlIiwiX3Bvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsImxpZmUiLCJzZXRUaW1lb3V0IiwicHVzaCIsIl9wdXQiLCJvbkNoYW5nZU5vbWUiLCJlIiwiYW5pbWVBdXgiLCJub21lIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVRlbXBvcmFkYSIsInRlbXBvcmFkYSIsIm9uQ2hhbmdlUG9zc3VpTWFuZ2EiLCJwb3NzdWlNYW5nYSIsImNoZWNrZWQiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTs7QUFJQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxvQkFBTixDQUEyQkMsYUFBdEM7QUFBQSxHQUFELENBQVosQ0FGNUI7QUFBQSxNQUVmQSxhQUZlO0FBQUEsTUFFQUMsZ0JBRkE7O0FBSXRCLE1BQU1DLEtBQUss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O0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUF3QkkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsWUFBRSxFQUFDLGFBQVg7QUFBeUIsZUFBSyxFQUFFO0FBQUVVLHVCQUFXLEVBQUU7QUFBZixXQUFoQztBQUF5RCxlQUFLLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkosZUE0QkkscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsUUFBZDtBQUFzQixlQUFPLEVBQUUxQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFxQ0g7O0dBM0ZRakIsUztVQUU4Q0csdUQsRUFHcENRLHFELEVBQ0VFLHVEOzs7S0FOWmIsUztBQTZGTSxxRUFBQTRDLHFFQUFRLENBQUM1QyxTQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FuaW1lL2Zvcm0uNWZkNDg4NTc3NThiZWQ3NTYwNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tICdwcmltZXJlYWN0L2ZpZWxkc2V0JztcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ3ByaW1lcmVhY3QvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAncHJpbWVyZWFjdC90b2FzdCc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dG51bWJlcic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGgnO1xyXG5cclxuaW1wb3J0ICdwcmltZWZsZXgvcHJpbWVmbGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgeyBBbmltZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQW5pbWVEYXRhU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBsb2FkU2VsZWN0ZWREYXRhQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9hbmltZSc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFuaW1lRm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFthbmltZVNlbGVjdGVkLCBzZXRBbmltZVNlbGVjdGVkXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW5pbWVTZWxlY3RlZFJlZHVjZXIuYW5pbWVTZWxlY3RlZCkpO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhbmltZVNlbGVjdGVkKTtcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIF9zYXZlKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghYW5pbWVTZWxlY3RlZC5pZCkge1xyXG4gICAgICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9wb3N0KGFuaW1lU2VsZWN0ZWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ1N1Y2Vzc28nLCBkZXRhaWw6ICdSZWdpc3RybyBjcmlhZG8gY29tIHN1Y2Vzc28hJywgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFWEVDVVRBRE8gUE9TVCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYW5pbWUnKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFuaW1lRGF0YVNlcnZpY2UuX3B1dChhbmltZVNlbGVjdGVkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNlc3NvJywgZGV0YWlsOiAnUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hJywgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFWEVDVVRBRE8gUFVUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hbmltZScpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5vbWUoZSkge1xyXG4gICAgICAgIGxldCBhbmltZUF1eCA9IHsuLi5hbmltZVNlbGVjdGVkfTtcclxuICAgICAgICBhbmltZUF1eC5ub21lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0QW5pbWVTZWxlY3RlZChhbmltZUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VUZW1wb3JhZGEoZSkge1xyXG4gICAgICAgIGxldCBhbmltZUF1eCA9IHsuLi5hbmltZVNlbGVjdGVkfTtcclxuICAgICAgICBhbmltZUF1eC50ZW1wb3JhZGEgPSBlLnZhbHVlO1xyXG4gICAgICAgIHNldEFuaW1lU2VsZWN0ZWQoYW5pbWVBdXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUG9zc3VpTWFuZ2EoZSkge1xyXG4gICAgICAgIGxldCBhbmltZUF1eCA9IHsuLi5hbmltZVNlbGVjdGVkfTtcclxuICAgICAgICBhbmltZUF1eC5wb3NzdWlNYW5nYSA9IGUuY2hlY2tlZDtcclxuICAgICAgICBzZXRBbmltZVNlbGVjdGVkKGFuaW1lQXV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiQW5pbWUgRm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZCBwLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21lXCIgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0yXCI+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwibm9tZVwiIHZhbHVlPXthbmltZVNlbGVjdGVkICYmIGFuaW1lU2VsZWN0ZWQubm9tZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU5vbWUoZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZCBwLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZW1wb3JhZGFcIiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTJcIj5UZW1wb3JhZGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROdW1iZXIgaWQ9XCJ0ZW1wb3JhZGFcIiB2YWx1ZT17YW5pbWVTZWxlY3RlZCAmJiBhbmltZVNlbGVjdGVkLnRlbXBvcmFkYX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZVRlbXBvcmFkYShlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlucHV0SWQ9XCJwb3NzdWlNYW5nYVwiIGNoZWNrZWQ9e2FuaW1lU2VsZWN0ZWQgJiYgYW5pbWVTZWxlY3RlZC5wb3NzdWlNYW5nYX0gb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VQb3NzdWlNYW5nYShlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9zc3VpTWFuZ2FcIj5Qb3NzdWkgbWFuZ8OhID88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nYmFjay1idXR0b24nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTVweCcgfX0gbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJTYWx2YXJcIm9uQ2xpY2s9e19zYXZlfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFuaW1lRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==