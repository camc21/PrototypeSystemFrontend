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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/reactstrap/dist/reactstrap.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/reactstrap/dist/reactstrap.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");
var classNames = __webpack_require__(/*! classnames */ "classnames");
var reactPopper = __webpack_require__(/*! react-popper */ "react-popper");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "react-transition-group");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    return propType.apply(void 0, [props, propName, componentName].concat([].slice.call(arguments, 3)));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func, DOMElement, PropTypes__default["default"].shape({
  current: PropTypes__default["default"].any
})]);
var tagPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
}), PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300 // $offcanvas-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var utils = {
  __proto__: null,
  getScrollbarWidth: getScrollbarWidth,
  setScrollbarWidth: setScrollbarWidth,
  isBodyOverflowing: isBodyOverflowing,
  getOriginalBodyPadding: getOriginalBodyPadding,
  conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
  setGlobalCssModule: setGlobalCssModule,
  mapToCssModules: mapToCssModules,
  omit: omit,
  pick: pick,
  warnOnce: warnOnce,
  deprecated: deprecated,
  DOMElement: DOMElement,
  targetPropType: targetPropType,
  tagPropType: tagPropType,
  TransitionTimeouts: TransitionTimeouts,
  TransitionPropTypeKeys: TransitionPropTypeKeys,
  TransitionStatuses: TransitionStatuses,
  keyCodes: keyCodes,
  PopperPlacements: PopperPlacements,
  canUseDOM: canUseDOM,
  isReactRefObj: isReactRefObj,
  toNumber: toNumber,
  isObject: isObject,
  isFunction: isFunction,
  findDOMElements: findDOMElements,
  isArrayOrNodeList: isArrayOrNodeList,
  getTarget: getTarget,
  defaultToggleEvents: defaultToggleEvents,
  addMultipleEventListeners: addMultipleEventListeners,
  focusableElements: focusableElements
};

var _excluded$1e = ["className", "cssModule", "fluid", "tag"];
var propTypes$1k = {
  tag: tagPropType,
  fluid: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1i = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1e);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = mapToCssModules(classNames__default["default"](className, containerClass), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Container.propTypes = propTypes$1k;
Container.defaultProps = defaultProps$1i;
var Container$1 = Container;

var _excluded$1d = ["className", "cssModule", "noGutters", "tag", "form", "widths"];
var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var rowColsPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var propTypes$1j = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes__default["default"].bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  form: PropTypes__default["default"].bool,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType
};
var defaultProps$1h = {
  tag: 'div',
  widths: rowColWidths
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1d);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = mapToCssModules(classNames__default["default"](className, noGutters ? 'gx-0' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes$1j;
Row.defaultProps = defaultProps$1h;
var Row$1 = Row;

var _excluded$1c = ["className", "cssModule", "widths", "tag"];
var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string]),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$1i = {
  tag: tagPropType,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  xxl: columnProps$1,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  widths: PropTypes__default["default"].array
};
var defaultProps$1g = {
  tag: 'div',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var getColumnClasses = function getColumnClasses(attributes, cssModule, widths) {
  if (widths === void 0) {
    widths = colWidths$1;
  }

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = attributes[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });
  return {
    colClasses: colClasses,
    attributes: attributes
  };
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1c);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classNames__default["default"](className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
};

Col.propTypes = propTypes$1i;
Col.defaultProps = defaultProps$1g;
var Col$1 = Col;

var _excluded$1b = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
var propTypes$1h = {
  light: PropTypes__default["default"].bool,
  dark: PropTypes__default["default"].bool,
  full: PropTypes__default["default"].bool,
  fixed: PropTypes__default["default"].string,
  sticky: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  role: PropTypes__default["default"].string,
  tag: tagPropType,
  container: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  expand: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  children: PropTypes__default["default"].node
};
var defaultProps$1f = {
  tag: 'nav',
  expand: false,
  container: 'fluid'
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-" + expand;
};

var Navbar = function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      container = props.container,
      Tag = props.tag,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1b);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  var containerClass = container && container === true ? 'container' : "container-" + container;
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), container ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: containerClass
  }, children) : children);
};

Navbar.propTypes = propTypes$1h;
Navbar.defaultProps = defaultProps$1f;
var Navbar$1 = Navbar;

var _excluded$1a = ["className", "cssModule", "tag"];
var propTypes$1g = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1e = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1a);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-brand'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavbarBrand.propTypes = propTypes$1g;
NavbarBrand.defaultProps = defaultProps$1e;
var NavbarBrand$1 = NavbarBrand;

var _excluded$19 = ["className", "cssModule", "active", "tag"];
var propTypes$1f = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1d = {
  tag: 'span'
};

var NavbarText = function NavbarText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$19);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavbarText.propTypes = propTypes$1f;
NavbarText.defaultProps = defaultProps$1d;
var NavbarText$1 = NavbarText;

var _excluded$18 = ["className", "cssModule", "children", "tag"];
var propTypes$1e = {
  tag: tagPropType,
  type: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node
};
var defaultProps$1c = {
  tag: 'button',
  type: 'button'
};

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$18);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-toggler'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    "aria-label": "Toggle navigation"
  }, attributes, {
    className: classes
  }), children || /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('navbar-toggler-icon', cssModule)
  }));
};

NavbarToggler.propTypes = propTypes$1e;
NavbarToggler.defaultProps = defaultProps$1c;
var NavbarToggler$1 = NavbarToggler;

var _excluded$17 = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
var propTypes$1d = {
  tabs: PropTypes__default["default"].bool,
  pills: PropTypes__default["default"].bool,
  vertical: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  horizontal: PropTypes__default["default"].string,
  justified: PropTypes__default["default"].bool,
  fill: PropTypes__default["default"].bool,
  navbar: PropTypes__default["default"].bool,
  card: PropTypes__default["default"].bool,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1b = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$17);

  var classes = mapToCssModules(classNames__default["default"](className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Nav.propTypes = propTypes$1d;
Nav.defaultProps = defaultProps$1b;
var Nav$1 = Nav;

var _excluded$16 = ["className", "cssModule", "active", "tag"];
var propTypes$1c = {
  tag: tagPropType,
  active: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1a = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$16);

  var classes = mapToCssModules(classNames__default["default"](className, 'nav-item', active ? 'active' : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavItem.propTypes = propTypes$1c;
NavItem.defaultProps = defaultProps$1a;
var NavItem$1 = NavItem;

var _excluded$15 = ["className", "cssModule", "active", "tag", "innerRef"];
var propTypes$1b = {
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  disabled: PropTypes__default["default"].bool,
  active: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  onClick: PropTypes__default["default"].func,
  href: PropTypes__default["default"].any
};
var defaultProps$19 = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$15);

    var classes = mapToCssModules(classNames__default["default"](className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(React__default["default"].Component);

NavLink.propTypes = propTypes$1b;
NavLink.defaultProps = defaultProps$19;
var NavLink$1 = NavLink;

var _excluded$14 = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
var propTypes$1a = {
  tag: tagPropType,
  listTag: tagPropType,
  className: PropTypes__default["default"].string,
  listClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  'aria-label': PropTypes__default["default"].string
};
var defaultProps$18 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$14);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"]('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/React__default["default"].createElement(ListTag, {
    className: listClasses
  }, children));
};

Breadcrumb.propTypes = propTypes$1a;
Breadcrumb.defaultProps = defaultProps$18;
var Breadcrumb$1 = Breadcrumb;

var _excluded$13 = ["className", "cssModule", "active", "tag"];
var propTypes$19 = {
  tag: tagPropType,
  active: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$17 = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$13);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
};

BreadcrumbItem.propTypes = propTypes$19;
BreadcrumbItem.defaultProps = defaultProps$17;
var BreadcrumbItem$1 = BreadcrumbItem;

var _excluded$12 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
var propTypes$18 = {
  active: PropTypes__default["default"].bool,
  'aria-label': PropTypes__default["default"].string,
  block: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool,
  outline: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  onClick: PropTypes__default["default"].func,
  size: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  close: PropTypes__default["default"].bool
};
var defaultProps$16 = {
  color: 'secondary',
  tag: 'button'
};

var Button = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      return this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$12);

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = mapToCssModules(classNames__default["default"](className, close && 'btn-close', close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'd-block w-100' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(React__default["default"].Component);

Button.propTypes = propTypes$18;
Button.defaultProps = defaultProps$16;
var Button$1 = Button;

var _excluded$11 = ["className"];
var propTypes$17 = {
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  onFocus: PropTypes__default["default"].func,
  defaultValue: PropTypes__default["default"].bool
};
var defaultProps$15 = {
  defaultValue: false
};

var ButtonToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ButtonToggle, _React$Component);

  function ButtonToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      toggled: props.defaultValue,
      focus: false
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ButtonToggle.prototype;

  _proto.onBlur = function onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({
      focus: false
    });
  };

  _proto.onFocus = function onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({
      focus: true
    });
  };

  _proto.onClick = function onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.setState(function (_ref) {
      var toggled = _ref.toggled;
      return {
        toggled: !toggled
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$11);

    var classes = mapToCssModules(classNames__default["default"](className, {
      focus: this.state.focus
    }), this.props.cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Button$1, _extends({
      active: this.state.toggled,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onClick: this.onClick,
      className: classes
    }, attributes));
  };

  return ButtonToggle;
}(React__default["default"].Component);

ButtonToggle.propTypes = propTypes$17;
ButtonToggle.defaultProps = defaultProps$15;
var ButtonToggle$1 = ButtonToggle;

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  disabled: PropTypes.bool
 * }
 */

var DropdownContext = React__default["default"].createContext({});

var _excluded$10 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
var propTypes$16 = {
  a11y: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  direction: PropTypes__default["default"].oneOf(['up', 'down', 'start', 'end', 'left', 'right']),
  group: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  nav: PropTypes__default["default"].bool,
  active: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  inNavbar: PropTypes__default["default"].bool,
  setActiveFromChild: PropTypes__default["default"].bool,
  menuRole: PropTypes__default["default"].oneOf(['listbox', 'menu'])
};
var defaultProps$14 = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind(_assertThisInitialized(_this));
    _this.containerRef = React__default["default"].createRef();
    _this.menuRef = React__default["default"].createRef();
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.handleMenuRef = function handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  };

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      // Callback that should be called by DropdownMenu to provide a ref to
      // a HTML tag that's used for the DropdownMenu
      onMenuRef: this.handleMenuRef,
      menuRole: this.props.menuRole
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenu = function getMenu() {
    return this.menuRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  };

  _proto.getItemType = function getItemType() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getMenuItems = function getMenuItems() {
    // In a real menu with a child DropdownMenu, `this.getMenu()` should never
    // be null, but it is sometimes null in tests. To mitigate that, we just
    // use `this.getContainer()` as the fallback `menuContainer`.
    var menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll("[role=\"" + this.getItemType() + "\"]"));
  };

  _proto.addEvents = function addEvents() {
    var _this2 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this2.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
    var container = this.getContainer();
    var menu = this.getMenu();
    var clickIsInContainer = container.contains(e.target) && container !== e.target;
    var clickIsInInput = container.classList.contains('input-group') && container.classList.contains('dropdown') && e.target.tagName === 'INPUT';
    var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;

    if ((clickIsInContainer && !clickIsInInput || clickIsInMenu) && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this4 = this;

    var isTargetMenuItem = e.target.getAttribute('role') === 'menuitem' || e.target.getAttribute('role') === 'option';
    var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
    var isTab = keyCodes.tab === e.which;

    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (isTargetMenuCtrl) {
      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        // Open the menu (if not open) and focus the first menu item
        if (!this.props.isOpen) {
          this.toggle(e);
        }

        setTimeout(function () {
          return _this4.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && isTab) {
        // Focus the first menu item if tabbing from an open menu. We need this
        // for cases where the DropdownMenu sets a custom container, which may
        // not be the natural next item to tab to from the DropdownToggle.
        e.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && isTargetMenuItem) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames, _ref;

    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        tag = _omit.tag,
        attrs = _objectWithoutPropertiesLoose(_omit, _excluded$10);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      React__default["default"].Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = mapToCssModules(classNames__default["default"](className, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {
      'btn-group': group
    }, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group, _classNames.dropup = direction === 'up', _classNames.dropstart = direction === 'start' || direction === 'left', _classNames.dropend = direction === 'end' || direction === 'right', _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, /*#__PURE__*/React__default["default"].createElement(reactPopper.Manager, null, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(React__default["default"].Component);

Dropdown.propTypes = propTypes$16;
Dropdown.defaultProps = defaultProps$14;
var Dropdown$1 = Dropdown;

var propTypes$15 = {
  children: PropTypes__default["default"].node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
    group: true
  }, props));
};

ButtonDropdown.propTypes = propTypes$15;
var ButtonDropdown$1 = ButtonDropdown;

var _excluded$$ = ["className", "cssModule", "size", "vertical", "tag"];
var propTypes$14 = {
  tag: tagPropType,
  'aria-label': PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  role: PropTypes__default["default"].string,
  size: PropTypes__default["default"].string,
  vertical: PropTypes__default["default"].bool
};
var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$$);

  var classes = mapToCssModules(classNames__default["default"](className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ButtonGroup.propTypes = propTypes$14;
ButtonGroup.defaultProps = defaultProps$13;
var ButtonGroup$1 = ButtonGroup;

var _excluded$_ = ["className", "cssModule", "tag"];
var propTypes$13 = {
  tag: tagPropType,
  'aria-label': PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  role: PropTypes__default["default"].string
};
var defaultProps$12 = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$_);

  var classes = mapToCssModules(classNames__default["default"](className, 'btn-toolbar'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ButtonToolbar.propTypes = propTypes$13;
ButtonToolbar.defaultProps = defaultProps$12;
var ButtonToolbar$1 = ButtonToolbar;

var _excluded$Z = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
var propTypes$12 = {
  children: PropTypes__default["default"].node,
  active: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  divider: PropTypes__default["default"].bool,
  tag: tagPropType,
  header: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].bool,
  text: PropTypes__default["default"].bool
};
var defaultProps$11 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.onClick = function onClick(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        header = _this$props.header,
        divider = _this$props.divider,
        text = _this$props.text;

    if (disabled || header || divider || text) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getTabIndex = function getTabIndex() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        header = _this$props2.header,
        divider = _this$props2.divider,
        text = _this$props2.text;

    if (disabled || header || divider || text) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? this.getRole() : undefined;

    var _omit = omit(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        text = _omit.text,
        props = _objectWithoutPropertiesLoose(_omit, _excluded$Z);

    var classes = mapToCssModules(classNames__default["default"](className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header && !text,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider,
      'dropdown-item-text': text
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      } else if (text) {
        Tag = 'span';
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(React__default["default"].Component);

DropdownItem.propTypes = propTypes$12;
DropdownItem.defaultProps = defaultProps$11;
DropdownItem.contextType = DropdownContext;
var DropdownItem$1 = DropdownItem;

var _excluded$Y = ["className", "cssModule", "dark", "end", "right", "tag", "flip", "modifiers", "persist", "strategy", "container"];
var propTypes$11 = {
  tag: tagPropType,
  children: PropTypes__default["default"].node.isRequired,
  dark: PropTypes__default["default"].bool,
  end: PropTypes__default["default"].bool,
  flip: PropTypes__default["default"].bool,
  modifiers: PropTypes__default["default"].array,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  persist: PropTypes__default["default"].bool,
  strategy: PropTypes__default["default"].string,
  container: targetPropType,
  right: deprecated(PropTypes__default["default"].bool, 'Please use "end" instead.')
};
var defaultProps$10 = {
  tag: 'div',
  flip: true,
  modifiers: []
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  start: 'left',
  end: 'right',
  down: 'bottom'
};

var DropdownMenu = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'listbox';
    }

    return 'menu';
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        dark = _this$props.dark,
        end = _this$props.end,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        strategy = _this$props.strategy,
        container = _this$props.container,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$Y);

    var classes = mapToCssModules(classNames__default["default"](className, 'dropdown-menu', {
      'dropdown-menu-dark': dark,
      'dropdown-menu-end': end || right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = end || right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = [].concat(modifiers, [{
        name: 'flip',
        enabled: !!flip
      }]);
      var popper = /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        strategy: strategy
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement;

        var combinedStyle = _objectSpread2(_objectSpread2({}, _this.props.style), style);

        var handleRef = function handleRef(tagRef) {
          // Send the ref to `react-popper`
          ref(tagRef); // Send the ref to the parent Dropdown so that clicks outside
          // it will cause it to close

          var onMenuRef = _this.context.onMenuRef;
          if (onMenuRef) onMenuRef(tagRef);
        };

        return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
          tabIndex: "-1",
          role: _this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "data-popper-placement": placement
        }));
      });

      if (container) {
        return ReactDOM__default["default"].createPortal(popper, getTarget(container));
      } else {
        return popper;
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "data-popper-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(React__default["default"].Component);
DropdownMenu.propTypes = propTypes$11;
DropdownMenu.defaultProps = defaultProps$10;
DropdownMenu.contextType = DropdownContext;
var DropdownMenu$1 = DropdownMenu;

var _excluded$X = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
var propTypes$10 = {
  caret: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  'aria-haspopup': PropTypes__default["default"].bool,
  split: PropTypes__default["default"].bool,
  tag: tagPropType,
  nav: PropTypes__default["default"].bool
};
var defaultProps$$ = {
  color: 'secondary',
  'aria-haspopup': true
};

var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.getRole = function getRole() {
    return this.context.menuRole || this.props['aria-haspopup'];
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$X);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = mapToCssModules(classNames__default["default"](className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button$1;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children: children
      }));
    }

    return /*#__PURE__*/React__default["default"].createElement(reactPopper.Reference, {
      innerRef: innerRef
    }, function (_ref) {
      var _ref2;

      var ref = _ref.ref;
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        "aria-haspopup": _this2.getRole(),
        children: children
      }));
    });
  };

  return DropdownToggle;
}(React__default["default"].Component);

DropdownToggle.propTypes = propTypes$10;
DropdownToggle.defaultProps = defaultProps$$;
DropdownToggle.contextType = DropdownContext;
var DropdownToggle$1 = DropdownToggle;

var _excluded$W = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

var propTypes$$ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),
  tag: tagPropType,
  baseClass: PropTypes__default["default"].string,
  baseClassActive: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
});

var defaultProps$_ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  "in": true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded$W);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classNames__default["default"](className, baseClass, isActive && baseClassActive), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$$;
Fade.defaultProps = defaultProps$_;

/**
 * AccordionContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  openId: PropTypes.string,    
 * }
 */

var AccordionContext = React__default["default"].createContext({});

var _excluded$V = ["flush", "open", "toggle", "className", "cssModule", "tag", "innerRef"];
var propTypes$_ = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  flush: PropTypes__default["default"].bool,
  open: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]).isRequired,
  toggle: PropTypes__default["default"].func.isRequired
};
var defaultProps$Z = {
  tag: 'div'
};

var Accordion = function Accordion(props) {
  var flush = props.flush,
      open = props.open,
      toggle = props.toggle,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$V);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion', {
    'accordion-flush': flush
  }), cssModule);
  var accordionContext = React.useMemo(function () {
    return {
      open: open,
      toggle: toggle
    };
  });
  return /*#__PURE__*/React__default["default"].createElement(AccordionContext.Provider, {
    value: accordionContext
  }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  })));
};

Accordion.propTypes = propTypes$_;
Accordion.defaultProps = defaultProps$Z;
var Accordion$1 = Accordion;

var _excluded$U = ["defaultOpen", "stayOpen"];
var propTypes$Z = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  defaultOpen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]),
  stayOpen: PropTypes__default["default"].bool
};
var defaultProps$Y = {
  tag: 'div'
};

var UncontrolledAccordion = function UncontrolledAccordion(_ref) {
  var defaultOpen = _ref.defaultOpen,
      stayOpen = _ref.stayOpen,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$U);

  var _useState = React.useState(defaultOpen || (stayOpen ? [] : undefined)),
      open = _useState[0],
      setOpen = _useState[1];

  var toggle = function toggle(id) {
    if (stayOpen) {
      open.includes(id) ? setOpen(open.filter(function (accordionId) {
        return accordionId !== id;
      })) : setOpen([].concat(open, [id]));
    } else {
      open === id ? setOpen(undefined) : setOpen(id);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(Accordion$1, _extends({}, props, {
    open: open,
    toggle: toggle
  }));
};

Accordion$1.propTypes = propTypes$Z;
Accordion$1.defaultProps = defaultProps$Y;
var UncontrolledAccordion$1 = UncontrolledAccordion;

var _excluded$T = ["className", "cssModule", "tag", "innerRef", "children", "targetId"];
var propTypes$Y = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  targetId: PropTypes__default["default"].string.isRequired
};
var defaultProps$X = {
  tag: 'h2'
};

var AccordionHeader = function AccordionHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      targetId = props.targetId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$T);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open,
      toggle = _useContext.toggle;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-header'), cssModule);
  var buttonClasses = mapToCssModules(classNames__default["default"]('accordion-button', {
    collapsed: !(Array.isArray(open) ? open.includes(targetId) : open === targetId)
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: buttonClasses,
    onClick: function onClick() {
      return toggle(targetId);
    }
  }, children));
};

AccordionHeader.propTypes = propTypes$Y;
AccordionHeader.defaultProps = defaultProps$X;
var AccordionHeader$1 = AccordionHeader;

var _excluded$S = ["className", "cssModule", "tag", "innerRef"];
var propTypes$X = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node
};
var defaultProps$W = {
  tag: 'div'
};

var AccordionItem$2 = function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$S);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

AccordionItem$2.propTypes = propTypes$X;
AccordionItem$2.defaultProps = defaultProps$W;
var AccordionItem$3 = AccordionItem$2;

var _excluded$R = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

var _transitionStatusToCl;

var propTypes$W = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  horizontal: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),
  tag: tagPropType,
  className: PropTypes__default["default"].node,
  navbar: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object])
});

var defaultProps$V = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  horizontal: false,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

var Collapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      dimension: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension(node) {
    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      dimension: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    this.getDimension(node); // eslint-disable-line no-unused-vars


    this.setState({
      dimension: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      dimension: null
    });
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        horizontal = _this$props.horizontal,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        otherProps = _objectWithoutPropertiesLoose(_this$props, _excluded$R);

    var dimension = this.state.dimension;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      "in": isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var _ref;

      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classNames__default["default"](className, horizontal && 'collapse-horizontal', collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = dimension === null ? null : (_ref = {}, _ref[horizontal ? 'width' : 'height'] = dimension, _ref);
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, childProps, {
        style: _objectSpread2(_objectSpread2({}, childProps.style), style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };

  return Collapse;
}(React.Component);

Collapse.propTypes = propTypes$W;
Collapse.defaultProps = defaultProps$V;
var Collapse$1 = Collapse;

var _excluded$Q = ["className", "cssModule", "tag", "innerRef", "children", "accordionId"];
var propTypes$V = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  accordionId: PropTypes__default["default"].string.isRequired
};
var defaultProps$U = {
  tag: 'div'
};

var AccordionItem = function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      accordionId = props.accordionId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$Q);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-collapse'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({}, attributes, {
    className: classes,
    ref: innerRef,
    isOpen: Array.isArray(open) ? open.includes(accordionId) : open === accordionId
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: "accordion-body"
  }, children));
};

AccordionItem.propTypes = propTypes$V;
AccordionItem.defaultProps = defaultProps$U;
var AccordionItem$1 = AccordionItem;

var _excluded$P = ["className", "cssModule", "color", "innerRef", "pill", "tag"];
var propTypes$U = {
  color: PropTypes__default["default"].string,
  pill: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$T = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      pill = props.pill,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$P);

  var classes = mapToCssModules(classNames__default["default"](className, 'badge', 'bg-' + color, pill ? 'rounded-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Badge.propTypes = propTypes$U;
Badge.defaultProps = defaultProps$T;
var Badge$1 = Badge;

var _excluded$O = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
var propTypes$T = {
  tag: tagPropType,
  inverse: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  body: PropTypes__default["default"].bool,
  outline: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$S = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$O);

  var classes = mapToCssModules(classNames__default["default"](className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes$T;
Card.defaultProps = defaultProps$S;
var Card$1 = Card;

var _excluded$N = ["className", "cssModule", "tag"];
var propTypes$S = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$R = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$N);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = propTypes$S;
CardGroup.defaultProps = defaultProps$R;
var CardGroup$1 = CardGroup;

var _excluded$M = ["className", "cssModule", "tag"];
var propTypes$R = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$Q = {
  tag: 'div'
};

var CardDeck = function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$M);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-deck'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardDeck.propTypes = propTypes$R;
CardDeck.defaultProps = defaultProps$Q;
var CardDeck$1 = CardDeck;

var _excluded$L = ["className", "cssModule", "tag"];
var propTypes$Q = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$P = {
  tag: 'div'
};

var CardColumns = function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$L);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-columns'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardColumns.propTypes = propTypes$Q;
CardColumns.defaultProps = defaultProps$P;
var CardColumns$1 = CardColumns;

var _excluded$K = ["className", "cssModule", "innerRef", "tag"];
var propTypes$P = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$O = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$K);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes$P;
CardBody.defaultProps = defaultProps$O;
var CardBody$1 = CardBody;

var _excluded$J = ["className", "cssModule", "tag", "innerRef"];
var propTypes$O = {
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$N = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$J);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-link'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

CardLink.propTypes = propTypes$O;
CardLink.defaultProps = defaultProps$N;
var CardLink$1 = CardLink;

var _excluded$I = ["className", "cssModule", "tag"];
var propTypes$N = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$M = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$I);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardFooter.propTypes = propTypes$N;
CardFooter.defaultProps = defaultProps$M;
var CardFooter$1 = CardFooter;

var _excluded$H = ["className", "cssModule", "tag"];
var propTypes$M = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$L = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$H);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = propTypes$M;
CardHeader.defaultProps = defaultProps$L;
var CardHeader$1 = CardHeader;

var _excluded$G = ["className", "cssModule", "top", "bottom", "tag"];
var propTypes$L = {
  tag: tagPropType,
  top: PropTypes__default["default"].bool,
  bottom: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$K = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$G);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classNames__default["default"](className, cardImgClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardImg.propTypes = propTypes$L;
CardImg.defaultProps = defaultProps$K;
var CardImg$1 = CardImg;

var _excluded$F = ["className", "cssModule", "tag"];
var propTypes$K = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$J = {
  tag: 'div'
};

var CardImgOverlay = function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$F);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-img-overlay'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardImgOverlay.propTypes = propTypes$K;
CardImgOverlay.defaultProps = defaultProps$J;
var CardImgOverlay$1 = CardImgOverlay;

var _excluded$E = ["in", "children", "cssModule", "slide", "tag", "className"];

var CarouselItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props["in"],
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, _excluded$E);

    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      "in": isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classNames__default["default"](className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return /*#__PURE__*/React__default["default"].createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(React__default["default"].Component);

CarouselItem.propTypes = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  tag: tagPropType,
  "in": PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  slide: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string
});
CarouselItem.defaultProps = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: PropTypes__default["default"].string
};
var CarouselItem$1 = CarouselItem;

/**
 * CarouselContext
 * {
 *  direction: PropTypes.oneOf(['start', 'end']).isRequired,
 * }
 */

var CarouselContext = React__default["default"].createContext({});

var SWIPE_THRESHOLD = 40;

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'end',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getContextValue = function getContextValue() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'end';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'start';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'start' : 'end';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'end' : 'start';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, [].slice.call(arguments));
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, [].slice.call(arguments));
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.state.activeIndex;
      return React__default["default"].cloneElement(item, {
        "in": isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className,
        dark = _this$props3.dark,
        fade = _this$props3.fade;
    var outerClasses = mapToCssModules(classNames__default["default"](className, 'carousel', fade, slide && 'slide', dark && 'carousel-dark'), cssModule);
    var innerClasses = mapToCssModules(classNames__default["default"]('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === CarouselItem$1;
    }); // Rendering only slides

    if (slidesOnly) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(children, innerClasses)));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = React__default["default"].cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
      value: this.getContextValue()
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
  };

  return Carousel;
}(React__default["default"].Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes__default["default"].number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes__default["default"].func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes__default["default"].func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes__default["default"].bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes__default["default"].oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes__default["default"].oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].bool]),
  children: PropTypes__default["default"].array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes__default["default"].func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes__default["default"].func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes__default["default"].bool,
  // make the controls, indicators and captions dark on the Carousel
  dark: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  className: PropTypes__default["default"].string,
  enableTouch: PropTypes__default["default"].bool
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false
};
Carousel.childContextTypes = {
  direction: PropTypes__default["default"].string
};
var Carousel$1 = Carousel;

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classNames__default["default"](className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classNames__default["default"]("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classNames__default["default"]('visually-hidden'), cssModule);
  return (
    /*#__PURE__*/
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    React__default["default"].createElement("a", {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
};

CarouselControl.propTypes = {
  direction: PropTypes__default["default"].oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes__default["default"].func.isRequired,
  cssModule: PropTypes__default["default"].object,
  directionText: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string
};
var CarouselControl$1 = CarouselControl;

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classNames__default["default"](className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classNames__default["default"]({
      active: activeIndex === idx
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": item.caption,
      "data-bs-target": true,
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    }, item.caption);
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: listClasses
  }, indicators);
};

CarouselIndicators.propTypes = {
  items: PropTypes__default["default"].array.isRequired,
  activeIndex: PropTypes__default["default"].number.isRequired,
  cssModule: PropTypes__default["default"].object,
  onClickHandler: PropTypes__default["default"].func.isRequired,
  className: PropTypes__default["default"].string
};
var CarouselIndicators$1 = CarouselIndicators;

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classNames__default["default"](className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, captionHeader), /*#__PURE__*/React__default["default"].createElement("p", null, captionText));
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes__default["default"].node,
  captionText: PropTypes__default["default"].node.isRequired,
  cssModule: PropTypes__default["default"].object,
  className: PropTypes__default["default"].string
};
var CarouselCaption$1 = CarouselCaption;

var _excluded$D = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
var propTypes$J = {
  items: PropTypes__default["default"].array.isRequired,
  indicators: PropTypes__default["default"].bool,
  controls: PropTypes__default["default"].bool,
  autoPlay: PropTypes__default["default"].bool,
  defaultActiveIndex: PropTypes__default["default"].number,
  activeIndex: PropTypes__default["default"].number,
  next: PropTypes__default["default"].func,
  previous: PropTypes__default["default"].func,
  goToIndex: PropTypes__default["default"].func
};

var UncontrolledCarousel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.previous = function previous() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$D);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      var key = item.key || item.src;
      return /*#__PURE__*/React__default["default"].createElement(CarouselItem$1, {
        onExiting: _this2.onExiting,
        onExited: _this2.onExited,
        key: key
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), /*#__PURE__*/React__default["default"].createElement(CarouselCaption$1, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return /*#__PURE__*/React__default["default"].createElement(Carousel$1, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && /*#__PURE__*/React__default["default"].createElement(CarouselIndicators$1, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl$1, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl$1, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(React.Component);

UncontrolledCarousel.propTypes = propTypes$J;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
var UncontrolledCarousel$1 = UncontrolledCarousel;

var _excluded$C = ["className", "cssModule", "tag"];
var propTypes$I = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$I = {
  tag: 'div'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$C);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-subtitle'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardSubtitle.propTypes = propTypes$I;
CardSubtitle.defaultProps = defaultProps$I;
var CardSubtitle$1 = CardSubtitle;

var _excluded$B = ["className", "cssModule", "tag"];
var propTypes$H = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$H = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$B);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardText.propTypes = propTypes$H;
CardText.defaultProps = defaultProps$H;
var CardText$1 = CardText;

var _excluded$A = ["className", "cssModule", "tag"];
var propTypes$G = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$G = {
  tag: 'div'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$A);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-title'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = propTypes$G;
CardTitle.defaultProps = defaultProps$G;
var CardTitle$1 = CardTitle;

var _excluded$z = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];

function noop$2() {}

var propTypes$F = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]).isRequired,
  popperClassName: PropTypes__default["default"].string,
  placement: PropTypes__default["default"].string,
  placementPrefix: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  hideArrow: PropTypes__default["default"].bool,
  tag: tagPropType,
  isOpen: PropTypes__default["default"].bool.isRequired,
  cssModule: PropTypes__default["default"].object,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  fallbackPlacements: PropTypes__default["default"].array,
  flip: PropTypes__default["default"].bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  onClosed: PropTypes__default["default"].func,
  fade: PropTypes__default["default"].bool,
  transition: PropTypes__default["default"].shape(Fade.propTypes)
};
var defaultProps$F = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: [0, 0],
  flip: true,
  container: 'body',
  modifiers: [],
  onClosed: noop$2,
  fade: true,
  transition: _objectSpread2({}, Fade.defaultProps)
};

var PopperContent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = typeof node === 'string' ? getTarget(node) : node;
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        offset = _this$props.offset,
        fallbackPlacements = _this$props.fallbackPlacements,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        boundariesElement = _this$props.boundariesElement,
        fade = _this$props.fade,
        transition = _this$props.transition,
        placement = _this$props.placement,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$z);

    var arrowClassName = mapToCssModules(classNames__default["default"]('arrow', _arrowClassName), cssModule);
    var popperClassName = mapToCssModules(classNames__default["default"](_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);
    var modifierNames = modifiers.map(function (m) {
      return m.name;
    });
    var baseModifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'flip',
      enabled: flip,
      options: {
        fallbackPlacements: fallbackPlacements
      }
    }, {
      name: 'preventOverflow',
      options: {
        boundary: boundariesElement
      }
    }].filter(function (m) {
      return !modifierNames.includes(m.name);
    });
    var extendedModifiers = [].concat(baseModifiers, modifiers);

    var popperTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, popperTransition, attrs, {
      "in": isOpen,
      onExited: this.onClosed,
      tag: tag
    }), /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement,
      strategy: strategy
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          popperPlacement = _ref.placement,
          isReferenceHidden = _ref.isReferenceHidden,
          arrowProps = _ref.arrowProps,
          update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "data-popper-placement": popperPlacement,
        "data-popper-reference-hidden": isReferenceHidden ? 'true' : undefined
      }, typeof children === 'function' ? children({
        update: update
      }) : children, !hideArrow && /*#__PURE__*/React__default["default"].createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(this.props.target);

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React__default["default"].Component);

PopperContent.propTypes = propTypes$F;
PopperContent.defaultProps = defaultProps$F;
var PopperContent$1 = PopperContent;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes__default["default"].object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};
var PopperTargetHelper$1 = PopperTargetHelper;

var propTypes$E = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]),
  placement: PropTypes__default["default"].oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  hideArrow: PropTypes__default["default"].bool,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  className: PropTypes__default["default"].string,
  innerClassName: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  popperClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].func,
  autohide: PropTypes__default["default"].bool,
  placementPrefix: PropTypes__default["default"].string,
  delay: PropTypes__default["default"].oneOfType([PropTypes__default["default"].shape({
    show: PropTypes__default["default"].number,
    hide: PropTypes__default["default"].number
  }), PropTypes__default["default"].number]),
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object]),
  trigger: PropTypes__default["default"].string,
  fade: PropTypes__default["default"].bool,
  flip: PropTypes__default["default"].bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps$E = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {},
  trigger: 'click',
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

function isInDOMSubtrees(element, subtreeRoots) {
  if (subtreeRoots === void 0) {
    subtreeRoots = [];
  }

  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(function (subTreeRoot) {
    return isInDOMSubtree(element, subTreeRoot);
  })[0];
}

var TooltipPopoverWrapper = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

  function TooltipPopoverWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._targets = [];
    _this.currentTargetElement = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    _this._isMounted = false;
    return _this;
  }

  var _proto = TooltipPopoverWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  };

  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  };

  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  };

  _proto.onEscKeyDown = function onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  _proto.getRef = function getRef(ref) {
    var innerRef = this.props.innerRef;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  };

  _proto.getDelay = function getDelay(key) {
    var delay = this.props.delay;

    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  };

  _proto.getCurrentTarget = function getCurrentTarget(target) {
    if (!target) return null;

    var index = this._targets.indexOf(target);

    if (index >= 0) return this._targets[index];
    return this.getCurrentTarget(target.parentElement);
  };

  _proto.show = function show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e ? e.currentTarget || this.getCurrentTarget(e.target) : null;

      if (e && e.composedPath && typeof e.composedPath === 'function') {
        var path = e.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }

      this.toggle(e);
    }
  };

  _proto.showWithDelay = function showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
  };

  _proto.hide = function hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e);
    }
  };

  _proto.hideWithDelay = function hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
  };

  _proto.clearShowTimeout = function clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  };

  _proto.clearHideTimeout = function clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    var triggers = this.props.trigger.split(' ');

    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  };

  _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.addEventListener(type, handler, isBubble);
    });
  };

  _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.removeEventListener(type, handler, isBubble);
    });
  };

  _proto.addTargetEvents = function addTargetEvents() {
    if (this.props.trigger) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          document.addEventListener('click', this.handleDocumentClick, true);
        }

        if (this._targets && this._targets.length) {
          if (triggers.indexOf('hover') > -1) {
            this.addEventOnTargets('mouseover', this.showWithDelay, true);
            this.addEventOnTargets('mouseout', this.hideWithDelay, true);
          }

          if (triggers.indexOf('focus') > -1) {
            this.addEventOnTargets('focusin', this.show, true);
            this.addEventOnTargets('focusout', this.hide, true);
          }

          this.addEventOnTargets('keydown', this.onEscKeyDown, true);
        }
      }
    }
  };

  _proto.removeTargetEvents = function removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets('mouseover', this.showWithDelay, true);
      this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
      this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
      this.removeEventOnTargets('focusin', this.show, true);
      this.removeEventOnTargets('focusout', this.hide, true);
    }

    document.removeEventListener('click', this.handleDocumentClick, true);
  };

  _proto.updateTarget = function updateTarget() {
    var newTarget = getTarget(this.props.target, true);

    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled || !this._isMounted) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (this.props.isOpen) {
      this.updateTarget();
    }

    var target = this.currentTargetElement || this._targets[0];

    if (!target) {
      return null;
    }

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        innerClassName = _this$props.innerClassName,
        isOpen = _this$props.isOpen,
        hideArrow = _this$props.hideArrow,
        boundariesElement = _this$props.boundariesElement,
        placement = _this$props.placement,
        placementPrefix = _this$props.placementPrefix,
        arrowClassName = _this$props.arrowClassName,
        popperClassName = _this$props.popperClassName,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        offset = _this$props.offset,
        fade = _this$props.fade,
        flip = _this$props.flip,
        children = _this$props.children;
    var attributes = omit(this.props, Object.keys(propTypes$E));
    var popperClasses = mapToCssModules(popperClassName, cssModule);
    var classes = mapToCssModules(innerClassName, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(PopperContent$1, {
      className: className,
      target: target,
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      strategy: strategy,
      offset: offset,
      cssModule: cssModule,
      fade: fade,
      flip: flip
    }, function (_ref) {
      var update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
        ref: _this2.getRef,
        className: classes,
        role: "tooltip",
        onMouseOver: _this2.onMouseOverTooltipContent,
        onMouseLeave: _this2.onMouseLeaveTooltipContent,
        onKeyDown: _this2.onEscKeyDown
      }), typeof children === 'function' ? children({
        update: update
      }) : children);
    });
  };

  return TooltipPopoverWrapper;
}(React__default["default"].Component);

