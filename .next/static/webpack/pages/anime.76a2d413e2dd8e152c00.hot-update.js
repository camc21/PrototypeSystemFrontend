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
    if (e) {
      console.log("if");
      dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadSelectedDataAction"])(e.value));
      setAnimeSelected(e.value);
    } else {
      console.log("else");
      dispatch(Object(_store_actions_anime__WEBPACK_IMPORTED_MODULE_12__["loadSelectedDataAction"])({
        id: undefined,
        nome: "",
        temporada: 0,
        possuiManga: false
      }));
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
          lineNumber: 123,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
          value: options.value,
          options: dropdownOptions,
          onChange: options.onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 130,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
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
          lineNumber: 143,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
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
          lineNumber: 159,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "nome",
          header: "Nome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "temporada",
          header: "Temporada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: function field(e) {
            return possuiManga(e.possuiManga);
          },
          header: "Possui mang\xE1 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhbmltZUxpc3RSZWR1Y2VyIiwiYW5pbWVEYXRhUGFnZSIsInNldEFuaW1lRGF0YVBhZ2UiLCJhbmltZVNlbGVjdGVkUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwiZmlyc3QiLCJzZXRmaXJzdCIsInJvd3MiLCJzZXRSb3dzIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwidG9hc3QiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFnZSIsInBhZ2VObyIsInBhZ2VTaXplIiwiQW5pbWVEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwibGFzdCIsIm51bWJlciIsIm51bWJlck9mRWxlbWVudHMiLCJzaXplIiwidG90YWxFbGVtZW50cyIsInRvdGFsUGFnZXMiLCJsb2FkQW5pbWVMaXN0QWN0aW9uIiwiZXJyb3IiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwibm92byIsImxvYWRTZWxlY3RlZERhdGFBY3Rpb24iLCJlZGl0YXIiLCJyb3dEYXRhIiwiX2RlbGV0ZSIsImluZGV4IiwicGFnaW5hdG9yIiwiaW5kZXhPZiIsImlkIiwibm9tZSIsImxpc3QiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsInBvc3N1aU1hbmdhIiwiYXRyaWJ1dHRlIiwib25DdXN0b21QYWdlIiwiZSIsInNlbGVjdEFuaW1lIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwidW5kZWZpbmVkIiwidGVtcG9yYWRhIiwidGVtcGxhdGUiLCJsYXlvdXQiLCJvcHRpb25zIiwiZHJvcGRvd25PcHRpb25zIiwibGFiZWwiLCJjb2xvciIsInVzZXJTZWxlY3QiLCJvbkNoYW5nZSIsIndpZHRoIiwidGV4dEFsaWduIiwidG90YWxSZWNvcmRzIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFd0JDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLGFBQWxDO0FBQUEsR0FBRCxDQUFaLENBRmhDO0FBQUEsTUFFWEEsYUFGVztBQUFBLE1BRUlDLGdCQUZKOztBQUFBLG1CQUl3Qkwsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSSxvQkFBTixDQUEyQkMsYUFBdEM7QUFBQSxHQUFELENBQVosQ0FKaEM7QUFBQSxNQUlYQSxhQUpXO0FBQUEsTUFJSUMsZ0JBSko7O0FBQUEsbUJBT1FSLHNEQUFRLENBQUMsQ0FBRCxDQVBoQjtBQUFBLE1BT1hTLEtBUFc7QUFBQSxNQU9KQyxRQVBJOztBQUFBLG1CQVFNVixzREFBUSxDQUFDLEVBQUQsQ0FSZDtBQUFBLE1BUVhXLElBUlc7QUFBQSxNQVFMQyxPQVJLOztBQUFBLG1CQVNVWixzREFBUSxDQUFDLE1BQUQsQ0FUbEI7QUFBQSxNQVNYYSxNQVRXO0FBQUEsTUFTSEMsU0FURzs7QUFZbEIsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxRQUFJLENBQUNYLEtBQUQsRUFBUUUsSUFBUixFQUFjRSxNQUFkLENBQUo7QUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBb0NIOztHQTVKUTNELEs7VUFFOENHLHVELEVBRUFBLHVELEVBVWxDaUIsdUQ7OztLQWRacEIsSztBQThKTSxxRUFBQWtGLHFFQUFRLENBQUNsRixLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FuaW1lLjc2YTJkNDEzZTJkZDhlMTUyYzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdwcmltZXJlYWN0L3RvYXN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tICdwcmltZXJlYWN0L2ZpZWxkc2V0JztcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcclxuXHJcbmltcG9ydCB7IEFuaW1lRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BbmltZURhdGFTZXJ2aWNlJztcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGgnO1xyXG5pbXBvcnQgeyBsb2FkU2VsZWN0ZWREYXRhQWN0aW9uLCBsb2FkQW5pbWVMaXN0QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9hbmltZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gQW5pbWUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbYW5pbWVEYXRhUGFnZSwgc2V0QW5pbWVEYXRhUGFnZV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFuaW1lTGlzdFJlZHVjZXIuYW5pbWVEYXRhUGFnZSkpO1xyXG5cclxuICAgIGNvbnN0IFthbmltZVNlbGVjdGVkLCBzZXRBbmltZVNlbGVjdGVkXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW5pbWVTZWxlY3RlZFJlZHVjZXIuYW5pbWVTZWxlY3RlZCkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZmlyc3QsIHNldGZpcnN0XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKFwibm9tZVwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGFnZShmaXJzdCwgcm93cywgc29ydEJ5KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KSB7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5fcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUF1eCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgIGVtcHR5OiByZXNwb25zZS5kYXRhLmVtcHR5LFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3QsXHJcbiAgICAgICAgICAgICAgICBsYXN0OiByZXNwb25zZS5kYXRhLmxhc3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHJlc3BvbnNlLmRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50czogcmVzcG9uc2UuZGF0YS5udW1iZXJPZkVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcmVzcG9uc2UuZGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50czogcmVzcG9uc2UuZGF0YS50b3RhbEVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlczogcmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFuaW1lTGlzdEFjdGlvbihyZXNwb25zZUF1eCkpO1xyXG4gICAgICAgICAgICBzZXRBbmltZURhdGFQYWdlKHJlc3BvbnNlQXV4KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnd2FybicsIHN1bW1hcnk6ICdBdmlzbycsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm92byA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0YXIgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRTZWxlY3RlZERhdGFBY3Rpb24ocm93RGF0YSkpO1xyXG4gICAgICAgIHNldEFuaW1lU2VsZWN0ZWQocm93RGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZGVsZXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHBhZ2luYXRvci5jb250ZW50LmluZGV4T2Yocm93RGF0YSk7XHJcbiAgICAgICAgQW5pbWVEYXRhU2VydmljZS5fZGVsZXRlKHJvd0RhdGEuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm8nLCBkZXRhaWw6ICdBbmltZSAnICsgcm93RGF0YS5ub21lICsgJyBleGNsdcOtZG8gY29tIHN1Y2Vzc28hJywgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgbGlzdCgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICd3YXJuJywgc3VtbWFyeTogJ0F2aXNvJywgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gaWNvbj1cInBpIHBpLXBlbmNpbFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tc3VjY2VzcyBwLW1yLTJcIiBvbkNsaWNrPXsoKSA9PiBlZGl0YXIocm93RGF0YSl9IGRpc2FibGVkPXshYW5pbWVTZWxlY3RlZCB8fCAhYW5pbWVTZWxlY3RlZC5pZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IF9kZWxldGUocm93RGF0YSl9IGRpc2FibGVkPXshYW5pbWVTZWxlY3RlZCB8fCAhYW5pbWVTZWxlY3RlZC5pZH0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3NzdWlNYW5nYSA9IChhdHJpYnV0dGUpID0+IHtcclxuICAgICAgICBpZiAoYXRyaWJ1dHRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnUG9zc3VpIE1hbmfDoSc7XHJcbiAgICAgICAgfSByZXR1cm4gJ07Do28gUG9zc3VpIE1hbmfDoSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DdXN0b21QYWdlKGUpIHtcclxuICAgICAgICBzZXRmaXJzdChlLmZpcnN0KTtcclxuICAgICAgICBzZXRSb3dzKGUucm93cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0QW5pbWUoZSkge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlmXCIpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRTZWxlY3RlZERhdGFBY3Rpb24oZS52YWx1ZSkpXHJcbiAgICAgICAgICAgIHNldEFuaW1lU2VsZWN0ZWQoZS52YWx1ZSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZVwiKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKHsgaWQ6IHVuZGVmaW5lZCwgbm9tZTogXCJcIiwgdGVtcG9yYWRhOiAwLCBwb3NzdWlNYW5nYTogZmFsc2UgfSApKVxyXG4gICAgICAgICAgICBzZXRBbmltZVNlbGVjdGVkKHsgaWQ6IHVuZGVmaW5lZCwgbm9tZTogXCJcIiwgdGVtcG9yYWRhOiAwLCBwb3NzdWlNYW5nYTogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgbGF5b3V0OiAnUm93c1BlclBhZ2VEcm9wZG93biBDdXJyZW50UGFnZVJlcG9ydCBQcmV2UGFnZUxpbmsgTmV4dFBhZ2VMaW5rJyxcclxuICAgICAgICAnUm93c1BlclBhZ2VEcm9wZG93bic6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IDEwLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IDIwLCB2YWx1ZTogMjAgfSxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IDUwLCB2YWx1ZTogNTAgfVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0xXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LWNvbG9yKScsIHVzZXJTZWxlY3Q6ICdub25lJyB9fT5JdGVtcyBwZXIgcGFnZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biB2YWx1ZT17b3B0aW9ucy52YWx1ZX0gb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfSBvbkNoYW5nZT17b3B0aW9ucy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnQ3VycmVudFBhZ2VSZXBvcnQnOiAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LWNvbG9yKScsIHVzZXJTZWxlY3Q6ICdub25lJywgd2lkdGg6ICcxMjBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMuZmlyc3R9IC0ge29wdGlvbnMubGFzdH0gb2Yge29wdGlvbnMudG90YWxSZWNvcmRzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiQW5pbWVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FuaW1lL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPSduZXctYnV0dG9uJyBsYWJlbD1cIk5vdm9cIiBvbkNsaWNrPXsoKSA9PiBub3ZvKHt9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiQW5pbWVzIENhZGFzdHJhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGFuaW1lRGF0YVBhZ2UgJiYgYW5pbWVEYXRhUGFnZS5jb250ZW50IH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e2FuaW1lU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2UgPT4gc2VsZWN0QW5pbWUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JUZW1wbGF0ZT17dGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e2ZpcnN0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlPXtvbkN1c3RvbVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yQ2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3t3aWR0aDogJzNlbSd9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibm9tZVwiIGhlYWRlcj1cIk5vbWVcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwidGVtcG9yYWRhXCIgaGVhZGVyPVwiVGVtcG9yYWRhXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD17ZSA9PiBwb3NzdWlNYW5nYShlLnBvc3N1aU1hbmdhKX0gaGVhZGVyPVwiUG9zc3VpIG1hbmfDoSA/XCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPSdiYWNrLWJ1dHRvbicgbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQW5pbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=