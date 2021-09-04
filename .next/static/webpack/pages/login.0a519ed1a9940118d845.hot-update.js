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
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/password */ "./node_modules/primereact/password/password.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/progressspinner */ "./node_modules/primereact/progressspinner/progressspinner.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _services_LoginDataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/LoginDataService */ "./services/LoginDataService.jsx");
/* harmony import */ var _store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/login_logout */ "./store/actions/login_logout/index.jsx");


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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingCredentials = _useState3[0],
      setLoadingCredentials = _useState3[1];

  var logIn = function logIn(e) {
    try {
      console.log('caiu no try');
      e.preventDefault();
      setLoadingCredentials(true);
      _services_LoginDataService__WEBPACK_IMPORTED_MODULE_10__["LoginDataService"].logIn(login, password).then(function (response) {
        localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
        setLoadingCredentials(false);
        dispatch(Object(_store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__["showButtonLoginLogoutAction"])(false));
        router.push('/');
        console.log(response);
      });
    } catch (error) {
      console.log('caiu no catch');
      console.error(error);

      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
        status: "warning",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this), "Usu\xE1rio ou senha incorretos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, _this);

      router.push('/');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout_login,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.box_login,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], {
        value: login,
        onChange: function onChange(e) {
          return setLogin(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Senha"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_password__WEBPACK_IMPORTED_MODULE_6__["Password"], {
        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.password,
        value: password,
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        },
        toggleMask: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        label: "Login",
        onClick: logIn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

_s(Login, "WLnHp4h0EiaizF3S4YIcDuNEVMM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsImxvZ0luIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwic2hvd0J1dHRvbkxvZ2luTG9nb3V0QWN0aW9uIiwicHVzaCIsImVycm9yIiwic3R5bGVzIiwibGF5b3V0X2xvZ2luIiwiYm94X2xvZ2luIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7Q0FHQTs7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFFbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSmtCLGtCQU1RQyxzREFBUSxDQUFDLEVBQUQsQ0FOaEI7QUFBQSxNQU1YQyxLQU5XO0FBQUEsTUFNSkMsUUFOSTs7QUFBQSxtQkFPY0Ysc0RBQVEsQ0FBQyxFQUFELENBUHRCO0FBQUEsTUFPWEcsUUFQVztBQUFBLE1BT0RDLFdBUEM7O0FBQUEsbUJBUWtDSixzREFBUSxDQUFDLEtBQUQsQ0FSMUM7QUFBQSxNQVFYSyxrQkFSVztBQUFBLE1BUVNDLHFCQVJUOztBQVVsQixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQU87QUFDakIsUUFBSTtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FGLE9BQUMsQ0FBQ0csY0FBRjtBQUNBTCwyQkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0FNLGtGQUFnQixDQUFDTCxLQUFqQixDQUF1Qk4sS0FBdkIsRUFBOEJFLFFBQTlCLEVBQXdDVSxJQUF4QyxDQUE2QyxVQUFBQyxRQUFRLEVBQUk7QUFDekRDLG9CQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsWUFBWUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQTlEO0FBQ0FaLDZCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQVYsZ0JBQVEsQ0FBQ3VCLGdHQUEyQixDQUFDLEtBQUQsQ0FBNUIsQ0FBUjtBQUNBckIsY0FBTSxDQUFDc0IsSUFBUCxDQUFZLEdBQVo7QUFDQVgsZUFBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFDQyxPQU5EO0FBT0gsS0FYRCxDQVdFLE9BQU9PLEtBQVAsRUFBYztBQUNaWixhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELGFBQU8sQ0FBQ1ksS0FBUixDQUFjQSxLQUFkOztBQUNBO0FBQUEsMkVBQUMsc0RBQUQ7QUFBTyxjQUFNLEVBQUMsU0FBZDtBQUFBLGdDQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBdkIsWUFBTSxDQUFDc0IsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNGLEdBckJIOztBQXVCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUUsK0RBQU0sQ0FBQ0MsWUFBdkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUQsK0RBQU0sQ0FBQ0UsU0FBdkI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBVyxhQUFLLEVBQUV2QixLQUFsQjtBQUF5QixnQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsaUJBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDaUIsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0kscUVBQUMsNERBQUQ7QUFBVSxpQkFBUyxFQUFFSiwrREFBTSxDQUFDbkIsUUFBNUI7QUFBc0MsYUFBSyxFQUFFQSxRQUE3QztBQUF1RCxnQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsaUJBQU9KLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDaUIsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsU0FBakU7QUFBcUcsa0JBQVU7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBT0kscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsT0FBZDtBQUFzQixlQUFPLEVBQUVuQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosRUFRS0Ysa0JBQWtCLGlCQUNmLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBbERRWCxLO1VBRVlHLHVELEVBRUZFLHFEOzs7S0FKVkwsSztBQW9ETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMGE1MTllZDFhOTk0MDExOGQ4NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0cyBhcGlcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vaW1wb3J0cyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuXHJcbi8vaW1wb3J0cyBiaWJsaW90ZWNhc1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAncHJpbWVyZWFjdC9wYXNzd29yZCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAncHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXInO1xyXG5pbXBvcnQge1xyXG4gICAgQWxlcnQsXHJcbiAgICBBbGVydEljb24sXHJcbiAgICBBbGVydFRpdGxlLFxyXG4gICAgQWxlcnREZXNjcmlwdGlvbixcclxuICB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcbi8vaW1wb3J0cyBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBMb2dpbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZSc7XHJcblxyXG4vL2FjdGlvbnNcclxuaW1wb3J0IHsgc2hvd0J1dHRvbkxvZ2luTG9nb3V0QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9sb2dpbl9sb2dvdXQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nQ3JlZGVudGlhbHMsIHNldExvYWRpbmdDcmVkZW50aWFsc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbG9nSW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWl1IG5vIHRyeScpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgICAgICAgICBMb2dpbkRhdGFTZXJ2aWNlLmxvZ0luKGxvZ2luLCBwYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsICdCZWFyZXIgJyArIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzaG93QnV0dG9uTG9naW5Mb2dvdXRBY3Rpb24oZmFsc2UpKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2FpdSBubyBjYXRjaCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgPEFsZXJ0IHN0YXR1cz1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cclxuICAgICAgICAgICAgICAgIFVzdcOhcmlvIG91IHNlbmhhIGluY29ycmV0b3NcclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dF9sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94X2xvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxoNT5Mb2dpbjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IHZhbHVlPXtsb2dpbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg1PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgIDxQYXNzd29yZCBjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZH0gdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gdG9nZ2xlTWFzayAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJMb2dpblwiIG9uQ2xpY2s9e2xvZ0lufSAvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmdDcmVkZW50aWFscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1NwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoTG9naW4pIl0sInNvdXJjZVJvb3QiOiIifQ==