TooltipPopoverWrapper.propTypes = propTypes$E;
TooltipPopoverWrapper.defaultProps = defaultProps$E;
var TooltipPopoverWrapper$1 = TooltipPopoverWrapper;

var defaultProps$D = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
  offset: [0, 8]
};

var Popover = function Popover(props) {
  var popperClasses = classNames__default["default"]('popover', 'show', props.popperClassName);
  var classes = classNames__default["default"]('popover-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "popover-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Popover.propTypes = propTypes$E;
Popover.defaultProps = defaultProps$D;
var Popover$1 = Popover;

var omitKeys$4 = ['defaultOpen'];

var UncontrolledPopover = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledPopover, _Component);

  function UncontrolledPopover(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledPopover.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Popover$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  };

  return UncontrolledPopover;
}(React.Component);
UncontrolledPopover.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Popover$1.propTypes);

var _excluded$y = ["className", "cssModule", "tag"];
var propTypes$D = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$C = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$y);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverHeader.propTypes = propTypes$D;
PopoverHeader.defaultProps = defaultProps$C;
var PopoverHeader$1 = PopoverHeader;

var _excluded$x = ["className", "cssModule", "tag"];
var propTypes$C = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$B = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$x);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverBody.propTypes = propTypes$C;
PopoverBody.defaultProps = defaultProps$B;
var PopoverBody$1 = PopoverBody;

var _excluded$w = ["children", "className", "barClassName", "cssModule", "value", "min", "max", "animated", "striped", "color", "bar", "multi", "tag", "style", "barStyle", "barAriaValueText", "barAriaLabelledBy"];
var propTypes$B = {
  children: PropTypes__default["default"].node,
  bar: PropTypes__default["default"].bool,
  multi: PropTypes__default["default"].bool,
  tag: tagPropType,
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  min: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  max: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  animated: PropTypes__default["default"].bool,
  striped: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  barClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  style: PropTypes__default["default"].object,
  barStyle: PropTypes__default["default"].object,
  barAriaValueText: PropTypes__default["default"].string,
  barAriaLabelledBy: PropTypes__default["default"].string
};
var defaultProps$A = {
  tag: 'div',
  value: 0,
  min: 0,
  max: 100,
  style: {},
  barStyle: {}
};

var Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      min = props.min,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      style = props.style,
      barStyle = props.barStyle,
      barAriaValueText = props.barAriaValueText,
      barAriaLabelledBy = props.barAriaLabelledBy,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$w);

  var percent = toNumber(value) / toNumber(max) * 100;
  var progressClasses = mapToCssModules(classNames__default["default"](className, 'progress'), cssModule);
  var progressBarClasses = mapToCssModules(classNames__default["default"]('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? "bg-" + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
  var progressBarProps = {
    className: progressBarClasses,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, bar ? style : {}), barStyle), {}, {
      width: percent + "%"
    }),
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': barAriaValueText,
    'aria-labelledby': barAriaLabelledBy,
    children: children
  };

  if (bar) {
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, progressBarProps));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    style: style,
    className: progressClasses
  }), multi ? children : /*#__PURE__*/React__default["default"].createElement("div", progressBarProps));
};

Progress.propTypes = propTypes$B;
Progress.defaultProps = defaultProps$A;
var Progress$1 = Progress;

var propTypes$A = {
  children: PropTypes__default["default"].node.isRequired,
  node: PropTypes__default["default"].any
};

var Portal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM__default["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(React__default["default"].Component);

Portal.propTypes = propTypes$A;
var Portal$1 = Portal;

function noop$1() {}

var FadePropTypes$1 = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$z = {
  isOpen: PropTypes__default["default"].bool,
  autoFocus: PropTypes__default["default"].bool,
  centered: PropTypes__default["default"].bool,
  fullscreen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['sm', 'md', 'lg', 'xl'])]),
  scrollable: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  toggle: PropTypes__default["default"].func,
  keyboard: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,
  labelledBy: PropTypes__default["default"].string,
  backdrop: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['static'])]),
  onEnter: PropTypes__default["default"].func,
  onExit: PropTypes__default["default"].func,
  onOpened: PropTypes__default["default"].func,
  onClosed: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  wrapClassName: PropTypes__default["default"].string,
  modalClassName: PropTypes__default["default"].string,
  backdropClassName: PropTypes__default["default"].string,
  contentClassName: PropTypes__default["default"].string,
  external: PropTypes__default["default"].node,
  fade: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  backdropTransition: FadePropTypes$1,
  modalTransition: FadePropTypes$1,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  unmountOnClose: PropTypes__default["default"].bool,
  returnFocusAfterClose: PropTypes__default["default"].bool,
  container: targetPropType,
  trapFocus: PropTypes__default["default"].bool
};
var propsToOmit$1 = Object.keys(propTypes$z);
var defaultProps$z = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog && this._dialog.parentNode === ev.target) // initial focus when the Modal is opened
      return;
    if (this.modalIndex < Modal.openCount - 1) // last opened modal
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classNames__default["default"](document.body.className, mapToCssModules('modal-open', this.props.cssModule));
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = omit(this.props, propsToOmit$1);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classNames__default["default"](dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames['modal-fullscreen'] = this.props.fullscreen === true, _classNames["modal-fullscreen-" + this.props.fullscreen + "-down"] = typeof this.props.fullscreen === 'string', _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: mapToCssModules(classNames__default["default"]('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(React__default["default"].Component);

Modal.propTypes = propTypes$z;
Modal.defaultProps = defaultProps$z;
Modal.openCount = 0;
var Modal$1 = Modal;

var _excluded$v = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close"];
var propTypes$y = {
  tag: tagPropType,
  wrapTag: tagPropType,
  toggle: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  closeAriaLabel: PropTypes__default["default"].string,
  close: PropTypes__default["default"].object
};
var defaultProps$y = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$v);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), close || closeButton);
};

ModalHeader.propTypes = propTypes$y;
ModalHeader.defaultProps = defaultProps$y;
var ModalHeader$1 = ModalHeader;

var _excluded$u = ["className", "cssModule", "tag"];
var propTypes$x = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$x = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$u);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalBody.propTypes = propTypes$x;
ModalBody.defaultProps = defaultProps$x;
var ModalBody$1 = ModalBody;

var _excluded$t = ["className", "cssModule", "tag"];
var propTypes$w = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$w = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$t);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalFooter.propTypes = propTypes$w;
ModalFooter.defaultProps = defaultProps$w;
var ModalFooter$1 = ModalFooter;

var defaultProps$v = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus'
};

var Tooltip = function Tooltip(props) {
  var popperClasses = classNames__default["default"]('tooltip', 'show', props.popperClassName);
  var classes = classNames__default["default"]('tooltip-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "tooltip-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Tooltip.propTypes = propTypes$E;
Tooltip.defaultProps = defaultProps$v;
var Tooltip$1 = Tooltip;

var _excluded$s = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];
var propTypes$v = {
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  size: PropTypes__default["default"].string,
  bordered: PropTypes__default["default"].bool,
  borderless: PropTypes__default["default"].bool,
  striped: PropTypes__default["default"].bool,
  dark: PropTypes__default["default"].bool,
  hover: PropTypes__default["default"].bool,
  responsive: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  tag: tagPropType,
  responsiveTag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object])
};
var defaultProps$u = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$s);

  var classes = mapToCssModules(classNames__default["default"](className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes$v;
Table.defaultProps = defaultProps$u;
var Table$1 = Table;

var _excluded$r = ["className", "cssModule", "tag", "flush", "horizontal", "numbered"];
var propTypes$u = {
  tag: tagPropType,
  flush: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  horizontal: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  numbered: PropTypes__default["default"].bool
};
var defaultProps$t = {
  tag: 'ul',
  horizontal: false,
  numbered: false
};

var getHorizontalClass = function getHorizontalClass(horizontal) {
  if (horizontal === false) {
    return false;
  } else if (horizontal === true || horizontal === "xs") {
    return "list-group-horizontal";
  }

  return "list-group-horizontal-" + horizontal;
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      horizontal = props.horizontal,
      numbered = props.numbered,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$r);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group', // list-group-horizontal cannot currently be mixed with list-group-flush
  // we only try to apply horizontal classes if flush is false
  flush ? 'list-group-flush' : getHorizontalClass(horizontal), {
    'list-group-numbered': numbered
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroup.propTypes = propTypes$u;
ListGroup.defaultProps = defaultProps$t;
var ListGroup$1 = ListGroup;

var _excluded$q = ["className", "cssModule", "inline", "tag", "innerRef"];
var propTypes$t = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$s = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$q);

    var classes = mapToCssModules(classNames__default["default"](className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(React.Component);

Form.propTypes = propTypes$t;
Form.defaultProps = defaultProps$s;
var Form$1 = Form;

var _excluded$p = ["className", "cssModule", "valid", "tooltip", "tag"];
var propTypes$s = {
  children: PropTypes__default["default"].node,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  valid: PropTypes__default["default"].bool,
  tooltip: PropTypes__default["default"].bool
};
var defaultProps$r = {
  tag: 'div',
  valid: undefined
};

var FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$p);

  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = mapToCssModules(classNames__default["default"](className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormFeedback.propTypes = propTypes$s;
FormFeedback.defaultProps = defaultProps$r;
var FormFeedback$1 = FormFeedback;

var _excluded$o = ["className", "cssModule", "row", "disabled", "check", "inline", "floating", "tag"];
var propTypes$r = {
  children: PropTypes__default["default"].node,
  row: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  "switch": PropTypes__default["default"].bool,
  inline: PropTypes__default["default"].bool,
  floating: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$q = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      floating = props.floating,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$o);

  var formCheck = check || props["switch"];
  var classes = mapToCssModules(classNames__default["default"](className, row ? 'row' : false, formCheck ? 'form-check' : 'mb-3', props["switch"] ? 'form-switch' : false, formCheck && inline ? 'form-check-inline' : false, formCheck && disabled ? 'disabled' : false, floating && 'form-floating'), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormGroup.propTypes = propTypes$r;
FormGroup.defaultProps = defaultProps$q;
var FormGroup$1 = FormGroup;

var _excluded$n = ["className", "cssModule", "inline", "color", "tag"];
var propTypes$q = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$p = {
  tag: 'small',
  color: 'muted'
};

var FormText = function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$n);

  var classes = mapToCssModules(classNames__default["default"](className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormText.propTypes = propTypes$q;
FormText.defaultProps = defaultProps$p;
var FormText$1 = FormText;

var _excluded$m = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
var propTypes$p = {
  children: PropTypes__default["default"].node,
  type: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  bsSize: PropTypes__default["default"].string,
  valid: PropTypes__default["default"].bool,
  invalid: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  plaintext: PropTypes__default["default"].bool,
  addon: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$o = {
  type: 'text'
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$m);

    var checkInput = ['switch', 'radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (rangeInput) {
      formControlClass = 'form-range';
    } else if (selectInput) {
      formControlClass = "form-select";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classNames__default["default"](className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? selectInput ? "form-select-" + bsSize : "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type === 'switch' ? 'checkbox' : type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(React__default["default"].Component);

Input.propTypes = propTypes$p;
Input.defaultProps = defaultProps$o;
var Input$1 = Input;

var _excluded$l = ["className", "cssModule", "tag", "type", "size"];
var propTypes$o = {
  tag: tagPropType,
  type: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$n = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$l);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group', size ? "input-group-" + size : null), cssModule);

  if (props.type === 'dropdown') {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({}, attributes, {
      className: classes
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroup.propTypes = propTypes$o;
InputGroup.defaultProps = defaultProps$n;
var InputGroup$1 = InputGroup;

var _excluded$k = ["className", "cssModule", "tag"];
var propTypes$n = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$m = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$k);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroupText.propTypes = propTypes$n;
InputGroupText.defaultProps = defaultProps$m;
var InputGroupText$1 = InputGroupText;

var _excluded$j = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string, PropTypes__default["default"].number, PropTypes__default["default"].shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$m = {
  children: PropTypes__default["default"].node,
  hidden: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  "for": PropTypes__default["default"].string,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: PropTypes__default["default"].array
};
var defaultProps$l = {
  tag: 'label',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props["for"],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$j);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = mapToCssModules(classNames__default["default"](className, hidden ? 'visually-hidden' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : 'form-label'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

Label.propTypes = propTypes$m;
Label.defaultProps = defaultProps$l;
var Label$1 = Label;

var _excluded$i = ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"];
var propTypes$l = {
  body: PropTypes__default["default"].bool,
  bottom: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  heading: PropTypes__default["default"].bool,
  left: PropTypes__default["default"].bool,
  list: PropTypes__default["default"].bool,
  middle: PropTypes__default["default"].bool,
  object: PropTypes__default["default"].bool,
  right: PropTypes__default["default"].bool,
  tag: tagPropType,
  top: PropTypes__default["default"].bool
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$i);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = mapToCssModules(classNames__default["default"](className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Media.propTypes = propTypes$l;
var Media$1 = Media;

function noop() {}

var FadePropTypes = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$k = {
  autoFocus: PropTypes__default["default"].bool,
  backdrop: PropTypes__default["default"].bool,
  backdropClassName: PropTypes__default["default"].string,
  backdropTransition: FadePropTypes,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  container: targetPropType,
  cssModule: PropTypes__default["default"].object,
  direction: PropTypes__default["default"].oneOf(['start', 'end', 'bottom', 'top', 'left', 'right']),
  fade: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  isOpen: PropTypes__default["default"].bool,
  keyboard: PropTypes__default["default"].bool,
  labelledBy: PropTypes__default["default"].string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes__default["default"].func,
  onEnter: PropTypes__default["default"].func,
  onExit: PropTypes__default["default"].func,
  onOpened: PropTypes__default["default"].func,
  returnFocusAfterClose: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,
  scrollable: PropTypes__default["default"].bool,
  toggle: PropTypes__default["default"].func,
  trapFocus: PropTypes__default["default"].bool,
  unmountOnClose: PropTypes__default["default"].bool,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
var propsToOmit = Object.keys(propTypes$k);
var defaultProps$k = {
  isOpen: false,
  autoFocus: true,
  direction: 'start',
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  offcanvasTransition: {
    timeout: TransitionTimeouts.Offcanvas
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Offcanvas = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Offcanvas, _React$Component);

  function Offcanvas(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  var _proto = Offcanvas.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Offcanvas, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    } // now Offcanvas Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog === ev.target) // initial focus when the Offcanvas is opened
      return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) // last opened offcanvas
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Offcanvas
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Offcanvas
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.offcanvasTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && typeof this._dialog.focus === 'function') {
      this._dialog.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._backdrop;
      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) return; // last opened offcanvas

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      }
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Offcanvas.openCount === 0 && this.props.backdrop && !this.props.scrollable) {
      document.body.style.overflow = 'hidden';
    }

    this.offcanvasIndex = Offcanvas.openCount;
    Offcanvas.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    this.manageFocusAfterClose();
    Offcanvas.openCount = Math.max(0, Offcanvas.openCount - 1);
    document.body.style.overflow = null;
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        direction = _this$props2.direction,
        unmountOnClose = _this$props2.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isOffcanvasHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isOffcanvasHidden ? 'none' : 'block';
      var _this$props3 = this.props,
          className = _this$props3.className,
          backdropClassName = _this$props3.backdropClassName,
          cssModule = _this$props3.cssModule,
          isOpen = _this$props3.isOpen,
          backdrop = _this$props3.backdrop,
          role = _this$props3.role,
          labelledBy = _this$props3.labelledBy,
          style = _this$props3.style;
      var offcanvasAttributes = {
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var offcanvasTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.offcanvasTransition), {}, {
        baseClass: hasTransition ? this.props.offcanvasTransition.baseClass : '',
        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        innerRef: function innerRef(c) {
          _this2._backdrop = c;
        },
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', 'show', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      }));
      var attributes = omit(this.props, propsToOmit);
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, offcanvasAttributes, offcanvasTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas', className, "offcanvas-" + direction), cssModule),
        innerRef: function innerRef(c) {
          _this2._dialog = c;
        },
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          visibility: isOpen ? 'visible' : 'hidden'
        })
      }), this.props.children), Backdrop);
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Offcanvas;
}(React__default["default"].Component);

Offcanvas.propTypes = propTypes$k;
Offcanvas.defaultProps = defaultProps$k;
Offcanvas.openCount = 0;
var Offcanvas$1 = Offcanvas;

var _excluded$h = ["className", "cssModule", "tag"];
var propTypes$j = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$j = {
  tag: 'div'
};

var OffcanvasBody = function OffcanvasBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$h);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

OffcanvasBody.propTypes = propTypes$j;
OffcanvasBody.defaultProps = defaultProps$j;
var OffcanvasBody$1 = OffcanvasBody;

var _excluded$g = ["children", "className", "close", "closeAriaLabel", "cssModule", "tag", "toggle", "wrapTag"];
var propTypes$i = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  close: PropTypes__default["default"].object,
  closeAriaLabel: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  wrapTag: tagPropType
};
var defaultProps$i = {
  closeAriaLabel: 'Close',
  tag: 'h5',
  wrapTag: 'div'
};

var OffcanvasHeader = function OffcanvasHeader(props) {
  var closeButton;

  var children = props.children,
      className = props.className,
      close = props.close,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      toggle = props.toggle,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$g);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('offcanvas-title', cssModule)
  }, children), close || closeButton);
};

OffcanvasHeader.propTypes = propTypes$i;
OffcanvasHeader.defaultProps = defaultProps$i;
var OffcanvasHeader$1 = OffcanvasHeader;

var _excluded$f = ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"];
var propTypes$h = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  listClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  size: PropTypes__default["default"].string,
  tag: tagPropType,
  listTag: tagPropType,
  'aria-label': PropTypes__default["default"].string
};
var defaultProps$h = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var _classNames;

  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$f);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"](listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: classes,
    "aria-label": label
  }, /*#__PURE__*/React__default["default"].createElement(ListTag, _extends({}, attributes, {
    className: listClasses
  })));
};

Pagination.propTypes = propTypes$h;
Pagination.defaultProps = defaultProps$h;
var Pagination$1 = Pagination;

var _excluded$e = ["active", "className", "cssModule", "disabled", "tag"];
var propTypes$g = {
  active: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  tag: tagPropType
};
var defaultProps$g = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$e);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PaginationItem.propTypes = propTypes$g;
PaginationItem.defaultProps = defaultProps$g;
var PaginationItem$1 = PaginationItem;

var _excluded$d = ["className", "cssModule", "next", "previous", "first", "last", "tag"];
var propTypes$f = {
  'aria-label': PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  next: PropTypes__default["default"].bool,
  previous: PropTypes__default["default"].bool,
  first: PropTypes__default["default"].bool,
  last: PropTypes__default["default"].bool,
  tag: tagPropType
};
var defaultProps$f = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      first = props.first,
      last = props.last,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$d);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\xAB";
  } else if (last) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [/*#__PURE__*/React__default["default"].createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden",
      key: "ariaLabel"
    }, ariaLabel)];
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
};

PaginationLink.propTypes = propTypes$f;
PaginationLink.defaultProps = defaultProps$f;
var PaginationLink$1 = PaginationLink;

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = React__default["default"].createContext({});

var propTypes$e = {
  tag: tagPropType,
  activeTab: PropTypes__default["default"].any,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$e = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = omit(this.props, Object.keys(propTypes$e));
    var classes = mapToCssModules(classNames__default["default"]('tab-content', className), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(React.Component);

var TabContent$1 = TabContent;
TabContent.propTypes = propTypes$e;
TabContent.defaultProps = defaultProps$e;

var _excluded$c = ["className", "cssModule", "tabId", "tag"];
var propTypes$d = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tabId: PropTypes__default["default"].any
};
var defaultProps$d = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$c);

  var getClasses = function getClasses(activeTabId) {
    return mapToCssModules(classNames__default["default"]('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/React__default["default"].createElement(TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes$d;
TabPane.defaultProps = defaultProps$d;

var _excluded$b = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];
var propTypes$c = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  closeClassName: PropTypes__default["default"].string,
  closeAriaLabel: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  color: PropTypes__default["default"].string,
  fade: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  toggle: PropTypes__default["default"].func,
  tag: tagPropType,
  transition: PropTypes__default["default"].shape(Fade.propTypes),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$c = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$b);

  var classes = mapToCssModules(classNames__default["default"](className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classNames__default["default"]('btn-close', closeClassName), cssModule);

  var alertTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }) : null, children);
}

Alert.propTypes = propTypes$c;
Alert.defaultProps = defaultProps$c;

var _excluded$a = ["className", "cssModule", "tag", "isOpen", "children", "transition", "fade", "innerRef"];
var propTypes$b = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  fade: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  tag: tagPropType,
  transition: PropTypes__default["default"].shape(Fade.propTypes),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$b = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Toast(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      isOpen = props.isOpen,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$a);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast'), cssModule);

  var toastTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, toastTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), children);
}

Toast.propTypes = propTypes$b;
Toast.defaultProps = defaultProps$b;

var _excluded$9 = ["className", "cssModule", "innerRef", "tag"];
var propTypes$a = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$a = {
  tag: 'div'
};

var ToastBody = function ToastBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$9);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

ToastBody.propTypes = propTypes$a;
ToastBody.defaultProps = defaultProps$a;
var ToastBody$1 = ToastBody;

var _excluded$8 = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close", "tagClassName", "icon"];
var propTypes$9 = {
  tag: tagPropType,
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node]),
  wrapTag: tagPropType,
  toggle: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  closeAriaLabel: PropTypes__default["default"].string,
  charCode: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  close: PropTypes__default["default"].object
};
var defaultProps$9 = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'me-auto',
  closeAriaLabel: 'Close'
};

var ToastHeader = function ToastHeader(props) {
  var closeButton;
  var icon;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      tagClassName = props.tagClassName,
      iconProp = props.icon,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$8);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  if (typeof iconProp === "string") {
    icon = /*#__PURE__*/React__default["default"].createElement("svg", {
      className: mapToCssModules("rounded text-" + iconProp),
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid slice",
      focusable: "false",
      role: "img"
    }, /*#__PURE__*/React__default["default"].createElement("rect", {
      fill: "currentColor",
      width: "100%",
      height: "100%"
    }));
  } else if (iconProp) {
    icon = iconProp;
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), icon, /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules(classNames__default["default"](tagClassName, {
      "ms-2": icon != null
    }), cssModule)
  }, children), close || closeButton);
};

ToastHeader.propTypes = propTypes$9;
ToastHeader.defaultProps = defaultProps$9;
var ToastHeader$1 = ToastHeader;

var _excluded$7 = ["className", "cssModule", "tag", "active", "disabled", "action", "color"];
var propTypes$8 = {
  tag: tagPropType,
  active: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  action: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].any,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$8 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$7);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroupItem.propTypes = propTypes$8;
ListGroupItem.defaultProps = defaultProps$8;
var ListGroupItem$1 = ListGroupItem;

var _excluded$6 = ["className", "cssModule", "tag"];
var propTypes$7 = {
  tag: tagPropType,
  className: PropTypes__default["default"].any,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$7 = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$6);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-heading'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroupItemHeading.propTypes = propTypes$7;
ListGroupItemHeading.defaultProps = defaultProps$7;
var ListGroupItemHeading$1 = ListGroupItemHeading;

var _excluded$5 = ["className", "cssModule", "tag"];
var propTypes$6 = {
  tag: tagPropType,
  className: PropTypes__default["default"].any,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$6 = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$5);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ListGroupItemText.propTypes = propTypes$6;
ListGroupItemText.defaultProps = defaultProps$6;
var ListGroupItemText$1 = ListGroupItemText;

var _excluded$4 = ["className", "cssModule", "tag", "type"];
var propTypes$5 = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  type: PropTypes__default["default"].string
};
var defaultProps$5 = {
  tag: 'ul'
};
var List = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      type = props.type,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$4);

  var classes = mapToCssModules(classNames__default["default"](className, type ? "list-" + type : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
List.name = 'List';
List.propTypes = propTypes$5;
List.defaultProps = defaultProps$5;
var List$1 = List;

var _excluded$3 = ["className", "cssModule", "tag"];
var propTypes$4 = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$4 = {
  tag: 'li'
};
var ListInlineItem = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$3);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-inline-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
ListInlineItem.name = 'ListInlineItem';
ListInlineItem.propTypes = propTypes$4;
ListInlineItem.defaultProps = defaultProps$4;
var ListInlineItem$1 = ListInlineItem;

var UncontrolledAlert = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledAlert.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  };

  return UncontrolledAlert;
}(React.Component);

var UncontrolledAlert$1 = UncontrolledAlert;

var omitKeys$3 = ['defaultOpen'];

var UncontrolledButtonDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(ButtonDropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  };

  return UncontrolledButtonDropdown;
}(React.Component);
UncontrolledButtonDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, ButtonDropdown$1.propTypes);

var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
var propTypes$3 = {
  defaultOpen: PropTypes__default["default"].bool,
  toggler: PropTypes__default["default"].string.isRequired,
  toggleEvents: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)
};
var defaultProps$3 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }

  var _proto = UncontrolledCollapse.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  };

  _proto.toggle = function toggle(e) {
    this.setState(function (_ref) {
      var isOpen = _ref.isOpen;
      return {
        isOpen: !isOpen
      };
    });
    e.preventDefault();
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  };

  return UncontrolledCollapse;
}(React.Component);

UncontrolledCollapse.propTypes = propTypes$3;
UncontrolledCollapse.defaultProps = defaultProps$3;
var UncontrolledCollapse$1 = UncontrolledCollapse;

var omitKeys$1 = ['defaultOpen'];

var UncontrolledDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledDropdown.prototype;

  _proto.toggle = function toggle(e) {
    var _this2 = this;

    var isOpen = !this.state.isOpen;
    this.setState({
      isOpen: isOpen
    }, function () {
      if (_this2.props.onToggle) {
        _this2.props.onToggle(e, isOpen);
      }
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  };

  return UncontrolledDropdown;
}(React.Component);
UncontrolledDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool,
  onToggle: PropTypes__default["default"].func
}, Dropdown$1.propTypes);

var omitKeys = ['defaultOpen'];

var UncontrolledTooltip = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledTooltip.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Tooltip$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };

  return UncontrolledTooltip;
}(React.Component);
UncontrolledTooltip.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Tooltip$1.propTypes);

var _excluded$2 = ["className", "cssModule", "type", "size", "color", "children", "tag"];
var propTypes$2 = {
  tag: tagPropType,
  type: PropTypes__default["default"].string,
  size: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].string
};
var defaultProps$2 = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

var Spinner = function Spinner(props) {
  var className = props.className,
      cssModule = props.cssModule,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$2);

  var classes = mapToCssModules(classNames__default["default"](className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    role: "status"
  }, attributes, {
    className: classes
  }), children && /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('visually-hidden', cssModule)
  }, children));
};

Spinner.propTypes = propTypes$2;
Spinner.defaultProps = defaultProps$2;
var Spinner$1 = Spinner;

var _excluded$1 = ["className", "cssModule", "color", "innerRef", "tag", "animation", "size", "widths"];

var propTypes$1 = _objectSpread2(_objectSpread2({}, Col$1.propTypes), {}, {
  color: PropTypes__default["default"].string,
  tag: tagPropType,
  animation: PropTypes__default["default"].oneOf(['glow', 'wave']),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  size: PropTypes__default["default"].oneOf(['lg', 'sm', 'xs'])
});

var defaultProps$1 = {
  tag: 'span'
};

var Placeholder = function Placeholder(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      Tag = props.tag,
      animation = props.animation,
      size = props.size,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"](className, colClasses, 'placeholder' + (animation ? '-' + animation : ''), size ? 'placeholder-' + size : false, color ? 'bg-' + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes,
    ref: innerRef
  }));
};

Placeholder.propTypes = propTypes$1;
Placeholder.defaultProps = defaultProps$1;
var Placeholder$1 = Placeholder;

var _excluded = ["cssModule", "className", "tag"];
var propTypes = {
  size: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  outline: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  tag: tagPropType
};
var defaultProps = {
  color: 'primary',
  tag: Button$1
};

var PlaceholderButton = function PlaceholderButton(props) {
  var cssModule = props.cssModule,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded);

  var _getColumnClasses = getColumnClasses(attributes, cssModule),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"]("placeholder", className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Button$1, _extends({}, modifiedAttributes, {
    className: classes,
    disabled: true
  }));
};

PlaceholderButton.propTypes = propTypes;
PlaceholderButton.defaultProps = defaultProps;
var PlaceholderButton$1 = PlaceholderButton;

(function () {
  if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  window.CustomEvent = CustomEvent;
})();

(function () {
  if (typeof Object.values === 'function') return;

  var values = function values(O) {
    return Object.keys(O).map(function (key) {
      return O[key];
    });
  };

  Object.values = values;
})();

var polyfill = {
  __proto__: null
};

exports.Accordion = Accordion$1;
exports.AccordionBody = AccordionItem$1;
exports.AccordionContext = AccordionContext;
exports.AccordionHeader = AccordionHeader$1;
exports.AccordionItem = AccordionItem$3;
exports.Alert = Alert;
exports.Badge = Badge$1;
exports.Breadcrumb = Breadcrumb$1;
exports.BreadcrumbItem = BreadcrumbItem$1;
exports.Button = Button$1;
exports.ButtonDropdown = ButtonDropdown$1;
exports.ButtonGroup = ButtonGroup$1;
exports.ButtonToggle = ButtonToggle$1;
exports.ButtonToolbar = ButtonToolbar$1;
exports.Card = Card$1;
exports.CardBody = CardBody$1;
exports.CardColumns = CardColumns$1;
exports.CardDeck = CardDeck$1;
exports.CardFooter = CardFooter$1;
exports.CardGroup = CardGroup$1;
exports.CardHeader = CardHeader$1;
exports.CardImg = CardImg$1;
exports.CardImgOverlay = CardImgOverlay$1;
exports.CardLink = CardLink$1;
exports.CardSubtitle = CardSubtitle$1;
exports.CardText = CardText$1;
exports.CardTitle = CardTitle$1;
exports.Carousel = Carousel$1;
exports.CarouselCaption = CarouselCaption$1;
exports.CarouselControl = CarouselControl$1;
exports.CarouselIndicators = CarouselIndicators$1;
exports.CarouselItem = CarouselItem$1;
exports.Col = Col$1;
exports.Collapse = Collapse$1;
exports.Container = Container$1;
exports.Dropdown = Dropdown$1;
exports.DropdownContext = DropdownContext;
exports.DropdownItem = DropdownItem$1;
exports.DropdownMenu = DropdownMenu$1;
exports.DropdownToggle = DropdownToggle$1;
exports.Fade = Fade;
exports.Form = Form$1;
exports.FormFeedback = FormFeedback$1;
exports.FormGroup = FormGroup$1;
exports.FormText = FormText$1;
exports.Input = Input$1;
exports.InputGroup = InputGroup$1;
exports.InputGroupText = InputGroupText$1;
exports.Label = Label$1;
exports.List = List$1;
exports.ListGroup = ListGroup$1;
exports.ListGroupItem = ListGroupItem$1;
exports.ListGroupItemHeading = ListGroupItemHeading$1;
exports.ListGroupItemText = ListGroupItemText$1;
exports.ListInlineItem = ListInlineItem$1;
exports.Media = Media$1;
exports.Modal = Modal$1;
exports.ModalBody = ModalBody$1;
exports.ModalFooter = ModalFooter$1;
exports.ModalHeader = ModalHeader$1;
exports.Nav = Nav$1;
exports.NavItem = NavItem$1;
exports.NavLink = NavLink$1;
exports.Navbar = Navbar$1;
exports.NavbarBrand = NavbarBrand$1;
exports.NavbarText = NavbarText$1;
exports.NavbarToggler = NavbarToggler$1;
exports.Offcanvas = Offcanvas$1;
exports.OffcanvasBody = OffcanvasBody$1;
exports.OffcanvasHeader = OffcanvasHeader$1;
exports.Pagination = Pagination$1;
exports.PaginationItem = PaginationItem$1;
exports.PaginationLink = PaginationLink$1;
exports.Placeholder = Placeholder$1;
exports.PlaceholderButton = PlaceholderButton$1;
exports.Polyfill = polyfill;
exports.Popover = Popover$1;
exports.PopoverBody = PopoverBody$1;
exports.PopoverHeader = PopoverHeader$1;
exports.PopperContent = PopperContent$1;
exports.PopperTargetHelper = PopperTargetHelper$1;
exports.Progress = Progress$1;
exports.Row = Row$1;
exports.Spinner = Spinner$1;
exports.TabContent = TabContent$1;
exports.TabPane = TabPane;
exports.Table = Table$1;
exports.Toast = Toast;
exports.ToastBody = ToastBody$1;
exports.ToastHeader = ToastHeader$1;
exports.Tooltip = Tooltip$1;
exports.UncontrolledAccordion = UncontrolledAccordion$1;
exports.UncontrolledAlert = UncontrolledAlert$1;
exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
exports.UncontrolledCarousel = UncontrolledCarousel$1;
exports.UncontrolledCollapse = UncontrolledCollapse$1;
exports.UncontrolledDropdown = UncontrolledDropdown;
exports.UncontrolledPopover = UncontrolledPopover;
exports.UncontrolledTooltip = UncontrolledTooltip;
exports.Util = utils;
//# sourceMappingURL=reactstrap.cjs.map


/***/ }),

/***/ "./pages/login/index.jsx":
/*!*******************************!*\
  !*** ./pages/login/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/inputtext */ "primereact/inputtext");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/password */ "primereact/password");
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_password__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/button */ "primereact/button");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/progressspinner */ "primereact/progressspinner");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.cjs");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_LoginDataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/LoginDataService */ "./services/LoginDataService.jsx");
/* harmony import */ var _store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/login_logout */ "./store/actions/login_logout/index.jsx");
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/color-mode */ "@chakra-ui/color-mode");
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\login\\index.jsx";
//imports api


 //imports styles

 //imports bibliotecas





 //imports services

 //actions




function Login(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
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
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: dadosErroLogin,
    1: setDadosErroLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (router.asPath === '/login' && localStorage.getItem('accessToken') !== null) {
      router.push('/');
    }
  }, []);

  const logIn = () => {
    setLoadingCredentials(true);
    _services_LoginDataService__WEBPACK_IMPORTED_MODULE_10__["LoginDataService"].logIn(login, password).then(response => {
      if (response.data.code > 300) {
        setDadosErroLogin(response.data);
        setVisible(true);
        setLoadingCredentials(false);
      } else {
        setVisible(false);
        localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
        setLoadingCredentials(false);
        dispatch(Object(_store_actions_login_logout__WEBPACK_IMPORTED_MODULE_11__["showButtonLoginAction"])(false));
        router.push('/');
      }
    });
  };

  const onDismiss = () => setVisible(false);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout_login,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.box_messages,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
        color: "danger",
        isOpen: visible,
        toggle: onDismiss,
        children: dadosErroLogin.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout_login_no_messages,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.box_login,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], {
          value: login,
          onChange: e => setLogin(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_password__WEBPACK_IMPORTED_MODULE_6__["Password"], {
          className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.password,
          value: password,
          onChange: e => setPassword(e.target.value),
          toggleMask: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          label: "Login",
          onClick: logIn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), loadingCredentials && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
  isLogged,
  validateToken
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
  localStorage.removeItem('accessToken');
  router.push('/');
}

function isLogged() {
  const token = localStorage.getItem('accessToken');
  console.log(token);
  return token;
}

function validateToken() {
  const token = localStorage.getItem('accessToken');
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/auth/validateToken', {
    params: {
      token: token
    }
  });
}

/***/ }),

/***/ "./store/actions/index.jsx":
/*!*********************************!*\
  !*** ./store/actions/index.jsx ***!
  \*********************************/
/*! exports provided: SHOW_BUTTON_LOGIN, LOAD_SELECTED_DATA, LOAD_ANIME_LIST, LOAD_USER_ENTITY_SELECTED, LOAD_USER_ENTITY_LIST, LOAD_ACCESS_PROFILE_SELECTED, LOAD_ACCESS_PROFILE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_BUTTON_LOGIN", function() { return SHOW_BUTTON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SELECTED_DATA", function() { return LOAD_SELECTED_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ANIME_LIST", function() { return LOAD_ANIME_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_ENTITY_SELECTED", function() { return LOAD_USER_ENTITY_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_ENTITY_LIST", function() { return LOAD_USER_ENTITY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ACCESS_PROFILE_SELECTED", function() { return LOAD_ACCESS_PROFILE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ACCESS_PROFILE_LIST", function() { return LOAD_ACCESS_PROFILE_LIST; });
const SHOW_BUTTON_LOGIN = "SHOW_BUTTON_LOGIN";
const LOAD_SELECTED_DATA = "LOAD_SELECTED_DATA";
const LOAD_ANIME_LIST = "LOAD_ANIME_LIST";
const LOAD_USER_ENTITY_SELECTED = "LOAD_USER_ENTITY_SELECTED";
const LOAD_USER_ENTITY_LIST = "LOAD_USER_ENTITY_LIST";
const LOAD_ACCESS_PROFILE_SELECTED = "LOAD_ACCESS_PROFILE_SELECTED";
const LOAD_ACCESS_PROFILE_LIST = "LOAD_ACCESS_PROFILE_LIST";

/***/ }),

/***/ "./store/actions/login_logout/index.jsx":
/*!**********************************************!*\
  !*** ./store/actions/login_logout/index.jsx ***!
  \**********************************************/
/*! exports provided: showButtonLoginAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showButtonLoginAction", function() { return showButtonLoginAction; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../actions */ "./store/actions/index.jsx");

const showButtonLoginAction = payload => ({
  type: _actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_BUTTON_LOGIN"],
  payload
});

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
	"layout_login_no_messages": "login_layout_login_no_messages__1mbJG",
	"box_login": "login_box_login__1-5UR",
	"box_messages": "login_box_messages__2Uc9g",
	"password": "login_password__1ZMI1"
};


