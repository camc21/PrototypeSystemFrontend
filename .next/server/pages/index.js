module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/login */ "./pages/login/index.jsx");


var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\index.js";



const Index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_login__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/login/index.jsx":
/*!*******************************!*\
  !*** ./pages/login/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/inputtext */ "primereact/inputtext");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/password */ "primereact/password");
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_password__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/button */ "primereact/button");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/progressspinner */ "primereact/progressspinner");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_LoginDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/LoginDataService */ "./services/LoginDataService.jsx");

var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\login\\index.jsx";
//imports api

 //imports styles

 //imports bibliotecas




 //services


function Login(props) {
  const baseUrl = `http://localhost:3000`;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: loadingCredentials,
    1: setLoadingCredentials
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function logIn() {
    setLoadingCredentials(true);
    _services_LoginDataService__WEBPACK_IMPORTED_MODULE_8__["LoginDataService"].logIn(login, password).then(response => {
      localStorage.setItem('token', 'Bearer ' + response.data.token);
      setLoadingCredentials(false);
      router.push(baseUrl + '/anime');
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout_login,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.box_login,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], {
        value: login,
        onChange: e => setLogin(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Senha"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_password__WEBPACK_IMPORTED_MODULE_5__["Password"], {
        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.password,
        value: password,
        onChange: e => setPassword(e.target.value),
        toggleMask: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        label: "Login",
        onClick: () => logIn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_7__["ProgressSpinner"], {
        style: {
          width: '50px',
          height: '50px'
        },
        strokeWidth: "8",
        fill: "#EEEEEE",
        animationDuration: ".5s"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./services/LoginDataService.jsx":
/*!***************************************!*\
  !*** ./services/LoginDataService.jsx ***!
  \***************************************/
/*! exports provided: LoginDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataService", function() { return LoginDataService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const baseUrl = `http://localhost:8081`;
const LoginDataService = {
  logIn,
  logOut,
  isLogged
};

function logIn(username, password) {
  let data = {
    username,
    password
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/auth/signin', data, {});
}

function logOut() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  localStorage.removeItem('token');
  router.push('/');
}

function isLogged() {
  const user = localStorage.getItem('token');

  if (user) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./styles/login.module.css":
/*!*********************************!*\
  !*** ./styles/login.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout_login": "login_layout_login__1AqEy",
	"box_login": "login_box_login__1-5UR",
	"password": "login_password__1ZMI1"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "primereact/button":
/*!************************************!*\
  !*** external "primereact/button" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primereact/button");

/***/ }),

/***/ "primereact/inputtext":
/*!***************************************!*\
  !*** external "primereact/inputtext" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primereact/inputtext");

/***/ }),

/***/ "primereact/password":
/*!**************************************!*\
  !*** external "primereact/password" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primereact/password");

/***/ }),

/***/ "primereact/progressspinner":
/*!*********************************************!*\
  !*** external "primereact/progressspinner" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primereact/progressspinner");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NlcnZpY2VzL0xvZ2luRGF0YVNlcnZpY2UuanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvaW5wdXR0ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVyZWFjdC9wYXNzd29yZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvcHJvZ3Jlc3NzcGlubmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbmRleCIsIkxvZ2luIiwicHJvcHMiLCJiYXNlVXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJzZXRMb2dpbiIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsImxvZ0luIiwiTG9naW5EYXRhU2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwidG9rZW4iLCJwdXNoIiwic3R5bGVzIiwibGF5b3V0X2xvZ2luIiwiYm94X2xvZ2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJsb2dPdXQiLCJpc0xvZ2dlZCIsInVz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LENBQXdCLE9BQXhCO0FBQ0EvQixRQUFNLENBQUNpQixJQUFQLENBQVksR0FBWjtBQUNEOztBQUVELFNBQVNVLFFBQVQsR0FBbUI7QUFDakIsUUFBTUssSUFBSSxHQUFHbkIsWUFBWSxDQUFDb0IsT0FBYixDQUFxQixPQUFyQixDQUFiOztBQUNBLE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDNUJIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vcGFnZXMvbG9naW4nXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TG9naW4gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCIvL2ltcG9ydHMgYXBpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vaW1wb3J0cyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuXHJcbi8vaW1wb3J0cyBiaWJsaW90ZWNhc1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAncHJpbWVyZWFjdC9wYXNzd29yZCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAncHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXInO1xyXG5cclxuLy9zZXJ2aWNlc1xyXG5pbXBvcnQgeyBMb2dpbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBiYXNlVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMGA7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvYWRpbmdDcmVkZW50aWFscywgc2V0TG9hZGluZ0NyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2dJbigpe1xyXG4gICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyh0cnVlKTtcclxuICAgICAgICBMb2dpbkRhdGFTZXJ2aWNlLmxvZ0luKGxvZ2luLCBwYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsJ0JlYXJlciAnICsgcmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGJhc2VVcmwrJy9hbmltZScpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRfbG9naW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8aDU+TG9naW48L2g1PlxyXG4gICAgICAgICAgICAgICAgPElucHV0VGV4dCB2YWx1ZT17bG9naW59IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW4oZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoNT5TZW5oYTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8UGFzc3dvcmQgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHRvZ2dsZU1hc2sgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiTG9naW5cIiBvbkNsaWNrPXsoKSA9PiBsb2dJbigpfSAvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmdDcmVkZW50aWFscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1NwaW5uZXIgc3R5bGU9e3t3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICc1MHB4J319IHN0cm9rZVdpZHRoPVwiOFwiIGZpbGw9XCIjRUVFRUVFXCIgYW5pbWF0aW9uRHVyYXRpb249XCIuNXNcIi8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgYmFzZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODFgO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luRGF0YVNlcnZpY2UgPSB7XHJcbiAgICBsb2dJbixcclxuICAgIGxvZ091dCxcclxuICAgIGlzTG9nZ2VkLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ0luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHt1c2VybmFtZSwgcGFzc3dvcmR9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChiYXNlVXJsKycvYXV0aC9zaWduaW4nLCBkYXRhLCB7fSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ091dCgpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzTG9nZ2VkKCl7XHJcbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dF9sb2dpblwiOiBcImxvZ2luX2xheW91dF9sb2dpbl9fMUFxRXlcIixcblx0XCJib3hfbG9naW5cIjogXCJsb2dpbl9ib3hfbG9naW5fXzEtNVVSXCIsXG5cdFwicGFzc3dvcmRcIjogXCJsb2dpbl9wYXNzd29yZF9fMVpNSTFcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvaW5wdXR0ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvcGFzc3dvcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=