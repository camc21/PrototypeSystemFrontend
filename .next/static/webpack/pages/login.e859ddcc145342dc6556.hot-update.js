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
    e.preventDefault();
    setLoadingCredentials(true);
    _services_LoginDataService__WEBPACK_IMPORTED_MODULE_10__["LoginDataService"].logIn(login, password).then(function (response) {
      localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
      setLoadingCredentials(false);
      dispatch(Object(_store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__["showButtonLoginLogoutAction"])(false));
      router.push('/');
      console.log(response);
    }, function (error) {
      console.error(error);

      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
        status: "warning",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this), "Usu\xE1rio ou senha incorretos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout_login,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.box_login,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], {
        value: login,
        onChange: function onChange(e) {
          return setLogin(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Senha"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        label: "Login",
        onClick: logIn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsImxvZ0luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiTG9naW5EYXRhU2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwidG9rZW4iLCJzaG93QnV0dG9uTG9naW5Mb2dvdXRBY3Rpb24iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3R5bGVzIiwibGF5b3V0X2xvZ2luIiwiYm94X2xvZ2luIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7Q0FHQTs7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFFbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSmtCLGtCQU1RQyxzREFBUSxDQUFDLEVBQUQsQ0FOaEI7QUFBQSxNQU1YQyxLQU5XO0FBQUEsTUFNSkMsUUFOSTs7QUFBQSxtQkFPY0Ysc0RBQVEsQ0FBQyxFQUFELENBUHRCO0FBQUEsTUFPWEcsUUFQVztBQUFBLE1BT0RDLFdBUEM7O0FBQUEsbUJBUWtDSixzREFBUSxDQUFDLEtBQUQsQ0FSMUM7QUFBQSxNQVFYSyxrQkFSVztBQUFBLE1BUVNDLHFCQVJUOztBQVVsQixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQU87QUFDakJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSCx5QkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0FJLGdGQUFnQixDQUFDSCxLQUFqQixDQUF1Qk4sS0FBdkIsRUFBOEJFLFFBQTlCLEVBQXdDUSxJQUF4QyxDQUE2QyxVQUFBQyxRQUFRLEVBQUk7QUFDekRDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsWUFBWUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQTlEO0FBQ0FWLDJCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQVYsY0FBUSxDQUFDcUIsZ0dBQTJCLENBQUMsS0FBRCxDQUE1QixDQUFSO0FBQ0FuQixZQUFNLENBQUNvQixJQUFQLENBQVksR0FBWjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUNDLEtBTkQsRUFNRyxVQUFDUyxLQUFELEVBQVc7QUFDVkYsYUFBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQ7O0FBQ0E7QUFBQSwyRUFBQyxzREFBRDtBQUFPLGNBQU0sRUFBQyxTQUFkO0FBQUEsZ0NBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJSCxLQVpEO0FBYUQsR0FoQkg7O0FBa0JBLHNCQUNJO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxZQUF2QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFRCwrREFBTSxDQUFDRSxTQUF2QjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyw4REFBRDtBQUFXLGFBQUssRUFBRXZCLEtBQWxCO0FBQXlCLGdCQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxpQkFBT04sUUFBUSxDQUFDTSxDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFLSSxxRUFBQyw0REFBRDtBQUFVLGlCQUFTLEVBQUVKLCtEQUFNLENBQUNuQixRQUE1QjtBQUFzQyxhQUFLLEVBQUVBLFFBQTdDO0FBQXVELGdCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxpQkFBT0osV0FBVyxDQUFDSSxDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxTQUFqRTtBQUFxRyxrQkFBVTtBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFPSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxPQUFkO0FBQXNCLGVBQU8sRUFBRW5CO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixFQVFLRixrQkFBa0IsaUJBQ2YscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0E3Q1FYLEs7VUFFWUcsdUQsRUFFRkUscUQ7OztLQUpWTCxLO0FBK0NNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lODU5ZGRjYzE0NTM0MmRjNjU1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRzIGFwaVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuLy9pbXBvcnRzIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5cclxuLy9pbXBvcnRzIGJpYmxpb3RlY2FzXHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tICdwcmltZXJlYWN0L3Bhc3N3b3JkJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc1NwaW5uZXIgfSBmcm9tICdwcmltZXJlYWN0L3Byb2dyZXNzc3Bpbm5lcic7XHJcbmltcG9ydCB7XHJcbiAgICBBbGVydCxcclxuICAgIEFsZXJ0SWNvbixcclxuICAgIEFsZXJ0VGl0bGUsXHJcbiAgICBBbGVydERlc2NyaXB0aW9uLFxyXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuLy9pbXBvcnRzIHNlcnZpY2VzXHJcbmltcG9ydCB7IExvZ2luRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dpbkRhdGFTZXJ2aWNlJztcclxuXHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyBzaG93QnV0dG9uTG9naW5Mb2dvdXRBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2xvZ2luX2xvZ291dCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvYWRpbmdDcmVkZW50aWFscywgc2V0TG9hZGluZ0NyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBsb2dJbiA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgICAgIExvZ2luRGF0YVNlcnZpY2UubG9nSW4obG9naW4sIHBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCAnQmVhcmVyICcgKyByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNob3dCdXR0b25Mb2dpbkxvZ291dEFjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIDxBbGVydCBzdGF0dXM9XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICBVc3XDoXJpbyBvdSBzZW5oYSBpbmNvcnJldG9zXHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dF9sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94X2xvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxoNT5Mb2dpbjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IHZhbHVlPXtsb2dpbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg1PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgIDxQYXNzd29yZCBjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZH0gdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gdG9nZ2xlTWFzayAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJMb2dpblwiIG9uQ2xpY2s9e2xvZ0lufSAvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmdDcmVkZW50aWFscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1NwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoTG9naW4pIl0sInNvdXJjZVJvb3QiOiIifQ==