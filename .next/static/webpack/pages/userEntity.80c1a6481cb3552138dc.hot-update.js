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


  var _delete = function _delete(idUserEntity) {
    _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_10__["UserEntityDataService"]._delete(idUserEntity).then(function (response) {
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
          disabled: !selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return _delete(rowData.idUserEntity);
        },
        disabled: !selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
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
          lineNumber: 140,
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
          lineNumber: 141,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
        lineNumber: 147,
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
        lineNumber: 154,
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
        lineNumber: 159,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
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
          lineNumber: 170,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTable"], {
        scrollHeight: "400px",
        scrollable: true,
        header: "Usu\xE1rios Cadastrados",
        value: userEntityPage && userEntityPage.content,
        dataKey: "idUserEntity",
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
          lineNumber: 187,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "name",
          header: "Nome",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "email",
          header: "E-mail",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "accessProfilesText",
          header: "Perfis de Acesso",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9pbmRleC5qc3giXSwibmFtZXMiOlsiVXNlckVudGl0eSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eUxpc3RSZWR1Y2VyIiwidXNlckVudGl0eVBhZ2UiLCJzZXRVc2VyRW50aXR5UGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIlVzZXJFbnRpdHlEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsImlkVXNlckVudGl0eSIsInJvd0RhdGEiLCJub21lIiwiYWN0aW9uQm9keVRlbXBsYXRlIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblJpZ2h0Iiwic2VsZWN0TG9jYWxEYXRhIiwiZSIsImhhbmRsZUl0ZW1QZXJQYWdlIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsIm51bWJlclBhZ2VTdW0iLCJudW1iZXJQYWdlTWludXMiLCJ0ZW1wbGF0ZSIsImNvbG9yIiwidXNlclNlbGVjdCIsIndpZHRoIiwidGV4dEFsaWduIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGtCQUVxQkMsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxxQkFBTixDQUE0QkMsY0FBdkM7QUFBQSxHQUFELENBQVosQ0FGN0I7QUFBQSxNQUVoQkEsY0FGZ0I7QUFBQSxNQUVBQyxpQkFGQTs7QUFBQSxtQkFJMkJMLHNEQUFRLENBQUMsSUFBRCxDQUpuQztBQUFBLE1BSWhCTSxpQkFKZ0I7QUFBQSxNQUlHQyxvQkFKSDs7QUFBQSxtQkFNY1Asc0RBQVEsQ0FBQyxDQUMxQztBQUFFUSxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FEMEMsRUFFMUM7QUFBRUQsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRjBDLEVBRzFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUgwQyxDQUFELENBTnRCO0FBQUEsTUFNaEJDLFlBTmdCO0FBQUEsTUFNRkMsWUFORTs7QUFBQSxtQkFZQ1gsc0RBQVEsQ0FBQ1UsWUFBWSxDQUFDLENBQUQsQ0FBYixDQVpUO0FBQUEsTUFZaEJFLElBWmdCO0FBQUEsTUFZVkMsT0FaVTs7QUFBQSxtQkFhS2Isc0RBQVEsQ0FBQyxNQUFELENBYmI7QUFBQSxNQWFoQmMsTUFiZ0I7QUFBQSxNQWFSQyxTQWJROztBQUFBLG1CQWNhZixzREFBUSxDQUFDLENBQUQsQ0FkckI7QUFBQSxN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TE0scUVBQUE0RSxxRUFBUSxDQUFDNUUsVUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRW50aXR5LjgwYzFhNjQ4MWNiMzU1MjEzOGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gXCJwcmltZXJlYWN0L2RhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwicHJpbWVyZWFjdC9jb2x1bW5cIjtcclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuaW1wb3J0IHsgbG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbiwgbG9hZFVzZXJFbnRpdHlMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckVudGl0eVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5KHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXJFbnRpdHlQYWdlLCBzZXRVc2VyRW50aXR5UGFnZV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlMaXN0UmVkdWNlci51c2VyRW50aXR5UGFnZSkpO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZExvY2FsRGF0YSwgc2V0U2VsZWN0ZWRMb2NhbERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2l0ZW5zUGVyUGFnZSwgc2V0SXRlbnNQYWdlXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7IHZhbHVlOiAxMCwgbGFiZWw6IDEwIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAsIGxhYmVsOiAyMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwLCBsYWJlbDogNTAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoaXRlbnNQZXJQYWdlWzBdKTtcclxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5hbWVcIik7XHJcbiAgICBjb25zdCBbbnVtYmVyUGFnZSwgc2V0TnVtYmVyUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGFnZShudW1iZXJQYWdlLCByb3dzLnZhbHVlLCBzb3J0QnkpO1xyXG4gICAgfSwgW3Jvd3MsIG51bWJlclBhZ2VdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2UocGFnZU5vLCBwYWdlU2l6ZSwgc29ydEJ5KSB7XHJcbiAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQXV4ID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgZW1wdHk6IHJlc3BvbnNlLmRhdGEuZW1wdHksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogcmVzcG9uc2UuZGF0YS5maXJzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IHJlc3BvbnNlLmRhdGEubGFzdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogcmVzcG9uc2UuZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiByZXNwb25zZS5kYXRhLm51bWJlck9mRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICBzaXplOiByZXNwb25zZS5kYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzOiByZXNwb25zZS5kYXRhLnRvdGFsRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiByZXNwb25zZS5kYXRhLnRvdGFsUGFnZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eUxpc3RBY3Rpb24ocmVzcG9uc2VBdXgpKTtcclxuICAgICAgICAgICAgc2V0VXNlckVudGl0eVBhZ2UocmVzcG9uc2VBdXgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiU2VydmnDp28gaW5kaXNwb27DrXZlbFwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIkVycm8gbm8gc2lzdGVtYSwgY29udGF0ZSBvIGFkbWluaXN0cmFkb3JcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdm8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbihudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgZWRpdGFyID0gKHJvd0RhdGEpID0+IHtcclxuICAgIC8vICAgICBsZXQgc2VsZWN0ZWRVc2VyID0gcm93RGF0YTtcclxuICAgIC8vICAgICBzZWxlY3RlZFVzZXIuYWNjZXNzUHJvZmlsZXMgPSBbXTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFVzZXIpO1xyXG4gICAgLy8gICAgIC8vIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24ocm93RGF0YSkpO1xyXG4gICAgLy8gICAgIC8vIHNldFNlbGVjdGVkTG9jYWxEYXRhKHJvd0RhdGEpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgX2RlbGV0ZSA9IChpZFVzZXJFbnRpdHkpID0+IHtcclxuICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX2RlbGV0ZShpZFVzZXJFbnRpdHkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJlcnJvclwiLCBzdW1tYXJ5OiBcIkVycm9cIiwgZGV0YWlsOiBcIlVzdcOhcmlvIFwiICsgcm93RGF0YS5ub21lICsgXCIgZXhjbHXDrWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvd0RhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkTG9jYWxEYXRhKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5L2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBpY29uPVwicGkgcGktcGVuY2lsXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi1zdWNjZXNzIHAtbXItMlwiIGRpc2FibGVkPXshc2VsZWN0ZWRMb2NhbERhdGEgfHwgcm93RGF0YS5pZFVzZXJFbnRpdHkgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkVXNlckVudGl0eX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IF9kZWxldGUocm93RGF0YS5pZFVzZXJFbnRpdHkpfSBkaXNhYmxlZD17IXNlbGVjdGVkTG9jYWxEYXRhIHx8IHJvd0RhdGEuaWRVc2VyRW50aXR5ICE9PSBzZWxlY3RlZExvY2FsRGF0YS5pZFVzZXJFbnRpdHl9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0TG9jYWxEYXRhKGUpIHtcclxuICAgICAgICBpZiAoZSAmJiBlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24oZS52YWx1ZSkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZExvY2FsRGF0YShlLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uKG51bGwpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRMb2NhbERhdGEobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJdGVtUGVyUGFnZShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVuc1BlclBhZ2UuaW5kZXhPZihpdGVtKVxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFJvd3MoaXRlbnNQZXJQYWdlW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51bWJlclBhZ2VTdW0obnVtYmVyUGFnZSkge1xyXG4gICAgICAgIHNldE51bWJlclBhZ2UobnVtYmVyUGFnZS0tKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYWdlTWludXMobnVtYmVyUGFnZSkge1xyXG4gICAgICAgIHNldE51bWJlclBhZ2UobnVtYmVyUGFnZSsrKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgXCJSb3dzUGVyUGFnZURyb3Bkb3duXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0xXCIgc3R5bGU9e3sgY29sb3I6IFwidmFyKC0tdGV4dC1jb2xvcilcIiwgdXNlclNlbGVjdDogXCJub25lXCIgfX0+SXRlbnMgcG9yIHDDoWdpbmE6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2l0ZW5zUGVyUGFnZX0gdmFsdWU9e3Jvd3N9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSXRlbVBlclBhZ2UoZSl9IGlzRGlzYWJsZWQ9eyF1c2VyRW50aXR5UGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkN1cnJlbnRQYWdlUmVwb3J0XCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCIsIHVzZXJTZWxlY3Q6IFwibm9uZVwiLCB3aWR0aDogXCIxMjBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLm51bWJlciArIDF9IC0ge3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLm51bWJlck9mRWxlbWVudHN9IGRlIHt1c2VyRW50aXR5UGFnZSAmJiB1c2VyRW50aXR5UGFnZS50b3RhbEVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlByZXZQYWdlTGlua1wiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQW50ZXJpb3JcIiBvbkNsaWNrPXsoKSA9PiBudW1iZXJQYWdlTWludXMobnVtYmVyUGFnZSl9IGRpc2FibGVkPXshdXNlckVudGl0eVBhZ2UgfHwgdXNlckVudGl0eVBhZ2UuZmlyc3R9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIk5leHRQYWdlTGlua1wiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiUHLDs3hpbW9cIiBvbkNsaWNrPXsoKSA9PiBudW1iZXJQYWdlU3VtKG51bWJlclBhZ2UpfSBkaXNhYmxlZD17IXVzZXJFbnRpdHlQYWdlIHx8IHVzZXJFbnRpdHlQYWdlLmxhc3R9IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiTGlzdGEgZGUgVXN1w6FyaW9zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5L2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwibmV3LWJ1dHRvblwiIGxhYmVsPVwiTm92b1wiIG9uQ2xpY2s9eygpID0+IG5vdm8oe30pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCI0MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlVzdcOhcmlvcyBDYWRhc3RyYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkVXNlckVudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3RlZExvY2FsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZSA9PiBzZWxlY3RMb2NhbERhdGEoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yVGVtcGxhdGU9e3RlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0PXtudW1iZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3MudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yQ2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJTZWxlY2lvbmFkb1wiIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17eyB3aWR0aDogXCIzZW1cIiB9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibmFtZVwiIGhlYWRlcj1cIk5vbWVcIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZW1haWxcIiBoZWFkZXI9XCJFLW1haWxcIiBzb3J0YWJsZT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiYWNjZXNzUHJvZmlsZXNUZXh0XCIgaGVhZGVyPVwiUGVyZmlzIGRlIEFjZXNzb1wiIHNvcnRhYmxlPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVXNlckVudGl0eSk7Il0sInNvdXJjZVJvb3QiOiIifQ==