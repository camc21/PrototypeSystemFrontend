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
    console.log(e);

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
          lineNumber: 124,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
          value: options.value,
          options: dropdownOptions,
          onChange: options.onChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
        lineNumber: 131,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
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
          lineNumber: 144,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
          lineNumber: 160,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "nome",
          header: "Nome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "temporada",
          header: "Temporada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: function field(e) {
            return possuiManga(e.possuiManga);
          },
          header: "Possui mang\xE1 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5pbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFuaW1lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhbmltZUxpc3RSZWR1Y2VyIiwiYW5pbWVEYXRhUGFnZSIsInNldEFuaW1lRGF0YVBhZ2UiLCJhbmltZVNlbGVjdGVkUmVkdWNlciIsImFuaW1lU2VsZWN0ZWQiLCJzZXRBbmltZVNlbGVjdGVkIiwiZmlyc3QiLCJzZXRmaXJzdCIsInJvd3MiLCJzZXRSb3dzIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwidG9hc3QiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFnZSIsInBhZ2VObyIsInBhZ2VTaXplIiwiQW5pbWVEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwibGFzdCIsIm51bWJlciIsIm51bWJlck9mRWxlbWVudHMiLCJzaXplIiwidG90YWxFbGVtZW50cyIsInRvdGFsUGFnZXMiLCJsb2FkQW5pbWVMaXN0QWN0aW9uIiwiZXJyb3IiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwibm92byIsImxvYWRTZWxlY3RlZERhdGFBY3Rpb24iLCJlZGl0YXIiLCJyb3dEYXRhIiwiX2RlbGV0ZSIsImluZGV4IiwicGFnaW5hdG9yIiwiaW5kZXhPZiIsImlkIiwibm9tZSIsImxpc3QiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsInBvc3N1aU1hbmdhIiwiYXRyaWJ1dHRlIiwib25DdXN0b21QYWdlIiwiZSIsInNlbGVjdEFuaW1lIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwidW5kZWZpbmVkIiwidGVtcG9yYWRhIiwidGVtcGxhdGUiLCJsYXlvdXQiLCJvcHRpb25zIiwiZHJvcGRvd25PcHRpb25zIiwibGFiZWwiLCJjb2xvciIsInVzZXJTZWxlY3QiLCJvbkNoYW5nZSIsIndpZHRoIiwidGV4dEFsaWduIiwidG90YWxSZWNvcmRzIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFd0JDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLGFBQWxDO0FBQUEsR0FBRCxDQUFaLENBRmhDO0FBQUEsTUFFWEEsYUFGVztBQUFBLE1BRUlDLGdCQUZKOztBQUFBLG1CQUl3Qkwsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSSxvQkFBTixDQUEyQkMsYUFBdEM7QUFBQSxHQUFELENBQVosQ0FKaEM7QUFBQSxNQUlYQSxhQUpXO0FBQUEsTUFJSUMsZ0JBSko7O0FBQUEsbUJBT1FSLHNEQUFRLENBQUMsQ0FBRCxDQVBoQjtBQUFBLE1BT1hTLEtBUFc7QUFBQSxNQU9KQyxRQVBJOztBQUFBLG1CQVFNVixzREFBUSxDQUFDLEVBQUQsQ0FSZDtBQUFBLE1BUVhXLElBUlc7QUFBQSxNQVFMQyxPQVJLOztBQUFBLG1CQVNVWixzREFBUSxDQUFDLE1BQUQsQ0FUbEI7QUFBQSxNQVNYYSxNQVRXO0FBQUEsTUFTSEMsU0FURzs7QUFZbEIsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxRQUFJLENBQUNYLEtBQUQsRUFBUUUsSUFBUixFQUFjRSxNQUFkLENBQUo7QUFD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QURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQW9DSDs7R0E3SlEzRCxLO1VBRThDRyx1RCxFQUVBQSx1RCxFQVVsQ2lCLHVEOzs7S0FkWnBCLEs7QUErSk0scUVBQUFrRixxRUFBUSxDQUFDbEYsS0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbmltZS4zMTdjNTAyZTNlYmE1ZTEyMTRiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAncHJpbWVyZWFjdC90b2FzdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSAncHJpbWVyZWFjdC9maWVsZHNldCc7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcblxyXG5pbXBvcnQgeyBBbmltZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQW5pbWVEYXRhU2VydmljZSc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcclxuaW1wb3J0IHsgbG9hZFNlbGVjdGVkRGF0YUFjdGlvbiwgbG9hZEFuaW1lTGlzdEFjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvYW5pbWUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFuaW1lKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FuaW1lRGF0YVBhZ2UsIHNldEFuaW1lRGF0YVBhZ2VdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbmltZUxpc3RSZWR1Y2VyLmFuaW1lRGF0YVBhZ2UpKTtcclxuXHJcbiAgICBjb25zdCBbYW5pbWVTZWxlY3RlZCwgc2V0QW5pbWVTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFuaW1lU2VsZWN0ZWRSZWR1Y2VyLmFuaW1lU2VsZWN0ZWQpKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2ZpcnN0LCBzZXRmaXJzdF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5vbWVcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2UoZmlyc3QsIHJvd3MsIHNvcnRCeSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBwYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkge1xyXG4gICAgICAgIEFuaW1lRGF0YVNlcnZpY2UuX3BhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBdXggPSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogcmVzcG9uc2UuZGF0YS5lbXB0eSxcclxuICAgICAgICAgICAgICAgIGZpcnN0OiByZXNwb25zZS5kYXRhLmZpcnN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogcmVzcG9uc2UuZGF0YS5sYXN0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiByZXNwb25zZS5kYXRhLm51bWJlcixcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEubnVtYmVyT2ZFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHNpemU6IHJlc3BvbnNlLmRhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEudG90YWxFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IHJlc3BvbnNlLmRhdGEudG90YWxQYWdlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBbmltZUxpc3RBY3Rpb24ocmVzcG9uc2VBdXgpKTtcclxuICAgICAgICAgICAgc2V0QW5pbWVEYXRhUGFnZShyZXNwb25zZUF1eCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogJ3dhcm4nLCBzdW1tYXJ5OiAnQXZpc28nLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZFNlbGVjdGVkRGF0YUFjdGlvbihudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdGFyID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKHJvd0RhdGEpKTtcclxuICAgICAgICBzZXRBbmltZVNlbGVjdGVkKHJvd0RhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYWdpbmF0b3IuY29udGVudC5pbmRleE9mKHJvd0RhdGEpO1xyXG4gICAgICAgIEFuaW1lRGF0YVNlcnZpY2UuX2RlbGV0ZShyb3dEYXRhLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvJywgZGV0YWlsOiAnQW5pbWUgJyArIHJvd0RhdGEubm9tZSArICcgZXhjbHXDrWRvIGNvbSBzdWNlc3NvIScsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgIGxpc3QoKTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiAnd2FybicsIHN1bW1hcnk6ICdBdmlzbycsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19IGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgb25DbGljaz17KCkgPT4gZWRpdGFyKHJvd0RhdGEpfSBkaXNhYmxlZD17IWFuaW1lU2VsZWN0ZWQgfHwgIWFuaW1lU2VsZWN0ZWQuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiBfZGVsZXRlKHJvd0RhdGEpfSBkaXNhYmxlZD17IWFuaW1lU2VsZWN0ZWQgfHwgIWFuaW1lU2VsZWN0ZWQuaWR9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zc3VpTWFuZ2EgPSAoYXRyaWJ1dHRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGF0cmlidXR0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1Bvc3N1aSBNYW5nw6EnO1xyXG4gICAgICAgIH0gcmV0dXJuICdOw6NvIFBvc3N1aSBNYW5nw6EnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ3VzdG9tUGFnZShlKSB7XHJcbiAgICAgICAgc2V0Zmlyc3QoZS5maXJzdCk7XHJcbiAgICAgICAgc2V0Um93cyhlLnJvd3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdEFuaW1lKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZlwiKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkU2VsZWN0ZWREYXRhQWN0aW9uKGUudmFsdWUpKVxyXG4gICAgICAgICAgICBzZXRBbmltZVNlbGVjdGVkKGUudmFsdWUpXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2VcIilcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZFNlbGVjdGVkRGF0YUFjdGlvbih7IGlkOiB1bmRlZmluZWQsIG5vbWU6IFwiXCIsIHRlbXBvcmFkYTogMCwgcG9zc3VpTWFuZ2E6IGZhbHNlIH0gKSlcclxuICAgICAgICAgICAgc2V0QW5pbWVTZWxlY3RlZCh7IGlkOiB1bmRlZmluZWQsIG5vbWU6IFwiXCIsIHRlbXBvcmFkYTogMCwgcG9zc3VpTWFuZ2E6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgIGxheW91dDogJ1Jvd3NQZXJQYWdlRHJvcGRvd24gQ3VycmVudFBhZ2VSZXBvcnQgUHJldlBhZ2VMaW5rIE5leHRQYWdlTGluaycsXHJcbiAgICAgICAgJ1Jvd3NQZXJQYWdlRHJvcGRvd24nOiAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAxMCwgdmFsdWU6IDEwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAyMCwgdmFsdWU6IDIwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiA1MCwgdmFsdWU6IDUwIH1cclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1jb2xvciknLCB1c2VyU2VsZWN0OiAnbm9uZScgfX0+SXRlbXMgcGVyIHBhZ2U6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gdmFsdWU9e29wdGlvbnMudmFsdWV9IG9wdGlvbnM9e2Ryb3Bkb3duT3B0aW9uc30gb25DaGFuZ2U9e29wdGlvbnMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ0N1cnJlbnRQYWdlUmVwb3J0JzogKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1jb2xvciknLCB1c2VyU2VsZWN0OiAnbm9uZScsIHdpZHRoOiAnMTIwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLmZpcnN0fSAtIHtvcHRpb25zLmxhc3R9IG9mIHtvcHRpb25zLnRvdGFsUmVjb3Jkc31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkFuaW1lXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbmltZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nbmV3LWJ1dHRvbicgbGFiZWw9XCJOb3ZvXCIgb25DbGljaz17KCkgPT4gbm92byh7fSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkFuaW1lcyBDYWRhc3RyYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhbmltZURhdGFQYWdlICYmIGFuaW1lRGF0YVBhZ2UuY29udGVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXthbmltZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtlID0+IHNlbGVjdEFuaW1lKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yVGVtcGxhdGU9e3RlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0PXtmaXJzdH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZT17b25DdXN0b21QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvckNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7d2lkdGg6ICczZW0nfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5vbWVcIiBoZWFkZXI9XCJOb21lXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cInRlbXBvcmFkYVwiIGhlYWRlcj1cIlRlbXBvcmFkYVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9e2UgPT4gcG9zc3VpTWFuZ2EoZS5wb3NzdWlNYW5nYSl9IGhlYWRlcj1cIlBvc3N1aSBtYW5nw6EgP1wiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD0nYmFjay1idXR0b24nIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFuaW1lKTsiXSwic291cmNlUm9vdCI6IiJ9