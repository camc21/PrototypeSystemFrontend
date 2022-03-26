webpackHotUpdate_N_E("pages/accessProfile",{

/***/ "./pages/accessProfile/index.jsx":
/*!***************************************!*\
  !*** ./pages/accessProfile/index.jsx ***!
  \***************************************/
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/AccessProfileDataService */ "./services/AccessProfileDataService.jsx");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var _store_actions_accessProfile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/accessProfile */ "./store/actions/accessProfile/index.jsx");



var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\accessProfile\\index.jsx",
    _s = $RefreshSig$();














function AccessProfile(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.accessProfileListReducer.accessProfilePage;
  })),
      accessProfilePage = _useState[0],
      setAccessProfilePage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedLocalData = _useState2[0],
      setSelectedLocalData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    value: 10,
    label: 10
  }, {
    value: 20,
    label: 20
  }, {
    value: 50,
    label: 50
  }]),
      itensPerPage = _useState3[0],
      setItensPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(itensPerPage[0]),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("name"),
      sortBy = _useState5[0],
      setSortBy = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      numberPage = _useState6[0],
      setNumberPage = _useState6[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      setAccessProfilePage(null);
      setItensPage(null);
      setRows(null);
      setSortBy(null);
      setNumberPage(null);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    page(numberPage, rows.value, sortBy);
  }, [rows, numberPage]);

  function page(pageNo, pageSize, sortBy) {
    _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_10__["AccessProfileDataService"]._page(pageNo, pageSize, sortBy).then(function (response) {
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
      dispatch(Object(_store_actions_accessProfile__WEBPACK_IMPORTED_MODULE_12__["loadAccessProfileListAction"])(responseAux));
      setAccessProfilePage(responseAux);
      7;
    })["catch"](function (error) {
      switch (error.response.status) {
        case 401:
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: error.response.data.message,
            life: 3000
          });
          break;

        case 404:
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: "Serviço indisponível",
            life: 3000
          });
          break;

        default:
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: "Erro no sistema, contate o administrador",
            life: 3000
          });
          break;
      }
    });
  }

  var novo = function novo() {
    dispatch(Object(_store_actions_accessProfile__WEBPACK_IMPORTED_MODULE_12__["loadAccessProfileSelectedAction"])(null));
  };

  var _delete = function _delete(rowData) {
    var index = accessProfilePage.content.indexOf(rowData);

    _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_10__["AccessProfileDataService"]._delete(rowData.id).then(function (response) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: "Perfil de Acesso " + rowData.nome + " excluído com sucesso!",
        life: 3000
      });
      page(numberPage, rows.value, sortBy);
    })["catch"](function (error) {
      toast.current.show({
        severity: "warn",
        summary: "Aviso",
        detail: error.response.data.message,
        life: 3000
      });
    });
  };

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/accessProfile/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          style: {
            marginRight: "10px"
          },
          icon: "pi pi-pencil",
          className: "p-button-rounded p-button-success p-mr-2",
          disabled: !selectedLocalData || rowData.id !== selectedLocalData.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        },
        disabled: !selectedLocalData || rowData.id !== selectedLocalData.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  };

  function selectLocalData(e) {
    if (e && e.value) {
      dispatch(Object(_store_actions_accessProfile__WEBPACK_IMPORTED_MODULE_12__["loadAccessProfileSelectedAction"])(e.value));
      setSelectedLocalData(e.value);
    } else {
      dispatch(Object(_store_actions_accessProfile__WEBPACK_IMPORTED_MODULE_12__["loadAccessProfileSelectedAction"])(null));
      setSelectedLocalData(null);
    }
  }

  function handleItemPerPage(item) {
    var index = itensPerPage.indexOf(item);

    if (index >= 0) {
      setRows(itensPerPage[index]);
    }
  }

  function numberPageSum(numberPage) {
    setNumberPage(numberPage--);
  }

  function numberPageMinus(numberPage) {
    setNumberPage(numberPage++);
  }

  var template = {
    "RowsPerPageDropdown": function RowsPerPageDropdown() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "mx-1",
          style: {
            color: "var(--text-color)",
            userSelect: "none"
          },
          children: "Itens por p\xE1gina: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
          options: itensPerPage,
          value: rows,
          onChange: function onChange(e) {
            return handleItemPerPage(e);
          },
          isDisabled: !accessProfilePage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, _this);
    },
    "CurrentPageReport": function CurrentPageReport() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: {
          color: "var(--text-color)",
          userSelect: "none",
          width: "120px",
          textAlign: "center"
        },
        children: [accessProfilePage && accessProfilePage.number + 1, " - ", accessProfilePage && accessProfilePage.numberOfElements, " de ", accessProfilePage && accessProfilePage.totalElements]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, _this);
    },
    "PrevPageLink": function PrevPageLink() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        label: "Anterior",
        onClick: function onClick() {
          return numberPageMinus(numberPage);
        },
        disabled: !accessProfilePage || accessProfilePage.first,
        style: {
          marginRight: "10px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, _this);
    },
    "NextPageLink": function NextPageLink() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        label: "Pr\xF3ximo",
        onClick: function onClick() {
          return numberPageSum(numberPage);
        },
        disabled: !accessProfilePage || accessProfilePage.last
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_8__["Fieldset"], {
      legend: "Lista de Perfis",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/accessProfile/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "new-button",
          label: "Novo",
          onClick: function onClick() {
            return novo({});
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTable"], {
        scrollHeight: "400px",
        scrollable: true,
        header: "Perfis de Acesso Cadastrados",
        value: accessProfilePage && accessProfilePage.content,
        selection: selectedLocalData,
        onSelectionChange: function onSelectionChange(e) {
          return selectLocalData(e);
        },
        dataKey: "id",
        paginator: true,
        paginatorTemplate: template,
        first: numberPage,
        rows: rows.value,
        paginatorClassName: "justify-content-end",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          header: "Selecionado",
          selectionMode: "single",
          headerStyle: {
            width: "3em"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "name",
          header: "Nome",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "description",
          header: "Descri\xE7\xE3o",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(AccessProfile, "7+ilYp2eiGgDxxEWUJvwGwT6k/Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = AccessProfile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(AccessProfile));

var _c, _c2;

$RefreshReg$(_c, "AccessProfile");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9pbmRleC5qc3giXSwibmFtZXMiOlsiQWNjZXNzUHJvZmlsZSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZUxpc3RSZWR1Y2VyIiwiYWNjZXNzUHJvZmlsZVBhZ2UiLCJzZXRBY2Nlc3NQcm9maWxlUGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRBY2Nlc3NQcm9maWxlTGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsInJvd0RhdGEiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsIm5vbWUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsInNlbGVjdExvY2FsRGF0YSIsImUiLCJoYW5kbGVJdGVtUGVyUGFnZSIsIml0ZW0iLCJudW1iZXJQYWdlU3VtIiwibnVtYmVyUGFnZU1pbnVzIiwidGVtcGxhdGUiLCJjb2xvciIsInVzZXJTZWxlY3QiLCJ3aWR0aCIsInRleHRBbGlnbiIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFd0JDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0Msd0JBQU4sQ0FBK0JDLGlCQUExQztBQUFBLEdBQUQsQ0FBWixDQUZoQztBQUFBLE1BRW5CQSxpQkFGbUI7QUFBQSxNQUVBQyxvQkFGQTs7QUFBQSxtQkFHd0JMLHNEQUFRLENBQUMsSUFBRCxDQUhoQztBQUFBLE1BR25CTSxpQkFIbUI7QUFBQSxNQUdBQyxvQkFIQTs7QUFBQSxtQkFLV1Asc0RBQVEsQ0FBQyxDQUMxQztBQUFFUSxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FEMEMsRUFFMUM7QUFBRUQsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRjBDLEVBRzFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUgwQyxDQUFELENBTG5CO0FBQUEsTUFLbkJDLFlBTG1CO0FBQUEsTUFLTEMsWUFMSzs7QUFBQSxtQkFXRlgsc0RBQVEsQ0FBQ1UsWUFBWSxDQUFDLENBQUQsQ0FBYixDQVhOO0FBQUEsTUFXbkJFLElBWG1CO0FBQUEsTUFXYkMsT0FYYTs7QUFBQSxtQkFZRWIsc0RBQVEsQ0FBQyxNQUFELENBWlY7QUFBQSxNQVluQmMsTUFabUI7QUFBQSxNQVlYQyxTQVpXOztBQUFBLG1CQWFVZixzREFBUSxDQUFDLENBQUQsQ0FibEI7QUFBQSxN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQW9DSDs7R0F6TFE3RCxhO1VBRXNERyx1RCxFQWdCMUNvQix1RDs7O0tBbEJadkIsYTtBQTJMTSxxRUFBQTBFLHFFQUFRLENBQUMxRSxhQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjY2Vzc1Byb2ZpbGUuYzVmYzA0ZDY0MTY0Njc0NDhlNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSBcInByaW1lcmVhY3QvZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCJwcmltZXJlYWN0L2NvbHVtblwiO1xyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gXCJwcmltZXJlYWN0L2ZpZWxkc2V0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiXHJcblxyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xyXG5pbXBvcnQgeyBsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uLCBsb2FkQWNjZXNzUHJvZmlsZUxpc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY2Nlc3NQcm9maWxlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFjY2Vzc1Byb2ZpbGUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbYWNjZXNzUHJvZmlsZVBhZ2UsIHNldEFjY2Vzc1Byb2ZpbGVQYWdlXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzUHJvZmlsZUxpc3RSZWR1Y2VyLmFjY2Vzc1Byb2ZpbGVQYWdlKSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMb2NhbERhdGEsIHNldFNlbGVjdGVkTG9jYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtpdGVuc1BlclBhZ2UsIHNldEl0ZW5zUGFnZV0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgeyB2YWx1ZTogMTAsIGxhYmVsOiAxMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIwLCBsYWJlbDogMjAgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MCwgbGFiZWw6IDUwIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKGl0ZW5zUGVyUGFnZVswXSk7XHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xyXG4gICAgY29uc3QgW251bWJlclBhZ2UsIHNldE51bWJlclBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzZXRBY2Nlc3NQcm9maWxlUGFnZShudWxsKTtcclxuICAgICAgICBzZXRJdGVuc1BhZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Um93cyhudWxsKTtcclxuICAgICAgICBzZXRTb3J0QnkobnVsbCk7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICB9LCBbcm93cywgbnVtYmVyUGFnZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpIHtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX3BhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBdXggPSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogcmVzcG9uc2UuZGF0YS5lbXB0eSxcclxuICAgICAgICAgICAgICAgIGZpcnN0OiByZXNwb25zZS5kYXRhLmZpcnN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogcmVzcG9uc2UuZGF0YS5sYXN0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiByZXNwb25zZS5kYXRhLm51bWJlcixcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEubnVtYmVyT2ZFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHNpemU6IHJlc3BvbnNlLmRhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEudG90YWxFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IHJlc3BvbnNlLmRhdGEudG90YWxQYWdlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBY2Nlc3NQcm9maWxlTGlzdEFjdGlvbihyZXNwb25zZUF1eCkpO1xyXG4gICAgICAgICAgICBzZXRBY2Nlc3NQcm9maWxlUGFnZShyZXNwb25zZUF1eCk7N1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiU2VydmnDp28gaW5kaXNwb27DrXZlbFwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIkVycm8gbm8gc2lzdGVtYSwgY29udGF0ZSBvIGFkbWluaXN0cmFkb3JcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhY2Nlc3NQcm9maWxlUGFnZS5jb250ZW50LmluZGV4T2Yocm93RGF0YSk7XHJcbiAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9kZWxldGUocm93RGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcImVycm9yXCIsIHN1bW1hcnk6IFwiRXJyb1wiLCBkZXRhaWw6IFwiUGVyZmlsIGRlIEFjZXNzbyBcIiArIHJvd0RhdGEubm9tZSArIFwiIGV4Y2x1w61kbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgcGFnZShudW1iZXJQYWdlLCByb3dzLnZhbHVlLCBzb3J0QnkpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2Nlc3NQcm9maWxlL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBpY29uPVwicGkgcGktcGVuY2lsXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi1zdWNjZXNzIHAtbXItMlwiIGRpc2FibGVkPXshc2VsZWN0ZWRMb2NhbERhdGEgfHwgcm93RGF0YS5pZCAhPT0gc2VsZWN0ZWRMb2NhbERhdGEuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiBfZGVsZXRlKHJvd0RhdGEpfSBkaXNhYmxlZD17IXNlbGVjdGVkTG9jYWxEYXRhIHx8IHJvd0RhdGEuaWQgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdExvY2FsRGF0YShlKSB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uKGUudmFsdWUpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRMb2NhbERhdGEoZS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXRlbVBlclBhZ2UoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbnNQZXJQYWdlLmluZGV4T2YoaXRlbSlcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRSb3dzKGl0ZW5zUGVyUGFnZVtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYWdlU3VtKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UtLSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UrKyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgIFwiUm93c1BlclBhZ2VEcm9wZG93blwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMVwiIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19Pkl0ZW5zIHBvciBww6FnaW5hOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtpdGVuc1BlclBhZ2V9IHZhbHVlPXtyb3dzfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUl0ZW1QZXJQYWdlKGUpfSBpc0Rpc2FibGVkPXshYWNjZXNzUHJvZmlsZVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJDdXJyZW50UGFnZVJlcG9ydFwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiwgd2lkdGg6IFwiMTIwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2Nlc3NQcm9maWxlUGFnZSAmJiBhY2Nlc3NQcm9maWxlUGFnZS5udW1iZXIgKyAxfSAtIHthY2Nlc3NQcm9maWxlUGFnZSAmJiBhY2Nlc3NQcm9maWxlUGFnZS5udW1iZXJPZkVsZW1lbnRzfSBkZSB7YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UudG90YWxFbGVtZW50c31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJQcmV2UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkFudGVyaW9yXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpfSBkaXNhYmxlZD17IWFjY2Vzc1Byb2ZpbGVQYWdlIHx8IGFjY2Vzc1Byb2ZpbGVQYWdlLmZpcnN0fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJOZXh0UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlByw7N4aW1vXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyFhY2Nlc3NQcm9maWxlUGFnZSB8fCBhY2Nlc3NQcm9maWxlUGFnZS5sYXN0fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkxpc3RhIGRlIFBlcmZpc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjZXNzUHJvZmlsZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cIm5ldy1idXR0b25cIiBsYWJlbD1cIk5vdm9cIiBvbkNsaWNrPXsoKSA9PiBub3ZvKHt9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiNDAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJQZXJmaXMgZGUgQWNlc3NvIENhZGFzdHJhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGVkTG9jYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtlID0+IHNlbGVjdExvY2FsRGF0YShlKX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclRlbXBsYXRlPXt0ZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17bnVtYmVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvckNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5hbWVcIiBoZWFkZXI9XCJOb21lXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImRlc2NyaXB0aW9uXCIgaGVhZGVyPVwiRGVzY3Jpw6fDo29cIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFjY2Vzc1Byb2ZpbGUpOyJdLCJzb3VyY2VSb290IjoiIn0=