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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.accessProfileSelectedReducer.accessProfileSelected;
  })),
      accessProfileSelected = _useState3[0],
      setAccessProfileSelected = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    value: 10,
    label: 10
  }, {
    value: 20,
    label: 20
  }, {
    value: 50,
    label: 50
  }]),
      itensPerPage = _useState4[0],
      setItensPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(itensPerPage[0]),
      rows = _useState5[0],
      setRows = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("name"),
      sortBy = _useState6[0],
      setSortBy = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      numberPage = _useState7[0],
      setNumberPage = _useState7[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      setAccessProfilePage(null);
      setAccessProfileSelected(null);
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
          disabled: !selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        },
        disabled: !selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
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
          lineNumber: 144,
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
          lineNumber: 145,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
        lineNumber: 151,
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
        lineNumber: 158,
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
        lineNumber: 163,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
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
          lineNumber: 174,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
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
          lineNumber: 191,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "name",
          header: "Nome",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "description",
          header: "Descri\xE7\xE3o",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(AccessProfile, "Z9tePrSikkfOcH5YoWPT+U3nUrU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9pbmRleC5qc3giXSwibmFtZXMiOlsiQWNjZXNzUHJvZmlsZSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZUxpc3RSZWR1Y2VyIiwiYWNjZXNzUHJvZmlsZVBhZ2UiLCJzZXRBY2Nlc3NQcm9maWxlUGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1Y2VyIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkIiwic2V0QWNjZXNzUHJvZmlsZVNlbGVjdGVkIiwidmFsdWUiLCJsYWJlbCIsIml0ZW5zUGVyUGFnZSIsInNldEl0ZW5zUGFnZSIsInJvd3MiLCJzZXRSb3dzIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwibnVtYmVyUGFnZSIsInNldE51bWJlclBhZ2UiLCJ0b2FzdCIsInVzZVJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJwYWdlIiwicGFnZU5vIiwicGFnZVNpemUiLCJBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UiLCJfcGFnZSIsInRoZW4iLCJyZXNwb25zZSIsInJlc3BvbnNlQXV4IiwiY29udGVudCIsImRhdGEiLCJlbXB0eSIsImZpcnN0IiwibGFzdCIsIm51bWJlciIsIm51bWJlck9mRWxlbWVudHMiLCJzaXplIiwidG90YWxFbGVtZW50cyIsInRvdGFsUGFnZXMiLCJsb2FkQWNjZXNzUHJvZmlsZUxpc3RBY3Rpb24iLCJlcnJvciIsInN0YXR1cyIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibWVzc2FnZSIsImxpZmUiLCJub3ZvIiwibG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbiIsIl9kZWxldGUiLCJyb3dEYXRhIiwiaW5kZXgiLCJpbmRleE9mIiwiaWQiLCJub21lIiwiYWN0aW9uQm9keVRlbXBsYXRlIiwibWFyZ2luUmlnaHQiLCJpZFVzZXJFbnRpdHkiLCJzZWxlY3RMb2NhbERhdGEiLCJlIiwiaGFuZGxlSXRlbVBlclBhZ2UiLCJpdGVtIiwibnVtYmVyUGFnZVN1bSIsIm51bWJlclBhZ2VNaW51cyIsInRlbXBsYXRlIiwiY29sb3IiLCJ1c2VyU2VsZWN0Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXdCQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHdCQUFOLENBQStCQyxpQkFBMUM7QUFBQSxHQUFELENBQVosQ0FGaEM7QUFBQSxNQUVuQkEsaUJBRm1CO0FBQUEsTUFFQUMsb0JBRkE7O0FBQUEsbUJBR3dCTCxzREFBUSxDQUFDLElBQUQsQ0FIaEM7QUFBQSxNQUduQk0saUJBSG1CO0FBQUEsTUFHQUMsb0JBSEE7O0FBQUEsbUJBSWdDUCxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNNLDRCQUFOLENBQW1DQyxxQkFBOUM7QUFBQSxHQUFELENBQVosQ0FKeEM7QUFBQSxNQUluQkEscUJBSm1CO0FBQUEsTUFJSUMsd0JBSko7O0FBQUEsbUJBTVdWLHNEQUFRLENBQUMsQ0FDMUM7QUFBRVcsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRDBDLEVBRTFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUYwQyxFQUcxQztBQUFFRCxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIs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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKLGVBaUJJLHFFQUFDLHdEQUFEO0FBQVEsY0FBSSxFQUFFWjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBMEJJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBb0NIOztHQTFMUWhFLGE7VUFFc0RHLHVELEVBRVFBLHVELEVBZWxEdUIsdUQ7OztLQW5CWjFCLGE7QUE0TE0scUVBQUE4RSxxRUFBUSxDQUFDOUUsYUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2Nlc3NQcm9maWxlLjVkODhiMzQwZWM5ZWUyZWRjMGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gXCJwcmltZXJlYWN0L2RhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwicHJpbWVyZWFjdC9jb2x1bW5cIjtcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxyXG5cclxuaW1wb3J0IHsgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0FjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuaW1wb3J0IHsgbG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbiwgbG9hZEFjY2Vzc1Byb2ZpbGVMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWNjZXNzUHJvZmlsZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBY2Nlc3NQcm9maWxlKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FjY2Vzc1Byb2ZpbGVQYWdlLCBzZXRBY2Nlc3NQcm9maWxlUGFnZV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Byb2ZpbGVMaXN0UmVkdWNlci5hY2Nlc3NQcm9maWxlUGFnZSkpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkTG9jYWxEYXRhLCBzZXRTZWxlY3RlZExvY2FsRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthY2Nlc3NQcm9maWxlU2VsZWN0ZWQsIHNldEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHVjZXIuYWNjZXNzUHJvZmlsZVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW2l0ZW5zUGVyUGFnZSwgc2V0SXRlbnNQYWdlXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7IHZhbHVlOiAxMCwgbGFiZWw6IDEwIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAsIGxhYmVsOiAyMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwLCBsYWJlbDogNTAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoaXRlbnNQZXJQYWdlWzBdKTtcclxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5hbWVcIik7XHJcbiAgICBjb25zdCBbbnVtYmVyUGFnZSwgc2V0TnVtYmVyUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVQYWdlKG51bGwpO1xyXG4gICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZChudWxsKTtcclxuICAgICAgICBzZXRJdGVuc1BhZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Um93cyhudWxsKTtcclxuICAgICAgICBzZXRTb3J0QnkobnVsbCk7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICB9LCBbcm93cywgbnVtYmVyUGFnZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpIHtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX3BhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBdXggPSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogcmVzcG9uc2UuZGF0YS5lbXB0eSxcclxuICAgICAgICAgICAgICAgIGZpcnN0OiByZXNwb25zZS5kYXRhLmZpcnN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogcmVzcG9uc2UuZGF0YS5sYXN0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiByZXNwb25zZS5kYXRhLm51bWJlcixcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEubnVtYmVyT2ZFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHNpemU6IHJlc3BvbnNlLmRhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEudG90YWxFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IHJlc3BvbnNlLmRhdGEudG90YWxQYWdlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBY2Nlc3NQcm9maWxlTGlzdEFjdGlvbihyZXNwb25zZUF1eCkpO1xyXG4gICAgICAgICAgICBzZXRBY2Nlc3NQcm9maWxlUGFnZShyZXNwb25zZUF1eCk7N1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiU2VydmnDp28gaW5kaXNwb27DrXZlbFwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIkVycm8gbm8gc2lzdGVtYSwgY29udGF0ZSBvIGFkbWluaXN0cmFkb3JcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhY2Nlc3NQcm9maWxlUGFnZS5jb250ZW50LmluZGV4T2Yocm93RGF0YSk7XHJcbiAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9kZWxldGUocm93RGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcImVycm9yXCIsIHN1bW1hcnk6IFwiRXJyb1wiLCBkZXRhaWw6IFwiUGVyZmlsIGRlIEFjZXNzbyBcIiArIHJvd0RhdGEubm9tZSArIFwiIGV4Y2x1w61kbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgcGFnZShudW1iZXJQYWdlLCByb3dzLnZhbHVlLCBzb3J0QnkpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2Nlc3NQcm9maWxlL2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBpY29uPVwicGkgcGktcGVuY2lsXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi1zdWNjZXNzIHAtbXItMlwiIGRpc2FibGVkPXshc2VsZWN0ZWRMb2NhbERhdGEgfHwgcm93RGF0YS5pZFVzZXJFbnRpdHkgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkVXNlckVudGl0eX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IF9kZWxldGUocm93RGF0YSl9IGRpc2FibGVkPXshc2VsZWN0ZWRMb2NhbERhdGEgfHwgcm93RGF0YS5pZFVzZXJFbnRpdHkgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkVXNlckVudGl0eX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RMb2NhbERhdGEoZSkge1xyXG4gICAgICAgIGlmIChlICYmIGUudmFsdWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFjY2Vzc1Byb2ZpbGVTZWxlY3RlZEFjdGlvbihlLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKGUudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBY2Nlc3NQcm9maWxlU2VsZWN0ZWRBY3Rpb24obnVsbCkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZExvY2FsRGF0YShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUl0ZW1QZXJQYWdlKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW5zUGVyUGFnZS5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0Um93cyhpdGVuc1BlclBhZ2VbaW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKSB7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudW1iZXJQYWdlLS0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51bWJlclBhZ2VNaW51cyhudW1iZXJQYWdlKSB7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudW1iZXJQYWdlKyspO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICBcIlJvd3NQZXJQYWdlRHJvcGRvd25cIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTFcIiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiB9fT5JdGVucyBwb3IgcMOhZ2luYTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17aXRlbnNQZXJQYWdlfSB2YWx1ZT17cm93c30gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJdGVtUGVyUGFnZShlKX0gaXNEaXNhYmxlZD17IWFjY2Vzc1Byb2ZpbGVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiQ3VycmVudFBhZ2VSZXBvcnRcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwidmFyKC0tdGV4dC1jb2xvcilcIiwgdXNlclNlbGVjdDogXCJub25lXCIsIHdpZHRoOiBcIjEyMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UubnVtYmVyICsgMX0gLSB7YWNjZXNzUHJvZmlsZVBhZ2UgJiYgYWNjZXNzUHJvZmlsZVBhZ2UubnVtYmVyT2ZFbGVtZW50c30gZGUge2FjY2Vzc1Byb2ZpbGVQYWdlICYmIGFjY2Vzc1Byb2ZpbGVQYWdlLnRvdGFsRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiUHJldlBhZ2VMaW5rXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJBbnRlcmlvclwiIG9uQ2xpY2s9eygpID0+IG51bWJlclBhZ2VNaW51cyhudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyFhY2Nlc3NQcm9maWxlUGFnZSB8fCBhY2Nlc3NQcm9maWxlUGFnZS5maXJzdH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiTmV4dFBhZ2VMaW5rXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJQcsOzeGltb1wiIG9uQ2xpY2s9eygpID0+IG51bWJlclBhZ2VTdW0obnVtYmVyUGFnZSl9IGRpc2FibGVkPXshYWNjZXNzUHJvZmlsZVBhZ2UgfHwgYWNjZXNzUHJvZmlsZVBhZ2UubGFzdH0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJMaXN0YSBkZSBQZXJmaXNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY2Vzc1Byb2ZpbGUvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJuZXctYnV0dG9uXCIgbGFiZWw9XCJOb3ZvXCIgb25DbGljaz17KCkgPT4gbm92byh7fSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjQwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUGVyZmlzIGRlIEFjZXNzbyBDYWRhc3RyYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY2Vzc1Byb2ZpbGVQYWdlICYmIGFjY2Vzc1Byb2ZpbGVQYWdlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3RlZExvY2FsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiBzZWxlY3RMb2NhbERhdGEoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JUZW1wbGF0ZT17dGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e251bWJlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cm93cy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JDbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGhlYWRlcj1cIlNlbGVjaW9uYWRvXCIgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7IHdpZHRoOiBcIjNlbVwiIH19PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJuYW1lXCIgaGVhZGVyPVwiTm9tZVwiIHNvcnRhYmxlPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJkZXNjcmlwdGlvblwiIGhlYWRlcj1cIkRlc2NyacOnw6NvXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiYmFjay1idXR0b25cIiBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChBY2Nlc3NQcm9maWxlKTsiXSwic291cmNlUm9vdCI6IiJ9