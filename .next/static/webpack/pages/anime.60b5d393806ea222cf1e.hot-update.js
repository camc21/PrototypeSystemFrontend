webpackHotUpdate_N_E("pages/anime",{

/***/ "./pages/anime/index.jsx":
/*!*******************************!*\
  !*** ./pages/anime/index.jsx ***!
  \*******************************/
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
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/AnimeDataService */ "./services/AnimeDataService.jsx");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var _store_actions_anime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/anime */ "./store/actions/anime/index.jsx");



var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\anime\\index.jsx",
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

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      console.log('Foi desmontado');
      setListaAnimes(null);
      setAnimeSelecionado(null);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    listarAnimes();
  }, []);

  function listarAnimes() {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_9__["AnimeDataService"].listarAnimes().then(function (response) {
      setListaAnimes(response.data.animes);
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  var novo = function novo() {
    setAnimeSelecionado(null);
    dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_11__["loadSelectedDataAction"])(null));
  };

  var editar = function editar(rowData) {
    console.log(rowData);
    setAnimeSelecionado(rowData);
    dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_11__["loadSelectedDataAction"])(rowData));
  };

  var _delete = function _delete(rowData) {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_9__["AnimeDataService"]._delete(rowData.id).then(function (response) {
      toast.current.show({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Anime ' + rowData.nome + ' excluído com sucesso!',
        life: 3000
      });
    });
  };

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/anime/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          style: {
            marginRight: '10px'
          },
          icon: "pi pi-pencil",
          className: "p-button-rounded p-button-success p-mr-2",
          onClick: function onClick() {
            return editar(rowData);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  };

  var possuiManga = function possuiManga(atributte) {
    if (atributte) {
      return 'Possui Mangá';
    }

    return 'Não Possui Mangá';
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_8__["Fieldset"], {
      legend: "Anime",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/anime/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "new-button",
          label: "Novo",
          onClick: function onClick() {
            return novo({});
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTable"], {
        header: "Animes Cadastrados",
        value: listaAnimes,
        selectionMode: "single",
        selection: animeSelecionado,
        onSelectionChange: function onSelectionChange(e) {
          setAnimeSelecionado(e.value);
        },
        dataKey: "id",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "nome",
          header: "Nome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "temporada",
          header: "Temporada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: function field(e) {
            return possuiManga(e.possuiManga);
          },
          header: "Possui mang\xE1 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Anime, "tPG8x440pxzV15KOWhUAsz0mSO0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = Anime;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(Anime));

var _c, _c2;

$RefreshReg$(_c, "Anime");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RhQW5pbWVzIiwic2V0TGlzdGFBbmltZXMiLCJhbmltZVNlbGVjaW9uYWRvIiwic2V0QW5pbWVTZWxlY2lvbmFkbyIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0YXJBbmltZXMiLCJBbmltZURhdGFTZXJ2aWNlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFuaW1lcyIsImVycm9yIiwibm92byIsImxvYWRTZWxlY3RlZERhdGFBY3Rpb24iLCJlZGl0YXIiLCJyb3dEYXRhIiwiX2RlbGV0ZSIsImlkIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJub21lIiwibGlmZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsIm1hcmdpblJpZ2h0IiwicG9zc3VpTWFuZ2EiLCJhdHJpYnV0dGUiLCJlIiwidmFsdWUiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQyxFQUFELENBRjVCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGNBRkY7O0FBQUEsbUJBRzhCRixzREFBUSxDQUFDLEVBQUQsQ0FIdEM7QUFBQSxNQUdYRyxnQkFIVztBQUFBLE1BR09DLG1CQUhQOztBQUtsQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMs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USxZQUFFLEVBQUMsYUFBWDtBQUF5QixlQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQTZCSDs7R0E1RlFsQyxLO1VBT1lVLHVEOzs7S0FQWlYsSztBQThGTSxxRUFBQXdDLHFFQUFRLENBQUN4QyxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FuaW1lLjYwYjVkMzkzODA2ZWEyMjJjZjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdwcmltZXJlYWN0L3RvYXN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tICdwcmltZXJlYWN0L2ZpZWxkc2V0JztcclxuXHJcbmltcG9ydCB7IEFuaW1lRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BbmltZURhdGFTZXJ2aWNlJztcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGgnO1xyXG5pbXBvcnQgeyBsb2FkU2VsZWN0ZWREYXRhQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9hbmltZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gQW5pbWUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbbGlzdGFBbmltZXMsIHNldExpc3RhQW5pbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthbmltZVNlbGVjaW9uYWRvLCBzZXRBbmltZVNlbGVjaW9uYWRvXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRm9pIGRlc21vbnRhZG8nKTtcclxuICAgICAgICAgICAgc2V0TGlzdGFBbmltZXMobnVsbCk7XHJcbiAgICAgICAgICAgIHNldEFuaW1lU2VsZWNpb25hZG8obnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsaXN0YXJBbmltZXMoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RhckFuaW1lcygpIHtcclxuICAgICAgICBBbmltZURhdGFTZXJ2aWNlLmxpc3RhckFuaW1lcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldExpc3RhQW5pbWVzKHJlc3BvbnNlLmRhdGEuYW5pbWVzKTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm92byA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmltZVNlbGVjaW9uYWRvKG51bGwpO1xyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRTZWxlY3RlZERhdGFBY3Rpb24obnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRhciA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocm93RGF0YSk7XHJcbiAgICAgICAgc2V0QW5pbWVTZWxlY2lvbmFkbyhyb3dEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKHJvd0RhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZGVsZXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9kZWxldGUocm93RGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNlc3NvJywgZGV0YWlsOiAnQW5pbWUgJyArIHJvd0RhdGEubm9tZSArICcgZXhjbHXDrWRvIGNvbSBzdWNlc3NvIScsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gaWNvbj1cInBpIHBpLXBlbmNpbFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tc3VjY2VzcyBwLW1yLTJcIiBvbkNsaWNrPXsoKSA9PiBlZGl0YXIocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiBfZGVsZXRlKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3N1aU1hbmdhID0gKGF0cmlidXR0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChhdHJpYnV0dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdQb3NzdWkgTWFuZ8OhJztcclxuICAgICAgICB9IHJldHVybiAnTsOjbyBQb3NzdWkgTWFuZ8OhJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiQW5pbWVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPSduZXctYnV0dG9uJyBsYWJlbD1cIk5vdm9cIiBvbkNsaWNrPXsoKSA9PiBub3ZvKHt9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiQW5pbWVzIENhZGFzdHJhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlzdGFBbmltZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXthbmltZVNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtlID0+IHsgc2V0QW5pbWVTZWxlY2lvbmFkbyhlLnZhbHVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJub21lXCIgaGVhZGVyPVwiTm9tZVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0ZW1wb3JhZGFcIiBoZWFkZXI9XCJUZW1wb3JhZGFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPXtlID0+IHBvc3N1aU1hbmdhKGUucG9zc3VpTWFuZ2EpfSBoZWFkZXI9XCJQb3NzdWkgbWFuZ8OhID9cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9J2JhY2stYnV0dG9uJyBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChBbmltZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==