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
        className: "field",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInNldFVzZXJFbnRpdHlTZWxlY3RlZCIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUiLCJzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0Iiwic2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdCIsInRvYXN0IiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIl9zYXZlIiwiaWQiLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIl9wdXQiLCJvbkNoYW5nZU5hbWUiLCJlIiwidXNlckVudGl0eUF1eCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlRW1haWwiLCJlbWFpbCIsImhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveCIsImluZGV4IiwibWFwIiwiaXRlbSIsImluZGV4T2YiLCJyZW1vdmVBY2Nlc3NQcm9maWxlIiwicm93RGF0YSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4IiwiZmlsdGVyIiwiY29tYm9Cb3hBY2Nlc3NQcm9maWxlc0F1eCIsImxhYmVsIiwiYWRkQWNjZXNzUHJvZmlsZSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsInJlbW92ZUZ1bmN0aW9uYWxpdHkiLCJtYXJnaW5Ub3AiLCJsZW5ndGgiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXlCQyxzREFBUSxDQUFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHlCQUFOLENBQWdDQyxrQkFBM0M7QUFBQSxHQUFELENBQVosQ0FGakM7QUFBQSxNQUVwQkEsa0JBRm9CO0FBQUEsTUFFQUMscUJBRkE7O0FBQUEsbUJBSWlDTCxzREFBUSxDQUFDLEVBQUQsQ0FKekM7QUFBQSxNQUlwQk0sc0JBSm9CO0FBQUEsTUFJSUMseUJBSko7O0FBQUEsbUJBSytDUCxzREFBUSxDQUFDLElBQUQsQ0FMdkQ7QUFBQSxNQUtwQlEsNkJBTG9CO0FBQUEsTUFLV0MsZ0NBTFg7O0FBQUEsbUJBTXdDVCxzREFBUSxDQUFDLEVBQUQsQ0FOaEQ7QUFBQSxNQU1wQlUsMEJBTm9CO0FBQUEsTUFNUUMsNEJBTlI7O0FBUzNCLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdHQUF3QixDQUFDQyx1QkFB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QUMseURBQUQ7QUFBUSxpQkFBSyxFQUFDLE1BQWQ7QUFBcUIsa0JBQU0sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBT0kscUVBQUMseURBQUQ7QUFBUSxnQkFBSSxFQUFFSjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSixlQWlDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxZQUFFLEVBQUMsYUFBWDtBQUF5QixlQUFLLEVBQUU7QUFBRUssdUJBQVcsRUFBRTtBQUFmLFdBQWhDO0FBQXlELGVBQUssRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDSixlQXFDSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQXVCLGVBQU8sRUFBRXpDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQThDSDs7R0EzSVExQixjO1VBRXdERyx1RCxFQVE5Q2MscUQsRUFDRUUsdUQ7OztLQVhabkIsYztBQTZJTSxxRUFBQW9FLHFFQUFRLENBQUNwRSxjQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJFbnRpdHkvZm9ybS5jNTQzNWU4M2JhYmE4MTYzYzU4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gXCJwcmltZXJlYWN0L2ZpZWxkc2V0XCI7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJwcmltZXJlYWN0L2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJwcmltZXJlYWN0L2J1dHRvblwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSBcInByaW1lcmVhY3QvaW5wdXRudW1iZXJcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckVudGl0eVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5Rm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyRW50aXR5U2VsZWN0ZWQsIHNldFVzZXJFbnRpdHlTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlTZWxlY3RlZFJlZHVjZXIudXNlckVudGl0eVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94QWNjZXNzUHJvZmlsZXMsIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlLCBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdCwgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX2NvbWJvQm94QWNjZXNzUHJvZmlsZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUocmVzcG9uc2UuZGF0YVswXSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyRW50aXR5U2VsZWN0ZWQuaWQpIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHVzZXJFbnRpdHlTZWxlY3RlZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wdXQodXNlckVudGl0eVNlbGVjdGVkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBVVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5hbWUoZSkge1xyXG4gICAgICAgIGxldCB1c2VyRW50aXR5QXV4ID0geyAuLi51c2VyRW50aXR5U2VsZWN0ZWQgfTtcclxuICAgICAgICB1c2VyRW50aXR5QXV4Lm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRVc2VyRW50aXR5U2VsZWN0ZWQodXNlckVudGl0eUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VFbWFpbChlKSB7XHJcbiAgICAgICAgbGV0IHVzZXJFbnRpdHlBdXggPSB7IC4uLnVzZXJFbnRpdHlTZWxlY3RlZCB9O1xyXG4gICAgICAgIHVzZXJFbnRpdHlBdXguZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRVc2VyRW50aXR5U2VsZWN0ZWQodXNlckVudGl0eUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWNjZXNzUHJvZmlsZUNvbWJvQm94KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS52YWx1ZSB9KS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZShjb21ib0JveEFjY2Vzc1Byb2ZpbGVzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUFjY2Vzc1Byb2ZpbGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCA9IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCAhPT0gcm93RGF0YS5pZCB9KTtcclxuICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZXNBdXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzO1xyXG4gICAgICAgIGNvbWJvQm94QWNjZXNzUHJvZmlsZXNBdXgucHVzaCh7IHZhbHVlOiByb3dEYXRhLmlkLCBsYWJlbDogcm93RGF0YS5uYW1lIH0pO1xyXG4gICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlc0F1eCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUoY29tYm9Cb3hBY2Nlc3NQcm9maWxlc0F1eFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkQWNjZXNzUHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXggPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdDtcclxuICAgICAgICBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eC5wdXNoKHsgaWQ6IHNlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlLnZhbHVlLCBuYW1lOiBzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZS5sYWJlbCB9KTtcclxuICAgICAgICBsZXQgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsICE9PSBzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZS5sYWJlbCk7XHJcblxyXG4gICAgICAgIC8vYXR1YWxpemEgY29tYm9ib3ggZGFzIGZ1bmNpb25hbGlkYWRlIGRlaXhhbmRvIGFwZW5hcyBhIGZ1bmNpb25hbGlkYWRlcyBuw6NvIGFkaWNpb25hZGFzIG5vIGNvbWJvYm94XHJcbiAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgpO1xyXG4gICAgICAgIC8vYXR1YWxpemEgYSBmdW5jaW9uYWxpZGFkZSBzZWxlY2lvbmFkYSBhcMOzcyBhIGF0dWFsaXphw6fDo28gZG8gYXJyYXkgZGUgZnVuY2lvYWxpZGFkZXNcclxuICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZShjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXhbMF0pO1xyXG4gICAgICAgIC8vYXR1YWxpemEgYSB0YWJlbGEgY29tIG9zIGRhZG9zIGRhIGZ1bmNpb25hbGlkYWRlIGUgYXMgcGVybWlzc8O1ZXMgZGEgbWVzbWFcclxuICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZ1bmN0aW9uYWxpdHkocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX0gbGVnZW5kPVwiQ2FkYXN0cm8gZGUgVXN1w6FyaW9zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cIm5hbWVcIiB2YWx1ZT17dXNlckVudGl0eVNlbGVjdGVkICYmIHVzZXJFbnRpdHlTZWxlY3RlZC5uYW1lfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlTmFtZShlKX0gY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FLW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwiZW1haWxcIiB2YWx1ZT17dXNlckVudGl0eVNlbGVjdGVkICYmIHVzZXJFbnRpdHlTZWxlY3RlZC5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUVtYWlsKGUpfSBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWNjZXNzUHJvZmlsZXNcIj5QZXJmaXMgZGUgQWNlc3NvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGVtcHR5TWVzc2FnZT1cIk5lbmh1bSBQZXJmaWwgZGUgQWNlc3NvIERpc3BvbsOtdmVsXCIgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZFwiIG9wdGlvblZhbHVlPVwidmFsdWVcIiBvcHRpb25MYWJlbD1cImxhYmVsXCIgb3B0aW9ucz17Y29tYm9Cb3hBY2Nlc3NQcm9maWxlc30gdmFsdWU9e3NlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlICYmIHNlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiQWRpY2lvbmFyXCIgb25DbGljaz17YWRkQWNjZXNzUHJvZmlsZX0gZGlzYWJsZWQ9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXMubGVuZ3RoIDwgMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlTGF5b3V0PVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJuYW1lXCIgaGVhZGVyPVwiRnVuY2lvbmFsaWRhZGVcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FsdmFyXCIgb25DbGljaz17X3NhdmV9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVXNlckVudGl0eUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=