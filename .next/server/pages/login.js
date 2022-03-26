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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/inputtext */ "primereact/inputtext");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/password */ "primereact/password");
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_password__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/button */ "primereact/button");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/progressspinner */ "primereact/progressspinner");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.cjs");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/toast */ "primereact/toast");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_LoginDataService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/LoginDataService */ "./services/LoginDataService.jsx");
/* harmony import */ var _store_actions_login_logout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/login_logout */ "./store/actions/login_logout/index.jsx");
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/color-mode */ "@chakra-ui/color-mode");
/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\login\\index.jsx";
//imports api



 //imports styles

 //imports bibliotecas






 //imports services

 //actions




function Login(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const toast = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: loadingCredentials,
    1: setLoadingCredentials
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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

  const {
    control,
    register,
    handleSubmit,
    setValue,
    errors,
    getValues
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    mode: 'onChange'
  });

  const onSubmit = data => {
    setLoadingCredentials(true);

    if (data.email !== "" && data.password !== "") {
      _services_LoginDataService__WEBPACK_IMPORTED_MODULE_12__["LoginDataService"].logIn(data.email, data.password).then(response => {
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
        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layout_login_no_messages,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            render: ({
              onBlur,
              onChange,
              value
            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], {
              id: "email",
              name: "email",
              onChange: e => handleInputEmailChange(e),
              value: value,
              placeholder: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 33
            }, this)
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
            render: ({
              onBlur,
              onChange,
              value
            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_password__WEBPACK_IMPORTED_MODULE_7__["Password"] // style={{ width: '100%', borderColor: errors.nome ? 'red' : '' }}
            , {
              id: "password",
              name: "password",
              onChange: e => handleInputPasswordChange(e),
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
            }, this)
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
        }, this)
      }, void 0, false, {
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

function logIn(email, password) {
  let data = {
    email,
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

/***/ "primereact/toast":
/*!***********************************!*\
  !*** external "primereact/toast" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primereact/toast");

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

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0c3RyYXAvZGlzdC9yZWFjdHN0cmFwLmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9sb2dpbl9sb2dvdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvY29sb3ItbW9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVyZWFjdC9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvcGFzc3dvcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L3Byb2dyZXNzc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvdG9hc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvYXN0IiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9hZGluZ0NyZWRlbnRpYWxzIiwic2V0TG9hZGluZ0NyZWRlbnRpYWxzIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUVmZmVjdCIsImFzUGF0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiaGFuZGxlSW5wdXRFbWFpbENoYW5nZSIsImUiLCJzZXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSW5wdXRQYXNzd29yZENoYW5nZSIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImdldFZhbHVlcyIsInVzZUZvcm0iLCJtb2RlIiwib25TdWJtaXQiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsInRoZW4iLCJyZXNwb25zZSIsImNvZGUiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwic2V0SXRlbSIsInRva2VuIiwic2hvd0J1dHRvbkxvZ2luQWN0aW9uIiwic3R5bGVzIiwibGF5b3V0X2xvZ2luIiwibGF5b3V0X2xvZ2luX25vX21lc3NhZ2VzIiwiYm94X2xvZ2luIiwidW5kZWZpbmVkIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImJhc2VVcmwiLCJsb2dPdXQiLCJpc0xvZ2dlZCIsInZhbGlkYXRlVG9rZW4iLCJheGlvcyIsInBvc3QiLCJyZW1vdmVJdGVtIiwiZ2V0IiwicGFyYW1zIiwiU0hPV19CVVRUT05fTE9HSU4iLCJMT0FEX1NFTEVDVEVEX0RBVEEiLCJMT0FEX0FOSU1FX0xJU1QiLCJMT0FEX1VTRVJfRU5USVRZX1NFTEVDVEVEIiwiTE9BRF9VU0VSX0VOVElUWV9MSVNUIiwiTE9BRF9BQ0NFU1NfUFJPRklMRV9TRUxFQ1RFRCIsIkxPQURfQUNDRVNTX1BST0ZJTEVfTElTVCIsInBheWxvYWQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLDhCQUFZO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDhCQUFZO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGtDQUFjO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyw0QkFBVztBQUNsQywyQkFBMkIsbUJBQU8sQ0FBQyxzREFBd0I7O0FBRTNELG9DQUFvQyw0REFBNEQsZ0JBQWdCOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0NBQWtDLG1DQUFtQztBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSx1QkFBdUIseUJBQXlCO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLHVKQUF1SixtQkFBbUI7QUFDL0s7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxrRkFBa0Ysb0JBQW9CO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELGdEQUFnRDtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7OztBQUc1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGtGQUFrRjtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVELHlEQUF5RCxnREFBZ0Q7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDREQUE0RCxtREFBbUQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7O0FBRWhFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HOztBQUVwRztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBLDBFQUEwRSxxQ0FBcUM7QUFDL0c7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixnQkFBZ0I7QUFDNUY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7O0FBRW5GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRix3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUscURBQXFEO0FBQ2hJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0VBQStFLHlEQUF5RDtBQUN4STtBQUNBO0FBQ0EsT0FBTzs7QUFFUCw4RUFBOEUsd0RBQXdEO0FBQ3RJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHdIQUF3SDtBQUN4SDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0VBQXdFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlIQUFpSDtBQUNqSDtBQUNBO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1RUFBdUU7QUFDNUU7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0I7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCO0FBQ3RFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBQQUEwUDs7QUFFMVA7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdDROQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUVsQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDQyxzREFBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJUCxNQUFNLENBQUNRLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixNQUF3QyxJQUExRSxFQUFnRjtBQUM1RVYsWUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxXQUFTQyxzQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0JDLFlBQVEsQ0FBQyxPQUFELEVBQVVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFuQixDQUFSO0FBQ0g7O0FBRUQsV0FBU0MseUJBQVQsQ0FBbUNKLENBQW5DLEVBQXNDO0FBQ2xDQyxZQUFRLENBQUMsVUFBRCxFQUFhRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBdEIsQ0FBUjtBQUNIOztBQUVELFFBQU07QUFBRUUsV0FBRjtBQUFXQyxZQUFYO0FBQXFCQyxnQkFBckI7QUFBbUNOLFlBQW5DO0FBQTZDTyxVQUE3QztBQUFxREM7QUFBckQsTUFBbUVDLCtEQUFPLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUFoRjs7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLElBQUksSUFBSTtBQUNyQnZCLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7O0FBQ0EsUUFBSXVCLElBQUksQ0FBQ0MsS0FBTCxLQUFlLEVBQWYsSUFBcUJELElBQUksQ0FBQ0UsUUFBTCxLQUFrQixFQUEzQyxFQUErQztBQUMzQ0Msa0ZBQWdCLENBQUNDLEtBQWpCLENBQXVCSixJQUFJLENBQUNDLEtBQTVCLEVBQW1DRCxJQUFJLENBQUNFLFFBQXhDLEVBQWtERyxJQUFsRCxDQUF1REMsUUFBUSxJQUFJO0FBQy9ELFlBQUlBLFFBQVEsQ0FBQ04sSUFBVCxDQUFjTyxJQUFkLEdBQXFCLEdBQXpCLEVBQThCO0FBQzFCbkMsZUFBSyxDQUFDb0MsT0FBTixDQUFjQyxJQUFkLENBQW1CO0FBQUVDLG9CQUFRLEVBQUUsTUFBWjtBQUFvQkMsbUJBQU8sRUFBRSxPQUE3QjtBQUFzQ0Msa0JBQU0sRUFBRU4sUUFBUSxDQUFDTixJQUFULENBQWNhLE9BQTVEO0FBQXFFQyxnQkFBSSxFQUFFO0FBQTNFLFdBQW5CO0FBQ0FsQyxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBSCwrQkFBcUIsQ0FBQyxLQUFELENBQXJCO0FBQ0gsU0FKRCxNQUlPO0FBQ0hHLG9CQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FHLHNCQUFZLENBQUNnQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DLFlBQVlULFFBQVEsQ0FBQ04sSUFBVCxDQUFjZ0IsS0FBOUQ7QUFDQXZDLCtCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQVAsa0JBQVEsQ0FBQytDLDBGQUFxQixDQUFDLEtBQUQsQ0FBdEIsQ0FBUjtBQUNBM0MsZ0JBQU0sQ0FBQ1csSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLE9BWkQ7QUFhSCxLQWRELE1BY087QUFDSGIsV0FBSyxDQUFDb0MsT0FBTixDQUFjQyxJQUFkLENBQW1CO0FBQUVDLGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsZUFBTyxFQUFFLE9BQTdCO0FBQXNDQyxjQUFNLEVBQUUsb0NBQTlDO0FBQW9GRSxZQUFJLEVBQUU7QUFBMUYsT0FBbkI7QUFDQXJDLDJCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDSDtBQUNKLEdBcEJEOztBQXNCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXlDLCtEQUFNLENBQUNDLFlBQXZCO0FBQUEsMkJBQ0k7QUFBTSxjQUFRLEVBQUV6QixZQUFZLENBQUNLLFFBQUQsQ0FBNUI7QUFBQSw4QkFDSSxxRUFBQyx1REFBRDtBQUFPLFdBQUcsRUFBRTNCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFOEMsK0RBQU0sQ0FBQ0Usd0JBQXZCO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFFRiwrREFBTSxDQUFDRyxTQUF2QjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsMERBQUQ7QUFDSSxtQkFBTyxFQUFFN0IsT0FEYjtBQUVJLGdCQUFJLEVBQUMsT0FGVDtBQUdJLHdCQUFZLEVBQUU4QixTQUhsQjtBQUlJLGlCQUFLLEVBQUU7QUFDSEMsc0JBQVEsRUFBRSxJQURQO0FBQ2FDLHVCQUFTLEVBQUU7QUFEeEIsYUFKWDtBQU9JLGtCQUFNLEVBQUUsQ0FBQztBQUFFQyxvQkFBRjtBQUFVQyxzQkFBVjtBQUFvQnBDO0FBQXBCLGFBQUQsa0JBQ0oscUVBQUMsOERBQUQ7QUFDSSxnQkFBRSxFQUFDLE9BRFA7QUFFSSxrQkFBSSxFQUFDLE9BRlQ7QUFHSSxzQkFBUSxFQUFHSCxDQUFELElBQU9ELHNCQUFzQixDQUFDQyxDQUFELENBSDNDO0FBSUksbUJBQUssRUFBRUcsS0FKWDtBQUtJLHlCQUFXLEVBQUM7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFvQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJKLGVBcUJJLHFFQUFDLDBEQUFEO0FBQ0ksbUJBQU8sRUFBRUUsT0FEYjtBQUVJLGdCQUFJLEVBQUMsVUFGVDtBQUdJLHdCQUFZLEVBQUU4QixTQUhsQjtBQUlJLGlCQUFLLEVBQUU7QUFDSEMsc0JBQVEsRUFBRSxJQURQO0FBQ2FDLHVCQUFTLEVBQUU7QUFEeEIsYUFKWDtBQU9JLGtCQUFNLEVBQUUsQ0FBQztBQUFFQyxvQkFBRjtBQUFVQyxzQkFBVjtBQUFvQnBDO0FBQXBCLGFBQUQsa0JBQ0oscUVBQUMsNERBQUQsQ0FDSTtBQURKO0FBRUksZ0JBQUUsRUFBQyxVQUZQO0FBR0ksa0JBQUksRUFBQyxVQUhUO0FBSUksc0JBQVEsRUFBR0gsQ0FBRCxJQUFPSSx5QkFBeUIsQ0FBQ0osQ0FBRCxDQUo5QztBQUtJLG1CQUFLLEVBQUVHLEtBTFg7QUFNSSx5QkFBVyxFQUFDLE9BTmhCO0FBT0ksd0JBQVUsTUFQZDtBQVFJLHVCQUFTLEVBQUMsT0FSZDtBQVNJLHlCQUFXLEVBQUMsVUFUaEI7QUFVSSx5QkFBVyxFQUFDLE9BVmhCO0FBV0kseUJBQVcsRUFBQyw2QkFYaEI7QUFZSSwwQkFBWSxFQUFDO0FBWmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCSixlQTZDSSxxRUFBQyx3REFBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBSyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0NKLEVBOENLZCxrQkFBa0IsaUJBQ2YscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJESDs7QUFFZVIsb0VBQWhCLEU7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTTJELE9BQU8sR0FBSSx1QkFBakI7QUFFUyxNQUFNeEIsZ0JBQWdCLEdBQUc7QUFDOUJDLE9BRDhCO0FBRTlCd0IsUUFGOEI7QUFHOUJDLFVBSDhCO0FBSTlCQztBQUo4QixDQUF6Qjs7QUFPUCxTQUFTMUIsS0FBVCxDQUFlSCxLQUFmLEVBQXNCQyxRQUF0QixFQUFnQztBQUM5QixNQUFJRixJQUFJLEdBQUc7QUFBQ0MsU0FBRDtBQUFRQztBQUFSLEdBQVg7QUFDQSxTQUFPNkIsNENBQUssQ0FBQ0MsSUFBTixDQUFXTCxPQUFPLEdBQUMsY0FBbkIsRUFBbUMzQixJQUFuQyxFQUF5QyxFQUF6QyxDQUFQO0FBQ0Q7O0FBRUQsU0FBUzRCLE1BQVQsR0FBa0I7QUFDaEIsUUFBTXRELE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQVEsY0FBWSxDQUFDa0QsVUFBYixDQUF3QixhQUF4QjtBQUNBM0QsUUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjtBQUNEOztBQUVELFNBQVM0QyxRQUFULEdBQW9CO0FBQ2xCLFFBQU1iLEtBQUssR0FBR2pDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQUFkO0FBQ0EsU0FBT2dDLEtBQVA7QUFDRDs7QUFFRCxTQUFTYyxhQUFULEdBQXlCO0FBQ3ZCLFFBQU1kLEtBQUssR0FBR2pDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQUFkO0FBQ0EsU0FBTytDLDRDQUFLLENBQUNHLEdBQU4sQ0FBVVAsT0FBTyxHQUFDLHFCQUFsQixFQUF5QztBQUM5Q1EsVUFBTSxFQUFFO0FBQ05uQixXQUFLLEVBQUVBO0FBREQ7QUFEc0MsR0FBekMsQ0FBUDtBQUtELEM7Ozs7Ozs7Ozs7OztBQ25DSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTW9CLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakMsQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNekIscUJBQXFCLEdBQUcwQixPQUFPLEtBQUs7QUFDL0NDLE1BQUksRUFBRVIsMERBRHlDO0FBRS9DTztBQUYrQyxDQUFMLENBQXJDLEM7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luL2luZGV4LmpzeFwiKTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgcmVhY3RQb3BwZXIgPSByZXF1aXJlKCdyZWFjdC1wb3BwZXInKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHJlYWN0VHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdCk7XG52YXIgUHJvcFR5cGVzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShQcm9wVHlwZXMpO1xudmFyIGNsYXNzTmFtZXNfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KGNsYXNzTmFtZXMpO1xudmFyIFJlYWN0RE9NX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdERPTSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG5cbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyAubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUgc3R5bGVzIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LjAuMC1hbHBoYS40L3Njc3MvX21vZGFsLnNjc3MjTDEwNi1MMTEzXG5cbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufVxuZnVuY3Rpb24gc2V0U2Nyb2xsYmFyV2lkdGgocGFkZGluZykge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPiAwID8gcGFkZGluZyArIFwicHhcIiA6IG51bGw7XG59XG5mdW5jdGlvbiBpc0JvZHlPdmVyZmxvd2luZygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbn1cbmZ1bmN0aW9uIGdldE9yaWdpbmFsQm9keVBhZGRpbmcoKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksIG51bGwpO1xuICByZXR1cm4gcGFyc2VJbnQoc3R5bGUgJiYgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKSB7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LjAuMC1hbHBoYS42L2pzL3NyYy9tb2RhbC5qcyNMNDMzXG5cbiAgdmFyIGZpeGVkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnKVswXTtcbiAgdmFyIGJvZHlQYWRkaW5nID0gZml4ZWRDb250ZW50ID8gcGFyc2VJbnQoZml4ZWRDb250ZW50LnN0eWxlLnBhZGRpbmdSaWdodCB8fCAwLCAxMCkgOiAwO1xuXG4gIGlmIChpc0JvZHlPdmVyZmxvd2luZygpKSB7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgoYm9keVBhZGRpbmcgKyBzY3JvbGxiYXJXaWR0aCk7XG4gIH1cbn1cbnZhciBnbG9iYWxDc3NNb2R1bGU7XG5mdW5jdGlvbiBzZXRHbG9iYWxDc3NNb2R1bGUoY3NzTW9kdWxlKSB7XG4gIGdsb2JhbENzc01vZHVsZSA9IGNzc01vZHVsZTtcbn1cbmZ1bmN0aW9uIG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWUsIGNzc01vZHVsZSkge1xuICBpZiAoY2xhc3NOYW1lID09PSB2b2lkIDApIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuXG4gIGlmIChjc3NNb2R1bGUgPT09IHZvaWQgMCkge1xuICAgIGNzc01vZHVsZSA9IGdsb2JhbENzc01vZHVsZTtcbiAgfVxuXG4gIGlmICghY3NzTW9kdWxlKSByZXR1cm4gY2xhc3NOYW1lO1xuICByZXR1cm4gY2xhc3NOYW1lLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGNzc01vZHVsZVtjXSB8fCBjO1xuICB9KS5qb2luKCcgJyk7XG59XG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIGBvYmpgIHRoYXQgYXJlIG5vdCBpbiB0aGUgYXJyYXkgYG9taXRLZXlzYC5cbiAqL1xuXG5mdW5jdGlvbiBvbWl0KG9iaiwgb21pdEtleXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvbWl0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgYSBmaWx0ZXJlZCBjb3B5IG9mIGFuIG9iamVjdCB3aXRoIG9ubHkgdGhlIHNwZWNpZmllZCBrZXlzLlxuICovXG5cbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHZhciBwaWNrS2V5cyA9IEFycmF5LmlzQXJyYXkoa2V5cykgPyBrZXlzIDogW2tleXNdO1xuICB2YXIgbGVuZ3RoID0gcGlja0tleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICBsZW5ndGggLT0gMTtcbiAgICBrZXkgPSBwaWNrS2V5c1tsZW5ndGhdO1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxudmFyIHdhcm5lZCA9IHt9O1xuZnVuY3Rpb24gd2Fybk9uY2UobWVzc2FnZSkge1xuICBpZiAoIXdhcm5lZFttZXNzYWdlXSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgd2FybmVkW21lc3NhZ2VdID0gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gZGVwcmVjYXRlZChwcm9wVHlwZSwgZXhwbGFuYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT09IG51bGwgJiYgdHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdhcm5PbmNlKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgcHJvcGVydHkgb2YgXFxcIlwiICsgY29tcG9uZW50TmFtZSArIFwiXFxcIiBoYXMgYmVlbiBkZXByZWNhdGVkLlxcblwiICsgZXhwbGFuYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMykpKTtcbiAgfTtcbn0gLy8gU2hpbSBFbGVtZW50IGlmIG5lZWRlZCAoZS5nLiBpbiBOb2RlIGVudmlyb25tZW50KVxuXG52YXIgRWxlbWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5FbGVtZW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG5mdW5jdGlvbiBET01FbGVtZW50KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuIEV4cGVjdGVkIHByb3AgdG8gYmUgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudC4gVmFsaWRhdGlvbiBmYWlsZWQuJyk7XG4gIH1cbn1cbnZhciB0YXJnZXRQcm9wVHlwZSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBET01FbGVtZW50LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgY3VycmVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn0pXSk7XG52YXIgdGFnUHJvcFR5cGUgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICQkdHlwZW9mOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN5bWJvbCxcbiAgcmVuZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn0pLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAkJHR5cGVvZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zeW1ib2wsXG4gIHJlbmRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59KV0pKV0pO1xuLyogZXNsaW50IGtleS1zcGFjaW5nOiBbXCJlcnJvclwiLCB7IGFmdGVyQ29sb246IHRydWUsIGFsaWduOiBcInZhbHVlXCIgfV0gKi9cbi8vIFRoZXNlIGFyZSBhbGwgc2V0dXAgdG8gbWF0Y2ggd2hhdCBpcyBpbiB0aGUgYm9vdHN0cmFwIF92YXJpYWJsZXMuc2Nzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvdjQtZGV2L3Njc3MvX3ZhcmlhYmxlcy5zY3NzXG5cbnZhciBUcmFuc2l0aW9uVGltZW91dHMgPSB7XG4gIEZhZGU6IDE1MCxcbiAgLy8gJHRyYW5zaXRpb24tZmFkZVxuICBDb2xsYXBzZTogMzUwLFxuICAvLyAkdHJhbnNpdGlvbi1jb2xsYXBzZVxuICBNb2RhbDogMzAwLFxuICAvLyAkbW9kYWwtdHJhbnNpdGlvblxuICBDYXJvdXNlbDogNjAwLFxuICAvLyAkY2Fyb3VzZWwtdHJhbnNpdGlvblxuICBPZmZjYW52YXM6IDMwMCAvLyAkb2ZmY2FudmFzLXRyYW5zaXRpb25cblxufTsgLy8gRHVwbGljYXRlZCBUcmFuc2l0aW9uLnByb3BUeXBlIGtleXMgdG8gZW5zdXJlIHRoYXQgUmVhY3RzdHJhcCBidWlsZHNcbi8vIGZvciBkaXN0cmlidXRpb24gcHJvcGVybHkgZXhjbHVkZSB0aGVzZSBrZXlzIGZvciBuZXN0ZWQgY2hpbGQgSFRNTCBhdHRyaWJ1dGVzXG4vLyBzaW5jZSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cGAgcmVtb3ZlcyBwcm9wVHlwZXMgaW4gcHJvZHVjdGlvbiBidWlsZHMuXG5cbnZhciBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzID0gWydpbicsICdtb3VudE9uRW50ZXInLCAndW5tb3VudE9uRXhpdCcsICdhcHBlYXInLCAnZW50ZXInLCAnZXhpdCcsICd0aW1lb3V0JywgJ29uRW50ZXInLCAnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCddO1xudmFyIFRyYW5zaXRpb25TdGF0dXNlcyA9IHtcbiAgRU5URVJJTkc6ICdlbnRlcmluZycsXG4gIEVOVEVSRUQ6ICdlbnRlcmVkJyxcbiAgRVhJVElORzogJ2V4aXRpbmcnLFxuICBFWElURUQ6ICdleGl0ZWQnXG59O1xudmFyIGtleUNvZGVzID0ge1xuICBlc2M6IDI3LFxuICBzcGFjZTogMzIsXG4gIGVudGVyOiAxMyxcbiAgdGFiOiA5LFxuICB1cDogMzgsXG4gIGRvd246IDQwLFxuICBob21lOiAzNixcbiAgZW5kOiAzNSxcbiAgbjogNzgsXG4gIHA6IDgwXG59O1xudmFyIFBvcHBlclBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZnVuY3Rpb24gaXNSZWFjdFJlZk9iaih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnY3VycmVudCcgaW4gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICdbb2JqZWN0IFVuZGVmaW5lZF0nIDogJ1tvYmplY3QgTnVsbF0nO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICB2YXIgTkFOID0gMCAvIDA7XG5cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdzeW1ib2wnIHx8IHR5cGUgPT09ICdvYmplY3QnICYmIGdldFRhZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gXCJcIiArIG90aGVyIDogb3RoZXI7XG4gIH1cblxuICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB2YXIgaXNCaW5hcnkgPSAvXjBiWzAxXSskL2kudGVzdCh2YWx1ZSk7XG4gIHJldHVybiBpc0JpbmFyeSB8fCAvXjBvWzAtN10rJC9pLnRlc3QodmFsdWUpID8gcGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpIDogL15bLStdMHhbMC05YS1mXSskL2kudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWU7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHRhZyA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nIHx8IHRhZyA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IFByb3h5XSc7XG59XG5mdW5jdGlvbiBmaW5kRE9NRWxlbWVudHModGFyZ2V0KSB7XG4gIGlmIChpc1JlYWN0UmVmT2JqKHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmN1cnJlbnQ7XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbih0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldCgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIGNhblVzZURPTSkge1xuICAgIHZhciBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG5cbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjXCIgKyB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHRhcmdldCAnXCIgKyB0YXJnZXQgKyBcIicgY291bGQgbm90IGJlIGlkZW50aWZpZWQgaW4gdGhlIGRvbSwgdGlwOiBjaGVjayBzcGVsbGluZ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIGlzQXJyYXlPck5vZGVMaXN0KGVscykge1xuICBpZiAoZWxzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZWxzKSB8fCBjYW5Vc2VET00gJiYgdHlwZW9mIGVscy5sZW5ndGggPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCwgYWxsRWxlbWVudHMpIHtcbiAgdmFyIGVscyA9IGZpbmRET01FbGVtZW50cyh0YXJnZXQpO1xuXG4gIGlmIChhbGxFbGVtZW50cykge1xuICAgIGlmIChpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgICByZXR1cm4gZWxzO1xuICAgIH1cblxuICAgIGlmIChlbHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2Vsc107XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQXJyYXlPck5vZGVMaXN0KGVscykpIHtcbiAgICAgIHJldHVybiBlbHNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVscztcbiAgfVxufVxudmFyIGRlZmF1bHRUb2dnbGVFdmVudHMgPSBbJ3RvdWNoc3RhcnQnLCAnY2xpY2snXTtcbmZ1bmN0aW9uIGFkZE11bHRpcGxlRXZlbnRMaXN0ZW5lcnMoX2VscywgaGFuZGxlciwgX2V2ZW50cywgdXNlQ2FwdHVyZSkge1xuICB2YXIgZWxzID0gX2VscztcblxuICBpZiAoIWlzQXJyYXlPck5vZGVMaXN0KGVscykpIHtcbiAgICBlbHMgPSBbZWxzXTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBfZXZlbnRzO1xuXG4gIGlmICh0eXBlb2YgZXZlbnRzID09PSAnc3RyaW5nJykge1xuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgvXFxzKy8pO1xuICB9XG5cbiAgaWYgKCFpc0FycmF5T3JOb2RlTGlzdChlbHMpIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nIHx8ICFBcnJheS5pc0FycmF5KGV2ZW50cykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBUaGUgZmlyc3QgYXJndW1lbnQgb2YgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIERPTSBub2RlIG9yIGFuIGFycmF5IG9uIERPTSBub2RlcyBvciBOb2RlTGlzdC5cXG4gICAgICBUaGUgc2Vjb25kIG11c3QgYmUgYSBmdW5jdGlvbi5cXG4gICAgICBUaGUgdGhpcmQgaXMgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHJlcHJlc2VudHMgRE9NIGV2ZW50c1xcbiAgICBcIik7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbHMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cbnZhciBmb2N1c2FibGVFbGVtZW50cyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9aGlkZGVuXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdvYmplY3QnLCAnZW1iZWQnLCAnW3RhYmluZGV4XTpub3QoLm1vZGFsKScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJ107XG5cbnZhciB1dGlscyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRTY3JvbGxiYXJXaWR0aDogZ2V0U2Nyb2xsYmFyV2lkdGgsXG4gIHNldFNjcm9sbGJhcldpZHRoOiBzZXRTY3JvbGxiYXJXaWR0aCxcbiAgaXNCb2R5T3ZlcmZsb3dpbmc6IGlzQm9keU92ZXJmbG93aW5nLFxuICBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nOiBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nLFxuICBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyOiBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyLFxuICBzZXRHbG9iYWxDc3NNb2R1bGU6IHNldEdsb2JhbENzc01vZHVsZSxcbiAgbWFwVG9Dc3NNb2R1bGVzOiBtYXBUb0Nzc01vZHVsZXMsXG4gIG9taXQ6IG9taXQsXG4gIHBpY2s6IHBpY2ssXG4gIHdhcm5PbmNlOiB3YXJuT25jZSxcbiAgZGVwcmVjYXRlZDogZGVwcmVjYXRlZCxcbiAgRE9NRWxlbWVudDogRE9NRWxlbWVudCxcbiAgdGFyZ2V0UHJvcFR5cGU6IHRhcmdldFByb3BUeXBlLFxuICB0YWdQcm9wVHlwZTogdGFnUHJvcFR5cGUsXG4gIFRyYW5zaXRpb25UaW1lb3V0czogVHJhbnNpdGlvblRpbWVvdXRzLFxuICBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzOiBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzLFxuICBUcmFuc2l0aW9uU3RhdHVzZXM6IFRyYW5zaXRpb25TdGF0dXNlcyxcbiAga2V5Q29kZXM6IGtleUNvZGVzLFxuICBQb3BwZXJQbGFjZW1lbnRzOiBQb3BwZXJQbGFjZW1lbnRzLFxuICBjYW5Vc2VET006IGNhblVzZURPTSxcbiAgaXNSZWFjdFJlZk9iajogaXNSZWFjdFJlZk9iaixcbiAgdG9OdW1iZXI6IHRvTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGZpbmRET01FbGVtZW50czogZmluZERPTUVsZW1lbnRzLFxuICBpc0FycmF5T3JOb2RlTGlzdDogaXNBcnJheU9yTm9kZUxpc3QsXG4gIGdldFRhcmdldDogZ2V0VGFyZ2V0LFxuICBkZWZhdWx0VG9nZ2xlRXZlbnRzOiBkZWZhdWx0VG9nZ2xlRXZlbnRzLFxuICBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzOiBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzLFxuICBmb2N1c2FibGVFbGVtZW50czogZm9jdXNhYmxlRWxlbWVudHNcbn07XG5cbnZhciBfZXhjbHVkZWQkMWUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJmbHVpZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWsgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGZsdWlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxaSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENvbnRhaW5lciA9IGZ1bmN0aW9uIENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZmx1aWQgPSBwcm9wcy5mbHVpZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFlKTtcblxuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyJztcblxuICBpZiAoZmx1aWQgPT09IHRydWUpIHtcbiAgICBjb250YWluZXJDbGFzcyA9ICdjb250YWluZXItZmx1aWQnO1xuICB9IGVsc2UgaWYgKGZsdWlkKSB7XG4gICAgY29udGFpbmVyQ2xhc3MgPSBcImNvbnRhaW5lci1cIiArIGZsdWlkO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb250YWluZXJDbGFzcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Db250YWluZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFrO1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxaTtcbnZhciBDb250YWluZXIkMSA9IENvbnRhaW5lcjtcblxudmFyIF9leGNsdWRlZCQxZCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcIm5vR3V0dGVyc1wiLCBcInRhZ1wiLCBcImZvcm1cIiwgXCJ3aWR0aHNcIl07XG52YXIgcm93Q29sV2lkdGhzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXTtcbnZhciByb3dDb2xzUHJvcFR5cGUgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSk7XG52YXIgcHJvcFR5cGVzJDFqID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBub0d1dHRlcnM6IGRlcHJlY2F0ZWQoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBcIlBsZWFzZSB1c2UgQm9vdHN0cmFwIDUgZ3V0dGVyIHV0aWxpdHkgY2xhc3Nlcy4gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4wL2xheW91dC9ndXR0ZXJzL1wiKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZm9ybTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB4czogcm93Q29sc1Byb3BUeXBlLFxuICBzbTogcm93Q29sc1Byb3BUeXBlLFxuICBtZDogcm93Q29sc1Byb3BUeXBlLFxuICBsZzogcm93Q29sc1Byb3BUeXBlLFxuICB4bDogcm93Q29sc1Byb3BUeXBlLFxuICB4eGw6IHJvd0NvbHNQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWggPSB7XG4gIHRhZzogJ2RpdicsXG4gIHdpZHRoczogcm93Q29sV2lkdGhzXG59O1xuXG52YXIgUm93ID0gZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBub0d1dHRlcnMgPSBwcm9wcy5ub0d1dHRlcnMsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBmb3JtID0gcHJvcHMuZm9ybSxcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFkKTtcblxuICB2YXIgY29sQ2xhc3NlcyA9IFtdO1xuICB3aWR0aHMuZm9yRWFjaChmdW5jdGlvbiAoY29sV2lkdGgsIGkpIHtcbiAgICB2YXIgY29sU2l6ZSA9IHByb3BzW2NvbFdpZHRoXTtcbiAgICBkZWxldGUgYXR0cmlidXRlc1tjb2xXaWR0aF07XG5cbiAgICBpZiAoIWNvbFNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNYcyA9ICFpO1xuICAgIGNvbENsYXNzZXMucHVzaChpc1hzID8gXCJyb3ctY29scy1cIiArIGNvbFNpemUgOiBcInJvdy1jb2xzLVwiICsgY29sV2lkdGggKyBcIi1cIiArIGNvbFNpemUpO1xuICB9KTtcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBub0d1dHRlcnMgPyAnZ3gtMCcgOiBudWxsLCBmb3JtID8gJ2Zvcm0tcm93JyA6ICdyb3cnLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblJvdy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWo7XG5Sb3cuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFoO1xudmFyIFJvdyQxID0gUm93O1xuXG52YXIgX2V4Y2x1ZGVkJDFjID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwid2lkdGhzXCIsIFwidGFnXCJdO1xudmFyIGNvbFdpZHRocyQxID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXTtcbnZhciBzdHJpbmdPck51bWJlclByb3AkMSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKTtcbnZhciBjb2x1bW5Qcm9wcyQxID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIG9yZGVyOiBzdHJpbmdPck51bWJlclByb3AkMSxcbiAgb2Zmc2V0OiBzdHJpbmdPck51bWJlclByb3AkMVxufSldKTtcbnZhciBwcm9wVHlwZXMkMWkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHhzOiBjb2x1bW5Qcm9wcyQxLFxuICBzbTogY29sdW1uUHJvcHMkMSxcbiAgbWQ6IGNvbHVtblByb3BzJDEsXG4gIGxnOiBjb2x1bW5Qcm9wcyQxLFxuICB4bDogY29sdW1uUHJvcHMkMSxcbiAgeHhsOiBjb2x1bW5Qcm9wcyQxLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB3aWR0aHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlcbn07XG52YXIgZGVmYXVsdFByb3BzJDFnID0ge1xuICB0YWc6ICdkaXYnLFxuICB3aWR0aHM6IGNvbFdpZHRocyQxXG59O1xuXG52YXIgZ2V0Q29sdW1uU2l6ZUNsYXNzJDEgPSBmdW5jdGlvbiBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbFNpemUpIHtcbiAgaWYgKGNvbFNpemUgPT09IHRydWUgfHwgY29sU2l6ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wnIDogXCJjb2wtXCIgKyBjb2xXaWR0aDtcbiAgfSBlbHNlIGlmIChjb2xTaXplID09PSAnYXV0bycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wtYXV0bycgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItYXV0b1wiO1xuICB9XG5cbiAgcmV0dXJuIGlzWHMgPyBcImNvbC1cIiArIGNvbFNpemUgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItXCIgKyBjb2xTaXplO1xufTtcblxudmFyIGdldENvbHVtbkNsYXNzZXMgPSBmdW5jdGlvbiBnZXRDb2x1bW5DbGFzc2VzKGF0dHJpYnV0ZXMsIGNzc01vZHVsZSwgd2lkdGhzKSB7XG4gIGlmICh3aWR0aHMgPT09IHZvaWQgMCkge1xuICAgIHdpZHRocyA9IGNvbFdpZHRocyQxO1xuICB9XG5cbiAgdmFyIGNvbENsYXNzZXMgPSBbXTtcbiAgd2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKGNvbFdpZHRoLCBpKSB7XG4gICAgdmFyIGNvbHVtblByb3AgPSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcbiAgICBkZWxldGUgYXR0cmlidXRlc1tjb2xXaWR0aF07XG5cbiAgICBpZiAoIWNvbHVtblByb3AgJiYgY29sdW1uUHJvcCAhPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNYcyA9ICFpO1xuXG4gICAgaWYgKGlzT2JqZWN0KGNvbHVtblByb3ApKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBjb2xTaXplSW50ZXJmaXggPSBpc1hzID8gJy0nIDogXCItXCIgKyBjb2xXaWR0aCArIFwiLVwiO1xuICAgICAgdmFyIGNvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzJDEoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3Auc2l6ZSk7XG4gICAgICBjb2xDbGFzc2VzLnB1c2gobWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tjb2xDbGFzc10gPSBjb2x1bW5Qcm9wLnNpemUgfHwgY29sdW1uUHJvcC5zaXplID09PSAnJywgX2NsYXNzTmFtZXNbXCJvcmRlclwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vcmRlcl0gPSBjb2x1bW5Qcm9wLm9yZGVyIHx8IGNvbHVtblByb3Aub3JkZXIgPT09IDAsIF9jbGFzc05hbWVzW1wib2Zmc2V0XCIgKyBjb2xTaXplSW50ZXJmaXggKyBjb2x1bW5Qcm9wLm9mZnNldF0gPSBjb2x1bW5Qcm9wLm9mZnNldCB8fCBjb2x1bW5Qcm9wLm9mZnNldCA9PT0gMCwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfY29sQ2xhc3MgPSBnZXRDb2x1bW5TaXplQ2xhc3MkMShpc1hzLCBjb2xXaWR0aCwgY29sdW1uUHJvcCk7XG5cbiAgICAgIGNvbENsYXNzZXMucHVzaChfY29sQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY29sQ2xhc3NlczogY29sQ2xhc3NlcyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59O1xuXG52YXIgQ29sID0gZnVuY3Rpb24gQ29sKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYyk7XG5cbiAgdmFyIF9nZXRDb2x1bW5DbGFzc2VzID0gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUsIHdpZHRocyksXG4gICAgICBtb2RpZmllZEF0dHJpYnV0ZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5hdHRyaWJ1dGVzLFxuICAgICAgY29sQ2xhc3NlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmNvbENsYXNzZXM7XG5cbiAgaWYgKCFjb2xDbGFzc2VzLmxlbmd0aCkge1xuICAgIGNvbENsYXNzZXMucHVzaCgnY29sJyk7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNvbENsYXNzZXMpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Db2wucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFpO1xuQ29sLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZztcbnZhciBDb2wkMSA9IENvbDtcblxudmFyIF9leGNsdWRlZCQxYiA9IFtcImV4cGFuZFwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImxpZ2h0XCIsIFwiZGFya1wiLCBcImZpeGVkXCIsIFwic3RpY2t5XCIsIFwiY29sb3JcIiwgXCJjb250YWluZXJcIiwgXCJ0YWdcIiwgXCJjaGlsZHJlblwiXTtcbnZhciBwcm9wVHlwZXMkMWggPSB7XG4gIGxpZ2h0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRhcms6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZnVsbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmaXhlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHN0aWNreTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZXhwYW5kOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxZiA9IHtcbiAgdGFnOiAnbmF2JyxcbiAgZXhwYW5kOiBmYWxzZSxcbiAgY29udGFpbmVyOiAnZmx1aWQnXG59O1xuXG52YXIgZ2V0RXhwYW5kQ2xhc3MgPSBmdW5jdGlvbiBnZXRFeHBhbmRDbGFzcyhleHBhbmQpIHtcbiAgaWYgKGV4cGFuZCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZXhwYW5kID09PSB0cnVlIHx8IGV4cGFuZCA9PT0gJ3hzJykge1xuICAgIHJldHVybiAnbmF2YmFyLWV4cGFuZCc7XG4gIH1cblxuICByZXR1cm4gXCJuYXZiYXItZXhwYW5kLVwiICsgZXhwYW5kO1xufTtcblxudmFyIE5hdmJhciA9IGZ1bmN0aW9uIE5hdmJhcihwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGV4cGFuZCA9IHByb3BzLmV4cGFuZCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGxpZ2h0ID0gcHJvcHMubGlnaHQsXG4gICAgICBkYXJrID0gcHJvcHMuZGFyayxcbiAgICAgIGZpeGVkID0gcHJvcHMuZml4ZWQsXG4gICAgICBzdGlja3kgPSBwcm9wcy5zdGlja3ksXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFiKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXInLCBnZXRFeHBhbmRDbGFzcyhleHBhbmQpLCAoX2NsYXNzTmFtZXMgPSB7XG4gICAgJ25hdmJhci1saWdodCc6IGxpZ2h0LFxuICAgICduYXZiYXItZGFyayc6IGRhcmtcbiAgfSwgX2NsYXNzTmFtZXNbXCJiZy1cIiArIGNvbG9yXSA9IGNvbG9yLCBfY2xhc3NOYW1lc1tcImZpeGVkLVwiICsgZml4ZWRdID0gZml4ZWQsIF9jbGFzc05hbWVzW1wic3RpY2t5LVwiICsgc3RpY2t5XSA9IHN0aWNreSwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGNvbnRhaW5lckNsYXNzID0gY29udGFpbmVyICYmIGNvbnRhaW5lciA9PT0gdHJ1ZSA/ICdjb250YWluZXInIDogXCJjb250YWluZXItXCIgKyBjb250YWluZXI7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY29udGFpbmVyID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzXG4gIH0sIGNoaWxkcmVuKSA6IGNoaWxkcmVuKTtcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWg7XG5OYXZiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFmO1xudmFyIE5hdmJhciQxID0gTmF2YmFyO1xuXG52YXIgX2V4Y2x1ZGVkJDFhID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWUgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgTmF2YmFyQnJhbmQgPSBmdW5jdGlvbiBOYXZiYXJCcmFuZChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWEpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhci1icmFuZCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTmF2YmFyQnJhbmQucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFnO1xuTmF2YmFyQnJhbmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFlO1xudmFyIE5hdmJhckJyYW5kJDEgPSBOYXZiYXJCcmFuZDtcblxudmFyIF9leGNsdWRlZCQxOSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWYgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFkID0ge1xuICB0YWc6ICdzcGFuJ1xufTtcblxudmFyIE5hdmJhclRleHQgPSBmdW5jdGlvbiBOYXZiYXJUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxOSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk5hdmJhclRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFmO1xuTmF2YmFyVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWQ7XG52YXIgTmF2YmFyVGV4dCQxID0gTmF2YmFyVGV4dDtcblxudmFyIF9leGNsdWRlZCQxOCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFjID0ge1xuICB0YWc6ICdidXR0b24nLFxuICB0eXBlOiAnYnV0dG9uJ1xufTtcblxudmFyIE5hdmJhclRvZ2dsZXIgPSBmdW5jdGlvbiBOYXZiYXJUb2dnbGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhci10b2dnbGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjaGlsZHJlbiB8fCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnbmF2YmFyLXRvZ2dsZXItaWNvbicsIGNzc01vZHVsZSlcbiAgfSkpO1xufTtcblxuTmF2YmFyVG9nZ2xlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWU7XG5OYXZiYXJUb2dnbGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxYztcbnZhciBOYXZiYXJUb2dnbGVyJDEgPSBOYXZiYXJUb2dnbGVyO1xuXG52YXIgX2V4Y2x1ZGVkJDE3ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFic1wiLCBcInBpbGxzXCIsIFwidmVydGljYWxcIiwgXCJob3Jpem9udGFsXCIsIFwianVzdGlmaWVkXCIsIFwiZmlsbFwiLCBcIm5hdmJhclwiLCBcImNhcmRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFkID0ge1xuICB0YWJzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHBpbGxzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAganVzdGlmaWVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZpbGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbmF2YmFyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNhcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWIgPSB7XG4gIHRhZzogJ3VsJyxcbiAgdmVydGljYWw6IGZhbHNlXG59O1xuXG52YXIgZ2V0VmVydGljYWxDbGFzcyA9IGZ1bmN0aW9uIGdldFZlcnRpY2FsQ2xhc3ModmVydGljYWwpIHtcbiAgaWYgKHZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSB8fCB2ZXJ0aWNhbCA9PT0gJ3hzJykge1xuICAgIHJldHVybiAnZmxleC1jb2x1bW4nO1xuICB9XG5cbiAgcmV0dXJuIFwiZmxleC1cIiArIHZlcnRpY2FsICsgXCItY29sdW1uXCI7XG59O1xuXG52YXIgTmF2ID0gZnVuY3Rpb24gTmF2KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0YWJzID0gcHJvcHMudGFicyxcbiAgICAgIHBpbGxzID0gcHJvcHMucGlsbHMsXG4gICAgICB2ZXJ0aWNhbCA9IHByb3BzLnZlcnRpY2FsLFxuICAgICAgaG9yaXpvbnRhbCA9IHByb3BzLmhvcml6b250YWwsXG4gICAgICBqdXN0aWZpZWQgPSBwcm9wcy5qdXN0aWZpZWQsXG4gICAgICBmaWxsID0gcHJvcHMuZmlsbCxcbiAgICAgIG5hdmJhciA9IHByb3BzLm5hdmJhcixcbiAgICAgIGNhcmQgPSBwcm9wcy5jYXJkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTcpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgbmF2YmFyID8gJ25hdmJhci1uYXYnIDogJ25hdicsIGhvcml6b250YWwgPyBcImp1c3RpZnktY29udGVudC1cIiArIGhvcml6b250YWwgOiBmYWxzZSwgZ2V0VmVydGljYWxDbGFzcyh2ZXJ0aWNhbCksIHtcbiAgICAnbmF2LXRhYnMnOiB0YWJzLFxuICAgICdjYXJkLWhlYWRlci10YWJzJzogY2FyZCAmJiB0YWJzLFxuICAgICduYXYtcGlsbHMnOiBwaWxscyxcbiAgICAnY2FyZC1oZWFkZXItcGlsbHMnOiBjYXJkICYmIHBpbGxzLFxuICAgICduYXYtanVzdGlmaWVkJzoganVzdGlmaWVkLFxuICAgICduYXYtZmlsbCc6IGZpbGxcbiAgfSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5OYXYucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFkO1xuTmF2LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxYjtcbnZhciBOYXYkMSA9IE5hdjtcblxudmFyIF9leGNsdWRlZCQxNiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxYSA9IHtcbiAgdGFnOiAnbGknXG59O1xuXG52YXIgTmF2SXRlbSA9IGZ1bmN0aW9uIE5hdkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE2KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtaXRlbScsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTmF2SXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWM7XG5OYXZJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxYTtcbnZhciBOYXZJdGVtJDEgPSBOYXZJdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJDE1ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiYWN0aXZlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDFiID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGhyZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxOSA9IHtcbiAgdGFnOiAnYSdcbn07XG5cbnZhciBOYXZMaW5rID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE5hdkxpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5hdkxpbmsocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTmF2TGluay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmhyZWYgPT09ICcjJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgYWN0aXZlID0gX3RoaXMkcHJvcHMuYWN0aXZlLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJDE1KTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdi1saW5rJywge1xuICAgICAgZGlzYWJsZWQ6IGF0dHJpYnV0ZXMuZGlzYWJsZWQsXG4gICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gTmF2TGluaztcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbk5hdkxpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFiO1xuTmF2TGluay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTk7XG52YXIgTmF2TGluayQxID0gTmF2TGluaztcblxudmFyIF9leGNsdWRlZCQxNCA9IFtcImNsYXNzTmFtZVwiLCBcImxpc3RDbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcInRhZ1wiLCBcImxpc3RUYWdcIiwgXCJhcmlhLWxhYmVsXCJdO1xudmFyIHByb3BUeXBlcyQxYSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbGlzdFRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxpc3RDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxOCA9IHtcbiAgdGFnOiAnbmF2JyxcbiAgbGlzdFRhZzogJ29sJyxcbiAgJ2FyaWEtbGFiZWwnOiAnYnJlYWRjcnVtYidcbn07XG5cbnZhciBCcmVhZGNydW1iID0gZnVuY3Rpb24gQnJlYWRjcnVtYihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgbGlzdENsYXNzTmFtZSA9IHByb3BzLmxpc3RDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgTGlzdFRhZyA9IHByb3BzLmxpc3RUYWcsXG4gICAgICBsYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGxpc3RDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdicmVhZGNydW1iJywgbGlzdENsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogbGFiZWxcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChMaXN0VGFnLCB7XG4gICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3Nlc1xuICB9LCBjaGlsZHJlbikpO1xufTtcblxuQnJlYWRjcnVtYi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWE7XG5CcmVhZGNydW1iLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxODtcbnZhciBCcmVhZGNydW1iJDEgPSBCcmVhZGNydW1iO1xuXG52YXIgX2V4Y2x1ZGVkJDEzID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiYWN0aXZlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxOSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDE3ID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbnZhciBCcmVhZGNydW1iSXRlbSA9IGZ1bmN0aW9uIEJyZWFkY3J1bWJJdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxMyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCAnYnJlYWRjcnVtYi1pdGVtJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtY3VycmVudFwiOiBhY3RpdmUgPyAncGFnZScgOiB1bmRlZmluZWRcbiAgfSkpO1xufTtcblxuQnJlYWRjcnVtYkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE5O1xuQnJlYWRjcnVtYkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE3O1xudmFyIEJyZWFkY3J1bWJJdGVtJDEgPSBCcmVhZGNydW1iSXRlbTtcblxudmFyIF9leGNsdWRlZCQxMiA9IFtcImFjdGl2ZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJibG9ja1wiLCBcImNsYXNzTmFtZVwiLCBcImNsb3NlXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJvdXRsaW5lXCIsIFwic2l6ZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyQxOCA9IHtcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJsb2NrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJDE2ID0ge1xuICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIHRhZzogJ2J1dHRvbidcbn07XG5cbnZhciBCdXR0b24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnV0dG9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnV0dG9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3RpdmUgPSBfdGhpcyRwcm9wcy5hY3RpdmUsXG4gICAgICAgIGFyaWFMYWJlbCA9IF90aGlzJHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICAgIGJsb2NrID0gX3RoaXMkcHJvcHMuYmxvY2ssXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY2xvc2UgPSBfdGhpcyRwcm9wcy5jbG9zZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjb2xvciA9IF90aGlzJHByb3BzLmNvbG9yLFxuICAgICAgICBvdXRsaW5lID0gX3RoaXMkcHJvcHMub3V0bGluZSxcbiAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzLnNpemUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkMTIpO1xuXG4gICAgdmFyIGJ0bk91dGxpbmVDb2xvciA9IFwiYnRuXCIgKyAob3V0bGluZSA/ICctb3V0bGluZScgOiAnJykgKyBcIi1cIiArIGNvbG9yO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY2xvc2UgJiYgJ2J0bi1jbG9zZScsIGNsb3NlIHx8ICdidG4nLCBjbG9zZSB8fCBidG5PdXRsaW5lQ29sb3IsIHNpemUgPyBcImJ0bi1cIiArIHNpemUgOiBmYWxzZSwgYmxvY2sgPyAnZC1ibG9jayB3LTEwMCcgOiBmYWxzZSwge1xuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuXG4gICAgaWYgKGF0dHJpYnV0ZXMuaHJlZiAmJiBUYWcgPT09ICdidXR0b24nKSB7XG4gICAgICBUYWcgPSAnYSc7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRBcmlhTGFiZWwgPSBjbG9zZSA/ICdDbG9zZScgOiBudWxsO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiBUYWcgPT09ICdidXR0b24nICYmIGF0dHJpYnV0ZXMub25DbGljayA/ICdidXR0b24nIDogdW5kZWZpbmVkXG4gICAgfSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwgfHwgZGVmYXVsdEFyaWFMYWJlbFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQnV0dG9uO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxODtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTY7XG52YXIgQnV0dG9uJDEgPSBCdXR0b247XG5cbnZhciBfZXhjbHVkZWQkMTEgPSBbXCJjbGFzc05hbWVcIl07XG52YXIgcHJvcFR5cGVzJDE3ID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNSA9IHtcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZVxufTtcblxudmFyIEJ1dHRvblRvZ2dsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCdXR0b25Ub2dnbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJ1dHRvblRvZ2dsZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG9nZ2xlZDogcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZm9jdXM6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5vbkJsdXIgPSBfdGhpcy5vbkJsdXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Gb2N1cyA9IF90aGlzLm9uRm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJ1dHRvblRvZ2dsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQmx1ciA9IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvY3VzOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9jdXM6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdG9nZ2xlZCA9IF9yZWYudG9nZ2xlZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZWQ6ICF0b2dnbGVkXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCQxMSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHtcbiAgICAgIGZvY3VzOiB0aGlzLnN0YXRlLmZvY3VzXG4gICAgfSksIHRoaXMucHJvcHMuY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEJ1dHRvbiQxLCBfZXh0ZW5kcyh7XG4gICAgICBhY3RpdmU6IHRoaXMuc3RhdGUudG9nZ2xlZCxcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gIH07XG5cbiAgcmV0dXJuIEJ1dHRvblRvZ2dsZTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkJ1dHRvblRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTc7XG5CdXR0b25Ub2dnbGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE1O1xudmFyIEJ1dHRvblRvZ2dsZSQxID0gQnV0dG9uVG9nZ2xlO1xuXG4vKipcbiAqIERyb3Bkb3duQ29udGV4dFxuICoge1xuICogIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAqICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gKiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdkb3duJywgJ3N0YXJ0JywgJ2VuZCddKS5pc1JlcXVpcmVkLFxuICogIGluTmF2YmFyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICogIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICogfVxuICovXG5cbnZhciBEcm9wZG93bkNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciBfZXhjbHVkZWQkMTAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkaXJlY3Rpb25cIiwgXCJpc09wZW5cIiwgXCJncm91cFwiLCBcInNpemVcIiwgXCJuYXZcIiwgXCJzZXRBY3RpdmVGcm9tQ2hpbGRcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIiwgXCJtZW51Um9sZVwiXTtcbnZhciBwcm9wVHlwZXMkMTYgPSB7XG4gIGExMXk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsndXAnLCAnZG93bicsICdzdGFydCcsICdlbmQnLCAnbGVmdCcsICdyaWdodCddKSxcbiAgZ3JvdXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG5hdjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbk5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzZXRBY3RpdmVGcm9tQ2hpbGQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbWVudVJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydsaXN0Ym94JywgJ21lbnUnXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJDE0ID0ge1xuICBhMTF5OiB0cnVlLFxuICBpc09wZW46IGZhbHNlLFxuICBkaXJlY3Rpb246ICdkb3duJyxcbiAgbmF2OiBmYWxzZSxcbiAgYWN0aXZlOiBmYWxzZSxcbiAgaW5OYXZiYXI6IGZhbHNlLFxuICBzZXRBY3RpdmVGcm9tQ2hpbGQ6IGZhbHNlXG59O1xudmFyIHByZXZlbnREZWZhdWx0S2V5cyA9IFtrZXlDb2Rlcy5zcGFjZSwga2V5Q29kZXMuZW50ZXIsIGtleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duLCBrZXlDb2Rlcy5lbmQsIGtleUNvZGVzLmhvbWVdO1xuXG52YXIgRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuYWRkRXZlbnRzID0gX3RoaXMuYWRkRXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBfdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbW92ZUV2ZW50cyA9IF90aGlzLnJlbW92ZUV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlTWVudVJlZiA9IF90aGlzLmhhbmRsZU1lbnVSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY29udGFpbmVyUmVmID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLm1lbnVSZWYgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUmVmKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlTWVudVJlZiA9IGZ1bmN0aW9uIGhhbmRsZU1lbnVSZWYobWVudVJlZikge1xuICAgIHRoaXMubWVudVJlZi5jdXJyZW50ID0gbWVudVJlZjtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGV4dFZhbHVlID0gZnVuY3Rpb24gZ2V0Q29udGV4dFZhbHVlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgICAgaXNPcGVuOiB0aGlzLnByb3BzLmlzT3BlbixcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdkb3duJyAmJiB0aGlzLnByb3BzLmRyb3B1cCA/ICd1cCcgOiB0aGlzLnByb3BzLmRpcmVjdGlvbixcbiAgICAgIGluTmF2YmFyOiB0aGlzLnByb3BzLmluTmF2YmFyLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAvLyBDYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgYnkgRHJvcGRvd25NZW51IHRvIHByb3ZpZGUgYSByZWYgdG9cbiAgICAgIC8vIGEgSFRNTCB0YWcgdGhhdCdzIHVzZWQgZm9yIHRoZSBEcm9wZG93bk1lbnVcbiAgICAgIG9uTWVudVJlZjogdGhpcy5oYW5kbGVNZW51UmVmLFxuICAgICAgbWVudVJvbGU6IHRoaXMucHJvcHMubWVudVJvbGVcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlUHJvcHMoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAhPT0gcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5oYW5kbGVQcm9wcygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnUgPSBmdW5jdGlvbiBnZXRNZW51KCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVSZWYuY3VycmVudDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TWVudUN0cmwgPSBmdW5jdGlvbiBnZXRNZW51Q3RybCgpIHtcbiAgICBpZiAodGhpcy5fJG1lbnVDdHJsKSByZXR1cm4gdGhpcy5fJG1lbnVDdHJsO1xuICAgIHRoaXMuXyRtZW51Q3RybCA9IHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignW2FyaWEtZXhwYW5kZWRdJyk7XG4gICAgcmV0dXJuIHRoaXMuXyRtZW51Q3RybDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0SXRlbVR5cGUgPSBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0Lm1lbnVSb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgIHJldHVybiAnb3B0aW9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ21lbnVpdGVtJztcbiAgfTtcblxuICBfcHJvdG8uZ2V0TWVudUl0ZW1zID0gZnVuY3Rpb24gZ2V0TWVudUl0ZW1zKCkge1xuICAgIC8vIEluIGEgcmVhbCBtZW51IHdpdGggYSBjaGlsZCBEcm9wZG93bk1lbnUsIGB0aGlzLmdldE1lbnUoKWAgc2hvdWxkIG5ldmVyXG4gICAgLy8gYmUgbnVsbCwgYnV0IGl0IGlzIHNvbWV0aW1lcyBudWxsIGluIHRlc3RzLiBUbyBtaXRpZ2F0ZSB0aGF0LCB3ZSBqdXN0XG4gICAgLy8gdXNlIGB0aGlzLmdldENvbnRhaW5lcigpYCBhcyB0aGUgZmFsbGJhY2sgYG1lbnVDb250YWluZXJgLlxuICAgIHZhciBtZW51Q29udGFpbmVyID0gdGhpcy5nZXRNZW51KCkgfHwgdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbChtZW51Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcm9sZT1cXFwiXCIgKyB0aGlzLmdldEl0ZW1UeXBlKCkgKyBcIlxcXCJdXCIpKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkRXZlbnRzID0gZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgWydjbGljaycsICd0b3VjaHN0YXJ0JywgJ2tleXVwJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBfdGhpczIuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUV2ZW50cyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCcsICdrZXl1cCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgX3RoaXMzLmhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVEb2N1bWVudENsaWNrID0gZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgaWYgKGUgJiYgKGUud2hpY2ggPT09IDMgfHwgZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IGtleUNvZGVzLnRhYikpIHJldHVybjtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICB2YXIgbWVudSA9IHRoaXMuZ2V0TWVudSgpO1xuICAgIHZhciBjbGlja0lzSW5Db250YWluZXIgPSBjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmIGNvbnRhaW5lciAhPT0gZS50YXJnZXQ7XG4gICAgdmFyIGNsaWNrSXNJbklucHV0ID0gY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtZ3JvdXAnKSAmJiBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bicpICYmIGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCc7XG4gICAgdmFyIGNsaWNrSXNJbk1lbnUgPSBtZW51ICYmIG1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmIG1lbnUgIT09IGUudGFyZ2V0O1xuXG4gICAgaWYgKChjbGlja0lzSW5Db250YWluZXIgJiYgIWNsaWNrSXNJbklucHV0IHx8IGNsaWNrSXNJbk1lbnUpICYmIChlLnR5cGUgIT09ICdrZXl1cCcgfHwgZS53aGljaCA9PT0ga2V5Q29kZXMudGFiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgaXNUYXJnZXRNZW51SXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnbWVudWl0ZW0nIHx8IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnb3B0aW9uJztcbiAgICB2YXIgaXNUYXJnZXRNZW51Q3RybCA9IHRoaXMuZ2V0TWVudUN0cmwoKSA9PT0gZS50YXJnZXQ7XG4gICAgdmFyIGlzVGFiID0ga2V5Q29kZXMudGFiID09PSBlLndoaWNoO1xuXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZS50YXJnZXQudGFnTmFtZSkgfHwgaXNUYWIgJiYgIXRoaXMucHJvcHMuYTExeSB8fCBpc1RhYiAmJiAhKGlzVGFyZ2V0TWVudUl0ZW0gfHwgaXNUYXJnZXRNZW51Q3RybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJldmVudERlZmF1bHRLZXlzLmluZGV4T2YoZS53aGljaCkgIT09IC0xIHx8IGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA5MCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXNUYXJnZXRNZW51Q3RybCkge1xuICAgICAgaWYgKFtrZXlDb2Rlcy5zcGFjZSwga2V5Q29kZXMuZW50ZXIsIGtleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmRleE9mKGUud2hpY2gpID4gLTEpIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgbWVudSAoaWYgbm90IG9wZW4pIGFuZCBmb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuZ2V0TWVudUl0ZW1zKClbMF0uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGlzVGFiKSB7XG4gICAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW0gaWYgdGFiYmluZyBmcm9tIGFuIG9wZW4gbWVudS4gV2UgbmVlZCB0aGlzXG4gICAgICAgIC8vIGZvciBjYXNlcyB3aGVyZSB0aGUgRHJvcGRvd25NZW51IHNldHMgYSBjdXN0b20gY29udGFpbmVyLCB3aGljaCBtYXlcbiAgICAgICAgLy8gbm90IGJlIHRoZSBuYXR1cmFsIG5leHQgaXRlbSB0byB0YWIgdG8gZnJvbSB0aGUgRHJvcGRvd25Ub2dnbGUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nZXRNZW51SXRlbXMoKVswXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBlLndoaWNoID09PSBrZXlDb2Rlcy5lc2MpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGlzVGFyZ2V0TWVudUl0ZW0pIHtcbiAgICAgIGlmIChba2V5Q29kZXMudGFiLCBrZXlDb2Rlcy5lc2NdLmluZGV4T2YoZS53aGljaCkgPiAtMSkge1xuICAgICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICAgICAgdGhpcy5nZXRNZW51Q3RybCgpLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKFtrZXlDb2Rlcy5zcGFjZSwga2V5Q29kZXMuZW50ZXJdLmluZGV4T2YoZS53aGljaCkgPiAtMSkge1xuICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgICAgICB0aGlzLmdldE1lbnVDdHJsKCkuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoW2tleUNvZGVzLmRvd24sIGtleUNvZGVzLnVwXS5pbmRleE9mKGUud2hpY2gpID4gLTEgfHwgW2tleUNvZGVzLm4sIGtleUNvZGVzLnBdLmluZGV4T2YoZS53aGljaCkgPiAtMSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgdmFyICRtZW51aXRlbXMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuICAgICAgICB2YXIgaW5kZXggPSAkbWVudWl0ZW1zLmluZGV4T2YoZS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChrZXlDb2Rlcy51cCA9PT0gZS53aGljaCB8fCBrZXlDb2Rlcy5wID09PSBlLndoaWNoICYmIGUuY3RybEtleSkge1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggIT09IDAgPyBpbmRleCAtIDEgOiAkbWVudWl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMuZG93biA9PT0gZS53aGljaCB8fCBrZXlDb2Rlcy5uID09PSBlLndoaWNoICYmIGUuY3RybEtleSkge1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggPT09ICRtZW51aXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICAkbWVudWl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5lbmQgPT09IGUud2hpY2gpIHtcbiAgICAgICAgdmFyIF8kbWVudWl0ZW1zID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcblxuICAgICAgICBfJG1lbnVpdGVtc1tfJG1lbnVpdGVtcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5ob21lID09PSBlLndoaWNoKSB7XG4gICAgICAgIHZhciBfJG1lbnVpdGVtczIgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuXG4gICAgICAgIF8kbWVudWl0ZW1zMlswXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChlLndoaWNoID49IDQ4ICYmIGUud2hpY2ggPD0gOTApIHtcbiAgICAgICAgdmFyIF8kbWVudWl0ZW1zMyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG5cbiAgICAgICAgdmFyIGNoYXJQcmVzc2VkID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXyRtZW51aXRlbXMzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIGZpcnN0TGV0dGVyID0gXyRtZW51aXRlbXMzW2ldLnRleHRDb250ZW50ICYmIF8kbWVudWl0ZW1zM1tpXS50ZXh0Q29udGVudFswXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBjaGFyUHJlc3NlZCkge1xuICAgICAgICAgICAgXyRtZW51aXRlbXMzW2ldLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlUHJvcHMgPSBmdW5jdGlvbiBoYW5kbGVQcm9wcygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzLCBfcmVmO1xuXG4gICAgdmFyIF9vbWl0ID0gb21pdCh0aGlzLnByb3BzLCBbJ3RvZ2dsZScsICdkaXNhYmxlZCcsICdpbk5hdmJhcicsICdhMTF5J10pLFxuICAgICAgICBjbGFzc05hbWUgPSBfb21pdC5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF9vbWl0LmNzc01vZHVsZSxcbiAgICAgICAgZGlyZWN0aW9uID0gX29taXQuZGlyZWN0aW9uLFxuICAgICAgICBpc09wZW4gPSBfb21pdC5pc09wZW4sXG4gICAgICAgIGdyb3VwID0gX29taXQuZ3JvdXAsXG4gICAgICAgIHNpemUgPSBfb21pdC5zaXplLFxuICAgICAgICBuYXYgPSBfb21pdC5uYXYsXG4gICAgICAgIHNldEFjdGl2ZUZyb21DaGlsZCA9IF9vbWl0LnNldEFjdGl2ZUZyb21DaGlsZCxcbiAgICAgICAgYWN0aXZlID0gX29taXQuYWN0aXZlLFxuICAgICAgICB0YWcgPSBfb21pdC50YWcsXG4gICAgICAgIGF0dHJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXQsIF9leGNsdWRlZCQxMCk7XG5cbiAgICB2YXIgVGFnID0gdGFnIHx8IChuYXYgPyAnbGknIDogJ2RpdicpO1xuICAgIHZhciBzdWJJdGVtSXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIGlmIChzZXRBY3RpdmVGcm9tQ2hpbGQpIHtcbiAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGRyb3Bkb3duSXRlbSkge1xuICAgICAgICBpZiAoZHJvcGRvd25JdGVtICYmIGRyb3Bkb3duSXRlbS5wcm9wcy5hY3RpdmUpIHN1Ykl0ZW1Jc0FjdGl2ZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIG5hdiAmJiBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCBzZXRBY3RpdmVGcm9tQ2hpbGQgJiYgc3ViSXRlbUlzQWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgKF9jbGFzc05hbWVzID0ge1xuICAgICAgJ2J0bi1ncm91cCc6IGdyb3VwXG4gICAgfSwgX2NsYXNzTmFtZXNbXCJidG4tZ3JvdXAtXCIgKyBzaXplXSA9ICEhc2l6ZSwgX2NsYXNzTmFtZXMuZHJvcGRvd24gPSAhZ3JvdXAsIF9jbGFzc05hbWVzLmRyb3B1cCA9IGRpcmVjdGlvbiA9PT0gJ3VwJywgX2NsYXNzTmFtZXMuZHJvcHN0YXJ0ID0gZGlyZWN0aW9uID09PSAnc3RhcnQnIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQnLCBfY2xhc3NOYW1lcy5kcm9wZW5kID0gZGlyZWN0aW9uID09PSAnZW5kJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodCcsIF9jbGFzc05hbWVzLnNob3cgPSBpc09wZW4sIF9jbGFzc05hbWVzWyduYXYtaXRlbSddID0gbmF2LCBfY2xhc3NOYW1lcykpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZXh0VmFsdWUoKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFBvcHBlci5NYW5hZ2VyLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cnMsIChfcmVmID0ge30sIF9yZWZbdHlwZW9mIFRhZyA9PT0gJ3N0cmluZycgPyAncmVmJyA6ICdpbm5lclJlZiddID0gdGhpcy5jb250YWluZXJSZWYsIF9yZWYpLCB7XG4gICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKSkpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bjtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxNjtcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNDtcbnZhciBEcm9wZG93biQxID0gRHJvcGRvd247XG5cbnZhciBwcm9wVHlwZXMkMTUgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVcbn07XG5cbnZhciBCdXR0b25Ecm9wZG93biA9IGZ1bmN0aW9uIEJ1dHRvbkRyb3Bkb3duKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe1xuICAgIGdyb3VwOiB0cnVlXG4gIH0sIHByb3BzKSk7XG59O1xuXG5CdXR0b25Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTU7XG52YXIgQnV0dG9uRHJvcGRvd24kMSA9IEJ1dHRvbkRyb3Bkb3duO1xuXG52YXIgX2V4Y2x1ZGVkJCQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJzaXplXCIsIFwidmVydGljYWxcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDE0ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJDEzID0ge1xuICB0YWc6ICdkaXYnLFxuICByb2xlOiAnZ3JvdXAnXG59O1xuXG52YXIgQnV0dG9uR3JvdXAgPSBmdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICB2ZXJ0aWNhbCA9IHByb3BzLnZlcnRpY2FsLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkJCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBzaXplID8gJ2J0bi1ncm91cC0nICsgc2l6ZSA6IGZhbHNlLCB2ZXJ0aWNhbCA/ICdidG4tZ3JvdXAtdmVydGljYWwnIDogJ2J0bi1ncm91cCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQnV0dG9uR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE0O1xuQnV0dG9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEzO1xudmFyIEJ1dHRvbkdyb3VwJDEgPSBCdXR0b25Hcm91cDtcblxudmFyIF9leGNsdWRlZCRfID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxMyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDEyID0ge1xuICB0YWc6ICdkaXYnLFxuICByb2xlOiAndG9vbGJhcidcbn07XG5cbnZhciBCdXR0b25Ub29sYmFyID0gZnVuY3Rpb24gQnV0dG9uVG9vbGJhcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkXyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYnRuLXRvb2xiYXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkJ1dHRvblRvb2xiYXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEzO1xuQnV0dG9uVG9vbGJhci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTI7XG52YXIgQnV0dG9uVG9vbGJhciQxID0gQnV0dG9uVG9vbGJhcjtcblxudmFyIF9leGNsdWRlZCRaID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGl2aWRlclwiLCBcInRhZ1wiLCBcImhlYWRlclwiLCBcImFjdGl2ZVwiLCBcInRleHRcIl07XG52YXIgcHJvcFR5cGVzJDEyID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGl2aWRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBoZWFkZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMSA9IHtcbiAgdGFnOiAnYnV0dG9uJyxcbiAgdG9nZ2xlOiB0cnVlXG59O1xuXG52YXIgRHJvcGRvd25JdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd25JdGVtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0VGFiSW5kZXggPSBfdGhpcy5nZXRUYWJJbmRleC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd25JdGVtLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Um9sZSA9IGZ1bmN0aW9uIGdldFJvbGUoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5tZW51Um9sZSA9PT0gJ2xpc3Rib3gnKSB7XG4gICAgICByZXR1cm4gJ29wdGlvbic7XG4gICAgfVxuXG4gICAgcmV0dXJuICdtZW51aXRlbSc7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICBoZWFkZXIgPSBfdGhpcyRwcm9wcy5oZWFkZXIsXG4gICAgICAgIGRpdmlkZXIgPSBfdGhpcyRwcm9wcy5kaXZpZGVyLFxuICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMudGV4dDtcblxuICAgIGlmIChkaXNhYmxlZCB8fCBoZWFkZXIgfHwgZGl2aWRlciB8fCB0ZXh0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgdGhpcy5jb250ZXh0LnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFRhYkluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiSW5kZXgoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICBoZWFkZXIgPSBfdGhpcyRwcm9wczIuaGVhZGVyLFxuICAgICAgICBkaXZpZGVyID0gX3RoaXMkcHJvcHMyLmRpdmlkZXIsXG4gICAgICAgIHRleHQgPSBfdGhpcyRwcm9wczIudGV4dDtcblxuICAgIGlmIChkaXNhYmxlZCB8fCBoZWFkZXIgfHwgZGl2aWRlciB8fCB0ZXh0KSB7XG4gICAgICByZXR1cm4gJy0xJztcbiAgICB9XG5cbiAgICByZXR1cm4gJzAnO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHRhYkluZGV4ID0gdGhpcy5nZXRUYWJJbmRleCgpO1xuICAgIHZhciByb2xlID0gdGFiSW5kZXggPiAtMSA/IHRoaXMuZ2V0Um9sZSgpIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIF9vbWl0ID0gb21pdCh0aGlzLnByb3BzLCBbJ3RvZ2dsZSddKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX29taXQuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfb21pdC5jc3NNb2R1bGUsXG4gICAgICAgIGRpdmlkZXIgPSBfb21pdC5kaXZpZGVyLFxuICAgICAgICBUYWcgPSBfb21pdC50YWcsXG4gICAgICAgIGhlYWRlciA9IF9vbWl0LmhlYWRlcixcbiAgICAgICAgYWN0aXZlID0gX29taXQuYWN0aXZlLFxuICAgICAgICB0ZXh0ID0gX29taXQudGV4dCxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdCwgX2V4Y2x1ZGVkJFopO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAnZHJvcGRvd24taXRlbSc6ICFkaXZpZGVyICYmICFoZWFkZXIgJiYgIXRleHQsXG4gICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICdkcm9wZG93bi1oZWFkZXInOiBoZWFkZXIsXG4gICAgICAnZHJvcGRvd24tZGl2aWRlcic6IGRpdmlkZXIsXG4gICAgICAnZHJvcGRvd24taXRlbS10ZXh0JzogdGV4dFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuXG4gICAgaWYgKFRhZyA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgVGFnID0gJ2g2JztcbiAgICAgIH0gZWxzZSBpZiAoZGl2aWRlcikge1xuICAgICAgICBUYWcgPSAnZGl2JztcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuaHJlZikge1xuICAgICAgICBUYWcgPSAnYSc7XG4gICAgICB9IGVsc2UgaWYgKHRleHQpIHtcbiAgICAgICAgVGFnID0gJ3NwYW4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiBUYWcgPT09ICdidXR0b24nICYmIChwcm9wcy5vbkNsaWNrIHx8IHRoaXMucHJvcHMudG9nZ2xlKSA/ICdidXR0b24nIDogdW5kZWZpbmVkXG4gICAgfSwgcHJvcHMsIHtcbiAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgIHJvbGU6IHJvbGUsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duSXRlbTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTI7XG5Ecm9wZG93bkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDExO1xuRHJvcGRvd25JdGVtLmNvbnRleHRUeXBlID0gRHJvcGRvd25Db250ZXh0O1xudmFyIERyb3Bkb3duSXRlbSQxID0gRHJvcGRvd25JdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJFkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkYXJrXCIsIFwiZW5kXCIsIFwicmlnaHRcIiwgXCJ0YWdcIiwgXCJmbGlwXCIsIFwibW9kaWZpZXJzXCIsIFwicGVyc2lzdFwiLCBcInN0cmF0ZWd5XCIsIFwiY29udGFpbmVyXCJdO1xudmFyIHByb3BUeXBlcyQxMSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGVuZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmbGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1vZGlmaWVyczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcGVyc2lzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHJhdGVneTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIHJpZ2h0OiBkZXByZWNhdGVkKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgJ1BsZWFzZSB1c2UgXCJlbmRcIiBpbnN0ZWFkLicpXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMCA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgZmxpcDogdHJ1ZSxcbiAgbW9kaWZpZXJzOiBbXVxufTtcbnZhciBkaXJlY3Rpb25Qb3NpdGlvbk1hcCA9IHtcbiAgdXA6ICd0b3AnLFxuICBsZWZ0OiAnbGVmdCcsXG4gIHJpZ2h0OiAncmlnaHQnLFxuICBzdGFydDogJ2xlZnQnLFxuICBlbmQ6ICdyaWdodCcsXG4gIGRvd246ICdib3R0b20nXG59O1xuXG52YXIgRHJvcGRvd25NZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd25NZW51KCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bk1lbnUucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSb2xlID0gZnVuY3Rpb24gZ2V0Um9sZSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0Lm1lbnVSb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgIHJldHVybiAnbGlzdGJveCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdtZW51JztcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgZGFyayA9IF90aGlzJHByb3BzLmRhcmssXG4gICAgICAgIGVuZCA9IF90aGlzJHByb3BzLmVuZCxcbiAgICAgICAgcmlnaHQgPSBfdGhpcyRwcm9wcy5yaWdodCxcbiAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBwZXJzaXN0ID0gX3RoaXMkcHJvcHMucGVyc2lzdCxcbiAgICAgICAgc3RyYXRlZ3kgPSBfdGhpcyRwcm9wcy5zdHJhdGVneSxcbiAgICAgICAgY29udGFpbmVyID0gX3RoaXMkcHJvcHMuY29udGFpbmVyLFxuICAgICAgICBhdHRycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkWSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdkcm9wZG93bi1tZW51Jywge1xuICAgICAgJ2Ryb3Bkb3duLW1lbnUtZGFyayc6IGRhcmssXG4gICAgICAnZHJvcGRvd24tbWVudS1lbmQnOiBlbmQgfHwgcmlnaHQsXG4gICAgICBzaG93OiB0aGlzLmNvbnRleHQuaXNPcGVuXG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgdmFyIFRhZyA9IHRhZztcblxuICAgIGlmIChwZXJzaXN0IHx8IHRoaXMuY29udGV4dC5pc09wZW4gJiYgIXRoaXMuY29udGV4dC5pbk5hdmJhcikge1xuICAgICAgdmFyIHBvc2l0aW9uMSA9IGRpcmVjdGlvblBvc2l0aW9uTWFwW3RoaXMuY29udGV4dC5kaXJlY3Rpb25dIHx8ICdib3R0b20nO1xuICAgICAgdmFyIHBvc2l0aW9uMiA9IGVuZCB8fCByaWdodCA/ICdlbmQnIDogJ3N0YXJ0JztcbiAgICAgIHZhciBwb3BlclBsYWNlbWVudCA9IHBvc2l0aW9uMSArIFwiLVwiICsgcG9zaXRpb24yO1xuICAgICAgdmFyIHBvcGVyTW9kaWZpZXJzID0gW10uY29uY2F0KG1vZGlmaWVycywgW3tcbiAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICBlbmFibGVkOiAhIWZsaXBcbiAgICAgIH1dKTtcbiAgICAgIHZhciBwb3BwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUG9wcGVyLCB7XG4gICAgICAgIHBsYWNlbWVudDogcG9wZXJQbGFjZW1lbnQsXG4gICAgICAgIG1vZGlmaWVyczogcG9wZXJNb2RpZmllcnMsXG4gICAgICAgIHN0cmF0ZWd5OiBzdHJhdGVneVxuICAgICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG5cbiAgICAgICAgdmFyIGNvbWJpbmVkU3R5bGUgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX3RoaXMucHJvcHMuc3R5bGUpLCBzdHlsZSk7XG5cbiAgICAgICAgdmFyIGhhbmRsZVJlZiA9IGZ1bmN0aW9uIGhhbmRsZVJlZih0YWdSZWYpIHtcbiAgICAgICAgICAvLyBTZW5kIHRoZSByZWYgdG8gYHJlYWN0LXBvcHBlcmBcbiAgICAgICAgICByZWYodGFnUmVmKTsgLy8gU2VuZCB0aGUgcmVmIHRvIHRoZSBwYXJlbnQgRHJvcGRvd24gc28gdGhhdCBjbGlja3Mgb3V0c2lkZVxuICAgICAgICAgIC8vIGl0IHdpbGwgY2F1c2UgaXQgdG8gY2xvc2VcblxuICAgICAgICAgIHZhciBvbk1lbnVSZWYgPSBfdGhpcy5jb250ZXh0Lm9uTWVudVJlZjtcbiAgICAgICAgICBpZiAob25NZW51UmVmKSBvbk1lbnVSZWYodGFnUmVmKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgcm9sZTogX3RoaXMuZ2V0Um9sZSgpLFxuICAgICAgICAgIHJlZjogaGFuZGxlUmVmXG4gICAgICAgIH0sIGF0dHJzLCB7XG4gICAgICAgICAgc3R5bGU6IGNvbWJpbmVkU3R5bGUsXG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiAhX3RoaXMuY29udGV4dC5pc09wZW4sXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IHBsYWNlbWVudFxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3RET01fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVBvcnRhbChwb3BwZXIsIGdldFRhcmdldChjb250YWluZXIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwb3BwZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICByb2xlOiB0aGlzLmdldFJvbGUoKVxuICAgIH0sIGF0dHJzLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6ICF0aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgXCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIjogYXR0cnMucGxhY2VtZW50XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bk1lbnU7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMTtcbkRyb3Bkb3duTWVudS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTA7XG5Ecm9wZG93bk1lbnUuY29udGV4dFR5cGUgPSBEcm9wZG93bkNvbnRleHQ7XG52YXIgRHJvcGRvd25NZW51JDEgPSBEcm9wZG93bk1lbnU7XG5cbnZhciBfZXhjbHVkZWQkWCA9IFtcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2FyZXRcIiwgXCJzcGxpdFwiLCBcIm5hdlwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyQxMCA9IHtcbiAgY2FyZXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICdhcmlhLWhhc3BvcHVwJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzcGxpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBuYXY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkJCA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAnYXJpYS1oYXNwb3B1cCc6IHRydWVcbn07XG5cbnZhciBEcm9wZG93blRvZ2dsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93blRvZ2dsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd25Ub2dnbGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd25Ub2dnbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5jb250ZXh0LmRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubmF2ICYmICF0aGlzLnByb3BzLnRhZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5nZXRSb2xlID0gZnVuY3Rpb24gZ2V0Um9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Lm1lbnVSb2xlIHx8IHRoaXMucHJvcHNbJ2FyaWEtaGFzcG9wdXAnXTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2xvciA9IF90aGlzJHByb3BzLmNvbG9yLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNhcmV0ID0gX3RoaXMkcHJvcHMuY2FyZXQsXG4gICAgICAgIHNwbGl0ID0gX3RoaXMkcHJvcHMuc3BsaXQsXG4gICAgICAgIG5hdiA9IF90aGlzJHByb3BzLm5hdixcbiAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkWCk7XG5cbiAgICB2YXIgYXJpYUxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCAnVG9nZ2xlIERyb3Bkb3duJztcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHtcbiAgICAgICdkcm9wZG93bi10b2dnbGUnOiBjYXJldCB8fCBzcGxpdCxcbiAgICAgICdkcm9wZG93bi10b2dnbGUtc3BsaXQnOiBzcGxpdCxcbiAgICAgICduYXYtbGluayc6IG5hdlxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHZhciBjaGlsZHJlbiA9IHR5cGVvZiBwcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5jaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInZpc3VhbGx5LWhpZGRlblwiXG4gICAgfSwgYXJpYUxhYmVsKTtcbiAgICB2YXIgVGFnO1xuXG4gICAgaWYgKG5hdiAmJiAhdGFnKSB7XG4gICAgICBUYWcgPSAnYSc7XG4gICAgICBwcm9wcy5ocmVmID0gJyMnO1xuICAgIH0gZWxzZSBpZiAoIXRhZykge1xuICAgICAgVGFnID0gQnV0dG9uJDE7XG4gICAgICBwcm9wcy5jb2xvciA9IGNvbG9yO1xuICAgICAgcHJvcHMuY3NzTW9kdWxlID0gY3NzTW9kdWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBUYWcgPSB0YWc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGV4dC5pbk5hdmJhcikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IHRoaXMuY29udGV4dC5pc09wZW4sXG4gICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiB0aGlzLmdldFJvbGUoKSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFBvcHBlci5SZWZlcmVuY2UsIHtcbiAgICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIHZhciByZWYgPSBfcmVmLnJlZjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIChfcmVmMiA9IHt9LCBfcmVmMlt0eXBlb2YgVGFnID09PSAnc3RyaW5nJyA/ICdyZWYnIDogJ2lubmVyUmVmJ10gPSByZWYsIF9yZWYyKSwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzMi5vbkNsaWNrLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogX3RoaXMyLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogX3RoaXMyLmdldFJvbGUoKSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duVG9nZ2xlO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuRHJvcGRvd25Ub2dnbGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEwO1xuRHJvcGRvd25Ub2dnbGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJCQ7XG5Ecm9wZG93blRvZ2dsZS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93blRvZ2dsZSQxID0gRHJvcGRvd25Ub2dnbGU7XG5cbnZhciBfZXhjbHVkZWQkVyA9IFtcInRhZ1wiLCBcImJhc2VDbGFzc1wiLCBcImJhc2VDbGFzc0FjdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5uZXJSZWZcIl07XG5cbnZhciBwcm9wVHlwZXMkJCA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZV0pLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBiYXNlQ2xhc3M6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYXNlQ2xhc3NBY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn0pO1xuXG52YXIgZGVmYXVsdFByb3BzJF8gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICB0YWc6ICdkaXYnLFxuICBiYXNlQ2xhc3M6ICdmYWRlJyxcbiAgYmFzZUNsYXNzQWN0aXZlOiAnc2hvdycsXG4gIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5GYWRlLFxuICBhcHBlYXI6IHRydWUsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICBcImluXCI6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBGYWRlKHByb3BzKSB7XG4gIHZhciBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBiYXNlQ2xhc3MgPSBwcm9wcy5iYXNlQ2xhc3MsXG4gICAgICBiYXNlQ2xhc3NBY3RpdmUgPSBwcm9wcy5iYXNlQ2xhc3NBY3RpdmUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFcpO1xuXG4gIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBwaWNrKG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICB2YXIgY2hpbGRQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbiwgdHJhbnNpdGlvblByb3BzLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gc3RhdHVzID09PSAnZW50ZXJlZCc7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBiYXNlQ2xhc3MsIGlzQWN0aXZlICYmIGJhc2VDbGFzc0FjdGl2ZSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0sIGNoaWxkUHJvcHMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWZcbiAgICB9KSwgY2hpbGRyZW4pO1xuICB9KTtcbn1cblxuRmFkZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkJDtcbkZhZGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJF87XG5cbi8qKlxuICogQWNjb3JkaW9uQ29udGV4dFxuICoge1xuICogIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAqICBvcGVuSWQ6IFByb3BUeXBlcy5zdHJpbmcsICAgIFxuICogfVxuICovXG5cbnZhciBBY2NvcmRpb25Db250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgX2V4Y2x1ZGVkJFYgPSBbXCJmbHVzaFwiLCBcIm9wZW5cIiwgXCJ0b2dnbGVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkXyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBmbHVzaDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkXG59O1xudmFyIGRlZmF1bHRQcm9wcyRaID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQWNjb3JkaW9uID0gZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIHZhciBmbHVzaCA9IHByb3BzLmZsdXNoLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkVik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uJywge1xuICAgICdhY2NvcmRpb24tZmx1c2gnOiBmbHVzaFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgdmFyIGFjY29yZGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3Blbjogb3BlbixcbiAgICAgIHRvZ2dsZTogdG9nZ2xlXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWNjb3JkaW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhY2NvcmRpb25Db250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpKTtcbn07XG5cbkFjY29yZGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkXztcbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkWjtcbnZhciBBY2NvcmRpb24kMSA9IEFjY29yZGlvbjtcblxudmFyIF9leGNsdWRlZCRVID0gW1wiZGVmYXVsdE9wZW5cIiwgXCJzdGF5T3BlblwiXTtcbnZhciBwcm9wVHlwZXMkWiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIHN0YXlPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJFkgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBVbmNvbnRyb2xsZWRBY2NvcmRpb24gPSBmdW5jdGlvbiBVbmNvbnRyb2xsZWRBY2NvcmRpb24oX3JlZikge1xuICB2YXIgZGVmYXVsdE9wZW4gPSBfcmVmLmRlZmF1bHRPcGVuLFxuICAgICAgc3RheU9wZW4gPSBfcmVmLnN0YXlPcGVuLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkVSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcGVuIHx8IChzdGF5T3BlbiA/IFtdIDogdW5kZWZpbmVkKSksXG4gICAgICBvcGVuID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0T3BlbiA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGlkKSB7XG4gICAgaWYgKHN0YXlPcGVuKSB7XG4gICAgICBvcGVuLmluY2x1ZGVzKGlkKSA/IHNldE9wZW4ob3Blbi5maWx0ZXIoZnVuY3Rpb24gKGFjY29yZGlvbklkKSB7XG4gICAgICAgIHJldHVybiBhY2NvcmRpb25JZCAhPT0gaWQ7XG4gICAgICB9KSkgOiBzZXRPcGVuKFtdLmNvbmNhdChvcGVuLCBbaWRdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW4gPT09IGlkID8gc2V0T3Blbih1bmRlZmluZWQpIDogc2V0T3BlbihpZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWNjb3JkaW9uJDEsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9wZW46IG9wZW4sXG4gICAgdG9nZ2xlOiB0b2dnbGVcbiAgfSkpO1xufTtcblxuQWNjb3JkaW9uJDEucHJvcFR5cGVzID0gcHJvcFR5cGVzJFo7XG5BY2NvcmRpb24kMS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkWTtcbnZhciBVbmNvbnRyb2xsZWRBY2NvcmRpb24kMSA9IFVuY29udHJvbGxlZEFjY29yZGlvbjtcblxudmFyIF9leGNsdWRlZCRUID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIiwgXCJjaGlsZHJlblwiLCBcInRhcmdldElkXCJdO1xudmFyIHByb3BUeXBlcyRZID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHRhcmdldElkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkXG59O1xudmFyIGRlZmF1bHRQcm9wcyRYID0ge1xuICB0YWc6ICdoMidcbn07XG5cbnZhciBBY2NvcmRpb25IZWFkZXIgPSBmdW5jdGlvbiBBY2NvcmRpb25IZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdGFyZ2V0SWQgPSBwcm9wcy50YXJnZXRJZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFQpO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQWNjb3JkaW9uQ29udGV4dCksXG4gICAgICBvcGVuID0gX3VzZUNvbnRleHQub3BlbixcbiAgICAgIHRvZ2dsZSA9IF91c2VDb250ZXh0LnRvZ2dsZTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24taGVhZGVyJyksIGNzc01vZHVsZSk7XG4gIHZhciBidXR0b25DbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdhY2NvcmRpb24tYnV0dG9uJywge1xuICAgIGNvbGxhcHNlZDogIShBcnJheS5pc0FycmF5KG9wZW4pID8gb3Blbi5pbmNsdWRlcyh0YXJnZXRJZCkgOiBvcGVuID09PSB0YXJnZXRJZClcbiAgfSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBidXR0b25DbGFzc2VzLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlKHRhcmdldElkKTtcbiAgICB9XG4gIH0sIGNoaWxkcmVuKSk7XG59O1xuXG5BY2NvcmRpb25IZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJFk7XG5BY2NvcmRpb25IZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFg7XG52YXIgQWNjb3JkaW9uSGVhZGVyJDEgPSBBY2NvcmRpb25IZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkUyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRYID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVcbn07XG52YXIgZGVmYXVsdFByb3BzJFcgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBBY2NvcmRpb25JdGVtJDIgPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkUyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uLWl0ZW0nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuQWNjb3JkaW9uSXRlbSQyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRYO1xuQWNjb3JkaW9uSXRlbSQyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRXO1xudmFyIEFjY29yZGlvbkl0ZW0kMyA9IEFjY29yZGlvbkl0ZW0kMjtcblxudmFyIF9leGNsdWRlZCRSID0gW1widGFnXCIsIFwiaG9yaXpvbnRhbFwiLCBcImlzT3BlblwiLCBcImNsYXNzTmFtZVwiLCBcIm5hdmJhclwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5uZXJSZWZcIl07XG5cbnZhciBfdHJhbnNpdGlvblN0YXR1c1RvQ2w7XG5cbnZhciBwcm9wVHlwZXMkVyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIGhvcml6b250YWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZV0pLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgbmF2YmFyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3RdKVxufSk7XG5cbnZhciBkZWZhdWx0UHJvcHMkViA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gIGhvcml6b250YWw6IGZhbHNlLFxuICBpc09wZW46IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgdGFnOiAnZGl2JyxcbiAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkNvbGxhcHNlXG59KTtcblxudmFyIHRyYW5zaXRpb25TdGF0dXNUb0NsYXNzSGFzaCA9IChfdHJhbnNpdGlvblN0YXR1c1RvQ2wgPSB7fSwgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FTlRFUklOR10gPSAnY29sbGFwc2luZycsIF90cmFuc2l0aW9uU3RhdHVzVG9DbFtUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJFRF0gPSAnY29sbGFwc2Ugc2hvdycsIF90cmFuc2l0aW9uU3RhdHVzVG9DbFtUcmFuc2l0aW9uU3RhdHVzZXMuRVhJVElOR10gPSAnY29sbGFwc2luZycsIF90cmFuc2l0aW9uU3RhdHVzVG9DbFtUcmFuc2l0aW9uU3RhdHVzZXMuRVhJVEVEXSA9ICdjb2xsYXBzZScsIF90cmFuc2l0aW9uU3RhdHVzVG9DbCk7XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25DbGFzcyhzdGF0dXMpIHtcbiAgcmV0dXJuIHRyYW5zaXRpb25TdGF0dXNUb0NsYXNzSGFzaFtzdGF0dXNdIHx8ICdjb2xsYXBzZSc7XG59XG5cbnZhciBDb2xsYXBzZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDb2xsYXBzZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sbGFwc2UocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpbWVuc2lvbjogbnVsbFxuICAgIH07XG4gICAgWydvbkVudGVyaW5nJywgJ29uRW50ZXJlZCcsICdvbkV4aXQnLCAnb25FeGl0aW5nJywgJ29uRXhpdGVkJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX3RoaXNbbmFtZV0gPSBfdGhpc1tuYW1lXS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29sbGFwc2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBnZXREaW1lbnNpb24obm9kZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhvcml6b250YWwgPyBub2RlLnNjcm9sbFdpZHRoIDogbm9kZS5zY3JvbGxIZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiBvbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IHRoaXMuZ2V0RGltZW5zaW9uKG5vZGUpXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25FbnRlcmVkID0gZnVuY3Rpb24gb25FbnRlcmVkKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJlZChub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdCA9IGZ1bmN0aW9uIG9uRXhpdChub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IHRoaXMuZ2V0RGltZW5zaW9uKG5vZGUpXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGluZyA9IGZ1bmN0aW9uIG9uRXhpdGluZyhub2RlKSB7XG4gICAgLy8gZ2V0dGluZyB0aGlzIHZhcmlhYmxlIHRyaWdnZXJzIGEgcmVmbG93XG4gICAgdGhpcy5nZXREaW1lbnNpb24obm9kZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IDBcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ZWQgPSBmdW5jdGlvbiBvbkV4aXRlZChub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGhvcml6b250YWwgPSBfdGhpcyRwcm9wcy5ob3Jpem9udGFsLFxuICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgbmF2YmFyID0gX3RoaXMkcHJvcHMubmF2YmFyLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJFIpO1xuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuc3RhdGUuZGltZW5zaW9uO1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBwaWNrKG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICAgIHZhciBjaGlsZFByb3BzID0gb21pdChvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCB0cmFuc2l0aW9uUHJvcHMsIHtcbiAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSwgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHZhciBjb2xsYXBzZUNsYXNzID0gZ2V0VHJhbnNpdGlvbkNsYXNzKHN0YXR1cyk7XG4gICAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGhvcml6b250YWwgJiYgJ2NvbGxhcHNlLWhvcml6b250YWwnLCBjb2xsYXBzZUNsYXNzLCBuYXZiYXIgJiYgJ25hdmJhci1jb2xsYXBzZScpLCBjc3NNb2R1bGUpO1xuICAgICAgdmFyIHN0eWxlID0gZGltZW5zaW9uID09PSBudWxsID8gbnVsbCA6IChfcmVmID0ge30sIF9yZWZbaG9yaXpvbnRhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gPSBkaW1lbnNpb24sIF9yZWYpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY2hpbGRQcm9wcy5zdHlsZSksIHN0eWxlKSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICByZWY6IF90aGlzMi5wcm9wcy5pbm5lclJlZlxuICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbGxhcHNlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRXO1xuQ29sbGFwc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFY7XG52YXIgQ29sbGFwc2UkMSA9IENvbGxhcHNlO1xuXG52YXIgX2V4Y2x1ZGVkJFEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiLCBcImNoaWxkcmVuXCIsIFwiYWNjb3JkaW9uSWRcIl07XG52YXIgcHJvcFR5cGVzJFYgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgYWNjb3JkaW9uSWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWRcbn07XG52YXIgZGVmYXVsdFByb3BzJFUgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBBY2NvcmRpb25JdGVtID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhY2NvcmRpb25JZCA9IHByb3BzLmFjY29yZGlvbklkLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkUSk7XG5cbiAgdmFyIF91c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChBY2NvcmRpb25Db250ZXh0KSxcbiAgICAgIG9wZW4gPSBfdXNlQ29udGV4dC5vcGVuO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbi1jb2xsYXBzZScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENvbGxhcHNlJDEsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgaXNPcGVuOiBBcnJheS5pc0FycmF5KG9wZW4pID8gb3Blbi5pbmNsdWRlcyhhY2NvcmRpb25JZCkgOiBvcGVuID09PSBhY2NvcmRpb25JZFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb24tYm9keVwiXG4gIH0sIGNoaWxkcmVuKSk7XG59O1xuXG5BY2NvcmRpb25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyRWO1xuQWNjb3JkaW9uSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVTtcbnZhciBBY2NvcmRpb25JdGVtJDEgPSBBY2NvcmRpb25JdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJFAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjb2xvclwiLCBcImlubmVyUmVmXCIsIFwicGlsbFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkVSA9IHtcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBwaWxsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkVCA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICBwaWxsOiBmYWxzZSxcbiAgdGFnOiAnc3Bhbidcbn07XG5cbnZhciBCYWRnZSA9IGZ1bmN0aW9uIEJhZGdlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIHBpbGwgPSBwcm9wcy5waWxsLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkUCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYmFkZ2UnLCAnYmctJyArIGNvbG9yLCBwaWxsID8gJ3JvdW5kZWQtcGlsbCcgOiBmYWxzZSksIGNzc01vZHVsZSk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMuaHJlZiAmJiBUYWcgPT09ICdzcGFuJykge1xuICAgIFRhZyA9ICdhJztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cbkJhZGdlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRVO1xuQmFkZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFQ7XG52YXIgQmFkZ2UkMSA9IEJhZGdlO1xuXG52YXIgX2V4Y2x1ZGVkJE8gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjb2xvclwiLCBcImJvZHlcIiwgXCJpbnZlcnNlXCIsIFwib3V0bGluZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRUID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbnZlcnNlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYm9keTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvdXRsaW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkUyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmQgPSBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgYm9keSA9IHByb3BzLmJvZHksXG4gICAgICBpbnZlcnNlID0gcHJvcHMuaW52ZXJzZSxcbiAgICAgIG91dGxpbmUgPSBwcm9wcy5vdXRsaW5lLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE8pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQnLCBpbnZlcnNlID8gJ3RleHQtd2hpdGUnIDogZmFsc2UsIGJvZHkgPyAnY2FyZC1ib2R5JyA6IGZhbHNlLCBjb2xvciA/IChvdXRsaW5lID8gJ2JvcmRlcicgOiAnYmcnKSArIFwiLVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cbkNhcmQucHJvcFR5cGVzID0gcHJvcFR5cGVzJFQ7XG5DYXJkLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRTO1xudmFyIENhcmQkMSA9IENhcmQ7XG5cbnZhciBfZXhjbHVkZWQkTiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkUiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRHcm91cCA9IGZ1bmN0aW9uIENhcmRHcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1ncm91cCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyRTO1xuQ2FyZEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRSO1xudmFyIENhcmRHcm91cCQxID0gQ2FyZEdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkJE0gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFIgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFEgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkRGVjayA9IGZ1bmN0aW9uIENhcmREZWNrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRNKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWRlY2snKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmREZWNrLnByb3BUeXBlcyA9IHByb3BUeXBlcyRSO1xuQ2FyZERlY2suZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFE7XG52YXIgQ2FyZERlY2skMSA9IENhcmREZWNrO1xuXG52YXIgX2V4Y2x1ZGVkJEwgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFAgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkQ29sdW1ucyA9IGZ1bmN0aW9uIENhcmRDb2x1bW5zKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRMKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWNvbHVtbnMnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRDb2x1bW5zLnByb3BUeXBlcyA9IHByb3BUeXBlcyRRO1xuQ2FyZENvbHVtbnMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFA7XG52YXIgQ2FyZENvbHVtbnMkMSA9IENhcmRDb2x1bW5zO1xuXG52YXIgX2V4Y2x1ZGVkJEsgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbm5lclJlZlwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyRPID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZEJvZHkgPSBmdW5jdGlvbiBDYXJkQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEspO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5DYXJkQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUDtcbkNhcmRCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRPO1xudmFyIENhcmRCb2R5JDEgPSBDYXJkQm9keTtcblxudmFyIF9leGNsdWRlZCRKID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJE8gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkTiA9IHtcbiAgdGFnOiAnYSdcbn07XG5cbnZhciBDYXJkTGluayA9IGZ1bmN0aW9uIENhcmRMaW5rKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1saW5rJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRMaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyRPO1xuQ2FyZExpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJE47XG52YXIgQ2FyZExpbmskMSA9IENhcmRMaW5rO1xuXG52YXIgX2V4Y2x1ZGVkJEkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJE4gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJE0gPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkRm9vdGVyID0gZnVuY3Rpb24gQ2FyZEZvb3Rlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1mb290ZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRGb290ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJE47XG5DYXJkRm9vdGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRNO1xudmFyIENhcmRGb290ZXIkMSA9IENhcmRGb290ZXI7XG5cbnZhciBfZXhjbHVkZWQkSCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkTCA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRIZWFkZXIgPSBmdW5jdGlvbiBDYXJkSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRIKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTTtcbkNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEw7XG52YXIgQ2FyZEhlYWRlciQxID0gQ2FyZEhlYWRlcjtcblxudmFyIF9leGNsdWRlZCRHID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidG9wXCIsIFwiYm90dG9tXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRMID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYm90dG9tOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEsgPSB7XG4gIHRhZzogJ2ltZydcbn07XG5cbnZhciBDYXJkSW1nID0gZnVuY3Rpb24gQ2FyZEltZyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdG9wID0gcHJvcHMudG9wLFxuICAgICAgYm90dG9tID0gcHJvcHMuYm90dG9tLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkRyk7XG5cbiAgdmFyIGNhcmRJbWdDbGFzc05hbWUgPSAnY2FyZC1pbWcnO1xuXG4gIGlmICh0b3ApIHtcbiAgICBjYXJkSW1nQ2xhc3NOYW1lID0gJ2NhcmQtaW1nLXRvcCc7XG4gIH1cblxuICBpZiAoYm90dG9tKSB7XG4gICAgY2FyZEltZ0NsYXNzTmFtZSA9ICdjYXJkLWltZy1ib3R0b20nO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjYXJkSW1nQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRJbWcucHJvcFR5cGVzID0gcHJvcFR5cGVzJEw7XG5DYXJkSW1nLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRLO1xudmFyIENhcmRJbWckMSA9IENhcmRJbWc7XG5cbnZhciBfZXhjbHVkZWQkRiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkSyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRJbWdPdmVybGF5ID0gZnVuY3Rpb24gQ2FyZEltZ092ZXJsYXkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtaW1nLW92ZXJsYXknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRJbWdPdmVybGF5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRLO1xuQ2FyZEltZ092ZXJsYXkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEo7XG52YXIgQ2FyZEltZ092ZXJsYXkkMSA9IENhcmRJbWdPdmVybGF5O1xuXG52YXIgX2V4Y2x1ZGVkJEUgPSBbXCJpblwiLCBcImNoaWxkcmVuXCIsIFwiY3NzTW9kdWxlXCIsIFwic2xpZGVcIiwgXCJ0YWdcIiwgXCJjbGFzc05hbWVcIl07XG5cbnZhciBDYXJvdXNlbEl0ZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ2Fyb3VzZWxJdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYXJvdXNlbEl0ZW0ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMub25FbnRlciA9IF90aGlzLm9uRW50ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FbnRlcmluZyA9IF90aGlzLm9uRW50ZXJpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ID0gX3RoaXMub25FeGl0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdGluZyA9IF90aGlzLm9uRXhpdGluZy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRlZCA9IF90aGlzLm9uRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDYXJvdXNlbEl0ZW0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkVudGVyID0gZnVuY3Rpb24gb25FbnRlcihub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25FbnRlcmluZyA9IGZ1bmN0aW9uIG9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICAvLyBnZXR0aW5nIHRoaXMgdmFyaWFibGUgdHJpZ2dlcnMgYSByZWZsb3dcbiAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgcmV0dXJuIG9mZnNldEhlaWdodDtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ID0gZnVuY3Rpb24gb25FeGl0KG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRpbmcgPSBmdW5jdGlvbiBvbkV4aXRpbmcobm9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzbGlkZS5icy5jYXJvdXNlbCcpKTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ZWQgPSBmdW5jdGlvbiBvbkV4aXRlZChub2RlKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2xpZC5icy5jYXJvdXNlbCcpKTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0luID0gX3RoaXMkcHJvcHNbXCJpblwiXSxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBzbGlkZSA9IF90aGlzJHByb3BzLnNsaWRlLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgdHJhbnNpdGlvblByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRFKTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbiwgX2V4dGVuZHMoe30sIHRyYW5zaXRpb25Qcm9wcywge1xuICAgICAgZW50ZXI6IHNsaWRlLFxuICAgICAgZXhpdDogc2xpZGUsXG4gICAgICBcImluXCI6IGlzSW4sXG4gICAgICBvbkVudGVyOiB0aGlzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSksIGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBfdGhpczIuY29udGV4dC5kaXJlY3Rpb247XG4gICAgICB2YXIgaXNBY3RpdmUgPSBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FTlRFUkVEIHx8IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRJTkc7XG4gICAgICB2YXIgZGlyZWN0aW9uQ2xhc3NOYW1lID0gKHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRJTkcpICYmIF90aGlzMi5zdGF0ZS5zdGFydEFuaW1hdGlvbiAmJiAoZGlyZWN0aW9uID09PSAnZW5kJyA/ICdjYXJvdXNlbC1pdGVtLXN0YXJ0JyA6ICdjYXJvdXNlbC1pdGVtLWVuZCcpO1xuICAgICAgdmFyIG9yZGVyQ2xhc3NOYW1lID0gc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJJTkcgJiYgKGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyAnY2Fyb3VzZWwtaXRlbS1uZXh0JyA6ICdjYXJvdXNlbC1pdGVtLXByZXYnKTtcbiAgICAgIHZhciBpdGVtQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJvdXNlbC1pdGVtJywgaXNBY3RpdmUgJiYgJ2FjdGl2ZScsIGRpcmVjdGlvbkNsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBpdGVtQ2xhc3Nlc1xuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDYXJvdXNlbEl0ZW07XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5DYXJvdXNlbEl0ZW0ucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24ucHJvcFR5cGVzKSwge30sIHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgXCJpblwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHNsaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn0pO1xuQ2Fyb3VzZWxJdGVtLmRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gIHRhZzogJ2RpdicsXG4gIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5DYXJvdXNlbCxcbiAgc2xpZGU6IHRydWVcbn0pO1xuQ2Fyb3VzZWxJdGVtLmNvbnRleHRUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbEl0ZW0kMSA9IENhcm91c2VsSXRlbTtcblxuLyoqXG4gKiBDYXJvdXNlbENvbnRleHRcbiAqIHtcbiAqICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2VuZCddKS5pc1JlcXVpcmVkLFxuICogfVxuICovXG5cbnZhciBDYXJvdXNlbENvbnRleHQgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciBTV0lQRV9USFJFU0hPTEQgPSA0MDtcblxudmFyIENhcm91c2VsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENhcm91c2VsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmhhbmRsZUtleVByZXNzID0gX3RoaXMuaGFuZGxlS2V5UHJlc3MuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucmVuZGVySXRlbXMgPSBfdGhpcy5yZW5kZXJJdGVtcy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5ob3ZlclN0YXJ0ID0gX3RoaXMuaG92ZXJTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5ob3ZlckVuZCA9IF90aGlzLmhvdmVyRW5kLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gX3RoaXMuaGFuZGxlVG91Y2hFbmQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudG91Y2hTdGFydFggPSAwO1xuICAgIF90aGlzLnRvdWNoU3RhcnRZID0gMDtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUluZGV4OiBfdGhpcy5wcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgIGRpcmVjdGlvbjogJ2VuZCcsXG4gICAgICBpbmRpY2F0b3JDbGlja2VkOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENhcm91c2VsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q29udGV4dFZhbHVlID0gZnVuY3Rpb24gZ2V0Q29udGV4dFZhbHVlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3Rpb246IHRoaXMuc3RhdGUuZGlyZWN0aW9uXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBTZXQgdXAgdGhlIGN5Y2xlXG4gICAgaWYgKHRoaXMucHJvcHMucmlkZSA9PT0gJ2Nhcm91c2VsJykge1xuICAgICAgdGhpcy5zZXRJbnRlcnZhbCgpO1xuICAgIH0gLy8gVE9ETzogbW92ZSB0aGlzIHRvIHRoZSBzcGVjaWZpYyBjYXJvdXNlbCBsaWtlIGJvb3RzdHJhcC4gQ3VycmVudGx5IGl0IHdpbGwgdHJpZ2dlciBBTEwgY2Fyb3VzZWxzIG9uIHRoZSBwYWdlLlxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5UHJlc3MpO1xuICB9O1xuXG4gIENhcm91c2VsLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIHZhciBuZXdTdGF0ZSA9IG51bGw7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gcHJldlN0YXRlLmFjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb24gPSBwcmV2U3RhdGUuZGlyZWN0aW9uLFxuICAgICAgICBpbmRpY2F0b3JDbGlja2VkID0gcHJldlN0YXRlLmluZGljYXRvckNsaWNrZWQ7XG5cbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXJlY3Rpb24gdG8gdHVyblxuICAgICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCA9PT0gYWN0aXZlSW5kZXggKyAxKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdlbmQnO1xuICAgICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggPT09IGFjdGl2ZUluZGV4IC0gMSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnc3RhcnQnO1xuICAgICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggPCBhY3RpdmVJbmRleCkge1xuICAgICAgICBkaXJlY3Rpb24gPSBpbmRpY2F0b3JDbGlja2VkID8gJ3N0YXJ0JyA6ICdlbmQnO1xuICAgICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGluZGljYXRvckNsaWNrZWQgPyAnZW5kJyA6ICdzdGFydCc7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogbmV4dFByb3BzLmFjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgaW5kaWNhdG9yQ2xpY2tlZDogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmFjdGl2ZUluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4KSByZXR1cm47XG4gICAgdGhpcy5zZXRJbnRlcnZhbCh0aGlzLnByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5UHJlc3MpO1xuICB9O1xuXG4gIF9wcm90by5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChfc2V0SW50ZXJ2YWwpIHtcbiAgICBmdW5jdGlvbiBzZXRJbnRlcnZhbCgpIHtcbiAgICAgIHJldHVybiBfc2V0SW50ZXJ2YWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfc2V0SW50ZXJ2YWwudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNldEludGVydmFsO1xuICB9KGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIG5vdCB0byBoYXZlIG11bHRpcGxlIGludGVydmFscyBnb2luZy4uLlxuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgaWYgKHByb3BzLmludGVydmFsKSB7XG4gICAgICB0aGlzLmN5Y2xlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BzLm5leHQoKTtcbiAgICAgIH0sIHBhcnNlSW50KHByb3BzLmludGVydmFsLCAxMCkpO1xuICAgIH1cbiAgfSk7XG5cbiAgX3Byb3RvLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbiAoX2NsZWFySW50ZXJ2YWwpIHtcbiAgICBmdW5jdGlvbiBjbGVhckludGVydmFsKCkge1xuICAgICAgcmV0dXJuIF9jbGVhckludGVydmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfY2xlYXJJbnRlcnZhbC50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY2xlYXJJbnRlcnZhbDtcbiAgfShmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN5Y2xlSW50ZXJ2YWwpO1xuICB9KTtcblxuICBfcHJvdG8uaG92ZXJTdGFydCA9IGZ1bmN0aW9uIGhvdmVyU3RhcnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm1vdXNlRW50ZXIpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgKF90aGlzJHByb3BzID0gdGhpcy5wcm9wcykubW91c2VFbnRlci5hcHBseShfdGhpcyRwcm9wcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhvdmVyRW5kID0gZnVuY3Rpb24gaG92ZXJFbmQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tb3VzZUxlYXZlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyO1xuXG4gICAgICAoX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcykubW91c2VMZWF2ZS5hcHBseShfdGhpcyRwcm9wczIsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVLZXlQcmVzcyA9IGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2dCkge1xuICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRoaXMucHJvcHMucHJldmlvdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMucHJvcHMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5lbmFibGVUb3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmVuYWJsZVRvdWNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIHZhciBjdXJyZW50WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICB2YXIgZGlmZlggPSBNYXRoLmFicyh0aGlzLnRvdWNoU3RhcnRYIC0gY3VycmVudFgpO1xuICAgIHZhciBkaWZmWSA9IE1hdGguYWJzKHRoaXMudG91Y2hTdGFydFkgLSBjdXJyZW50WSk7IC8vIERvbid0IHN3aXBlIGlmIFktbW92ZW1lbnQgaXMgYmlnZ2VyIHRoYW4gWC1tb3ZlbWVudFxuXG4gICAgaWYgKGRpZmZYIDwgZGlmZlkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGlmZlggPCBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFggPCB0aGlzLnRvdWNoU3RhcnRYKSB7XG4gICAgICB0aGlzLnByb3BzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5wcmV2aW91cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVySXRlbXMgPSBmdW5jdGlvbiByZW5kZXJJdGVtcyhjYXJvdXNlbEl0ZW1zLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzbGlkZSA9IHRoaXMucHJvcHMuc2xpZGU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0sIGNhcm91c2VsSXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgdmFyIGlzSW4gPSBpbmRleCA9PT0gX3RoaXMyLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoaXRlbSwge1xuICAgICAgICBcImluXCI6IGlzSW4sXG4gICAgICAgIHNsaWRlOiBzbGlkZVxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMzLmNzc01vZHVsZSxcbiAgICAgICAgc2xpZGUgPSBfdGhpcyRwcm9wczMuc2xpZGUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgIGRhcmsgPSBfdGhpcyRwcm9wczMuZGFyayxcbiAgICAgICAgZmFkZSA9IF90aGlzJHByb3BzMy5mYWRlO1xuICAgIHZhciBvdXRlckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwnLCBmYWRlLCBzbGlkZSAmJiAnc2xpZGUnLCBkYXJrICYmICdjYXJvdXNlbC1kYXJrJyksIGNzc01vZHVsZSk7XG4gICAgdmFyIGlubmVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnY2Fyb3VzZWwtaW5uZXInKSwgY3NzTW9kdWxlKTsgLy8gZmlsdGVyIG91dCBib29sZWFucywgbnVsbCwgb3IgdW5kZWZpbmVkXG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZCAhPT0gbnVsbCAmJiBjaGlsZCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nO1xuICAgIH0pO1xuICAgIHZhciBzbGlkZXNPbmx5ID0gY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQudHlwZSA9PT0gQ2Fyb3VzZWxJdGVtJDE7XG4gICAgfSk7IC8vIFJlbmRlcmluZyBvbmx5IHNsaWRlc1xuXG4gICAgaWYgKHNsaWRlc09ubHkpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG91dGVyQ2xhc3NlcyxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhvdmVyU3RhcnQsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5ob3ZlckVuZFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZXh0VmFsdWUoKVxuICAgICAgfSwgdGhpcy5yZW5kZXJJdGVtcyhjaGlsZHJlbiwgaW5uZXJDbGFzc2VzKSkpO1xuICAgIH0gLy8gUmVuZGVyaW5nIHNsaWRlcyBhbmQgY29udHJvbHNcblxuXG4gICAgaWYgKGNoaWxkcmVuWzBdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHZhciBfY2Fyb3VzZWxJdGVtcyA9IGNoaWxkcmVuWzBdO1xuICAgICAgdmFyIF9jb250cm9sTGVmdCA9IGNoaWxkcmVuWzFdO1xuICAgICAgdmFyIF9jb250cm9sUmlnaHQgPSBjaGlsZHJlblsyXTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG91dGVyQ2xhc3NlcyxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhvdmVyU3RhcnQsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5ob3ZlckVuZFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZXh0VmFsdWUoKVxuICAgICAgfSwgdGhpcy5yZW5kZXJJdGVtcyhfY2Fyb3VzZWxJdGVtcywgaW5uZXJDbGFzc2VzKSwgX2NvbnRyb2xMZWZ0LCBfY29udHJvbFJpZ2h0KSk7XG4gICAgfSAvLyBSZW5kZXJpbmcgaW5kaWNhdG9ycywgc2xpZGVzIGFuZCBjb250cm9sc1xuXG5cbiAgICB2YXIgaW5kaWNhdG9ycyA9IGNoaWxkcmVuWzBdO1xuXG4gICAgdmFyIHdyYXBwZWRPbkNsaWNrID0gZnVuY3Rpb24gd3JhcHBlZE9uQ2xpY2soZSkge1xuICAgICAgaWYgKHR5cGVvZiBpbmRpY2F0b3JzLnByb3BzLm9uQ2xpY2tIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5kaWNhdG9yQ2xpY2tlZDogdHJ1ZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluZGljYXRvcnMucHJvcHMub25DbGlja0hhbmRsZXIoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgd3JhcHBlZEluZGljYXRvcnMgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGluZGljYXRvcnMsIHtcbiAgICAgIG9uQ2xpY2tIYW5kbGVyOiB3cmFwcGVkT25DbGlja1xuICAgIH0pO1xuICAgIHZhciBjYXJvdXNlbEl0ZW1zID0gY2hpbGRyZW5bMV07XG4gICAgdmFyIGNvbnRyb2xMZWZ0ID0gY2hpbGRyZW5bMl07XG4gICAgdmFyIGNvbnRyb2xSaWdodCA9IGNoaWxkcmVuWzNdO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBvdXRlckNsYXNzZXMsXG4gICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaG92ZXJTdGFydCxcbiAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5ob3ZlckVuZCxcbiAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgfSwgd3JhcHBlZEluZGljYXRvcnMsIHRoaXMucmVuZGVySXRlbXMoY2Fyb3VzZWxJdGVtcywgaW5uZXJDbGFzc2VzKSwgY29udHJvbExlZnQsIGNvbnRyb2xSaWdodCkpO1xuICB9O1xuXG4gIHJldHVybiBDYXJvdXNlbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkNhcm91c2VsLnByb3BUeXBlcyA9IHtcbiAgLy8gdGhlIGN1cnJlbnQgYWN0aXZlIHNsaWRlIG9mIHRoZSBjYXJvdXNlbFxuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIC8vIGEgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGFkdmFuY2UgdGhlIGNhcm91c2VsIHRvIHRoZSBuZXh0IHNsaWRlICh2aWEgYWN0aXZlSW5kZXgpXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuICAvLyBhIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBhZHZhbmNlIHRoZSBjYXJvdXNlbCB0byB0aGUgcHJldmlvdXMgc2xpZGUgKHZpYSBhY3RpdmVJbmRleClcbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuICAvLyBjb250cm9scyBpZiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBzaG91bGQgY29udHJvbCB0aGUgY2Fyb3VzZWxcbiAga2V5Ym9hcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiBJZiBzZXQgdG8gXCJob3ZlclwiLCBwYXVzZXMgdGhlIGN5Y2xpbmcgb2YgdGhlIGNhcm91c2VsIG9uIG1vdXNlZW50ZXIgYW5kIHJlc3VtZXMgdGhlIGN5Y2xpbmcgb2YgdGhlIGNhcm91c2VsIG9uXG4gICAqIG1vdXNlbGVhdmUuIElmIHNldCB0byBmYWxzZSwgaG92ZXJpbmcgb3ZlciB0aGUgY2Fyb3VzZWwgd29uJ3QgcGF1c2UgaXQuIChkZWZhdWx0OiBcImhvdmVyXCIpXG4gICAqL1xuICBwYXVzZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2hvdmVyJywgZmFsc2VdKSxcbiAgLy8gQXV0b3BsYXlzIHRoZSBjYXJvdXNlbCBhZnRlciB0aGUgdXNlciBtYW51YWxseSBjeWNsZXMgdGhlIGZpcnN0IGl0ZW0uIElmIFwiY2Fyb3VzZWxcIiwgYXV0b3BsYXlzIHRoZSBjYXJvdXNlbCBvbiBsb2FkLlxuICAvLyBUaGlzIGlzIGhvdyBib290c3RyYXAgZGVmaW5lcyBpdC4uLiBJIHdvdWxkIHByZWZlciBhIGJvb2wgbmFtZWQgYXV0b3BsYXkgb3Igc29tZXRoaW5nLi4uXG4gIHJpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydjYXJvdXNlbCddKSxcbiAgLy8gdGhlIGludGVydmFsIGF0IHdoaWNoIHRoZSBjYXJvdXNlbCBhdXRvbWF0aWNhbGx5IGN5Y2xlcyAoZGVmYXVsdDogNTAwMClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzXG4gIGludGVydmFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIC8vIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBlbnRlcnMgdGhlIENhcm91c2VsXG4gIG1vdXNlRW50ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgLy8gY2FsbGVkIHdoZW4gdGhlIG1vdXNlIGV4aXRzIHRoZSBDYXJvdXNlbFxuICBtb3VzZUxlYXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8vIGNvbnRyb2xzIHdoZXRoZXIgdGhlIHNsaWRlIGFuaW1hdGlvbiBvbiB0aGUgQ2Fyb3VzZWwgd29ya3Mgb3Igbm90XG4gIHNsaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIC8vIG1ha2UgdGhlIGNvbnRyb2xzLCBpbmRpY2F0b3JzIGFuZCBjYXB0aW9ucyBkYXJrIG9uIHRoZSBDYXJvdXNlbFxuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGVuYWJsZVRvdWNoOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG5DYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiB0cnVlLFxuICBlbmFibGVUb3VjaDogdHJ1ZSxcbiAgZmFkZTogZmFsc2Vcbn07XG5DYXJvdXNlbC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbCQxID0gQ2Fyb3VzZWw7XG5cbnZhciBDYXJvdXNlbENvbnRyb2wgPSBmdW5jdGlvbiBDYXJvdXNlbENvbnRyb2wocHJvcHMpIHtcbiAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgIG9uQ2xpY2tIYW5kbGVyID0gcHJvcHMub25DbGlja0hhbmRsZXIsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBkaXJlY3Rpb25UZXh0ID0gcHJvcHMuZGlyZWN0aW9uVGV4dCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgdmFyIGFuY2hvckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBcImNhcm91c2VsLWNvbnRyb2wtXCIgKyBkaXJlY3Rpb24pLCBjc3NNb2R1bGUpO1xuICB2YXIgaWNvbkNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oXCJjYXJvdXNlbC1jb250cm9sLVwiICsgZGlyZWN0aW9uICsgXCItaWNvblwiKSwgY3NzTW9kdWxlKTtcbiAgdmFyIHNjcmVlblJlYWRlckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3Zpc3VhbGx5LWhpZGRlbicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICAvLyBXZSBuZWVkIHRvIGRpc2FibGUgdGhpcyBsaW50aW5nIHJ1bGUgdG8gdXNlIGFuIGA8YT5gIGluc3RlYWQgb2ZcbiAgICAvLyBgPGJ1dHRvbj5gIGJlY2F1c2UgdGhhdCdzIHdoYXQgdGhlIEJvb3RzdHJhcCBleGFtcGxlcyByZXF1aXJlOlxuICAgIC8vIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuNS9jb21wb25lbnRzL2Nhcm91c2VsLyN3aXRoLWNvbnRyb2xzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZFxuICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBjbGFzc05hbWU6IGFuY2hvckNsYXNzZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICB9LFxuICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgIHRhYkluZGV4OiBcIjBcIixcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2xpY2tIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGljb25DbGFzc2VzLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogc2NyZWVuUmVhZGVyQ2xhc3Nlc1xuICAgIH0sIGRpcmVjdGlvblRleHQgfHwgZGlyZWN0aW9uKSlcbiAgKTtcbn07XG5cbkNhcm91c2VsQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKS5pc1JlcXVpcmVkLFxuICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpcmVjdGlvblRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsQ29udHJvbCQxID0gQ2Fyb3VzZWxDb250cm9sO1xuXG52YXIgQ2Fyb3VzZWxJbmRpY2F0b3JzID0gZnVuY3Rpb24gQ2Fyb3VzZWxJbmRpY2F0b3JzKHByb3BzKSB7XG4gIHZhciBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgYWN0aXZlSW5kZXggPSBwcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIG9uQ2xpY2tIYW5kbGVyID0gcHJvcHMub25DbGlja0hhbmRsZXIsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBsaXN0Q2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJvdXNlbC1pbmRpY2F0b3JzJyksIGNzc01vZHVsZSk7XG4gIHZhciBpbmRpY2F0b3JzID0gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICB2YXIgaW5kaWNhdG9yQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh7XG4gICAgICBhY3RpdmU6IGFjdGl2ZUluZGV4ID09PSBpZHhcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBpdGVtLmNhcHRpb24sXG4gICAgICBcImRhdGEtYnMtdGFyZ2V0XCI6IHRydWUsXG4gICAgICBrZXk6IFwiXCIgKyAoaXRlbS5rZXkgfHwgT2JqZWN0LnZhbHVlcyhpdGVtKS5qb2luKCcnKSksXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNsaWNrSGFuZGxlcihpZHgpO1xuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZTogaW5kaWNhdG9yQ2xhc3Nlc1xuICAgIH0sIGl0ZW0uY2FwdGlvbik7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0sIGluZGljYXRvcnMpO1xufTtcblxuQ2Fyb3VzZWxJbmRpY2F0b3JzLnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXkuaXNSZXF1aXJlZCxcbiAgYWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9uQ2xpY2tIYW5kbGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbEluZGljYXRvcnMkMSA9IENhcm91c2VsSW5kaWNhdG9ycztcblxudmFyIENhcm91c2VsQ2FwdGlvbiA9IGZ1bmN0aW9uIENhcm91c2VsQ2FwdGlvbihwcm9wcykge1xuICB2YXIgY2FwdGlvbkhlYWRlciA9IHByb3BzLmNhcHRpb25IZWFkZXIsXG4gICAgICBjYXB0aW9uVGV4dCA9IHByb3BzLmNhcHRpb25UZXh0LFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJvdXNlbC1jYXB0aW9uJywgJ2Qtbm9uZScsICdkLW1kLWJsb2NrJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBjYXB0aW9uSGVhZGVyKSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBjYXB0aW9uVGV4dCkpO1xufTtcblxuQ2Fyb3VzZWxDYXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbkhlYWRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjYXB0aW9uVGV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLmlzUmVxdWlyZWQsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWxDYXB0aW9uJDEgPSBDYXJvdXNlbENhcHRpb247XG5cbnZhciBfZXhjbHVkZWQkRCA9IFtcImRlZmF1bHRBY3RpdmVJbmRleFwiLCBcImF1dG9QbGF5XCIsIFwiaW5kaWNhdG9yc1wiLCBcImNvbnRyb2xzXCIsIFwiaXRlbXNcIiwgXCJnb1RvSW5kZXhcIl07XG52YXIgcHJvcFR5cGVzJEogPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LmlzUmVxdWlyZWQsXG4gIGluZGljYXRvcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29udHJvbHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYXV0b1BsYXk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGVmYXVsdEFjdGl2ZUluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgYWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBuZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHByZXZpb3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGdvVG9JbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59O1xuXG52YXIgVW5jb250cm9sbGVkQ2Fyb3VzZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQ2Fyb3VzZWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZENhcm91c2VsKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVJbmRleDogcHJvcHMuZGVmYXVsdEFjdGl2ZUluZGV4IHx8IDBcbiAgICB9O1xuICAgIF90aGlzLm5leHQgPSBfdGhpcy5uZXh0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnByZXZpb3VzID0gX3RoaXMucHJldmlvdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ29Ub0luZGV4ID0gX3RoaXMuZ29Ub0luZGV4LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdGluZyA9IF90aGlzLm9uRXhpdGluZy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRlZCA9IF90aGlzLm9uRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uRXhpdGluZyA9IGZ1bmN0aW9uIG9uRXhpdGluZygpIHtcbiAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8ubmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgdmFyIG5leHRJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXh0SW5kZXhcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucHJldmlvdXMgPSBmdW5jdGlvbiBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB2YXIgbmV4dEluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gMCA/IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoIC0gMSA6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggLSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlSW5kZXg6IG5leHRJbmRleFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nb1RvSW5kZXggPSBmdW5jdGlvbiBnb1RvSW5kZXgobmV3SW5kZXgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXdJbmRleFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvUGxheSA9IF90aGlzJHByb3BzLmF1dG9QbGF5LFxuICAgICAgICBpbmRpY2F0b3JzID0gX3RoaXMkcHJvcHMuaW5kaWNhdG9ycyxcbiAgICAgICAgY29udHJvbHMgPSBfdGhpcyRwcm9wcy5jb250cm9scyxcbiAgICAgICAgaXRlbXMgPSBfdGhpcyRwcm9wcy5pdGVtcyxcbiAgICAgICAgZ29Ub0luZGV4ID0gX3RoaXMkcHJvcHMuZ29Ub0luZGV4LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRCk7XG5cbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbGlkZXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBpdGVtLmtleSB8fCBpdGVtLnNyYztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxJdGVtJDEsIHtcbiAgICAgICAgb25FeGl0aW5nOiBfdGhpczIub25FeGl0aW5nLFxuICAgICAgICBvbkV4aXRlZDogX3RoaXMyLm9uRXhpdGVkLFxuICAgICAgICBrZXk6IGtleVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImQtYmxvY2sgdy0xMDBcIixcbiAgICAgICAgc3JjOiBpdGVtLnNyYyxcbiAgICAgICAgYWx0OiBpdGVtLmFsdFRleHRcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDYXB0aW9uJDEsIHtcbiAgICAgICAgY2FwdGlvblRleHQ6IGl0ZW0uY2FwdGlvbixcbiAgICAgICAgY2FwdGlvbkhlYWRlcjogaXRlbS5oZWFkZXIgfHwgaXRlbS5jYXB0aW9uXG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbCQxLCBfZXh0ZW5kcyh7XG4gICAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgICBuZXh0OiB0aGlzLm5leHQsXG4gICAgICBwcmV2aW91czogdGhpcy5wcmV2aW91cyxcbiAgICAgIHJpZGU6IGF1dG9QbGF5ID8gJ2Nhcm91c2VsJyA6IHVuZGVmaW5lZFxuICAgIH0sIHByb3BzKSwgaW5kaWNhdG9ycyAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxJbmRpY2F0b3JzJDEsIHtcbiAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgIGFjdGl2ZUluZGV4OiBwcm9wcy5hY3RpdmVJbmRleCB8fCBhY3RpdmVJbmRleCxcbiAgICAgIG9uQ2xpY2tIYW5kbGVyOiBnb1RvSW5kZXggfHwgdGhpcy5nb1RvSW5kZXhcbiAgICB9KSwgc2xpZGVzLCBjb250cm9scyAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250cm9sJDEsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJwcmV2XCIsXG4gICAgICBkaXJlY3Rpb25UZXh0OiBcIlByZXZpb3VzXCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMucHJldmlvdXMgfHwgdGhpcy5wcmV2aW91c1xuICAgIH0pLCBjb250cm9scyAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250cm9sJDEsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJuZXh0XCIsXG4gICAgICBkaXJlY3Rpb25UZXh0OiBcIk5leHRcIixcbiAgICAgIG9uQ2xpY2tIYW5kbGVyOiBwcm9wcy5uZXh0IHx8IHRoaXMubmV4dFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkQ2Fyb3VzZWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblVuY29udHJvbGxlZENhcm91c2VsLnByb3BUeXBlcyA9IHByb3BUeXBlcyRKO1xuVW5jb250cm9sbGVkQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0ge1xuICBjb250cm9sczogdHJ1ZSxcbiAgaW5kaWNhdG9yczogdHJ1ZSxcbiAgYXV0b1BsYXk6IHRydWVcbn07XG52YXIgVW5jb250cm9sbGVkQ2Fyb3VzZWwkMSA9IFVuY29udHJvbGxlZENhcm91c2VsO1xuXG52YXIgX2V4Y2x1ZGVkJEMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEkgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkU3VidGl0bGUgPSBmdW5jdGlvbiBDYXJkU3VidGl0bGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtc3VidGl0bGUnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNhcmRTdWJ0aXRsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSTtcbkNhcmRTdWJ0aXRsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSTtcbnZhciBDYXJkU3VidGl0bGUkMSA9IENhcmRTdWJ0aXRsZTtcblxudmFyIF9leGNsdWRlZCRCID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRIID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRIID0ge1xuICB0YWc6ICdwJ1xufTtcblxudmFyIENhcmRUZXh0ID0gZnVuY3Rpb24gQ2FyZFRleHQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZFRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJEg7XG5DYXJkVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSDtcbnZhciBDYXJkVGV4dCQxID0gQ2FyZFRleHQ7XG5cbnZhciBfZXhjbHVkZWQkQSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkRyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkRyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRUaXRsZSA9IGZ1bmN0aW9uIENhcmRUaXRsZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkQSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC10aXRsZScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZFRpdGxlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRHO1xuQ2FyZFRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRHO1xudmFyIENhcmRUaXRsZSQxID0gQ2FyZFRpdGxlO1xuXG52YXIgX2V4Y2x1ZGVkJHogPSBbXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcImlzT3BlblwiLCBcImZsaXBcIiwgXCJ0YXJnZXRcIiwgXCJvZmZzZXRcIiwgXCJmYWxsYmFja1BsYWNlbWVudHNcIiwgXCJwbGFjZW1lbnRQcmVmaXhcIiwgXCJhcnJvd0NsYXNzTmFtZVwiLCBcImhpZGVBcnJvd1wiLCBcInBvcHBlckNsYXNzTmFtZVwiLCBcInRhZ1wiLCBcImNvbnRhaW5lclwiLCBcIm1vZGlmaWVyc1wiLCBcInN0cmF0ZWd5XCIsIFwiYm91bmRhcmllc0VsZW1lbnRcIiwgXCJvbkNsb3NlZFwiLCBcImZhZGVcIiwgXCJ0cmFuc2l0aW9uXCIsIFwicGxhY2VtZW50XCJdO1xuXG5mdW5jdGlvbiBub29wJDIoKSB7fVxuXG52YXIgcHJvcFR5cGVzJEYgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBwb3BwZXJDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBwbGFjZW1lbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBwbGFjZW1lbnRQcmVmaXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBhcnJvd0NsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGhpZGVBcnJvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbC5pc1JlcXVpcmVkLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBvZmZzZXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciksXG4gIGZhbGxiYWNrUGxhY2VtZW50czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgZmxpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICB0YXJnZXQ6IHRhcmdldFByb3BUeXBlLmlzUmVxdWlyZWQsXG4gIG1vZGlmaWVyczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgc3RyYXRlZ3k6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBib3VuZGFyaWVzRWxlbWVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBET01FbGVtZW50XSksXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcylcbn07XG52YXIgZGVmYXVsdFByb3BzJEYgPSB7XG4gIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50JyxcbiAgcGxhY2VtZW50OiAnYXV0bycsXG4gIGhpZGVBcnJvdzogZmFsc2UsXG4gIGlzT3BlbjogZmFsc2UsXG4gIG9mZnNldDogWzAsIDBdLFxuICBmbGlwOiB0cnVlLFxuICBjb250YWluZXI6ICdib2R5JyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgb25DbG9zZWQ6IG5vb3AkMixcbiAgZmFkZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKVxufTtcblxudmFyIFBvcHBlckNvbnRlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9wcGVyQ29udGVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wcGVyQ29udGVudChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnNldFRhcmdldE5vZGUgPSBfdGhpcy5zZXRUYXJnZXROb2RlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdldFRhcmdldE5vZGUgPSBfdGhpcy5nZXRUYXJnZXROb2RlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNsb3NlZCA9IF90aGlzLm9uQ2xvc2VkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBvcHBlckNvbnRlbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5pc09wZW4gJiYgIXN0YXRlLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICAgIH07XG4gICAgfSBlbHNlIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHZhciBfcHJvdG8gPSBQb3BwZXJDb250ZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHRoaXMuX2VsZW1lbnQuY2hpbGROb2RlcyAmJiB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0gJiYgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldFRhcmdldE5vZGUgPSBmdW5jdGlvbiBzZXRUYXJnZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLnRhcmdldE5vZGUgPSB0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgPyBnZXRUYXJnZXQobm9kZSkgOiBub2RlO1xuICB9O1xuXG4gIF9wcm90by5nZXRUYXJnZXROb2RlID0gZnVuY3Rpb24gZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXROb2RlO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb250YWluZXJOb2RlID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICByZXR1cm4gZ2V0VGFyZ2V0KHRoaXMucHJvcHMuY29udGFpbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UmVmID0gZnVuY3Rpb24gZ2V0UmVmKHJlZikge1xuICAgIHRoaXMuX2VsZW1lbnQgPSByZWY7XG4gIH07XG5cbiAgX3Byb3RvLm9uQ2xvc2VkID0gZnVuY3Rpb24gb25DbG9zZWQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlZCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgb2Zmc2V0ID0gX3RoaXMkcHJvcHMub2Zmc2V0LFxuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHMgPSBfdGhpcyRwcm9wcy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICAgIHBsYWNlbWVudFByZWZpeCA9IF90aGlzJHByb3BzLnBsYWNlbWVudFByZWZpeCxcbiAgICAgICAgX2Fycm93Q2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuYXJyb3dDbGFzc05hbWUsXG4gICAgICAgIGhpZGVBcnJvdyA9IF90aGlzJHByb3BzLmhpZGVBcnJvdyxcbiAgICAgICAgX3BvcHBlckNsYXNzTmFtZSA9IF90aGlzJHByb3BzLnBvcHBlckNsYXNzTmFtZSxcbiAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBtb2RpZmllcnMgPSBfdGhpcyRwcm9wcy5tb2RpZmllcnMsXG4gICAgICAgIHN0cmF0ZWd5ID0gX3RoaXMkcHJvcHMuc3RyYXRlZ3ksXG4gICAgICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gX3RoaXMkcHJvcHMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wcy5mYWRlLFxuICAgICAgICB0cmFuc2l0aW9uID0gX3RoaXMkcHJvcHMudHJhbnNpdGlvbixcbiAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50LFxuICAgICAgICBhdHRycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkeik7XG5cbiAgICB2YXIgYXJyb3dDbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2Fycm93JywgX2Fycm93Q2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgcG9wcGVyQ2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKF9wb3BwZXJDbGFzc05hbWUsIHBsYWNlbWVudFByZWZpeCA/IHBsYWNlbWVudFByZWZpeCArIFwiLWF1dG9cIiA6ICcnKSwgdGhpcy5wcm9wcy5jc3NNb2R1bGUpO1xuICAgIHZhciBtb2RpZmllck5hbWVzID0gbW9kaWZpZXJzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0ubmFtZTtcbiAgICB9KTtcbiAgICB2YXIgYmFzZU1vZGlmaWVycyA9IFt7XG4gICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICBlbmFibGVkOiBmbGlwLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IGZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBib3VuZGFyeTogYm91bmRhcmllc0VsZW1lbnRcbiAgICAgIH1cbiAgICB9XS5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiAhbW9kaWZpZXJOYW1lcy5pbmNsdWRlcyhtLm5hbWUpO1xuICAgIH0pO1xuICAgIHZhciBleHRlbmRlZE1vZGlmaWVycyA9IFtdLmNvbmNhdChiYXNlTW9kaWZpZXJzLCBtb2RpZmllcnMpO1xuXG4gICAgdmFyIHBvcHBlclRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0cmFuc2l0aW9uKSwge30sIHtcbiAgICAgIGJhc2VDbGFzczogZmFkZSA/IHRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICB0aW1lb3V0OiBmYWRlID8gdHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgcG9wcGVyVHJhbnNpdGlvbiwgYXR0cnMsIHtcbiAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25DbG9zZWQsXG4gICAgICB0YWc6IHRhZ1xuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUG9wcGVyLCB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50OiB0aGlzLnRhcmdldE5vZGUsXG4gICAgICBtb2RpZmllcnM6IGV4dGVuZGVkTW9kaWZpZXJzLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3lcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgICAgICBwb3BwZXJQbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgICAgICBpc1JlZmVyZW5jZUhpZGRlbiA9IF9yZWYuaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICAgICAgYXJyb3dQcm9wcyA9IF9yZWYuYXJyb3dQcm9wcyxcbiAgICAgICAgICB1cGRhdGUgPSBfcmVmLnVwZGF0ZTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHJlZixcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IHBvcHBlckNsYXNzTmFtZSxcbiAgICAgICAgXCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIjogcG9wcGVyUGxhY2VtZW50LFxuICAgICAgICBcImRhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW5cIjogaXNSZWZlcmVuY2VIaWRkZW4gPyAndHJ1ZScgOiB1bmRlZmluZWRcbiAgICAgIH0sIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHtcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICAgIH0pIDogY2hpbGRyZW4sICFoaWRlQXJyb3cgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIHJlZjogYXJyb3dQcm9wcy5yZWYsXG4gICAgICAgIGNsYXNzTmFtZTogYXJyb3dDbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBhcnJvd1Byb3BzLnN0eWxlXG4gICAgICB9KSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRUYXJnZXROb2RlKHRoaXMucHJvcHMudGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGFpbmVyID09PSAnaW5saW5lJyA/IHRoaXMucmVuZGVyQ2hpbGRyZW4oKSA6IFJlYWN0RE9NX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVQb3J0YWwoIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogdGhpcy5nZXRSZWZcbiAgICAgIH0sIHRoaXMucmVuZGVyQ2hpbGRyZW4oKSksIHRoaXMuZ2V0Q29udGFpbmVyTm9kZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUG9wcGVyQ29udGVudDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBvcHBlckNvbnRlbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzJEY7XG5Qb3BwZXJDb250ZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRGO1xudmFyIFBvcHBlckNvbnRlbnQkMSA9IFBvcHBlckNvbnRlbnQ7XG5cbnZhciBQb3BwZXJUYXJnZXRIZWxwZXIgPSBmdW5jdGlvbiBQb3BwZXJUYXJnZXRIZWxwZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgY29udGV4dC5wb3BwZXJNYW5hZ2VyLnNldFRhcmdldE5vZGUoZ2V0VGFyZ2V0KHByb3BzLnRhcmdldCkpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cblBvcHBlclRhcmdldEhlbHBlci5jb250ZXh0VHlwZXMgPSB7XG4gIHBvcHBlck1hbmFnZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Qb3BwZXJUYXJnZXRIZWxwZXIucHJvcFR5cGVzID0ge1xuICB0YXJnZXQ6IHRhcmdldFByb3BUeXBlLmlzUmVxdWlyZWRcbn07XG52YXIgUG9wcGVyVGFyZ2V0SGVscGVyJDEgPSBQb3BwZXJUYXJnZXRIZWxwZXI7XG5cbnZhciBwcm9wVHlwZXMkRSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBwbGFjZW1lbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoUG9wcGVyUGxhY2VtZW50cyksXG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGhpZGVBcnJvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3VuZGFyaWVzRWxlbWVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBET01FbGVtZW50XSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGlubmVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYXJyb3dDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBwb3BwZXJDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgYXV0b2hpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcGxhY2VtZW50UHJlZml4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZGVsYXk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgICBzaG93OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgICBoaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlclxuICB9KSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgbW9kaWZpZXJzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBzdHJhdGVneTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG9mZnNldDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdF0pLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmbGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgREVGQVVMVF9ERUxBWVMgPSB7XG4gIHNob3c6IDAsXG4gIGhpZGU6IDUwXG59O1xudmFyIGRlZmF1bHRQcm9wcyRFID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBoaWRlQXJyb3c6IGZhbHNlLFxuICBhdXRvaGlkZTogZmFsc2UsXG4gIGRlbGF5OiBERUZBVUxUX0RFTEFZUyxcbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7fSxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgZmFkZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gaXNJbkRPTVN1YnRyZWUoZWxlbWVudCwgc3VidHJlZVJvb3QpIHtcbiAgcmV0dXJuIHN1YnRyZWVSb290ICYmIChlbGVtZW50ID09PSBzdWJ0cmVlUm9vdCB8fCBzdWJ0cmVlUm9vdC5jb250YWlucyhlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGlzSW5ET01TdWJ0cmVlcyhlbGVtZW50LCBzdWJ0cmVlUm9vdHMpIHtcbiAgaWYgKHN1YnRyZWVSb290cyA9PT0gdm9pZCAwKSB7XG4gICAgc3VidHJlZVJvb3RzID0gW107XG4gIH1cblxuICByZXR1cm4gc3VidHJlZVJvb3RzICYmIHN1YnRyZWVSb290cy5sZW5ndGggJiYgc3VidHJlZVJvb3RzLmZpbHRlcihmdW5jdGlvbiAoc3ViVHJlZVJvb3QpIHtcbiAgICByZXR1cm4gaXNJbkRPTVN1YnRyZWUoZWxlbWVudCwgc3ViVHJlZVJvb3QpO1xuICB9KVswXTtcbn1cblxudmFyIFRvb2x0aXBQb3BvdmVyV3JhcHBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUb29sdGlwUG9wb3ZlcldyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXBQb3BvdmVyV3JhcHBlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl90YXJnZXRzID0gW107XG4gICAgX3RoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSBudWxsO1xuICAgIF90aGlzLmFkZFRhcmdldEV2ZW50cyA9IF90aGlzLmFkZFRhcmdldEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMgPSBfdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnNob3dXaXRoRGVsYXkgPSBfdGhpcy5zaG93V2l0aERlbGF5LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhpZGVXaXRoRGVsYXkgPSBfdGhpcy5oaWRlV2l0aERlbGF5LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQgPSBfdGhpcy5vbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50ID0gX3RoaXMub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2hvdyA9IF90aGlzLnNob3cuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGlkZSA9IF90aGlzLmhpZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Fc2NLZXlEb3duID0gX3RoaXMub25Fc2NLZXlEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuaXNPcGVuXG4gICAgfTtcbiAgICBfdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRvb2x0aXBQb3BvdmVyV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVtb3ZlVGFyZ2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fdGFyZ2V0cyA9IG51bGw7XG4gICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gIH07XG5cbiAgVG9vbHRpcFBvcG92ZXJXcmFwcGVyLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuaXNPcGVuICYmICFzdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogcHJvcHMuaXNPcGVuXG4gICAgICB9O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8ub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCA9IGZ1bmN0aW9uIG9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlci5pbmRleE9mKCdob3ZlcicpID4gLTEgJiYgIXRoaXMucHJvcHMuYXV0b2hpZGUpIHtcbiAgICAgIGlmICh0aGlzLl9oaWRlVGltZW91dCkge1xuICAgICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuICYmICF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQgPSBmdW5jdGlvbiBvbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudChlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlci5pbmRleE9mKCdob3ZlcicpID4gLTEgJiYgIXRoaXMucHJvcHMuYXV0b2hpZGUpIHtcbiAgICAgIGlmICh0aGlzLl9zaG93VGltZW91dCkge1xuICAgICAgICB0aGlzLmNsZWFyU2hvd1RpbWVvdXQoKTtcbiAgICAgIH1cblxuICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5oaWRlLmJpbmQodGhpcywgZSksIHRoaXMuZ2V0RGVsYXkoJ2hpZGUnKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkVzY0tleURvd24gPSBmdW5jdGlvbiBvbkVzY0tleURvd24oZSkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuaGlkZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICB2YXIgaW5uZXJSZWYgPSB0aGlzLnByb3BzLmlubmVyUmVmO1xuXG4gICAgaWYgKGlubmVyUmVmKSB7XG4gICAgICBpZiAodHlwZW9mIGlubmVyUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlubmVyUmVmKHJlZik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbm5lclJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaW5uZXJSZWYuY3VycmVudCA9IHJlZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wb3BvdmVyID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5nZXREZWxheSA9IGZ1bmN0aW9uIGdldERlbGF5KGtleSkge1xuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAodHlwZW9mIGRlbGF5ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGlzTmFOKGRlbGF5W2tleV0pID8gREVGQVVMVF9ERUxBWVNba2V5XSA6IGRlbGF5W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGF5O1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldCh0YXJnZXQpIHtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuIG51bGw7XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSByZXR1cm4gdGhpcy5fdGFyZ2V0c1tpbmRleF07XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFRhcmdldCh0YXJnZXQucGFyZW50RWxlbWVudCk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsZWFyU2hvd1RpbWVvdXQoKTtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSBlID8gZS5jdXJyZW50VGFyZ2V0IHx8IHRoaXMuZ2V0Q3VycmVudFRhcmdldChlLnRhcmdldCkgOiBudWxsO1xuXG4gICAgICBpZiAoZSAmJiBlLmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZS5jb21wb3NlZFBhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHBhdGggPSBlLmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gcGF0aCAmJiBwYXRoWzBdIHx8IHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2hvd1dpdGhEZWxheSA9IGZ1bmN0aW9uIHNob3dXaXRoRGVsYXkoZSkge1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dCkge1xuICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuc2hvdy5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdzaG93JykpO1xuICB9O1xuXG4gIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oaWRlV2l0aERlbGF5ID0gZnVuY3Rpb24gaGlkZVdpdGhEZWxheShlKSB7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0KSB7XG4gICAgICB0aGlzLmNsZWFyU2hvd1RpbWVvdXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9oaWRlVGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5oaWRlLmJpbmQodGhpcywgZSksIHRoaXMuZ2V0RGVsYXkoJ2hpZGUnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyU2hvd1RpbWVvdXQgPSBmdW5jdGlvbiBjbGVhclNob3dUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dCk7XG4gICAgdGhpcy5fc2hvd1RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFySGlkZVRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckhpZGVUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZW91dCk7XG4gICAgdGhpcy5faGlkZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdsZWdhY3knKSA+IC0xICYmICh0aGlzLnByb3BzLmlzT3BlbiB8fCBpc0luRE9NU3VidHJlZXMoZS50YXJnZXQsIHRoaXMuX3RhcmdldHMpKSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIWlzSW5ET01TdWJ0cmVlKGUudGFyZ2V0LCB0aGlzLl9wb3BvdmVyKSkge1xuICAgICAgICB0aGlzLmhpZGVXaXRoRGVsYXkoZSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNob3dXaXRoRGVsYXkoZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdjbGljaycpID4gLTEgJiYgaXNJbkRPTVN1YnRyZWVzKGUudGFyZ2V0LCB0aGlzLl90YXJnZXRzKSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2hvd1dpdGhEZWxheShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZVdpdGhEZWxheShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZEV2ZW50T25UYXJnZXRzID0gZnVuY3Rpb24gYWRkRXZlbnRPblRhcmdldHModHlwZSwgaGFuZGxlciwgaXNCdWJibGUpIHtcbiAgICB0aGlzLl90YXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgaXNCdWJibGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudE9uVGFyZ2V0cyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50T25UYXJnZXRzKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKSB7XG4gICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkVGFyZ2V0RXZlbnRzID0gZnVuY3Rpb24gYWRkVGFyZ2V0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIpIHtcbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMucHJvcHMudHJpZ2dlci5zcGxpdCgnICcpO1xuXG4gICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignbWFudWFsJykgPT09IC0xKSB7XG4gICAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdjbGljaycpID4gLTEgfHwgdHJpZ2dlcnMuaW5kZXhPZignbGVnYWN5JykgPiAtMSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl90YXJnZXRzICYmIHRoaXMuX3RhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2hvdmVyJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnbW91c2VvdmVyJywgdGhpcy5zaG93V2l0aERlbGF5LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ21vdXNlb3V0JywgdGhpcy5oaWRlV2l0aERlbGF5LCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignZm9jdXMnKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdmb2N1c2luJywgdGhpcy5zaG93LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ2ZvY3Vzb3V0JywgdGhpcy5oaWRlLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdrZXlkb3duJywgdGhpcy5vbkVzY0tleURvd24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVUYXJnZXRFdmVudHMgPSBmdW5jdGlvbiByZW1vdmVUYXJnZXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RhcmdldHMpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd1dpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdtb3VzZW91dCcsIHRoaXMuaGlkZVdpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdrZXlkb3duJywgdGhpcy5vbkVzY0tleURvd24sIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnZm9jdXNpbicsIHRoaXMuc2hvdywgdHJ1ZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdmb2N1c291dCcsIHRoaXMuaGlkZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVUYXJnZXQgPSBmdW5jdGlvbiB1cGRhdGVUYXJnZXQoKSB7XG4gICAgdmFyIG5ld1RhcmdldCA9IGdldFRhcmdldCh0aGlzLnByb3BzLnRhcmdldCwgdHJ1ZSk7XG5cbiAgICBpZiAobmV3VGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzKSB7XG4gICAgICB0aGlzLnJlbW92ZVRhcmdldEV2ZW50cygpO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IG5ld1RhcmdldCA/IEFycmF5LmZyb20obmV3VGFyZ2V0KSA6IFtdO1xuICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgfHwgdGhpcy5fdGFyZ2V0c1swXTtcbiAgICAgIHRoaXMuYWRkVGFyZ2V0RXZlbnRzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBlICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCB8fCB0aGlzLl90YXJnZXRzWzBdO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBpbm5lckNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmlubmVyQ2xhc3NOYW1lLFxuICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgIGhpZGVBcnJvdyA9IF90aGlzJHByb3BzLmhpZGVBcnJvdyxcbiAgICAgICAgYm91bmRhcmllc0VsZW1lbnQgPSBfdGhpcyRwcm9wcy5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50LFxuICAgICAgICBwbGFjZW1lbnRQcmVmaXggPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnRQcmVmaXgsXG4gICAgICAgIGFycm93Q2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuYXJyb3dDbGFzc05hbWUsXG4gICAgICAgIHBvcHBlckNsYXNzTmFtZSA9IF90aGlzJHByb3BzLnBvcHBlckNsYXNzTmFtZSxcbiAgICAgICAgY29udGFpbmVyID0gX3RoaXMkcHJvcHMuY29udGFpbmVyLFxuICAgICAgICBtb2RpZmllcnMgPSBfdGhpcyRwcm9wcy5tb2RpZmllcnMsXG4gICAgICAgIHN0cmF0ZWd5ID0gX3RoaXMkcHJvcHMuc3RyYXRlZ3ksXG4gICAgICAgIG9mZnNldCA9IF90aGlzJHByb3BzLm9mZnNldCxcbiAgICAgICAgZmFkZSA9IF90aGlzJHByb3BzLmZhZGUsXG4gICAgICAgIGZsaXAgPSBfdGhpcyRwcm9wcy5mbGlwLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBhdHRyaWJ1dGVzID0gb21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMkRSkpO1xuICAgIHZhciBwb3BwZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKHBvcHBlckNsYXNzTmFtZSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhpbm5lckNsYXNzTmFtZSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBvcHBlckNvbnRlbnQkMSwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGlzT3BlbjogaXNPcGVuLFxuICAgICAgaGlkZUFycm93OiBoaWRlQXJyb3csXG4gICAgICBib3VuZGFyaWVzRWxlbWVudDogYm91bmRhcmllc0VsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudFByZWZpeDogcGxhY2VtZW50UHJlZml4LFxuICAgICAgYXJyb3dDbGFzc05hbWU6IGFycm93Q2xhc3NOYW1lLFxuICAgICAgcG9wcGVyQ2xhc3NOYW1lOiBwb3BwZXJDbGFzc2VzLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgIHN0cmF0ZWd5OiBzdHJhdGVneSxcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICBmYWRlOiBmYWRlLFxuICAgICAgZmxpcDogZmxpcFxuICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdXBkYXRlID0gX3JlZi51cGRhdGU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIHJlZjogX3RoaXMyLmdldFJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICByb2xlOiBcInRvb2x0aXBcIixcbiAgICAgICAgb25Nb3VzZU92ZXI6IF90aGlzMi5vbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IF90aGlzMi5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudCxcbiAgICAgICAgb25LZXlEb3duOiBfdGhpczIub25Fc2NLZXlEb3duXG4gICAgICB9KSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oe1xuICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgICAgfSkgOiBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXBQb3BvdmVyV3JhcHBlcjtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblRvb2x0aXBQb3BvdmVyV3JhcHBlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRTtcblRvb2x0aXBQb3BvdmVyV3JhcHBlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRTtcbnZhciBUb29sdGlwUG9wb3ZlcldyYXBwZXIkMSA9IFRvb2x0aXBQb3BvdmVyV3JhcHBlcjtcblxudmFyIGRlZmF1bHRQcm9wcyREID0ge1xuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIHBsYWNlbWVudFByZWZpeDogJ2JzLXBvcG92ZXInLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBvZmZzZXQ6IFswLCA4XVxufTtcblxudmFyIFBvcG92ZXIgPSBmdW5jdGlvbiBQb3BvdmVyKHByb3BzKSB7XG4gIHZhciBwb3BwZXJDbGFzc2VzID0gY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3BvcG92ZXInLCAnc2hvdycsIHByb3BzLnBvcHBlckNsYXNzTmFtZSk7XG4gIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3BvcG92ZXItaW5uZXInLCBwcm9wcy5pbm5lckNsYXNzTmFtZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVG9vbHRpcFBvcG92ZXJXcmFwcGVyJDEsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGFycm93Q2xhc3NOYW1lOiBcInBvcG92ZXItYXJyb3dcIixcbiAgICBwb3BwZXJDbGFzc05hbWU6IHBvcHBlckNsYXNzZXMsXG4gICAgaW5uZXJDbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRTtcblBvcG92ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEQ7XG52YXIgUG9wb3ZlciQxID0gUG9wb3ZlcjtcblxudmFyIG9taXRLZXlzJDQgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWRQb3BvdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZFBvcG92ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZFBvcG92ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkUG9wb3Zlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBvcG92ZXIkMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDQpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZFBvcG92ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRQb3BvdmVyLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgUG9wb3ZlciQxLnByb3BUeXBlcyk7XG5cbnZhciBfZXhjbHVkZWQkeSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkRCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkQyA9IHtcbiAgdGFnOiAnaDMnXG59O1xuXG52YXIgUG9wb3ZlckhlYWRlciA9IGZ1bmN0aW9uIFBvcG92ZXJIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BvcG92ZXItaGVhZGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Qb3BvdmVySGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyREO1xuUG9wb3ZlckhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkQztcbnZhciBQb3BvdmVySGVhZGVyJDEgPSBQb3BvdmVySGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJHggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEIgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBQb3BvdmVyQm9keSA9IGZ1bmN0aW9uIFBvcG92ZXJCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR4KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwb3BvdmVyLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblBvcG92ZXJCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRDO1xuUG9wb3ZlckJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEI7XG52YXIgUG9wb3ZlckJvZHkkMSA9IFBvcG92ZXJCb2R5O1xuXG52YXIgX2V4Y2x1ZGVkJHcgPSBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImJhckNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInZhbHVlXCIsIFwibWluXCIsIFwibWF4XCIsIFwiYW5pbWF0ZWRcIiwgXCJzdHJpcGVkXCIsIFwiY29sb3JcIiwgXCJiYXJcIiwgXCJtdWx0aVwiLCBcInRhZ1wiLCBcInN0eWxlXCIsIFwiYmFyU3R5bGVcIiwgXCJiYXJBcmlhVmFsdWVUZXh0XCIsIFwiYmFyQXJpYUxhYmVsbGVkQnlcIl07XG52YXIgcHJvcFR5cGVzJEIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBtdWx0aTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB2YWx1ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtaW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgbWF4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGFuaW1hdGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN0cmlwZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYXJDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBzdHlsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGJhclN0eWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgYmFyQXJpYVZhbHVlVGV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhckFyaWFMYWJlbGxlZEJ5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkQSA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgdmFsdWU6IDAsXG4gIG1pbjogMCxcbiAgbWF4OiAxMDAsXG4gIHN0eWxlOiB7fSxcbiAgYmFyU3R5bGU6IHt9XG59O1xuXG52YXIgUHJvZ3Jlc3MgPSBmdW5jdGlvbiBQcm9ncmVzcyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGJhckNsYXNzTmFtZSA9IHByb3BzLmJhckNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBtaW4gPSBwcm9wcy5taW4sXG4gICAgICBtYXggPSBwcm9wcy5tYXgsXG4gICAgICBhbmltYXRlZCA9IHByb3BzLmFuaW1hdGVkLFxuICAgICAgc3RyaXBlZCA9IHByb3BzLnN0cmlwZWQsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgYmFyID0gcHJvcHMuYmFyLFxuICAgICAgbXVsdGkgPSBwcm9wcy5tdWx0aSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBiYXJTdHlsZSA9IHByb3BzLmJhclN0eWxlLFxuICAgICAgYmFyQXJpYVZhbHVlVGV4dCA9IHByb3BzLmJhckFyaWFWYWx1ZVRleHQsXG4gICAgICBiYXJBcmlhTGFiZWxsZWRCeSA9IHByb3BzLmJhckFyaWFMYWJlbGxlZEJ5LFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdyk7XG5cbiAgdmFyIHBlcmNlbnQgPSB0b051bWJlcih2YWx1ZSkgLyB0b051bWJlcihtYXgpICogMTAwO1xuICB2YXIgcHJvZ3Jlc3NDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3Byb2dyZXNzJyksIGNzc01vZHVsZSk7XG4gIHZhciBwcm9ncmVzc0JhckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3Byb2dyZXNzLWJhcicsIGJhciA/IGNsYXNzTmFtZSB8fCBiYXJDbGFzc05hbWUgOiBiYXJDbGFzc05hbWUsIGFuaW1hdGVkID8gJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcgOiBudWxsLCBjb2xvciA/IFwiYmctXCIgKyBjb2xvciA6IG51bGwsIHN0cmlwZWQgfHwgYW5pbWF0ZWQgPyAncHJvZ3Jlc3MtYmFyLXN0cmlwZWQnIDogbnVsbCksIGNzc01vZHVsZSk7XG4gIHZhciBwcm9ncmVzc0JhclByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogcHJvZ3Jlc3NCYXJDbGFzc2VzLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgYmFyID8gc3R5bGUgOiB7fSksIGJhclN0eWxlKSwge30sIHtcbiAgICAgIHdpZHRoOiBwZXJjZW50ICsgXCIlXCJcbiAgICB9KSxcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICdhcmlhLXZhbHVlbm93JzogdmFsdWUsXG4gICAgJ2FyaWEtdmFsdWVtaW4nOiBtaW4sXG4gICAgJ2FyaWEtdmFsdWVtYXgnOiBtYXgsXG4gICAgJ2FyaWEtdmFsdWV0ZXh0JzogYmFyQXJpYVZhbHVlVGV4dCxcbiAgICAnYXJpYS1sYWJlbGxlZGJ5JzogYmFyQXJpYUxhYmVsbGVkQnksXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH07XG5cbiAgaWYgKGJhcikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgcHJvZ3Jlc3NCYXJQcm9wcykpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGNsYXNzTmFtZTogcHJvZ3Jlc3NDbGFzc2VzXG4gIH0pLCBtdWx0aSA/IGNoaWxkcmVuIDogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHByb2dyZXNzQmFyUHJvcHMpKTtcbn07XG5cblByb2dyZXNzLnByb3BUeXBlcyA9IHByb3BUeXBlcyRCO1xuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEE7XG52YXIgUHJvZ3Jlc3MkMSA9IFByb2dyZXNzO1xuXG52YXIgcHJvcFR5cGVzJEEgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUuaXNSZXF1aXJlZCxcbiAgbm9kZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn07XG5cbnZhciBQb3J0YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3J0YWwoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFBvcnRhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdE5vZGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5kZWZhdWx0Tm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0Tm9kZSA9IG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAoIWNhblVzZURPTSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLm5vZGUgJiYgIXRoaXMuZGVmYXVsdE5vZGUpIHtcbiAgICAgIHRoaXMuZGVmYXVsdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZWZhdWx0Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RE9NX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5wcm9wcy5ub2RlIHx8IHRoaXMuZGVmYXVsdE5vZGUpO1xuICB9O1xuXG4gIHJldHVybiBQb3J0YWw7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Qb3J0YWwucHJvcFR5cGVzID0gcHJvcFR5cGVzJEE7XG52YXIgUG9ydGFsJDEgPSBQb3J0YWw7XG5cbmZ1bmN0aW9uIG5vb3AkMSgpIHt9XG5cbnZhciBGYWRlUHJvcFR5cGVzJDEgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKTtcbnZhciBwcm9wVHlwZXMkeiA9IHtcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjZW50ZXJlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmdWxsc2NyZWVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXSldKSxcbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsYWJlbGxlZEJ5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFja2Ryb3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydzdGF0aWMnXSldKSxcbiAgb25FbnRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkV4aXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25PcGVuZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25DbG9zZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgd3JhcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG1vZGFsQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZXh0ZXJuYWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB6SW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzJDEsXG4gIG1vZGFsVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyQxLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICB0cmFwRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBwcm9wc1RvT21pdCQxID0gT2JqZWN0LmtleXMocHJvcFR5cGVzJHopO1xudmFyIGRlZmF1bHRQcm9wcyR6ID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBhdXRvRm9jdXM6IHRydWUsXG4gIGNlbnRlcmVkOiBmYWxzZSxcbiAgc2Nyb2xsYWJsZTogZmFsc2UsXG4gIHJvbGU6ICdkaWFsb2cnLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHpJbmRleDogMTA1MCxcbiAgZmFkZTogdHJ1ZSxcbiAgb25PcGVuZWQ6IG5vb3AkMSxcbiAgb25DbG9zZWQ6IG5vb3AkMSxcbiAgbW9kYWxUcmFuc2l0aW9uOiB7XG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLk1vZGFsXG4gIH0sXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjoge1xuICAgIG1vdW50T25FbnRlcjogdHJ1ZSxcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSAvLyB1c2VzIHN0YW5kYXJkIGZhZGUgdHJhbnNpdGlvblxuXG4gIH0sXG4gIHVubW91bnRPbkNsb3NlOiB0cnVlLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IHRydWUsXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICB0cmFwRm9jdXM6IGZhbHNlXG59O1xuXG52YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTW9kYWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIF90aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gbnVsbDtcbiAgICBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IF90aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRXNjYXBlID0gX3RoaXMuaGFuZGxlRXNjYXBlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uID0gX3RoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVGFiID0gX3RoaXMuaGFuZGxlVGFiLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uT3BlbmVkID0gX3RoaXMub25PcGVuZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DbG9zZWQgPSBfdGhpcy5vbkNsb3NlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBfdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBfdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50cmFwRm9jdXMgPSBfdGhpcy50cmFwRm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgc2hvd1N0YXRpY0JhY2tkcm9wQW5pbWF0aW9uOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1vZGFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgICAgb25FbnRlciA9IF90aGlzJHByb3BzLm9uRW50ZXI7XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcigpO1xuICAgIH0gLy8gdHJhcHMgZm9jdXMgaW5zaWRlIHRoZSBNb2RhbCwgZXZlbiBpZiB0aGUgYnJvd3NlciBhZGRyZXNzIGJhciBpcyBmb2N1c2VkXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTsgLy8gbGV0IHJlbmRlcigpIHJlbmRlcnMgTW9kYWwgRGlhbG9nIGZpcnN0XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIG5vdyBNb2RhbCBEaWFsb2cgaXMgcmVuZGVyZWQgYW5kIHdlIGNhbiByZWZlciB0aGlzLl9lbGVtZW50IGFuZCB0aGlzLl9kaWFsb2dcblxuXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgJiYgcHJldlByb3BzLnpJbmRleCAhPT0gdGhpcy5wcm9wcy56SW5kZXgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnRyYXBGb2N1cywgdHJ1ZSk7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnRyYXBGb2N1cyA9IGZ1bmN0aW9uIHRyYXBGb2N1cyhldikge1xuICAgIGlmICghdGhpcy5wcm9wcy50cmFwRm9jdXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIC8vZWxlbWVudCBpcyBub3QgYXR0YWNoZWRcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fZGlhbG9nICYmIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlID09PSBldi50YXJnZXQpIC8vIGluaXRpYWwgZm9jdXMgd2hlbiB0aGUgTW9kYWwgaXMgb3BlbmVkXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kYWxJbmRleCA8IE1vZGFsLm9wZW5Db3VudCAtIDEpIC8vIGxhc3Qgb3BlbmVkIG1vZGFsXG4gICAgICByZXR1cm47XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZm9jdXMgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIE1vZGFsXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGV2LnRhcmdldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBNb2RhbFxuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uT3BlbmVkID0gZnVuY3Rpb24gb25PcGVuZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uT3BlbmVkKCk7XG4gICAgKHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLm9uRW50ZXJlZCB8fCBub29wJDEpKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25DbG9zZWQgPSBmdW5jdGlvbiBvbkNsb3NlZChub2RlKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTsgLy8gc28gYWxsIG1ldGhvZHMgZ2V0IGNhbGxlZCBiZWZvcmUgaXQgaXMgdW5tb3VudGVkXG5cbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VkKCk7XG4gICAgKHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLm9uRXhpdGVkIHx8IG5vb3AkMSkobm9kZSk7XG5cbiAgICBpZiAodW5tb3VudE9uQ2xvc2UpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKTtcblxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSAmJiB0eXBlb2YgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHMuam9pbignLCAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzZWRDaGlsZCA9IGZ1bmN0aW9uIGdldEZvY3VzZWRDaGlsZCgpIHtcbiAgICB2YXIgY3VycmVudEZvY3VzO1xuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIHRyeSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY3VycmVudEZvY3VzID0gZm9jdXNhYmxlQ2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRGb2N1cztcbiAgfSAvLyBub3QgbW91c2VVcCBiZWNhdXNlIHNjcm9sbGJhciBmaXJlcyBpdCwgc2hvdWxkbid0IGNsb3NlIHdoZW4gdXNlciBzY3JvbGxzXG4gIDtcblxuICBfcHJvdG8uaGFuZGxlQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5fbW91c2VEb3duRWxlbWVudCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciBiYWNrZHJvcCA9IHRoaXMuX2RpYWxvZyA/IHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlIDogbnVsbDtcblxuICAgICAgaWYgKGJhY2tkcm9wICYmIGUudGFyZ2V0ID09PSBiYWNrZHJvcCAmJiB0aGlzLnByb3BzLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICB0aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5wcm9wcy5iYWNrZHJvcCAhPT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgZS50YXJnZXQgPT09IGJhY2tkcm9wICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVGFiID0gZnVuY3Rpb24gaGFuZGxlVGFiKGUpIHtcbiAgICBpZiAoZS53aGljaCAhPT0gOSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGFsSW5kZXggPCBNb2RhbC5vcGVuQ291bnQgLSAxKSByZXR1cm47IC8vIGxhc3Qgb3BlbmVkIG1vZGFsXG5cbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG4gICAgdmFyIHRvdGFsRm9jdXNhYmxlID0gZm9jdXNhYmxlQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmICh0b3RhbEZvY3VzYWJsZSA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBjdXJyZW50Rm9jdXMgPSB0aGlzLmdldEZvY3VzZWRDaGlsZCgpO1xuICAgIHZhciBmb2N1c2VkSW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbEZvY3VzYWJsZTsgaSArPSAxKSB7XG4gICAgICBpZiAoZm9jdXNhYmxlQ2hpbGRyZW5baV0gPT09IGN1cnJlbnRGb2N1cykge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuW3RvdGFsRm9jdXNhYmxlIC0gMV0uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gdG90YWxGb2N1c2FibGUgLSAxKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQmFja2Ryb3BNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcE1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5fbW91c2VEb3duRWxlbWVudCA9IGUudGFyZ2V0O1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFc2NhcGUgPSBmdW5jdGlvbiBoYW5kbGVFc2NhcGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBlLmtleUNvZGUgPT09IGtleUNvZGVzLmVzYyAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMua2V5Ym9hcmQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1N0YXRpY0JhY2tkcm9wQW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICBzaG93U3RhdGljQmFja2Ryb3BBbmltYXRpb246IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy5jb250YWluZXIpO1xuXG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZ2V0T3JpZ2luYWxCb2R5UGFkZGluZygpO1xuICAgIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKTtcblxuICAgIGlmIChNb2RhbC5vcGVuQ291bnQgPT09IDApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oZG9jdW1lbnQuYm9keS5jbGFzc05hbWUsIG1hcFRvQ3NzTW9kdWxlcygnbW9kYWwtb3BlbicsIHRoaXMucHJvcHMuY3NzTW9kdWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbEluZGV4ID0gTW9kYWwub3BlbkNvdW50O1xuICAgIE1vZGFsLm9wZW5Db3VudCArPSAxO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uIG1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciByZXR1cm5Gb2N1c0FmdGVyQ2xvc2UgPSB0aGlzLnByb3BzLnJldHVybkZvY3VzQWZ0ZXJDbG9zZTtcbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cyAmJiByZXR1cm5Gb2N1c0FmdGVyQ2xvc2UpIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChNb2RhbC5vcGVuQ291bnQgPD0gMSkge1xuICAgICAgdmFyIG1vZGFsT3BlbkNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcygnbW9kYWwtb3BlbicsIHRoaXMucHJvcHMuY3NzTW9kdWxlKTsgLy8gVXNlIHJlZ2V4IHRvIHByZXZlbnQgbWF0Y2hpbmcgYG1vZGFsLW9wZW5gIGFzIHBhcnQgb2YgYSBkaWZmZXJlbnQgY2xhc3MsIGUuZy4gYG15LW1vZGFsLW9wZW5lZGBcblxuICAgICAgdmFyIG1vZGFsT3BlbkNsYXNzTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIihefCApXCIgKyBtb2RhbE9wZW5DbGFzc05hbWUgKyBcIiggfCQpXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKG1vZGFsT3BlbkNsYXNzTmFtZVJlZ2V4LCAnICcpLnRyaW0oKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICAgIE1vZGFsLm9wZW5Db3VudCA9IE1hdGgubWF4KDAsIE1vZGFsLm9wZW5Db3VudCAtIDEpO1xuICAgIHNldFNjcm9sbGJhcldpZHRoKHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJNb2RhbERpYWxvZyA9IGZ1bmN0aW9uIHJlbmRlck1vZGFsRGlhbG9nKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcyxcbiAgICAgICAgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBhdHRyaWJ1dGVzID0gb21pdCh0aGlzLnByb3BzLCBwcm9wc1RvT21pdCQxKTtcbiAgICB2YXIgZGlhbG9nQmFzZUNsYXNzID0gJ21vZGFsLWRpYWxvZyc7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oZGlhbG9nQmFzZUNsYXNzLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW1wibW9kYWwtXCIgKyB0aGlzLnByb3BzLnNpemVdID0gdGhpcy5wcm9wcy5zaXplLCBfY2xhc3NOYW1lc1tkaWFsb2dCYXNlQ2xhc3MgKyBcIi1jZW50ZXJlZFwiXSA9IHRoaXMucHJvcHMuY2VudGVyZWQsIF9jbGFzc05hbWVzW2RpYWxvZ0Jhc2VDbGFzcyArIFwiLXNjcm9sbGFibGVcIl0gPSB0aGlzLnByb3BzLnNjcm9sbGFibGUsIF9jbGFzc05hbWVzWydtb2RhbC1mdWxsc2NyZWVuJ10gPSB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUsIF9jbGFzc05hbWVzW1wibW9kYWwtZnVsbHNjcmVlbi1cIiArIHRoaXMucHJvcHMuZnVsbHNjcmVlbiArIFwiLWRvd25cIl0gPSB0eXBlb2YgdGhpcy5wcm9wcy5mdWxsc2NyZWVuID09PSAnc3RyaW5nJywgX2NsYXNzTmFtZXMpKSwgdGhpcy5wcm9wcy5jc3NNb2R1bGUpLFxuICAgICAgcm9sZTogXCJkb2N1bWVudFwiLFxuICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICBfdGhpczMuX2RpYWxvZyA9IGM7XG4gICAgICB9XG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwtY29udGVudCcsIHRoaXMucHJvcHMuY29udGVudENsYXNzTmFtZSksIHRoaXMucHJvcHMuY3NzTW9kdWxlKVxuICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciB1bm1vdW50T25DbG9zZSA9IHRoaXMucHJvcHMudW5tb3VudE9uQ2xvc2U7XG5cbiAgICBpZiAoISF0aGlzLl9lbGVtZW50ICYmICh0aGlzLnN0YXRlLmlzT3BlbiB8fCAhdW5tb3VudE9uQ2xvc2UpKSB7XG4gICAgICB2YXIgaXNNb2RhbEhpZGRlbiA9ICEhdGhpcy5fZWxlbWVudCAmJiAhdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXVubW91bnRPbkNsb3NlO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNNb2RhbEhpZGRlbiA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB3cmFwQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLndyYXBDbGFzc05hbWUsXG4gICAgICAgICAgbW9kYWxDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIubW9kYWxDbGFzc05hbWUsXG4gICAgICAgICAgYmFja2Ryb3BDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuYmFja2Ryb3BDbGFzc05hbWUsXG4gICAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMyLmNzc01vZHVsZSxcbiAgICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wczIuaXNPcGVuLFxuICAgICAgICAgIGJhY2tkcm9wID0gX3RoaXMkcHJvcHMyLmJhY2tkcm9wLFxuICAgICAgICAgIHJvbGUgPSBfdGhpcyRwcm9wczIucm9sZSxcbiAgICAgICAgICBsYWJlbGxlZEJ5ID0gX3RoaXMkcHJvcHMyLmxhYmVsbGVkQnksXG4gICAgICAgICAgZXh0ZXJuYWwgPSBfdGhpcyRwcm9wczIuZXh0ZXJuYWwsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczIuaW5uZXJSZWY7XG4gICAgICB2YXIgbW9kYWxBdHRyaWJ1dGVzID0ge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLFxuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUVzY2FwZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZVRhYixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH0sXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbGxlZEJ5LFxuICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICB0YWJJbmRleDogJy0xJ1xuICAgICAgfTtcbiAgICAgIHZhciBoYXNUcmFuc2l0aW9uID0gdGhpcy5wcm9wcy5mYWRlO1xuXG4gICAgICB2YXIgbW9kYWxUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24pLCB7fSwge1xuICAgICAgICBiYXNlQ2xhc3M6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBCYWNrZHJvcCA9IGJhY2tkcm9wICYmIChoYXNUcmFuc2l0aW9uID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBiYWNrZHJvcFRyYW5zaXRpb24sIHtcbiAgICAgICAgXCJpblwiOiBpc09wZW4gJiYgISFiYWNrZHJvcCxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbC1iYWNrZHJvcCcsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKVxuICAgICAgfSkpIDogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsLWJhY2tkcm9wJywgJ3Nob3cnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSlcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9ydGFsJDEsIHtcbiAgICAgICAgbm9kZTogdGhpcy5fZWxlbWVudFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMod3JhcENsYXNzTmFtZSlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgbW9kYWxBdHRyaWJ1dGVzLCBtb2RhbFRyYW5zaXRpb24sIHtcbiAgICAgICAgXCJpblwiOiBpc09wZW4sXG4gICAgICAgIG9uRW50ZXJlZDogdGhpcy5vbk9wZW5lZCxcbiAgICAgICAgb25FeGl0ZWQ6IHRoaXMub25DbG9zZWQsXG4gICAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwnLCBtb2RhbENsYXNzTmFtZSwgdGhpcy5zdGF0ZS5zaG93U3RhdGljQmFja2Ryb3BBbmltYXRpb24gJiYgJ21vZGFsLXN0YXRpYycpLCBjc3NNb2R1bGUpLFxuICAgICAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgICAgIH0pLCBleHRlcm5hbCwgdGhpcy5yZW5kZXJNb2RhbERpYWxvZygpKSwgQmFja2Ryb3ApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE1vZGFsO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuTW9kYWwucHJvcFR5cGVzID0gcHJvcFR5cGVzJHo7XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkejtcbk1vZGFsLm9wZW5Db3VudCA9IDA7XG52YXIgTW9kYWwkMSA9IE1vZGFsO1xuXG52YXIgX2V4Y2x1ZGVkJHYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcInRvZ2dsZVwiLCBcInRhZ1wiLCBcIndyYXBUYWdcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNsb3NlXCJdO1xudmFyIHByb3BUeXBlcyR5ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB3cmFwVGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsb3NlQXJpYUxhYmVsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyR5ID0ge1xuICB0YWc6ICdoNScsXG4gIHdyYXBUYWc6ICdkaXYnLFxuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJ1xufTtcblxudmFyIE1vZGFsSGVhZGVyID0gZnVuY3Rpb24gTW9kYWxIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgV3JhcFRhZyA9IHByb3BzLndyYXBUYWcsXG4gICAgICBjbG9zZUFyaWFMYWJlbCA9IHByb3BzLmNsb3NlQXJpYUxhYmVsLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ21vZGFsLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuXG4gIGlmICghY2xvc2UgJiYgdG9nZ2xlKSB7XG4gICAgY2xvc2VCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdidG4tY2xvc2UnLCBjc3NNb2R1bGUpLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlQXJpYUxhYmVsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFdyYXBUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLXRpdGxlJywgY3NzTW9kdWxlKVxuICB9LCBjaGlsZHJlbiksIGNsb3NlIHx8IGNsb3NlQnV0dG9uKTtcbn07XG5cbk1vZGFsSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyR5O1xuTW9kYWxIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHk7XG52YXIgTW9kYWxIZWFkZXIkMSA9IE1vZGFsSGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJHUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHggPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHggPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBNb2RhbEJvZHkgPSBmdW5jdGlvbiBNb2RhbEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHUpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ21vZGFsLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk1vZGFsQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkeDtcbk1vZGFsQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkeDtcbnZhciBNb2RhbEJvZHkkMSA9IE1vZGFsQm9keTtcblxudmFyIF9leGNsdWRlZCR0ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyR3ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyR3ID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgTW9kYWxGb290ZXIgPSBmdW5jdGlvbiBNb2RhbEZvb3Rlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtZm9vdGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdztcbk1vZGFsRm9vdGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR3O1xudmFyIE1vZGFsRm9vdGVyJDEgPSBNb2RhbEZvb3RlcjtcblxudmFyIGRlZmF1bHRQcm9wcyR2ID0ge1xuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgcGxhY2VtZW50UHJlZml4OiAnYnMtdG9vbHRpcCcsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cydcbn07XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gVG9vbHRpcChwcm9wcykge1xuICB2YXIgcG9wcGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0b29sdGlwJywgJ3Nob3cnLCBwcm9wcy5wb3BwZXJDbGFzc05hbWUpO1xuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0b29sdGlwLWlubmVyJywgcHJvcHMuaW5uZXJDbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvb2x0aXBQb3BvdmVyV3JhcHBlciQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBhcnJvd0NsYXNzTmFtZTogXCJ0b29sdGlwLWFycm93XCIsXG4gICAgcG9wcGVyQ2xhc3NOYW1lOiBwb3BwZXJDbGFzc2VzLFxuICAgIGlubmVyQ2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR2O1xudmFyIFRvb2x0aXAkMSA9IFRvb2x0aXA7XG5cbnZhciBfZXhjbHVkZWQkcyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJib3JkZXJlZFwiLCBcImJvcmRlcmxlc3NcIiwgXCJzdHJpcGVkXCIsIFwiZGFya1wiLCBcImhvdmVyXCIsIFwicmVzcG9uc2l2ZVwiLCBcInRhZ1wiLCBcInJlc3BvbnNpdmVUYWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkdiA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvcmRlcmxlc3M6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3RyaXBlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGhvdmVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJlc3BvbnNpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHJlc3BvbnNpdmVUYWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSlcbn07XG52YXIgZGVmYXVsdFByb3BzJHUgPSB7XG4gIHRhZzogJ3RhYmxlJyxcbiAgcmVzcG9uc2l2ZVRhZzogJ2Rpdidcbn07XG5cbnZhciBUYWJsZSA9IGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGJvcmRlcmVkID0gcHJvcHMuYm9yZGVyZWQsXG4gICAgICBib3JkZXJsZXNzID0gcHJvcHMuYm9yZGVybGVzcyxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBob3ZlciA9IHByb3BzLmhvdmVyLFxuICAgICAgcmVzcG9uc2l2ZSA9IHByb3BzLnJlc3BvbnNpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBSZXNwb25zaXZlVGFnID0gcHJvcHMucmVzcG9uc2l2ZVRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRzKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0YWJsZScsIHNpemUgPyAndGFibGUtJyArIHNpemUgOiBmYWxzZSwgYm9yZGVyZWQgPyAndGFibGUtYm9yZGVyZWQnIDogZmFsc2UsIGJvcmRlcmxlc3MgPyAndGFibGUtYm9yZGVybGVzcycgOiBmYWxzZSwgc3RyaXBlZCA/ICd0YWJsZS1zdHJpcGVkJyA6IGZhbHNlLCBkYXJrID8gJ3RhYmxlLWRhcmsnIDogZmFsc2UsIGhvdmVyID8gJ3RhYmxlLWhvdmVyJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgdmFyIHRhYmxlID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICB2YXIgcmVzcG9uc2l2ZUNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhyZXNwb25zaXZlID09PSB0cnVlID8gJ3RhYmxlLXJlc3BvbnNpdmUnIDogXCJ0YWJsZS1yZXNwb25zaXZlLVwiICsgcmVzcG9uc2l2ZSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlc3BvbnNpdmVUYWcsIHtcbiAgICAgIGNsYXNzTmFtZTogcmVzcG9uc2l2ZUNsYXNzTmFtZVxuICAgIH0sIHRhYmxlKTtcbiAgfVxuXG4gIHJldHVybiB0YWJsZTtcbn07XG5cblRhYmxlLnByb3BUeXBlcyA9IHByb3BUeXBlcyR2O1xuVGFibGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHU7XG52YXIgVGFibGUkMSA9IFRhYmxlO1xuXG52YXIgX2V4Y2x1ZGVkJHIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJmbHVzaFwiLCBcImhvcml6b250YWxcIiwgXCJudW1iZXJlZFwiXTtcbnZhciBwcm9wVHlwZXMkdSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgZmx1c2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgbnVtYmVyZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkdCA9IHtcbiAgdGFnOiAndWwnLFxuICBob3Jpem9udGFsOiBmYWxzZSxcbiAgbnVtYmVyZWQ6IGZhbHNlXG59O1xuXG52YXIgZ2V0SG9yaXpvbnRhbENsYXNzID0gZnVuY3Rpb24gZ2V0SG9yaXpvbnRhbENsYXNzKGhvcml6b250YWwpIHtcbiAgaWYgKGhvcml6b250YWwgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09IHRydWUgfHwgaG9yaXpvbnRhbCA9PT0gXCJ4c1wiKSB7XG4gICAgcmV0dXJuIFwibGlzdC1ncm91cC1ob3Jpem9udGFsXCI7XG4gIH1cblxuICByZXR1cm4gXCJsaXN0LWdyb3VwLWhvcml6b250YWwtXCIgKyBob3Jpem9udGFsO1xufTtcblxudmFyIExpc3RHcm91cCA9IGZ1bmN0aW9uIExpc3RHcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgZmx1c2ggPSBwcm9wcy5mbHVzaCxcbiAgICAgIGhvcml6b250YWwgPSBwcm9wcy5ob3Jpem9udGFsLFxuICAgICAgbnVtYmVyZWQgPSBwcm9wcy5udW1iZXJlZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnLCAvLyBsaXN0LWdyb3VwLWhvcml6b250YWwgY2Fubm90IGN1cnJlbnRseSBiZSBtaXhlZCB3aXRoIGxpc3QtZ3JvdXAtZmx1c2hcbiAgLy8gd2Ugb25seSB0cnkgdG8gYXBwbHkgaG9yaXpvbnRhbCBjbGFzc2VzIGlmIGZsdXNoIGlzIGZhbHNlXG4gIGZsdXNoID8gJ2xpc3QtZ3JvdXAtZmx1c2gnIDogZ2V0SG9yaXpvbnRhbENsYXNzKGhvcml6b250YWwpLCB7XG4gICAgJ2xpc3QtZ3JvdXAtbnVtYmVyZWQnOiBudW1iZXJlZFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkxpc3RHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdTtcbkxpc3RHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdDtcbnZhciBMaXN0R3JvdXAkMSA9IExpc3RHcm91cDtcblxudmFyIF9leGNsdWRlZCRxID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5saW5lXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJHQgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGlubGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHMgPSB7XG4gIHRhZzogJ2Zvcm0nXG59O1xuXG52YXIgRm9ybSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShGb3JtLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN1Ym1pdCA9IF90aGlzLnN1Ym1pdC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRm9ybS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbm5lclJlZikge1xuICAgICAgdGhpcy5wcm9wcy5pbm5lclJlZihyZWYpO1xuICAgIH1cblxuICAgIHRoaXMucmVmID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5zdWJtaXQgPSBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMucmVmKSB7XG4gICAgICB0aGlzLnJlZi5zdWJtaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgaW5saW5lID0gX3RoaXMkcHJvcHMuaW5saW5lLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJHEpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBpbmxpbmUgPyAnZm9ybS1pbmxpbmUnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRm9ybTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdDtcbkZvcm0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHM7XG52YXIgRm9ybSQxID0gRm9ybTtcblxudmFyIF9leGNsdWRlZCRwID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidmFsaWRcIiwgXCJ0b29sdGlwXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB2YWxpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b29sdGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJHIgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHZhbGlkOiB1bmRlZmluZWRcbn07XG5cbnZhciBGb3JtRmVlZGJhY2sgPSBmdW5jdGlvbiBGb3JtRmVlZGJhY2socHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHZhbGlkID0gcHJvcHMudmFsaWQsXG4gICAgICB0b29sdGlwID0gcHJvcHMudG9vbHRpcCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHApO1xuXG4gIHZhciB2YWxpZE1vZGUgPSB0b29sdGlwID8gJ3Rvb2x0aXAnIDogJ2ZlZWRiYWNrJztcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB2YWxpZCA/IFwidmFsaWQtXCIgKyB2YWxpZE1vZGUgOiBcImludmFsaWQtXCIgKyB2YWxpZE1vZGUpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuRm9ybUZlZWRiYWNrLnByb3BUeXBlcyA9IHByb3BUeXBlcyRzO1xuRm9ybUZlZWRiYWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRyO1xudmFyIEZvcm1GZWVkYmFjayQxID0gRm9ybUZlZWRiYWNrO1xuXG52YXIgX2V4Y2x1ZGVkJG8gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJyb3dcIiwgXCJkaXNhYmxlZFwiLCBcImNoZWNrXCIsIFwiaW5saW5lXCIsIFwiZmxvYXRpbmdcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHJvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGVjazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBcInN3aXRjaFwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmbG9hdGluZzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRxID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgRm9ybUdyb3VwID0gZnVuY3Rpb24gRm9ybUdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICByb3cgPSBwcm9wcy5yb3csXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgY2hlY2sgPSBwcm9wcy5jaGVjayxcbiAgICAgIGlubGluZSA9IHByb3BzLmlubGluZSxcbiAgICAgIGZsb2F0aW5nID0gcHJvcHMuZmxvYXRpbmcsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRvKTtcblxuICB2YXIgZm9ybUNoZWNrID0gY2hlY2sgfHwgcHJvcHNbXCJzd2l0Y2hcIl07XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgcm93ID8gJ3JvdycgOiBmYWxzZSwgZm9ybUNoZWNrID8gJ2Zvcm0tY2hlY2snIDogJ21iLTMnLCBwcm9wc1tcInN3aXRjaFwiXSA/ICdmb3JtLXN3aXRjaCcgOiBmYWxzZSwgZm9ybUNoZWNrICYmIGlubGluZSA/ICdmb3JtLWNoZWNrLWlubGluZScgOiBmYWxzZSwgZm9ybUNoZWNrICYmIGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IGZhbHNlLCBmbG9hdGluZyAmJiAnZm9ybS1mbG9hdGluZycpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChUYWcgPT09ICdmaWVsZHNldCcpIHtcbiAgICBhdHRyaWJ1dGVzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuRm9ybUdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyRyO1xuRm9ybUdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRxO1xudmFyIEZvcm1Hcm91cCQxID0gRm9ybUdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkJG4gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbmxpbmVcIiwgXCJjb2xvclwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkcSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgaW5saW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkcCA9IHtcbiAgdGFnOiAnc21hbGwnLFxuICBjb2xvcjogJ211dGVkJ1xufTtcblxudmFyIEZvcm1UZXh0ID0gZnVuY3Rpb24gRm9ybVRleHQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubGluZSA9IHByb3BzLmlubGluZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRuKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICFpbmxpbmUgPyAnZm9ybS10ZXh0JyA6IGZhbHNlLCBjb2xvciA/IFwidGV4dC1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuRm9ybVRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJHE7XG5Gb3JtVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcDtcbnZhciBGb3JtVGV4dCQxID0gRm9ybVRleHQ7XG5cbnZhciBfZXhjbHVkZWQkbSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInR5cGVcIiwgXCJic1NpemVcIiwgXCJ2YWxpZFwiLCBcImludmFsaWRcIiwgXCJ0YWdcIiwgXCJhZGRvblwiLCBcInBsYWludGV4dFwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRwID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBic1NpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB2YWxpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbnZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgcGxhaW50ZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFkZG9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJG8gPSB7XG4gIHR5cGU6ICd0ZXh0J1xufTtcblxudmFyIElucHV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5mb2N1cyA9IF90aGlzLmZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbm5lclJlZikge1xuICAgICAgdGhpcy5wcm9wcy5pbm5lclJlZihyZWYpO1xuICAgIH1cblxuICAgIHRoaXMucmVmID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgIGJzU2l6ZSA9IF90aGlzJHByb3BzLmJzU2l6ZSxcbiAgICAgICAgdmFsaWQgPSBfdGhpcyRwcm9wcy52YWxpZCxcbiAgICAgICAgaW52YWxpZCA9IF90aGlzJHByb3BzLmludmFsaWQsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgYWRkb24gPSBfdGhpcyRwcm9wcy5hZGRvbixcbiAgICAgICAgcGxhaW50ZXh0ID0gX3RoaXMkcHJvcHMucGxhaW50ZXh0LFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRtKTtcblxuICAgIHZhciBjaGVja0lucHV0ID0gWydzd2l0Y2gnLCAncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHR5cGUpID4gLTE7XG4gICAgdmFyIGlzTm90YU51bWJlciA9IG5ldyBSZWdFeHAoJ1xcXFxEJywgJ2cnKTtcbiAgICB2YXIgdGV4dGFyZWFJbnB1dCA9IHR5cGUgPT09ICd0ZXh0YXJlYSc7XG4gICAgdmFyIHNlbGVjdElucHV0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSB0eXBlID09PSAncmFuZ2UnO1xuICAgIHZhciBUYWcgPSB0YWcgfHwgKHNlbGVjdElucHV0IHx8IHRleHRhcmVhSW5wdXQgPyB0eXBlIDogJ2lucHV0Jyk7XG4gICAgdmFyIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1jb250cm9sJztcblxuICAgIGlmIChwbGFpbnRleHQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSBmb3JtQ29udHJvbENsYXNzICsgXCItcGxhaW50ZXh0XCI7XG4gICAgICBUYWcgPSB0YWcgfHwgJ2lucHV0JztcbiAgICB9IGVsc2UgaWYgKHJhbmdlSW5wdXQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1yYW5nZSc7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RJbnB1dCkge1xuICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9IFwiZm9ybS1zZWxlY3RcIjtcbiAgICB9IGVsc2UgaWYgKGNoZWNrSW5wdXQpIHtcbiAgICAgIGlmIChhZGRvbikge1xuICAgICAgICBmb3JtQ29udHJvbENsYXNzID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZXMuc2l6ZSAmJiBpc05vdGFOdW1iZXIudGVzdChhdHRyaWJ1dGVzLnNpemUpKSB7XG4gICAgICB3YXJuT25jZSgnUGxlYXNlIHVzZSB0aGUgcHJvcCBcImJzU2l6ZVwiIGluc3RlYWQgb2YgdGhlIFwic2l6ZVwiIHRvIGJvb3RzdHJhcFxcJ3MgaW5wdXQgc2l6aW5nLicpO1xuICAgICAgYnNTaXplID0gYXR0cmlidXRlcy5zaXplO1xuICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuc2l6ZTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGludmFsaWQgJiYgJ2lzLWludmFsaWQnLCB2YWxpZCAmJiAnaXMtdmFsaWQnLCBic1NpemUgPyBzZWxlY3RJbnB1dCA/IFwiZm9ybS1zZWxlY3QtXCIgKyBic1NpemUgOiBcImZvcm0tY29udHJvbC1cIiArIGJzU2l6ZSA6IGZhbHNlLCBmb3JtQ29udHJvbENsYXNzKSwgY3NzTW9kdWxlKTtcblxuICAgIGlmIChUYWcgPT09ICdpbnB1dCcgfHwgdGFnICYmIHR5cGVvZiB0YWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGF0dHJpYnV0ZXMudHlwZSA9IHR5cGUgPT09ICdzd2l0Y2gnID8gJ2NoZWNrYm94JyA6IHR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZXMuY2hpbGRyZW4gJiYgIShwbGFpbnRleHQgfHwgdHlwZSA9PT0gJ3NlbGVjdCcgfHwgdHlwZW9mIFRhZyAhPT0gJ3N0cmluZycgfHwgVGFnID09PSAnc2VsZWN0JykpIHtcbiAgICAgIHdhcm5PbmNlKFwiSW5wdXQgd2l0aCBhIHR5cGUgb2YgXFxcIlwiICsgdHlwZSArIFwiXFxcIiBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4gUGxlYXNlIHVzZSBcXFwidmFsdWVcXFwiL1xcXCJkZWZhdWx0VmFsdWVcXFwiIGluc3RlYWQuXCIpO1xuICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgXCJhcmlhLWludmFsaWRcIjogaW52YWxpZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gSW5wdXQ7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkcDtcbklucHV0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRvO1xudmFyIElucHV0JDEgPSBJbnB1dDtcblxudmFyIF9leGNsdWRlZCRsID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidHlwZVwiLCBcInNpemVcIl07XG52YXIgcHJvcFR5cGVzJG8gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJG4gPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBJbnB1dEdyb3VwID0gZnVuY3Rpb24gSW5wdXRHcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRsKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdpbnB1dC1ncm91cCcsIHNpemUgPyBcImlucHV0LWdyb3VwLVwiICsgc2l6ZSA6IG51bGwpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChwcm9wcy50eXBlID09PSAnZHJvcGRvd24nKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChEcm9wZG93biQxLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbklucHV0R3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJG87XG5JbnB1dEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRuO1xudmFyIElucHV0R3JvdXAkMSA9IElucHV0R3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkayA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkbiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkbSA9IHtcbiAgdGFnOiAnc3Bhbidcbn07XG5cbnZhciBJbnB1dEdyb3VwVGV4dCA9IGZ1bmN0aW9uIElucHV0R3JvdXBUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRrKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdpbnB1dC1ncm91cC10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5JbnB1dEdyb3VwVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbjtcbklucHV0R3JvdXBUZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRtO1xudmFyIElucHV0R3JvdXBUZXh0JDEgPSBJbnB1dEdyb3VwVGV4dDtcblxudmFyIF9leGNsdWRlZCRqID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaGlkZGVuXCIsIFwid2lkdGhzXCIsIFwidGFnXCIsIFwiY2hlY2tcIiwgXCJzaXplXCIsIFwiZm9yXCJdO1xudmFyIGNvbFdpZHRocyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgc3RyaW5nT3JOdW1iZXJQcm9wID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIGNvbHVtblByb3BzID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgc2l6ZTogc3RyaW5nT3JOdW1iZXJQcm9wLFxuICBvcmRlcjogc3RyaW5nT3JOdW1iZXJQcm9wLFxuICBvZmZzZXQ6IHN0cmluZ09yTnVtYmVyUHJvcFxufSldKTtcbnZhciBwcm9wVHlwZXMkbSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgaGlkZGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoZWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBcImZvclwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgeHM6IGNvbHVtblByb3BzLFxuICBzbTogY29sdW1uUHJvcHMsXG4gIG1kOiBjb2x1bW5Qcm9wcyxcbiAgbGc6IGNvbHVtblByb3BzLFxuICB4bDogY29sdW1uUHJvcHMsXG4gIHh4bDogY29sdW1uUHJvcHMsXG4gIHdpZHRoczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheVxufTtcbnZhciBkZWZhdWx0UHJvcHMkbCA9IHtcbiAgdGFnOiAnbGFiZWwnLFxuICB3aWR0aHM6IGNvbFdpZHRoc1xufTtcblxudmFyIGdldENvbHVtblNpemVDbGFzcyA9IGZ1bmN0aW9uIGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sU2l6ZSkge1xuICBpZiAoY29sU2l6ZSA9PT0gdHJ1ZSB8fCBjb2xTaXplID09PSAnJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbCcgOiBcImNvbC1cIiArIGNvbFdpZHRoO1xuICB9IGVsc2UgaWYgKGNvbFNpemUgPT09ICdhdXRvJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbC1hdXRvJyA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1hdXRvXCI7XG4gIH1cblxuICByZXR1cm4gaXNYcyA/IFwiY29sLVwiICsgY29sU2l6ZSA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1cIiArIGNvbFNpemU7XG59O1xuXG52YXIgTGFiZWwgPSBmdW5jdGlvbiBMYWJlbChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaGlkZGVuID0gcHJvcHMuaGlkZGVuLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgY2hlY2sgPSBwcm9wcy5jaGVjayxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgaHRtbEZvciA9IHByb3BzW1wiZm9yXCJdLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkaik7XG5cbiAgdmFyIGNvbENsYXNzZXMgPSBbXTtcbiAgd2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKGNvbFdpZHRoLCBpKSB7XG4gICAgdmFyIGNvbHVtblByb3AgPSBwcm9wc1tjb2xXaWR0aF07XG4gICAgZGVsZXRlIGF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2x1bW5Qcm9wICYmIGNvbHVtblByb3AgIT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcbiAgICB2YXIgY29sQ2xhc3M7XG5cbiAgICBpZiAoaXNPYmplY3QoY29sdW1uUHJvcCkpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGNvbFNpemVJbnRlcmZpeCA9IGlzWHMgPyAnLScgOiBcIi1cIiArIGNvbFdpZHRoICsgXCItXCI7XG4gICAgICBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sdW1uUHJvcC5zaXplKTtcbiAgICAgIGNvbENsYXNzZXMucHVzaChtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW2NvbENsYXNzXSA9IGNvbHVtblByb3Auc2l6ZSB8fCBjb2x1bW5Qcm9wLnNpemUgPT09ICcnLCBfY2xhc3NOYW1lc1tcIm9yZGVyXCIgKyBjb2xTaXplSW50ZXJmaXggKyBjb2x1bW5Qcm9wLm9yZGVyXSA9IGNvbHVtblByb3Aub3JkZXIgfHwgY29sdW1uUHJvcC5vcmRlciA9PT0gMCwgX2NsYXNzTmFtZXNbXCJvZmZzZXRcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub2Zmc2V0XSA9IGNvbHVtblByb3Aub2Zmc2V0IHx8IGNvbHVtblByb3Aub2Zmc2V0ID09PSAwLCBfY2xhc3NOYW1lcykpKSwgY3NzTW9kdWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sQ2xhc3MgPSBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3ApO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKGNvbENsYXNzKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGhpZGRlbiA/ICd2aXN1YWxseS1oaWRkZW4nIDogZmFsc2UsIGNoZWNrID8gJ2Zvcm0tY2hlY2stbGFiZWwnIDogZmFsc2UsIHNpemUgPyBcImNvbC1mb3JtLWxhYmVsLVwiICsgc2l6ZSA6IGZhbHNlLCBjb2xDbGFzc2VzLCBjb2xDbGFzc2VzLmxlbmd0aCA/ICdjb2wtZm9ybS1sYWJlbCcgOiAnZm9ybS1sYWJlbCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIGh0bWxGb3I6IGh0bWxGb3JcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5MYWJlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbTtcbkxhYmVsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRsO1xudmFyIExhYmVsJDEgPSBMYWJlbDtcblxudmFyIF9leGNsdWRlZCRpID0gW1wiYm9keVwiLCBcImJvdHRvbVwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImhlYWRpbmdcIiwgXCJsZWZ0XCIsIFwibGlzdFwiLCBcIm1pZGRsZVwiLCBcIm9iamVjdFwiLCBcInJpZ2h0XCIsIFwidGFnXCIsIFwidG9wXCJdO1xudmFyIHByb3BUeXBlcyRsID0ge1xuICBib2R5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvdHRvbTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBoZWFkaW5nOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxlZnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGlzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBtaWRkbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb2JqZWN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJpZ2h0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xuXG52YXIgTWVkaWEgPSBmdW5jdGlvbiBNZWRpYShwcm9wcykge1xuICB2YXIgYm9keSA9IHByb3BzLmJvZHksXG4gICAgICBib3R0b20gPSBwcm9wcy5ib3R0b20sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBoZWFkaW5nID0gcHJvcHMuaGVhZGluZyxcbiAgICAgIGxlZnQgPSBwcm9wcy5sZWZ0LFxuICAgICAgbGlzdCA9IHByb3BzLmxpc3QsXG4gICAgICBtaWRkbGUgPSBwcm9wcy5taWRkbGUsXG4gICAgICBvYmplY3QgPSBwcm9wcy5vYmplY3QsXG4gICAgICByaWdodCA9IHByb3BzLnJpZ2h0LFxuICAgICAgdGFnID0gcHJvcHMudGFnLFxuICAgICAgdG9wID0gcHJvcHMudG9wLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkaSk7XG5cbiAgdmFyIGRlZmF1bHRUYWc7XG5cbiAgaWYgKGhlYWRpbmcpIHtcbiAgICBkZWZhdWx0VGFnID0gJ2g0JztcbiAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzLmhyZWYpIHtcbiAgICBkZWZhdWx0VGFnID0gJ2EnO1xuICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXMuc3JjIHx8IG9iamVjdCkge1xuICAgIGRlZmF1bHRUYWcgPSAnaW1nJztcbiAgfSBlbHNlIGlmIChsaXN0KSB7XG4gICAgZGVmYXVsdFRhZyA9ICd1bCc7XG4gIH0gZWxzZSB7XG4gICAgZGVmYXVsdFRhZyA9ICdkaXYnO1xuICB9XG5cbiAgdmFyIFRhZyA9IHRhZyB8fCBkZWZhdWx0VGFnO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHtcbiAgICAnbWVkaWEtYm9keSc6IGJvZHksXG4gICAgJ21lZGlhLWhlYWRpbmcnOiBoZWFkaW5nLFxuICAgICdtZWRpYS1sZWZ0JzogbGVmdCxcbiAgICAnbWVkaWEtcmlnaHQnOiByaWdodCxcbiAgICAnbWVkaWEtdG9wJzogdG9wLFxuICAgICdtZWRpYS1ib3R0b20nOiBib3R0b20sXG4gICAgJ21lZGlhLW1pZGRsZSc6IG1pZGRsZSxcbiAgICAnbWVkaWEtb2JqZWN0Jzogb2JqZWN0LFxuICAgICdtZWRpYS1saXN0JzogbGlzdCxcbiAgICBtZWRpYTogIWJvZHkgJiYgIWhlYWRpbmcgJiYgIWxlZnQgJiYgIXJpZ2h0ICYmICF0b3AgJiYgIWJvdHRvbSAmJiAhbWlkZGxlICYmICFvYmplY3QgJiYgIWxpc3RcbiAgfSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5NZWRpYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbDtcbnZhciBNZWRpYSQxID0gTWVkaWE7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgRmFkZVByb3BUeXBlcyA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpO1xudmFyIHByb3BUeXBlcyRrID0ge1xuICBhdXRvRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYmFja2Ryb3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYWNrZHJvcFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXJ0JywgJ2VuZCcsICdib3R0b20nLCAndG9wJywgJ2xlZnQnLCAncmlnaHQnXSksXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAga2V5Ym9hcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG9mZmNhbnZhc1RyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRW50ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25FeGl0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgdHJhcEZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pXG59O1xudmFyIHByb3BzVG9PbWl0ID0gT2JqZWN0LmtleXMocHJvcFR5cGVzJGspO1xudmFyIGRlZmF1bHRQcm9wcyRrID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBhdXRvRm9jdXM6IHRydWUsXG4gIGRpcmVjdGlvbjogJ3N0YXJ0JyxcbiAgc2Nyb2xsYWJsZTogZmFsc2UsXG4gIHJvbGU6ICdkaWFsb2cnLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHpJbmRleDogMTA1MCxcbiAgZmFkZTogdHJ1ZSxcbiAgb25PcGVuZWQ6IG5vb3AsXG4gIG9uQ2xvc2VkOiBub29wLFxuICBvZmZjYW52YXNUcmFuc2l0aW9uOiB7XG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLk9mZmNhbnZhc1xuICB9LFxuICBiYWNrZHJvcFRyYW5zaXRpb246IHtcbiAgICBtb3VudE9uRW50ZXI6IHRydWUsXG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkZhZGUgLy8gdXNlcyBzdGFuZGFyZCBmYWRlIHRyYW5zaXRpb25cblxuICB9LFxuICB1bm1vdW50T25DbG9zZTogdHJ1ZSxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiB0cnVlLFxuICBjb250YWluZXI6ICdib2R5JyxcbiAgdHJhcEZvY3VzOiBmYWxzZVxufTtcblxudmFyIE9mZmNhbnZhcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShPZmZjYW52YXMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9mZmNhbnZhcyhwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUVzY2FwZSA9IF90aGlzLmhhbmRsZUVzY2FwZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUYWIgPSBfdGhpcy5oYW5kbGVUYWIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25PcGVuZWQgPSBfdGhpcy5vbk9wZW5lZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNsb3NlZCA9IF90aGlzLm9uQ2xvc2VkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSA9IF90aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRyYXBGb2N1cyA9IF90aGlzLnRyYXBGb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPZmZjYW52YXMucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgICBvbkVudGVyID0gX3RoaXMkcHJvcHMub25FbnRlcjtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbkVudGVyKSB7XG4gICAgICBvbkVudGVyKCk7XG4gICAgfSAvLyB0cmFwcyBmb2N1cyBpbnNpZGUgdGhlIE9mZmNhbnZhcywgZXZlbiBpZiB0aGUgYnJvd3NlciBhZGRyZXNzIGJhciBpcyBmb2N1c2VkXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIG5vdyBPZmZjYW52YXMgRGlhbG9nIGlzIHJlbmRlcmVkIGFuZCB3ZSBjYW4gcmVmZXIgdGhpcy5fZWxlbWVudCBhbmQgdGhpcy5fZGlhbG9nXG5cblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHByZXZQcm9wcy56SW5kZXggIT09IHRoaXMucHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by50cmFwRm9jdXMgPSBmdW5jdGlvbiB0cmFwRm9jdXMoZXYpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudHJhcEZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSAvL2VsZW1lbnQgaXMgbm90IGF0dGFjaGVkXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX2RpYWxvZyA9PT0gZXYudGFyZ2V0KSAvLyBpbml0aWFsIGZvY3VzIHdoZW4gdGhlIE9mZmNhbnZhcyBpcyBvcGVuZWRcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5vZmZjYW52YXNJbmRleCA8IE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKSAvLyBsYXN0IG9wZW5lZCBvZmZjYW52YXNcbiAgICAgIHJldHVybjtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBmb2N1cyBpcyBhbHJlYWR5IGluc2lkZSB0aGUgT2ZmY2FudmFzXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGV2LnRhcmdldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBPZmZjYW52YXNcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk9wZW5lZCA9IGZ1bmN0aW9uIG9uT3BlbmVkKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5wcm9wcy5vbk9wZW5lZCgpO1xuICAgICh0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24ub25FbnRlcmVkIHx8IG5vb3ApKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25DbG9zZWQgPSBmdW5jdGlvbiBvbkNsb3NlZChub2RlKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTsgLy8gc28gYWxsIG1ldGhvZHMgZ2V0IGNhbGxlZCBiZWZvcmUgaXQgaXMgdW5tb3VudGVkXG5cbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VkKCk7XG4gICAgKHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi5vbkV4aXRlZCB8fCBub29wKShub2RlKTtcblxuICAgIGlmICh1bm1vdW50T25DbG9zZSkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZGlhbG9nICYmIHR5cGVvZiB0aGlzLl9kaWFsb2cuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZUVsZW1lbnRzLmpvaW4oJywgJykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2VkQ2hpbGQgPSBmdW5jdGlvbiBnZXRGb2N1c2VkQ2hpbGQoKSB7XG4gICAgdmFyIGN1cnJlbnRGb2N1cztcbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICB0cnkge1xuICAgICAgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGZvY3VzYWJsZUNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50Rm9jdXM7XG4gIH0gLy8gbm90IG1vdXNlVXAgYmVjYXVzZSBzY3JvbGxiYXIgZmlyZXMgaXQsIHNob3VsZG4ndCBjbG9zZSB3aGVuIHVzZXIgc2Nyb2xsc1xuICA7XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuX21vdXNlRG93bkVsZW1lbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgYmFja2Ryb3AgPSB0aGlzLl9iYWNrZHJvcDtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5wcm9wcy5iYWNrZHJvcCAhPT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgZS50YXJnZXQgPT09IGJhY2tkcm9wICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVGFiID0gZnVuY3Rpb24gaGFuZGxlVGFiKGUpIHtcbiAgICBpZiAoZS53aGljaCAhPT0gOSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm9mZmNhbnZhc0luZGV4IDwgT2ZmY2FudmFzLm9wZW5Db3VudCAtIDEpIHJldHVybjsgLy8gbGFzdCBvcGVuZWQgb2ZmY2FudmFzXG5cbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG4gICAgdmFyIHRvdGFsRm9jdXNhYmxlID0gZm9jdXNhYmxlQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmICh0b3RhbEZvY3VzYWJsZSA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBjdXJyZW50Rm9jdXMgPSB0aGlzLmdldEZvY3VzZWRDaGlsZCgpO1xuICAgIHZhciBmb2N1c2VkSW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbEZvY3VzYWJsZTsgaSArPSAxKSB7XG4gICAgICBpZiAoZm9jdXNhYmxlQ2hpbGRyZW5baV0gPT09IGN1cnJlbnRGb2N1cykge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuW3RvdGFsRm9jdXNhYmxlIC0gMV0uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gdG90YWxGb2N1c2FibGUgLSAxKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQmFja2Ryb3BNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcE1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5fbW91c2VEb3duRWxlbWVudCA9IGUudGFyZ2V0O1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFc2NhcGUgPSBmdW5jdGlvbiBoYW5kbGVFc2NhcGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBlLmtleUNvZGUgPT09IGtleUNvZGVzLmVzYyAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMua2V5Ym9hcmQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lciA9IGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG5cbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCk7XG4gICAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcigpO1xuXG4gICAgaWYgKE9mZmNhbnZhcy5vcGVuQ291bnQgPT09IDAgJiYgdGhpcy5wcm9wcy5iYWNrZHJvcCAmJiAhdGhpcy5wcm9wcy5zY3JvbGxhYmxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZjYW52YXNJbmRleCA9IE9mZmNhbnZhcy5vcGVuQ291bnQ7XG4gICAgT2ZmY2FudmFzLm9wZW5Db3VudCArPSAxO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uIG1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciByZXR1cm5Gb2N1c0FmdGVyQ2xvc2UgPSB0aGlzLnByb3BzLnJldHVybkZvY3VzQWZ0ZXJDbG9zZTtcbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cyAmJiByZXR1cm5Gb2N1c0FmdGVyQ2xvc2UpIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlKCk7XG4gICAgT2ZmY2FudmFzLm9wZW5Db3VudCA9IE1hdGgubWF4KDAsIE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbnVsbDtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aCh0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzMi5kaXJlY3Rpb24sXG4gICAgICAgIHVubW91bnRPbkNsb3NlID0gX3RoaXMkcHJvcHMyLnVubW91bnRPbkNsb3NlO1xuXG4gICAgaWYgKCEhdGhpcy5fZWxlbWVudCAmJiAodGhpcy5zdGF0ZS5pc09wZW4gfHwgIXVubW91bnRPbkNsb3NlKSkge1xuICAgICAgdmFyIGlzT2ZmY2FudmFzSGlkZGVuID0gISF0aGlzLl9lbGVtZW50ICYmICF0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdW5tb3VudE9uQ2xvc2U7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc09mZmNhbnZhc0hpZGRlbiA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmJhY2tkcm9wQ2xhc3NOYW1lLFxuICAgICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzMy5jc3NNb2R1bGUsXG4gICAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMzLmlzT3BlbixcbiAgICAgICAgICBiYWNrZHJvcCA9IF90aGlzJHByb3BzMy5iYWNrZHJvcCxcbiAgICAgICAgICByb2xlID0gX3RoaXMkcHJvcHMzLnJvbGUsXG4gICAgICAgICAgbGFiZWxsZWRCeSA9IF90aGlzJHByb3BzMy5sYWJlbGxlZEJ5LFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMzLnN0eWxlO1xuICAgICAgdmFyIG9mZmNhbnZhc0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlRXNjYXBlLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlVGFiLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxsZWRCeSxcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgdGFiSW5kZXg6ICctMSdcbiAgICAgIH07XG4gICAgICB2YXIgaGFzVHJhbnNpdGlvbiA9IHRoaXMucHJvcHMuZmFkZTtcblxuICAgICAgdmFyIG9mZmNhbnZhc1RyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24pLCB7fSwge1xuICAgICAgICBiYXNlQ2xhc3M6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgYmFja2Ryb3BUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24pLCB7fSwge1xuICAgICAgICBiYXNlQ2xhc3M6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIEJhY2tkcm9wID0gYmFja2Ryb3AgJiYgKGhhc1RyYW5zaXRpb24gPyAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGJhY2tkcm9wVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbiAmJiAhIWJhY2tkcm9wLFxuICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoYykge1xuICAgICAgICAgIF90aGlzMi5fYmFja2Ryb3AgPSBjO1xuICAgICAgICB9LFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ29mZmNhbnZhcy1iYWNrZHJvcCcsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93blxuICAgICAgfSkpIDogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ29mZmNhbnZhcy1iYWNrZHJvcCcsICdzaG93JywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duXG4gICAgICB9KSk7XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgcHJvcHNUb09taXQpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3J0YWwkMSwge1xuICAgICAgICBub2RlOiB0aGlzLl9lbGVtZW50XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIG9mZmNhbnZhc0F0dHJpYnV0ZXMsIG9mZmNhbnZhc1RyYW5zaXRpb24sIHtcbiAgICAgICAgXCJpblwiOiBpc09wZW4sXG4gICAgICAgIG9uRW50ZXJlZDogdGhpcy5vbk9wZW5lZCxcbiAgICAgICAgb25FeGl0ZWQ6IHRoaXMub25DbG9zZWQsXG4gICAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnb2ZmY2FudmFzJywgY2xhc3NOYW1lLCBcIm9mZmNhbnZhcy1cIiArIGRpcmVjdGlvbiksIGNzc01vZHVsZSksXG4gICAgICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZihjKSB7XG4gICAgICAgICAgX3RoaXMyLl9kaWFsb2cgPSBjO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHN0eWxlKSwge30sIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBpc09wZW4gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1xuICAgICAgICB9KVxuICAgICAgfSksIHRoaXMucHJvcHMuY2hpbGRyZW4pLCBCYWNrZHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBPZmZjYW52YXM7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5PZmZjYW52YXMucHJvcFR5cGVzID0gcHJvcFR5cGVzJGs7XG5PZmZjYW52YXMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGs7XG5PZmZjYW52YXMub3BlbkNvdW50ID0gMDtcbnZhciBPZmZjYW52YXMkMSA9IE9mZmNhbnZhcztcblxudmFyIF9leGNsdWRlZCRoID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRqID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRqID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgT2ZmY2FudmFzQm9keSA9IGZ1bmN0aW9uIE9mZmNhbnZhc0JvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ29mZmNhbnZhcy1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5PZmZjYW52YXNCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRqO1xuT2ZmY2FudmFzQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkajtcbnZhciBPZmZjYW52YXNCb2R5JDEgPSBPZmZjYW52YXNCb2R5O1xuXG52YXIgX2V4Y2x1ZGVkJGcgPSBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNsb3NlXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJ0b2dnbGVcIiwgXCJ3cmFwVGFnXCJdO1xudmFyIHByb3BUeXBlcyRpID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNsb3NlQXJpYUxhYmVsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHdyYXBUYWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRpID0ge1xuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJyxcbiAgdGFnOiAnaDUnLFxuICB3cmFwVGFnOiAnZGl2J1xufTtcblxudmFyIE9mZmNhbnZhc0hlYWRlciA9IGZ1bmN0aW9uIE9mZmNhbnZhc0hlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG5cbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIFdyYXBUYWcgPSBwcm9wcy53cmFwVGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnb2ZmY2FudmFzLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuXG4gIGlmICghY2xvc2UgJiYgdG9nZ2xlKSB7XG4gICAgY2xvc2VCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdidG4tY2xvc2UnLCBjc3NNb2R1bGUpLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlQXJpYUxhYmVsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFdyYXBUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ29mZmNhbnZhcy10aXRsZScsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59O1xuXG5PZmZjYW52YXNIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJGk7XG5PZmZjYW52YXNIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGk7XG52YXIgT2ZmY2FudmFzSGVhZGVyJDEgPSBPZmZjYW52YXNIZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkZiA9IFtcImNsYXNzTmFtZVwiLCBcImxpc3RDbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJzaXplXCIsIFwidGFnXCIsIFwibGlzdFRhZ1wiLCBcImFyaWEtbGFiZWxcIl07XG52YXIgcHJvcFR5cGVzJGggPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxpc3RDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbGlzdFRhZzogdGFnUHJvcFR5cGUsXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJGggPSB7XG4gIHRhZzogJ25hdicsXG4gIGxpc3RUYWc6ICd1bCcsXG4gICdhcmlhLWxhYmVsJzogJ3BhZ2luYXRpb24nXG59O1xuXG52YXIgUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIFBhZ2luYXRpb24ocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsaXN0Q2xhc3NOYW1lID0gcHJvcHMubGlzdENsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgTGlzdFRhZyA9IHByb3BzLmxpc3RUYWcsXG4gICAgICBsYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRmKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0obGlzdENsYXNzTmFtZSwgJ3BhZ2luYXRpb24nLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbXCJwYWdpbmF0aW9uLVwiICsgc2l6ZV0gPSAhIXNpemUsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoTGlzdFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0pKSk7XG59O1xuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyRoO1xuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkaDtcbnZhciBQYWdpbmF0aW9uJDEgPSBQYWdpbmF0aW9uO1xuXG52YXIgX2V4Y2x1ZGVkJGUgPSBbXCJhY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkaXNhYmxlZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkZyA9IHtcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJGcgPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIFBhZ2luYXRpb25JdGVtID0gZnVuY3Rpb24gUGFnaW5hdGlvbkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRlKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwYWdlLWl0ZW0nLCB7XG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuUGFnaW5hdGlvbkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJGc7XG5QYWdpbmF0aW9uSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZztcbnZhciBQYWdpbmF0aW9uSXRlbSQxID0gUGFnaW5hdGlvbkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkZCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcIm5leHRcIiwgXCJwcmV2aW91c1wiLCBcImZpcnN0XCIsIFwibGFzdFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkZiA9IHtcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgbmV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBwcmV2aW91czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmaXJzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsYXN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJGYgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgUGFnaW5hdGlvbkxpbmsgPSBmdW5jdGlvbiBQYWdpbmF0aW9uTGluayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbmV4dCA9IHByb3BzLm5leHQsXG4gICAgICBwcmV2aW91cyA9IHByb3BzLnByZXZpb3VzLFxuICAgICAgZmlyc3QgPSBwcm9wcy5maXJzdCxcbiAgICAgIGxhc3QgPSBwcm9wcy5sYXN0LFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncGFnZS1saW5rJyksIGNzc01vZHVsZSk7XG4gIHZhciBkZWZhdWx0QXJpYUxhYmVsO1xuXG4gIGlmIChwcmV2aW91cykge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnUHJldmlvdXMnO1xuICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ05leHQnO1xuICB9IGVsc2UgaWYgKGZpcnN0KSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdGaXJzdCc7XG4gIH0gZWxzZSBpZiAobGFzdCkge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnTGFzdCc7XG4gIH1cblxuICB2YXIgYXJpYUxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCBkZWZhdWx0QXJpYUxhYmVsO1xuICB2YXIgZGVmYXVsdENhcmV0O1xuXG4gIGlmIChwcmV2aW91cykge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx1MjAzOVwiO1xuICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxcdTIwM0FcIjtcbiAgfSBlbHNlIGlmIChmaXJzdCkge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx4QUJcIjtcbiAgfSBlbHNlIGlmIChsYXN0KSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHhCQlwiO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgaWYgKGNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIGlmICghYXR0cmlidXRlcy5ocmVmICYmIFRhZyA9PT0gJ2EnKSB7XG4gICAgVGFnID0gJ2J1dHRvbic7XG4gIH1cblxuICBpZiAocHJldmlvdXMgfHwgbmV4dCB8fCBmaXJzdCB8fCBsYXN0KSB7XG4gICAgY2hpbGRyZW4gPSBbLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAga2V5OiBcImNhcmV0XCJcbiAgICB9LCBjaGlsZHJlbiB8fCBkZWZhdWx0Q2FyZXQpLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ2aXN1YWxseS1oaWRkZW5cIixcbiAgICAgIGtleTogXCJhcmlhTGFiZWxcIlxuICAgIH0sIGFyaWFMYWJlbCldO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxcbiAgfSksIGNoaWxkcmVuKTtcbn07XG5cblBhZ2luYXRpb25MaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyRmO1xuUGFnaW5hdGlvbkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGY7XG52YXIgUGFnaW5hdGlvbkxpbmskMSA9IFBhZ2luYXRpb25MaW5rO1xuXG4vKipcbiAqIFRhYkNvbnRleHRcbiAqIHtcbiAqICBhY3RpdmVUYWJJZDogUHJvcFR5cGVzLmFueVxuICogfVxuICovXG5cbnZhciBUYWJDb250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgcHJvcFR5cGVzJGUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFjdGl2ZVRhYjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJGUgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBUYWJDb250ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRhYkNvbnRlbnQsIF9Db21wb25lbnQpO1xuXG4gIFRhYkNvbnRlbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVUYWIgIT09IG5leHRQcm9wcy5hY3RpdmVUYWIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZVRhYjogbmV4dFByb3BzLmFjdGl2ZVRhYlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBUYWJDb250ZW50KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVUYWI6IF90aGlzLnByb3BzLmFjdGl2ZVRhYlxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRhYkNvbnRlbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZztcbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzJGUpKTtcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndGFiLWNvbnRlbnQnLCBjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFiQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgYWN0aXZlVGFiSWQ6IHRoaXMuc3RhdGUuYWN0aXZlVGFiXG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKSk7XG4gIH07XG5cbiAgcmV0dXJuIFRhYkNvbnRlbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBUYWJDb250ZW50JDEgPSBUYWJDb250ZW50O1xuVGFiQ29udGVudC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZTtcblRhYkNvbnRlbnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGU7XG5cbnZhciBfZXhjbHVkZWQkYyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhYklkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRkID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0YWJJZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn07XG52YXIgZGVmYXVsdFByb3BzJGQgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5mdW5jdGlvbiBUYWJQYW5lKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0YWJJZCA9IHByb3BzLnRhYklkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYyk7XG5cbiAgdmFyIGdldENsYXNzZXMgPSBmdW5jdGlvbiBnZXRDbGFzc2VzKGFjdGl2ZVRhYklkKSB7XG4gICAgcmV0dXJuIG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndGFiLXBhbmUnLCBjbGFzc05hbWUsIHtcbiAgICAgIGFjdGl2ZTogdGFiSWQgPT09IGFjdGl2ZVRhYklkXG4gICAgfSksIGNzc01vZHVsZSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBhY3RpdmVUYWJJZCA9IF9yZWYuYWN0aXZlVGFiSWQ7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGdldENsYXNzZXMoYWN0aXZlVGFiSWQpXG4gICAgfSkpO1xuICB9KTtcbn1cblRhYlBhbmUucHJvcFR5cGVzID0gcHJvcFR5cGVzJGQ7XG5UYWJQYW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRkO1xuXG52YXIgX2V4Y2x1ZGVkJGIgPSBbXCJjbGFzc05hbWVcIiwgXCJjbG9zZUNsYXNzTmFtZVwiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiY29sb3JcIiwgXCJpc09wZW5cIiwgXCJ0b2dnbGVcIiwgXCJjaGlsZHJlblwiLCBcInRyYW5zaXRpb25cIiwgXCJmYWRlXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJGMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyRjID0ge1xuICBjb2xvcjogJ3N1Y2Nlc3MnLFxuICBpc09wZW46IHRydWUsXG4gIHRhZzogJ2RpdicsXG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbG9zZUNsYXNzTmFtZSA9IHByb3BzLmNsb3NlQ2xhc3NOYW1lLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBpc09wZW4gPSBwcm9wcy5pc09wZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBmYWRlID0gcHJvcHMuZmFkZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRiKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhbGVydCcsIFwiYWxlcnQtXCIgKyBjb2xvciwge1xuICAgICdhbGVydC1kaXNtaXNzaWJsZSc6IHRvZ2dsZVxuICB9KSwgY3NzTW9kdWxlKTtcbiAgdmFyIGNsb3NlQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYnRuLWNsb3NlJywgY2xvc2VDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuXG4gIHZhciBhbGVydFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0cmFuc2l0aW9uKSwge30sIHtcbiAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgIHRpbWVvdXQ6IGZhZGUgPyB0cmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gIH0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIGFsZXJ0VHJhbnNpdGlvbiwge1xuICAgIHRhZzogVGFnLFxuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImluXCI6IGlzT3BlbixcbiAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gIH0pLCB0b2dnbGUgPyAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBjbG9zZUNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlQXJpYUxhYmVsLFxuICAgIG9uQ2xpY2s6IHRvZ2dsZVxuICB9KSA6IG51bGwsIGNoaWxkcmVuKTtcbn1cblxuQWxlcnQucHJvcFR5cGVzID0gcHJvcFR5cGVzJGM7XG5BbGVydC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkYztcblxudmFyIF9leGNsdWRlZCRhID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaXNPcGVuXCIsIFwiY2hpbGRyZW5cIiwgXCJ0cmFuc2l0aW9uXCIsIFwiZmFkZVwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRiID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyRiID0ge1xuICBpc09wZW46IHRydWUsXG4gIHRhZzogJ2RpdicsXG4gIGZhZGU6IHRydWUsXG4gIHRyYW5zaXRpb246IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gICAgdW5tb3VudE9uRXhpdDogdHJ1ZVxuICB9KVxufTtcblxuZnVuY3Rpb24gVG9hc3QocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlzT3BlbiA9IHByb3BzLmlzT3BlbixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0cmFuc2l0aW9uID0gcHJvcHMudHJhbnNpdGlvbixcbiAgICAgIGZhZGUgPSBwcm9wcy5mYWRlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGEpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3RvYXN0JyksIGNzc01vZHVsZSk7XG5cbiAgdmFyIHRvYXN0VHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRyYW5zaXRpb24pLCB7fSwge1xuICAgIGJhc2VDbGFzczogZmFkZSA/IHRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgfSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgdG9hc3RUcmFuc2l0aW9uLCB7XG4gICAgdGFnOiBUYWcsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiaW5cIjogaXNPcGVuLFxuICAgIHJvbGU6IFwiYWxlcnRcIixcbiAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgfSksIGNoaWxkcmVuKTtcbn1cblxuVG9hc3QucHJvcFR5cGVzID0gcHJvcFR5cGVzJGI7XG5Ub2FzdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkYjtcblxudmFyIF9leGNsdWRlZCQ5ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIFRvYXN0Qm9keSA9IGZ1bmN0aW9uIFRvYXN0Qm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3RvYXN0LWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuVG9hc3RCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRhO1xuVG9hc3RCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRhO1xudmFyIFRvYXN0Qm9keSQxID0gVG9hc3RCb2R5O1xuXG52YXIgX2V4Y2x1ZGVkJDggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcInRvZ2dsZVwiLCBcInRhZ1wiLCBcIndyYXBUYWdcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNsb3NlXCIsIFwidGFnQ2xhc3NOYW1lXCIsIFwiaWNvblwiXTtcbnZhciBwcm9wVHlwZXMkOSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaWNvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoYXJDb2RlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkOSA9IHtcbiAgdGFnOiAnc3Ryb25nJyxcbiAgd3JhcFRhZzogJ2RpdicsXG4gIHRhZ0NsYXNzTmFtZTogJ21lLWF1dG8nLFxuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJ1xufTtcblxudmFyIFRvYXN0SGVhZGVyID0gZnVuY3Rpb24gVG9hc3RIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uO1xuICB2YXIgaWNvbjtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIFdyYXBUYWcgPSBwcm9wcy53cmFwVGFnLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICB0YWdDbGFzc05hbWUgPSBwcm9wcy50YWdDbGFzc05hbWUsXG4gICAgICBpY29uUHJvcCA9IHByb3BzLmljb24sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ4KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGljb24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoXCJyb3VuZGVkIHRleHQtXCIgKyBpY29uUHJvcCksXG4gICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxuICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICByb2xlOiBcImltZ1wiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgIH0pKTtcbiAgfSBlbHNlIGlmIChpY29uUHJvcCkge1xuICAgIGljb24gPSBpY29uUHJvcDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoV3JhcFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGljb24sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0YWdDbGFzc05hbWUsIHtcbiAgICAgIFwibXMtMlwiOiBpY29uICE9IG51bGxcbiAgICB9KSwgY3NzTW9kdWxlKVxuICB9LCBjaGlsZHJlbiksIGNsb3NlIHx8IGNsb3NlQnV0dG9uKTtcbn07XG5cblRvYXN0SGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ5O1xuVG9hc3RIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDk7XG52YXIgVG9hc3RIZWFkZXIkMSA9IFRvYXN0SGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJDcgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJhY3RpdmVcIiwgXCJkaXNhYmxlZFwiLCBcImFjdGlvblwiLCBcImNvbG9yXCJdO1xudmFyIHByb3BUeXBlcyQ4ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBhY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkOCA9IHtcbiAgdGFnOiAnbGknXG59O1xuXG52YXIgaGFuZGxlRGlzYWJsZWRPbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlRGlzYWJsZWRPbkNsaWNrKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxudmFyIExpc3RHcm91cEl0ZW0gPSBmdW5jdGlvbiBMaXN0R3JvdXBJdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDcpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogZmFsc2UsIGFjdGlvbiA/ICdsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uJyA6IGZhbHNlLCBjb2xvciA/IFwibGlzdC1ncm91cC1pdGVtLVwiICsgY29sb3IgOiBmYWxzZSwgJ2xpc3QtZ3JvdXAtaXRlbScpLCBjc3NNb2R1bGUpOyAvLyBQcmV2ZW50IGNsaWNrIGV2ZW50IHdoZW4gZGlzYWJsZWQuXG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgYXR0cmlidXRlcy5vbkNsaWNrID0gaGFuZGxlRGlzYWJsZWRPbkNsaWNrO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkxpc3RHcm91cEl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDg7XG5MaXN0R3JvdXBJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ4O1xudmFyIExpc3RHcm91cEl0ZW0kMSA9IExpc3RHcm91cEl0ZW07XG5cbnZhciBfZXhjbHVkZWQkNiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkNyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkNyA9IHtcbiAgdGFnOiAnaDUnXG59O1xuXG52YXIgTGlzdEdyb3VwSXRlbUhlYWRpbmcgPSBmdW5jdGlvbiBMaXN0R3JvdXBJdGVtSGVhZGluZyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkNik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbGlzdC1ncm91cC1pdGVtLWhlYWRpbmcnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkxpc3RHcm91cEl0ZW1IZWFkaW5nLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ3O1xuTGlzdEdyb3VwSXRlbUhlYWRpbmcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDc7XG52YXIgTGlzdEdyb3VwSXRlbUhlYWRpbmckMSA9IExpc3RHcm91cEl0ZW1IZWFkaW5nO1xuXG52YXIgX2V4Y2x1ZGVkJDUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDYgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDYgPSB7XG4gIHRhZzogJ3AnXG59O1xuXG52YXIgTGlzdEdyb3VwSXRlbVRleHQgPSBmdW5jdGlvbiBMaXN0R3JvdXBJdGVtVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkNSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbGlzdC1ncm91cC1pdGVtLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkxpc3RHcm91cEl0ZW1UZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQ2O1xuTGlzdEdyb3VwSXRlbVRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDY7XG52YXIgTGlzdEdyb3VwSXRlbVRleHQkMSA9IExpc3RHcm91cEl0ZW1UZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJDQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJ0eXBlXCJdO1xudmFyIHByb3BUeXBlcyQ1ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkNSA9IHtcbiAgdGFnOiAndWwnXG59O1xudmFyIExpc3QgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgdHlwZSA/IFwibGlzdC1cIiArIHR5cGUgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IHJlZlxuICB9KSk7XG59KTtcbkxpc3QubmFtZSA9ICdMaXN0Jztcbkxpc3QucHJvcFR5cGVzID0gcHJvcFR5cGVzJDU7XG5MaXN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ1O1xudmFyIExpc3QkMSA9IExpc3Q7XG5cbnZhciBfZXhjbHVkZWQkMyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkNCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkNCA9IHtcbiAgdGFnOiAnbGknXG59O1xudmFyIExpc3RJbmxpbmVJdGVtID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbGlzdC1pbmxpbmUtaXRlbScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5MaXN0SW5saW5lSXRlbS5uYW1lID0gJ0xpc3RJbmxpbmVJdGVtJztcbkxpc3RJbmxpbmVJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ0O1xuTGlzdElubGluZUl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDQ7XG52YXIgTGlzdElubGluZUl0ZW0kMSA9IExpc3RJbmxpbmVJdGVtO1xuXG52YXIgVW5jb250cm9sbGVkQWxlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQWxlcnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZEFsZXJ0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHRydWVcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQWxlcnQucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBbGVydCwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCB0aGlzLnByb3BzKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZEFsZXJ0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVW5jb250cm9sbGVkQWxlcnQkMSA9IFVuY29udHJvbGxlZEFsZXJ0O1xuXG52YXIgb21pdEtleXMkMyA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEJ1dHRvbkRyb3Bkb3duJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cyQzKSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgQnV0dG9uRHJvcGRvd24kMS5wcm9wVHlwZXMpO1xuXG52YXIgb21pdEtleXMkMiA9IFsndG9nZ2xlRXZlbnRzJywgJ2RlZmF1bHRPcGVuJ107XG52YXIgcHJvcFR5cGVzJDMgPSB7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvZ2dsZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUV2ZW50czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMyA9IHtcbiAgdG9nZ2xlRXZlbnRzOiBkZWZhdWx0VG9nZ2xlRXZlbnRzXG59O1xuXG52YXIgVW5jb250cm9sbGVkQ29sbGFwc2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQ29sbGFwc2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZENvbGxhcHNlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMudG9nZ2xlcnMgPSBudWxsO1xuICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gbnVsbDtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQ29sbGFwc2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudG9nZ2xlcnMgPSBmaW5kRE9NRWxlbWVudHModGhpcy5wcm9wcy50b2dnbGVyKTtcblxuICAgIGlmICh0aGlzLnRvZ2dsZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycyA9IGFkZE11bHRpcGxlRXZlbnRMaXN0ZW5lcnModGhpcy50b2dnbGVycywgdGhpcy50b2dnbGUsIHRoaXMucHJvcHMudG9nZ2xlRXZlbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMudG9nZ2xlcnMubGVuZ3RoICYmIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGlzT3BlbiA9IF9yZWYuaXNPcGVuO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiAhaXNPcGVuXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ29sbGFwc2UkMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkMikpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkQ29sbGFwc2U7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblVuY29udHJvbGxlZENvbGxhcHNlLnByb3BUeXBlcyA9IHByb3BUeXBlcyQzO1xuVW5jb250cm9sbGVkQ29sbGFwc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDM7XG52YXIgVW5jb250cm9sbGVkQ29sbGFwc2UkMSA9IFVuY29udHJvbGxlZENvbGxhcHNlO1xuXG52YXIgb21pdEtleXMkMSA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZERyb3Bkb3duLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWREcm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWREcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgaXNPcGVuID0gIXRoaXMuc3RhdGUuaXNPcGVuO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBpc09wZW5cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMyLnByb3BzLm9uVG9nZ2xlKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vblRvZ2dsZShlLCBpc09wZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChEcm9wZG93biQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkMSkpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkRHJvcGRvd247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWREcm9wZG93bi5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn0sIERyb3Bkb3duJDEucHJvcFR5cGVzKTtcblxudmFyIG9taXRLZXlzID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRUb29sdGlwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRUb29sdGlwKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZFRvb2x0aXAucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cykpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkVG9vbHRpcDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblVuY29udHJvbGxlZFRvb2x0aXAucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59LCBUb29sdGlwJDEucHJvcFR5cGVzKTtcblxudmFyIF9leGNsdWRlZCQyID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidHlwZVwiLCBcInNpemVcIiwgXCJjb2xvclwiLCBcImNoaWxkcmVuXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQyID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQyID0ge1xuICB0YWc6ICdkaXYnLFxuICB0eXBlOiAnYm9yZGVyJyxcbiAgY2hpbGRyZW46ICdMb2FkaW5nLi4uJ1xufTtcblxudmFyIFNwaW5uZXIgPSBmdW5jdGlvbiBTcGlubmVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQyKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHNpemUgPyBcInNwaW5uZXItXCIgKyB0eXBlICsgXCItXCIgKyBzaXplIDogZmFsc2UsIFwic3Bpbm5lci1cIiArIHR5cGUsIGNvbG9yID8gXCJ0ZXh0LVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJzdGF0dXNcIlxuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygndmlzdWFsbHktaGlkZGVuJywgY3NzTW9kdWxlKVxuICB9LCBjaGlsZHJlbikpO1xufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMjtcblNwaW5uZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDI7XG52YXIgU3Bpbm5lciQxID0gU3Bpbm5lcjtcblxudmFyIF9leGNsdWRlZCQxID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJpbm5lclJlZlwiLCBcInRhZ1wiLCBcImFuaW1hdGlvblwiLCBcInNpemVcIiwgXCJ3aWR0aHNcIl07XG5cbnZhciBwcm9wVHlwZXMkMSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBDb2wkMS5wcm9wVHlwZXMpLCB7fSwge1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2dsb3cnLCAnd2F2ZSddKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnbGcnLCAnc20nLCAneHMnXSlcbn0pO1xuXG52YXIgZGVmYXVsdFByb3BzJDEgPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG52YXIgUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBQbGFjZWhvbGRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDEpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY29sQ2xhc3NlcywgJ3BsYWNlaG9sZGVyJyArIChhbmltYXRpb24gPyAnLScgKyBhbmltYXRpb24gOiAnJyksIHNpemUgPyAncGxhY2Vob2xkZXItJyArIHNpemUgOiBmYWxzZSwgY29sb3IgPyAnYmctJyArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cblBsYWNlaG9sZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxO1xuUGxhY2Vob2xkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE7XG52YXIgUGxhY2Vob2xkZXIkMSA9IFBsYWNlaG9sZGVyO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiY3NzTW9kdWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgdGFnOiBCdXR0b24kMVxufTtcblxudmFyIFBsYWNlaG9sZGVyQnV0dG9uID0gZnVuY3Rpb24gUGxhY2Vob2xkZXJCdXR0b24ocHJvcHMpIHtcbiAgdmFyIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICB2YXIgX2dldENvbHVtbkNsYXNzZXMgPSBnZXRDb2x1bW5DbGFzc2VzKGF0dHJpYnV0ZXMsIGNzc01vZHVsZSksXG4gICAgICBtb2RpZmllZEF0dHJpYnV0ZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5hdHRyaWJ1dGVzLFxuICAgICAgY29sQ2xhc3NlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmNvbENsYXNzZXM7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oXCJwbGFjZWhvbGRlclwiLCBjbGFzc05hbWUsIGNvbENsYXNzZXMpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEJ1dHRvbiQxLCBfZXh0ZW5kcyh7fSwgbW9kaWZpZWRBdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0pKTtcbn07XG5cblBsYWNlaG9sZGVyQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBsYWNlaG9sZGVyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBQbGFjZWhvbGRlckJ1dHRvbiQxID0gUGxhY2Vob2xkZXJCdXR0b247XG5cbihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiBudWxsXG4gICAgfTtcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9O1xuXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBPYmplY3QudmFsdWVzID09PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgdmFyIHZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcyhPKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKE8pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gT1trZXldO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC52YWx1ZXMgPSB2YWx1ZXM7XG59KSgpO1xuXG52YXIgcG9seWZpbGwgPSB7XG4gIF9fcHJvdG9fXzogbnVsbFxufTtcblxuZXhwb3J0cy5BY2NvcmRpb24gPSBBY2NvcmRpb24kMTtcbmV4cG9ydHMuQWNjb3JkaW9uQm9keSA9IEFjY29yZGlvbkl0ZW0kMTtcbmV4cG9ydHMuQWNjb3JkaW9uQ29udGV4dCA9IEFjY29yZGlvbkNvbnRleHQ7XG5leHBvcnRzLkFjY29yZGlvbkhlYWRlciA9IEFjY29yZGlvbkhlYWRlciQxO1xuZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gQWNjb3JkaW9uSXRlbSQzO1xuZXhwb3J0cy5BbGVydCA9IEFsZXJ0O1xuZXhwb3J0cy5CYWRnZSA9IEJhZGdlJDE7XG5leHBvcnRzLkJyZWFkY3J1bWIgPSBCcmVhZGNydW1iJDE7XG5leHBvcnRzLkJyZWFkY3J1bWJJdGVtID0gQnJlYWRjcnVtYkl0ZW0kMTtcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uJDE7XG5leHBvcnRzLkJ1dHRvbkRyb3Bkb3duID0gQnV0dG9uRHJvcGRvd24kMTtcbmV4cG9ydHMuQnV0dG9uR3JvdXAgPSBCdXR0b25Hcm91cCQxO1xuZXhwb3J0cy5CdXR0b25Ub2dnbGUgPSBCdXR0b25Ub2dnbGUkMTtcbmV4cG9ydHMuQnV0dG9uVG9vbGJhciA9IEJ1dHRvblRvb2xiYXIkMTtcbmV4cG9ydHMuQ2FyZCA9IENhcmQkMTtcbmV4cG9ydHMuQ2FyZEJvZHkgPSBDYXJkQm9keSQxO1xuZXhwb3J0cy5DYXJkQ29sdW1ucyA9IENhcmRDb2x1bW5zJDE7XG5leHBvcnRzLkNhcmREZWNrID0gQ2FyZERlY2skMTtcbmV4cG9ydHMuQ2FyZEZvb3RlciA9IENhcmRGb290ZXIkMTtcbmV4cG9ydHMuQ2FyZEdyb3VwID0gQ2FyZEdyb3VwJDE7XG5leHBvcnRzLkNhcmRIZWFkZXIgPSBDYXJkSGVhZGVyJDE7XG5leHBvcnRzLkNhcmRJbWcgPSBDYXJkSW1nJDE7XG5leHBvcnRzLkNhcmRJbWdPdmVybGF5ID0gQ2FyZEltZ092ZXJsYXkkMTtcbmV4cG9ydHMuQ2FyZExpbmsgPSBDYXJkTGluayQxO1xuZXhwb3J0cy5DYXJkU3VidGl0bGUgPSBDYXJkU3VidGl0bGUkMTtcbmV4cG9ydHMuQ2FyZFRleHQgPSBDYXJkVGV4dCQxO1xuZXhwb3J0cy5DYXJkVGl0bGUgPSBDYXJkVGl0bGUkMTtcbmV4cG9ydHMuQ2Fyb3VzZWwgPSBDYXJvdXNlbCQxO1xuZXhwb3J0cy5DYXJvdXNlbENhcHRpb24gPSBDYXJvdXNlbENhcHRpb24kMTtcbmV4cG9ydHMuQ2Fyb3VzZWxDb250cm9sID0gQ2Fyb3VzZWxDb250cm9sJDE7XG5leHBvcnRzLkNhcm91c2VsSW5kaWNhdG9ycyA9IENhcm91c2VsSW5kaWNhdG9ycyQxO1xuZXhwb3J0cy5DYXJvdXNlbEl0ZW0gPSBDYXJvdXNlbEl0ZW0kMTtcbmV4cG9ydHMuQ29sID0gQ29sJDE7XG5leHBvcnRzLkNvbGxhcHNlID0gQ29sbGFwc2UkMTtcbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyJDE7XG5leHBvcnRzLkRyb3Bkb3duID0gRHJvcGRvd24kMTtcbmV4cG9ydHMuRHJvcGRvd25Db250ZXh0ID0gRHJvcGRvd25Db250ZXh0O1xuZXhwb3J0cy5Ecm9wZG93bkl0ZW0gPSBEcm9wZG93bkl0ZW0kMTtcbmV4cG9ydHMuRHJvcGRvd25NZW51ID0gRHJvcGRvd25NZW51JDE7XG5leHBvcnRzLkRyb3Bkb3duVG9nZ2xlID0gRHJvcGRvd25Ub2dnbGUkMTtcbmV4cG9ydHMuRmFkZSA9IEZhZGU7XG5leHBvcnRzLkZvcm0gPSBGb3JtJDE7XG5leHBvcnRzLkZvcm1GZWVkYmFjayA9IEZvcm1GZWVkYmFjayQxO1xuZXhwb3J0cy5Gb3JtR3JvdXAgPSBGb3JtR3JvdXAkMTtcbmV4cG9ydHMuRm9ybVRleHQgPSBGb3JtVGV4dCQxO1xuZXhwb3J0cy5JbnB1dCA9IElucHV0JDE7XG5leHBvcnRzLklucHV0R3JvdXAgPSBJbnB1dEdyb3VwJDE7XG5leHBvcnRzLklucHV0R3JvdXBUZXh0ID0gSW5wdXRHcm91cFRleHQkMTtcbmV4cG9ydHMuTGFiZWwgPSBMYWJlbCQxO1xuZXhwb3J0cy5MaXN0ID0gTGlzdCQxO1xuZXhwb3J0cy5MaXN0R3JvdXAgPSBMaXN0R3JvdXAkMTtcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbSA9IExpc3RHcm91cEl0ZW0kMTtcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbUhlYWRpbmcgPSBMaXN0R3JvdXBJdGVtSGVhZGluZyQxO1xuZXhwb3J0cy5MaXN0R3JvdXBJdGVtVGV4dCA9IExpc3RHcm91cEl0ZW1UZXh0JDE7XG5leHBvcnRzLkxpc3RJbmxpbmVJdGVtID0gTGlzdElubGluZUl0ZW0kMTtcbmV4cG9ydHMuTWVkaWEgPSBNZWRpYSQxO1xuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsJDE7XG5leHBvcnRzLk1vZGFsQm9keSA9IE1vZGFsQm9keSQxO1xuZXhwb3J0cy5Nb2RhbEZvb3RlciA9IE1vZGFsRm9vdGVyJDE7XG5leHBvcnRzLk1vZGFsSGVhZGVyID0gTW9kYWxIZWFkZXIkMTtcbmV4cG9ydHMuTmF2ID0gTmF2JDE7XG5leHBvcnRzLk5hdkl0ZW0gPSBOYXZJdGVtJDE7XG5leHBvcnRzLk5hdkxpbmsgPSBOYXZMaW5rJDE7XG5leHBvcnRzLk5hdmJhciA9IE5hdmJhciQxO1xuZXhwb3J0cy5OYXZiYXJCcmFuZCA9IE5hdmJhckJyYW5kJDE7XG5leHBvcnRzLk5hdmJhclRleHQgPSBOYXZiYXJUZXh0JDE7XG5leHBvcnRzLk5hdmJhclRvZ2dsZXIgPSBOYXZiYXJUb2dnbGVyJDE7XG5leHBvcnRzLk9mZmNhbnZhcyA9IE9mZmNhbnZhcyQxO1xuZXhwb3J0cy5PZmZjYW52YXNCb2R5ID0gT2ZmY2FudmFzQm9keSQxO1xuZXhwb3J0cy5PZmZjYW52YXNIZWFkZXIgPSBPZmZjYW52YXNIZWFkZXIkMTtcbmV4cG9ydHMuUGFnaW5hdGlvbiA9IFBhZ2luYXRpb24kMTtcbmV4cG9ydHMuUGFnaW5hdGlvbkl0ZW0gPSBQYWdpbmF0aW9uSXRlbSQxO1xuZXhwb3J0cy5QYWdpbmF0aW9uTGluayA9IFBhZ2luYXRpb25MaW5rJDE7XG5leHBvcnRzLlBsYWNlaG9sZGVyID0gUGxhY2Vob2xkZXIkMTtcbmV4cG9ydHMuUGxhY2Vob2xkZXJCdXR0b24gPSBQbGFjZWhvbGRlckJ1dHRvbiQxO1xuZXhwb3J0cy5Qb2x5ZmlsbCA9IHBvbHlmaWxsO1xuZXhwb3J0cy5Qb3BvdmVyID0gUG9wb3ZlciQxO1xuZXhwb3J0cy5Qb3BvdmVyQm9keSA9IFBvcG92ZXJCb2R5JDE7XG5leHBvcnRzLlBvcG92ZXJIZWFkZXIgPSBQb3BvdmVySGVhZGVyJDE7XG5leHBvcnRzLlBvcHBlckNvbnRlbnQgPSBQb3BwZXJDb250ZW50JDE7XG5leHBvcnRzLlBvcHBlclRhcmdldEhlbHBlciA9IFBvcHBlclRhcmdldEhlbHBlciQxO1xuZXhwb3J0cy5Qcm9ncmVzcyA9IFByb2dyZXNzJDE7XG5leHBvcnRzLlJvdyA9IFJvdyQxO1xuZXhwb3J0cy5TcGlubmVyID0gU3Bpbm5lciQxO1xuZXhwb3J0cy5UYWJDb250ZW50ID0gVGFiQ29udGVudCQxO1xuZXhwb3J0cy5UYWJQYW5lID0gVGFiUGFuZTtcbmV4cG9ydHMuVGFibGUgPSBUYWJsZSQxO1xuZXhwb3J0cy5Ub2FzdCA9IFRvYXN0O1xuZXhwb3J0cy5Ub2FzdEJvZHkgPSBUb2FzdEJvZHkkMTtcbmV4cG9ydHMuVG9hc3RIZWFkZXIgPSBUb2FzdEhlYWRlciQxO1xuZXhwb3J0cy5Ub29sdGlwID0gVG9vbHRpcCQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRBY2NvcmRpb24gPSBVbmNvbnRyb2xsZWRBY2NvcmRpb24kMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQWxlcnQgPSBVbmNvbnRyb2xsZWRBbGVydCQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biA9IFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRDYXJvdXNlbCA9IFVuY29udHJvbGxlZENhcm91c2VsJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZENvbGxhcHNlID0gVW5jb250cm9sbGVkQ29sbGFwc2UkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkRHJvcGRvd24gPSBVbmNvbnRyb2xsZWREcm9wZG93bjtcbmV4cG9ydHMuVW5jb250cm9sbGVkUG9wb3ZlciA9IFVuY29udHJvbGxlZFBvcG92ZXI7XG5leHBvcnRzLlVuY29udHJvbGxlZFRvb2x0aXAgPSBVbmNvbnRyb2xsZWRUb29sdGlwO1xuZXhwb3J0cy5VdGlsID0gdXRpbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdHN0cmFwLmNqcy5tYXBcbiIsIi8vaW1wb3J0cyBhcGlcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuLy9pbXBvcnRzIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5cclxuLy9pbXBvcnRzIGJpYmxpb3RlY2FzXHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tICdwcmltZXJlYWN0L3Bhc3N3b3JkJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc1NwaW5uZXIgfSBmcm9tICdwcmltZXJlYWN0L3Byb2dyZXNzc3Bpbm5lcic7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuXHJcbi8vaW1wb3J0cyBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBMb2dpbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZSc7XHJcblxyXG4vL2FjdGlvbnNcclxuaW1wb3J0IHsgc2hvd0J1dHRvbkxvZ2luQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9sb2dpbl9sb2dvdXQnO1xyXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VNYW5hZ2VyIH0gZnJvbSAnQGNoYWtyYS11aS9jb2xvci1tb2RlJztcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZ0NyZWRlbnRpYWxzLCBzZXRMb2FkaW5nQ3JlZGVudGlhbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5hc1BhdGggPT09ICcvbG9naW4nICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRFbWFpbENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoJ2VtYWlsJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0UGFzc3dvcmRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFZhbHVlKCdwYXNzd29yZCcsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlLCBlcnJvcnMsIGdldFZhbHVlcyB9ID0gdXNlRm9ybSh7IG1vZGU6ICdvbkNoYW5nZScgfSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nQ3JlZGVudGlhbHModHJ1ZSk7XHJcbiAgICAgICAgaWYgKGRhdGEuZW1haWwgIT09IFwiXCIgJiYgZGF0YS5wYXNzd29yZCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBMb2dpbkRhdGFTZXJ2aWNlLmxvZ0luKGRhdGEuZW1haWwsIGRhdGEucGFzc3dvcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsICdCZWFyZXIgJyArIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2hvd0J1dHRvbkxvZ2luQWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJQcmVlbmNoYSBvcyBjYW1wb3MsIEUtbWFpbCBlIFNlbmhhXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRfbG9naW59PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0X2xvZ2luX25vX21lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9sb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FLW1haWw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9uQmx1ciwgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0RW1haWxDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbG9yOiBlcnJvcnMubm9tZSA/ICdyZWQnIDogJycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRQYXNzd29yZENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWFrTGFiZWw9XCJGcmFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bUxhYmVsPVwiTcOpZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nTGFiZWw9XCJGb3J0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdExhYmVsPVwiUG9yIGZhdm9yIGVudHJlIGNvbSBhIHNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJFbnRyYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ0NyZWRlbnRpYWxzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChMb2dpbikiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgYmFzZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODFgO1xyXG5cclxuICBleHBvcnQgY29uc3QgTG9naW5EYXRhU2VydmljZSA9IHtcclxuICAgIGxvZ0luLFxyXG4gICAgbG9nT3V0LFxyXG4gICAgaXNMb2dnZWQsXHJcbiAgICB2YWxpZGF0ZVRva2VuLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ0luKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgbGV0IGRhdGEgPSB7ZW1haWwsIHBhc3N3b3JkfVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYmFzZVVybCsnL2F1dGgvc2lnbmluJywgZGF0YSwge30pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dPdXQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNMb2dnZWQoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVUb2tlbigpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGJhc2VVcmwrJy9hdXRoL3ZhbGlkYXRlVG9rZW4nLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IiwiZXhwb3J0IGNvbnN0IFNIT1dfQlVUVE9OX0xPR0lOID0gXCJTSE9XX0JVVFRPTl9MT0dJTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU0VMRUNURURfREFUQSA9IFwiTE9BRF9TRUxFQ1RFRF9EQVRBXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FOSU1FX0xJU1QgPSBcIkxPQURfQU5JTUVfTElTVFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9FTlRJVFlfU0VMRUNURUQgPSBcIkxPQURfVVNFUl9FTlRJVFlfU0VMRUNURURcIlxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0VOVElUWV9MSVNUID0gXCJMT0FEX1VTRVJfRU5USVRZX0xJU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FDQ0VTU19QUk9GSUxFX1NFTEVDVEVEID0gXCJMT0FEX0FDQ0VTU19QUk9GSUxFX1NFTEVDVEVEXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FDQ0VTU19QUk9GSUxFX0xJU1QgPSBcIkxPQURfQUNDRVNTX1BST0ZJTEVfTElTVFwiXHJcbiIsImltcG9ydCB7IFNIT1dfQlVUVE9OX0xPR0lOIH0gZnJvbSBcIi4vLi4vLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dCdXR0b25Mb2dpbkFjdGlvbiA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBTSE9XX0JVVFRPTl9MT0dJTixcclxuICBwYXlsb2FkXHJcbn0pO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRfbG9naW5cIjogXCJsb2dpbl9sYXlvdXRfbG9naW5fXzFBcUV5XCIsXG5cdFwibGF5b3V0X2xvZ2luX25vX21lc3NhZ2VzXCI6IFwibG9naW5fbGF5b3V0X2xvZ2luX25vX21lc3NhZ2VzX18xbWJKR1wiLFxuXHRcImJveF9sb2dpblwiOiBcImxvZ2luX2JveF9sb2dpbl9fMS01VVJcIixcblx0XCJib3hfbWVzc2FnZXNcIjogXCJsb2dpbl9ib3hfbWVzc2FnZXNfXzJVYzlnXCIsXG5cdFwicGFzc3dvcmRcIjogXCJsb2dpbl9wYXNzd29yZF9fMVpNSTFcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29sb3ItbW9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvaW5wdXR0ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvcGFzc3dvcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVyZWFjdC9wcm9ncmVzc3NwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVyZWFjdC90b2FzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcG9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=