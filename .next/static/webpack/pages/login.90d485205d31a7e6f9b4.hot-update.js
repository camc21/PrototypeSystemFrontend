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
          lineNumber: 79,
          columnNumber: 25
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
              lineNumber: 88,
              columnNumber: 33
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
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
              lineNumber: 107,
              columnNumber: 33
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          label: "Entrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 25
        }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlRWZmZWN0IiwiYXNQYXRoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJoYW5kbGVJbnB1dEVtYWlsQ2hhbmdlIiwiZSIsInNldFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiTG9naW5EYXRhU2VydmljZSIsImxvZ0luIiwidGhlbiIsInJlc3BvbnNlIiwiY29kZSIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibWVzc2FnZSIsImxpZmUiLCJzZXRJdGVtIiwidG9rZW4iLCJzaG93QnV0dG9uTG9naW5BY3Rpb24iLCJzdHlsZXMiLCJsYXlvdXRfbG9naW4iLCJib3hfbG9naW4iLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm9uQmx1ciIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FB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LHVEOzs7S0F2QnBFeEIsSztBQTRHT0Esb0VBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjkwZDQ4NTIwNWQzMWE3ZTZmOWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydHMgYXBpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbi8vaW1wb3J0cyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuXHJcbi8vaW1wb3J0cyBiaWJsaW90ZWNhc1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAncHJpbWVyZWFjdC9wYXNzd29yZCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAncHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXInO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcblxyXG4vL2ltcG9ydHMgc2VydmljZXNcclxuaW1wb3J0IHsgTG9naW5EYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0xvZ2luRGF0YVNlcnZpY2UnO1xyXG5cclxuLy9hY3Rpb25zXHJcbmltcG9ydCB7IHNob3dCdXR0b25Mb2dpbkFjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbG9naW5fbG9nb3V0JztcclxuaW1wb3J0IHsgbG9jYWxTdG9yYWdlTWFuYWdlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29sb3ItbW9kZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmdDcmVkZW50aWFscywgc2V0TG9hZGluZ0NyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09PSAnL2xvZ2luJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0RW1haWxDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFZhbHVlKCdlbWFpbCcsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWx1ZSgncGFzc3dvcmQnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBzZXRWYWx1ZSwgZXJyb3JzLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm0oeyBtb2RlOiAnb25DaGFuZ2UnIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgICAgIGlmIChkYXRhLmVtYWlsICE9PSBcIlwiICYmIGRhdGEucGFzc3dvcmQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgTG9naW5EYXRhU2VydmljZS5sb2dJbihkYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCAnQmVhcmVyICcgKyByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCdXR0b25Mb2dpbkFjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiUHJlZW5jaGEgb3MgY2FtcG9zLCBFLW1haWwgZSBTZW5oYVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0X2xvZ2lufT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRfbG9naW5fbm9fbWVzc2FnZXN9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FLW1haWw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9uQmx1ciwgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0RW1haWxDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbG9yOiBlcnJvcnMubm9tZSA/ICdyZWQnIDogJycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRQYXNzd29yZENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWFrTGFiZWw9XCJGcmFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bUxhYmVsPVwiTcOpZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nTGFiZWw9XCJGb3J0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdExhYmVsPVwiUG9yIGZhdm9yIGVudHJlIGNvbSBhIHNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJFbnRyYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ0NyZWRlbnRpYWxzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKExvZ2luKSJdLCJzb3VyY2VSb290IjoiIn0=