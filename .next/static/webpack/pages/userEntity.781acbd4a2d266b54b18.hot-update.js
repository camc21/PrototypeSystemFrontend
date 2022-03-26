webpackHotUpdate_N_E("pages/userEntity",{

/***/ "./pages/userEntity/index.jsx":
/*!************************************!*\
  !*** ./pages/userEntity/index.jsx ***!
  \************************************/
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
/* harmony import */ var _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/UserEntityDataService */ "./services/UserEntityDataService.jsx");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var _store_actions_userEntity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/userEntity */ "./store/actions/userEntity/index.jsx");



var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\userEntity\\index.jsx",
    _s = $RefreshSig$();














function UserEntity(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.userEntityListReducer.userEntityPage;
  })),
      userEntityPage = _useState[0],
      setUserEntityPage = _useState[1];

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
    page(numberPage, rows.value, sortBy);
  }, [rows, numberPage]);

  function page(pageNo, pageSize, sortBy) {
    _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_10__["UserEntityDataService"]._page(pageNo, pageSize, sortBy).then(function (response) {
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
      dispatch(Object(_store_actions_userEntity__WEBPACK_IMPORTED_MODULE_12__["loadUserEntityListAction"])(responseAux));
      setUserEntityPage(responseAux);
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
    dispatch(Object(_store_actions_userEntity__WEBPACK_IMPORTED_MODULE_12__["loadUserEntitySelectedAction"])(null));
  }; // const editar = (rowData) => {
  //     let selectedUser = rowData;
  //     selectedUser.accessProfiles = [];
  //     console.log(selectedUser);
  //     // dispatch(loadUserEntitySelectedAction(rowData));
  //     // setSelectedLocalData(rowData)
  // }


  var _delete = function _delete(rowData) {
    var index = userEntityPage.content.indexOf(rowData);

    _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_10__["UserEntityDataService"]._delete(rowData.id).then(function (response) {
      toast.current.show({
        severity: "error",
        summary: "Erro",
        detail: "Usuário " + rowData.nome + " excluído com sucesso!",
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
    console.log(selectedLocalData);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/userEntity/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          style: {
            marginRight: "10px"
          },
          icon: "pi pi-pencil",
          className: "p-button-rounded p-button-success p-mr-2",
          disabled: !selectedLocalData && rowData.idUsuario !== selectedLocalData.idUsuario
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        },
        disabled: !selectedLocalData && rowData.idUsuario !== selectedLocalData.idUsuario
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  };

  function selectLocalData(e) {
    if (e && e.value) {
      dispatch(Object(_store_actions_userEntity__WEBPACK_IMPORTED_MODULE_12__["loadUserEntitySelectedAction"])(e.value));
      setSelectedLocalData(e.value);
    } else {
      dispatch(Object(_store_actions_userEntity__WEBPACK_IMPORTED_MODULE_12__["loadUserEntitySelectedAction"])(null));
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
          lineNumber: 141,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
          options: itensPerPage,
          value: rows,
          onChange: function onChange(e) {
            return handleItemPerPage(e);
          },
          isDisabled: !userEntityPage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
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
        children: [userEntityPage && userEntityPage.number + 1, " - ", userEntityPage && userEntityPage.numberOfElements, " de ", userEntityPage && userEntityPage.totalElements]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, _this);
    },
    "PrevPageLink": function PrevPageLink() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        label: "Anterior",
        onClick: function onClick() {
          return numberPageMinus(numberPage);
        },
        disabled: !userEntityPage || userEntityPage.first,
        style: {
          marginRight: "10px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, _this);
    },
    "NextPageLink": function NextPageLink() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        label: "Pr\xF3ximo",
        onClick: function onClick() {
          return numberPageSum(numberPage);
        },
        disabled: !userEntityPage || userEntityPage.last
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_8__["Fieldset"], {
      legend: "Lista de Usu\xE1rios",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/userEntity/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "new-button",
          label: "Novo",
          onClick: function onClick() {
            return novo({});
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTable"], {
        scrollHeight: "400px",
        scrollable: true,
        header: "Usu\xE1rios Cadastrados",
        value: userEntityPage && userEntityPage.content,
        dataKey: "idUsuario",
        selection: selectedLocalData,
        onSelectionChange: function onSelectionChange(e) {
          return selectLocalData(e);
        },
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
          lineNumber: 188,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "name",
          header: "Nome",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "email",
          header: "E-mail",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "accessProfilesText",
          header: "Perfis de Acesso",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(UserEntity, "8neULKgSY1RAXmTfY+ORVyv4XkA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = UserEntity;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(UserEntity));

var _c, _c2;

$RefreshReg$(_c, "UserEntity");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9pbmRleC5qc3giXSwibmFtZXMiOlsiVXNlckVudGl0eSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eUxpc3RSZWR1Y2VyIiwidXNlckVudGl0eVBhZ2UiLCJzZXRVc2VyRW50aXR5UGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIlVzZXJFbnRpdHlEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsInJvd0RhdGEiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsIm5vbWUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luUmlnaHQiLCJpZFVzdWFyaW8iLCJzZWxlY3RMb2NhbERhdGEiLCJlIiwiaGFuZGxlSXRlbVBlclBhZ2UiLCJpdGVtIiwibnVtYmVyUGFnZVN1bSIsIm51bWJlclBhZ2VNaW51cyIsInRlbXBsYXRlIiwiY29sb3IiLCJ1c2VyU2VsZWN0Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXFCQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHFCQUFOLENBQTRCQyxjQUF2QztBQUFBLEdBQUQsQ0FBWixDQUY3QjtBQUFBLE1BRWhCQSxjQUZnQjtBQUFBLE1BRUFDLGlCQUZBOztBQUFBLG1CQUkyQkwsc0RBQVEsQ0FBQyxJQUFELENBSm5DO0FBQUEsTUFJaEJNLGlCQUpnQjtBQUFBLE1BSUdDLG9CQUpIOztBQUFBLG1CQU1jUCxzREFBUSxDQUFDLENBQzFDO0FBQUVRLFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUQwQyxFQUUxQztBQUFFRCxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FGMEMsRUFHMUM7QUFBRUQsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBSDBDLENBQUQsQ0FOdEI7QUFBQSxNQU1oQkMsWUFOZ0I7QUFBQSxNQU1GQyxZQU5FOztBQUFBLG1CQVlDWCxzREFBUSxDQUFDVSxZQUFZLENBQUMsQ0FBRCxDQUFiLENBWlQ7QUFBQSxNQVloQkUsSUFaZ0I7QUFBQSxNQVlWQyxPQVpVOztBQUFBLG1CQWFLYixzREFBUSxDQUFDLE1BQUQsQ0FiYjtBQUFBLE1BYWhCYyxNQWJnQjtBQUFBLE1BYVJDLFNBYlE7O0FBQUEsbUJBY2FmLHNEQUFRLENBQUMsQ0FBRCxDQWRyQjtBQUFB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QUFBLFlBRko7QUFBQSxrQkFESjtBQXFDSDs7R0F4TFE3RCxVO1VBRWdERyx1RCxFQWdCcENvQix1RDs7O0tBbEJadkIsVTtBQTBMTSxxRUFBQTZFLHFFQUFRLENBQUM3RSxVQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJFbnRpdHkuNzgxYWNiZDRhMmQyNjZiNTRiMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSBcInByaW1lcmVhY3QvZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCJwcmltZXJlYWN0L2NvbHVtblwiO1xyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gXCJwcmltZXJlYWN0L2ZpZWxkc2V0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiXHJcblxyXG5pbXBvcnQgeyBVc2VyRW50aXR5RGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvVXNlckVudGl0eURhdGFTZXJ2aWNlXCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xyXG5pbXBvcnQgeyBsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uLCBsb2FkVXNlckVudGl0eUxpc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyRW50aXR5XCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFVzZXJFbnRpdHkocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlckVudGl0eVBhZ2UsIHNldFVzZXJFbnRpdHlQYWdlXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlckVudGl0eUxpc3RSZWR1Y2VyLnVzZXJFbnRpdHlQYWdlKSk7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkTG9jYWxEYXRhLCBzZXRTZWxlY3RlZExvY2FsRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbaXRlbnNQZXJQYWdlLCBzZXRJdGVuc1BhZ2VdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHsgdmFsdWU6IDEwLCBsYWJlbDogMTAgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMCwgbGFiZWw6IDIwIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTAsIGxhYmVsOiA1MCB9XHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZShpdGVuc1BlclBhZ2VbMF0pO1xyXG4gICAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKFwibmFtZVwiKTtcclxuICAgIGNvbnN0IFtudW1iZXJQYWdlLCBzZXROdW1iZXJQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICB9LCBbcm93cywgbnVtYmVyUGFnZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpIHtcclxuICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX3BhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBdXggPSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogcmVzcG9uc2UuZGF0YS5lbXB0eSxcclxuICAgICAgICAgICAgICAgIGZpcnN0OiByZXNwb25zZS5kYXRhLmZpcnN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogcmVzcG9uc2UuZGF0YS5sYXN0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiByZXNwb25zZS5kYXRhLm51bWJlcixcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEubnVtYmVyT2ZFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHNpemU6IHJlc3BvbnNlLmRhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsRWxlbWVudHM6IHJlc3BvbnNlLmRhdGEudG90YWxFbGVtZW50cyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IHJlc3BvbnNlLmRhdGEudG90YWxQYWdlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbihyZXNwb25zZUF1eCkpO1xyXG4gICAgICAgICAgICBzZXRVc2VyRW50aXR5UGFnZShyZXNwb25zZUF1eCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yLnJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJTZXJ2acOnbyBpbmRpc3BvbsOtdmVsXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiRXJybyBubyBzaXN0ZW1hLCBjb250YXRlIG8gYWRtaW5pc3RyYWRvclwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm92byA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBlZGl0YXIgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBzZWxlY3RlZFVzZXIgPSByb3dEYXRhO1xyXG4gICAgLy8gICAgIHNlbGVjdGVkVXNlci5hY2Nlc3NQcm9maWxlcyA9IFtdO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVXNlcik7XHJcbiAgICAvLyAgICAgLy8gZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbihyb3dEYXRhKSk7XHJcbiAgICAvLyAgICAgLy8gc2V0U2VsZWN0ZWRMb2NhbERhdGEocm93RGF0YSlcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBfZGVsZXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJFbnRpdHlQYWdlLmNvbnRlbnQuaW5kZXhPZihyb3dEYXRhKTtcclxuICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX2RlbGV0ZShyb3dEYXRhLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwiZXJyb3JcIiwgc3VtbWFyeTogXCJFcnJvXCIsIGRldGFpbDogXCJVc3XDoXJpbyBcIiArIHJvd0RhdGEubm9tZSArIFwiIGV4Y2x1w61kbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgcGFnZShudW1iZXJQYWdlLCByb3dzLnZhbHVlLCBzb3J0QnkpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3dEYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZExvY2FsRGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gaWNvbj1cInBpIHBpLXBlbmNpbFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tc3VjY2VzcyBwLW1yLTJcIiBkaXNhYmxlZD17IXNlbGVjdGVkTG9jYWxEYXRhICYmIHJvd0RhdGEuaWRVc3VhcmlvICE9PSBzZWxlY3RlZExvY2FsRGF0YS5pZFVzdWFyaW99IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiBfZGVsZXRlKHJvd0RhdGEpfSBkaXNhYmxlZD17IXNlbGVjdGVkTG9jYWxEYXRhICYmIHJvd0RhdGEuaWRVc3VhcmlvICE9PSBzZWxlY3RlZExvY2FsRGF0YS5pZFVzdWFyaW99IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0TG9jYWxEYXRhKGUpIHtcclxuICAgICAgICBpZiAoZSAmJiBlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24oZS52YWx1ZSkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZExvY2FsRGF0YShlLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uKG51bGwpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRMb2NhbERhdGEobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJdGVtUGVyUGFnZShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVuc1BlclBhZ2UuaW5kZXhPZihpdGVtKVxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFJvd3MoaXRlbnNQZXJQYWdlW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51bWJlclBhZ2VTdW0obnVtYmVyUGFnZSkge1xyXG4gICAgICAgIHNldE51bWJlclBhZ2UobnVtYmVyUGFnZS0tKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYWdlTWludXMobnVtYmVyUGFnZSkge1xyXG4gICAgICAgIHNldE51bWJlclBhZ2UobnVtYmVyUGFnZSsrKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgXCJSb3dzUGVyUGFnZURyb3Bkb3duXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0xXCIgc3R5bGU9e3sgY29sb3I6IFwidmFyKC0tdGV4dC1jb2xvcilcIiwgdXNlclNlbGVjdDogXCJub25lXCIgfX0+SXRlbnMgcG9yIHDDoWdpbmE6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2l0ZW5zUGVyUGFnZX0gdmFsdWU9e3Jvd3N9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSXRlbVBlclBhZ2UoZSl9IGlzRGlzYWJsZWQ9eyF1c2VyRW50aXR5UGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkN1cnJlbnRQYWdlUmVwb3J0XCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiLCB3aWR0aDogXCIxMjBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLm51bWJlciArIDF9IC0ge3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLm51bWJlck9mRWxlbWVudHN9IGRlIHt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS50b3RhbEVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlByZXZQYWdlTGlua1wiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQW50ZXJpb3JcIiBvbkNsaWNrPXsoKSA9PiBudW1iZXJQYWdlTWludXMobnVtYmVyUGFnZSl9IGRpc2FibGVkPXshdXNlckVudGl0eVBhZ2UgfHwgdXNlckVudGl0eVBhZ2UuZmlyc3R9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIk5leHRQYWdlTGlua1wiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiUHLDs3hpbW9cIiBvbkNsaWNrPXsoKSA9PiBudW1iZXJQYWdlU3VtKG51bWJlclBhZ2UpfSBkaXNhYmxlZD17IXVzZXJFbnRpdHlQYWdlIHx8IHVzZXJFbnRpdHlQYWdlLmxhc3R9IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiTGlzdGEgZGUgVXN1w6FyaW9zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5L2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwibmV3LWJ1dHRvblwiIGxhYmVsPVwiTm92b1wiIG9uQ2xpY2s9eygpID0+IG5vdm8oe30pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCI0MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlVzdcOhcmlvcyBDYWRhc3RyYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkVXN1YXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3RlZExvY2FsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiBzZWxlY3RMb2NhbERhdGEoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yVGVtcGxhdGU9e3RlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0PXtudW1iZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3MudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yQ2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJTZWxlY2lvbmFkb1wiIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17eyB3aWR0aDogXCIzZW1cIiB9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibmFtZVwiIGhlYWRlcj1cIk5vbWVcIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZW1haWxcIiBoZWFkZXI9XCJFLW1haWxcIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiYWNjZXNzUHJvZmlsZXNUZXh0XCIgaGVhZGVyPVwiUGVyZmlzIGRlIEFjZXNzb1wiIHNvcnRhYmxlPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVXNlckVudGl0eSk7Il0sInNvdXJjZVJvb3QiOiIifQ==