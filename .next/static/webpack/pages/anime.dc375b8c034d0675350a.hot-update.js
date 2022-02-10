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
      console.log(response.data);

      try {
        setListaAnimes(response.data.animes);
      } catch (error) {
        console.log(error);
      }
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
          lineNumber: 70,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RhQW5pbWVzIiwic2V0TGlzdGFBbmltZXMiLCJhbmltZVNlbGVjaW9uYWRvIiwic2V0QW5pbWVTZWxlY2lvbmFkbyIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0YXJBbmltZXMiLCJBbmltZURhdGFTZXJ2aWNlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFuaW1lcyIsImVycm9yIiwibm92byIsImxvYWRTZWxlY3RlZERhdGFBY3Rpb24iLCJlZGl0YXIiLCJyb3dEYXRhIiwiX2RlbGV0ZSIsImlkIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJub21lIiwibGlmZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsIm1hcmdpblJpZ2h0IiwicG9zc3VpTWFuZ2EiLCJhdHJpYnV0dGUiLCJlIiwidmFsdWUiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQyxFQUFELENBRjVCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGNBRkY7O0FBQUEsbUJBRzhCRixzREFBUSxDQUFDLEVBQUQsQ0FIdEM7QUFBQSxNQUdYRyxnQkFIVztBQUFBLE1BR09DLG1CQUhQOztBQUtsQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMs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QUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBNkJIOztHQWpHUWxDLEs7VUFPWVUsdUQ7OztLQVBaVixLO0FBbUdNLHFFQUFBd0MscUVBQVEsQ0FBQ3hDLEtBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5pbWUuZGMzNzViOGMwMzRkMDY3NTM1MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ3ByaW1lcmVhY3QvdG9hc3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gJ3ByaW1lcmVhY3QvZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncHJpbWVyZWFjdC9jb2x1bW4nO1xyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gJ3ByaW1lcmVhY3QvZmllbGRzZXQnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FuaW1lRGF0YVNlcnZpY2UnO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XHJcbmltcG9ydCB7IGxvYWRTZWxlY3RlZERhdGFBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2FuaW1lJztcclxuXHJcblxyXG5mdW5jdGlvbiBBbmltZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtsaXN0YUFuaW1lcywgc2V0TGlzdGFBbmltZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FuaW1lU2VsZWNpb25hZG8sIHNldEFuaW1lU2VsZWNpb25hZG9dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb2kgZGVzbW9udGFkbycpO1xyXG4gICAgICAgIHNldExpc3RhQW5pbWVzKG51bGwpO1xyXG4gICAgICAgIHNldEFuaW1lU2VsZWNpb25hZG8obnVsbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxpc3RhckFuaW1lcygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbGlzdGFyQW5pbWVzKCl7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5saXN0YXJBbmltZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0YUFuaW1lcyhyZXNwb25zZS5kYXRhLmFuaW1lcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5pbWVTZWxlY2lvbmFkbyhudWxsKTtcclxuICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0YXIgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvd0RhdGEpO1xyXG4gICAgICAgIHNldEFuaW1lU2VsZWNpb25hZG8ocm93RGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZFNlbGVjdGVkRGF0YUFjdGlvbihyb3dEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5fZGVsZXRlKHJvd0RhdGEuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7c2V2ZXJpdHk6J3N1Y2Nlc3MnLCBzdW1tYXJ5OiAnU3VjZXNzbycsIGRldGFpbDonQW5pbWUgJyArIHJvd0RhdGEubm9tZSArICcgZXhjbHXDrWRvIGNvbSBzdWNlc3NvIScsIGxpZmU6IDMwMDB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkJvZHlUZW1wbGF0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICcxMHB4J319IGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgb25DbGljaz17KCkgPT4gZWRpdGFyKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IF9kZWxldGUocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zc3VpTWFuZ2EgPSAoYXRyaWJ1dHRlKSA9PiB7XHJcbiAgICAgICAgaWYoYXRyaWJ1dHRlKXtcclxuICAgICAgICAgICAgcmV0dXJuICdQb3NzdWkgTWFuZ8OhJztcclxuICAgICAgICB9IHJldHVybiAnTsOjbyBQb3NzdWkgTWFuZ8OhJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJBbmltZVwiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nbmV3LWJ1dHRvbicgbGFiZWw9XCJOb3ZvXCIgb25DbGljaz17KCkgPT4gbm92byh7fSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJBbmltZXMgQ2FkYXN0cmFkb3NcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlzdGFBbmltZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXthbmltZVNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtlID0+IHtzZXRBbmltZVNlbGVjaW9uYWRvKGUudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibm9tZVwiIGhlYWRlcj1cIk5vbWVcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwidGVtcG9yYWRhXCIgaGVhZGVyPVwiVGVtcG9yYWRhXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD17ZSA9PiBwb3NzdWlNYW5nYShlLnBvc3N1aU1hbmdhKX0gaGVhZGVyPVwiUG9zc3VpIG1hbmfDoSA/XCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nYmFjay1idXR0b24nIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQW5pbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=