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
    var response = _services_LoginDataService__WEBPACK_IMPORTED_MODULE_10__["LoginDataService"].logIn(login, password);
    e.preventDefault();
    setLoadingCredentials(true);
    localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
    setLoadingCredentials(false);
    dispatch(Object(_store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__["showButtonLoginLogoutAction"])(false));
    router.push('/');
    console.log(response);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout_login,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.box_login,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], {
        value: login,
        onChange: function onChange(e) {
          return setLogin(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Senha"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        label: "Login",
        onClick: logIn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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

/***/ }),

/***/ "./services/LoginDataService.jsx":
/*!***************************************!*\
  !*** ./services/LoginDataService.jsx ***!
  \***************************************/
/*! exports provided: LoginDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataService", function() { return LoginDataService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();



var baseUrl = "http://localhost:8081";
var LoginDataService = {
  logIn: logIn,
  logOut: logOut,
  isLogged: isLogged
};

function logIn(username, password) {
  var data = {
    username: username,
    password: password
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/auth/signin', data, {});
}

function logOut() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  localStorage.removeItem('accessToken');
  router.push('/');
}

_s(logOut, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

function isLogged() {
  if (localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) {
    return true;
  }

  return false;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9Mb2dpbkRhdGFTZXJ2aWNlLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nQ3JlZGVudGlhbHMiLCJzZXRMb2FkaW5nQ3JlZGVudGlhbHMiLCJsb2dJbiIsImUiLCJyZXNwb25zZSIsIkxvZ2luRGF0YVNlcnZpY2UiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwidG9rZW4iLCJzaG93QnV0dG9uTG9naW5Mb2dvdXRBY3Rpb24iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImxheW91dF9sb2dpbiIsImJveF9sb2dpbiIsInRhcmdldCIsInZhbHVlIiwiYmFzZVVybCIsImxvZ091dCIsImlzTG9nZ2VkIiwidXNlcm5hbWUiLCJheGlvcyIsInBvc3QiLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQVFBOztDQUdBOztBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUVsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFKa0Isa0JBTVFDLHNEQUFRLENBQUMsRUFBRCxDQU5oQjtBQUFBLE1BTVhDLEtBTlc7QUFBQSxNQU1KQyxRQU5JOztBQUFBLG1CQU9jRixzREFBUSxDQUFDLEVBQUQsQ0FQ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QjtBQUNBYSxjQUFZLENBQUNtQixVQUFiLENBQXdCLGFBQXhCO0FBQ0FqQyxRQUFNLENBQUNtQixJQUFQLENBQVksR0FBWjtBQUNEOztHQUpRUyxNO1VBQ1EzQixxRDs7O0FBS2pCLFNBQVM0QixRQUFULEdBQW9CO0FBQ2xCLE1BQUdmLFlBQVksQ0FBQ29CLE9BQWIsQ0FBcUIsYUFBckIsTUFBd0MsSUFBeEMsSUFBZ0RwQixZQUFZLENBQUNvQixPQUFiLENBQXFCLGFBQXJCLE1BQXdDQyxTQUEzRixFQUFxRztBQUNuRyxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi41Y2U5OGI3ZGVlOWFiY2I2MGQ5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRzIGFwaVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuLy9pbXBvcnRzIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5cclxuLy9pbXBvcnRzIGJpYmxpb3RlY2FzXHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tICdwcmltZXJlYWN0L3Bhc3N3b3JkJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc1NwaW5uZXIgfSBmcm9tICdwcmltZXJlYWN0L3Byb2dyZXNzc3Bpbm5lcic7XHJcbmltcG9ydCB7XHJcbiAgICBBbGVydCxcclxuICAgIEFsZXJ0SWNvbixcclxuICAgIEFsZXJ0VGl0bGUsXHJcbiAgICBBbGVydERlc2NyaXB0aW9uLFxyXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuLy9pbXBvcnRzIHNlcnZpY2VzXHJcbmltcG9ydCB7IExvZ2luRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dpbkRhdGFTZXJ2aWNlJztcclxuXHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyBzaG93QnV0dG9uTG9naW5Mb2dvdXRBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2xvZ2luX2xvZ291dCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvYWRpbmdDcmVkZW50aWFscywgc2V0TG9hZGluZ0NyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBsb2dJbiA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBMb2dpbkRhdGFTZXJ2aWNlLmxvZ0luKGxvZ2luLCBwYXNzd29yZCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsICdCZWFyZXIgJyArIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyhmYWxzZSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2hvd0J1dHRvbkxvZ2luTG9nb3V0QWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0X2xvZ2lufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hfbG9naW59PlxyXG4gICAgICAgICAgICAgICAgPGg1PkxvZ2luPC9oNT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgdmFsdWU9e2xvZ2lufSBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDU+U2VuaGE8L2g1PlxyXG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkIGNsYXNzTmFtZT17c3R5bGVzLnBhc3N3b3JkfSB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSB0b2dnbGVNYXNrIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkxvZ2luXCIgb25DbGljaz17bG9nSW59IC8+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZ0NyZWRlbnRpYWxzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzU3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdChMb2dpbikiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgYmFzZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODFgO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luRGF0YVNlcnZpY2UgPSB7XHJcbiAgICBsb2dJbixcclxuICAgIGxvZ091dCxcclxuICAgIGlzTG9nZ2VkLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ0luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHt1c2VybmFtZSwgcGFzc3dvcmR9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChiYXNlVXJsKycvYXV0aC9zaWduaW4nLCBkYXRhLCB7fSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ091dCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc0xvZ2dlZCgpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpICE9PSBudWxsICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==