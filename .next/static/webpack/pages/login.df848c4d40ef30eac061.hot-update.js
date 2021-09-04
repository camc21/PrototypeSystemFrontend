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
      if (response.data === "UNAUTHORIZED") {
        router.push('/');

        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
          status: "warning",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["AlertIcon"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, _this), "Usu\xE1rio ou senha incorretos"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this);
      } else {
        localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
        setLoadingCredentials(false);
        dispatch(Object(_store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__["showButtonLoginLogoutAction"])(false));
        router.push('/');
        console.log(response);
      }
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
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], {
        value: login,
        onChange: function onChange(e) {
          return setLogin(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Senha"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        label: "Login",
        onClick: logIn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsImxvZ0luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiTG9naW5EYXRhU2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwic2hvd0J1dHRvbkxvZ2luTG9nb3V0QWN0aW9uIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImxheW91dF9sb2dpbiIsImJveF9sb2dpbiIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBUUE7O0NBR0E7O0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBRWxCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUprQixrQkFNUUMsc0RBQVEsQ0FBQyxFQUFELENBTmhCO0FBQUEsTUFNWEMsS0FOVztBQUFBLE1BTUpDLFFBTkk7O0FBQUEsbUJBT2NGLHNEQUFRLENBQUMsRUFBRCxDQVB0QjtBQUFBLE1BT1hHLFFBUFc7QUFBQSxNQU9EQyxXQVBDOztBQUFBLG1CQVFrQ0osc0RBQVEsQ0FBQyxLQUFELENBUjFDO0FBQUEsTUFRWEssa0JBUlc7QUFBQSxNQVFTQyxxQkFSVDs7QUFVbEIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUgseUJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNBSSxnRkFBZ0IsQ0FBQ0gsS0FBakIsQ0FBdUJOLEtBQXZCLEVBQThCRSxRQUE5QixFQUF3Q1EsSUFBeEMsQ0FBNkMsVUFBQUMsUUFBUSxFQUFJO0FBQ3JELFVBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxLQUFrQixjQUFyQixFQUFvQztBQUNoQ2YsY0FBTSxDQUFDZ0IsSUFBUCxDQUFZLEdBQVo7O0FBQ0E7QUFBQSw2RUFBQyxzREFBRDtBQUFPLGdCQUFNLEVBQUMsU0FBZDtBQUFBLGtDQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUgsT0FORCxNQU1PO0FBQ0hDLG9CQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsWUFBWUosUUFBUSxDQUFDQyxJQUFULENBQWNJLEtBQTlEO0FBQ0FYLDZCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQVYsZ0JBQVEsQ0FBQ3NCLGdHQUEyQixDQUFDLEtBQUQsQ0FBNUIsQ0FBUjtBQUNBcEIsY0FBTSxDQUFDZ0IsSUFBUCxDQUFZLEdBQVo7QUFDQUssZUFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFDSDtBQUNKLEtBZEQ7QUFlRCxHQWxCSDs7QUFvQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVTLCtEQUFNLENBQUNDLFlBQXZCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVELCtEQUFNLENBQUNFLFNBQXZCO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLDhEQUFEO0FBQVcsYUFBSyxFQUFFdEIsS0FBbEI7QUFBeUIsZ0JBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLGlCQUFPTixRQUFRLENBQUNNLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJLHFFQUFDLDREQUFEO0FBQVUsaUJBQVMsRUFBRUosK0RBQU0sQ0FBQ2xCLFFBQTVCO0FBQXNDLGFBQUssRUFBRUEsUUFBN0M7QUFBdUQsZ0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLGlCQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLFNBQWpFO0FBQXFHLGtCQUFVO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU9JLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBc0IsZUFBTyxFQUFFbEI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLEVBUUtGLGtCQUFrQixpQkFDZixxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztHQS9DUVgsSztVQUVZRyx1RCxFQUVGRSxxRDs7O0tBSlZMLEs7QUFpRE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmRmODQ4YzRkNDBlZjMwZWFjMDYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydHMgYXBpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG4vL2ltcG9ydHMgc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnXHJcblxyXG4vL2ltcG9ydHMgYmlibGlvdGVjYXNcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJ3ByaW1lcmVhY3QvcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lciB9IGZyb20gJ3ByaW1lcmVhY3QvcHJvZ3Jlc3NzcGlubmVyJztcclxuaW1wb3J0IHtcclxuICAgIEFsZXJ0LFxyXG4gICAgQWxlcnRJY29uLFxyXG4gICAgQWxlcnRUaXRsZSxcclxuICAgIEFsZXJ0RGVzY3JpcHRpb24sXHJcbiAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG4vL2ltcG9ydHMgc2VydmljZXNcclxuaW1wb3J0IHsgTG9naW5EYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0xvZ2luRGF0YVNlcnZpY2UnO1xyXG5cclxuLy9hY3Rpb25zXHJcbmltcG9ydCB7IHNob3dCdXR0b25Mb2dpbkxvZ291dEFjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbG9naW5fbG9nb3V0JztcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9hZGluZ0NyZWRlbnRpYWxzLCBzZXRMb2FkaW5nQ3JlZGVudGlhbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGxvZ0luID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHModHJ1ZSk7XHJcbiAgICAgICAgTG9naW5EYXRhU2VydmljZS5sb2dJbihsb2dpbiwgcGFzc3dvcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhID09PSBcIlVOQVVUSE9SSVpFRFwiKXtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgc3RhdHVzPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICBVc3XDoXJpbyBvdSBzZW5oYSBpbmNvcnJldG9zXHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgJ0JlYXJlciAnICsgcmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2hvd0J1dHRvbkxvZ2luTG9nb3V0QWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRfbG9naW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8aDU+TG9naW48L2g1PlxyXG4gICAgICAgICAgICAgICAgPElucHV0VGV4dCB2YWx1ZT17bG9naW59IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW4oZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoNT5TZW5oYTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8UGFzc3dvcmQgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHRvZ2dsZU1hc2sgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiTG9naW5cIiBvbkNsaWNrPXtsb2dJbn0gLz5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nQ3JlZGVudGlhbHMgJiZcclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KExvZ2luKSJdLCJzb3VyY2VSb290IjoiIn0=