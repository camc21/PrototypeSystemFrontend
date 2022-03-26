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
    console.log(rowData);
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
          body: function body() {
            return actionBodyTemplate;
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9pbmRleC5qc3giXSwibmFtZXMiOlsiQWNjZXNzUHJvZmlsZSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZUxpc3RSZWR1Y2VyIiwiYWNjZXNzUHJvZmlsZVBhZ2UiLCJzZXRBY2Nlc3NQcm9maWxlUGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRBY2Nlc3NQcm9maWxlTGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsInJvd0RhdGEiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsIm5vbWUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luUmlnaHQiLCJzZWxlY3RMb2NhbERhdGEiLCJlIiwiaGFuZGxlSXRlbVBlclBhZ2UiLCJpdGVtIiwibnVtYmVyUGFnZVN1bSIsIm51bWJlclBhZ2VNaW51cyIsInRlbXBsYXRlIiwiY29sb3IiLCJ1c2VyU2VsZWN0Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXdCQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHdCQUFOLENBQStCQyxpQkFBMUM7QUFBQSxHQUFELENBQVosQ0FGaEM7QUFBQSxNQUVuQkEsaUJBRm1CO0FBQUEsTUFFQUMsb0JBRkE7O0FBQUEsbUJBR3dCTCxzREFBUSxDQUFDLElBQUQsQ0FIaEM7QUFBQSxNQUduQk0saUJBSG1CO0FBQUEsTUFHQUMsb0JBSEE7O0FBQUEsbUJBS1dQLHNEQUFRLENBQUMsQ0FDMUM7QUFBRVEsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRDBDLEVBRTFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUYwQyxFQUcxQztBQUFFRCxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FIMEMsQ0FBRCxDQUxuQjtBQUFBLE1BS25CQyxZQUxtQjtBQUFBLE1BS0xDLFlBTEs7O0FBQUEsbUJBV0ZYLHNEQUFRLENBQUNVLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FYTjtBQUFBLE1BV25CRSxJQVhtQjtBQUFBLE1BV2JDLE9BWGE7O0FBQUEsbUJBWUViLHNEQUFRLENBQUMsTUFBRCxDQVpWO0FBQUEsTUFZbkJjLE1BWm1CO0FBQUEsTUFZWEMsU0FaVzs7QUFBQSxtQkFhVWYsc0RBQVEsQ0FBQyxDQUFELENBYmxCO0FBQUEsTUFhbkJnQixVQWJtQjtBQUFBLE1BYVBDLGFBYk87O0FBZ0IxQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsV0FBTyxZQUFNO0FBQ1hqQiwwQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FNLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUUsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRSxtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBTkQ7QUFPRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBWUFLLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxRQUFJLENBQUNQLFVBQUQsRUFBYUosSUFBSSxDQUFDSixLQUFsQixFQUF5Qk0sTUFBekIsQ0FBSjtBQUNILEdBRlEsRUFFTixDQUFDRixJQUFELEVBQU9JLFVBQVAsQ0FGTSxDQUFUOztBQUlBLFdBQVNPLElBQVQsQ0FBY0MsTUFBZCxFQUFzQkMsUUFBdEIsRUFBZ0NYLE1BQWhDLEVBQXdDO0FBQ3BDWSxnR0FBd0IsQ0FBQ0MsS0FBekIsQ0FBK0JILE1BQS9CLEVBQXVDQyxRQUF2QyxFQUFpRFgsTUFBakQsRUFBeURjLElBQXpELENBQThELFVBQUFDLFFBQVEsRUFBSTtBQUN0RSxVQUFNQyxXQUFXLEdBQUc7QUFDaEJDLGVBQU8sRUFBRUYsUUFBUSxDQUFDRyxJQUFULENBQWNELE9BRFA7QUFFaEJFLGFBQUssRUFBRUosUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBRkw7QUFHaEJDLGFBQUssRUFBRUwsUUFBUSxDQUFDRyxJQUFULENBQWNFLEtBSEw7QUFJaEJDLFlBQUksRUFBRU4sUUFBUSxDQUFDRyxJQUFULENBQWNHLElBSko7QUFLaEJDLGNBQU0sRUFBRVAsUUFBUSxDQUFDRyxJQUFULENBQWNJLE1BTE47QUFNaEJDLHdCQUFnQixFQUFFUixRQUFRLENBQUNHLElBQVQsQ0FBY0ssZ0JBTmhCO0FBT2hCQyxZQUFJLEVBQUVULFFBQVEsQ0FBQ0csSUFBVCxDQUFjTSxJQVBKO0FBUWhCQyxxQkFBYSxFQUFFVixRQUFRLENBQUNHLElBQVQsQ0FBY08sYUFSYjtBQVNoQkMsa0JBQVUsRUFBRVgsUUFBUSxDQUFDRyxJQUFULENBQWNRO0FBVFYsT0FBcEI7QUFXQXBCLGNBQVEsQ0FBQ3FCLGlHQUEyQixDQUFDWCxXQUFELENBQTVCLENBQVI7QUFDQXpCLDBCQUFvQixDQUFDeUIsV0FBRCxDQUFwQjtBQUFrQztBQUNyQyxLQWRELFdBY1MsVUFBQVksS0FBSyxFQUFJO0FBQ2QsY0FBUUEsS0FBSyxDQUFDYixRQUFOLENBQWVjLE1BQXZCO0FBQ0ksYUFBSyxHQUFMO0FBQ0l6QixlQUFLLENBQUMwQixPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBRUMsb0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxtQkFBTyxFQUFFLE9BQTdCO0FBQXNDQyxrQkFBTSxFQUFFTixLQUFLLENBQUNiLFFBQU4sQ0FBZUcsSUFBZixDQUFvQmlCLE9BQWxFO0FBQTJFQyxnQkFBSSxFQUFFO0FBQWpGLFdBQW5CO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0loQyxlQUFLLENBQUMwQixPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBRUMsb0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxtQkFBTyxFQUFFLE9BQTdCO0FBQXNDQyxrQkFBTSxFQUFFLHNCQUE5QztBQUFzRUUsZ0JBQUksRUFBRTtBQUE1RSxXQUFuQjtBQUNBOztBQUNKO0FBQ0loQyxlQUFLLENBQUMwQixPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBRUMsb0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxtQkFBTyxFQUFFLE9BQTdCO0FBQXNDQyxrQkFBTSxFQUFFLDBDQUE5QztBQUEwRkUsZ0JBQUksRUFBRTtBQUFoRyxXQUFuQjtBQUNBO0FBVFI7QUFZSCxLQTNCRDtBQTRCSDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YvQixZQUFRLENBQUNnQyxxR0FBK0IsQ0FBQyxJQUFELENBQWhDLENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBYTtBQUN6QixRQUFNQyxLQUFLLEdBQUduRCxpQkFBaUIsQ0FBQzJCLE9BQWxCLENBQTBCeUIsT0FBMUIsQ0FBa0NGLE9BQWxDLENBQWQ7O0FBQ0E1QixnR0FBd0IsQ0FBQzJCLE9BQXpCLENBQWlDQyxPQUFPLENBQUNHLEVBQXpDLEVBQTZDN0IsSUFBN0MsQ0FBa0QsVUFBQUMsUUFBUSxFQUFJO0FBQzFEWCxXQUFLLENBQUMwQixPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBRUMsZ0JBQVEsRUFBRSxPQUFaO0FBQXFCQyxlQUFPLEVBQUUsTUFBOUI7QUFBc0NDLGNBQU0sRUFBRSxzQkFBc0JNLE9BQU8sQ0FBQ0ksSUFBOUIsR0FBcUMsd0JBQW5GO0FBQTZHUixZQUFJLEVBQUU7QUFBbkgsT0FBbkI7QUFDQTNCLFVBQUksQ0FBQ1AsVUFBRCxFQUFhSixJQUFJLENBQUNKLEtBQWxCLEVBQXlCTSxNQUF6QixDQUFKO0FBQ0gsS0FIRCxXQUdTLFVBQUE0QixLQUFLLEVBQUk7QUFDZHhCLFdBQUssQ0FBQzBCLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQjtBQUFFQyxnQkFBUSxFQUFFLE1BQVo7QUFBb0JDLGVBQU8sRUFBRSxPQUE3QjtBQUFzQ0MsY0FBTSxFQUFFTixLQUFLLENBQUNiLFFBQU4sQ0FBZUcsSUFBZixDQUFvQmlCLE9BQWxFO0FBQTJFQyxZQUFJLEVBQUU7QUFBakYsT0FBbkI7QUFDSCxLQUxEO0FBTUgsR0FSRDs7QUFVQSxNQUFNUyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNMLE9BQUQsRUFBYTtBQUNwQ00sV0FBTyxDQUFDQyxHQUFSLENBQVlQLE9BQVo7QUFDQSx3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLHFCQUFYO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUU7QUFBRVEsdUJBQVcsRUFBRTtBQUFmLFdBQWY7QUFBd0MsY0FBSSxFQUFDLGNBQTdDO0FBQTRELG1CQUFTLEVBQUMsMENBQXRFO0FBQWlILGtCQUFRLEVBQUUsQ0FBQ3hELGlCQUFELElBQXNCZ0QsT0FBTyxDQUFDRyxFQUFSLEtBQWVuRCxpQkFBaUIsQ0FBQ21EO0FBQWxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxhQUFiO0FBQTJCLGlCQUFTLEVBQUMsbUNBQXJDO0FBQXlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNSixPQUFPLENBQUNDLE9BQUQsQ0FBYjtBQUFBLFNBQWxGO0FBQTBHLGdCQUFRLEVBQUUsQ0FBQ2hELGlCQUFELElBQXNCZ0QsT0FBTyxDQUFDRyxFQUFSLEtBQWVuRCxpQkFBaUIsQ0FBQ21EO0FBQTNLO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBLG9CQURKO0FBU0gsR0FYRDs7QUFhQSxXQUFTTSxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUN4QixRQUFJQSxDQUFDLElBQUlBLENBQUMsQ0FBQ3hELEtBQVgsRUFBa0I7QUFDZFksY0FBUSxDQUFDZ0MscUdBQStCLENBQUNZLENBQUMsQ0FBQ3hELEtBQUgsQ0FBaEMsQ0FBUjtBQUNBRCwwQkFBb0IsQ0FBQ3lELENBQUMsQ0FBQ3hELEtBQUgsQ0FBcEI7QUFDSCxLQUhELE1BR087QUFDSFksY0FBUSxDQUFDZ0MscUdBQStCLENBQUMsSUFBRCxDQUFoQyxDQUFSO0FBQ0E3QywwQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0g7QUFFSjs7QUFFRCxXQUFTMEQsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQzdCLFFBQU1YLEtBQUssR0FBRzdDLFlBQVksQ0FBQzhDLE9BQWIsQ0FBcUJVLElBQXJCLENBQWQ7O0FBQ0EsUUFBSVgsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDWjFDLGFBQU8sQ0FBQ0gsWUFBWSxDQUFDNkMsS0FBRCxDQUFiLENBQVA7QUFDSDtBQUNKOztBQUVELFdBQVNZLGFBQVQsQ0FBdUJuRCxVQUF2QixFQUFtQztBQUMvQkMsaUJBQWEsQ0FBQ0QsVUFBVSxFQUFYLENBQWI7QUFDSDs7QUFFRCxXQUFTb0QsZUFBVCxDQUF5QnBELFVBQXpCLEVBQXFDO0FBQ2pDQyxpQkFBYSxDQUFDRCxVQUFVLEVBQVgsQ0FBYjtBQUNIOztBQUdELE1BQU1xRCxRQUFRLEdBQUc7QUFDYiwyQkFBdUIsK0JBQU07QUFDekIsMEJBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0k7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQXVCLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLG1CQUFUO0FBQThCQyxzQkFBVSxFQUFFO0FBQTFDLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsb0RBQUQ7QUFBUSxpQkFBTyxFQUFFN0QsWUFBakI7QUFBK0IsZUFBSyxFQUFFRSxJQUF0QztBQUE0QyxrQkFBUSxFQUFFLGtCQUFDb0QsQ0FBRDtBQUFBLG1CQUFPQyxpQkFBaUIsQ0FBQ0QsQ0FBRCxDQUF4QjtBQUFBLFdBQXREO0FBQW1GLG9CQUFVLEVBQUUsQ0FBQzVEO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFNSCxLQVJZO0FBU2IseUJBQXFCLDZCQUFNO0FBQ3ZCLDBCQUNJO0FBQU0sYUFBSyxFQUFFO0FBQUVrRSxlQUFLLEVBQUUsbUJBQVQ7QUFBOEJDLG9CQUFVLEVBQUUsTUFBMUM7QUFBa0RDLGVBQUssRUFBRSxPQUF6RDtBQUFrRUMsbUJBQVMsRUFBRTtBQUE3RSxTQUFiO0FBQUEsbUJBQ0tyRSxpQkFBaUIsSUFBSUEsaUJBQWlCLENBQUNnQyxNQUFsQixHQUEyQixDQURyRCxTQUMyRGhDLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ2lDLGdCQURsRyxVQUN3SGpDLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ21DLGFBRC9KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsS0FmWTtBQWdCYixvQkFBZ0Isd0JBQU07QUFDbEIsMEJBQ0kscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsVUFBZDtBQUF5QixlQUFPLEVBQUU7QUFBQSxpQkFBTTZCLGVBQWUsQ0FBQ3BELFVBQUQsQ0FBckI7QUFBQSxTQUFsQztBQUFxRSxnQkFBUSxFQUFFLENBQUNaLGlCQUFELElBQXNCQSxpQkFBaUIsQ0FBQzhCLEtBQXZIO0FBQThILGFBQUssRUFBRTtBQUFFNEIscUJBQVcsRUFBRTtBQUFmO0FBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUdILEtBcEJZO0FBcUJiLG9CQUFnQix3QkFBTTtBQUNsQiwwQkFDSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxZQUFkO0FBQXdCLGVBQU8sRUFBRTtBQUFBLGlCQUFNSyxhQUFhLENBQUNuRCxVQUFELENBQW5CO0FBQUEsU0FBakM7QUFBa0UsZ0JBQVEsRUFBRSxDQUFDWixpQkFBRCxJQUFzQkEsaUJBQWlCLENBQUMrQjtBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSDtBQXpCWSxHQUFqQjtBQTRCQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHNEQUFEO0FBQU8sU0FBRyxFQUFFakI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyw0REFBRDtBQUFVLFlBQU0sRUFBQyxpQkFBakI7QUFBQSw4QkFFSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxxQkFBWDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsWUFBRSxFQUFDLFlBQVg7QUFBd0IsZUFBSyxFQUFDLE1BQTlCO0FBQXFDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWlDLElBQUksQ0FBQyxFQUFELENBQVY7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBTUkscUVBQUMsOERBQUQ7QUFDSSxvQkFBWSxFQUFDLE9BRGpCO0FBRUksa0JBQVUsTUFGZDtBQUdJLGNBQU0sRUFBQyw4QkFIWDtBQUlJLGFBQUssRUFBRS9DLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQzJCLE9BSmxEO0FBS0ksaUJBQVMsRUFBRXpCLGlCQUxmO0FBTUkseUJBQWlCLEVBQUUsMkJBQUEwRCxDQUFDO0FBQUEsaUJBQUlELGVBQWUsQ0FBQ0MsQ0FBRCxDQUFuQjtBQUFBLFNBTnhCO0FBT0ksZUFBTyxFQUFDLElBUFo7QUFRSSxpQkFBUyxNQVJiO0FBU0kseUJBQWlCLEVBQUVLLFFBVHZCO0FBVUksYUFBSyxFQUFFckQsVUFWWDtBQVdJLFlBQUksRUFBRUosSUFBSSxDQUFDSixLQVhmO0FBWUksMEJBQWtCLEVBQUMscUJBWnZCO0FBQUEsZ0NBY0kscUVBQUMsd0RBQUQ7QUFBUSxnQkFBTSxFQUFDLGFBQWY7QUFBNkIsdUJBQWEsRUFBQyxRQUEzQztBQUFvRCxxQkFBVyxFQUFFO0FBQUVnRSxpQkFBSyxFQUFFO0FBQVQ7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQWVJLHFFQUFDLHdEQUFEO0FBQVEsZUFBSyxFQUFDLE1BQWQ7QUFBcUIsZ0JBQU0sRUFBQyxNQUE1QjtBQUFtQyxrQkFBUTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZKLGVBZ0JJLHFFQUFDLHdEQUFEO0FBQVEsZUFBSyxFQUFDLGFBQWQ7QUFBNEIsZ0JBQU0sRUFBQyxpQkFBbkM7QUFBK0Msa0JBQVE7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUFpQkkscUVBQUMsd0RBQUQ7QUFBUSxjQUFJLEVBQUU7QUFBQSxtQkFBS2Isa0JBQUw7QUFBQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBMEJJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBb0NIOztHQXpMUTdELGE7VUFFc0RHLHVELEVBZ0IxQ29CLHVEOzs7S0FsQlp2QixhO0FBMkxNLHFFQUFBNEUscUVBQVEsQ0FBQzVFLGFBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjZXNzUHJvZmlsZS5kNjFmYjQzYmM0MTc3YmUzMDMwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJwcmltZXJlYWN0L2J1dHRvblwiO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwicHJpbWVyZWFjdC9kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcInByaW1lcmVhY3QvY29sdW1uXCI7XHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSBcInByaW1lcmVhY3QvZmllbGRzZXRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCJcclxuXHJcbmltcG9ydCB7IEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcbmltcG9ydCB7IGxvYWRBY2Nlc3NQcm9maWxlU2VsZWN0ZWRBY3Rpb24sIGxvYWRBY2Nlc3NQcm9maWxlTGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2FjY2Vzc1Byb2ZpbGVcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQWNjZXNzUHJvZmlsZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFthY2Nlc3NQcm9maWxlUGFnZSwgc2V0QWNjZXNzUHJvZmlsZVBhZ2VdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NQcm9maWxlTGlzdFJlZHVjZXIuYWNjZXNzUHJvZmlsZVBhZ2UpKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZExvY2FsRGF0YSwgc2V0U2VsZWN0ZWRMb2NhbERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2l0ZW5zUGVyUGFnZSwgc2V0SXRlbnNQYWdlXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7IHZhbHVlOiAxMCwgbGFiZWw6IDEwIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAsIGxhYmVsOiAyMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwLCBsYWJlbDogNTAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoaXRlbnNQZXJQYWdlWzBdKTtcclxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5hbWVcIik7XHJcbiAgICBjb25zdCBbbnVtYmVyUGFnZSwgc2V0TnVtYmVyUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVQYWdlKG51bGwpO1xyXG4gICAgICAgIHNldEl0ZW5zUGFnZShudWxsKTtcclxuICAgICAgICBzZXRSb3dzKG51bGwpO1xyXG4gICAgICAgIHNldFNvcnRCeShudWxsKTtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2UobnVtYmVyUGFnZSwgcm93cy52YWx1ZSwgc29ydEJ5KTtcclxuICAgIH0sIFtyb3dzLCBudW1iZXJQYWdlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBwYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkge1xyXG4gICAgICAgIEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZS5fcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUF1eCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgIGVtcHR5OiByZXNwb25zZS5kYXRhLmVtcHR5LFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3QsXHJcbiAgICAgICAgICAgICAgICBsYXN0OiByZXNwb25zZS5kYXRhLmxhc3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHJlc3BvbnNlLmRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50czogcmVzcG9uc2UuZGF0YS5udW1iZXJPZkVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcmVzcG9uc2UuZGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50czogcmVzcG9uc2UuZGF0YS50b3RhbEVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlczogcmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVMaXN0QWN0aW9uKHJlc3BvbnNlQXV4KSk7XHJcbiAgICAgICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVQYWdlKHJlc3BvbnNlQXV4KTs3XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yLnJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJTZXJ2acOnbyBpbmRpc3BvbsOtdmVsXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiRXJybyBubyBzaXN0ZW1hLCBjb250YXRlIG8gYWRtaW5pc3RyYWRvclwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm92byA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZGVsZXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFjY2Vzc1Byb2ZpbGVQYWdlLmNvbnRlbnQuaW5kZXhPZihyb3dEYXRhKTtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX2RlbGV0ZShyb3dEYXRhLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwiZXJyb3JcIiwgc3VtbWFyeTogXCJFcnJvXCIsIGRldGFpbDogXCJQZXJmaWwgZGUgQWNlc3NvIFwiICsgcm93RGF0YS5ub21lICsgXCIgZXhjbHXDrWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvd0RhdGEpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjZXNzUHJvZmlsZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gaWNvbj1cInBpIHBpLXBlbmNpbFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tc3VjY2VzcyBwLW1yLTJcIiBkaXNhYmxlZD17IXNlbGVjdGVkTG9jYWxEYXRhIHx8IHJvd0RhdGEuaWQgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gX2RlbGV0ZShyb3dEYXRhKX0gZGlzYWJsZWQ9eyFzZWxlY3RlZExvY2FsRGF0YSB8fCByb3dEYXRhLmlkICE9PSBzZWxlY3RlZExvY2FsRGF0YS5pZH0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RMb2NhbERhdGEoZSkge1xyXG4gICAgICAgIGlmIChlICYmIGUudmFsdWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbihlLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKGUudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBY2Nlc3NQcm9maWxlU2VsZWN0ZWRBY3Rpb24obnVsbCkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZExvY2FsRGF0YShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUl0ZW1QZXJQYWdlKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW5zUGVyUGFnZS5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0Um93cyhpdGVuc1BlclBhZ2VbaW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKSB7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudW1iZXJQYWdlLS0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51bWJlclBhZ2VNaW51cyhudW1iZXJQYWdlKSB7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudW1iZXJQYWdlKyspO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICBcIlJvd3NQZXJQYWdlRHJvcGRvd25cIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTFcIiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiB9fT5JdGVucyBwb3IgcMOhZ2luYTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17aXRlbnNQZXJQYWdlfSB2YWx1ZT17cm93c30gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJdGVtUGVyUGFnZShlKX0gaXNEaXNhYmxlZD17IWFjY2Vzc1Byb2ZpbGVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiQ3VycmVudFBhZ2VSZXBvcnRcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwidmFyKC0tdGV4dC1jb2xvcilcIiwgdXNlclNlbGVjdDogXCJub25lXCIsIHdpZHRoOiBcIjEyMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UubnVtYmVyICsgMX0gLSB7YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UubnVtYmVyT2ZFbGVtZW50c30gZGUge2FjY2Vzc1Byb2ZpbGVQYWdlICYmIGFjY2Vzc1Byb2ZpbGVQYWdlLnRvdGFsRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiUHJldlBhZ2VMaW5rXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJBbnRlcmlvclwiIG9uQ2xpY2s9eygpID0+IG51bWJlclBhZ2VNaW51cyhudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyFhY2Nlc3NQcm9maWxlUGFnZSB8fCBhY2Nlc3NQcm9maWxlUGFnZS5maXJzdH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiTmV4dFBhZ2VMaW5rXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJQcsOzeGltb1wiIG9uQ2xpY2s9eygpID0+IG51bWJlclBhZ2VTdW0obnVtYmVyUGFnZSl9IGRpc2FibGVkPXshYWNjZXNzUHJvZmlsZVBhZ2UgfHwgYWNjZXNzUHJvZmlsZVBhZ2UubGFzdH0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJMaXN0YSBkZSBQZXJmaXNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY2Vzc1Byb2ZpbGUvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJuZXctYnV0dG9uXCIgbGFiZWw9XCJOb3ZvXCIgb25DbGljaz17KCkgPT4gbm92byh7fSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjQwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUGVyZmlzIGRlIEFjZXNzbyBDYWRhc3RyYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY2Vzc1Byb2ZpbGVQYWdlICYmIGFjY2Vzc1Byb2ZpbGVQYWdlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3RlZExvY2FsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiBzZWxlY3RMb2NhbERhdGEoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JUZW1wbGF0ZT17dGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e251bWJlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cm93cy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JDbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGhlYWRlcj1cIlNlbGVjaW9uYWRvXCIgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7IHdpZHRoOiBcIjNlbVwiIH19PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJuYW1lXCIgaGVhZGVyPVwiTm9tZVwiIHNvcnRhYmxlPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJkZXNjcmlwdGlvblwiIGhlYWRlcj1cIkRlc2NyacOnw6NvXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXsoKSA9PmFjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFjY2Vzc1Byb2ZpbGUpOyJdLCJzb3VyY2VSb290IjoiIn0=