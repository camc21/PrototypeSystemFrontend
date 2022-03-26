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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/userEntity/form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          style: {
            marginRight: "10px"
          },
          icon: "pi pi-pencil",
          className: "p-button-rounded p-button-success p-mr-2",
          disabled: rowData.idUsuario !== selectedLocalData.idUsuario
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData);
        },
        disabled: rowData.idUsuario !== selectedLocalData.idUsuario
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
          lineNumber: 139,
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
          lineNumber: 140,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 146,
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
        lineNumber: 153,
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
        lineNumber: 158,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
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
          lineNumber: 169,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
          lineNumber: 186,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "name",
          header: "Nome",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "email",
          header: "E-mail",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "accessProfilesText",
          header: "Perfis de Acesso",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9pbmRleC5qc3giXSwibmFtZXMiOlsiVXNlckVudGl0eSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eUxpc3RSZWR1Y2VyIiwidXNlckVudGl0eVBhZ2UiLCJzZXRVc2VyRW50aXR5UGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIlVzZXJFbnRpdHlEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsInJvd0RhdGEiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsIm5vbWUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsImlkVXN1YXJpbyIsInNlbGVjdExvY2FsRGF0YSIsImUiLCJoYW5kbGVJdGVtUGVyUGFnZSIsIml0ZW0iLCJudW1iZXJQYWdlU3VtIiwibnVtYmVyUGFnZU1pbnVzIiwidGVtcGxhdGUiLCJjb2xvciIsInVzZXJTZWxlY3QiLCJ3aWR0aCIsInRleHRBbGlnbiIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFcUJDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MscUJBQU4sQ0FBNEJDLGNBQXZDO0FBQUEsR0FBRCxDQUFaLENBRjdCO0FBQUEsTUFFaEJBLGNBRmdCO0FBQUEsTUFFQUMsaUJBRkE7O0FBQUEsbUJBSTJCTCxzREFBUSxDQUFDLElBQUQsQ0FKbkM7QUFBQSxNQUloQk0saUJBSmdCO0FBQUEsTUFJR0Msb0JBSkg7O0FBQUEsbUJBTWNQLHNEQUFRLENBQUMsQ0FDMUM7QUFBRVEsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRDBDLEVBRTFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUYwQyxFQUcxQztBQUFFRCxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FIMEMsQ0FBRCxDQU50QjtBQUFBLE1BTWhCQyxZQU5nQjtBQUFBLE1BTUZDLFlBTkU7O0FBQUEsbUJBWUNYLHNEQUFRLENBQUNVLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FaVDtBQUFBLE1BWWhCRSxJQVpnQjtBQUFBLE1BWVZDLE9BWlU7O0FBQUEsbUJBYUtiLHNEQUFRLENBQUMsTUFBRCxDQWJiO0FBQUEsTUFhaEJjLE1BYmdCO0FBQUEsTUFhUkMsU0FiUTs7QUFBQSxtQkFjYWYsc0RBQVEsQ0FBQyxDQUFELENBZHJCO0FBQUEsTUFjaEJnQixVQWRnQjtB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d2VicGFjay9wYWdlcy91c2VyRW50aXR5LmNmZjBjMmMzMzkyYTM1Nzk0MzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gXCJwcmltZXJlYWN0L2RhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwicHJpbWVyZWFjdC9jb2x1bW5cIjtcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuaW1wb3J0IHsgbG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbiwgbG9hZFVzZXJFbnRpdHlMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckVudGl0eVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5KHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXJFbnRpdHlQYWdlLCBzZXRVc2VyRW50aXR5UGFnZV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlMaXN0UmVkdWNlci51c2VyRW50aXR5UGFnZSkpO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZExvY2FsRGF0YSwgc2V0U2VsZWN0ZWRMb2NhbERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2l0ZW5zUGVyUGFnZSwgc2V0SXRlbnNQYWdlXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7IHZhbHVlOiAxMCwgbGFiZWw6IDEwIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAsIGxhYmVsOiAyMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwLCBsYWJlbDogNTAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoaXRlbnNQZXJQYWdlWzBdKTtcclxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5hbWVcIik7XHJcbiAgICBjb25zdCBbbnVtYmVyUGFnZSwgc2V0TnVtYmVyUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGFnZShudW1iZXJQYWdlLCByb3dzLnZhbHVlLCBzb3J0QnkpO1xyXG4gICAgfSwgW3Jvd3MsIG51bWJlclBhZ2VdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KSB7XHJcbiAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQXV4ID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgZW1wdHk6IHJlc3BvbnNlLmRhdGEuZW1wdHksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogcmVzcG9uc2UuZGF0YS5maXJzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IHJlc3BvbnNlLmRhdGEubGFzdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogcmVzcG9uc2UuZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiByZXNwb25zZS5kYXRhLm51bWJlck9mRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICBzaXplOiByZXNwb25zZS5kYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzOiByZXNwb25zZS5kYXRhLnRvdGFsRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiByZXNwb25zZS5kYXRhLnRvdGFsUGFnZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eUxpc3RBY3Rpb24ocmVzcG9uc2VBdXgpKTtcclxuICAgICAgICAgICAgc2V0VXNlckVudGl0eVBhZ2UocmVzcG9uc2VBdXgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiU2VydmnDp28gaW5kaXNwb27DrXZlbFwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIkVycm8gbm8gc2lzdGVtYSwgY29udGF0ZSBvIGFkbWluaXN0cmFkb3JcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgZWRpdGFyID0gKHJvd0RhdGEpID0+IHtcclxuICAgIC8vICAgICBsZXQgc2VsZWN0ZWRVc2VyID0gcm93RGF0YTtcclxuICAgIC8vICAgICBzZWxlY3RlZFVzZXIuYWNjZXNzUHJvZmlsZXMgPSBbXTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFVzZXIpO1xyXG4gICAgLy8gICAgIC8vIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24ocm93RGF0YSkpO1xyXG4gICAgLy8gICAgIC8vIHNldFNlbGVjdGVkTG9jYWxEYXRhKHJvd0RhdGEpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB1c2VyRW50aXR5UGFnZS5jb250ZW50LmluZGV4T2Yocm93RGF0YSk7XHJcbiAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9kZWxldGUocm93RGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcImVycm9yXCIsIHN1bW1hcnk6IFwiRXJyb1wiLCBkZXRhaWw6IFwiVXN1w6FyaW8gXCIgKyByb3dEYXRhLm5vbWUgKyBcIiBleGNsdcOtZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgIHBhZ2UobnVtYmVyUGFnZSwgcm93cy52YWx1ZSwgc29ydEJ5KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkJvZHlUZW1wbGF0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gaWNvbj1cInBpIHBpLXBlbmNpbFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tc3VjY2VzcyBwLW1yLTJcIiBkaXNhYmxlZD17cm93RGF0YS5pZFVzdWFyaW8gIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkVXN1YXJpb30gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IF9kZWxldGUocm93RGF0YSl9IGRpc2FibGVkPXtyb3dEYXRhLmlkVXN1YXJpbyAhPT0gc2VsZWN0ZWRMb2NhbERhdGEuaWRVc3VhcmlvfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdExvY2FsRGF0YShlKSB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uKGUudmFsdWUpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRMb2NhbERhdGEoZS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXRlbVBlclBhZ2UoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbnNQZXJQYWdlLmluZGV4T2YoaXRlbSlcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRSb3dzKGl0ZW5zUGVyUGFnZVtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYWdlU3VtKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UtLSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UrKyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgIFwiUm93c1BlclBhZ2VEcm9wZG93blwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMVwiIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19Pkl0ZW5zIHBvciBww6FnaW5hOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtpdGVuc1BlclBhZ2V9IHZhbHVlPXtyb3dzfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUl0ZW1QZXJQYWdlKGUpfSBpc0Rpc2FibGVkPXshdXNlckVudGl0eVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJDdXJyZW50UGFnZVJlcG9ydFwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiwgd2lkdGg6IFwiMTIwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS5udW1iZXIgKyAxfSAtIHt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS5udW1iZXJPZkVsZW1lbnRzfSBkZSB7dXNlckVudGl0eVBhZ2UgJiYgdXNlckVudGl0eVBhZ2UudG90YWxFbGVtZW50c31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJQcmV2UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkFudGVyaW9yXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpfSBkaXNhYmxlZD17IXVzZXJFbnRpdHlQYWdlIHx8IHVzZXJFbnRpdHlQYWdlLmZpcnN0fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJOZXh0UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlByw7N4aW1vXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyF1c2VyRW50aXR5UGFnZSB8fCB1c2VyRW50aXR5UGFnZS5sYXN0fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkxpc3RhIGRlIFVzdcOhcmlvc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cIm5ldy1idXR0b25cIiBsYWJlbD1cIk5vdm9cIiBvbkNsaWNrPXsoKSA9PiBub3ZvKHt9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiNDAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJVc3XDoXJpb3MgQ2FkYXN0cmFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0ZWRMb2NhbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2UgPT4gc2VsZWN0TG9jYWxEYXRhKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclRlbXBsYXRlPXt0ZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17bnVtYmVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvckNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5hbWVcIiBoZWFkZXI9XCJOb21lXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImVtYWlsXCIgaGVhZGVyPVwiRS1tYWlsXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImFjY2Vzc1Byb2ZpbGVzVGV4dFwiIGhlYWRlcj1cIlBlcmZpcyBkZSBBY2Vzc29cIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFVzZXJFbnRpdHkpOyJdLCJzb3VyY2VSb290IjoiIn0=