/***/ }),

/***/ "@chakra-ui/color-mode":
/*!****************************************!*\
  !*** external "@chakra-ui/color-mode" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/color-mode");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-popper":
/*!*******************************!*\
  !*** external "react-popper" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0c3RyYXAvZGlzdC9yZWFjdHN0cmFwLmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9sb2dpbl9sb2dvdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvY29sb3ItbW9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVyZWFjdC9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvcGFzc3dvcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L3Byb2dyZXNzc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBvcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJzZXRMb2dpbiIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmdDcmVkZW50aWFscyIsInNldExvYWRpbmdDcmVkZW50aWFscyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiZGFkb3NFcnJvTG9naW4iLCJzZXREYWRvc0Vycm9Mb2dpbiIsInVzZUVmZmVjdCIsImFzUGF0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibG9nSW4iLCJMb2dpbkRhdGFTZXJ2aWNlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvZGUiLCJzZXRJdGVtIiwidG9rZW4iLCJzaG93QnV0dG9uTG9naW5BY3Rpb24iLCJvbkRpc21pc3MiLCJzdHlsZXMiLCJsYXlvdXRfbG9naW4iLCJib3hfbWVzc2FnZXMiLCJtZXNzYWdlIiwibGF5b3V0X2xvZ2luX25vX21lc3NhZ2VzIiwiYm94X2xvZ2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYmFzZVVybCIsImxvZ091dCIsImlzTG9nZ2VkIiwidmFsaWRhdGVUb2tlbiIsInVzZXJuYW1lIiwiYXhpb3MiLCJwb3N0IiwicmVtb3ZlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJwYXJhbXMiLCJTSE9XX0JVVFRPTl9MT0dJTiIsIkxPQURfU0VMRUNURURfREFUQSIsIkxPQURfQU5JTUVfTElTVCIsIkxPQURfVVNFUl9FTlRJVFlfU0VMRUNURUQiLCJMT0FEX1VTRVJfRU5USVRZX0xJU1QiLCJMT0FEX0FDQ0VTU19QUk9GSUxFX1NFTEVDVEVEIiwiTE9BRF9BQ0NFU1NfUFJPRklMRV9MSVNUIiwicGF5bG9hZCIsInR5cGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsOEJBQVk7QUFDcEMsaUJBQWlCLG1CQUFPLENBQUMsOEJBQVk7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsa0NBQWM7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLDRCQUFXO0FBQ2xDLDJCQUEyQixtQkFBTyxDQUFDLHNEQUF3Qjs7QUFFM0Qsb0NBQW9DLDREQUE0RCxnQkFBZ0I7O0FBRWhIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRCxrQ0FBa0MsbUNBQW1DO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssdUpBQXVKLG1CQUFtQjtBQUMvSztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsNERBQTREOztBQUU1RDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGtGQUFrRixvQkFBb0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHFEQUFxRCxtREFBbUQ7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHFEQUFxRCxtREFBbUQ7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7O0FBRzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsa0ZBQWtGO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQseURBQXlELGdEQUFnRDtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNERBQTRELG1EQUFtRDtBQUMvRztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7QUFFaEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0c7O0FBRXBHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsMEVBQTBFLHFDQUFxQztBQUMvRztBQUNBO0FBQ0EsS0FBSzs7QUFFTCxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCLGdCQUFnQjtBQUM1RjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRjs7QUFFbkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGLHdIQUF3SDtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJFQUEyRSxxREFBcUQ7QUFDaEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsOEVBQThFLHdEQUF3RDtBQUN0STtBQUNBO0FBQ0EsT0FBTzs7QUFFUCx3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPLHdFQUF3RTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBLEtBQUs7QUFDTDs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRUFBK0UseURBQXlEO0FBQ3hJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGtGQUFrRjtBQUNsRjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMkVBQTJFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVFQUF1RTtBQUM1RTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHdCQUF3QjtBQUN0RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsdUVBQXVFLHFDQUFxQztBQUM1RztBQUNBO0FBQ0EsR0FBRzs7QUFFSCwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0I7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLHFDQUFxQztBQUM1RztBQUNBO0FBQ0EsR0FBRzs7QUFFSCwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMFBBQTBQOztBQUUxUDtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Q0TkE7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUVsQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csa0JBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBOENKLHNEQUFRLENBQUMsS0FBRCxDQUE1RDtBQUNBLFFBQU07QUFBQSxPQUFDSyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qk4sc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NSLHNEQUFRLENBQUMsRUFBRCxDQUFwRDtBQUVBUyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFHYixNQUFNLENBQUNjLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixNQUF3QyxJQUF6RSxFQUErRTtBQUMzRWhCLFlBQU0sQ0FBQ2lCLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFFBQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCVix5QkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0FXLGdGQUFnQixDQUFDRCxLQUFqQixDQUF1QmhCLEtBQXZCLEVBQThCRyxRQUE5QixFQUF3Q2UsSUFBeEMsQ0FBNkNDLFFBQVEsSUFBSTtBQUNyRCxVQUFHQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsSUFBZCxHQUFxQixHQUF4QixFQUE0QjtBQUN4QlgseUJBQWlCLENBQUNTLFFBQVEsQ0FBQ0MsSUFBVixDQUFqQjtBQUNBWixrQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRiw2QkFBcUIsQ0FBQyxLQUFELENBQXJCO0FBQ0gsT0FKRCxNQUlPO0FBQ0hFLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FLLG9CQUFZLENBQUNTLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsWUFBWUgsUUFBUSxDQUFDQyxJQUFULENBQWNHLEtBQTlEO0FBQ0FqQiw2QkFBcUIsQ0FBQyxLQUFELENBQXJCO0FBQ0FWLGdCQUFRLENBQUM0QiwwRkFBcUIsQ0FBQyxLQUFELENBQXRCLENBQVI7QUFDQTFCLGNBQU0sQ0FBQ2lCLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixLQVpEO0FBYUgsR0FmRDs7QUFpQkEsUUFBTVUsU0FBUyxHQUFHLE1BQU1qQixVQUFVLENBQUMsS0FBRCxDQUFsQzs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWtCLCtEQUFNLENBQUNDLFlBQXZCO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUVELCtEQUFNLENBQUNFLFlBQXZCO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTyxhQUFLLEVBQUMsUUFBYjtBQUFzQixjQUFNLEVBQUVyQixPQUE5QjtBQUF1QyxjQUFNLEVBQUVrQixTQUEvQztBQUFBLGtCQUNLaEIsY0FBYyxDQUFDb0I7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU9JO0FBQUssZUFBUyxFQUFFSCwrREFBTSxDQUFDSSx3QkFBdkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVKLCtEQUFNLENBQUNLLFNBQXZCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHSSxxRUFBQyw4REFBRDtBQUFXLGVBQUssRUFBRS9CLEtBQWxCO0FBQXlCLGtCQUFRLEVBQUdnQyxDQUFELElBQU8vQixRQUFRLENBQUMrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSxxRUFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUVSLCtEQUFNLENBQUN2QixRQUE1QjtBQUFzQyxlQUFLLEVBQUVBLFFBQTdDO0FBQXVELGtCQUFRLEVBQUc2QixDQUFELElBQU81QixXQUFXLENBQUM0QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuRjtBQUFxRyxvQkFBVTtBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBUUkscUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUMsT0FBZDtBQUFzQixpQkFBTyxFQUFFbEI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixFQVNLWCxrQkFBa0IsaUJBQ2YscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0FBRWNYLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTXlDLE9BQU8sR0FBSSx1QkFBakI7QUFFUyxNQUFNbEIsZ0JBQWdCLEdBQUc7QUFDOUJELE9BRDhCO0FBRTlCb0IsUUFGOEI7QUFHOUJDLFVBSDhCO0FBSTlCQztBQUo4QixDQUF6Qjs7QUFPUCxTQUFTdEIsS0FBVCxDQUFldUIsUUFBZixFQUF5QnBDLFFBQXpCLEVBQW1DO0FBQ2pDLE1BQUlpQixJQUFJLEdBQUc7QUFBQ21CLFlBQUQ7QUFBV3BDO0FBQVgsR0FBWDtBQUNBLFNBQU9xQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdOLE9BQU8sR0FBQyxjQUFuQixFQUFtQ2YsSUFBbkMsRUFBeUMsRUFBekMsQ0FBUDtBQUNEOztBQUVELFNBQVNnQixNQUFULEdBQWtCO0FBQ2hCLFFBQU10QyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FjLGNBQVksQ0FBQzZCLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQTVDLFFBQU0sQ0FBQ2lCLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBRUQsU0FBU3NCLFFBQVQsR0FBb0I7QUFDbEIsUUFBTWQsS0FBSyxHQUFHVixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBZDtBQUNBNkIsU0FBTyxDQUFDQyxHQUFSLENBQVlyQixLQUFaO0FBQ0EsU0FBT0EsS0FBUDtBQUNEOztBQUVELFNBQVNlLGFBQVQsR0FBeUI7QUFDdkIsUUFBTWYsS0FBSyxHQUFHVixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBZDtBQUNBLFNBQU8wQiw0Q0FBSyxDQUFDSyxHQUFOLENBQVVWLE9BQU8sR0FBQyxxQkFBbEIsRUFBeUM7QUFDOUNXLFVBQU0sRUFBRTtBQUNOdkIsV0FBSyxFQUFFQTtBQUREO0FBRHNDLEdBQXpDLENBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUNwQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU13QixpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTTdCLHFCQUFxQixHQUFHOEIsT0FBTyxLQUFLO0FBQy9DQyxNQUFJLEVBQUVSLDBEQUR5QztBQUUvQ087QUFGK0MsQ0FBTCxDQUFyQyxDOzs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi9pbmRleC5qc3hcIik7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xudmFyIHJlYWN0UG9wcGVyID0gcmVxdWlyZSgncmVhY3QtcG9wcGVyJyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciByZWFjdFRyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3QpO1xudmFyIFByb3BUeXBlc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUHJvcFR5cGVzKTtcbnZhciBjbGFzc05hbWVzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShjbGFzc05hbWVzKTtcbnZhciBSZWFjdERPTV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3RET00pO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuXG4gIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHN0eWxlcyAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi92NC4wLjAtYWxwaGEuNC9zY3NzL19tb2RhbC5zY3NzI0wxMDYtTDExM1xuXG4gIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn1cbmZ1bmN0aW9uIHNldFNjcm9sbGJhcldpZHRoKHBhZGRpbmcpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID4gMCA/IHBhZGRpbmcgKyBcInB4XCIgOiBudWxsO1xufVxuZnVuY3Rpb24gaXNCb2R5T3ZlcmZsb3dpbmcoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XG59XG5mdW5jdGlvbiBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKTtcbiAgcmV0dXJuIHBhcnNlSW50KHN0eWxlICYmIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLCAxMCk7XG59XG5mdW5jdGlvbiBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCkge1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi92NC4wLjAtYWxwaGEuNi9qcy9zcmMvbW9kYWwuanMjTDQzM1xuXG4gIHZhciBmaXhlZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJylbMF07XG4gIHZhciBib2R5UGFkZGluZyA9IGZpeGVkQ29udGVudCA/IHBhcnNlSW50KGZpeGVkQ29udGVudC5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgMCwgMTApIDogMDtcblxuICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcoKSkge1xuICAgIHNldFNjcm9sbGJhcldpZHRoKGJvZHlQYWRkaW5nICsgc2Nyb2xsYmFyV2lkdGgpO1xuICB9XG59XG52YXIgZ2xvYmFsQ3NzTW9kdWxlO1xuZnVuY3Rpb24gc2V0R2xvYmFsQ3NzTW9kdWxlKGNzc01vZHVsZSkge1xuICBnbG9iYWxDc3NNb2R1bGUgPSBjc3NNb2R1bGU7XG59XG5mdW5jdGlvbiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lLCBjc3NNb2R1bGUpIHtcbiAgaWYgKGNsYXNzTmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NOYW1lID0gJyc7XG4gIH1cblxuICBpZiAoY3NzTW9kdWxlID09PSB2b2lkIDApIHtcbiAgICBjc3NNb2R1bGUgPSBnbG9iYWxDc3NNb2R1bGU7XG4gIH1cblxuICBpZiAoIWNzc01vZHVsZSkgcmV0dXJuIGNsYXNzTmFtZTtcbiAgcmV0dXJuIGNsYXNzTmFtZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjc3NNb2R1bGVbY10gfHwgYztcbiAgfSkuam9pbignICcpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSBgb2JqYCB0aGF0IGFyZSBub3QgaW4gdGhlIGFycmF5IGBvbWl0S2V5c2AuXG4gKi9cblxuZnVuY3Rpb24gb21pdChvYmosIG9taXRLZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAob21pdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZmlsdGVyZWQgY29weSBvZiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBzcGVjaWZpZWQga2V5cy5cbiAqL1xuXG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICB2YXIgcGlja0tleXMgPSBBcnJheS5pc0FycmF5KGtleXMpID8ga2V5cyA6IFtrZXlzXTtcbiAgdmFyIGxlbmd0aCA9IHBpY2tLZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgbGVuZ3RoIC09IDE7XG4gICAga2V5ID0gcGlja0tleXNbbGVuZ3RoXTtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciB3YXJuZWQgPSB7fTtcbmZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCF3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHdhcm5lZFttZXNzYWdlXSA9IHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQocHJvcFR5cGUsIGV4cGxhbmF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9PSBudWxsICYmIHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3YXJuT25jZShcIlxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIHByb3BlcnR5IG9mIFxcXCJcIiArIGNvbXBvbmVudE5hbWUgKyBcIlxcXCIgaGFzIGJlZW4gZGVwcmVjYXRlZC5cXG5cIiArIGV4cGxhbmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcFR5cGUuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpKSk7XG4gIH07XG59IC8vIFNoaW0gRWxlbWVudCBpZiBuZWVkZWQgKGUuZy4gaW4gTm9kZSBlbnZpcm9ubWVudClcblxudmFyIEVsZW1lbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuRWxlbWVudCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuZnVuY3Rpb24gRE9NRWxlbWVudChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgYCcgKyBwcm9wTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLiBFeHBlY3RlZCBwcm9wIHRvIGJlIGFuIGluc3RhbmNlIG9mIEVsZW1lbnQuIFZhbGlkYXRpb24gZmFpbGVkLicpO1xuICB9XG59XG52YXIgdGFyZ2V0UHJvcFR5cGUgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgRE9NRWxlbWVudCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIGN1cnJlbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59KV0pO1xudmFyIHRhZ1Byb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAkJHR5cGVvZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zeW1ib2wsXG4gIHJlbmRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59KSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgJCR0eXBlb2Y6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3ltYm9sLFxuICByZW5kZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY1xufSldKSldKTtcbi8qIGVzbGludCBrZXktc3BhY2luZzogW1wiZXJyb3JcIiwgeyBhZnRlckNvbG9uOiB0cnVlLCBhbGlnbjogXCJ2YWx1ZVwiIH1dICovXG4vLyBUaGVzZSBhcmUgYWxsIHNldHVwIHRvIG1hdGNoIHdoYXQgaXMgaW4gdGhlIGJvb3RzdHJhcCBfdmFyaWFibGVzLnNjc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LWRldi9zY3NzL192YXJpYWJsZXMuc2Nzc1xuXG52YXIgVHJhbnNpdGlvblRpbWVvdXRzID0ge1xuICBGYWRlOiAxNTAsXG4gIC8vICR0cmFuc2l0aW9uLWZhZGVcbiAgQ29sbGFwc2U6IDM1MCxcbiAgLy8gJHRyYW5zaXRpb24tY29sbGFwc2VcbiAgTW9kYWw6IDMwMCxcbiAgLy8gJG1vZGFsLXRyYW5zaXRpb25cbiAgQ2Fyb3VzZWw6IDYwMCxcbiAgLy8gJGNhcm91c2VsLXRyYW5zaXRpb25cbiAgT2ZmY2FudmFzOiAzMDAgLy8gJG9mZmNhbnZhcy10cmFuc2l0aW9uXG5cbn07IC8vIER1cGxpY2F0ZWQgVHJhbnNpdGlvbi5wcm9wVHlwZSBrZXlzIHRvIGVuc3VyZSB0aGF0IFJlYWN0c3RyYXAgYnVpbGRzXG4vLyBmb3IgZGlzdHJpYnV0aW9uIHByb3Blcmx5IGV4Y2x1ZGUgdGhlc2Uga2V5cyBmb3IgbmVzdGVkIGNoaWxkIEhUTUwgYXR0cmlidXRlc1xuLy8gc2luY2UgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIHJlbW92ZXMgcHJvcFR5cGVzIGluIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG52YXIgVHJhbnNpdGlvblByb3BUeXBlS2V5cyA9IFsnaW4nLCAnbW91bnRPbkVudGVyJywgJ3VubW91bnRPbkV4aXQnLCAnYXBwZWFyJywgJ2VudGVyJywgJ2V4aXQnLCAndGltZW91dCcsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnXTtcbnZhciBUcmFuc2l0aW9uU3RhdHVzZXMgPSB7XG4gIEVOVEVSSU5HOiAnZW50ZXJpbmcnLFxuICBFTlRFUkVEOiAnZW50ZXJlZCcsXG4gIEVYSVRJTkc6ICdleGl0aW5nJyxcbiAgRVhJVEVEOiAnZXhpdGVkJ1xufTtcbnZhciBrZXlDb2RlcyA9IHtcbiAgZXNjOiAyNyxcbiAgc3BhY2U6IDMyLFxuICBlbnRlcjogMTMsXG4gIHRhYjogOSxcbiAgdXA6IDM4LFxuICBkb3duOiA0MCxcbiAgaG9tZTogMzYsXG4gIGVuZDogMzUsXG4gIG46IDc4LFxuICBwOiA4MFxufTtcbnZhciBQb3BwZXJQbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGlzUmVhY3RSZWZPYmoodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2N1cnJlbnQnIGluIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgdmFyIE5BTiA9IDAgLyAwO1xuXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnc3ltYm9sJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJykge1xuICAgIHJldHVybiBOQU47XG4gIH1cblxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IFwiXCIgKyBvdGhlciA6IG90aGVyO1xuICB9XG5cbiAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gL14wYlswMV0rJC9pLnRlc3QodmFsdWUpO1xuICByZXR1cm4gaXNCaW5hcnkgfHwgL14wb1swLTddKyQvaS50ZXN0KHZhbHVlKSA/IHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KSA6IC9eWy0rXTB4WzAtOWEtZl0rJC9pLnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgdGFnID09PSAnW29iamVjdCBQcm94eV0nO1xufVxuZnVuY3Rpb24gZmluZERPTUVsZW1lbnRzKHRhcmdldCkge1xuICBpZiAoaXNSZWFjdFJlZk9iaih0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5jdXJyZW50O1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBjYW5Vc2VET00pIHtcbiAgICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0YXJnZXQgJ1wiICsgdGFyZ2V0ICsgXCInIGNvdWxkIG5vdCBiZSBpZGVudGlmaWVkIGluIHRoZSBkb20sIHRpcDogY2hlY2sgc3BlbGxpbmdcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBpc0FycmF5T3JOb2RlTGlzdChlbHMpIHtcbiAgaWYgKGVscyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGVscykgfHwgY2FuVXNlRE9NICYmIHR5cGVvZiBlbHMubGVuZ3RoID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQsIGFsbEVsZW1lbnRzKSB7XG4gIHZhciBlbHMgPSBmaW5kRE9NRWxlbWVudHModGFyZ2V0KTtcblxuICBpZiAoYWxsRWxlbWVudHMpIHtcbiAgICBpZiAoaXNBcnJheU9yTm9kZUxpc3QoZWxzKSkge1xuICAgICAgcmV0dXJuIGVscztcbiAgICB9XG5cbiAgICBpZiAoZWxzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtlbHNdO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgICByZXR1cm4gZWxzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBlbHM7XG4gIH1cbn1cbnZhciBkZWZhdWx0VG9nZ2xlRXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ2NsaWNrJ107XG5mdW5jdGlvbiBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKF9lbHMsIGhhbmRsZXIsIF9ldmVudHMsIHVzZUNhcHR1cmUpIHtcbiAgdmFyIGVscyA9IF9lbHM7XG5cbiAgaWYgKCFpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgZWxzID0gW2Vsc107XG4gIH1cblxuICB2YXIgZXZlbnRzID0gX2V2ZW50cztcblxuICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIGlmICghaXNBcnJheU9yTm9kZUxpc3QoZWxzKSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJyB8fCAhQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgVGhlIGZpcnN0IGFyZ3VtZW50IG9mIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBET00gbm9kZSBvciBhbiBhcnJheSBvbiBET00gbm9kZXMgb3IgTm9kZUxpc3QuXFxuICAgICAgVGhlIHNlY29uZCBtdXN0IGJlIGEgZnVuY3Rpb24uXFxuICAgICAgVGhlIHRoaXJkIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCByZXByZXNlbnRzIERPTSBldmVudHNcXG4gICAgXCIpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChldmVudHMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG52YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1t0YWJpbmRleF06bm90KC5tb2RhbCknLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKSddO1xuXG52YXIgdXRpbHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0U2Nyb2xsYmFyV2lkdGg6IGdldFNjcm9sbGJhcldpZHRoLFxuICBzZXRTY3JvbGxiYXJXaWR0aDogc2V0U2Nyb2xsYmFyV2lkdGgsXG4gIGlzQm9keU92ZXJmbG93aW5nOiBpc0JvZHlPdmVyZmxvd2luZyxcbiAgZ2V0T3JpZ2luYWxCb2R5UGFkZGluZzogZ2V0T3JpZ2luYWxCb2R5UGFkZGluZyxcbiAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcjogY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcixcbiAgc2V0R2xvYmFsQ3NzTW9kdWxlOiBzZXRHbG9iYWxDc3NNb2R1bGUsXG4gIG1hcFRvQ3NzTW9kdWxlczogbWFwVG9Dc3NNb2R1bGVzLFxuICBvbWl0OiBvbWl0LFxuICBwaWNrOiBwaWNrLFxuICB3YXJuT25jZTogd2Fybk9uY2UsXG4gIGRlcHJlY2F0ZWQ6IGRlcHJlY2F0ZWQsXG4gIERPTUVsZW1lbnQ6IERPTUVsZW1lbnQsXG4gIHRhcmdldFByb3BUeXBlOiB0YXJnZXRQcm9wVHlwZSxcbiAgdGFnUHJvcFR5cGU6IHRhZ1Byb3BUeXBlLFxuICBUcmFuc2l0aW9uVGltZW91dHM6IFRyYW5zaXRpb25UaW1lb3V0cyxcbiAgVHJhbnNpdGlvblByb3BUeXBlS2V5czogVHJhbnNpdGlvblByb3BUeXBlS2V5cyxcbiAgVHJhbnNpdGlvblN0YXR1c2VzOiBUcmFuc2l0aW9uU3RhdHVzZXMsXG4gIGtleUNvZGVzOiBrZXlDb2RlcyxcbiAgUG9wcGVyUGxhY2VtZW50czogUG9wcGVyUGxhY2VtZW50cyxcbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG4gIGlzUmVhY3RSZWZPYmo6IGlzUmVhY3RSZWZPYmosXG4gIHRvTnVtYmVyOiB0b051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBmaW5kRE9NRWxlbWVudHM6IGZpbmRET01FbGVtZW50cyxcbiAgaXNBcnJheU9yTm9kZUxpc3Q6IGlzQXJyYXlPck5vZGVMaXN0LFxuICBnZXRUYXJnZXQ6IGdldFRhcmdldCxcbiAgZGVmYXVsdFRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50cyxcbiAgYWRkTXVsdGlwbGVFdmVudExpc3RlbmVyczogYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyxcbiAgZm9jdXNhYmxlRWxlbWVudHM6IGZvY3VzYWJsZUVsZW1lbnRzXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDFlID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZmx1aWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFrID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBmbHVpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWkgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDb250YWluZXIgPSBmdW5jdGlvbiBDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGZsdWlkID0gcHJvcHMuZmx1aWQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxZSk7XG5cbiAgdmFyIGNvbnRhaW5lckNsYXNzID0gJ2NvbnRhaW5lcic7XG5cbiAgaWYgKGZsdWlkID09PSB0cnVlKSB7XG4gICAgY29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyLWZsdWlkJztcbiAgfSBlbHNlIGlmIChmbHVpZCkge1xuICAgIGNvbnRhaW5lckNsYXNzID0gXCJjb250YWluZXItXCIgKyBmbHVpZDtcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3MpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxaztcbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWk7XG52YXIgQ29udGFpbmVyJDEgPSBDb250YWluZXI7XG5cbnZhciBfZXhjbHVkZWQkMWQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJub0d1dHRlcnNcIiwgXCJ0YWdcIiwgXCJmb3JtXCIsIFwid2lkdGhzXCJdO1xudmFyIHJvd0NvbFdpZHRocyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgcm93Q29sc1Byb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIHByb3BUeXBlcyQxaiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbm9HdXR0ZXJzOiBkZXByZWNhdGVkKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgXCJQbGVhc2UgdXNlIEJvb3RzdHJhcCA1IGd1dHRlciB1dGlsaXR5IGNsYXNzZXMuIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMC9sYXlvdXQvZ3V0dGVycy9cIiksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGZvcm06IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgeHM6IHJvd0NvbHNQcm9wVHlwZSxcbiAgc206IHJvd0NvbHNQcm9wVHlwZSxcbiAgbWQ6IHJvd0NvbHNQcm9wVHlwZSxcbiAgbGc6IHJvd0NvbHNQcm9wVHlwZSxcbiAgeGw6IHJvd0NvbHNQcm9wVHlwZSxcbiAgeHhsOiByb3dDb2xzUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFoID0ge1xuICB0YWc6ICdkaXYnLFxuICB3aWR0aHM6IHJvd0NvbFdpZHRoc1xufTtcblxudmFyIFJvdyA9IGZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbm9HdXR0ZXJzID0gcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxZCk7XG5cbiAgdmFyIGNvbENsYXNzZXMgPSBbXTtcbiAgd2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKGNvbFdpZHRoLCBpKSB7XG4gICAgdmFyIGNvbFNpemUgPSBwcm9wc1tjb2xXaWR0aF07XG4gICAgZGVsZXRlIGF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2xTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcbiAgICBjb2xDbGFzc2VzLnB1c2goaXNYcyA/IFwicm93LWNvbHMtXCIgKyBjb2xTaXplIDogXCJyb3ctY29scy1cIiArIGNvbFdpZHRoICsgXCItXCIgKyBjb2xTaXplKTtcbiAgfSk7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgbm9HdXR0ZXJzID8gJ2d4LTAnIDogbnVsbCwgZm9ybSA/ICdmb3JtLXJvdycgOiAncm93JywgY29sQ2xhc3NlcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Sb3cucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFqO1xuUm93LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxaDtcbnZhciBSb3ckMSA9IFJvdztcblxudmFyIF9leGNsdWRlZCQxYyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcIndpZHRoc1wiLCBcInRhZ1wiXTtcbnZhciBjb2xXaWR0aHMkMSA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgc3RyaW5nT3JOdW1iZXJQcm9wJDEgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSk7XG52YXIgY29sdW1uUHJvcHMkMSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBvcmRlcjogc3RyaW5nT3JOdW1iZXJQcm9wJDEsXG4gIG9mZnNldDogc3RyaW5nT3JOdW1iZXJQcm9wJDFcbn0pXSk7XG52YXIgcHJvcFR5cGVzJDFpID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB4czogY29sdW1uUHJvcHMkMSxcbiAgc206IGNvbHVtblByb3BzJDEsXG4gIG1kOiBjb2x1bW5Qcm9wcyQxLFxuICBsZzogY29sdW1uUHJvcHMkMSxcbiAgeGw6IGNvbHVtblByb3BzJDEsXG4gIHh4bDogY29sdW1uUHJvcHMkMSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgd2lkdGhzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxZyA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgd2lkdGhzOiBjb2xXaWR0aHMkMVxufTtcblxudmFyIGdldENvbHVtblNpemVDbGFzcyQxID0gZnVuY3Rpb24gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2xTaXplKSB7XG4gIGlmIChjb2xTaXplID09PSB0cnVlIHx8IGNvbFNpemUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sJyA6IFwiY29sLVwiICsgY29sV2lkdGg7XG4gIH0gZWxzZSBpZiAoY29sU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sLWF1dG8nIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLWF1dG9cIjtcbiAgfVxuXG4gIHJldHVybiBpc1hzID8gXCJjb2wtXCIgKyBjb2xTaXplIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZTtcbn07XG5cbnZhciBnZXRDb2x1bW5DbGFzc2VzID0gZnVuY3Rpb24gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUsIHdpZHRocykge1xuICBpZiAod2lkdGhzID09PSB2b2lkIDApIHtcbiAgICB3aWR0aHMgPSBjb2xXaWR0aHMkMTtcbiAgfVxuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2x1bW5Qcm9wID0gYXR0cmlidXRlc1tjb2xXaWR0aF07XG4gICAgZGVsZXRlIGF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2x1bW5Qcm9wICYmIGNvbHVtblByb3AgIT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcblxuICAgIGlmIChpc09iamVjdChjb2x1bW5Qcm9wKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgY29sU2l6ZUludGVyZml4ID0gaXNYcyA/ICctJyA6IFwiLVwiICsgY29sV2lkdGggKyBcIi1cIjtcbiAgICAgIHZhciBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyQxKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wLnNpemUpO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbY29sQ2xhc3NdID0gY29sdW1uUHJvcC5zaXplIHx8IGNvbHVtblByb3Auc2l6ZSA9PT0gJycsIF9jbGFzc05hbWVzW1wib3JkZXJcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub3JkZXJdID0gY29sdW1uUHJvcC5vcmRlciB8fCBjb2x1bW5Qcm9wLm9yZGVyID09PSAwLCBfY2xhc3NOYW1lc1tcIm9mZnNldFwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vZmZzZXRdID0gY29sdW1uUHJvcC5vZmZzZXQgfHwgY29sdW1uUHJvcC5vZmZzZXQgPT09IDAsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2NvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzJDEoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3ApO1xuXG4gICAgICBjb2xDbGFzc2VzLnB1c2goX2NvbENsYXNzKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvbENsYXNzZXM6IGNvbENsYXNzZXMsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufTtcblxudmFyIENvbCA9IGZ1bmN0aW9uIENvbChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWMpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIGlmICghY29sQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICBjb2xDbGFzc2VzLnB1c2goJ2NvbCcpO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBtb2RpZmllZEF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxaTtcbkNvbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWc7XG52YXIgQ29sJDEgPSBDb2w7XG5cbnZhciBfZXhjbHVkZWQkMWIgPSBbXCJleHBhbmRcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJsaWdodFwiLCBcImRhcmtcIiwgXCJmaXhlZFwiLCBcInN0aWNreVwiLCBcImNvbG9yXCIsIFwiY29udGFpbmVyXCIsIFwidGFnXCIsIFwiY2hpbGRyZW5cIl07XG52YXIgcHJvcFR5cGVzJDFoID0ge1xuICBsaWdodDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZ1bGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZml4ZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzdGlja3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjb250YWluZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGV4cGFuZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWYgPSB7XG4gIHRhZzogJ25hdicsXG4gIGV4cGFuZDogZmFsc2UsXG4gIGNvbnRhaW5lcjogJ2ZsdWlkJ1xufTtcblxudmFyIGdldEV4cGFuZENsYXNzID0gZnVuY3Rpb24gZ2V0RXhwYW5kQ2xhc3MoZXhwYW5kKSB7XG4gIGlmIChleHBhbmQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKGV4cGFuZCA9PT0gdHJ1ZSB8fCBleHBhbmQgPT09ICd4cycpIHtcbiAgICByZXR1cm4gJ25hdmJhci1leHBhbmQnO1xuICB9XG5cbiAgcmV0dXJuIFwibmF2YmFyLWV4cGFuZC1cIiArIGV4cGFuZDtcbn07XG5cbnZhciBOYXZiYXIgPSBmdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBleHBhbmQgPSBwcm9wcy5leHBhbmQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBsaWdodCA9IHByb3BzLmxpZ2h0LFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBmaXhlZCA9IHByb3BzLmZpeGVkLFxuICAgICAgc3RpY2t5ID0gcHJvcHMuc3RpY2t5LFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyJywgZ2V0RXhwYW5kQ2xhc3MoZXhwYW5kKSwgKF9jbGFzc05hbWVzID0ge1xuICAgICduYXZiYXItbGlnaHQnOiBsaWdodCxcbiAgICAnbmF2YmFyLWRhcmsnOiBkYXJrXG4gIH0sIF9jbGFzc05hbWVzW1wiYmctXCIgKyBjb2xvcl0gPSBjb2xvciwgX2NsYXNzTmFtZXNbXCJmaXhlZC1cIiArIGZpeGVkXSA9IGZpeGVkLCBfY2xhc3NOYW1lc1tcInN0aWNreS1cIiArIHN0aWNreV0gPSBzdGlja3ksIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gIHZhciBjb250YWluZXJDbGFzcyA9IGNvbnRhaW5lciAmJiBjb250YWluZXIgPT09IHRydWUgPyAnY29udGFpbmVyJyA6IFwiY29udGFpbmVyLVwiICsgY29udGFpbmVyO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNvbnRhaW5lciA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjb250YWluZXJDbGFzc1xuICB9LCBjaGlsZHJlbikgOiBjaGlsZHJlbik7XG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFoO1xuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZjtcbnZhciBOYXZiYXIkMSA9IE5hdmJhcjtcblxudmFyIF9leGNsdWRlZCQxYSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFlID0ge1xuICB0YWc6ICdhJ1xufTtcblxudmFyIE5hdmJhckJyYW5kID0gZnVuY3Rpb24gTmF2YmFyQnJhbmQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFhKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItYnJhbmQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk5hdmJhckJyYW5kLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZztcbk5hdmJhckJyYW5kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZTtcbnZhciBOYXZiYXJCcmFuZCQxID0gTmF2YmFyQnJhbmQ7XG5cbnZhciBfZXhjbHVkZWQkMTkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFmID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxZCA9IHtcbiAgdGFnOiAnc3Bhbidcbn07XG5cbnZhciBOYXZiYXJUZXh0ID0gZnVuY3Rpb24gTmF2YmFyVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhci10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5OYXZiYXJUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZjtcbk5hdmJhclRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFkO1xudmFyIE5hdmJhclRleHQkMSA9IE5hdmJhclRleHQ7XG5cbnZhciBfZXhjbHVkZWQkMTggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxYyA9IHtcbiAgdGFnOiAnYnV0dG9uJyxcbiAgdHlwZTogJ2J1dHRvbidcbn07XG5cbnZhciBOYXZiYXJUb2dnbGVyID0gZnVuY3Rpb24gTmF2YmFyVG9nZ2xlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE4KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItdG9nZ2xlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gfHwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ25hdmJhci10b2dnbGVyLWljb24nLCBjc3NNb2R1bGUpXG4gIH0pKTtcbn07XG5cbk5hdmJhclRvZ2dsZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFlO1xuTmF2YmFyVG9nZ2xlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWM7XG52YXIgTmF2YmFyVG9nZ2xlciQxID0gTmF2YmFyVG9nZ2xlcjtcblxudmFyIF9leGNsdWRlZCQxNyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhYnNcIiwgXCJwaWxsc1wiLCBcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiLCBcImp1c3RpZmllZFwiLCBcImZpbGxcIiwgXCJuYXZiYXJcIiwgXCJjYXJkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZCA9IHtcbiAgdGFiczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBwaWxsczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGp1c3RpZmllZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmaWxsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFiID0ge1xuICB0YWc6ICd1bCcsXG4gIHZlcnRpY2FsOiBmYWxzZVxufTtcblxudmFyIGdldFZlcnRpY2FsQ2xhc3MgPSBmdW5jdGlvbiBnZXRWZXJ0aWNhbENsYXNzKHZlcnRpY2FsKSB7XG4gIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAodmVydGljYWwgPT09IHRydWUgfHwgdmVydGljYWwgPT09ICd4cycpIHtcbiAgICByZXR1cm4gJ2ZsZXgtY29sdW1uJztcbiAgfVxuXG4gIHJldHVybiBcImZsZXgtXCIgKyB2ZXJ0aWNhbCArIFwiLWNvbHVtblwiO1xufTtcblxudmFyIE5hdiA9IGZ1bmN0aW9uIE5hdihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdGFicyA9IHByb3BzLnRhYnMsXG4gICAgICBwaWxscyA9IHByb3BzLnBpbGxzLFxuICAgICAgdmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIGhvcml6b250YWwgPSBwcm9wcy5ob3Jpem9udGFsLFxuICAgICAganVzdGlmaWVkID0gcHJvcHMuanVzdGlmaWVkLFxuICAgICAgZmlsbCA9IHByb3BzLmZpbGwsXG4gICAgICBuYXZiYXIgPSBwcm9wcy5uYXZiYXIsXG4gICAgICBjYXJkID0gcHJvcHMuY2FyZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIG5hdmJhciA/ICduYXZiYXItbmF2JyA6ICduYXYnLCBob3Jpem9udGFsID8gXCJqdXN0aWZ5LWNvbnRlbnQtXCIgKyBob3Jpem9udGFsIDogZmFsc2UsIGdldFZlcnRpY2FsQ2xhc3ModmVydGljYWwpLCB7XG4gICAgJ25hdi10YWJzJzogdGFicyxcbiAgICAnY2FyZC1oZWFkZXItdGFicyc6IGNhcmQgJiYgdGFicyxcbiAgICAnbmF2LXBpbGxzJzogcGlsbHMsXG4gICAgJ2NhcmQtaGVhZGVyLXBpbGxzJzogY2FyZCAmJiBwaWxscyxcbiAgICAnbmF2LWp1c3RpZmllZCc6IGp1c3RpZmllZCxcbiAgICAnbmF2LWZpbGwnOiBmaWxsXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTmF2LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZDtcbk5hdi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWI7XG52YXIgTmF2JDEgPSBOYXY7XG5cbnZhciBfZXhjbHVkZWQkMTYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFjID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWEgPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIE5hdkl0ZW0gPSBmdW5jdGlvbiBOYXZJdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2LWl0ZW0nLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk5hdkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFjO1xuTmF2SXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWE7XG52YXIgTmF2SXRlbSQxID0gTmF2SXRlbTtcblxudmFyIF9leGNsdWRlZCQxNSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyQxYiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBocmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTkgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgTmF2TGluayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOYXZMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOYXZMaW5rKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5hdkxpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmID09PSAnIycpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCQxNSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtbGluaycsIHtcbiAgICAgIGRpc2FibGVkOiBhdHRyaWJ1dGVzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIE5hdkxpbms7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxYjtcbk5hdkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE5O1xudmFyIE5hdkxpbmskMSA9IE5hdkxpbms7XG5cbnZhciBfZXhjbHVkZWQkMTQgPSBbXCJjbGFzc05hbWVcIiwgXCJsaXN0Q2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIiwgXCJsaXN0VGFnXCIsIFwiYXJpYS1sYWJlbFwiXTtcbnZhciBwcm9wVHlwZXMkMWEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkMTggPSB7XG4gIHRhZzogJ25hdicsXG4gIGxpc3RUYWc6ICdvbCcsXG4gICdhcmlhLWxhYmVsJzogJ2JyZWFkY3J1bWInXG59O1xuXG52YXIgQnJlYWRjcnVtYiA9IGZ1bmN0aW9uIEJyZWFkY3J1bWIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGxpc3RDbGFzc05hbWUgPSBwcm9wcy5saXN0Q2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIExpc3RUYWcgPSBwcm9wcy5saXN0VGFnLFxuICAgICAgbGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHZhciBsaXN0Q2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYnJlYWRjcnVtYicsIGxpc3RDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoTGlzdFRhZywge1xuICAgIGNsYXNzTmFtZTogbGlzdENsYXNzZXNcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cbkJyZWFkY3J1bWIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFhO1xuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTg7XG52YXIgQnJlYWRjcnVtYiQxID0gQnJlYWRjcnVtYjtcblxudmFyIF9leGNsdWRlZCQxMyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNyA9IHtcbiAgdGFnOiAnbGknXG59O1xuXG52YXIgQnJlYWRjcnVtYkl0ZW0gPSBmdW5jdGlvbiBCcmVhZGNydW1iSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgJ2JyZWFkY3J1bWItaXRlbScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYWN0aXZlID8gJ3BhZ2UnIDogdW5kZWZpbmVkXG4gIH0pKTtcbn07XG5cbkJyZWFkY3J1bWJJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxOTtcbkJyZWFkY3J1bWJJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNztcbnZhciBCcmVhZGNydW1iSXRlbSQxID0gQnJlYWRjcnVtYkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkMTIgPSBbXCJhY3RpdmVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiYmxvY2tcIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwib3V0bGluZVwiLCBcInNpemVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkMTggPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBibG9jazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG91dGxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNiA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB0YWc6ICdidXR0b24nXG59O1xuXG52YXIgQnV0dG9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJ1dHRvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aXZlID0gX3RoaXMkcHJvcHMuYWN0aXZlLFxuICAgICAgICBhcmlhTGFiZWwgPSBfdGhpcyRwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICBibG9jayA9IF90aGlzJHByb3BzLmJsb2NrLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsb3NlID0gX3RoaXMkcHJvcHMuY2xvc2UsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgY29sb3IgPSBfdGhpcyRwcm9wcy5jb2xvcixcbiAgICAgICAgb3V0bGluZSA9IF90aGlzJHByb3BzLm91dGxpbmUsXG4gICAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJDEyKTtcblxuICAgIHZhciBidG5PdXRsaW5lQ29sb3IgPSBcImJ0blwiICsgKG91dGxpbmUgPyAnLW91dGxpbmUnIDogJycpICsgXCItXCIgKyBjb2xvcjtcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNsb3NlICYmICdidG4tY2xvc2UnLCBjbG9zZSB8fCAnYnRuJywgY2xvc2UgfHwgYnRuT3V0bGluZUNvbG9yLCBzaXplID8gXCJidG4tXCIgKyBzaXplIDogZmFsc2UsIGJsb2NrID8gJ2QtYmxvY2sgdy0xMDAnIDogZmFsc2UsIHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICB9KSwgY3NzTW9kdWxlKTtcblxuICAgIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnYnV0dG9uJykge1xuICAgICAgVGFnID0gJ2EnO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0QXJpYUxhYmVsID0gY2xvc2UgPyAnQ2xvc2UnIDogbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiBhdHRyaWJ1dGVzLm9uQ2xpY2sgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICAgIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsIHx8IGRlZmF1bHRBcmlhTGFiZWxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIEJ1dHRvbjtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTg7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE2O1xudmFyIEJ1dHRvbiQxID0gQnV0dG9uO1xuXG52YXIgX2V4Y2x1ZGVkJDExID0gW1wiY2xhc3NOYW1lXCJdO1xudmFyIHByb3BUeXBlcyQxNyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTUgPSB7XG4gIGRlZmF1bHRWYWx1ZTogZmFsc2Vcbn07XG5cbnZhciBCdXR0b25Ub2dnbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnV0dG9uVG9nZ2xlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCdXR0b25Ub2dnbGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZ2dsZWQ6IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIGZvY3VzOiBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMub25CbHVyID0gX3RoaXMub25CbHVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRm9jdXMgPSBfdGhpcy5vbkZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCdXR0b25Ub2dnbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkJsdXIgPSBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1czogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvY3VzOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHRvZ2dsZWQgPSBfcmVmLnRvZ2dsZWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGVkOiAhdG9nZ2xlZFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkMTEpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgICBmb2N1czogdGhpcy5zdGF0ZS5mb2N1c1xuICAgIH0pLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b24kMSwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnRvZ2dsZWQsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSwgYXR0cmlidXRlcykpO1xuICB9O1xuXG4gIHJldHVybiBCdXR0b25Ub2dnbGU7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5CdXR0b25Ub2dnbGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE3O1xuQnV0dG9uVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNTtcbnZhciBCdXR0b25Ub2dnbGUkMSA9IEJ1dHRvblRvZ2dsZTtcblxuLyoqXG4gKiBEcm9wZG93bkNvbnRleHRcbiAqIHtcbiAqICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gKiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICogIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAnZG93bicsICdzdGFydCcsICdlbmQnXSkuaXNSZXF1aXJlZCxcbiAqICBpbk5hdmJhcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAqICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAqIH1cbiAqL1xuXG52YXIgRHJvcGRvd25Db250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgX2V4Y2x1ZGVkJDEwID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGlyZWN0aW9uXCIsIFwiaXNPcGVuXCIsIFwiZ3JvdXBcIiwgXCJzaXplXCIsIFwibmF2XCIsIFwic2V0QWN0aXZlRnJvbUNoaWxkXCIsIFwiYWN0aXZlXCIsIFwidGFnXCIsIFwibWVudVJvbGVcIl07XG52YXIgcHJvcFR5cGVzJDE2ID0ge1xuICBhMTF5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3VwJywgJ2Rvd24nLCAnc3RhcnQnLCAnZW5kJywgJ2xlZnQnLCAncmlnaHQnXSksXG4gIGdyb3VwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBuYXY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5OYXZiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2V0QWN0aXZlRnJvbUNoaWxkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1lbnVSb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnbGlzdGJveCcsICdtZW51J10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNCA9IHtcbiAgYTExeTogdHJ1ZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgZGlyZWN0aW9uOiAnZG93bicsXG4gIG5hdjogZmFsc2UsXG4gIGFjdGl2ZTogZmFsc2UsXG4gIGluTmF2YmFyOiBmYWxzZSxcbiAgc2V0QWN0aXZlRnJvbUNoaWxkOiBmYWxzZVxufTtcbnZhciBwcmV2ZW50RGVmYXVsdEtleXMgPSBba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyLCBrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93biwga2V5Q29kZXMuZW5kLCBrZXlDb2Rlcy5ob21lXTtcblxudmFyIERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmFkZEV2ZW50cyA9IF90aGlzLmFkZEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gX3RoaXMuaGFuZGxlS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW1vdmVFdmVudHMgPSBfdGhpcy5yZW1vdmVFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZU1lbnVSZWYgPSBfdGhpcy5oYW5kbGVNZW51UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5tZW51UmVmID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVJlZigpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZU1lbnVSZWYgPSBmdW5jdGlvbiBoYW5kbGVNZW51UmVmKG1lbnVSZWYpIHtcbiAgICB0aGlzLm1lbnVSZWYuY3VycmVudCA9IG1lbnVSZWY7XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRleHRWYWx1ZSA9IGZ1bmN0aW9uIGdldENvbnRleHRWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcbiAgICAgIGlzT3BlbjogdGhpcy5wcm9wcy5pc09wZW4sXG4gICAgICBkaXJlY3Rpb246IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAnZG93bicgJiYgdGhpcy5wcm9wcy5kcm9wdXAgPyAndXAnIDogdGhpcy5wcm9wcy5kaXJlY3Rpb24sXG4gICAgICBpbk5hdmJhcjogdGhpcy5wcm9wcy5pbk5hdmJhcixcbiAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgLy8gQ2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIGJ5IERyb3Bkb3duTWVudSB0byBwcm92aWRlIGEgcmVmIHRvXG4gICAgICAvLyBhIEhUTUwgdGFnIHRoYXQncyB1c2VkIGZvciB0aGUgRHJvcGRvd25NZW51XG4gICAgICBvbk1lbnVSZWY6IHRoaXMuaGFuZGxlTWVudVJlZixcbiAgICAgIG1lbnVSb2xlOiB0aGlzLnByb3BzLm1lbnVSb2xlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZVByb3BzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gIT09IHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaGFuZGxlUHJvcHMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50O1xuICB9O1xuXG4gIF9wcm90by5nZXRNZW51ID0gZnVuY3Rpb24gZ2V0TWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51UmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnVDdHJsID0gZnVuY3Rpb24gZ2V0TWVudUN0cmwoKSB7XG4gICAgaWYgKHRoaXMuXyRtZW51Q3RybCkgcmV0dXJuIHRoaXMuXyRtZW51Q3RybDtcbiAgICB0aGlzLl8kbWVudUN0cmwgPSB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWV4cGFuZGVkXScpO1xuICAgIHJldHVybiB0aGlzLl8kbWVudUN0cmw7XG4gIH07XG5cbiAgX3Byb3RvLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5tZW51Um9sZSA9PT0gJ2xpc3Rib3gnKSB7XG4gICAgICByZXR1cm4gJ29wdGlvbic7XG4gICAgfVxuXG4gICAgcmV0dXJuICdtZW51aXRlbSc7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnVJdGVtcyA9IGZ1bmN0aW9uIGdldE1lbnVJdGVtcygpIHtcbiAgICAvLyBJbiBhIHJlYWwgbWVudSB3aXRoIGEgY2hpbGQgRHJvcGRvd25NZW51LCBgdGhpcy5nZXRNZW51KClgIHNob3VsZCBuZXZlclxuICAgIC8vIGJlIG51bGwsIGJ1dCBpdCBpcyBzb21ldGltZXMgbnVsbCBpbiB0ZXN0cy4gVG8gbWl0aWdhdGUgdGhhdCwgd2UganVzdFxuICAgIC8vIHVzZSBgdGhpcy5nZXRDb250YWluZXIoKWAgYXMgdGhlIGZhbGxiYWNrIGBtZW51Q29udGFpbmVyYC5cbiAgICB2YXIgbWVudUNvbnRhaW5lciA9IHRoaXMuZ2V0TWVudSgpIHx8IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobWVudUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9XFxcIlwiICsgdGhpcy5nZXRJdGVtVHlwZSgpICsgXCJcXFwiXVwiKSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZEV2ZW50cyA9IGZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCcsICdrZXl1cCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgX3RoaXMyLmhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnLCAna2V5dXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIF90aGlzMy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgIGlmIChlICYmIChlLndoaWNoID09PSAzIHx8IGUudHlwZSA9PT0gJ2tleXVwJyAmJiBlLndoaWNoICE9PSBrZXlDb2Rlcy50YWIpKSByZXR1cm47XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgdmFyIG1lbnUgPSB0aGlzLmdldE1lbnUoKTtcbiAgICB2YXIgY2xpY2tJc0luQ29udGFpbmVyID0gY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBjb250YWluZXIgIT09IGUudGFyZ2V0O1xuICAgIHZhciBjbGlja0lzSW5JbnB1dCA9IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWdyb3VwJykgJiYgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSAmJiBlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnO1xuICAgIHZhciBjbGlja0lzSW5NZW51ID0gbWVudSAmJiBtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBtZW51ICE9PSBlLnRhcmdldDtcblxuICAgIGlmICgoY2xpY2tJc0luQ29udGFpbmVyICYmICFjbGlja0lzSW5JbnB1dCB8fCBjbGlja0lzSW5NZW51KSAmJiAoZS50eXBlICE9PSAna2V5dXAnIHx8IGUud2hpY2ggPT09IGtleUNvZGVzLnRhYikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGlzVGFyZ2V0TWVudUl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ21lbnVpdGVtJyB8fCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ29wdGlvbic7XG4gICAgdmFyIGlzVGFyZ2V0TWVudUN0cmwgPSB0aGlzLmdldE1lbnVDdHJsKCkgPT09IGUudGFyZ2V0O1xuICAgIHZhciBpc1RhYiA9IGtleUNvZGVzLnRhYiA9PT0gZS53aGljaDtcblxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpIHx8IGlzVGFiICYmICF0aGlzLnByb3BzLmExMXkgfHwgaXNUYWIgJiYgIShpc1RhcmdldE1lbnVJdGVtIHx8IGlzVGFyZ2V0TWVudUN0cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByZXZlbnREZWZhdWx0S2V5cy5pbmRleE9mKGUud2hpY2gpICE9PSAtMSB8fCBlLndoaWNoID49IDQ4ICYmIGUud2hpY2ggPD0gOTApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGlzVGFyZ2V0TWVudUN0cmwpIHtcbiAgICAgIGlmIChba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyLCBrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5kZXhPZihlLndoaWNoKSA+IC0xKSB7XG4gICAgICAgIC8vIE9wZW4gdGhlIG1lbnUgKGlmIG5vdCBvcGVuKSBhbmQgZm9jdXMgdGhlIGZpcnN0IG1lbnUgaXRlbVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmdldE1lbnVJdGVtcygpWzBdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBpc1RhYikge1xuICAgICAgICAvLyBGb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtIGlmIHRhYmJpbmcgZnJvbSBhbiBvcGVuIG1lbnUuIFdlIG5lZWQgdGhpc1xuICAgICAgICAvLyBmb3IgY2FzZXMgd2hlcmUgdGhlIERyb3Bkb3duTWVudSBzZXRzIGEgY3VzdG9tIGNvbnRhaW5lciwgd2hpY2ggbWF5XG4gICAgICAgIC8vIG5vdCBiZSB0aGUgbmF0dXJhbCBuZXh0IGl0ZW0gdG8gdGFiIHRvIGZyb20gdGhlIERyb3Bkb3duVG9nZ2xlLlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ2V0TWVudUl0ZW1zKClbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS53aGljaCA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBpc1RhcmdldE1lbnVJdGVtKSB7XG4gICAgICBpZiAoW2tleUNvZGVzLnRhYiwga2V5Q29kZXMuZXNjXS5pbmRleE9mKGUud2hpY2gpID4gLTEpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgICAgIHRoaXMuZ2V0TWVudUN0cmwoKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyXS5pbmRleE9mKGUud2hpY2gpID4gLTEpIHtcbiAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgdGhpcy5nZXRNZW51Q3RybCgpLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKFtrZXlDb2Rlcy5kb3duLCBrZXlDb2Rlcy51cF0uaW5kZXhPZihlLndoaWNoKSA+IC0xIHx8IFtrZXlDb2Rlcy5uLCBrZXlDb2Rlcy5wXS5pbmRleE9mKGUud2hpY2gpID4gLTEgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgIHZhciAkbWVudWl0ZW1zID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gJG1lbnVpdGVtcy5pbmRleE9mKGUudGFyZ2V0KTtcblxuICAgICAgICBpZiAoa2V5Q29kZXMudXAgPT09IGUud2hpY2ggfHwga2V5Q29kZXMucCA9PT0gZS53aGljaCAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ICE9PSAwID8gaW5kZXggLSAxIDogJG1lbnVpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmRvd24gPT09IGUud2hpY2ggfHwga2V5Q29kZXMubiA9PT0gZS53aGljaCAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ID09PSAkbWVudWl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1lbnVpdGVtc1tpbmRleF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMuZW5kID09PSBlLndoaWNoKSB7XG4gICAgICAgIHZhciBfJG1lbnVpdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG5cbiAgICAgICAgXyRtZW51aXRlbXNbXyRtZW51aXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMuaG9tZSA9PT0gZS53aGljaCkge1xuICAgICAgICB2YXIgXyRtZW51aXRlbXMyID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcblxuICAgICAgICBfJG1lbnVpdGVtczJbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB7XG4gICAgICAgIHZhciBfJG1lbnVpdGVtczMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuXG4gICAgICAgIHZhciBjaGFyUHJlc3NlZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8kbWVudWl0ZW1zMy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBmaXJzdExldHRlciA9IF8kbWVudWl0ZW1zM1tpXS50ZXh0Q29udGVudCAmJiBfJG1lbnVpdGVtczNbaV0udGV4dENvbnRlbnRbMF0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChmaXJzdExldHRlciA9PT0gY2hhclByZXNzZWQpIHtcbiAgICAgICAgICAgIF8kbWVudWl0ZW1zM1tpXS5mb2N1cygpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVByb3BzID0gZnVuY3Rpb24gaGFuZGxlUHJvcHMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcywgX3JlZjtcblxuICAgIHZhciBfb21pdCA9IG9taXQodGhpcy5wcm9wcywgWyd0b2dnbGUnLCAnZGlzYWJsZWQnLCAnaW5OYXZiYXInLCAnYTExeSddKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX29taXQuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfb21pdC5jc3NNb2R1bGUsXG4gICAgICAgIGRpcmVjdGlvbiA9IF9vbWl0LmRpcmVjdGlvbixcbiAgICAgICAgaXNPcGVuID0gX29taXQuaXNPcGVuLFxuICAgICAgICBncm91cCA9IF9vbWl0Lmdyb3VwLFxuICAgICAgICBzaXplID0gX29taXQuc2l6ZSxcbiAgICAgICAgbmF2ID0gX29taXQubmF2LFxuICAgICAgICBzZXRBY3RpdmVGcm9tQ2hpbGQgPSBfb21pdC5zZXRBY3RpdmVGcm9tQ2hpbGQsXG4gICAgICAgIGFjdGl2ZSA9IF9vbWl0LmFjdGl2ZSxcbiAgICAgICAgdGFnID0gX29taXQudGFnLFxuICAgICAgICBhdHRycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0LCBfZXhjbHVkZWQkMTApO1xuXG4gICAgdmFyIFRhZyA9IHRhZyB8fCAobmF2ID8gJ2xpJyA6ICdkaXYnKTtcbiAgICB2YXIgc3ViSXRlbUlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAoc2V0QWN0aXZlRnJvbUNoaWxkKSB7XG4gICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChkcm9wZG93bkl0ZW0pIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbSAmJiBkcm9wZG93bkl0ZW0ucHJvcHMuYWN0aXZlKSBzdWJJdGVtSXNBY3RpdmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBuYXYgJiYgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgc2V0QWN0aXZlRnJvbUNoaWxkICYmIHN1Ykl0ZW1Jc0FjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIChfY2xhc3NOYW1lcyA9IHtcbiAgICAgICdidG4tZ3JvdXAnOiBncm91cFxuICAgIH0sIF9jbGFzc05hbWVzW1wiYnRuLWdyb3VwLVwiICsgc2l6ZV0gPSAhIXNpemUsIF9jbGFzc05hbWVzLmRyb3Bkb3duID0gIWdyb3VwLCBfY2xhc3NOYW1lcy5kcm9wdXAgPSBkaXJlY3Rpb24gPT09ICd1cCcsIF9jbGFzc05hbWVzLmRyb3BzdGFydCA9IGRpcmVjdGlvbiA9PT0gJ3N0YXJ0JyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0JywgX2NsYXNzTmFtZXMuZHJvcGVuZCA9IGRpcmVjdGlvbiA9PT0gJ2VuZCcgfHwgZGlyZWN0aW9uID09PSAncmlnaHQnLCBfY2xhc3NOYW1lcy5zaG93ID0gaXNPcGVuLCBfY2xhc3NOYW1lc1snbmF2LWl0ZW0nXSA9IG5hdiwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuTWFuYWdlciwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJzLCAoX3JlZiA9IHt9LCBfcmVmW3R5cGVvZiBUYWcgPT09ICdzdHJpbmcnID8gJ3JlZicgOiAnaW5uZXJSZWYnXSA9IHRoaXMuY29udGFpbmVyUmVmLCBfcmVmKSwge1xuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTY7XG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTQ7XG52YXIgRHJvcGRvd24kMSA9IERyb3Bkb3duO1xuXG52YXIgcHJvcFR5cGVzJDE1ID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xuXG52YXIgQnV0dG9uRHJvcGRvd24gPSBmdW5jdGlvbiBCdXR0b25Ecm9wZG93bihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duJDEsIF9leHRlbmRzKHtcbiAgICBncm91cDogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxuQnV0dG9uRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE1O1xudmFyIEJ1dHRvbkRyb3Bkb3duJDEgPSBCdXR0b25Ecm9wZG93bjtcblxudmFyIF9leGNsdWRlZCQkID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwic2l6ZVwiLCBcInZlcnRpY2FsXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxNCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMyA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgcm9sZTogJ2dyb3VwJ1xufTtcblxudmFyIEJ1dHRvbkdyb3VwID0gZnVuY3Rpb24gQnV0dG9uR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgdmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJCQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgc2l6ZSA/ICdidG4tZ3JvdXAtJyArIHNpemUgOiBmYWxzZSwgdmVydGljYWwgPyAnYnRuLWdyb3VwLXZlcnRpY2FsJyA6ICdidG4tZ3JvdXAnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxNDtcbkJ1dHRvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMztcbnZhciBCdXR0b25Hcm91cCQxID0gQnV0dG9uR3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkXyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMiA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgcm9sZTogJ3Rvb2xiYXInXG59O1xuXG52YXIgQnV0dG9uVG9vbGJhciA9IGZ1bmN0aW9uIEJ1dHRvblRvb2xiYXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJF8pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2J0bi10b29sYmFyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5CdXR0b25Ub29sYmFyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMztcbkJ1dHRvblRvb2xiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEyO1xudmFyIEJ1dHRvblRvb2xiYXIkMSA9IEJ1dHRvblRvb2xiYXI7XG5cbnZhciBfZXhjbHVkZWQkWiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpdmlkZXJcIiwgXCJ0YWdcIiwgXCJoZWFkZXJcIiwgXCJhY3RpdmVcIiwgXCJ0ZXh0XCJdO1xudmFyIHByb3BUeXBlcyQxMiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpdmlkZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaGVhZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTEgPSB7XG4gIHRhZzogJ2J1dHRvbicsXG4gIHRvZ2dsZTogdHJ1ZVxufTtcblxudmFyIERyb3Bkb3duSXRlbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93bkl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duSXRlbShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdldFRhYkluZGV4ID0gX3RoaXMuZ2V0VGFiSW5kZXguYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duSXRlbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdvcHRpb24nO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudWl0ZW0nO1xuICB9O1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMuaGVhZGVyLFxuICAgICAgICBkaXZpZGVyID0gX3RoaXMkcHJvcHMuZGl2aWRlcixcbiAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzLnRleHQ7XG5cbiAgICBpZiAoZGlzYWJsZWQgfHwgaGVhZGVyIHx8IGRpdmlkZXIgfHwgdGV4dCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIHRoaXMuY29udGV4dC50b2dnbGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRUYWJJbmRleCA9IGZ1bmN0aW9uIGdldFRhYkluZGV4KCkge1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMyLmhlYWRlcixcbiAgICAgICAgZGl2aWRlciA9IF90aGlzJHByb3BzMi5kaXZpZGVyLFxuICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMyLnRleHQ7XG5cbiAgICBpZiAoZGlzYWJsZWQgfHwgaGVhZGVyIHx8IGRpdmlkZXIgfHwgdGV4dCkge1xuICAgICAgcmV0dXJuICctMSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcwJztcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciB0YWJJbmRleCA9IHRoaXMuZ2V0VGFiSW5kZXgoKTtcbiAgICB2YXIgcm9sZSA9IHRhYkluZGV4ID4gLTEgPyB0aGlzLmdldFJvbGUoKSA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBfb21pdCA9IG9taXQodGhpcy5wcm9wcywgWyd0b2dnbGUnXSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9vbWl0LmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX29taXQuY3NzTW9kdWxlLFxuICAgICAgICBkaXZpZGVyID0gX29taXQuZGl2aWRlcixcbiAgICAgICAgVGFnID0gX29taXQudGFnLFxuICAgICAgICBoZWFkZXIgPSBfb21pdC5oZWFkZXIsXG4gICAgICAgIGFjdGl2ZSA9IF9vbWl0LmFjdGl2ZSxcbiAgICAgICAgdGV4dCA9IF9vbWl0LnRleHQsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXQsIF9leGNsdWRlZCRaKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgJ2Ryb3Bkb3duLWl0ZW0nOiAhZGl2aWRlciAmJiAhaGVhZGVyICYmICF0ZXh0LFxuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAnZHJvcGRvd24taGVhZGVyJzogaGVhZGVyLFxuICAgICAgJ2Ryb3Bkb3duLWRpdmlkZXInOiBkaXZpZGVyLFxuICAgICAgJ2Ryb3Bkb3duLWl0ZW0tdGV4dCc6IHRleHRcbiAgICB9KSwgY3NzTW9kdWxlKTtcblxuICAgIGlmIChUYWcgPT09ICdidXR0b24nKSB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIFRhZyA9ICdoNic7XG4gICAgICB9IGVsc2UgaWYgKGRpdmlkZXIpIHtcbiAgICAgICAgVGFnID0gJ2Rpdic7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmhyZWYpIHtcbiAgICAgICAgVGFnID0gJ2EnO1xuICAgICAgfSBlbHNlIGlmICh0ZXh0KSB7XG4gICAgICAgIFRhZyA9ICdzcGFuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiAocHJvcHMub25DbGljayB8fCB0aGlzLnByb3BzLnRvZ2dsZSkgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICAgIH0sIHByb3BzLCB7XG4gICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICByb2xlOiByb2xlLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bkl0ZW07XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEyO1xuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMTtcbkRyb3Bkb3duSXRlbS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93bkl0ZW0kMSA9IERyb3Bkb3duSXRlbTtcblxudmFyIF9leGNsdWRlZCRZID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGFya1wiLCBcImVuZFwiLCBcInJpZ2h0XCIsIFwidGFnXCIsIFwiZmxpcFwiLCBcIm1vZGlmaWVyc1wiLCBcInBlcnNpc3RcIiwgXCJzdHJhdGVneVwiLCBcImNvbnRhaW5lclwiXTtcbnZhciBwcm9wVHlwZXMkMTEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUuaXNSZXF1aXJlZCxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBlbmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmxpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHBlcnNpc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3RyYXRlZ3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICByaWdodDogZGVwcmVjYXRlZChQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsICdQbGVhc2UgdXNlIFwiZW5kXCIgaW5zdGVhZC4nKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTAgPSB7XG4gIHRhZzogJ2RpdicsXG4gIGZsaXA6IHRydWUsXG4gIG1vZGlmaWVyczogW11cbn07XG52YXIgZGlyZWN0aW9uUG9zaXRpb25NYXAgPSB7XG4gIHVwOiAndG9wJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgc3RhcnQ6ICdsZWZ0JyxcbiAgZW5kOiAncmlnaHQnLFxuICBkb3duOiAnYm90dG9tJ1xufTtcblxudmFyIERyb3Bkb3duTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93bk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duTWVudSgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd25NZW51LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Um9sZSA9IGZ1bmN0aW9uIGdldFJvbGUoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5tZW51Um9sZSA9PT0gJ2xpc3Rib3gnKSB7XG4gICAgICByZXR1cm4gJ2xpc3Rib3gnO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudSc7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGRhcmsgPSBfdGhpcyRwcm9wcy5kYXJrLFxuICAgICAgICBlbmQgPSBfdGhpcyRwcm9wcy5lbmQsXG4gICAgICAgIHJpZ2h0ID0gX3RoaXMkcHJvcHMucmlnaHQsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIG1vZGlmaWVycyA9IF90aGlzJHByb3BzLm1vZGlmaWVycyxcbiAgICAgICAgcGVyc2lzdCA9IF90aGlzJHByb3BzLnBlcnNpc3QsXG4gICAgICAgIHN0cmF0ZWd5ID0gX3RoaXMkcHJvcHMuc3RyYXRlZ3ksXG4gICAgICAgIGNvbnRhaW5lciA9IF90aGlzJHByb3BzLmNvbnRhaW5lcixcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJFkpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnZHJvcGRvd24tbWVudScsIHtcbiAgICAgICdkcm9wZG93bi1tZW51LWRhcmsnOiBkYXJrLFxuICAgICAgJ2Ryb3Bkb3duLW1lbnUtZW5kJzogZW5kIHx8IHJpZ2h0LFxuICAgICAgc2hvdzogdGhpcy5jb250ZXh0LmlzT3BlblxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHZhciBUYWcgPSB0YWc7XG5cbiAgICBpZiAocGVyc2lzdCB8fCB0aGlzLmNvbnRleHQuaXNPcGVuICYmICF0aGlzLmNvbnRleHQuaW5OYXZiYXIpIHtcbiAgICAgIHZhciBwb3NpdGlvbjEgPSBkaXJlY3Rpb25Qb3NpdGlvbk1hcFt0aGlzLmNvbnRleHQuZGlyZWN0aW9uXSB8fCAnYm90dG9tJztcbiAgICAgIHZhciBwb3NpdGlvbjIgPSBlbmQgfHwgcmlnaHQgPyAnZW5kJyA6ICdzdGFydCc7XG4gICAgICB2YXIgcG9wZXJQbGFjZW1lbnQgPSBwb3NpdGlvbjEgKyBcIi1cIiArIHBvc2l0aW9uMjtcbiAgICAgIHZhciBwb3Blck1vZGlmaWVycyA9IFtdLmNvbmNhdChtb2RpZmllcnMsIFt7XG4gICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgZW5hYmxlZDogISFmbGlwXG4gICAgICB9XSk7XG4gICAgICB2YXIgcG9wcGVyID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlBvcHBlciwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBvcGVyUGxhY2VtZW50LFxuICAgICAgICBtb2RpZmllcnM6IHBvcGVyTW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneTogc3RyYXRlZ3lcbiAgICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBjb21iaW5lZFN0eWxlID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIF90aGlzLnByb3BzLnN0eWxlKSwgc3R5bGUpO1xuXG4gICAgICAgIHZhciBoYW5kbGVSZWYgPSBmdW5jdGlvbiBoYW5kbGVSZWYodGFnUmVmKSB7XG4gICAgICAgICAgLy8gU2VuZCB0aGUgcmVmIHRvIGByZWFjdC1wb3BwZXJgXG4gICAgICAgICAgcmVmKHRhZ1JlZik7IC8vIFNlbmQgdGhlIHJlZiB0byB0aGUgcGFyZW50IERyb3Bkb3duIHNvIHRoYXQgY2xpY2tzIG91dHNpZGVcbiAgICAgICAgICAvLyBpdCB3aWxsIGNhdXNlIGl0IHRvIGNsb3NlXG5cbiAgICAgICAgICB2YXIgb25NZW51UmVmID0gX3RoaXMuY29udGV4dC5vbk1lbnVSZWY7XG4gICAgICAgICAgaWYgKG9uTWVudVJlZikgb25NZW51UmVmKHRhZ1JlZik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgIHJvbGU6IF90aGlzLmdldFJvbGUoKSxcbiAgICAgICAgICByZWY6IGhhbmRsZVJlZlxuICAgICAgICB9LCBhdHRycywge1xuICAgICAgICAgIHN0eWxlOiBjb21iaW5lZFN0eWxlLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogIV90aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBwbGFjZW1lbnRcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVQb3J0YWwocG9wcGVyLCBnZXRUYXJnZXQoY29udGFpbmVyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcG9wcGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgcm9sZTogdGhpcy5nZXRSb2xlKClcbiAgICB9LCBhdHRycywge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiAhdGhpcy5jb250ZXh0LmlzT3BlbixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IGF0dHJzLnBsYWNlbWVudFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd25NZW51O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcbkRyb3Bkb3duTWVudS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTE7XG5Ecm9wZG93bk1lbnUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEwO1xuRHJvcGRvd25NZW51LmNvbnRleHRUeXBlID0gRHJvcGRvd25Db250ZXh0O1xudmFyIERyb3Bkb3duTWVudSQxID0gRHJvcGRvd25NZW51O1xuXG52YXIgX2V4Y2x1ZGVkJFggPSBbXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNzc01vZHVsZVwiLCBcImNhcmV0XCIsIFwic3BsaXRcIiwgXCJuYXZcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkMTAgPSB7XG4gIGNhcmV0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICAnYXJpYS1oYXNwb3B1cCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3BsaXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbmF2OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJCQgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlXG59O1xuXG52YXIgRHJvcGRvd25Ub2dnbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd25Ub2dnbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duVG9nZ2xlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duVG9nZ2xlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMuY29udGV4dC5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm5hdiAmJiAhdGhpcy5wcm9wcy50YWcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0LnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Um9sZSA9IGZ1bmN0aW9uIGdldFJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5tZW51Um9sZSB8fCB0aGlzLnByb3BzWydhcmlhLWhhc3BvcHVwJ107XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IgPSBfdGhpcyRwcm9wcy5jb2xvcixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjYXJldCA9IF90aGlzJHByb3BzLmNhcmV0LFxuICAgICAgICBzcGxpdCA9IF90aGlzJHByb3BzLnNwbGl0LFxuICAgICAgICBuYXYgPSBfdGhpcyRwcm9wcy5uYXYsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJFgpO1xuXG4gICAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10gfHwgJ1RvZ2dsZSBEcm9wZG93bic7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgICAnZHJvcGRvd24tdG9nZ2xlJzogY2FyZXQgfHwgc3BsaXQsXG4gICAgICAnZHJvcGRvd24tdG9nZ2xlLXNwbGl0Jzogc3BsaXQsXG4gICAgICAnbmF2LWxpbmsnOiBuYXZcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnID8gcHJvcHMuY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ2aXN1YWxseS1oaWRkZW5cIlxuICAgIH0sIGFyaWFMYWJlbCk7XG4gICAgdmFyIFRhZztcblxuICAgIGlmIChuYXYgJiYgIXRhZykge1xuICAgICAgVGFnID0gJ2EnO1xuICAgICAgcHJvcHMuaHJlZiA9ICcjJztcbiAgICB9IGVsc2UgaWYgKCF0YWcpIHtcbiAgICAgIFRhZyA9IEJ1dHRvbiQxO1xuICAgICAgcHJvcHMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHByb3BzLmNzc01vZHVsZSA9IGNzc01vZHVsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgVGFnID0gdGFnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHQuaW5OYXZiYXIpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogdGhpcy5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUmVmZXJlbmNlLCB7XG4gICAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICB2YXIgcmVmID0gX3JlZi5yZWY7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIHByb3BzLCAoX3JlZjIgPSB7fSwgX3JlZjJbdHlwZW9mIFRhZyA9PT0gJ3N0cmluZycgPyAncmVmJyA6ICdpbm5lclJlZiddID0gcmVmLCBfcmVmMiksIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNsaWNrOiBfdGhpczIub25DbGljayxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF90aGlzMi5jb250ZXh0LmlzT3BlbixcbiAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IF90aGlzMi5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93blRvZ2dsZTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duVG9nZ2xlLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMDtcbkRyb3Bkb3duVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQkO1xuRHJvcGRvd25Ub2dnbGUuY29udGV4dFR5cGUgPSBEcm9wZG93bkNvbnRleHQ7XG52YXIgRHJvcGRvd25Ub2dnbGUkMSA9IERyb3Bkb3duVG9nZ2xlO1xuXG52YXIgX2V4Y2x1ZGVkJFcgPSBbXCJ0YWdcIiwgXCJiYXNlQ2xhc3NcIiwgXCJiYXNlQ2xhc3NBY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcImlubmVyUmVmXCJdO1xuXG52YXIgcHJvcFR5cGVzJCQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUpLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYmFzZUNsYXNzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFzZUNsYXNzQWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyRfID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgYmFzZUNsYXNzOiAnZmFkZScsXG4gIGJhc2VDbGFzc0FjdGl2ZTogJ3Nob3cnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSxcbiAgYXBwZWFyOiB0cnVlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgXCJpblwiOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gRmFkZShwcm9wcykge1xuICB2YXIgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzLFxuICAgICAgYmFzZUNsYXNzQWN0aXZlID0gcHJvcHMuYmFzZUNsYXNzQWN0aXZlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRXKTtcblxuICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIHRyYW5zaXRpb25Qcm9wcywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHZhciBpc0FjdGl2ZSA9IHN0YXR1cyA9PT0gJ2VudGVyZWQnO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYmFzZUNsYXNzLCBpc0FjdGl2ZSAmJiBiYXNlQ2xhc3NBY3RpdmUpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9LCBjaGlsZFByb3BzLCB7XG4gICAgICByZWY6IGlubmVyUmVmXG4gICAgfSksIGNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbkZhZGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJCQ7XG5GYWRlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRfO1xuXG4vKipcbiAqIEFjY29yZGlvbkNvbnRleHRcbiAqIHtcbiAqICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gKiAgb3BlbklkOiBQcm9wVHlwZXMuc3RyaW5nLCAgICBcbiAqIH1cbiAqL1xuXG52YXIgQWNjb3JkaW9uQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIF9leGNsdWRlZCRWID0gW1wiZmx1c2hcIiwgXCJvcGVuXCIsIFwidG9nZ2xlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJF8gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgZmx1c2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZFxufTtcbnZhciBkZWZhdWx0UHJvcHMkWiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIEFjY29yZGlvbiA9IGZ1bmN0aW9uIEFjY29yZGlvbihwcm9wcykge1xuICB2YXIgZmx1c2ggPSBwcm9wcy5mbHVzaCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbicsIHtcbiAgICAnYWNjb3JkaW9uLWZsdXNoJzogZmx1c2hcbiAgfSksIGNzc01vZHVsZSk7XG4gIHZhciBhY2NvcmRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IG9wZW4sXG4gICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY29yZGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWNjb3JkaW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKSk7XG59O1xuXG5BY2NvcmRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJF87XG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFo7XG52YXIgQWNjb3JkaW9uJDEgPSBBY2NvcmRpb247XG5cbnZhciBfZXhjbHVkZWQkVSA9IFtcImRlZmF1bHRPcGVuXCIsIFwic3RheU9wZW5cIl07XG52YXIgcHJvcFR5cGVzJFogPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBzdGF5T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyRZID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgVW5jb250cm9sbGVkQWNjb3JkaW9uID0gZnVuY3Rpb24gVW5jb250cm9sbGVkQWNjb3JkaW9uKF9yZWYpIHtcbiAgdmFyIGRlZmF1bHRPcGVuID0gX3JlZi5kZWZhdWx0T3BlbixcbiAgICAgIHN0YXlPcGVuID0gX3JlZi5zdGF5T3BlbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJFUpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0T3BlbiB8fCAoc3RheU9wZW4gPyBbXSA6IHVuZGVmaW5lZCkpLFxuICAgICAgb3BlbiA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldE9wZW4gPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShpZCkge1xuICAgIGlmIChzdGF5T3Blbikge1xuICAgICAgb3Blbi5pbmNsdWRlcyhpZCkgPyBzZXRPcGVuKG9wZW4uZmlsdGVyKGZ1bmN0aW9uIChhY2NvcmRpb25JZCkge1xuICAgICAgICByZXR1cm4gYWNjb3JkaW9uSWQgIT09IGlkO1xuICAgICAgfSkpIDogc2V0T3BlbihbXS5jb25jYXQob3BlbiwgW2lkXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuID09PSBpZCA/IHNldE9wZW4odW5kZWZpbmVkKSA6IHNldE9wZW4oaWQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY29yZGlvbiQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBvcGVuOiBvcGVuLFxuICAgIHRvZ2dsZTogdG9nZ2xlXG4gIH0pKTtcbn07XG5cbkFjY29yZGlvbiQxLnByb3BUeXBlcyA9IHByb3BUeXBlcyRaO1xuQWNjb3JkaW9uJDEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFk7XG52YXIgVW5jb250cm9sbGVkQWNjb3JkaW9uJDEgPSBVbmNvbnRyb2xsZWRBY2NvcmRpb247XG5cbnZhciBfZXhjbHVkZWQkVCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YXJnZXRJZFwiXTtcbnZhciBwcm9wVHlwZXMkWSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICB0YXJnZXRJZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbnZhciBkZWZhdWx0UHJvcHMkWCA9IHtcbiAgdGFnOiAnaDInXG59O1xuXG52YXIgQWNjb3JkaW9uSGVhZGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRUKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEFjY29yZGlvbkNvbnRleHQpLFxuICAgICAgb3BlbiA9IF91c2VDb250ZXh0Lm9wZW4sXG4gICAgICB0b2dnbGUgPSBfdXNlQ29udGV4dC50b2dnbGU7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuICB2YXIgYnV0dG9uQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYWNjb3JkaW9uLWJ1dHRvbicsIHtcbiAgICBjb2xsYXBzZWQ6ICEoQXJyYXkuaXNBcnJheShvcGVuKSA/IG9wZW4uaW5jbHVkZXModGFyZ2V0SWQpIDogb3BlbiA9PT0gdGFyZ2V0SWQpXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uQ2xhc3NlcyxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZSh0YXJnZXRJZCk7XG4gICAgfVxuICB9LCBjaGlsZHJlbikpO1xufTtcblxuQWNjb3JkaW9uSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRZO1xuQWNjb3JkaW9uSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRYO1xudmFyIEFjY29yZGlvbkhlYWRlciQxID0gQWNjb3JkaW9uSGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJFMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkWCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRXID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSQyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbi1pdGVtJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cbkFjY29yZGlvbkl0ZW0kMi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkWDtcbkFjY29yZGlvbkl0ZW0kMi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVztcbnZhciBBY2NvcmRpb25JdGVtJDMgPSBBY2NvcmRpb25JdGVtJDI7XG5cbnZhciBfZXhjbHVkZWQkUiA9IFtcInRhZ1wiLCBcImhvcml6b250YWxcIiwgXCJpc09wZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJuYXZiYXJcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcImlubmVyUmVmXCJdO1xuXG52YXIgX3RyYW5zaXRpb25TdGF0dXNUb0NsO1xuXG52YXIgcHJvcFR5cGVzJFcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUpLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIG5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSlcbn0pO1xuXG52YXIgZGVmYXVsdFByb3BzJFYgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICBob3Jpem9udGFsOiBmYWxzZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIHRhZzogJ2RpdicsXG4gIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5Db2xsYXBzZVxufSk7XG5cbnZhciB0cmFuc2l0aW9uU3RhdHVzVG9DbGFzc0hhc2ggPSAoX3RyYW5zaXRpb25TdGF0dXNUb0NsID0ge30sIF90cmFuc2l0aW9uU3RhdHVzVG9DbFtUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJJTkddID0gJ2NvbGxhcHNpbmcnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSRURdID0gJ2NvbGxhcHNlIHNob3cnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRJTkddID0gJ2NvbGxhcHNpbmcnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRFRF0gPSAnY29sbGFwc2UnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2wpO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uQ2xhc3Moc3RhdHVzKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uU3RhdHVzVG9DbGFzc0hhc2hbc3RhdHVzXSB8fCAnY29sbGFwc2UnO1xufVxuXG52YXIgQ29sbGFwc2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29sbGFwc2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbGxhcHNlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9O1xuICAgIFsnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzW25hbWVdID0gX3RoaXNbbmFtZV0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5ob3Jpem9udGFsID8gbm9kZS5zY3JvbGxXaWR0aCA6IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuICB9O1xuXG4gIF9wcm90by5vbkVudGVyaW5nID0gZnVuY3Rpb24gb25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiB0aGlzLmdldERpbWVuc2lvbihub2RlKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIG9uRW50ZXJlZChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXQgPSBmdW5jdGlvbiBvbkV4aXQobm9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiB0aGlzLmdldERpbWVuc2lvbihub2RlKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRpbmcgPSBmdW5jdGlvbiBvbkV4aXRpbmcobm9kZSkge1xuICAgIC8vIGdldHRpbmcgdGhpcyB2YXJpYWJsZSB0cmlnZ2VycyBhIHJlZmxvd1xuICAgIHRoaXMuZ2V0RGltZW5zaW9uKG5vZGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiAwXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQobm9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBob3Jpem9udGFsID0gX3RoaXMkcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG5hdmJhciA9IF90aGlzJHByb3BzLm5hdmJhcixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRSKTtcblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbjtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgICB2YXIgY2hpbGRQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSksIGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgY29sbGFwc2VDbGFzcyA9IGdldFRyYW5zaXRpb25DbGFzcyhzdGF0dXMpO1xuICAgICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBob3Jpem9udGFsICYmICdjb2xsYXBzZS1ob3Jpem9udGFsJywgY29sbGFwc2VDbGFzcywgbmF2YmFyICYmICduYXZiYXItY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgICAgIHZhciBzdHlsZSA9IGRpbWVuc2lvbiA9PT0gbnVsbCA/IG51bGwgOiAoX3JlZiA9IHt9LCBfcmVmW2hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddID0gZGltZW5zaW9uLCBfcmVmKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNoaWxkUHJvcHMuc3R5bGUpLCBzdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcmVmOiBfdGhpczIucHJvcHMuaW5uZXJSZWZcbiAgICAgIH0pLCBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVztcbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRWO1xudmFyIENvbGxhcHNlJDEgPSBDb2xsYXBzZTtcblxudmFyIF9leGNsdWRlZCRRID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIiwgXCJjaGlsZHJlblwiLCBcImFjY29yZGlvbklkXCJdO1xudmFyIHByb3BUeXBlcyRWID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGFjY29yZGlvbklkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkXG59O1xudmFyIGRlZmF1bHRQcm9wcyRVID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYWNjb3JkaW9uSWQgPSBwcm9wcy5hY2NvcmRpb25JZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFEpO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQWNjb3JkaW9uQ29udGV4dCksXG4gICAgICBvcGVuID0gX3VzZUNvbnRleHQub3BlbjtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24tY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDb2xsYXBzZSQxLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGlzT3BlbjogQXJyYXkuaXNBcnJheShvcGVuKSA/IG9wZW4uaW5jbHVkZXMoYWNjb3JkaW9uSWQpIDogb3BlbiA9PT0gYWNjb3JkaW9uSWRcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLWJvZHlcIlxuICB9LCBjaGlsZHJlbikpO1xufTtcblxuQWNjb3JkaW9uSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVjtcbkFjY29yZGlvbkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFU7XG52YXIgQWNjb3JkaW9uSXRlbSQxID0gQWNjb3JkaW9uSXRlbTtcblxudmFyIF9leGNsdWRlZCRQID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJpbm5lclJlZlwiLCBcInBpbGxcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFUgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGlsbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFQgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgcGlsbDogZmFsc2UsXG4gIHRhZzogJ3NwYW4nXG59O1xuXG52YXIgQmFkZ2UgPSBmdW5jdGlvbiBCYWRnZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBwaWxsID0gcHJvcHMucGlsbCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFApO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2JhZGdlJywgJ2JnLScgKyBjb2xvciwgcGlsbCA/ICdyb3VuZGVkLXBpbGwnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnc3BhbicpIHtcbiAgICBUYWcgPSAnYSc7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5CYWRnZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVTtcbkJhZGdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRUO1xudmFyIEJhZGdlJDEgPSBCYWRnZTtcblxudmFyIF9leGNsdWRlZCRPID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJib2R5XCIsIFwiaW52ZXJzZVwiLCBcIm91dGxpbmVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkVCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW52ZXJzZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJvZHk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJFMgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkID0gZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJvZHkgPSBwcm9wcy5ib2R5LFxuICAgICAgaW52ZXJzZSA9IHByb3BzLmludmVyc2UsXG4gICAgICBvdXRsaW5lID0gcHJvcHMub3V0bGluZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRPKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkJywgaW52ZXJzZSA/ICd0ZXh0LXdoaXRlJyA6IGZhbHNlLCBib2R5ID8gJ2NhcmQtYm9keScgOiBmYWxzZSwgY29sb3IgPyAob3V0bGluZSA/ICdib3JkZXInIDogJ2JnJykgKyBcIi1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5DYXJkLnByb3BUeXBlcyA9IHByb3BUeXBlcyRUO1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUztcbnZhciBDYXJkJDEgPSBDYXJkO1xuXG52YXIgX2V4Y2x1ZGVkJE4gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFIgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkR3JvdXAgPSBmdW5jdGlvbiBDYXJkR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE4pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZ3JvdXAnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUztcbkNhcmRHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUjtcbnZhciBDYXJkR3JvdXAkMSA9IENhcmRHcm91cDtcblxudmFyIF9leGNsdWRlZCRNID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRSID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRRID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZERlY2sgPSBmdW5jdGlvbiBDYXJkRGVjayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1kZWNrJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkRGVjay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUjtcbkNhcmREZWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRRO1xudmFyIENhcmREZWNrJDEgPSBDYXJkRGVjaztcblxudmFyIF9leGNsdWRlZCRMID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRRID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRQID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZENvbHVtbnMgPSBmdW5jdGlvbiBDYXJkQ29sdW1ucyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1jb2x1bW5zJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkQ29sdW1ucy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUTtcbkNhcmRDb2x1bW5zLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRQO1xudmFyIENhcmRDb2x1bW5zJDEgPSBDYXJkQ29sdW1ucztcblxudmFyIF9leGNsdWRlZCRLID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFAgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkTyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRCb2R5ID0gZnVuY3Rpb24gQ2FyZEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRLKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuQ2FyZEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJFA7XG5DYXJkQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTztcbnZhciBDYXJkQm9keSQxID0gQ2FyZEJvZHk7XG5cbnZhciBfZXhjbHVkZWQkSiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRPID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJE4gPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgQ2FyZExpbmsgPSBmdW5jdGlvbiBDYXJkTGluayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEopO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtbGluaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTztcbkNhcmRMaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyROO1xudmFyIENhcmRMaW5rJDEgPSBDYXJkTGluaztcblxudmFyIF9leGNsdWRlZCRJID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyROID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRNID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZEZvb3RlciA9IGZ1bmN0aW9uIENhcmRGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZm9vdGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkRm9vdGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyROO1xuQ2FyZEZvb3Rlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTTtcbnZhciBDYXJkRm9vdGVyJDEgPSBDYXJkRm9vdGVyO1xuXG52YXIgX2V4Y2x1ZGVkJEggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJE0gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEwgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkSGVhZGVyID0gZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJE07XG5DYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRMO1xudmFyIENhcmRIZWFkZXIkMSA9IENhcmRIZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkRyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRvcFwiLCBcImJvdHRvbVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvdHRvbTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRLID0ge1xuICB0YWc6ICdpbWcnXG59O1xuXG52YXIgQ2FyZEltZyA9IGZ1bmN0aW9uIENhcmRJbWcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHRvcCA9IHByb3BzLnRvcCxcbiAgICAgIGJvdHRvbSA9IHByb3BzLmJvdHRvbSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEcpO1xuXG4gIHZhciBjYXJkSW1nQ2xhc3NOYW1lID0gJ2NhcmQtaW1nJztcblxuICBpZiAodG9wKSB7XG4gICAgY2FyZEltZ0NsYXNzTmFtZSA9ICdjYXJkLWltZy10b3AnO1xuICB9XG5cbiAgaWYgKGJvdHRvbSkge1xuICAgIGNhcmRJbWdDbGFzc05hbWUgPSAnY2FyZC1pbWctYm90dG9tJztcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY2FyZEltZ0NsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkSW1nLnByb3BUeXBlcyA9IHByb3BUeXBlcyRMO1xuQ2FyZEltZy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSztcbnZhciBDYXJkSW1nJDEgPSBDYXJkSW1nO1xuXG52YXIgX2V4Y2x1ZGVkJEYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEsgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEogPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkSW1nT3ZlcmxheSA9IGZ1bmN0aW9uIENhcmRJbWdPdmVybGF5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRGKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWltZy1vdmVybGF5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkSW1nT3ZlcmxheS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSztcbkNhcmRJbWdPdmVybGF5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRKO1xudmFyIENhcmRJbWdPdmVybGF5JDEgPSBDYXJkSW1nT3ZlcmxheTtcblxudmFyIF9leGNsdWRlZCRFID0gW1wiaW5cIiwgXCJjaGlsZHJlblwiLCBcImNzc01vZHVsZVwiLCBcInNsaWRlXCIsIFwidGFnXCIsIFwiY2xhc3NOYW1lXCJdO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENhcm91c2VsSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uRW50ZXIgPSBfdGhpcy5vbkVudGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBfdGhpcy5vbkVudGVyaW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdCA9IF90aGlzLm9uRXhpdC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBfdGhpcy5vbkV4aXRpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ZWQgPSBfdGhpcy5vbkV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWxJdGVtLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FbnRlciA9IGZ1bmN0aW9uIG9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiBvbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgLy8gZ2V0dGluZyB0aGlzIHZhcmlhYmxlIHRyaWdnZXJzIGEgcmVmbG93XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgIHJldHVybiBvZmZzZXRIZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdCA9IGZ1bmN0aW9uIG9uRXhpdChub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2xpZGUuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQobm9kZSkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWQuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNJbiA9IF90aGlzJHByb3BzW1wiaW5cIl0sXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgc2xpZGUgPSBfdGhpcyRwcm9wcy5zbGlkZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCB0cmFuc2l0aW9uUHJvcHMsIHtcbiAgICAgIGVudGVyOiBzbGlkZSxcbiAgICAgIGV4aXQ6IHNsaWRlLFxuICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMyLmNvbnRleHQuZGlyZWN0aW9uO1xuICAgICAgdmFyIGlzQWN0aXZlID0gc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJFRCB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HO1xuICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzTmFtZSA9IChzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FTlRFUklORyB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HKSAmJiBfdGhpczIuc3RhdGUuc3RhcnRBbmltYXRpb24gJiYgKGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyAnY2Fyb3VzZWwtaXRlbS1zdGFydCcgOiAnY2Fyb3VzZWwtaXRlbS1lbmQnKTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZSA9IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HICYmIChkaXJlY3Rpb24gPT09ICdlbmQnID8gJ2Nhcm91c2VsLWl0ZW0tbmV4dCcgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2Jyk7XG4gICAgICB2YXIgaXRlbUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaXRlbScsIGlzQWN0aXZlICYmICdhY3RpdmUnLCBkaXJlY3Rpb25DbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaXRlbUNsYXNzZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2Fyb3VzZWxJdGVtO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIFwiaW5cIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBzbGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59KTtcbkNhcm91c2VsSXRlbS5kZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICB0YWc6ICdkaXYnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuQ2Fyb3VzZWwsXG4gIHNsaWRlOiB0cnVlXG59KTtcbkNhcm91c2VsSXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWxJdGVtJDEgPSBDYXJvdXNlbEl0ZW07XG5cbi8qKlxuICogQ2Fyb3VzZWxDb250ZXh0XG4gKiB7XG4gKiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydzdGFydCcsICdlbmQnXSkuaXNSZXF1aXJlZCxcbiAqIH1cbiAqL1xuXG52YXIgQ2Fyb3VzZWxDb250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG5cbnZhciBDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDYXJvdXNlbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5oYW5kbGVLZXlQcmVzcyA9IF90aGlzLmhhbmRsZUtleVByZXNzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbmRlckl0ZW1zID0gX3RoaXMucmVuZGVySXRlbXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaG92ZXJTdGFydCA9IF90aGlzLmhvdmVyU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaG92ZXJFbmQgPSBfdGhpcy5ob3ZlckVuZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IF90aGlzLmhhbmRsZVRvdWNoRW5kLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvdWNoU3RhcnRYID0gMDtcbiAgICBfdGhpcy50b3VjaFN0YXJ0WSA9IDA7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVJbmRleDogX3RoaXMucHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICBkaXJlY3Rpb246ICdlbmQnLFxuICAgICAgaW5kaWNhdG9yQ2xpY2tlZDogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDYXJvdXNlbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldENvbnRleHRWYWx1ZSA9IGZ1bmN0aW9uIGdldENvbnRleHRWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmRpcmVjdGlvblxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU2V0IHVwIHRoZSBjeWNsZVxuICAgIGlmICh0aGlzLnByb3BzLnJpZGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoKTtcbiAgICB9IC8vIFRPRE86IG1vdmUgdGhpcyB0byB0aGUgc3BlY2lmaWMgY2Fyb3VzZWwgbGlrZSBib290c3RyYXAuIEN1cnJlbnRseSBpdCB3aWxsIHRyaWdnZXIgQUxMIGNhcm91c2VscyBvbiB0aGUgcGFnZS5cblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgfTtcblxuICBDYXJvdXNlbC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV3U3RhdGUgPSBudWxsO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHByZXZTdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uID0gcHJldlN0YXRlLmRpcmVjdGlvbixcbiAgICAgICAgaW5kaWNhdG9yQ2xpY2tlZCA9IHByZXZTdGF0ZS5pbmRpY2F0b3JDbGlja2VkO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uIHRvIHR1cm5cbiAgICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggPT09IGFjdGl2ZUluZGV4ICsgMSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnZW5kJztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleCAtIDEpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3N0YXJ0JztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4IDwgYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gaW5kaWNhdG9yQ2xpY2tlZCA/ICdzdGFydCcgOiAnZW5kJztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgICBkaXJlY3Rpb24gPSBpbmRpY2F0b3JDbGlja2VkID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IG5leHRQcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgIGluZGljYXRvckNsaWNrZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVJbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCkgcmV0dXJuO1xuICAgIHRoaXMuc2V0SW50ZXJ2YWwodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoX3NldEludGVydmFsKSB7XG4gICAgZnVuY3Rpb24gc2V0SW50ZXJ2YWwoKSB7XG4gICAgICByZXR1cm4gX3NldEludGVydmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3NldEludGVydmFsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBzZXRJbnRlcnZhbDtcbiAgfShmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSBub3QgdG8gaGF2ZSBtdWx0aXBsZSBpbnRlcnZhbHMgZ29pbmcuLi5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIGlmIChwcm9wcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5jeWNsZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wcy5uZXh0KCk7XG4gICAgICB9LCBwYXJzZUludChwcm9wcy5pbnRlcnZhbCwgMTApKTtcbiAgICB9XG4gIH0pO1xuXG4gIF9wcm90by5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKF9jbGVhckludGVydmFsKSB7XG4gICAgZnVuY3Rpb24gY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgIHJldHVybiBfY2xlYXJJbnRlcnZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2NsZWFySW50ZXJ2YWwudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWw7XG4gIH0oZnVuY3Rpb24gKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jeWNsZUludGVydmFsKTtcbiAgfSk7XG5cbiAgX3Byb3RvLmhvdmVyU3RhcnQgPSBmdW5jdGlvbiBob3ZlclN0YXJ0KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tb3VzZUVudGVyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgIChfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMpLm1vdXNlRW50ZXIuYXBwbHkoX3RoaXMkcHJvcHMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ob3ZlckVuZCA9IGZ1bmN0aW9uIGhvdmVyRW5kKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLnNldEludGVydmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW91c2VMZWF2ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgKF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMpLm1vdXNlTGVhdmUuYXBwbHkoX3RoaXMkcHJvcHMyLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlS2V5UHJlc3MgPSBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLnByb3BzLnByZXZpb3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLnByb3BzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZW5hYmxlVG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5lbmFibGVUb3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICB2YXIgY3VycmVudFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgdmFyIGRpZmZYID0gTWF0aC5hYnModGhpcy50b3VjaFN0YXJ0WCAtIGN1cnJlbnRYKTtcbiAgICB2YXIgZGlmZlkgPSBNYXRoLmFicyh0aGlzLnRvdWNoU3RhcnRZIC0gY3VycmVudFkpOyAvLyBEb24ndCBzd2lwZSBpZiBZLW1vdmVtZW50IGlzIGJpZ2dlciB0aGFuIFgtbW92ZW1lbnRcblxuICAgIGlmIChkaWZmWCA8IGRpZmZZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpZmZYIDwgU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRYIDwgdGhpcy50b3VjaFN0YXJ0WCkge1xuICAgICAgdGhpcy5wcm9wcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucHJldmlvdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckl0ZW1zID0gZnVuY3Rpb24gcmVuZGVySXRlbXMoY2Fyb3VzZWxJdGVtcywgY2xhc3NOYW1lKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgc2xpZGUgPSB0aGlzLnByb3BzLnNsaWRlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LCBjYXJvdXNlbEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBpc0luID0gaW5kZXggPT09IF90aGlzMi5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGl0ZW0sIHtcbiAgICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgICBzbGlkZTogc2xpZGVcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzMy5jc3NNb2R1bGUsXG4gICAgICAgIHNsaWRlID0gX3RoaXMkcHJvcHMzLnNsaWRlLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICBkYXJrID0gX3RoaXMkcHJvcHMzLmRhcmssXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wczMuZmFkZTtcbiAgICB2YXIgb3V0ZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsJywgZmFkZSwgc2xpZGUgJiYgJ3NsaWRlJywgZGFyayAmJiAnY2Fyb3VzZWwtZGFyaycpLCBjc3NNb2R1bGUpO1xuICAgIHZhciBpbm5lckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2Nhcm91c2VsLWlubmVyJyksIGNzc01vZHVsZSk7IC8vIGZpbHRlciBvdXQgYm9vbGVhbnMsIG51bGwsIG9yIHVuZGVmaW5lZFxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQgIT09IG51bGwgJiYgY2hpbGQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY2hpbGQgIT09ICdib29sZWFuJztcbiAgICB9KTtcbiAgICB2YXIgc2xpZGVzT25seSA9IGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09IENhcm91c2VsSXRlbSQxO1xuICAgIH0pOyAvLyBSZW5kZXJpbmcgb25seSBzbGlkZXNcblxuICAgIGlmIChzbGlkZXNPbmx5KSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBvdXRlckNsYXNzZXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5ob3ZlclN0YXJ0LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoY2hpbGRyZW4sIGlubmVyQ2xhc3NlcykpKTtcbiAgICB9IC8vIFJlbmRlcmluZyBzbGlkZXMgYW5kIGNvbnRyb2xzXG5cblxuICAgIGlmIChjaGlsZHJlblswXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB2YXIgX2Nhcm91c2VsSXRlbXMgPSBjaGlsZHJlblswXTtcbiAgICAgIHZhciBfY29udHJvbExlZnQgPSBjaGlsZHJlblsxXTtcbiAgICAgIHZhciBfY29udHJvbFJpZ2h0ID0gY2hpbGRyZW5bMl07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBvdXRlckNsYXNzZXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5ob3ZlclN0YXJ0LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoX2Nhcm91c2VsSXRlbXMsIGlubmVyQ2xhc3NlcyksIF9jb250cm9sTGVmdCwgX2NvbnRyb2xSaWdodCkpO1xuICAgIH0gLy8gUmVuZGVyaW5nIGluZGljYXRvcnMsIHNsaWRlcyBhbmQgY29udHJvbHNcblxuXG4gICAgdmFyIGluZGljYXRvcnMgPSBjaGlsZHJlblswXTtcblxuICAgIHZhciB3cmFwcGVkT25DbGljayA9IGZ1bmN0aW9uIHdyYXBwZWRPbkNsaWNrKGUpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5kaWNhdG9ycy5wcm9wcy5vbkNsaWNrSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoe1xuICAgICAgICAgIGluZGljYXRvckNsaWNrZWQ6IHRydWVcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbmRpY2F0b3JzLnByb3BzLm9uQ2xpY2tIYW5kbGVyKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHdyYXBwZWRJbmRpY2F0b3JzID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudChpbmRpY2F0b3JzLCB7XG4gICAgICBvbkNsaWNrSGFuZGxlcjogd3JhcHBlZE9uQ2xpY2tcbiAgICB9KTtcbiAgICB2YXIgY2Fyb3VzZWxJdGVtcyA9IGNoaWxkcmVuWzFdO1xuICAgIHZhciBjb250cm9sTGVmdCA9IGNoaWxkcmVuWzJdO1xuICAgIHZhciBjb250cm9sUmlnaHQgPSBjaGlsZHJlblszXTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhvdmVyU3RhcnQsXG4gICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmQsXG4gICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZXh0VmFsdWUoKVxuICAgIH0sIHdyYXBwZWRJbmRpY2F0b3JzLCB0aGlzLnJlbmRlckl0ZW1zKGNhcm91c2VsSXRlbXMsIGlubmVyQ2xhc3NlcyksIGNvbnRyb2xMZWZ0LCBjb250cm9sUmlnaHQpKTtcbiAgfTtcblxuICByZXR1cm4gQ2Fyb3VzZWw7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIC8vIHRoZSBjdXJyZW50IGFjdGl2ZSBzbGlkZSBvZiB0aGUgY2Fyb3VzZWxcbiAgYWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvLyBhIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBhZHZhbmNlIHRoZSBjYXJvdXNlbCB0byB0aGUgbmV4dCBzbGlkZSAodmlhIGFjdGl2ZUluZGV4KVxuICBuZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gYSBmdW5jdGlvbiB3aGljaCBzaG91bGQgYWR2YW5jZSB0aGUgY2Fyb3VzZWwgdG8gdGhlIHByZXZpb3VzIHNsaWRlICh2aWEgYWN0aXZlSW5kZXgpXG4gIHByZXZpb3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gY29udHJvbHMgaWYgdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgc2hvdWxkIGNvbnRyb2wgdGhlIGNhcm91c2VsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyogSWYgc2V0IHRvIFwiaG92ZXJcIiwgcGF1c2VzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvblxuICAgKiBtb3VzZWxlYXZlLiBJZiBzZXQgdG8gZmFsc2UsIGhvdmVyaW5nIG92ZXIgdGhlIGNhcm91c2VsIHdvbid0IHBhdXNlIGl0LiAoZGVmYXVsdDogXCJob3ZlclwiKVxuICAgKi9cbiAgcGF1c2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydob3ZlcicsIGZhbHNlXSksXG4gIC8vIEF1dG9wbGF5cyB0aGUgY2Fyb3VzZWwgYWZ0ZXIgdGhlIHVzZXIgbWFudWFsbHkgY3ljbGVzIHRoZSBmaXJzdCBpdGVtLiBJZiBcImNhcm91c2VsXCIsIGF1dG9wbGF5cyB0aGUgY2Fyb3VzZWwgb24gbG9hZC5cbiAgLy8gVGhpcyBpcyBob3cgYm9vdHN0cmFwIGRlZmluZXMgaXQuLi4gSSB3b3VsZCBwcmVmZXIgYSBib29sIG5hbWVkIGF1dG9wbGF5IG9yIHNvbWV0aGluZy4uLlxuICByaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnY2Fyb3VzZWwnXSksXG4gIC8vIHRoZSBpbnRlcnZhbCBhdCB3aGljaCB0aGUgY2Fyb3VzZWwgYXV0b21hdGljYWxseSBjeWNsZXMgKGRlZmF1bHQ6IDUwMDApXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlc1xuICBpbnRlcnZhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICAvLyBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBDYXJvdXNlbFxuICBtb3VzZUVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8vIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBleGl0cyB0aGUgQ2Fyb3VzZWxcbiAgbW91c2VMZWF2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvLyBjb250cm9scyB3aGV0aGVyIHRoZSBzbGlkZSBhbmltYXRpb24gb24gdGhlIENhcm91c2VsIHdvcmtzIG9yIG5vdFxuICBzbGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICAvLyBtYWtlIHRoZSBjb250cm9scywgaW5kaWNhdG9ycyBhbmQgY2FwdGlvbnMgZGFyayBvbiB0aGUgQ2Fyb3VzZWxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBlbmFibGVUb3VjaDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xuQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogdHJ1ZSxcbiAgZW5hYmxlVG91Y2g6IHRydWUsXG4gIGZhZGU6IGZhbHNlXG59O1xuQ2Fyb3VzZWwuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWwkMSA9IENhcm91c2VsO1xuXG52YXIgQ2Fyb3VzZWxDb250cm9sID0gZnVuY3Rpb24gQ2Fyb3VzZWxDb250cm9sKHByb3BzKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBvbkNsaWNrSGFuZGxlciA9IHByb3BzLm9uQ2xpY2tIYW5kbGVyLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZGlyZWN0aW9uVGV4dCA9IHByb3BzLmRpcmVjdGlvblRleHQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBhbmNob3JDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgXCJjYXJvdXNlbC1jb250cm9sLVwiICsgZGlyZWN0aW9uKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGljb25DbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKFwiY2Fyb3VzZWwtY29udHJvbC1cIiArIGRpcmVjdGlvbiArIFwiLWljb25cIiksIGNzc01vZHVsZSk7XG4gIHZhciBzY3JlZW5SZWFkZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd2aXN1YWxseS1oaWRkZW4nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gV2UgbmVlZCB0byBkaXNhYmxlIHRoaXMgbGludGluZyBydWxlIHRvIHVzZSBhbiBgPGE+YCBpbnN0ZWFkIG9mXG4gICAgLy8gYDxidXR0b24+YCBiZWNhdXNlIHRoYXQncyB3aGF0IHRoZSBCb290c3RyYXAgZXhhbXBsZXMgcmVxdWlyZTpcbiAgICAvLyBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjUvY29tcG9uZW50cy9jYXJvdXNlbC8jd2l0aC1jb250cm9sc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWRcbiAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgY2xhc3NOYW1lOiBhbmNob3JDbGFzc2VzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgfSxcbiAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICB0YWJJbmRleDogXCIwXCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNsaWNrSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBpY29uQ2xhc3NlcyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IHNjcmVlblJlYWRlckNsYXNzZXNcbiAgICB9LCBkaXJlY3Rpb25UZXh0IHx8IGRpcmVjdGlvbikpXG4gICk7XG59O1xuXG5DYXJvdXNlbENvbnRyb2wucHJvcFR5cGVzID0ge1xuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydwcmV2JywgJ25leHQnXSkuaXNSZXF1aXJlZCxcbiAgb25DbGlja0hhbmRsZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXJlY3Rpb25UZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbENvbnRyb2wkMSA9IENhcm91c2VsQ29udHJvbDtcblxudmFyIENhcm91c2VsSW5kaWNhdG9ycyA9IGZ1bmN0aW9uIENhcm91c2VsSW5kaWNhdG9ycyhwcm9wcykge1xuICB2YXIgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIGFjdGl2ZUluZGV4ID0gcHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBvbkNsaWNrSGFuZGxlciA9IHByb3BzLm9uQ2xpY2tIYW5kbGVyLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaW5kaWNhdG9ycycpLCBjc3NNb2R1bGUpO1xuICB2YXIgaW5kaWNhdG9ycyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgdmFyIGluZGljYXRvckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oe1xuICAgICAgYWN0aXZlOiBhY3RpdmVJbmRleCA9PT0gaWR4XG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogaXRlbS5jYXB0aW9uLFxuICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiB0cnVlLFxuICAgICAga2V5OiBcIlwiICsgKGl0ZW0ua2V5IHx8IE9iamVjdC52YWx1ZXMoaXRlbSkuam9pbignJykpLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25DbGlja0hhbmRsZXIoaWR4KTtcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6IGluZGljYXRvckNsYXNzZXNcbiAgICB9LCBpdGVtLmNhcHRpb24pO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3Nlc1xuICB9LCBpbmRpY2F0b3JzKTtcbn07XG5cbkNhcm91c2VsSW5kaWNhdG9ycy5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LmlzUmVxdWlyZWQsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlci5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWxJbmRpY2F0b3JzJDEgPSBDYXJvdXNlbEluZGljYXRvcnM7XG5cbnZhciBDYXJvdXNlbENhcHRpb24gPSBmdW5jdGlvbiBDYXJvdXNlbENhcHRpb24ocHJvcHMpIHtcbiAgdmFyIGNhcHRpb25IZWFkZXIgPSBwcm9wcy5jYXB0aW9uSGVhZGVyLFxuICAgICAgY2FwdGlvblRleHQgPSBwcm9wcy5jYXB0aW9uVGV4dCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtY2FwdGlvbicsICdkLW5vbmUnLCAnZC1tZC1ibG9jaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgY2FwdGlvbkhlYWRlciksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY2FwdGlvblRleHQpKTtcbn07XG5cbkNhcm91c2VsQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb25IZWFkZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2FwdGlvblRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsQ2FwdGlvbiQxID0gQ2Fyb3VzZWxDYXB0aW9uO1xuXG52YXIgX2V4Y2x1ZGVkJEQgPSBbXCJkZWZhdWx0QWN0aXZlSW5kZXhcIiwgXCJhdXRvUGxheVwiLCBcImluZGljYXRvcnNcIiwgXCJjb250cm9sc1wiLCBcIml0ZW1zXCIsIFwiZ29Ub0luZGV4XCJdO1xudmFyIHByb3BUeXBlcyRKID0ge1xuICBpdGVtczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheS5pc1JlcXVpcmVkLFxuICBpbmRpY2F0b3JzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbnRyb2xzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGF1dG9QbGF5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRlZmF1bHRBY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgbmV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBwcmV2aW91czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBnb1RvSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY1xufTtcblxudmFyIFVuY29udHJvbGxlZENhcm91c2VsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENhcm91c2VsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDYXJvdXNlbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSW5kZXg6IHByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCB8fCAwXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0ID0gX3RoaXMubmV4dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5wcmV2aW91cyA9IF90aGlzLnByZXZpb3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdvVG9JbmRleCA9IF90aGlzLmdvVG9JbmRleC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBfdGhpcy5vbkV4aXRpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ZWQgPSBfdGhpcy5vbkV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQ2Fyb3VzZWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkV4aXRpbmcgPSBmdW5jdGlvbiBvbkV4aXRpbmcoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHZhciBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVJbmRleDogbmV4dEluZGV4XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnByZXZpb3VzID0gZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgdmFyIG5leHRJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDAgPyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEgOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4IC0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXh0SW5kZXhcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ29Ub0luZGV4ID0gZnVuY3Rpb24gZ29Ub0luZGV4KG5ld0luZGV4KSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVJbmRleDogbmV3SW5kZXhcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXV0b1BsYXkgPSBfdGhpcyRwcm9wcy5hdXRvUGxheSxcbiAgICAgICAgaW5kaWNhdG9ycyA9IF90aGlzJHByb3BzLmluZGljYXRvcnMsXG4gICAgICAgIGNvbnRyb2xzID0gX3RoaXMkcHJvcHMuY29udHJvbHMsXG4gICAgICAgIGl0ZW1zID0gX3RoaXMkcHJvcHMuaXRlbXMsXG4gICAgICAgIGdvVG9JbmRleCA9IF90aGlzJHByb3BzLmdvVG9JbmRleCxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJEQpO1xuXG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgICB2YXIgc2xpZGVzID0gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gaXRlbS5rZXkgfHwgaXRlbS5zcmM7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsSXRlbSQxLCB7XG4gICAgICAgIG9uRXhpdGluZzogX3RoaXMyLm9uRXhpdGluZyxcbiAgICAgICAgb25FeGl0ZWQ6IF90aGlzMi5vbkV4aXRlZCxcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkLWJsb2NrIHctMTAwXCIsXG4gICAgICAgIHNyYzogaXRlbS5zcmMsXG4gICAgICAgIGFsdDogaXRlbS5hbHRUZXh0XG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ2FwdGlvbiQxLCB7XG4gICAgICAgIGNhcHRpb25UZXh0OiBpdGVtLmNhcHRpb24sXG4gICAgICAgIGNhcHRpb25IZWFkZXI6IGl0ZW0uaGVhZGVyIHx8IGl0ZW0uY2FwdGlvblxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWwkMSwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgbmV4dDogdGhpcy5uZXh0LFxuICAgICAgcHJldmlvdXM6IHRoaXMucHJldmlvdXMsXG4gICAgICByaWRlOiBhdXRvUGxheSA/ICdjYXJvdXNlbCcgOiB1bmRlZmluZWRcbiAgICB9LCBwcm9wcyksIGluZGljYXRvcnMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsSW5kaWNhdG9ycyQxLCB7XG4gICAgICBpdGVtczogaXRlbXMsXG4gICAgICBhY3RpdmVJbmRleDogcHJvcHMuYWN0aXZlSW5kZXggfHwgYWN0aXZlSW5kZXgsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogZ29Ub0luZGV4IHx8IHRoaXMuZ29Ub0luZGV4XG4gICAgfSksIHNsaWRlcywgY29udHJvbHMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udHJvbCQxLCB7XG4gICAgICBkaXJlY3Rpb246IFwicHJldlwiLFxuICAgICAgZGlyZWN0aW9uVGV4dDogXCJQcmV2aW91c1wiLFxuICAgICAgb25DbGlja0hhbmRsZXI6IHByb3BzLnByZXZpb3VzIHx8IHRoaXMucHJldmlvdXNcbiAgICB9KSwgY29udHJvbHMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udHJvbCQxLCB7XG4gICAgICBkaXJlY3Rpb246IFwibmV4dFwiLFxuICAgICAgZGlyZWN0aW9uVGV4dDogXCJOZXh0XCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMubmV4dCB8fCB0aGlzLm5leHRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENhcm91c2VsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSjtcblVuY29udHJvbGxlZENhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udHJvbHM6IHRydWUsXG4gIGluZGljYXRvcnM6IHRydWUsXG4gIGF1dG9QbGF5OiB0cnVlXG59O1xudmFyIFVuY29udHJvbGxlZENhcm91c2VsJDEgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbDtcblxudmFyIF9leGNsdWRlZCRDID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRJID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRJID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZFN1YnRpdGxlID0gZnVuY3Rpb24gQ2FyZFN1YnRpdGxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRDKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXN1YnRpdGxlJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkU3VidGl0bGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJEk7XG5DYXJkU3VidGl0bGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEk7XG52YXIgQ2FyZFN1YnRpdGxlJDEgPSBDYXJkU3VidGl0bGU7XG5cbnZhciBfZXhjbHVkZWQkQiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkSCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSCA9IHtcbiAgdGFnOiAncCdcbn07XG5cbnZhciBDYXJkVGV4dCA9IGZ1bmN0aW9uIENhcmRUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRCKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRIO1xuQ2FyZFRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEg7XG52YXIgQ2FyZFRleHQkMSA9IENhcmRUZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJEEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEcgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkVGl0bGUgPSBmdW5jdGlvbiBDYXJkVGl0bGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEEpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtdGl0bGUnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRUaXRsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRztcbkNhcmRUaXRsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRztcbnZhciBDYXJkVGl0bGUkMSA9IENhcmRUaXRsZTtcblxudmFyIF9leGNsdWRlZCR6ID0gW1wiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpc09wZW5cIiwgXCJmbGlwXCIsIFwidGFyZ2V0XCIsIFwib2Zmc2V0XCIsIFwiZmFsbGJhY2tQbGFjZW1lbnRzXCIsIFwicGxhY2VtZW50UHJlZml4XCIsIFwiYXJyb3dDbGFzc05hbWVcIiwgXCJoaWRlQXJyb3dcIiwgXCJwb3BwZXJDbGFzc05hbWVcIiwgXCJ0YWdcIiwgXCJjb250YWluZXJcIiwgXCJtb2RpZmllcnNcIiwgXCJzdHJhdGVneVwiLCBcImJvdW5kYXJpZXNFbGVtZW50XCIsIFwib25DbG9zZWRcIiwgXCJmYWRlXCIsIFwidHJhbnNpdGlvblwiLCBcInBsYWNlbWVudFwiXTtcblxuZnVuY3Rpb24gbm9vcCQyKCkge31cblxudmFyIHByb3BUeXBlcyRGID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSkuaXNSZXF1aXJlZCxcbiAgcG9wcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50UHJlZml4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYXJyb3dDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBoaWRlQXJyb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wuaXNSZXF1aXJlZCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb2Zmc2V0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIpLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIGZsaXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYm91bmRhcmllc0VsZW1lbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgRE9NRWxlbWVudF0pLFxuICBvbkNsb3NlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRyYW5zaXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpXG59O1xudmFyIGRlZmF1bHRQcm9wcyRGID0ge1xuICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCcsXG4gIHBsYWNlbWVudDogJ2F1dG8nLFxuICBoaWRlQXJyb3c6IGZhbHNlLFxuICBpc09wZW46IGZhbHNlLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgZmxpcDogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIG1vZGlmaWVyczogW10sXG4gIG9uQ2xvc2VkOiBub29wJDIsXG4gIGZhZGU6IHRydWUsXG4gIHRyYW5zaXRpb246IF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcylcbn07XG5cbnZhciBQb3BwZXJDb250ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvcHBlckNvbnRlbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHBlckNvbnRlbnQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zZXRUYXJnZXROb2RlID0gX3RoaXMuc2V0VGFyZ2V0Tm9kZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRUYXJnZXROb2RlID0gX3RoaXMuZ2V0VGFyZ2V0Tm9kZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DbG9zZWQgPSBfdGhpcy5vbkNsb3NlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuaXNPcGVuXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBQb3BwZXJDb250ZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuaXNPcGVuICYmICFzdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogcHJvcHMuaXNPcGVuXG4gICAgICB9O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUG9wcGVyQ29udGVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXMgJiYgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdICYmIHRoaXMuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRUYXJnZXROb2RlID0gZnVuY3Rpb24gc2V0VGFyZ2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy50YXJnZXROb2RlID0gdHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnID8gZ2V0VGFyZ2V0KG5vZGUpIDogbm9kZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGFyZ2V0Tm9kZSA9IGZ1bmN0aW9uIGdldFRhcmdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGFpbmVyTm9kZSA9IGZ1bmN0aW9uIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKCkge1xuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIG9mZnNldCA9IF90aGlzJHByb3BzLm9mZnNldCxcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwbGFjZW1lbnRQcmVmaXggPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnRQcmVmaXgsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIF9wb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBib3VuZGFyaWVzRWxlbWVudCA9IF90aGlzJHByb3BzLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgICBmYWRlID0gX3RoaXMkcHJvcHMuZmFkZSxcbiAgICAgICAgdHJhbnNpdGlvbiA9IF90aGlzJHByb3BzLnRyYW5zaXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJHopO1xuXG4gICAgdmFyIGFycm93Q2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdhcnJvdycsIF9hcnJvd0NsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gICAgdmFyIHBvcHBlckNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfcG9wcGVyQ2xhc3NOYW1lLCBwbGFjZW1lbnRQcmVmaXggPyBwbGFjZW1lbnRQcmVmaXggKyBcIi1hdXRvXCIgOiAnJyksIHRoaXMucHJvcHMuY3NzTW9kdWxlKTtcbiAgICB2YXIgbW9kaWZpZXJOYW1lcyA9IG1vZGlmaWVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfSk7XG4gICAgdmFyIGJhc2VNb2RpZmllcnMgPSBbe1xuICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgZW5hYmxlZDogZmxpcCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBmYWxsYmFja1BsYWNlbWVudHNcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJpZXNFbGVtZW50XG4gICAgICB9XG4gICAgfV0uZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gIW1vZGlmaWVyTmFtZXMuaW5jbHVkZXMobS5uYW1lKTtcbiAgICB9KTtcbiAgICB2YXIgZXh0ZW5kZWRNb2RpZmllcnMgPSBbXS5jb25jYXQoYmFzZU1vZGlmaWVycywgbW9kaWZpZXJzKTtcblxuICAgIHZhciBwb3BwZXJUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICB9KTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIHBvcHBlclRyYW5zaXRpb24sIGF0dHJzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgdGFnOiB0YWdcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlBvcHBlciwge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudDogdGhpcy50YXJnZXROb2RlLFxuICAgICAgbW9kaWZpZXJzOiBleHRlbmRlZE1vZGlmaWVycyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgcG9wcGVyUGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICAgICAgaXNSZWZlcmVuY2VIaWRkZW4gPSBfcmVmLmlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgICAgIGFycm93UHJvcHMgPSBfcmVmLmFycm93UHJvcHMsXG4gICAgICAgICAgdXBkYXRlID0gX3JlZi51cGRhdGU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IHBvcHBlclBsYWNlbWVudCxcbiAgICAgICAgXCJkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuXCI6IGlzUmVmZXJlbmNlSGlkZGVuID8gJ3RydWUnIDogdW5kZWZpbmVkXG4gICAgICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICB9KSA6IGNoaWxkcmVuLCAhaGlkZUFycm93ICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IGFycm93UHJvcHMucmVmLFxuICAgICAgICBjbGFzc05hbWU6IGFycm93Q2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogYXJyb3dQcm9wcy5zdHlsZVxuICAgICAgfSkpO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0VGFyZ2V0Tm9kZSh0aGlzLnByb3BzLnRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRhaW5lciA9PT0gJ2lubGluZScgPyB0aGlzLnJlbmRlckNoaWxkcmVuKCkgOiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuZ2V0UmVmXG4gICAgICB9LCB0aGlzLnJlbmRlckNoaWxkcmVuKCkpLCB0aGlzLmdldENvbnRhaW5lck5vZGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFBvcHBlckNvbnRlbnQ7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Qb3BwZXJDb250ZW50LnByb3BUeXBlcyA9IHByb3BUeXBlcyRGO1xuUG9wcGVyQ29udGVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRjtcbnZhciBQb3BwZXJDb250ZW50JDEgPSBQb3BwZXJDb250ZW50O1xuXG52YXIgUG9wcGVyVGFyZ2V0SGVscGVyID0gZnVuY3Rpb24gUG9wcGVyVGFyZ2V0SGVscGVyKHByb3BzLCBjb250ZXh0KSB7XG4gIGNvbnRleHQucG9wcGVyTWFuYWdlci5zZXRUYXJnZXROb2RlKGdldFRhcmdldChwcm9wcy50YXJnZXQpKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5Qb3BwZXJUYXJnZXRIZWxwZXIuY29udGV4dFR5cGVzID0ge1xuICBwb3BwZXJNYW5hZ2VyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wcGVyVGFyZ2V0SGVscGVyLnByb3BUeXBlcyA9IHtcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkXG59O1xudmFyIFBvcHBlclRhcmdldEhlbHBlciQxID0gUG9wcGVyVGFyZ2V0SGVscGVyO1xuXG52YXIgcHJvcFR5cGVzJEUgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFBvcHBlclBsYWNlbWVudHMpLFxuICB0YXJnZXQ6IHRhcmdldFByb3BUeXBlLmlzUmVxdWlyZWQsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBoaWRlQXJyb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYm91bmRhcmllc0VsZW1lbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgRE9NRWxlbWVudF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBpbm5lckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGFycm93Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcG9wcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGF1dG9oaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHBsYWNlbWVudFByZWZpeDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRlbGF5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICAgc2hvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgaGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJcbiAgfSksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIG1vZGlmaWVyczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgc3RyYXRlZ3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvZmZzZXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3RdKSxcbiAgdHJpZ2dlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmxpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIERFRkFVTFRfREVMQVlTID0ge1xuICBzaG93OiAwLFxuICBoaWRlOiA1MFxufTtcbnZhciBkZWZhdWx0UHJvcHMkRSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgaGlkZUFycm93OiBmYWxzZSxcbiAgYXV0b2hpZGU6IGZhbHNlLFxuICBkZWxheTogREVGQVVMVF9ERUxBWVMsXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge30sXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGZhZGU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGlzSW5ET01TdWJ0cmVlKGVsZW1lbnQsIHN1YnRyZWVSb290KSB7XG4gIHJldHVybiBzdWJ0cmVlUm9vdCAmJiAoZWxlbWVudCA9PT0gc3VidHJlZVJvb3QgfHwgc3VidHJlZVJvb3QuY29udGFpbnMoZWxlbWVudCkpO1xufVxuXG5mdW5jdGlvbiBpc0luRE9NU3VidHJlZXMoZWxlbWVudCwgc3VidHJlZVJvb3RzKSB7XG4gIGlmIChzdWJ0cmVlUm9vdHMgPT09IHZvaWQgMCkge1xuICAgIHN1YnRyZWVSb290cyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVSb290cyAmJiBzdWJ0cmVlUm9vdHMubGVuZ3RoICYmIHN1YnRyZWVSb290cy5maWx0ZXIoZnVuY3Rpb24gKHN1YlRyZWVSb290KSB7XG4gICAgcmV0dXJuIGlzSW5ET01TdWJ0cmVlKGVsZW1lbnQsIHN1YlRyZWVSb290KTtcbiAgfSlbMF07XG59XG5cbnZhciBUb29sdGlwUG9wb3ZlcldyYXBwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVG9vbHRpcFBvcG92ZXJXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb29sdGlwUG9wb3ZlcldyYXBwZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgIF90aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5hZGRUYXJnZXRFdmVudHMgPSBfdGhpcy5hZGRUYXJnZXRFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucmVtb3ZlVGFyZ2V0RXZlbnRzID0gX3RoaXMucmVtb3ZlVGFyZ2V0RXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zaG93V2l0aERlbGF5ID0gX3RoaXMuc2hvd1dpdGhEZWxheS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oaWRlV2l0aERlbGF5ID0gX3RoaXMuaGlkZVdpdGhEZWxheS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50ID0gX3RoaXMub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudCA9IF90aGlzLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnNob3cgPSBfdGhpcy5zaG93LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhpZGUgPSBfdGhpcy5oaWRlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXNjS2V5RG93biA9IF90aGlzLm9uRXNjS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgIH07XG4gICAgX3RoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUb29sdGlwUG9wb3ZlcldyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbW92ZVRhcmdldEV2ZW50cygpO1xuICAgIHRoaXMuX3RhcmdldHMgPSBudWxsO1xuICAgIHRoaXMuY2xlYXJTaG93VGltZW91dCgpO1xuICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICB9O1xuXG4gIFRvb2x0aXBQb3BvdmVyV3JhcHBlci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmlzT3BlbiAmJiAhc3RhdGUuaXNPcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgICAgfTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQgPSBmdW5jdGlvbiBvbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50ID0gZnVuY3Rpb24gb25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Fc2NLZXlEb3duID0gZnVuY3Rpb24gb25Fc2NLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmhpZGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgdmFyIGlubmVyUmVmID0gdGhpcy5wcm9wcy5pbm5lclJlZjtcblxuICAgIGlmIChpbm5lclJlZikge1xuICAgICAgaWYgKHR5cGVvZiBpbm5lclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbm5lclJlZihyZWYpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5uZXJSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlubmVyUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcG9wb3ZlciA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVsYXkgPSBmdW5jdGlvbiBnZXREZWxheShrZXkpIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBpc05hTihkZWxheVtrZXldKSA/IERFRkFVTFRfREVMQVlTW2tleV0gOiBkZWxheVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFRhcmdldCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIHRoaXMuX3RhcmdldHNbaW5kZXhdO1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRUYXJnZXQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gZSA/IGUuY3VycmVudFRhcmdldCB8fCB0aGlzLmdldEN1cnJlbnRUYXJnZXQoZS50YXJnZXQpIDogbnVsbDtcblxuICAgICAgaWYgKGUgJiYgZS5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGUuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IHBhdGggJiYgcGF0aFswXSB8fCB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3dXaXRoRGVsYXkgPSBmdW5jdGlvbiBzaG93V2l0aERlbGF5KGUpIHtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNob3cuYmluZCh0aGlzLCBlKSwgdGhpcy5nZXREZWxheSgnc2hvdycpKTtcbiAgfTtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGlkZVdpdGhEZWxheSA9IGZ1bmN0aW9uIGhpZGVXaXRoRGVsYXkoZSkge1xuICAgIGlmICh0aGlzLl9zaG93VGltZW91dCkge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclNob3dUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJTaG93VGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXQpO1xuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckhpZGVUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJIaWRlVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuICAgIHRoaXMuX2hpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVEb2N1bWVudENsaWNrID0gZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgdmFyIHRyaWdnZXJzID0gdGhpcy5wcm9wcy50cmlnZ2VyLnNwbGl0KCcgJyk7XG5cbiAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignbGVnYWN5JykgPiAtMSAmJiAodGhpcy5wcm9wcy5pc09wZW4gfHwgaXNJbkRPTVN1YnRyZWVzKGUudGFyZ2V0LCB0aGlzLl90YXJnZXRzKSkpIHtcbiAgICAgIGlmICh0aGlzLl9oaWRlVGltZW91dCkge1xuICAgICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFpc0luRE9NU3VidHJlZShlLnRhcmdldCwgdGhpcy5fcG9wb3ZlcikpIHtcbiAgICAgICAgdGhpcy5oaWRlV2l0aERlbGF5KGUpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5zaG93V2l0aERlbGF5KGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHJpZ2dlcnMuaW5kZXhPZignY2xpY2snKSA+IC0xICYmIGlzSW5ET01TdWJ0cmVlcyhlLnRhcmdldCwgdGhpcy5fdGFyZ2V0cykpIHtcbiAgICAgIGlmICh0aGlzLl9oaWRlVGltZW91dCkge1xuICAgICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNob3dXaXRoRGVsYXkoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVXaXRoRGVsYXkoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRFdmVudE9uVGFyZ2V0cyA9IGZ1bmN0aW9uIGFkZEV2ZW50T25UYXJnZXRzKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKSB7XG4gICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRPblRhcmdldHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudE9uVGFyZ2V0cyh0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSkge1xuICAgIHRoaXMuX3RhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRhcmdldEV2ZW50cyA9IGZ1bmN0aW9uIGFkZFRhcmdldEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyKSB7XG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ21hbnVhbCcpID09PSAtMSkge1xuICAgICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignY2xpY2snKSA+IC0xIHx8IHRyaWdnZXJzLmluZGV4T2YoJ2xlZ2FjeScpID4gLTEpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0cyAmJiB0aGlzLl90YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdob3ZlcicpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd1dpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdtb3VzZW91dCcsIHRoaXMuaGlkZVdpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2ZvY3VzJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnZm9jdXNpbicsIHRoaXMuc2hvdywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdmb2N1c291dCcsIHRoaXMuaGlkZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlVGFyZ2V0RXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90YXJnZXRzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdtb3VzZW92ZXInLCB0aGlzLnNob3dXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnbW91c2VvdXQnLCB0aGlzLmhpZGVXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ2ZvY3VzaW4nLCB0aGlzLnNob3csIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnZm9jdXNvdXQnLCB0aGlzLmhpZGUsIHRydWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVGFyZ2V0ID0gZnVuY3Rpb24gdXBkYXRlVGFyZ2V0KCkge1xuICAgIHZhciBuZXdUYXJnZXQgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy50YXJnZXQsIHRydWUpO1xuXG4gICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy5fdGFyZ2V0cykge1xuICAgICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBuZXdUYXJnZXQgPyBBcnJheS5mcm9tKG5ld1RhcmdldCkgOiBbXTtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50IHx8IHRoaXMuX3RhcmdldHNbMF07XG4gICAgICB0aGlzLmFkZFRhcmdldEV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgfHwgdGhpcy5fdGFyZ2V0c1swXTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgaW5uZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5pbm5lckNsYXNzTmFtZSxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gX3RoaXMkcHJvcHMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VtZW50UHJlZml4ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50UHJlZml4LFxuICAgICAgICBhcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBwb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIGNvbnRhaW5lciA9IF90aGlzJHByb3BzLmNvbnRhaW5lcixcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBvZmZzZXQgPSBfdGhpcyRwcm9wcy5vZmZzZXQsXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wcy5mYWRlLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzJEUpKTtcbiAgICB2YXIgcG9wcGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhwb3BwZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoaW5uZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3BwZXJDb250ZW50JDEsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBpc09wZW46IGlzT3BlbixcbiAgICAgIGhpZGVBcnJvdzogaGlkZUFycm93LFxuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnRQcmVmaXg6IHBsYWNlbWVudFByZWZpeCxcbiAgICAgIGFycm93Q2xhc3NOYW1lOiBhcnJvd0NsYXNzTmFtZSxcbiAgICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgZmFkZTogZmFkZSxcbiAgICAgIGZsaXA6IGZsaXBcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICByZWY6IF90aGlzMi5nZXRSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcm9sZTogXCJ0b29sdGlwXCIsXG4gICAgICAgIG9uTW91c2VPdmVyOiBfdGhpczIub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBfdGhpczIub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQsXG4gICAgICAgIG9uS2V5RG93bjogX3RoaXMyLm9uRXNjS2V5RG93blxuICAgICAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHtcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICAgIH0pIDogY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEU7XG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyJDEgPSBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG5cbnZhciBkZWZhdWx0UHJvcHMkRCA9IHtcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy1wb3BvdmVyJyxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgb2Zmc2V0OiBbMCwgOF1cbn07XG5cbnZhciBQb3BvdmVyID0gZnVuY3Rpb24gUG9wb3Zlcihwcm9wcykge1xuICB2YXIgcG9wcGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwb3BvdmVyJywgJ3Nob3cnLCBwcm9wcy5wb3BwZXJDbGFzc05hbWUpO1xuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwb3BvdmVyLWlubmVyJywgcHJvcHMuaW5uZXJDbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvb2x0aXBQb3BvdmVyV3JhcHBlciQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBhcnJvd0NsYXNzTmFtZTogXCJwb3BvdmVyLWFycm93XCIsXG4gICAgcG9wcGVyQ2xhc3NOYW1lOiBwb3BwZXJDbGFzc2VzLFxuICAgIGlubmVyQ2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblBvcG92ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyREO1xudmFyIFBvcG92ZXIkMSA9IFBvcG92ZXI7XG5cbnZhciBvbWl0S2V5cyQ0ID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkUG9wb3ZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRQb3BvdmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRQb3BvdmVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZFBvcG92ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3BvdmVyJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cyQ0KSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRQb3BvdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkUG9wb3Zlci5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIFBvcG92ZXIkMS5wcm9wVHlwZXMpO1xuXG52YXIgX2V4Y2x1ZGVkJHkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEMgPSB7XG4gIHRhZzogJ2gzJ1xufTtcblxudmFyIFBvcG92ZXJIZWFkZXIgPSBmdW5jdGlvbiBQb3BvdmVySGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwb3BvdmVyLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuUG9wb3ZlckhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRDtcblBvcG92ZXJIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEM7XG52YXIgUG9wb3ZlckhlYWRlciQxID0gUG9wb3ZlckhlYWRlcjtcblxudmFyIF9leGNsdWRlZCR4ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRDID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRCID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgUG9wb3ZlckJvZHkgPSBmdW5jdGlvbiBQb3BvdmVyQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkeCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncG9wb3Zlci1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Qb3BvdmVyQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQztcblBvcG92ZXJCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRCO1xudmFyIFBvcG92ZXJCb2R5JDEgPSBQb3BvdmVyQm9keTtcblxudmFyIF9leGNsdWRlZCR3ID0gW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJiYXJDbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YWx1ZVwiLCBcIm1pblwiLCBcIm1heFwiLCBcImFuaW1hdGVkXCIsIFwic3RyaXBlZFwiLCBcImNvbG9yXCIsIFwiYmFyXCIsIFwibXVsdGlcIiwgXCJ0YWdcIiwgXCJzdHlsZVwiLCBcImJhclN0eWxlXCIsIFwiYmFyQXJpYVZhbHVlVGV4dFwiLCBcImJhckFyaWFMYWJlbGxlZEJ5XCJdO1xudmFyIHByb3BUeXBlcyRCID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbXVsdGk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdmFsdWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgbWluOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIG1heDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBhbmltYXRlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHJpcGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc3R5bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBiYXJTdHlsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGJhckFyaWFWYWx1ZVRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYXJBcmlhTGFiZWxsZWRCeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJEEgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHZhbHVlOiAwLFxuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBzdHlsZToge30sXG4gIGJhclN0eWxlOiB7fVxufTtcblxudmFyIFByb2dyZXNzID0gZnVuY3Rpb24gUHJvZ3Jlc3MocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBiYXJDbGFzc05hbWUgPSBwcm9wcy5iYXJDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgYW5pbWF0ZWQgPSBwcm9wcy5hbmltYXRlZCxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJhciA9IHByb3BzLmJhcixcbiAgICAgIG11bHRpID0gcHJvcHMubXVsdGksXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgYmFyU3R5bGUgPSBwcm9wcy5iYXJTdHlsZSxcbiAgICAgIGJhckFyaWFWYWx1ZVRleHQgPSBwcm9wcy5iYXJBcmlhVmFsdWVUZXh0LFxuICAgICAgYmFyQXJpYUxhYmVsbGVkQnkgPSBwcm9wcy5iYXJBcmlhTGFiZWxsZWRCeSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHcpO1xuXG4gIHZhciBwZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpIC8gdG9OdW1iZXIobWF4KSAqIDEwMDtcbiAgdmFyIHByb2dyZXNzQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwcm9ncmVzcycpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwcm9ncmVzcy1iYXInLCBiYXIgPyBjbGFzc05hbWUgfHwgYmFyQ2xhc3NOYW1lIDogYmFyQ2xhc3NOYW1lLCBhbmltYXRlZCA/ICdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnIDogbnVsbCwgY29sb3IgPyBcImJnLVwiICsgY29sb3IgOiBudWxsLCBzdHJpcGVkIHx8IGFuaW1hdGVkID8gJ3Byb2dyZXNzLWJhci1zdHJpcGVkJyA6IG51bGwpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQmFyQ2xhc3NlcyxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGJhciA/IHN0eWxlIDoge30pLCBiYXJTdHlsZSksIHt9LCB7XG4gICAgICB3aWR0aDogcGVyY2VudCArIFwiJVwiXG4gICAgfSksXG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICdhcmlhLXZhbHVlbWluJzogbWluLFxuICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICdhcmlhLXZhbHVldGV4dCc6IGJhckFyaWFWYWx1ZVRleHQsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IGJhckFyaWFMYWJlbGxlZEJ5LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9O1xuXG4gIGlmIChiYXIpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHByb2dyZXNzQmFyUHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQ2xhc3Nlc1xuICB9KSwgbXVsdGkgPyBjaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBwcm9ncmVzc0JhclByb3BzKSk7XG59O1xuXG5Qcm9ncmVzcy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQjtcblByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRBO1xudmFyIFByb2dyZXNzJDEgPSBQcm9ncmVzcztcblxudmFyIHByb3BUeXBlcyRBID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLmlzUmVxdWlyZWQsXG4gIG5vZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59O1xuXG52YXIgUG9ydGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvcnRhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQb3J0YWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmRlZmF1bHROb2RlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZGVmYXVsdE5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuZGVmYXVsdE5vZGUgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5ub2RlICYmICF0aGlzLmRlZmF1bHROb2RlKSB7XG4gICAgICB0aGlzLmRlZmF1bHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGVmYXVsdE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucHJvcHMubm9kZSB8fCB0aGlzLmRlZmF1bHROb2RlKTtcbiAgfTtcblxuICByZXR1cm4gUG9ydGFsO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuUG9ydGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyRBO1xudmFyIFBvcnRhbCQxID0gUG9ydGFsO1xuXG5mdW5jdGlvbiBub29wJDEoKSB7fVxuXG52YXIgRmFkZVByb3BUeXBlcyQxID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyk7XG52YXIgcHJvcFR5cGVzJHogPSB7XG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2VudGVyZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZnVsbHNjcmVlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pXSksXG4gIHNjcm9sbGFibGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBrZXlib2FyZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc3RhdGljJ10pXSksXG4gIG9uRW50ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25FeGl0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtb2RhbENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGV4dGVybmFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgekluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyQxLFxuICBtb2RhbFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMkMSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgdHJhcEZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgcHJvcHNUb09taXQkMSA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyR6KTtcbnZhciBkZWZhdWx0UHJvcHMkeiA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiB0cnVlLFxuICBjZW50ZXJlZDogZmFsc2UsXG4gIHNjcm9sbGFibGU6IGZhbHNlLFxuICByb2xlOiAnZGlhbG9nJyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB6SW5kZXg6IDEwNTAsXG4gIGZhZGU6IHRydWUsXG4gIG9uT3BlbmVkOiBub29wJDEsXG4gIG9uQ2xvc2VkOiBub29wJDEsXG4gIG1vZGFsVHJhbnNpdGlvbjoge1xuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5Nb2RhbFxuICB9LFxuICBiYWNrZHJvcFRyYW5zaXRpb246IHtcbiAgICBtb3VudE9uRW50ZXI6IHRydWUsXG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkZhZGUgLy8gdXNlcyBzdGFuZGFyZCBmYWRlIHRyYW5zaXRpb25cblxuICB9LFxuICB1bm1vdW50T25DbG9zZTogdHJ1ZSxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiB0cnVlLFxuICBjb250YWluZXI6ICdib2R5JyxcbiAgdHJhcEZvY3VzOiBmYWxzZVxufTtcblxudmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1vZGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUVzY2FwZSA9IF90aGlzLmhhbmRsZUVzY2FwZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiA9IF90aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRhYiA9IF90aGlzLmhhbmRsZVRhYi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk9wZW5lZCA9IF90aGlzLm9uT3BlbmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudHJhcEZvY3VzID0gX3RoaXMudHJhcEZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNb2RhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgIG9uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9IC8vIHRyYXBzIGZvY3VzIGluc2lkZSB0aGUgTW9kYWwsIGV2ZW4gaWYgdGhlIGJyb3dzZXIgYWRkcmVzcyBiYXIgaXMgZm9jdXNlZFxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7IC8vIGxldCByZW5kZXIoKSByZW5kZXJzIE1vZGFsIERpYWxvZyBmaXJzdFxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBub3cgTW9kYWwgRGlhbG9nIGlzIHJlbmRlcmVkIGFuZCB3ZSBjYW4gcmVmZXIgdGhpcy5fZWxlbWVudCBhbmQgdGhpcy5fZGlhbG9nXG5cblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHByZXZQcm9wcy56SW5kZXggIT09IHRoaXMucHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by50cmFwRm9jdXMgPSBmdW5jdGlvbiB0cmFwRm9jdXMoZXYpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudHJhcEZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSAvL2VsZW1lbnQgaXMgbm90IGF0dGFjaGVkXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSA9PT0gZXYudGFyZ2V0KSAvLyBpbml0aWFsIGZvY3VzIHdoZW4gdGhlIE1vZGFsIGlzIG9wZW5lZFxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGFsSW5kZXggPCBNb2RhbC5vcGVuQ291bnQgLSAxKSAvLyBsYXN0IG9wZW5lZCBtb2RhbFxuICAgICAgcmV0dXJuO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGZvY3VzIGlzIGFscmVhZHkgaW5zaWRlIHRoZSBNb2RhbFxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBldi50YXJnZXQpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgLy8gb3RoZXJ3aXNlIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgTW9kYWxcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk9wZW5lZCA9IGZ1bmN0aW9uIG9uT3BlbmVkKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5wcm9wcy5vbk9wZW5lZCgpO1xuICAgICh0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi5vbkVudGVyZWQgfHwgbm9vcCQxKShub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xvc2VkID0gZnVuY3Rpb24gb25DbG9zZWQobm9kZSkge1xuICAgIHZhciB1bm1vdW50T25DbG9zZSA9IHRoaXMucHJvcHMudW5tb3VudE9uQ2xvc2U7IC8vIHNvIGFsbCBtZXRob2RzIGdldCBjYWxsZWQgYmVmb3JlIGl0IGlzIHVubW91bnRlZFxuXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlZCgpO1xuICAgICh0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi5vbkV4aXRlZCB8fCBub29wJDEpKG5vZGUpO1xuXG4gICAgaWYgKHVubW91bnRPbkNsb3NlKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9kaWFsb2cgJiYgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUgJiYgdHlwZW9mIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZUVsZW1lbnRzLmpvaW4oJywgJykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2VkQ2hpbGQgPSBmdW5jdGlvbiBnZXRGb2N1c2VkQ2hpbGQoKSB7XG4gICAgdmFyIGN1cnJlbnRGb2N1cztcbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICB0cnkge1xuICAgICAgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGZvY3VzYWJsZUNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50Rm9jdXM7XG4gIH0gLy8gbm90IG1vdXNlVXAgYmVjYXVzZSBzY3JvbGxiYXIgZmlyZXMgaXQsIHNob3VsZG4ndCBjbG9zZSB3aGVuIHVzZXIgc2Nyb2xsc1xuICA7XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuX21vdXNlRG93bkVsZW1lbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgYmFja2Ryb3AgPSB0aGlzLl9kaWFsb2cgPyB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSA6IG51bGw7XG5cbiAgICAgIGlmIChiYWNrZHJvcCAmJiBlLnRhcmdldCA9PT0gYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHRydWUpIHJldHVybjtcblxuICAgICAgaWYgKGJhY2tkcm9wICYmIGUudGFyZ2V0ID09PSBiYWNrZHJvcCAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlKSB7XG4gICAgaWYgKGUud2hpY2ggIT09IDkpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RhbEluZGV4IDwgTW9kYWwub3BlbkNvdW50IC0gMSkgcmV0dXJuOyAvLyBsYXN0IG9wZW5lZCBtb2RhbFxuXG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuICAgIHZhciB0b3RhbEZvY3VzYWJsZSA9IGZvY3VzYWJsZUNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAodG90YWxGb2N1c2FibGUgPT09IDApIHJldHVybjtcbiAgICB2YXIgY3VycmVudEZvY3VzID0gdGhpcy5nZXRGb2N1c2VkQ2hpbGQoKTtcbiAgICB2YXIgZm9jdXNlZEluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxGb2N1c2FibGU7IGkgKz0gMSkge1xuICAgICAgaWYgKGZvY3VzYWJsZUNoaWxkcmVuW2ldID09PSBjdXJyZW50Rm9jdXMpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblt0b3RhbEZvY3VzYWJsZSAtIDFdLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IHRvdGFsRm9jdXNhYmxlIC0gMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BNb3VzZURvd24oZSkge1xuICAgIHRoaXMuX21vdXNlRG93bkVsZW1lbnQgPSBlLnRhcmdldDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXNjYXBlID0gZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24gPSBmdW5jdGlvbiBoYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1N0YXRpY0JhY2tkcm9wQW5pbWF0aW9uOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyID0gZ2V0VGFyZ2V0KHRoaXMucHJvcHMuY29udGFpbmVyKTtcblxuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IGdldE9yaWdpbmFsQm9keVBhZGRpbmcoKTtcbiAgICBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCk7XG5cbiAgICBpZiAoTW9kYWwub3BlbkNvdW50ID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLCBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMubW9kYWxJbmRleCA9IE1vZGFsLm9wZW5Db3VudDtcbiAgICBNb2RhbC5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoTW9kYWwub3BlbkNvdW50IDw9IDEpIHtcbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7IC8vIFVzZSByZWdleCB0byBwcmV2ZW50IG1hdGNoaW5nIGBtb2RhbC1vcGVuYCBhcyBwYXJ0IG9mIGEgZGlmZmVyZW50IGNsYXNzLCBlLmcuIGBteS1tb2RhbC1vcGVuZWRgXG5cbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWVSZWdleCA9IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgbW9kYWxPcGVuQ2xhc3NOYW1lICsgXCIoIHwkKVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZShtb2RhbE9wZW5DbGFzc05hbWVSZWdleCwgJyAnKS50cmltKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgICBNb2RhbC5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBNb2RhbC5vcGVuQ291bnQgLSAxKTtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aCh0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyTW9kYWxEaWFsb2cgPSBmdW5jdGlvbiByZW5kZXJNb2RhbERpYWxvZygpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXMsXG4gICAgICAgIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgcHJvcHNUb09taXQkMSk7XG4gICAgdmFyIGRpYWxvZ0Jhc2VDbGFzcyA9ICdtb2RhbC1kaWFsb2cnO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRpYWxvZ0Jhc2VDbGFzcywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tcIm1vZGFsLVwiICsgdGhpcy5wcm9wcy5zaXplXSA9IHRoaXMucHJvcHMuc2l6ZSwgX2NsYXNzTmFtZXNbZGlhbG9nQmFzZUNsYXNzICsgXCItY2VudGVyZWRcIl0gPSB0aGlzLnByb3BzLmNlbnRlcmVkLCBfY2xhc3NOYW1lc1tkaWFsb2dCYXNlQ2xhc3MgKyBcIi1zY3JvbGxhYmxlXCJdID0gdGhpcy5wcm9wcy5zY3JvbGxhYmxlLCBfY2xhc3NOYW1lc1snbW9kYWwtZnVsbHNjcmVlbiddID0gdGhpcy5wcm9wcy5mdWxsc2NyZWVuID09PSB0cnVlLCBfY2xhc3NOYW1lc1tcIm1vZGFsLWZ1bGxzY3JlZW4tXCIgKyB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gKyBcIi1kb3duXCJdID0gdHlwZW9mIHRoaXMucHJvcHMuZnVsbHNjcmVlbiA9PT0gJ3N0cmluZycsIF9jbGFzc05hbWVzKSksIHRoaXMucHJvcHMuY3NzTW9kdWxlKSxcbiAgICAgIHJvbGU6IFwiZG9jdW1lbnRcIixcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgX3RoaXMzLl9kaWFsb2cgPSBjO1xuICAgICAgfVxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsLWNvbnRlbnQnLCB0aGlzLnByb3BzLmNvbnRlbnRDbGFzc05hbWUpLCB0aGlzLnByb3BzLmNzc01vZHVsZSlcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdW5tb3VudE9uQ2xvc2UgPSB0aGlzLnByb3BzLnVubW91bnRPbkNsb3NlO1xuXG4gICAgaWYgKCEhdGhpcy5fZWxlbWVudCAmJiAodGhpcy5zdGF0ZS5pc09wZW4gfHwgIXVubW91bnRPbkNsb3NlKSkge1xuICAgICAgdmFyIGlzTW9kYWxIaWRkZW4gPSAhIXRoaXMuX2VsZW1lbnQgJiYgIXRoaXMuc3RhdGUuaXNPcGVuICYmICF1bm1vdW50T25DbG9zZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzTW9kYWxIaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgd3JhcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi53cmFwQ2xhc3NOYW1lLFxuICAgICAgICAgIG1vZGFsQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLm1vZGFsQ2xhc3NOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmJhY2tkcm9wQ2xhc3NOYW1lLFxuICAgICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzMi5jc3NNb2R1bGUsXG4gICAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMyLmlzT3BlbixcbiAgICAgICAgICBiYWNrZHJvcCA9IF90aGlzJHByb3BzMi5iYWNrZHJvcCxcbiAgICAgICAgICByb2xlID0gX3RoaXMkcHJvcHMyLnJvbGUsXG4gICAgICAgICAgbGFiZWxsZWRCeSA9IF90aGlzJHByb3BzMi5sYWJlbGxlZEJ5LFxuICAgICAgICAgIGV4dGVybmFsID0gX3RoaXMkcHJvcHMyLmV4dGVybmFsLFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMyLmlubmVyUmVmO1xuICAgICAgdmFyIG1vZGFsQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93bixcbiAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVFc2NhcGUsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVUYWIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9LFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxsZWRCeSxcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgdGFiSW5kZXg6ICctMSdcbiAgICAgIH07XG4gICAgICB2YXIgaGFzVHJhbnNpdGlvbiA9IHRoaXMucHJvcHMuZmFkZTtcblxuICAgICAgdmFyIG1vZGFsVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBiYWNrZHJvcFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgQmFja2Ryb3AgPSBiYWNrZHJvcCAmJiAoaGFzVHJhbnNpdGlvbiA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYmFja2Ryb3BUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuICYmICEhYmFja2Ryb3AsXG4gICAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwtYmFja2Ryb3AnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSlcbiAgICAgIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbC1iYWNrZHJvcCcsICdzaG93JywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBvcnRhbCQxLCB7XG4gICAgICAgIG5vZGU6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKHdyYXBDbGFzc05hbWUpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIG1vZGFsQXR0cmlidXRlcywgbW9kYWxUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMub25PcGVuZWQsXG4gICAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsJywgbW9kYWxDbGFzc05hbWUsIHRoaXMuc3RhdGUuc2hvd1N0YXRpY0JhY2tkcm9wQW5pbWF0aW9uICYmICdtb2RhbC1zdGF0aWMnKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gICAgICB9KSwgZXh0ZXJuYWwsIHRoaXMucmVuZGVyTW9kYWxEaWFsb2coKSksIEJhY2tkcm9wKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBNb2RhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyR6O1xuTW9kYWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHo7XG5Nb2RhbC5vcGVuQ291bnQgPSAwO1xudmFyIE1vZGFsJDEgPSBNb2RhbDtcblxudmFyIF9leGNsdWRlZCR2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0b2dnbGVcIiwgXCJ0YWdcIiwgXCJ3cmFwVGFnXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjbG9zZVwiXTtcbnZhciBwcm9wVHlwZXMkeSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkeSA9IHtcbiAgdGFnOiAnaDUnLFxuICB3cmFwVGFnOiAnZGl2JyxcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZSdcbn07XG5cbnZhciBNb2RhbEhlYWRlciA9IGZ1bmN0aW9uIE1vZGFsSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbG9zZUJ1dHRvbjtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIFdyYXBUYWcgPSBwcm9wcy53cmFwVGFnLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR2KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdtb2RhbC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChXcmFwVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdtb2RhbC10aXRsZScsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59O1xuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkeTtcbk1vZGFsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR5O1xudmFyIE1vZGFsSGVhZGVyJDEgPSBNb2RhbEhlYWRlcjtcblxudmFyIF9leGNsdWRlZCR1ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyR4ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyR4ID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgTW9kYWxCb2R5ID0gZnVuY3Rpb24gTW9kYWxCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR1KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdtb2RhbC1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Nb2RhbEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJHg7XG5Nb2RhbEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHg7XG52YXIgTW9kYWxCb2R5JDEgPSBNb2RhbEJvZHk7XG5cbnZhciBfZXhjbHVkZWQkdCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkdyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkdyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIE1vZGFsRm9vdGVyID0gZnVuY3Rpb24gTW9kYWxGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ21vZGFsLWZvb3RlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTW9kYWxGb290ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJHc7XG5Nb2RhbEZvb3Rlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdztcbnZhciBNb2RhbEZvb3RlciQxID0gTW9kYWxGb290ZXI7XG5cbnZhciBkZWZhdWx0UHJvcHMkdiA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIHBsYWNlbWVudFByZWZpeDogJ2JzLXRvb2x0aXAnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59O1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHMpIHtcbiAgdmFyIHBvcHBlckNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndG9vbHRpcCcsICdzaG93JywgcHJvcHMucG9wcGVyQ2xhc3NOYW1lKTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndG9vbHRpcC1pbm5lcicsIHByb3BzLmlubmVyQ2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwUG9wb3ZlcldyYXBwZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYXJyb3dDbGFzc05hbWU6IFwidG9vbHRpcC1hcnJvd1wiLFxuICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICBpbm5lckNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHByb3BUeXBlcyRFO1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdjtcbnZhciBUb29sdGlwJDEgPSBUb29sdGlwO1xuXG52YXIgX2V4Y2x1ZGVkJHMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJzaXplXCIsIFwiYm9yZGVyZWRcIiwgXCJib3JkZXJsZXNzXCIsIFwic3RyaXBlZFwiLCBcImRhcmtcIiwgXCJob3ZlclwiLCBcInJlc3BvbnNpdmVcIiwgXCJ0YWdcIiwgXCJyZXNwb25zaXZlVGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJHYgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBib3JkZXJlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3JkZXJsZXNzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN0cmlwZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByZXNwb25zaXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICByZXNwb25zaXZlVGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdF0pXG59O1xudmFyIGRlZmF1bHRQcm9wcyR1ID0ge1xuICB0YWc6ICd0YWJsZScsXG4gIHJlc3BvbnNpdmVUYWc6ICdkaXYnXG59O1xuXG52YXIgVGFibGUgPSBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBib3JkZXJlZCA9IHByb3BzLmJvcmRlcmVkLFxuICAgICAgYm9yZGVybGVzcyA9IHByb3BzLmJvcmRlcmxlc3MsXG4gICAgICBzdHJpcGVkID0gcHJvcHMuc3RyaXBlZCxcbiAgICAgIGRhcmsgPSBwcm9wcy5kYXJrLFxuICAgICAgaG92ZXIgPSBwcm9wcy5ob3ZlcixcbiAgICAgIHJlc3BvbnNpdmUgPSBwcm9wcy5yZXNwb25zaXZlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgUmVzcG9uc2l2ZVRhZyA9IHByb3BzLnJlc3BvbnNpdmVUYWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkcyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndGFibGUnLCBzaXplID8gJ3RhYmxlLScgKyBzaXplIDogZmFsc2UsIGJvcmRlcmVkID8gJ3RhYmxlLWJvcmRlcmVkJyA6IGZhbHNlLCBib3JkZXJsZXNzID8gJ3RhYmxlLWJvcmRlcmxlc3MnIDogZmFsc2UsIHN0cmlwZWQgPyAndGFibGUtc3RyaXBlZCcgOiBmYWxzZSwgZGFyayA/ICd0YWJsZS1kYXJrJyA6IGZhbHNlLCBob3ZlciA/ICd0YWJsZS1ob3ZlcicgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHZhciB0YWJsZSA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xuXG4gIGlmIChyZXNwb25zaXZlKSB7XG4gICAgdmFyIHJlc3BvbnNpdmVDbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMocmVzcG9uc2l2ZSA9PT0gdHJ1ZSA/ICd0YWJsZS1yZXNwb25zaXZlJyA6IFwidGFibGUtcmVzcG9uc2l2ZS1cIiArIHJlc3BvbnNpdmUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChSZXNwb25zaXZlVGFnLCB7XG4gICAgICBjbGFzc05hbWU6IHJlc3BvbnNpdmVDbGFzc05hbWVcbiAgICB9LCB0YWJsZSk7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59O1xuXG5UYWJsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdjtcblRhYmxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR1O1xudmFyIFRhYmxlJDEgPSBUYWJsZTtcblxudmFyIF9leGNsdWRlZCRyID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiZmx1c2hcIiwgXCJob3Jpem9udGFsXCIsIFwibnVtYmVyZWRcIl07XG52YXIgcHJvcFR5cGVzJHUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGZsdXNoOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGhvcml6b250YWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIG51bWJlcmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJHQgPSB7XG4gIHRhZzogJ3VsJyxcbiAgaG9yaXpvbnRhbDogZmFsc2UsXG4gIG51bWJlcmVkOiBmYWxzZVxufTtcblxudmFyIGdldEhvcml6b250YWxDbGFzcyA9IGZ1bmN0aW9uIGdldEhvcml6b250YWxDbGFzcyhob3Jpem9udGFsKSB7XG4gIGlmIChob3Jpem9udGFsID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSB0cnVlIHx8IGhvcml6b250YWwgPT09IFwieHNcIikge1xuICAgIHJldHVybiBcImxpc3QtZ3JvdXAtaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgcmV0dXJuIFwibGlzdC1ncm91cC1ob3Jpem9udGFsLVwiICsgaG9yaXpvbnRhbDtcbn07XG5cbnZhciBMaXN0R3JvdXAgPSBmdW5jdGlvbiBMaXN0R3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGZsdXNoID0gcHJvcHMuZmx1c2gsXG4gICAgICBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgIG51bWJlcmVkID0gcHJvcHMubnVtYmVyZWQsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRyKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWdyb3VwJywgLy8gbGlzdC1ncm91cC1ob3Jpem9udGFsIGNhbm5vdCBjdXJyZW50bHkgYmUgbWl4ZWQgd2l0aCBsaXN0LWdyb3VwLWZsdXNoXG4gIC8vIHdlIG9ubHkgdHJ5IHRvIGFwcGx5IGhvcml6b250YWwgY2xhc3NlcyBpZiBmbHVzaCBpcyBmYWxzZVxuICBmbHVzaCA/ICdsaXN0LWdyb3VwLWZsdXNoJyA6IGdldEhvcml6b250YWxDbGFzcyhob3Jpem9udGFsKSwge1xuICAgICdsaXN0LWdyb3VwLW51bWJlcmVkJzogbnVtYmVyZWRcbiAgfSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJHU7XG5MaXN0R3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHQ7XG52YXIgTGlzdEdyb3VwJDEgPSBMaXN0R3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkcSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubGluZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyR0ID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRzID0ge1xuICB0YWc6ICdmb3JtJ1xufTtcblxudmFyIEZvcm0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdWJtaXQgPSBfdGhpcy5zdWJtaXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZvcm0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5uZXJSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYocmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uc3VibWl0ID0gZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuc3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGlubGluZSA9IF90aGlzJHByb3BzLmlubGluZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRxKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgaW5saW5lID8gJ2Zvcm0taW5saW5lJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIEZvcm07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJHQ7XG5Gb3JtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRzO1xudmFyIEZvcm0kMSA9IEZvcm07XG5cbnZhciBfZXhjbHVkZWQkcCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInZhbGlkXCIsIFwidG9vbHRpcFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdmFsaWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdG9vbHRpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyRyID0ge1xuICB0YWc6ICdkaXYnLFxuICB2YWxpZDogdW5kZWZpbmVkXG59O1xuXG52YXIgRm9ybUZlZWRiYWNrID0gZnVuY3Rpb24gRm9ybUZlZWRiYWNrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWxpZCA9IHByb3BzLnZhbGlkLFxuICAgICAgdG9vbHRpcCA9IHByb3BzLnRvb2x0aXAsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRwKTtcblxuICB2YXIgdmFsaWRNb2RlID0gdG9vbHRpcCA/ICd0b29sdGlwJyA6ICdmZWVkYmFjayc7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgdmFsaWQgPyBcInZhbGlkLVwiICsgdmFsaWRNb2RlIDogXCJpbnZhbGlkLVwiICsgdmFsaWRNb2RlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkZvcm1GZWVkYmFjay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkcztcbkZvcm1GZWVkYmFjay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcjtcbnZhciBGb3JtRmVlZGJhY2skMSA9IEZvcm1GZWVkYmFjaztcblxudmFyIF9leGNsdWRlZCRvID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwicm93XCIsIFwiZGlzYWJsZWRcIiwgXCJjaGVja1wiLCBcImlubGluZVwiLCBcImZsb2F0aW5nXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRyID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICByb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hlY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgXCJzd2l0Y2hcIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmxvYXRpbmc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkcSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIEZvcm1Hcm91cCA9IGZ1bmN0aW9uIEZvcm1Hcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgcm93ID0gcHJvcHMucm93LFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGNoZWNrID0gcHJvcHMuY2hlY2ssXG4gICAgICBpbmxpbmUgPSBwcm9wcy5pbmxpbmUsXG4gICAgICBmbG9hdGluZyA9IHByb3BzLmZsb2F0aW5nLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbyk7XG5cbiAgdmFyIGZvcm1DaGVjayA9IGNoZWNrIHx8IHByb3BzW1wic3dpdGNoXCJdO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHJvdyA/ICdyb3cnIDogZmFsc2UsIGZvcm1DaGVjayA/ICdmb3JtLWNoZWNrJyA6ICdtYi0zJywgcHJvcHNbXCJzd2l0Y2hcIl0gPyAnZm9ybS1zd2l0Y2gnIDogZmFsc2UsIGZvcm1DaGVjayAmJiBpbmxpbmUgPyAnZm9ybS1jaGVjay1pbmxpbmUnIDogZmFsc2UsIGZvcm1DaGVjayAmJiBkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiBmYWxzZSwgZmxvYXRpbmcgJiYgJ2Zvcm0tZmxvYXRpbmcnKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoVGFnID09PSAnZmllbGRzZXQnKSB7XG4gICAgYXR0cmlidXRlcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkZvcm1Hcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkcjtcbkZvcm1Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcTtcbnZhciBGb3JtR3JvdXAkMSA9IEZvcm1Hcm91cDtcblxudmFyIF9leGNsdWRlZCRuID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5saW5lXCIsIFwiY29sb3JcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHEgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGlubGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHAgPSB7XG4gIHRhZzogJ3NtYWxsJyxcbiAgY29sb3I6ICdtdXRlZCdcbn07XG5cbnZhciBGb3JtVGV4dCA9IGZ1bmN0aW9uIEZvcm1UZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBpbmxpbmUgPSBwcm9wcy5pbmxpbmUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAhaW5saW5lID8gJ2Zvcm0tdGV4dCcgOiBmYWxzZSwgY29sb3IgPyBcInRleHQtXCIgKyBjb2xvciA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkZvcm1UZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRxO1xuRm9ybVRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHA7XG52YXIgRm9ybVRleHQkMSA9IEZvcm1UZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJG0gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0eXBlXCIsIFwiYnNTaXplXCIsIFwidmFsaWRcIiwgXCJpbnZhbGlkXCIsIFwidGFnXCIsIFwiYWRkb25cIiwgXCJwbGFpbnRleHRcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkcCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgYnNTaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdmFsaWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW52YWxpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIHBsYWludGV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhZGRvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRvID0ge1xuICB0eXBlOiAndGV4dCdcbn07XG5cbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbnB1dCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZm9jdXMgPSBfdGhpcy5mb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5wdXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5uZXJSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYocmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlLFxuICAgICAgICBic1NpemUgPSBfdGhpcyRwcm9wcy5ic1NpemUsXG4gICAgICAgIHZhbGlkID0gX3RoaXMkcHJvcHMudmFsaWQsXG4gICAgICAgIGludmFsaWQgPSBfdGhpcyRwcm9wcy5pbnZhbGlkLFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGFkZG9uID0gX3RoaXMkcHJvcHMuYWRkb24sXG4gICAgICAgIHBsYWludGV4dCA9IF90aGlzJHByb3BzLnBsYWludGV4dCxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkbSk7XG5cbiAgICB2YXIgY2hlY2tJbnB1dCA9IFsnc3dpdGNoJywgJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5kZXhPZih0eXBlKSA+IC0xO1xuICAgIHZhciBpc05vdGFOdW1iZXIgPSBuZXcgUmVnRXhwKCdcXFxcRCcsICdnJyk7XG4gICAgdmFyIHRleHRhcmVhSW5wdXQgPSB0eXBlID09PSAndGV4dGFyZWEnO1xuICAgIHZhciBzZWxlY3RJbnB1dCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuICAgIHZhciByYW5nZUlucHV0ID0gdHlwZSA9PT0gJ3JhbmdlJztcbiAgICB2YXIgVGFnID0gdGFnIHx8IChzZWxlY3RJbnB1dCB8fCB0ZXh0YXJlYUlucHV0ID8gdHlwZSA6ICdpbnB1dCcpO1xuICAgIHZhciBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tY29udHJvbCc7XG5cbiAgICBpZiAocGxhaW50ZXh0KSB7XG4gICAgICBmb3JtQ29udHJvbENsYXNzID0gZm9ybUNvbnRyb2xDbGFzcyArIFwiLXBsYWludGV4dFwiO1xuICAgICAgVGFnID0gdGFnIHx8ICdpbnB1dCc7XG4gICAgfSBlbHNlIGlmIChyYW5nZUlucHV0KSB7XG4gICAgICBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tcmFuZ2UnO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0SW5wdXQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSBcImZvcm0tc2VsZWN0XCI7XG4gICAgfSBlbHNlIGlmIChjaGVja0lucHV0KSB7XG4gICAgICBpZiAoYWRkb24pIHtcbiAgICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLnNpemUgJiYgaXNOb3RhTnVtYmVyLnRlc3QoYXR0cmlidXRlcy5zaXplKSkge1xuICAgICAgd2Fybk9uY2UoJ1BsZWFzZSB1c2UgdGhlIHByb3AgXCJic1NpemVcIiBpbnN0ZWFkIG9mIHRoZSBcInNpemVcIiB0byBib290c3RyYXBcXCdzIGlucHV0IHNpemluZy4nKTtcbiAgICAgIGJzU2l6ZSA9IGF0dHJpYnV0ZXMuc2l6ZTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNpemU7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBpbnZhbGlkICYmICdpcy1pbnZhbGlkJywgdmFsaWQgJiYgJ2lzLXZhbGlkJywgYnNTaXplID8gc2VsZWN0SW5wdXQgPyBcImZvcm0tc2VsZWN0LVwiICsgYnNTaXplIDogXCJmb3JtLWNvbnRyb2wtXCIgKyBic1NpemUgOiBmYWxzZSwgZm9ybUNvbnRyb2xDbGFzcyksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoVGFnID09PSAnaW5wdXQnIHx8IHRhZyAmJiB0eXBlb2YgdGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhdHRyaWJ1dGVzLnR5cGUgPSB0eXBlID09PSAnc3dpdGNoJyA/ICdjaGVja2JveCcgOiB0eXBlO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLmNoaWxkcmVuICYmICEocGxhaW50ZXh0IHx8IHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGVvZiBUYWcgIT09ICdzdHJpbmcnIHx8IFRhZyA9PT0gJ3NlbGVjdCcpKSB7XG4gICAgICB3YXJuT25jZShcIklucHV0IHdpdGggYSB0eXBlIG9mIFxcXCJcIiArIHR5cGUgKyBcIlxcXCIgY2Fubm90IGhhdmUgY2hpbGRyZW4uIFBsZWFzZSB1c2UgXFxcInZhbHVlXFxcIi9cXFwiZGVmYXVsdFZhbHVlXFxcIiBpbnN0ZWFkLlwiKTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIFwiYXJpYS1pbnZhbGlkXCI6IGludmFsaWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIElucHV0O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzJHA7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbztcbnZhciBJbnB1dCQxID0gSW5wdXQ7XG5cbnZhciBfZXhjbHVkZWQkbCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInR5cGVcIiwgXCJzaXplXCJdO1xudmFyIHByb3BUeXBlcyRvID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRuID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgSW5wdXRHcm91cCA9IGZ1bmN0aW9uIElucHV0R3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAnLCBzaXplID8gXCJpbnB1dC1ncm91cC1cIiArIHNpemUgOiBudWxsKSwgY3NzTW9kdWxlKTtcblxuICBpZiAocHJvcHMudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5JbnB1dEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyRvO1xuSW5wdXRHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbjtcbnZhciBJbnB1dEdyb3VwJDEgPSBJbnB1dEdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkJGsgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJG4gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJG0gPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG52YXIgSW5wdXRHcm91cFRleHQgPSBmdW5jdGlvbiBJbnB1dEdyb3VwVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkayk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAtdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuSW5wdXRHcm91cFRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJG47XG5JbnB1dEdyb3VwVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbTtcbnZhciBJbnB1dEdyb3VwVGV4dCQxID0gSW5wdXRHcm91cFRleHQ7XG5cbnZhciBfZXhjbHVkZWQkaiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImhpZGRlblwiLCBcIndpZHRoc1wiLCBcInRhZ1wiLCBcImNoZWNrXCIsIFwic2l6ZVwiLCBcImZvclwiXTtcbnZhciBjb2xXaWR0aHMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHN0cmluZ09yTnVtYmVyUHJvcCA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKTtcbnZhciBjb2x1bW5Qcm9wcyA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIHNpemU6IHN0cmluZ09yTnVtYmVyUHJvcCxcbiAgb3JkZXI6IHN0cmluZ09yTnVtYmVyUHJvcCxcbiAgb2Zmc2V0OiBzdHJpbmdPck51bWJlclByb3Bcbn0pXSk7XG52YXIgcHJvcFR5cGVzJG0gPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGhpZGRlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGVjazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgXCJmb3JcIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHhzOiBjb2x1bW5Qcm9wcyxcbiAgc206IGNvbHVtblByb3BzLFxuICBtZDogY29sdW1uUHJvcHMsXG4gIGxnOiBjb2x1bW5Qcm9wcyxcbiAgeGw6IGNvbHVtblByb3BzLFxuICB4eGw6IGNvbHVtblByb3BzLFxuICB3aWR0aHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlcbn07XG52YXIgZGVmYXVsdFByb3BzJGwgPSB7XG4gIHRhZzogJ2xhYmVsJyxcbiAgd2lkdGhzOiBjb2xXaWR0aHNcbn07XG5cbnZhciBnZXRDb2x1bW5TaXplQ2xhc3MgPSBmdW5jdGlvbiBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbFNpemUpIHtcbiAgaWYgKGNvbFNpemUgPT09IHRydWUgfHwgY29sU2l6ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wnIDogXCJjb2wtXCIgKyBjb2xXaWR0aDtcbiAgfSBlbHNlIGlmIChjb2xTaXplID09PSAnYXV0bycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wtYXV0bycgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItYXV0b1wiO1xuICB9XG5cbiAgcmV0dXJuIGlzWHMgPyBcImNvbC1cIiArIGNvbFNpemUgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItXCIgKyBjb2xTaXplO1xufTtcblxudmFyIExhYmVsID0gZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGhpZGRlbiA9IHByb3BzLmhpZGRlbixcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoZWNrID0gcHJvcHMuY2hlY2ssXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGh0bWxGb3IgPSBwcm9wc1tcImZvclwiXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGopO1xuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2x1bW5Qcm9wID0gcHJvcHNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sdW1uUHJvcCAmJiBjb2x1bW5Qcm9wICE9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG4gICAgdmFyIGNvbENsYXNzO1xuXG4gICAgaWYgKGlzT2JqZWN0KGNvbHVtblByb3ApKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBjb2xTaXplSW50ZXJmaXggPSBpc1hzID8gJy0nIDogXCItXCIgKyBjb2xXaWR0aCArIFwiLVwiO1xuICAgICAgY29sQ2xhc3MgPSBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3Auc2l6ZSk7XG4gICAgICBjb2xDbGFzc2VzLnB1c2gobWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tjb2xDbGFzc10gPSBjb2x1bW5Qcm9wLnNpemUgfHwgY29sdW1uUHJvcC5zaXplID09PSAnJywgX2NsYXNzTmFtZXNbXCJvcmRlclwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vcmRlcl0gPSBjb2x1bW5Qcm9wLm9yZGVyIHx8IGNvbHVtblByb3Aub3JkZXIgPT09IDAsIF9jbGFzc05hbWVzW1wib2Zmc2V0XCIgKyBjb2xTaXplSW50ZXJmaXggKyBjb2x1bW5Qcm9wLm9mZnNldF0gPSBjb2x1bW5Qcm9wLm9mZnNldCB8fCBjb2x1bW5Qcm9wLm9mZnNldCA9PT0gMCwgX2NsYXNzTmFtZXMpKSksIGNzc01vZHVsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wKTtcbiAgICAgIGNvbENsYXNzZXMucHVzaChjb2xDbGFzcyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBoaWRkZW4gPyAndmlzdWFsbHktaGlkZGVuJyA6IGZhbHNlLCBjaGVjayA/ICdmb3JtLWNoZWNrLWxhYmVsJyA6IGZhbHNlLCBzaXplID8gXCJjb2wtZm9ybS1sYWJlbC1cIiArIHNpemUgOiBmYWxzZSwgY29sQ2xhc3NlcywgY29sQ2xhc3Nlcy5sZW5ndGggPyAnY29sLWZvcm0tbGFiZWwnIDogJ2Zvcm0tbGFiZWwnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICBodG1sRm9yOiBodG1sRm9yXG4gIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTGFiZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzJG07XG5MYWJlbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbDtcbnZhciBMYWJlbCQxID0gTGFiZWw7XG5cbnZhciBfZXhjbHVkZWQkaSA9IFtcImJvZHlcIiwgXCJib3R0b21cIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJoZWFkaW5nXCIsIFwibGVmdFwiLCBcImxpc3RcIiwgXCJtaWRkbGVcIiwgXCJvYmplY3RcIiwgXCJyaWdodFwiLCBcInRhZ1wiLCBcInRvcFwiXTtcbnZhciBwcm9wVHlwZXMkbCA9IHtcbiAgYm9keTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3R0b206IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaGVhZGluZzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsZWZ0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxpc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbWlkZGxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9iamVjdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByaWdodDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcblxudmFyIE1lZGlhID0gZnVuY3Rpb24gTWVkaWEocHJvcHMpIHtcbiAgdmFyIGJvZHkgPSBwcm9wcy5ib2R5LFxuICAgICAgYm90dG9tID0gcHJvcHMuYm90dG9tLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaGVhZGluZyA9IHByb3BzLmhlYWRpbmcsXG4gICAgICBsZWZ0ID0gcHJvcHMubGVmdCxcbiAgICAgIGxpc3QgPSBwcm9wcy5saXN0LFxuICAgICAgbWlkZGxlID0gcHJvcHMubWlkZGxlLFxuICAgICAgb2JqZWN0ID0gcHJvcHMub2JqZWN0LFxuICAgICAgcmlnaHQgPSBwcm9wcy5yaWdodCxcbiAgICAgIHRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHRvcCA9IHByb3BzLnRvcCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGkpO1xuXG4gIHZhciBkZWZhdWx0VGFnO1xuXG4gIGlmIChoZWFkaW5nKSB7XG4gICAgZGVmYXVsdFRhZyA9ICdoNCc7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5ocmVmKSB7XG4gICAgZGVmYXVsdFRhZyA9ICdhJztcbiAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzLnNyYyB8fCBvYmplY3QpIHtcbiAgICBkZWZhdWx0VGFnID0gJ2ltZyc7XG4gIH0gZWxzZSBpZiAobGlzdCkge1xuICAgIGRlZmF1bHRUYWcgPSAndWwnO1xuICB9IGVsc2Uge1xuICAgIGRlZmF1bHRUYWcgPSAnZGl2JztcbiAgfVxuXG4gIHZhciBUYWcgPSB0YWcgfHwgZGVmYXVsdFRhZztcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgJ21lZGlhLWJvZHknOiBib2R5LFxuICAgICdtZWRpYS1oZWFkaW5nJzogaGVhZGluZyxcbiAgICAnbWVkaWEtbGVmdCc6IGxlZnQsXG4gICAgJ21lZGlhLXJpZ2h0JzogcmlnaHQsXG4gICAgJ21lZGlhLXRvcCc6IHRvcCxcbiAgICAnbWVkaWEtYm90dG9tJzogYm90dG9tLFxuICAgICdtZWRpYS1taWRkbGUnOiBtaWRkbGUsXG4gICAgJ21lZGlhLW9iamVjdCc6IG9iamVjdCxcbiAgICAnbWVkaWEtbGlzdCc6IGxpc3QsXG4gICAgbWVkaWE6ICFib2R5ICYmICFoZWFkaW5nICYmICFsZWZ0ICYmICFyaWdodCAmJiAhdG9wICYmICFib3R0b20gJiYgIW1pZGRsZSAmJiAhb2JqZWN0ICYmICFsaXN0XG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTWVkaWEucHJvcFR5cGVzID0gcHJvcFR5cGVzJGw7XG52YXIgTWVkaWEkMSA9IE1lZGlhO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIEZhZGVQcm9wVHlwZXMgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKTtcbnZhciBwcm9wVHlwZXMkayA9IHtcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJhY2tkcm9wQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydzdGFydCcsICdlbmQnLCAnYm90dG9tJywgJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0J10pLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvZmZjYW52YXNUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzLFxuICBvbkNsb3NlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbk9wZW5lZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNjcm9sbGFibGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHRyYXBGb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKVxufTtcbnZhciBwcm9wc1RvT21pdCA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyRrKTtcbnZhciBkZWZhdWx0UHJvcHMkayA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiB0cnVlLFxuICBkaXJlY3Rpb246ICdzdGFydCcsXG4gIHNjcm9sbGFibGU6IGZhbHNlLFxuICByb2xlOiAnZGlhbG9nJyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB6SW5kZXg6IDEwNTAsXG4gIGZhZGU6IHRydWUsXG4gIG9uT3BlbmVkOiBub29wLFxuICBvbkNsb3NlZDogbm9vcCxcbiAgb2ZmY2FudmFzVHJhbnNpdGlvbjoge1xuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5PZmZjYW52YXNcbiAgfSxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiB7XG4gICAgbW91bnRPbkVudGVyOiB0cnVlLFxuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5GYWRlIC8vIHVzZXMgc3RhbmRhcmQgZmFkZSB0cmFuc2l0aW9uXG5cbiAgfSxcbiAgdW5tb3VudE9uQ2xvc2U6IHRydWUsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIHRyYXBGb2N1czogZmFsc2Vcbn07XG5cbnZhciBPZmZjYW52YXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoT2ZmY2FudmFzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBPZmZjYW52YXMocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIF90aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuID0gX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA9IF90aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFc2NhcGUgPSBfdGhpcy5oYW5kbGVFc2NhcGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVGFiID0gX3RoaXMuaGFuZGxlVGFiLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uT3BlbmVkID0gX3RoaXMub25PcGVuZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DbG9zZWQgPSBfdGhpcy5vbkNsb3NlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBfdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBfdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50cmFwRm9jdXMgPSBfdGhpcy50cmFwRm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2ZmY2FudmFzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgICAgb25FbnRlciA9IF90aGlzJHByb3BzLm9uRW50ZXI7XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcigpO1xuICAgIH0gLy8gdHJhcHMgZm9jdXMgaW5zaWRlIHRoZSBPZmZjYW52YXMsIGV2ZW4gaWYgdGhlIGJyb3dzZXIgYWRkcmVzcyBiYXIgaXMgZm9jdXNlZFxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBub3cgT2ZmY2FudmFzIERpYWxvZyBpcyByZW5kZXJlZCBhbmQgd2UgY2FuIHJlZmVyIHRoaXMuX2VsZW1lbnQgYW5kIHRoaXMuX2RpYWxvZ1xuXG5cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXByZXZTdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiBwcmV2UHJvcHMuekluZGV4ICE9PSB0aGlzLnByb3BzLnpJbmRleCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhpdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8udHJhcEZvY3VzID0gZnVuY3Rpb24gdHJhcEZvY3VzKGV2KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRyYXBGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkgLy9lbGVtZW50IGlzIG5vdCBhdHRhY2hlZFxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9kaWFsb2cgPT09IGV2LnRhcmdldCkgLy8gaW5pdGlhbCBmb2N1cyB3aGVuIHRoZSBPZmZjYW52YXMgaXMgb3BlbmVkXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMub2ZmY2FudmFzSW5kZXggPCBPZmZjYW52YXMub3BlbkNvdW50IC0gMSkgLy8gbGFzdCBvcGVuZWQgb2ZmY2FudmFzXG4gICAgICByZXR1cm47XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZm9jdXMgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIE9mZmNhbnZhc1xuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBldi50YXJnZXQpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgLy8gb3RoZXJ3aXNlIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgT2ZmY2FudmFzXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25PcGVuZWQgPSBmdW5jdGlvbiBvbk9wZW5lZChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMucHJvcHMub25PcGVuZWQoKTtcbiAgICAodGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLm9uRW50ZXJlZCB8fCBub29wKShub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xvc2VkID0gZnVuY3Rpb24gb25DbG9zZWQobm9kZSkge1xuICAgIHZhciB1bm1vdW50T25DbG9zZSA9IHRoaXMucHJvcHMudW5tb3VudE9uQ2xvc2U7IC8vIHNvIGFsbCBtZXRob2RzIGdldCBjYWxsZWQgYmVmb3JlIGl0IGlzIHVubW91bnRlZFxuXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlZCgpO1xuICAgICh0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24ub25FeGl0ZWQgfHwgbm9vcCkobm9kZSk7XG5cbiAgICBpZiAodW5tb3VudE9uQ2xvc2UpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKTtcblxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0eXBlb2YgdGhpcy5fZGlhbG9nLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9kaWFsb2cuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzYWJsZUNoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVFbGVtZW50cy5qb2luKCcsICcpKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNlZENoaWxkID0gZnVuY3Rpb24gZ2V0Rm9jdXNlZENoaWxkKCkge1xuICAgIHZhciBjdXJyZW50Rm9jdXM7XG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBmb2N1c2FibGVDaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEZvY3VzO1xuICB9IC8vIG5vdCBtb3VzZVVwIGJlY2F1c2Ugc2Nyb2xsYmFyIGZpcmVzIGl0LCBzaG91bGRuJ3QgY2xvc2Ugd2hlbiB1c2VyIHNjcm9sbHNcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy5fYmFja2Ryb3A7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHRydWUpIHJldHVybjtcblxuICAgICAgaWYgKGJhY2tkcm9wICYmIGUudGFyZ2V0ID09PSBiYWNrZHJvcCAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlKSB7XG4gICAgaWYgKGUud2hpY2ggIT09IDkpIHJldHVybjtcbiAgICBpZiAodGhpcy5vZmZjYW52YXNJbmRleCA8IE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKSByZXR1cm47IC8vIGxhc3Qgb3BlbmVkIG9mZmNhbnZhc1xuXG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuICAgIHZhciB0b3RhbEZvY3VzYWJsZSA9IGZvY3VzYWJsZUNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAodG90YWxGb2N1c2FibGUgPT09IDApIHJldHVybjtcbiAgICB2YXIgY3VycmVudEZvY3VzID0gdGhpcy5nZXRGb2N1c2VkQ2hpbGQoKTtcbiAgICB2YXIgZm9jdXNlZEluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxGb2N1c2FibGU7IGkgKz0gMSkge1xuICAgICAgaWYgKGZvY3VzYWJsZUNoaWxkcmVuW2ldID09PSBjdXJyZW50Rm9jdXMpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblt0b3RhbEZvY3VzYWJsZSAtIDFdLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IHRvdGFsRm9jdXNhYmxlIC0gMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BNb3VzZURvd24oZSkge1xuICAgIHRoaXMuX21vdXNlRG93bkVsZW1lbnQgPSBlLnRhcmdldDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXNjYXBlID0gZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy5jb250YWluZXIpO1xuXG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZ2V0T3JpZ2luYWxCb2R5UGFkZGluZygpO1xuICAgIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKTtcblxuICAgIGlmIChPZmZjYW52YXMub3BlbkNvdW50ID09PSAwICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgJiYgIXRoaXMucHJvcHMuc2Nyb2xsYWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIHRoaXMub2ZmY2FudmFzSW5kZXggPSBPZmZjYW52YXMub3BlbkNvdW50O1xuICAgIE9mZmNhbnZhcy5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICAgIE9mZmNhbnZhcy5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBPZmZjYW52YXMub3BlbkNvdW50IC0gMSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgodGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczIuZGlyZWN0aW9uLFxuICAgICAgICB1bm1vdW50T25DbG9zZSA9IF90aGlzJHByb3BzMi51bm1vdW50T25DbG9zZTtcblxuICAgIGlmICghIXRoaXMuX2VsZW1lbnQgJiYgKHRoaXMuc3RhdGUuaXNPcGVuIHx8ICF1bm1vdW50T25DbG9zZSkpIHtcbiAgICAgIHZhciBpc09mZmNhbnZhc0hpZGRlbiA9ICEhdGhpcy5fZWxlbWVudCAmJiAhdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXVubW91bnRPbkNsb3NlO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNPZmZjYW52YXNIaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5iYWNrZHJvcENsYXNzTmFtZSxcbiAgICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczMuY3NzTW9kdWxlLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzMy5pc09wZW4sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfdGhpcyRwcm9wczMuYmFja2Ryb3AsXG4gICAgICAgICAgcm9sZSA9IF90aGlzJHByb3BzMy5yb2xlLFxuICAgICAgICAgIGxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wczMubGFiZWxsZWRCeSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMy5zdHlsZTtcbiAgICAgIHZhciBvZmZjYW52YXNBdHRyaWJ1dGVzID0ge1xuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUVzY2FwZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZVRhYixcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnksXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICB9O1xuICAgICAgdmFyIGhhc1RyYW5zaXRpb24gPSB0aGlzLnByb3BzLmZhZGU7XG5cbiAgICAgIHZhciBvZmZjYW52YXNUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBCYWNrZHJvcCA9IGJhY2tkcm9wICYmIChoYXNUcmFuc2l0aW9uID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBiYWNrZHJvcFRyYW5zaXRpb24sIHtcbiAgICAgICAgXCJpblwiOiBpc09wZW4gJiYgISFiYWNrZHJvcCxcbiAgICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX2JhY2tkcm9wID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMtYmFja2Ryb3AnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd25cbiAgICAgIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMtYmFja2Ryb3AnLCAnc2hvdycsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93blxuICAgICAgfSkpO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIHByb3BzVG9PbWl0KTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9ydGFsJDEsIHtcbiAgICAgICAgbm9kZTogdGhpcy5fZWxlbWVudFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBvZmZjYW52YXNBdHRyaWJ1dGVzLCBvZmZjYW52YXNUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMub25PcGVuZWQsXG4gICAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ29mZmNhbnZhcycsIGNsYXNzTmFtZSwgXCJvZmZjYW52YXMtXCIgKyBkaXJlY3Rpb24pLCBjc3NNb2R1bGUpLFxuICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoYykge1xuICAgICAgICAgIF90aGlzMi5fZGlhbG9nID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaXNPcGVuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcbiAgICAgICAgfSlcbiAgICAgIH0pLCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgQmFja2Ryb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgdGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT2ZmY2FudmFzO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuT2ZmY2FudmFzLnByb3BUeXBlcyA9IHByb3BUeXBlcyRrO1xuT2ZmY2FudmFzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRrO1xuT2ZmY2FudmFzLm9wZW5Db3VudCA9IDA7XG52YXIgT2ZmY2FudmFzJDEgPSBPZmZjYW52YXM7XG5cbnZhciBfZXhjbHVkZWQkaCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkaiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkaiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIE9mZmNhbnZhc0JvZHkgPSBmdW5jdGlvbiBPZmZjYW52YXNCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRoKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdvZmZjYW52YXMtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuT2ZmY2FudmFzQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkajtcbk9mZmNhbnZhc0JvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGo7XG52YXIgT2ZmY2FudmFzQm9keSQxID0gT2ZmY2FudmFzQm9keTtcblxudmFyIF9leGNsdWRlZCRnID0gW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVwiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidG9nZ2xlXCIsIFwid3JhcFRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkaSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICB3cmFwVGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkaSA9IHtcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZScsXG4gIHRhZzogJ2g1JyxcbiAgd3JhcFRhZzogJ2Rpdidcbn07XG5cbnZhciBPZmZjYW52YXNIZWFkZXIgPSBmdW5jdGlvbiBPZmZjYW52YXNIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uO1xuXG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGcpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ29mZmNhbnZhcy1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChXcmFwVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdvZmZjYW52YXMtdGl0bGUnLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufTtcblxuT2ZmY2FudmFzSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRpO1xuT2ZmY2FudmFzSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRpO1xudmFyIE9mZmNhbnZhc0hlYWRlciQxID0gT2ZmY2FudmFzSGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJGYgPSBbXCJjbGFzc05hbWVcIiwgXCJsaXN0Q2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwic2l6ZVwiLCBcInRhZ1wiLCBcImxpc3RUYWdcIiwgXCJhcmlhLWxhYmVsXCJdO1xudmFyIHByb3BUeXBlcyRoID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyRoID0ge1xuICB0YWc6ICduYXYnLFxuICBsaXN0VGFnOiAndWwnLFxuICAnYXJpYS1sYWJlbCc6ICdwYWdpbmF0aW9uJ1xufTtcblxudmFyIFBhZ2luYXRpb24gPSBmdW5jdGlvbiBQYWdpbmF0aW9uKHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgbGlzdENsYXNzTmFtZSA9IHByb3BzLmxpc3RDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIExpc3RUYWcgPSBwcm9wcy5saXN0VGFnLFxuICAgICAgbGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGxpc3RDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGxpc3RDbGFzc05hbWUsICdwYWdpbmF0aW9uJywgKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW1wicGFnaW5hdGlvbi1cIiArIHNpemVdID0gISFzaXplLCBfY2xhc3NOYW1lcykpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogbGFiZWxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KExpc3RUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3Nlc1xuICB9KSkpO1xufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkaDtcblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGg7XG52YXIgUGFnaW5hdGlvbiQxID0gUGFnaW5hdGlvbjtcblxudmFyIF9leGNsdWRlZCRlID0gW1wiYWN0aXZlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGlzYWJsZWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGcgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRnID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbnZhciBQYWdpbmF0aW9uSXRlbSA9IGZ1bmN0aW9uIFBhZ2luYXRpb25JdGVtKHByb3BzKSB7XG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncGFnZS1pdGVtJywge1xuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblBhZ2luYXRpb25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyRnO1xuUGFnaW5hdGlvbkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGc7XG52YXIgUGFnaW5hdGlvbkl0ZW0kMSA9IFBhZ2luYXRpb25JdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJGQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJuZXh0XCIsIFwicHJldmlvdXNcIiwgXCJmaXJzdFwiLCBcImxhc3RcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGYgPSB7XG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmlyc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGFzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRmID0ge1xuICB0YWc6ICdhJ1xufTtcblxudmFyIFBhZ2luYXRpb25MaW5rID0gZnVuY3Rpb24gUGFnaW5hdGlvbkxpbmsocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIG5leHQgPSBwcm9wcy5uZXh0LFxuICAgICAgcHJldmlvdXMgPSBwcm9wcy5wcmV2aW91cyxcbiAgICAgIGZpcnN0ID0gcHJvcHMuZmlyc3QsXG4gICAgICBsYXN0ID0gcHJvcHMubGFzdCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BhZ2UtbGluaycpLCBjc3NNb2R1bGUpO1xuICB2YXIgZGVmYXVsdEFyaWFMYWJlbDtcblxuICBpZiAocHJldmlvdXMpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ1ByZXZpb3VzJztcbiAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdOZXh0JztcbiAgfSBlbHNlIGlmIChmaXJzdCkge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnRmlyc3QnO1xuICB9IGVsc2UgaWYgKGxhc3QpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ0xhc3QnO1xuICB9XG5cbiAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10gfHwgZGVmYXVsdEFyaWFMYWJlbDtcbiAgdmFyIGRlZmF1bHRDYXJldDtcblxuICBpZiAocHJldmlvdXMpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxcdTIwMzlcIjtcbiAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHUyMDNBXCI7XG4gIH0gZWxzZSBpZiAoZmlyc3QpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxceEFCXCI7XG4gIH0gZWxzZSBpZiAobGFzdCkge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx4QkJcIjtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gIGlmIChjaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICBpZiAoIWF0dHJpYnV0ZXMuaHJlZiAmJiBUYWcgPT09ICdhJykge1xuICAgIFRhZyA9ICdidXR0b24nO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzIHx8IG5leHQgfHwgZmlyc3QgfHwgbGFzdCkge1xuICAgIGNoaWxkcmVuID0gWy8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGtleTogXCJjYXJldFwiXG4gICAgfSwgY2hpbGRyZW4gfHwgZGVmYXVsdENhcmV0KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwidmlzdWFsbHktaGlkZGVuXCIsXG4gICAgICBrZXk6IFwiYXJpYUxhYmVsXCJcbiAgICB9LCBhcmlhTGFiZWwpXTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG5QYWdpbmF0aW9uTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZjtcblBhZ2luYXRpb25MaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRmO1xudmFyIFBhZ2luYXRpb25MaW5rJDEgPSBQYWdpbmF0aW9uTGluaztcblxuLyoqXG4gKiBUYWJDb250ZXh0XG4gKiB7XG4gKiAgYWN0aXZlVGFiSWQ6IFByb3BUeXBlcy5hbnlcbiAqIH1cbiAqL1xuXG52YXIgVGFiQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIHByb3BUeXBlcyRlID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmVUYWI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRlID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgVGFiQ29udGVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUYWJDb250ZW50LCBfQ29tcG9uZW50KTtcblxuICBUYWJDb250ZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVUYWI6IG5leHRQcm9wcy5hY3RpdmVUYWJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gVGFiQ29udGVudChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlVGFiOiBfdGhpcy5wcm9wcy5hY3RpdmVUYWJcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUYWJDb250ZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWc7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcyRlKSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3RhYi1jb250ZW50JywgY2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhYkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGFjdGl2ZVRhYklkOiB0aGlzLnN0YXRlLmFjdGl2ZVRhYlxuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpO1xuICB9O1xuXG4gIHJldHVybiBUYWJDb250ZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVGFiQ29udGVudCQxID0gVGFiQ29udGVudDtcblRhYkNvbnRlbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzJGU7XG5UYWJDb250ZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRlO1xuXG52YXIgX2V4Y2x1ZGVkJGMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWJJZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkZCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdGFiSWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59O1xudmFyIGRlZmF1bHRQcm9wcyRkID0ge1xuICB0YWc6ICdkaXYnXG59O1xuZnVuY3Rpb24gVGFiUGFuZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdGFiSWQgPSBwcm9wcy50YWJJZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGMpO1xuXG4gIHZhciBnZXRDbGFzc2VzID0gZnVuY3Rpb24gZ2V0Q2xhc3NlcyhhY3RpdmVUYWJJZCkge1xuICAgIHJldHVybiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3RhYi1wYW5lJywgY2xhc3NOYW1lLCB7XG4gICAgICBhY3RpdmU6IHRhYklkID09PSBhY3RpdmVUYWJJZFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFiQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgYWN0aXZlVGFiSWQgPSBfcmVmLmFjdGl2ZVRhYklkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc2VzKGFjdGl2ZVRhYklkKVxuICAgIH0pKTtcbiAgfSk7XG59XG5UYWJQYW5lLnByb3BUeXBlcyA9IHByb3BUeXBlcyRkO1xuVGFiUGFuZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZDtcblxudmFyIF9leGNsdWRlZCRiID0gW1wiY2xhc3NOYW1lXCIsIFwiY2xvc2VDbGFzc05hbWVcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImNvbG9yXCIsIFwiaXNPcGVuXCIsIFwidG9nZ2xlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0cmFuc2l0aW9uXCIsIFwiZmFkZVwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRjID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbG9zZUNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlQXJpYUxhYmVsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYyA9IHtcbiAgY29sb3I6ICdzdWNjZXNzJyxcbiAgaXNPcGVuOiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJyxcbiAgZmFkZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xvc2VDbGFzc05hbWUgPSBwcm9wcy5jbG9zZUNsYXNzTmFtZSxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaXNPcGVuID0gcHJvcHMuaXNPcGVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgZmFkZSA9IHByb3BzLmZhZGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWxlcnQnLCBcImFsZXJ0LVwiICsgY29sb3IsIHtcbiAgICAnYWxlcnQtZGlzbWlzc2libGUnOiB0b2dnbGVcbiAgfSksIGNzc01vZHVsZSk7XG4gIHZhciBjbG9zZUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2J0bi1jbG9zZScsIGNsb3NlQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcblxuICB2YXIgYWxlcnRUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgYmFzZUNsYXNzOiBmYWRlID8gdHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICB0aW1lb3V0OiBmYWRlID8gdHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICB9KTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBhbGVydFRyYW5zaXRpb24sIHtcbiAgICB0YWc6IFRhZyxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJpblwiOiBpc09wZW4sXG4gICAgcm9sZTogXCJhbGVydFwiLFxuICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICB9KSwgdG9nZ2xlID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogY2xvc2VDbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbCxcbiAgICBvbkNsaWNrOiB0b2dnbGVcbiAgfSkgOiBudWxsLCBjaGlsZHJlbik7XG59XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRjO1xuQWxlcnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGM7XG5cbnZhciBfZXhjbHVkZWQkYSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlzT3BlblwiLCBcImNoaWxkcmVuXCIsIFwidHJhbnNpdGlvblwiLCBcImZhZGVcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkYiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYiA9IHtcbiAgaXNPcGVuOiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpc09wZW4gPSBwcm9wcy5pc09wZW4sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBmYWRlID0gcHJvcHMuZmFkZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRhKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdCcpLCBjc3NNb2R1bGUpO1xuXG4gIHZhciB0b2FzdFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0cmFuc2l0aW9uKSwge30sIHtcbiAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgIHRpbWVvdXQ6IGZhZGUgPyB0cmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gIH0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHRvYXN0VHJhbnNpdGlvbiwge1xuICAgIHRhZzogVGFnLFxuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImluXCI6IGlzT3BlbixcbiAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gIH0pLCBjaGlsZHJlbik7XG59XG5cblRvYXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRiO1xuVG9hc3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGI7XG5cbnZhciBfZXhjbHVkZWQkOSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubmVyUmVmXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRhID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJGEgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBUb2FzdEJvZHkgPSBmdW5jdGlvbiBUb2FzdEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdC1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cblRvYXN0Qm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkYTtcblRvYXN0Qm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkYTtcbnZhciBUb2FzdEJvZHkkMSA9IFRvYXN0Qm9keTtcblxudmFyIF9leGNsdWRlZCQ4ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0b2dnbGVcIiwgXCJ0YWdcIiwgXCJ3cmFwVGFnXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjbG9zZVwiLCBcInRhZ0NsYXNzTmFtZVwiLCBcImljb25cIl07XG52YXIgcHJvcFR5cGVzJDkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGljb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXSksXG4gIHdyYXBUYWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGFyQ29kZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBjbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDkgPSB7XG4gIHRhZzogJ3N0cm9uZycsXG4gIHdyYXBUYWc6ICdkaXYnLFxuICB0YWdDbGFzc05hbWU6ICdtZS1hdXRvJyxcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZSdcbn07XG5cbnZhciBUb2FzdEhlYWRlciA9IGZ1bmN0aW9uIFRvYXN0SGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbG9zZUJ1dHRvbjtcbiAgdmFyIGljb247XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgdGFnQ2xhc3NOYW1lID0gcHJvcHMudGFnQ2xhc3NOYW1lLFxuICAgICAgaWNvblByb3AgPSBwcm9wcy5pY29uLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkOCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndG9hc3QtaGVhZGVyJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKCFjbG9zZSAmJiB0b2dnbGUpIHtcbiAgICBjbG9zZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ2J0bi1jbG9zZScsIGNzc01vZHVsZSksXG4gICAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaWNvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpY29uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKFwicm91bmRlZCB0ZXh0LVwiICsgaWNvblByb3ApLFxuICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgcm9sZTogXCJpbWdcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9KSk7XG4gIH0gZWxzZSBpZiAoaWNvblByb3ApIHtcbiAgICBpY29uID0gaWNvblByb3A7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFdyYXBUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBpY29uLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0odGFnQ2xhc3NOYW1lLCB7XG4gICAgICBcIm1zLTJcIjogaWNvbiAhPSBudWxsXG4gICAgfSksIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59O1xuXG5Ub2FzdEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkOTtcblRvYXN0SGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ5O1xudmFyIFRvYXN0SGVhZGVyJDEgPSBUb2FzdEhlYWRlcjtcblxudmFyIF9leGNsdWRlZCQ3ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiYWN0aXZlXCIsIFwiZGlzYWJsZWRcIiwgXCJhY3Rpb25cIiwgXCJjb2xvclwiXTtcbnZhciBwcm9wVHlwZXMkOCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDggPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIGhhbmRsZURpc2FibGVkT25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZURpc2FibGVkT25DbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5cbnZhciBMaXN0R3JvdXBJdGVtID0gZnVuY3Rpb24gTGlzdEdyb3VwSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IGZhbHNlLCBhY3Rpb24gPyAnbGlzdC1ncm91cC1pdGVtLWFjdGlvbicgOiBmYWxzZSwgY29sb3IgPyBcImxpc3QtZ3JvdXAtaXRlbS1cIiArIGNvbG9yIDogZmFsc2UsICdsaXN0LWdyb3VwLWl0ZW0nKSwgY3NzTW9kdWxlKTsgLy8gUHJldmVudCBjbGljayBldmVudCB3aGVuIGRpc2FibGVkLlxuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGF0dHJpYnV0ZXMub25DbGljayA9IGhhbmRsZURpc2FibGVkT25DbGljaztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXBJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ4O1xuTGlzdEdyb3VwSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkODtcbnZhciBMaXN0R3JvdXBJdGVtJDEgPSBMaXN0R3JvdXBJdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJDYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDcgPSB7XG4gIHRhZzogJ2g1J1xufTtcblxudmFyIExpc3RHcm91cEl0ZW1IZWFkaW5nID0gZnVuY3Rpb24gTGlzdEdyb3VwSXRlbUhlYWRpbmcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXBJdGVtSGVhZGluZy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNztcbkxpc3RHcm91cEl0ZW1IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ3O1xudmFyIExpc3RHcm91cEl0ZW1IZWFkaW5nJDEgPSBMaXN0R3JvdXBJdGVtSGVhZGluZztcblxudmFyIF9leGNsdWRlZCQ1ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQ2ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQ2ID0ge1xuICB0YWc6ICdwJ1xufTtcblxudmFyIExpc3RHcm91cEl0ZW1UZXh0ID0gZnVuY3Rpb24gTGlzdEdyb3VwSXRlbVRleHQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDUpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAtaXRlbS10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MaXN0R3JvdXBJdGVtVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNjtcbkxpc3RHcm91cEl0ZW1UZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ2O1xudmFyIExpc3RHcm91cEl0ZW1UZXh0JDEgPSBMaXN0R3JvdXBJdGVtVGV4dDtcblxudmFyIF9leGNsdWRlZCQ0ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidHlwZVwiXTtcbnZhciBwcm9wVHlwZXMkNSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDUgPSB7XG4gIHRhZzogJ3VsJ1xufTtcbnZhciBMaXN0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ0KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHR5cGUgPyBcImxpc3QtXCIgKyB0eXBlIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5MaXN0Lm5hbWUgPSAnTGlzdCc7XG5MaXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQ1O1xuTGlzdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNTtcbnZhciBMaXN0JDEgPSBMaXN0O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDQgPSB7XG4gIHRhZzogJ2xpJ1xufTtcbnZhciBMaXN0SW5saW5lSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtaW5saW5lLWl0ZW0nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuTGlzdElubGluZUl0ZW0ubmFtZSA9ICdMaXN0SW5saW5lSXRlbSc7XG5MaXN0SW5saW5lSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNDtcbkxpc3RJbmxpbmVJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ0O1xudmFyIExpc3RJbmxpbmVJdGVtJDEgPSBMaXN0SW5saW5lSXRlbTtcblxudmFyIFVuY29udHJvbGxlZEFsZXJ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZEFsZXJ0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRBbGVydChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiB0cnVlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZEFsZXJ0LnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWxlcnQsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgdGhpcy5wcm9wcykpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRBbGVydDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIFVuY29udHJvbGxlZEFsZXJ0JDEgPSBVbmNvbnRyb2xsZWRBbGVydDtcblxudmFyIG9taXRLZXlzJDMgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b25Ecm9wZG93biQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkMykpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bi5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIEJ1dHRvbkRyb3Bkb3duJDEucHJvcFR5cGVzKTtcblxudmFyIG9taXRLZXlzJDIgPSBbJ3RvZ2dsZUV2ZW50cycsICdkZWZhdWx0T3BlbiddO1xudmFyIHByb3BUeXBlcyQzID0ge1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b2dnbGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0b2dnbGVFdmVudHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZylcbn07XG52YXIgZGVmYXVsdFByb3BzJDMgPSB7XG4gIHRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50c1xufTtcblxudmFyIFVuY29udHJvbGxlZENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENvbGxhcHNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDb2xsYXBzZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnRvZ2dsZXJzID0gbnVsbDtcbiAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRvZ2dsZXJzID0gZmluZERPTUVsZW1lbnRzKHRoaXMucHJvcHMudG9nZ2xlcik7XG5cbiAgICBpZiAodGhpcy50b2dnbGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKHRoaXMudG9nZ2xlcnMsIHRoaXMudG9nZ2xlLCB0aGlzLnByb3BzLnRvZ2dsZUV2ZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRvZ2dsZXJzLmxlbmd0aCAmJiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpc09wZW4gPSBfcmVmLmlzT3BlbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogIWlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENvbGxhcHNlJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDIpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENvbGxhcHNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDb2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMztcblVuY29udHJvbGxlZENvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQzO1xudmFyIFVuY29udHJvbGxlZENvbGxhcHNlJDEgPSBVbmNvbnRyb2xsZWRDb2xsYXBzZTtcblxudmFyIG9taXRLZXlzJDEgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWREcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWREcm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGlzT3BlbiA9ICF0aGlzLnN0YXRlLmlzT3BlbjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogaXNPcGVuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzMi5wcm9wcy5vblRvZ2dsZSkge1xuICAgICAgICBfdGhpczIucHJvcHMub25Ub2dnbGUoZSwgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDEpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZERyb3Bkb3duO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkRHJvcGRvd24ucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvblRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59LCBEcm9wZG93biQxLnByb3BUeXBlcyk7XG5cbnZhciBvbWl0S2V5cyA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZFRvb2x0aXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkVG9vbHRpcCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkVG9vbHRpcChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRUb29sdGlwLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZFRvb2x0aXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRUb29sdGlwLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgVG9vbHRpcCQxLnByb3BUeXBlcyk7XG5cbnZhciBfZXhjbHVkZWQkMiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInR5cGVcIiwgXCJzaXplXCIsIFwiY29sb3JcIiwgXCJjaGlsZHJlblwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkMiA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgdHlwZTogJ2JvcmRlcicsXG4gIGNoaWxkcmVuOiAnTG9hZGluZy4uLidcbn07XG5cbnZhciBTcGlubmVyID0gZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBzaXplID8gXCJzcGlubmVyLVwiICsgdHlwZSArIFwiLVwiICsgc2l6ZSA6IGZhbHNlLCBcInNwaW5uZXItXCIgKyB0eXBlLCBjb2xvciA/IFwidGV4dC1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwic3RhdHVzXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ3Zpc3VhbGx5LWhpZGRlbicsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDI7XG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQyO1xudmFyIFNwaW5uZXIkMSA9IFNwaW5uZXI7XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIiwgXCJhbmltYXRpb25cIiwgXCJzaXplXCIsIFwid2lkdGhzXCJdO1xuXG52YXIgcHJvcFR5cGVzJDEgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQ29sJDEucHJvcFR5cGVzKSwge30sIHtcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhbmltYXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydnbG93JywgJ3dhdmUnXSksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2xnJywgJ3NtJywgJ3hzJ10pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyQxID0ge1xuICB0YWc6ICdzcGFuJ1xufTtcblxudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxKTtcblxuICB2YXIgX2dldENvbHVtbkNsYXNzZXMgPSBnZXRDb2x1bW5DbGFzc2VzKGF0dHJpYnV0ZXMsIGNzc01vZHVsZSwgd2lkdGhzKSxcbiAgICAgIG1vZGlmaWVkQXR0cmlidXRlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmF0dHJpYnV0ZXMsXG4gICAgICBjb2xDbGFzc2VzID0gX2dldENvbHVtbkNsYXNzZXMuY29sQ2xhc3NlcztcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNvbENsYXNzZXMsICdwbGFjZWhvbGRlcicgKyAoYW5pbWF0aW9uID8gJy0nICsgYW5pbWF0aW9uIDogJycpLCBzaXplID8gJ3BsYWNlaG9sZGVyLScgKyBzaXplIDogZmFsc2UsIGNvbG9yID8gJ2JnLScgKyBjb2xvciA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBtb2RpZmllZEF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTtcblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxO1xudmFyIFBsYWNlaG9sZGVyJDEgPSBQbGFjZWhvbGRlcjtcblxudmFyIF9leGNsdWRlZCA9IFtcImNzc01vZHVsZVwiLCBcImNsYXNzTmFtZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMgPSB7XG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG91dGxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIHRhZzogQnV0dG9uJDFcbn07XG5cbnZhciBQbGFjZWhvbGRlckJ1dHRvbiA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyQnV0dG9uKHByb3BzKSB7XG4gIHZhciBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF9nZXRDb2x1bW5DbGFzc2VzID0gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKFwicGxhY2Vob2xkZXJcIiwgY2xhc3NOYW1lLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b24kMSwgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9KSk7XG59O1xuXG5QbGFjZWhvbGRlckJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5QbGFjZWhvbGRlckJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgUGxhY2Vob2xkZXJCdXR0b24kMSA9IFBsYWNlaG9sZGVyQnV0dG9uO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gIHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgIGRldGFpbDogbnVsbFxuICAgIH07XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcblxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgT2JqZWN0LnZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gIHZhciB2YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhPKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIE9ba2V5XTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QudmFsdWVzID0gdmFsdWVzO1xufSkoKTtcblxudmFyIHBvbHlmaWxsID0ge1xuICBfX3Byb3RvX186IG51bGxcbn07XG5cbmV4cG9ydHMuQWNjb3JkaW9uID0gQWNjb3JkaW9uJDE7XG5leHBvcnRzLkFjY29yZGlvbkJvZHkgPSBBY2NvcmRpb25JdGVtJDE7XG5leHBvcnRzLkFjY29yZGlvbkNvbnRleHQgPSBBY2NvcmRpb25Db250ZXh0O1xuZXhwb3J0cy5BY2NvcmRpb25IZWFkZXIgPSBBY2NvcmRpb25IZWFkZXIkMTtcbmV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IEFjY29yZGlvbkl0ZW0kMztcbmV4cG9ydHMuQWxlcnQgPSBBbGVydDtcbmV4cG9ydHMuQmFkZ2UgPSBCYWRnZSQxO1xuZXhwb3J0cy5CcmVhZGNydW1iID0gQnJlYWRjcnVtYiQxO1xuZXhwb3J0cy5CcmVhZGNydW1iSXRlbSA9IEJyZWFkY3J1bWJJdGVtJDE7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbiQxO1xuZXhwb3J0cy5CdXR0b25Ecm9wZG93biA9IEJ1dHRvbkRyb3Bkb3duJDE7XG5leHBvcnRzLkJ1dHRvbkdyb3VwID0gQnV0dG9uR3JvdXAkMTtcbmV4cG9ydHMuQnV0dG9uVG9nZ2xlID0gQnV0dG9uVG9nZ2xlJDE7XG5leHBvcnRzLkJ1dHRvblRvb2xiYXIgPSBCdXR0b25Ub29sYmFyJDE7XG5leHBvcnRzLkNhcmQgPSBDYXJkJDE7XG5leHBvcnRzLkNhcmRCb2R5ID0gQ2FyZEJvZHkkMTtcbmV4cG9ydHMuQ2FyZENvbHVtbnMgPSBDYXJkQ29sdW1ucyQxO1xuZXhwb3J0cy5DYXJkRGVjayA9IENhcmREZWNrJDE7XG5leHBvcnRzLkNhcmRGb290ZXIgPSBDYXJkRm9vdGVyJDE7XG5leHBvcnRzLkNhcmRHcm91cCA9IENhcmRHcm91cCQxO1xuZXhwb3J0cy5DYXJkSGVhZGVyID0gQ2FyZEhlYWRlciQxO1xuZXhwb3J0cy5DYXJkSW1nID0gQ2FyZEltZyQxO1xuZXhwb3J0cy5DYXJkSW1nT3ZlcmxheSA9IENhcmRJbWdPdmVybGF5JDE7XG5leHBvcnRzLkNhcmRMaW5rID0gQ2FyZExpbmskMTtcbmV4cG9ydHMuQ2FyZFN1YnRpdGxlID0gQ2FyZFN1YnRpdGxlJDE7XG5leHBvcnRzLkNhcmRUZXh0ID0gQ2FyZFRleHQkMTtcbmV4cG9ydHMuQ2FyZFRpdGxlID0gQ2FyZFRpdGxlJDE7XG5leHBvcnRzLkNhcm91c2VsID0gQ2Fyb3VzZWwkMTtcbmV4cG9ydHMuQ2Fyb3VzZWxDYXB0aW9uID0gQ2Fyb3VzZWxDYXB0aW9uJDE7XG5leHBvcnRzLkNhcm91c2VsQ29udHJvbCA9IENhcm91c2VsQ29udHJvbCQxO1xuZXhwb3J0cy5DYXJvdXNlbEluZGljYXRvcnMgPSBDYXJvdXNlbEluZGljYXRvcnMkMTtcbmV4cG9ydHMuQ2Fyb3VzZWxJdGVtID0gQ2Fyb3VzZWxJdGVtJDE7XG5leHBvcnRzLkNvbCA9IENvbCQxO1xuZXhwb3J0cy5Db2xsYXBzZSA9IENvbGxhcHNlJDE7XG5leHBvcnRzLkNvbnRhaW5lciA9IENvbnRhaW5lciQxO1xuZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duJDE7XG5leHBvcnRzLkRyb3Bkb3duQ29udGV4dCA9IERyb3Bkb3duQ29udGV4dDtcbmV4cG9ydHMuRHJvcGRvd25JdGVtID0gRHJvcGRvd25JdGVtJDE7XG5leHBvcnRzLkRyb3Bkb3duTWVudSA9IERyb3Bkb3duTWVudSQxO1xuZXhwb3J0cy5Ecm9wZG93blRvZ2dsZSA9IERyb3Bkb3duVG9nZ2xlJDE7XG5leHBvcnRzLkZhZGUgPSBGYWRlO1xuZXhwb3J0cy5Gb3JtID0gRm9ybSQxO1xuZXhwb3J0cy5Gb3JtRmVlZGJhY2sgPSBGb3JtRmVlZGJhY2skMTtcbmV4cG9ydHMuRm9ybUdyb3VwID0gRm9ybUdyb3VwJDE7XG5leHBvcnRzLkZvcm1UZXh0ID0gRm9ybVRleHQkMTtcbmV4cG9ydHMuSW5wdXQgPSBJbnB1dCQxO1xuZXhwb3J0cy5JbnB1dEdyb3VwID0gSW5wdXRHcm91cCQxO1xuZXhwb3J0cy5JbnB1dEdyb3VwVGV4dCA9IElucHV0R3JvdXBUZXh0JDE7XG5leHBvcnRzLkxhYmVsID0gTGFiZWwkMTtcbmV4cG9ydHMuTGlzdCA9IExpc3QkMTtcbmV4cG9ydHMuTGlzdEdyb3VwID0gTGlzdEdyb3VwJDE7XG5leHBvcnRzLkxpc3RHcm91cEl0ZW0gPSBMaXN0R3JvdXBJdGVtJDE7XG5leHBvcnRzLkxpc3RHcm91cEl0ZW1IZWFkaW5nID0gTGlzdEdyb3VwSXRlbUhlYWRpbmckMTtcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbVRleHQgPSBMaXN0R3JvdXBJdGVtVGV4dCQxO1xuZXhwb3J0cy5MaXN0SW5saW5lSXRlbSA9IExpc3RJbmxpbmVJdGVtJDE7XG5leHBvcnRzLk1lZGlhID0gTWVkaWEkMTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbCQxO1xuZXhwb3J0cy5Nb2RhbEJvZHkgPSBNb2RhbEJvZHkkMTtcbmV4cG9ydHMuTW9kYWxGb290ZXIgPSBNb2RhbEZvb3RlciQxO1xuZXhwb3J0cy5Nb2RhbEhlYWRlciA9IE1vZGFsSGVhZGVyJDE7XG5leHBvcnRzLk5hdiA9IE5hdiQxO1xuZXhwb3J0cy5OYXZJdGVtID0gTmF2SXRlbSQxO1xuZXhwb3J0cy5OYXZMaW5rID0gTmF2TGluayQxO1xuZXhwb3J0cy5OYXZiYXIgPSBOYXZiYXIkMTtcbmV4cG9ydHMuTmF2YmFyQnJhbmQgPSBOYXZiYXJCcmFuZCQxO1xuZXhwb3J0cy5OYXZiYXJUZXh0ID0gTmF2YmFyVGV4dCQxO1xuZXhwb3J0cy5OYXZiYXJUb2dnbGVyID0gTmF2YmFyVG9nZ2xlciQxO1xuZXhwb3J0cy5PZmZjYW52YXMgPSBPZmZjYW52YXMkMTtcbmV4cG9ydHMuT2ZmY2FudmFzQm9keSA9IE9mZmNhbnZhc0JvZHkkMTtcbmV4cG9ydHMuT2ZmY2FudmFzSGVhZGVyID0gT2ZmY2FudmFzSGVhZGVyJDE7XG5leHBvcnRzLlBhZ2luYXRpb24gPSBQYWdpbmF0aW9uJDE7XG5leHBvcnRzLlBhZ2luYXRpb25JdGVtID0gUGFnaW5hdGlvbkl0ZW0kMTtcbmV4cG9ydHMuUGFnaW5hdGlvbkxpbmsgPSBQYWdpbmF0aW9uTGluayQxO1xuZXhwb3J0cy5QbGFjZWhvbGRlciA9IFBsYWNlaG9sZGVyJDE7XG5leHBvcnRzLlBsYWNlaG9sZGVyQnV0dG9uID0gUGxhY2Vob2xkZXJCdXR0b24kMTtcbmV4cG9ydHMuUG9seWZpbGwgPSBwb2x5ZmlsbDtcbmV4cG9ydHMuUG9wb3ZlciA9IFBvcG92ZXIkMTtcbmV4cG9ydHMuUG9wb3ZlckJvZHkgPSBQb3BvdmVyQm9keSQxO1xuZXhwb3J0cy5Qb3BvdmVySGVhZGVyID0gUG9wb3ZlckhlYWRlciQxO1xuZXhwb3J0cy5Qb3BwZXJDb250ZW50ID0gUG9wcGVyQ29udGVudCQxO1xuZXhwb3J0cy5Qb3BwZXJUYXJnZXRIZWxwZXIgPSBQb3BwZXJUYXJnZXRIZWxwZXIkMTtcbmV4cG9ydHMuUHJvZ3Jlc3MgPSBQcm9ncmVzcyQxO1xuZXhwb3J0cy5Sb3cgPSBSb3ckMTtcbmV4cG9ydHMuU3Bpbm5lciA9IFNwaW5uZXIkMTtcbmV4cG9ydHMuVGFiQ29udGVudCA9IFRhYkNvbnRlbnQkMTtcbmV4cG9ydHMuVGFiUGFuZSA9IFRhYlBhbmU7XG5leHBvcnRzLlRhYmxlID0gVGFibGUkMTtcbmV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbmV4cG9ydHMuVG9hc3RCb2R5ID0gVG9hc3RCb2R5JDE7XG5leHBvcnRzLlRvYXN0SGVhZGVyID0gVG9hc3RIZWFkZXIkMTtcbmV4cG9ydHMuVG9vbHRpcCA9IFRvb2x0aXAkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQWNjb3JkaW9uID0gVW5jb250cm9sbGVkQWNjb3JkaW9uJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZEFsZXJ0ID0gVW5jb250cm9sbGVkQWxlcnQkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24gPSBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bjtcbmV4cG9ydHMuVW5jb250cm9sbGVkQ2Fyb3VzZWwgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbCQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRDb2xsYXBzZSA9IFVuY29udHJvbGxlZENvbGxhcHNlJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZERyb3Bkb3duID0gVW5jb250cm9sbGVkRHJvcGRvd247XG5leHBvcnRzLlVuY29udHJvbGxlZFBvcG92ZXIgPSBVbmNvbnRyb2xsZWRQb3BvdmVyO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRUb29sdGlwID0gVW5jb250cm9sbGVkVG9vbHRpcDtcbmV4cG9ydHMuVXRpbCA9IHV0aWxzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RzdHJhcC5janMubWFwXG4iLCIvL2ltcG9ydHMgYXBpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vaW1wb3J0cyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcydcclxuXHJcbi8vaW1wb3J0cyBiaWJsaW90ZWNhc1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAncHJpbWVyZWFjdC9wYXNzd29yZCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAncHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXInO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuLy9pbXBvcnRzIHNlcnZpY2VzXHJcbmltcG9ydCB7IExvZ2luRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dpbkRhdGFTZXJ2aWNlJztcclxuXHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyBzaG93QnV0dG9uTG9naW5BY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2xvZ2luX2xvZ291dCc7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1hbmFnZXIgfSBmcm9tICdAY2hha3JhLXVpL2NvbG9yLW1vZGUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nQ3JlZGVudGlhbHMsIHNldExvYWRpbmdDcmVkZW50aWFsc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGFkb3NFcnJvTG9naW4sIHNldERhZG9zRXJyb0xvZ2luXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHJvdXRlci5hc1BhdGggPT09ICcvbG9naW4nICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgbG9nSW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgICAgIExvZ2luRGF0YVNlcnZpY2UubG9nSW4obG9naW4sIHBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID4gMzAwKXtcclxuICAgICAgICAgICAgICAgIHNldERhZG9zRXJyb0xvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsICdCZWFyZXIgJyArIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCdXR0b25Mb2dpbkFjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3Qgb25EaXNtaXNzID0gKCkgPT4gc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0X2xvZ2lufT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94X21lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgIDxBbGVydCBjb2xvcj1cImRhbmdlclwiIGlzT3Blbj17dmlzaWJsZX0gdG9nZ2xlPXtvbkRpc21pc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYWRvc0Vycm9Mb2dpbi5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0X2xvZ2luX25vX21lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94X2xvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9naW48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgdmFsdWU9e2xvZ2lufSBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFzc3dvcmQgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHRvZ2dsZU1hc2sgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkxvZ2luXCIgb25DbGljaz17bG9nSW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdDcmVkZW50aWFscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoTG9naW4pIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgxYDtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IExvZ2luRGF0YVNlcnZpY2UgPSB7XHJcbiAgICBsb2dJbixcclxuICAgIGxvZ091dCxcclxuICAgIGlzTG9nZ2VkLFxyXG4gICAgdmFsaWRhdGVUb2tlbixcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2dJbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIGxldCBkYXRhID0ge3VzZXJuYW1lLCBwYXNzd29yZH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGJhc2VVcmwrJy9hdXRoL3NpZ25pbicsIGRhdGEsIHt9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9nT3V0KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzTG9nZ2VkKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVG9rZW4oKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChiYXNlVXJsKycvYXV0aC92YWxpZGF0ZVRva2VuJywge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB0b2tlbjogdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSIsImV4cG9ydCBjb25zdCBTSE9XX0JVVFRPTl9MT0dJTiA9IFwiU0hPV19CVVRUT05fTE9HSU5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFTEVDVEVEX0RBVEEgPSBcIkxPQURfU0VMRUNURURfREFUQVwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTklNRV9MSVNUID0gXCJMT0FEX0FOSU1FX0xJU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRU5USVRZX1NFTEVDVEVEID0gXCJMT0FEX1VTRVJfRU5USVRZX1NFTEVDVEVEXCJcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9FTlRJVFlfTElTVCA9IFwiTE9BRF9VU0VSX0VOVElUWV9MSVNUXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9BQ0NFU1NfUFJPRklMRV9TRUxFQ1RFRCA9IFwiTE9BRF9BQ0NFU1NfUFJPRklMRV9TRUxFQ1RFRFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BQ0NFU1NfUFJPRklMRV9MSVNUID0gXCJMT0FEX0FDQ0VTU19QUk9GSUxFX0xJU1RcIlxyXG4iLCJpbXBvcnQgeyBTSE9XX0JVVFRPTl9MT0dJTiB9IGZyb20gXCIuLy4uLy4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93QnV0dG9uTG9naW5BY3Rpb24gPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogU0hPV19CVVRUT05fTE9HSU4sXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0X2xvZ2luXCI6IFwibG9naW5fbGF5b3V0X2xvZ2luX18xQXFFeVwiLFxuXHRcImxheW91dF9sb2dpbl9ub19tZXNzYWdlc1wiOiBcImxvZ2luX2xheW91dF9sb2dpbl9ub19tZXNzYWdlc19fMW1iSkdcIixcblx0XCJib3hfbG9naW5cIjogXCJsb2dpbl9ib3hfbG9naW5fXzEtNVVSXCIsXG5cdFwiYm94X21lc3NhZ2VzXCI6IFwibG9naW5fYm94X21lc3NhZ2VzX18yVWM5Z1wiLFxuXHRcInBhc3N3b3JkXCI6IFwibG9naW5fcGFzc3dvcmRfXzFaTUkxXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L3Bhc3N3b3JkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvcHJvZ3Jlc3NzcGlubmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9