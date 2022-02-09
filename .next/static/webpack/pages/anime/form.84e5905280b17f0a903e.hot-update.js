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
    console.log(anime);

    if (anime.id) {
      console.log('if'); // AnimeDataService._post(anime).then(response => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvZm9ybS5qc3giXSwibmFtZXMiOlsiQW5pbWVGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsb2FkU2VsZWN0ZWREYXRhUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwibm9tZSIsInNldE5vbWUiLCJwb3NzdWlNYW5nYSIsInNldFBvc3N1aU1hbmdhIiwidGVtcG9yYWRhIiwic2V0VGVtcG9yYWRhIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93TWVzc2FnZSIsInB1c2giLCJfc2F2ZSIsImFuaW1lIiwiaWQiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBOztBQUlBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHVCQUFOLENBQThCQyxhQUF6QztBQUFBLEdBQUQsQ0FBWixDQUY1QjtBQUFBLE1BRWZBLGFBRmU7QUFBQSxNQUVBQyxnQkFGQTs7QUFBQSxtQkFJRUwsc0RBQVEsQ0FBQ0ksYUFBYSxHQUFHQSxhQUFhLENBQUNFLElBQWpCLEdBQXdCLElBQXRDLENBSlY7QUFBQSxNQUlmQSxJQUplO0FBQUEsTUFJVEMsT0FKUzs7QUFBQSxtQkFNZ0JQLHNEQUFRLENBQUNJLGFBQWEsR0FBR0EsYUFBYSxDQUFDSSxXQUFqQixHQUErQixLQUE3QyxDQU54QjtBQUFBLE1BTWZB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bEI7QUFBZ0Msc0JBQVEsRUFBRSxrQkFBQUYsQ0FBQztBQUFBLHVCQUFJZixjQUFjLENBQUNlLENBQUMsQ0FBQ0csT0FBSCxDQUFsQjtBQUFBLGVBQTNDO0FBQTBFLHFCQUFPLEVBQUVuQjtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBTyxxQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQXdCSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxZQUFFLEVBQUMsYUFBWDtBQUF5QixlQUFLLEVBQUU7QUFBRW9CLHVCQUFXLEVBQUU7QUFBZixXQUFoQztBQUF5RCxlQUFLLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkosZUE0QkkscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsUUFBZDtBQUF1QixlQUFPLEVBQUU7QUFBQSxpQkFBTVYsS0FBSyxFQUFYO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBcUNIOztHQWxGUXBCLFM7VUFFOENHLHVELEVBVXBDYyxxRDs7O0tBWlZqQixTO0FBb0ZNLHFFQUFBK0IscUVBQVEsQ0FBQy9CLFNBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5pbWUvZm9ybS44NGU1OTA1MjgwYjE3ZjBhOTAzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gJ3ByaW1lcmVhY3QvZmllbGRzZXQnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAncHJpbWVyZWFjdC9jaGVja2JveCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdwcmltZXJlYWN0L3RvYXN0JztcclxuXHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XHJcblxyXG5pbXBvcnQgJ3ByaW1lZmxleC9wcmltZWZsZXguY3NzJztcclxuXHJcbmltcG9ydCB7IEFuaW1lRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BbmltZURhdGFTZXJ2aWNlJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQW5pbWVGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FuaW1lU2VsZWN0ZWQsIHNldEFuaW1lU2VsZWN0ZWRdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2FkU2VsZWN0ZWREYXRhUmVkdWNlci5hbmltZVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUoYW5pbWVTZWxlY3RlZCA/IGFuaW1lU2VsZWN0ZWQubm9tZSA6IG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtwb3NzdWlNYW5nYSwgc2V0UG9zc3VpTWFuZ2FdID0gdXNlU3RhdGUoYW5pbWVTZWxlY3RlZCA/IGFuaW1lU2VsZWN0ZWQucG9zc3VpTWFuZ2EgOiBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3RlbXBvcmFkYSwgc2V0VGVtcG9yYWRhXSA9IHVzZVN0YXRlKGFuaW1lU2VsZWN0ZWQgPyBhbmltZVNlbGVjdGVkLnRlbXBvcmFkYSA6IG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYW5pbWUnKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBhbmltZSA9IHsgaWQ6IGFuaW1lU2VsZWN0ZWQuaWQsIG5vbWU6IG5vbWUsIHBvc3N1aU1hbmdhOiBwb3NzdWlNYW5nYSwgdGVtcG9yYWRhOiBOdW1iZXIodGVtcG9yYWRhKSB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFuaW1lKTtcclxuICAgICAgICBpZiAoYW5pbWUuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lmJyk7XHJcbiAgICAgICAgICAgIC8vIEFuaW1lRGF0YVNlcnZpY2UuX3Bvc3QoYW5pbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ1N1Y2Vzc28nLCBkZXRhaWw6ICdSZWdpc3RybyBjcmlhZG8gY29tIHN1Y2Vzc28hJywgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdFWEVDVVRBRE8gUE9TVCcpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJvdXRlci5wdXNoKCcvYW5pbWUnKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbHNlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuaW1lKTtcclxuICAgICAgICAgICAgLy8gQW5pbWVEYXRhU2VydmljZS5fcHV0KGFuaW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNlc3NvJywgZGV0YWlsOiAnUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hJywgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdFWEVDVVRBRE8gUFVUJyk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcm91dGVyLnB1c2goJy9hbmltZScpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiQW5pbWUgRm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZCBwLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21lXCIgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0yXCI+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwibm9tZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25vbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm9tZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZCBwLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZW1wb3JhZGFcIiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTJcIj5UZW1wb3JhZGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwidGVtcG9yYWRhXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGVtcG9yYWRhfSBvbkNoYW5nZT17KGUpID0+IHNldFRlbXBvcmFkYShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZmllbGQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBpbnB1dElkPVwicG9zc3VpTWFuZ2FcIiBvbkNoYW5nZT17ZSA9PiBzZXRQb3NzdWlNYW5nYShlLmNoZWNrZWQpfSBjaGVja2VkPXtwb3NzdWlNYW5nYX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9zc3VpTWFuZ2FcIj5Qb3NzdWkgbWFuZ8OhID88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nYmFjay1idXR0b24nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTVweCcgfX0gbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJTYWx2YXJcIiBvbkNsaWNrPXsoKSA9PiBfc2F2ZSgpfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFuaW1lRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==