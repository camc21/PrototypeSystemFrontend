webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login/index.jsx":
/*!*******************************!*\
  !*** ./pages/login/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/password */ "./node_modules/primereact/password/password.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/progressspinner */ "./node_modules/primereact/progressspinner/progressspinner.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.module.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var _services_LoginDataService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/LoginDataService */ "./services/LoginDataService.jsx");
/* harmony import */ var _store_actions_login_logout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/login_logout */ "./store/actions/login_logout/index.jsx");
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/color-mode */ "./node_modules/@chakra-ui/color-mode/dist/esm/index.js");


var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\login\\index.jsx",
    _s = $RefreshSig$();

//imports api



 //imports styles

 //imports bibliotecas






 //imports services

 //actions




function Login(props) {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingCredentials = _useState[0],
      setLoadingCredentials = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.asPath === '/login' && localStorage.getItem('accessToken') !== null) {
      router.push('/');
    }
  }, []);

  function handleInputEmailChange(e) {
    setValue('email', e.target.value);
  }

  function handleInputPasswordChange(e) {
    setValue('password', e.target.value);
  }

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    mode: 'onChange'
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      errors = _useForm.errors,
      getValues = _useForm.getValues;

  var onSubmit = function onSubmit(data) {
    setLoadingCredentials(true);

    if (data.email !== "" && data.password !== "") {
      _services_LoginDataService__WEBPACK_IMPORTED_MODULE_12__["LoginDataService"].logIn(data.email, data.password).then(function (response) {
        if (response.data.code > 300) {
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: response.data.message,
            life: 3000
          });
          setVisible(true);
          setLoadingCredentials(false);
        } else {
          setVisible(false);
          localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
          setLoadingCredentials(false);
          dispatch(Object(_store_actions_login_logout__WEBPACK_IMPORTED_MODULE_13__["showButtonLoginAction"])(false));
          router.push('/');
        }
      });
    } else {
      toast.current.show({
        severity: "warn",
        summary: "Aviso",
        detail: "Preencha os campos, E-mail e Senha",
        life: 3000
      });
      setLoadingCredentials(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layout_login,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_11__["Toast"], {
        ref: toast
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.box_login,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "E-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
          control: control,
          name: "email",
          defaultValue: undefined,
          rules: {
            required: true,
            maxLength: 50
          },
          render: function render(_ref) {
            var onBlur = _ref.onBlur,
                onChange = _ref.onChange,
                value = _ref.value;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], {
              id: "email",
              name: "email",
              onChange: function onChange(e) {
                return handleInputEmailChange(e);
              },
              value: value,
              placeholder: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
          control: control,
          name: "password",
          defaultValue: undefined,
          rules: {
            required: true,
            maxLength: 50
          },
          render: function render(_ref2) {
            var onBlur = _ref2.onBlur,
                onChange = _ref2.onChange,
                value = _ref2.value;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_password__WEBPACK_IMPORTED_MODULE_7__["Password"] // style={{ width: '100%', borderColor: errors.nome ? 'red' : '' }}
            , {
              id: "password",
              name: "password",
              onChange: function onChange(e) {
                return handleInputPasswordChange(e);
              },
              value: value,
              placeholder: "Senha",
              toggleMask: true,
              weakLabel: "Fraca",
              mediumLabel: "M\xE9dia",
              strongLabel: "Forte",
              promptLabel: "Por favor entre com a senha",
              autoComplete: "new-password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          style: {
            marginTop: "15px",
            backgroundColor: "#fff",
            color: "#000"
          },
          type: "submit",
          label: "Entrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, this);
}

_s(Login, "pFBDg5YjpX6kLlAaZ44PV3YTSG8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlRWZmZWN0IiwiYXNQYXRoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJoYW5kbGVJbnB1dEVtYWlsQ2hhbmdlIiwiZSIsInNldFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiTG9naW5EYXRhU2VydmljZSIsImxvZ0luIiwidGhlbiIsInJlc3BvbnNlIiwiY29kZSIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibWVzc2FnZSIsImxpZmUiLCJzZXRJdGVtIiwidG9rZW4iLCJzaG93QnV0dG9uTG9naW5BY3Rpb24iLCJzdHlsZXMiLCJsYXlvdXRfbG9naW4iLCJib3hfbG9naW4iLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTs7QUFH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QS9DUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5REg7O0dBeEdRVCxLO1VBRVlHLHVELEVBRUZJLHFELEVBbUIwRGlCLHVEOzs7S0F2QnBFeEIsSztBQTBHT0Esb0VBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjBmMDg4MzcwMTc0OTkwOTBkYzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydHMgYXBpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbi8vaW1wb3J0cyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuXHJcbi8vaW1wb3J0cyBiaWJsaW90ZWNhc1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAncHJpbWVyZWFjdC9wYXNzd29yZCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAncHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXInO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcblxyXG4vL2ltcG9ydHMgc2VydmljZXNcclxuaW1wb3J0IHsgTG9naW5EYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0xvZ2luRGF0YVNlcnZpY2UnO1xyXG5cclxuLy9hY3Rpb25zXHJcbmltcG9ydCB7IHNob3dCdXR0b25Mb2dpbkFjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbG9naW5fbG9nb3V0JztcclxuaW1wb3J0IHsgbG9jYWxTdG9yYWdlTWFuYWdlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29sb3ItbW9kZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmdDcmVkZW50aWFscywgc2V0TG9hZGluZ0NyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09PSAnL2xvZ2luJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0RW1haWxDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFZhbHVlKCdlbWFpbCcsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWx1ZSgncGFzc3dvcmQnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBzZXRWYWx1ZSwgZXJyb3JzLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm0oeyBtb2RlOiAnb25DaGFuZ2UnIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgICAgIGlmIChkYXRhLmVtYWlsICE9PSBcIlwiICYmIGRhdGEucGFzc3dvcmQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgTG9naW5EYXRhU2VydmljZS5sb2dJbihkYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCAnQmVhcmVyICcgKyByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCdXR0b25Mb2dpbkFjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiUHJlZW5jaGEgb3MgY2FtcG9zLCBFLW1haWwgZSBTZW5oYVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0X2xvZ2lufT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkUtbWFpbDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiA1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9uQmx1ciwgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRFbWFpbENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+U2VuaGE8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xvcjogZXJyb3JzLm5vbWUgPyAncmVkJyA6ICcnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0UGFzc3dvcmRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1hc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWFrTGFiZWw9XCJGcmFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtTGFiZWw9XCJNw6lkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZ0xhYmVsPVwiRm9ydGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdExhYmVsPVwiUG9yIGZhdm9yIGVudHJlIGNvbSBhIHNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCBjb2xvcjogXCIjMDAwXCJ9fSB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJFbnRyYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nQ3JlZGVudGlhbHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzU3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChMb2dpbikiXSwic291cmNlUm9vdCI6IiJ9