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
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/AnimeDataService */ "./services/AnimeDataService.jsx");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var _store_actions_anime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/anime */ "./store/actions/anime/index.jsx");



var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\anime\\index.jsx",
    _s = $RefreshSig$();














function Anime(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.animeListReducer.animeDataPage;
  })),
      animeDataPage = _useState[0],
      setAnimeDataPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.animeSelectedReducer.animeSelected;
  })),
      animeSelected = _useState2[0],
      setAnimeSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      first = _useState3[0],
      setfirst = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("nome"),
      sortBy = _useState5[0],
      setSortBy = _useState5[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    page(first, rows, sortBy);
  }, []);

  function page(pageNo, pageSize, sortBy) {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_10__["AnimeDataService"]._page(pageNo, pageSize, sortBy).then(function (response) {
      var responseAux = {
        content: response.data.content,
        empty: response.data.empty,
        first: response.data.first,
        last: response.data.last,
        number: response.data.number,
        numberOfElements: response.data.numberOfElements,
        size: response.data.size,
        totalElements: response.data.totalElements,
        totalPages: response.data.totalPages
      };
      dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadAnimeListAction"])(responseAux));
      setAnimeDataPage(responseAux);
    })["catch"](function (error) {
      toast.current.show({
        severity: 'warn',
        summary: 'Aviso',
        detail: error.response.data.message,
        life: 3000
      });
    });
  }

  var novo = function novo() {
    dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadSelectedDataAction"])(null));
  };

  var editar = function editar(rowData) {
    dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadSelectedDataAction"])(rowData));
    setAnimeSelected(rowData);
  };

  var _delete = function _delete(rowData) {
    var index = paginator.content.indexOf(rowData);

    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_10__["AnimeDataService"]._delete(rowData.id).then(function (response) {
      toast.current.show({
        severity: 'error',
        summary: 'Erro',
        detail: 'Anime ' + rowData.nome + ' excluído com sucesso!',
        life: 3000
      });
      list();
    })["catch"](function (error) {
      toast.current.show({
        severity: 'warn',
        summary: 'Aviso',
        detail: error.response.data.message,
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
          },
          disabled: !animeSelected || !animeSelected.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        },
        disabled: !animeSelected || !animeSelected.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
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

  function onCustomPage(e) {
    setfirst(e.first);
    setRows(e.rows);
  }

  function selectAnime(e) {
    if (e.value) {
      dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadSelectedDataAction"])(e.value));
      setAnimeSelected(e.value);
    } else {
      dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadSelectedDataAction"])(null));
      setAnimeSelected({
        id: undefined,
        nome: "",
        temporada: 0,
        possuiManga: false
      });
    }
  }

  var template = {
    layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
    'RowsPerPageDropdown': function RowsPerPageDropdown(options) {
      var dropdownOptions = [{
        label: 10,
        value: 10
      }, {
        label: 20,
        value: 20
      }, {
        label: 50,
        value: 50
      }];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "mx-1",
          style: {
            color: 'var(--text-color)',
            userSelect: 'none'
          },
          children: "Items per page: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
          value: options.value,
          options: dropdownOptions,
          onChange: options.onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this);
    },
    'CurrentPageReport': function CurrentPageReport(options) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: {
          color: 'var(--text-color)',
          userSelect: 'none',
          width: '120px',
          textAlign: 'center'
        },
        children: [options.first, " - ", options.last, " of ", options.totalRecords]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
          lineNumber: 141,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTable"], {
        header: "Animes Cadastrados",
        value: animeDataPage && animeDataPage.content,
        selection: animeSelected,
        onSelectionChange: function onSelectionChange(e) {
          return selectAnime(e);
        },
        dataKey: "id",
        paginator: true,
        paginatorTemplate: template,
        first: first,
        rows: rows,
        onPage: onCustomPage,
        paginatorClassName: "justify-content-end",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          selectionMode: "single",
          headerStyle: {
            width: '3em'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "nome",
          header: "Nome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "temporada",
          header: "Temporada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: function field(e) {
            return possuiManga(e.possuiManga);
          },
          header: "Possui mang\xE1 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Anime, "qNiGEeBb08FnPoPc8y7tmiCFrQU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = Anime;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(Anime));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhbmltZUxpc3RSZWR1Y2VyIiwiYW5pbWVEYXRhUGFnZSIsInNldEFuaW1lRGF0YVBhZ2UiLCJhbmltZVNlbGVjdGVkUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwiZmlyc3QiLCJzZXRmaXJzdCIsInJvd3MiLCJzZXRSb3dzIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwidG9hc3QiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFnZSIsInBhZ2VObyIsInBhZ2VTaXplIiwiQW5pbWVEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwibGFzdCIsIm51bWJlciIsIm51bWJlck9mRWxlbWVudHMiLCJzaXplIiwidG90YWxFbGVtZW50cyIsInRvdGFsUGFnZXMiLCJsb2FkQW5pbWVMaXN0QWN0aW9uIiwiZXJyb3IiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwibm92byIsImxvYWRTZWxlY3RlZERhdGFBY3Rpb24iLCJlZGl0YXIiLCJyb3dEYXRhIiwiX2RlbGV0ZSIsImluZGV4IiwicGFnaW5hdG9yIiwiaW5kZXhPZiIsImlkIiwibm9tZSIsImxpc3QiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsInBvc3N1aU1hbmdhIiwiYXRyaWJ1dHRlIiwib25DdXN0b21QYWdlIiwiZSIsInNlbGVjdEFuaW1lIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ0ZW1wb3JhZGEiLCJ0ZW1wbGF0ZSIsImxheW91dCIsIm9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJsYWJlbCIsImNvbG9yIiwidXNlclNlbGVjdCIsIm9uQ2hhbmdlIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ0b3RhbFJlY29yZHMiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUV3QkMsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsYUFBbEM7QUFBQSxHQUFELENBQVosQ0FGaEM7QUFBQSxNQUVYQSxhQUZXO0FBQUEsTUFFSUMsZ0JBRko7O0FBQUEsbUJBSXdCTCxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLG9CQUFOLENBQTJCQyxhQUF0QztBQUFBLEdBQUQsQ0FBWixDQUpoQztBQUFBLE1BSVhBLGFBSlc7QUFBQSxNQUlJQyxnQkFKSjs7QUFBQSxtQkFPUVIsc0RBQVEsQ0FBQyxDQUFELENBUGhCO0FBQUEsTUFPWFMsS0FQVztBQUFBLE1BT0pDLFFBUEk7O0FBQUEsbUJBUU1WLHNEQUFRLENBQUMsRUFBRCxDQVJkO0FBQUEsTUFRWFcsSUFSVztBQUFBLE1BUUxDLE9BUks7O0FBQUEsbUJBU1VaLHNEQUFRLENBQUMsTUFBRCxDQVRsQjtBQUFBLE1BU1hhLE1BVFc7QUFBQSxNQVNIQyxTQVRHOztBQVlsQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFFBQUksQ0FBQ1gsS0FBRCxFQUFRRSxJQUFSLEVBQWNFLE1BQWQsQ0FBSjtBQUNILEdBRlEsRUFFTixFQUZN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YW5pbWUuMDgwN2ZiNzU3NmRhMjllZGM1NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ3ByaW1lcmVhY3QvdG9hc3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gJ3ByaW1lcmVhY3QvZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncHJpbWVyZWFjdC9jb2x1bW4nO1xyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gJ3ByaW1lcmVhY3QvZmllbGRzZXQnO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3ByaW1lcmVhY3QvZHJvcGRvd24nO1xyXG5cclxuaW1wb3J0IHsgQW5pbWVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FuaW1lRGF0YVNlcnZpY2UnO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XHJcbmltcG9ydCB7IGxvYWRTZWxlY3RlZERhdGFBY3Rpb24sIGxvYWRBbmltZUxpc3RBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2FuaW1lJztcclxuXHJcblxyXG5mdW5jdGlvbiBBbmltZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFthbmltZURhdGFQYWdlLCBzZXRBbmltZURhdGFQYWdlXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW5pbWVMaXN0UmVkdWNlci5hbmltZURhdGFQYWdlKSk7XHJcblxyXG4gICAgY29uc3QgW2FuaW1lU2VsZWN0ZWQsIHNldEFuaW1lU2VsZWN0ZWRdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbmltZVNlbGVjdGVkUmVkdWNlci5hbmltZVNlbGVjdGVkKSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtmaXJzdCwgc2V0Zmlyc3RdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJub21lXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwYWdlKGZpcnN0LCByb3dzLCBzb3J0QnkpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpIHtcclxuICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9wYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQXV4ID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgZW1wdHk6IHJlc3BvbnNlLmRhdGEuZW1wdHksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogcmVzcG9uc2UuZGF0YS5maXJzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IHJlc3BvbnNlLmRhdGEubGFzdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogcmVzcG9uc2UuZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiByZXNwb25zZS5kYXRhLm51bWJlck9mRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICBzaXplOiByZXNwb25zZS5kYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzOiByZXNwb25zZS5kYXRhLnRvdGFsRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiByZXNwb25zZS5kYXRhLnRvdGFsUGFnZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkQW5pbWVMaXN0QWN0aW9uKHJlc3BvbnNlQXV4KSk7XHJcbiAgICAgICAgICAgIHNldEFuaW1lRGF0YVBhZ2UocmVzcG9uc2VBdXgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICd3YXJuJywgc3VtbWFyeTogJ0F2aXNvJywgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3ZvID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRTZWxlY3RlZERhdGFBY3Rpb24obnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRhciA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZFNlbGVjdGVkRGF0YUFjdGlvbihyb3dEYXRhKSk7XHJcbiAgICAgICAgc2V0QW5pbWVTZWxlY3RlZChyb3dEYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9kZWxldGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFnaW5hdG9yLmNvbnRlbnQuaW5kZXhPZihyb3dEYXRhKTtcclxuICAgICAgICBBbmltZURhdGFTZXJ2aWNlLl9kZWxldGUocm93RGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJybycsIGRldGFpbDogJ0FuaW1lICcgKyByb3dEYXRhLm5vbWUgKyAnIGV4Y2x1w61kbyBjb20gc3VjZXNzbyEnLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICBsaXN0KCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogJ3dhcm4nLCBzdW1tYXJ5OiAnQXZpc28nLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkJvZHlUZW1wbGF0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYW5pbWUvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBpY29uPVwicGkgcGktcGVuY2lsXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi1zdWNjZXNzIHAtbXItMlwiIG9uQ2xpY2s9eygpID0+IGVkaXRhcihyb3dEYXRhKX0gZGlzYWJsZWQ9eyFhbmltZVNlbGVjdGVkIHx8ICFhbmltZVNlbGVjdGVkLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gX2RlbGV0ZShyb3dEYXRhKX0gZGlzYWJsZWQ9eyFhbmltZVNlbGVjdGVkIHx8ICFhbmltZVNlbGVjdGVkLmlkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3N1aU1hbmdhID0gKGF0cmlidXR0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChhdHJpYnV0dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdQb3NzdWkgTWFuZ8OhJztcclxuICAgICAgICB9IHJldHVybiAnTsOjbyBQb3NzdWkgTWFuZ8OhJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkN1c3RvbVBhZ2UoZSkge1xyXG4gICAgICAgIHNldGZpcnN0KGUuZmlyc3QpO1xyXG4gICAgICAgIHNldFJvd3MoZS5yb3dzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RBbmltZShlKSB7XHJcbiAgICAgICAgaWYoZS52YWx1ZSl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRTZWxlY3RlZERhdGFBY3Rpb24oZS52YWx1ZSkpXHJcbiAgICAgICAgICAgIHNldEFuaW1lU2VsZWN0ZWQoZS52YWx1ZSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRTZWxlY3RlZERhdGFBY3Rpb24obnVsbCkpXHJcbiAgICAgICAgICAgIHNldEFuaW1lU2VsZWN0ZWQoeyBpZDogdW5kZWZpbmVkLCBub21lOiBcIlwiLCB0ZW1wb3JhZGE6IDAsIHBvc3N1aU1hbmdhOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICBsYXlvdXQ6ICdSb3dzUGVyUGFnZURyb3Bkb3duIEN1cnJlbnRQYWdlUmVwb3J0IFByZXZQYWdlTGluayBOZXh0UGFnZUxpbmsnLFxyXG4gICAgICAgICdSb3dzUGVyUGFnZURyb3Bkb3duJzogKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogMTAsIHZhbHVlOiAxMCB9LFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogMjAsIHZhbHVlOiAyMCB9LFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogNTAsIHZhbHVlOiA1MCB9XHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtY29sb3IpJywgdXNlclNlbGVjdDogJ25vbmUnIH19Pkl0ZW1zIHBlciBwYWdlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHZhbHVlPXtvcHRpb25zLnZhbHVlfSBvcHRpb25zPXtkcm9wZG93bk9wdGlvbnN9IG9uQ2hhbmdlPXtvcHRpb25zLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdDdXJyZW50UGFnZVJlcG9ydCc6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtY29sb3IpJywgdXNlclNlbGVjdDogJ25vbmUnLCB3aWR0aDogJzEyMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5maXJzdH0gLSB7b3B0aW9ucy5sYXN0fSBvZiB7b3B0aW9ucy50b3RhbFJlY29yZHN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJBbmltZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYW5pbWUvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9J25ldy1idXR0b24nIGxhYmVsPVwiTm92b1wiIG9uQ2xpY2s9eygpID0+IG5vdm8oe30pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJBbmltZXMgQ2FkYXN0cmFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYW5pbWVEYXRhUGFnZSAmJiBhbmltZURhdGFQYWdlLmNvbnRlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17YW5pbWVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiBzZWxlY3RBbmltZShlKX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclRlbXBsYXRlPXt0ZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17Zmlyc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAgICAgICAgICAgICBvblBhZ2U9e29uQ3VzdG9tUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JDbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17e3dpZHRoOiAnM2VtJ319PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJub21lXCIgaGVhZGVyPVwiTm9tZVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0ZW1wb3JhZGFcIiBoZWFkZXI9XCJUZW1wb3JhZGFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPXtlID0+IHBvc3N1aU1hbmdhKGUucG9zc3VpTWFuZ2EpfSBoZWFkZXI9XCJQb3NzdWkgbWFuZ8OhID9cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9J2JhY2stYnV0dG9uJyBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChBbmltZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==