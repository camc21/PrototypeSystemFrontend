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
      console.log('else');
      console.log(anime);

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
      lineNumber: 67,
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
            lineNumber: 72,
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
              lineNumber: 74,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-field p-grid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "temporada",
            className: "p-col-12 p-md-2",
            children: "Temporada:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
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
              lineNumber: 80,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
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
              lineNumber: 85,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "possuiManga",
              children: "Possui mang\xE1 ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        label: "Salvar",
        onClick: function onClick() {
          return _save();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvZm9ybS5qc3giXSwibmFtZXMiOlsiQW5pbWVGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsb2FkU2VsZWN0ZWREYXRhUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwibm9tZSIsInNldE5vbWUiLCJwb3NzdWlNYW5nYSIsInNldFBvc3N1aU1hbmdhIiwidGVtcG9yYWRhIiwic2V0VGVtcG9yYWRhIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93TWVzc2FnZSIsInB1c2giLCJfc2F2ZSIsImFuaW1lIiwiaWQiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiQW5pbWVEYXRhU2VydmljZSIsIl9wb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJsaWZlIiwic2V0VGltZW91dCIsIl9wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2VkIiwibWFyZ2luUmlnaHQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7O0FBSUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsdUJBQU4sQ0FBOEJDLGFBQXpDO0FBQUEsR0FBRCxDQUFaLENBRjVCO0FBQUEsTUFFZkEsYUFGZTtBQUFBLE1BRUFDLGdCQUZBOztBQUFBLG1CQUlFTCxzREFBUSxDQUFDSSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ0UsSUFBakIsR0FBd0IsSUFBdEMs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QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBd0JJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBRTtBQUFFZ0MsdUJBQVcsRUFBRTtBQUFmLFdBQWhDO0FBQXlELGVBQUssRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSixlQTRCSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQXVCLGVBQU8sRUFBRTtBQUFBLGlCQUFNdEIsS0FBSyxFQUFYO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBcUNIOztHQWpGUXBCLFM7VUFFOENHLHVELEVBVXBDYyxxRDs7O0tBWlZqQixTO0FBbUZNLHFFQUFBMkMscUVBQVEsQ0FBQzNDLFNBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5pbWUvZm9ybS4xMDI0NDZiNzIxMzcxZWE5ZWI4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gJ3ByaW1lcmVhY3QvZmllbGRzZXQnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAncHJpbWVyZWFjdC9jaGVja2JveCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdwcmltZXJlYWN0L3RvYXN0JztcclxuXHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XHJcblxyXG5pbXBvcnQgJ3ByaW1lZmxleC9wcmltZWZsZXguY3NzJztcclxuXHJcbmltcG9ydCB7IEFuaW1lRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BbmltZURhdGFTZXJ2aWNlJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQW5pbWVGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FuaW1lU2VsZWN0ZWQsIHNldEFuaW1lU2VsZWN0ZWRdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2FkU2VsZWN0ZWREYXRhUmVkdWNlci5hbmltZVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUoYW5pbWVTZWxlY3RlZCA/IGFuaW1lU2VsZWN0ZWQubm9tZSA6IG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtwb3NzdWlNYW5nYSwgc2V0UG9zc3VpTWFuZ2FdID0gdXNlU3RhdGUoYW5pbWVTZWxlY3RlZCA/IGFuaW1lU2VsZWN0ZWQucG9zc3VpTWFuZ2EgOiBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3RlbXBvcmFkYSwgc2V0VGVtcG9yYWRhXSA9IHVzZVN0YXRlKGFuaW1lU2VsZWN0ZWQgPyBhbmltZVNlbGVjdGVkLnRlbXBvcmFkYSA6IG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYW5pbWUnKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBhbmltZSA9IHsgaWQ6IGFuaW1lU2VsZWN0ZWQuaWQsIG5vbWU6IG5vbWUsIHBvc3N1aU1hbmdhOiBwb3NzdWlNYW5nYSwgdGVtcG9yYWRhOiBOdW1iZXIodGVtcG9yYWRhKSB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFuaW1lKTtcclxuICAgICAgICBpZiAoYW5pbWUuaWQpIHtcclxuICAgICAgICAgICAgQW5pbWVEYXRhU2VydmljZS5fcG9zdChhbmltZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogJ3N1Y2Nlc3MnLCBzdW1tYXJ5OiAnU3VjZXNzbycsIGRldGFpbDogJ1JlZ2lzdHJvIGNyaWFkbyBjb20gc3VjZXNzbyEnLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VYRUNVVEFETyBQT1NUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hbmltZScpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYW5pbWUpO1xyXG4gICAgICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9wdXQoYW5pbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ1N1Y2Vzc28nLCBkZXRhaWw6ICdSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyEnLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VYRUNVVEFETyBQVVQnKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2FuaW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJBbmltZSBGb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkIHAtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWVcIiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTJcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJub21lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bm9tZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROb21lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkIHAtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlbXBvcmFkYVwiIGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMlwiPlRlbXBvcmFkYTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJ0ZW1wb3JhZGFcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0ZW1wb3JhZGF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVtcG9yYWRhKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWZpZWxkLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1maWVsZC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlucHV0SWQ9XCJwb3NzdWlNYW5nYVwiIG9uQ2hhbmdlPXtlID0+IHNldFBvc3N1aU1hbmdhKGUuY2hlY2tlZCl9IGNoZWNrZWQ9e3Bvc3N1aU1hbmdhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3NzdWlNYW5nYVwiPlBvc3N1aSBtYW5nw6EgPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYW5pbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPSdiYWNrLWJ1dHRvbicgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNXB4JyB9fSBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhbHZhclwiIG9uQ2xpY2s9eygpID0+IF9zYXZlKCl9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQW5pbWVGb3JtKTsiXSwic291cmNlUm9vdCI6IiJ9