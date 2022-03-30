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
            backgroundColor: "#fff"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlRWZmZWN0IiwiYXNQYXRoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJoYW5kbGVJbnB1dEVtYWlsQ2hhbmdlIiwiZSIsInNldFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiTG9naW5EYXRhU2VydmljZSIsImxvZ0luIiwidGhlbiIsInJlc3BvbnNlIiwiY29kZSIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibWVzc2FnZSIsImxpZmUiLCJzZXRJdGVtIiwidG9rZW4iLCJzaG93QnV0dG9uTG9naW5BY3Rpb24iLCJzdHlsZXMiLCJsYXlvdXRfbG9naW4iLCJib3hfbG9naW4iLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBR0EsU0FBU0Es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Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeURIOztHQXhHUVQsSztVQUVZRyx1RCxFQUVGSSxxRCxFQW1CMERpQix1RDs7O0tBdkJwRXhCLEs7QUEwR09BLG9FQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi45OTljNjAwNWExMGNhN2U1NjFhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRzIGFwaVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG4vL2ltcG9ydHMgc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnXHJcblxyXG4vL2ltcG9ydHMgYmlibGlvdGVjYXNcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJ3ByaW1lcmVhY3QvcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lciB9IGZyb20gJ3ByaW1lcmVhY3QvcHJvZ3Jlc3NzcGlubmVyJztcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5cclxuLy9pbXBvcnRzIHNlcnZpY2VzXHJcbmltcG9ydCB7IExvZ2luRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dpbkRhdGFTZXJ2aWNlJztcclxuXHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyBzaG93QnV0dG9uTG9naW5BY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2xvZ2luX2xvZ291dCc7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1hbmFnZXIgfSBmcm9tICdAY2hha3JhLXVpL2NvbG9yLW1vZGUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nQ3JlZGVudGlhbHMsIHNldExvYWRpbmdDcmVkZW50aWFsc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocm91dGVyLmFzUGF0aCA9PT0gJy9sb2dpbicgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dEVtYWlsQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWx1ZSgnZW1haWwnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRQYXNzd29yZENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoJ3Bhc3N3b3JkJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUsIGVycm9ycywgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtKHsgbW9kZTogJ29uQ2hhbmdlJyB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyh0cnVlKTtcclxuICAgICAgICBpZiAoZGF0YS5lbWFpbCAhPT0gXCJcIiAmJiBkYXRhLnBhc3N3b3JkICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIExvZ2luRGF0YVNlcnZpY2UubG9nSW4oZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgJ0JlYXJlciAnICsgcmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzaG93QnV0dG9uTG9naW5BY3Rpb24oZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlByZWVuY2hhIG9zIGNhbXBvcywgRS1tYWlsIGUgU2VuaGFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dF9sb2dpbn0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hfbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5FLW1haWw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0RW1haWxDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgb25CbHVyLCBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sb3I6IGVycm9ycy5ub21lID8gJ3JlZCcgOiAnJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vha0xhYmVsPVwiRnJhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bUxhYmVsPVwiTcOpZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmdMYWJlbD1cIkZvcnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRMYWJlbD1cIlBvciBmYXZvciBlbnRyZSBjb20gYSBzZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjE1cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIn19IHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkVudHJhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdDcmVkZW50aWFscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKExvZ2luKSJdLCJzb3VyY2VSb290IjoiIn0=