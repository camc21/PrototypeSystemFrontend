webpackHotUpdate_N_E("pages/anime",{

/***/ "./node_modules/primereact/fieldset/fieldset.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/primereact/fieldset/fieldset.esm.js ***!
  \**********************************************************/
/*! exports provided: Fieldset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/core */ "./node_modules/primereact/core/core.esm.js");



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Fieldset = /*#__PURE__*/function (_Component) {
  _inherits(Fieldset, _Component);

  var _super = _createSuper(Fieldset);

  function Fieldset(props) {
    var _this;

    _classCallCheck(this, Fieldset);

    _this = _super.call(this, props);
    var state = {
      id: props.id
    };

    if (!_this.props.onToggle) {
      state = _objectSpread(_objectSpread({}, state), {}, {
        collapsed: props.collapsed
      });
    }

    _this.state = state;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.contentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Fieldset, [{
    key: "toggle",
    value: function toggle(event) {
      if (this.props.toggleable) {
        var collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;
        if (collapsed) this.expand(event);else this.collapse(event);

        if (this.props.onToggle) {
          this.props.onToggle({
            originalEvent: event,
            value: !collapsed
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "expand",
    value: function expand(event) {
      if (!this.props.onToggle) {
        this.setState({
          collapsed: false
        });
      }

      if (this.props.onExpand) {
        this.props.onExpand(event);
      }
    }
  }, {
    key: "collapse",
    value: function collapse(event) {
      if (!this.props.onToggle) {
        this.setState({
          collapsed: true
        });
      }

      if (this.props.onCollapse) {
        this.props.onCollapse(event);
      }
    }
  }, {
    key: "isCollapsed",
    value: function isCollapsed() {
      return this.props.toggleable ? this.props.onToggle ? this.props.collapsed : this.state.collapsed : false;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.id) {
        this.setState({
          id: Object(primereact_core__WEBPACK_IMPORTED_MODULE_1__["UniqueComponentId"])()
        });
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(collapsed) {
      var id = this.state.id + '_content';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_core__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
        nodeRef: this.contentRef,
        classNames: "p-toggleable-content",
        timeout: {
          enter: 1000,
          exit: 450
        },
        in: !collapsed,
        unmountOnExit: true,
        options: this.props.transitionOptions
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.contentRef,
        id: id,
        className: "p-toggleable-content",
        "aria-hidden": collapsed,
        role: "region",
        "aria-labelledby": this.state.id + '_header'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-fieldset-content"
      }, this.props.children)));
    }
  }, {
    key: "renderToggleIcon",
    value: function renderToggleIcon(collapsed) {
      if (this.props.toggleable) {
        var className = Object(primereact_core__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-fieldset-toggler pi', {
          'pi-plus': collapsed,
          'pi-minus': !collapsed
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: className
        });
      }

      return null;
    }
  }, {
    key: "renderLegendContent",
    value: function renderLegendContent(collapsed) {
      if (this.props.toggleable) {
        var toggleIcon = this.renderToggleIcon(collapsed);
        var ariaControls = this.state.id + '_content';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: '#' + ariaControls,
          "aria-controls": ariaControls,
          id: this.state.id + '_header',
          "aria-expanded": !collapsed,
          tabIndex: this.props.toggleable ? null : -1
        }, toggleIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "p-fieldset-legend-text"
        }, this.props.legend), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_core__WEBPACK_IMPORTED_MODULE_1__["Ripple"], null));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-fieldset-legend-text",
        id: this.state.id + '_header'
      }, this.props.legend);
    }
  }, {
    key: "renderLegend",
    value: function renderLegend(collapsed) {
      var legendContent = this.renderLegendContent(collapsed);

      if (this.props.legend != null || this.props.toggleable) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", {
          className: "p-fieldset-legend p-unselectable-text",
          onClick: this.toggle
        }, legendContent);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = Object(primereact_core__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-fieldset p-component', this.props.className, {
        'p-fieldset-toggleable': this.props.toggleable
      });
      var collapsed = this.isCollapsed();
      var legend = this.renderLegend(collapsed);
      var content = this.renderContent(collapsed);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
        id: this.props.id,
        className: className,
        style: this.props.style,
        onClick: this.props.onClick
      }, legend, content);
    }
  }]);

  return Fieldset;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Fieldset, "defaultProps", {
  id: null,
  legend: null,
  className: null,
  style: null,
  toggleable: null,
  collapsed: null,
  transitionOptions: null,
  onExpand: null,
  onCollapse: null,
  onToggle: null,
  onClick: null
});




