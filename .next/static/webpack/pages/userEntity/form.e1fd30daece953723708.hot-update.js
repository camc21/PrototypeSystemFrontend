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
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/UserEntityDataService */ "./services/UserEntityDataService.jsx");
/* harmony import */ var _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/AccessProfileDataService */ "./services/AccessProfileDataService.jsx");
/* harmony import */ var _store_actions_userEntity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/userEntity */ "./store/actions/userEntity/index.jsx");




var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\userEntity\\form.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function UserEntityForm(props) {
  _s();

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
    _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_16__["AccessProfileDataService"]._comboBoxAccessProfiles().then(function (response) {
      setComboBoxAccessProfiles(response.data);
      setSelectedComboBoxAccessProfile(response.data[0]);
    });
  }, []);

  function _save() {
    if (!userEntitySelected.id) {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_15__["UserEntityDataService"]._post(userEntitySelected).then(function (response) {
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
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_15__["UserEntityDataService"]._put(userEntitySelected).then(function (response) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
          lineNumber: 94,
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
          lineNumber: 95,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "E-mail:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
          lineNumber: 100,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field col-12 md:col-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "accessProfiles",
          children: "Perfis de Acesso:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
          lineNumber: 105,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataTable, {
          scrollHeight: "300px",
          scrollable: true,
          value: dataTablePermission,
          responsiveLayout: "scroll",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            header: "Selecionado",
            selectionMode: "single",
            headerStyle: {
              width: "3em"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            field: "name",
            header: "Funcionalidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            field: function field(e) {
              return convertBooleanToText(e.readingPermission);
            },
            header: "Leitura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            field: function field(e) {
              return convertBooleanToText(e.writingPermission);
            },
            header: "Escrita"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            body: actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
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
          lineNumber: 123,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(UserEntityForm, "BlEd3xCZps9EQXfk2z4I0VNWwoY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = UserEntityForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_13__["default"])(UserEntityForm));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInNldFVzZXJFbnRpdHlTZWxlY3RlZCIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUiLCJzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0Iiwic2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdCIsInRvYXN0IiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIl9zYXZlIiwiaWQiLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIl9wdXQiLCJvbkNoYW5nZU5hbWUiLCJlIiwidXNlckVudGl0eUF1eCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlRW1haWwiLCJlbWFpbCIsImhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveCIsImluZGV4IiwibWFwIiwiaXRlbSIsImluZGV4T2YiLCJtYXJnaW5Ub3AiLCJkYXRhVGFibGVQZXJtaXNzaW9uIiwid2lkdGgiLCJjb252ZXJ0Qm9vbGVhblRvVGV4dCIsInJlYWRpbmdQZXJtaXNzaW9uIiwid3JpdGluZ1Blcm1pc3Npb24iLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLGtCQUV5QkMsc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyx5QkFBTixDQUFnQ0Msa0JBQTNDO0FBQUEsR0FBRCxDQUFaLENBRmpDO0FBQUEsTUFFcEJBLGtCQUZvQjtBQUFBLE1BRUFDLHFCQUZBOztBQUFBLG1CQUlpQ0wsc0RBQVEsQ0FBQyxFQUFELENBSnpDO0FBQUEsTUFJcEJNLHNCQUpvQjtBQUFBLE1BSUlDLHlCQUpKOztBQUFBLG1CQUsrQ1Asc0RBQVEsQ0FBQyxJQUFELENBTHZEO0FBQUEsTUFLcEJRLDZCQUxvQjtBQUFBLE1BS1dDLGdDQUxYOztBQUFBLG1CQU13Q1Qsc0RBQVEsQ0FBQyxFQUFELENBTmhEO0FBQUEsTUFNcEJVLDBCQU5vQjtBQUFBLE1BTVFDLDRCQU5SOztBQVMzQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnR0FBd0IsQ0FBQ0MsdUJBQXpCLEdBQW1EQyxJQUFuRCxDQUF3RCxVQUFBQyxRQUFRLEVBQUk7QUFDaEVmLCtCQUF5QixDQUFDZSxRQUFRLENBQUNDLElBQVYsQ0FBekI7QUFDQWQsc0NBQWdDLENBQUNhLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQWQsQ0FBRCxDQUFoQztBQUNILEtBSEQ7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQVFBLFdBQVNDLEtBQVQsR0FBaUI7QUFFYixRQUFJLENBQUNwQixrQkFBa0IsQ0FBQ3FCLEVBQXhCLEVBQTRCO0FBQ3hCQyw0RkFBcUIsQ0FBQ0MsS0FBdEIsQ0FBNEJ2QixrQkFBNUIsRUFBZ0RpQixJQUFoRCxDQUFxRCxVQUFBQyxRQUFRLEVBQUk7QUFDN0RWLGFBQUssQ0FBQ2dCLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQjtBQUFFQyxrQkFBUSxFQUFFLFNBQVo7QUFBdUJDLGlCQUFPLEVBQUUsU0FBaEM7QUFBMkNDLGdCQUFNLEVBQUUsOEJBQW5EO0FBQW1GQyxjQUFJLEVBQUU7QUFBekYsU0FBbkI7QUFDQUMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2JDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBdEIsZ0JBQU0sQ0FBQ3VCLElBQVAsQ0FBWSxhQUFaO0FBQ0gsU0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILE9BTkQ7QUFPSCxLQVJELE1BUU87QUFDSFgsNEZBQXFCLENBQUNZLElBQXRCLENBQTJCbEMsa0JBQTNCLEVBQStDaUIsSUFBL0MsQ0FBb0QsVUFBQUMsUUFBUSxFQUFJO0FBQzVEVixhQUFLLENBQUNnQixPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBRUMsa0JBQVEsRUFBRSxTQUFaO0FBQXVCQyxpQkFBTyxFQUFFLFNBQWhDO0FBQTJDQyxnQkFBTSxFQUFFLGdDQUFuRDtBQUFxRkMsY0FBSSxFQUFFO0FBQTNGLFNBQW5CO0FBQ0FDLGtCQUFVLENBQUMsWUFBTTtBQUNiQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBdEIsZ0JBQU0sQ0FBQ3VCLElBQVAsQ0FBWSxhQUFaO0FBQ0gsU0FIUyxFQUdQLElBSE8sQ0FBVjtBQUtILE9BUEQ7QUFRSDtBQUNKOztBQUVELFdBQVNFLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3JCLFFBQUlDLGFBQWEscUJBQVFyQyxrQkFBUixDQUFqQjs7QUFDQXFDLGlCQUFhLENBQUNDLElBQWQsR0FBcUJGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUE5QjtBQUNBdkMseUJBQXFCLENBQUNvQyxhQUFELENBQXJCO0FBQ0g7O0FBRUQsV0FBU0ksYUFBVCxDQUF1QkwsQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSUMsYUFBYSxxQkFBUXJDLGtCQUFSLENBQWpCOztBQUNBcUMsaUJBQWEsQ0FBQ0ssS0FBZCxHQUFzQk4sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQS9CO0FBQ0F2Qyx5QkFBcUIsQ0FBQ29DLGFBQUQsQ0FBckI7QUFDSDs7QUFFRCxXQUFTTSwyQkFBVCxDQUFxQ0gsS0FBckMsRUFBNEM7QUFDeEMsUUFBTUksS0FBSyxHQUFHMUMsc0JBQXNCLENBQUMyQyxHQUF2QixDQUEyQixVQUFVQyxJQUFWLEVBQWdCO0FBQUUsYUFBT0EsSUFBSSxDQUFDTixLQUFaO0FBQW1CLEtBQWhFLEVBQWtFTyxPQUFsRSxDQUEwRVAsS0FBMUUsQ0FBZDs7QUFDQSxRQUFJSSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNadkMsc0NBQWdDLENBQUNILHNCQUFzQixDQUFDMEMsS0FBRCxDQUF2QixDQUFoQztBQUNIO0FBQ0o7O0FBRUQsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFPLFNBQUcsRUFBRXBDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBVSxXQUFLLEVBQUU7QUFBRXdDLGlCQUFTLEVBQUU7QUFBYixPQUFqQjtBQUF3QyxZQUFNLEVBQUMseUJBQS9DO0FBQUEsOEJBRUk7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLDhEQUFEO0FBQVcsWUFBRSxFQUFDLE1BQWQ7QUFBcUIsZUFBSyxFQUFFaEQsa0JBQWtCLElBQUlBLGtCQUFrQixDQUFDc0MsSUFBckU7QUFBMkUsa0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLG1CQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQSxXQUFyRjtBQUE2RyxtQkFBUyxFQUFDO0FBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFPSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBVyxZQUFFLEVBQUMsT0FBZDtBQUFzQixlQUFLLEVBQUVwQyxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUMwQyxLQUF0RTtBQUE2RSxrQkFBUSxFQUFFLGtCQUFDTixDQUFEO0FBQUEsbUJBQU9LLGFBQWEsQ0FBQ0wsQ0FBRCxDQUFwQjtBQUFBLFdBQXZGO0FBQWdILG1CQUFTLEVBQUM7QUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVlJO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLDZEQUFEO0FBQVUsc0JBQVksRUFBQyx1Q0FBdkI7QUFBNEQsbUJBQVMsRUFBQyxZQUF0RTtBQUFtRixxQkFBVyxFQUFDLE9BQS9GO0FBQXVHLHFCQUFXLEVBQUMsT0FBbkg7QUFBMkgsaUJBQU8sRUFBRWxDLHNCQUFwSTtBQUE0SixlQUFLLEVBQUVFLDZCQUE2QixJQUFJQSw2QkFBNkIsQ0FBQ29DLEtBQWxPO0FBQXlPLGtCQUFRLEVBQUUsa0JBQUNKLENBQUQ7QUFBQSxtQkFBT08sMkJBQTJCLENBQUNQLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQWxDO0FBQUE7QUFBblA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQWlCSTtBQUFBLCtCQUNJLHFFQUFDLFNBQUQ7QUFDSSxzQkFBWSxFQUFDLE9BRGpCO0FBRUksb0JBQVUsTUFGZDtBQUdJLGVBQUssRUFBRVMsbUJBSFg7QUFJSSwwQkFBZ0IsRUFBQyxRQUpyQjtBQUFBLGtDQUtJLHFFQUFDLE1BQUQ7QUFBUSxrQkFBTSxFQUFDLGFBQWY7QUFBNkIseUJBQWEsRUFBQyxRQUEzQztBQUFvRCx1QkFBVyxFQUFFO0FBQUVDLG1CQUFLLEVBQUU7QUFBVDtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBTUkscUVBQUMsTUFBRDtBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFxQixrQkFBTSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFPSSxxRUFBQyxNQUFEO0FBQVEsaUJBQUssRUFBRSxlQUFDZCxDQUFEO0FBQUEscUJBQU9lLG9CQUFvQixDQUFDZixDQUFDLENBQUNnQixpQkFBSCxDQUEzQjtBQUFBLGFBQWY7QUFBaUUsa0JBQU0sRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBUUkscUVBQUMsTUFBRDtBQUFRLGlCQUFLLEVBQUUsZUFBQ2hCLENBQUQ7QUFBQSxxQkFBT2Usb0JBQW9CLENBQUNmLENBQUMsQ0FBQ2lCLGlCQUFILENBQTNCO0FBQUEsYUFBZjtBQUFpRSxrQkFBTSxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkosZUFTSSxxRUFBQyxNQUFEO0FBQVEsZ0JBQUksRUFBRUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkosZUErQkkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsWUFBRSxFQUFDLGFBQVg7QUFBeUIsZUFBSyxFQUFFO0FBQUVDLHVCQUFXLEVBQUU7QUFBZixXQUFoQztBQUF5RCxlQUFLLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkosZUFtQ0kscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsUUFBZDtBQUF1QixlQUFPLEVBQUVuQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUE0Q0g7O0dBMUdRMUIsYztVQUV3REcsdUQsRUFROUNjLHFELEVBQ0VFLHVEOzs7S0FYWm5CLGM7QUE0R00scUVBQUE4RCxxRUFBUSxDQUFDOUQsY0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRW50aXR5L2Zvcm0uZTFmZDMwZGFlY2U5NTM3MjM3MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwicHJpbWVyZWFjdC9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCJwcmltZXJlYWN0L2lucHV0bnVtYmVyXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckVudGl0eVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5Rm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyRW50aXR5U2VsZWN0ZWQsIHNldFVzZXJFbnRpdHlTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlTZWxlY3RlZFJlZHVjZXIudXNlckVudGl0eVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94QWNjZXNzUHJvZmlsZXMsIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlLCBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdCwgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX2NvbWJvQm94QWNjZXNzUHJvZmlsZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUocmVzcG9uc2UuZGF0YVswXSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyRW50aXR5U2VsZWN0ZWQuaWQpIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHVzZXJFbnRpdHlTZWxlY3RlZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wdXQodXNlckVudGl0eVNlbGVjdGVkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBVVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5hbWUoZSkge1xyXG4gICAgICAgIGxldCB1c2VyRW50aXR5QXV4ID0geyAuLi51c2VyRW50aXR5U2VsZWN0ZWQgfTtcclxuICAgICAgICB1c2VyRW50aXR5QXV4Lm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRVc2VyRW50aXR5U2VsZWN0ZWQodXNlckVudGl0eUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VFbWFpbChlKSB7XHJcbiAgICAgICAgbGV0IHVzZXJFbnRpdHlBdXggPSB7IC4uLnVzZXJFbnRpdHlTZWxlY3RlZCB9O1xyXG4gICAgICAgIHVzZXJFbnRpdHlBdXguZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRVc2VyRW50aXR5U2VsZWN0ZWQodXNlckVudGl0eUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWNjZXNzUHJvZmlsZUNvbWJvQm94KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS52YWx1ZSB9KS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZShjb21ib0JveEFjY2Vzc1Byb2ZpbGVzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19IGxlZ2VuZD1cIkNhZGFzdHJvIGRlIFVzdcOhcmlvc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJuYW1lXCIgdmFsdWU9e3VzZXJFbnRpdHlTZWxlY3RlZCAmJiB1c2VyRW50aXR5U2VsZWN0ZWQubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU5hbWUoZSl9IGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RS1tYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImVtYWlsXCIgdmFsdWU9e3VzZXJFbnRpdHlTZWxlY3RlZCAmJiB1c2VyRW50aXR5U2VsZWN0ZWQuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VFbWFpbChlKX0gY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY2Vzc1Byb2ZpbGVzXCI+UGVyZmlzIGRlIEFjZXNzbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBlbXB0eU1lc3NhZ2U9XCJOZW5odW0gUGVyZmlsIGRlIEFjZXNzbyBEaXNwb27DrXZlbFwiIGNsYXNzTmFtZT1cImlucHV0ZmllbGRcIiBvcHRpb25WYWx1ZT1cInZhbHVlXCIgb3B0aW9uTGFiZWw9XCJsYWJlbFwiIG9wdGlvbnM9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXN9IHZhbHVlPXtzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSAmJiBzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBY2Nlc3NQcm9maWxlQ29tYm9Cb3goZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVRhYmxlUGVybWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZUxheW91dD1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGhlYWRlcj1cIlNlbGVjaW9uYWRvXCIgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7IHdpZHRoOiBcIjNlbVwiIH19PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibmFtZVwiIGhlYWRlcj1cIkZ1bmNpb25hbGlkYWRlXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9eyhlKSA9PiBjb252ZXJ0Qm9vbGVhblRvVGV4dChlLnJlYWRpbmdQZXJtaXNzaW9uKX0gaGVhZGVyPVwiTGVpdHVyYVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPXsoZSkgPT4gY29udmVydEJvb2xlYW5Ub1RleHQoZS53cml0aW5nUGVybWlzc2lvbil9IGhlYWRlcj1cIkVzY3JpdGFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FsdmFyXCIgb25DbGljaz17X3NhdmV9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVXNlckVudGl0eUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=