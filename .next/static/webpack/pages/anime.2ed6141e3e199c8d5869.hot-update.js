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
    try {
      _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_9__["AnimeDataService"].listarAnimes().then(function (response) {
        console.log(response.data);
        setListaAnimes(response.data.animes);
      });
    } catch (error) {
      console.log(error);
    }
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
          lineNumber: 70,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
      lineNumber: 86,
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
          lineNumber: 90,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 100,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "temporada",
          header: "Temporada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: function field(e) {
            return possuiManga(e.possuiManga);
          },
          header: "Possui mang\xE1 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RhQW5pbWVzIiwic2V0TGlzdGFBbmltZXMiLCJhbmltZVNlbGVjaW9uYWRvIiwic2V0QW5pbWVTZWxlY2lvbmFkbyIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0YXJBbmltZXMiLCJBbmltZURhdGFTZXJ2aWNlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFuaW1lcyIsImVycm9yIiwibm92byIsImxvYWRTZWxlY3RlZERhdGFBY3Rpb24iLCJlZGl0YXIiLCJyb3dEYXRhIiwiX2RlbGV0ZSIsImlkIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJub21lIiwibGlmZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsIm1hcmdpblJpZ2h0IiwicG9zc3VpTWFuZ2EiLCJhdHJpYnV0dGUiLCJlIiwidmFsdWUiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQyxFQUFELENBRjVCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGNBRkY7O0FBQUEsbUJBRzhCRixzREFBUSxDQUFDLEVBQUQsQ0FIdEM7QUFBQSxNQUdYRyxnQkFIVztBQUFBLE1BR09DLG1CQUhQOztBQUtsQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osV0FBTyxZQUFNO0FBQ1RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FULG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FFLHlCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDSCxLQUpEO0FBS0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVNBSyx5REFBUyxDQUFDLFlBQU07QUFDWkcsZ0JBQVk7QUFDZixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFdBQVNBLFlBQVQsR0FBd0I7QUFDcEIsUUFBSTtBQUNBQyxpRkFBZ0IsQ0FBQ0QsWUFBakIsR0FBZ0NFLElBQWhDLENBQXFDLFVBQUFDLFFBQVEsRUFBSTtBQUNqREwsZUFBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVEsQ0FBQ0MsSUFBckI7QUFDQWQsc0JBQWMsQ0FBQ2EsUUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWYsQ0FBZDtBQUNDLE9BSEQ7QUFJSCxLQUxELENBS0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1pSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0g7QUFDSjs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2ZmLHVCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDQUcsWUFBUSxDQUFDYSxvRkFBc0IsQ0FBQyxJQUFELENBQXZCLENBQVI7QUFDSCxHQUhEOztBQUtBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE9BQUQsRUFBYTtBQUN4QlosV0FBTyxDQUFDQyxHQUFSLENBQVlXLE9BQVo7QUFDQWxCLHVCQUFtQixDQUFDa0IsT0FBRCxDQUFuQjtBQUNBZixZQUFRLENBQUNhLG9GQUFzQixDQUFDRSxPQUFELENBQXZCLENBQVI7QUFDSCxHQUpEOztBQU1BLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELE9BQUQsRUFBYTtBQUN6QlQsK0VBQWdCLENBQUNVLE9BQWpCLENBQXlCRCxPQUFPLENBQUNFLEVBQWpDLEVBQXFDVixJQUFyQyxDQUEwQyxVQUFBQyxRQUFRLEVBQUk7QUFDbERWLFdBQUssQ0FBQ29CLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQjtBQUFFQyxnQkFBUSxFQUFFLFNBQVo7QUFBdUJDLGVBQU8sRUFBRSxTQUFoQztBQUEyQ0MsY0FBTSxFQUFFLFdBQVdQLE9BQU8sQ0FBQ1EsSUFBbkIsR0FBMEIsd0JBQTdFO0FBQXVHQyxZQUFJLEVBQUU7QUFBN0csT0FBbkI7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFNQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNWLE9BQUQsRUFBYTtBQUNwQyx3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLGVBQUssRUFBRTtBQUFFVyx1QkFBVyxFQUFFO0FBQWYsV0FBZjtBQUF3QyxjQUFJLEVBQUMsY0FBN0M7QUFBNEQsbUJBQVMsRUFBQywwQ0FBdEU7QUFBaUgsaUJBQU8sRUFBRTtBQUFBLG1CQUFNWixNQUFNLENBQUNDLE9BQUQsQ0FBWjtBQUFBO0FBQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxhQUFiO0FBQTJCLGlCQUFTLEVBQUMsbUNBQXJDO0FBQXlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxPQUFPLENBQUNELE9BQUQsQ0FBYjtBQUFBO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBLG9CQURKO0FBU0gsR0FWRDs7QUFZQSxNQUFNWSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQWU7QUFDL0IsUUFBSUEsU0FBSixFQUFlO0FBQ1gsYUFBTyxjQUFQO0FBQ0g7O0FBQUMsV0FBTyxrQkFBUDtBQUNMLEdBSkQ7O0FBTUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxzREFBRDtBQUFPLFNBQUcsRUFBRTlCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBVSxZQUFNLEVBQUMsT0FBakI7QUFBQSw4QkFFSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxZQUFFLEVBQUMsWUFBWDtBQUF3QixlQUFLLEVBQUMsTUFBOUI7QUFBcUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNYyxJQUFJLENBQUMsRUFBRCxDQUFWO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1JLHFFQUFDLDhEQUFEO0FBQ0ksY0FBTSxFQUFDLG9CQURYO0FBRUksYUFBSyxFQUFFbEIsV0FGWDtBQUdJLHFCQUFhLEVBQUMsUUFIbEI7QUFJSSxpQkFBUyxFQUFFRSxnQkFKZjtBQUtJLHlCQUFpQixFQUFFLDJCQUFBaUMsQ0FBQyxFQUFJO0FBQUVoQyw2QkFBbUIsQ0FBQ2dDLENBQUMsQ0FBQ0MsS0FBSCxDQUFuQjtBQUE4QixTQUw1RDtBQU1JLGVBQU8sRUFBQyxJQU5aO0FBQUEsZ0NBT0kscUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUMsTUFBZDtBQUFxQixnQkFBTSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFRSSxxRUFBQyx3REFBRDtBQUFRLGVBQUssRUFBQyxXQUFkO0FBQTBCLGdCQUFNLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQVNJLHFFQUFDLHdEQUFEO0FBQVEsZUFBSyxFQUFFLGVBQUFELENBQUM7QUFBQSxtQkFBSUYsV0FBVyxDQUFDRSxDQUFDLENBQUNGLFdBQUgsQ0FBZjtBQUFBLFdBQWhCO0FBQWdELGdCQUFNLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSixlQVVJLHFFQUFDLHdEQUFEO0FBQVEsY0FBSSxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFtQkkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsWUFBRSxFQUFDLGFBQVg7QUFBeUIsZUFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUE2Qkg7O0dBakdRbEMsSztVQU9ZVSx1RDs7O0tBUFpWLEs7QUFtR00scUVBQUF3QyxxRUFBUSxDQUFDeEMsS0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbmltZS4yZWQ2MTQxZTNlMTk5YzhkNTg2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAncHJpbWVyZWFjdC90b2FzdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSAncHJpbWVyZWFjdC9maWVsZHNldCc7XHJcblxyXG5pbXBvcnQgeyBBbmltZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQW5pbWVEYXRhU2VydmljZSc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcclxuaW1wb3J0IHsgbG9hZFNlbGVjdGVkRGF0YUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvYW5pbWUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFuaW1lKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2xpc3RhQW5pbWVzLCBzZXRMaXN0YUFuaW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYW5pbWVTZWxlY2lvbmFkbywgc2V0QW5pbWVTZWxlY2lvbmFkb10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZvaSBkZXNtb250YWRvJyk7XHJcbiAgICAgICAgICAgIHNldExpc3RhQW5pbWVzKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRBbmltZVNlbGVjaW9uYWRvKG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGlzdGFyQW5pbWVzKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0YXJBbmltZXMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgQW5pbWVEYXRhU2VydmljZS5saXN0YXJBbmltZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExpc3RhQW5pbWVzKHJlc3BvbnNlLmRhdGEuYW5pbWVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5pbWVTZWxlY2lvbmFkbyhudWxsKTtcclxuICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0YXIgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvd0RhdGEpO1xyXG4gICAgICAgIHNldEFuaW1lU2VsZWNpb25hZG8ocm93RGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZFNlbGVjdGVkRGF0YUFjdGlvbihyb3dEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5fZGVsZXRlKHJvd0RhdGEuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogJ3N1Y2Nlc3MnLCBzdW1tYXJ5OiAnU3VjZXNzbycsIGRldGFpbDogJ0FuaW1lICcgKyByb3dEYXRhLm5vbWUgKyAnIGV4Y2x1w61kbyBjb20gc3VjZXNzbyEnLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19IGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgb25DbGljaz17KCkgPT4gZWRpdGFyKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gX2RlbGV0ZShyb3dEYXRhKX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3NzdWlNYW5nYSA9IChhdHJpYnV0dGUpID0+IHtcclxuICAgICAgICBpZiAoYXRyaWJ1dHRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnUG9zc3VpIE1hbmfDoSc7XHJcbiAgICAgICAgfSByZXR1cm4gJ07Do28gUG9zc3VpIE1hbmfDoSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkFuaW1lXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nbmV3LWJ1dHRvbicgbGFiZWw9XCJOb3ZvXCIgb25DbGljaz17KCkgPT4gbm92byh7fSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkFuaW1lcyBDYWRhc3RyYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpc3RhQW5pbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17YW5pbWVTZWxlY2lvbmFkb31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiB7IHNldEFuaW1lU2VsZWNpb25hZG8oZS52YWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibm9tZVwiIGhlYWRlcj1cIk5vbWVcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwidGVtcG9yYWRhXCIgaGVhZGVyPVwiVGVtcG9yYWRhXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD17ZSA9PiBwb3NzdWlNYW5nYShlLnBvc3N1aU1hbmdhKX0gaGVhZGVyPVwiUG9zc3VpIG1hbmfDoSA/XCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPSdiYWNrLWJ1dHRvbicgbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQW5pbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=