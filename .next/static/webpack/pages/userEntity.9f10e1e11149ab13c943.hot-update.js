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
  };

  var _delete = function _delete(idUserEntity) {
    _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_10__["UserEntityDataService"]._delete(idUserEntity).then(function (response) {
      toast.current.show({
        severity: "success",
        summary: "Sucesso",
        detail: "Registro excluído com sucesso!",
        life: 3000
      });
      setTimeout(function () {
        console.log("EXECUTADO DELETE");
      }, 3000);
      page(numberPage, rows.value, sortBy);
    })["catch"](function (error) {
      console.log(error);
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
          disabled: !selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 97,
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
          lineNumber: 133,
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
          lineNumber: 134,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
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
        lineNumber: 140,
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
        lineNumber: 147,
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
        lineNumber: 152,
        columnNumber: 17
      }, _this);
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
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
          lineNumber: 163,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
          lineNumber: 180,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "name",
          header: "Nome",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "email",
          header: "E-mail",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          field: "accessProfilesText",
          header: "Perfis de Acesso",
          sortable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_7__["Column"], {
          body: actionBodyTemplate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          id: "back-button",
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9pbmRleC5qc3giXSwibmFtZXMiOlsiVXNlckVudGl0eSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eUxpc3RSZWR1Y2VyIiwidXNlckVudGl0eVBhZ2UiLCJzZXRVc2VyRW50aXR5UGFnZSIsInNlbGVjdGVkTG9jYWxEYXRhIiwic2V0U2VsZWN0ZWRMb2NhbERhdGEiLCJ2YWx1ZSIsImxhYmVsIiwiaXRlbnNQZXJQYWdlIiwic2V0SXRlbnNQYWdlIiwicm93cyIsInNldFJvd3MiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJudW1iZXJQYWdlIiwic2V0TnVtYmVyUGFnZSIsInRvYXN0IiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhZ2UiLCJwYWdlTm8iLCJwYWdlU2l6ZSIsIlVzZXJFbnRpdHlEYXRhU2VydmljZSIsIl9wYWdlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VBdXgiLCJjb250ZW50IiwiZGF0YSIsImVtcHR5IiwiZmlyc3QiLCJsYXN0IiwibnVtYmVyIiwibnVtYmVyT2ZFbGVtZW50cyIsInNpemUiLCJ0b3RhbEVsZW1lbnRzIiwidG90YWxQYWdlcyIsImxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsIm5vdm8iLCJsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIiwiX2RlbGV0ZSIsImlkVXNlckVudGl0eSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uQm9keVRlbXBsYXRlIiwicm93RGF0YSIsIm1hcmdpblJpZ2h0Iiwic2VsZWN0TG9jYWxEYXRhIiwiZSIsImhhbmRsZUl0ZW1QZXJQYWdlIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsIm51bWJlclBhZ2VTdW0iLCJudW1iZXJQYWdlTWludXMiLCJ0ZW1wbGF0ZSIsImNvbG9yIiwidXNlclNlbGVjdCIsIndpZHRoIiwidGV4dEFsaWduIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGtCQUVxQkMsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxxQkFBTixDQUE0QkMsY0FBdkM7QUFBQSxHQUFELENBQVosQ0FGN0I7QUFBQSxNQUVoQkEsY0FGZ0I7QUFBQSxNQUVBQyxpQkFGQTs7QUFBQSxtQkFJMkJMLHNEQUFRLENBQUMsSUFBRCxDQUpuQztBQUFBLE1BSWhCTSxpQkFKZ0I7QUFBQSxNQUlHQyxvQkFKSDs7QUFBQSxtQkFNY1Asc0RBQVEsQ0FBQyxDQUMxQztBQUFFUSxTQUFLLEVBQUUsRUFBVDtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FEMEMsRUFFMUM7QUFBRUQsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRjBDLEVBRzFDO0FBQUVELFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUgwQyxDQUFELENBTnRCO0FBQUEsTUFNaEJDLFlBTmdCO0FBQUEsTUFNRkMsWUFORTs7QUFBQSxtQkFZQ1gsc0RBQVEsQ0FBQ1UsWUFBWSxDQUFDLENBQUQsQ0FBYixDQVpUO0FBQUEsTUFZaEJFLElBWmdCO0FBQUEsTUFZVkMsT0FaVTs7QUFBQSxtQkFhS2Isc0RBQVEsQ0FBQyxNQUFELENBYmI7QUFBQSxNQWFoQmMsTUFiZ0I7QUFBQSxNQWFSQyxTQWJROztBQUFBLG1CQWNhZixzREFBUSxDQUFDLENBQUQsQ0FkckI7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QUU7QUFBVDtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZUkscUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUMsTUFBZDtBQUFxQixnQkFBTSxFQUFDLE1BQTVCO0FBQW1DLGtCQUFRO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkosZUFnQkkscUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUMsT0FBZDtBQUFzQixnQkFBTSxFQUFDLFFBQTdCO0FBQXNDLGtCQUFRO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKLGVBaUJJLHFFQUFDLHdEQUFEO0FBQVEsZUFBSyxFQUFDLG9CQUFkO0FBQW1DLGdCQUFNLEVBQUMsa0JBQTFDO0FBQTZELGtCQUFRO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKLGVBa0JJLHFFQUFDLHdEQUFEO0FBQVEsY0FBSSxFQUFFZDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBMkJJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBcUNIOztHQWhMUTVELFU7VUFFZ0RHLHVELEVBZ0JwQ29CLHVEOzs7S0FsQlp2QixVO0FBa0xNLHFFQUFBNEUscUVBQVEsQ0FBQzVFLFVBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlckVudGl0eS45ZjEwZTFlMTExNDlhYjEzYzk0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJwcmltZXJlYWN0L2J1dHRvblwiO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwicHJpbWVyZWFjdC9kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcInByaW1lcmVhY3QvY29sdW1uXCI7XHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSBcInByaW1lcmVhY3QvZmllbGRzZXRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCJcclxuXHJcbmltcG9ydCB7IFVzZXJFbnRpdHlEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Vc2VyRW50aXR5RGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcbmltcG9ydCB7IGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24sIGxvYWRVc2VyRW50aXR5TGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJFbnRpdHlcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVXNlckVudGl0eShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyRW50aXR5UGFnZSwgc2V0VXNlckVudGl0eVBhZ2VdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyRW50aXR5TGlzdFJlZHVjZXIudXNlckVudGl0eVBhZ2UpKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMb2NhbERhdGEsIHNldFNlbGVjdGVkTG9jYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtpdGVuc1BlclBhZ2UsIHNldEl0ZW5zUGFnZV0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgeyB2YWx1ZTogMTAsIGxhYmVsOiAxMCB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIwLCBsYWJlbDogMjAgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MCwgbGFiZWw6IDUwIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKGl0ZW5zUGVyUGFnZVswXSk7XHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xyXG4gICAgY29uc3QgW251bWJlclBhZ2UsIHNldE51bWJlclBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2UobnVtYmVyUGFnZSwgcm93cy52YWx1ZSwgc29ydEJ5KTtcclxuICAgIH0sIFtyb3dzLCBudW1iZXJQYWdlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBwYWdlKHBhZ2VObywgcGFnZVNpemUsIHNvcnRCeSkge1xyXG4gICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcGFnZShwYWdlTm8sIHBhZ2VTaXplLCBzb3J0QnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUF1eCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgIGVtcHR5OiByZXNwb25zZS5kYXRhLmVtcHR5LFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3QsXHJcbiAgICAgICAgICAgICAgICBsYXN0OiByZXNwb25zZS5kYXRhLmxhc3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHJlc3BvbnNlLmRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50czogcmVzcG9uc2UuZGF0YS5udW1iZXJPZkVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcmVzcG9uc2UuZGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50czogcmVzcG9uc2UuZGF0YS50b3RhbEVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlczogcmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlMaXN0QWN0aW9uKHJlc3BvbnNlQXV4KSk7XHJcbiAgICAgICAgICAgIHNldFVzZXJFbnRpdHlQYWdlKHJlc3BvbnNlQXV4KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlNlcnZpw6dvIGluZGlzcG9uw612ZWxcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJFcnJvIG5vIHNpc3RlbWEsIGNvbnRhdGUgbyBhZG1pbmlzdHJhZG9yXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3ZvID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24obnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9kZWxldGUgPSAoaWRVc2VyRW50aXR5KSA9PiB7XHJcbiAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9kZWxldGUoaWRVc2VyRW50aXR5KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGV4Y2x1w61kbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBERUxFVEVcIik7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICBwYWdlKG51bWJlclBhZ2UsIHJvd3MudmFsdWUsIHNvcnRCeSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJFbnRpdHkvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IGljb249XCJwaSBwaS1wZW5jaWxcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXN1Y2Nlc3MgcC1tci0yXCIgZGlzYWJsZWQ9eyFzZWxlY3RlZExvY2FsRGF0YSB8fCByb3dEYXRhLmlkVXNlckVudGl0eSAhPT0gc2VsZWN0ZWRMb2NhbERhdGEuaWRVc2VyRW50aXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gX2RlbGV0ZShyb3dEYXRhLmlkVXNlckVudGl0eSl9IGRpc2FibGVkPXshc2VsZWN0ZWRMb2NhbERhdGEgfHwgcm93RGF0YS5pZFVzZXJFbnRpdHkgIT09IHNlbGVjdGVkTG9jYWxEYXRhLmlkVXNlckVudGl0eX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RMb2NhbERhdGEoZSkge1xyXG4gICAgICAgIGlmIChlICYmIGUudmFsdWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbihlLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTG9jYWxEYXRhKGUudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRW50aXR5U2VsZWN0ZWRBY3Rpb24obnVsbCkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZExvY2FsRGF0YShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUl0ZW1QZXJQYWdlKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW5zUGVyUGFnZS5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0Um93cyhpdGVuc1BlclBhZ2VbaW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbnVtYmVyUGFnZVN1bShudW1iZXJQYWdlKSB7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudW1iZXJQYWdlLS0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51bWJlclBhZ2VNaW51cyhudW1iZXJQYWdlKSB7XHJcbiAgICAgICAgc2V0TnVtYmVyUGFnZShudW1iZXJQYWdlKyspO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICBcIlJvd3NQZXJQYWdlRHJvcGRvd25cIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTFcIiBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS10ZXh0LWNvbG9yKVwiLCB1c2VyU2VsZWN0OiBcIm5vbmVcIiB9fT5JdGVucyBwb3IgcMOhZ2luYTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17aXRlbnNQZXJQYWdlfSB2YWx1ZT17cm93c30gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJdGVtUGVyUGFnZShlKX0gaXNEaXNhYmxlZD17IXVzZXJFbnRpdHlQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiQ3VycmVudFBhZ2VSZXBvcnRcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwidmFyKC0tdGV4dC1jb2xvcilcIiwgdXNlclNlbGVjdDogXCJub25lXCIsIHdpZHRoOiBcIjEyMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckVudGl0eVBhZ2UgJiYgdXNlckVudGl0eVBhZ2UubnVtYmVyICsgMX0gLSB7dXNlckVudGl0eVBhZ2UgJiYgdXNlckVudGl0eVBhZ2UubnVtYmVyT2ZFbGVtZW50c30gZGUge3VzZXJFbnRpdHlQYWdlICYmIHVzZXJFbnRpdHlQYWdlLnRvdGFsRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiUHJldlBhZ2VMaW5rXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJBbnRlcmlvclwiIG9uQ2xpY2s9eygpID0+IG51bWJlclBhZ2VNaW51cyhudW1iZXJQYWdlKX0gZGlzYWJsZWQ9eyF1c2VyRW50aXR5UGFnZSB8fCB1c2VyRW50aXR5UGFnZS5maXJzdH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiTmV4dFBhZ2VMaW5rXCI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJQcsOzeGltb1wiIG9uQ2xpY2s9eygpID0+IG51bWJlclBhZ2VTdW0obnVtYmVyUGFnZSl9IGRpc2FibGVkPXshdXNlckVudGl0eVBhZ2UgfHwgdXNlckVudGl0eVBhZ2UubGFzdH0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBsZWdlbmQ9XCJMaXN0YSBkZSBVc3XDoXJpb3NcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJFbnRpdHkvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJuZXctYnV0dG9uXCIgbGFiZWw9XCJOb3ZvXCIgb25DbGljaz17KCkgPT4gbm92byh7fSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjQwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiVXN1w6FyaW9zIENhZGFzdHJhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckVudGl0eVBhZ2UgJiYgdXNlckVudGl0eVBhZ2UuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiaWRVc2VyRW50aXR5XCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGVkTG9jYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtlID0+IHNlbGVjdExvY2FsRGF0YShlKX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JUZW1wbGF0ZT17dGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e251bWJlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cm93cy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JDbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGhlYWRlcj1cIlNlbGVjaW9uYWRvXCIgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7IHdpZHRoOiBcIjNlbVwiIH19PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJuYW1lXCIgaGVhZGVyPVwiTm9tZVwiIHNvcnRhYmxlPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJlbWFpbFwiIGhlYWRlcj1cIkUtbWFpbFwiIHNvcnRhYmxlPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJhY2Nlc3NQcm9maWxlc1RleHRcIiBoZWFkZXI9XCJQZXJmaXMgZGUgQWNlc3NvXCIgc29ydGFibGU+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiYmFjay1idXR0b25cIiBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChVc2VyRW50aXR5KTsiXSwic291cmNlUm9vdCI6IiJ9