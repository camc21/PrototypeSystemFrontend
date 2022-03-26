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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9pbmRleC5qc3giXSwibmFtZXMiOlsiQWNjZXNzUHJvZmlsZSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZUxpc3RSZWR1Y2VyIiwiYWNjZXNzUHJvZmlsZVBhZ2UiLCJzZXRBY2Nlc3NQcm9maWxlUGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRBY2Nlc3NQcm9maWxlTGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsInJvd0RhdGEiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsIm5vbWUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luUmlnaHQiLCJzZWxlY3RMb2NhbERhdGEiLCJlIiwiaGFuZGxlSXRlbVBlclBhZ2UiLCJpdGVtIiwibnVtYmVyUGFnZVN1bSIsIm51bWJlclBhZ2VNaW51cyIsInRlbXBsYXRlIiwiY29sb3IiLCJ1c2VyU2VsZWN0Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXdCQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHdCQUFOLENBQStCQyxpQkFBMUM7QUFBQSxHQUFELENBQVosQ0FGaEM7QUFBQSxNQUVuQkEsaUJBRm1CO0FBQUEsTUFFQUMsb0JBRkE7O0FBQUEsbUJBR3dCTCxzREFBUSxDQUFDLElBQUQsQ0FIaEM7QUFBQSxNQUduQk0saUJBSG1CO0FBQUEsTUFHQUMsb0JBSEE7O0FBQUEsbUJBS1dQLHNEQUFRLENBQUMsQ0FDMUM7QUFBRVEsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRDBDLEVBRTFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUYwQyxFQUcxQztBQUFFRCxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FIMEMsQ0FBRCxDQUxuQjtBQUFBLE1BS25CQyxZQUxtQjtBQUFBLE1BS0xDLFlBTEs7O0FBQUEsbUJBV0ZYLHNEQUFRLENBQUNVLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FYTjtBQUFBLE1BV25CRSxJQVhtQjtBQUFBLE1BV2JDLE9BWGE7O0FBQUEsbUJBWUViLHNEQUFRLENBQUMsTUFBRCxDQVpWO0FBQUEsTUFZbkJjLE1BWm1CO0FBQUEsTUFZWEMsU0FaVzs7QUFBQSxtQkFhVWYsc0RBQVEsQ0FBQyxD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QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFvQ0g7O0dBekxRN0QsYTtVQUVzREcsdUQsRUFnQjFDb0IsdUQ7OztLQWxCWnZCLGE7QUEyTE0scUVBQUE0RSxxRUFBUSxDQUFDNUUsYUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2Nlc3NQcm9maWxlLjJjYzRmOWE1ZDVmOTdmOTQxMzk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gXCJwcmltZXJlYWN0L2RhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwicHJpbWVyZWFjdC9jb2x1bW5cIjtcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxyXG5cclxuaW1wb3J0IHsgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0FjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuaW1wb3J0IHsgbG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbiwgbG9hZEFjY2Vzc1Byb2ZpbGVMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWNjZXNzUHJvZmlsZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBY2Nlc3NQcm9maWxlKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FjY2Vzc1Byb2ZpbGVQYWdlLCBzZXRBY2Nlc3NQcm9maWxlUGFnZV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Byb2ZpbGVMaXN0UmVkdWNlci5hY2Nlc3NQcm9maWxlUGFnZSkpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkTG9jYWxEYXRhLCBzZXRTZWxlY3RlZExvY2FsRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbaXRlbnNQZXJQYWdlLCBzZXRJdGVuc1BhZ2VdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHsgdmFsdWU6IDEwLCBsYWJlbDogMTAgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMCwgbGFiZWw6IDIwIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTAsIGxhYmVsOiA1MCB9XHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZShpdGVuc1BlclBhZ2VbMF0pO1xyXG4gICAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKFwibmFtZVwiKTtcclxuICAgIGNvbnN0IFtudW1iZXJQYWdlLCBzZXROdW1iZXJQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWNjZXNzUHJvZmlsZVBhZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0SXRlbnNQYWdlKG51bGwpO1xyXG4gICAgICAgIHNldFJvd3MobnVsbCk7XHJcbiAgICAgICAgc2V0U29ydEJ5KG51bGwpO1xyXG4gICAgICAgIHNldE51bWJlclBhZ2UobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGFnZShudW1iZXJQYWdlLCByb3dzLnZhbHVlLCBzb3J0QnkpO1xyXG4gICAgfSwgW3Jvd3MsIG51bWJlclBhZ2VdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KSB7XHJcbiAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9wYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQXV4ID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgZW1wdHk6IHJlc3BvbnNlLmRhdGEuZW1wdHksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogcmVzcG9uc2UuZGF0YS5maXJzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IHJlc3BvbnNlLmRhdGEubGFzdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogcmVzcG9uc2UuZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiByZXNwb25zZS5kYXRhLm51bWJlck9mRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICBzaXplOiByZXNwb25zZS5kYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzOiByZXNwb25zZS5kYXRhLnRvdGFsRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiByZXNwb25zZS5kYXRhLnRvdGFsUGFnZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkQWNjZXNzUHJvZmlsZUxpc3RBY3Rpb24ocmVzcG9uc2VBdXgpKTtcclxuICAgICAgICAgICAgc2V0QWNjZXNzUHJvZmlsZVBhZ2UocmVzcG9uc2VBdXgpOzdcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlNlcnZpw6dvIGluZGlzcG9uw612ZWxcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJFcnJvIG5vIHNpc3RlbWEsIGNvbnRhdGUgbyBhZG1pbmlzdHJhZG9yXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3ZvID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRBY2Nlc3NQcm9maWxlU2VsZWN0ZWRBY3Rpb24obnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9kZWxldGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWNjZXNzUHJvZmlsZVBhZ2UuY29udGVudC5pbmRleE9mKHJvd0RhdGEpO1xyXG4gICAgICAgIEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZS5fZGVsZXRlKHJvd0RhdGEuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJlcnJvclwiLCBzdW1tYXJ5OiBcIkVycm9cIiwgZGV0YWlsOiBcIlBlcmZpbCBkZSBBY2Vzc28gXCIgKyByb3dEYXRhLm5vbWUgKyBcIiBleGNsdcOtZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgIHBhZ2UobnVtYmVyUGFnZSwgcm93cy52YWx1ZSwgc29ydEJ5KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkJvZHlUZW1wbGF0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocm93RGF0YSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2Nlc3NQcm9maWxlL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBpY29uPVwicGkgcGktcGVuY2lsXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi1zdWNjZXNzIHAtbXItMlwiIGRpc2FibGVkPXshc2VsZWN0ZWRMb2NhbERhdGEgfHwgcm93RGF0YS5pZCAhPT0gc2VsZWN0ZWRMb2NhbERhdGEuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiBfZGVsZXRlKHJvd0RhdGEpfSBkaXNhYmxlZD17IXNlbGVjdGVkTG9jYWxEYXRhIHx8IHJvd0RhdGEuaWQgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdExvY2FsRGF0YShlKSB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uKGUudmFsdWUpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRMb2NhbERhdGEoZS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXRlbVBlclBhZ2UoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbnNQZXJQYWdlLmluZGV4T2YoaXRlbSlcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRSb3dzKGl0ZW5zUGVyUGFnZVtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYWdlU3VtKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UtLSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UrKyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgIFwiUm93c1BlclBhZ2VEcm9wZG93blwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMVwiIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19Pkl0ZW5zIHBvciBww6FnaW5hOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtpdGVuc1BlclBhZ2V9IHZhbHVlPXtyb3dzfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUl0ZW1QZXJQYWdlKGUpfSBpc0Rpc2FibGVkPXshYWNjZXNzUHJvZmlsZVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJDdXJyZW50UGFnZVJlcG9ydFwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiwgd2lkdGg6IFwiMTIwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2Nlc3NQcm9maWxlUGFnZSAmJiBhY2Nlc3NQcm9maWxlUGFnZS5udW1iZXIgKyAxfSAtIHthY2Nlc3NQcm9maWxlUGFnZSAmJiBhY2Nlc3NQcm9maWxlUGFnZS5udW1iZXJPZkVsZW1lbnRzfSBkZSB7YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UudG90YWxFbGVtZW50c31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJQcmV2UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkFudGVyaW9yXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpfSBkaXNhYmxlZD17IWFjY2Vzc1Byb2ZpbGVQYWdlIHx8IGFjY2Vzc1Byb2ZpbGVQYWdlLmZpcnN0fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJOZXh0UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlByw7N4aW1vXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyFhY2Nlc3NQcm9maWxlUGFnZSB8fCBhY2Nlc3NQcm9maWxlUGFnZS5sYXN0fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkxpc3RhIGRlIFBlcmZpc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjZXNzUHJvZmlsZS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cIm5ldy1idXR0b25cIiBsYWJlbD1cIk5vdm9cIiBvbkNsaWNrPXsoKSA9PiBub3ZvKHt9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiNDAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJQZXJmaXMgZGUgQWNlc3NvIENhZGFzdHJhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGVkTG9jYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtlID0+IHNlbGVjdExvY2FsRGF0YShlKX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclRlbXBsYXRlPXt0ZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17bnVtYmVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvckNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5hbWVcIiBoZWFkZXI9XCJOb21lXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImRlc2NyaXB0aW9uXCIgaGVhZGVyPVwiRGVzY3Jpw6fDo29cIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFjY2Vzc1Byb2ZpbGUpOyJdLCJzb3VyY2VSb290IjoiIn0=