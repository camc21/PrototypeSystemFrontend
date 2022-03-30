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
        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.box_login,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          style: {
            marginTop: "15px"
          },
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
            lineNumber: 87,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          style: {
            marginTop: "15px"
          },
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
            lineNumber: 106,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          style: {
            marginTop: "20px",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0c3RyYXAvZGlzdC9yZWFjdHN0cmFwLmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvTG9naW5EYXRhU2VydmljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9sb2dpbl9sb2dvdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvY29sb3ItbW9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVyZWFjdC9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvcGFzc3dvcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZXJlYWN0L3Byb2dyZXNzc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lcmVhY3QvdG9hc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvYXN0IiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9hZGluZ0NyZWRlbnRpYWxzIiwic2V0TG9hZGluZ0NyZWRlbnRpYWxzIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUVmZmVjdCIsImFzUGF0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiaGFuZGxlSW5wdXRFbWFpbENoYW5nZSIsImUiLCJzZXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSW5wdXRQYXNzd29yZENoYW5nZSIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImdldFZhbHVlcyIsInVzZUZvcm0iLCJtb2RlIiwib25TdWJtaXQiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsIkxvZ2luRGF0YVNlcnZpY2UiLCJsb2dJbiIsInRoZW4iLCJyZXNwb25zZSIsImNvZGUiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwic2V0SXRlbSIsInRva2VuIiwic2hvd0J1dHRvbkxvZ2luQWN0aW9uIiwic3R5bGVzIiwibGF5b3V0X2xvZ2luIiwiYm94X2xvZ2luIiwibWFyZ2luVG9wIiwidW5kZWZpbmVkIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFdlaWdodCIsImJhc2VVcmwiLCJsb2dPdXQiLCJpc0xvZ2dlZCIsInZhbGlkYXRlVG9rZW4iLCJheGlvcyIsInBvc3QiLCJyZW1vdmVJdGVtIiwiZ2V0IiwicGFyYW1zIiwiU0hPV19CVVRUT05fTE9HSU4iLCJMT0FEX1NFTEVDVEVEX0RBVEEiLCJMT0FEX0FOSU1FX0xJU1QiLCJMT0FEX1VTRVJfRU5USVRZX1NFTEVDVEVEIiwiTE9BRF9VU0VSX0VOVElUWV9MSVNUIiwiTE9BRF9BQ0NFU1NfUFJPRklMRV9TRUxFQ1RFRCIsIkxPQURfQUNDRVNTX1BST0ZJTEVfTElTVCIsInBheWxvYWQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLDhCQUFZO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDhCQUFZO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGtDQUFjO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyw0QkFBVztBQUNsQywyQkFBMkIsbUJBQU8sQ0FBQyxzREFBd0I7O0FBRTNELG9DQUFvQyw0REFBNEQsZ0JBQWdCOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0NBQWtDLG1DQUFtQztBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSx1QkFBdUIseUJBQXlCO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLHVKQUF1SixtQkFBbUI7QUFDL0s7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxrRkFBa0Ysb0JBQW9CO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0QsZ0RBQWdEO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELGdEQUFnRDtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7OztBQUc1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGtGQUFrRjtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVELHlEQUF5RCxnREFBZ0Q7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDREQUE0RCxtREFBbUQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7O0FBRWhFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HOztBQUVwRztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBLDBFQUEwRSxxQ0FBcUM7QUFDL0c7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixnQkFBZ0I7QUFDNUY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7O0FBRW5GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRix3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUscURBQXFEO0FBQ2hJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0VBQStFLHlEQUF5RDtBQUN4STtBQUNBO0FBQ0EsT0FBTzs7QUFFUCw4RUFBOEUsd0RBQXdEO0FBQ3RJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHdIQUF3SDtBQUN4SDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0VBQXdFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlIQUFpSDtBQUNqSDtBQUNBO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1RUFBdUU7QUFDNUU7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0I7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCO0FBQ3RFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBQQUEwUDs7QUFFMVA7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdDROQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUVsQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDQyxzREFBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJUCxNQUFNLENBQUNRLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixNQUF3QyxJQUExRSxFQUFnRjtBQUM1RVYsWUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxXQUFTQyxzQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0JDLFlBQVEsQ0FBQyxPQUFELEVBQVVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFuQixDQUFSO0FBQ0g7O0FBRUQsV0FBU0MseUJBQVQsQ0FBbUNKLENBQW5DLEVBQXNDO0FBQ2xDQyxZQUFRLENBQUMsVUFBRCxFQUFhRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBdEIsQ0FBUjtBQUNIOztBQUVELFFBQU07QUFBRUUsV0FBRjtBQUFXQyxZQUFYO0FBQXFCQyxnQkFBckI7QUFBbUNOLFlBQW5DO0FBQTZDTyxVQUE3QztBQUFxREM7QUFBckQsTUFBbUVDLCtEQUFPLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUFoRjs7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLElBQUksSUFBSTtBQUNyQnZCLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7O0FBQ0EsUUFBSXVCLElBQUksQ0FBQ0MsS0FBTCxLQUFlLEVBQWYsSUFBcUJELElBQUksQ0FBQ0UsUUFBTCxLQUFrQixFQUEzQyxFQUErQztBQUMzQ0Msa0ZBQWdCLENBQUNDLEtBQWpCLENBQXVCSixJQUFJLENBQUNDLEtBQTVCLEVBQW1DRCxJQUFJLENBQUNFLFFBQXhDLEVBQWtERyxJQUFsRCxDQUF1REMsUUFBUSxJQUFJO0FBQy9ELFlBQUlBLFFBQVEsQ0FBQ04sSUFBVCxDQUFjTyxJQUFkLEdBQXFCLEdBQXpCLEVBQThCO0FBQzFCbkMsZUFBSyxDQUFDb0MsT0FBTixDQUFjQyxJQUFkLENBQW1CO0FBQUVDLG9CQUFRLEVBQUUsTUFBWjtBQUFvQkMsbUJBQU8sRUFBRSxPQUE3QjtBQUFzQ0Msa0JBQU0sRUFBRU4sUUFBUSxDQUFDTixJQUFULENBQWNhLE9BQTVEO0FBQXFFQyxnQkFBSSxFQUFFO0FBQTNFLFdBQW5CO0FBQ0FsQyxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBSCwrQkFBcUIsQ0FBQyxLQUFELENBQXJCO0FBQ0gsU0FKRCxNQUlPO0FBQ0hHLG9CQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FHLHNCQUFZLENBQUNnQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DLFlBQVlULFFBQVEsQ0FBQ04sSUFBVCxDQUFjZ0IsS0FBOUQ7QUFDQXZDLCtCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQVAsa0JBQVEsQ0FBQytDLDBGQUFxQixDQUFDLEtBQUQsQ0FBdEIsQ0FBUjtBQUNBM0MsZ0JBQU0sQ0FBQ1csSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLE9BWkQ7QUFhSCxLQWRELE1BY087QUFDSGIsV0FBSyxDQUFDb0MsT0FBTixDQUFjQyxJQUFkLENBQW1CO0FBQUVDLGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsZUFBTyxFQUFFLE9BQTdCO0FBQXNDQyxjQUFNLEVBQUUsb0NBQTlDO0FBQW9GRSxZQUFJLEVBQUU7QUFBMUYsT0FBbkI7QUFDQXJDLDJCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDSDtBQUNKLEdBcEJEOztBQXNCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXlDLCtEQUFNLENBQUNDLFlBQXZCO0FBQUEsMkJBQ0k7QUFBTSxjQUFRLEVBQUV6QixZQUFZLENBQUNLLFFBQUQsQ0FBNUI7QUFBQSw4QkFDSSxxRUFBQyx1REFBRDtBQUFPLFdBQUcsRUFBRTNCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFOEMsK0RBQU0sQ0FBQ0UsU0FBdkI7QUFBQSxnQ0FDSTtBQUFJLGVBQUssRUFBRTtBQUFDQyxxQkFBUyxFQUFFO0FBQVosV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLDBEQUFEO0FBQ0ksaUJBQU8sRUFBRTdCLE9BRGI7QUFFSSxjQUFJLEVBQUMsT0FGVDtBQUdJLHNCQUFZLEVBQUU4QixTQUhsQjtBQUlJLGVBQUssRUFBRTtBQUNIQyxvQkFBUSxFQUFFLElBRFA7QUFDYUMscUJBQVMsRUFBRTtBQUR4QixXQUpYO0FBT0ksZ0JBQU0sRUFBRSxDQUFDO0FBQUVDLGtCQUFGO0FBQVVDLG9CQUFWO0FBQW9CcEM7QUFBcEIsV0FBRCxrQkFDSixxRUFBQyw4REFBRDtBQUNJLGNBQUUsRUFBQyxPQURQO0FBRUksZ0JBQUksRUFBQyxPQUZUO0FBR0ksb0JBQVEsRUFBR0gsQ0FBRCxJQUFPRCxzQkFBc0IsQ0FBQ0MsQ0FBRCxDQUgzQztBQUlJLGlCQUFLLEVBQUVHLEtBSlg7QUFLSSx1QkFBVyxFQUFDO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBb0JJO0FBQUksZUFBSyxFQUFFO0FBQUMrQixxQkFBUyxFQUFFO0FBQVosV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkosZUFxQkkscUVBQUMsMERBQUQ7QUFDSSxpQkFBTyxFQUFFN0IsT0FEYjtBQUVJLGNBQUksRUFBQyxVQUZUO0FBR0ksc0JBQVksRUFBRThCLFNBSGxCO0FBSUksZUFBSyxFQUFFO0FBQ0hDLG9CQUFRLEVBQUUsSUFEUDtBQUNhQyxxQkFBUyxFQUFFO0FBRHhCLFdBSlg7QUFPSSxnQkFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUY7QUFBVUMsb0JBQVY7QUFBb0JwQztBQUFwQixXQUFELGtCQUNKLHFFQUFDLDREQUFELENBQ0k7QUFESjtBQUVJLGNBQUUsRUFBQyxVQUZQO0FBR0ksZ0JBQUksRUFBQyxVQUhUO0FBSUksb0JBQVEsRUFBR0gsQ0FBRCxJQUFPSSx5QkFBeUIsQ0FBQ0osQ0FBRCxDQUo5QztBQUtJLGlCQUFLLEVBQUVHLEtBTFg7QUFNSSx1QkFBVyxFQUFDLE9BTmhCO0FBT0ksc0JBQVUsTUFQZDtBQVFJLHFCQUFTLEVBQUMsT0FSZDtBQVNJLHVCQUFXLEVBQUMsVUFUaEI7QUFVSSx1QkFBVyxFQUFDLE9BVmhCO0FBV0ksdUJBQVcsRUFBQyw2QkFYaEI7QUFZSSx3QkFBWSxFQUFDO0FBWmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSixlQTZDSSxxRUFBQyx3REFBRDtBQUFRLGVBQUssRUFBRTtBQUFDK0IscUJBQVMsRUFBRSxNQUFaO0FBQW9CTSwyQkFBZSxFQUFFLE1BQXJDO0FBQTZDQyxpQkFBSyxFQUFFLE1BQXBEO0FBQTREQyxzQkFBVSxFQUFFO0FBQXhFLFdBQWY7QUFBZ0csY0FBSSxFQUFDLFFBQXJHO0FBQThHLGVBQUssRUFBQztBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdDSixFQThDS3JELGtCQUFrQixpQkFDZixxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9DUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5REg7O0FBRWVSLG9FQUFoQixFOzs7Ozs7Ozs7Ozs7QUNuSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU04RCxPQUFPLEdBQUksdUJBQWpCO0FBRVMsTUFBTTNCLGdCQUFnQixHQUFHO0FBQzlCQyxPQUQ4QjtBQUU5QjJCLFFBRjhCO0FBRzlCQyxVQUg4QjtBQUk5QkM7QUFKOEIsQ0FBekI7O0FBT1AsU0FBUzdCLEtBQVQsQ0FBZUgsS0FBZixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDOUIsTUFBSUYsSUFBSSxHQUFHO0FBQUNDLFNBQUQ7QUFBUUM7QUFBUixHQUFYO0FBQ0EsU0FBT2dDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0wsT0FBTyxHQUFDLGNBQW5CLEVBQW1DOUIsSUFBbkMsRUFBeUMsRUFBekMsQ0FBUDtBQUNEOztBQUVELFNBQVMrQixNQUFULEdBQWtCO0FBQ2hCLFFBQU16RCxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FRLGNBQVksQ0FBQ3FELFVBQWIsQ0FBd0IsYUFBeEI7QUFDQTlELFFBQU0sQ0FBQ1csSUFBUCxDQUFZLEdBQVo7QUFDRDs7QUFFRCxTQUFTK0MsUUFBVCxHQUFvQjtBQUNsQixRQUFNaEIsS0FBSyxHQUFHakMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWQ7QUFDQSxTQUFPZ0MsS0FBUDtBQUNEOztBQUVELFNBQVNpQixhQUFULEdBQXlCO0FBQ3ZCLFFBQU1qQixLQUFLLEdBQUdqQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBZDtBQUNBLFNBQU9rRCw0Q0FBSyxDQUFDRyxHQUFOLENBQVVQLE9BQU8sR0FBQyxxQkFBbEIsRUFBeUM7QUFDOUNRLFVBQU0sRUFBRTtBQUNOdEIsV0FBSyxFQUFFQTtBQUREO0FBRHNDLEdBQXpDLENBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUNuQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU11QixpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTTVCLHFCQUFxQixHQUFHNkIsT0FBTyxLQUFLO0FBQy9DQyxNQUFJLEVBQUVSLDBEQUR5QztBQUUvQ087QUFGK0MsQ0FBTCxDQUFyQyxDOzs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4vaW5kZXguanN4XCIpO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbnZhciByZWFjdFBvcHBlciA9IHJlcXVpcmUoJ3JlYWN0LXBvcHBlcicpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgcmVhY3RUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgUmVhY3RfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFJlYWN0KTtcbnZhciBQcm9wVHlwZXNfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFByb3BUeXBlcyk7XG52YXIgY2xhc3NOYW1lc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koY2xhc3NOYW1lcyk7XG52YXIgUmVhY3RET01fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFJlYWN0RE9NKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcblxuICBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIC5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSBzdHlsZXMgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvdjQuMC4wLWFscGhhLjQvc2Nzcy9fbW9kYWwuc2NzcyNMMTA2LUwxMTNcblxuICBzY3JvbGxEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzY3JvbGxEaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59XG5mdW5jdGlvbiBzZXRTY3JvbGxiYXJXaWR0aChwYWRkaW5nKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA+IDAgPyBwYWRkaW5nICsgXCJweFwiIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGlzQm9keU92ZXJmbG93aW5nKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xufVxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxCb2R5UGFkZGluZygpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgbnVsbCk7XG4gIHJldHVybiBwYXJzZUludChzdHlsZSAmJiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykgfHwgMCwgMTApO1xufVxuZnVuY3Rpb24gY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcigpIHtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvdjQuMC4wLWFscGhhLjYvanMvc3JjL21vZGFsLmpzI0w0MzNcblxuICB2YXIgZml4ZWRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcpWzBdO1xuICB2YXIgYm9keVBhZGRpbmcgPSBmaXhlZENvbnRlbnQgPyBwYXJzZUludChmaXhlZENvbnRlbnQuc3R5bGUucGFkZGluZ1JpZ2h0IHx8IDAsIDEwKSA6IDA7XG5cbiAgaWYgKGlzQm9keU92ZXJmbG93aW5nKCkpIHtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aChib2R5UGFkZGluZyArIHNjcm9sbGJhcldpZHRoKTtcbiAgfVxufVxudmFyIGdsb2JhbENzc01vZHVsZTtcbmZ1bmN0aW9uIHNldEdsb2JhbENzc01vZHVsZShjc3NNb2R1bGUpIHtcbiAgZ2xvYmFsQ3NzTW9kdWxlID0gY3NzTW9kdWxlO1xufVxuZnVuY3Rpb24gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZSwgY3NzTW9kdWxlKSB7XG4gIGlmIChjbGFzc05hbWUgPT09IHZvaWQgMCkge1xuICAgIGNsYXNzTmFtZSA9ICcnO1xuICB9XG5cbiAgaWYgKGNzc01vZHVsZSA9PT0gdm9pZCAwKSB7XG4gICAgY3NzTW9kdWxlID0gZ2xvYmFsQ3NzTW9kdWxlO1xuICB9XG5cbiAgaWYgKCFjc3NNb2R1bGUpIHJldHVybiBjbGFzc05hbWU7XG4gIHJldHVybiBjbGFzc05hbWUuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gY3NzTW9kdWxlW2NdIHx8IGM7XG4gIH0pLmpvaW4oJyAnKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gYG9iamAgdGhhdCBhcmUgbm90IGluIHRoZSBhcnJheSBgb21pdEtleXNgLlxuICovXG5cbmZ1bmN0aW9uIG9taXQob2JqLCBvbWl0S2V5cykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKG9taXRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogUmV0dXJucyBhIGZpbHRlcmVkIGNvcHkgb2YgYW4gb2JqZWN0IHdpdGggb25seSB0aGUgc3BlY2lmaWVkIGtleXMuXG4gKi9cblxuZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgdmFyIHBpY2tLZXlzID0gQXJyYXkuaXNBcnJheShrZXlzKSA/IGtleXMgOiBba2V5c107XG4gIHZhciBsZW5ndGggPSBwaWNrS2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgIGxlbmd0aCAtPSAxO1xuICAgIGtleSA9IHBpY2tLZXlzW2xlbmd0aF07XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgd2FybmVkID0ge307XG5mdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmICghd2FybmVkW21lc3NhZ2VdKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBkZXByZWNhdGVkKHByb3BUeXBlLCBleHBsYW5hdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2Fybk9uY2UoXCJcXFwiXCIgKyBwcm9wTmFtZSArIFwiXFxcIiBwcm9wZXJ0eSBvZiBcXFwiXCIgKyBjb21wb25lbnROYW1lICsgXCJcXFwiIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXFxuXCIgKyBleHBsYW5hdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BUeXBlLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKSkpO1xuICB9O1xufSAvLyBTaGltIEVsZW1lbnQgaWYgbmVlZGVkIChlLmcuIGluIE5vZGUgZW52aXJvbm1lbnQpXG5cbnZhciBFbGVtZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LkVsZW1lbnQgfHwgZnVuY3Rpb24gKCkge307XG5cbmZ1bmN0aW9uIERPTUVsZW1lbnQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gRXhwZWN0ZWQgcHJvcCB0byBiZSBhbiBpbnN0YW5jZSBvZiBFbGVtZW50LiBWYWxpZGF0aW9uIGZhaWxlZC4nKTtcbiAgfVxufVxudmFyIHRhcmdldFByb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIERPTUVsZW1lbnQsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBjdXJyZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufSldKTtcbnZhciB0YWdQcm9wVHlwZSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgJCR0eXBlb2Y6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3ltYm9sLFxuICByZW5kZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY1xufSksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICQkdHlwZW9mOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN5bWJvbCxcbiAgcmVuZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn0pXSkpXSk7XG4vKiBlc2xpbnQga2V5LXNwYWNpbmc6IFtcImVycm9yXCIsIHsgYWZ0ZXJDb2xvbjogdHJ1ZSwgYWxpZ246IFwidmFsdWVcIiB9XSAqL1xuLy8gVGhlc2UgYXJlIGFsbCBzZXR1cCB0byBtYXRjaCB3aGF0IGlzIGluIHRoZSBib290c3RyYXAgX3ZhcmlhYmxlcy5zY3NzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi92NC1kZXYvc2Nzcy9fdmFyaWFibGVzLnNjc3NcblxudmFyIFRyYW5zaXRpb25UaW1lb3V0cyA9IHtcbiAgRmFkZTogMTUwLFxuICAvLyAkdHJhbnNpdGlvbi1mYWRlXG4gIENvbGxhcHNlOiAzNTAsXG4gIC8vICR0cmFuc2l0aW9uLWNvbGxhcHNlXG4gIE1vZGFsOiAzMDAsXG4gIC8vICRtb2RhbC10cmFuc2l0aW9uXG4gIENhcm91c2VsOiA2MDAsXG4gIC8vICRjYXJvdXNlbC10cmFuc2l0aW9uXG4gIE9mZmNhbnZhczogMzAwIC8vICRvZmZjYW52YXMtdHJhbnNpdGlvblxuXG59OyAvLyBEdXBsaWNhdGVkIFRyYW5zaXRpb24ucHJvcFR5cGUga2V5cyB0byBlbnN1cmUgdGhhdCBSZWFjdHN0cmFwIGJ1aWxkc1xuLy8gZm9yIGRpc3RyaWJ1dGlvbiBwcm9wZXJseSBleGNsdWRlIHRoZXNlIGtleXMgZm9yIG5lc3RlZCBjaGlsZCBIVE1MIGF0dHJpYnV0ZXNcbi8vIHNpbmNlIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwYCByZW1vdmVzIHByb3BUeXBlcyBpbiBwcm9kdWN0aW9uIGJ1aWxkcy5cblxudmFyIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMgPSBbJ2luJywgJ21vdW50T25FbnRlcicsICd1bm1vdW50T25FeGl0JywgJ2FwcGVhcicsICdlbnRlcicsICdleGl0JywgJ3RpbWVvdXQnLCAnb25FbnRlcicsICdvbkVudGVyaW5nJywgJ29uRW50ZXJlZCcsICdvbkV4aXQnLCAnb25FeGl0aW5nJywgJ29uRXhpdGVkJ107XG52YXIgVHJhbnNpdGlvblN0YXR1c2VzID0ge1xuICBFTlRFUklORzogJ2VudGVyaW5nJyxcbiAgRU5URVJFRDogJ2VudGVyZWQnLFxuICBFWElUSU5HOiAnZXhpdGluZycsXG4gIEVYSVRFRDogJ2V4aXRlZCdcbn07XG52YXIga2V5Q29kZXMgPSB7XG4gIGVzYzogMjcsXG4gIHNwYWNlOiAzMixcbiAgZW50ZXI6IDEzLFxuICB0YWI6IDksXG4gIHVwOiAzOCxcbiAgZG93bjogNDAsXG4gIGhvbWU6IDM2LFxuICBlbmQ6IDM1LFxuICBuOiA3OCxcbiAgcDogODBcbn07XG52YXIgUG9wcGVyUGxhY2VtZW50cyA9IFsnYXV0by1zdGFydCcsICdhdXRvJywgJ2F1dG8tZW5kJywgJ3RvcC1zdGFydCcsICd0b3AnLCAndG9wLWVuZCcsICdyaWdodC1zdGFydCcsICdyaWdodCcsICdyaWdodC1lbmQnLCAnYm90dG9tLWVuZCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2xlZnQtZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCddO1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBpc1JlYWN0UmVmT2JqKHRhcmdldCkge1xuICBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICdjdXJyZW50JyBpbiB0YXJnZXQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJ1tvYmplY3QgVW5kZWZpbmVkXScgOiAnW29iamVjdCBOdWxsXSc7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHZhciBOQU4gPSAwIC8gMDtcblxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgZ2V0VGFnKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyBcIlwiICsgb3RoZXIgOiBvdGhlcjtcbiAgfVxuXG4gIGlmICh0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IC9eMGJbMDFdKyQvaS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIGlzQmluYXJ5IHx8IC9eMG9bMC03XSskL2kudGVzdCh2YWx1ZSkgPyBwYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiAvXlstK10weFswLTlhLWZdKyQvaS50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgdGFnID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScgfHwgdGFnID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nIHx8IHRhZyA9PT0gJ1tvYmplY3QgUHJveHldJztcbn1cbmZ1bmN0aW9uIGZpbmRET01FbGVtZW50cyh0YXJnZXQpIHtcbiAgaWYgKGlzUmVhY3RSZWZPYmoodGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQuY3VycmVudDtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0KCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgY2FuVXNlRE9NKSB7XG4gICAgdmFyIHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KTtcblxuICAgIGlmICghc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNcIiArIHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdGFyZ2V0ICdcIiArIHRhcmdldCArIFwiJyBjb3VsZCBub3QgYmUgaWRlbnRpZmllZCBpbiB0aGUgZG9tLCB0aXA6IGNoZWNrIHNwZWxsaW5nXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gaXNBcnJheU9yTm9kZUxpc3QoZWxzKSB7XG4gIGlmIChlbHMgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShlbHMpIHx8IGNhblVzZURPTSAmJiB0eXBlb2YgZWxzLmxlbmd0aCA9PT0gJ251bWJlcic7XG59XG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0LCBhbGxFbGVtZW50cykge1xuICB2YXIgZWxzID0gZmluZERPTUVsZW1lbnRzKHRhcmdldCk7XG5cbiAgaWYgKGFsbEVsZW1lbnRzKSB7XG4gICAgaWYgKGlzQXJyYXlPck5vZGVMaXN0KGVscykpIHtcbiAgICAgIHJldHVybiBlbHM7XG4gICAgfVxuXG4gICAgaWYgKGVscyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBbZWxzXTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNBcnJheU9yTm9kZUxpc3QoZWxzKSkge1xuICAgICAgcmV0dXJuIGVsc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxzO1xuICB9XG59XG52YXIgZGVmYXVsdFRvZ2dsZUV2ZW50cyA9IFsndG91Y2hzdGFydCcsICdjbGljayddO1xuZnVuY3Rpb24gYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyhfZWxzLCBoYW5kbGVyLCBfZXZlbnRzLCB1c2VDYXB0dXJlKSB7XG4gIHZhciBlbHMgPSBfZWxzO1xuXG4gIGlmICghaXNBcnJheU9yTm9kZUxpc3QoZWxzKSkge1xuICAgIGVscyA9IFtlbHNdO1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IF9ldmVudHM7XG5cbiAgaWYgKHR5cGVvZiBldmVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KC9cXHMrLyk7XG4gIH1cblxuICBpZiAoIWlzQXJyYXlPck5vZGVMaXN0KGVscykgfHwgdHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicgfHwgIUFycmF5LmlzQXJyYXkoZXZlbnRzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIFRoZSBmaXJzdCBhcmd1bWVudCBvZiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgRE9NIG5vZGUgb3IgYW4gYXJyYXkgb24gRE9NIG5vZGVzIG9yIE5vZGVMaXN0LlxcbiAgICAgIFRoZSBzZWNvbmQgbXVzdCBiZSBhIGZ1bmN0aW9uLlxcbiAgICAgIFRoZSB0aGlyZCBpcyBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgcmVwcmVzZW50cyBET00gZXZlbnRzXFxuICAgIFwiKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmVFdmVudHMoKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChldmVudHMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbHMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxudmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ29iamVjdCcsICdlbWJlZCcsICdbdGFiaW5kZXhdOm5vdCgubW9kYWwpJywgJ2F1ZGlvW2NvbnRyb2xzXScsICd2aWRlb1tjb250cm9sc10nLCAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknXTtcblxudmFyIHV0aWxzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFNjcm9sbGJhcldpZHRoOiBnZXRTY3JvbGxiYXJXaWR0aCxcbiAgc2V0U2Nyb2xsYmFyV2lkdGg6IHNldFNjcm9sbGJhcldpZHRoLFxuICBpc0JvZHlPdmVyZmxvd2luZzogaXNCb2R5T3ZlcmZsb3dpbmcsXG4gIGdldE9yaWdpbmFsQm9keVBhZGRpbmc6IGdldE9yaWdpbmFsQm9keVBhZGRpbmcsXG4gIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXI6IGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIsXG4gIHNldEdsb2JhbENzc01vZHVsZTogc2V0R2xvYmFsQ3NzTW9kdWxlLFxuICBtYXBUb0Nzc01vZHVsZXM6IG1hcFRvQ3NzTW9kdWxlcyxcbiAgb21pdDogb21pdCxcbiAgcGljazogcGljayxcbiAgd2Fybk9uY2U6IHdhcm5PbmNlLFxuICBkZXByZWNhdGVkOiBkZXByZWNhdGVkLFxuICBET01FbGVtZW50OiBET01FbGVtZW50LFxuICB0YXJnZXRQcm9wVHlwZTogdGFyZ2V0UHJvcFR5cGUsXG4gIHRhZ1Byb3BUeXBlOiB0YWdQcm9wVHlwZSxcbiAgVHJhbnNpdGlvblRpbWVvdXRzOiBUcmFuc2l0aW9uVGltZW91dHMsXG4gIFRyYW5zaXRpb25Qcm9wVHlwZUtleXM6IFRyYW5zaXRpb25Qcm9wVHlwZUtleXMsXG4gIFRyYW5zaXRpb25TdGF0dXNlczogVHJhbnNpdGlvblN0YXR1c2VzLFxuICBrZXlDb2Rlczoga2V5Q29kZXMsXG4gIFBvcHBlclBsYWNlbWVudHM6IFBvcHBlclBsYWNlbWVudHMsXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuICBpc1JlYWN0UmVmT2JqOiBpc1JlYWN0UmVmT2JqLFxuICB0b051bWJlcjogdG9OdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgZmluZERPTUVsZW1lbnRzOiBmaW5kRE9NRWxlbWVudHMsXG4gIGlzQXJyYXlPck5vZGVMaXN0OiBpc0FycmF5T3JOb2RlTGlzdCxcbiAgZ2V0VGFyZ2V0OiBnZXRUYXJnZXQsXG4gIGRlZmF1bHRUb2dnbGVFdmVudHM6IGRlZmF1bHRUb2dnbGVFdmVudHMsXG4gIGFkZE11bHRpcGxlRXZlbnRMaXN0ZW5lcnM6IGFkZE11bHRpcGxlRXZlbnRMaXN0ZW5lcnMsXG4gIGZvY3VzYWJsZUVsZW1lbnRzOiBmb2N1c2FibGVFbGVtZW50c1xufTtcblxudmFyIF9leGNsdWRlZCQxZSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImZsdWlkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxayA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgZmx1aWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFpID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ29udGFpbmVyID0gZnVuY3Rpb24gQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBmbHVpZCA9IHByb3BzLmZsdWlkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWUpO1xuXG4gIHZhciBjb250YWluZXJDbGFzcyA9ICdjb250YWluZXInO1xuXG4gIGlmIChmbHVpZCA9PT0gdHJ1ZSkge1xuICAgIGNvbnRhaW5lckNsYXNzID0gJ2NvbnRhaW5lci1mbHVpZCc7XG4gIH0gZWxzZSBpZiAoZmx1aWQpIHtcbiAgICBjb250YWluZXJDbGFzcyA9IFwiY29udGFpbmVyLVwiICsgZmx1aWQ7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNvbnRhaW5lckNsYXNzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWs7XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFpO1xudmFyIENvbnRhaW5lciQxID0gQ29udGFpbmVyO1xuXG52YXIgX2V4Y2x1ZGVkJDFkID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibm9HdXR0ZXJzXCIsIFwidGFnXCIsIFwiZm9ybVwiLCBcIndpZHRoc1wiXTtcbnZhciByb3dDb2xXaWR0aHMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHJvd0NvbHNQcm9wVHlwZSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKTtcbnZhciBwcm9wVHlwZXMkMWogPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIG5vR3V0dGVyczogZGVwcmVjYXRlZChQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFwiUGxlYXNlIHVzZSBCb290c3RyYXAgNSBndXR0ZXIgdXRpbGl0eSBjbGFzc2VzLiBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjAvbGF5b3V0L2d1dHRlcnMvXCIpLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBmb3JtOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHhzOiByb3dDb2xzUHJvcFR5cGUsXG4gIHNtOiByb3dDb2xzUHJvcFR5cGUsXG4gIG1kOiByb3dDb2xzUHJvcFR5cGUsXG4gIGxnOiByb3dDb2xzUHJvcFR5cGUsXG4gIHhsOiByb3dDb2xzUHJvcFR5cGUsXG4gIHh4bDogcm93Q29sc1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxaCA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgd2lkdGhzOiByb3dDb2xXaWR0aHNcbn07XG5cbnZhciBSb3cgPSBmdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIG5vR3V0dGVycyA9IHByb3BzLm5vR3V0dGVycyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGZvcm0gPSBwcm9wcy5mb3JtLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWQpO1xuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2xTaXplID0gcHJvcHNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG4gICAgY29sQ2xhc3Nlcy5wdXNoKGlzWHMgPyBcInJvdy1jb2xzLVwiICsgY29sU2l6ZSA6IFwicm93LWNvbHMtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZSk7XG4gIH0pO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIG5vR3V0dGVycyA/ICdneC0wJyA6IG51bGwsIGZvcm0gPyAnZm9ybS1yb3cnIDogJ3JvdycsIGNvbENsYXNzZXMpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxajtcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWg7XG52YXIgUm93JDEgPSBSb3c7XG5cbnZhciBfZXhjbHVkZWQkMWMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ3aWR0aHNcIiwgXCJ0YWdcIl07XG52YXIgY29sV2lkdGhzJDEgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHN0cmluZ09yTnVtYmVyUHJvcCQxID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIGNvbHVtblByb3BzJDEgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgb3JkZXI6IHN0cmluZ09yTnVtYmVyUHJvcCQxLFxuICBvZmZzZXQ6IHN0cmluZ09yTnVtYmVyUHJvcCQxXG59KV0pO1xudmFyIHByb3BUeXBlcyQxaSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgeHM6IGNvbHVtblByb3BzJDEsXG4gIHNtOiBjb2x1bW5Qcm9wcyQxLFxuICBtZDogY29sdW1uUHJvcHMkMSxcbiAgbGc6IGNvbHVtblByb3BzJDEsXG4gIHhsOiBjb2x1bW5Qcm9wcyQxLFxuICB4eGw6IGNvbHVtblByb3BzJDEsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHdpZHRoczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWcgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHdpZHRoczogY29sV2lkdGhzJDFcbn07XG5cbnZhciBnZXRDb2x1bW5TaXplQ2xhc3MkMSA9IGZ1bmN0aW9uIGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sU2l6ZSkge1xuICBpZiAoY29sU2l6ZSA9PT0gdHJ1ZSB8fCBjb2xTaXplID09PSAnJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbCcgOiBcImNvbC1cIiArIGNvbFdpZHRoO1xuICB9IGVsc2UgaWYgKGNvbFNpemUgPT09ICdhdXRvJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbC1hdXRvJyA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1hdXRvXCI7XG4gIH1cblxuICByZXR1cm4gaXNYcyA/IFwiY29sLVwiICsgY29sU2l6ZSA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1cIiArIGNvbFNpemU7XG59O1xuXG52YXIgZ2V0Q29sdW1uQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpIHtcbiAgaWYgKHdpZHRocyA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGhzID0gY29sV2lkdGhzJDE7XG4gIH1cblxuICB2YXIgY29sQ2xhc3NlcyA9IFtdO1xuICB3aWR0aHMuZm9yRWFjaChmdW5jdGlvbiAoY29sV2lkdGgsIGkpIHtcbiAgICB2YXIgY29sdW1uUHJvcCA9IGF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sdW1uUHJvcCAmJiBjb2x1bW5Qcm9wICE9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG5cbiAgICBpZiAoaXNPYmplY3QoY29sdW1uUHJvcCkpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGNvbFNpemVJbnRlcmZpeCA9IGlzWHMgPyAnLScgOiBcIi1cIiArIGNvbFdpZHRoICsgXCItXCI7XG4gICAgICB2YXIgY29sQ2xhc3MgPSBnZXRDb2x1bW5TaXplQ2xhc3MkMShpc1hzLCBjb2xXaWR0aCwgY29sdW1uUHJvcC5zaXplKTtcbiAgICAgIGNvbENsYXNzZXMucHVzaChtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW2NvbENsYXNzXSA9IGNvbHVtblByb3Auc2l6ZSB8fCBjb2x1bW5Qcm9wLnNpemUgPT09ICcnLCBfY2xhc3NOYW1lc1tcIm9yZGVyXCIgKyBjb2xTaXplSW50ZXJmaXggKyBjb2x1bW5Qcm9wLm9yZGVyXSA9IGNvbHVtblByb3Aub3JkZXIgfHwgY29sdW1uUHJvcC5vcmRlciA9PT0gMCwgX2NsYXNzTmFtZXNbXCJvZmZzZXRcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub2Zmc2V0XSA9IGNvbHVtblByb3Aub2Zmc2V0IHx8IGNvbHVtblByb3Aub2Zmc2V0ID09PSAwLCBfY2xhc3NOYW1lcykpLCBjc3NNb2R1bGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9jb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyQxKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wKTtcblxuICAgICAgY29sQ2xhc3Nlcy5wdXNoKF9jb2xDbGFzcyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjb2xDbGFzc2VzOiBjb2xDbGFzc2VzLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn07XG5cbnZhciBDb2wgPSBmdW5jdGlvbiBDb2wocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFjKTtcblxuICB2YXIgX2dldENvbHVtbkNsYXNzZXMgPSBnZXRDb2x1bW5DbGFzc2VzKGF0dHJpYnV0ZXMsIGNzc01vZHVsZSwgd2lkdGhzKSxcbiAgICAgIG1vZGlmaWVkQXR0cmlidXRlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmF0dHJpYnV0ZXMsXG4gICAgICBjb2xDbGFzc2VzID0gX2dldENvbHVtbkNsYXNzZXMuY29sQ2xhc3NlcztcblxuICBpZiAoIWNvbENsYXNzZXMubGVuZ3RoKSB7XG4gICAgY29sQ2xhc3Nlcy5wdXNoKCdjb2wnKTtcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY29sQ2xhc3NlcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgbW9kaWZpZWRBdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWk7XG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFnO1xudmFyIENvbCQxID0gQ29sO1xuXG52YXIgX2V4Y2x1ZGVkJDFiID0gW1wiZXhwYW5kXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibGlnaHRcIiwgXCJkYXJrXCIsIFwiZml4ZWRcIiwgXCJzdGlja3lcIiwgXCJjb2xvclwiLCBcImNvbnRhaW5lclwiLCBcInRhZ1wiLCBcImNoaWxkcmVuXCJdO1xudmFyIHByb3BUeXBlcyQxaCA9IHtcbiAgbGlnaHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmdWxsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZpeGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc3RpY2t5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY29udGFpbmVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBleHBhbmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFmID0ge1xuICB0YWc6ICduYXYnLFxuICBleHBhbmQ6IGZhbHNlLFxuICBjb250YWluZXI6ICdmbHVpZCdcbn07XG5cbnZhciBnZXRFeHBhbmRDbGFzcyA9IGZ1bmN0aW9uIGdldEV4cGFuZENsYXNzKGV4cGFuZCkge1xuICBpZiAoZXhwYW5kID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChleHBhbmQgPT09IHRydWUgfHwgZXhwYW5kID09PSAneHMnKSB7XG4gICAgcmV0dXJuICduYXZiYXItZXhwYW5kJztcbiAgfVxuXG4gIHJldHVybiBcIm5hdmJhci1leHBhbmQtXCIgKyBleHBhbmQ7XG59O1xuXG52YXIgTmF2YmFyID0gZnVuY3Rpb24gTmF2YmFyKHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgZXhwYW5kID0gcHJvcHMuZXhwYW5kLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbGlnaHQgPSBwcm9wcy5saWdodCxcbiAgICAgIGRhcmsgPSBwcm9wcy5kYXJrLFxuICAgICAgZml4ZWQgPSBwcm9wcy5maXhlZCxcbiAgICAgIHN0aWNreSA9IHByb3BzLnN0aWNreSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb250YWluZXIgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhcicsIGdldEV4cGFuZENsYXNzKGV4cGFuZCksIChfY2xhc3NOYW1lcyA9IHtcbiAgICAnbmF2YmFyLWxpZ2h0JzogbGlnaHQsXG4gICAgJ25hdmJhci1kYXJrJzogZGFya1xuICB9LCBfY2xhc3NOYW1lc1tcImJnLVwiICsgY29sb3JdID0gY29sb3IsIF9jbGFzc05hbWVzW1wiZml4ZWQtXCIgKyBmaXhlZF0gPSBmaXhlZCwgX2NsYXNzTmFtZXNbXCJzdGlja3ktXCIgKyBzdGlja3ldID0gc3RpY2t5LCBfY2xhc3NOYW1lcykpLCBjc3NNb2R1bGUpO1xuICB2YXIgY29udGFpbmVyQ2xhc3MgPSBjb250YWluZXIgJiYgY29udGFpbmVyID09PSB0cnVlID8gJ2NvbnRhaW5lcicgOiBcImNvbnRhaW5lci1cIiArIGNvbnRhaW5lcjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjb250YWluZXIgPyAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY29udGFpbmVyQ2xhc3NcbiAgfSwgY2hpbGRyZW4pIDogY2hpbGRyZW4pO1xufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxaDtcbk5hdmJhci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWY7XG52YXIgTmF2YmFyJDEgPSBOYXZiYXI7XG5cbnZhciBfZXhjbHVkZWQkMWEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFnID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxZSA9IHtcbiAgdGFnOiAnYSdcbn07XG5cbnZhciBOYXZiYXJCcmFuZCA9IGZ1bmN0aW9uIE5hdmJhckJyYW5kKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyLWJyYW5kJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5OYXZiYXJCcmFuZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWc7XG5OYXZiYXJCcmFuZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWU7XG52YXIgTmF2YmFyQnJhbmQkMSA9IE5hdmJhckJyYW5kO1xuXG52YXIgX2V4Y2x1ZGVkJDE5ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiYWN0aXZlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWQgPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG52YXIgTmF2YmFyVGV4dCA9IGZ1bmN0aW9uIE5hdmJhclRleHQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTmF2YmFyVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWY7XG5OYXZiYXJUZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZDtcbnZhciBOYXZiYXJUZXh0JDEgPSBOYXZiYXJUZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJDE4ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFlID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWMgPSB7XG4gIHRhZzogJ2J1dHRvbicsXG4gIHR5cGU6ICdidXR0b24nXG59O1xuXG52YXIgTmF2YmFyVG9nZ2xlciA9IGZ1bmN0aW9uIE5hdmJhclRvZ2dsZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxOCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyLXRvZ2dsZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtbGFiZWxcIjogXCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNoaWxkcmVuIHx8IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCduYXZiYXItdG9nZ2xlci1pY29uJywgY3NzTW9kdWxlKVxuICB9KSk7XG59O1xuXG5OYXZiYXJUb2dnbGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZTtcbk5hdmJhclRvZ2dsZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFjO1xudmFyIE5hdmJhclRvZ2dsZXIkMSA9IE5hdmJhclRvZ2dsZXI7XG5cbnZhciBfZXhjbHVkZWQkMTcgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWJzXCIsIFwicGlsbHNcIiwgXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIiwgXCJqdXN0aWZpZWRcIiwgXCJmaWxsXCIsIFwibmF2YmFyXCIsIFwiY2FyZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMWQgPSB7XG4gIHRhYnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcGlsbHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdmVydGljYWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGhvcml6b250YWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBqdXN0aWZpZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZmlsbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBuYXZiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2FyZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxYiA9IHtcbiAgdGFnOiAndWwnLFxuICB2ZXJ0aWNhbDogZmFsc2Vcbn07XG5cbnZhciBnZXRWZXJ0aWNhbENsYXNzID0gZnVuY3Rpb24gZ2V0VmVydGljYWxDbGFzcyh2ZXJ0aWNhbCkge1xuICBpZiAodmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHZlcnRpY2FsID09PSB0cnVlIHx8IHZlcnRpY2FsID09PSAneHMnKSB7XG4gICAgcmV0dXJuICdmbGV4LWNvbHVtbic7XG4gIH1cblxuICByZXR1cm4gXCJmbGV4LVwiICsgdmVydGljYWwgKyBcIi1jb2x1bW5cIjtcbn07XG5cbnZhciBOYXYgPSBmdW5jdGlvbiBOYXYocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHRhYnMgPSBwcm9wcy50YWJzLFxuICAgICAgcGlsbHMgPSBwcm9wcy5waWxscyxcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWwsXG4gICAgICBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgIGp1c3RpZmllZCA9IHByb3BzLmp1c3RpZmllZCxcbiAgICAgIGZpbGwgPSBwcm9wcy5maWxsLFxuICAgICAgbmF2YmFyID0gcHJvcHMubmF2YmFyLFxuICAgICAgY2FyZCA9IHByb3BzLmNhcmQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBuYXZiYXIgPyAnbmF2YmFyLW5hdicgOiAnbmF2JywgaG9yaXpvbnRhbCA/IFwianVzdGlmeS1jb250ZW50LVwiICsgaG9yaXpvbnRhbCA6IGZhbHNlLCBnZXRWZXJ0aWNhbENsYXNzKHZlcnRpY2FsKSwge1xuICAgICduYXYtdGFicyc6IHRhYnMsXG4gICAgJ2NhcmQtaGVhZGVyLXRhYnMnOiBjYXJkICYmIHRhYnMsXG4gICAgJ25hdi1waWxscyc6IHBpbGxzLFxuICAgICdjYXJkLWhlYWRlci1waWxscyc6IGNhcmQgJiYgcGlsbHMsXG4gICAgJ25hdi1qdXN0aWZpZWQnOiBqdXN0aWZpZWQsXG4gICAgJ25hdi1maWxsJzogZmlsbFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk5hdi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWQ7XG5OYXYuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFiO1xudmFyIE5hdiQxID0gTmF2O1xuXG52YXIgX2V4Y2x1ZGVkJDE2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiYWN0aXZlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxYyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJDFhID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbnZhciBOYXZJdGVtID0gZnVuY3Rpb24gTmF2SXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdi1pdGVtJywgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5OYXZJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxYztcbk5hdkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFhO1xudmFyIE5hdkl0ZW0kMSA9IE5hdkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkMTUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkMWIgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgaHJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn07XG52YXIgZGVmYXVsdFByb3BzJDE5ID0ge1xuICB0YWc6ICdhJ1xufTtcblxudmFyIE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTmF2TGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTmF2TGluayhwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBOYXZMaW5rLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaHJlZiA9PT0gJyMnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBhY3RpdmUgPSBfdGhpcyRwcm9wcy5hY3RpdmUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkMTUpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2LWxpbmsnLCB7XG4gICAgICBkaXNhYmxlZDogYXR0cmlidXRlcy5kaXNhYmxlZCxcbiAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBOYXZMaW5rO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuTmF2TGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWI7XG5OYXZMaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxOTtcbnZhciBOYXZMaW5rJDEgPSBOYXZMaW5rO1xuXG52YXIgX2V4Y2x1ZGVkJDE0ID0gW1wiY2xhc3NOYW1lXCIsIFwibGlzdENsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidGFnXCIsIFwibGlzdFRhZ1wiLCBcImFyaWEtbGFiZWxcIl07XG52YXIgcHJvcFR5cGVzJDFhID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBsaXN0VGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGlzdENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDE4ID0ge1xuICB0YWc6ICduYXYnLFxuICBsaXN0VGFnOiAnb2wnLFxuICAnYXJpYS1sYWJlbCc6ICdicmVhZGNydW1iJ1xufTtcblxudmFyIEJyZWFkY3J1bWIgPSBmdW5jdGlvbiBCcmVhZGNydW1iKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsaXN0Q2xhc3NOYW1lID0gcHJvcHMubGlzdENsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBMaXN0VGFnID0gcHJvcHMubGlzdFRhZyxcbiAgICAgIGxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE0KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2JyZWFkY3J1bWInLCBsaXN0Q2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KExpc3RUYWcsIHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0sIGNoaWxkcmVuKSk7XG59O1xuXG5CcmVhZGNydW1iLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxYTtcbkJyZWFkY3J1bWIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE4O1xudmFyIEJyZWFkY3J1bWIkMSA9IEJyZWFkY3J1bWI7XG5cbnZhciBfZXhjbHVkZWQkMTMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDE5ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTcgPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIEJyZWFkY3J1bWJJdGVtID0gZnVuY3Rpb24gQnJlYWRjcnVtYkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDEzKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsICdicmVhZGNydW1iLWl0ZW0nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFjdGl2ZSA/ICdwYWdlJyA6IHVuZGVmaW5lZFxuICB9KSk7XG59O1xuXG5CcmVhZGNydW1iSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTk7XG5CcmVhZGNydW1iSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTc7XG52YXIgQnJlYWRjcnVtYkl0ZW0kMSA9IEJyZWFkY3J1bWJJdGVtO1xuXG52YXIgX2V4Y2x1ZGVkJDEyID0gW1wiYWN0aXZlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImJsb2NrXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xvc2VcIiwgXCJjc3NNb2R1bGVcIiwgXCJjb2xvclwiLCBcIm91dGxpbmVcIiwgXCJzaXplXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDE4ID0ge1xuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmxvY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvdXRsaW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTYgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgdGFnOiAnYnV0dG9uJ1xufTtcblxudmFyIEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCdXR0b24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCdXR0b24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgYXJpYUxhYmVsID0gX3RoaXMkcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgICAgYmxvY2sgPSBfdGhpcyRwcm9wcy5ibG9jayxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjbG9zZSA9IF90aGlzJHByb3BzLmNsb3NlLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNvbG9yID0gX3RoaXMkcHJvcHMuY29sb3IsXG4gICAgICAgIG91dGxpbmUgPSBfdGhpcyRwcm9wcy5vdXRsaW5lLFxuICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMuc2l6ZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCQxMik7XG5cbiAgICB2YXIgYnRuT3V0bGluZUNvbG9yID0gXCJidG5cIiArIChvdXRsaW5lID8gJy1vdXRsaW5lJyA6ICcnKSArIFwiLVwiICsgY29sb3I7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjbG9zZSAmJiAnYnRuLWNsb3NlJywgY2xvc2UgfHwgJ2J0bicsIGNsb3NlIHx8IGJ0bk91dGxpbmVDb2xvciwgc2l6ZSA/IFwiYnRuLVwiICsgc2l6ZSA6IGZhbHNlLCBibG9jayA/ICdkLWJsb2NrIHctMTAwJyA6IGZhbHNlLCB7XG4gICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgfSksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoYXR0cmlidXRlcy5ocmVmICYmIFRhZyA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIFRhZyA9ICdhJztcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdEFyaWFMYWJlbCA9IGNsb3NlID8gJ0Nsb3NlJyA6IG51bGw7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IFRhZyA9PT0gJ2J1dHRvbicgJiYgYXR0cmlidXRlcy5vbkNsaWNrID8gJ2J1dHRvbicgOiB1bmRlZmluZWRcbiAgICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCB8fCBkZWZhdWx0QXJpYUxhYmVsXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBCdXR0b247XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE4O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNjtcbnZhciBCdXR0b24kMSA9IEJ1dHRvbjtcblxudmFyIF9leGNsdWRlZCQxMSA9IFtcImNsYXNzTmFtZVwiXTtcbnZhciBwcm9wVHlwZXMkMTcgPSB7XG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJDE1ID0ge1xuICBkZWZhdWx0VmFsdWU6IGZhbHNlXG59O1xuXG52YXIgQnV0dG9uVG9nZ2xlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJ1dHRvblRvZ2dsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uVG9nZ2xlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0b2dnbGVkOiBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBmb2N1czogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uQmx1ciA9IF90aGlzLm9uQmx1ci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnV0dG9uVG9nZ2xlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CbHVyID0gZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9jdXM6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1czogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB0b2dnbGVkID0gX3JlZi50b2dnbGVkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlZDogIXRvZ2dsZWRcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJDExKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICAgZm9jdXM6IHRoaXMuc3RhdGUuZm9jdXNcbiAgICB9KSwgdGhpcy5wcm9wcy5jc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQnV0dG9uJDEsIF9leHRlbmRzKHtcbiAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS50b2dnbGVkLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgfTtcblxuICByZXR1cm4gQnV0dG9uVG9nZ2xlO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQnV0dG9uVG9nZ2xlLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxNztcbkJ1dHRvblRvZ2dsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTU7XG52YXIgQnV0dG9uVG9nZ2xlJDEgPSBCdXR0b25Ub2dnbGU7XG5cbi8qKlxuICogRHJvcGRvd25Db250ZXh0XG4gKiB7XG4gKiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICogIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAqICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ2Rvd24nLCAnc3RhcnQnLCAnZW5kJ10pLmlzUmVxdWlyZWQsXG4gKiAgaW5OYXZiYXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gKiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gKiB9XG4gKi9cblxudmFyIERyb3Bkb3duQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIF9leGNsdWRlZCQxMCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpcmVjdGlvblwiLCBcImlzT3BlblwiLCBcImdyb3VwXCIsIFwic2l6ZVwiLCBcIm5hdlwiLCBcInNldEFjdGl2ZUZyb21DaGlsZFwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiLCBcIm1lbnVSb2xlXCJdO1xudmFyIHByb3BUeXBlcyQxNiA9IHtcbiAgYTExeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWyd1cCcsICdkb3duJywgJ3N0YXJ0JywgJ2VuZCcsICdsZWZ0JywgJ3JpZ2h0J10pLFxuICBncm91cDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbmF2OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGluTmF2YmFyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNldEFjdGl2ZUZyb21DaGlsZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBtZW51Um9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2xpc3Rib3gnLCAnbWVudSddKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTQgPSB7XG4gIGExMXk6IHRydWUsXG4gIGlzT3BlbjogZmFsc2UsXG4gIGRpcmVjdGlvbjogJ2Rvd24nLFxuICBuYXY6IGZhbHNlLFxuICBhY3RpdmU6IGZhbHNlLFxuICBpbk5hdmJhcjogZmFsc2UsXG4gIHNldEFjdGl2ZUZyb21DaGlsZDogZmFsc2Vcbn07XG52YXIgcHJldmVudERlZmF1bHRLZXlzID0gW2tleUNvZGVzLnNwYWNlLCBrZXlDb2Rlcy5lbnRlciwga2V5Q29kZXMudXAsIGtleUNvZGVzLmRvd24sIGtleUNvZGVzLmVuZCwga2V5Q29kZXMuaG9tZV07XG5cbnZhciBEcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93biwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5hZGRFdmVudHMgPSBfdGhpcy5hZGRFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IF90aGlzLmhhbmRsZUtleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucmVtb3ZlRXZlbnRzID0gX3RoaXMucmVtb3ZlRXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVNZW51UmVmID0gX3RoaXMuaGFuZGxlTWVudVJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5jb250YWluZXJSZWYgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMubWVudVJlZiA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVNZW51UmVmID0gZnVuY3Rpb24gaGFuZGxlTWVudVJlZihtZW51UmVmKSB7XG4gICAgdGhpcy5tZW51UmVmLmN1cnJlbnQgPSBtZW51UmVmO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb250ZXh0VmFsdWUgPSBmdW5jdGlvbiBnZXRDb250ZXh0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGUsXG4gICAgICBpc09wZW46IHRoaXMucHJvcHMuaXNPcGVuLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHRoaXMucHJvcHMuZHJvcHVwID8gJ3VwJyA6IHRoaXMucHJvcHMuZGlyZWN0aW9uLFxuICAgICAgaW5OYXZiYXI6IHRoaXMucHJvcHMuaW5OYXZiYXIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIC8vIENhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBieSBEcm9wZG93bk1lbnUgdG8gcHJvdmlkZSBhIHJlZiB0b1xuICAgICAgLy8gYSBIVE1MIHRhZyB0aGF0J3MgdXNlZCBmb3IgdGhlIERyb3Bkb3duTWVudVxuICAgICAgb25NZW51UmVmOiB0aGlzLmhhbmRsZU1lbnVSZWYsXG4gICAgICBtZW51Um9sZTogdGhpcy5wcm9wcy5tZW51Um9sZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVQcm9wcygpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICE9PSBwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmhhbmRsZVByb3BzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYuY3VycmVudDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TWVudSA9IGZ1bmN0aW9uIGdldE1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVJlZi5jdXJyZW50O1xuICB9O1xuXG4gIF9wcm90by5nZXRNZW51Q3RybCA9IGZ1bmN0aW9uIGdldE1lbnVDdHJsKCkge1xuICAgIGlmICh0aGlzLl8kbWVudUN0cmwpIHJldHVybiB0aGlzLl8kbWVudUN0cmw7XG4gICAgdGhpcy5fJG1lbnVDdHJsID0gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCdbYXJpYS1leHBhbmRlZF0nKTtcbiAgICByZXR1cm4gdGhpcy5fJG1lbnVDdHJsO1xuICB9O1xuXG4gIF9wcm90by5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdvcHRpb24nO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudWl0ZW0nO1xuICB9O1xuXG4gIF9wcm90by5nZXRNZW51SXRlbXMgPSBmdW5jdGlvbiBnZXRNZW51SXRlbXMoKSB7XG4gICAgLy8gSW4gYSByZWFsIG1lbnUgd2l0aCBhIGNoaWxkIERyb3Bkb3duTWVudSwgYHRoaXMuZ2V0TWVudSgpYCBzaG91bGQgbmV2ZXJcbiAgICAvLyBiZSBudWxsLCBidXQgaXQgaXMgc29tZXRpbWVzIG51bGwgaW4gdGVzdHMuIFRvIG1pdGlnYXRlIHRoYXQsIHdlIGp1c3RcbiAgICAvLyB1c2UgYHRoaXMuZ2V0Q29udGFpbmVyKClgIGFzIHRoZSBmYWxsYmFjayBgbWVudUNvbnRhaW5lcmAuXG4gICAgdmFyIG1lbnVDb250YWluZXIgPSB0aGlzLmdldE1lbnUoKSB8fCB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKG1lbnVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIltyb2xlPVxcXCJcIiArIHRoaXMuZ2V0SXRlbVR5cGUoKSArIFwiXFxcIl1cIikpO1xuICB9O1xuXG4gIF9wcm90by5hZGRFdmVudHMgPSBmdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnLCAna2V5dXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIF90aGlzMi5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgWydjbGljaycsICd0b3VjaHN0YXJ0JywgJ2tleXVwJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBfdGhpczMuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICBpZiAoZSAmJiAoZS53aGljaCA9PT0gMyB8fCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0ga2V5Q29kZXMudGFiKSkgcmV0dXJuO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIHZhciBtZW51ID0gdGhpcy5nZXRNZW51KCk7XG4gICAgdmFyIGNsaWNrSXNJbkNvbnRhaW5lciA9IGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiYgY29udGFpbmVyICE9PSBlLnRhcmdldDtcbiAgICB2YXIgY2xpY2tJc0luSW5wdXQgPSBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1ncm91cCcpICYmIGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgJiYgZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJztcbiAgICB2YXIgY2xpY2tJc0luTWVudSA9IG1lbnUgJiYgbWVudS5jb250YWlucyhlLnRhcmdldCkgJiYgbWVudSAhPT0gZS50YXJnZXQ7XG5cbiAgICBpZiAoKGNsaWNrSXNJbkNvbnRhaW5lciAmJiAhY2xpY2tJc0luSW5wdXQgfHwgY2xpY2tJc0luTWVudSkgJiYgKGUudHlwZSAhPT0gJ2tleXVwJyB8fCBlLndoaWNoID09PSBrZXlDb2Rlcy50YWIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBpc1RhcmdldE1lbnVJdGVtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdtZW51aXRlbScgfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdvcHRpb24nO1xuICAgIHZhciBpc1RhcmdldE1lbnVDdHJsID0gdGhpcy5nZXRNZW51Q3RybCgpID09PSBlLnRhcmdldDtcbiAgICB2YXIgaXNUYWIgPSBrZXlDb2Rlcy50YWIgPT09IGUud2hpY2g7XG5cbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChlLnRhcmdldC50YWdOYW1lKSB8fCBpc1RhYiAmJiAhdGhpcy5wcm9wcy5hMTF5IHx8IGlzVGFiICYmICEoaXNUYXJnZXRNZW51SXRlbSB8fCBpc1RhcmdldE1lbnVDdHJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcmV2ZW50RGVmYXVsdEtleXMuaW5kZXhPZihlLndoaWNoKSAhPT0gLTEgfHwgZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChpc1RhcmdldE1lbnVDdHJsKSB7XG4gICAgICBpZiAoW2tleUNvZGVzLnNwYWNlLCBrZXlDb2Rlcy5lbnRlciwga2V5Q29kZXMudXAsIGtleUNvZGVzLmRvd25dLmluZGV4T2YoZS53aGljaCkgPiAtMSkge1xuICAgICAgICAvLyBPcGVuIHRoZSBtZW51IChpZiBub3Qgb3BlbikgYW5kIGZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW1cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5nZXRNZW51SXRlbXMoKVswXS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgaXNUYWIpIHtcbiAgICAgICAgLy8gRm9jdXMgdGhlIGZpcnN0IG1lbnUgaXRlbSBpZiB0YWJiaW5nIGZyb20gYW4gb3BlbiBtZW51LiBXZSBuZWVkIHRoaXNcbiAgICAgICAgLy8gZm9yIGNhc2VzIHdoZXJlIHRoZSBEcm9wZG93bk1lbnUgc2V0cyBhIGN1c3RvbSBjb250YWluZXIsIHdoaWNoIG1heVxuICAgICAgICAvLyBub3QgYmUgdGhlIG5hdHVyYWwgbmV4dCBpdGVtIHRvIHRhYiB0byBmcm9tIHRoZSBEcm9wZG93blRvZ2dsZS5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdldE1lbnVJdGVtcygpWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGUud2hpY2ggPT09IGtleUNvZGVzLmVzYykge1xuICAgICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgaXNUYXJnZXRNZW51SXRlbSkge1xuICAgICAgaWYgKFtrZXlDb2Rlcy50YWIsIGtleUNvZGVzLmVzY10uaW5kZXhPZihlLndoaWNoKSA+IC0xKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgICAgICB0aGlzLmdldE1lbnVDdHJsKCkuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoW2tleUNvZGVzLnNwYWNlLCBrZXlDb2Rlcy5lbnRlcl0uaW5kZXhPZihlLndoaWNoKSA+IC0xKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsaWNrKCk7XG4gICAgICAgIHRoaXMuZ2V0TWVudUN0cmwoKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChba2V5Q29kZXMuZG93biwga2V5Q29kZXMudXBdLmluZGV4T2YoZS53aGljaCkgPiAtMSB8fCBba2V5Q29kZXMubiwga2V5Q29kZXMucF0uaW5kZXhPZihlLndoaWNoKSA+IC0xICYmIGUuY3RybEtleSkge1xuICAgICAgICB2YXIgJG1lbnVpdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG4gICAgICAgIHZhciBpbmRleCA9ICRtZW51aXRlbXMuaW5kZXhPZihlLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGtleUNvZGVzLnVwID09PSBlLndoaWNoIHx8IGtleUNvZGVzLnAgPT09IGUud2hpY2ggJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgaW5kZXggPSBpbmRleCAhPT0gMCA/IGluZGV4IC0gMSA6ICRtZW51aXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5kb3duID09PSBlLndoaWNoIHx8IGtleUNvZGVzLm4gPT09IGUud2hpY2ggJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgaW5kZXggPSBpbmRleCA9PT0gJG1lbnVpdGVtcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgICRtZW51aXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmVuZCA9PT0gZS53aGljaCkge1xuICAgICAgICB2YXIgXyRtZW51aXRlbXMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuXG4gICAgICAgIF8kbWVudWl0ZW1zW18kbWVudWl0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmhvbWUgPT09IGUud2hpY2gpIHtcbiAgICAgICAgdmFyIF8kbWVudWl0ZW1zMiA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG5cbiAgICAgICAgXyRtZW51aXRlbXMyWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA5MCkge1xuICAgICAgICB2YXIgXyRtZW51aXRlbXMzID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcblxuICAgICAgICB2YXIgY2hhclByZXNzZWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfJG1lbnVpdGVtczMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgZmlyc3RMZXR0ZXIgPSBfJG1lbnVpdGVtczNbaV0udGV4dENvbnRlbnQgJiYgXyRtZW51aXRlbXMzW2ldLnRleHRDb250ZW50WzBdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZmlyc3RMZXR0ZXIgPT09IGNoYXJQcmVzc2VkKSB7XG4gICAgICAgICAgICBfJG1lbnVpdGVtczNbaV0uZm9jdXMoKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVQcm9wcyA9IGZ1bmN0aW9uIGhhbmRsZVByb3BzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBlICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXMsIF9yZWY7XG5cbiAgICB2YXIgX29taXQgPSBvbWl0KHRoaXMucHJvcHMsIFsndG9nZ2xlJywgJ2Rpc2FibGVkJywgJ2luTmF2YmFyJywgJ2ExMXknXSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9vbWl0LmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX29taXQuY3NzTW9kdWxlLFxuICAgICAgICBkaXJlY3Rpb24gPSBfb21pdC5kaXJlY3Rpb24sXG4gICAgICAgIGlzT3BlbiA9IF9vbWl0LmlzT3BlbixcbiAgICAgICAgZ3JvdXAgPSBfb21pdC5ncm91cCxcbiAgICAgICAgc2l6ZSA9IF9vbWl0LnNpemUsXG4gICAgICAgIG5hdiA9IF9vbWl0Lm5hdixcbiAgICAgICAgc2V0QWN0aXZlRnJvbUNoaWxkID0gX29taXQuc2V0QWN0aXZlRnJvbUNoaWxkLFxuICAgICAgICBhY3RpdmUgPSBfb21pdC5hY3RpdmUsXG4gICAgICAgIHRhZyA9IF9vbWl0LnRhZyxcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdCwgX2V4Y2x1ZGVkJDEwKTtcblxuICAgIHZhciBUYWcgPSB0YWcgfHwgKG5hdiA/ICdsaScgOiAnZGl2Jyk7XG4gICAgdmFyIHN1Ykl0ZW1Jc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNldEFjdGl2ZUZyb21DaGlsZCkge1xuICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoZHJvcGRvd25JdGVtKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW0gJiYgZHJvcGRvd25JdGVtLnByb3BzLmFjdGl2ZSkgc3ViSXRlbUlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgbmF2ICYmIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIHNldEFjdGl2ZUZyb21DaGlsZCAmJiBzdWJJdGVtSXNBY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCAoX2NsYXNzTmFtZXMgPSB7XG4gICAgICAnYnRuLWdyb3VwJzogZ3JvdXBcbiAgICB9LCBfY2xhc3NOYW1lc1tcImJ0bi1ncm91cC1cIiArIHNpemVdID0gISFzaXplLCBfY2xhc3NOYW1lcy5kcm9wZG93biA9ICFncm91cCwgX2NsYXNzTmFtZXMuZHJvcHVwID0gZGlyZWN0aW9uID09PSAndXAnLCBfY2xhc3NOYW1lcy5kcm9wc3RhcnQgPSBkaXJlY3Rpb24gPT09ICdzdGFydCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCcsIF9jbGFzc05hbWVzLmRyb3BlbmQgPSBkaXJlY3Rpb24gPT09ICdlbmQnIHx8IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JywgX2NsYXNzTmFtZXMuc2hvdyA9IGlzT3BlbiwgX2NsYXNzTmFtZXNbJ25hdi1pdGVtJ10gPSBuYXYsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChEcm9wZG93bkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLk1hbmFnZXIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRycywgKF9yZWYgPSB7fSwgX3JlZlt0eXBlb2YgVGFnID09PSAnc3RyaW5nJyA/ICdyZWYnIDogJ2lubmVyUmVmJ10gPSB0aGlzLmNvbnRhaW5lclJlZiwgX3JlZiksIHtcbiAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpKSk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE2O1xuRHJvcGRvd24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE0O1xudmFyIERyb3Bkb3duJDEgPSBEcm9wZG93bjtcblxudmFyIHByb3BUeXBlcyQxNSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZVxufTtcblxudmFyIEJ1dHRvbkRyb3Bkb3duID0gZnVuY3Rpb24gQnV0dG9uRHJvcGRvd24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChEcm9wZG93biQxLCBfZXh0ZW5kcyh7XG4gICAgZ3JvdXA6IHRydWVcbiAgfSwgcHJvcHMpKTtcbn07XG5cbkJ1dHRvbkRyb3Bkb3duLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxNTtcbnZhciBCdXR0b25Ecm9wZG93biQxID0gQnV0dG9uRHJvcGRvd247XG5cbnZhciBfZXhjbHVkZWQkJCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJ2ZXJ0aWNhbFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdmVydGljYWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTMgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHJvbGU6ICdncm91cCdcbn07XG5cbnZhciBCdXR0b25Hcm91cCA9IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWwsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQkKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHNpemUgPyAnYnRuLWdyb3VwLScgKyBzaXplIDogZmFsc2UsIHZlcnRpY2FsID8gJ2J0bi1ncm91cC12ZXJ0aWNhbCcgOiAnYnRuLWdyb3VwJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTQ7XG5CdXR0b25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTM7XG52YXIgQnV0dG9uR3JvdXAkMSA9IEJ1dHRvbkdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkJF8gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDEzID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkMTIgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHJvbGU6ICd0b29sYmFyJ1xufTtcblxudmFyIEJ1dHRvblRvb2xiYXIgPSBmdW5jdGlvbiBCdXR0b25Ub29sYmFyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRfKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdidG4tdG9vbGJhcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQnV0dG9uVG9vbGJhci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTM7XG5CdXR0b25Ub29sYmFyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMjtcbnZhciBCdXR0b25Ub29sYmFyJDEgPSBCdXR0b25Ub29sYmFyO1xuXG52YXIgX2V4Y2x1ZGVkJFogPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkaXZpZGVyXCIsIFwidGFnXCIsIFwiaGVhZGVyXCIsIFwiYWN0aXZlXCIsIFwidGV4dFwiXTtcbnZhciBwcm9wVHlwZXMkMTIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXZpZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGhlYWRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0ZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJDExID0ge1xuICB0YWc6ICdidXR0b24nLFxuICB0b2dnbGU6IHRydWVcbn07XG5cbnZhciBEcm9wZG93bkl0ZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd25JdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bkl0ZW0ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRUYWJJbmRleCA9IF90aGlzLmdldFRhYkluZGV4LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bkl0ZW0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSb2xlID0gZnVuY3Rpb24gZ2V0Um9sZSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0Lm1lbnVSb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgIHJldHVybiAnb3B0aW9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ21lbnVpdGVtJztcbiAgfTtcblxuICBfcHJvdG8ub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIGhlYWRlciA9IF90aGlzJHByb3BzLmhlYWRlcixcbiAgICAgICAgZGl2aWRlciA9IF90aGlzJHByb3BzLmRpdmlkZXIsXG4gICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcy50ZXh0O1xuXG4gICAgaWYgKGRpc2FibGVkIHx8IGhlYWRlciB8fCBkaXZpZGVyIHx8IHRleHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICB0aGlzLmNvbnRleHQudG9nZ2xlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0VGFiSW5kZXggPSBmdW5jdGlvbiBnZXRUYWJJbmRleCgpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQsXG4gICAgICAgIGhlYWRlciA9IF90aGlzJHByb3BzMi5oZWFkZXIsXG4gICAgICAgIGRpdmlkZXIgPSBfdGhpcyRwcm9wczIuZGl2aWRlcixcbiAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzMi50ZXh0O1xuXG4gICAgaWYgKGRpc2FibGVkIHx8IGhlYWRlciB8fCBkaXZpZGVyIHx8IHRleHQpIHtcbiAgICAgIHJldHVybiAnLTEnO1xuICAgIH1cblxuICAgIHJldHVybiAnMCc7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdGFiSW5kZXggPSB0aGlzLmdldFRhYkluZGV4KCk7XG4gICAgdmFyIHJvbGUgPSB0YWJJbmRleCA+IC0xID8gdGhpcy5nZXRSb2xlKCkgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgX29taXQgPSBvbWl0KHRoaXMucHJvcHMsIFsndG9nZ2xlJ10pLFxuICAgICAgICBjbGFzc05hbWUgPSBfb21pdC5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF9vbWl0LmNzc01vZHVsZSxcbiAgICAgICAgZGl2aWRlciA9IF9vbWl0LmRpdmlkZXIsXG4gICAgICAgIFRhZyA9IF9vbWl0LnRhZyxcbiAgICAgICAgaGVhZGVyID0gX29taXQuaGVhZGVyLFxuICAgICAgICBhY3RpdmUgPSBfb21pdC5hY3RpdmUsXG4gICAgICAgIHRleHQgPSBfb21pdC50ZXh0LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0LCBfZXhjbHVkZWQkWik7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHtcbiAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICdkcm9wZG93bi1pdGVtJzogIWRpdmlkZXIgJiYgIWhlYWRlciAmJiAhdGV4dCxcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgJ2Ryb3Bkb3duLWhlYWRlcic6IGhlYWRlcixcbiAgICAgICdkcm9wZG93bi1kaXZpZGVyJzogZGl2aWRlcixcbiAgICAgICdkcm9wZG93bi1pdGVtLXRleHQnOiB0ZXh0XG4gICAgfSksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoVGFnID09PSAnYnV0dG9uJykge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBUYWcgPSAnaDYnO1xuICAgICAgfSBlbHNlIGlmIChkaXZpZGVyKSB7XG4gICAgICAgIFRhZyA9ICdkaXYnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5ocmVmKSB7XG4gICAgICAgIFRhZyA9ICdhJztcbiAgICAgIH0gZWxzZSBpZiAodGV4dCkge1xuICAgICAgICBUYWcgPSAnc3Bhbic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IFRhZyA9PT0gJ2J1dHRvbicgJiYgKHByb3BzLm9uQ2xpY2sgfHwgdGhpcy5wcm9wcy50b2dnbGUpID8gJ2J1dHRvbicgOiB1bmRlZmluZWRcbiAgICB9LCBwcm9wcywge1xuICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgcm9sZTogcm9sZSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd25JdGVtO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMjtcbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTE7XG5Ecm9wZG93bkl0ZW0uY29udGV4dFR5cGUgPSBEcm9wZG93bkNvbnRleHQ7XG52YXIgRHJvcGRvd25JdGVtJDEgPSBEcm9wZG93bkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkWSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRhcmtcIiwgXCJlbmRcIiwgXCJyaWdodFwiLCBcInRhZ1wiLCBcImZsaXBcIiwgXCJtb2RpZmllcnNcIiwgXCJwZXJzaXN0XCIsIFwic3RyYXRlZ3lcIiwgXCJjb250YWluZXJcIl07XG52YXIgcHJvcFR5cGVzJDExID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLmlzUmVxdWlyZWQsXG4gIGRhcms6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZW5kOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZsaXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbW9kaWZpZXJzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBwZXJzaXN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgcmlnaHQ6IGRlcHJlY2F0ZWQoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCAnUGxlYXNlIHVzZSBcImVuZFwiIGluc3RlYWQuJylcbn07XG52YXIgZGVmYXVsdFByb3BzJDEwID0ge1xuICB0YWc6ICdkaXYnLFxuICBmbGlwOiB0cnVlLFxuICBtb2RpZmllcnM6IFtdXG59O1xudmFyIGRpcmVjdGlvblBvc2l0aW9uTWFwID0ge1xuICB1cDogJ3RvcCcsXG4gIGxlZnQ6ICdsZWZ0JyxcbiAgcmlnaHQ6ICdyaWdodCcsXG4gIHN0YXJ0OiAnbGVmdCcsXG4gIGVuZDogJ3JpZ2h0JyxcbiAgZG93bjogJ2JvdHRvbSdcbn07XG5cbnZhciBEcm9wZG93bk1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd25NZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bk1lbnUoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duTWVudS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdsaXN0Ym94JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ21lbnUnO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBkYXJrID0gX3RoaXMkcHJvcHMuZGFyayxcbiAgICAgICAgZW5kID0gX3RoaXMkcHJvcHMuZW5kLFxuICAgICAgICByaWdodCA9IF90aGlzJHByb3BzLnJpZ2h0LFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGZsaXAgPSBfdGhpcyRwcm9wcy5mbGlwLFxuICAgICAgICBtb2RpZmllcnMgPSBfdGhpcyRwcm9wcy5tb2RpZmllcnMsXG4gICAgICAgIHBlcnNpc3QgPSBfdGhpcyRwcm9wcy5wZXJzaXN0LFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBjb250YWluZXIgPSBfdGhpcyRwcm9wcy5jb250YWluZXIsXG4gICAgICAgIGF0dHJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRZKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Ryb3Bkb3duLW1lbnUnLCB7XG4gICAgICAnZHJvcGRvd24tbWVudS1kYXJrJzogZGFyayxcbiAgICAgICdkcm9wZG93bi1tZW51LWVuZCc6IGVuZCB8fCByaWdodCxcbiAgICAgIHNob3c6IHRoaXMuY29udGV4dC5pc09wZW5cbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgVGFnID0gdGFnO1xuXG4gICAgaWYgKHBlcnNpc3QgfHwgdGhpcy5jb250ZXh0LmlzT3BlbiAmJiAhdGhpcy5jb250ZXh0LmluTmF2YmFyKSB7XG4gICAgICB2YXIgcG9zaXRpb24xID0gZGlyZWN0aW9uUG9zaXRpb25NYXBbdGhpcy5jb250ZXh0LmRpcmVjdGlvbl0gfHwgJ2JvdHRvbSc7XG4gICAgICB2YXIgcG9zaXRpb24yID0gZW5kIHx8IHJpZ2h0ID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgdmFyIHBvcGVyUGxhY2VtZW50ID0gcG9zaXRpb24xICsgXCItXCIgKyBwb3NpdGlvbjI7XG4gICAgICB2YXIgcG9wZXJNb2RpZmllcnMgPSBbXS5jb25jYXQobW9kaWZpZXJzLCBbe1xuICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgIGVuYWJsZWQ6ICEhZmxpcFxuICAgICAgfV0pO1xuICAgICAgdmFyIHBvcHBlciA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFBvcHBlci5Qb3BwZXIsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwb3BlclBsYWNlbWVudCxcbiAgICAgICAgbW9kaWZpZXJzOiBwb3Blck1vZGlmaWVycyxcbiAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgcmVmID0gX3JlZi5yZWYsXG4gICAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcblxuICAgICAgICB2YXIgY29tYmluZWRTdHlsZSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfdGhpcy5wcm9wcy5zdHlsZSksIHN0eWxlKTtcblxuICAgICAgICB2YXIgaGFuZGxlUmVmID0gZnVuY3Rpb24gaGFuZGxlUmVmKHRhZ1JlZikge1xuICAgICAgICAgIC8vIFNlbmQgdGhlIHJlZiB0byBgcmVhY3QtcG9wcGVyYFxuICAgICAgICAgIHJlZih0YWdSZWYpOyAvLyBTZW5kIHRoZSByZWYgdG8gdGhlIHBhcmVudCBEcm9wZG93biBzbyB0aGF0IGNsaWNrcyBvdXRzaWRlXG4gICAgICAgICAgLy8gaXQgd2lsbCBjYXVzZSBpdCB0byBjbG9zZVxuXG4gICAgICAgICAgdmFyIG9uTWVudVJlZiA9IF90aGlzLmNvbnRleHQub25NZW51UmVmO1xuICAgICAgICAgIGlmIChvbk1lbnVSZWYpIG9uTWVudVJlZih0YWdSZWYpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICByb2xlOiBfdGhpcy5nZXRSb2xlKCksXG4gICAgICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICAgICAgfSwgYXR0cnMsIHtcbiAgICAgICAgICBzdHlsZTogY29tYmluZWRTdHlsZSxcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6ICFfdGhpcy5jb250ZXh0LmlzT3BlbixcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgICAgXCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIjogcGxhY2VtZW50XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKHBvcHBlciwgZ2V0VGFyZ2V0KGNvbnRhaW5lcikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvcHBlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgIHJvbGU6IHRoaXMuZ2V0Um9sZSgpXG4gICAgfSwgYXR0cnMsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogIXRoaXMuY29udGV4dC5pc09wZW4sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBhdHRycy5wbGFjZW1lbnRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duTWVudTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5Ecm9wZG93bk1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzJDExO1xuRHJvcGRvd25NZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMDtcbkRyb3Bkb3duTWVudS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93bk1lbnUkMSA9IERyb3Bkb3duTWVudTtcblxudmFyIF9leGNsdWRlZCRYID0gW1wiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjc3NNb2R1bGVcIiwgXCJjYXJldFwiLCBcInNwbGl0XCIsIFwibmF2XCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDEwID0ge1xuICBjYXJldDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgJ2FyaWEtaGFzcG9wdXAnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNwbGl0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIG5hdjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyQkID0ge1xuICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICdhcmlhLWhhc3BvcHVwJzogdHJ1ZVxufTtcblxudmFyIERyb3Bkb3duVG9nZ2xlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duVG9nZ2xlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93blRvZ2dsZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93blRvZ2dsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLmNvbnRleHQuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5uYXYgJiYgIXRoaXMucHJvcHMudGFnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dC50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQubWVudVJvbGUgfHwgdGhpcy5wcm9wc1snYXJpYS1oYXNwb3B1cCddO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbG9yID0gX3RoaXMkcHJvcHMuY29sb3IsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgY2FyZXQgPSBfdGhpcyRwcm9wcy5jYXJldCxcbiAgICAgICAgc3BsaXQgPSBfdGhpcyRwcm9wcy5zcGxpdCxcbiAgICAgICAgbmF2ID0gX3RoaXMkcHJvcHMubmF2LFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRYKTtcblxuICAgIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddIHx8ICdUb2dnbGUgRHJvcGRvd24nO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZSc6IGNhcmV0IHx8IHNwbGl0LFxuICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZS1zcGxpdCc6IHNwbGl0LFxuICAgICAgJ25hdi1saW5rJzogbmF2XG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgdmFyIGNoaWxkcmVuID0gdHlwZW9mIHByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyA/IHByb3BzLmNoaWxkcmVuIDogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwidmlzdWFsbHktaGlkZGVuXCJcbiAgICB9LCBhcmlhTGFiZWwpO1xuICAgIHZhciBUYWc7XG5cbiAgICBpZiAobmF2ICYmICF0YWcpIHtcbiAgICAgIFRhZyA9ICdhJztcbiAgICAgIHByb3BzLmhyZWYgPSAnIyc7XG4gICAgfSBlbHNlIGlmICghdGFnKSB7XG4gICAgICBUYWcgPSBCdXR0b24kMTtcbiAgICAgIHByb3BzLmNvbG9yID0gY29sb3I7XG4gICAgICBwcm9wcy5jc3NNb2R1bGUgPSBjc3NNb2R1bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRhZyA9IHRhZztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0LmluTmF2YmFyKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogdGhpcy5jb250ZXh0LmlzT3BlbixcbiAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IHRoaXMuZ2V0Um9sZSgpLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlJlZmVyZW5jZSwge1xuICAgICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMjtcblxuICAgICAgdmFyIHJlZiA9IF9yZWYucmVmO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBwcm9wcywgKF9yZWYyID0ge30sIF9yZWYyW3R5cGVvZiBUYWcgPT09ICdzdHJpbmcnID8gJ3JlZicgOiAnaW5uZXJSZWYnXSA9IHJlZiwgX3JlZjIpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgb25DbGljazogX3RoaXMyLm9uQ2xpY2ssXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBfdGhpczIuY29udGV4dC5pc09wZW4sXG4gICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBfdGhpczIuZ2V0Um9sZSgpLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd25Ub2dnbGU7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93blRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTA7XG5Ecm9wZG93blRvZ2dsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkJDtcbkRyb3Bkb3duVG9nZ2xlLmNvbnRleHRUeXBlID0gRHJvcGRvd25Db250ZXh0O1xudmFyIERyb3Bkb3duVG9nZ2xlJDEgPSBEcm9wZG93blRvZ2dsZTtcblxudmFyIF9leGNsdWRlZCRXID0gW1widGFnXCIsIFwiYmFzZUNsYXNzXCIsIFwiYmFzZUNsYXNzQWN0aXZlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpbm5lclJlZlwiXTtcblxudmFyIHByb3BUeXBlcyQkID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24ucHJvcFR5cGVzKSwge30sIHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlKSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXSksXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGJhc2VDbGFzczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhc2VDbGFzc0FjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufSk7XG5cbnZhciBkZWZhdWx0UHJvcHMkXyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gIHRhZzogJ2RpdicsXG4gIGJhc2VDbGFzczogJ2ZhZGUnLFxuICBiYXNlQ2xhc3NBY3RpdmU6ICdzaG93JyxcbiAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkZhZGUsXG4gIGFwcGVhcjogdHJ1ZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIFwiaW5cIjogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIEZhZGUocHJvcHMpIHtcbiAgdmFyIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGJhc2VDbGFzcyA9IHByb3BzLmJhc2VDbGFzcyxcbiAgICAgIGJhc2VDbGFzc0FjdGl2ZSA9IHByb3BzLmJhc2VDbGFzc0FjdGl2ZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkVyk7XG5cbiAgdmFyIHRyYW5zaXRpb25Qcm9wcyA9IHBpY2sob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gIHZhciBjaGlsZFByb3BzID0gb21pdChvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLCB0cmFuc2l0aW9uUHJvcHMsIGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICB2YXIgaXNBY3RpdmUgPSBzdGF0dXMgPT09ICdlbnRlcmVkJztcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGJhc2VDbGFzcywgaXNBY3RpdmUgJiYgYmFzZUNsYXNzQWN0aXZlKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSwgY2hpbGRQcm9wcywge1xuICAgICAgcmVmOiBpbm5lclJlZlxuICAgIH0pLCBjaGlsZHJlbik7XG4gIH0pO1xufVxuXG5GYWRlLnByb3BUeXBlcyA9IHByb3BUeXBlcyQkO1xuRmFkZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkXztcblxuLyoqXG4gKiBBY2NvcmRpb25Db250ZXh0XG4gKiB7XG4gKiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICogIG9wZW5JZDogUHJvcFR5cGVzLnN0cmluZywgICAgXG4gKiB9XG4gKi9cblxudmFyIEFjY29yZGlvbkNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciBfZXhjbHVkZWQkViA9IFtcImZsdXNoXCIsIFwib3BlblwiLCBcInRvZ2dsZVwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRfID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGZsdXNoOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWRcbn07XG52YXIgZGVmYXVsdFByb3BzJFogPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBBY2NvcmRpb24gPSBmdW5jdGlvbiBBY2NvcmRpb24ocHJvcHMpIHtcbiAgdmFyIGZsdXNoID0gcHJvcHMuZmx1c2gsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRWKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24nLCB7XG4gICAgJ2FjY29yZGlvbi1mbHVzaCc6IGZsdXNoXG4gIH0pLCBjc3NNb2R1bGUpO1xuICB2YXIgYWNjb3JkaW9uQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuOiBvcGVuLFxuICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBY2NvcmRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFjY29yZGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSkpO1xufTtcblxuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyRfO1xuQWNjb3JkaW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRaO1xudmFyIEFjY29yZGlvbiQxID0gQWNjb3JkaW9uO1xuXG52YXIgX2V4Y2x1ZGVkJFUgPSBbXCJkZWZhdWx0T3BlblwiLCBcInN0YXlPcGVuXCJdO1xudmFyIHByb3BUeXBlcyRaID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgc3RheU9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkWSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIFVuY29udHJvbGxlZEFjY29yZGlvbiA9IGZ1bmN0aW9uIFVuY29udHJvbGxlZEFjY29yZGlvbihfcmVmKSB7XG4gIHZhciBkZWZhdWx0T3BlbiA9IF9yZWYuZGVmYXVsdE9wZW4sXG4gICAgICBzdGF5T3BlbiA9IF9yZWYuc3RheU9wZW4sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRVKTtcblxuICB2YXIgX3VzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wZW4gfHwgKHN0YXlPcGVuID8gW10gOiB1bmRlZmluZWQpKSxcbiAgICAgIG9wZW4gPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRPcGVuID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoaWQpIHtcbiAgICBpZiAoc3RheU9wZW4pIHtcbiAgICAgIG9wZW4uaW5jbHVkZXMoaWQpID8gc2V0T3BlbihvcGVuLmZpbHRlcihmdW5jdGlvbiAoYWNjb3JkaW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIGFjY29yZGlvbklkICE9PSBpZDtcbiAgICAgIH0pKSA6IHNldE9wZW4oW10uY29uY2F0KG9wZW4sIFtpZF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlbiA9PT0gaWQgPyBzZXRPcGVuKHVuZGVmaW5lZCkgOiBzZXRPcGVuKGlkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBY2NvcmRpb24kMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgb3Blbjogb3BlbixcbiAgICB0b2dnbGU6IHRvZ2dsZVxuICB9KSk7XG59O1xuXG5BY2NvcmRpb24kMS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkWjtcbkFjY29yZGlvbiQxLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRZO1xudmFyIFVuY29udHJvbGxlZEFjY29yZGlvbiQxID0gVW5jb250cm9sbGVkQWNjb3JkaW9uO1xuXG52YXIgX2V4Y2x1ZGVkJFQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiLCBcImNoaWxkcmVuXCIsIFwidGFyZ2V0SWRcIl07XG52YXIgcHJvcFR5cGVzJFkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgdGFyZ2V0SWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWRcbn07XG52YXIgZGVmYXVsdFByb3BzJFggPSB7XG4gIHRhZzogJ2gyJ1xufTtcblxudmFyIEFjY29yZGlvbkhlYWRlciA9IGZ1bmN0aW9uIEFjY29yZGlvbkhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0YXJnZXRJZCA9IHByb3BzLnRhcmdldElkLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkVCk7XG5cbiAgdmFyIF91c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChBY2NvcmRpb25Db250ZXh0KSxcbiAgICAgIG9wZW4gPSBfdXNlQ29udGV4dC5vcGVuLFxuICAgICAgdG9nZ2xlID0gX3VzZUNvbnRleHQudG9nZ2xlO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbi1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGJ1dHRvbkNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2FjY29yZGlvbi1idXR0b24nLCB7XG4gICAgY29sbGFwc2VkOiAhKEFycmF5LmlzQXJyYXkob3BlbikgPyBvcGVuLmluY2x1ZGVzKHRhcmdldElkKSA6IG9wZW4gPT09IHRhcmdldElkKVxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGJ1dHRvbkNsYXNzZXMsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiB0b2dnbGUodGFyZ2V0SWQpO1xuICAgIH1cbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cbkFjY29yZGlvbkhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkWTtcbkFjY29yZGlvbkhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkWDtcbnZhciBBY2NvcmRpb25IZWFkZXIkMSA9IEFjY29yZGlvbkhlYWRlcjtcblxudmFyIF9leGNsdWRlZCRTID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJFggPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkVyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW0kMiA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRTKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24taXRlbScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5BY2NvcmRpb25JdGVtJDIucHJvcFR5cGVzID0gcHJvcFR5cGVzJFg7XG5BY2NvcmRpb25JdGVtJDIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFc7XG52YXIgQWNjb3JkaW9uSXRlbSQzID0gQWNjb3JkaW9uSXRlbSQyO1xuXG52YXIgX2V4Y2x1ZGVkJFIgPSBbXCJ0YWdcIiwgXCJob3Jpem9udGFsXCIsIFwiaXNPcGVuXCIsIFwiY2xhc3NOYW1lXCIsIFwibmF2YmFyXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpbm5lclJlZlwiXTtcblxudmFyIF90cmFuc2l0aW9uU3RhdHVzVG9DbDtcblxudmFyIHByb3BUeXBlcyRXID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24ucHJvcFR5cGVzKSwge30sIHtcbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlKSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXSksXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBuYXZiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdF0pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyRWID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgaG9yaXpvbnRhbDogZmFsc2UsXG4gIGlzT3BlbjogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuQ29sbGFwc2Vcbn0pO1xuXG52YXIgdHJhbnNpdGlvblN0YXR1c1RvQ2xhc3NIYXNoID0gKF90cmFuc2l0aW9uU3RhdHVzVG9DbCA9IHt9LCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HXSA9ICdjb2xsYXBzaW5nJywgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FTlRFUkVEXSA9ICdjb2xsYXBzZSBzaG93JywgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HXSA9ICdjb2xsYXBzaW5nJywgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FWElURURdID0gJ2NvbGxhcHNlJywgX3RyYW5zaXRpb25TdGF0dXNUb0NsKTtcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkNsYXNzKHN0YXR1cykge1xuICByZXR1cm4gdHJhbnNpdGlvblN0YXR1c1RvQ2xhc3NIYXNoW3N0YXR1c10gfHwgJ2NvbGxhcHNlJztcbn1cblxudmFyIENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENvbGxhcHNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2xsYXBzZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZGltZW5zaW9uOiBudWxsXG4gICAgfTtcbiAgICBbJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfdGhpc1tuYW1lXSA9IF90aGlzW25hbWVdLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb2xsYXBzZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldERpbWVuc2lvbiA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaG9yaXpvbnRhbCA/IG5vZGUuc2Nyb2xsV2lkdGggOiBub2RlLnNjcm9sbEhlaWdodDtcbiAgfTtcblxuICBfcHJvdG8ub25FbnRlcmluZyA9IGZ1bmN0aW9uIG9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogdGhpcy5nZXREaW1lbnNpb24obm9kZSlcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkVudGVyZWQgPSBmdW5jdGlvbiBvbkVudGVyZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogbnVsbFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ID0gZnVuY3Rpb24gb25FeGl0KG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogdGhpcy5nZXREaW1lbnNpb24obm9kZSlcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKG5vZGUpIHtcbiAgICAvLyBnZXR0aW5nIHRoaXMgdmFyaWFibGUgdHJpZ2dlcnMgYSByZWZsb3dcbiAgICB0aGlzLmdldERpbWVuc2lvbihub2RlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogMFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogbnVsbFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaG9yaXpvbnRhbCA9IF90aGlzJHByb3BzLmhvcml6b250YWwsXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBuYXZiYXIgPSBfdGhpcyRwcm9wcy5uYXZiYXIsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkUik7XG5cbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5zdGF0ZS5kaW1lbnNpb247XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wcyA9IHBpY2sob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gICAgdmFyIGNoaWxkUHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbiwgX2V4dGVuZHMoe30sIHRyYW5zaXRpb25Qcm9wcywge1xuICAgICAgXCJpblwiOiBpc09wZW4sXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMub25FbnRlcmVkLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgdmFyIGNvbGxhcHNlQ2xhc3MgPSBnZXRUcmFuc2l0aW9uQ2xhc3Moc3RhdHVzKTtcbiAgICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgaG9yaXpvbnRhbCAmJiAnY29sbGFwc2UtaG9yaXpvbnRhbCcsIGNvbGxhcHNlQ2xhc3MsIG5hdmJhciAmJiAnbmF2YmFyLWNvbGxhcHNlJyksIGNzc01vZHVsZSk7XG4gICAgICB2YXIgc3R5bGUgPSBkaW1lbnNpb24gPT09IG51bGwgPyBudWxsIDogKF9yZWYgPSB7fSwgX3JlZltob3Jpem9udGFsID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA9IGRpbWVuc2lvbiwgX3JlZik7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGNoaWxkUHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjaGlsZFByb3BzLnN0eWxlKSwgc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHJlZjogX3RoaXMyLnByb3BzLmlubmVyUmVmXG4gICAgICB9KSwgY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDb2xsYXBzZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQ29sbGFwc2UucHJvcFR5cGVzID0gcHJvcFR5cGVzJFc7XG5Db2xsYXBzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVjtcbnZhciBDb2xsYXBzZSQxID0gQ29sbGFwc2U7XG5cbnZhciBfZXhjbHVkZWQkUSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCIsIFwiY2hpbGRyZW5cIiwgXCJhY2NvcmRpb25JZFwiXTtcbnZhciBwcm9wVHlwZXMkViA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBhY2NvcmRpb25JZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbnZhciBkZWZhdWx0UHJvcHMkVSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW0gPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGFjY29yZGlvbklkID0gcHJvcHMuYWNjb3JkaW9uSWQsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRRKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEFjY29yZGlvbkNvbnRleHQpLFxuICAgICAgb3BlbiA9IF91c2VDb250ZXh0Lm9wZW47XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uLWNvbGxhcHNlJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ29sbGFwc2UkMSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBpc09wZW46IEFycmF5LmlzQXJyYXkob3BlbikgPyBvcGVuLmluY2x1ZGVzKGFjY29yZGlvbklkKSA6IG9wZW4gPT09IGFjY29yZGlvbklkXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBcImFjY29yZGlvbi1ib2R5XCJcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cbkFjY29yZGlvbkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJFY7XG5BY2NvcmRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRVO1xudmFyIEFjY29yZGlvbkl0ZW0kMSA9IEFjY29yZGlvbkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkUCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwiaW5uZXJSZWZcIiwgXCJwaWxsXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRVID0ge1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHBpbGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRUID0ge1xuICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIHBpbGw6IGZhbHNlLFxuICB0YWc6ICdzcGFuJ1xufTtcblxudmFyIEJhZGdlID0gZnVuY3Rpb24gQmFkZ2UocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgcGlsbCA9IHByb3BzLnBpbGwsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRQKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdiYWRnZScsICdiZy0nICsgY29sb3IsIHBpbGwgPyAncm91bmRlZC1waWxsJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoYXR0cmlidXRlcy5ocmVmICYmIFRhZyA9PT0gJ3NwYW4nKSB7XG4gICAgVGFnID0gJ2EnO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuQmFkZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzJFU7XG5CYWRnZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVDtcbnZhciBCYWRnZSQxID0gQmFkZ2U7XG5cbnZhciBfZXhjbHVkZWQkTyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwiYm9keVwiLCBcImludmVyc2VcIiwgXCJvdXRsaW5lXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJFQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGludmVyc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBib2R5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG91dGxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyRTID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZCA9IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBib2R5ID0gcHJvcHMuYm9keSxcbiAgICAgIGludmVyc2UgPSBwcm9wcy5pbnZlcnNlLFxuICAgICAgb3V0bGluZSA9IHByb3BzLm91dGxpbmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZCcsIGludmVyc2UgPyAndGV4dC13aGl0ZScgOiBmYWxzZSwgYm9keSA/ICdjYXJkLWJvZHknIDogZmFsc2UsIGNvbG9yID8gKG91dGxpbmUgPyAnYm9yZGVyJyA6ICdiZycpICsgXCItXCIgKyBjb2xvciA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuQ2FyZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVDtcbkNhcmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFM7XG52YXIgQ2FyZCQxID0gQ2FyZDtcblxudmFyIF9leGNsdWRlZCROID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRTID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRSID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZEdyb3VwID0gZnVuY3Rpb24gQ2FyZEdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCROKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWdyb3VwJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJFM7XG5DYXJkR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFI7XG52YXIgQ2FyZEdyb3VwJDEgPSBDYXJkR3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkTSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkUSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmREZWNrID0gZnVuY3Rpb24gQ2FyZERlY2socHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE0pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZGVjaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZERlY2sucHJvcFR5cGVzID0gcHJvcFR5cGVzJFI7XG5DYXJkRGVjay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUTtcbnZhciBDYXJkRGVjayQxID0gQ2FyZERlY2s7XG5cbnZhciBfZXhjbHVkZWQkTCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkUCA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRDb2x1bW5zID0gZnVuY3Rpb24gQ2FyZENvbHVtbnMocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEwpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtY29sdW1ucycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZENvbHVtbnMucHJvcFR5cGVzID0gcHJvcFR5cGVzJFE7XG5DYXJkQ29sdW1ucy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUDtcbnZhciBDYXJkQ29sdW1ucyQxID0gQ2FyZENvbHVtbnM7XG5cbnZhciBfZXhjbHVkZWQkSyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubmVyUmVmXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRQID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJE8gPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBDYXJkQm9keSA9IGZ1bmN0aW9uIENhcmRCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn07XG5cbkNhcmRCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRQO1xuQ2FyZEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJE87XG52YXIgQ2FyZEJvZHkkMSA9IENhcmRCb2R5O1xuXG52YXIgX2V4Y2x1ZGVkJEogPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkTyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyROID0ge1xuICB0YWc6ICdhJ1xufTtcblxudmFyIENhcmRMaW5rID0gZnVuY3Rpb24gQ2FyZExpbmsocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRKKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWxpbmsnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZExpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzJE87XG5DYXJkTGluay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTjtcbnZhciBDYXJkTGluayQxID0gQ2FyZExpbms7XG5cbnZhciBfZXhjbHVkZWQkSSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkTSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRGb290ZXIgPSBmdW5jdGlvbiBDYXJkRm9vdGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRJKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWZvb3RlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZEZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTjtcbkNhcmRGb290ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJE07XG52YXIgQ2FyZEZvb3RlciQxID0gQ2FyZEZvb3RlcjtcblxudmFyIF9leGNsdWRlZCRIID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRNID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRMID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZEhlYWRlciA9IGZ1bmN0aW9uIENhcmRIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtaGVhZGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRNO1xuQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTDtcbnZhciBDYXJkSGVhZGVyJDEgPSBDYXJkSGVhZGVyO1xuXG52YXIgX2V4Y2x1ZGVkJEcgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEwgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3R0b206IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSyA9IHtcbiAgdGFnOiAnaW1nJ1xufTtcblxudmFyIENhcmRJbWcgPSBmdW5jdGlvbiBDYXJkSW1nKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0b3AgPSBwcm9wcy50b3AsXG4gICAgICBib3R0b20gPSBwcm9wcy5ib3R0b20sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRHKTtcblxuICB2YXIgY2FyZEltZ0NsYXNzTmFtZSA9ICdjYXJkLWltZyc7XG5cbiAgaWYgKHRvcCkge1xuICAgIGNhcmRJbWdDbGFzc05hbWUgPSAnY2FyZC1pbWctdG9wJztcbiAgfVxuXG4gIGlmIChib3R0b20pIHtcbiAgICBjYXJkSW1nQ2xhc3NOYW1lID0gJ2NhcmQtaW1nLWJvdHRvbSc7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNhcmRJbWdDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZEltZy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTDtcbkNhcmRJbWcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEs7XG52YXIgQ2FyZEltZyQxID0gQ2FyZEltZztcblxudmFyIF9leGNsdWRlZCRGID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRLID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRKID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZEltZ092ZXJsYXkgPSBmdW5jdGlvbiBDYXJkSW1nT3ZlcmxheShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkRik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1pbWctb3ZlcmxheScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZEltZ092ZXJsYXkucHJvcFR5cGVzID0gcHJvcFR5cGVzJEs7XG5DYXJkSW1nT3ZlcmxheS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSjtcbnZhciBDYXJkSW1nT3ZlcmxheSQxID0gQ2FyZEltZ092ZXJsYXk7XG5cbnZhciBfZXhjbHVkZWQkRSA9IFtcImluXCIsIFwiY2hpbGRyZW5cIiwgXCJjc3NNb2R1bGVcIiwgXCJzbGlkZVwiLCBcInRhZ1wiLCBcImNsYXNzTmFtZVwiXTtcblxudmFyIENhcm91c2VsSXRlbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDYXJvdXNlbEl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhcm91c2VsSXRlbShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnRBbmltYXRpb246IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5vbkVudGVyID0gX3RoaXMub25FbnRlci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkVudGVyaW5nID0gX3RoaXMub25FbnRlcmluZy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXQgPSBfdGhpcy5vbkV4aXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0aW5nID0gX3RoaXMub25FeGl0aW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdGVkID0gX3RoaXMub25FeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENhcm91c2VsSXRlbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uRW50ZXIgPSBmdW5jdGlvbiBvbkVudGVyKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkVudGVyaW5nID0gZnVuY3Rpb24gb25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZykge1xuICAgIC8vIGdldHRpbmcgdGhpcyB2YXJpYWJsZSB0cmlnZ2VycyBhIHJlZmxvd1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICByZXR1cm4gb2Zmc2V0SGVpZ2h0O1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXQgPSBmdW5jdGlvbiBvbkV4aXQobm9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGluZyA9IGZ1bmN0aW9uIG9uRXhpdGluZyhub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogdHJ1ZVxuICAgIH0pO1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlLmJzLmNhcm91c2VsJykpO1xuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKG5vZGUpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzbGlkLmJzLmNhcm91c2VsJykpO1xuICAgIHRoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzSW4gPSBfdGhpcyRwcm9wc1tcImluXCJdLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIHNsaWRlID0gX3RoaXMkcHJvcHMuc2xpZGUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICB0cmFuc2l0aW9uUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJEUpO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBlbnRlcjogc2xpZGUsXG4gICAgICBleGl0OiBzbGlkZSxcbiAgICAgIFwiaW5cIjogaXNJbixcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSwgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IF90aGlzMi5jb250ZXh0LmRpcmVjdGlvbjtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSRUQgfHwgc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRVhJVElORztcbiAgICAgIHZhciBkaXJlY3Rpb25DbGFzc05hbWUgPSAoc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJJTkcgfHwgc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRVhJVElORykgJiYgX3RoaXMyLnN0YXRlLnN0YXJ0QW5pbWF0aW9uICYmIChkaXJlY3Rpb24gPT09ICdlbmQnID8gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnIDogJ2Nhcm91c2VsLWl0ZW0tZW5kJyk7XG4gICAgICB2YXIgb3JkZXJDbGFzc05hbWUgPSBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FTlRFUklORyAmJiAoZGlyZWN0aW9uID09PSAnZW5kJyA/ICdjYXJvdXNlbC1pdGVtLW5leHQnIDogJ2Nhcm91c2VsLWl0ZW0tcHJldicpO1xuICAgICAgdmFyIGl0ZW1DbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsLWl0ZW0nLCBpc0FjdGl2ZSAmJiAnYWN0aXZlJywgZGlyZWN0aW9uQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgICAgICBjbGFzc05hbWU6IGl0ZW1DbGFzc2VzXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENhcm91c2VsSXRlbTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkNhcm91c2VsSXRlbS5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBcImluXCI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgc2xpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufSk7XG5DYXJvdXNlbEl0ZW0uZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkNhcm91c2VsLFxuICBzbGlkZTogdHJ1ZVxufSk7XG5DYXJvdXNlbEl0ZW0uY29udGV4dFR5cGVzID0ge1xuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsSXRlbSQxID0gQ2Fyb3VzZWxJdGVtO1xuXG4vKipcbiAqIENhcm91c2VsQ29udGV4dFxuICoge1xuICogIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJ10pLmlzUmVxdWlyZWQsXG4gKiB9XG4gKi9cblxudmFyIENhcm91c2VsQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuXG52YXIgQ2Fyb3VzZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ2Fyb3VzZWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGFuZGxlS2V5UHJlc3MgPSBfdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW5kZXJJdGVtcyA9IF90aGlzLnJlbmRlckl0ZW1zLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhvdmVyU3RhcnQgPSBfdGhpcy5ob3ZlclN0YXJ0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhvdmVyRW5kID0gX3RoaXMuaG92ZXJFbmQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IF90aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b3VjaFN0YXJ0WCA9IDA7XG4gICAgX3RoaXMudG91Y2hTdGFydFkgPSAwO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSW5kZXg6IF90aGlzLnByb3BzLmFjdGl2ZUluZGV4LFxuICAgICAgZGlyZWN0aW9uOiAnZW5kJyxcbiAgICAgIGluZGljYXRvckNsaWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDb250ZXh0VmFsdWUgPSBmdW5jdGlvbiBnZXRDb250ZXh0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5zdGF0ZS5kaXJlY3Rpb25cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldCB1cCB0aGUgY3ljbGVcbiAgICBpZiAodGhpcy5wcm9wcy5yaWRlID09PSAnY2Fyb3VzZWwnKSB7XG4gICAgICB0aGlzLnNldEludGVydmFsKCk7XG4gICAgfSAvLyBUT0RPOiBtb3ZlIHRoaXMgdG8gdGhlIHNwZWNpZmljIGNhcm91c2VsIGxpa2UgYm9vdHN0cmFwLiBDdXJyZW50bHkgaXQgd2lsbCB0cmlnZ2VyIEFMTCBjYXJvdXNlbHMgb24gdGhlIHBhZ2UuXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlQcmVzcyk7XG4gIH07XG5cbiAgQ2Fyb3VzZWwuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5ld1N0YXRlID0gbnVsbDtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBwcmV2U3RhdGUuYWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbiA9IHByZXZTdGF0ZS5kaXJlY3Rpb24sXG4gICAgICAgIGluZGljYXRvckNsaWNrZWQgPSBwcmV2U3RhdGUuaW5kaWNhdG9yQ2xpY2tlZDtcblxuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpcmVjdGlvbiB0byB0dXJuXG4gICAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleCArIDEpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ2VuZCc7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCA9PT0gYWN0aXZlSW5kZXggLSAxKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdzdGFydCc7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCA8IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGluZGljYXRvckNsaWNrZWQgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gaW5kaWNhdG9yQ2xpY2tlZCA/ICdlbmQnIDogJ3N0YXJ0JztcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBuZXh0UHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICBpbmRpY2F0b3JDbGlja2VkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlSW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgpIHJldHVybjtcbiAgICB0aGlzLnNldEludGVydmFsKHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlQcmVzcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEludGVydmFsID0gZnVuY3Rpb24gKF9zZXRJbnRlcnZhbCkge1xuICAgIGZ1bmN0aW9uIHNldEludGVydmFsKCkge1xuICAgICAgcmV0dXJuIF9zZXRJbnRlcnZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHNldEludGVydmFsLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9zZXRJbnRlcnZhbC50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2V0SW50ZXJ2YWw7XG4gIH0oZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgbm90IHRvIGhhdmUgbXVsdGlwbGUgaW50ZXJ2YWxzIGdvaW5nLi4uXG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICBpZiAocHJvcHMuaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuY3ljbGVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvcHMubmV4dCgpO1xuICAgICAgfSwgcGFyc2VJbnQocHJvcHMuaW50ZXJ2YWwsIDEwKSk7XG4gICAgfVxuICB9KTtcblxuICBfcHJvdG8uY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChfY2xlYXJJbnRlcnZhbCkge1xuICAgIGZ1bmN0aW9uIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgICByZXR1cm4gX2NsZWFySW50ZXJ2YWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9jbGVhckludGVydmFsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBjbGVhckludGVydmFsO1xuICB9KGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY3ljbGVJbnRlcnZhbCk7XG4gIH0pO1xuXG4gIF9wcm90by5ob3ZlclN0YXJ0ID0gZnVuY3Rpb24gaG92ZXJTdGFydCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW91c2VFbnRlcikge1xuICAgICAgdmFyIF90aGlzJHByb3BzO1xuXG4gICAgICAoX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzKS5tb3VzZUVudGVyLmFwcGx5KF90aGlzJHByb3BzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaG92ZXJFbmQgPSBmdW5jdGlvbiBob3ZlckVuZCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5zZXRJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm1vdXNlTGVhdmUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczI7XG5cbiAgICAgIChfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzKS5tb3VzZUxlYXZlLmFwcGx5KF90aGlzJHByb3BzMiwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUtleVByZXNzID0gZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZ0KSB7XG4gICAgaWYgKHRoaXMucHJvcHMua2V5Ym9hcmQpIHtcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcmV2aW91cygpO1xuICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmVuYWJsZVRvdWNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZW5hYmxlVG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgdmFyIGN1cnJlbnRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgIHZhciBkaWZmWCA9IE1hdGguYWJzKHRoaXMudG91Y2hTdGFydFggLSBjdXJyZW50WCk7XG4gICAgdmFyIGRpZmZZID0gTWF0aC5hYnModGhpcy50b3VjaFN0YXJ0WSAtIGN1cnJlbnRZKTsgLy8gRG9uJ3Qgc3dpcGUgaWYgWS1tb3ZlbWVudCBpcyBiaWdnZXIgdGhhbiBYLW1vdmVtZW50XG5cbiAgICBpZiAoZGlmZlggPCBkaWZmWSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkaWZmWCA8IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50WCA8IHRoaXMudG91Y2hTdGFydFgpIHtcbiAgICAgIHRoaXMucHJvcHMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnByZXZpb3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uIHJlbmRlckl0ZW1zKGNhcm91c2VsSXRlbXMsIGNsYXNzTmFtZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHNsaWRlID0gdGhpcy5wcm9wcy5zbGlkZTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSwgY2Fyb3VzZWxJdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICB2YXIgaXNJbiA9IGluZGV4ID09PSBfdGhpczIuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgIFwiaW5cIjogaXNJbixcbiAgICAgICAgc2xpZGU6IHNsaWRlXG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczMuY3NzTW9kdWxlLFxuICAgICAgICBzbGlkZSA9IF90aGlzJHByb3BzMy5zbGlkZSxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgZGFyayA9IF90aGlzJHByb3BzMy5kYXJrLFxuICAgICAgICBmYWRlID0gX3RoaXMkcHJvcHMzLmZhZGU7XG4gICAgdmFyIG91dGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJvdXNlbCcsIGZhZGUsIHNsaWRlICYmICdzbGlkZScsIGRhcmsgJiYgJ2Nhcm91c2VsLWRhcmsnKSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgaW5uZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdjYXJvdXNlbC1pbm5lcicpLCBjc3NNb2R1bGUpOyAvLyBmaWx0ZXIgb3V0IGJvb2xlYW5zLCBudWxsLCBvciB1bmRlZmluZWRcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbic7XG4gICAgfSk7XG4gICAgdmFyIHNsaWRlc09ubHkgPSBjaGlsZHJlbi5ldmVyeShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlID09PSBDYXJvdXNlbEl0ZW0kMTtcbiAgICB9KTsgLy8gUmVuZGVyaW5nIG9ubHkgc2xpZGVzXG5cbiAgICBpZiAoc2xpZGVzT25seSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaG92ZXJTdGFydCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgICB9LCB0aGlzLnJlbmRlckl0ZW1zKGNoaWxkcmVuLCBpbm5lckNsYXNzZXMpKSk7XG4gICAgfSAvLyBSZW5kZXJpbmcgc2xpZGVzIGFuZCBjb250cm9sc1xuXG5cbiAgICBpZiAoY2hpbGRyZW5bMF0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdmFyIF9jYXJvdXNlbEl0ZW1zID0gY2hpbGRyZW5bMF07XG4gICAgICB2YXIgX2NvbnRyb2xMZWZ0ID0gY2hpbGRyZW5bMV07XG4gICAgICB2YXIgX2NvbnRyb2xSaWdodCA9IGNoaWxkcmVuWzJdO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaG92ZXJTdGFydCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgICB9LCB0aGlzLnJlbmRlckl0ZW1zKF9jYXJvdXNlbEl0ZW1zLCBpbm5lckNsYXNzZXMpLCBfY29udHJvbExlZnQsIF9jb250cm9sUmlnaHQpKTtcbiAgICB9IC8vIFJlbmRlcmluZyBpbmRpY2F0b3JzLCBzbGlkZXMgYW5kIGNvbnRyb2xzXG5cblxuICAgIHZhciBpbmRpY2F0b3JzID0gY2hpbGRyZW5bMF07XG5cbiAgICB2YXIgd3JhcHBlZE9uQ2xpY2sgPSBmdW5jdGlvbiB3cmFwcGVkT25DbGljayhlKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGljYXRvcnMucHJvcHMub25DbGlja0hhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbmRpY2F0b3JDbGlja2VkOiB0cnVlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kaWNhdG9ycy5wcm9wcy5vbkNsaWNrSGFuZGxlcihlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB3cmFwcGVkSW5kaWNhdG9ycyA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoaW5kaWNhdG9ycywge1xuICAgICAgb25DbGlja0hhbmRsZXI6IHdyYXBwZWRPbkNsaWNrXG4gICAgfSk7XG4gICAgdmFyIGNhcm91c2VsSXRlbXMgPSBjaGlsZHJlblsxXTtcbiAgICB2YXIgY29udHJvbExlZnQgPSBjaGlsZHJlblsyXTtcbiAgICB2YXIgY29udHJvbFJpZ2h0ID0gY2hpbGRyZW5bM107XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IG91dGVyQ2xhc3NlcyxcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5ob3ZlclN0YXJ0LFxuICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kLFxuICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCB3cmFwcGVkSW5kaWNhdG9ycywgdGhpcy5yZW5kZXJJdGVtcyhjYXJvdXNlbEl0ZW1zLCBpbm5lckNsYXNzZXMpLCBjb250cm9sTGVmdCwgY29udHJvbFJpZ2h0KSk7XG4gIH07XG5cbiAgcmV0dXJuIENhcm91c2VsO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xuICAvLyB0aGUgY3VycmVudCBhY3RpdmUgc2xpZGUgb2YgdGhlIGNhcm91c2VsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgLy8gYSBmdW5jdGlvbiB3aGljaCBzaG91bGQgYWR2YW5jZSB0aGUgY2Fyb3VzZWwgdG8gdGhlIG5leHQgc2xpZGUgKHZpYSBhY3RpdmVJbmRleClcbiAgbmV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIGEgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGFkdmFuY2UgdGhlIGNhcm91c2VsIHRvIHRoZSBwcmV2aW91cyBzbGlkZSAodmlhIGFjdGl2ZUluZGV4KVxuICBwcmV2aW91czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIGNvbnRyb2xzIGlmIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIHNob3VsZCBjb250cm9sIHRoZSBjYXJvdXNlbFxuICBrZXlib2FyZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qIElmIHNldCB0byBcImhvdmVyXCIsIHBhdXNlcyB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwgb24gbW91c2VlbnRlciBhbmQgcmVzdW1lcyB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwgb25cbiAgICogbW91c2VsZWF2ZS4gSWYgc2V0IHRvIGZhbHNlLCBob3ZlcmluZyBvdmVyIHRoZSBjYXJvdXNlbCB3b24ndCBwYXVzZSBpdC4gKGRlZmF1bHQ6IFwiaG92ZXJcIilcbiAgICovXG4gIHBhdXNlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnaG92ZXInLCBmYWxzZV0pLFxuICAvLyBBdXRvcGxheXMgdGhlIGNhcm91c2VsIGFmdGVyIHRoZSB1c2VyIG1hbnVhbGx5IGN5Y2xlcyB0aGUgZmlyc3QgaXRlbS4gSWYgXCJjYXJvdXNlbFwiLCBhdXRvcGxheXMgdGhlIGNhcm91c2VsIG9uIGxvYWQuXG4gIC8vIFRoaXMgaXMgaG93IGJvb3RzdHJhcCBkZWZpbmVzIGl0Li4uIEkgd291bGQgcHJlZmVyIGEgYm9vbCBuYW1lZCBhdXRvcGxheSBvciBzb21ldGhpbmcuLi5cbiAgcmlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2Nhcm91c2VsJ10pLFxuICAvLyB0aGUgaW50ZXJ2YWwgYXQgd2hpY2ggdGhlIGNhcm91c2VsIGF1dG9tYXRpY2FsbHkgY3ljbGVzIChkZWZhdWx0OiA1MDAwKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXNcbiAgaW50ZXJ2YWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgLy8gY2FsbGVkIHdoZW4gdGhlIG1vdXNlIGVudGVycyB0aGUgQ2Fyb3VzZWxcbiAgbW91c2VFbnRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvLyBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZXhpdHMgdGhlIENhcm91c2VsXG4gIG1vdXNlTGVhdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgLy8gY29udHJvbHMgd2hldGhlciB0aGUgc2xpZGUgYW5pbWF0aW9uIG9uIHRoZSBDYXJvdXNlbCB3b3JrcyBvciBub3RcbiAgc2xpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgLy8gbWFrZSB0aGUgY29udHJvbHMsIGluZGljYXRvcnMgYW5kIGNhcHRpb25zIGRhcmsgb24gdGhlIENhcm91c2VsXG4gIGRhcms6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZW5hYmxlVG91Y2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbkNhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIHBhdXNlOiAnaG92ZXInLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2xpZGU6IHRydWUsXG4gIGVuYWJsZVRvdWNoOiB0cnVlLFxuICBmYWRlOiBmYWxzZVxufTtcbkNhcm91c2VsLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsJDEgPSBDYXJvdXNlbDtcblxudmFyIENhcm91c2VsQ29udHJvbCA9IGZ1bmN0aW9uIENhcm91c2VsQ29udHJvbChwcm9wcykge1xuICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgb25DbGlja0hhbmRsZXIgPSBwcm9wcy5vbkNsaWNrSGFuZGxlcixcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGRpcmVjdGlvblRleHQgPSBwcm9wcy5kaXJlY3Rpb25UZXh0LFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICB2YXIgYW5jaG9yQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIFwiY2Fyb3VzZWwtY29udHJvbC1cIiArIGRpcmVjdGlvbiksIGNzc01vZHVsZSk7XG4gIHZhciBpY29uQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShcImNhcm91c2VsLWNvbnRyb2wtXCIgKyBkaXJlY3Rpb24gKyBcIi1pY29uXCIpLCBjc3NNb2R1bGUpO1xuICB2YXIgc2NyZWVuUmVhZGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndmlzdWFsbHktaGlkZGVuJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIFdlIG5lZWQgdG8gZGlzYWJsZSB0aGlzIGxpbnRpbmcgcnVsZSB0byB1c2UgYW4gYDxhPmAgaW5zdGVhZCBvZlxuICAgIC8vIGA8YnV0dG9uPmAgYmVjYXVzZSB0aGF0J3Mgd2hhdCB0aGUgQm9vdHN0cmFwIGV4YW1wbGVzIHJlcXVpcmU6XG4gICAgLy8gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC41L2NvbXBvbmVudHMvY2Fyb3VzZWwvI3dpdGgtY29udHJvbHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkXG4gICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogYW5jaG9yQ2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgIH0sXG4gICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgdGFiSW5kZXg6IFwiMFwiLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25DbGlja0hhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzZXMsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBzY3JlZW5SZWFkZXJDbGFzc2VzXG4gICAgfSwgZGlyZWN0aW9uVGV4dCB8fCBkaXJlY3Rpb24pKVxuICApO1xufTtcblxuQ2Fyb3VzZWxDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsncHJldicsICduZXh0J10pLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tIYW5kbGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlyZWN0aW9uVGV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgQ2Fyb3VzZWxDb250cm9sJDEgPSBDYXJvdXNlbENvbnRyb2w7XG5cbnZhciBDYXJvdXNlbEluZGljYXRvcnMgPSBmdW5jdGlvbiBDYXJvdXNlbEluZGljYXRvcnMocHJvcHMpIHtcbiAgdmFyIGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBhY3RpdmVJbmRleCA9IHByb3BzLmFjdGl2ZUluZGV4LFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgb25DbGlja0hhbmRsZXIgPSBwcm9wcy5vbkNsaWNrSGFuZGxlcixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgdmFyIGxpc3RDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsLWluZGljYXRvcnMnKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGluZGljYXRvcnMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgIHZhciBpbmRpY2F0b3JDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlSW5kZXggPT09IGlkeFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IGl0ZW0uY2FwdGlvbixcbiAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogdHJ1ZSxcbiAgICAgIGtleTogXCJcIiArIChpdGVtLmtleSB8fCBPYmplY3QudmFsdWVzKGl0ZW0pLmpvaW4oJycpKSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2xpY2tIYW5kbGVyKGlkeCk7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBpbmRpY2F0b3JDbGFzc2VzXG4gICAgfSwgaXRlbS5jYXB0aW9uKTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogbGlzdENsYXNzZXNcbiAgfSwgaW5kaWNhdG9ycyk7XG59O1xuXG5DYXJvdXNlbEluZGljYXRvcnMucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheS5pc1JlcXVpcmVkLFxuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb25DbGlja0hhbmRsZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsSW5kaWNhdG9ycyQxID0gQ2Fyb3VzZWxJbmRpY2F0b3JzO1xuXG52YXIgQ2Fyb3VzZWxDYXB0aW9uID0gZnVuY3Rpb24gQ2Fyb3VzZWxDYXB0aW9uKHByb3BzKSB7XG4gIHZhciBjYXB0aW9uSGVhZGVyID0gcHJvcHMuY2FwdGlvbkhlYWRlcixcbiAgICAgIGNhcHRpb25UZXh0ID0gcHJvcHMuY2FwdGlvblRleHQsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsLWNhcHRpb24nLCAnZC1ub25lJywgJ2QtbWQtYmxvY2snKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIGNhcHRpb25IZWFkZXIpLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNhcHRpb25UZXh0KSk7XG59O1xuXG5DYXJvdXNlbENhcHRpb24ucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uSGVhZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNhcHRpb25UZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUuaXNSZXF1aXJlZCxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbENhcHRpb24kMSA9IENhcm91c2VsQ2FwdGlvbjtcblxudmFyIF9leGNsdWRlZCREID0gW1wiZGVmYXVsdEFjdGl2ZUluZGV4XCIsIFwiYXV0b1BsYXlcIiwgXCJpbmRpY2F0b3JzXCIsIFwiY29udHJvbHNcIiwgXCJpdGVtc1wiLCBcImdvVG9JbmRleFwiXTtcbnZhciBwcm9wVHlwZXMkSiA9IHtcbiAgaXRlbXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXkuaXNSZXF1aXJlZCxcbiAgaW5kaWNhdG9yczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb250cm9sczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhdXRvUGxheTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkZWZhdWx0QWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZ29Ub0luZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn07XG5cbnZhciBVbmNvbnRyb2xsZWRDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRDYXJvdXNlbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUluZGV4OiBwcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXggfHwgMFxuICAgIH07XG4gICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucHJldmlvdXMgPSBfdGhpcy5wcmV2aW91cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nb1RvSW5kZXggPSBfdGhpcy5nb1RvSW5kZXguYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0aW5nID0gX3RoaXMub25FeGl0aW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdGVkID0gX3RoaXMub25FeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENhcm91c2VsLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ZWQgPSBmdW5jdGlvbiBvbkV4aXRlZCgpIHtcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB2YXIgbmV4dEluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggLSAxID8gMCA6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlSW5kZXg6IG5leHRJbmRleFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wcmV2aW91cyA9IGZ1bmN0aW9uIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHZhciBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSAwID8gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCAtIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVJbmRleDogbmV4dEluZGV4XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdvVG9JbmRleCA9IGZ1bmN0aW9uIGdvVG9JbmRleChuZXdJbmRleCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlSW5kZXg6IG5ld0luZGV4XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGF1dG9QbGF5ID0gX3RoaXMkcHJvcHMuYXV0b1BsYXksXG4gICAgICAgIGluZGljYXRvcnMgPSBfdGhpcyRwcm9wcy5pbmRpY2F0b3JzLFxuICAgICAgICBjb250cm9scyA9IF90aGlzJHByb3BzLmNvbnRyb2xzLFxuICAgICAgICBpdGVtcyA9IF90aGlzJHByb3BzLml0ZW1zLFxuICAgICAgICBnb1RvSW5kZXggPSBfdGhpcyRwcm9wcy5nb1RvSW5kZXgsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCREKTtcblxuICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgdmFyIHNsaWRlcyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGtleSA9IGl0ZW0ua2V5IHx8IGl0ZW0uc3JjO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbEl0ZW0kMSwge1xuICAgICAgICBvbkV4aXRpbmc6IF90aGlzMi5vbkV4aXRpbmcsXG4gICAgICAgIG9uRXhpdGVkOiBfdGhpczIub25FeGl0ZWQsXG4gICAgICAgIGtleToga2V5XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZC1ibG9jayB3LTEwMFwiLFxuICAgICAgICBzcmM6IGl0ZW0uc3JjLFxuICAgICAgICBhbHQ6IGl0ZW0uYWx0VGV4dFxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENhcHRpb24kMSwge1xuICAgICAgICBjYXB0aW9uVGV4dDogaXRlbS5jYXB0aW9uLFxuICAgICAgICBjYXB0aW9uSGVhZGVyOiBpdGVtLmhlYWRlciB8fCBpdGVtLmNhcHRpb25cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsJDEsIF9leHRlbmRzKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICAgIG5leHQ6IHRoaXMubmV4dCxcbiAgICAgIHByZXZpb3VzOiB0aGlzLnByZXZpb3VzLFxuICAgICAgcmlkZTogYXV0b1BsYXkgPyAnY2Fyb3VzZWwnIDogdW5kZWZpbmVkXG4gICAgfSwgcHJvcHMpLCBpbmRpY2F0b3JzICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbEluZGljYXRvcnMkMSwge1xuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgYWN0aXZlSW5kZXg6IHByb3BzLmFjdGl2ZUluZGV4IHx8IGFjdGl2ZUluZGV4LFxuICAgICAgb25DbGlja0hhbmRsZXI6IGdvVG9JbmRleCB8fCB0aGlzLmdvVG9JbmRleFxuICAgIH0pLCBzbGlkZXMsIGNvbnRyb2xzICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRyb2wkMSwge1xuICAgICAgZGlyZWN0aW9uOiBcInByZXZcIixcbiAgICAgIGRpcmVjdGlvblRleHQ6IFwiUHJldmlvdXNcIixcbiAgICAgIG9uQ2xpY2tIYW5kbGVyOiBwcm9wcy5wcmV2aW91cyB8fCB0aGlzLnByZXZpb3VzXG4gICAgfSksIGNvbnRyb2xzICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRyb2wkMSwge1xuICAgICAgZGlyZWN0aW9uOiBcIm5leHRcIixcbiAgICAgIGRpcmVjdGlvblRleHQ6IFwiTmV4dFwiLFxuICAgICAgb25DbGlja0hhbmRsZXI6IHByb3BzLm5leHQgfHwgdGhpcy5uZXh0XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRDYXJvdXNlbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVW5jb250cm9sbGVkQ2Fyb3VzZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzJEo7XG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRyb2xzOiB0cnVlLFxuICBpbmRpY2F0b3JzOiB0cnVlLFxuICBhdXRvUGxheTogdHJ1ZVxufTtcbnZhciBVbmNvbnRyb2xsZWRDYXJvdXNlbCQxID0gVW5jb250cm9sbGVkQ2Fyb3VzZWw7XG5cbnZhciBfZXhjbHVkZWQkQyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkSSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIENhcmRTdWJ0aXRsZSA9IGZ1bmN0aW9uIENhcmRTdWJ0aXRsZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkQyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1zdWJ0aXRsZScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuQ2FyZFN1YnRpdGxlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRJO1xuQ2FyZFN1YnRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRJO1xudmFyIENhcmRTdWJ0aXRsZSQxID0gQ2FyZFN1YnRpdGxlO1xuXG52YXIgX2V4Y2x1ZGVkJEIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEggPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEggPSB7XG4gIHRhZzogJ3AnXG59O1xuXG52YXIgQ2FyZFRleHQgPSBmdW5jdGlvbiBDYXJkVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkQik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSDtcbkNhcmRUZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRIO1xudmFyIENhcmRUZXh0JDEgPSBDYXJkVGV4dDtcblxudmFyIF9leGNsdWRlZCRBID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRHID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRHID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgQ2FyZFRpdGxlID0gZnVuY3Rpb24gQ2FyZFRpdGxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRBKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXRpdGxlJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5DYXJkVGl0bGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJEc7XG5DYXJkVGl0bGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEc7XG52YXIgQ2FyZFRpdGxlJDEgPSBDYXJkVGl0bGU7XG5cbnZhciBfZXhjbHVkZWQkeiA9IFtcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwiaXNPcGVuXCIsIFwiZmxpcFwiLCBcInRhcmdldFwiLCBcIm9mZnNldFwiLCBcImZhbGxiYWNrUGxhY2VtZW50c1wiLCBcInBsYWNlbWVudFByZWZpeFwiLCBcImFycm93Q2xhc3NOYW1lXCIsIFwiaGlkZUFycm93XCIsIFwicG9wcGVyQ2xhc3NOYW1lXCIsIFwidGFnXCIsIFwiY29udGFpbmVyXCIsIFwibW9kaWZpZXJzXCIsIFwic3RyYXRlZ3lcIiwgXCJib3VuZGFyaWVzRWxlbWVudFwiLCBcIm9uQ2xvc2VkXCIsIFwiZmFkZVwiLCBcInRyYW5zaXRpb25cIiwgXCJwbGFjZW1lbnRcIl07XG5cbmZ1bmN0aW9uIG5vb3AkMigpIHt9XG5cbnZhciBwcm9wVHlwZXMkRiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLmlzUmVxdWlyZWQsXG4gIHBvcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHBsYWNlbWVudFByZWZpeDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGFycm93Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgaGlkZUFycm93OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLmlzUmVxdWlyZWQsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9mZnNldDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyKSxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBmbGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgbW9kaWZpZXJzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBzdHJhdGVneTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIERPTUVsZW1lbnRdKSxcbiAgb25DbG9zZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkRiA9IHtcbiAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICBwbGFjZW1lbnQ6ICdhdXRvJyxcbiAgaGlkZUFycm93OiBmYWxzZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGZsaXA6IHRydWUsXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICBtb2RpZmllcnM6IFtdLFxuICBvbkNsb3NlZDogbm9vcCQyLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpXG59O1xuXG52YXIgUG9wcGVyQ29udGVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3BwZXJDb250ZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BwZXJDb250ZW50KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc2V0VGFyZ2V0Tm9kZSA9IF90aGlzLnNldFRhcmdldE5vZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0VGFyZ2V0Tm9kZSA9IF90aGlzLmdldFRhcmdldE5vZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUG9wcGVyQ29udGVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmlzT3BlbiAmJiAhc3RhdGUuaXNPcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgICAgfTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFyIF9wcm90byA9IFBvcHBlckNvbnRlbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgJiYgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzICYmIHRoaXMuX2VsZW1lbnQuY2hpbGROb2Rlc1swXSAmJiB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXNbMF0uZm9jdXMpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0VGFyZ2V0Tm9kZSA9IGZ1bmN0aW9uIHNldFRhcmdldE5vZGUobm9kZSkge1xuICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHR5cGVvZiBub2RlID09PSAnc3RyaW5nJyA/IGdldFRhcmdldChub2RlKSA6IG5vZGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRhcmdldE5vZGUgPSBmdW5jdGlvbiBnZXRUYXJnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldE5vZGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRhaW5lck5vZGUgPSBmdW5jdGlvbiBnZXRDb250YWluZXJOb2RlKCkge1xuICAgIHJldHVybiBnZXRUYXJnZXQodGhpcy5wcm9wcy5jb250YWluZXIpO1xuICB9O1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8ub25DbG9zZWQgPSBmdW5jdGlvbiBvbkNsb3NlZCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VkKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgIGZsaXAgPSBfdGhpcyRwcm9wcy5mbGlwLFxuICAgICAgICBvZmZzZXQgPSBfdGhpcyRwcm9wcy5vZmZzZXQsXG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50cyA9IF90aGlzJHByb3BzLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgICAgcGxhY2VtZW50UHJlZml4ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50UHJlZml4LFxuICAgICAgICBfYXJyb3dDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5hcnJvd0NsYXNzTmFtZSxcbiAgICAgICAgaGlkZUFycm93ID0gX3RoaXMkcHJvcHMuaGlkZUFycm93LFxuICAgICAgICBfcG9wcGVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMucG9wcGVyQ2xhc3NOYW1lLFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIG1vZGlmaWVycyA9IF90aGlzJHByb3BzLm1vZGlmaWVycyxcbiAgICAgICAgc3RyYXRlZ3kgPSBfdGhpcyRwcm9wcy5zdHJhdGVneSxcbiAgICAgICAgYm91bmRhcmllc0VsZW1lbnQgPSBfdGhpcyRwcm9wcy5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICAgICAgZmFkZSA9IF90aGlzJHByb3BzLmZhZGUsXG4gICAgICAgIHRyYW5zaXRpb24gPSBfdGhpcyRwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgICBwbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIGF0dHJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCR6KTtcblxuICAgIHZhciBhcnJvd0NsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYXJyb3cnLCBfYXJyb3dDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICAgIHZhciBwb3BwZXJDbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oX3BvcHBlckNsYXNzTmFtZSwgcGxhY2VtZW50UHJlZml4ID8gcGxhY2VtZW50UHJlZml4ICsgXCItYXV0b1wiIDogJycpLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7XG4gICAgdmFyIG1vZGlmaWVyTmFtZXMgPSBtb2RpZmllcnMubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS5uYW1lO1xuICAgIH0pO1xuICAgIHZhciBiYXNlTW9kaWZpZXJzID0gW3tcbiAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgIGVuYWJsZWQ6IGZsaXAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGJvdW5kYXJ5OiBib3VuZGFyaWVzRWxlbWVudFxuICAgICAgfVxuICAgIH1dLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuICFtb2RpZmllck5hbWVzLmluY2x1ZGVzKG0ubmFtZSk7XG4gICAgfSk7XG4gICAgdmFyIGV4dGVuZGVkTW9kaWZpZXJzID0gW10uY29uY2F0KGJhc2VNb2RpZmllcnMsIG1vZGlmaWVycyk7XG5cbiAgICB2YXIgcG9wcGVyVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRyYW5zaXRpb24pLCB7fSwge1xuICAgICAgYmFzZUNsYXNzOiBmYWRlID8gdHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgIHRpbWVvdXQ6IGZhZGUgPyB0cmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgfSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBwb3BwZXJUcmFuc2l0aW9uLCBhdHRycywge1xuICAgICAgXCJpblwiOiBpc09wZW4sXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgIHRhZzogdGFnXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFBvcHBlci5Qb3BwZXIsIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQ6IHRoaXMudGFyZ2V0Tm9kZSxcbiAgICAgIG1vZGlmaWVyczogZXh0ZW5kZWRNb2RpZmllcnMsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5OiBzdHJhdGVneVxuICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcmVmID0gX3JlZi5yZWYsXG4gICAgICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICAgIHBvcHBlclBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgICAgICAgIGlzUmVmZXJlbmNlSGlkZGVuID0gX3JlZi5pc1JlZmVyZW5jZUhpZGRlbixcbiAgICAgICAgICBhcnJvd1Byb3BzID0gX3JlZi5hcnJvd1Byb3BzLFxuICAgICAgICAgIHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogcG9wcGVyQ2xhc3NOYW1lLFxuICAgICAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBwb3BwZXJQbGFjZW1lbnQsXG4gICAgICAgIFwiZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlblwiOiBpc1JlZmVyZW5jZUhpZGRlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZFxuICAgICAgfSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oe1xuICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgICAgfSkgOiBjaGlsZHJlbiwgIWhpZGVBcnJvdyAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgcmVmOiBhcnJvd1Byb3BzLnJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBhcnJvd0NsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGFycm93UHJvcHMuc3R5bGVcbiAgICAgIH0pKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldFRhcmdldE5vZGUodGhpcy5wcm9wcy50YXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250YWluZXIgPT09ICdpbmxpbmUnID8gdGhpcy5yZW5kZXJDaGlsZHJlbigpIDogUmVhY3RET01fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVBvcnRhbCggLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiB0aGlzLmdldFJlZlxuICAgICAgfSwgdGhpcy5yZW5kZXJDaGlsZHJlbigpKSwgdGhpcy5nZXRDb250YWluZXJOb2RlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQb3BwZXJDb250ZW50O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuUG9wcGVyQ29udGVudC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRjtcblBvcHBlckNvbnRlbnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEY7XG52YXIgUG9wcGVyQ29udGVudCQxID0gUG9wcGVyQ29udGVudDtcblxudmFyIFBvcHBlclRhcmdldEhlbHBlciA9IGZ1bmN0aW9uIFBvcHBlclRhcmdldEhlbHBlcihwcm9wcywgY29udGV4dCkge1xuICBjb250ZXh0LnBvcHBlck1hbmFnZXIuc2V0VGFyZ2V0Tm9kZShnZXRUYXJnZXQocHJvcHMudGFyZ2V0KSk7XG4gIHJldHVybiBudWxsO1xufTtcblxuUG9wcGVyVGFyZ2V0SGVscGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcG9wcGVyTWFuYWdlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QuaXNSZXF1aXJlZFxufTtcblBvcHBlclRhcmdldEhlbHBlci5wcm9wVHlwZXMgPSB7XG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZFxufTtcbnZhciBQb3BwZXJUYXJnZXRIZWxwZXIkMSA9IFBvcHBlclRhcmdldEhlbHBlcjtcblxudmFyIHByb3BUeXBlcyRFID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihQb3BwZXJQbGFjZW1lbnRzKSxcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaGlkZUFycm93OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIERPTUVsZW1lbnRdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgaW5uZXJDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBhcnJvd0NsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHBvcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBhdXRvaGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBwbGFjZW1lbnRQcmVmaXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkZWxheTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAgIHNob3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIGhpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXG4gIH0pLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb2Zmc2V0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIpLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSksXG4gIHRyaWdnZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZsaXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBERUZBVUxUX0RFTEFZUyA9IHtcbiAgc2hvdzogMCxcbiAgaGlkZTogNTBcbn07XG52YXIgZGVmYXVsdFByb3BzJEUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGhpZGVBcnJvdzogZmFsc2UsXG4gIGF1dG9oaWRlOiBmYWxzZSxcbiAgZGVsYXk6IERFRkFVTFRfREVMQVlTLFxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHt9LFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBmYWRlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBpc0luRE9NU3VidHJlZShlbGVtZW50LCBzdWJ0cmVlUm9vdCkge1xuICByZXR1cm4gc3VidHJlZVJvb3QgJiYgKGVsZW1lbnQgPT09IHN1YnRyZWVSb290IHx8IHN1YnRyZWVSb290LmNvbnRhaW5zKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gaXNJbkRPTVN1YnRyZWVzKGVsZW1lbnQsIHN1YnRyZWVSb290cykge1xuICBpZiAoc3VidHJlZVJvb3RzID09PSB2b2lkIDApIHtcbiAgICBzdWJ0cmVlUm9vdHMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlUm9vdHMgJiYgc3VidHJlZVJvb3RzLmxlbmd0aCAmJiBzdWJ0cmVlUm9vdHMuZmlsdGVyKGZ1bmN0aW9uIChzdWJUcmVlUm9vdCkge1xuICAgIHJldHVybiBpc0luRE9NU3VidHJlZShlbGVtZW50LCBzdWJUcmVlUm9vdCk7XG4gIH0pWzBdO1xufVxuXG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRvb2x0aXBQb3BvdmVyV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcFBvcG92ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX3RhcmdldHMgPSBbXTtcbiAgICBfdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuYWRkVGFyZ2V0RXZlbnRzID0gX3RoaXMuYWRkVGFyZ2V0RXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbW92ZVRhcmdldEV2ZW50cyA9IF90aGlzLnJlbW92ZVRhcmdldEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2hvd1dpdGhEZWxheSA9IF90aGlzLnNob3dXaXRoRGVsYXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGlkZVdpdGhEZWxheSA9IF90aGlzLmhpZGVXaXRoRGVsYXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCA9IF90aGlzLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQgPSBfdGhpcy5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zaG93ID0gX3RoaXMuc2hvdy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oaWRlID0gX3RoaXMuaGlkZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkVzY0tleURvd24gPSBfdGhpcy5vbkVzY0tleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICB9O1xuICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVG9vbHRpcFBvcG92ZXJXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyU2hvd1RpbWVvdXQoKTtcbiAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgfTtcblxuICBUb29sdGlwUG9wb3ZlcldyYXBwZXIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5pc09wZW4gJiYgIXN0YXRlLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICAgIH07XG4gICAgfSBlbHNlIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5vbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50ID0gZnVuY3Rpb24gb25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgPiAtMSAmJiAhdGhpcy5wcm9wcy5hdXRvaGlkZSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4gJiYgIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudCA9IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgPiAtMSAmJiAhdGhpcy5wcm9wcy5hdXRvaGlkZSkge1xuICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJTaG93VGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICAgIHRoaXMuX2hpZGVUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmhpZGUuYmluZCh0aGlzLCBlKSwgdGhpcy5nZXREZWxheSgnaGlkZScpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uRXNjS2V5RG93biA9IGZ1bmN0aW9uIG9uRXNjS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5oaWRlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0UmVmID0gZnVuY3Rpb24gZ2V0UmVmKHJlZikge1xuICAgIHZhciBpbm5lclJlZiA9IHRoaXMucHJvcHMuaW5uZXJSZWY7XG5cbiAgICBpZiAoaW5uZXJSZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5uZXJSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaW5uZXJSZWYocmVmKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlubmVyUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpbm5lclJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BvcG92ZXIgPSByZWY7XG4gIH07XG5cbiAgX3Byb3RvLmdldERlbGF5ID0gZnVuY3Rpb24gZ2V0RGVsYXkoa2V5KSB7XG4gICAgdmFyIGRlbGF5ID0gdGhpcy5wcm9wcy5kZWxheTtcblxuICAgIGlmICh0eXBlb2YgZGVsYXkgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gaXNOYU4oZGVsYXlba2V5XSkgPyBERUZBVUxUX0RFTEFZU1trZXldIDogZGVsYXlba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRUYXJnZXQgPSBmdW5jdGlvbiBnZXRDdXJyZW50VGFyZ2V0KHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm4gbnVsbDtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuX3RhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHJldHVybiB0aGlzLl90YXJnZXRzW2luZGV4XTtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50VGFyZ2V0KHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgfTtcblxuICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xlYXJTaG93VGltZW91dCgpO1xuICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IGUgPyBlLmN1cnJlbnRUYXJnZXQgfHwgdGhpcy5nZXRDdXJyZW50VGFyZ2V0KGUudGFyZ2V0KSA6IG51bGw7XG5cbiAgICAgIGlmIChlICYmIGUuY29tcG9zZWRQYXRoICYmIHR5cGVvZiBlLmNvbXBvc2VkUGF0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcGF0aCA9IGUuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSBwYXRoICYmIHBhdGhbMF0gfHwgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zaG93V2l0aERlbGF5ID0gZnVuY3Rpb24gc2hvd1dpdGhEZWxheShlKSB7XG4gICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93VGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5zaG93LmJpbmQodGhpcywgZSksIHRoaXMuZ2V0RGVsYXkoJ3Nob3cnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhpZGVXaXRoRGVsYXkgPSBmdW5jdGlvbiBoaWRlV2l0aERlbGF5KGUpIHtcbiAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXQpIHtcbiAgICAgIHRoaXMuY2xlYXJTaG93VGltZW91dCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2hpZGVUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmhpZGUuYmluZCh0aGlzLCBlKSwgdGhpcy5nZXREZWxheSgnaGlkZScpKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJTaG93VGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyU2hvd1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0KTtcbiAgICB0aGlzLl9zaG93VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJIaWRlVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFySGlkZVRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0KTtcbiAgICB0aGlzLl9oaWRlVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgIHZhciB0cmlnZ2VycyA9IHRoaXMucHJvcHMudHJpZ2dlci5zcGxpdCgnICcpO1xuXG4gICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2xlZ2FjeScpID4gLTEgJiYgKHRoaXMucHJvcHMuaXNPcGVuIHx8IGlzSW5ET01TdWJ0cmVlcyhlLnRhcmdldCwgdGhpcy5fdGFyZ2V0cykpKSB7XG4gICAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhaXNJbkRPTVN1YnRyZWUoZS50YXJnZXQsIHRoaXMuX3BvcG92ZXIpKSB7XG4gICAgICAgIHRoaXMuaGlkZVdpdGhEZWxheShlKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2hvd1dpdGhEZWxheShlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2NsaWNrJykgPiAtMSAmJiBpc0luRE9NU3VidHJlZXMoZS50YXJnZXQsIHRoaXMuX3RhcmdldHMpKSB7XG4gICAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5zaG93V2l0aERlbGF5KGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlV2l0aERlbGF5KGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkRXZlbnRPblRhcmdldHMgPSBmdW5jdGlvbiBhZGRFdmVudE9uVGFyZ2V0cyh0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSkge1xuICAgIHRoaXMuX3RhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUV2ZW50T25UYXJnZXRzID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRPblRhcmdldHModHlwZSwgaGFuZGxlciwgaXNCdWJibGUpIHtcbiAgICB0aGlzLl90YXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgaXNCdWJibGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5hZGRUYXJnZXRFdmVudHMgPSBmdW5jdGlvbiBhZGRUYXJnZXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlcikge1xuICAgICAgdmFyIHRyaWdnZXJzID0gdGhpcy5wcm9wcy50cmlnZ2VyLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdtYW51YWwnKSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2NsaWNrJykgPiAtMSB8fCB0cmlnZ2Vycy5pbmRleE9mKCdsZWdhY3knKSA+IC0xKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3RhcmdldHMgJiYgdGhpcy5fdGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignaG92ZXInKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdtb3VzZW92ZXInLCB0aGlzLnNob3dXaXRoRGVsYXksIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnbW91c2VvdXQnLCB0aGlzLmhpZGVXaXRoRGVsYXksIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdmb2N1cycpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ2ZvY3VzaW4nLCB0aGlzLnNob3csIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnZm9jdXNvdXQnLCB0aGlzLmhpZGUsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ2tleWRvd24nLCB0aGlzLm9uRXNjS2V5RG93biwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZVRhcmdldEV2ZW50cyA9IGZ1bmN0aW9uIHJlbW92ZVRhcmdldEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fdGFyZ2V0cykge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnbW91c2VvdmVyJywgdGhpcy5zaG93V2l0aERlbGF5LCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ21vdXNlb3V0JywgdGhpcy5oaWRlV2l0aERlbGF5LCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ2tleWRvd24nLCB0aGlzLm9uRXNjS2V5RG93biwgdHJ1ZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdmb2N1c2luJywgdGhpcy5zaG93LCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ2ZvY3Vzb3V0JywgdGhpcy5oaWRlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVRhcmdldCA9IGZ1bmN0aW9uIHVwZGF0ZVRhcmdldCgpIHtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gZ2V0VGFyZ2V0KHRoaXMucHJvcHMudGFyZ2V0LCB0cnVlKTtcblxuICAgIGlmIChuZXdUYXJnZXQgIT09IHRoaXMuX3RhcmdldHMpIHtcbiAgICAgIHRoaXMucmVtb3ZlVGFyZ2V0RXZlbnRzKCk7XG4gICAgICB0aGlzLl90YXJnZXRzID0gbmV3VGFyZ2V0ID8gQXJyYXkuZnJvbShuZXdUYXJnZXQpIDogW107XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCB8fCB0aGlzLl90YXJnZXRzWzBdO1xuICAgICAgdGhpcy5hZGRUYXJnZXRFdmVudHMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50IHx8IHRoaXMuX3RhcmdldHNbMF07XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGlubmVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuaW5uZXJDbGFzc05hbWUsXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgaGlkZUFycm93ID0gX3RoaXMkcHJvcHMuaGlkZUFycm93LFxuICAgICAgICBib3VuZGFyaWVzRWxlbWVudCA9IF90aGlzJHByb3BzLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgICBwbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudFByZWZpeCA9IF90aGlzJHByb3BzLnBsYWNlbWVudFByZWZpeCxcbiAgICAgICAgYXJyb3dDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5hcnJvd0NsYXNzTmFtZSxcbiAgICAgICAgcG9wcGVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMucG9wcGVyQ2xhc3NOYW1lLFxuICAgICAgICBjb250YWluZXIgPSBfdGhpcyRwcm9wcy5jb250YWluZXIsXG4gICAgICAgIG1vZGlmaWVycyA9IF90aGlzJHByb3BzLm1vZGlmaWVycyxcbiAgICAgICAgc3RyYXRlZ3kgPSBfdGhpcyRwcm9wcy5zdHJhdGVneSxcbiAgICAgICAgb2Zmc2V0ID0gX3RoaXMkcHJvcHMub2Zmc2V0LFxuICAgICAgICBmYWRlID0gX3RoaXMkcHJvcHMuZmFkZSxcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcyRFKSk7XG4gICAgdmFyIHBvcHBlckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMocG9wcGVyQ2xhc3NOYW1lLCBjc3NNb2R1bGUpO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGlubmVyQ2xhc3NOYW1lLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9wcGVyQ29udGVudCQxLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgaXNPcGVuOiBpc09wZW4sXG4gICAgICBoaWRlQXJyb3c6IGhpZGVBcnJvdyxcbiAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiBib3VuZGFyaWVzRWxlbWVudCxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50UHJlZml4OiBwbGFjZW1lbnRQcmVmaXgsXG4gICAgICBhcnJvd0NsYXNzTmFtZTogYXJyb3dDbGFzc05hbWUsXG4gICAgICBwb3BwZXJDbGFzc05hbWU6IHBvcHBlckNsYXNzZXMsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgIGZhZGU6IGZhZGUsXG4gICAgICBmbGlwOiBmbGlwXG4gICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB1cGRhdGUgPSBfcmVmLnVwZGF0ZTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgcmVmOiBfdGhpczIuZ2V0UmVmLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHJvbGU6IFwidG9vbHRpcFwiLFxuICAgICAgICBvbk1vdXNlT3ZlcjogX3RoaXMyLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogX3RoaXMyLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50LFxuICAgICAgICBvbktleURvd246IF90aGlzMi5vbkVzY0tleURvd25cbiAgICAgIH0pLCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICB9KSA6IGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVG9vbHRpcFBvcG92ZXJXcmFwcGVyO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuVG9vbHRpcFBvcG92ZXJXcmFwcGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRFO1xuVG9vbHRpcFBvcG92ZXJXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRFO1xudmFyIFRvb2x0aXBQb3BvdmVyV3JhcHBlciQxID0gVG9vbHRpcFBvcG92ZXJXcmFwcGVyO1xuXG52YXIgZGVmYXVsdFByb3BzJEQgPSB7XG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgcGxhY2VtZW50UHJlZml4OiAnYnMtcG9wb3ZlcicsXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIG9mZnNldDogWzAsIDhdXG59O1xuXG52YXIgUG9wb3ZlciA9IGZ1bmN0aW9uIFBvcG92ZXIocHJvcHMpIHtcbiAgdmFyIHBvcHBlckNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncG9wb3ZlcicsICdzaG93JywgcHJvcHMucG9wcGVyQ2xhc3NOYW1lKTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncG9wb3Zlci1pbm5lcicsIHByb3BzLmlubmVyQ2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwUG9wb3ZlcldyYXBwZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYXJyb3dDbGFzc05hbWU6IFwicG9wb3Zlci1hcnJvd1wiLFxuICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICBpbm5lckNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRFO1xuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRDtcbnZhciBQb3BvdmVyJDEgPSBQb3BvdmVyO1xuXG52YXIgb21pdEtleXMkNCA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZFBvcG92ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkUG9wb3ZlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkUG9wb3Zlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRQb3BvdmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkNCkpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkUG9wb3Zlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblVuY29udHJvbGxlZFBvcG92ZXIucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59LCBQb3BvdmVyJDEucHJvcFR5cGVzKTtcblxudmFyIF9leGNsdWRlZCR5ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyREID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRDID0ge1xuICB0YWc6ICdoMydcbn07XG5cbnZhciBQb3BvdmVySGVhZGVyID0gZnVuY3Rpb24gUG9wb3ZlckhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkeSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncG9wb3Zlci1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cblBvcG92ZXJIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEQ7XG5Qb3BvdmVySGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRDO1xudmFyIFBvcG92ZXJIZWFkZXIkMSA9IFBvcG92ZXJIZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkeCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkQyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkQiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIFBvcG92ZXJCb2R5ID0gZnVuY3Rpb24gUG9wb3ZlckJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BvcG92ZXItYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuUG9wb3ZlckJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJEM7XG5Qb3BvdmVyQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkQjtcbnZhciBQb3BvdmVyQm9keSQxID0gUG9wb3ZlckJvZHk7XG5cbnZhciBfZXhjbHVkZWQkdyA9IFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiYmFyQ2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidmFsdWVcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJhbmltYXRlZFwiLCBcInN0cmlwZWRcIiwgXCJjb2xvclwiLCBcImJhclwiLCBcIm11bHRpXCIsIFwidGFnXCIsIFwic3R5bGVcIiwgXCJiYXJTdHlsZVwiLCBcImJhckFyaWFWYWx1ZVRleHRcIiwgXCJiYXJBcmlhTGFiZWxsZWRCeVwiXTtcbnZhciBwcm9wVHlwZXMkQiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgYmFyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG11bHRpOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHZhbHVlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIG1pbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtYXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgYW5pbWF0ZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3RyaXBlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHN0eWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgYmFyU3R5bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBiYXJBcmlhVmFsdWVUZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyQXJpYUxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyRBID0ge1xuICB0YWc6ICdkaXYnLFxuICB2YWx1ZTogMCxcbiAgbWluOiAwLFxuICBtYXg6IDEwMCxcbiAgc3R5bGU6IHt9LFxuICBiYXJTdHlsZToge31cbn07XG5cbnZhciBQcm9ncmVzcyA9IGZ1bmN0aW9uIFByb2dyZXNzKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgYmFyQ2xhc3NOYW1lID0gcHJvcHMuYmFyQ2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG1pbiA9IHByb3BzLm1pbixcbiAgICAgIG1heCA9IHByb3BzLm1heCxcbiAgICAgIGFuaW1hdGVkID0gcHJvcHMuYW5pbWF0ZWQsXG4gICAgICBzdHJpcGVkID0gcHJvcHMuc3RyaXBlZCxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBiYXIgPSBwcm9wcy5iYXIsXG4gICAgICBtdWx0aSA9IHByb3BzLm11bHRpLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGJhclN0eWxlID0gcHJvcHMuYmFyU3R5bGUsXG4gICAgICBiYXJBcmlhVmFsdWVUZXh0ID0gcHJvcHMuYmFyQXJpYVZhbHVlVGV4dCxcbiAgICAgIGJhckFyaWFMYWJlbGxlZEJ5ID0gcHJvcHMuYmFyQXJpYUxhYmVsbGVkQnksXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR3KTtcblxuICB2YXIgcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKSAvIHRvTnVtYmVyKG1heCkgKiAxMDA7XG4gIHZhciBwcm9ncmVzc0NsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncHJvZ3Jlc3MnKSwgY3NzTW9kdWxlKTtcbiAgdmFyIHByb2dyZXNzQmFyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncHJvZ3Jlc3MtYmFyJywgYmFyID8gY2xhc3NOYW1lIHx8IGJhckNsYXNzTmFtZSA6IGJhckNsYXNzTmFtZSwgYW5pbWF0ZWQgPyAncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyA6IG51bGwsIGNvbG9yID8gXCJiZy1cIiArIGNvbG9yIDogbnVsbCwgc3RyaXBlZCB8fCBhbmltYXRlZCA/ICdwcm9ncmVzcy1iYXItc3RyaXBlZCcgOiBudWxsKSwgY3NzTW9kdWxlKTtcbiAgdmFyIHByb2dyZXNzQmFyUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBwcm9ncmVzc0JhckNsYXNzZXMsXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBiYXIgPyBzdHlsZSA6IHt9KSwgYmFyU3R5bGUpLCB7fSwge1xuICAgICAgd2lkdGg6IHBlcmNlbnQgKyBcIiVcIlxuICAgIH0pLFxuICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgJ2FyaWEtdmFsdWVub3cnOiB2YWx1ZSxcbiAgICAnYXJpYS12YWx1ZW1pbic6IG1pbixcbiAgICAnYXJpYS12YWx1ZW1heCc6IG1heCxcbiAgICAnYXJpYS12YWx1ZXRleHQnOiBiYXJBcmlhVmFsdWVUZXh0LFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiBiYXJBcmlhTGFiZWxsZWRCeSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfTtcblxuICBpZiAoYmFyKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBwcm9ncmVzc0JhclByb3BzKSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgY2xhc3NOYW1lOiBwcm9ncmVzc0NsYXNzZXNcbiAgfSksIG11bHRpID8gY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgcHJvZ3Jlc3NCYXJQcm9wcykpO1xufTtcblxuUHJvZ3Jlc3MucHJvcFR5cGVzID0gcHJvcFR5cGVzJEI7XG5Qcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkQTtcbnZhciBQcm9ncmVzcyQxID0gUHJvZ3Jlc3M7XG5cbnZhciBwcm9wVHlwZXMkQSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBub2RlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufTtcblxudmFyIFBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3J0YWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcnRhbCgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9ydGFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0Tm9kZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmRlZmF1bHROb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHROb2RlID0gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICghY2FuVXNlRE9NKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMubm9kZSAmJiAhdGhpcy5kZWZhdWx0Tm9kZSkge1xuICAgICAgdGhpcy5kZWZhdWx0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlZmF1bHROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RET01fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnByb3BzLm5vZGUgfHwgdGhpcy5kZWZhdWx0Tm9kZSk7XG4gIH07XG5cbiAgcmV0dXJuIFBvcnRhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBvcnRhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQTtcbnZhciBQb3J0YWwkMSA9IFBvcnRhbDtcblxuZnVuY3Rpb24gbm9vcCQxKCkge31cblxudmFyIEZhZGVQcm9wVHlwZXMkMSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpO1xudmFyIHByb3BUeXBlcyR6ID0ge1xuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNlbnRlcmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZ1bGxzY3JlZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydzbScsICdtZCcsICdsZycsICd4bCddKV0pLFxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAga2V5Ym9hcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYWNrZHJvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXRpYyddKV0pLFxuICBvbkVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbk9wZW5lZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkNsb3NlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB3cmFwQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBleHRlcm5hbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHpJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBiYWNrZHJvcFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMkMSxcbiAgbW9kYWxUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzJDEsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgdW5tb3VudE9uQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIHRyYXBGb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIHByb3BzVG9PbWl0JDEgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMkeik7XG52YXIgZGVmYXVsdFByb3BzJHogPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgY2VudGVyZWQ6IGZhbHNlLFxuICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgcm9sZTogJ2RpYWxvZycsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgekluZGV4OiAxMDUwLFxuICBmYWRlOiB0cnVlLFxuICBvbk9wZW5lZDogbm9vcCQxLFxuICBvbkNsb3NlZDogbm9vcCQxLFxuICBtb2RhbFRyYW5zaXRpb246IHtcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuTW9kYWxcbiAgfSxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiB7XG4gICAgbW91bnRPbkVudGVyOiB0cnVlLFxuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5GYWRlIC8vIHVzZXMgc3RhbmRhcmQgZmFkZSB0cmFuc2l0aW9uXG5cbiAgfSxcbiAgdW5tb3VudE9uQ2xvc2U6IHRydWUsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIHRyYXBGb2N1czogZmFsc2Vcbn07XG5cbnZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIF90aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuID0gX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA9IF90aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFc2NhcGUgPSBfdGhpcy5oYW5kbGVFc2NhcGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24gPSBfdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUYWIgPSBfdGhpcy5oYW5kbGVUYWIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25PcGVuZWQgPSBfdGhpcy5vbk9wZW5lZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNsb3NlZCA9IF90aGlzLm9uQ2xvc2VkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSA9IF90aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRyYXBGb2N1cyA9IF90aGlzLnRyYXBGb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBzaG93U3RhdGljQmFja2Ryb3BBbmltYXRpb246IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTW9kYWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgICBvbkVudGVyID0gX3RoaXMkcHJvcHMub25FbnRlcjtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbkVudGVyKSB7XG4gICAgICBvbkVudGVyKCk7XG4gICAgfSAvLyB0cmFwcyBmb2N1cyBpbnNpZGUgdGhlIE1vZGFsLCBldmVuIGlmIHRoZSBicm93c2VyIGFkZHJlc3MgYmFyIGlzIGZvY3VzZWRcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnRyYXBGb2N1cywgdHJ1ZSk7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH0pOyAvLyBsZXQgcmVuZGVyKCkgcmVuZGVycyBNb2RhbCBEaWFsb2cgZmlyc3RcblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gbm93IE1vZGFsIERpYWxvZyBpcyByZW5kZXJlZCBhbmQgd2UgY2FuIHJlZmVyIHRoaXMuX2VsZW1lbnQgYW5kIHRoaXMuX2RpYWxvZ1xuXG5cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXByZXZTdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiBwcmV2UHJvcHMuekluZGV4ICE9PSB0aGlzLnByb3BzLnpJbmRleCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhpdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8udHJhcEZvY3VzID0gZnVuY3Rpb24gdHJhcEZvY3VzKGV2KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRyYXBGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkgLy9lbGVtZW50IGlzIG5vdCBhdHRhY2hlZFxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9kaWFsb2cgJiYgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUgPT09IGV2LnRhcmdldCkgLy8gaW5pdGlhbCBmb2N1cyB3aGVuIHRoZSBNb2RhbCBpcyBvcGVuZWRcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RhbEluZGV4IDwgTW9kYWwub3BlbkNvdW50IC0gMSkgLy8gbGFzdCBvcGVuZWQgbW9kYWxcbiAgICAgIHJldHVybjtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBmb2N1cyBpcyBhbHJlYWR5IGluc2lkZSB0aGUgTW9kYWxcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gZXYudGFyZ2V0KSByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIG90aGVyd2lzZSBmb2N1cyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIE1vZGFsXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25PcGVuZWQgPSBmdW5jdGlvbiBvbk9wZW5lZChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHRoaXMucHJvcHMub25PcGVuZWQoKTtcbiAgICAodGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24ub25FbnRlcmVkIHx8IG5vb3AkMSkobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKG5vZGUpIHtcbiAgICB2YXIgdW5tb3VudE9uQ2xvc2UgPSB0aGlzLnByb3BzLnVubW91bnRPbkNsb3NlOyAvLyBzbyBhbGwgbWV0aG9kcyBnZXQgY2FsbGVkIGJlZm9yZSBpdCBpcyB1bm1vdW50ZWRcblxuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICAodGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24ub25FeGl0ZWQgfHwgbm9vcCQxKShub2RlKTtcblxuICAgIGlmICh1bm1vdW50T25DbG9zZSkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZGlhbG9nICYmIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlICYmIHR5cGVvZiB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZS5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzYWJsZUNoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVFbGVtZW50cy5qb2luKCcsICcpKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNlZENoaWxkID0gZnVuY3Rpb24gZ2V0Rm9jdXNlZENoaWxkKCkge1xuICAgIHZhciBjdXJyZW50Rm9jdXM7XG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBmb2N1c2FibGVDaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEZvY3VzO1xuICB9IC8vIG5vdCBtb3VzZVVwIGJlY2F1c2Ugc2Nyb2xsYmFyIGZpcmVzIGl0LCBzaG91bGRuJ3QgY2xvc2Ugd2hlbiB1c2VyIHNjcm9sbHNcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUgOiBudWxsO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgZS50YXJnZXQgPT09IGJhY2tkcm9wICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnByb3BzLmJhY2tkcm9wICE9PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGlmIChiYWNrZHJvcCAmJiBlLnRhcmdldCA9PT0gYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUYWIgPSBmdW5jdGlvbiBoYW5kbGVUYWIoZSkge1xuICAgIGlmIChlLndoaWNoICE9PSA5KSByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kYWxJbmRleCA8IE1vZGFsLm9wZW5Db3VudCAtIDEpIHJldHVybjsgLy8gbGFzdCBvcGVuZWQgbW9kYWxcblxuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcbiAgICB2YXIgdG90YWxGb2N1c2FibGUgPSBmb2N1c2FibGVDaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKHRvdGFsRm9jdXNhYmxlID09PSAwKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnRGb2N1cyA9IHRoaXMuZ2V0Rm9jdXNlZENoaWxkKCk7XG4gICAgdmFyIGZvY3VzZWRJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsRm9jdXNhYmxlOyBpICs9IDEpIHtcbiAgICAgIGlmIChmb2N1c2FibGVDaGlsZHJlbltpXSA9PT0gY3VycmVudEZvY3VzKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bdG90YWxGb2N1c2FibGUgLSAxXS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSB0b3RhbEZvY3VzYWJsZSAtIDEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLl9tb3VzZURvd25FbGVtZW50ID0gZS50YXJnZXQ7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUVzY2FwZSA9IGZ1bmN0aW9uIGhhbmRsZUVzY2FwZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93U3RhdGljQmFja2Ryb3BBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lciA9IGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG5cbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCk7XG4gICAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcigpO1xuXG4gICAgaWYgKE1vZGFsLm9wZW5Db3VudCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSwgbWFwVG9Dc3NNb2R1bGVzKCdtb2RhbC1vcGVuJywgdGhpcy5wcm9wcy5jc3NNb2R1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGFsSW5kZXggPSBNb2RhbC5vcGVuQ291bnQ7XG4gICAgTW9kYWwub3BlbkNvdW50ICs9IDE7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgfTtcblxuICBfcHJvdG8ubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gZnVuY3Rpb24gbWFuYWdlRm9jdXNBZnRlckNsb3NlKCkge1xuICAgIGlmICh0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCkge1xuICAgICAgdmFyIHJldHVybkZvY3VzQWZ0ZXJDbG9zZSA9IHRoaXMucHJvcHMucmV0dXJuRm9jdXNBZnRlckNsb3NlO1xuICAgICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50LmZvY3VzICYmIHJldHVybkZvY3VzQWZ0ZXJDbG9zZSkgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKE1vZGFsLm9wZW5Db3VudCA8PSAxKSB7XG4gICAgICB2YXIgbW9kYWxPcGVuQ2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKCdtb2RhbC1vcGVuJywgdGhpcy5wcm9wcy5jc3NNb2R1bGUpOyAvLyBVc2UgcmVnZXggdG8gcHJldmVudCBtYXRjaGluZyBgbW9kYWwtb3BlbmAgYXMgcGFydCBvZiBhIGRpZmZlcmVudCBjbGFzcywgZS5nLiBgbXktbW9kYWwtb3BlbmVkYFxuXG4gICAgICB2YXIgbW9kYWxPcGVuQ2xhc3NOYW1lUmVnZXggPSBuZXcgUmVnRXhwKFwiKF58IClcIiArIG1vZGFsT3BlbkNsYXNzTmFtZSArIFwiKCB8JClcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UobW9kYWxPcGVuQ2xhc3NOYW1lUmVnZXgsICcgJykudHJpbSgpO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlKCk7XG4gICAgTW9kYWwub3BlbkNvdW50ID0gTWF0aC5tYXgoMCwgTW9kYWwub3BlbkNvdW50IC0gMSk7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgodGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlck1vZGFsRGlhbG9nID0gZnVuY3Rpb24gcmVuZGVyTW9kYWxEaWFsb2coKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzLFxuICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIHByb3BzVG9PbWl0JDEpO1xuICAgIHZhciBkaWFsb2dCYXNlQ2xhc3MgPSAnbW9kYWwtZGlhbG9nJztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkaWFsb2dCYXNlQ2xhc3MsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbXCJtb2RhbC1cIiArIHRoaXMucHJvcHMuc2l6ZV0gPSB0aGlzLnByb3BzLnNpemUsIF9jbGFzc05hbWVzW2RpYWxvZ0Jhc2VDbGFzcyArIFwiLWNlbnRlcmVkXCJdID0gdGhpcy5wcm9wcy5jZW50ZXJlZCwgX2NsYXNzTmFtZXNbZGlhbG9nQmFzZUNsYXNzICsgXCItc2Nyb2xsYWJsZVwiXSA9IHRoaXMucHJvcHMuc2Nyb2xsYWJsZSwgX2NsYXNzTmFtZXNbJ21vZGFsLWZ1bGxzY3JlZW4nXSA9IHRoaXMucHJvcHMuZnVsbHNjcmVlbiA9PT0gdHJ1ZSwgX2NsYXNzTmFtZXNbXCJtb2RhbC1mdWxsc2NyZWVuLVwiICsgdGhpcy5wcm9wcy5mdWxsc2NyZWVuICsgXCItZG93blwiXSA9IHR5cGVvZiB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gPT09ICdzdHJpbmcnLCBfY2xhc3NOYW1lcykpLCB0aGlzLnByb3BzLmNzc01vZHVsZSksXG4gICAgICByb2xlOiBcImRvY3VtZW50XCIsXG4gICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgIF90aGlzMy5fZGlhbG9nID0gYztcbiAgICAgIH1cbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbC1jb250ZW50JywgdGhpcy5wcm9wcy5jb250ZW50Q2xhc3NOYW1lKSwgdGhpcy5wcm9wcy5jc3NNb2R1bGUpXG4gICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTtcblxuICAgIGlmICghIXRoaXMuX2VsZW1lbnQgJiYgKHRoaXMuc3RhdGUuaXNPcGVuIHx8ICF1bm1vdW50T25DbG9zZSkpIHtcbiAgICAgIHZhciBpc01vZGFsSGlkZGVuID0gISF0aGlzLl9lbGVtZW50ICYmICF0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdW5tb3VudE9uQ2xvc2U7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc01vZGFsSGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIud3JhcENsYXNzTmFtZSxcbiAgICAgICAgICBtb2RhbENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5tb2RhbENsYXNzTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5iYWNrZHJvcENsYXNzTmFtZSxcbiAgICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczIuY3NzTW9kdWxlLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzMi5pc09wZW4sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfdGhpcyRwcm9wczIuYmFja2Ryb3AsXG4gICAgICAgICAgcm9sZSA9IF90aGlzJHByb3BzMi5yb2xlLFxuICAgICAgICAgIGxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wczIubGFiZWxsZWRCeSxcbiAgICAgICAgICBleHRlcm5hbCA9IF90aGlzJHByb3BzMi5leHRlcm5hbCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzMi5pbm5lclJlZjtcbiAgICAgIHZhciBtb2RhbEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24sXG4gICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlRXNjYXBlLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlVGFiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSxcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnksXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICB9O1xuICAgICAgdmFyIGhhc1RyYW5zaXRpb24gPSB0aGlzLnByb3BzLmZhZGU7XG5cbiAgICAgIHZhciBtb2RhbFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgYmFja2Ryb3BUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24pLCB7fSwge1xuICAgICAgICBiYXNlQ2xhc3M6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIEJhY2tkcm9wID0gYmFja2Ryb3AgJiYgKGhhc1RyYW5zaXRpb24gPyAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGJhY2tkcm9wVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbiAmJiAhIWJhY2tkcm9wLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsLWJhY2tkcm9wJywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpXG4gICAgICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwtYmFja2Ryb3AnLCAnc2hvdycsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3J0YWwkMSwge1xuICAgICAgICBub2RlOiB0aGlzLl9lbGVtZW50XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyh3cmFwQ2xhc3NOYW1lKVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBtb2RhbEF0dHJpYnV0ZXMsIG1vZGFsVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgICAgb25FbnRlcmVkOiB0aGlzLm9uT3BlbmVkLFxuICAgICAgICBvbkV4aXRlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbCcsIG1vZGFsQ2xhc3NOYW1lLCB0aGlzLnN0YXRlLnNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiAmJiAnbW9kYWwtc3RhdGljJyksIGNzc01vZHVsZSksXG4gICAgICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICAgICAgfSksIGV4dGVybmFsLCB0aGlzLnJlbmRlck1vZGFsRGlhbG9nKCkpLCBCYWNrZHJvcCkpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgdGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTW9kYWw7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkejtcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR6O1xuTW9kYWwub3BlbkNvdW50ID0gMDtcbnZhciBNb2RhbCQxID0gTW9kYWw7XG5cbnZhciBfZXhjbHVkZWQkdiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidG9nZ2xlXCIsIFwidGFnXCIsIFwid3JhcFRhZ1wiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY2xvc2VcIl07XG52YXIgcHJvcFR5cGVzJHkgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHdyYXBUYWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHkgPSB7XG4gIHRhZzogJ2g1JyxcbiAgd3JhcFRhZzogJ2RpdicsXG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnXG59O1xuXG52YXIgTW9kYWxIZWFkZXIgPSBmdW5jdGlvbiBNb2RhbEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtaGVhZGVyJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKCFjbG9zZSAmJiB0b2dnbGUpIHtcbiAgICBjbG9zZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ2J0bi1jbG9zZScsIGNzc01vZHVsZSksXG4gICAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoV3JhcFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnbW9kYWwtdGl0bGUnLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufTtcblxuTW9kYWxIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJHk7XG5Nb2RhbEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkeTtcbnZhciBNb2RhbEhlYWRlciQxID0gTW9kYWxIZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkdSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkeCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkeCA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIE1vZGFsQm9keSA9IGZ1bmN0aW9uIE1vZGFsQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTW9kYWxCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyR4O1xuTW9kYWxCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR4O1xudmFyIE1vZGFsQm9keSQxID0gTW9kYWxCb2R5O1xuXG52YXIgX2V4Y2x1ZGVkJHQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHcgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHcgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBNb2RhbEZvb3RlciA9IGZ1bmN0aW9uIE1vZGFsRm9vdGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCR0KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdtb2RhbC1mb290ZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk1vZGFsRm9vdGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyR3O1xuTW9kYWxGb290ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHc7XG52YXIgTW9kYWxGb290ZXIkMSA9IE1vZGFsRm9vdGVyO1xuXG52YXIgZGVmYXVsdFByb3BzJHYgPSB7XG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy10b29sdGlwJyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xufTtcblxudmFyIFRvb2x0aXAgPSBmdW5jdGlvbiBUb29sdGlwKHByb3BzKSB7XG4gIHZhciBwb3BwZXJDbGFzc2VzID0gY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3Rvb2x0aXAnLCAnc2hvdycsIHByb3BzLnBvcHBlckNsYXNzTmFtZSk7XG4gIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3Rvb2x0aXAtaW5uZXInLCBwcm9wcy5pbm5lckNsYXNzTmFtZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVG9vbHRpcFBvcG92ZXJXcmFwcGVyJDEsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGFycm93Q2xhc3NOYW1lOiBcInRvb2x0aXAtYXJyb3dcIixcbiAgICBwb3BwZXJDbGFzc05hbWU6IHBvcHBlckNsYXNzZXMsXG4gICAgaW5uZXJDbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRTtcblRvb2x0aXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHY7XG52YXIgVG9vbHRpcCQxID0gVG9vbHRpcDtcblxudmFyIF9leGNsdWRlZCRzID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwic2l6ZVwiLCBcImJvcmRlcmVkXCIsIFwiYm9yZGVybGVzc1wiLCBcInN0cmlwZWRcIiwgXCJkYXJrXCIsIFwiaG92ZXJcIiwgXCJyZXNwb25zaXZlXCIsIFwidGFnXCIsIFwicmVzcG9uc2l2ZVRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyR2ID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYm9yZGVybGVzczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHJpcGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRhcms6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaG92ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcmVzcG9uc2l2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgcmVzcG9uc2l2ZVRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3RdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkdSA9IHtcbiAgdGFnOiAndGFibGUnLFxuICByZXNwb25zaXZlVGFnOiAnZGl2J1xufTtcblxudmFyIFRhYmxlID0gZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgYm9yZGVyZWQgPSBwcm9wcy5ib3JkZXJlZCxcbiAgICAgIGJvcmRlcmxlc3MgPSBwcm9wcy5ib3JkZXJsZXNzLFxuICAgICAgc3RyaXBlZCA9IHByb3BzLnN0cmlwZWQsXG4gICAgICBkYXJrID0gcHJvcHMuZGFyayxcbiAgICAgIGhvdmVyID0gcHJvcHMuaG92ZXIsXG4gICAgICByZXNwb25zaXZlID0gcHJvcHMucmVzcG9uc2l2ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIFJlc3BvbnNpdmVUYWcgPSBwcm9wcy5yZXNwb25zaXZlVGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3RhYmxlJywgc2l6ZSA/ICd0YWJsZS0nICsgc2l6ZSA6IGZhbHNlLCBib3JkZXJlZCA/ICd0YWJsZS1ib3JkZXJlZCcgOiBmYWxzZSwgYm9yZGVybGVzcyA/ICd0YWJsZS1ib3JkZXJsZXNzJyA6IGZhbHNlLCBzdHJpcGVkID8gJ3RhYmxlLXN0cmlwZWQnIDogZmFsc2UsIGRhcmsgPyAndGFibGUtZGFyaycgOiBmYWxzZSwgaG92ZXIgPyAndGFibGUtaG92ZXInIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICB2YXIgdGFibGUgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcblxuICBpZiAocmVzcG9uc2l2ZSkge1xuICAgIHZhciByZXNwb25zaXZlQ2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKHJlc3BvbnNpdmUgPT09IHRydWUgPyAndGFibGUtcmVzcG9uc2l2ZScgOiBcInRhYmxlLXJlc3BvbnNpdmUtXCIgKyByZXNwb25zaXZlLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUmVzcG9uc2l2ZVRhZywge1xuICAgICAgY2xhc3NOYW1lOiByZXNwb25zaXZlQ2xhc3NOYW1lXG4gICAgfSwgdGFibGUpO1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufTtcblxuVGFibGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJHY7XG5UYWJsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdTtcbnZhciBUYWJsZSQxID0gVGFibGU7XG5cbnZhciBfZXhjbHVkZWQkciA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImZsdXNoXCIsIFwiaG9yaXpvbnRhbFwiLCBcIm51bWJlcmVkXCJdO1xudmFyIHByb3BUeXBlcyR1ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBmbHVzaDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBudW1iZXJlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyR0ID0ge1xuICB0YWc6ICd1bCcsXG4gIGhvcml6b250YWw6IGZhbHNlLFxuICBudW1iZXJlZDogZmFsc2Vcbn07XG5cbnZhciBnZXRIb3Jpem9udGFsQ2xhc3MgPSBmdW5jdGlvbiBnZXRIb3Jpem9udGFsQ2xhc3MoaG9yaXpvbnRhbCkge1xuICBpZiAoaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSB8fCBob3Jpem9udGFsID09PSBcInhzXCIpIHtcbiAgICByZXR1cm4gXCJsaXN0LWdyb3VwLWhvcml6b250YWxcIjtcbiAgfVxuXG4gIHJldHVybiBcImxpc3QtZ3JvdXAtaG9yaXpvbnRhbC1cIiArIGhvcml6b250YWw7XG59O1xuXG52YXIgTGlzdEdyb3VwID0gZnVuY3Rpb24gTGlzdEdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBmbHVzaCA9IHByb3BzLmZsdXNoLFxuICAgICAgaG9yaXpvbnRhbCA9IHByb3BzLmhvcml6b250YWwsXG4gICAgICBudW1iZXJlZCA9IHByb3BzLm51bWJlcmVkLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkcik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbGlzdC1ncm91cCcsIC8vIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBjYW5ub3QgY3VycmVudGx5IGJlIG1peGVkIHdpdGggbGlzdC1ncm91cC1mbHVzaFxuICAvLyB3ZSBvbmx5IHRyeSB0byBhcHBseSBob3Jpem9udGFsIGNsYXNzZXMgaWYgZmx1c2ggaXMgZmFsc2VcbiAgZmx1c2ggPyAnbGlzdC1ncm91cC1mbHVzaCcgOiBnZXRIb3Jpem9udGFsQ2xhc3MoaG9yaXpvbnRhbCksIHtcbiAgICAnbGlzdC1ncm91cC1udW1iZXJlZCc6IG51bWJlcmVkXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTGlzdEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyR1O1xuTGlzdEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR0O1xudmFyIExpc3RHcm91cCQxID0gTGlzdEdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkJHEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbmxpbmVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkdCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgaW5saW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkcyA9IHtcbiAgdGFnOiAnZm9ybSdcbn07XG5cbnZhciBGb3JtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEZvcm0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3VibWl0ID0gX3RoaXMuc3VibWl0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGb3JtLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UmVmID0gZnVuY3Rpb24gZ2V0UmVmKHJlZikge1xuICAgIGlmICh0aGlzLnByb3BzLmlubmVyUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLmlubmVyUmVmKHJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5yZWYgPSByZWY7XG4gIH07XG5cbiAgX3Byb3RvLnN1Ym1pdCA9IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLnN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBpbmxpbmUgPSBfdGhpcyRwcm9wcy5pbmxpbmUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkcSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGlubGluZSA/ICdmb3JtLWlubGluZScgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGb3JtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcyR0O1xuRm9ybS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcztcbnZhciBGb3JtJDEgPSBGb3JtO1xuXG52YXIgX2V4Y2x1ZGVkJHAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YWxpZFwiLCBcInRvb2x0aXBcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvb2x0aXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkciA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgdmFsaWQ6IHVuZGVmaW5lZFxufTtcblxudmFyIEZvcm1GZWVkYmFjayA9IGZ1bmN0aW9uIEZvcm1GZWVkYmFjayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdmFsaWQgPSBwcm9wcy52YWxpZCxcbiAgICAgIHRvb2x0aXAgPSBwcm9wcy50b29sdGlwLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkcCk7XG5cbiAgdmFyIHZhbGlkTW9kZSA9IHRvb2x0aXAgPyAndG9vbHRpcCcgOiAnZmVlZGJhY2snO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHZhbGlkID8gXCJ2YWxpZC1cIiArIHZhbGlkTW9kZSA6IFwiaW52YWxpZC1cIiArIHZhbGlkTW9kZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Gb3JtRmVlZGJhY2sucHJvcFR5cGVzID0gcHJvcFR5cGVzJHM7XG5Gb3JtRmVlZGJhY2suZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHI7XG52YXIgRm9ybUZlZWRiYWNrJDEgPSBGb3JtRmVlZGJhY2s7XG5cbnZhciBfZXhjbHVkZWQkbyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInJvd1wiLCBcImRpc2FibGVkXCIsIFwiY2hlY2tcIiwgXCJpbmxpbmVcIiwgXCJmbG9hdGluZ1wiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkciA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgcm93OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoZWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIFwic3dpdGNoXCI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5saW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZsb2F0aW5nOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJHEgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBGb3JtR3JvdXAgPSBmdW5jdGlvbiBGb3JtR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHJvdyA9IHByb3BzLnJvdyxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBjaGVjayA9IHByb3BzLmNoZWNrLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgZmxvYXRpbmcgPSBwcm9wcy5mbG9hdGluZyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJG8pO1xuXG4gIHZhciBmb3JtQ2hlY2sgPSBjaGVjayB8fCBwcm9wc1tcInN3aXRjaFwiXTtcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCByb3cgPyAncm93JyA6IGZhbHNlLCBmb3JtQ2hlY2sgPyAnZm9ybS1jaGVjaycgOiAnbWItMycsIHByb3BzW1wic3dpdGNoXCJdID8gJ2Zvcm0tc3dpdGNoJyA6IGZhbHNlLCBmb3JtQ2hlY2sgJiYgaW5saW5lID8gJ2Zvcm0tY2hlY2staW5saW5lJyA6IGZhbHNlLCBmb3JtQ2hlY2sgJiYgZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogZmFsc2UsIGZsb2F0aW5nICYmICdmb3JtLWZsb2F0aW5nJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKFRhZyA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgIGF0dHJpYnV0ZXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Gb3JtR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJHI7XG5Gb3JtR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHE7XG52YXIgRm9ybUdyb3VwJDEgPSBGb3JtR3JvdXA7XG5cbnZhciBfZXhjbHVkZWQkbiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubGluZVwiLCBcImNvbG9yXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRxID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRwID0ge1xuICB0YWc6ICdzbWFsbCcsXG4gIGNvbG9yOiAnbXV0ZWQnXG59O1xuXG52YXIgRm9ybVRleHQgPSBmdW5jdGlvbiBGb3JtVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJG4pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgIWlubGluZSA/ICdmb3JtLXRleHQnIDogZmFsc2UsIGNvbG9yID8gXCJ0ZXh0LVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5Gb3JtVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkcTtcbkZvcm1UZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRwO1xudmFyIEZvcm1UZXh0JDEgPSBGb3JtVGV4dDtcblxudmFyIF9leGNsdWRlZCRtID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidHlwZVwiLCBcImJzU2l6ZVwiLCBcInZhbGlkXCIsIFwiaW52YWxpZFwiLCBcInRhZ1wiLCBcImFkZG9uXCIsIFwicGxhaW50ZXh0XCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJHAgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGJzU2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGludmFsaWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBwbGFpbnRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYWRkb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkbyA9IHtcbiAgdHlwZTogJ3RleHQnXG59O1xuXG52YXIgSW5wdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5wdXQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmZvY3VzID0gX3RoaXMuZm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElucHV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UmVmID0gZnVuY3Rpb24gZ2V0UmVmKHJlZikge1xuICAgIGlmICh0aGlzLnByb3BzLmlubmVyUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLmlubmVyUmVmKHJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5yZWYgPSByZWY7XG4gIH07XG5cbiAgX3Byb3RvLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMucmVmKSB7XG4gICAgICB0aGlzLnJlZi5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHMudHlwZSxcbiAgICAgICAgYnNTaXplID0gX3RoaXMkcHJvcHMuYnNTaXplLFxuICAgICAgICB2YWxpZCA9IF90aGlzJHByb3BzLnZhbGlkLFxuICAgICAgICBpbnZhbGlkID0gX3RoaXMkcHJvcHMuaW52YWxpZCxcbiAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBhZGRvbiA9IF90aGlzJHByb3BzLmFkZG9uLFxuICAgICAgICBwbGFpbnRleHQgPSBfdGhpcyRwcm9wcy5wbGFpbnRleHQsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJG0pO1xuXG4gICAgdmFyIGNoZWNrSW5wdXQgPSBbJ3N3aXRjaCcsICdyYWRpbycsICdjaGVja2JveCddLmluZGV4T2YodHlwZSkgPiAtMTtcbiAgICB2YXIgaXNOb3RhTnVtYmVyID0gbmV3IFJlZ0V4cCgnXFxcXEQnLCAnZycpO1xuICAgIHZhciB0ZXh0YXJlYUlucHV0ID0gdHlwZSA9PT0gJ3RleHRhcmVhJztcbiAgICB2YXIgc2VsZWN0SW5wdXQgPSB0eXBlID09PSAnc2VsZWN0JztcbiAgICB2YXIgcmFuZ2VJbnB1dCA9IHR5cGUgPT09ICdyYW5nZSc7XG4gICAgdmFyIFRhZyA9IHRhZyB8fCAoc2VsZWN0SW5wdXQgfHwgdGV4dGFyZWFJbnB1dCA/IHR5cGUgOiAnaW5wdXQnKTtcbiAgICB2YXIgZm9ybUNvbnRyb2xDbGFzcyA9ICdmb3JtLWNvbnRyb2wnO1xuXG4gICAgaWYgKHBsYWludGV4dCkge1xuICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9IGZvcm1Db250cm9sQ2xhc3MgKyBcIi1wbGFpbnRleHRcIjtcbiAgICAgIFRhZyA9IHRhZyB8fCAnaW5wdXQnO1xuICAgIH0gZWxzZSBpZiAocmFuZ2VJbnB1dCkge1xuICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9ICdmb3JtLXJhbmdlJztcbiAgICB9IGVsc2UgaWYgKHNlbGVjdElucHV0KSB7XG4gICAgICBmb3JtQ29udHJvbENsYXNzID0gXCJmb3JtLXNlbGVjdFwiO1xuICAgIH0gZWxzZSBpZiAoY2hlY2tJbnB1dCkge1xuICAgICAgaWYgKGFkZG9uKSB7XG4gICAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9ICdmb3JtLWNoZWNrLWlucHV0JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlcy5zaXplICYmIGlzTm90YU51bWJlci50ZXN0KGF0dHJpYnV0ZXMuc2l6ZSkpIHtcbiAgICAgIHdhcm5PbmNlKCdQbGVhc2UgdXNlIHRoZSBwcm9wIFwiYnNTaXplXCIgaW5zdGVhZCBvZiB0aGUgXCJzaXplXCIgdG8gYm9vdHN0cmFwXFwncyBpbnB1dCBzaXppbmcuJyk7XG4gICAgICBic1NpemUgPSBhdHRyaWJ1dGVzLnNpemU7XG4gICAgICBkZWxldGUgYXR0cmlidXRlcy5zaXplO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgaW52YWxpZCAmJiAnaXMtaW52YWxpZCcsIHZhbGlkICYmICdpcy12YWxpZCcsIGJzU2l6ZSA/IHNlbGVjdElucHV0ID8gXCJmb3JtLXNlbGVjdC1cIiArIGJzU2l6ZSA6IFwiZm9ybS1jb250cm9sLVwiICsgYnNTaXplIDogZmFsc2UsIGZvcm1Db250cm9sQ2xhc3MpLCBjc3NNb2R1bGUpO1xuXG4gICAgaWYgKFRhZyA9PT0gJ2lucHV0JyB8fCB0YWcgJiYgdHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXR0cmlidXRlcy50eXBlID0gdHlwZSA9PT0gJ3N3aXRjaCcgPyAnY2hlY2tib3gnIDogdHlwZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlcy5jaGlsZHJlbiAmJiAhKHBsYWludGV4dCB8fCB0eXBlID09PSAnc2VsZWN0JyB8fCB0eXBlb2YgVGFnICE9PSAnc3RyaW5nJyB8fCBUYWcgPT09ICdzZWxlY3QnKSkge1xuICAgICAgd2Fybk9uY2UoXCJJbnB1dCB3aXRoIGEgdHlwZSBvZiBcXFwiXCIgKyB0eXBlICsgXCJcXFwiIGNhbm5vdCBoYXZlIGNoaWxkcmVuLiBQbGVhc2UgdXNlIFxcXCJ2YWx1ZVxcXCIvXFxcImRlZmF1bHRWYWx1ZVxcXCIgaW5zdGVhZC5cIik7XG4gICAgICBkZWxldGUgYXR0cmlidXRlcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBcImFyaWEtaW52YWxpZFwiOiBpbnZhbGlkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBJbnB1dDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbklucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRwO1xuSW5wdXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJG87XG52YXIgSW5wdXQkMSA9IElucHV0O1xuXG52YXIgX2V4Y2x1ZGVkJGwgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJ0eXBlXCIsIFwic2l6ZVwiXTtcbnZhciBwcm9wVHlwZXMkbyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkbiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIElucHV0R3JvdXAgPSBmdW5jdGlvbiBJbnB1dEdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGwpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2lucHV0LWdyb3VwJywgc2l6ZSA/IFwiaW5wdXQtZ3JvdXAtXCIgKyBzaXplIDogbnVsbCksIGNzc01vZHVsZSk7XG5cbiAgaWYgKHByb3BzLnR5cGUgPT09ICdkcm9wZG93bicpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duJDEsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuSW5wdXRHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbztcbklucHV0R3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJG47XG52YXIgSW5wdXRHcm91cCQxID0gSW5wdXRHcm91cDtcblxudmFyIF9leGNsdWRlZCRrID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRuID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRtID0ge1xuICB0YWc6ICdzcGFuJ1xufTtcblxudmFyIElucHV0R3JvdXBUZXh0ID0gZnVuY3Rpb24gSW5wdXRHcm91cFRleHQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGspO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2lucHV0LWdyb3VwLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbklucHV0R3JvdXBUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRuO1xuSW5wdXRHcm91cFRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJG07XG52YXIgSW5wdXRHcm91cFRleHQkMSA9IElucHV0R3JvdXBUZXh0O1xuXG52YXIgX2V4Y2x1ZGVkJGogPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJoaWRkZW5cIiwgXCJ3aWR0aHNcIiwgXCJ0YWdcIiwgXCJjaGVja1wiLCBcInNpemVcIiwgXCJmb3JcIl07XG52YXIgY29sV2lkdGhzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXTtcbnZhciBzdHJpbmdPck51bWJlclByb3AgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSk7XG52YXIgY29sdW1uUHJvcHMgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBzaXplOiBzdHJpbmdPck51bWJlclByb3AsXG4gIG9yZGVyOiBzdHJpbmdPck51bWJlclByb3AsXG4gIG9mZnNldDogc3RyaW5nT3JOdW1iZXJQcm9wXG59KV0pO1xudmFyIHByb3BUeXBlcyRtID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBoaWRkZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hlY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIFwiZm9yXCI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB4czogY29sdW1uUHJvcHMsXG4gIHNtOiBjb2x1bW5Qcm9wcyxcbiAgbWQ6IGNvbHVtblByb3BzLFxuICBsZzogY29sdW1uUHJvcHMsXG4gIHhsOiBjb2x1bW5Qcm9wcyxcbiAgeHhsOiBjb2x1bW5Qcm9wcyxcbiAgd2lkdGhzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5XG59O1xudmFyIGRlZmF1bHRQcm9wcyRsID0ge1xuICB0YWc6ICdsYWJlbCcsXG4gIHdpZHRoczogY29sV2lkdGhzXG59O1xuXG52YXIgZ2V0Q29sdW1uU2l6ZUNsYXNzID0gZnVuY3Rpb24gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2xTaXplKSB7XG4gIGlmIChjb2xTaXplID09PSB0cnVlIHx8IGNvbFNpemUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sJyA6IFwiY29sLVwiICsgY29sV2lkdGg7XG4gIH0gZWxzZSBpZiAoY29sU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sLWF1dG8nIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLWF1dG9cIjtcbiAgfVxuXG4gIHJldHVybiBpc1hzID8gXCJjb2wtXCIgKyBjb2xTaXplIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZTtcbn07XG5cbnZhciBMYWJlbCA9IGZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBoaWRkZW4gPSBwcm9wcy5oaWRkZW4sXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBjaGVjayA9IHByb3BzLmNoZWNrLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBodG1sRm9yID0gcHJvcHNbXCJmb3JcIl0sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRqKTtcblxuICB2YXIgY29sQ2xhc3NlcyA9IFtdO1xuICB3aWR0aHMuZm9yRWFjaChmdW5jdGlvbiAoY29sV2lkdGgsIGkpIHtcbiAgICB2YXIgY29sdW1uUHJvcCA9IHByb3BzW2NvbFdpZHRoXTtcbiAgICBkZWxldGUgYXR0cmlidXRlc1tjb2xXaWR0aF07XG5cbiAgICBpZiAoIWNvbHVtblByb3AgJiYgY29sdW1uUHJvcCAhPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNYcyA9ICFpO1xuICAgIHZhciBjb2xDbGFzcztcblxuICAgIGlmIChpc09iamVjdChjb2x1bW5Qcm9wKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgY29sU2l6ZUludGVyZml4ID0gaXNYcyA/ICctJyA6IFwiLVwiICsgY29sV2lkdGggKyBcIi1cIjtcbiAgICAgIGNvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wLnNpemUpO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbY29sQ2xhc3NdID0gY29sdW1uUHJvcC5zaXplIHx8IGNvbHVtblByb3Auc2l6ZSA9PT0gJycsIF9jbGFzc05hbWVzW1wib3JkZXJcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub3JkZXJdID0gY29sdW1uUHJvcC5vcmRlciB8fCBjb2x1bW5Qcm9wLm9yZGVyID09PSAwLCBfY2xhc3NOYW1lc1tcIm9mZnNldFwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vZmZzZXRdID0gY29sdW1uUHJvcC5vZmZzZXQgfHwgY29sdW1uUHJvcC5vZmZzZXQgPT09IDAsIF9jbGFzc05hbWVzKSkpLCBjc3NNb2R1bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sdW1uUHJvcCk7XG4gICAgICBjb2xDbGFzc2VzLnB1c2goY29sQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgaGlkZGVuID8gJ3Zpc3VhbGx5LWhpZGRlbicgOiBmYWxzZSwgY2hlY2sgPyAnZm9ybS1jaGVjay1sYWJlbCcgOiBmYWxzZSwgc2l6ZSA/IFwiY29sLWZvcm0tbGFiZWwtXCIgKyBzaXplIDogZmFsc2UsIGNvbENsYXNzZXMsIGNvbENsYXNzZXMubGVuZ3RoID8gJ2NvbC1mb3JtLWxhYmVsJyA6ICdmb3JtLWxhYmVsJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgaHRtbEZvcjogaHRtbEZvclxuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbkxhYmVsLnByb3BUeXBlcyA9IHByb3BUeXBlcyRtO1xuTGFiZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGw7XG52YXIgTGFiZWwkMSA9IExhYmVsO1xuXG52YXIgX2V4Y2x1ZGVkJGkgPSBbXCJib2R5XCIsIFwiYm90dG9tXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaGVhZGluZ1wiLCBcImxlZnRcIiwgXCJsaXN0XCIsIFwibWlkZGxlXCIsIFwib2JqZWN0XCIsIFwicmlnaHRcIiwgXCJ0YWdcIiwgXCJ0b3BcIl07XG52YXIgcHJvcFR5cGVzJGwgPSB7XG4gIGJvZHk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYm90dG9tOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGhlYWRpbmc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGVmdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsaXN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1pZGRsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvYmplY3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcmlnaHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG5cbnZhciBNZWRpYSA9IGZ1bmN0aW9uIE1lZGlhKHByb3BzKSB7XG4gIHZhciBib2R5ID0gcHJvcHMuYm9keSxcbiAgICAgIGJvdHRvbSA9IHByb3BzLmJvdHRvbSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGhlYWRpbmcgPSBwcm9wcy5oZWFkaW5nLFxuICAgICAgbGVmdCA9IHByb3BzLmxlZnQsXG4gICAgICBsaXN0ID0gcHJvcHMubGlzdCxcbiAgICAgIG1pZGRsZSA9IHByb3BzLm1pZGRsZSxcbiAgICAgIG9iamVjdCA9IHByb3BzLm9iamVjdCxcbiAgICAgIHJpZ2h0ID0gcHJvcHMucmlnaHQsXG4gICAgICB0YWcgPSBwcm9wcy50YWcsXG4gICAgICB0b3AgPSBwcm9wcy50b3AsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRpKTtcblxuICB2YXIgZGVmYXVsdFRhZztcblxuICBpZiAoaGVhZGluZykge1xuICAgIGRlZmF1bHRUYWcgPSAnaDQnO1xuICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXMuaHJlZikge1xuICAgIGRlZmF1bHRUYWcgPSAnYSc7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5zcmMgfHwgb2JqZWN0KSB7XG4gICAgZGVmYXVsdFRhZyA9ICdpbWcnO1xuICB9IGVsc2UgaWYgKGxpc3QpIHtcbiAgICBkZWZhdWx0VGFnID0gJ3VsJztcbiAgfSBlbHNlIHtcbiAgICBkZWZhdWx0VGFnID0gJ2Rpdic7XG4gIH1cblxuICB2YXIgVGFnID0gdGFnIHx8IGRlZmF1bHRUYWc7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICdtZWRpYS1ib2R5JzogYm9keSxcbiAgICAnbWVkaWEtaGVhZGluZyc6IGhlYWRpbmcsXG4gICAgJ21lZGlhLWxlZnQnOiBsZWZ0LFxuICAgICdtZWRpYS1yaWdodCc6IHJpZ2h0LFxuICAgICdtZWRpYS10b3AnOiB0b3AsXG4gICAgJ21lZGlhLWJvdHRvbSc6IGJvdHRvbSxcbiAgICAnbWVkaWEtbWlkZGxlJzogbWlkZGxlLFxuICAgICdtZWRpYS1vYmplY3QnOiBvYmplY3QsXG4gICAgJ21lZGlhLWxpc3QnOiBsaXN0LFxuICAgIG1lZGlhOiAhYm9keSAmJiAhaGVhZGluZyAmJiAhbGVmdCAmJiAhcmlnaHQgJiYgIXRvcCAmJiAhYm90dG9tICYmICFtaWRkbGUgJiYgIW9iamVjdCAmJiAhbGlzdFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk1lZGlhLnByb3BUeXBlcyA9IHByb3BUeXBlcyRsO1xudmFyIE1lZGlhJDEgPSBNZWRpYTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBGYWRlUHJvcFR5cGVzID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyk7XG52YXIgcHJvcFR5cGVzJGsgPSB7XG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBiYWNrZHJvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc3RhcnQnLCAnZW5kJywgJ2JvdHRvbScsICd0b3AnLCAnbGVmdCcsICdyaWdodCddKSxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBrZXlib2FyZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsYWJlbGxlZEJ5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb2ZmY2FudmFzVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyxcbiAgb25DbG9zZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25FbnRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkV4aXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25PcGVuZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICB0cmFwRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdW5tb3VudE9uQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgekluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSlcbn07XG52YXIgcHJvcHNUb09taXQgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMkayk7XG52YXIgZGVmYXVsdFByb3BzJGsgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnc3RhcnQnLFxuICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgcm9sZTogJ2RpYWxvZycsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgekluZGV4OiAxMDUwLFxuICBmYWRlOiB0cnVlLFxuICBvbk9wZW5lZDogbm9vcCxcbiAgb25DbG9zZWQ6IG5vb3AsXG4gIG9mZmNhbnZhc1RyYW5zaXRpb246IHtcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuT2ZmY2FudmFzXG4gIH0sXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjoge1xuICAgIG1vdW50T25FbnRlcjogdHJ1ZSxcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSAvLyB1c2VzIHN0YW5kYXJkIGZhZGUgdHJhbnNpdGlvblxuXG4gIH0sXG4gIHVubW91bnRPbkNsb3NlOiB0cnVlLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IHRydWUsXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICB0cmFwRm9jdXM6IGZhbHNlXG59O1xuXG52YXIgT2ZmY2FudmFzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE9mZmNhbnZhcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT2ZmY2FudmFzKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIF90aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gbnVsbDtcbiAgICBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IF90aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRXNjYXBlID0gX3RoaXMuaGFuZGxlRXNjYXBlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRhYiA9IF90aGlzLmhhbmRsZVRhYi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk9wZW5lZCA9IF90aGlzLm9uT3BlbmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudHJhcEZvY3VzID0gX3RoaXMudHJhcEZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9mZmNhbnZhcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgIG9uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9IC8vIHRyYXBzIGZvY3VzIGluc2lkZSB0aGUgT2ZmY2FudmFzLCBldmVuIGlmIHRoZSBicm93c2VyIGFkZHJlc3MgYmFyIGlzIGZvY3VzZWRcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnRyYXBGb2N1cywgdHJ1ZSk7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gbm93IE9mZmNhbnZhcyBEaWFsb2cgaXMgcmVuZGVyZWQgYW5kIHdlIGNhbiByZWZlciB0aGlzLl9lbGVtZW50IGFuZCB0aGlzLl9kaWFsb2dcblxuXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgJiYgcHJldlByb3BzLnpJbmRleCAhPT0gdGhpcy5wcm9wcy56SW5kZXgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnRyYXBGb2N1cywgdHJ1ZSk7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnRyYXBGb2N1cyA9IGZ1bmN0aW9uIHRyYXBGb2N1cyhldikge1xuICAgIGlmICghdGhpcy5wcm9wcy50cmFwRm9jdXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIC8vZWxlbWVudCBpcyBub3QgYXR0YWNoZWRcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fZGlhbG9nID09PSBldi50YXJnZXQpIC8vIGluaXRpYWwgZm9jdXMgd2hlbiB0aGUgT2ZmY2FudmFzIGlzIG9wZW5lZFxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLm9mZmNhbnZhc0luZGV4IDwgT2ZmY2FudmFzLm9wZW5Db3VudCAtIDEpIC8vIGxhc3Qgb3BlbmVkIG9mZmNhbnZhc1xuICAgICAgcmV0dXJuO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGZvY3VzIGlzIGFscmVhZHkgaW5zaWRlIHRoZSBPZmZjYW52YXNcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gZXYudGFyZ2V0KSByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIG90aGVyd2lzZSBmb2N1cyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIE9mZmNhbnZhc1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uT3BlbmVkID0gZnVuY3Rpb24gb25PcGVuZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uT3BlbmVkKCk7XG4gICAgKHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi5vbkVudGVyZWQgfHwgbm9vcCkobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKG5vZGUpIHtcbiAgICB2YXIgdW5tb3VudE9uQ2xvc2UgPSB0aGlzLnByb3BzLnVubW91bnRPbkNsb3NlOyAvLyBzbyBhbGwgbWV0aG9kcyBnZXQgY2FsbGVkIGJlZm9yZSBpdCBpcyB1bm1vdW50ZWRcblxuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICAodGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLm9uRXhpdGVkIHx8IG5vb3ApKG5vZGUpO1xuXG4gICAgaWYgKHVubW91bnRPbkNsb3NlKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9kaWFsb2cgJiYgdHlwZW9mIHRoaXMuX2RpYWxvZy5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fZGlhbG9nLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHMuam9pbignLCAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzZWRDaGlsZCA9IGZ1bmN0aW9uIGdldEZvY3VzZWRDaGlsZCgpIHtcbiAgICB2YXIgY3VycmVudEZvY3VzO1xuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIHRyeSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY3VycmVudEZvY3VzID0gZm9jdXNhYmxlQ2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRGb2N1cztcbiAgfSAvLyBub3QgbW91c2VVcCBiZWNhdXNlIHNjcm9sbGJhciBmaXJlcyBpdCwgc2hvdWxkbid0IGNsb3NlIHdoZW4gdXNlciBzY3JvbGxzXG4gIDtcblxuICBfcHJvdG8uaGFuZGxlQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5fbW91c2VEb3duRWxlbWVudCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciBiYWNrZHJvcCA9IHRoaXMuX2JhY2tkcm9wO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnByb3BzLmJhY2tkcm9wICE9PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGlmIChiYWNrZHJvcCAmJiBlLnRhcmdldCA9PT0gYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUYWIgPSBmdW5jdGlvbiBoYW5kbGVUYWIoZSkge1xuICAgIGlmIChlLndoaWNoICE9PSA5KSByZXR1cm47XG4gICAgaWYgKHRoaXMub2ZmY2FudmFzSW5kZXggPCBPZmZjYW52YXMub3BlbkNvdW50IC0gMSkgcmV0dXJuOyAvLyBsYXN0IG9wZW5lZCBvZmZjYW52YXNcblxuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcbiAgICB2YXIgdG90YWxGb2N1c2FibGUgPSBmb2N1c2FibGVDaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKHRvdGFsRm9jdXNhYmxlID09PSAwKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnRGb2N1cyA9IHRoaXMuZ2V0Rm9jdXNlZENoaWxkKCk7XG4gICAgdmFyIGZvY3VzZWRJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsRm9jdXNhYmxlOyBpICs9IDEpIHtcbiAgICAgIGlmIChmb2N1c2FibGVDaGlsZHJlbltpXSA9PT0gY3VycmVudEZvY3VzKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bdG90YWxGb2N1c2FibGUgLSAxXS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSB0b3RhbEZvY3VzYWJsZSAtIDEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLl9tb3VzZURvd25FbGVtZW50ID0gZS50YXJnZXQ7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUVzY2FwZSA9IGZ1bmN0aW9uIGhhbmRsZUVzY2FwZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyID0gZ2V0VGFyZ2V0KHRoaXMucHJvcHMuY29udGFpbmVyKTtcblxuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IGdldE9yaWdpbmFsQm9keVBhZGRpbmcoKTtcbiAgICBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCk7XG5cbiAgICBpZiAoT2ZmY2FudmFzLm9wZW5Db3VudCA9PT0gMCAmJiB0aGlzLnByb3BzLmJhY2tkcm9wICYmICF0aGlzLnByb3BzLnNjcm9sbGFibGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICB0aGlzLm9mZmNhbnZhc0luZGV4ID0gT2ZmY2FudmFzLm9wZW5Db3VudDtcbiAgICBPZmZjYW52YXMub3BlbkNvdW50ICs9IDE7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgfTtcblxuICBfcHJvdG8ubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gZnVuY3Rpb24gbWFuYWdlRm9jdXNBZnRlckNsb3NlKCkge1xuICAgIGlmICh0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCkge1xuICAgICAgdmFyIHJldHVybkZvY3VzQWZ0ZXJDbG9zZSA9IHRoaXMucHJvcHMucmV0dXJuRm9jdXNBZnRlckNsb3NlO1xuICAgICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50LmZvY3VzICYmIHJldHVybkZvY3VzQWZ0ZXJDbG9zZSkgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgICBPZmZjYW52YXMub3BlbkNvdW50ID0gTWF0aC5tYXgoMCwgT2ZmY2FudmFzLm9wZW5Db3VudCAtIDEpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICAgIHNldFNjcm9sbGJhcldpZHRoKHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMyLmRpcmVjdGlvbixcbiAgICAgICAgdW5tb3VudE9uQ2xvc2UgPSBfdGhpcyRwcm9wczIudW5tb3VudE9uQ2xvc2U7XG5cbiAgICBpZiAoISF0aGlzLl9lbGVtZW50ICYmICh0aGlzLnN0YXRlLmlzT3BlbiB8fCAhdW5tb3VudE9uQ2xvc2UpKSB7XG4gICAgICB2YXIgaXNPZmZjYW52YXNIaWRkZW4gPSAhIXRoaXMuX2VsZW1lbnQgJiYgIXRoaXMuc3RhdGUuaXNPcGVuICYmICF1bm1vdW50T25DbG9zZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzT2ZmY2FudmFzSGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgICAgYmFja2Ryb3BDbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuYmFja2Ryb3BDbGFzc05hbWUsXG4gICAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMzLmNzc01vZHVsZSxcbiAgICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wczMuaXNPcGVuLFxuICAgICAgICAgIGJhY2tkcm9wID0gX3RoaXMkcHJvcHMzLmJhY2tkcm9wLFxuICAgICAgICAgIHJvbGUgPSBfdGhpcyRwcm9wczMucm9sZSxcbiAgICAgICAgICBsYWJlbGxlZEJ5ID0gX3RoaXMkcHJvcHMzLmxhYmVsbGVkQnksXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczMuc3R5bGU7XG4gICAgICB2YXIgb2ZmY2FudmFzQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVFc2NhcGUsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVUYWIsXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbGxlZEJ5LFxuICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICB0YWJJbmRleDogJy0xJ1xuICAgICAgfTtcbiAgICAgIHZhciBoYXNUcmFuc2l0aW9uID0gdGhpcy5wcm9wcy5mYWRlO1xuXG4gICAgICB2YXIgb2ZmY2FudmFzVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBiYWNrZHJvcFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgQmFja2Ryb3AgPSBiYWNrZHJvcCAmJiAoaGFzVHJhbnNpdGlvbiA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYmFja2Ryb3BUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuICYmICEhYmFja2Ryb3AsXG4gICAgICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZihjKSB7XG4gICAgICAgICAgX3RoaXMyLl9iYWNrZHJvcCA9IGM7XG4gICAgICAgIH0sXG4gICAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnb2ZmY2FudmFzLWJhY2tkcm9wJywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duXG4gICAgICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnb2ZmY2FudmFzLWJhY2tkcm9wJywgJ3Nob3cnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd25cbiAgICAgIH0pKTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gb21pdCh0aGlzLnByb3BzLCBwcm9wc1RvT21pdCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBvcnRhbCQxLCB7XG4gICAgICAgIG5vZGU6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgb2ZmY2FudmFzQXR0cmlidXRlcywgb2ZmY2FudmFzVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgICAgb25FbnRlcmVkOiB0aGlzLm9uT3BlbmVkLFxuICAgICAgICBvbkV4aXRlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMnLCBjbGFzc05hbWUsIFwib2ZmY2FudmFzLVwiICsgZGlyZWN0aW9uKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX2RpYWxvZyA9IGM7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGlzT3BlbiA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG4gICAgICAgIH0pXG4gICAgICB9KSwgdGhpcy5wcm9wcy5jaGlsZHJlbiksIEJhY2tkcm9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE9mZmNhbnZhcztcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbk9mZmNhbnZhcy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkaztcbk9mZmNhbnZhcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkaztcbk9mZmNhbnZhcy5vcGVuQ291bnQgPSAwO1xudmFyIE9mZmNhbnZhcyQxID0gT2ZmY2FudmFzO1xuXG52YXIgX2V4Y2x1ZGVkJGggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGogPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJGogPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBPZmZjYW52YXNCb2R5ID0gZnVuY3Rpb24gT2ZmY2FudmFzQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkaCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnb2ZmY2FudmFzLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn07XG5cbk9mZmNhbnZhc0JvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJGo7XG5PZmZjYW52YXNCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRqO1xudmFyIE9mZmNhbnZhc0JvZHkkMSA9IE9mZmNhbnZhc0JvZHk7XG5cbnZhciBfZXhjbHVkZWQkZyA9IFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xvc2VcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInRvZ2dsZVwiLCBcIndyYXBUYWdcIl07XG52YXIgcHJvcFR5cGVzJGkgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJGkgPSB7XG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnLFxuICB0YWc6ICdoNScsXG4gIHdyYXBUYWc6ICdkaXYnXG59O1xuXG52YXIgT2ZmY2FudmFzSGVhZGVyID0gZnVuY3Rpb24gT2ZmY2FudmFzSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbG9zZUJ1dHRvbjtcblxuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICBjbG9zZUFyaWFMYWJlbCA9IHByb3BzLmNsb3NlQXJpYUxhYmVsLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgV3JhcFRhZyA9IHByb3BzLndyYXBUYWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRnKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdvZmZjYW52YXMtaGVhZGVyJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKCFjbG9zZSAmJiB0b2dnbGUpIHtcbiAgICBjbG9zZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ2J0bi1jbG9zZScsIGNzc01vZHVsZSksXG4gICAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoV3JhcFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnb2ZmY2FudmFzLXRpdGxlJywgY3NzTW9kdWxlKVxuICB9LCBjaGlsZHJlbiksIGNsb3NlIHx8IGNsb3NlQnV0dG9uKTtcbn07XG5cbk9mZmNhbnZhc0hlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkaTtcbk9mZmNhbnZhc0hlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkaTtcbnZhciBPZmZjYW52YXNIZWFkZXIkMSA9IE9mZmNhbnZhc0hlYWRlcjtcblxudmFyIF9leGNsdWRlZCRmID0gW1wiY2xhc3NOYW1lXCIsIFwibGlzdENsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJ0YWdcIiwgXCJsaXN0VGFnXCIsIFwiYXJpYS1sYWJlbFwiXTtcbnZhciBwcm9wVHlwZXMkaCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGlzdENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBsaXN0VGFnOiB0YWdQcm9wVHlwZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkaCA9IHtcbiAgdGFnOiAnbmF2JyxcbiAgbGlzdFRhZzogJ3VsJyxcbiAgJ2FyaWEtbGFiZWwnOiAncGFnaW5hdGlvbidcbn07XG5cbnZhciBQYWdpbmF0aW9uID0gZnVuY3Rpb24gUGFnaW5hdGlvbihwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGxpc3RDbGFzc05hbWUgPSBwcm9wcy5saXN0Q2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBMaXN0VGFnID0gcHJvcHMubGlzdFRhZyxcbiAgICAgIGxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHZhciBsaXN0Q2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShsaXN0Q2xhc3NOYW1lLCAncGFnaW5hdGlvbicsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tcInBhZ2luYXRpb24tXCIgKyBzaXplXSA9ICEhc2l6ZSwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChMaXN0VGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogbGlzdENsYXNzZXNcbiAgfSkpKTtcbn07XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJGg7XG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRoO1xudmFyIFBhZ2luYXRpb24kMSA9IFBhZ2luYXRpb247XG5cbnZhciBfZXhjbHVkZWQkZSA9IFtcImFjdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpc2FibGVkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRnID0ge1xuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkZyA9IHtcbiAgdGFnOiAnbGknXG59O1xuXG52YXIgUGFnaW5hdGlvbkl0ZW0gPSBmdW5jdGlvbiBQYWdpbmF0aW9uSXRlbShwcm9wcykge1xuICB2YXIgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGUpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BhZ2UtaXRlbScsIHtcbiAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgfSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59O1xuXG5QYWdpbmF0aW9uSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZztcblBhZ2luYXRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRnO1xudmFyIFBhZ2luYXRpb25JdGVtJDEgPSBQYWdpbmF0aW9uSXRlbTtcblxudmFyIF9leGNsdWRlZCRkID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibmV4dFwiLCBcInByZXZpb3VzXCIsIFwiZmlyc3RcIiwgXCJsYXN0XCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRmID0ge1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBuZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHByZXZpb3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZpcnN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxhc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkZiA9IHtcbiAgdGFnOiAnYSdcbn07XG5cbnZhciBQYWdpbmF0aW9uTGluayA9IGZ1bmN0aW9uIFBhZ2luYXRpb25MaW5rKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBuZXh0ID0gcHJvcHMubmV4dCxcbiAgICAgIHByZXZpb3VzID0gcHJvcHMucHJldmlvdXMsXG4gICAgICBmaXJzdCA9IHByb3BzLmZpcnN0LFxuICAgICAgbGFzdCA9IHByb3BzLmxhc3QsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRkKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwYWdlLWxpbmsnKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGRlZmF1bHRBcmlhTGFiZWw7XG5cbiAgaWYgKHByZXZpb3VzKSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdQcmV2aW91cyc7XG4gIH0gZWxzZSBpZiAobmV4dCkge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnTmV4dCc7XG4gIH0gZWxzZSBpZiAoZmlyc3QpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ0ZpcnN0JztcbiAgfSBlbHNlIGlmIChsYXN0KSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdMYXN0JztcbiAgfVxuXG4gIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddIHx8IGRlZmF1bHRBcmlhTGFiZWw7XG4gIHZhciBkZWZhdWx0Q2FyZXQ7XG5cbiAgaWYgKHByZXZpb3VzKSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHUyMDM5XCI7XG4gIH0gZWxzZSBpZiAobmV4dCkge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx1MjAzQVwiO1xuICB9IGVsc2UgaWYgKGZpcnN0KSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHhBQlwiO1xuICB9IGVsc2UgaWYgKGxhc3QpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxceEJCXCI7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICBpZiAoY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgaWYgKCFhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnYScpIHtcbiAgICBUYWcgPSAnYnV0dG9uJztcbiAgfVxuXG4gIGlmIChwcmV2aW91cyB8fCBuZXh0IHx8IGZpcnN0IHx8IGxhc3QpIHtcbiAgICBjaGlsZHJlbiA9IFsvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBrZXk6IFwiY2FyZXRcIlxuICAgIH0sIGNoaWxkcmVuIHx8IGRlZmF1bHRDYXJldCksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInZpc3VhbGx5LWhpZGRlblwiLFxuICAgICAga2V5OiBcImFyaWFMYWJlbFwiXG4gICAgfSwgYXJpYUxhYmVsKV07XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFxuICB9KSwgY2hpbGRyZW4pO1xufTtcblxuUGFnaW5hdGlvbkxpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzJGY7XG5QYWdpbmF0aW9uTGluay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZjtcbnZhciBQYWdpbmF0aW9uTGluayQxID0gUGFnaW5hdGlvbkxpbms7XG5cbi8qKlxuICogVGFiQ29udGV4dFxuICoge1xuICogIGFjdGl2ZVRhYklkOiBQcm9wVHlwZXMuYW55XG4gKiB9XG4gKi9cblxudmFyIFRhYkNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciBwcm9wVHlwZXMkZSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYWN0aXZlVGFiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkZSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxudmFyIFRhYkNvbnRlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVGFiQ29udGVudCwgX0NvbXBvbmVudCk7XG5cbiAgVGFiQ29udGVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmFjdGl2ZVRhYiAhPT0gbmV4dFByb3BzLmFjdGl2ZVRhYikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZlVGFiOiBuZXh0UHJvcHMuYWN0aXZlVGFiXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFRhYkNvbnRlbnQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVRhYjogX3RoaXMucHJvcHMuYWN0aXZlVGFiXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVGFiQ29udGVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnO1xuICAgIHZhciBhdHRyaWJ1dGVzID0gb21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMkZSkpO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0YWItY29udGVudCcsIGNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBhY3RpdmVUYWJJZDogdGhpcy5zdGF0ZS5hY3RpdmVUYWJcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpKTtcbiAgfTtcblxuICByZXR1cm4gVGFiQ29udGVudDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIFRhYkNvbnRlbnQkMSA9IFRhYkNvbnRlbnQ7XG5UYWJDb250ZW50LnByb3BUeXBlcyA9IHByb3BUeXBlcyRlO1xuVGFiQ29udGVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZTtcblxudmFyIF9leGNsdWRlZCRjID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFiSWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRhYklkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufTtcbnZhciBkZWZhdWx0UHJvcHMkZCA9IHtcbiAgdGFnOiAnZGl2J1xufTtcbmZ1bmN0aW9uIFRhYlBhbmUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHRhYklkID0gcHJvcHMudGFiSWQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRjKTtcblxuICB2YXIgZ2V0Q2xhc3NlcyA9IGZ1bmN0aW9uIGdldENsYXNzZXMoYWN0aXZlVGFiSWQpIHtcbiAgICByZXR1cm4gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0YWItcGFuZScsIGNsYXNzTmFtZSwge1xuICAgICAgYWN0aXZlOiB0YWJJZCA9PT0gYWN0aXZlVGFiSWRcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhYkNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGFjdGl2ZVRhYklkID0gX3JlZi5hY3RpdmVUYWJJZDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogZ2V0Q2xhc3NlcyhhY3RpdmVUYWJJZClcbiAgICB9KSk7XG4gIH0pO1xufVxuVGFiUGFuZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZDtcblRhYlBhbmUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGQ7XG5cbnZhciBfZXhjbHVkZWQkYiA9IFtcImNsYXNzTmFtZVwiLCBcImNsb3NlQ2xhc3NOYW1lXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJjb2xvclwiLCBcImlzT3BlblwiLCBcInRvZ2dsZVwiLCBcImNoaWxkcmVuXCIsIFwidHJhbnNpdGlvblwiLCBcImZhZGVcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkYyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xvc2VDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRyYW5zaXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJGMgPSB7XG4gIGNvbG9yOiAnc3VjY2VzcycsXG4gIGlzT3BlbjogdHJ1ZSxcbiAgdGFnOiAnZGl2JyxcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZScsXG4gIGZhZGU6IHRydWUsXG4gIHRyYW5zaXRpb246IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gICAgdW5tb3VudE9uRXhpdDogdHJ1ZVxuICB9KVxufTtcblxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsb3NlQ2xhc3NOYW1lID0gcHJvcHMuY2xvc2VDbGFzc05hbWUsXG4gICAgICBjbG9zZUFyaWFMYWJlbCA9IHByb3BzLmNsb3NlQXJpYUxhYmVsLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlzT3BlbiA9IHByb3BzLmlzT3BlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0cmFuc2l0aW9uID0gcHJvcHMudHJhbnNpdGlvbixcbiAgICAgIGZhZGUgPSBwcm9wcy5mYWRlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FsZXJ0JywgXCJhbGVydC1cIiArIGNvbG9yLCB7XG4gICAgJ2FsZXJ0LWRpc21pc3NpYmxlJzogdG9nZ2xlXG4gIH0pLCBjc3NNb2R1bGUpO1xuICB2YXIgY2xvc2VDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdidG4tY2xvc2UnLCBjbG9zZUNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG5cbiAgdmFyIGFsZXJ0VHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRyYW5zaXRpb24pLCB7fSwge1xuICAgIGJhc2VDbGFzczogZmFkZSA/IHRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgfSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgYWxlcnRUcmFuc2l0aW9uLCB7XG4gICAgdGFnOiBUYWcsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiaW5cIjogaXNPcGVuLFxuICAgIHJvbGU6IFwiYWxlcnRcIixcbiAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgfSksIHRvZ2dsZSA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGNsb3NlQ2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWwsXG4gICAgb25DbGljazogdG9nZ2xlXG4gIH0pIDogbnVsbCwgY2hpbGRyZW4pO1xufVxuXG5BbGVydC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkYztcbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRjO1xuXG52YXIgX2V4Y2x1ZGVkJGEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpc09wZW5cIiwgXCJjaGlsZHJlblwiLCBcInRyYW5zaXRpb25cIiwgXCJmYWRlXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJGIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRyYW5zaXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJGIgPSB7XG4gIGlzT3BlbjogdHJ1ZSxcbiAgdGFnOiAnZGl2JyxcbiAgZmFkZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBUb2FzdChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaXNPcGVuID0gcHJvcHMuaXNPcGVuLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgZmFkZSA9IHByb3BzLmZhZGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndG9hc3QnKSwgY3NzTW9kdWxlKTtcblxuICB2YXIgdG9hc3RUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgYmFzZUNsYXNzOiBmYWRlID8gdHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICB0aW1lb3V0OiBmYWRlID8gdHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICB9KTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB0b2FzdFRyYW5zaXRpb24sIHtcbiAgICB0YWc6IFRhZyxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJpblwiOiBpc09wZW4sXG4gICAgcm9sZTogXCJhbGVydFwiLFxuICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICB9KSwgY2hpbGRyZW4pO1xufVxuXG5Ub2FzdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkYjtcblRvYXN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRiO1xuXG52YXIgX2V4Y2x1ZGVkJDkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbm5lclJlZlwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkYSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyRhID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgVG9hc3RCb2R5ID0gZnVuY3Rpb24gVG9hc3RCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkOSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndG9hc3QtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59O1xuXG5Ub2FzdEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJGE7XG5Ub2FzdEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGE7XG52YXIgVG9hc3RCb2R5JDEgPSBUb2FzdEJvZHk7XG5cbnZhciBfZXhjbHVkZWQkOCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidG9nZ2xlXCIsIFwidGFnXCIsIFwid3JhcFRhZ1wiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY2xvc2VcIiwgXCJ0YWdDbGFzc05hbWVcIiwgXCJpY29uXCJdO1xudmFyIHByb3BUeXBlcyQ5ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpY29uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZV0pLFxuICB3cmFwVGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsb3NlQXJpYUxhYmVsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hhckNvZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQ5ID0ge1xuICB0YWc6ICdzdHJvbmcnLFxuICB3cmFwVGFnOiAnZGl2JyxcbiAgdGFnQ2xhc3NOYW1lOiAnbWUtYXV0bycsXG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnXG59O1xuXG52YXIgVG9hc3RIZWFkZXIgPSBmdW5jdGlvbiBUb2FzdEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG4gIHZhciBpY29uO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgV3JhcFRhZyA9IHByb3BzLndyYXBUYWcsXG4gICAgICBjbG9zZUFyaWFMYWJlbCA9IHByb3BzLmNsb3NlQXJpYUxhYmVsLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIHRhZ0NsYXNzTmFtZSA9IHByb3BzLnRhZ0NsYXNzTmFtZSxcbiAgICAgIGljb25Qcm9wID0gcHJvcHMuaWNvbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3RvYXN0LWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuXG4gIGlmICghY2xvc2UgJiYgdG9nZ2xlKSB7XG4gICAgY2xvc2VCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdidG4tY2xvc2UnLCBjc3NNb2R1bGUpLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlQXJpYUxhYmVsXG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGljb25Qcm9wID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhcInJvdW5kZWQgdGV4dC1cIiArIGljb25Qcm9wKSxcbiAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICBoZWlnaHQ6IFwiMjBcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkIHNsaWNlXCIsXG4gICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgIHJvbGU6IFwiaW1nXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfSkpO1xuICB9IGVsc2UgaWYgKGljb25Qcm9wKSB7XG4gICAgaWNvbiA9IGljb25Qcm9wO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChXcmFwVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgaWNvbiwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRhZ0NsYXNzTmFtZSwge1xuICAgICAgXCJtcy0yXCI6IGljb24gIT0gbnVsbFxuICAgIH0pLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufTtcblxuVG9hc3RIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDk7XG5Ub2FzdEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkOTtcbnZhciBUb2FzdEhlYWRlciQxID0gVG9hc3RIZWFkZXI7XG5cbnZhciBfZXhjbHVkZWQkNyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImFjdGl2ZVwiLCBcImRpc2FibGVkXCIsIFwiYWN0aW9uXCIsIFwiY29sb3JcIl07XG52YXIgcHJvcFR5cGVzJDggPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGFjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQ4ID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbnZhciBoYW5kbGVEaXNhYmxlZE9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEaXNhYmxlZE9uQ2xpY2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG52YXIgTGlzdEdyb3VwSXRlbSA9IGZ1bmN0aW9uIExpc3RHcm91cEl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkNyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCBkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiBmYWxzZSwgYWN0aW9uID8gJ2xpc3QtZ3JvdXAtaXRlbS1hY3Rpb24nIDogZmFsc2UsIGNvbG9yID8gXCJsaXN0LWdyb3VwLWl0ZW0tXCIgKyBjb2xvciA6IGZhbHNlLCAnbGlzdC1ncm91cC1pdGVtJyksIGNzc01vZHVsZSk7IC8vIFByZXZlbnQgY2xpY2sgZXZlbnQgd2hlbiBkaXNhYmxlZC5cblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBhdHRyaWJ1dGVzLm9uQ2xpY2sgPSBoYW5kbGVEaXNhYmxlZE9uQ2xpY2s7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTGlzdEdyb3VwSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkODtcbkxpc3RHcm91cEl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDg7XG52YXIgTGlzdEdyb3VwSXRlbSQxID0gTGlzdEdyb3VwSXRlbTtcblxudmFyIF9leGNsdWRlZCQ2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQ3ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQ3ID0ge1xuICB0YWc6ICdoNSdcbn07XG5cbnZhciBMaXN0R3JvdXBJdGVtSGVhZGluZyA9IGZ1bmN0aW9uIExpc3RHcm91cEl0ZW1IZWFkaW5nKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ2KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0taGVhZGluZycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTGlzdEdyb3VwSXRlbUhlYWRpbmcucHJvcFR5cGVzID0gcHJvcFR5cGVzJDc7XG5MaXN0R3JvdXBJdGVtSGVhZGluZy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNztcbnZhciBMaXN0R3JvdXBJdGVtSGVhZGluZyQxID0gTGlzdEdyb3VwSXRlbUhlYWRpbmc7XG5cbnZhciBfZXhjbHVkZWQkNSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkNiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkNiA9IHtcbiAgdGFnOiAncCdcbn07XG5cbnZhciBMaXN0R3JvdXBJdGVtVGV4dCA9IGZ1bmN0aW9uIExpc3RHcm91cEl0ZW1UZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ1KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0tdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufTtcblxuTGlzdEdyb3VwSXRlbVRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJDY7XG5MaXN0R3JvdXBJdGVtVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNjtcbnZhciBMaXN0R3JvdXBJdGVtVGV4dCQxID0gTGlzdEdyb3VwSXRlbVRleHQ7XG5cbnZhciBfZXhjbHVkZWQkNCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInR5cGVcIl07XG52YXIgcHJvcFR5cGVzJDUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQ1ID0ge1xuICB0YWc6ICd1bCdcbn07XG52YXIgTGlzdCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkNCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB0eXBlID8gXCJsaXN0LVwiICsgdHlwZSA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuTGlzdC5uYW1lID0gJ0xpc3QnO1xuTGlzdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNTtcbkxpc3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDU7XG52YXIgTGlzdCQxID0gTGlzdDtcblxudmFyIF9leGNsdWRlZCQzID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQ0ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQ0ID0ge1xuICB0YWc6ICdsaSdcbn07XG52YXIgTGlzdElubGluZUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQzKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWlubGluZS1pdGVtJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IHJlZlxuICB9KSk7XG59KTtcbkxpc3RJbmxpbmVJdGVtLm5hbWUgPSAnTGlzdElubGluZUl0ZW0nO1xuTGlzdElubGluZUl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDQ7XG5MaXN0SW5saW5lSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNDtcbnZhciBMaXN0SW5saW5lSXRlbSQxID0gTGlzdElubGluZUl0ZW07XG5cbnZhciBVbmNvbnRyb2xsZWRBbGVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRBbGVydCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQWxlcnQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogdHJ1ZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRBbGVydC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFsZXJ0LCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIHRoaXMucHJvcHMpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkQWxlcnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBVbmNvbnRyb2xsZWRBbGVydCQxID0gVW5jb250cm9sbGVkQWxlcnQ7XG5cbnZhciBvbWl0S2V5cyQzID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQnV0dG9uRHJvcGRvd24kMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59LCBCdXR0b25Ecm9wZG93biQxLnByb3BUeXBlcyk7XG5cbnZhciBvbWl0S2V5cyQyID0gWyd0b2dnbGVFdmVudHMnLCAnZGVmYXVsdE9wZW4nXTtcbnZhciBwcm9wVHlwZXMkMyA9IHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdG9nZ2xlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlRXZlbnRzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcpXG59O1xudmFyIGRlZmF1bHRQcm9wcyQzID0ge1xuICB0b2dnbGVFdmVudHM6IGRlZmF1bHRUb2dnbGVFdmVudHNcbn07XG5cbnZhciBVbmNvbnRyb2xsZWRDb2xsYXBzZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRDb2xsYXBzZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQ29sbGFwc2UocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy50b2dnbGVycyA9IG51bGw7XG4gICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRDb2xsYXBzZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50b2dnbGVycyA9IGZpbmRET01FbGVtZW50cyh0aGlzLnByb3BzLnRvZ2dsZXIpO1xuXG4gICAgaWYgKHRoaXMudG9nZ2xlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyh0aGlzLnRvZ2dsZXJzLCB0aGlzLnRvZ2dsZSwgdGhpcy5wcm9wcy50b2dnbGVFdmVudHMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy50b2dnbGVycy5sZW5ndGggJiYgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgaXNPcGVuID0gX3JlZi5pc09wZW47XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46ICFpc09wZW5cbiAgICAgIH07XG4gICAgfSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDb2xsYXBzZSQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cyQyKSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRDb2xsYXBzZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVW5jb250cm9sbGVkQ29sbGFwc2UucHJvcFR5cGVzID0gcHJvcFR5cGVzJDM7XG5VbmNvbnRyb2xsZWRDb2xsYXBzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMztcbnZhciBVbmNvbnRyb2xsZWRDb2xsYXBzZSQxID0gVW5jb250cm9sbGVkQ29sbGFwc2U7XG5cbnZhciBvbWl0S2V5cyQxID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkRHJvcGRvd24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZERyb3Bkb3duKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZERyb3Bkb3duLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBpc09wZW4gPSAhdGhpcy5zdGF0ZS5pc09wZW47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IGlzT3BlblxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpczIucHJvcHMub25Ub2dnbGUpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uVG9nZ2xlKGUsIGlzT3Blbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cyQxKSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWREcm9wZG93bjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblVuY29udHJvbGxlZERyb3Bkb3duLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb25Ub2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY1xufSwgRHJvcGRvd24kMS5wcm9wVHlwZXMpO1xuXG52YXIgb21pdEtleXMgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWRUb29sdGlwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZFRvb2x0aXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZFRvb2x0aXAocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkVG9vbHRpcC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvb2x0aXAkMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzKSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRUb29sdGlwO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkVG9vbHRpcC5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIFRvb2x0aXAkMS5wcm9wVHlwZXMpO1xuXG52YXIgX2V4Y2x1ZGVkJDIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0eXBlXCIsIFwic2l6ZVwiLCBcImNvbG9yXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDIgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDIgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHR5cGU6ICdib3JkZXInLFxuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59O1xuXG52YXIgU3Bpbm5lciA9IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgc2l6ZSA/IFwic3Bpbm5lci1cIiArIHR5cGUgKyBcIi1cIiArIHNpemUgOiBmYWxzZSwgXCJzcGlubmVyLVwiICsgdHlwZSwgY29sb3IgPyBcInRleHQtXCIgKyBjb2xvciA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICByb2xlOiBcInN0YXR1c1wiXG4gIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCd2aXN1YWxseS1oaWRkZW4nLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSk7XG59O1xuXG5TcGlubmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQyO1xuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMjtcbnZhciBTcGlubmVyJDEgPSBTcGlubmVyO1xuXG52YXIgX2V4Y2x1ZGVkJDEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjb2xvclwiLCBcImlubmVyUmVmXCIsIFwidGFnXCIsIFwiYW5pbWF0aW9uXCIsIFwic2l6ZVwiLCBcIndpZHRoc1wiXTtcblxudmFyIHByb3BUeXBlcyQxID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIENvbCQxLnByb3BUeXBlcyksIHt9LCB7XG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnZ2xvdycsICd3YXZlJ10pLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydsZycsICdzbScsICd4cyddKVxufSk7XG5cbnZhciBkZWZhdWx0UHJvcHMkMSA9IHtcbiAgdGFnOiAnc3Bhbidcbn07XG5cbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMSk7XG5cbiAgdmFyIF9nZXRDb2x1bW5DbGFzc2VzID0gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUsIHdpZHRocyksXG4gICAgICBtb2RpZmllZEF0dHJpYnV0ZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5hdHRyaWJ1dGVzLFxuICAgICAgY29sQ2xhc3NlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmNvbENsYXNzZXM7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb2xDbGFzc2VzLCAncGxhY2Vob2xkZXInICsgKGFuaW1hdGlvbiA/ICctJyArIGFuaW1hdGlvbiA6ICcnKSwgc2l6ZSA/ICdwbGFjZWhvbGRlci0nICsgc2l6ZSA6IGZhbHNlLCBjb2xvciA/ICdiZy0nICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgbW9kaWZpZWRBdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufTtcblxuUGxhY2Vob2xkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE7XG5QbGFjZWhvbGRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTtcbnZhciBQbGFjZWhvbGRlciQxID0gUGxhY2Vob2xkZXI7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJjc3NNb2R1bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzID0ge1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvdXRsaW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3ByaW1hcnknLFxuICB0YWc6IEJ1dHRvbiQxXG59O1xuXG52YXIgUGxhY2Vob2xkZXJCdXR0b24gPSBmdW5jdGlvbiBQbGFjZWhvbGRlckJ1dHRvbihwcm9wcykge1xuICB2YXIgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlKSxcbiAgICAgIG1vZGlmaWVkQXR0cmlidXRlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmF0dHJpYnV0ZXMsXG4gICAgICBjb2xDbGFzc2VzID0gX2dldENvbHVtbkNsYXNzZXMuY29sQ2xhc3NlcztcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShcInBsYWNlaG9sZGVyXCIsIGNsYXNzTmFtZSwgY29sQ2xhc3NlcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQnV0dG9uJDEsIF9leHRlbmRzKHt9LCBtb2RpZmllZEF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfSkpO1xufTtcblxuUGxhY2Vob2xkZXJCdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGxhY2Vob2xkZXJCdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIFBsYWNlaG9sZGVyQnV0dG9uJDEgPSBQbGFjZWhvbGRlckJ1dHRvbjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICB2YXIgQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBkZXRhaWw6IG51bGxcbiAgICB9O1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIHJldHVybiBldnQ7XG4gIH07XG5cbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIE9iamVjdC52YWx1ZXMgPT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICB2YXIgdmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKE8pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoTykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBPW2tleV07XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LnZhbHVlcyA9IHZhbHVlcztcbn0pKCk7XG5cbnZhciBwb2x5ZmlsbCA9IHtcbiAgX19wcm90b19fOiBudWxsXG59O1xuXG5leHBvcnRzLkFjY29yZGlvbiA9IEFjY29yZGlvbiQxO1xuZXhwb3J0cy5BY2NvcmRpb25Cb2R5ID0gQWNjb3JkaW9uSXRlbSQxO1xuZXhwb3J0cy5BY2NvcmRpb25Db250ZXh0ID0gQWNjb3JkaW9uQ29udGV4dDtcbmV4cG9ydHMuQWNjb3JkaW9uSGVhZGVyID0gQWNjb3JkaW9uSGVhZGVyJDE7XG5leHBvcnRzLkFjY29yZGlvbkl0ZW0gPSBBY2NvcmRpb25JdGVtJDM7XG5leHBvcnRzLkFsZXJ0ID0gQWxlcnQ7XG5leHBvcnRzLkJhZGdlID0gQmFkZ2UkMTtcbmV4cG9ydHMuQnJlYWRjcnVtYiA9IEJyZWFkY3J1bWIkMTtcbmV4cG9ydHMuQnJlYWRjcnVtYkl0ZW0gPSBCcmVhZGNydW1iSXRlbSQxO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b24kMTtcbmV4cG9ydHMuQnV0dG9uRHJvcGRvd24gPSBCdXR0b25Ecm9wZG93biQxO1xuZXhwb3J0cy5CdXR0b25Hcm91cCA9IEJ1dHRvbkdyb3VwJDE7XG5leHBvcnRzLkJ1dHRvblRvZ2dsZSA9IEJ1dHRvblRvZ2dsZSQxO1xuZXhwb3J0cy5CdXR0b25Ub29sYmFyID0gQnV0dG9uVG9vbGJhciQxO1xuZXhwb3J0cy5DYXJkID0gQ2FyZCQxO1xuZXhwb3J0cy5DYXJkQm9keSA9IENhcmRCb2R5JDE7XG5leHBvcnRzLkNhcmRDb2x1bW5zID0gQ2FyZENvbHVtbnMkMTtcbmV4cG9ydHMuQ2FyZERlY2sgPSBDYXJkRGVjayQxO1xuZXhwb3J0cy5DYXJkRm9vdGVyID0gQ2FyZEZvb3RlciQxO1xuZXhwb3J0cy5DYXJkR3JvdXAgPSBDYXJkR3JvdXAkMTtcbmV4cG9ydHMuQ2FyZEhlYWRlciA9IENhcmRIZWFkZXIkMTtcbmV4cG9ydHMuQ2FyZEltZyA9IENhcmRJbWckMTtcbmV4cG9ydHMuQ2FyZEltZ092ZXJsYXkgPSBDYXJkSW1nT3ZlcmxheSQxO1xuZXhwb3J0cy5DYXJkTGluayA9IENhcmRMaW5rJDE7XG5leHBvcnRzLkNhcmRTdWJ0aXRsZSA9IENhcmRTdWJ0aXRsZSQxO1xuZXhwb3J0cy5DYXJkVGV4dCA9IENhcmRUZXh0JDE7XG5leHBvcnRzLkNhcmRUaXRsZSA9IENhcmRUaXRsZSQxO1xuZXhwb3J0cy5DYXJvdXNlbCA9IENhcm91c2VsJDE7XG5leHBvcnRzLkNhcm91c2VsQ2FwdGlvbiA9IENhcm91c2VsQ2FwdGlvbiQxO1xuZXhwb3J0cy5DYXJvdXNlbENvbnRyb2wgPSBDYXJvdXNlbENvbnRyb2wkMTtcbmV4cG9ydHMuQ2Fyb3VzZWxJbmRpY2F0b3JzID0gQ2Fyb3VzZWxJbmRpY2F0b3JzJDE7XG5leHBvcnRzLkNhcm91c2VsSXRlbSA9IENhcm91c2VsSXRlbSQxO1xuZXhwb3J0cy5Db2wgPSBDb2wkMTtcbmV4cG9ydHMuQ29sbGFwc2UgPSBDb2xsYXBzZSQxO1xuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXIkMTtcbmV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93biQxO1xuZXhwb3J0cy5Ecm9wZG93bkNvbnRleHQgPSBEcm9wZG93bkNvbnRleHQ7XG5leHBvcnRzLkRyb3Bkb3duSXRlbSA9IERyb3Bkb3duSXRlbSQxO1xuZXhwb3J0cy5Ecm9wZG93bk1lbnUgPSBEcm9wZG93bk1lbnUkMTtcbmV4cG9ydHMuRHJvcGRvd25Ub2dnbGUgPSBEcm9wZG93blRvZ2dsZSQxO1xuZXhwb3J0cy5GYWRlID0gRmFkZTtcbmV4cG9ydHMuRm9ybSA9IEZvcm0kMTtcbmV4cG9ydHMuRm9ybUZlZWRiYWNrID0gRm9ybUZlZWRiYWNrJDE7XG5leHBvcnRzLkZvcm1Hcm91cCA9IEZvcm1Hcm91cCQxO1xuZXhwb3J0cy5Gb3JtVGV4dCA9IEZvcm1UZXh0JDE7XG5leHBvcnRzLklucHV0ID0gSW5wdXQkMTtcbmV4cG9ydHMuSW5wdXRHcm91cCA9IElucHV0R3JvdXAkMTtcbmV4cG9ydHMuSW5wdXRHcm91cFRleHQgPSBJbnB1dEdyb3VwVGV4dCQxO1xuZXhwb3J0cy5MYWJlbCA9IExhYmVsJDE7XG5leHBvcnRzLkxpc3QgPSBMaXN0JDE7XG5leHBvcnRzLkxpc3RHcm91cCA9IExpc3RHcm91cCQxO1xuZXhwb3J0cy5MaXN0R3JvdXBJdGVtID0gTGlzdEdyb3VwSXRlbSQxO1xuZXhwb3J0cy5MaXN0R3JvdXBJdGVtSGVhZGluZyA9IExpc3RHcm91cEl0ZW1IZWFkaW5nJDE7XG5leHBvcnRzLkxpc3RHcm91cEl0ZW1UZXh0ID0gTGlzdEdyb3VwSXRlbVRleHQkMTtcbmV4cG9ydHMuTGlzdElubGluZUl0ZW0gPSBMaXN0SW5saW5lSXRlbSQxO1xuZXhwb3J0cy5NZWRpYSA9IE1lZGlhJDE7XG5leHBvcnRzLk1vZGFsID0gTW9kYWwkMTtcbmV4cG9ydHMuTW9kYWxCb2R5ID0gTW9kYWxCb2R5JDE7XG5leHBvcnRzLk1vZGFsRm9vdGVyID0gTW9kYWxGb290ZXIkMTtcbmV4cG9ydHMuTW9kYWxIZWFkZXIgPSBNb2RhbEhlYWRlciQxO1xuZXhwb3J0cy5OYXYgPSBOYXYkMTtcbmV4cG9ydHMuTmF2SXRlbSA9IE5hdkl0ZW0kMTtcbmV4cG9ydHMuTmF2TGluayA9IE5hdkxpbmskMTtcbmV4cG9ydHMuTmF2YmFyID0gTmF2YmFyJDE7XG5leHBvcnRzLk5hdmJhckJyYW5kID0gTmF2YmFyQnJhbmQkMTtcbmV4cG9ydHMuTmF2YmFyVGV4dCA9IE5hdmJhclRleHQkMTtcbmV4cG9ydHMuTmF2YmFyVG9nZ2xlciA9IE5hdmJhclRvZ2dsZXIkMTtcbmV4cG9ydHMuT2ZmY2FudmFzID0gT2ZmY2FudmFzJDE7XG5leHBvcnRzLk9mZmNhbnZhc0JvZHkgPSBPZmZjYW52YXNCb2R5JDE7XG5leHBvcnRzLk9mZmNhbnZhc0hlYWRlciA9IE9mZmNhbnZhc0hlYWRlciQxO1xuZXhwb3J0cy5QYWdpbmF0aW9uID0gUGFnaW5hdGlvbiQxO1xuZXhwb3J0cy5QYWdpbmF0aW9uSXRlbSA9IFBhZ2luYXRpb25JdGVtJDE7XG5leHBvcnRzLlBhZ2luYXRpb25MaW5rID0gUGFnaW5hdGlvbkxpbmskMTtcbmV4cG9ydHMuUGxhY2Vob2xkZXIgPSBQbGFjZWhvbGRlciQxO1xuZXhwb3J0cy5QbGFjZWhvbGRlckJ1dHRvbiA9IFBsYWNlaG9sZGVyQnV0dG9uJDE7XG5leHBvcnRzLlBvbHlmaWxsID0gcG9seWZpbGw7XG5leHBvcnRzLlBvcG92ZXIgPSBQb3BvdmVyJDE7XG5leHBvcnRzLlBvcG92ZXJCb2R5ID0gUG9wb3ZlckJvZHkkMTtcbmV4cG9ydHMuUG9wb3ZlckhlYWRlciA9IFBvcG92ZXJIZWFkZXIkMTtcbmV4cG9ydHMuUG9wcGVyQ29udGVudCA9IFBvcHBlckNvbnRlbnQkMTtcbmV4cG9ydHMuUG9wcGVyVGFyZ2V0SGVscGVyID0gUG9wcGVyVGFyZ2V0SGVscGVyJDE7XG5leHBvcnRzLlByb2dyZXNzID0gUHJvZ3Jlc3MkMTtcbmV4cG9ydHMuUm93ID0gUm93JDE7XG5leHBvcnRzLlNwaW5uZXIgPSBTcGlubmVyJDE7XG5leHBvcnRzLlRhYkNvbnRlbnQgPSBUYWJDb250ZW50JDE7XG5leHBvcnRzLlRhYlBhbmUgPSBUYWJQYW5lO1xuZXhwb3J0cy5UYWJsZSA9IFRhYmxlJDE7XG5leHBvcnRzLlRvYXN0ID0gVG9hc3Q7XG5leHBvcnRzLlRvYXN0Qm9keSA9IFRvYXN0Qm9keSQxO1xuZXhwb3J0cy5Ub2FzdEhlYWRlciA9IFRvYXN0SGVhZGVyJDE7XG5leHBvcnRzLlRvb2x0aXAgPSBUb29sdGlwJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZEFjY29yZGlvbiA9IFVuY29udHJvbGxlZEFjY29yZGlvbiQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRBbGVydCA9IFVuY29udHJvbGxlZEFsZXJ0JDE7XG5leHBvcnRzLlVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duID0gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd247XG5leHBvcnRzLlVuY29udHJvbGxlZENhcm91c2VsID0gVW5jb250cm9sbGVkQ2Fyb3VzZWwkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQ29sbGFwc2UgPSBVbmNvbnRyb2xsZWRDb2xsYXBzZSQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWREcm9wZG93biA9IFVuY29udHJvbGxlZERyb3Bkb3duO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRQb3BvdmVyID0gVW5jb250cm9sbGVkUG9wb3ZlcjtcbmV4cG9ydHMuVW5jb250cm9sbGVkVG9vbHRpcCA9IFVuY29udHJvbGxlZFRvb2x0aXA7XG5leHBvcnRzLlV0aWwgPSB1dGlscztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0c3RyYXAuY2pzLm1hcFxuIiwiLy9pbXBvcnRzIGFwaVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG4vL2ltcG9ydHMgc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnXHJcblxyXG4vL2ltcG9ydHMgYmlibGlvdGVjYXNcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJ3ByaW1lcmVhY3QvcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XHJcbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lciB9IGZyb20gJ3ByaW1lcmVhY3QvcHJvZ3Jlc3NzcGlubmVyJztcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5cclxuLy9pbXBvcnRzIHNlcnZpY2VzXHJcbmltcG9ydCB7IExvZ2luRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dpbkRhdGFTZXJ2aWNlJztcclxuXHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyBzaG93QnV0dG9uTG9naW5BY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2xvZ2luX2xvZ291dCc7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZU1hbmFnZXIgfSBmcm9tICdAY2hha3JhLXVpL2NvbG9yLW1vZGUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nQ3JlZGVudGlhbHMsIHNldExvYWRpbmdDcmVkZW50aWFsc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocm91dGVyLmFzUGF0aCA9PT0gJy9sb2dpbicgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dEVtYWlsQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWx1ZSgnZW1haWwnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRQYXNzd29yZENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoJ3Bhc3N3b3JkJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUsIGVycm9ycywgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtKHsgbW9kZTogJ29uQ2hhbmdlJyB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmdDcmVkZW50aWFscyh0cnVlKTtcclxuICAgICAgICBpZiAoZGF0YS5lbWFpbCAhPT0gXCJcIiAmJiBkYXRhLnBhc3N3b3JkICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIExvZ2luRGF0YVNlcnZpY2UubG9nSW4oZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgJ0JlYXJlciAnICsgcmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzaG93QnV0dG9uTG9naW5BY3Rpb24oZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlByZWVuY2hhIG9zIGNhbXBvcywgRS1tYWlsIGUgU2VuaGFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWRlbnRpYWxzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dF9sb2dpbn0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hfbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17e21hcmdpblRvcDogXCIxNXB4XCJ9fT5FLW1haWw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0RW1haWxDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjE1cHhcIn19PlNlbmhhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgb25CbHVyLCBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sb3I6IGVycm9ycy5ub21lID8gJ3JlZCcgOiAnJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dFBhc3N3b3JkQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vha0xhYmVsPVwiRnJhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bUxhYmVsPVwiTcOpZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmdMYWJlbD1cIkZvcnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRMYWJlbD1cIlBvciBmYXZvciBlbnRyZSBjb20gYSBzZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIiwgY29sb3I6IFwiIzAwMFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIn19IHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkVudHJhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdDcmVkZW50aWFscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKExvZ2luKSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBiYXNlVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MWA7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBMb2dpbkRhdGFTZXJ2aWNlID0ge1xyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgICBpc0xvZ2dlZCxcclxuICAgIHZhbGlkYXRlVG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nSW4oZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICBsZXQgZGF0YSA9IHtlbWFpbCwgcGFzc3dvcmR9XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChiYXNlVXJsKycvYXV0aC9zaWduaW4nLCBkYXRhLCB7fSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ091dCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc0xvZ2dlZCgpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICByZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZVRva2VuKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYmFzZVVybCsnL2F1dGgvdmFsaWRhdGVUb2tlbicsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0iLCJleHBvcnQgY29uc3QgU0hPV19CVVRUT05fTE9HSU4gPSBcIlNIT1dfQlVUVE9OX0xPR0lOXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUxFQ1RFRF9EQVRBID0gXCJMT0FEX1NFTEVDVEVEX0RBVEFcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfQU5JTUVfTElTVCA9IFwiTE9BRF9BTklNRV9MSVNUXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0VOVElUWV9TRUxFQ1RFRCA9IFwiTE9BRF9VU0VSX0VOVElUWV9TRUxFQ1RFRFwiXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRU5USVRZX0xJU1QgPSBcIkxPQURfVVNFUl9FTlRJVFlfTElTVFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUNDRVNTX1BST0ZJTEVfU0VMRUNURUQgPSBcIkxPQURfQUNDRVNTX1BST0ZJTEVfU0VMRUNURURcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfQUNDRVNTX1BST0ZJTEVfTElTVCA9IFwiTE9BRF9BQ0NFU1NfUFJPRklMRV9MSVNUXCJcclxuIiwiaW1wb3J0IHsgU0hPV19CVVRUT05fTE9HSU4gfSBmcm9tIFwiLi8uLi8uLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0J1dHRvbkxvZ2luQWN0aW9uID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFNIT1dfQlVUVE9OX0xPR0lOLFxyXG4gIHBheWxvYWRcclxufSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dF9sb2dpblwiOiBcImxvZ2luX2xheW91dF9sb2dpbl9fMUFxRXlcIixcblx0XCJib3hfbG9naW5cIjogXCJsb2dpbl9ib3hfbG9naW5fXzEtNVVSXCIsXG5cdFwiYm94X21lc3NhZ2VzXCI6IFwibG9naW5fYm94X21lc3NhZ2VzX18yVWM5Z1wiLFxuXHRcInBhc3N3b3JkXCI6IFwibG9naW5fcGFzc3dvcmRfXzFaTUkxXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L3Bhc3N3b3JkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvcHJvZ3Jlc3NzcGlubmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9