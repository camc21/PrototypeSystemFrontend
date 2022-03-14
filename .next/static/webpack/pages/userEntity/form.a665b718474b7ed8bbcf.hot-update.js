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
      lineNumber: 89,
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
          lineNumber: 93,
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
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "E-mail:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
          lineNumber: 99,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field col-12 md:col-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "accessProfiles",
          children: "Perfis de Acesso:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
          lineNumber: 108,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(UserEntityForm, "aMilko1mXHdR/2JPTDzKVfUMgcw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInNldFVzZXJFbnRpdHlTZWxlY3RlZCIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUiLCJzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSIsInRvYXN0IiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIl9zYXZlIiwiaWQiLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIl9wdXQiLCJvbkNoYW5nZU5hbWUiLCJlIiwidXNlckVudGl0eUF1eCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlRW1haWwiLCJlbWFpbCIsImhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveCIsImluZGV4IiwibWFwIiwiaXRlbSIsImluZGV4T2YiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtB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ZDtBQUF1QixlQUFPLEVBQUU3QjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUE4Qkg7O0dBM0ZReEIsYztVQUV3REcsdUQsRUFPOUNZLHFELEVBQ0VFLHVEOzs7S0FWWmpCLGM7QUE2Rk0scUVBQUFzRCxxRUFBUSxDQUFDdEQsY0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRW50aXR5L2Zvcm0uYTY2NWI3MTg0NzRiN2VkOGJiY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwicHJpbWVyZWFjdC9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCJwcmltZXJlYWN0L2lucHV0bnVtYmVyXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckVudGl0eVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5Rm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyRW50aXR5U2VsZWN0ZWQsIHNldFVzZXJFbnRpdHlTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlTZWxlY3RlZFJlZHVjZXIudXNlckVudGl0eVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94QWNjZXNzUHJvZmlsZXMsIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlLCBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZS5fY29tYm9Cb3hBY2Nlc3NQcm9maWxlcygpLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlKHJlc3BvbnNlLmRhdGFbMF0pXHJcbiAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gX3NhdmUoKSB7XHJcblxyXG4gICAgICAgIGlmICghdXNlckVudGl0eVNlbGVjdGVkLmlkKSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcG9zdCh1c2VyRW50aXR5U2VsZWN0ZWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGNyaWFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlckVudGl0eVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcHV0KHVzZXJFbnRpdHlTZWxlY3RlZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlckVudGl0eVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VOYW1lKGUpIHtcclxuICAgICAgICBsZXQgdXNlckVudGl0eUF1eCA9IHsgLi4udXNlckVudGl0eVNlbGVjdGVkIH07XHJcbiAgICAgICAgdXNlckVudGl0eUF1eC5uYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VXNlckVudGl0eVNlbGVjdGVkKHVzZXJFbnRpdHlBdXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlRW1haWwoZSkge1xyXG4gICAgICAgIGxldCB1c2VyRW50aXR5QXV4ID0geyAuLi51c2VyRW50aXR5U2VsZWN0ZWQgfTtcclxuICAgICAgICB1c2VyRW50aXR5QXV4LmVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VXNlckVudGl0eVNlbGVjdGVkKHVzZXJFbnRpdHlBdXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFjY2Vzc1Byb2ZpbGVDb21ib0JveCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udmFsdWUgfSkuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUoY29tYm9Cb3hBY2Nlc3NQcm9maWxlc1tpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fSBsZWdlbmQ9XCJDYWRhc3RybyBkZSBVc3XDoXJpb3NcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwibmFtZVwiIHZhbHVlPXt1c2VyRW50aXR5U2VsZWN0ZWQgJiYgdXNlckVudGl0eVNlbGVjdGVkLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VOYW1lKGUpfSBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkUtbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJlbWFpbFwiIHZhbHVlPXt1c2VyRW50aXR5U2VsZWN0ZWQgJiYgdXNlckVudGl0eVNlbGVjdGVkLmVtYWlsfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRW1haWwoZSl9IGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyIG1kOmNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY2Nlc3NQcm9maWxlc1wiPlBlcmZpcyBkZSBBY2Vzc286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gZW1wdHlNZXNzYWdlPVwiTmVuaHVtIFBlcmZpbCBkZSBBY2Vzc28gRGlzcG9uw612ZWxcIiBjbGFzc05hbWU9XCJpbnB1dGZpZWxkXCIgb3B0aW9uVmFsdWU9XCJ2YWx1ZVwiIG9wdGlvbkxhYmVsPVwibGFiZWxcIiBvcHRpb25zPXtjb21ib0JveEFjY2Vzc1Byb2ZpbGVzfSB2YWx1ZT17c2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUgJiYgc2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQWNjZXNzUHJvZmlsZUNvbWJvQm94KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fSBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhbHZhclwiIG9uQ2xpY2s9e19zYXZlfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFVzZXJFbnRpdHlGb3JtKTsiXSwic291cmNlUm9vdCI6IiJ9