/***/ }),

/***/ "./pages/anime/index.jsx":
/*!*******************************!*\
  !*** ./pages/anime/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anime; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AnimeDataService */ "./services/AnimeDataService.jsx");



var _jsxFileName = "C:\\PROJETOS\\TESTE\\FRONTEND\\primereact-nextjs-quickstart\\pages\\anime\\index.jsx",
    _s = $RefreshSig$();







function Anime(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listaAnimes = _useState[0],
      setListaAnimes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      animeSelecionado = _useState2[0],
      setAnimeSelecionado = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    listarAnimes();
  }, []);

  function listarAnimes() {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_6__["AnimeDataService"].listarAnimes().then(function (response) {
      console.log(response.data);
      setListaAnimes(response.data);
    });
  }

  function listarAnimesPorId(idAnime) {
    _services_AnimeDataService__WEBPACK_IMPORTED_MODULE_6__["AnimeDataService"].listarAnimesPorId(idAnime).then(function (response) {
      console.log(response.data);
      setAnimeSelecionado(response.data);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_5__["Fieldset"], {
      legend: "Anime",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        label: "carregar lista",
        onClick: function onClick() {
          return listarAnimes();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        label: "carregar por id",
        onClick: function onClick() {
          return listarAnimesPorId(1);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTable"], {
          value: listaAnimes,
          selectionMode: "single",
          selection: animeSelecionado,
          onSelectionChange: function onSelectionChange(e) {
            setAnimeSelecionado(e.value), console.log(e.value);
          },
          dataKey: "idAnime",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "nome",
            header: "Nome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "temporada",
            header: "Temporada"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
            field: "possuiManga",
            header: "Possui mang\xE1 ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Anime, "6kuHj60tMiffsJCWAjY4Vd4q8bg=");

_c = Anime;

var _c;

$RefreshReg$(_c, "Anime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaW1lcmVhY3QvZmllbGRzZXQvZmllbGRzZXQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hbmltZS9pbmRleC5qc3giXSwibmFtZXMiOlsiQW5pbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwibGlzdGFBbmltZXMiLCJzZXRMaXN0YUFuaW1lcyIsImFuaW1lU2VsZWNpb25hZG8iLCJzZXRBbmltZVNlbGVjaW9uYWRvIiwidXNlRWZmZWN0IiwibGlzdGFyQW5pbWVzIiwiQW5pbWVEYXRhU2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibGlzdGFyQW5pbWVzUG9ySWQiLCJpZEFuaW1lIiwiZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUM4Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7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QUMsV0FBZjtBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksZUFBSyxFQUFFWixXQURYO0FBRUksdUJBQWEsRUFBQyxRQUZsQjtBQUdJLG1CQUFTLEVBQUVFLGdCQUhmO0FBSUksMkJBQWlCLEVBQUUsMkJBQUFZLENBQUMsRUFBSTtBQUFDWCwrQkFBbUIsQ0FBQ1csQ0FBQyxDQUFDQyxLQUFILENBQW5CLEVBQThCTixPQUFPLENBQUNDLEdBQVIsQ0FBWUksQ0FBQyxDQUFDQyxLQUFkLENBQTlCO0FBQW1ELFdBSmhGO0FBS0ksaUJBQU8sRUFBQyxTQUxaO0FBQUEsa0NBTUkscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLE1BQWQ7QUFBcUIsa0JBQU0sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBT0kscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLFdBQWQ7QUFBMEIsa0JBQU0sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBUUkscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLGFBQWQ7QUFBNEIsa0JBQU0sRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXNCSDs7R0E5Q3VCbEIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbmltZS5iMjQ1MjI0MjRkNWVjYzA1MmFkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVuaXF1ZUNvbXBvbmVudElkLCBDU1NUcmFuc2l0aW9uLCBjbGFzc05hbWVzLCBSaXBwbGUgfSBmcm9tICdwcmltZXJlYWN0L2NvcmUnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIEZpZWxkc2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWVsZHNldCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihGaWVsZHNldCk7XG5cbiAgZnVuY3Rpb24gRmllbGRzZXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGRzZXQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgaWQ6IHByb3BzLmlkXG4gICAgfTtcblxuICAgIGlmICghX3RoaXMucHJvcHMub25Ub2dnbGUpIHtcbiAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgICAgIGNvbGxhcHNlZDogcHJvcHMuY29sbGFwc2VkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5jb250ZW50UmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaWVsZHNldCwgW3tcbiAgICBrZXk6IFwidG9nZ2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudG9nZ2xlYWJsZSkge1xuICAgICAgICB2YXIgY29sbGFwc2VkID0gdGhpcy5wcm9wcy5vblRvZ2dsZSA/IHRoaXMucHJvcHMuY29sbGFwc2VkIDogdGhpcy5zdGF0ZS5jb2xsYXBzZWQ7XG4gICAgICAgIGlmIChjb2xsYXBzZWQpIHRoaXMuZXhwYW5kKGV2ZW50KTtlbHNlIHRoaXMuY29sbGFwc2UoZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uVG9nZ2xlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZSh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHZhbHVlOiAhY29sbGFwc2VkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXhwYW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cGFuZChldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uVG9nZ2xlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRXhwYW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25FeHBhbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb2xsYXBzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xsYXBzZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uVG9nZ2xlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db2xsYXBzZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29sbGFwc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbGxhcHNlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZWFibGUgPyB0aGlzLnByb3BzLm9uVG9nZ2xlID8gdGhpcy5wcm9wcy5jb2xsYXBzZWQgOiB0aGlzLnN0YXRlLmNvbGxhcHNlZCA6IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5pZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpZDogVW5pcXVlQ29tcG9uZW50SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ29udGVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDb250ZW50KGNvbGxhcHNlZCkge1xuICAgICAgdmFyIGlkID0gdGhpcy5zdGF0ZS5pZCArICdfY29udGVudCc7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTVHJhbnNpdGlvbiwge1xuICAgICAgICBub2RlUmVmOiB0aGlzLmNvbnRlbnRSZWYsXG4gICAgICAgIGNsYXNzTmFtZXM6IFwicC10b2dnbGVhYmxlLWNvbnRlbnRcIixcbiAgICAgICAgdGltZW91dDoge1xuICAgICAgICAgIGVudGVyOiAxMDAwLFxuICAgICAgICAgIGV4aXQ6IDQ1MFxuICAgICAgICB9LFxuICAgICAgICBpbjogIWNvbGxhcHNlZCxcbiAgICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5wcm9wcy50cmFuc2l0aW9uT3B0aW9uc1xuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuY29udGVudFJlZixcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBjbGFzc05hbWU6IFwicC10b2dnbGVhYmxlLWNvbnRlbnRcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBjb2xsYXBzZWQsXG4gICAgICAgIHJvbGU6IFwicmVnaW9uXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRoaXMuc3RhdGUuaWQgKyAnX2hlYWRlcidcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInAtZmllbGRzZXQtY29udGVudFwiXG4gICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJUb2dnbGVJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRvZ2dsZUljb24oY29sbGFwc2VkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50b2dnbGVhYmxlKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLWZpZWxkc2V0LXRvZ2dsZXIgcGknLCB7XG4gICAgICAgICAgJ3BpLXBsdXMnOiBjb2xsYXBzZWQsXG4gICAgICAgICAgJ3BpLW1pbnVzJzogIWNvbGxhcHNlZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMZWdlbmRDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxlZ2VuZENvbnRlbnQoY29sbGFwc2VkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50b2dnbGVhYmxlKSB7XG4gICAgICAgIHZhciB0b2dnbGVJY29uID0gdGhpcy5yZW5kZXJUb2dnbGVJY29uKGNvbGxhcHNlZCk7XG4gICAgICAgIHZhciBhcmlhQ29udHJvbHMgPSB0aGlzLnN0YXRlLmlkICsgJ19jb250ZW50JztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgICAgaHJlZjogJyMnICsgYXJpYUNvbnRyb2xzLFxuICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMsXG4gICAgICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQgKyAnX2hlYWRlcicsXG4gICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6ICFjb2xsYXBzZWQsXG4gICAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudG9nZ2xlYWJsZSA/IG51bGwgOiAtMVxuICAgICAgICB9LCB0b2dnbGVJY29uLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWZpZWxkc2V0LWxlZ2VuZC10ZXh0XCJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5sZWdlbmQpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSaXBwbGUsIG51bGwpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWZpZWxkc2V0LWxlZ2VuZC10ZXh0XCIsXG4gICAgICAgIGlkOiB0aGlzLnN0YXRlLmlkICsgJ19oZWFkZXInXG4gICAgICB9LCB0aGlzLnByb3BzLmxlZ2VuZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxlZ2VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMZWdlbmQoY29sbGFwc2VkKSB7XG4gICAgICB2YXIgbGVnZW5kQ29udGVudCA9IHRoaXMucmVuZGVyTGVnZW5kQ29udGVudChjb2xsYXBzZWQpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5sZWdlbmQgIT0gbnVsbCB8fCB0aGlzLnByb3BzLnRvZ2dsZWFibGUpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1maWVsZHNldC1sZWdlbmQgcC11bnNlbGVjdGFibGUtdGV4dFwiLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMudG9nZ2xlXG4gICAgICAgIH0sIGxlZ2VuZENvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtZmllbGRzZXQgcC1jb21wb25lbnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwge1xuICAgICAgICAncC1maWVsZHNldC10b2dnbGVhYmxlJzogdGhpcy5wcm9wcy50b2dnbGVhYmxlXG4gICAgICB9KTtcbiAgICAgIHZhciBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgICB2YXIgbGVnZW5kID0gdGhpcy5yZW5kZXJMZWdlbmQoY29sbGFwc2VkKTtcbiAgICAgIHZhciBjb250ZW50ID0gdGhpcy5yZW5kZXJDb250ZW50KGNvbGxhcHNlZCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiLCB7XG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGlja1xuICAgICAgfSwgbGVnZW5kLCBjb250ZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmllbGRzZXQ7XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShGaWVsZHNldCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBpZDogbnVsbCxcbiAgbGVnZW5kOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIHN0eWxlOiBudWxsLFxuICB0b2dnbGVhYmxlOiBudWxsLFxuICBjb2xsYXBzZWQ6IG51bGwsXG4gIHRyYW5zaXRpb25PcHRpb25zOiBudWxsLFxuICBvbkV4cGFuZDogbnVsbCxcbiAgb25Db2xsYXBzZTogbnVsbCxcbiAgb25Ub2dnbGU6IG51bGwsXG4gIG9uQ2xpY2s6IG51bGxcbn0pO1xuXG5leHBvcnQgeyBGaWVsZHNldCB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gJ3ByaW1lcmVhY3QvZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncHJpbWVyZWFjdC9jb2x1bW4nO1xyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gJ3ByaW1lcmVhY3QvZmllbGRzZXQnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FuaW1lRGF0YVNlcnZpY2UnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1lKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2xpc3RhQW5pbWVzLCBzZXRMaXN0YUFuaW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYW5pbWVTZWxlY2lvbmFkbywgc2V0QW5pbWVTZWxlY2lvbmFkb10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGlzdGFyQW5pbWVzKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0YXJBbmltZXMoKXtcclxuICAgICAgICBBbmltZURhdGFTZXJ2aWNlLmxpc3RhckFuaW1lcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0TGlzdGFBbmltZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0YXJBbmltZXNQb3JJZChpZEFuaW1lKXtcclxuICAgICAgICBBbmltZURhdGFTZXJ2aWNlLmxpc3RhckFuaW1lc1BvcklkKGlkQW5pbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0QW5pbWVTZWxlY2lvbmFkbyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgbGVnZW5kPVwiQW5pbWVcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJjYXJyZWdhciBsaXN0YVwiIG9uQ2xpY2s9eygpID0+IGxpc3RhckFuaW1lcygpfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cImNhcnJlZ2FyIHBvciBpZFwiIG9uQ2xpY2s9eygpID0+IGxpc3RhckFuaW1lc1BvcklkKDEpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaXN0YUFuaW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17YW5pbWVTZWxlY2lvbmFkb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2UgPT4ge3NldEFuaW1lU2VsZWNpb25hZG8oZS52YWx1ZSksIGNvbnNvbGUubG9nKGUudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkQW5pbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5vbWVcIiBoZWFkZXI9XCJOb21lXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0ZW1wb3JhZGFcIiBoZWFkZXI9XCJUZW1wb3JhZGFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cInBvc3N1aU1hbmdhXCIgaGVhZGVyPVwiUG9zc3VpIG1hbmfDoSA/XCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=