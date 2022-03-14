webpackHotUpdate_N_E("pages/userEntity/form",{

/***/ "./pages/userEntity/form.jsx":
/*!***********************************!*\
  !*** ./pages/userEntity/form.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox/checkbox.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/UserEntityDataService */ "./services/UserEntityDataService.jsx");
/* harmony import */ var _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/AccessProfileDataService */ "./services/AccessProfileDataService.jsx");
/* harmony import */ var _store_actions_userEntity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/actions/userEntity */ "./store/actions/userEntity/index.jsx");




var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\userEntity\\form.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















function UserEntityForm(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.userEntitySelectedReducer.userEntitySelected;
  })),
      userEntitySelected = _useState[0],
      setUserEntitySelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      comboBoxAccessProfiles = _useState2[0],
      setComboBoxAccessProfiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedComboBoxAccessProfile = _useState3[0],
      setSelectedComboBoxAccessProfile = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedAccessProfilesList = _useState4[0],
      setSelectedAccessProfileList = _useState4[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_18__["AccessProfileDataService"]._comboBoxAccessProfiles().then(function (response) {
      setComboBoxAccessProfiles(response.data);
      setSelectedComboBoxAccessProfile(response.data[0]);
    });
  }, []);

  function _save() {
    if (!userEntitySelected.id) {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_17__["UserEntityDataService"]._post(userEntitySelected).then(function (response) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro criado com sucesso!",
          life: 3000
        });
        setTimeout(function () {
          console.log("EXECUTADO POST");
          router.push("/userEntity");
        }, 3000);
      });
    } else {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_17__["UserEntityDataService"]._put(userEntitySelected).then(function (response) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro alterado com sucesso!",
          life: 3000
        });
        setTimeout(function () {
          console.log("EXECUTADO PUT");
          router.push("/userEntity");
        }, 3000);
      });
    }
  }

  function onChangeName(e) {
    var userEntityAux = _objectSpread({}, userEntitySelected);

    userEntityAux.name = e.target.value;
    setUserEntitySelected(userEntityAux);
  }

  function onChangeEmail(e) {
    var userEntityAux = _objectSpread({}, userEntitySelected);

    userEntityAux.email = e.target.value;
    setUserEntitySelected(userEntityAux);
  }

  function handleAccessProfileComboBox(value) {
    var index = comboBoxAccessProfiles.map(function (item) {
      return item.value;
    }).indexOf(value);

    if (index >= 0) {
      setSelectedComboBoxAccessProfile(comboBoxAccessProfiles[index]);
    }
  }

  var removeAccessProfile = function removeAccessProfile(rowData) {
    var selectedAccessProfilesListAux = selectedAccessProfilesList.filter(function (item) {
      return item.id !== rowData.id;
    });
    setSelectedAccessProfileList(selectedAccessProfilesListAux);
    var comboBoxAccessProfilesAux = comboBoxAccessProfiles;
    comboBoxAccessProfilesAux.push({
      value: rowData.id,
      label: rowData.name
    });
    setComboBoxAccessProfiles(comboBoxAccessProfilesAux);
    setSelectedComboBoxAccessProfile(comboBoxAccessProfilesAux[0]);
  };

  var addAccessProfile = function addAccessProfile() {
    var selectedAccessProfilesListAux = selectedAccessProfilesList;
    selectedAccessProfilesListAux.push({
      id: selectedComboBoxAccessProfile.value,
      name: selectedComboBoxAccessProfile.label
    });
    var comboBoxAccessProfileAux = comboBoxAccessProfiles.filter(function (item) {
      return item.label !== selectedComboBoxAccessProfile.label;
    }); //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox

    setComboBoxAccessProfiles(comboBoxAccessProfileAux); //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades

    setSelectedComboBoxAccessProfile(comboBoxAccessProfileAux[0]); //atualiza a tabela com os dados da funcionalidade e as permissões da mesma

    setSelectedAccessProfileList(selectedAccessProfilesListAux);
  };

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return removeFunctionality(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__["Fieldset"], {
      style: {
        marginTop: "15px"
      },
      legend: "Cadastro de Usu\xE1rios",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Nome: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
          id: "name",
          value: userEntitySelected && userEntitySelected.name,
          onChange: function onChange(e) {
            return onChangeName(e);
          },
          className: "inputfield w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "E-mail:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
          id: "email",
          value: userEntitySelected && userEntitySelected.email,
          onChange: function onChange(e) {
            return onChangeEmail(e);
          },
          className: "inputfield w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field col-12 md:col-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "accessProfiles",
          children: "Perfis de Acesso:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
          emptyMessage: "Nenhum Perfil de Acesso Dispon\xEDvel",
          className: "inputfield",
          optionValue: "value",
          optionLabel: "label",
          options: comboBoxAccessProfiles,
          value: selectedComboBoxAccessProfile && selectedComboBoxAccessProfile.value,
          onChange: function onChange(e) {
            return handleAccessProfileComboBox(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field flex align-items-center justify-content-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "back-button",
          label: "Adicionar",
          onClick: addAccessProfile,
          disabled: comboBoxAccessProfiles.length < 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_13__["DataTable"], {
          scrollHeight: "300px",
          scrollable: true,
          value: selectedAccessProfilesList,
          responsiveLayout: "scroll",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_14__["Column"], {
            header: "Selecionado",
            selectionMode: "single",
            headerStyle: {
              width: "3em"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_14__["Column"], {
            field: "name",
            header: "Funcionalidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_14__["Column"], {
            body: actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/userEntity",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "back-button",
          style: {
            marginRight: "15px"
          },
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(UserEntityForm, "BlEd3xCZps9EQXfk2z4I0VNWwoY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = UserEntityForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_15__["default"])(UserEntityForm));

var _c, _c2;

$RefreshReg$(_c, "UserEntityForm");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInNldFVzZXJFbnRpdHlTZWxlY3RlZCIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUiLCJzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0Iiwic2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdCIsInRvYXN0IiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIl9zYXZlIiwiaWQiLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIl9wdXQiLCJvbkNoYW5nZU5hbWUiLCJlIiwidXNlckVudGl0eUF1eCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlRW1haWwiLCJlbWFpbCIsImhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveCIsImluZGV4IiwibWFwIiwiaXRlbSIsImluZGV4T2YiLCJyZW1vdmVBY2Nlc3NQcm9maWxlIiwicm93RGF0YSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4IiwiZmlsdGVyIiwiY29tYm9Cb3hBY2Nlc3NQcm9maWxlc0F1eCIsImxhYmVsIiwiYWRkQWNjZXNzUHJvZmlsZSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsInJlbW92ZUZ1bmN0aW9uYWxpdHkiLCJtYXJnaW5Ub3AiLCJsZW5ndGgiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXlCQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHlCQUFOLENBQWdDQyxrQkFBM0M7QUFBQSxHQUFELENBQVosQ0FGakM7QUFBQSxNQUVwQkEsa0JBRm9CO0FBQUEsTUFFQUMscUJBRkE7O0FBQUEsbUJBSWlDTCxzREFBUSxDQUFDLEVBQUQsQ0FKekM7QUFBQSxNQUlwQk0sc0JBSm9CO0FBQUEsTUFJSUMseUJBSko7O0FBQUEsbUJBSytDUCxzREFBUSxDQUFDLElBQUQsQ0FMdkQ7QUFBQSxNQUtwQlEsNkJBTG9CO0FBQUEsTUFLV0MsZ0NBTFg7O0FBQUEsbUJBTXdDVCxzREFBUSxDQUFDLEVBQUQsQ0FOaEQ7QUFBQSxNQU1wQlUsMEJBTm9CO0FBQUEsTUFNUUMsNEJBTlI7O0FBUzNCLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdHQUF3QixDQUFDQyx1QkFB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QUFDLHlEQUFEO0FBQVEsaUJBQUssRUFBQyxNQUFkO0FBQXFCLGtCQUFNLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixlQU9JLHFFQUFDLHlEQUFEO0FBQVEsZ0JBQUksRUFBRUo7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkosZUFpQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsWUFBRSxFQUFDLGFBQVg7QUFBeUIsZUFBSyxFQUFFO0FBQUVLLHVCQUFXLEVBQUU7QUFBZixXQUFoQztBQUF5RCxlQUFLLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0osZUFxQ0kscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsUUFBZDtBQUF1QixlQUFPLEVBQUV6QztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUE4Q0g7O0dBM0lRMUIsYztVQUV3REcsdUQsRUFROUNjLHFELEVBQ0VFLHVEOzs7S0FYWm5CLGM7QUE2SU0scUVBQUFvRSxxRUFBUSxDQUFDcEUsY0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRW50aXR5L2Zvcm0uNTM3N2FmYjllNTk4NzQ4NmE2ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwicHJpbWVyZWFjdC9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCJwcmltZXJlYWN0L2lucHV0bnVtYmVyXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gJ3ByaW1lcmVhY3QvZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncHJpbWVyZWFjdC9jb2x1bW4nO1xyXG5cclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xyXG5cclxuaW1wb3J0IFwicHJpbWVmbGV4L3ByaW1lZmxleC5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJFbnRpdHlEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Vc2VyRW50aXR5RGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0FjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgbG9hZFVzZXJFbnRpdHlTZWxlY3RlZEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJFbnRpdHlcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVXNlckVudGl0eUZvcm0ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlckVudGl0eVNlbGVjdGVkLCBzZXRVc2VyRW50aXR5U2VsZWN0ZWRdID0gdXNlU3RhdGUodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyRW50aXR5U2VsZWN0ZWRSZWR1Y2VyLnVzZXJFbnRpdHlTZWxlY3RlZCkpO1xyXG5cclxuICAgIGNvbnN0IFtjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLCBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSwgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QsIHNldFNlbGVjdGVkQWNjZXNzUHJvZmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlKHJlc3BvbnNlLmRhdGFbMF0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX3NhdmUoKSB7XHJcblxyXG4gICAgICAgIGlmICghdXNlckVudGl0eVNlbGVjdGVkLmlkKSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcG9zdCh1c2VyRW50aXR5U2VsZWN0ZWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGNyaWFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlckVudGl0eVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcHV0KHVzZXJFbnRpdHlTZWxlY3RlZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlckVudGl0eVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VOYW1lKGUpIHtcclxuICAgICAgICBsZXQgdXNlckVudGl0eUF1eCA9IHsgLi4udXNlckVudGl0eVNlbGVjdGVkIH07XHJcbiAgICAgICAgdXNlckVudGl0eUF1eC5uYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VXNlckVudGl0eVNlbGVjdGVkKHVzZXJFbnRpdHlBdXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlRW1haWwoZSkge1xyXG4gICAgICAgIGxldCB1c2VyRW50aXR5QXV4ID0geyAuLi51c2VyRW50aXR5U2VsZWN0ZWQgfTtcclxuICAgICAgICB1c2VyRW50aXR5QXV4LmVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VXNlckVudGl0eVNlbGVjdGVkKHVzZXJFbnRpdHlBdXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udmFsdWUgfSkuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUoY29tYm9Cb3hBY2Nlc3NQcm9maWxlc1tpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVBY2Nlc3NQcm9maWxlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXggPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgIT09IHJvd0RhdGEuaWQgfSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdChzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCk7XHJcblxyXG4gICAgICAgIGxldCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzQXV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcztcclxuICAgICAgICBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzQXV4LnB1c2goeyB2YWx1ZTogcm93RGF0YS5pZCwgbGFiZWw6IHJvd0RhdGEubmFtZSB9KTtcclxuICAgICAgICBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzKGNvbWJvQm94QWNjZXNzUHJvZmlsZXNBdXgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlKGNvbWJvQm94QWNjZXNzUHJvZmlsZXNBdXhbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEFjY2Vzc1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4ID0gc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3Q7XHJcbiAgICAgICAgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgucHVzaCh7IGlkOiBzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZS52YWx1ZSwgbmFtZTogc2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUubGFiZWwgfSk7XHJcbiAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCA9IGNvbWJvQm94QWNjZXNzUHJvZmlsZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbCAhPT0gc2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUubGFiZWwpO1xyXG5cclxuICAgICAgICAvL2F0dWFsaXphIGNvbWJvYm94IGRhcyBmdW5jaW9uYWxpZGFkZSBkZWl4YW5kbyBhcGVuYXMgYSBmdW5jaW9uYWxpZGFkZXMgbsOjbyBhZGljaW9uYWRhcyBubyBjb21ib2JveFxyXG4gICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4KTtcclxuICAgICAgICAvL2F0dWFsaXphIGEgZnVuY2lvbmFsaWRhZGUgc2VsZWNpb25hZGEgYXDDs3MgYSBhdHVhbGl6YcOnw6NvIGRvIGFycmF5IGRlIGZ1bmNpb2FsaWRhZGVzXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4WzBdKTtcclxuICAgICAgICAvL2F0dWFsaXphIGEgdGFiZWxhIGNvbSBvcyBkYWRvcyBkYSBmdW5jaW9uYWxpZGFkZSBlIGFzIHBlcm1pc3PDtWVzIGRhIG1lc21hXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdChzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGdW5jdGlvbmFsaXR5KHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19IGxlZ2VuZD1cIkNhZGFzdHJvIGRlIFVzdcOhcmlvc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJuYW1lXCIgdmFsdWU9e3VzZXJFbnRpdHlTZWxlY3RlZCAmJiB1c2VyRW50aXR5U2VsZWN0ZWQubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU5hbWUoZSl9IGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RS1tYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImVtYWlsXCIgdmFsdWU9e3VzZXJFbnRpdHlTZWxlY3RlZCAmJiB1c2VyRW50aXR5U2VsZWN0ZWQuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VFbWFpbChlKX0gY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY2Vzc1Byb2ZpbGVzXCI+UGVyZmlzIGRlIEFjZXNzbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBlbXB0eU1lc3NhZ2U9XCJOZW5odW0gUGVyZmlsIGRlIEFjZXNzbyBEaXNwb27DrXZlbFwiIGNsYXNzTmFtZT1cImlucHV0ZmllbGRcIiBvcHRpb25WYWx1ZT1cInZhbHVlXCIgb3B0aW9uTGFiZWw9XCJsYWJlbFwiIG9wdGlvbnM9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXN9IHZhbHVlPXtzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSAmJiBzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBY2Nlc3NQcm9maWxlQ29tYm9Cb3goZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiQWRpY2lvbmFyXCIgb25DbGljaz17YWRkQWNjZXNzUHJvZmlsZX0gZGlzYWJsZWQ9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXMubGVuZ3RoIDwgMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlTGF5b3V0PVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJuYW1lXCIgaGVhZGVyPVwiRnVuY2lvbmFsaWRhZGVcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FsdmFyXCIgb25DbGljaz17X3NhdmV9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVXNlckVudGl0eUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=