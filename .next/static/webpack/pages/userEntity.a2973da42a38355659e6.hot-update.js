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
          disabled: !selectedLocalData || rowData.idUsuario !== selectedLocalData.idUsuario
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
        disabled: !selectedLocalData || rowData.idUsuario !== selectedLocalData.idUsuario
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9pbmRleC5qc3giXSwibmFtZXMiOlsiVXNlckVudGl0eSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eUxpc3RSZWR1Y2VyIiwidXNlckVudGl0eVBhZ2UiLCJzZXRVc2VyRW50aXR5UGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIlVzZXJFbnRpdHlEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsInJvd0RhdGEiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsIm5vbWUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsImlkVXN1YXJpbyIsInNlbGVjdExvY2FsRGF0YSIsImUiLCJoYW5kbGVJdGVtUGVyUGFnZSIsIml0ZW0iLCJudW1iZXJQYWdlU3VtIiwibnVtYmVyUGFnZU1pbnVzIiwidGVtcGxhdGUiLCJjb2xvciIsInVzZXJTZWxlY3QiLCJ3aWR0aCIsInRleHRBbGlnbiIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFcUJDLHNEQUFRLENBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MscUJBQU4sQ0FBNEJDLGNBQXZDO0FBQUEsR0FBRCxDQUFaLENBRjdCO0FBQUEsTUFFaEJBLGNBRmdCO0FBQUEsTUFFQUMsaUJBRkE7O0FBQUEsbUJBSTJCTCxzREFBUSxDQUFDLElBQUQsQ0FKbkM7QUFBQSxNQUloQk0saUJBSmdCO0FBQUEsTUFJR0Msb0JBSkg7O0FBQUEsbUJBTWNQLHNEQUFRLENBQUMsQ0FDMUM7QUFBRVEsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRDBDLEVBRTFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUYwQyxFQUcxQztBQUFFRCxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FIMEMsQ0FBRCxDQU50QjtBQUFBLE1BTWhCQyxZQU5nQjtBQUFBLE1BTUZDLFlBTkU7O0FBQUEsbUJBWUNYLHNEQUFRLENBQUNVLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FaVDtBQUFBLE1BWWhCRSxJQVpnQjtBQUFBLE1BWVZDLE9BWlU7O0FBQUEsbUJBYUtiLHNEQUFRLENBQUMsTUFBRCxDQWJiO0FBQUEsTUFhaEJjLE1BYmdCO0FBQUEsTUFhUkMsU0FiUTs7QUFBQSxtQkFjYWYsc0RBQVEsQ0FBQyxDQUFELENBZHJCO0FBQUEsTUFjaEJnQixVQWRnQjtB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cUVBQVEsQ0FBQzNFLFVBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlckVudGl0eS5hMjk3M2RhNDJhMzgzNTU2NTllNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJwcmltZXJlYWN0L2J1dHRvblwiO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwicHJpbWVyZWFjdC9kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcInByaW1lcmVhY3QvY29sdW1uXCI7XHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSBcInByaW1lcmVhY3QvZmllbGRzZXRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCJcclxuXHJcbmltcG9ydCB7IFVzZXJFbnRpdHlEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Vc2VyRW50aXR5RGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcbmltcG9ydCB7IGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24sIGxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJFbnRpdHlcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVXNlckVudGl0eShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyRW50aXR5UGFnZSwgc2V0VXNlckVudGl0eVBhZ2VdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyRW50aXR5TGlzdFJlZHVjZXIudXNlckVudGl0eVBhZ2UpKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMb2NhbERhdGEsIHNldFNlbGVjdGVkTG9jYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtpdGVuc1BlclBhZ2UsIHNldEl0ZW5zUGFnZV0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgeyB2YWx1ZTogMTAsIGxhYmVsOiAxMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIwLCBsYWJlbDogMjAgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MCwgbGFiZWw6IDUwIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKGl0ZW5zUGVyUGFnZVswXSk7XHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xyXG4gICAgY29uc3QgW251bWJlclBhZ2UsIHNldE51bWJlclBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2UobnVtYmVyUGFnZSwgcm93cy52YWx1ZSwgc29ydEJ5KTtcclxuICAgIH0sIFtyb3dzLCBudW1iZXJQYWdlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBwYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkge1xyXG4gICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUF1eCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgIGVtcHR5OiByZXNwb25zZS5kYXRhLmVtcHR5LFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3QsXHJcbiAgICAgICAgICAgICAgICBsYXN0OiByZXNwb25zZS5kYXRhLmxhc3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHJlc3BvbnNlLmRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50czogcmVzcG9uc2UuZGF0YS5udW1iZXJPZkVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcmVzcG9uc2UuZGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50czogcmVzcG9uc2UuZGF0YS50b3RhbEVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlczogcmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlMaXN0QWN0aW9uKHJlc3BvbnNlQXV4KSk7XHJcbiAgICAgICAgICAgIHNldFVzZXJFbnRpdHlQYWdlKHJlc3BvbnNlQXV4KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlNlcnZpw6dvIGluZGlzcG9uw612ZWxcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJFcnJvIG5vIHNpc3RlbWEsIGNvbnRhdGUgbyBhZG1pbmlzdHJhZG9yXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3ZvID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24obnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGVkaXRhciA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IHNlbGVjdGVkVXNlciA9IHJvd0RhdGE7XHJcbiAgICAvLyAgICAgc2VsZWN0ZWRVc2VyLmFjY2Vzc1Byb2ZpbGVzID0gW107XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRVc2VyKTtcclxuICAgIC8vICAgICAvLyBkaXNwYXRjaChsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uKHJvd0RhdGEpKTtcclxuICAgIC8vICAgICAvLyBzZXRTZWxlY3RlZExvY2FsRGF0YShyb3dEYXRhKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IF9kZWxldGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdXNlckVudGl0eVBhZ2UuY29udGVudC5pbmRleE9mKHJvd0RhdGEpO1xyXG4gICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fZGVsZXRlKHJvd0RhdGEuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJlcnJvclwiLCBzdW1tYXJ5OiBcIkVycm9cIiwgZGV0YWlsOiBcIlVzdcOhcmlvIFwiICsgcm93RGF0YS5ub21lICsgXCIgZXhjbHXDrWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJFbnRpdHkvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgZGlzYWJsZWQ9eyFzZWxlY3RlZExvY2FsRGF0YSB8fCByb3dEYXRhLmlkVXN1YXJpbyAhPT0gc2VsZWN0ZWRMb2NhbERhdGEuaWRVc3VhcmlvfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gX2RlbGV0ZShyb3dEYXRhKX0gZGlzYWJsZWQ9eyFzZWxlY3RlZExvY2FsRGF0YSB8fCByb3dEYXRhLmlkVXN1YXJpbyAhPT0gc2VsZWN0ZWRMb2NhbERhdGEuaWRVc3VhcmlvfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdExvY2FsRGF0YShlKSB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uKGUudmFsdWUpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRMb2NhbERhdGEoZS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXRlbVBlclBhZ2UoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbnNQZXJQYWdlLmluZGV4T2YoaXRlbSlcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRSb3dzKGl0ZW5zUGVyUGFnZVtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYWdlU3VtKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UtLSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpIHtcclxuICAgICAgICBzZXROdW1iZXJQYWdlKG51bWJlclBhZ2UrKyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgIFwiUm93c1BlclBhZ2VEcm9wZG93blwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMVwiIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19Pkl0ZW5zIHBvciBww6FnaW5hOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtpdGVuc1BlclBhZ2V9IHZhbHVlPXtyb3dzfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUl0ZW1QZXJQYWdlKGUpfSBpc0Rpc2FibGVkPXshdXNlckVudGl0eVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJDdXJyZW50UGFnZVJlcG9ydFwiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiwgd2lkdGg6IFwiMTIwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS5udW1iZXIgKyAxfSAtIHt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS5udW1iZXJPZkVsZW1lbnRzfSBkZSB7dXNlckVudGl0eVBhZ2UgJiYgdXNlckVudGl0eVBhZ2UudG90YWxFbGVtZW50c31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJQcmV2UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkFudGVyaW9yXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZU1pbnVzKG51bWJlclBhZ2UpfSBkaXNhYmxlZD17IXVzZXJFbnRpdHlQYWdlIHx8IHVzZXJFbnRpdHlQYWdlLmZpcnN0fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJOZXh0UGFnZUxpbmtcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlByw7N4aW1vXCIgb25DbGljaz17KCkgPT4gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyF1c2VyRW50aXR5UGFnZSB8fCB1c2VyRW50aXR5UGFnZS5sYXN0fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IGxlZ2VuZD1cIkxpc3RhIGRlIFVzdcOhcmlvc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cIm5ldy1idXR0b25cIiBsYWJlbD1cIk5vdm9cIiBvbkNsaWNrPXsoKSA9PiBub3ZvKHt9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiNDAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJVc3XDoXJpb3MgQ2FkYXN0cmFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0ZWRMb2NhbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2UgPT4gc2VsZWN0TG9jYWxEYXRhKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclRlbXBsYXRlPXt0ZW1wbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17bnVtYmVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvckNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5hbWVcIiBoZWFkZXI9XCJOb21lXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImVtYWlsXCIgaGVhZGVyPVwiRS1tYWlsXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImFjY2Vzc1Byb2ZpbGVzVGV4dFwiIGhlYWRlcj1cIlBlcmZpcyBkZSBBY2Vzc29cIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFVzZXJFbnRpdHkpOyJdLCJzb3VyY2VSb290IjoiIn0=