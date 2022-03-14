webpackHotUpdate_N_E("pages/userEntity/form",{

/***/ "./node_modules/primereact/datatable/datatable.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/datatable/datatable.esm.js ***!
  \************************************************************/
/*! exports provided: DataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return DataTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/paginator */ "./node_modules/primereact/paginator/paginator.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/virtualscroller */ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js");













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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowRadioButton = /*#__PURE__*/function (_Component) {
  _inherits(RowRadioButton, _Component);

  var _super = _createSuper$c(RowRadioButton);

  function RowRadioButton(props) {
    var _this;

    _classCallCheck(this, RowRadioButton);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowRadioButton, [{
    key: "onClick",
    value: function onClick(event) {
      if (!this.props.disabled) {
        this.props.onChange(event);
        this.input.focus();
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.onClick(event);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.code === 'Space') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-radiobutton p-component', {
        'p-radiobutton-focused': this.state.focused
      });
      var boxClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-radiobutton-box p-component', {
        'p-highlight': this.props.checked,
        'p-focus': this.state.focused,
        'p-disabled': this.props.disabled
      });
      var name = "".concat(this.props.tableSelector, "_dt_radio");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-hidden-accessible"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: name,
        ref: function ref(el) {
          return _this2.input = el;
        },
        type: "radio",
        checked: this.props.checked,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: boxClassName,
        onClick: this.onClick,
        role: "radio",
        "aria-checked": this.props.checked
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-radiobutton-icon"
      })));
    }
  }]);

  return RowRadioButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowCheckbox = /*#__PURE__*/function (_Component) {
  _inherits(RowCheckbox, _Component);

  var _super = _createSuper$b(RowCheckbox);

  function RowCheckbox(props) {
    var _this;

    _classCallCheck(this, RowCheckbox);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowCheckbox, [{
    key: "onClick",
    value: function onClick(event) {
      if (!this.props.disabled) {
        this.setState({
          focused: true
        });
        this.props.onChange(event);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.code === 'Space') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-checkbox p-component', {
        'p-checkbox-focused': this.state.focused
      });
      var boxClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-checkbox-box p-component', {
        'p-highlight': this.props.checked,
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      });
      var iconClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-checkbox-icon', {
        'pi pi-check': this.props.checked
      });
      var tabIndex = this.props.disabled ? null : '0';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className,
        onClick: this.onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: boxClassName,
        role: "checkbox",
        "aria-checked": this.props.checked,
        tabIndex: tabIndex,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      })));
    }
  }]);

  return RowCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BodyCell = /*#__PURE__*/function (_Component) {
  _inherits(BodyCell, _Component);

  var _super = _createSuper$a(BodyCell);

  function BodyCell(props) {
    var _this;

    _classCallCheck(this, BodyCell);

    _this = _super.call(this, props);
    _this.state = {
      editing: props.editing,
      editingRowData: props.rowData,
      styleObject: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onEditorFocus = _this.onEditorFocus.bind(_assertThisInitialized(_this));
    _this.onRowToggle = _this.onRowToggle.bind(_assertThisInitialized(_this));
    _this.onRadioChange = _this.onRadioChange.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    _this.onRowEditSave = _this.onRowEditSave.bind(_assertThisInitialized(_this));
    _this.onRowEditCancel = _this.onRowEditCancel.bind(_assertThisInitialized(_this));
    _this.onRowEditInit = _this.onRowEditInit.bind(_assertThisInitialized(_this));
    _this.editorCallback = _this.editorCallback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BodyCell, [{
    key: "field",
    get: function get() {
      return this.getColumnProp('field') || "field_".concat(this.props.index);
    }
  }, {
    key: "isEditable",
    value: function isEditable() {
      return this.getColumnProp('editor');
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.selection ? this.props.selection instanceof Array ? this.findIndex(this.props.selection) > -1 : this.equals(this.props.selection) : false;
    }
  }, {
    key: "equalsData",
    value: function equalsData(data) {
      return this.props.compareSelectionBy === 'equals' ? data === this.props.rowData : primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(data, this.props.rowData, this.props.dataKey);
    }
  }, {
    key: "equals",
    value: function equals(selectedCell) {
      return (selectedCell.rowIndex === this.props.rowIndex || this.equalsData(selectedCell.rowData)) && (selectedCell.field === this.field || selectedCell.cellIndex === this.props.index);
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(target) {
      return this.el && !(this.el.isSameNode(target) || this.el.contains(target));
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(prop) {
      return this.props.column ? this.props.column.props[prop] : null;
    }
  }, {
    key: "getVirtualScrollerOption",
    value: function getVirtualScrollerOption(option) {
      return this.props.virtualScrollerOptions ? this.props.virtualScrollerOptions[option] : null;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var bodyStyle = this.getColumnProp('bodyStyle');
      var columnStyle = this.getColumnProp('style');
      return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, bodyStyle, this.state.styleObject) : Object.assign({}, columnStyle, bodyStyle);
    }
  }, {
    key: "getCellParams",
    value: function getCellParams() {
      return {
        value: this.resolveFieldData(),
        field: this.field,
        rowData: this.props.rowData,
        rowIndex: this.props.rowIndex,
        cellIndex: this.props.index,
        selected: this.isSelected(),
        column: this.props.column,
        props: this.props
      };
    }
  }, {
    key: "getCellCallbackParams",
    value: function getCellCallbackParams(event) {
      var params = this.getCellParams();
      return _objectSpread$7({
        originalEvent: event
      }, params);
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data || this.props.rowData, this.field);
    }
  }, {
    key: "getEditingRowData",
    value: function getEditingRowData() {
      return this.props.editingMeta && this.props.editingMeta[this.props.rowIndex] ? this.props.editingMeta[this.props.rowIndex].data : this.props.rowData;
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex(cellSelected) {
      return this.props.allowCellSelection ? cellSelected ? 0 : this.props.rowIndex === 0 && this.props.index === 0 ? this.props.tabIndex : -1 : null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(collection) {
      var _this2 = this;

      return (collection || []).findIndex(function (data) {
        return _this2.equals(data);
      });
    }
  }, {
    key: "closeCell",
    value: function closeCell(event) {
      var _this3 = this;

      var params = this.getCellCallbackParams(event);
      var onBeforeCellEditHide = this.getColumnProp('onBeforeCellEditHide');

      if (onBeforeCellEditHide) {
        onBeforeCellEditHide(params);
      }
      /* When using the 'tab' key, the focus event of the next cell is not called in IE. */


      setTimeout(function () {
        _this3.setState({
          editing: false
        }, function () {
          _this3.unbindDocumentEditListener();

          primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].off('overlay-click', _this3.overlayEventListener);
          _this3.overlayEventListener = null;
        });
      }, 1);
    }
  }, {
    key: "switchCellToViewMode",
    value: function switchCellToViewMode(event, submit) {
      var callbackParams = this.getCellCallbackParams(event);
      var newRowData = this.state.editingRowData;
      var newValue = this.resolveFieldData(newRowData);

      var params = _objectSpread$7(_objectSpread$7({}, callbackParams), {}, {
        newRowData: newRowData,
        newValue: newValue
      });

      var onCellEditCancel = this.getColumnProp('onCellEditCancel');
      var cellEditValidator = this.getColumnProp('cellEditValidator');
      var onCellEditComplete = this.getColumnProp('onCellEditComplete');

      if (!submit && onCellEditCancel) {
        onCellEditCancel(params);
      }

      var valid = true;

      if (cellEditValidator) {
        valid = cellEditValidator(params);
      }

      if (valid) {
        if (submit && onCellEditComplete) {
          onCellEditComplete(params);
        }

        this.closeCell(event);
      } else {
        event.preventDefault();
      }
    }
  }, {
    key: "findNextSelectableCell",
    value: function findNextSelectableCell(cell) {
      var nextCell = cell.nextElementSibling;
      return nextCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(nextCell, 'p-selectable-cell') ? nextCell : this.findNextSelectableCell(nextCell) : null;
    }
  }, {
    key: "findPrevSelectableCell",
    value: function findPrevSelectableCell(cell) {
      var prevCell = cell.previousElementSibling;
      return prevCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(prevCell, 'p-selectable-cell') ? prevCell : this.findPrevSelectableCell(prevCell) : null;
    }
  }, {
    key: "findDownSelectableCell",
    value: function findDownSelectableCell(cell) {
      var downRow = cell.parentElement.nextElementSibling;
      var downCell = downRow ? downRow.children[this.props.index] : null;
      return downRow && downCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(downRow, 'p-selectable-row') && primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(downCell, 'p-selectable-cell') ? downCell : this.findDownSelectableCell(downCell) : null;
    }
  }, {
    key: "findUpSelectableCell",
    value: function findUpSelectableCell(cell) {
      var upRow = cell.parentElement.previousElementSibling;
      var upCell = upRow ? upRow.children[this.props.index] : null;
      return upRow && upCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(upRow, 'p-selectable-row') && primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(upCell, 'p-selectable-cell') ? upCell : this.findUpSelectableCell(upCell) : null;
    }
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex(currentCell, nextCell) {
      if (currentCell && nextCell) {
        currentCell.tabIndex = -1;
        nextCell.tabIndex = this.props.tabIndex;
      }
    }
  }, {
    key: "focusOnElement",
    value: function focusOnElement() {
      var _this4 = this;

      clearTimeout(this.tabindexTimeout);
      this.tabindexTimeout = setTimeout(function () {
        if (_this4.state.editing) {
          var focusableEl = _this4.props.editMode === 'cell' ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getFirstFocusableElement(_this4.el, ':not(.p-cell-editor-key-helper)') : primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(_this4.el, '.p-row-editor-save');
          focusableEl && focusableEl.focus();
        }

        _this4.keyHelper && (_this4.keyHelper.tabIndex = _this4.state.editing ? -1 : 0);
      }, 1);
    }
  }, {
    key: "focusOnInit",
    value: function focusOnInit() {
      var _this5 = this;

      clearTimeout(this.initFocusTimeout);
      this.initFocusTimeout = setTimeout(function () {
        var focusableEl = _this5.props.editMode === 'row' ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(_this5.el, '.p-row-editor-init') : null;
        focusableEl && focusableEl.focus();
      }, 1);
    }
  }, {
    key: "updateStickyPosition",
    value: function updateStickyPosition() {
      if (this.getColumnProp('frozen')) {
        var styleObject = _objectSpread$7({}, this.state.styleObject);

        var align = this.getColumnProp('alignFrozen');

        if (align === 'right') {
          var right = 0;
          var next = this.el.nextElementSibling;

          if (next) {
            right = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(next) + parseFloat(next.style.right || 0);
          }

          styleObject['right'] = right + 'px';
        } else {
          var left = 0;
          var prev = this.el.previousElementSibling;

          if (prev) {
            left = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }

          styleObject['left'] = left + 'px';
        }

        var isSameStyle = this.state.styleObject['left'] === styleObject['left'] && this.state.styleObject['right'] === styleObject['right'];
        !isSameStyle && this.setState({
          styleObject: styleObject
        });
      }
    }
  }, {
    key: "editorCallback",
    value: function editorCallback(val) {
      var editingRowData = _objectSpread$7({}, this.state.editingRowData);

      editingRowData[this.field] = val;
      this.setState({
        editingRowData: editingRowData
      }); // update editing meta for complete methods on row mode

      this.props.editingMeta[this.props.rowIndex].data[this.field] = val;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var _this6 = this;

      var params = this.getCellCallbackParams(event);

      if (this.props.editMode !== 'row' && this.isEditable() && !this.state.editing && (this.props.selectOnEdit || !this.props.selectOnEdit && this.props.selected)) {
        this.selfClick = true;
        var onBeforeCellEditShow = this.getColumnProp('onBeforeCellEditShow');
        var onCellEditInit = this.getColumnProp('onCellEditInit');
        var cellEditValidatorEvent = this.getColumnProp('cellEditValidatorEvent');

        if (onBeforeCellEditShow) {
          onBeforeCellEditShow(params);
        } // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.


        setTimeout(function () {
          _this6.setState({
            editing: true
          }, function () {
            if (onCellEditInit) {
              onCellEditInit(params);
            }

            if (cellEditValidatorEvent === 'click') {
              _this6.bindDocumentEditListener();

              _this6.overlayEventListener = function (e) {
                if (!_this6.isOutsideClicked(e.target)) {
                  _this6.selfClick = true;
                }
              };

              primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].on('overlay-click', _this6.overlayEventListener);
            }
          });
        }, 1);
      }

      if (this.props.allowCellSelection && this.props.onClick) {
        this.props.onClick(params);
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var params = this.getCellCallbackParams(event);

      if (this.props.onMouseDown) {
        this.props.onMouseDown(params);
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      var params = this.getCellCallbackParams(event);

      if (this.props.onMouseUp) {
        this.props.onMouseUp(params);
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.props.editMode !== 'row') {
        if (event.which === 13 || event.which === 9) {
          // tab || enter
          this.switchCellToViewMode(event, true);
        }

        if (event.which === 27) {
          // escape
          this.switchCellToViewMode(event, false);
        }
      }

      if (this.props.allowCellSelection) {
        var target = event.target,
            cell = event.currentTarget;

        switch (event.which) {
          //left arrow
          case 37:
            var prevCell = this.findPrevSelectableCell(cell);

            if (prevCell) {
              this.changeTabIndex(cell, prevCell);
              prevCell.focus();
            }

            event.preventDefault();
            break;
          //right arrow

          case 39:
            var nextCell = this.findNextSelectableCell(cell);

            if (nextCell) {
              this.changeTabIndex(cell, nextCell);
              nextCell.focus();
            }

            event.preventDefault();
            break;
          //up arrow

          case 38:
            var upCell = this.findUpSelectableCell(cell);

            if (upCell) {
              this.changeTabIndex(cell, upCell);
              upCell.focus();
            }

            event.preventDefault();
            break;
          //down arrow

          case 40:
            var downCell = this.findDownSelectableCell(cell);

            if (downCell) {
              this.changeTabIndex(cell, downCell);
              downCell.focus();
            }

            event.preventDefault();
            break;
          //enter

          case 13:
            // @deprecated
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isClickable(target)) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
          //space

          case 32:
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isClickable(target) && !target.readOnly) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
        }
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      this.selfClick = false;

      if (this.props.editMode !== 'row' && this.state.editing && this.getColumnProp('cellEditValidatorEvent') === 'blur') {
        this.switchCellToViewMode(event, true);
      }
    }
  }, {
    key: "onEditorFocus",
    value: function onEditorFocus(event) {
      this.onClick(event);
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(event) {
      this.props.onRadioChange({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.rowIndex
      });
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event) {
      this.props.onCheckboxChange({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.rowIndex
      });
    }
  }, {
    key: "onRowToggle",
    value: function onRowToggle(event) {
      this.props.onRowToggle({
        originalEvent: event,
        data: this.props.rowData
      });
      event.preventDefault();
    }
  }, {
    key: "onRowEditInit",
    value: function onRowEditInit(event) {
      this.props.onRowEditInit({
        originalEvent: event,
        data: this.props.rowData,
        newData: this.getEditingRowData(),
        field: this.field,
        index: this.props.rowIndex
      });
    }
  }, {
    key: "onRowEditSave",
    value: function onRowEditSave(event) {
      this.props.onRowEditSave({
        originalEvent: event,
        data: this.props.rowData,
        newData: this.getEditingRowData(),
        field: this.field,
        index: this.props.rowIndex
      });
      this.focusOnInit();
    }
  }, {
    key: "onRowEditCancel",
    value: function onRowEditCancel(event) {
      this.props.onRowEditCancel({
        originalEvent: event,
        data: this.props.rowData,
        newData: this.getEditingRowData(),
        field: this.field,
        index: this.props.rowIndex
      });
      this.focusOnInit();
    }
  }, {
    key: "bindDocumentEditListener",
    value: function bindDocumentEditListener() {
      var _this7 = this;

      if (!this.documentEditListener) {
        this.documentEditListener = function (e) {
          if (!_this7.selfClick && _this7.isOutsideClicked(e.target)) {
            _this7.switchCellToViewMode(e, true);
          }

          _this7.selfClick = false;
        };

        document.addEventListener('click', this.documentEditListener, true);
      }
    }
  }, {
    key: "unbindDocumentEditListener",
    value: function unbindDocumentEditListener() {
      if (this.documentEditListener) {
        document.removeEventListener('click', this.documentEditListener, true);
        this.documentEditListener = null;
        this.selfClick = false;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }

      if (this.props.editMode === 'cell' || this.props.editMode === 'row') {
        this.focusOnElement();

        if (prevProps.editingMeta !== this.props.editingMeta) {
          this.setState({
            editingRowData: this.getEditingRowData()
          });
        }

        if (prevState.editing !== this.state.editing) {
          var callbackParams = this.getCellCallbackParams();

          var params = _objectSpread$7(_objectSpread$7({}, callbackParams), {}, {
            editing: this.state.editing
          });

          this.props.onEditingMetaChange(params);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentEditListener();

      if (this.overlayEventListener) {
        primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].off('overlay-click', this.overlayEventListener);
        this.overlayEventListener = null;
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      var options = this.getVirtualScrollerOption('getLoaderOptions')(this.props.rowIndex, {
        cellIndex: this.props.index,
        cellFirst: this.props.index === 0,
        cellLast: this.props.index === this.getVirtualScrollerOption('columns').length - 1,
        cellEven: this.props.index % 2 === 0,
        cellOdd: this.props.index % 2 !== 0,
        column: this.props.column,
        field: this.field
      });
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getVirtualScrollerOption('loadingTemplate'), options);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, content);
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this8 = this;

      var content, editorKeyHelper;
      var cellSelected = this.props.allowCellSelection && this.isSelected();
      var isRowEditor = this.props.editMode === 'row';
      var tabIndex = this.getTabIndex(cellSelected);
      var selectionMode = this.getColumnProp('selectionMode');
      var rowReorder = this.getColumnProp('rowReorder');
      var expander = this.getColumnProp('expander');
      var rowEditor = this.getColumnProp('rowEditor');
      var header = this.getColumnProp('header');
      var body = this.getColumnProp('body');
      var editor = this.getColumnProp('editor');
      var frozen = this.getColumnProp('frozen');
      var align = this.getColumnProp('align');
      var value = this.resolveFieldData();
      var cellClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getPropValue(this.props.cellClassName, value, {
        props: this.props.tableProps,
        rowData: this.props.rowData,
        column: this.props.column
      });
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])(this.getColumnProp('bodyClassName'), this.getColumnProp('className'), cellClassName, _defineProperty({
        'p-selection-column': selectionMode !== null,
        'p-editable-column': editor,
        'p-cell-editing': editor && this.state.editing,
        'p-frozen-column': frozen,
        'p-selectable-cell': this.props.allowCellSelection && this.props.isSelectable({
          data: this.getCellParams(),
          index: this.props.rowIndex
        }),
        'p-highlight': cellSelected
      }, "p-align-".concat(align), !!align));
      var style = this.getStyle();
      var title = this.props.responsiveLayout === 'stack' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-column-title"
      }, primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(header, {
        props: this.props.tableProps
      }));

      if (selectionMode) {
        var showSelection = this.props.showSelectionElement ? this.props.showSelectionElement(this.props.rowData, {
          rowIndex: this.props.rowIndex,
          props: this.props.tableProps
        }) : true;
        content = showSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selectionMode === 'single' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowRadioButton, {
          checked: this.props.selected,
          onChange: this.onRadioChange,
          tabIndex: this.props.tabIndex,
          tableSelector: this.props.tableSelector
        }), selectionMode === 'multiple' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowCheckbox, {
          checked: this.props.selected,
          onChange: this.onCheckboxChange,
          tabIndex: this.props.tabIndex
        }));
      } else if (rowReorder) {
        var showReorder = this.props.showRowReorderElement ? this.props.showRowReorderElement(this.props.rowData, {
          rowIndex: this.props.rowIndex,
          props: this.props.tableProps
        }) : true;
        content = showReorder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-datatable-reorderablerow-handle', this.getColumnProp('rowReorderIcon'))
        });
      } else if (expander) {
        var iconClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-row-toggler-icon', this.props.expanded ? this.props.expandedRowIcon : this.props.collapsedRowIcon);
        var ariaControls = "".concat(this.props.tableSelector, "_content_").concat(this.props.rowIndex, "_expanded");
        var expanderProps = {
          onClick: this.onRowToggle,
          className: 'p-row-toggler p-link',
          iconClassName: iconClassName
        };
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: expanderProps.className,
          onClick: expanderProps.onClick,
          type: "button",
          "aria-expanded": this.props.expanded,
          "aria-controls": ariaControls,
          tabIndex: this.props.tabIndex
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: expanderProps.iconClassName
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], null));

        if (body) {
          expanderProps['element'] = content;
          content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(body, this.props.rowData, {
            column: this.props.column,
            field: this.field,
            rowIndex: this.props.rowIndex,
            frozenRow: this.props.frozenRow,
            props: this.props.tableProps,
            expander: expanderProps
          });
        }
      } else if (isRowEditor && rowEditor) {
        var rowEditorProps = {};

        if (this.state.editing) {
          rowEditorProps = {
            editing: true,
            onSaveClick: this.onRowEditSave,
            saveClassName: 'p-row-editor-save p-link',
            saveIconClassName: 'p-row-editor-save-icon pi pi-fw pi-check',
            onCancelClick: this.onRowEditCancel,
            cancelClassName: 'p-row-editor-cancel p-link',
            cancelIconClassName: 'p-row-editor-cancel-icon pi pi-fw pi-times'
          };
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            onClick: rowEditorProps.onSaveClick,
            className: rowEditorProps.saveClassName,
            tabIndex: this.props.tabIndex
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: rowEditorProps.saveIconClassName
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            onClick: rowEditorProps.onCancelClick,
            className: rowEditorProps.cancelClassName,
            tabIndex: this.props.tabIndex
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: rowEditorProps.cancelIconClassName
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], null)));
        } else {
          rowEditorProps = {
            editing: false,
            onInitClick: this.onRowEditInit,
            initClassName: 'p-row-editor-init p-link',
            initIconClassName: 'p-row-editor-init-icon pi pi-fw pi-pencil'
          };
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            onClick: rowEditorProps.onInitClick,
            className: rowEditorProps.initClassName,
            tabIndex: this.props.tabIndex
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: rowEditorProps.initIconClassName
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], null));
        }

        if (body) {
          rowEditorProps['element'] = content;
          content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(body, this.props.rowData, {
            column: this.props.column,
            field: this.field,
            rowIndex: this.props.rowIndex,
            frozenRow: this.props.frozenRow,
            props: this.props.tableProps,
            rowEditor: rowEditorProps
          });
        }
      } else if (body && !this.state.editing) {
        content = body ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(body, this.props.rowData, {
          column: this.props.column,
          field: this.field,
          rowIndex: this.props.rowIndex,
          frozenRow: this.props.frozenRow,
          props: this.props.tableProps
        }) : value;
      } else if (editor && this.state.editing) {
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(editor, {
          rowData: this.state.editingRowData,
          value: this.resolveFieldData(this.state.editingRowData),
          column: this.props.column,
          field: this.field,
          rowIndex: this.props.rowIndex,
          frozenRow: this.props.frozenRow,
          props: this.props.tableProps,
          editorCallback: this.editorCallback
        });
      } else {
        content = value;
      }

      if (!isRowEditor && editor) {
        /* eslint-disable */
        editorKeyHelper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          tabIndex: "0",
          ref: function ref(el) {
            return _this8.keyHelper = el;
          },
          className: "p-cell-editor-key-helper p-hidden-accessible",
          onFocus: this.onEditorFocus
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null));
        /* eslint-enable */
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        ref: function ref(el) {
          return _this8.el = el;
        },
        style: style,
        className: className,
        rowSpan: this.props.rowSpan,
        tabIndex: tabIndex,
        role: "cell",
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }, editorKeyHelper, title, content);
    }
  }, {
    key: "render",
    value: function render() {
      return this.getVirtualScrollerOption('loading') ? this.renderLoading() : this.renderElement();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.editMode === 'row' && nextProps.editing !== prevState.editing) {
        return {
          editing: nextProps.editing
        };
      }

      return null;
    }
  }]);

  return BodyCell;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BodyRow = /*#__PURE__*/function (_Component) {
  _inherits(BodyRow, _Component);

  var _super = _createSuper$9(BodyRow);

  function BodyRow(props) {
    var _this;

    _classCallCheck(this, BodyRow);

    _this = _super.call(this, props);

    if (!_this.props.onRowEditChange) {
      _this.state = {
        editing: false
      };
    }

    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onDoubleClick = _this.onDoubleClick.bind(_assertThisInitialized(_this));
    _this.onRightClick = _this.onRightClick.bind(_assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_this));
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onEditInit = _this.onEditInit.bind(_assertThisInitialized(_this));
    _this.onEditSave = _this.onEditSave.bind(_assertThisInitialized(_this));
    _this.onEditCancel = _this.onEditCancel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BodyRow, [{
    key: "isFocusable",
    value: function isFocusable() {
      return this.props.selectionMode && this.props.selectionModeInColumn !== 'single' && this.props.selectionModeInColumn !== 'multiple';
    }
  }, {
    key: "isGrouped",
    value: function isGrouped(column) {
      if (this.props.groupRowsBy && this.getColumnProp(column, 'field')) {
        if (Array.isArray(this.props.groupRowsBy)) return this.props.groupRowsBy.indexOf(column.props.field) > -1;else return this.props.groupRowsBy === column.props.field;
      }

      return false;
    }
  }, {
    key: "equals",
    value: function equals(data1, data2) {
      return this.props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(col, prop) {
      return col ? col.props[prop] : null;
    }
  }, {
    key: "getEditing",
    value: function getEditing() {
      return this.props.onRowEditChange ? this.props.editing : this.state.editing;
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      return this.isFocusable() && !this.props.allowCellSelection ? this.props.index === 0 ? this.props.tabIndex : -1 : null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(collection, rowData) {
      var _this2 = this;

      return (collection || []).findIndex(function (data) {
        return _this2.equals(rowData, data);
      });
    }
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex(currentRow, nextRow) {
      if (currentRow && nextRow) {
        currentRow.tabIndex = -1;
        nextRow.tabIndex = this.props.tabIndex;
      }
    }
  }, {
    key: "findNextSelectableRow",
    value: function findNextSelectableRow(row) {
      var nextRow = row.nextElementSibling;
      return nextRow ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(nextRow, 'p-selectable-row') ? nextRow : this.findNextSelectableRow(nextRow) : null;
    }
  }, {
    key: "findPrevSelectableRow",
    value: function findPrevSelectableRow(row) {
      var prevRow = row.previousElementSibling;
      return prevRow ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(prevRow, 'p-selectable-row') ? prevRow : this.findPrevSelectableRow(prevRow) : null;
    }
  }, {
    key: "shouldRenderBodyCell",
    value: function shouldRenderBodyCell(value, column, i) {
      if (this.getColumnProp(column, 'hidden')) {
        return false;
      } else if (this.props.rowGroupMode && this.props.rowGroupMode === 'rowspan' && this.isGrouped(column)) {
        var prevRowData = value[i - 1];

        if (prevRowData) {
          var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(value[i], this.getColumnProp(column, 'field'));
          var previousRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(prevRowData, this.getColumnProp(column, 'field'));
          return currentRowFieldData !== previousRowFieldData;
        }
      }

      return true;
    }
  }, {
    key: "calculateRowGroupSize",
    value: function calculateRowGroupSize(value, column, index) {
      if (this.isGrouped(column)) {
        var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(value[index], this.getColumnProp(column, 'field'));
        var nextRowFieldData = currentRowFieldData;
        var groupRowSpan = 0;

        while (currentRowFieldData === nextRowFieldData) {
          groupRowSpan++;
          var nextRowData = value[++index];

          if (nextRowData) {
            nextRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(nextRowData, this.getColumnProp(column, 'field'));
          } else {
            break;
          }
        }

        return groupRowSpan === 1 ? null : groupRowSpan;
      } else {
        return null;
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      this.props.onRowClick({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDoubleClick",
    value: function onDoubleClick(event) {
      this.props.onRowDoubleClick({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onRightClick",
    value: function onRightClick(event) {
      this.props.onRowRightClick({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      this.props.onRowTouchEnd(event);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.isFocusable() && !this.props.allowCellSelection) {
        var target = event.target,
            row = event.currentTarget;

        switch (event.which) {
          //down arrow
          case 40:
            var nextRow = this.findNextSelectableRow(row);

            if (nextRow) {
              this.changeTabIndex(row, nextRow);
              nextRow.focus();
            }

            event.preventDefault();
            break;
          //up arrow

          case 38:
            var prevRow = this.findPrevSelectableRow(row);

            if (prevRow) {
              this.changeTabIndex(row, prevRow);
              prevRow.focus();
            }

            event.preventDefault();
            break;
          //enter

          case 13:
            // @deprecated
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isClickable(target)) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
          //space

          case 32:
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isClickable(target) && !target.readOnly) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
        }
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.props.onRowMouseDown({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      this.props.onRowMouseUp({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      this.props.onRowDragStart({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      this.props.onRowDragOver({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.props.onRowDragLeave({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event) {
      this.props.onRowDragEnd({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      this.props.onRowDrop({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onEditChange",
    value: function onEditChange(e, editing) {
      if (this.props.onRowEditChange) {
        var editingRows;
        var dataKey = this.props.dataKey;
        var originalEvent = e.originalEvent,
            data = e.data,
            index = e.index;

        if (dataKey) {
          var dataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data, dataKey));
          editingRows = this.props.editingRows ? _objectSpread$6({}, this.props.editingRows) : {};
          if (editingRows[dataKeyValue] != null) delete editingRows[dataKeyValue];else editingRows[dataKeyValue] = true;
        } else {
          var editingRowIndex = this.findIndex(this.props.editingRows, data);
          editingRows = this.props.editingRows ? _toConsumableArray(this.props.editingRows) : [];
          if (editingRowIndex !== -1) editingRows = editingRows.filter(function (val, i) {
            return i !== editingRowIndex;
          });else editingRows.push(data);
        }

        this.props.onRowEditChange({
          originalEvent: originalEvent,
          data: editingRows,
          index: index
        });
      } else {
        this.setState({
          editing: editing
        });
      }
    }
  }, {
    key: "onEditInit",
    value: function onEditInit(e) {
      var event = e.originalEvent;

      if (this.props.onRowEditInit) {
        this.props.onRowEditInit({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.index
        });
      }

      this.onEditChange(e, true);
      event.preventDefault();
    }
  }, {
    key: "onEditSave",
    value: function onEditSave(e) {
      var event = e.originalEvent;
      var valid = this.props.rowEditValidator ? this.props.rowEditValidator(this.props.rowData, {
        props: this.props.tableProps
      }) : true;

      if (this.props.onRowEditSave) {
        this.props.onRowEditSave({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.index,
          valid: valid
        });
      }

      if (valid) {
        if (this.props.onRowEditComplete) {
          this.props.onRowEditComplete(e);
        }

        this.onEditChange(e, false);
      }

      event.preventDefault();
    }
  }, {
    key: "onEditCancel",
    value: function onEditCancel(e) {
      var event = e.originalEvent;

      if (this.props.onRowEditCancel) {
        this.props.onRowEditCancel({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.index
        });
      }

      this.onEditChange(e, false);
      event.preventDefault();
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this3 = this;

      return this.props.columns.map(function (col, i) {
        if (_this3.shouldRenderBodyCell(_this3.props.value, col, _this3.props.index)) {
          var key = "".concat(_this3.getColumnProp(col, 'columnKey') || _this3.getColumnProp(col, 'field'), "_").concat(i);
          var rowSpan = _this3.props.rowGroupMode === 'rowspan' ? _this3.calculateRowGroupSize(_this3.props.value, col, _this3.props.index) : null;

          var editing = _this3.getEditing();

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyCell, {
            key: key,
            value: _this3.props.value,
            tableProps: _this3.props.tableProps,
            tableSelector: _this3.props.tableSelector,
            column: col,
            rowData: _this3.props.rowData,
            rowIndex: _this3.props.index,
            index: i,
            rowSpan: rowSpan,
            dataKey: _this3.props.dataKey,
            editing: editing,
            editingMeta: _this3.props.editingMeta,
            editMode: _this3.props.editMode,
            onRowEditInit: _this3.onEditInit,
            onRowEditSave: _this3.onEditSave,
            onRowEditCancel: _this3.onEditCancel,
            onEditingMetaChange: _this3.props.onEditingMetaChange,
            onRowToggle: _this3.props.onRowToggle,
            selection: _this3.props.selection,
            allowCellSelection: _this3.props.allowCellSelection,
            compareSelectionBy: _this3.props.compareSelectionBy,
            selectOnEdit: _this3.props.selectOnEdit,
            selected: _this3.props.selected,
            onClick: _this3.props.onCellClick,
            onMouseDown: _this3.props.onCellMouseDown,
            onMouseUp: _this3.props.onCellMouseUp,
            tabIndex: _this3.props.tabIndex,
            cellClassName: _this3.props.cellClassName,
            responsiveLayout: _this3.props.responsiveLayout,
            frozenRow: _this3.props.frozenRow,
            isSelectable: _this3.props.isSelectable,
            showSelectionElement: _this3.props.showSelectionElement,
            showRowReorderElement: _this3.props.showRowReorderElement,
            onRadioChange: _this3.props.onRadioChange,
            onCheckboxChange: _this3.props.onCheckboxChange,
            expanded: _this3.props.expanded,
            expandedRowIcon: _this3.props.expandedRowIcon,
            collapsedRowIcon: _this3.props.collapsedRowIcon,
            virtualScrollerOptions: _this3.props.virtualScrollerOptions
          });
        }

        return null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var rowClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getPropValue(this.props.rowClassName, this.props.rowData, {
        props: this.props.tableProps
      });
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])(rowClassName, {
        'p-highlight': !this.props.allowCellSelection && this.props.selected,
        'p-highlight-contextmenu': this.props.contextMenuSelected,
        'p-selectable-row': this.props.allowRowSelection && this.props.isSelectable({
          data: this.props.rowData,
          index: this.props.index
        }),
        'p-row-odd': this.props.index % 2 !== 0
      });
      var content = this.renderContent();
      var tabIndex = this.getTabIndex();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        ref: function ref(el) {
          return _this4.el = el;
        },
        role: "row",
        tabIndex: tabIndex,
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onClick: this.onClick,
        onDoubleClick: this.onDoubleClick,
        onContextMenu: this.onRightClick,
        onTouchEnd: this.onTouchEnd,
        onKeyDown: this.onKeyDown,
        onDragStart: this.onDragStart,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDragEnd: this.onDragEnd,
        onDrop: this.onDrop
      }, content);
    }
  }]);

  return BodyRow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowTogglerButton = /*#__PURE__*/function (_Component) {
  _inherits(RowTogglerButton, _Component);

  var _super = _createSuper$8(RowTogglerButton);

  function RowTogglerButton(props) {
    var _this;

    _classCallCheck(this, RowTogglerButton);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowTogglerButton, [{
    key: "onClick",
    value: function onClick(event) {
      this.props.onClick({
        originalEvent: event,
        data: this.props.rowData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var iconClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-row-toggler-icon', this.props.expanded ? this.props.expandedRowIcon : this.props.collapsedRowIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.onClick,
        className: "p-row-toggler p-link",
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], null));
    }
  }]);

  return RowTogglerButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _excluded = ["originalEvent"];

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TableBody = /*#__PURE__*/function (_Component) {
  _inherits(TableBody, _Component);

  var _super = _createSuper$7(TableBody);

  function TableBody(props) {
    var _this;

    _classCallCheck(this, TableBody);

    _this = _super.call(this, props);
    _this.state = {
      rowGroupHeaderStyleObject: {}
    }; // row

    _this.onRowClick = _this.onRowClick.bind(_assertThisInitialized(_this));
    _this.onRowDoubleClick = _this.onRowDoubleClick.bind(_assertThisInitialized(_this));
    _this.onRowRightClick = _this.onRowRightClick.bind(_assertThisInitialized(_this));
    _this.onRowTouchEnd = _this.onRowTouchEnd.bind(_assertThisInitialized(_this));
    _this.onRowMouseDown = _this.onRowMouseDown.bind(_assertThisInitialized(_this));
    _this.onRowMouseUp = _this.onRowMouseUp.bind(_assertThisInitialized(_this));
    _this.onRowToggle = _this.onRowToggle.bind(_assertThisInitialized(_this)); // drag

    _this.onRowDragStart = _this.onRowDragStart.bind(_assertThisInitialized(_this));
    _this.onRowDragOver = _this.onRowDragOver.bind(_assertThisInitialized(_this));
    _this.onRowDragLeave = _this.onRowDragLeave.bind(_assertThisInitialized(_this));
    _this.onRowDragEnd = _this.onRowDragEnd.bind(_assertThisInitialized(_this));
    _this.onRowDrop = _this.onRowDrop.bind(_assertThisInitialized(_this)); // selection

    _this.onRadioChange = _this.onRadioChange.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    _this.onDragSelectionMouseMove = _this.onDragSelectionMouseMove.bind(_assertThisInitialized(_this));
    _this.onDragSelectionMouseUp = _this.onDragSelectionMouseUp.bind(_assertThisInitialized(_this));
    _this.isSelectable = _this.isSelectable.bind(_assertThisInitialized(_this)); // cell

    _this.onCellClick = _this.onCellClick.bind(_assertThisInitialized(_this));
    _this.onCellMouseDown = _this.onCellMouseDown.bind(_assertThisInitialized(_this));
    _this.onCellMouseUp = _this.onCellMouseUp.bind(_assertThisInitialized(_this));
    _this.ref = _this.ref.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TableBody, [{
    key: "ref",
    value: function ref(el) {
      this.el = el;
      this.props.virtualScrollerContentRef && this.props.virtualScrollerContentRef(el);
    }
  }, {
    key: "equals",
    value: function equals(data1, data2) {
      if (this.allowCellSelection()) return (data1.rowIndex === data2.rowIndex || data1.rowData === data2.rowData) && (data1.field === data2.field || data1.cellIndex === data2.cellIndex);else return this.props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "isSubheaderGrouping",
    value: function isSubheaderGrouping() {
      return this.props.rowGroupMode && this.props.rowGroupMode === 'subheader';
    }
  }, {
    key: "isSelectionEnabled",
    value: function isSelectionEnabled() {
      return this.props.selectionMode || this.props.selectionModeInColumn !== null || this.props.columns && this.props.columns.some(function (col) {
        return col && !!col.props.selectionMode;
      });
    }
  }, {
    key: "isRadioSelectionMode",
    value: function isRadioSelectionMode() {
      return this.props.selectionMode === 'radiobutton';
    }
  }, {
    key: "isCheckboxSelectionMode",
    value: function isCheckboxSelectionMode() {
      return this.props.selectionMode === 'checkbox';
    }
  }, {
    key: "isRadioSelectionModeInColumn",
    value: function isRadioSelectionModeInColumn() {
      return this.props.selectionModeInColumn === 'single';
    }
  }, {
    key: "isCheckboxSelectionModeInColumn",
    value: function isCheckboxSelectionModeInColumn() {
      return this.props.selectionModeInColumn === 'multiple';
    }
  }, {
    key: "isSingleSelection",
    value: function isSingleSelection() {
      return this.props.selectionMode === 'single' && !this.isCheckboxSelectionModeInColumn() || !this.isRadioSelectionMode() && this.isRadioSelectionModeInColumn();
    }
  }, {
    key: "isMultipleSelection",
    value: function isMultipleSelection() {
      return this.props.selectionMode === 'multiple' && !this.isRadioSelectionModeInColumn() || this.isCheckboxSelectionModeInColumn();
    }
  }, {
    key: "isRadioOnlySelection",
    value: function isRadioOnlySelection() {
      return this.isRadioSelectionMode() && this.isRadioSelectionModeInColumn();
    }
  }, {
    key: "isCheckboxOnlySelection",
    value: function isCheckboxOnlySelection() {
      return this.isCheckboxSelectionMode() && this.isCheckboxSelectionModeInColumn();
    }
  }, {
    key: "isSelected",
    value: function isSelected(rowData) {
      if (rowData && this.props.selection) {
        return this.props.selection instanceof Array ? this.findIndex(this.props.selection, rowData) > -1 : this.equals(rowData, this.props.selection);
      }

      return false;
    }
  }, {
    key: "isContextMenuSelected",
    value: function isContextMenuSelected(rowData) {
      if (rowData && this.props.contextMenuSelection) {
        return this.equals(rowData, this.props.contextMenuSelection);
      }

      return false;
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(options) {
      return this.props.isDataSelectable ? this.props.isDataSelectable(options) : true;
    }
  }, {
    key: "isRowExpanded",
    value: function isRowExpanded(rowData) {
      if (rowData && this.props.expandedRows) {
        if (this.isSubheaderGrouping() && this.props.expandableRowGroups) {
          return this.isRowGroupExpanded(rowData);
        } else {
          if (this.props.dataKey) return this.props.expandedRows ? this.props.expandedRows[primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, this.props.dataKey)] !== undefined : false;else return this.findIndex(this.props.expandedRows, rowData) !== -1;
        }
      }

      return false;
    }
  }, {
    key: "isRowGroupExpanded",
    value: function isRowGroupExpanded(rowData) {
      var _this2 = this;

      if (this.props.dataKey === this.props.groupRowsBy) return Object.keys(this.props.expandedRows).some(function (data) {
        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(data, primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, _this2.props.dataKey));
      });else return this.props.expandedRows.some(function (data) {
        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(data, rowData, _this2.props.groupRowsBy);
      });
    }
  }, {
    key: "isRowEditing",
    value: function isRowEditing(rowData) {
      if (this.props.editMode === 'row' && rowData && this.props.editingRows) {
        if (this.props.dataKey) return this.props.editingRows ? this.props.editingRows[primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, this.props.dataKey)] !== undefined : false;else return this.findIndex(this.props.editingRows, rowData) !== -1;
      }

      return false;
    }
  }, {
    key: "allowDrag",
    value: function allowDrag(event) {
      return this.props.dragSelection && this.isMultipleSelection() && !event.originalEvent.shiftKey;
    }
  }, {
    key: "allowRowDrag",
    value: function allowRowDrag(event) {
      return !this.allowCellSelection() && this.allowDrag(event);
    }
  }, {
    key: "allowCellDrag",
    value: function allowCellDrag(event) {
      return this.allowCellSelection() && this.allowDrag(event);
    }
  }, {
    key: "allowSelection",
    value: function allowSelection(event) {
      return !primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isClickable(event.originalEvent.target);
    }
  }, {
    key: "allowMetaKeySelection",
    value: function allowMetaKeySelection(event) {
      return !this.rowTouched && (!this.props.metaKeySelection || this.props.metaKeySelection && (event.originalEvent.metaKey || event.originalEvent.ctrlKey));
    }
  }, {
    key: "allowRangeSelection",
    value: function allowRangeSelection(event) {
      return this.isMultipleSelection() && event.originalEvent.shiftKey && this.anchorRowIndex !== null;
    }
  }, {
    key: "allowRowSelection",
    value: function allowRowSelection() {
      return (this.props.selectionMode || this.props.selectionModeInColumn) && !this.isRadioOnlySelection() && !this.isCheckboxOnlySelection();
    }
  }, {
    key: "allowCellSelection",
    value: function allowCellSelection() {
      return this.props.cellSelection && !this.isRadioSelectionModeInColumn() && !this.isCheckboxSelectionModeInColumn();
    }
  }, {
    key: "getColumnsLength",
    value: function getColumnsLength() {
      return this.props.columns ? this.props.columns.length : 0;
    }
  }, {
    key: "getVirtualScrollerOption",
    value: function getVirtualScrollerOption(option, options) {
      options = options || this.props.virtualScrollerOptions;
      return options ? options[option] : null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(collection, rowData) {
      var _this3 = this;

      return (collection || []).findIndex(function (data) {
        return _this3.equals(rowData, data);
      });
    }
  }, {
    key: "rowGroupHeaderStyle",
    value: function rowGroupHeaderStyle() {
      if (this.props.scrollable) {
        return {
          top: this.state.rowGroupHeaderStyleObject['top']
        };
      }

      return null;
    }
  }, {
    key: "getRowKey",
    value: function getRowKey(rowData, index) {
      return this.props.dataKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, this.props.dataKey) + '_' + index : index;
    }
  }, {
    key: "shouldRenderRowGroupHeader",
    value: function shouldRenderRowGroupHeader(value, rowData, i) {
      var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, this.props.groupRowsBy);
      var prevRowData = value[i - 1];

      if (prevRowData) {
        var previousRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(prevRowData, this.props.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    }
  }, {
    key: "shouldRenderRowGroupFooter",
    value: function shouldRenderRowGroupFooter(value, rowData, i, expanded) {
      if (this.props.expandableRowGroups && !expanded) {
        return false;
      } else {
        var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, this.props.groupRowsBy);
        var nextRowData = value[i + 1];

        if (nextRowData) {
          var nextRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(nextRowData, this.props.groupRowsBy);
          return currentRowFieldData !== nextRowFieldData;
        } else {
          return true;
        }
      }
    }
  }, {
    key: "updateFrozenRowStickyPosition",
    value: function updateFrozenRowStickyPosition() {
      this.el.style.top = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.previousElementSibling) + 'px';
    }
  }, {
    key: "updateFrozenRowGroupHeaderStickyPosition",
    value: function updateFrozenRowGroupHeaderStickyPosition() {
      var tableHeaderHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.previousElementSibling);
      var top = tableHeaderHeight + 'px';

      if (this.state.rowGroupHeaderStyleObject && this.state.rowGroupHeaderStyleObject.top !== top) {
        this.setState({
          rowGroupHeaderStyleObject: {
            top: top
          }
        });
      }
    }
  }, {
    key: "updateVirtualScrollerPosition",
    value: function updateVirtualScrollerPosition() {
      var tableHeaderHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.previousElementSibling);
      this.el.style.top = (this.el.style.top || 0) + tableHeaderHeight + 'px';
    }
  }, {
    key: "onSingleSelection",
    value: function onSingleSelection(_ref) {
      var originalEvent = _ref.originalEvent,
          data = _ref.data,
          index = _ref.index,
          toggleable = _ref.toggleable,
          type = _ref.type;

      if (!this.isSelectable({
        data: data,
        index: index
      })) {
        return;
      }

      var selected = this.isSelected(data);
      var selection = this.props.selection;

      if (selected) {
        if (toggleable) {
          selection = null;
          this.onUnselect({
            originalEvent: originalEvent,
            data: data,
            type: type
          });
        }
      } else {
        selection = data;
        this.onSelect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      }

      this.focusOnElement(originalEvent, true);

      if (this.props.onSelectionChange && selection !== this.props.selection) {
        this.props.onSelectionChange({
          originalEvent: originalEvent,
          value: selection,
          type: type
        });
      }
    }
  }, {
    key: "onMultipleSelection",
    value: function onMultipleSelection(_ref2) {
      var _this4 = this;

      var originalEvent = _ref2.originalEvent,
          data = _ref2.data,
          index = _ref2.index,
          toggleable = _ref2.toggleable,
          type = _ref2.type;

      if (!this.isSelectable({
        data: data,
        index: index
      })) {
        return;
      }

      var selected = this.isSelected(data);
      var selection = this.props.selection || [];

      if (selected) {
        if (toggleable) {
          var selectionIndex = this.findIndex(selection, data);
          selection = this.props.selection.filter(function (val, i) {
            return i !== selectionIndex;
          });
          this.onUnselect({
            originalEvent: originalEvent,
            data: data,
            type: type
          });
        } else if (selection.length) {
          this.props.selection.forEach(function (d) {
            return _this4.onUnselect({
              originalEvent: originalEvent,
              data: d,
              type: type
            });
          });
          selection = [data];
          this.onSelect({
            originalEvent: originalEvent,
            data: data,
            type: type
          });
        }
      } else {
        selection = toggleable && this.isMultipleSelection() ? [].concat(_toConsumableArray(selection), [data]) : [data];
        this.onSelect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      }

      this.focusOnElement(originalEvent, true);

      if (this.props.onSelectionChange && selection !== this.props.selection) {
        this.props.onSelectionChange({
          originalEvent: originalEvent,
          value: selection,
          type: type
        });
      }
    }
  }, {
    key: "onRangeSelection",
    value: function onRangeSelection(event, type) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].clearSelection();
      this.rangeRowIndex = this.allowCellSelection() ? event.rowIndex : event.index;
      var selectionInRange = this.selectRange(event);
      var selection = this.isMultipleSelection() ? _toConsumableArray(new Set([].concat(_toConsumableArray(this.props.selection || []), _toConsumableArray(selectionInRange)))) : selectionInRange;

      if (this.props.onSelectionChange && selection !== this.props.selection) {
        this.props.onSelectionChange({
          originalEvent: event.originalEvent,
          value: selection,
          type: type
        });
      }

      this.anchorRowIndex = this.rangeRowIndex;
      this.anchorCellIndex = event.cellIndex;
      this.focusOnElement(event.originalEvent, false);
    }
  }, {
    key: "selectRange",
    value: function selectRange(event) {
      var rangeStart, rangeEnd;
      var isLazyAndPaginator = this.props.lazy && this.props.paginator;

      if (isLazyAndPaginator) {
        this.anchorRowIndex += this.anchorRowFirst;
        this.rangeRowIndex += this.props.first;
      }

      if (this.rangeRowIndex > this.anchorRowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = this.rangeRowIndex;
      } else if (this.rangeRowIndex < this.anchorRowIndex) {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.anchorRowIndex;
      } else {
        rangeStart = rangeEnd = this.rangeRowIndex;
      }

      if (isLazyAndPaginator) {
        rangeStart = Math.max(rangeStart - this.props.first, 0);
        rangeEnd -= this.props.first;
      }

      return this.allowCellSelection() ? this.selectRangeOnCell(event, rangeStart, rangeEnd) : this.selectRangeOnRow(event, rangeStart, rangeEnd);
    }
  }, {
    key: "selectRangeOnRow",
    value: function selectRangeOnRow(event, rowRangeStart, rowRangeEnd) {
      var value = this.props.value;
      var selection = [];

      for (var i = rowRangeStart; i <= rowRangeEnd; i++) {
        var rangeRowData = value[i];

        if (!this.isSelectable({
          data: rangeRowData,
          index: i
        })) {
          continue;
        }

        selection.push(rangeRowData);
        this.onSelect({
          originalEvent: event.originalEvent,
          data: rangeRowData,
          type: 'row'
        });
      }

      return selection;
    }
  }, {
    key: "selectRangeOnCell",
    value: function selectRangeOnCell(event, rowRangeStart, rowRangeEnd) {
      var cellRangeStart,
          cellRangeEnd,
          cellIndex = event.cellIndex;

      if (cellIndex > this.anchorCellIndex) {
        cellRangeStart = this.anchorCellIndex;
        cellRangeEnd = cellIndex;
      } else if (cellIndex < this.anchorCellIndex) {
        cellRangeStart = cellIndex;
        cellRangeEnd = this.anchorCellIndex;
      } else {
        cellRangeStart = cellRangeEnd = cellIndex;
      }

      var value = this.props.value;
      var selection = [];

      for (var i = rowRangeStart; i <= rowRangeEnd; i++) {
        var rowData = value[i];
        var columns = this.props.columns;

        for (var j = cellRangeStart; j <= cellRangeEnd; j++) {
          var field = columns[j].props.field;

          var _value = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, field);

          var rangeRowData = {
            value: _value,
            field: field,
            rowData: rowData,
            rowIndex: i,
            cellIndex: j,
            selected: true
          };

          if (!this.isSelectable({
            data: rangeRowData,
            index: i
          })) {
            continue;
          }

          selection.push(rangeRowData);
          this.onSelect({
            originalEvent: event.originalEvent,
            data: rangeRowData,
            type: 'cell'
          });
        }
      }

      return selection;
    }
  }, {
    key: "onSelect",
    value: function onSelect(event) {
      if (this.allowCellSelection()) this.props.onCellSelect && this.props.onCellSelect(_objectSpread$5(_objectSpread$5({
        originalEvent: event.originalEvent
      }, event.data), {}, {
        type: event.type
      }));else this.props.onRowSelect && this.props.onRowSelect(event);
    }
  }, {
    key: "onUnselect",
    value: function onUnselect(event) {
      if (this.allowCellSelection()) this.props.onCellUnselect && this.props.onCellUnselect(_objectSpread$5(_objectSpread$5({
        originalEvent: event.originalEvent
      }, event.data), {}, {
        type: event.type
      }));else this.props.onRowUnselect && this.props.onRowUnselect(event);
    }
  }, {
    key: "enableDragSelection",
    value: function enableDragSelection(event) {
      if (this.props.dragSelection && !this.dragSelectionHelper) {
        this.dragSelectionHelper = document.createElement('div');
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.dragSelectionHelper, 'p-datatable-drag-selection-helper');
        this.initialDragPosition = {
          x: event.clientX,
          y: event.clientY
        };
        this.dragSelectionHelper.style.top = "".concat(event.pageY, "px");
        this.dragSelectionHelper.style.left = "".concat(event.pageX, "px");
        this.bindDragSelectionEvents();
      }
    }
  }, {
    key: "focusOnElement",
    value: function focusOnElement(event, isFocused) {
      var target = event.currentTarget;

      if (!this.allowCellSelection() && this.props.selectionAutoFocus) {
        if (this.isCheckboxSelectionModeInColumn()) {
          var checkbox = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(target, 'td.p-selection-column .p-checkbox-box');
          checkbox && checkbox.focus();
        } else if (this.isRadioSelectionModeInColumn()) {
          var radio = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(target, 'td.p-selection-column input[type="radio"]');
          radio && radio.focus();
        }
      }

      !isFocused && target && target.focus();
    }
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex(event, type) {
      var target = event.currentTarget;
      var isSelectable = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(target, type === 'cell' ? 'p-selectable-cell' : 'p-selectable-row');

      if (isSelectable) {
        var selector = type === 'cell' ? 'tr > td' : 'tr';
        var tabbableEl = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el, "".concat(selector, "[tabindex=\"").concat(this.props.tabIndex, "\"]"));

        if (tabbableEl && target) {
          tabbableEl.tabIndex = -1;
          target.tabIndex = this.props.tabIndex;
        }
      }
    }
  }, {
    key: "onRowClick",
    value: function onRowClick(event) {
      if (this.allowCellSelection() || !this.allowSelection(event)) {
        return;
      }

      this.props.onRowClick && this.props.onRowClick(event);

      if (this.allowRowSelection()) {
        if (this.allowRangeSelection(event)) {
          this.onRangeSelection(event, 'row');
        } else {
          var toggleable = this.isRadioSelectionModeInColumn() || this.isCheckboxSelectionModeInColumn() || this.allowMetaKeySelection(event);
          this.anchorRowIndex = event.index;
          this.rangeRowIndex = event.index;
          this.anchorRowFirst = this.props.first;

          if (this.isSingleSelection()) {
            this.onSingleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
              toggleable: toggleable,
              type: 'row'
            }));
          } else {
            this.onMultipleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
              toggleable: toggleable,
              type: 'row'
            }));
          }
        }

        this.changeTabIndex(event.originalEvent, 'row');
      } else {
        this.focusOnElement(event.originalEvent);
      }

      this.rowTouched = false;
    }
  }, {
    key: "onRowDoubleClick",
    value: function onRowDoubleClick(e) {
      var event = e.originalEvent;

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isClickable(event.target)) {
        return;
      }

      if (this.props.onRowDoubleClick) {
        this.props.onRowDoubleClick(e);
      }
    }
  }, {
    key: "onRowRightClick",
    value: function onRowRightClick(event) {
      if (this.props.onContextMenu || this.props.onContextMenuSelectionChange) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].clearSelection();

        if (this.props.onContextMenuSelectionChange) {
          this.props.onContextMenuSelectionChange({
            originalEvent: event.originalEvent,
            value: event.data
          });
        }

        if (this.props.onContextMenu) {
          this.props.onContextMenu({
            originalEvent: event.originalEvent,
            data: event.data
          });
        }

        event.originalEvent.preventDefault();
      }
    }
  }, {
    key: "onRowTouchEnd",
    value: function onRowTouchEnd() {
      this.rowTouched = true;
    }
  }, {
    key: "onRowMouseDown",
    value: function onRowMouseDown(e) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].clearSelection();
      var event = e.originalEvent;
      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(event.target, 'p-datatable-reorderablerow-handle')) event.currentTarget.draggable = true;else event.currentTarget.draggable = false;

      if (this.allowRowDrag(e)) {
        this.enableDragSelection(event, 'row');
        this.anchorRowIndex = e.index;
        this.rangeRowIndex = e.index;
        this.anchorRowFirst = this.props.first;
      }
    }
  }, {
    key: "onRowMouseUp",
    value: function onRowMouseUp(event) {
      var isSameRow = event.index === this.anchorRowIndex;

      if (this.allowRowDrag(event) && !isSameRow) {
        this.onRangeSelection(event, 'row');
      }
    }
  }, {
    key: "onRowToggle",
    value: function onRowToggle(event) {
      var expandedRows;
      var dataKey = this.props.dataKey;
      var hasDataKey = this.props.groupRowsBy ? dataKey === this.props.groupRowsBy : !!dataKey;

      if (hasDataKey) {
        var dataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(event.data, dataKey));
        expandedRows = this.props.expandedRows ? _objectSpread$5({}, this.props.expandedRows) : {};

        if (expandedRows[dataKeyValue] != null) {
          delete expandedRows[dataKeyValue];

          if (this.props.onRowCollapse) {
            this.props.onRowCollapse({
              originalEvent: event,
              data: event.data
            });
          }
        } else {
          expandedRows[dataKeyValue] = true;

          if (this.props.onRowExpand) {
            this.props.onRowExpand({
              originalEvent: event,
              data: event.data
            });
          }
        }
      } else {
        var expandedRowIndex = this.findIndex(this.props.expandedRows, event.data);
        expandedRows = this.props.expandedRows ? _toConsumableArray(this.props.expandedRows) : [];

        if (expandedRowIndex !== -1) {
          expandedRows = expandedRows.filter(function (val, i) {
            return i !== expandedRowIndex;
          });

          if (this.props.onRowCollapse) {
            this.props.onRowCollapse({
              originalEvent: event,
              data: event.data
            });
          }
        } else {
          expandedRows.push(event.data);

          if (this.props.onRowExpand) {
            this.props.onRowExpand({
              originalEvent: event,
              data: event.data
            });
          }
        }
      }

      if (this.props.onRowToggle) {
        this.props.onRowToggle({
          data: expandedRows
        });
      }
    }
  }, {
    key: "onRowDragStart",
    value: function onRowDragStart(e) {
      var event = e.originalEvent,
          index = e.index;
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
  }, {
    key: "onRowDragOver",
    value: function onRowDragOver(e) {
      var event = e.originalEvent,
          index = e.index;

      if (this.rowDragging && this.draggedRowIndex !== index) {
        var rowElement = event.currentTarget;
        var rowY = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(rowElement).top + primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
        var pageY = event.pageY;
        var rowMidY = rowY + primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(rowElement) / 2;
        var prevRowElement = rowElement.previousElementSibling;

        if (pageY < rowMidY) {
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(rowElement, 'p-datatable-dragpoint-bottom');
          this.droppedRowIndex = index;
          if (prevRowElement) primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(rowElement, 'p-datatable-dragpoint-top');
        } else {
          if (prevRowElement) primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(rowElement, 'p-datatable-dragpoint-top');
          this.droppedRowIndex = index + 1;
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(rowElement, 'p-datatable-dragpoint-bottom');
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onRowDragLeave",
    value: function onRowDragLeave(e) {
      var event = e.originalEvent;
      var rowElement = event.currentTarget;
      var prevRowElement = rowElement.previousElementSibling;

      if (prevRowElement) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
      }

      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(rowElement, 'p-datatable-dragpoint-bottom');
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(rowElement, 'p-datatable-dragpoint-top');
    }
  }, {
    key: "onRowDragEnd",
    value: function onRowDragEnd(e) {
      var event = e.originalEvent;
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
      event.currentTarget.draggable = false;
    }
  }, {
    key: "onRowDrop",
    value: function onRowDrop(e) {
      var event = e.originalEvent;

      if (this.droppedRowIndex != null) {
        var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;

        var val = _toConsumableArray(this.props.value);

        primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].reorderArray(val, this.draggedRowIndex, dropIndex);

        if (this.props.onRowReorder) {
          this.props.onRowReorder({
            originalEvent: event,
            value: val,
            dragIndex: this.draggedRowIndex,
            dropIndex: this.droppedRowIndex
          });
        }
      } //cleanup


      this.onRowDragLeave(e);
      this.onRowDragEnd(e);
      event.preventDefault();
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(event) {
      this.onSingleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
        toggleable: true,
        type: 'radio'
      }));
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event) {
      this.onMultipleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
        toggleable: true,
        type: 'checkbox'
      }));
    }
  }, {
    key: "onDragSelectionMouseMove",
    value: function onDragSelectionMouseMove(event) {
      var _this$initialDragPosi = this.initialDragPosition,
          x = _this$initialDragPosi.x,
          y = _this$initialDragPosi.y;
      var dx = event.clientX - x;
      var dy = event.clientY - y;
      if (dy < 0) this.dragSelectionHelper.style.top = "".concat(event.pageY + 5, "px");
      if (dx < 0) this.dragSelectionHelper.style.left = "".concat(event.pageX + 5, "px");
      this.dragSelectionHelper.style.height = "".concat(Math.abs(dy), "px");
      this.dragSelectionHelper.style.width = "".concat(Math.abs(dx), "px");
      event.preventDefault();
    }
  }, {
    key: "onDragSelectionMouseUp",
    value: function onDragSelectionMouseUp() {
      if (this.dragSelectionHelper) {
        this.dragSelectionHelper.remove();
        this.dragSelectionHelper = null;
      }

      document.removeEventListener('mousemove', this.onDragSelectionMouseMove);
      document.removeEventListener('mouseup', this.onDragSelectionMouseUp);
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(event) {
      if (!this.allowSelection(event)) {
        return;
      }

      this.props.onCellClick && this.props.onCellClick(event);

      if (this.allowCellSelection()) {
        if (this.allowRangeSelection(event)) {
          this.onRangeSelection(event, 'cell');
        } else {
          var toggleable = this.allowMetaKeySelection(event);

          var originalEvent = event.originalEvent,
              data = _objectWithoutProperties(event, _excluded);

          this.anchorRowIndex = event.rowIndex;
          this.rangeRowIndex = event.rowIndex;
          this.anchorRowFirst = this.props.first;
          this.anchorCellIndex = event.cellIndex;

          if (this.isSingleSelection()) {
            this.onSingleSelection({
              originalEvent: originalEvent,
              data: data,
              index: event.rowIndex,
              toggleable: toggleable,
              type: 'cell'
            });
          } else {
            this.onMultipleSelection({
              originalEvent: originalEvent,
              data: data,
              index: event.rowIndex,
              toggleable: toggleable,
              type: 'cell'
            });
          }
        }

        this.changeTabIndex(event.originalEvent, 'cell');
      }

      this.rowTouched = false;
    }
  }, {
    key: "onCellMouseDown",
    value: function onCellMouseDown(event) {
      if (this.allowCellDrag(event)) {
        this.enableDragSelection(event.originalEvent);
        this.anchorRowIndex = event.rowIndex;
        this.rangeRowIndex = event.rowIndex;
        this.anchorRowFirst = this.props.first;
        this.anchorCellIndex = event.cellIndex;
      }
    }
  }, {
    key: "onCellMouseUp",
    value: function onCellMouseUp(event) {
      var isSameCell = event.rowIndex === this.anchorRowIndex && event.cellIndex === this.anchorCellIndex;

      if (this.allowCellDrag(event) && !isSameCell) {
        this.onRangeSelection(event, 'cell');
      }
    }
  }, {
    key: "bindDragSelectionEvents",
    value: function bindDragSelectionEvents() {
      document.addEventListener('mousemove', this.onDragSelectionMouseMove);
      document.addEventListener('mouseup', this.onDragSelectionMouseUp);
      document.body.appendChild(this.dragSelectionHelper);
    }
  }, {
    key: "unbindDragSelectionEvents",
    value: function unbindDragSelectionEvents() {
      this.onDragSelectionMouseUp();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.frozenRow) {
        this.updateFrozenRowStickyPosition();
      }

      if (this.props.scrollable && this.props.rowGroupMode === 'subheader') {
        this.updateFrozenRowGroupHeaderStickyPosition();
      }

      if (!this.props.isVirtualScrollerDisabled && this.getVirtualScrollerOption('vertical')) {
        this.updateVirtualScrollerPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.frozenRow) {
        this.updateFrozenRowStickyPosition();
      }

      if (this.props.scrollable && this.props.rowGroupMode === 'subheader') {
        this.updateFrozenRowGroupHeaderStickyPosition();
      }

      if (!this.props.isVirtualScrollerDisabled && this.getVirtualScrollerOption('vertical') && this.getVirtualScrollerOption('itemSize', prevProps.virtualScrollerOptions) !== this.getVirtualScrollerOption('itemSize')) {
        this.updateVirtualScrollerPosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.dragSelection) {
        this.unbindDragSelectionEvents();
      }
    }
  }, {
    key: "renderEmptyContent",
    value: function renderEmptyContent() {
      if (!this.props.loading) {
        var colSpan = this.getColumnsLength();
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.props.emptyMessage, {
          props: this.props,
          frozen: this.props.frozenRow
        }) || Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('emptyMessage');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          className: "p-datatable-emptymessage",
          role: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          colSpan: colSpan,
          role: "cell"
        }, content));
      }

      return null;
    }
  }, {
    key: "renderGroupHeader",
    value: function renderGroupHeader(rowData, index, expanded, isSubheaderGrouping, colSpan) {
      if (isSubheaderGrouping && this.shouldRenderRowGroupHeader(this.props.value, rowData, index - this.props.first)) {
        var style = this.rowGroupHeaderStyle();
        var toggler = this.props.expandableRowGroups && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowTogglerButton, {
          onClick: this.onRowToggle,
          rowData: rowData,
          expanded: expanded,
          expandedRowIcon: this.props.expandedRowIcon,
          collapsedRowIcon: this.props.collapsedRowIcon
        });
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.props.rowGroupHeaderTemplate, rowData, {
          index: index,
          props: this.props.tableProps
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          className: "p-rowgroup-header",
          style: style,
          role: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          colSpan: colSpan
        }, toggler, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "p-rowgroup-header-name"
        }, content)));
      }

      return null;
    }
  }, {
    key: "renderRow",
    value: function renderRow(rowData, index, expanded) {
      if (!this.props.expandableRowGroups || expanded) {
        var selected = this.isSelectionEnabled() ? this.isSelected(rowData) : false;
        var contextMenuSelected = this.isContextMenuSelected(rowData);
        var allowRowSelection = this.allowRowSelection();
        var allowCellSelection = this.allowCellSelection();
        var editing = this.isRowEditing(rowData);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyRow, {
          tableProps: this.props.tableProps,
          tableSelector: this.props.tableSelector,
          value: this.props.value,
          columns: this.props.columns,
          rowData: rowData,
          index: index,
          selected: selected,
          contextMenuSelected: contextMenuSelected,
          onRowClick: this.onRowClick,
          onRowDoubleClick: this.onRowDoubleClick,
          onRowRightClick: this.onRowRightClick,
          tabIndex: this.props.tabIndex,
          isSelectable: this.isSelectable,
          onRowTouchEnd: this.onRowTouchEnd,
          onRowMouseDown: this.onRowMouseDown,
          onRowMouseUp: this.onRowMouseUp,
          onRowToggle: this.onRowToggle,
          onRowDragStart: this.onRowDragStart,
          onRowDragOver: this.onRowDragOver,
          onRowDragLeave: this.onRowDragLeave,
          onRowDragEnd: this.onRowDragEnd,
          onRowDrop: this.onRowDrop,
          onRadioChange: this.onRadioChange,
          onCheckboxChange: this.onCheckboxChange,
          onCellClick: this.onCellClick,
          onCellMouseDown: this.onCellMouseDown,
          onCellMouseUp: this.onCellMouseUp,
          editing: editing,
          editingRows: this.props.editingRows,
          editingMeta: this.props.editingMeta,
          editMode: this.props.editMode,
          onRowEditChange: this.props.onRowEditChange,
          onEditingMetaChange: this.props.onEditingMetaChange,
          groupRowsBy: this.props.groupRowsBy,
          compareSelectionBy: this.props.compareSelectionBy,
          dataKey: this.props.dataKey,
          rowGroupMode: this.props.rowGroupMode,
          onRowEditInit: this.props.onRowEditInit,
          rowEditValidator: this.props.rowEditValidator,
          onRowEditSave: this.props.onRowEditSave,
          onRowEditComplete: this.props.onRowEditComplete,
          onRowEditCancel: this.props.onRowEditCancel,
          selection: this.props.selection,
          allowRowSelection: allowRowSelection,
          allowCellSelection: allowCellSelection,
          selectOnEdit: this.props.selectOnEdit,
          selectionMode: this.props.selectionMode,
          selectionModeInColumn: this.props.selectionModeInColumn,
          cellClassName: this.props.cellClassName,
          responsiveLayout: this.props.responsiveLayout,
          frozenRow: this.props.frozenRow,
          showSelectionElement: this.props.showSelectionElement,
          showRowReorderElement: this.props.showRowReorderElement,
          expanded: expanded,
          expandedRowIcon: this.props.expandedRowIcon,
          collapsedRowIcon: this.props.collapsedRowIcon,
          rowClassName: this.props.rowClassName,
          virtualScrollerOptions: this.props.virtualScrollerOptions
        });
      }
    }
  }, {
    key: "renderExpansion",
    value: function renderExpansion(rowData, index, expanded, isSubheaderGrouping, colSpan) {
      if (expanded && !(isSubheaderGrouping && this.props.expandableRowGroups)) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.props.rowExpansionTemplate, rowData, {
          index: index
        });
        var id = "".concat(this.props.tableSelector, "_content_").concat(index, "_expanded");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          id: id,
          className: "p-datatable-row-expansion",
          role: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          role: "cell",
          colSpan: colSpan
        }, content));
      }

      return null;
    }
  }, {
    key: "renderGroupFooter",
    value: function renderGroupFooter(rowData, index, expanded, isSubheaderGrouping, colSpan) {
      if (isSubheaderGrouping && this.shouldRenderRowGroupFooter(this.props.value, rowData, index - this.props.first, expanded)) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.props.rowGroupFooterTemplate, rowData, {
          index: index,
          colSpan: colSpan,
          props: this.props.tableProps
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          className: "p-rowgroup-footer",
          role: "row"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      return this.props.value.map(function (rowData, i) {
        var index = _this5.getVirtualScrollerOption('getItemOptions') ? _this5.getVirtualScrollerOption('getItemOptions')(i).index : _this5.props.first + i;

        var key = _this5.getRowKey(rowData, index);

        var expanded = _this5.isRowExpanded(rowData);

        var isSubheaderGrouping = _this5.isSubheaderGrouping();

        var colSpan = _this5.getColumnsLength();

        var groupHeader = _this5.renderGroupHeader(rowData, index, expanded, isSubheaderGrouping, colSpan);

        var row = _this5.renderRow(rowData, index, expanded);

        var expansion = _this5.renderExpansion(rowData, index, expanded, isSubheaderGrouping, colSpan);

        var groupFooter = _this5.renderGroupFooter(rowData, index, expanded, isSubheaderGrouping, colSpan);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          key: key
        }, groupHeader, row, expansion, groupFooter);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-datatable-tbody', this.props.className);
      var content = this.props.empty ? this.renderEmptyContent() : this.renderContent();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        ref: this.ref,
        className: className
      }, content);
    }
  }]);

  return TableBody;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var FooterCell = /*#__PURE__*/function (_Component) {
  _inherits(FooterCell, _Component);

  var _super = _createSuper$6(FooterCell);

  function FooterCell(props) {
    var _this;

    _classCallCheck(this, FooterCell);

    _this = _super.call(this, props);
    _this.state = {
      styleObject: {}
    };
    return _this;
  }

  _createClass(FooterCell, [{
    key: "getColumnProp",
    value: function getColumnProp(prop) {
      return this.props.column.props[prop];
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var footerStyle = this.getColumnProp('footerStyle');
      var columnStyle = this.getColumnProp('style');
      return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, footerStyle, this.state.styleObject) : Object.assign({}, columnStyle, footerStyle);
    }
  }, {
    key: "updateStickyPosition",
    value: function updateStickyPosition() {
      if (this.getColumnProp('frozen')) {
        var styleObject = _objectSpread$4({}, this.state.styleObject);

        var align = this.getColumnProp('alignFrozen');

        if (align === 'right') {
          var right = 0;
          var next = this.el.nextElementSibling;

          if (next) {
            right = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(next) + parseFloat(next.style.right || 0);
          }

          styleObject['right'] = right + 'px';
        } else {
          var left = 0;
          var prev = this.el.previousElementSibling;

          if (prev) {
            left = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }

          styleObject['left'] = left + 'px';
        }

        this.setState({
          styleObject: styleObject
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();
      var align = this.getColumnProp('align');
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])(this.getColumnProp('footerClassName'), this.getColumnProp('className'), _defineProperty({
        'p-frozen-column': this.getColumnProp('frozen')
      }, "p-align-".concat(align), !!align));
      var colSpan = this.getColumnProp('colSpan');
      var rowSpan = this.getColumnProp('rowSpan');
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('footer'), {
        props: this.props.tableProps
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        ref: function ref(el) {
          return _this2.el = el;
        },
        style: style,
        className: className,
        role: "cell",
        colSpan: colSpan,
        rowSpan: rowSpan
      }, content);
    }
  }]);

  return FooterCell;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TableFooter = /*#__PURE__*/function (_Component) {
  _inherits(TableFooter, _Component);

  var _super = _createSuper$5(TableFooter);

  function TableFooter() {
    _classCallCheck(this, TableFooter);

    return _super.apply(this, arguments);
  }

  _createClass(TableFooter, [{
    key: "hasFooter",
    value: function hasFooter() {
      return this.props.footerColumnGroup ? true : this.props.columns ? this.props.columns.some(function (col) {
        return col && col.props.footer;
      }) : false;
    }
  }, {
    key: "renderGroupFooterCells",
    value: function renderGroupFooterCells(row) {
      var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(row.props.children);
      return this.renderFooterCells(columns);
    }
  }, {
    key: "renderFooterCells",
    value: function renderFooterCells(columns) {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(columns, function (col, i) {
        var isVisible = col ? !col.props.hidden : true;
        var key = col ? col.props.columnKey || col.props.field || i : i;
        return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterCell, {
          key: key,
          tableProps: _this.props.tableProps,
          column: col
        });
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      if (this.props.footerColumnGroup) {
        var rows = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.footerColumnGroup.props.children);
        return rows.map(function (row, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
            key: i,
            role: "row"
          }, _this2.renderGroupFooterCells(row));
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        role: "row"
      }, this.renderFooterCells(this.props.columns));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.hasFooter()) {
        var content = this.renderContent();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", {
          className: "p-datatable-tfoot"
        }, content);
      }

      return null;
    }
  }]);

  return TableFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HeaderCheckbox = /*#__PURE__*/function (_Component) {
  _inherits(HeaderCheckbox, _Component);

  var _super = _createSuper$4(HeaderCheckbox);

  function HeaderCheckbox(props) {
    var _this;

    _classCallCheck(this, HeaderCheckbox);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeaderCheckbox, [{
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (!this.props.disabled) {
        this.setState({
          focused: true
        });
        this.props.onChange({
          originalEvent: event,
          checked: !this.props.checked
        });
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.code === 'Space') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var boxClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-checkbox-box p-component', {
        'p-highlight': this.props.checked,
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      });
      var iconClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-checkbox-icon', {
        'pi pi-check': this.props.checked
      });
      var tabIndex = this.props.disabled ? null : 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-checkbox p-component",
        onClick: this.onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: boxClassName,
        role: "checkbox",
        "aria-checked": this.props.checked,
        tabIndex: tabIndex,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      })));
    }
  }]);

  return HeaderCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ColumnFilter = /*#__PURE__*/function (_Component) {
  _inherits(ColumnFilter, _Component);

  var _super = _createSuper$3(ColumnFilter);

  function ColumnFilter(props) {
    var _this;

    _classCallCheck(this, ColumnFilter);

    _this = _super.call(this, props);
    _this.state = {
      overlayVisible: false
    };
    _this.overlayRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.filterCallback = _this.filterCallback.bind(_assertThisInitialized(_this));
    _this.filterApplyCallback = _this.filterApplyCallback.bind(_assertThisInitialized(_this));
    _this.onOperatorChange = _this.onOperatorChange.bind(_assertThisInitialized(_this));
    _this.addConstraint = _this.addConstraint.bind(_assertThisInitialized(_this));
    _this.clearFilter = _this.clearFilter.bind(_assertThisInitialized(_this));
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
    _this.onOverlayEnter = _this.onOverlayEnter.bind(_assertThisInitialized(_this));
    _this.onOverlayExit = _this.onOverlayExit.bind(_assertThisInitialized(_this));
    _this.onOverlayExited = _this.onOverlayExited.bind(_assertThisInitialized(_this));
    _this.onContentKeyDown = _this.onContentKeyDown.bind(_assertThisInitialized(_this));
    _this.onContentClick = _this.onContentClick.bind(_assertThisInitialized(_this));
    _this.onContentMouseDown = _this.onContentMouseDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColumnFilter, [{
    key: "field",
    get: function get() {
      return this.getColumnProp('filterField') || this.getColumnProp('field');
    }
  }, {
    key: "overlay",
    get: function get() {
      return this.overlayRef ? this.overlayRef.current : null;
    }
  }, {
    key: "filterModel",
    get: function get() {
      return this.props.filters[this.field];
    }
  }, {
    key: "filterStoreModel",
    get: function get() {
      return this.props.filtersStore[this.field];
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      if (this.props.filtersStore) {
        var fieldFilter = this.props.filtersStore[this.field];
        return fieldFilter && (fieldFilter.operator ? !this.isFilterBlank(fieldFilter.constraints[0].value) : !this.isFilterBlank(fieldFilter.value));
      }

      return false;
    }
  }, {
    key: "hasRowFilter",
    value: function hasRowFilter() {
      return this.filterModel && !this.isFilterBlank(this.filterModel.value);
    }
  }, {
    key: "isFilterBlank",
    value: function isFilterBlank(filter) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isEmpty(filter);
    }
  }, {
    key: "isRowMatchModeSelected",
    value: function isRowMatchModeSelected(matchMode) {
      return this.filterModel && this.filterModel.matchMode === matchMode;
    }
  }, {
    key: "showMenuButton",
    value: function showMenuButton() {
      return this.getColumnProp('showFilterMenu') && (this.props.display === 'row' ? this.getColumnProp('dataType') !== 'boolean' : true);
    }
  }, {
    key: "matchModes",
    value: function matchModes() {
      return this.getColumnProp('filterMatchModeOptions') || primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[this.findDataType()].map(function (key) {
        return {
          label: Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])(key),
          value: key
        };
      });
    }
  }, {
    key: "isShowMatchModes",
    value: function isShowMatchModes() {
      return this.getColumnProp('dataType') !== 'boolean' && this.getColumnProp('showFilterMatchModes') && this.matchModes() && this.getColumnProp('showFilterMenuOptions');
    }
  }, {
    key: "isShowOperator",
    value: function isShowOperator() {
      return this.getColumnProp('showFilterOperator') && this.filterModel && this.filterModel.operator && this.getColumnProp('showFilterMenuOptions');
    }
  }, {
    key: "showRemoveIcon",
    value: function showRemoveIcon() {
      return this.fieldConstraints().length > 1;
    }
  }, {
    key: "isShowAddConstraint",
    value: function isShowAddConstraint() {
      return this.getColumnProp('showAddButton') && this.filterModel && this.filterModel.operator && this.fieldConstraints() && this.fieldConstraints().length < this.getColumnProp('maxConstraints') && this.getColumnProp('showFilterMenuOptions');
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(target) {
      return !this.isTargetClicked(target) && this.overlayRef && this.overlayRef.current && !(this.overlayRef.current.isSameNode(target) || this.overlayRef.current.contains(target));
    }
  }, {
    key: "isTargetClicked",
    value: function isTargetClicked(target) {
      return this.icon && (this.icon.isSameNode(target) || this.icon.contains(target));
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(prop) {
      return this.props.column.props[prop];
    }
  }, {
    key: "getDefaultConstraint",
    value: function getDefaultConstraint() {
      if (this.props.filtersStore && this.filterStoreModel) {
        if (this.filterStoreModel.operator) {
          return {
            matchMode: this.filterStoreModel.constraints[0].matchMode,
            operator: this.filterStoreModel.operator
          };
        } else {
          return {
            matchMode: this.filterStoreModel.matchMode
          };
        }
      }
    }
  }, {
    key: "findDataType",
    value: function findDataType() {
      var dataType = this.getColumnProp('dataType');
      var matchMode = this.getColumnProp('filterMatchMode');

      var hasMatchMode = function hasMatchMode(key) {
        return primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[key].some(function (mode) {
          return mode === matchMode;
        });
      };

      if (matchMode === 'custom' && !hasMatchMode(dataType)) {
        primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[dataType].push(primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterMatchMode"].CUSTOM);
        return dataType;
      } else if (matchMode) {
        return Object.keys(primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions).find(function (key) {
          return hasMatchMode(key);
        }) || dataType;
      }

      return dataType;
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      var field = this.field;
      var filterClearCallback = this.getColumnProp('onFilterClear');
      var defaultConstraint = this.getDefaultConstraint();

      var filters = _objectSpread$3({}, this.props.filters);

      if (filters[field].operator) {
        filters[field].constraints.splice(1);
        filters[field].operator = defaultConstraint.operator;
        filters[field].constraints[0] = {
          value: null,
          matchMode: defaultConstraint.matchMode
        };
      } else {
        filters[field].value = null;
        filters[field].matchMode = defaultConstraint.matchMode;
      }

      filterClearCallback && filterClearCallback();
      this.props.onFilterChange(filters);
      this.props.onFilterApply();
      this.hide();
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var filterApplyClickCallback = this.getColumnProp('onFilterApplyClick');
      filterApplyClickCallback && filterApplyClickCallback({
        field: this.field,
        constraints: this.filterModel
      });
      this.props.onFilterApply();
      this.hide();
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState(function (prevState) {
        return {
          overlayVisible: !prevState.overlayVisible
        };
      });
    }
  }, {
    key: "onToggleButtonKeyDown",
    value: function onToggleButtonKeyDown(event) {
      switch (event.key) {
        case 'Escape':
        case 'Tab':
          this.hide();
          break;

        case 'ArrowDown':
          if (this.state.overlayVisible) {
            var focusable = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getFirstFocusableElement(this.overlay);
            focusable && focusable.focus();
            event.preventDefault();
          } else if (event.altKey) {
            this.setState({
              overlayVisible: true
            });
            event.preventDefault();
          }

          break;
      }
    }
  }, {
    key: "onContentKeyDown",
    value: function onContentKeyDown(event) {
      if (event.key === 'Escape') {
        this.hide();
        this.icon && this.icon.focus();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event, index) {
      var filters = _objectSpread$3({}, this.props.filters);

      var value = event.target.value;

      if (this.props.display === 'menu') {
        filters[this.field].constraints[index].value = value;
      } else {
        filters[this.field].value = value;
      }

      this.props.onFilterChange(filters);

      if (!this.getColumnProp('showApplyButton') || this.props.display === 'row') {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "onRowMatchModeChange",
    value: function onRowMatchModeChange(matchMode) {
      var filterMatchModeChangeCallback = this.getColumnProp('onFilterMatchModeChange');

      var filters = _objectSpread$3({}, this.props.filters);

      filters[this.field].matchMode = matchMode;
      filterMatchModeChangeCallback && filterMatchModeChangeCallback({
        field: this.field,
        matchMode: matchMode
      });
      this.props.onFilterChange(filters);
      this.props.onFilterApply();
      this.hide();
    }
  }, {
    key: "onRowMatchModeKeyDown",
    value: function onRowMatchModeKeyDown(event, matchMode, clear) {
      var item = event.target;

      switch (event.key) {
        case 'ArrowDown':
          var nextItem = this.findNextItem(item);

          if (nextItem) {
            item.removeAttribute('tabindex');
            nextItem.tabIndex = 0;
            nextItem.focus();
          }

          event.preventDefault();
          break;

        case 'ArrowUp':
          var prevItem = this.findPrevItem(item);

          if (prevItem) {
            item.removeAttribute('tabindex');
            prevItem.tabIndex = 0;
            prevItem.focus();
          }

          event.preventDefault();
          break;

        case 'Enter':
          clear ? this.clearFilter() : this.onRowMatchModeChange(matchMode.value);
          event.preventDefault();
          break;
      }
    }
  }, {
    key: "onOperatorChange",
    value: function onOperatorChange(e) {
      var filterOperationChangeCallback = this.getColumnProp('onFilterOperatorChange');
      var value = e.value;

      var filters = _objectSpread$3({}, this.props.filters);

      filters[this.field].operator = value;
      this.props.onFilterChange(filters);
      filterOperationChangeCallback && filterOperationChangeCallback({
        field: this.field,
        operator: value
      });

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "onMenuMatchModeChange",
    value: function onMenuMatchModeChange(value, index) {
      var filterMatchModeChangeCallback = this.getColumnProp('onFilterMatchModeChange');

      var filters = _objectSpread$3({}, this.props.filters);

      filters[this.field].constraints[index].matchMode = value;
      this.props.onFilterChange(filters);
      filterMatchModeChangeCallback && filterMatchModeChangeCallback({
        field: this.field,
        matchMode: value,
        index: index
      });

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "addConstraint",
    value: function addConstraint() {
      var filterConstraintAddCallback = this.getColumnProp('onFilterConstraintAdd');
      var defaultConstraint = this.getDefaultConstraint();

      var filters = _objectSpread$3({}, this.props.filters);

      var newConstraint = {
        value: null,
        matchMode: defaultConstraint.matchMode
      };
      filters[this.field].constraints.push(newConstraint);
      filterConstraintAddCallback && filterConstraintAddCallback({
        field: this.field,
        constraint: newConstraint
      });
      this.props.onFilterChange(filters);

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "removeConstraint",
    value: function removeConstraint(index) {
      var filterConstraintRemoveCallback = this.getColumnProp('onFilterConstraintRemove');

      var filters = _objectSpread$3({}, this.props.filters);

      var removedConstraint = filters[this.field].constraints.splice(index, 1);
      filterConstraintRemoveCallback && filterConstraintRemoveCallback({
        field: this.field,
        constraint: removedConstraint
      });
      this.props.onFilterChange(filters);

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;else return item.parentElement.firstElementChild;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;else return item.parentElement.lastElementChild;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        overlayVisible: false
      });
    }
  }, {
    key: "onContentClick",
    value: function onContentClick(event) {
      this.selfClick = true;
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].emit('overlay-click', {
        originalEvent: event,
        target: this.overlay
      });
    }
  }, {
    key: "onContentMouseDown",
    value: function onContentMouseDown() {
      this.selfClick = true;
    }
  }, {
    key: "onOverlayEnter",
    value: function onOverlayEnter() {
      var _this2 = this;

      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ZIndexUtils"].set('overlay', this.overlay, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].zIndex['overlay']);
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].alignOverlay(this.overlay, this.icon, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].appendTo, false);
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();

      this.overlayEventListener = function (e) {
        if (!_this2.isOutsideClicked(e.target)) {
          _this2.selfClick = true;
        }
      };

      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].on('overlay-click', this.overlayEventListener);
    }
  }, {
    key: "onOverlayExit",
    value: function onOverlayExit() {
      this.onOverlayHide();
    }
  }, {
    key: "onOverlayExited",
    value: function onOverlayExited() {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ZIndexUtils"].clear(this.overlay);
    }
  }, {
    key: "onOverlayHide",
    value: function onOverlayHide() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].off('overlay-click', this.overlayEventListener);
      this.overlayEventListener = null;
    }
  }, {
    key: "bindOutsideClickListener",
    value: function bindOutsideClickListener() {
      var _this3 = this;

      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (!_this3.selfClick && _this3.isOutsideClicked(event.target)) {
            _this3.hide();
          }

          _this3.selfClick = false;
        };

        document.addEventListener('click', this.outsideClickListener);
      }
    }
  }, {
    key: "unbindOutsideClickListener",
    value: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this4 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ConnectedOverlayScrollHandler"](this.icon, function () {
          if (_this4.state.overlayVisible) {
            _this4.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "bindResizeListener",
    value: function bindResizeListener() {
      var _this5 = this;

      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this5.state.overlayVisible && !primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isTouchDevice()) {
            _this5.hide();
          }
        };

        window.addEventListener('resize', this.resizeListener);
      }
    }
  }, {
    key: "unbindResizeListener",
    value: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "fieldConstraints",
    value: function fieldConstraints() {
      return this.filterModel ? this.filterModel.constraints || [this.filterModel] : [];
    }
  }, {
    key: "operator",
    value: function operator() {
      return this.filterModel.operator;
    }
  }, {
    key: "operatorOptions",
    value: function operatorOptions() {
      return [{
        label: Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('matchAll'),
        value: primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].AND
      }, {
        label: Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('matchAny'),
        value: primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].OR
      }];
    }
  }, {
    key: "noFilterLabel",
    value: function noFilterLabel() {
      return Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('noFilter');
    }
  }, {
    key: "removeRuleButtonLabel",
    value: function removeRuleButtonLabel() {
      return Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('removeRule');
    }
  }, {
    key: "addRuleButtonLabel",
    value: function addRuleButtonLabel() {
      return Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('addRule');
    }
  }, {
    key: "clearButtonLabel",
    value: function clearButtonLabel() {
      return Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('clear');
    }
  }, {
    key: "applyButtonLabel",
    value: function applyButtonLabel() {
      return Object(primereact_api__WEBPACK_IMPORTED_MODULE_3__["localeOption"])('apply');
    }
  }, {
    key: "filterCallback",
    value: function filterCallback(value) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var filters = _objectSpread$3({}, this.props.filters);

      var meta = filters[this.field];
      this.props.display === 'menu' && meta && meta.operator ? filters[this.field].constraints[index].value = value : filters[this.field].value = value;
      this.props.onFilterChange(filters);
    }
  }, {
    key: "filterApplyCallback",
    value: function filterApplyCallback() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args && this.filterCallback(args[0], args[1]);
      this.props.onFilterApply();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.display === 'menu' && this.state.overlayVisible) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].alignOverlay(this.overlay, this.icon, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].appendTo, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.overlayEventListener) {
        primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__["OverlayService"].off('overlay-click', this.overlayEventListener);
        this.overlayEventListener = null;
      }

      if (this.overlay) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ZIndexUtils"].clear(this.overlay);
        this.onOverlayHide();
      }
    }
  }, {
    key: "renderFilterElement",
    value: function renderFilterElement(model, index) {
      var _this6 = this;

      var value = model ? model.value : null;
      return this.getColumnProp('filterElement') ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('filterElement'), {
        field: this.field,
        index: index,
        filterModel: model,
        value: value,
        filterApplyCallback: this.filterApplyCallback,
        filterCallback: this.filterCallback
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], {
        type: this.getColumnProp('filterType'),
        value: value || '',
        onChange: function onChange(e) {
          return _this6.onInputChange(e, index);
        },
        className: "p-column-filter",
        placeholder: this.getColumnProp('filterPlaceholder'),
        maxLength: this.getColumnProp('filterMaxLength')
      });
    }
  }, {
    key: "renderRowFilterElement",
    value: function renderRowFilterElement() {
      if (this.props.display === 'row') {
        var content = this.renderFilterElement(this.filterModel, 0);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-fluid p-column-filter-element"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderMenuFilterElement",
    value: function renderMenuFilterElement(fieldConstraint, index) {
      if (this.props.display === 'menu') {
        return this.renderFilterElement(fieldConstraint, index);
      }

      return null;
    }
  }, {
    key: "renderMenuButton",
    value: function renderMenuButton() {
      var _this7 = this;

      if (this.showMenuButton()) {
        var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-column-filter-menu-button p-link', {
          'p-column-filter-menu-button-open': this.state.overlayVisible,
          'p-column-filter-menu-button-active': this.hasFilter()
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          ref: function ref(el) {
            return _this7.icon = el;
          },
          type: "button",
          className: className,
          "aria-haspopup": true,
          "aria-expanded": this.state.overlayVisible,
          onClick: this.toggleMenu,
          onKeyDown: this.onToggleButtonKeyDown
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pi pi-filter-icon pi-filter"
        }));
      }

      return null;
    }
  }, {
    key: "renderClearButton",
    value: function renderClearButton() {
      if (this.getColumnProp('showClearButton') && this.props.display === 'row') {
        var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-column-filter-clear-button p-link', {
          'p-hidden-space': !this.hasRowFilter()
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: className,
          type: "button",
          onClick: this.clearFilter
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pi pi-filter-slash"
        }));
      }

      return null;
    }
  }, {
    key: "renderRowItems",
    value: function renderRowItems() {
      var _this8 = this;

      if (this.isShowMatchModes()) {
        var matchModes = this.matchModes();
        var noFilterLabel = this.noFilterLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "p-column-filter-row-items"
        }, matchModes.map(function (matchMode, i) {
          var value = matchMode.value,
              label = matchMode.label;
          var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-column-filter-row-item', {
            'p-highlight': _this8.isRowMatchModeSelected(value)
          });
          var tabIndex = i === 0 ? 0 : null;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: className,
            key: label,
            onClick: function onClick() {
              return _this8.onRowMatchModeChange(value);
            },
            onKeyDown: function onKeyDown(e) {
              return _this8.onRowMatchModeKeyDown(e, matchMode);
            },
            tabIndex: tabIndex
          }, label);
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "p-column-filter-separator"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "p-column-filter-row-item",
          onClick: this.clearFilter,
          onKeyDown: function onKeyDown(e) {
            return _this8.onRowMatchModeKeyDown(e, null, true);
          }
        }, noFilterLabel));
      }

      return null;
    }
  }, {
    key: "renderOperator",
    value: function renderOperator() {
      if (this.isShowOperator()) {
        var options = this.operatorOptions();
        var value = this.operator();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-column-filter-operator"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
          options: options,
          value: value,
          onChange: this.onOperatorChange,
          className: "p-column-filter-operator-dropdown"
        }));
      }

      return null;
    }
  }, {
    key: "renderMatchModeDropdown",
    value: function renderMatchModeDropdown(constraint, index) {
      var _this9 = this;

      if (this.isShowMatchModes()) {
        var options = this.matchModes();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
          options: options,
          value: constraint.matchMode,
          onChange: function onChange(e) {
            return _this9.onMenuMatchModeChange(e.value, index);
          },
          className: "p-column-filter-matchmode-dropdown"
        });
      }

      return null;
    }
  }, {
    key: "renderRemoveButton",
    value: function renderRemoveButton(index) {
      var _this10 = this;

      if (this.showRemoveIcon()) {
        var removeRuleLabel = this.removeRuleButtonLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "button",
          icon: "pi pi-trash",
          className: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
          onClick: function onClick() {
            return _this10.removeConstraint(index);
          },
          label: removeRuleLabel
        });
      }

      return null;
    }
  }, {
    key: "renderConstraints",
    value: function renderConstraints() {
      var _this11 = this;

      var fieldConstraints = this.fieldConstraints();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-column-filter-constraints"
      }, fieldConstraints.map(function (fieldConstraint, i) {
        var matchModeDropdown = _this11.renderMatchModeDropdown(fieldConstraint, i);

        var menuFilterElement = _this11.renderMenuFilterElement(fieldConstraint, i);

        var removeButton = _this11.renderRemoveButton(i);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "p-column-filter-constraint"
        }, matchModeDropdown, menuFilterElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, removeButton));
      }));
    }
  }, {
    key: "renderAddRule",
    value: function renderAddRule() {
      if (this.isShowAddConstraint()) {
        var addRuleLabel = this.addRuleButtonLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-column-filter-add-rule"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "button",
          label: addRuleLabel,
          icon: "pi pi-plus",
          className: "p-column-filter-add-button p-button-text p-button-sm",
          onClick: this.addConstraint
        }));
      }

      return null;
    }
  }, {
    key: "renderFilterClearButton",
    value: function renderFilterClearButton() {
      if (this.getColumnProp('showClearButton')) {
        if (!this.getColumnProp('filterClear')) {
          var clearLabel = this.clearButtonLabel();
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            type: "button",
            className: "p-button-outlined p-button-sm",
            onClick: this.clearFilter,
            label: clearLabel
          });
        }

        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('filterClear'), {
          field: this.field,
          filterModel: this.filterModel,
          filterClearCallback: this.clearFilter
        });
      }

      return null;
    }
  }, {
    key: "renderFilterApplyButton",
    value: function renderFilterApplyButton() {
      if (this.getColumnProp('showApplyButton')) {
        if (!this.getColumnProp('filterApply')) {
          var applyLabel = this.applyButtonLabel();
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            type: "button",
            className: "p-button-sm",
            onClick: this.applyFilter,
            label: applyLabel
          });
        }

        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('filterApply'), {
          field: this.field,
          filterModel: this.filterModel,
          filterApplyCallback: this.applyFilter
        });
      }

      return null;
    }
  }, {
    key: "renderButtonBar",
    value: function renderButtonBar() {
      var clearButton = this.renderFilterClearButton();
      var applyButton = this.renderFilterApplyButton();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-column-filter-buttonbar"
      }, clearButton, applyButton);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var operator = this.renderOperator();
      var constraints = this.renderConstraints();
      var addRule = this.renderAddRule();
      var buttonBar = this.renderButtonBar();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, operator, constraints, addRule, buttonBar);
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var style = this.getColumnProp('filterMenuStyle');
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-column-filter-overlay p-component p-fluid', this.getColumnProp('filterMenuClassName'), {
        'p-column-filter-overlay-menu': this.props.display === 'menu',
        'p-input-filled': primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].inputStyle === 'filled',
        'p-ripple-disabled': primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].ripple === false
      });
      var filterHeader = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('filterHeader'), {
        field: this.field,
        filterModel: this.filterModel,
        filterApplyCallback: this.filterApplyCallback
      });
      var filterFooter = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('filterFooter'), {
        field: this.field,
        filterModel: this.filterModel,
        filterApplyCallback: this.filterApplyCallback
      });
      var items = this.props.display === 'row' ? this.renderRowItems() : this.renderItems();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_7__["Portal"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__["CSSTransition"], {
        nodeRef: this.overlayRef,
        classNames: "p-connected-overlay",
        "in": this.state.overlayVisible,
        timeout: {
          enter: 120,
          exit: 100
        },
        unmountOnExit: true,
        onEnter: this.onOverlayEnter,
        onExit: this.onOverlayExit,
        onExited: this.onOverlayExited
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.overlayRef,
        style: style,
        className: className,
        onKeyDown: this.onContentKeyDown,
        onClick: this.onContentClick,
        onMouseDown: this.onContentMouseDown
      }, filterHeader, items, filterFooter)));
    }
  }, {
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-column-filter p-fluid', {
        'p-column-filter-row': this.props.display === 'row',
        'p-column-filter-menu': this.props.display === 'menu'
      });
      var rowFilterElement = this.renderRowFilterElement();
      var menuButton = this.renderMenuButton();
      var clearButton = this.renderClearButton();
      var overlay = this.renderOverlay();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className
      }, rowFilterElement, menuButton, clearButton, overlay);
    }
  }]);

  return ColumnFilter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HeaderCell = /*#__PURE__*/function (_Component) {
  _inherits(HeaderCell, _Component);

  var _super = _createSuper$2(HeaderCell);

  function HeaderCell(props) {
    var _this;

    _classCallCheck(this, HeaderCell);

    _this = _super.call(this, props);
    _this.state = {
      styleObject: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this)); // drag

    _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this)); // resize

    _this.onResizerMouseDown = _this.onResizerMouseDown.bind(_assertThisInitialized(_this));
    _this.onResizerClick = _this.onResizerClick.bind(_assertThisInitialized(_this));
    _this.onResizerDoubleClick = _this.onResizerDoubleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeaderCell, [{
    key: "isBadgeVisible",
    value: function isBadgeVisible() {
      return this.props.multiSortMeta && this.props.multiSortMeta.length > 1;
    }
  }, {
    key: "isSortableDisabled",
    value: function isSortableDisabled() {
      return !this.getColumnProp('sortable') || this.getColumnProp('sortable') && (this.props.allSortableDisabled || this.getColumnProp('sortableDisabled'));
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.props.column ? typeof args[0] === 'string' ? this.props.column.props[args[0]] : (args[0] || this.props.column).props[args[1]] : null;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var headerStyle = this.getColumnProp('headerStyle');
      var columnStyle = this.getColumnProp('style');
      return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, headerStyle, this.state.styleObject) : Object.assign({}, columnStyle, headerStyle);
    }
  }, {
    key: "getMultiSortMetaIndex",
    value: function getMultiSortMetaIndex() {
      var _this2 = this;

      return this.props.multiSortMeta.findIndex(function (meta) {
        return meta.field === _this2.getColumnProp('field') || meta.field === _this2.getColumnProp('sortField');
      });
    }
  }, {
    key: "getSortMeta",
    value: function getSortMeta() {
      var sorted = false;
      var sortOrder = 0;
      var metaIndex = -1;

      if (this.props.sortMode === 'single') {
        sorted = this.props.sortField && (this.props.sortField === this.getColumnProp('field') || this.props.sortField === this.getColumnProp('sortField'));
        sortOrder = sorted ? this.props.sortOrder : 0;
      } else if (this.props.sortMode === 'multiple') {
        metaIndex = this.getMultiSortMetaIndex();

        if (metaIndex > -1) {
          sorted = true;
          sortOrder = this.props.multiSortMeta[metaIndex].order;
        }
      }

      return {
        sorted: sorted,
        sortOrder: sortOrder,
        metaIndex: metaIndex
      };
    }
  }, {
    key: "getAriaSort",
    value: function getAriaSort(_ref) {
      var sorted = _ref.sorted,
          sortOrder = _ref.sortOrder;

      if (this.getColumnProp('sortable')) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
        if (sortIcon === 'pi-sort-amount-down') return 'descending';else if (sortIcon === 'pi-sort-amount-up-alt') return 'ascending';else return 'none';
      }

      return null;
    }
  }, {
    key: "updateStickyPosition",
    value: function updateStickyPosition() {
      if (this.getColumnProp('frozen')) {
        var styleObject = _objectSpread$2({}, this.state.styleObject);

        var align = this.getColumnProp('alignFrozen');

        if (align === 'right') {
          var right = 0;
          var next = this.el.nextElementSibling;

          if (next) {
            right = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(next) + parseFloat(next.style.right || 0);
          }

          styleObject['right'] = right + 'px';
        } else {
          var left = 0;
          var prev = this.el.previousElementSibling;

          if (prev) {
            left = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }

          styleObject['left'] = left + 'px';
        }

        var filterRow = this.el.parentElement.nextElementSibling;

        if (filterRow) {
          var index = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].index(this.el);
          filterRow.children[index].style.left = styleObject['left'];
          filterRow.children[index].style.right = styleObject['right'];
        }

        var isSameStyle = this.state.styleObject['left'] === styleObject['left'] && this.state.styleObject['right'] === styleObject['right'];
        !isSameStyle && this.setState({
          styleObject: styleObject
        });
      }
    }
  }, {
    key: "updateSortableDisabled",
    value: function updateSortableDisabled(prevColumn) {
      if (this.getColumnProp(prevColumn, 'sortableDisabled') !== this.getColumnProp('sortableDisabled') || this.getColumnProp(prevColumn, 'sortable') !== this.getColumnProp('sortable')) {
        this.props.onSortableChange();
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (!this.isSortableDisabled()) {
        var targetNode = event.target;

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(targetNode, 'p-sortable-column') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(targetNode, 'p-column-title') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(targetNode, 'p-column-header-content') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(targetNode, 'p-sortable-column-icon') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].clearSelection();
          this.props.onSortChange({
            originalEvent: event,
            column: this.props.column,
            sortableDisabledFields: this.props.sortableDisabledFields
          });
        }
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.props.onColumnMouseDown({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter' && event.currentTarget === this.el && primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(event.currentTarget, 'p-sortable-column')) {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      this.props.onColumnDragStart({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      this.props.onColumnDragOver({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.props.onColumnDragLeave({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      this.props.onColumnDrop({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onResizerMouseDown",
    value: function onResizerMouseDown(event) {
      this.props.onColumnResizeStart({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onResizerClick",
    value: function onResizerClick(event) {
      if (this.props.onColumnResizerClick) {
        this.props.onColumnResizerClick({
          originalEvent: event,
          element: event.currentTarget.parentElement,
          column: this.props.column
        });
        event.preventDefault();
      }
    }
  }, {
    key: "onResizerDoubleClick",
    value: function onResizerDoubleClick(event) {
      if (this.props.onColumnResizerDoubleClick) {
        this.props.onColumnResizerDoubleClick({
          originalEvent: event,
          element: event.currentTarget.parentElement,
          column: this.props.column
        });
        event.preventDefault();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }

      this.updateSortableDisabled(prevProps.column);
    }
  }, {
    key: "renderResizer",
    value: function renderResizer() {
      if (this.props.resizableColumns && !this.getColumnProp('frozen')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "p-column-resizer",
          onMouseDown: this.onResizerMouseDown,
          onClick: this.onResizerClick,
          onDoubleClick: this.onResizerDoubleClick
        });
      }

      return null;
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var title = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.getColumnProp('header'), {
        props: this.props.tableProps
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-column-title"
      }, title);
    }
  }, {
    key: "renderSortIcon",
    value: function renderSortIcon(_ref2) {
      var sorted = _ref2.sorted,
          sortOrder = _ref2.sortOrder;

      if (this.getColumnProp('sortable')) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
        var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-sortable-column-icon pi pi-fw', sortIcon);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: className
        });
      }

      return null;
    }
  }, {
    key: "renderBadge",
    value: function renderBadge(_ref3) {
      var metaIndex = _ref3.metaIndex;

      if (metaIndex !== -1 && this.isBadgeVisible()) {
        var value = this.props.groupRowsBy && this.props.groupRowsBy === this.props.groupRowSortField ? metaIndex : metaIndex + 1;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "p-sortable-column-badge"
        }, value);
      }

      return null;
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox() {
      if (this.props.showSelectAll && this.getColumnProp('selectionMode') === 'multiple' && this.props.filterDisplay !== 'row') {
        var allRowsSelected = this.props.allRowsSelected(this.props.value);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderCheckbox, {
          checked: allRowsSelected,
          onChange: this.props.onColumnCheckboxChange,
          disabled: this.props.empty
        });
      }

      return null;
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      if (this.props.filterDisplay === 'menu' && this.getColumnProp('filter')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColumnFilter, {
          display: "menu",
          column: this.props.column,
          filters: this.props.filters,
          onFilterChange: this.props.onFilterChange,
          onFilterApply: this.props.onFilterApply,
          filtersStore: this.props.filtersStore
        });
      }

      return null;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(sortMeta) {
      var title = this.renderTitle();
      var sortIcon = this.renderSortIcon(sortMeta);
      var badge = this.renderBadge(sortMeta);
      var checkbox = this.renderCheckbox();
      var filter = this.renderFilter();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-column-header-content"
      }, title, sortIcon, badge, checkbox, filter);
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this3 = this;

      var isSortableDisabled = this.isSortableDisabled();
      var sortMeta = this.getSortMeta();
      var style = this.getStyle();
      var align = this.getColumnProp('alignHeader') || this.getColumnProp('align');
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])(this.getColumnProp('headerClassName'), this.getColumnProp('className'), _defineProperty({
        'p-sortable-column': this.getColumnProp('sortable'),
        'p-resizable-column': this.props.resizableColumns,
        'p-highlight': sortMeta.sorted,
        'p-frozen-column': this.getColumnProp('frozen'),
        'p-selection-column': this.getColumnProp('selectionMode'),
        'p-sortable-disabled': this.getColumnProp('sortable') && isSortableDisabled,
        'p-reorderable-column': this.props.reorderableColumns && this.getColumnProp('reorderable')
      }, "p-align-".concat(align), !!align));
      var tabIndex = this.getColumnProp('sortable') && !isSortableDisabled ? this.props.tabIndex : null;
      var colSpan = this.getColumnProp('colSpan');
      var rowSpan = this.getColumnProp('rowSpan');
      var ariaSort = this.getAriaSort(sortMeta);
      var resizer = this.renderResizer();
      var header = this.renderHeader(sortMeta);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        ref: function ref(el) {
          return _this3.el = el;
        },
        style: style,
        className: className,
        tabIndex: tabIndex,
        role: "columnheader",
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onMouseDown: this.onMouseDown,
        onDragStart: this.onDragStart,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop,
        colSpan: colSpan,
        rowSpan: rowSpan,
        "aria-sort": ariaSort
      }, resizer, header);
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderElement();
    }
  }]);

  return HeaderCell;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TableHeader = /*#__PURE__*/function (_Component) {
  _inherits(TableHeader, _Component);

  var _super = _createSuper$1(TableHeader);

  function TableHeader(props) {
    var _this;

    _classCallCheck(this, TableHeader);

    _this = _super.call(this, props);
    _this.state = {
      sortableDisabledFields: [],
      allSortableDisabled: false,
      styleObject: {}
    };
    _this.onSortableChange = _this.onSortableChange.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TableHeader, [{
    key: "isSingleSort",
    value: function isSingleSort() {
      return this.props.sortMode === 'single';
    }
  }, {
    key: "isMultipleSort",
    value: function isMultipleSort() {
      return this.props.sortMode === 'multiple';
    }
  }, {
    key: "isAllSortableDisabled",
    value: function isAllSortableDisabled() {
      return this.isSingleSort() && this.state.allSortableDisabled;
    }
  }, {
    key: "isColumnSorted",
    value: function isColumnSorted(column) {
      return this.props.sortField !== null ? column.props.field === this.props.sortField || column.props.sortField === this.props.sortField : false;
    }
  }, {
    key: "updateSortableDisabled",
    value: function updateSortableDisabled() {
      var _this2 = this;

      if (this.isSingleSort() || this.isMultipleSort() && this.props.onSortChange) {
        var sortableDisabledFields = [];
        var allSortableDisabled = false;
        this.props.columns.forEach(function (column) {
          if (column.props.sortableDisabled) {
            sortableDisabledFields.push(column.props.sortField || column.props.field);

            if (!allSortableDisabled && _this2.isColumnSorted(column)) {
              allSortableDisabled = true;
            }
          }
        });
        this.setState({
          sortableDisabledFields: sortableDisabledFields,
          allSortableDisabled: allSortableDisabled
        });
      }
    }
  }, {
    key: "onSortableChange",
    value: function onSortableChange() {
      this.updateSortableDisabled();
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(e) {
      this.props.onColumnCheckboxChange(e, this.props.value);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSortableDisabled();
    }
  }, {
    key: "renderGroupHeaderCells",
    value: function renderGroupHeaderCells(row) {
      var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(row.props.children);
      return this.renderHeaderCells(columns);
    }
  }, {
    key: "renderHeaderCells",
    value: function renderHeaderCells(columns) {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(columns, function (col, i) {
        var isVisible = col ? !col.props.hidden : true;
        var key = col ? col.props.columnKey || col.props.field || i : i;
        return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderCell, {
          key: key,
          value: _this3.props.value,
          tableProps: _this3.props.tableProps,
          column: col,
          tabIndex: _this3.props.tabIndex,
          empty: _this3.props.empty,
          resizableColumns: _this3.props.resizableColumns,
          groupRowsBy: _this3.props.groupRowsBy,
          groupRowSortField: _this3.props.groupRowSortField,
          sortMode: _this3.props.sortMode,
          sortField: _this3.props.sortField,
          sortOrder: _this3.props.sortOrder,
          multiSortMeta: _this3.props.multiSortMeta,
          allSortableDisabled: _this3.isAllSortableDisabled(),
          onSortableChange: _this3.onSortableChange,
          sortableDisabledFields: _this3.state.sortableDisabledFields,
          filterDisplay: _this3.props.filterDisplay,
          filters: _this3.props.filters,
          filtersStore: _this3.props.filtersStore,
          onFilterChange: _this3.props.onFilterChange,
          onFilterApply: _this3.props.onFilterApply,
          onColumnMouseDown: _this3.props.onColumnMouseDown,
          onColumnDragStart: _this3.props.onColumnDragStart,
          onColumnDragOver: _this3.props.onColumnDragOver,
          onColumnDragLeave: _this3.props.onColumnDragLeave,
          onColumnDrop: _this3.props.onColumnDrop,
          onColumnResizeStart: _this3.props.onColumnResizeStart,
          onColumnResizerClick: _this3.props.onColumnResizerClick,
          onColumnResizerDoubleClick: _this3.props.onColumnResizerDoubleClick,
          showSelectAll: _this3.props.showSelectAll,
          allRowsSelected: _this3.props.allRowsSelected,
          onColumnCheckboxChange: _this3.onCheckboxChange,
          reorderableColumns: _this3.props.reorderableColumns,
          onSortChange: _this3.props.onSortChange
        });
      });
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox(selectionMode) {
      if (this.props.showSelectAll && selectionMode === 'multiple') {
        var allRowsSelected = this.props.allRowsSelected(this.props.value);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderCheckbox, {
          checked: allRowsSelected,
          onChange: this.onCheckboxChange,
          disabled: this.props.empty
        });
      }

      return null;
    }
  }, {
    key: "renderFilter",
    value: function renderFilter(column, filter) {
      if (filter) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColumnFilter, {
          display: "row",
          column: column,
          filters: this.props.filters,
          filtersStore: this.props.filtersStore,
          onFilterChange: this.props.onFilterChange,
          onFilterApply: this.props.onFilterApply
        });
      }

      return null;
    }
  }, {
    key: "renderFilterCells",
    value: function renderFilterCells() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.columns, function (col, i) {
        var isVisible = !col.props.hidden;

        if (isVisible) {
          var _col$props = col.props,
              filterHeaderStyle = _col$props.filterHeaderStyle,
              style = _col$props.style,
              filterHeaderClassName = _col$props.filterHeaderClassName,
              className = _col$props.className,
              frozen = _col$props.frozen,
              columnKey = _col$props.columnKey,
              field = _col$props.field,
              selectionMode = _col$props.selectionMode,
              filter = _col$props.filter;

          var colStyle = _objectSpread$1(_objectSpread$1({}, filterHeaderStyle || {}), style || {});

          var colClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-filter-column', filterHeaderClassName, className, {
            'p-frozen-column': frozen
          });
          var colKey = columnKey || field || i;

          var checkbox = _this4.renderCheckbox(selectionMode);

          var filterRow = _this4.renderFilter(col, filter);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
            key: colKey,
            style: colStyle,
            className: colClassName
          }, checkbox, filterRow);
        }

        return null;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      if (this.props.headerColumnGroup) {
        var rows = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.headerColumnGroup.props.children);
        return rows.map(function (row, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
            key: i,
            role: "row"
          }, _this5.renderGroupHeaderCells(row));
        });
      } else {
        var headerRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          role: "row"
        }, this.renderHeaderCells(this.props.columns));
        var filterRow = this.props.filterDisplay === 'row' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          role: "row"
        }, this.renderFilterCells());
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, headerRow, filterRow);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.renderContent();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        className: "p-datatable-thead"
      }, content);
    }
  }]);

  return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DataTable = /*#__PURE__*/function (_Component) {
  _inherits(DataTable, _Component);

  var _super = _createSuper(DataTable);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _super.call(this, props);
    _this.state = {
      d_rows: props.rows,
      columnOrder: [],
      groupRowsSortMeta: null,
      editingMeta: {},
      attributeSelector: null
    };

    if (!_this.props.onPage) {
      _this.state.first = props.first;
      _this.state.rows = props.rows;
    }

    if (!_this.props.onSort) {
      _this.state.sortField = props.sortField;
      _this.state.sortOrder = props.sortOrder;
      _this.state.multiSortMeta = props.multiSortMeta;
    }

    _this.state.d_filters = _this.cloneFilters(props.filters);

    if (!_this.props.onFilter) {
      _this.state.filters = props.filters;
    } // header


    _this.onSortChange = _this.onSortChange.bind(_assertThisInitialized(_this));
    _this.onFilterChange = _this.onFilterChange.bind(_assertThisInitialized(_this));
    _this.onFilterApply = _this.onFilterApply.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderMouseDown = _this.onColumnHeaderMouseDown.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDragStart = _this.onColumnHeaderDragStart.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDragOver = _this.onColumnHeaderDragOver.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDragLeave = _this.onColumnHeaderDragLeave.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDrop = _this.onColumnHeaderDrop.bind(_assertThisInitialized(_this));
    _this.onColumnResizeStart = _this.onColumnResizeStart.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderCheckboxChange = _this.onColumnHeaderCheckboxChange.bind(_assertThisInitialized(_this));
    _this.allRowsSelected = _this.allRowsSelected.bind(_assertThisInitialized(_this)); // body

    _this.onEditingMetaChange = _this.onEditingMetaChange.bind(_assertThisInitialized(_this)); //paginator

    _this.onPageChange = _this.onPageChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DataTable, [{
    key: "isCustomStateStorage",
    value: function isCustomStateStorage() {
      return this.props.stateStorage === 'custom';
    }
  }, {
    key: "isStateful",
    value: function isStateful() {
      return this.props.stateKey != null || this.isCustomStateStorage();
    }
  }, {
    key: "isVirtualScrollerDisabled",
    value: function isVirtualScrollerDisabled() {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isEmpty(this.props.virtualScrollerOptions) || !this.props.scrollable;
    }
  }, {
    key: "isEquals",
    value: function isEquals(data1, data2) {
      return this.props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(this.getFilters()) || this.props.globalFilter;
    }
  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.props.onPage ? this.props.first : this.state.first;
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return this.props.onPage ? this.props.rows : this.state.rows;
    }
  }, {
    key: "getSortField",
    value: function getSortField() {
      return this.props.onSort ? this.props.sortField : this.state.sortField;
    }
  }, {
    key: "getSortOrder",
    value: function getSortOrder() {
      return this.props.onSort ? this.props.sortOrder : this.state.sortOrder;
    }
  }, {
    key: "getMultiSortMeta",
    value: function getMultiSortMeta() {
      return (this.props.onSort ? this.props.multiSortMeta : this.state.multiSortMeta) || [];
    }
  }, {
    key: "getFilters",
    value: function getFilters() {
      return this.props.onFilter ? this.props.filters : this.state.filters;
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(col, prop) {
      return col.props[prop];
    }
  }, {
    key: "getColumns",
    value: function getColumns(ignoreReorderable) {
      var _this2 = this;

      var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.children);

      if (!columns) {
        return null;
      }

      if (!ignoreReorderable && this.props.reorderableColumns && this.state.columnOrder) {
        var orderedColumns = this.state.columnOrder.reduce(function (arr, columnKey) {
          var column = _this2.findColumnByKey(columns, columnKey);

          column && arr.push(column);
          return arr;
        }, []);
        return [].concat(_toConsumableArray(orderedColumns), _toConsumableArray(columns.filter(function (col) {
          return orderedColumns.indexOf(col) < 0;
        })));
      }

      return columns;
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      switch (this.props.stateStorage) {
        case 'local':
          return window.localStorage;

        case 'session':
          return window.sessionStorage;

        case 'custom':
          return null;

        default:
          throw new Error(this.props.stateStorage + ' is not a valid value for the state storage, supported values are "local", "session" and "custom".');
      }
    }
  }, {
    key: "saveState",
    value: function saveState() {
      var state = {};

      if (this.props.paginator) {
        state.first = this.getFirst();
        state.rows = this.getRows();
      }

      var sortField = this.getSortField();

      if (sortField) {
        state.sortField = sortField;
        state.sortOrder = this.getSortOrder();
      }

      var multiSortMeta = this.getMultiSortMeta();

      if (multiSortMeta) {
        state.multiSortMeta = multiSortMeta;
      }

      if (this.hasFilter()) {
        state.filters = this.getFilters();
      }

      if (this.props.resizableColumns) {
        this.saveColumnWidths(state);
      }

      if (this.props.reorderableColumns) {
        state.columnOrder = this.state.columnOrder;
      }

      if (this.props.expandedRows) {
        state.expandedRows = this.props.expandedRows;
      }

      if (this.props.selection && this.props.onSelectionChange) {
        state.selection = this.props.selection;
      }

      if (this.isCustomStateStorage()) {
        if (this.props.customSaveState) {
          this.props.customSaveState(state);
        }
      } else {
        var storage = this.getStorage();

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(state)) {
          storage.setItem(this.props.stateKey, JSON.stringify(state));
        }
      }

      if (this.props.onStateSave) {
        this.props.onStateSave(state);
      }
    }
  }, {
    key: "clearState",
    value: function clearState() {
      var storage = this.getStorage();

      if (storage && this.props.stateKey) {
        storage.removeItem(this.props.stateKey);
      }
    }
  }, {
    key: "restoreState",
    value: function restoreState(state) {
      var restoredState = {};

      if (this.isCustomStateStorage()) {
        if (this.props.customRestoreState) {
          restoredState = this.props.customRestoreState();
        }
      } else {
        var storage = this.getStorage();
        var stateString = storage.getItem(this.props.stateKey);
        var dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;

        var reviver = function reviver(key, value) {
          return typeof value === "string" && dateFormat.test(value) ? new Date(value) : value;
        };

        if (stateString) {
          restoredState = JSON.parse(stateString, reviver);
        }
      }

      this._restoreState(restoredState, state);
    }
  }, {
    key: "restoreTableState",
    value: function restoreTableState(restoredState) {
      var state = this._restoreState(restoredState);

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(state)) {
        this.setState(state);
      }
    }
  }, {
    key: "_restoreState",
    value: function _restoreState(restoredState) {
      var _this3 = this;

      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(restoredState)) {
        if (this.props.paginator) {
          if (this.props.onPage) {
            var getOnPageParams = function getOnPageParams(first, rows) {
              var totalRecords = _this3.getTotalRecords(_this3.processedData());

              var pageCount = Math.ceil(totalRecords / rows) || 1;
              var page = Math.floor(first / rows);
              return {
                first: first,
                rows: rows,
                page: page,
                pageCount: pageCount
              };
            };

            this.props.onPage(this.createEvent(getOnPageParams(restoredState.first, restoredState.rows)));
          } else {
            state.first = restoredState.first;
            state.rows = restoredState.rows;
          }
        }

        if (restoredState.sortField) {
          if (this.props.onSort) {
            this.props.onSort(this.createEvent({
              sortField: restoredState.sortField,
              sortOrder: restoredState.sortOrder
            }));
          } else {
            state.sortField = restoredState.sortField;
            state.sortOrder = restoredState.sortOrder;
          }
        }

        if (restoredState.multiSortMeta) {
          if (this.props.onSort) {
            this.props.onSort(this.createEvent({
              multiSortMeta: restoredState.multiSortMeta
            }));
          } else {
            state.multiSortMeta = restoredState.multiSortMeta;
          }
        }

        if (restoredState.filters) {
          state.d_filters = this.cloneFilters(restoredState.filters);

          if (this.props.onFilter) {
            this.props.onFilter(this.createEvent({
              filters: restoredState.filters
            }));
          } else {
            state.filters = this.cloneFilters(restoredState.filters);
          }
        }

        if (this.props.resizableColumns) {
          this.columnWidthsState = restoredState.columnWidths;
          this.tableWidthState = restoredState.tableWidth;
        }

        if (this.props.reorderableColumns) {
          state.columnOrder = restoredState.columnOrder;
        }

        if (restoredState.expandedRows && this.props.onRowToggle) {
          this.props.onRowToggle({
            data: restoredState.expandedRows
          });
        }

        if (restoredState.selection && this.props.onSelectionChange) {
          this.props.onSelectionChange({
            value: restoredState.selection
          });
        }

        if (this.props.onStateRestore) {
          this.props.onStateRestore(restoredState);
        }
      }

      return state;
    }
  }, {
    key: "saveColumnWidths",
    value: function saveColumnWidths(state) {
      var widths = [];
      var headers = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].find(this.el, '.p-datatable-thead > tr > th');
      headers.forEach(function (header) {
        return widths.push(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(header));
      });
      state.columnWidths = widths.join(',');

      if (this.props.columnResizeMode === 'expand') {
        state.tableWidth = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.table) + 'px';
      }
    }
  }, {
    key: "restoreColumnWidths",
    value: function restoreColumnWidths() {
      var _this4 = this;

      if (this.columnWidthsState) {
        var widths = this.columnWidthsState.split(',');

        if (this.props.columnResizeMode === 'expand' && this.tableWidthState) {
          this.table.style.width = this.tableWidthState;
          this.table.style.minWidth = this.tableWidthState;
          this.el.style.width = this.tableWidthState;
        }

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(widths)) {
          this.createStyleElement();
          var innerHTML = '';
          widths.forEach(function (width, index) {
            var style = _this4.props.scrollable ? "flex: 1 1 ".concat(width, "px !important") : "width: ".concat(width, "px !important");
            innerHTML += "\n                        .p-datatable[".concat(_this4.state.attributeSelector, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, "),\n                        .p-datatable[").concat(_this4.state.attributeSelector, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, "),\n                        .p-datatable[").concat(_this4.state.attributeSelector, "] .p-datatable-tfoot > tr > td:nth-child(").concat(index + 1, ") {\n                            ").concat(style, "\n                        }\n                    ");
          });
          this.styleElement.innerHTML = innerHTML;
        }
      }
    }
  }, {
    key: "findParentHeader",
    value: function findParentHeader(element) {
      if (element.nodeName === 'TH') {
        return element;
      } else {
        var parent = element.parentElement;

        while (parent.nodeName !== 'TH') {
          parent = parent.parentElement;
          if (!parent) break;
        }

        return parent;
      }
    }
  }, {
    key: "getGroupRowSortField",
    value: function getGroupRowSortField() {
      return this.props.sortMode === 'single' ? this.props.sortField : this.state.groupRowsSortMeta ? this.state.groupRowsSortMeta.field : null;
    }
  }, {
    key: "getSelectableData",
    value: function getSelectableData(val) {
      var _this5 = this;

      if (this.props.showSelectionElement || this.props.isDataSelectable) {
        return val.filter(function (data, index) {
          var isSelectable = true;
          if (_this5.props.showSelectionElement) isSelectable = _this5.props.showSelectionElement({
            rowIndex: index,
            props: _this5.props
          });
          if (_this5.props.isDataSelectable && isSelectable) isSelectable = _this5.props.isDataSelectable({
            data: data,
            index: index
          });
          return isSelectable;
        });
      }

      return val;
    }
  }, {
    key: "allRowsSelected",
    value: function allRowsSelected(processedData) {
      var _this6 = this;

      if (this.props.onSelectAllChange) {
        return this.props.selectAll;
      } else {
        var data = this.props.selectionPageOnly ? this.dataToRender(processedData) : processedData;
        var val = this.props.frozenValue ? [].concat(_toConsumableArray(this.props.frozenValue), _toConsumableArray(data)) : data;
        var selectableVal = this.getSelectableData(val);
        return selectableVal && this.props.selection && selectableVal.every(function (sv) {
          return _this6.props.selection.some(function (s) {
            return _this6.isEquals(s, sv);
          });
        });
      }
    }
  }, {
    key: "getSelectionModeInColumn",
    value: function getSelectionModeInColumn(columns) {
      if (columns) {
        var col = columns.find(function (c) {
          return !!c.props.selectionMode;
        });
        return col ? col.props.selectionMode : null;
      }

      return null;
    }
  }, {
    key: "findColumnByKey",
    value: function findColumnByKey(columns, key) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(columns) ? columns.find(function (col) {
        return col.props.columnKey === key || col.props.field === key;
      }) : null;
    }
  }, {
    key: "getTotalRecords",
    value: function getTotalRecords(data) {
      return this.props.lazy ? this.props.totalRecords : data ? data.length : 0;
    }
  }, {
    key: "onEditingMetaChange",
    value: function onEditingMetaChange(e) {
      var rowData = e.rowData,
          field = e.field,
          rowIndex = e.rowIndex,
          editing = e.editing;

      var editingMeta = _objectSpread({}, this.state.editingMeta);

      var meta = editingMeta[rowIndex];

      if (editing) {
        !meta && (meta = editingMeta[rowIndex] = {
          data: _objectSpread({}, rowData),
          fields: []
        });
        meta['fields'].push(field);
      } else if (meta) {
        var fields = meta['fields'].filter(function (f) {
          return f !== field;
        });
        !fields.length ? delete editingMeta[rowIndex] : meta['fields'] = fields;
      }

      this.setState({
        editingMeta: editingMeta
      });
    }
  }, {
    key: "clearEditingMetaData",
    value: function clearEditingMetaData() {
      if (this.props.editMode && primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(this.state.editingMeta)) {
        this.setState({
          editingMeta: {}
        });
      }
    }
  }, {
    key: "onColumnResizeStart",
    value: function onColumnResizeStart(e) {
      var event = e.originalEvent,
          column = e.column;
      var containerLeft = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.el).left;
      this.resizeColumn = column;
      this.resizeColumnElement = event.currentTarget.parentElement;
      this.columnResizing = true;
      this.lastResizeHelperX = event.pageX - containerLeft + this.el.scrollLeft;
      this.bindColumnResizeEvents();
    }
  }, {
    key: "onColumnResize",
    value: function onColumnResize(event) {
      var containerLeft = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.el).left;
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.el, 'p-unselectable-text');
      this.resizeHelper.style.height = this.el.offsetHeight + 'px';
      this.resizeHelper.style.top = 0 + 'px';
      this.resizeHelper.style.left = event.pageX - containerLeft + this.el.scrollLeft + 'px';
      this.resizeHelper.style.display = 'block';
    }
  }, {
    key: "onColumnResizeEnd",
    value: function onColumnResizeEnd() {
      var delta = this.resizeHelper.offsetLeft - this.lastResizeHelperX;
      var columnWidth = this.resizeColumnElement.offsetWidth;
      var newColumnWidth = columnWidth + delta;
      var minWidth = this.resizeColumnElement.style.minWidth || 15;

      if (columnWidth + delta > parseInt(minWidth, 10)) {
        if (this.props.columnResizeMode === 'fit') {
          var nextColumn = this.resizeColumnElement.nextElementSibling;
          var nextColumnWidth = nextColumn.offsetWidth - delta;

          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            this.resizeTableCells(newColumnWidth, nextColumnWidth);
          }
        } else if (this.props.columnResizeMode === 'expand') {
          var tableWidth = this.table.offsetWidth + delta + 'px';
          this.table.style.width = tableWidth;
          this.table.style.minWidth = tableWidth;
          this.resizeTableCells(newColumnWidth);
        }

        if (this.props.onColumnResizeEnd) {
          this.props.onColumnResizeEnd({
            element: this.resizeColumnElement,
            column: this.resizeColumn,
            delta: delta
          });
        }

        if (this.isStateful()) {
          this.saveState();
        }
      }

      this.resizeHelper.style.display = 'none';
      this.resizeColumn = null;
      this.resizeColumnElement = null;
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(this.el, 'p-unselectable-text');
      this.unbindColumnResizeEvents();
    }
  }, {
    key: "resizeTableCells",
    value: function resizeTableCells(newColumnWidth, nextColumnWidth) {
      var _this7 = this;

      var widths = [];
      var colIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].index(this.resizeColumnElement);
      var headers = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].find(this.table, '.p-datatable-thead > tr > th');
      headers.forEach(function (header) {
        return widths.push(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(header));
      });
      this.destroyStyleElement();
      this.createStyleElement();
      var innerHTML = '';
      widths.forEach(function (width, index) {
        var colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        var style = _this7.props.scrollable ? "flex: 1 1 ".concat(colWidth, "px !important") : "width: ".concat(colWidth, "px !important");
        innerHTML += "\n                .p-datatable[".concat(_this7.state.attributeSelector, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, "),\n                .p-datatable[").concat(_this7.state.attributeSelector, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, "),\n                .p-datatable[").concat(_this7.state.attributeSelector, "] .p-datatable-tfoot > tr > td:nth-child(").concat(index + 1, ") {\n                    ").concat(style, "\n                }\n            ");
      });
      this.styleElement.innerHTML = innerHTML;
    }
  }, {
    key: "bindColumnResizeEvents",
    value: function bindColumnResizeEvents() {
      var _this8 = this;

      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = document.addEventListener('mousemove', function (event) {
          if (_this8.columnResizing) {
            _this8.onColumnResize(event);
          }
        });
      }

      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = document.addEventListener('mouseup', function () {
          if (_this8.columnResizing) {
            _this8.columnResizing = false;

            _this8.onColumnResizeEnd();
          }
        });
      }
    }
  }, {
    key: "unbindColumnResizeEvents",
    value: function unbindColumnResizeEvents() {
      if (this.documentColumnResizeListener) {
        document.removeEventListener('document', this.documentColumnResizeListener);
        this.documentColumnResizeListener = null;
      }

      if (this.documentColumnResizeEndListener) {
        document.removeEventListener('document', this.documentColumnResizeEndListener);
        this.documentColumnResizeEndListener = null;
      }
    }
  }, {
    key: "onColumnHeaderMouseDown",
    value: function onColumnHeaderMouseDown(e) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].clearSelection();
      var event = e.originalEvent,
          column = e.column;

      if (this.props.reorderableColumns && this.getColumnProp(column, 'reorderable') !== false) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(event.target, 'p-column-resizer')) event.currentTarget.draggable = false;else event.currentTarget.draggable = true;
      }
    }
  }, {
    key: "onColumnHeaderCheckboxChange",
    value: function onColumnHeaderCheckboxChange(e, processedData) {
      var _this9 = this;

      if (this.props.onSelectAllChange) {
        this.props.onSelectAllChange(e);
      } else {
        var originalEvent = e.originalEvent,
            checked = e.checked;
        var data = this.props.selectionPageOnly ? this.dataToRender(processedData) : processedData;
        var selection = this.props.selectionPageOnly && this.props.selection ? this.props.selection.filter(function (s) {
          return !data.some(function (d) {
            return _this9.isEquals(s, d);
          });
        }) : [];

        if (checked) {
          selection = this.props.frozenValue ? [].concat(_toConsumableArray(selection), _toConsumableArray(this.props.frozenValue), _toConsumableArray(data)) : [].concat(_toConsumableArray(selection), _toConsumableArray(data));
          selection = this.getSelectableData(selection);
          this.props.onAllRowsSelect && this.props.onAllRowsSelect({
            originalEvent: originalEvent,
            data: selection,
            type: 'all'
          });
        } else {
          this.props.onAllRowsUnselect && this.props.onAllRowsUnselect({
            originalEvent: originalEvent,
            data: selection,
            type: 'all'
          });
        }

        if (this.props.onSelectionChange) {
          this.props.onSelectionChange({
            originalEvent: originalEvent,
            value: selection,
            type: 'all'
          });
        }
      }
    }
  }, {
    key: "onColumnHeaderDragStart",
    value: function onColumnHeaderDragStart(e) {
      var event = e.originalEvent,
          column = e.column;

      if (this.columnResizing) {
        event.preventDefault();
        return;
      }

      this.colReorderIconWidth = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUp);
      this.colReorderIconHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorUp);
      this.draggedColumn = column;
      this.draggedColumnElement = this.findParentHeader(event.currentTarget);
      event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    }
  }, {
    key: "onColumnHeaderDragOver",
    value: function onColumnHeaderDragOver(e) {
      var event = e.originalEvent;
      var dropHeader = this.findParentHeader(event.currentTarget);

      if (this.props.reorderableColumns && this.draggedColumnElement && dropHeader) {
        event.preventDefault();

        if (this.draggedColumnElement !== dropHeader) {
          var containerOffset = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.el);
          var dropHeaderOffset = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(dropHeader);
          var targetLeft = dropHeaderOffset.left - containerOffset.left;
          var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
          this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

          if (event.pageX > columnCenter) {
            this.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.dropPosition = 1;
          } else {
            this.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.dropPosition = -1;
          }

          this.reorderIndicatorUp.style.display = 'block';
          this.reorderIndicatorDown.style.display = 'block';
        }
      }
    }
  }, {
    key: "onColumnHeaderDragLeave",
    value: function onColumnHeaderDragLeave(e) {
      var event = e.originalEvent;

      if (this.props.reorderableColumns && this.draggedColumnElement) {
        event.preventDefault();
        this.reorderIndicatorUp.style.display = 'none';
        this.reorderIndicatorDown.style.display = 'none';
      }
    }
  }, {
    key: "onColumnHeaderDrop",
    value: function onColumnHeaderDrop(e) {
      var _this10 = this;

      var event = e.originalEvent,
          column = e.column;
      event.preventDefault();

      if (this.draggedColumnElement) {
        var dragIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].index(this.draggedColumnElement);
        var dropIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].index(this.findParentHeader(event.currentTarget));
        var allowDrop = dragIndex !== dropIndex;

        if (allowDrop && (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dragIndex - dropIndex === 1 && this.dropPosition === 1)) {
          allowDrop = false;
        }

        if (allowDrop) {
          var columns = this.getColumns();

          var isSameColumn = function isSameColumn(col1, col2) {
            return col1.props.columnKey || col2.props.columnKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(col1.props, col2.props, 'columnKey') : primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(col1.props, col2.props, 'field');
          };

          var dragColIndex = columns.findIndex(function (child) {
            return isSameColumn(child, _this10.draggedColumn);
          });
          var dropColIndex = columns.findIndex(function (child) {
            return isSameColumn(child, column);
          });

          if (dropColIndex < dragColIndex && this.dropPosition === 1) {
            dropColIndex++;
          }

          if (dropColIndex > dragColIndex && this.dropPosition === -1) {
            dropColIndex--;
          }

          primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].reorderArray(columns, dragColIndex, dropColIndex);
          var columnOrder = columns.reduce(function (orders, col) {
            orders.push(col.props.columnKey || col.props.field);
            return orders;
          }, []);
          this.setState({
            columnOrder: columnOrder
          });

          if (this.props.onColReorder) {
            this.props.onColReorder({
              originalEvent: event,
              dragIndex: dragColIndex,
              dropIndex: dropColIndex,
              columns: columns
            });
          }
        }

        this.reorderIndicatorUp.style.display = 'none';
        this.reorderIndicatorDown.style.display = 'none';
        this.draggedColumnElement.draggable = false;
        this.draggedColumnElement = null;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    }
  }, {
    key: "createStyleElement",
    value: function createStyleElement() {
      this.styleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].nonce);
    }
  }, {
    key: "createResponsiveStyle",
    value: function createResponsiveStyle() {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].nonce);
        var innerHTML = "\n@media screen and (max-width: ".concat(this.props.breakpoint, ") {\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-thead > tr > th,\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tfoot > tr > td {\n        display: none !important;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tbody > tr > td {\n        display: flex;\n        width: 100% !important;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tbody > tr > td:not(:last-child) {\n        border: 0 none;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-top: 0;\n        border-right: 0;\n        border-left: 0;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tbody > tr > td > .p-column-title {\n        display: block;\n    }\n}\n");
        this.responsiveStyleElement.innerHTML = innerHTML;
      }
    }
  }, {
    key: "destroyResponsiveStyle",
    value: function destroyResponsiveStyle() {
      this.responsiveStyleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeInlineStyle(this.responsiveStyleElement);
    }
  }, {
    key: "destroyStyleElement",
    value: function destroyStyleElement() {
      this.styleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeInlineStyle(this.styleElement);
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(e) {
      this.clearEditingMetaData();
      if (this.props.onPage) this.props.onPage(this.createEvent(e));else this.setState({
        first: e.first,
        rows: e.rows
      });

      if (this.props.onValueChange) {
        this.props.onValueChange(this.processedData());
      }
    }
  }, {
    key: "onSortChange",
    value: function onSortChange(e) {
      this.clearEditingMetaData();
      var event = e.originalEvent,
          column = e.column,
          sortableDisabledFields = e.sortableDisabledFields;
      var sortField = column.props.sortField || column.props.field;
      var sortOrder = this.props.defaultSortOrder;
      var multiSortMeta;
      var eventMeta;
      this.columnSortable = column.props.sortable;
      this.columnSortFunction = column.props.sortFunction;
      this.columnField = column.props.sortField;

      if (this.props.sortMode === 'multiple') {
        var metaKey = event.metaKey || event.ctrlKey;
        multiSortMeta = _toConsumableArray(this.getMultiSortMeta());
        var sortMeta = multiSortMeta.find(function (sortMeta) {
          return sortMeta.field === sortField;
        });
        sortOrder = sortMeta ? this.getCalculatedSortOrder(sortMeta.order) : sortOrder;
        var newMetaData = {
          field: sortField,
          order: sortOrder
        };

        if (sortOrder) {
          multiSortMeta = metaKey ? multiSortMeta : multiSortMeta.filter(function (meta) {
            return sortableDisabledFields.some(function (field) {
              return field === meta.field;
            });
          });
          this.addSortMeta(newMetaData, multiSortMeta);
        } else if (this.props.removableSort) {
          this.removeSortMeta(newMetaData, multiSortMeta);
        }

        eventMeta = {
          multiSortMeta: multiSortMeta
        };
      } else {
        sortOrder = this.getSortField() === sortField ? this.getCalculatedSortOrder(this.getSortOrder()) : sortOrder;

        if (this.props.removableSort) {
          sortField = sortOrder ? sortField : null;
        }

        eventMeta = {
          sortField: sortField,
          sortOrder: sortOrder
        };
      }

      if (this.props.onSort) {
        this.props.onSort(this.createEvent(eventMeta));
      } else {
        eventMeta.first = 0;
        this.setState(eventMeta);
      }

      if (this.props.onValueChange) {
        this.props.onValueChange(this.processedData({
          sortField: sortField,
          sortOrder: sortOrder,
          multiSortMeta: multiSortMeta
        }));
      }
    }
  }, {
    key: "getCalculatedSortOrder",
    value: function getCalculatedSortOrder(currentOrder) {
      return this.props.removableSort ? this.props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0 : currentOrder * -1;
    }
  }, {
    key: "compareValuesOnSort",
    value: function compareValuesOnSort(value1, value2) {
      var result = null;
      if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
        numeric: true
      });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      return result;
    }
  }, {
    key: "addSortMeta",
    value: function addSortMeta(meta, multiSortMeta) {
      var index = multiSortMeta.findIndex(function (sortMeta) {
        return sortMeta.field === meta.field;
      });
      if (index >= 0) multiSortMeta[index] = meta;else multiSortMeta.push(meta);
    }
  }, {
    key: "removeSortMeta",
    value: function removeSortMeta(meta, multiSortMeta) {
      var index = multiSortMeta.findIndex(function (sortMeta) {
        return sortMeta.field === meta.field;
      });

      if (index >= 0) {
        multiSortMeta.splice(index, 1);
      }

      multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
    }
  }, {
    key: "sortSingle",
    value: function sortSingle(data, field, order) {
      var _this11 = this;

      if (this.props.groupRowsBy && this.props.groupRowsBy === this.props.sortField) {
        var multiSortMeta = [{
          field: this.props.sortField,
          order: this.props.sortOrder || this.props.defaultSortOrder
        }];
        this.props.sortField !== field && multiSortMeta.push({
          field: field,
          order: order
        });
        return this.sortMultiple(data, multiSortMeta);
      }

      var value = _toConsumableArray(data);

      if (this.columnSortable && this.columnSortFunction) {
        value = this.columnSortFunction({
          field: field,
          order: order
        });
      } else {
        value.sort(function (data1, data2) {
          var value1 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data1, field);
          var value2 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data2, field);

          var result = _this11.compareValuesOnSort(value1, value2);

          return order * result;
        });
      }

      return value;
    }
  }, {
    key: "sortMultiple",
    value: function sortMultiple(data) {
      var _this12 = this;

      var multiSortMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.props.groupRowsBy && (this.groupRowsSortMeta || multiSortMeta.length && this.props.groupRowsBy === multiSortMeta[0].field)) {
        var firstSortMeta = multiSortMeta[0];
        !this.groupRowsSortMeta && (this.groupRowsSortMeta = firstSortMeta);

        if (firstSortMeta.field !== this.groupRowsSortMeta.field) {
          multiSortMeta = [this.groupRowsSortMeta].concat(_toConsumableArray(multiSortMeta));
        }
      }

      var value = _toConsumableArray(data);

      if (this.columnSortable && this.columnSortFunction) {
        var meta = multiSortMeta.find(function (meta) {
          return meta.field === _this12.columnField;
        });
        var field = this.columnField;
        var order = meta ? meta.order : this.defaultSortOrder;
        value = this.columnSortFunction({
          field: field,
          order: order
        });
      } else {
        value.sort(function (data1, data2) {
          return _this12.multisortField(data1, data2, multiSortMeta, 0);
        });
      }

      return value;
    }
  }, {
    key: "multisortField",
    value: function multisortField(data1, data2, multiSortMeta, index) {
      var value1 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data1, multiSortMeta[index].field);
      var value2 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data2, multiSortMeta[index].field);

      if (value1 === value2) {
        return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
      }

      var result = this.compareValuesOnSort(value1, value2);
      return multiSortMeta[index].order * result;
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange(filters) {
      this.clearEditingMetaData();
      this.setState({
        d_filters: filters
      });
    }
  }, {
    key: "onFilterApply",
    value: function onFilterApply() {
      var _this13 = this;

      clearTimeout(this.filterTimeout);
      this.filterTimeout = setTimeout(function () {
        var filters = _this13.cloneFilters(_this13.state.d_filters);

        if (_this13.props.onFilter) {
          _this13.props.onFilter(_this13.createEvent({
            filters: filters
          }));
        } else {
          _this13.setState({
            first: 0,
            filters: filters
          });
        }

        if (_this13.props.onValueChange) {
          _this13.props.onValueChange(_this13.processedData({
            filters: filters
          }));
        }
      }, this.props.filterDelay);
    }
  }, {
    key: "filterLocal",
    value: function filterLocal(data, filters) {
      if (!data) return;
      filters = filters || {};
      var columns = this.getColumns();
      var filteredValue = [];
      var isGlobalFilter = filters['global'] || this.props.globalFilter;
      var globalFilterFieldsArray;

      if (isGlobalFilter) {
        globalFilterFieldsArray = this.props.globalFilterFields || columns.filter(function (col) {
          return !col.props.excludeGlobalFilter;
        }).map(function (col) {
          return col.props.filterField || col.props.field;
        });
      }

      for (var i = 0; i < data.length; i++) {
        var localMatch = true;
        var globalMatch = false;
        var localFiltered = false;

        for (var prop in filters) {
          if (Object.prototype.hasOwnProperty.call(filters, prop) && prop !== 'global') {
            localFiltered = true;
            var filterField = prop;
            var filterMeta = filters[filterField];

            if (filterMeta.operator) {
              for (var j = 0; j < filterMeta.constraints.length; j++) {
                var filterConstraint = filterMeta.constraints[j];
                localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint, j);

                if (filterMeta.operator === primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].OR && localMatch || filterMeta.operator === primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].AND && !localMatch) {
                  break;
                }
              }
            } else {
              localMatch = this.executeLocalFilter(filterField, data[i], filterMeta, 0);
            }

            if (!localMatch) {
              break;
            }
          }
        }

        if (isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
          for (var _j = 0; _j < globalFilterFieldsArray.length; _j++) {
            var globalFilterField = globalFilterFieldsArray[_j];
            var matchMode = filters['global'] ? filters['global'].matchMode : primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterMatchMode"].CONTAINS;
            var value = filters['global'] ? filters['global'].value : this.props.globalFilter;
            globalMatch = primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterService"].filters[matchMode](primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(data[i], globalFilterField), value, this.props.filterLocale);

            if (globalMatch) {
              break;
            }
          }
        }

        var matches = void 0;

        if (isGlobalFilter) {
          matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
        } else {
          matches = localFiltered && localMatch;
        }

        if (matches) {
          filteredValue.push(data[i]);
        }
      }

      if (filteredValue.length === this.props.value.length) {
        filteredValue = data;
      }

      return filteredValue;
    }
  }, {
    key: "executeLocalFilter",
    value: function executeLocalFilter(field, rowData, filterMeta, index) {
      var filterValue = filterMeta.value;
      var filterMatchMode = filterMeta.matchMode === 'custom' ? "custom_".concat(field) : filterMeta.matchMode || primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterMatchMode"].STARTS_WITH;
      var dataFieldValue = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(rowData, field);
      var filterConstraint = primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterService"].filters[filterMatchMode];
      return filterConstraint(dataFieldValue, filterValue, this.props.filterLocale, index);
    }
  }, {
    key: "cloneFilters",
    value: function cloneFilters(filters) {
      var _this14 = this;

      filters = filters || this.props.filters;
      var cloned = {};

      if (filters) {
        Object.entries(filters).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prop = _ref2[0],
              value = _ref2[1];

          cloned[prop] = value.operator ? {
            operator: value.operator,
            constraints: value.constraints.map(function (constraint) {
              return _objectSpread({}, constraint);
            })
          } : _objectSpread({}, value);
        });
      } else {
        var columns = this.getColumns();
        cloned = columns.reduce(function (_filters, col) {
          var field = col.props.filterField || col.props.field;
          var filterFunction = col.props.filterFunction;
          var dataType = col.props.dataType;
          var matchMode = col.props.filterMatchMode || (primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[dataType] ? primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[dataType][0] : primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterMatchMode"].STARTS_WITH);
          var constraint = {
            value: null,
            matchMode: matchMode
          };

          if (filterFunction) {
            primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterService"].register("custom_".concat(field), function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return filterFunction.apply(void 0, args.concat([{
                column: col
              }]));
            });
          }

          _filters[field] = _this14.props.filterDisplay === 'menu' ? {
            operator: primereact_api__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].AND,
            constraints: [constraint]
          } : constraint;
          return _filters;
        }, {});
      }

      return cloned;
    }
  }, {
    key: "filter",
    value: function filter(value, field, matchMode) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var filters = _objectSpread({}, this.state.d_filters);

      var meta = filters[field];
      var constraint = meta && meta.operator ? meta.constraints[index] : meta;
      constraint = meta ? {
        value: value,
        matchMode: matchMode || constraint.matchMode
      } : {
        value: value,
        matchMode: matchMode
      };
      this.props.filterDisplay === 'menu' && meta && meta.operator ? filters[field].constraints[index] = constraint : filters[field] = constraint;
      this.setState({
        d_filters: filters
      }, this.onFilterApply);
    }
  }, {
    key: "reset",
    value: function reset() {
      var state = {
        d_rows: this.props.rows,
        d_filters: this.cloneFilters(this.props.filters),
        groupRowsSortMeta: null,
        editingMeta: {}
      };

      if (!this.props.onPage) {
        state.first = this.props.first;
        state.rows = this.props.rows;
      }

      if (!this.props.onSort) {
        state.sortField = this.props.sortField;
        state.sortOrder = this.props.sortOrder;
        state.multiSortMeta = this.props.multiSortMeta;
      }

      if (!this.props.onFilter) {
        state.filters = this.props.filters;
      }

      this.resetColumnOrder();
      this.setState(state);
    }
  }, {
    key: "resetColumnOrder",
    value: function resetColumnOrder() {
      var columns = this.getColumns(true);
      var columnOrder = [];

      if (columns) {
        columnOrder = columns.reduce(function (orders, col) {
          orders.push(col.props.columnKey || col.props.field);
          return orders;
        }, []);
      }

      this.setState({
        columnOrder: columnOrder
      });
    }
  }, {
    key: "exportCSV",
    value: function exportCSV(options) {
      var _this15 = this;

      var data;
      var csv = "\uFEFF";
      var columns = this.getColumns();

      if (options && options.selectionOnly) {
        data = this.props.selection || [];
      } else {
        data = [].concat(_toConsumableArray(this.props.frozenValue || []), _toConsumableArray(this.processedData() || []));
      } //headers


      columns.forEach(function (column, i) {
        var _column$props = column.props,
            field = _column$props.field,
            header = _column$props.header,
            exportable = _column$props.exportable;

        if (exportable && field) {
          csv += '"' + (header || field) + '"';

          if (i < columns.length - 1) {
            csv += _this15.props.csvSeparator;
          }
        }
      }); //body

      data.forEach(function (record) {
        csv += '\n';
        columns.forEach(function (column, i) {
          var _column$props2 = column.props,
              columnField = _column$props2.field,
              exportField = _column$props2.exportField,
              exportable = _column$props2.exportable;
          var field = exportField || columnField;

          if (exportable && field) {
            var cellData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].resolveFieldData(record, field);

            if (cellData != null) {
              cellData = _this15.props.exportFunction ? _this15.props.exportFunction({
                data: cellData,
                field: field,
                rowData: record,
                column: column
              }) : String(cellData).replace(/"/g, '""');
            } else cellData = '';

            csv += '"' + cellData + '"';

            if (i < columns.length - 1) {
              csv += _this15.props.csvSeparator;
            }
          }
        });
      });
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].exportCSV(csv, this.props.exportFilename);
    }
  }, {
    key: "closeEditingCell",
    value: function closeEditingCell() {
      if (this.props.editMode !== "row") {
        document.body.click();
      }
    }
  }, {
    key: "createEvent",
    value: function createEvent(event) {
      return _objectSpread({
        first: this.getFirst(),
        rows: this.getRows(),
        sortField: this.getSortField(),
        sortOrder: this.getSortOrder(),
        multiSortMeta: this.getMultiSortMeta(),
        filters: this.getFilters()
      }, event);
    }
  }, {
    key: "processedData",
    value: function processedData(localState) {
      var data = this.props.value || [];

      if (!this.props.lazy) {
        if (data && data.length) {
          var filters = localState && localState.filters || this.getFilters();
          var sortField = localState && localState.sortField || this.getSortField();
          var sortOrder = localState && localState.sortOrder || this.getSortOrder();
          var multiSortMeta = localState && localState.multiSortMeta || this.getMultiSortMeta();

          if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(filters) || this.props.globalFilter) {
            data = this.filterLocal(data, filters);
          }

          if (sortField || primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isNotEmpty(multiSortMeta)) {
            if (this.props.sortMode === 'single') data = this.sortSingle(data, sortField, sortOrder);else if (this.props.sortMode === 'multiple') data = this.sortMultiple(data, multiSortMeta);
          }
        }
      }

      return data;
    }
  }, {
    key: "dataToRender",
    value: function dataToRender(data) {
      if (data && this.props.paginator) {
        var first = this.props.lazy ? 0 : this.getFirst();
        return data.slice(first, first + this.getRows());
      }

      return data;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this16 = this;

      this.setState({
        attributeSelector: Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["UniqueComponentId"])()
      }, function () {
        _this16.el.setAttribute(_this16.state.attributeSelector, '');
      });

      if (this.props.responsiveLayout === 'stack' && !this.props.scrollable) {
        this.createResponsiveStyle();
      }

      if (this.isStateful()) {
        this.setState(this.restoreState(this.state));

        if (this.props.resizableColumns) {
          this.restoreColumnWidths();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isStateful()) {
        this.saveState();
      }

      if (prevProps.responsiveLayout !== this.props.responsiveLayout) {
        this.destroyResponsiveStyle();

        if (this.props.responsiveLayout === 'stack' && !this.props.scrollable) {
          this.createResponsiveStyle();
        }
      }

      if (prevProps.filters !== this.props.filters) {
        this.setState({
          filters: this.cloneFilters(this.props.filters),
          d_filters: this.cloneFilters(this.props.filters)
        });
      }

      if (prevProps.globalFilter !== this.props.globalFilter) {
        this.filter(this.props.globalFilter, 'global', 'contains');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindColumnResizeEvents();
      this.destroyStyleElement();
      this.destroyResponsiveStyle();
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      if (this.props.loading) {
        var iconClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-datatable-loading-icon pi-spin', this.props.loadingIcon);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-datatable-loading-overlay p-component-overlay"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: iconClassName
        }));
      }

      return null;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.props.header, {
          props: this.props
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-datatable-header"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderTableHeader",
    value: function renderTableHeader(options, empty) {
      var sortField = this.getSortField();
      var sortOrder = this.getSortOrder();

      var multiSortMeta = _toConsumableArray(this.getMultiSortMeta());

      var groupRowSortField = this.getGroupRowSortField();
      var filters = this.state.d_filters;
      var filtersStore = this.getFilters();
      var processedData = options.items,
          columns = options.columns;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeader, {
        value: processedData,
        tableProps: this.props,
        columns: columns,
        tabIndex: this.props.tabIndex,
        empty: empty,
        headerColumnGroup: this.props.headerColumnGroup,
        resizableColumns: this.props.resizableColumns,
        onColumnResizeStart: this.onColumnResizeStart,
        onColumnResizerClick: this.props.onColumnResizerClick,
        onColumnResizerDoubleClick: this.props.onColumnResizerDoubleClick,
        sortMode: this.props.sortMode,
        sortField: sortField,
        sortOrder: sortOrder,
        multiSortMeta: multiSortMeta,
        groupRowsBy: this.props.groupRowsBy,
        groupRowSortField: groupRowSortField,
        onSortChange: this.onSortChange,
        filterDisplay: this.props.filterDisplay,
        filters: filters,
        filtersStore: filtersStore,
        onFilterChange: this.onFilterChange,
        onFilterApply: this.onFilterApply,
        showSelectAll: this.props.showSelectAll,
        allRowsSelected: this.allRowsSelected,
        onColumnCheckboxChange: this.onColumnHeaderCheckboxChange,
        onColumnMouseDown: this.onColumnHeaderMouseDown,
        onColumnDragStart: this.onColumnHeaderDragStart,
        onColumnDragOver: this.onColumnHeaderDragOver,
        onColumnDragLeave: this.onColumnHeaderDragLeave,
        onColumnDrop: this.onColumnHeaderDrop,
        rowGroupMode: this.props.rowGroupMode,
        reorderableColumns: this.props.reorderableColumns
      });
    }
  }, {
    key: "renderTableBody",
    value: function renderTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled) {
      var tableSelector = this.state.attributeSelector;
      var first = this.getFirst();
      var editingMeta = this.state.editingMeta;
      var rows = options.rows,
          columns = options.columns,
          contentRef = options.contentRef,
          className = options.className;
      var frozenBody = this.props.frozenValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableBody, {
        value: this.props.frozenValue,
        className: "p-datatable-frozen-tbody",
        frozenRow: true,
        tableProps: this.props,
        tableSelector: tableSelector,
        columns: columns,
        selectionModeInColumn: selectionModeInColumn,
        first: first,
        editingMeta: editingMeta,
        onEditingMetaChange: this.onEditingMetaChange,
        tabIndex: this.props.tabIndex,
        onRowClick: this.props.onRowClick,
        onRowDoubleClick: this.props.onRowDoubleClick,
        onCellClick: this.props.onCellClick,
        selection: this.props.selection,
        onSelectionChange: this.props.onSelectionChange,
        lazy: this.props.lazy,
        paginator: this.props.paginator,
        onCellSelect: this.props.onCellSelect,
        onCellUnselect: this.props.onCellUnselect,
        onRowSelect: this.props.onRowSelect,
        onRowUnselect: this.props.onRowUnselect,
        dragSelection: this.props.dragSelection,
        onContextMenu: this.props.onContextMenu,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        metaKeySelection: this.props.metaKeySelection,
        selectionMode: this.props.selectionMode,
        cellSelection: this.props.cellSelection,
        contextMenuSelection: this.props.contextMenuSelection,
        dataKey: this.props.dataKey,
        expandedRows: this.props.expandedRows,
        onRowCollapse: this.props.onRowCollapse,
        onRowExpand: this.props.onRowExpand,
        onRowToggle: this.props.onRowToggle,
        editMode: this.props.editMode,
        editingRows: this.props.editingRows,
        onRowReorder: this.props.onRowReorder,
        scrollable: this.props.scrollable,
        rowGroupMode: this.props.rowGroupMode,
        groupRowsBy: this.props.groupRowsBy,
        expandableRowGroups: this.props.expandableRowGroups,
        loading: this.props.loading,
        emptyMessage: this.props.emptyMessage,
        rowGroupHeaderTemplate: this.props.rowGroupHeaderTemplate,
        rowExpansionTemplate: this.props.rowExpansionTemplate,
        rowGroupFooterTemplate: this.props.rowGroupFooterTemplate,
        onRowEditChange: this.props.onRowEditChange,
        compareSelectionBy: this.props.compareSelectionBy,
        selectOnEdit: this.props.selectOnEdit,
        onRowEditInit: this.props.onRowEditInit,
        rowEditValidator: this.props.rowEditValidator,
        onRowEditSave: this.props.onRowEditSave,
        onRowEditComplete: this.props.onRowEditComplete,
        onRowEditCancel: this.props.onRowEditCancel,
        cellClassName: this.props.cellClassName,
        responsiveLayout: this.props.responsiveLayout,
        selectionAutoFocus: this.props.selectionAutoFocus,
        isDataSelectable: this.props.isDataSelectable,
        showSelectionElement: this.props.showSelectionElement,
        showRowReorderElement: this.props.showRowReorderElement,
        expandedRowIcon: this.props.expandedRowIcon,
        collapsedRowIcon: this.props.collapsedRowIcon,
        rowClassName: this.props.rowClassName,
        isVirtualScrollerDisabled: true
      });
      var body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableBody, {
        value: this.dataToRender(rows),
        className: className,
        empty: empty,
        frozenRow: false,
        tableProps: this.props,
        tableSelector: tableSelector,
        columns: columns,
        selectionModeInColumn: selectionModeInColumn,
        first: first,
        editingMeta: editingMeta,
        onEditingMetaChange: this.onEditingMetaChange,
        tabIndex: this.props.tabIndex,
        onRowClick: this.props.onRowClick,
        onRowDoubleClick: this.props.onRowDoubleClick,
        onCellClick: this.props.onCellClick,
        selection: this.props.selection,
        onSelectionChange: this.props.onSelectionChange,
        lazy: this.props.lazy,
        paginator: this.props.paginator,
        onCellSelect: this.props.onCellSelect,
        onCellUnselect: this.props.onCellUnselect,
        onRowSelect: this.props.onRowSelect,
        onRowUnselect: this.props.onRowUnselect,
        dragSelection: this.props.dragSelection,
        onContextMenu: this.props.onContextMenu,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        metaKeySelection: this.props.metaKeySelection,
        selectionMode: this.props.selectionMode,
        cellSelection: this.props.cellSelection,
        contextMenuSelection: this.props.contextMenuSelection,
        dataKey: this.props.dataKey,
        expandedRows: this.props.expandedRows,
        onRowCollapse: this.props.onRowCollapse,
        onRowExpand: this.props.onRowExpand,
        onRowToggle: this.props.onRowToggle,
        editMode: this.props.editMode,
        editingRows: this.props.editingRows,
        onRowReorder: this.props.onRowReorder,
        scrollable: this.props.scrollable,
        rowGroupMode: this.props.rowGroupMode,
        groupRowsBy: this.props.groupRowsBy,
        expandableRowGroups: this.props.expandableRowGroups,
        loading: this.props.loading,
        emptyMessage: this.props.emptyMessage,
        rowGroupHeaderTemplate: this.props.rowGroupHeaderTemplate,
        rowExpansionTemplate: this.props.rowExpansionTemplate,
        rowGroupFooterTemplate: this.props.rowGroupFooterTemplate,
        onRowEditChange: this.props.onRowEditChange,
        compareSelectionBy: this.props.compareSelectionBy,
        selectOnEdit: this.props.selectOnEdit,
        onRowEditInit: this.props.onRowEditInit,
        rowEditValidator: this.props.rowEditValidator,
        onRowEditSave: this.props.onRowEditSave,
        onRowEditComplete: this.props.onRowEditComplete,
        onRowEditCancel: this.props.onRowEditCancel,
        cellClassName: this.props.cellClassName,
        responsiveLayout: this.props.responsiveLayout,
        selectionAutoFocus: this.props.selectionAutoFocus,
        isDataSelectable: this.props.isDataSelectable,
        showSelectionElement: this.props.showSelectionElement,
        showRowReorderElement: this.props.showRowReorderElement,
        expandedRowIcon: this.props.expandedRowIcon,
        collapsedRowIcon: this.props.collapsedRowIcon,
        rowClassName: this.props.rowClassName,
        virtualScrollerContentRef: contentRef,
        virtualScrollerOptions: options,
        isVirtualScrollerDisabled: isVirtualScrollerDisabled
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, frozenBody, body);
    }
  }, {
    key: "renderTableFooter",
    value: function renderTableFooter(options) {
      var columns = options.columns;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableFooter, {
        tableProps: this.props,
        columns: columns,
        footerColumnGroup: this.props.footerColumnGroup
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(processedData, columns, selectionModeInColumn, empty) {
      var _this17 = this;

      if (!columns) return;
      var isVirtualScrollerDisabled = this.isVirtualScrollerDisabled();
      var virtualScrollerOptions = this.props.virtualScrollerOptions || {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-datatable-wrapper",
        style: {
          maxHeight: isVirtualScrollerDisabled ? this.props.scrollHeight : null
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_11__["VirtualScroller"], _extends({}, virtualScrollerOptions, {
        items: processedData,
        columns: columns,
        scrollHeight: this.props.scrollHeight,
        disabled: isVirtualScrollerDisabled,
        loaderDisabled: true,
        showSpacer: false,
        contentTemplate: function contentTemplate(options) {
          var ref = function ref(el) {
            _this17.table = el;
            options.spacerRef && options.spacerRef(el);
          };

          var tableClassName = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-datatable-table', _this17.props.tableClassName);

          var tableHeader = _this17.renderTableHeader(options, empty);

          var tableBody = _this17.renderTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled);

          var tableFooter = _this17.renderTableFooter(options);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
            ref: ref,
            style: _this17.props.tableStyle,
            className: tableClassName,
            role: "table"
          }, tableHeader, tableBody, tableFooter);
        }
      })));
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footer) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].getJSXElement(this.props.footer, {
          props: this.props
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-datatable-footer"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderPaginator",
    value: function renderPaginator(position, totalRecords) {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-paginator-' + position, this.props.paginatorClassName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_paginator__WEBPACK_IMPORTED_MODULE_1__["Paginator"], {
        first: this.getFirst(),
        rows: this.getRows(),
        pageLinkSize: this.props.pageLinkSize,
        className: className,
        onPageChange: this.onPageChange,
        template: this.props.paginatorTemplate,
        totalRecords: totalRecords,
        rowsPerPageOptions: this.props.rowsPerPageOptions,
        currentPageReportTemplate: this.props.currentPageReportTemplate,
        leftContent: this.props.paginatorLeft,
        rightContent: this.props.paginatorRight,
        alwaysShow: this.props.alwaysShowPaginator,
        dropdownAppendTo: this.props.paginatorDropdownAppendTo
      });
    }
  }, {
    key: "renderPaginatorTop",
    value: function renderPaginatorTop(totalRecords) {
      if (this.props.paginator && this.props.paginatorPosition !== 'bottom') {
        return this.renderPaginator('top', totalRecords);
      }

      return null;
    }
  }, {
    key: "renderPaginatorBottom",
    value: function renderPaginatorBottom(totalRecords) {
      if (this.props.paginator && this.props.paginatorPosition !== 'top') {
        return this.renderPaginator('bottom', totalRecords);
      }

      return null;
    }
  }, {
    key: "renderResizeHelper",
    value: function renderResizeHelper() {
      var _this18 = this;

      if (this.props.resizableColumns) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: function ref(el) {
            return _this18.resizeHelper = el;
          },
          className: "p-column-resizer-helper",
          style: {
            display: 'none'
          }
        });
      }

      return null;
    }
  }, {
    key: "renderReorderIndicators",
    value: function renderReorderIndicators() {
      var _this19 = this;

      if (this.props.reorderableColumns) {
        var style = {
          position: 'absolute',
          display: 'none'
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: function ref(el) {
            return _this19.reorderIndicatorUp = el;
          },
          className: "pi pi-arrow-down p-datatable-reorder-indicator-up",
          style: style
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: function ref(el) {
            return _this19.reorderIndicatorDown = el;
          },
          className: "pi pi-arrow-up p-datatable-reorder-indicator-down",
          style: style
        }));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this20 = this;

      var processedData = this.processedData();
      var columns = this.getColumns();
      var totalRecords = this.getTotalRecords(processedData);
      var empty = primereact_utils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].isEmpty(processedData);
      var selectionModeInColumn = this.getSelectionModeInColumn(columns);
      var selectable = this.props.selectionMode || selectionModeInColumn;
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_2__["classNames"])('p-datatable p-component', {
        'p-datatable-hoverable-rows': this.props.rowHover,
        'p-datatable-selectable': selectable && !this.props.cellSelection,
        'p-datatable-selectable-cell': selectable && this.props.cellSelection,
        'p-datatable-auto-layout': this.props.autoLayout,
        'p-datatable-resizable': this.props.resizableColumns,
        'p-datatable-resizable-fit': this.props.resizableColumns && this.props.columnResizeMode === 'fit',
        'p-datatable-scrollable': this.props.scrollable,
        'p-datatable-scrollable-vertical': this.props.scrollable && this.props.scrollDirection === 'vertical',
        'p-datatable-scrollable-horizontal': this.props.scrollable && this.props.scrollDirection === 'horizontal',
        'p-datatable-scrollable-both': this.props.scrollable && this.props.scrollDirection === 'both',
        'p-datatable-flex-scrollable': this.props.scrollable && this.props.scrollHeight === 'flex',
        'p-datatable-responsive-stack': this.props.responsiveLayout === 'stack',
        'p-datatable-responsive-scroll': this.props.responsiveLayout === 'scroll',
        'p-datatable-striped': this.props.stripedRows,
        'p-datatable-gridlines': this.props.showGridlines,
        'p-datatable-grouped-header': this.props.headerColumnGroup != null,
        'p-datatable-grouped-footer': this.props.footerColumnGroup != null,
        'p-datatable-sm': this.props.size === 'small',
        'p-datatable-lg': this.props.size === 'large'
      }, this.props.className);
      var loader = this.renderLoader();
      var header = this.renderHeader();
      var paginatorTop = this.renderPaginatorTop(totalRecords);
      var content = this.renderContent(processedData, columns, selectionModeInColumn, empty);
      var paginatorBottom = this.renderPaginatorBottom(totalRecords);
      var footer = this.renderFooter();
      var resizeHelper = this.renderResizeHelper();
      var reorderIndicators = this.renderReorderIndicators();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          return _this20.el = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style,
        "data-scrollselectors": ".p-datatable-wrapper"
      }, loader, header, paginatorTop, content, paginatorBottom, footer, resizeHelper, reorderIndicators);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.rows !== prevState.d_rows && !nextProps.onPage) {
        return {
          rows: nextProps.rows,
          d_rows: nextProps.rows
        };
      }

      return null;
    }
  }]);

  return DataTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(DataTable, "defaultProps", {
  id: null,
  value: null,
  header: null,
  footer: null,
  style: null,
  className: null,
  tableStyle: null,
  tableClassName: null,
  paginator: false,
  paginatorPosition: 'bottom',
  alwaysShowPaginator: true,
  paginatorClassName: null,
  paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  paginatorLeft: null,
  paginatorRight: null,
  paginatorDropdownAppendTo: null,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})',
  first: 0,
  rows: null,
  totalRecords: null,
  lazy: false,
  sortField: null,
  sortOrder: null,
  multiSortMeta: null,
  sortMode: 'single',
  defaultSortOrder: 1,
  removableSort: false,
  emptyMessage: null,
  selectionMode: null,
  dragSelection: false,
  cellSelection: false,
  selection: null,
  onSelectionChange: null,
  contextMenuSelection: null,
  onContextMenuSelectionChange: null,
  compareSelectionBy: 'deepEquals',
  dataKey: null,
  metaKeySelection: true,
  selectOnEdit: true,
  selectionPageOnly: false,
  selectionAutoFocus: true,
  showSelectAll: true,
  selectAll: false,
  onSelectAllChange: null,
  headerColumnGroup: null,
  footerColumnGroup: null,
  rowExpansionTemplate: null,
  expandedRows: null,
  onRowToggle: null,
  resizableColumns: false,
  columnResizeMode: 'fit',
  reorderableColumns: false,
  filters: null,
  globalFilter: null,
  filterDelay: 300,
  filterLocale: undefined,
  scrollable: false,
  scrollHeight: null,
  scrollDirection: 'vertical',
  virtualScrollerOptions: null,
  frozenWidth: null,
  frozenValue: null,
  csvSeparator: ',',
  exportFilename: 'download',
  rowGroupMode: null,
  autoLayout: false,
  rowClassName: null,
  cellClassName: null,
  rowGroupHeaderTemplate: null,
  rowGroupFooterTemplate: null,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  tabIndex: 0,
  stateKey: null,
  stateStorage: 'session',
  groupRowsBy: null,
  editMode: 'cell',
  editingRows: null,
  expandableRowGroups: false,
  rowHover: false,
  showGridlines: false,
  stripedRows: false,
  size: 'normal',
  responsiveLayout: 'stack',
  breakpoint: '960px',
  filterDisplay: 'menu',
  expandedRowIcon: 'pi pi-chevron-down',
  collapsedRowIcon: 'pi pi-chevron-right',
  onRowEditComplete: null,
  globalFilterFields: null,
  showSelectionElement: null,
  showRowReorderElement: null,
  isDataSelectable: null,
  onColumnResizeEnd: null,
  onColumnResizerClick: null,
  onColumnResizerDoubleClick: null,
  onSort: null,
  onPage: null,
  onFilter: null,
  onAllRowsSelect: null,
  onAllRowsUnselect: null,
  onRowClick: null,
  onRowDoubleClick: null,
  onRowSelect: null,
  onRowUnselect: null,
  onRowExpand: null,
  onRowCollapse: null,
  onContextMenu: null,
  onColReorder: null,
  onCellClick: null,
  onCellSelect: null,
  onCellUnselect: null,
  onRowReorder: null,
  onValueChange: null,
  rowEditValidator: null,
  onRowEditInit: null,
  onRowEditSave: null,
  onRowEditCancel: null,
  onRowEditChange: null,
  exportFunction: null,
  customSaveState: null,
  customRestoreState: null,
  onStateSave: null,
  onStateRestore: null
});




/***/ }),

/***/ "./node_modules/primereact/paginator/paginator.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/paginator/paginator.esm.js ***!
  \************************************************************/
/*! exports provided: Paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");






function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var FirstPageLink = /*#__PURE__*/function (_Component) {
  _inherits(FirstPageLink, _Component);

  var _super = _createSuper$8(FirstPageLink);

  function FirstPageLink() {
    _classCallCheck(this, FirstPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(FirstPageLink, [{
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-paginator-first p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-double-left';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return FirstPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(FirstPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var NextPageLink = /*#__PURE__*/function (_Component) {
  _inherits(NextPageLink, _Component);

  var _super = _createSuper$7(NextPageLink);

  function NextPageLink() {
    _classCallCheck(this, NextPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(NextPageLink, [{
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-paginator-next p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-right';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return NextPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(NextPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PrevPageLink = /*#__PURE__*/function (_Component) {
  _inherits(PrevPageLink, _Component);

  var _super = _createSuper$6(PrevPageLink);

  function PrevPageLink() {
    _classCallCheck(this, PrevPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(PrevPageLink, [{
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-paginator-prev p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-left';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return PrevPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(PrevPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LastPageLink = /*#__PURE__*/function (_Component) {
  _inherits(LastPageLink, _Component);

  var _super = _createSuper$5(LastPageLink);

  function LastPageLink() {
    _classCallCheck(this, LastPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(LastPageLink, [{
    key: "render",
    value: function render() {
      var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-paginator-last p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-double-right';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return LastPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(LastPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PageLinks = /*#__PURE__*/function (_Component) {
  _inherits(PageLinks, _Component);

  var _super = _createSuper$4(PageLinks);

  function PageLinks() {
    _classCallCheck(this, PageLinks);

    return _super.apply(this, arguments);
  }

  _createClass(PageLinks, [{
    key: "onPageLinkClick",
    value: function onPageLinkClick(event, pageLink) {
      if (this.props.onClick) {
        this.props.onClick({
          originalEvent: event,
          value: pageLink
        });
      }

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var elements;

      if (this.props.value) {
        var startPageInView = this.props.value[0];
        var endPageInView = this.props.value[this.props.value.length - 1];
        elements = this.props.value.map(function (pageLink, i) {
          var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-paginator-page p-paginator-element p-link', {
            'p-paginator-page-start': pageLink === startPageInView,
            'p-paginator-page-end': pageLink === endPageInView,
            'p-highlight': pageLink - 1 === _this.props.page
          });
          var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            className: className,
            onClick: function onClick(e) {
              return _this.onPageLinkClick(e, pageLink);
            }
          }, pageLink, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"], null));

          if (_this.props.template) {
            var defaultOptions = {
              onClick: function onClick(e) {
                return _this.onPageLinkClick(e, pageLink);
              },
              className: className,
              view: {
                startPage: startPageInView - 1,
                endPage: endPageInView - 1
              },
              page: pageLink - 1,
              currentPage: _this.props.page,
              totalPages: _this.props.pageCount,
              element: element,
              props: _this.props
            };
            element = primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(_this.props.template, defaultOptions);
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            key: pageLink
          }, element);
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-paginator-pages"
      }, elements);
    }
  }]);

  return PageLinks;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(PageLinks, "defaultProps", {
  value: null,
  page: null,
  rows: null,
  pageCount: null,
  links: null,
  template: null
});

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowsPerPageDropdown = /*#__PURE__*/function (_Component) {
  _inherits(RowsPerPageDropdown, _Component);

  var _super = _createSuper$3(RowsPerPageDropdown);

  function RowsPerPageDropdown() {
    _classCallCheck(this, RowsPerPageDropdown);

    return _super.apply(this, arguments);
  }

  _createClass(RowsPerPageDropdown, [{
    key: "hasOptions",
    value: function hasOptions() {
      return this.props.options && this.props.options.length > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var hasOptions = this.hasOptions();
      var options = hasOptions ? this.props.options.map(function (opt) {
        return {
          label: String(opt),
          value: opt
        };
      }) : [];
      var element = hasOptions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        value: this.props.value,
        options: options,
        onChange: this.props.onChange,
        appendTo: this.props.appendTo,
        disabled: this.props.disabled
      }) : null;

      if (this.props.template) {
        var defaultOptions = {
          value: this.props.value,
          options: options,
          onChange: this.props.onChange,
          appendTo: this.props.appendTo,
          currentPage: this.props.page,
          totalPages: this.props.pageCount,
          totalRecords: this.props.totalRecords,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return RowsPerPageDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(RowsPerPageDropdown, "defaultProps", {
  options: null,
  value: null,
  page: null,
  pageCount: null,
  totalRecords: 0,
  appendTo: null,
  onChange: null,
  template: null,
  disabled: false
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CurrentPageReport = /*#__PURE__*/function (_Component) {
  _inherits(CurrentPageReport, _Component);

  var _super = _createSuper$2(CurrentPageReport);

  function CurrentPageReport() {
    _classCallCheck(this, CurrentPageReport);

    return _super.apply(this, arguments);
  }

  _createClass(CurrentPageReport, [{
    key: "render",
    value: function render() {
      var report = {
        currentPage: this.props.page + 1,
        totalPages: this.props.pageCount,
        first: Math.min(this.props.first + 1, this.props.totalRecords),
        last: Math.min(this.props.first + this.props.rows, this.props.totalRecords),
        rows: this.props.rows,
        totalRecords: this.props.totalRecords
      };
      var text = this.props.reportTemplate.replace("{currentPage}", report.currentPage).replace("{totalPages}", report.totalPages).replace("{first}", report.first).replace("{last}", report.last).replace("{rows}", report.rows).replace("{totalRecords}", report.totalRecords);
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-paginator-current"
      }, text);

      if (this.props.template) {
        var defaultOptions = _objectSpread(_objectSpread({}, report), {
          className: 'p-paginator-current',
          element: element,
          props: this.props
        });

        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return CurrentPageReport;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CurrentPageReport, "defaultProps", {
  pageCount: null,
  page: null,
  first: null,
  rows: null,
  totalRecords: null,
  reportTemplate: '({currentPage} of {totalPages})',
  template: null
});

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var JumpToPageInput = /*#__PURE__*/function (_Component) {
  _inherits(JumpToPageInput, _Component);

  var _super = _createSuper$1(JumpToPageInput);

  function JumpToPageInput(props) {
    var _this;

    _classCallCheck(this, JumpToPageInput);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JumpToPageInput, [{
    key: "onChange",
    value: function onChange(event) {
      if (this.props.onChange) {
        this.props.onChange(this.props.rows * (event.value - 1), this.props.rows);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.pageCount > 0 ? this.props.page + 1 : 0;
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
        value: value,
        onChange: this.onChange,
        className: "p-paginator-page-input",
        disabled: this.props.disabled
      });

      if (this.props.template) {
        var defaultOptions = {
          value: value,
          onChange: this.onChange,
          disabled: this.props.disabled,
          className: 'p-paginator-page-input',
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return JumpToPageInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(JumpToPageInput, "defaultProps", {
  page: null,
  rows: null,
  pageCount: null,
  disabled: false,
  template: null,
  onChange: null
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Paginator = /*#__PURE__*/function (_Component) {
  _inherits(Paginator, _Component);

  var _super = _createSuper(Paginator);

  function Paginator(props) {
    var _this;

    _classCallCheck(this, Paginator);

    _this = _super.call(this, props);
    _this.changePageToFirst = _this.changePageToFirst.bind(_assertThisInitialized(_this));
    _this.changePageToPrev = _this.changePageToPrev.bind(_assertThisInitialized(_this));
    _this.changePageToNext = _this.changePageToNext.bind(_assertThisInitialized(_this));
    _this.changePageToLast = _this.changePageToLast.bind(_assertThisInitialized(_this));
    _this.onRowsChange = _this.onRowsChange.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.onPageLinkClick = _this.onPageLinkClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Paginator, [{
    key: "isFirstPage",
    value: function isFirstPage() {
      return this.getPage() === 0;
    }
  }, {
    key: "isLastPage",
    value: function isLastPage() {
      return this.getPage() === this.getPageCount() - 1;
    }
  }, {
    key: "getPageCount",
    value: function getPageCount() {
      return Math.ceil(this.props.totalRecords / this.props.rows);
    }
  }, {
    key: "calculatePageLinkBoundaries",
    value: function calculatePageLinkBoundaries() {
      var numberOfPages = this.getPageCount();
      var visiblePages = Math.min(this.props.pageLinkSize, numberOfPages); //calculate range, keep current in middle if necessary

      var start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2));
      var end = Math.min(numberOfPages - 1, start + visiblePages - 1); //check when approaching to last page

      var delta = this.props.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    }
  }, {
    key: "updatePageLinks",
    value: function updatePageLinks() {
      var pageLinks = [];
      var boundaries = this.calculatePageLinkBoundaries();
      var start = boundaries[0];
      var end = boundaries[1];

      for (var i = start; i <= end; i++) {
        pageLinks.push(i + 1);
      }

      return pageLinks;
    }
  }, {
    key: "changePage",
    value: function changePage(first, rows) {
      var pc = this.getPageCount();
      var p = Math.floor(first / rows);

      if (p >= 0 && p < pc) {
        var newPageState = {
          first: first,
          rows: rows,
          page: p,
          pageCount: pc
        };

        if (this.props.onPageChange) {
          this.props.onPageChange(newPageState);
        }
      }
    }
  }, {
    key: "getPage",
    value: function getPage() {
      return Math.floor(this.props.first / this.props.rows);
    }
  }, {
    key: "empty",
    value: function empty() {
      var pageCount = this.getPageCount();
      return pageCount === 0;
    }
  }, {
    key: "changePageToFirst",
    value: function changePageToFirst(event) {
      this.changePage(0, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "changePageToPrev",
    value: function changePageToPrev(event) {
      this.changePage(this.props.first - this.props.rows, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "onPageLinkClick",
    value: function onPageLinkClick(event) {
      this.changePage((event.value - 1) * this.props.rows, this.props.rows);
    }
  }, {
    key: "changePageToNext",
    value: function changePageToNext(event) {
      this.changePage(this.props.first + this.props.rows, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "changePageToLast",
    value: function changePageToLast(event) {
      this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "onRowsChange",
    value: function onRowsChange(event) {
      var rows = event.value;
      this.isRowChanged = rows !== this.props.rows;
      this.changePage(0, rows);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.rows !== prevProps.rows && !this.isRowChanged) {
        this.changePage(0, this.props.rows);
      } else if (this.getPage() > 0 && prevProps.totalRecords !== this.props.totalRecords && this.props.first >= this.props.totalRecords) {
        this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
      }

      this.isRowChanged = false;
    }
  }, {
    key: "renderElement",
    value: function renderElement(key, template) {
      var element;

      switch (key) {
        case 'FirstPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FirstPageLink, {
            key: key,
            onClick: this.changePageToFirst,
            disabled: this.isFirstPage() || this.empty(),
            template: template
          });
          break;

        case 'PrevPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrevPageLink, {
            key: key,
            onClick: this.changePageToPrev,
            disabled: this.isFirstPage() || this.empty(),
            template: template
          });
          break;

        case 'NextPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextPageLink, {
            key: key,
            onClick: this.changePageToNext,
            disabled: this.isLastPage() || this.empty(),
            template: template
          });
          break;

        case 'LastPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LastPageLink, {
            key: key,
            onClick: this.changePageToLast,
            disabled: this.isLastPage() || this.empty(),
            template: template
          });
          break;

        case 'PageLinks':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLinks, {
            key: key,
            value: this.updatePageLinks(),
            page: this.getPage(),
            rows: this.props.rows,
            pageCount: this.getPageCount(),
            onClick: this.onPageLinkClick,
            template: template
          });
          break;

        case 'RowsPerPageDropdown':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowsPerPageDropdown, {
            key: key,
            value: this.props.rows,
            page: this.getPage(),
            pageCount: this.getPageCount(),
            totalRecords: this.props.totalRecords,
            options: this.props.rowsPerPageOptions,
            onChange: this.onRowsChange,
            appendTo: this.props.dropdownAppendTo,
            template: template,
            disabled: this.empty()
          });
          break;

        case 'CurrentPageReport':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentPageReport, {
            reportTemplate: this.props.currentPageReportTemplate,
            key: key,
            page: this.getPage(),
            pageCount: this.getPageCount(),
            first: this.props.first,
            rows: this.props.rows,
            totalRecords: this.props.totalRecords,
            template: template
          });
          break;

        case 'JumpToPageInput':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JumpToPageInput, {
            key: key,
            rows: this.props.rows,
            page: this.getPage(),
            pageCount: this.getPageCount(),
            onChange: this.changePage,
            disabled: this.empty(),
            template: template
          });
          break;

        default:
          element = null;
          break;
      }

      return element;
    }
  }, {
    key: "renderElements",
    value: function renderElements() {
      var _this2 = this;

      var template = this.props.template;

      if (template) {
        if (_typeof(template) === 'object') {
          return template.layout ? template.layout.split(' ').map(function (value) {
            var key = value.trim();
            return _this2.renderElement(key, template[key]);
          }) : Object.entries(template).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                _template = _ref2[1];

            return _this2.renderElement(key, _template);
          });
        }

        return template.split(' ').map(function (value) {
          return _this2.renderElement(value.trim());
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.alwaysShow && this.getPageCount() === 1) {
        return null;
      } else {
        var className = Object(primereact_utils__WEBPACK_IMPORTED_MODULE_1__["classNames"])('p-paginator p-component', this.props.className);
        var leftContent = primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.leftContent, this.props);
        var rightContent = primereact_utils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"].getJSXElement(this.props.rightContent, this.props);
        var elements = this.renderElements();
        var leftElement = leftContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-paginator-left-content"
        }, leftContent);
        var rightElement = rightContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-paginator-right-content"
        }, rightContent);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: className,
          style: this.props.style
        }, leftElement, elements, rightElement);
      }
    }
  }]);

  return Paginator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Paginator, "defaultProps", {
  totalRecords: 0,
  rows: 0,
  first: 0,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  alwaysShow: true,
  style: null,
  className: null,
  template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  onPageChange: null,
  leftContent: null,
  rightContent: null,
  dropdownAppendTo: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})'
});




/***/ }),

/***/ "./pages/userEntity/form.jsx":
/*!***********************************!*\
  !*** ./pages/userEntity/form.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox/checkbox.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/UserEntityDataService */ "./services/UserEntityDataService.jsx");
/* harmony import */ var _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/AccessProfileDataService */ "./services/AccessProfileDataService.jsx");
/* harmony import */ var _store_actions_userEntity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/userEntity */ "./store/actions/userEntity/index.jsx");




var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\userEntity\\form.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















function UserEntityForm(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.userEntitySelectedReducer.userEntitySelected;
  })),
      userEntitySelected = _useState[0],
      setUserEntitySelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      comboBoxAccessProfiles = _useState2[0],
      setComboBoxAccessProfiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedComboBoxAccessProfile = _useState3[0],
      setSelectedComboBoxAccessProfile = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedAccessProfilesList = _useState4[0],
      setSelectedAccessProfileList = _useState4[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_17__["AccessProfileDataService"]._comboBoxAccessProfiles().then(function (response) {
      setComboBoxAccessProfiles(response.data);
      setSelectedComboBoxAccessProfile(response.data[0]);
    });
  }, []);

  function _save() {
    if (!userEntitySelected.id) {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_16__["UserEntityDataService"]._post(userEntitySelected).then(function (response) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro criado com sucesso!",
          life: 3000
        });
        setTimeout(function () {
          console.log("EXECUTADO POST");
          router.push("/userEntity");
        }, 3000);
      });
    } else {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_16__["UserEntityDataService"]._put(userEntitySelected).then(function (response) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro alterado com sucesso!",
          life: 3000
        });
        setTimeout(function () {
          console.log("EXECUTADO PUT");
          router.push("/userEntity");
        }, 3000);
      });
    }
  }

  function onChangeName(e) {
    var userEntityAux = _objectSpread({}, userEntitySelected);

    userEntityAux.name = e.target.value;
    setUserEntitySelected(userEntityAux);
  }

  function onChangeEmail(e) {
    var userEntityAux = _objectSpread({}, userEntitySelected);

    userEntityAux.email = e.target.value;
    setUserEntitySelected(userEntityAux);
  }

  function handleAccessProfileComboBox(value) {
    var index = comboBoxAccessProfiles.map(function (item) {
      return item.value;
    }).indexOf(value);

    if (index >= 0) {
      setSelectedComboBoxAccessProfile(comboBoxAccessProfiles[index]);
    }
  }

  var removeAccessProfile = function removeAccessProfile(rowData) {
    var selectedAccessProfilesListAux = selectedAccessProfilesList.filter(function (item) {
      return item.id !== rowData.id;
    });
    setSelectedAccessProfileList(selectedAccessProfilesListAux);
    var comboBoxAccessProfilesAux = comboBoxAccessProfiles;
    comboBoxAccessProfilesAux.push({
      value: rowData.id,
      label: rowData.name
    });
    setComboBoxAccessProfiles(comboBoxAccessProfilesAux);
    setSelectedComboBoxAccessProfile(comboBoxAccessProfilesAux[0]);
  };

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return removeFunctionality(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__["Fieldset"], {
      style: {
        marginTop: "15px"
      },
      legend: "Cadastro de Usu\xE1rios",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Nome: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
          id: "name",
          value: userEntitySelected && userEntitySelected.name,
          onChange: function onChange(e) {
            return onChangeName(e);
          },
          className: "inputfield w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "E-mail:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
          id: "email",
          value: userEntitySelected && userEntitySelected.email,
          onChange: function onChange(e) {
            return onChangeEmail(e);
          },
          className: "inputfield w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field col-12 md:col-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "accessProfiles",
          children: "Perfis de Acesso:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
          emptyMessage: "Nenhum Perfil de Acesso Dispon\xEDvel",
          className: "inputfield",
          optionValue: "value",
          optionLabel: "label",
          options: comboBoxAccessProfiles,
          value: selectedComboBoxAccessProfile && selectedComboBoxAccessProfile.value,
          onChange: function onChange(e) {
            return handleAccessProfileComboBox(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_13__["DataTable"], {
          scrollHeight: "300px",
          scrollable: true,
          value: selectedAccessProfilesList,
          responsiveLayout: "scroll",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            header: "Selecionado",
            selectionMode: "single",
            headerStyle: {
              width: "3em"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            field: "name",
            header: "Funcionalidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Column, {
            body: actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/userEntity",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "back-button",
          style: {
            marginRight: "15px"
          },
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(UserEntityForm, "BlEd3xCZps9EQXfk2z4I0VNWwoY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = UserEntityForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_14__["default"])(UserEntityForm));

var _c, _c2;

$RefreshReg$(_c, "UserEntityForm");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaW1lcmVhY3QvZGF0YXRhYmxlL2RhdGF0YWJsZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmltZXJlYWN0L3BhZ2luYXRvci9wYWdpbmF0b3IuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyRW50aXR5L2Zvcm0uanN4Il0sIm5hbWVzIjpbIlVzZXJFbnRpdHlGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyRW50aXR5U2VsZWN0ZWRSZWR1Y2VyIiwidXNlckVudGl0eVNlbGVjdGVkIiwic2V0VXNlckVudGl0eVNlbGVjdGVkIiwiY29tYm9Cb3hBY2Nlc3NQcm9maWxlcyIsInNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSIsInNldFNlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QiLCJzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0IiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIiwiX2NvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiX3NhdmUiLCJpZCIsIlVzZXJFbnRpdHlEYXRhU2VydmljZSIsIl9wb3N0IiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJsaWZlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiX3B1dCIsIm9uQ2hhbmdlTmFtZSIsImUiLCJ1c2VyRW50aXR5QXV4IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VFbWFpbCIsImVtYWlsIiwiaGFuZGxlQWNjZXNzUHJvZmlsZUNvbWJvQm94IiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwiaW5kZXhPZiIsInJlbW92ZUFjY2Vzc1Byb2ZpbGUiLCJyb3dEYXRhIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgiLCJmaWx0ZXIiLCJjb21ib0JveEFjY2Vzc1Byb2ZpbGVzQXV4IiwibGFiZWwiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJyZW1vdmVGdW5jdGlvbmFsaXR5IiwibWFyZ2luVG9wIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ1E7QUFDcUY7QUFDNUI7QUFDL0M7QUFDaEI7QUFDYztBQUNkO0FBQ007QUFDRjtBQUNKO0FBQ2tCOztBQUU3RDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQVU7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMkRBQVU7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFP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QUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBVztBQUNqQztBQUNBO0FBQ0EsU0FBUyxLQUFLLG1FQUFZO0FBQzFCLDRCQUE0Qiw0Q0FBSztBQUNqQztBQUNBO0FBQ0EsU0FBUyxlQUFlLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSw0Q0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHNCQUFzQiw0REFBVztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0Qiw0Q0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWUsNENBQUs7QUFDN0I7QUFDQSxTQUFTLHdCQUF3Qiw0Q0FBSztBQUN0QztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQVc7QUFDakM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsNENBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0Qiw0Q0FBSztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNEJBQTRCLDRDQUFLLGVBQWUsNENBQUs7QUFDckQ7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCw0Q0FBSztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCw4QkFBOEIsNENBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMEJBQTBCLDRDQUFLLGVBQWUsNENBQUs7QUFDbkQ7QUFDQSxHQUFHO0FBQ0g7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxpQ0FBaUMsNENBQUs7QUFDdEM7QUFDQTtB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O0FBQXlELGVBQUssRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCSixlQWlDSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQXVCLGVBQU8sRUFBRXRDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQTBDSDs7R0ExSFExQixjO1VBRXdERyx1RCxFQVE5Q2MscUQsRUFDRUUsdUQ7OztLQVhabkIsYztBQTRITSxxRUFBQWlFLHFFQUFRLENBQUNqRSxjQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJFbnRpdHkvZm9ybS5hYzA0YTQxZGU0MzdhNmRiMzM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhZ2luYXRvciB9IGZyb20gJ3ByaW1lcmVhY3QvcGFnaW5hdG9yJztcbmltcG9ydCB7IGNsYXNzTmFtZXMsIE9iamVjdFV0aWxzLCBEb21IYW5kbGVyLCBaSW5kZXhVdGlscywgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIsIFVuaXF1ZUNvbXBvbmVudElkIH0gZnJvbSAncHJpbWVyZWFjdC91dGlscyc7XG5pbXBvcnQgUHJpbWVSZWFjdCwgeyBsb2NhbGVPcHRpb24sIEZpbHRlck1hdGNoTW9kZSwgRmlsdGVyT3BlcmF0b3IsIEZpbHRlclNlcnZpY2UgfSBmcm9tICdwcmltZXJlYWN0L2FwaSc7XG5pbXBvcnQgeyBPdmVybGF5U2VydmljZSB9IGZyb20gJ3ByaW1lcmVhY3Qvb3ZlcmxheXNlcnZpY2UnO1xuaW1wb3J0IHsgUmlwcGxlIH0gZnJvbSAncHJpbWVyZWFjdC9yaXBwbGUnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3ByaW1lcmVhY3QvY3NzdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICdwcmltZXJlYWN0L3BvcnRhbCc7XG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICdwcmltZXJlYWN0L2lucHV0dGV4dCc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3ByaW1lcmVhY3QvZHJvcGRvd24nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xuaW1wb3J0IHsgVmlydHVhbFNjcm9sbGVyIH0gZnJvbSAncHJpbWVyZWFjdC92aXJ0dWFsc2Nyb2xsZXInO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlciRjKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JGMoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JGMoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIFJvd1JhZGlvQnV0dG9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3dSYWRpb0J1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciRjKFJvd1JhZGlvQnV0dG9uKTtcblxuICBmdW5jdGlvbiBSb3dSYWRpb0J1dHRvbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3dSYWRpb0J1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkJsdXIgPSBfdGhpcy5vbkJsdXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DaGFuZ2UgPSBfdGhpcy5vbkNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbktleURvd24gPSBfdGhpcy5vbktleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJvd1JhZGlvQnV0dG9uLCBbe1xuICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1yYWRpb2J1dHRvbiBwLWNvbXBvbmVudCcsIHtcbiAgICAgICAgJ3AtcmFkaW9idXR0b24tZm9jdXNlZCc6IHRoaXMuc3RhdGUuZm9jdXNlZFxuICAgICAgfSk7XG4gICAgICB2YXIgYm94Q2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1yYWRpb2J1dHRvbi1ib3ggcC1jb21wb25lbnQnLCB7XG4gICAgICAgICdwLWhpZ2hsaWdodCc6IHRoaXMucHJvcHMuY2hlY2tlZCxcbiAgICAgICAgJ3AtZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgICdwLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgfSk7XG4gICAgICB2YXIgbmFtZSA9IFwiXCIuY29uY2F0KHRoaXMucHJvcHMudGFibGVTZWxlY3RvciwgXCJfZHRfcmFkaW9cIik7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicC1oaWRkZW4tYWNjZXNzaWJsZVwiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0ID0gZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duXG4gICAgICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBib3hDbGFzc05hbWUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgcm9sZTogXCJyYWRpb1wiLFxuICAgICAgICBcImFyaWEtY2hlY2tlZFwiOiB0aGlzLnByb3BzLmNoZWNrZWRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInAtcmFkaW9idXR0b24taWNvblwiXG4gICAgICB9KSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3dSYWRpb0J1dHRvbjtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJGIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkYigpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkYigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgUm93Q2hlY2tib3ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJvd0NoZWNrYm94LCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJGIoUm93Q2hlY2tib3gpO1xuXG4gIGZ1bmN0aW9uIFJvd0NoZWNrYm94KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvd0NoZWNrYm94KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZDogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRm9jdXMgPSBfdGhpcy5vbkZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQmx1ciA9IF90aGlzLm9uQmx1ci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbktleURvd24gPSBfdGhpcy5vbktleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJvd0NoZWNrYm94LCBbe1xuICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Gb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLWNoZWNrYm94IHAtY29tcG9uZW50Jywge1xuICAgICAgICAncC1jaGVja2JveC1mb2N1c2VkJzogdGhpcy5zdGF0ZS5mb2N1c2VkXG4gICAgICB9KTtcbiAgICAgIHZhciBib3hDbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLWNoZWNrYm94LWJveCBwLWNvbXBvbmVudCcsIHtcbiAgICAgICAgJ3AtaGlnaGxpZ2h0JzogdGhpcy5wcm9wcy5jaGVja2VkLFxuICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICdwLWZvY3VzJzogdGhpcy5zdGF0ZS5mb2N1c2VkXG4gICAgICB9KTtcbiAgICAgIHZhciBpY29uQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1jaGVja2JveC1pY29uJywge1xuICAgICAgICAncGkgcGktY2hlY2snOiB0aGlzLnByb3BzLmNoZWNrZWRcbiAgICAgIH0pO1xuICAgICAgdmFyIHRhYkluZGV4ID0gdGhpcy5wcm9wcy5kaXNhYmxlZCA/IG51bGwgOiAnMCc7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYm94Q2xhc3NOYW1lLFxuICAgICAgICByb2xlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIFwiYXJpYS1jaGVja2VkXCI6IHRoaXMucHJvcHMuY2hlY2tlZCxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZVxuICAgICAgfSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm93Q2hlY2tib3g7XG59KENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIG93bktleXMkNyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ3KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDcoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQ3KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJGEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkYSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkYSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgQm9keUNlbGwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJvZHlDZWxsLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJGEoQm9keUNlbGwpO1xuXG4gIGZ1bmN0aW9uIEJvZHlDZWxsKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvZHlDZWxsKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdGluZzogcHJvcHMuZWRpdGluZyxcbiAgICAgIGVkaXRpbmdSb3dEYXRhOiBwcm9wcy5yb3dEYXRhLFxuICAgICAgc3R5bGVPYmplY3Q6IHt9XG4gICAgfTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbktleURvd24gPSBfdGhpcy5vbktleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25CbHVyID0gX3RoaXMub25CbHVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRWRpdG9yRm9jdXMgPSBfdGhpcy5vbkVkaXRvckZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uUm93VG9nZ2xlID0gX3RoaXMub25Sb3dUb2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25SYWRpb0NoYW5nZSA9IF90aGlzLm9uUmFkaW9DaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DaGVja2JveENoYW5nZSA9IF90aGlzLm9uQ2hlY2tib3hDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dFZGl0U2F2ZSA9IF90aGlzLm9uUm93RWRpdFNhdmUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dFZGl0Q2FuY2VsID0gX3RoaXMub25Sb3dFZGl0Q2FuY2VsLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uUm93RWRpdEluaXQgPSBfdGhpcy5vblJvd0VkaXRJbml0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmVkaXRvckNhbGxiYWNrID0gX3RoaXMuZWRpdG9yQ2FsbGJhY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJvZHlDZWxsLCBbe1xuICAgIGtleTogXCJmaWVsZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmllbGQnKSB8fCBcImZpZWxkX1wiLmNvbmNhdCh0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNFZGl0YWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VkaXRhYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uUHJvcCgnZWRpdG9yJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU2VsZWN0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTZWxlY3RlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGlvbiA/IHRoaXMucHJvcHMuc2VsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLmZpbmRJbmRleCh0aGlzLnByb3BzLnNlbGVjdGlvbikgPiAtMSA6IHRoaXMuZXF1YWxzKHRoaXMucHJvcHMuc2VsZWN0aW9uKSA6IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlcXVhbHNEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFsc0RhdGEoZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29tcGFyZVNlbGVjdGlvbkJ5ID09PSAnZXF1YWxzJyA/IGRhdGEgPT09IHRoaXMucHJvcHMucm93RGF0YSA6IE9iamVjdFV0aWxzLmVxdWFscyhkYXRhLCB0aGlzLnByb3BzLnJvd0RhdGEsIHRoaXMucHJvcHMuZGF0YUtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcXVhbHMoc2VsZWN0ZWRDZWxsKSB7XG4gICAgICByZXR1cm4gKHNlbGVjdGVkQ2VsbC5yb3dJbmRleCA9PT0gdGhpcy5wcm9wcy5yb3dJbmRleCB8fCB0aGlzLmVxdWFsc0RhdGEoc2VsZWN0ZWRDZWxsLnJvd0RhdGEpKSAmJiAoc2VsZWN0ZWRDZWxsLmZpZWxkID09PSB0aGlzLmZpZWxkIHx8IHNlbGVjdGVkQ2VsbC5jZWxsSW5kZXggPT09IHRoaXMucHJvcHMuaW5kZXgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc091dHNpZGVDbGlja2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3V0c2lkZUNsaWNrZWQodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lbCAmJiAhKHRoaXMuZWwuaXNTYW1lTm9kZSh0YXJnZXQpIHx8IHRoaXMuZWwuY29udGFpbnModGFyZ2V0KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbHVtblByb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcChwcm9wKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb2x1bW4gPyB0aGlzLnByb3BzLmNvbHVtbi5wcm9wc1twcm9wXSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFZpcnR1YWxTY3JvbGxlck9wdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsZXJPcHRpb24ob3B0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy52aXJ0dWFsU2Nyb2xsZXJPcHRpb25zID8gdGhpcy5wcm9wcy52aXJ0dWFsU2Nyb2xsZXJPcHRpb25zW29wdGlvbl0gOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdHlsZSgpIHtcbiAgICAgIHZhciBib2R5U3R5bGUgPSB0aGlzLmdldENvbHVtblByb3AoJ2JvZHlTdHlsZScpO1xuICAgICAgdmFyIGNvbHVtblN0eWxlID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdzdHlsZScpO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJykgPyBPYmplY3QuYXNzaWduKHt9LCBjb2x1bW5TdHlsZSwgYm9keVN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlT2JqZWN0KSA6IE9iamVjdC5hc3NpZ24oe30sIGNvbHVtblN0eWxlLCBib2R5U3R5bGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDZWxsUGFyYW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENlbGxQYXJhbXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy5yZXNvbHZlRmllbGREYXRhKCksXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICByb3dEYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuICAgICAgICBjZWxsSW5kZXg6IHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgY29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcbiAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENlbGxDYWxsYmFja1BhcmFtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDZWxsQ2FsbGJhY2tQYXJhbXMoZXZlbnQpIHtcbiAgICAgIHZhciBwYXJhbXMgPSB0aGlzLmdldENlbGxQYXJhbXMoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgICAgfSwgcGFyYW1zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZUZpZWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlRmllbGREYXRhKGRhdGEpIHtcbiAgICAgIHJldHVybiBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGEgfHwgdGhpcy5wcm9wcy5yb3dEYXRhLCB0aGlzLmZpZWxkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWRpdGluZ1Jvd0RhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWRpdGluZ1Jvd0RhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5lZGl0aW5nTWV0YSAmJiB0aGlzLnByb3BzLmVkaXRpbmdNZXRhW3RoaXMucHJvcHMucm93SW5kZXhdID8gdGhpcy5wcm9wcy5lZGl0aW5nTWV0YVt0aGlzLnByb3BzLnJvd0luZGV4XS5kYXRhIDogdGhpcy5wcm9wcy5yb3dEYXRhO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRUYWJJbmRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWJJbmRleChjZWxsU2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmFsbG93Q2VsbFNlbGVjdGlvbiA/IGNlbGxTZWxlY3RlZCA/IDAgOiB0aGlzLnByb3BzLnJvd0luZGV4ID09PSAwICYmIHRoaXMucHJvcHMuaW5kZXggPT09IDAgPyB0aGlzLnByb3BzLnRhYkluZGV4IDogLTEgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kSW5kZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZEluZGV4KGNvbGxlY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gKGNvbGxlY3Rpb24gfHwgW10pLmZpbmRJbmRleChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmVxdWFscyhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9zZUNlbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VDZWxsKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBhcmFtcyA9IHRoaXMuZ2V0Q2VsbENhbGxiYWNrUGFyYW1zKGV2ZW50KTtcbiAgICAgIHZhciBvbkJlZm9yZUNlbGxFZGl0SGlkZSA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnb25CZWZvcmVDZWxsRWRpdEhpZGUnKTtcblxuICAgICAgaWYgKG9uQmVmb3JlQ2VsbEVkaXRIaWRlKSB7XG4gICAgICAgIG9uQmVmb3JlQ2VsbEVkaXRIaWRlKHBhcmFtcyk7XG4gICAgICB9XG4gICAgICAvKiBXaGVuIHVzaW5nIHRoZSAndGFiJyBrZXksIHRoZSBmb2N1cyBldmVudCBvZiB0aGUgbmV4dCBjZWxsIGlzIG5vdCBjYWxsZWQgaW4gSUUuICovXG5cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZWRpdGluZzogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy51bmJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpO1xuXG4gICAgICAgICAgT3ZlcmxheVNlcnZpY2Uub2ZmKCdvdmVybGF5LWNsaWNrJywgX3RoaXMzLm92ZXJsYXlFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBfdGhpczMub3ZlcmxheUV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzd2l0Y2hDZWxsVG9WaWV3TW9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzd2l0Y2hDZWxsVG9WaWV3TW9kZShldmVudCwgc3VibWl0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tQYXJhbXMgPSB0aGlzLmdldENlbGxDYWxsYmFja1BhcmFtcyhldmVudCk7XG4gICAgICB2YXIgbmV3Um93RGF0YSA9IHRoaXMuc3RhdGUuZWRpdGluZ1Jvd0RhdGE7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnJlc29sdmVGaWVsZERhdGEobmV3Um93RGF0YSk7XG5cbiAgICAgIHZhciBwYXJhbXMgPSBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBjYWxsYmFja1BhcmFtcyksIHt9LCB7XG4gICAgICAgIG5ld1Jvd0RhdGE6IG5ld1Jvd0RhdGEsXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBvbkNlbGxFZGl0Q2FuY2VsID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdvbkNlbGxFZGl0Q2FuY2VsJyk7XG4gICAgICB2YXIgY2VsbEVkaXRWYWxpZGF0b3IgPSB0aGlzLmdldENvbHVtblByb3AoJ2NlbGxFZGl0VmFsaWRhdG9yJyk7XG4gICAgICB2YXIgb25DZWxsRWRpdENvbXBsZXRlID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdvbkNlbGxFZGl0Q29tcGxldGUnKTtcblxuICAgICAgaWYgKCFzdWJtaXQgJiYgb25DZWxsRWRpdENhbmNlbCkge1xuICAgICAgICBvbkNlbGxFZGl0Q2FuY2VsKHBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgICAgIGlmIChjZWxsRWRpdFZhbGlkYXRvcikge1xuICAgICAgICB2YWxpZCA9IGNlbGxFZGl0VmFsaWRhdG9yKHBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICBpZiAoc3VibWl0ICYmIG9uQ2VsbEVkaXRDb21wbGV0ZSkge1xuICAgICAgICAgIG9uQ2VsbEVkaXRDb21wbGV0ZShwYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbG9zZUNlbGwoZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZE5leHRTZWxlY3RhYmxlQ2VsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kTmV4dFNlbGVjdGFibGVDZWxsKGNlbGwpIHtcbiAgICAgIHZhciBuZXh0Q2VsbCA9IGNlbGwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgcmV0dXJuIG5leHRDZWxsID8gRG9tSGFuZGxlci5oYXNDbGFzcyhuZXh0Q2VsbCwgJ3Atc2VsZWN0YWJsZS1jZWxsJykgPyBuZXh0Q2VsbCA6IHRoaXMuZmluZE5leHRTZWxlY3RhYmxlQ2VsbChuZXh0Q2VsbCkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kUHJldlNlbGVjdGFibGVDZWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRQcmV2U2VsZWN0YWJsZUNlbGwoY2VsbCkge1xuICAgICAgdmFyIHByZXZDZWxsID0gY2VsbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgcmV0dXJuIHByZXZDZWxsID8gRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2Q2VsbCwgJ3Atc2VsZWN0YWJsZS1jZWxsJykgPyBwcmV2Q2VsbCA6IHRoaXMuZmluZFByZXZTZWxlY3RhYmxlQ2VsbChwcmV2Q2VsbCkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kRG93blNlbGVjdGFibGVDZWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmREb3duU2VsZWN0YWJsZUNlbGwoY2VsbCkge1xuICAgICAgdmFyIGRvd25Sb3cgPSBjZWxsLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgdmFyIGRvd25DZWxsID0gZG93blJvdyA/IGRvd25Sb3cuY2hpbGRyZW5bdGhpcy5wcm9wcy5pbmRleF0gOiBudWxsO1xuICAgICAgcmV0dXJuIGRvd25Sb3cgJiYgZG93bkNlbGwgPyBEb21IYW5kbGVyLmhhc0NsYXNzKGRvd25Sb3csICdwLXNlbGVjdGFibGUtcm93JykgJiYgRG9tSGFuZGxlci5oYXNDbGFzcyhkb3duQ2VsbCwgJ3Atc2VsZWN0YWJsZS1jZWxsJykgPyBkb3duQ2VsbCA6IHRoaXMuZmluZERvd25TZWxlY3RhYmxlQ2VsbChkb3duQ2VsbCkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kVXBTZWxlY3RhYmxlQ2VsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kVXBTZWxlY3RhYmxlQ2VsbChjZWxsKSB7XG4gICAgICB2YXIgdXBSb3cgPSBjZWxsLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIHZhciB1cENlbGwgPSB1cFJvdyA/IHVwUm93LmNoaWxkcmVuW3RoaXMucHJvcHMuaW5kZXhdIDogbnVsbDtcbiAgICAgIHJldHVybiB1cFJvdyAmJiB1cENlbGwgPyBEb21IYW5kbGVyLmhhc0NsYXNzKHVwUm93LCAncC1zZWxlY3RhYmxlLXJvdycpICYmIERvbUhhbmRsZXIuaGFzQ2xhc3ModXBDZWxsLCAncC1zZWxlY3RhYmxlLWNlbGwnKSA/IHVwQ2VsbCA6IHRoaXMuZmluZFVwU2VsZWN0YWJsZUNlbGwodXBDZWxsKSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoYW5nZVRhYkluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVRhYkluZGV4KGN1cnJlbnRDZWxsLCBuZXh0Q2VsbCkge1xuICAgICAgaWYgKGN1cnJlbnRDZWxsICYmIG5leHRDZWxsKSB7XG4gICAgICAgIGN1cnJlbnRDZWxsLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIG5leHRDZWxsLnRhYkluZGV4ID0gdGhpcy5wcm9wcy50YWJJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNPbkVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNPbkVsZW1lbnQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGFiaW5kZXhUaW1lb3V0KTtcbiAgICAgIHRoaXMudGFiaW5kZXhUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczQuc3RhdGUuZWRpdGluZykge1xuICAgICAgICAgIHZhciBmb2N1c2FibGVFbCA9IF90aGlzNC5wcm9wcy5lZGl0TW9kZSA9PT0gJ2NlbGwnID8gRG9tSGFuZGxlci5nZXRGaXJzdEZvY3VzYWJsZUVsZW1lbnQoX3RoaXM0LmVsLCAnOm5vdCgucC1jZWxsLWVkaXRvci1rZXktaGVscGVyKScpIDogRG9tSGFuZGxlci5maW5kU2luZ2xlKF90aGlzNC5lbCwgJy5wLXJvdy1lZGl0b3Itc2F2ZScpO1xuICAgICAgICAgIGZvY3VzYWJsZUVsICYmIGZvY3VzYWJsZUVsLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczQua2V5SGVscGVyICYmIChfdGhpczQua2V5SGVscGVyLnRhYkluZGV4ID0gX3RoaXM0LnN0YXRlLmVkaXRpbmcgPyAtMSA6IDApO1xuICAgICAgfSwgMSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzT25Jbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzT25Jbml0KCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmluaXRGb2N1c1RpbWVvdXQpO1xuICAgICAgdGhpcy5pbml0Rm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVFbCA9IF90aGlzNS5wcm9wcy5lZGl0TW9kZSA9PT0gJ3JvdycgPyBEb21IYW5kbGVyLmZpbmRTaW5nbGUoX3RoaXM1LmVsLCAnLnAtcm93LWVkaXRvci1pbml0JykgOiBudWxsO1xuICAgICAgICBmb2N1c2FibGVFbCAmJiBmb2N1c2FibGVFbC5mb2N1cygpO1xuICAgICAgfSwgMSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVN0aWNreVBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN0aWNreVBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJykpIHtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gX29iamVjdFNwcmVhZCQ3KHt9LCB0aGlzLnN0YXRlLnN0eWxlT2JqZWN0KTtcblxuICAgICAgICB2YXIgYWxpZ24gPSB0aGlzLmdldENvbHVtblByb3AoJ2FsaWduRnJvemVuJyk7XG5cbiAgICAgICAgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgdmFyIHJpZ2h0ID0gMDtcbiAgICAgICAgICB2YXIgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKG5leHQpICsgcGFyc2VGbG9hdChuZXh0LnN0eWxlLnJpZ2h0IHx8IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0eWxlT2JqZWN0WydyaWdodCddID0gcmlnaHQgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBsZWZ0ID0gMDtcbiAgICAgICAgICB2YXIgcHJldiA9IHRoaXMuZWwucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICBsZWZ0ID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHByZXYpICsgcGFyc2VGbG9hdChwcmV2LnN0eWxlLmxlZnQgfHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVPYmplY3RbJ2xlZnQnXSA9IGxlZnQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzU2FtZVN0eWxlID0gdGhpcy5zdGF0ZS5zdHlsZU9iamVjdFsnbGVmdCddID09PSBzdHlsZU9iamVjdFsnbGVmdCddICYmIHRoaXMuc3RhdGUuc3R5bGVPYmplY3RbJ3JpZ2h0J10gPT09IHN0eWxlT2JqZWN0WydyaWdodCddO1xuICAgICAgICAhaXNTYW1lU3R5bGUgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3R5bGVPYmplY3Q6IHN0eWxlT2JqZWN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlZGl0b3JDYWxsYmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlZGl0b3JDYWxsYmFjayh2YWwpIHtcbiAgICAgIHZhciBlZGl0aW5nUm93RGF0YSA9IF9vYmplY3RTcHJlYWQkNyh7fSwgdGhpcy5zdGF0ZS5lZGl0aW5nUm93RGF0YSk7XG5cbiAgICAgIGVkaXRpbmdSb3dEYXRhW3RoaXMuZmllbGRdID0gdmFsO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVkaXRpbmdSb3dEYXRhOiBlZGl0aW5nUm93RGF0YVxuICAgICAgfSk7IC8vIHVwZGF0ZSBlZGl0aW5nIG1ldGEgZm9yIGNvbXBsZXRlIG1ldGhvZHMgb24gcm93IG1vZGVcblxuICAgICAgdGhpcy5wcm9wcy5lZGl0aW5nTWV0YVt0aGlzLnByb3BzLnJvd0luZGV4XS5kYXRhW3RoaXMuZmllbGRdID0gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgcGFyYW1zID0gdGhpcy5nZXRDZWxsQ2FsbGJhY2tQYXJhbXMoZXZlbnQpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5lZGl0TW9kZSAhPT0gJ3JvdycgJiYgdGhpcy5pc0VkaXRhYmxlKCkgJiYgIXRoaXMuc3RhdGUuZWRpdGluZyAmJiAodGhpcy5wcm9wcy5zZWxlY3RPbkVkaXQgfHwgIXRoaXMucHJvcHMuc2VsZWN0T25FZGl0ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIHRoaXMuc2VsZkNsaWNrID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9uQmVmb3JlQ2VsbEVkaXRTaG93ID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdvbkJlZm9yZUNlbGxFZGl0U2hvdycpO1xuICAgICAgICB2YXIgb25DZWxsRWRpdEluaXQgPSB0aGlzLmdldENvbHVtblByb3AoJ29uQ2VsbEVkaXRJbml0Jyk7XG4gICAgICAgIHZhciBjZWxsRWRpdFZhbGlkYXRvckV2ZW50ID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdjZWxsRWRpdFZhbGlkYXRvckV2ZW50Jyk7XG5cbiAgICAgICAgaWYgKG9uQmVmb3JlQ2VsbEVkaXRTaG93KSB7XG4gICAgICAgICAgb25CZWZvcmVDZWxsRWRpdFNob3cocGFyYW1zKTtcbiAgICAgICAgfSAvLyBJZiB0aGUgZGF0YSBpcyBzb3J0ZWQgdXNpbmcgc29ydCBpY29uLCBpdCBoYXMgYmVlbiBhZGRlZCB0byB3YWl0IGZvciB0aGUgc29ydCBvcGVyYXRpb24gd2hlbiBhbnkgY2VsbCBpcyB3YW50ZWQgdG8gYmUgb3BlbmVkLlxuXG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM2LnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVkaXRpbmc6IHRydWVcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob25DZWxsRWRpdEluaXQpIHtcbiAgICAgICAgICAgICAgb25DZWxsRWRpdEluaXQocGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxFZGl0VmFsaWRhdG9yRXZlbnQgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgX3RoaXM2LmJpbmREb2N1bWVudEVkaXRMaXN0ZW5lcigpO1xuXG4gICAgICAgICAgICAgIF90aGlzNi5vdmVybGF5RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpczYuaXNPdXRzaWRlQ2xpY2tlZChlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzNi5zZWxmQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBPdmVybGF5U2VydmljZS5vbignb3ZlcmxheS1jbGljaycsIF90aGlzNi5vdmVybGF5RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hbGxvd0NlbGxTZWxlY3Rpb24gJiYgdGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdXNlRG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgdmFyIHBhcmFtcyA9IHRoaXMuZ2V0Q2VsbENhbGxiYWNrUGFyYW1zKGV2ZW50KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdXNlVXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICB2YXIgcGFyYW1zID0gdGhpcy5nZXRDZWxsQ2FsbGJhY2tQYXJhbXMoZXZlbnQpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdXNlVXApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlVXAocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdE1vZGUgIT09ICdyb3cnKSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMgfHwgZXZlbnQud2hpY2ggPT09IDkpIHtcbiAgICAgICAgICAvLyB0YWIgfHwgZW50ZXJcbiAgICAgICAgICB0aGlzLnN3aXRjaENlbGxUb1ZpZXdNb2RlKGV2ZW50LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICAvLyBlc2NhcGVcbiAgICAgICAgICB0aGlzLnN3aXRjaENlbGxUb1ZpZXdNb2RlKGV2ZW50LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dDZWxsU2VsZWN0aW9uKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICBjZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHZhciBwcmV2Q2VsbCA9IHRoaXMuZmluZFByZXZTZWxlY3RhYmxlQ2VsbChjZWxsKTtcblxuICAgICAgICAgICAgaWYgKHByZXZDZWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiSW5kZXgoY2VsbCwgcHJldkNlbGwpO1xuICAgICAgICAgICAgICBwcmV2Q2VsbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy9yaWdodCBhcnJvd1xuXG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIHZhciBuZXh0Q2VsbCA9IHRoaXMuZmluZE5leHRTZWxlY3RhYmxlQ2VsbChjZWxsKTtcblxuICAgICAgICAgICAgaWYgKG5leHRDZWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiSW5kZXgoY2VsbCwgbmV4dENlbGwpO1xuICAgICAgICAgICAgICBuZXh0Q2VsbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy91cCBhcnJvd1xuXG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHZhciB1cENlbGwgPSB0aGlzLmZpbmRVcFNlbGVjdGFibGVDZWxsKGNlbGwpO1xuXG4gICAgICAgICAgICBpZiAodXBDZWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiSW5kZXgoY2VsbCwgdXBDZWxsKTtcbiAgICAgICAgICAgICAgdXBDZWxsLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvL2Rvd24gYXJyb3dcblxuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICB2YXIgZG93bkNlbGwgPSB0aGlzLmZpbmREb3duU2VsZWN0YWJsZUNlbGwoY2VsbCk7XG5cbiAgICAgICAgICAgIGlmIChkb3duQ2VsbCkge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRhYkluZGV4KGNlbGwsIGRvd25DZWxsKTtcbiAgICAgICAgICAgICAgZG93bkNlbGwuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vZW50ZXJcblxuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAvLyBAZGVwcmVjYXRlZFxuICAgICAgICAgICAgaWYgKCFEb21IYW5kbGVyLmlzQ2xpY2thYmxlKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy9zcGFjZVxuXG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGlmICghRG9tSGFuZGxlci5pc0NsaWNrYWJsZSh0YXJnZXQpICYmICF0YXJnZXQucmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25CbHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQmx1cihldmVudCkge1xuICAgICAgdGhpcy5zZWxmQ2xpY2sgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdE1vZGUgIT09ICdyb3cnICYmIHRoaXMuc3RhdGUuZWRpdGluZyAmJiB0aGlzLmdldENvbHVtblByb3AoJ2NlbGxFZGl0VmFsaWRhdG9yRXZlbnQnKSA9PT0gJ2JsdXInKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ2VsbFRvVmlld01vZGUoZXZlbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkVkaXRvckZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRWRpdG9yRm9jdXMoZXZlbnQpIHtcbiAgICAgIHRoaXMub25DbGljayhldmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUmFkaW9DaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SYWRpb0NoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJhZGlvQ2hhbmdlKHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNoZWNrYm94Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hlY2tib3hDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIGluZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dUb2dnbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dUb2dnbGUoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dUb2dnbGUoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5yb3dEYXRhXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93RWRpdEluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dFZGl0SW5pdChldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJvd0VkaXRJbml0KHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgbmV3RGF0YTogdGhpcy5nZXRFZGl0aW5nUm93RGF0YSgpLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblJvd0VkaXRTYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93RWRpdFNhdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dFZGl0U2F2ZSh7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIG5ld0RhdGE6IHRoaXMuZ2V0RWRpdGluZ1Jvd0RhdGEoKSxcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIGluZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9jdXNPbkluaXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dFZGl0Q2FuY2VsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93RWRpdENhbmNlbChldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJvd0VkaXRDYW5jZWwoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5yb3dEYXRhLFxuICAgICAgICBuZXdEYXRhOiB0aGlzLmdldEVkaXRpbmdSb3dEYXRhKCksXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvY3VzT25Jbml0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJpbmREb2N1bWVudEVkaXRMaXN0ZW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICghX3RoaXM3LnNlbGZDbGljayAmJiBfdGhpczcuaXNPdXRzaWRlQ2xpY2tlZChlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIF90aGlzNy5zd2l0Y2hDZWxsVG9WaWV3TW9kZShlLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczcuc2VsZkNsaWNrID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKSB7XG4gICAgICBpZiAodGhpcy5kb2N1bWVudEVkaXRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIsIHRydWUpO1xuICAgICAgICB0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxmQ2xpY2sgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0aWNreVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLmdldENvbHVtblByb3AoJ2Zyb3plbicpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RpY2t5UG9zaXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdE1vZGUgPT09ICdjZWxsJyB8fCB0aGlzLnByb3BzLmVkaXRNb2RlID09PSAncm93Jykge1xuICAgICAgICB0aGlzLmZvY3VzT25FbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKHByZXZQcm9wcy5lZGl0aW5nTWV0YSAhPT0gdGhpcy5wcm9wcy5lZGl0aW5nTWV0YSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWRpdGluZ1Jvd0RhdGE6IHRoaXMuZ2V0RWRpdGluZ1Jvd0RhdGEoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5lZGl0aW5nICE9PSB0aGlzLnN0YXRlLmVkaXRpbmcpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2tQYXJhbXMgPSB0aGlzLmdldENlbGxDYWxsYmFja1BhcmFtcygpO1xuXG4gICAgICAgICAgdmFyIHBhcmFtcyA9IF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIGNhbGxiYWNrUGFyYW1zKSwge30sIHtcbiAgICAgICAgICAgIGVkaXRpbmc6IHRoaXMuc3RhdGUuZWRpdGluZ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkVkaXRpbmdNZXRhQ2hhbmdlKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuYmluZERvY3VtZW50RWRpdExpc3RlbmVyKCk7XG5cbiAgICAgIGlmICh0aGlzLm92ZXJsYXlFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIE92ZXJsYXlTZXJ2aWNlLm9mZignb3ZlcmxheS1jbGljaycsIHRoaXMub3ZlcmxheUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB0aGlzLm92ZXJsYXlFdmVudExpc3RlbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTG9hZGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkaW5nKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldFZpcnR1YWxTY3JvbGxlck9wdGlvbignZ2V0TG9hZGVyT3B0aW9ucycpKHRoaXMucHJvcHMucm93SW5kZXgsIHtcbiAgICAgICAgY2VsbEluZGV4OiB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgICBjZWxsRmlyc3Q6IHRoaXMucHJvcHMuaW5kZXggPT09IDAsXG4gICAgICAgIGNlbGxMYXN0OiB0aGlzLnByb3BzLmluZGV4ID09PSB0aGlzLmdldFZpcnR1YWxTY3JvbGxlck9wdGlvbignY29sdW1ucycpLmxlbmd0aCAtIDEsXG4gICAgICAgIGNlbGxFdmVuOiB0aGlzLnByb3BzLmluZGV4ICUgMiA9PT0gMCxcbiAgICAgICAgY2VsbE9kZDogdGhpcy5wcm9wcy5pbmRleCAlIDIgIT09IDAsXG4gICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkXG4gICAgICB9KTtcbiAgICAgIHZhciBjb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLmdldFZpcnR1YWxTY3JvbGxlck9wdGlvbignbG9hZGluZ1RlbXBsYXRlJyksIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgY29udGVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRWxlbWVudCgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB2YXIgY29udGVudCwgZWRpdG9yS2V5SGVscGVyO1xuICAgICAgdmFyIGNlbGxTZWxlY3RlZCA9IHRoaXMucHJvcHMuYWxsb3dDZWxsU2VsZWN0aW9uICYmIHRoaXMuaXNTZWxlY3RlZCgpO1xuICAgICAgdmFyIGlzUm93RWRpdG9yID0gdGhpcy5wcm9wcy5lZGl0TW9kZSA9PT0gJ3Jvdyc7XG4gICAgICB2YXIgdGFiSW5kZXggPSB0aGlzLmdldFRhYkluZGV4KGNlbGxTZWxlY3RlZCk7XG4gICAgICB2YXIgc2VsZWN0aW9uTW9kZSA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnc2VsZWN0aW9uTW9kZScpO1xuICAgICAgdmFyIHJvd1Jlb3JkZXIgPSB0aGlzLmdldENvbHVtblByb3AoJ3Jvd1Jlb3JkZXInKTtcbiAgICAgIHZhciBleHBhbmRlciA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZXhwYW5kZXInKTtcbiAgICAgIHZhciByb3dFZGl0b3IgPSB0aGlzLmdldENvbHVtblByb3AoJ3Jvd0VkaXRvcicpO1xuICAgICAgdmFyIGhlYWRlciA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnaGVhZGVyJyk7XG4gICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnYm9keScpO1xuICAgICAgdmFyIGVkaXRvciA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZWRpdG9yJyk7XG4gICAgICB2YXIgZnJvemVuID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKTtcbiAgICAgIHZhciBhbGlnbiA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnYWxpZ24nKTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucmVzb2x2ZUZpZWxkRGF0YSgpO1xuICAgICAgdmFyIGNlbGxDbGFzc05hbWUgPSBPYmplY3RVdGlscy5nZXRQcm9wVmFsdWUodGhpcy5wcm9wcy5jZWxsQ2xhc3NOYW1lLCB2YWx1ZSwge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcy50YWJsZVByb3BzLFxuICAgICAgICByb3dEYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW5cbiAgICAgIH0pO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5nZXRDb2x1bW5Qcm9wKCdib2R5Q2xhc3NOYW1lJyksIHRoaXMuZ2V0Q29sdW1uUHJvcCgnY2xhc3NOYW1lJyksIGNlbGxDbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgICdwLXNlbGVjdGlvbi1jb2x1bW4nOiBzZWxlY3Rpb25Nb2RlICE9PSBudWxsLFxuICAgICAgICAncC1lZGl0YWJsZS1jb2x1bW4nOiBlZGl0b3IsXG4gICAgICAgICdwLWNlbGwtZWRpdGluZyc6IGVkaXRvciAmJiB0aGlzLnN0YXRlLmVkaXRpbmcsXG4gICAgICAgICdwLWZyb3plbi1jb2x1bW4nOiBmcm96ZW4sXG4gICAgICAgICdwLXNlbGVjdGFibGUtY2VsbCc6IHRoaXMucHJvcHMuYWxsb3dDZWxsU2VsZWN0aW9uICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmdldENlbGxQYXJhbXMoKSxcbiAgICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgJ3AtaGlnaGxpZ2h0JzogY2VsbFNlbGVjdGVkXG4gICAgICB9LCBcInAtYWxpZ24tXCIuY29uY2F0KGFsaWduKSwgISFhbGlnbikpO1xuICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgdmFyIHRpdGxlID0gdGhpcy5wcm9wcy5yZXNwb25zaXZlTGF5b3V0ID09PSAnc3RhY2snICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi10aXRsZVwiXG4gICAgICB9LCBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KGhlYWRlciwge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcy50YWJsZVByb3BzXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChzZWxlY3Rpb25Nb2RlKSB7XG4gICAgICAgIHZhciBzaG93U2VsZWN0aW9uID0gdGhpcy5wcm9wcy5zaG93U2VsZWN0aW9uRWxlbWVudCA/IHRoaXMucHJvcHMuc2hvd1NlbGVjdGlvbkVsZW1lbnQodGhpcy5wcm9wcy5yb3dEYXRhLCB7XG4gICAgICAgICAgcm93SW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXgsXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wc1xuICAgICAgICB9KSA6IHRydWU7XG4gICAgICAgIGNvbnRlbnQgPSBzaG93U2VsZWN0aW9uICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBzZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3dSYWRpb0J1dHRvbiwge1xuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWQsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25SYWRpb0NoYW5nZSxcbiAgICAgICAgICB0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcbiAgICAgICAgICB0YWJsZVNlbGVjdG9yOiB0aGlzLnByb3BzLnRhYmxlU2VsZWN0b3JcbiAgICAgICAgfSksIHNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm93Q2hlY2tib3gsIHtcbiAgICAgICAgICBjaGVja2VkOiB0aGlzLnByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hlY2tib3hDaGFuZ2UsXG4gICAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXhcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmIChyb3dSZW9yZGVyKSB7XG4gICAgICAgIHZhciBzaG93UmVvcmRlciA9IHRoaXMucHJvcHMuc2hvd1Jvd1Jlb3JkZXJFbGVtZW50ID8gdGhpcy5wcm9wcy5zaG93Um93UmVvcmRlckVsZW1lbnQodGhpcy5wcm9wcy5yb3dEYXRhLCB7XG4gICAgICAgICAgcm93SW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXgsXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wc1xuICAgICAgICB9KSA6IHRydWU7XG4gICAgICAgIGNvbnRlbnQgPSBzaG93UmVvcmRlciAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcygncC1kYXRhdGFibGUtcmVvcmRlcmFibGVyb3ctaGFuZGxlJywgdGhpcy5nZXRDb2x1bW5Qcm9wKCdyb3dSZW9yZGVySWNvbicpKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXhwYW5kZXIpIHtcbiAgICAgICAgdmFyIGljb25DbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLXJvdy10b2dnbGVyLWljb24nLCB0aGlzLnByb3BzLmV4cGFuZGVkID8gdGhpcy5wcm9wcy5leHBhbmRlZFJvd0ljb24gOiB0aGlzLnByb3BzLmNvbGxhcHNlZFJvd0ljb24pO1xuICAgICAgICB2YXIgYXJpYUNvbnRyb2xzID0gXCJcIi5jb25jYXQodGhpcy5wcm9wcy50YWJsZVNlbGVjdG9yLCBcIl9jb250ZW50X1wiKS5jb25jYXQodGhpcy5wcm9wcy5yb3dJbmRleCwgXCJfZXhwYW5kZWRcIik7XG4gICAgICAgIHZhciBleHBhbmRlclByb3BzID0ge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25Sb3dUb2dnbGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiAncC1yb3ctdG9nZ2xlciBwLWxpbmsnLFxuICAgICAgICAgIGljb25DbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgICAgICAgfTtcbiAgICAgICAgY29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGV4cGFuZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIG9uQ2xpY2s6IGV4cGFuZGVyUHJvcHMub25DbGljayxcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLnByb3BzLmV4cGFuZGVkLFxuICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMsXG4gICAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXhcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGV4cGFuZGVyUHJvcHMuaWNvbkNsYXNzTmFtZVxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmlwcGxlLCBudWxsKSk7XG5cbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICBleHBhbmRlclByb3BzWydlbGVtZW50J10gPSBjb250ZW50O1xuICAgICAgICAgIGNvbnRlbnQgPSBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KGJvZHksIHRoaXMucHJvcHMucm93RGF0YSwge1xuICAgICAgICAgICAgY29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcbiAgICAgICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICAgICAgcm93SW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXgsXG4gICAgICAgICAgICBmcm96ZW5Sb3c6IHRoaXMucHJvcHMuZnJvemVuUm93LFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZGVyOiBleHBhbmRlclByb3BzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNSb3dFZGl0b3IgJiYgcm93RWRpdG9yKSB7XG4gICAgICAgIHZhciByb3dFZGl0b3JQcm9wcyA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRpbmcpIHtcbiAgICAgICAgICByb3dFZGl0b3JQcm9wcyA9IHtcbiAgICAgICAgICAgIGVkaXRpbmc6IHRydWUsXG4gICAgICAgICAgICBvblNhdmVDbGljazogdGhpcy5vblJvd0VkaXRTYXZlLFxuICAgICAgICAgICAgc2F2ZUNsYXNzTmFtZTogJ3Atcm93LWVkaXRvci1zYXZlIHAtbGluaycsXG4gICAgICAgICAgICBzYXZlSWNvbkNsYXNzTmFtZTogJ3Atcm93LWVkaXRvci1zYXZlLWljb24gcGkgcGktZncgcGktY2hlY2snLFxuICAgICAgICAgICAgb25DYW5jZWxDbGljazogdGhpcy5vblJvd0VkaXRDYW5jZWwsXG4gICAgICAgICAgICBjYW5jZWxDbGFzc05hbWU6ICdwLXJvdy1lZGl0b3ItY2FuY2VsIHAtbGluaycsXG4gICAgICAgICAgICBjYW5jZWxJY29uQ2xhc3NOYW1lOiAncC1yb3ctZWRpdG9yLWNhbmNlbC1pY29uIHBpIHBpLWZ3IHBpLXRpbWVzJ1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgb25DbGljazogcm93RWRpdG9yUHJvcHMub25TYXZlQ2xpY2ssXG4gICAgICAgICAgICBjbGFzc05hbWU6IHJvd0VkaXRvclByb3BzLnNhdmVDbGFzc05hbWUsXG4gICAgICAgICAgICB0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleFxuICAgICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHJvd0VkaXRvclByb3BzLnNhdmVJY29uQ2xhc3NOYW1lXG4gICAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJpcHBsZSwgbnVsbCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgb25DbGljazogcm93RWRpdG9yUHJvcHMub25DYW5jZWxDbGljayxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcm93RWRpdG9yUHJvcHMuY2FuY2VsQ2xhc3NOYW1lLFxuICAgICAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXhcbiAgICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiByb3dFZGl0b3JQcm9wcy5jYW5jZWxJY29uQ2xhc3NOYW1lXG4gICAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJpcHBsZSwgbnVsbCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dFZGl0b3JQcm9wcyA9IHtcbiAgICAgICAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgb25Jbml0Q2xpY2s6IHRoaXMub25Sb3dFZGl0SW5pdCxcbiAgICAgICAgICAgIGluaXRDbGFzc05hbWU6ICdwLXJvdy1lZGl0b3ItaW5pdCBwLWxpbmsnLFxuICAgICAgICAgICAgaW5pdEljb25DbGFzc05hbWU6ICdwLXJvdy1lZGl0b3ItaW5pdC1pY29uIHBpIHBpLWZ3IHBpLXBlbmNpbCdcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgb25DbGljazogcm93RWRpdG9yUHJvcHMub25Jbml0Q2xpY2ssXG4gICAgICAgICAgICBjbGFzc05hbWU6IHJvd0VkaXRvclByb3BzLmluaXRDbGFzc05hbWUsXG4gICAgICAgICAgICB0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleFxuICAgICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHJvd0VkaXRvclByb3BzLmluaXRJY29uQ2xhc3NOYW1lXG4gICAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJpcHBsZSwgbnVsbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICByb3dFZGl0b3JQcm9wc1snZWxlbWVudCddID0gY29udGVudDtcbiAgICAgICAgICBjb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudChib2R5LCB0aGlzLnByb3BzLnJvd0RhdGEsIHtcbiAgICAgICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgICAgIHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuICAgICAgICAgICAgZnJvemVuUm93OiB0aGlzLnByb3BzLmZyb3plblJvdyxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLnRhYmxlUHJvcHMsXG4gICAgICAgICAgICByb3dFZGl0b3I6IHJvd0VkaXRvclByb3BzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYm9keSAmJiAhdGhpcy5zdGF0ZS5lZGl0aW5nKSB7XG4gICAgICAgIGNvbnRlbnQgPSBib2R5ID8gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudChib2R5LCB0aGlzLnByb3BzLnJvd0RhdGEsIHtcbiAgICAgICAgICBjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICAgIHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuICAgICAgICAgIGZyb3plblJvdzogdGhpcy5wcm9wcy5mcm96ZW5Sb3csXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wc1xuICAgICAgICB9KSA6IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChlZGl0b3IgJiYgdGhpcy5zdGF0ZS5lZGl0aW5nKSB7XG4gICAgICAgIGNvbnRlbnQgPSBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KGVkaXRvciwge1xuICAgICAgICAgIHJvd0RhdGE6IHRoaXMuc3RhdGUuZWRpdGluZ1Jvd0RhdGEsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucmVzb2x2ZUZpZWxkRGF0YSh0aGlzLnN0YXRlLmVkaXRpbmdSb3dEYXRhKSxcbiAgICAgICAgICBjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICAgIHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuICAgICAgICAgIGZyb3plblJvdzogdGhpcy5wcm9wcy5mcm96ZW5Sb3csXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wcyxcbiAgICAgICAgICBlZGl0b3JDYWxsYmFjazogdGhpcy5lZGl0b3JDYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1Jvd0VkaXRvciAmJiBlZGl0b3IpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgZWRpdG9yS2V5SGVscGVyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgICAgICB0YWJJbmRleDogXCIwXCIsXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczgua2V5SGVscGVyID0gZWw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1jZWxsLWVkaXRvci1rZXktaGVscGVyIHAtaGlkZGVuLWFjY2Vzc2libGVcIixcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRWRpdG9yRm9jdXNcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwpKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzOC5lbCA9IGVsO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByb3dTcGFuOiB0aGlzLnByb3BzLnJvd1NwYW4sXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgcm9sZTogXCJjZWxsXCIsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXBcbiAgICAgIH0sIGVkaXRvcktleUhlbHBlciwgdGl0bGUsIGNvbnRlbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmlydHVhbFNjcm9sbGVyT3B0aW9uKCdsb2FkaW5nJykgPyB0aGlzLnJlbmRlckxvYWRpbmcoKSA6IHRoaXMucmVuZGVyRWxlbWVudCgpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZWRpdE1vZGUgPT09ICdyb3cnICYmIG5leHRQcm9wcy5lZGl0aW5nICE9PSBwcmV2U3RhdGUuZWRpdGluZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVkaXRpbmc6IG5leHRQcm9wcy5lZGl0aW5nXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCb2R5Q2VsbDtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gb3duS2V5cyQ2KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDYodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkNihPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDYoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkOShEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ5KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ5KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBCb2R5Um93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhCb2R5Um93LCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDkoQm9keVJvdyk7XG5cbiAgZnVuY3Rpb24gQm9keVJvdyhwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb2R5Um93KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgaWYgKCFfdGhpcy5wcm9wcy5vblJvd0VkaXRDaGFuZ2UpIHtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBlZGl0aW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkRvdWJsZUNsaWNrID0gX3RoaXMub25Eb3VibGVDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vblJpZ2h0Q2xpY2sgPSBfdGhpcy5vblJpZ2h0Q2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Ub3VjaEVuZCA9IF90aGlzLm9uVG91Y2hFbmQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25LZXlEb3duID0gX3RoaXMub25LZXlEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uTW91c2VEb3duID0gX3RoaXMub25Nb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRHJhZ1N0YXJ0ID0gX3RoaXMub25EcmFnU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25EcmFnRW5kID0gX3RoaXMub25EcmFnRW5kLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRHJhZ092ZXIgPSBfdGhpcy5vbkRyYWdPdmVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRHJhZ0xlYXZlID0gX3RoaXMub25EcmFnTGVhdmUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Ecm9wID0gX3RoaXMub25Ecm9wLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRWRpdEluaXQgPSBfdGhpcy5vbkVkaXRJbml0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRWRpdFNhdmUgPSBfdGhpcy5vbkVkaXRTYXZlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRWRpdENhbmNlbCA9IF90aGlzLm9uRWRpdENhbmNlbC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQm9keVJvdywgW3tcbiAgICBrZXk6IFwiaXNGb2N1c2FibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNGb2N1c2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZUluQ29sdW1uICE9PSAnc2luZ2xlJyAmJiB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGVJbkNvbHVtbiAhPT0gJ211bHRpcGxlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNHcm91cGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzR3JvdXBlZChjb2x1bW4pIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmdyb3VwUm93c0J5ICYmIHRoaXMuZ2V0Q29sdW1uUHJvcChjb2x1bW4sICdmaWVsZCcpKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZ3JvdXBSb3dzQnkpKSByZXR1cm4gdGhpcy5wcm9wcy5ncm91cFJvd3NCeS5pbmRleE9mKGNvbHVtbi5wcm9wcy5maWVsZCkgPiAtMTtlbHNlIHJldHVybiB0aGlzLnByb3BzLmdyb3VwUm93c0J5ID09PSBjb2x1bW4ucHJvcHMuZmllbGQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhkYXRhMSwgZGF0YTIpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbXBhcmVTZWxlY3Rpb25CeSA9PT0gJ2VxdWFscycgPyBkYXRhMSA9PT0gZGF0YTIgOiBPYmplY3RVdGlscy5lcXVhbHMoZGF0YTEsIGRhdGEyLCB0aGlzLnByb3BzLmRhdGFLZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDb2x1bW5Qcm9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbHVtblByb3AoY29sLCBwcm9wKSB7XG4gICAgICByZXR1cm4gY29sID8gY29sLnByb3BzW3Byb3BdIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWRpdGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFZGl0aW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25Sb3dFZGl0Q2hhbmdlID8gdGhpcy5wcm9wcy5lZGl0aW5nIDogdGhpcy5zdGF0ZS5lZGl0aW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRUYWJJbmRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRm9jdXNhYmxlKCkgJiYgIXRoaXMucHJvcHMuYWxsb3dDZWxsU2VsZWN0aW9uID8gdGhpcy5wcm9wcy5pbmRleCA9PT0gMCA/IHRoaXMucHJvcHMudGFiSW5kZXggOiAtMSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRJbmRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kSW5kZXgoY29sbGVjdGlvbiwgcm93RGF0YSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiAoY29sbGVjdGlvbiB8fCBbXSkuZmluZEluZGV4KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuZXF1YWxzKHJvd0RhdGEsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoYW5nZVRhYkluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVRhYkluZGV4KGN1cnJlbnRSb3csIG5leHRSb3cpIHtcbiAgICAgIGlmIChjdXJyZW50Um93ICYmIG5leHRSb3cpIHtcbiAgICAgICAgY3VycmVudFJvdy50YWJJbmRleCA9IC0xO1xuICAgICAgICBuZXh0Um93LnRhYkluZGV4ID0gdGhpcy5wcm9wcy50YWJJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZE5leHRTZWxlY3RhYmxlUm93XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmROZXh0U2VsZWN0YWJsZVJvdyhyb3cpIHtcbiAgICAgIHZhciBuZXh0Um93ID0gcm93Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHJldHVybiBuZXh0Um93ID8gRG9tSGFuZGxlci5oYXNDbGFzcyhuZXh0Um93LCAncC1zZWxlY3RhYmxlLXJvdycpID8gbmV4dFJvdyA6IHRoaXMuZmluZE5leHRTZWxlY3RhYmxlUm93KG5leHRSb3cpIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFByZXZTZWxlY3RhYmxlUm93XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRQcmV2U2VsZWN0YWJsZVJvdyhyb3cpIHtcbiAgICAgIHZhciBwcmV2Um93ID0gcm93LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICByZXR1cm4gcHJldlJvdyA/IERvbUhhbmRsZXIuaGFzQ2xhc3MocHJldlJvdywgJ3Atc2VsZWN0YWJsZS1yb3cnKSA/IHByZXZSb3cgOiB0aGlzLmZpbmRQcmV2U2VsZWN0YWJsZVJvdyhwcmV2Um93KSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZFJlbmRlckJvZHlDZWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFJlbmRlckJvZHlDZWxsKHZhbHVlLCBjb2x1bW4sIGkpIHtcbiAgICAgIGlmICh0aGlzLmdldENvbHVtblByb3AoY29sdW1uLCAnaGlkZGVuJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvd0dyb3VwTW9kZSAmJiB0aGlzLnByb3BzLnJvd0dyb3VwTW9kZSA9PT0gJ3Jvd3NwYW4nICYmIHRoaXMuaXNHcm91cGVkKGNvbHVtbikpIHtcbiAgICAgICAgdmFyIHByZXZSb3dEYXRhID0gdmFsdWVbaSAtIDFdO1xuXG4gICAgICAgIGlmIChwcmV2Um93RGF0YSkge1xuICAgICAgICAgIHZhciBjdXJyZW50Um93RmllbGREYXRhID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YSh2YWx1ZVtpXSwgdGhpcy5nZXRDb2x1bW5Qcm9wKGNvbHVtbiwgJ2ZpZWxkJykpO1xuICAgICAgICAgIHZhciBwcmV2aW91c1Jvd0ZpZWxkRGF0YSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocHJldlJvd0RhdGEsIHRoaXMuZ2V0Q29sdW1uUHJvcChjb2x1bW4sICdmaWVsZCcpKTtcbiAgICAgICAgICByZXR1cm4gY3VycmVudFJvd0ZpZWxkRGF0YSAhPT0gcHJldmlvdXNSb3dGaWVsZERhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbGN1bGF0ZVJvd0dyb3VwU2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjdWxhdGVSb3dHcm91cFNpemUodmFsdWUsIGNvbHVtbiwgaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLmlzR3JvdXBlZChjb2x1bW4pKSB7XG4gICAgICAgIHZhciBjdXJyZW50Um93RmllbGREYXRhID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YSh2YWx1ZVtpbmRleF0sIHRoaXMuZ2V0Q29sdW1uUHJvcChjb2x1bW4sICdmaWVsZCcpKTtcbiAgICAgICAgdmFyIG5leHRSb3dGaWVsZERhdGEgPSBjdXJyZW50Um93RmllbGREYXRhO1xuICAgICAgICB2YXIgZ3JvdXBSb3dTcGFuID0gMDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudFJvd0ZpZWxkRGF0YSA9PT0gbmV4dFJvd0ZpZWxkRGF0YSkge1xuICAgICAgICAgIGdyb3VwUm93U3BhbisrO1xuICAgICAgICAgIHZhciBuZXh0Um93RGF0YSA9IHZhbHVlWysraW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG5leHRSb3dEYXRhKSB7XG4gICAgICAgICAgICBuZXh0Um93RmllbGREYXRhID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShuZXh0Um93RGF0YSwgdGhpcy5nZXRDb2x1bW5Qcm9wKGNvbHVtbiwgJ2ZpZWxkJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBSb3dTcGFuID09PSAxID8gbnVsbCA6IGdyb3VwUm93U3BhbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dDbGljayh7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Eb3VibGVDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93RG91YmxlQ2xpY2soe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5yb3dEYXRhLFxuICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUmlnaHRDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJpZ2h0Q2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dSaWdodENsaWNrKHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblRvdWNoRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dUb3VjaEVuZChldmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5RG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmlzRm9jdXNhYmxlKCkgJiYgIXRoaXMucHJvcHMuYWxsb3dDZWxsU2VsZWN0aW9uKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICByb3cgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAvL2Rvd24gYXJyb3dcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgdmFyIG5leHRSb3cgPSB0aGlzLmZpbmROZXh0U2VsZWN0YWJsZVJvdyhyb3cpO1xuXG4gICAgICAgICAgICBpZiAobmV4dFJvdykge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRhYkluZGV4KHJvdywgbmV4dFJvdyk7XG4gICAgICAgICAgICAgIG5leHRSb3cuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vdXAgYXJyb3dcblxuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICB2YXIgcHJldlJvdyA9IHRoaXMuZmluZFByZXZTZWxlY3RhYmxlUm93KHJvdyk7XG5cbiAgICAgICAgICAgIGlmIChwcmV2Um93KSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiSW5kZXgocm93LCBwcmV2Um93KTtcbiAgICAgICAgICAgICAgcHJldlJvdy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy9lbnRlclxuXG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIC8vIEBkZXByZWNhdGVkXG4gICAgICAgICAgICBpZiAoIURvbUhhbmRsZXIuaXNDbGlja2FibGUodGFyZ2V0KSkge1xuICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvL3NwYWNlXG5cbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgaWYgKCFEb21IYW5kbGVyLmlzQ2xpY2thYmxlKHRhcmdldCkgJiYgIXRhcmdldC5yZWFkT25seSkge1xuICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdXNlRG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJvd01vdXNlRG93bih7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Nb3VzZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VVcChldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJvd01vdXNlVXAoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5yb3dEYXRhLFxuICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uRHJhZ1N0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93RHJhZ1N0YXJ0KHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkRyYWdPdmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dEcmFnT3Zlcih7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25EcmFnTGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dEcmFnTGVhdmUoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5yb3dEYXRhLFxuICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uRHJhZ0VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdFbmQoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dEcmFnRW5kKHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Ecm9wKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93RHJvcCh7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25FZGl0Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRWRpdENoYW5nZShlLCBlZGl0aW5nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0VkaXRDaGFuZ2UpIHtcbiAgICAgICAgdmFyIGVkaXRpbmdSb3dzO1xuICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXMucHJvcHMuZGF0YUtleTtcbiAgICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkYXRhID0gZS5kYXRhLFxuICAgICAgICAgICAgaW5kZXggPSBlLmluZGV4O1xuXG4gICAgICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICAgICAgdmFyIGRhdGFLZXlWYWx1ZSA9IFN0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGEsIGRhdGFLZXkpKTtcbiAgICAgICAgICBlZGl0aW5nUm93cyA9IHRoaXMucHJvcHMuZWRpdGluZ1Jvd3MgPyBfb2JqZWN0U3ByZWFkJDYoe30sIHRoaXMucHJvcHMuZWRpdGluZ1Jvd3MpIDoge307XG4gICAgICAgICAgaWYgKGVkaXRpbmdSb3dzW2RhdGFLZXlWYWx1ZV0gIT0gbnVsbCkgZGVsZXRlIGVkaXRpbmdSb3dzW2RhdGFLZXlWYWx1ZV07ZWxzZSBlZGl0aW5nUm93c1tkYXRhS2V5VmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZWRpdGluZ1Jvd0luZGV4ID0gdGhpcy5maW5kSW5kZXgodGhpcy5wcm9wcy5lZGl0aW5nUm93cywgZGF0YSk7XG4gICAgICAgICAgZWRpdGluZ1Jvd3MgPSB0aGlzLnByb3BzLmVkaXRpbmdSb3dzID8gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMucHJvcHMuZWRpdGluZ1Jvd3MpIDogW107XG4gICAgICAgICAgaWYgKGVkaXRpbmdSb3dJbmRleCAhPT0gLTEpIGVkaXRpbmdSb3dzID0gZWRpdGluZ1Jvd3MuZmlsdGVyKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICE9PSBlZGl0aW5nUm93SW5kZXg7XG4gICAgICAgICAgfSk7ZWxzZSBlZGl0aW5nUm93cy5wdXNoKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vblJvd0VkaXRDaGFuZ2Uoe1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgZGF0YTogZWRpdGluZ1Jvd3MsXG4gICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZWRpdGluZzogZWRpdGluZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25FZGl0SW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVkaXRJbml0KGUpIHtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dFZGl0SW5pdCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUm93RWRpdEluaXQoe1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkVkaXRDaGFuZ2UoZSwgdHJ1ZSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkVkaXRTYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRWRpdFNhdmUoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgdmFyIHZhbGlkID0gdGhpcy5wcm9wcy5yb3dFZGl0VmFsaWRhdG9yID8gdGhpcy5wcm9wcy5yb3dFZGl0VmFsaWRhdG9yKHRoaXMucHJvcHMucm93RGF0YSwge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcy50YWJsZVByb3BzXG4gICAgICB9KSA6IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93RWRpdFNhdmUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvd0VkaXRTYXZlKHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICAgICAgdmFsaWQ6IHZhbGlkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dFZGl0Q29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUm93RWRpdENvbXBsZXRlKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkVkaXRDaGFuZ2UoZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkVkaXRDYW5jZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25FZGl0Q2FuY2VsKGUpIHtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dFZGl0Q2FuY2VsKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Sb3dFZGl0Q2FuY2VsKHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLnJvd0RhdGEsXG4gICAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25FZGl0Q2hhbmdlKGUsIGZhbHNlKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNvbnRlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sLCBpKSB7XG4gICAgICAgIGlmIChfdGhpczMuc2hvdWxkUmVuZGVyQm9keUNlbGwoX3RoaXMzLnByb3BzLnZhbHVlLCBjb2wsIF90aGlzMy5wcm9wcy5pbmRleCkpIHtcbiAgICAgICAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoX3RoaXMzLmdldENvbHVtblByb3AoY29sLCAnY29sdW1uS2V5JykgfHwgX3RoaXMzLmdldENvbHVtblByb3AoY29sLCAnZmllbGQnKSwgXCJfXCIpLmNvbmNhdChpKTtcbiAgICAgICAgICB2YXIgcm93U3BhbiA9IF90aGlzMy5wcm9wcy5yb3dHcm91cE1vZGUgPT09ICdyb3dzcGFuJyA/IF90aGlzMy5jYWxjdWxhdGVSb3dHcm91cFNpemUoX3RoaXMzLnByb3BzLnZhbHVlLCBjb2wsIF90aGlzMy5wcm9wcy5pbmRleCkgOiBudWxsO1xuXG4gICAgICAgICAgdmFyIGVkaXRpbmcgPSBfdGhpczMuZ2V0RWRpdGluZygpO1xuXG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDZWxsLCB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiBfdGhpczMucHJvcHMudmFsdWUsXG4gICAgICAgICAgICB0YWJsZVByb3BzOiBfdGhpczMucHJvcHMudGFibGVQcm9wcyxcbiAgICAgICAgICAgIHRhYmxlU2VsZWN0b3I6IF90aGlzMy5wcm9wcy50YWJsZVNlbGVjdG9yLFxuICAgICAgICAgICAgY29sdW1uOiBjb2wsXG4gICAgICAgICAgICByb3dEYXRhOiBfdGhpczMucHJvcHMucm93RGF0YSxcbiAgICAgICAgICAgIHJvd0luZGV4OiBfdGhpczMucHJvcHMuaW5kZXgsXG4gICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgIHJvd1NwYW46IHJvd1NwYW4sXG4gICAgICAgICAgICBkYXRhS2V5OiBfdGhpczMucHJvcHMuZGF0YUtleSxcbiAgICAgICAgICAgIGVkaXRpbmc6IGVkaXRpbmcsXG4gICAgICAgICAgICBlZGl0aW5nTWV0YTogX3RoaXMzLnByb3BzLmVkaXRpbmdNZXRhLFxuICAgICAgICAgICAgZWRpdE1vZGU6IF90aGlzMy5wcm9wcy5lZGl0TW9kZSxcbiAgICAgICAgICAgIG9uUm93RWRpdEluaXQ6IF90aGlzMy5vbkVkaXRJbml0LFxuICAgICAgICAgICAgb25Sb3dFZGl0U2F2ZTogX3RoaXMzLm9uRWRpdFNhdmUsXG4gICAgICAgICAgICBvblJvd0VkaXRDYW5jZWw6IF90aGlzMy5vbkVkaXRDYW5jZWwsXG4gICAgICAgICAgICBvbkVkaXRpbmdNZXRhQ2hhbmdlOiBfdGhpczMucHJvcHMub25FZGl0aW5nTWV0YUNoYW5nZSxcbiAgICAgICAgICAgIG9uUm93VG9nZ2xlOiBfdGhpczMucHJvcHMub25Sb3dUb2dnbGUsXG4gICAgICAgICAgICBzZWxlY3Rpb246IF90aGlzMy5wcm9wcy5zZWxlY3Rpb24sXG4gICAgICAgICAgICBhbGxvd0NlbGxTZWxlY3Rpb246IF90aGlzMy5wcm9wcy5hbGxvd0NlbGxTZWxlY3Rpb24sXG4gICAgICAgICAgICBjb21wYXJlU2VsZWN0aW9uQnk6IF90aGlzMy5wcm9wcy5jb21wYXJlU2VsZWN0aW9uQnksXG4gICAgICAgICAgICBzZWxlY3RPbkVkaXQ6IF90aGlzMy5wcm9wcy5zZWxlY3RPbkVkaXQsXG4gICAgICAgICAgICBzZWxlY3RlZDogX3RoaXMzLnByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgb25DbGljazogX3RoaXMzLnByb3BzLm9uQ2VsbENsaWNrLFxuICAgICAgICAgICAgb25Nb3VzZURvd246IF90aGlzMy5wcm9wcy5vbkNlbGxNb3VzZURvd24sXG4gICAgICAgICAgICBvbk1vdXNlVXA6IF90aGlzMy5wcm9wcy5vbkNlbGxNb3VzZVVwLFxuICAgICAgICAgICAgdGFiSW5kZXg6IF90aGlzMy5wcm9wcy50YWJJbmRleCxcbiAgICAgICAgICAgIGNlbGxDbGFzc05hbWU6IF90aGlzMy5wcm9wcy5jZWxsQ2xhc3NOYW1lLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZUxheW91dDogX3RoaXMzLnByb3BzLnJlc3BvbnNpdmVMYXlvdXQsXG4gICAgICAgICAgICBmcm96ZW5Sb3c6IF90aGlzMy5wcm9wcy5mcm96ZW5Sb3csXG4gICAgICAgICAgICBpc1NlbGVjdGFibGU6IF90aGlzMy5wcm9wcy5pc1NlbGVjdGFibGUsXG4gICAgICAgICAgICBzaG93U2VsZWN0aW9uRWxlbWVudDogX3RoaXMzLnByb3BzLnNob3dTZWxlY3Rpb25FbGVtZW50LFxuICAgICAgICAgICAgc2hvd1Jvd1Jlb3JkZXJFbGVtZW50OiBfdGhpczMucHJvcHMuc2hvd1Jvd1Jlb3JkZXJFbGVtZW50LFxuICAgICAgICAgICAgb25SYWRpb0NoYW5nZTogX3RoaXMzLnByb3BzLm9uUmFkaW9DaGFuZ2UsXG4gICAgICAgICAgICBvbkNoZWNrYm94Q2hhbmdlOiBfdGhpczMucHJvcHMub25DaGVja2JveENoYW5nZSxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBfdGhpczMucHJvcHMuZXhwYW5kZWQsXG4gICAgICAgICAgICBleHBhbmRlZFJvd0ljb246IF90aGlzMy5wcm9wcy5leHBhbmRlZFJvd0ljb24sXG4gICAgICAgICAgICBjb2xsYXBzZWRSb3dJY29uOiBfdGhpczMucHJvcHMuY29sbGFwc2VkUm93SWNvbixcbiAgICAgICAgICAgIHZpcnR1YWxTY3JvbGxlck9wdGlvbnM6IF90aGlzMy5wcm9wcy52aXJ0dWFsU2Nyb2xsZXJPcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciByb3dDbGFzc05hbWUgPSBPYmplY3RVdGlscy5nZXRQcm9wVmFsdWUodGhpcy5wcm9wcy5yb3dDbGFzc05hbWUsIHRoaXMucHJvcHMucm93RGF0YSwge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcy50YWJsZVByb3BzXG4gICAgICB9KTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHJvd0NsYXNzTmFtZSwge1xuICAgICAgICAncC1oaWdobGlnaHQnOiAhdGhpcy5wcm9wcy5hbGxvd0NlbGxTZWxlY3Rpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgJ3AtaGlnaGxpZ2h0LWNvbnRleHRtZW51JzogdGhpcy5wcm9wcy5jb250ZXh0TWVudVNlbGVjdGVkLFxuICAgICAgICAncC1zZWxlY3RhYmxlLXJvdyc6IHRoaXMucHJvcHMuYWxsb3dSb3dTZWxlY3Rpb24gJiYgdGhpcy5wcm9wcy5pc1NlbGVjdGFibGUoe1xuICAgICAgICAgIGRhdGE6IHRoaXMucHJvcHMucm93RGF0YSxcbiAgICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgJ3Atcm93LW9kZCc6IHRoaXMucHJvcHMuaW5kZXggJSAyICE9PSAwXG4gICAgICB9KTtcbiAgICAgIHZhciBjb250ZW50ID0gdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgICB2YXIgdGFiSW5kZXggPSB0aGlzLmdldFRhYkluZGV4KCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5lbCA9IGVsO1xuICAgICAgICB9LFxuICAgICAgICByb2xlOiBcInJvd1wiLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbk1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICBvbkRvdWJsZUNsaWNrOiB0aGlzLm9uRG91YmxlQ2xpY2ssXG4gICAgICAgIG9uQ29udGV4dE1lbnU6IHRoaXMub25SaWdodENsaWNrLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uVG91Y2hFbmQsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIG9uRHJhZ1N0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWdPdmVyOiB0aGlzLm9uRHJhZ092ZXIsXG4gICAgICAgIG9uRHJhZ0xlYXZlOiB0aGlzLm9uRHJhZ0xlYXZlLFxuICAgICAgICBvbkRyYWdFbmQ6IHRoaXMub25EcmFnRW5kLFxuICAgICAgICBvbkRyb3A6IHRoaXMub25Ecm9wXG4gICAgICB9LCBjb250ZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQm9keVJvdztcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDgoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkOCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkOCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgUm93VG9nZ2xlckJ1dHRvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm93VG9nZ2xlckJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQ4KFJvd1RvZ2dsZXJCdXR0b24pO1xuXG4gIGZ1bmN0aW9uIFJvd1RvZ2dsZXJCdXR0b24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm93VG9nZ2xlckJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm93VG9nZ2xlckJ1dHRvbiwgW3tcbiAgICBrZXk6IFwib25DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5yb3dEYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpY29uQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1yb3ctdG9nZ2xlci1pY29uJywgdGhpcy5wcm9wcy5leHBhbmRlZCA/IHRoaXMucHJvcHMuZXhwYW5kZWRSb3dJY29uIDogdGhpcy5wcm9wcy5jb2xsYXBzZWRSb3dJY29uKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgY2xhc3NOYW1lOiBcInAtcm93LXRvZ2dsZXIgcC1saW5rXCIsXG4gICAgICAgIHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSaXBwbGUsIG51bGwpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm93VG9nZ2xlckJ1dHRvbjtcbn0oQ29tcG9uZW50KTtcblxudmFyIF9leGNsdWRlZCA9IFtcIm9yaWdpbmFsRXZlbnRcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkNShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ1KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDUoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDcoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNygpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNygpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgVGFibGVCb2R5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUYWJsZUJvZHksIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkNyhUYWJsZUJvZHkpO1xuXG4gIGZ1bmN0aW9uIFRhYmxlQm9keShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZUJvZHkpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICByb3dHcm91cEhlYWRlclN0eWxlT2JqZWN0OiB7fVxuICAgIH07IC8vIHJvd1xuXG4gICAgX3RoaXMub25Sb3dDbGljayA9IF90aGlzLm9uUm93Q2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dEb3VibGVDbGljayA9IF90aGlzLm9uUm93RG91YmxlQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dSaWdodENsaWNrID0gX3RoaXMub25Sb3dSaWdodENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uUm93VG91Y2hFbmQgPSBfdGhpcy5vblJvd1RvdWNoRW5kLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uUm93TW91c2VEb3duID0gX3RoaXMub25Sb3dNb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dNb3VzZVVwID0gX3RoaXMub25Sb3dNb3VzZVVwLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uUm93VG9nZ2xlID0gX3RoaXMub25Sb3dUb2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7IC8vIGRyYWdcblxuICAgIF90aGlzLm9uUm93RHJhZ1N0YXJ0ID0gX3RoaXMub25Sb3dEcmFnU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dEcmFnT3ZlciA9IF90aGlzLm9uUm93RHJhZ092ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dEcmFnTGVhdmUgPSBfdGhpcy5vblJvd0RyYWdMZWF2ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vblJvd0RyYWdFbmQgPSBfdGhpcy5vblJvd0RyYWdFbmQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dEcm9wID0gX3RoaXMub25Sb3dEcm9wLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBzZWxlY3Rpb25cblxuICAgIF90aGlzLm9uUmFkaW9DaGFuZ2UgPSBfdGhpcy5vblJhZGlvQ2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2hlY2tib3hDaGFuZ2UgPSBfdGhpcy5vbkNoZWNrYm94Q2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRHJhZ1NlbGVjdGlvbk1vdXNlTW92ZSA9IF90aGlzLm9uRHJhZ1NlbGVjdGlvbk1vdXNlTW92ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkRyYWdTZWxlY3Rpb25Nb3VzZVVwID0gX3RoaXMub25EcmFnU2VsZWN0aW9uTW91c2VVcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5pc1NlbGVjdGFibGUgPSBfdGhpcy5pc1NlbGVjdGFibGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7IC8vIGNlbGxcblxuICAgIF90aGlzLm9uQ2VsbENsaWNrID0gX3RoaXMub25DZWxsQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25DZWxsTW91c2VEb3duID0gX3RoaXMub25DZWxsTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2VsbE1vdXNlVXAgPSBfdGhpcy5vbkNlbGxNb3VzZVVwLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlZiA9IF90aGlzLnJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGFibGVCb2R5LCBbe1xuICAgIGtleTogXCJyZWZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICB0aGlzLmVsID0gZWw7XG4gICAgICB0aGlzLnByb3BzLnZpcnR1YWxTY3JvbGxlckNvbnRlbnRSZWYgJiYgdGhpcy5wcm9wcy52aXJ0dWFsU2Nyb2xsZXJDb250ZW50UmVmKGVsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVxdWFscyhkYXRhMSwgZGF0YTIpIHtcbiAgICAgIGlmICh0aGlzLmFsbG93Q2VsbFNlbGVjdGlvbigpKSByZXR1cm4gKGRhdGExLnJvd0luZGV4ID09PSBkYXRhMi5yb3dJbmRleCB8fCBkYXRhMS5yb3dEYXRhID09PSBkYXRhMi5yb3dEYXRhKSAmJiAoZGF0YTEuZmllbGQgPT09IGRhdGEyLmZpZWxkIHx8IGRhdGExLmNlbGxJbmRleCA9PT0gZGF0YTIuY2VsbEluZGV4KTtlbHNlIHJldHVybiB0aGlzLnByb3BzLmNvbXBhcmVTZWxlY3Rpb25CeSA9PT0gJ2VxdWFscycgPyBkYXRhMSA9PT0gZGF0YTIgOiBPYmplY3RVdGlscy5lcXVhbHMoZGF0YTEsIGRhdGEyLCB0aGlzLnByb3BzLmRhdGFLZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1N1YmhlYWRlckdyb3VwaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3ViaGVhZGVyR3JvdXBpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUgJiYgdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUgPT09ICdzdWJoZWFkZXInO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1NlbGVjdGlvbkVuYWJsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTZWxlY3Rpb25FbmFibGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB8fCB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGVJbkNvbHVtbiAhPT0gbnVsbCB8fCB0aGlzLnByb3BzLmNvbHVtbnMgJiYgdGhpcy5wcm9wcy5jb2x1bW5zLnNvbWUoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gY29sICYmICEhY29sLnByb3BzLnNlbGVjdGlvbk1vZGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNSYWRpb1NlbGVjdGlvbk1vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSYWRpb1NlbGVjdGlvbk1vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAncmFkaW9idXR0b24nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NoZWNrYm94U2VsZWN0aW9uTW9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NoZWNrYm94U2VsZWN0aW9uTW9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdjaGVja2JveCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzUmFkaW9TZWxlY3Rpb25Nb2RlSW5Db2x1bW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSYWRpb1NlbGVjdGlvbk1vZGVJbkNvbHVtbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGVJbkNvbHVtbiA9PT0gJ3NpbmdsZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ2hlY2tib3hTZWxlY3Rpb25Nb2RlSW5Db2x1bW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGVja2JveFNlbGVjdGlvbk1vZGVJbkNvbHVtbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGVJbkNvbHVtbiA9PT0gJ211bHRpcGxlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNTaW5nbGVTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJyAmJiAhdGhpcy5pc0NoZWNrYm94U2VsZWN0aW9uTW9kZUluQ29sdW1uKCkgfHwgIXRoaXMuaXNSYWRpb1NlbGVjdGlvbk1vZGUoKSAmJiB0aGlzLmlzUmFkaW9TZWxlY3Rpb25Nb2RlSW5Db2x1bW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNNdWx0aXBsZVNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc011bHRpcGxlU2VsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ211bHRpcGxlJyAmJiAhdGhpcy5pc1JhZGlvU2VsZWN0aW9uTW9kZUluQ29sdW1uKCkgfHwgdGhpcy5pc0NoZWNrYm94U2VsZWN0aW9uTW9kZUluQ29sdW1uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzUmFkaW9Pbmx5U2VsZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzUmFkaW9Pbmx5U2VsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNSYWRpb1NlbGVjdGlvbk1vZGUoKSAmJiB0aGlzLmlzUmFkaW9TZWxlY3Rpb25Nb2RlSW5Db2x1bW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDaGVja2JveE9ubHlTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGVja2JveE9ubHlTZWxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0NoZWNrYm94U2VsZWN0aW9uTW9kZSgpICYmIHRoaXMuaXNDaGVja2JveFNlbGVjdGlvbk1vZGVJbkNvbHVtbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1NlbGVjdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2VsZWN0ZWQocm93RGF0YSkge1xuICAgICAgaWYgKHJvd0RhdGEgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLmZpbmRJbmRleCh0aGlzLnByb3BzLnNlbGVjdGlvbiwgcm93RGF0YSkgPiAtMSA6IHRoaXMuZXF1YWxzKHJvd0RhdGEsIHRoaXMucHJvcHMuc2VsZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbnRleHRNZW51U2VsZWN0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb250ZXh0TWVudVNlbGVjdGVkKHJvd0RhdGEpIHtcbiAgICAgIGlmIChyb3dEYXRhICYmIHRoaXMucHJvcHMuY29udGV4dE1lbnVTZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxzKHJvd0RhdGEsIHRoaXMucHJvcHMuY29udGV4dE1lbnVTZWxlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU2VsZWN0YWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NlbGVjdGFibGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNEYXRhU2VsZWN0YWJsZSA/IHRoaXMucHJvcHMuaXNEYXRhU2VsZWN0YWJsZShvcHRpb25zKSA6IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzUm93RXhwYW5kZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSb3dFeHBhbmRlZChyb3dEYXRhKSB7XG4gICAgICBpZiAocm93RGF0YSAmJiB0aGlzLnByb3BzLmV4cGFuZGVkUm93cykge1xuICAgICAgICBpZiAodGhpcy5pc1N1YmhlYWRlckdyb3VwaW5nKCkgJiYgdGhpcy5wcm9wcy5leHBhbmRhYmxlUm93R3JvdXBzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb3dHcm91cEV4cGFuZGVkKHJvd0RhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFLZXkpIHJldHVybiB0aGlzLnByb3BzLmV4cGFuZGVkUm93cyA/IHRoaXMucHJvcHMuZXhwYW5kZWRSb3dzW09iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocm93RGF0YSwgdGhpcy5wcm9wcy5kYXRhS2V5KV0gIT09IHVuZGVmaW5lZCA6IGZhbHNlO2Vsc2UgcmV0dXJuIHRoaXMuZmluZEluZGV4KHRoaXMucHJvcHMuZXhwYW5kZWRSb3dzLCByb3dEYXRhKSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1Jvd0dyb3VwRXhwYW5kZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSb3dHcm91cEV4cGFuZGVkKHJvd0RhdGEpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5kYXRhS2V5ID09PSB0aGlzLnByb3BzLmdyb3VwUm93c0J5KSByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wcm9wcy5leHBhbmRlZFJvd3MpLnNvbWUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmVxdWFscyhkYXRhLCBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIF90aGlzMi5wcm9wcy5kYXRhS2V5KSk7XG4gICAgICB9KTtlbHNlIHJldHVybiB0aGlzLnByb3BzLmV4cGFuZGVkUm93cy5zb21lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5lcXVhbHMoZGF0YSwgcm93RGF0YSwgX3RoaXMyLnByb3BzLmdyb3VwUm93c0J5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1Jvd0VkaXRpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSb3dFZGl0aW5nKHJvd0RhdGEpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmVkaXRNb2RlID09PSAncm93JyAmJiByb3dEYXRhICYmIHRoaXMucHJvcHMuZWRpdGluZ1Jvd3MpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YUtleSkgcmV0dXJuIHRoaXMucHJvcHMuZWRpdGluZ1Jvd3MgPyB0aGlzLnByb3BzLmVkaXRpbmdSb3dzW09iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocm93RGF0YSwgdGhpcy5wcm9wcy5kYXRhS2V5KV0gIT09IHVuZGVmaW5lZCA6IGZhbHNlO2Vsc2UgcmV0dXJuIHRoaXMuZmluZEluZGV4KHRoaXMucHJvcHMuZWRpdGluZ1Jvd3MsIHJvd0RhdGEpICE9PSAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd0RyYWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsb3dEcmFnKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kcmFnU2VsZWN0aW9uICYmIHRoaXMuaXNNdWx0aXBsZVNlbGVjdGlvbigpICYmICFldmVudC5vcmlnaW5hbEV2ZW50LnNoaWZ0S2V5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd1Jvd0RyYWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsb3dSb3dEcmFnKGV2ZW50KSB7XG4gICAgICByZXR1cm4gIXRoaXMuYWxsb3dDZWxsU2VsZWN0aW9uKCkgJiYgdGhpcy5hbGxvd0RyYWcoZXZlbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd0NlbGxEcmFnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbG93Q2VsbERyYWcoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93Q2VsbFNlbGVjdGlvbigpICYmIHRoaXMuYWxsb3dEcmFnKGV2ZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb3dTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsb3dTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICAgIHJldHVybiAhRG9tSGFuZGxlci5pc0NsaWNrYWJsZShldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFsbG93TWV0YUtleVNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGxvd01ldGFLZXlTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICAgIHJldHVybiAhdGhpcy5yb3dUb3VjaGVkICYmICghdGhpcy5wcm9wcy5tZXRhS2V5U2VsZWN0aW9uIHx8IHRoaXMucHJvcHMubWV0YUtleVNlbGVjdGlvbiAmJiAoZXZlbnQub3JpZ2luYWxFdmVudC5tZXRhS2V5IHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY3RybEtleSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd1JhbmdlU2VsZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbG93UmFuZ2VTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGVTZWxlY3Rpb24oKSAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuYW5jaG9yUm93SW5kZXggIT09IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFsbG93Um93U2VsZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbG93Um93U2VsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgfHwgdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlSW5Db2x1bW4pICYmICF0aGlzLmlzUmFkaW9Pbmx5U2VsZWN0aW9uKCkgJiYgIXRoaXMuaXNDaGVja2JveE9ubHlTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb3dDZWxsU2VsZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbG93Q2VsbFNlbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNlbGxTZWxlY3Rpb24gJiYgIXRoaXMuaXNSYWRpb1NlbGVjdGlvbk1vZGVJbkNvbHVtbigpICYmICF0aGlzLmlzQ2hlY2tib3hTZWxlY3Rpb25Nb2RlSW5Db2x1bW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29sdW1uc0xlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb2x1bW5zTGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29sdW1ucyA/IHRoaXMucHJvcHMuY29sdW1ucy5sZW5ndGggOiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWaXJ0dWFsU2Nyb2xsZXJPcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbGVyT3B0aW9uKG9wdGlvbiwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgdGhpcy5wcm9wcy52aXJ0dWFsU2Nyb2xsZXJPcHRpb25zO1xuICAgICAgcmV0dXJuIG9wdGlvbnMgPyBvcHRpb25zW29wdGlvbl0gOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kSW5kZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZEluZGV4KGNvbGxlY3Rpb24sIHJvd0RhdGEpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gKGNvbGxlY3Rpb24gfHwgW10pLmZpbmRJbmRleChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmVxdWFscyhyb3dEYXRhLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3dHcm91cEhlYWRlclN0eWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvd0dyb3VwSGVhZGVyU3R5bGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnJvd0dyb3VwSGVhZGVyU3R5bGVPYmplY3RbJ3RvcCddXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSb3dLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um93S2V5KHJvd0RhdGEsIGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhS2V5ID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dEYXRhLCB0aGlzLnByb3BzLmRhdGFLZXkpICsgJ18nICsgaW5kZXggOiBpbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkUmVuZGVyUm93R3JvdXBIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyUm93R3JvdXBIZWFkZXIodmFsdWUsIHJvd0RhdGEsIGkpIHtcbiAgICAgIHZhciBjdXJyZW50Um93RmllbGREYXRhID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dEYXRhLCB0aGlzLnByb3BzLmdyb3VwUm93c0J5KTtcbiAgICAgIHZhciBwcmV2Um93RGF0YSA9IHZhbHVlW2kgLSAxXTtcblxuICAgICAgaWYgKHByZXZSb3dEYXRhKSB7XG4gICAgICAgIHZhciBwcmV2aW91c1Jvd0ZpZWxkRGF0YSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocHJldlJvd0RhdGEsIHRoaXMucHJvcHMuZ3JvdXBSb3dzQnkpO1xuICAgICAgICByZXR1cm4gY3VycmVudFJvd0ZpZWxkRGF0YSAhPT0gcHJldmlvdXNSb3dGaWVsZERhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkUmVuZGVyUm93R3JvdXBGb290ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyUm93R3JvdXBGb290ZXIodmFsdWUsIHJvd0RhdGEsIGksIGV4cGFuZGVkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRhYmxlUm93R3JvdXBzICYmICFleHBhbmRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VycmVudFJvd0ZpZWxkRGF0YSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocm93RGF0YSwgdGhpcy5wcm9wcy5ncm91cFJvd3NCeSk7XG4gICAgICAgIHZhciBuZXh0Um93RGF0YSA9IHZhbHVlW2kgKyAxXTtcblxuICAgICAgICBpZiAobmV4dFJvd0RhdGEpIHtcbiAgICAgICAgICB2YXIgbmV4dFJvd0ZpZWxkRGF0YSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobmV4dFJvd0RhdGEsIHRoaXMucHJvcHMuZ3JvdXBSb3dzQnkpO1xuICAgICAgICAgIHJldHVybiBjdXJyZW50Um93RmllbGREYXRhICE9PSBuZXh0Um93RmllbGREYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUZyb3plblJvd1N0aWNreVBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUZyb3plblJvd1N0aWNreVBvc2l0aW9uKCkge1xuICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSBEb21IYW5kbGVyLmdldE91dGVySGVpZ2h0KHRoaXMuZWwucHJldmlvdXNFbGVtZW50U2libGluZykgKyAncHgnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVGcm96ZW5Sb3dHcm91cEhlYWRlclN0aWNreVBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUZyb3plblJvd0dyb3VwSGVhZGVyU3RpY2t5UG9zaXRpb24oKSB7XG4gICAgICB2YXIgdGFibGVIZWFkZXJIZWlnaHQgPSBEb21IYW5kbGVyLmdldE91dGVySGVpZ2h0KHRoaXMuZWwucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgICB2YXIgdG9wID0gdGFibGVIZWFkZXJIZWlnaHQgKyAncHgnO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5yb3dHcm91cEhlYWRlclN0eWxlT2JqZWN0ICYmIHRoaXMuc3RhdGUucm93R3JvdXBIZWFkZXJTdHlsZU9iamVjdC50b3AgIT09IHRvcCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByb3dHcm91cEhlYWRlclN0eWxlT2JqZWN0OiB7XG4gICAgICAgICAgICB0b3A6IHRvcFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVZpcnR1YWxTY3JvbGxlclBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZpcnR1YWxTY3JvbGxlclBvc2l0aW9uKCkge1xuICAgICAgdmFyIHRhYmxlSGVhZGVySGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRPdXRlckhlaWdodCh0aGlzLmVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xuICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSAodGhpcy5lbC5zdHlsZS50b3AgfHwgMCkgKyB0YWJsZUhlYWRlckhlaWdodCArICdweCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uU2luZ2xlU2VsZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU2luZ2xlU2VsZWN0aW9uKF9yZWYpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4LFxuICAgICAgICAgIHRvZ2dsZWFibGUgPSBfcmVmLnRvZ2dsZWFibGUsXG4gICAgICAgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0YWJsZSh7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoZGF0YSk7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3Rpb247XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBpZiAodG9nZ2xlYWJsZSkge1xuICAgICAgICAgIHNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgdGhpcy5vblVuc2VsZWN0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb24gPSBkYXRhO1xuICAgICAgICB0aGlzLm9uU2VsZWN0KHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb2N1c09uRWxlbWVudChvcmlnaW5hbEV2ZW50LCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2UgJiYgc2VsZWN0aW9uICE9PSB0aGlzLnByb3BzLnNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlKHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24sXG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25NdWx0aXBsZVNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk11bHRpcGxlU2VsZWN0aW9uKF9yZWYyKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmMi5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxuICAgICAgICAgIGluZGV4ID0gX3JlZjIuaW5kZXgsXG4gICAgICAgICAgdG9nZ2xlYWJsZSA9IF9yZWYyLnRvZ2dsZWFibGUsXG4gICAgICAgICAgdHlwZSA9IF9yZWYyLnR5cGU7XG5cbiAgICAgIGlmICghdGhpcy5pc1NlbGVjdGFibGUoe1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKGRhdGEpO1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0aW9uIHx8IFtdO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHRvZ2dsZWFibGUpIHtcbiAgICAgICAgICB2YXIgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRJbmRleChzZWxlY3Rpb24sIGRhdGEpO1xuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAodmFsLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAhPT0gc2VsZWN0aW9uSW5kZXg7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5vblVuc2VsZWN0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0Lm9uVW5zZWxlY3Qoe1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgICBkYXRhOiBkLFxuICAgICAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxlY3Rpb24gPSBbZGF0YV07XG4gICAgICAgICAgdGhpcy5vblNlbGVjdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0aW9uID0gdG9nZ2xlYWJsZSAmJiB0aGlzLmlzTXVsdGlwbGVTZWxlY3Rpb24oKSA/IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc2VsZWN0aW9uKSwgW2RhdGFdKSA6IFtkYXRhXTtcbiAgICAgICAgdGhpcy5vblNlbGVjdCh7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9jdXNPbkVsZW1lbnQob3JpZ2luYWxFdmVudCwgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlICYmIHNlbGVjdGlvbiAhPT0gdGhpcy5wcm9wcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZSh7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLFxuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUmFuZ2VTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SYW5nZVNlbGVjdGlvbihldmVudCwgdHlwZSkge1xuICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5yYW5nZVJvd0luZGV4ID0gdGhpcy5hbGxvd0NlbGxTZWxlY3Rpb24oKSA/IGV2ZW50LnJvd0luZGV4IDogZXZlbnQuaW5kZXg7XG4gICAgICB2YXIgc2VsZWN0aW9uSW5SYW5nZSA9IHRoaXMuc2VsZWN0UmFuZ2UoZXZlbnQpO1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IHRoaXMuaXNNdWx0aXBsZVNlbGVjdGlvbigpID8gX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBTZXQoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aGlzLnByb3BzLnNlbGVjdGlvbiB8fCBbXSksIF90b0NvbnN1bWFibGVBcnJheShzZWxlY3Rpb25JblJhbmdlKSkpKSA6IHNlbGVjdGlvbkluUmFuZ2U7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlICYmIHNlbGVjdGlvbiAhPT0gdGhpcy5wcm9wcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZSh7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLFxuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5jaG9yUm93SW5kZXggPSB0aGlzLnJhbmdlUm93SW5kZXg7XG4gICAgICB0aGlzLmFuY2hvckNlbGxJbmRleCA9IGV2ZW50LmNlbGxJbmRleDtcbiAgICAgIHRoaXMuZm9jdXNPbkVsZW1lbnQoZXZlbnQub3JpZ2luYWxFdmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3RSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RSYW5nZShldmVudCkge1xuICAgICAgdmFyIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuICAgICAgdmFyIGlzTGF6eUFuZFBhZ2luYXRvciA9IHRoaXMucHJvcHMubGF6eSAmJiB0aGlzLnByb3BzLnBhZ2luYXRvcjtcblxuICAgICAgaWYgKGlzTGF6eUFuZFBhZ2luYXRvcikge1xuICAgICAgICB0aGlzLmFuY2hvclJvd0luZGV4ICs9IHRoaXMuYW5jaG9yUm93Rmlyc3Q7XG4gICAgICAgIHRoaXMucmFuZ2VSb3dJbmRleCArPSB0aGlzLnByb3BzLmZpcnN0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yYW5nZVJvd0luZGV4ID4gdGhpcy5hbmNob3JSb3dJbmRleCkge1xuICAgICAgICByYW5nZVN0YXJ0ID0gdGhpcy5hbmNob3JSb3dJbmRleDtcbiAgICAgICAgcmFuZ2VFbmQgPSB0aGlzLnJhbmdlUm93SW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VSb3dJbmRleCA8IHRoaXMuYW5jaG9yUm93SW5kZXgpIHtcbiAgICAgICAgcmFuZ2VTdGFydCA9IHRoaXMucmFuZ2VSb3dJbmRleDtcbiAgICAgICAgcmFuZ2VFbmQgPSB0aGlzLmFuY2hvclJvd0luZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2VTdGFydCA9IHJhbmdlRW5kID0gdGhpcy5yYW5nZVJvd0luZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNMYXp5QW5kUGFnaW5hdG9yKSB7XG4gICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heChyYW5nZVN0YXJ0IC0gdGhpcy5wcm9wcy5maXJzdCwgMCk7XG4gICAgICAgIHJhbmdlRW5kIC09IHRoaXMucHJvcHMuZmlyc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmFsbG93Q2VsbFNlbGVjdGlvbigpID8gdGhpcy5zZWxlY3RSYW5nZU9uQ2VsbChldmVudCwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQpIDogdGhpcy5zZWxlY3RSYW5nZU9uUm93KGV2ZW50LCByYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdFJhbmdlT25Sb3dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0UmFuZ2VPblJvdyhldmVudCwgcm93UmFuZ2VTdGFydCwgcm93UmFuZ2VFbmQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSByb3dSYW5nZVN0YXJ0OyBpIDw9IHJvd1JhbmdlRW5kOyBpKyspIHtcbiAgICAgICAgdmFyIHJhbmdlUm93RGF0YSA9IHZhbHVlW2ldO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1NlbGVjdGFibGUoe1xuICAgICAgICAgIGRhdGE6IHJhbmdlUm93RGF0YSxcbiAgICAgICAgICBpbmRleDogaVxuICAgICAgICB9KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0aW9uLnB1c2gocmFuZ2VSb3dEYXRhKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdCh7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICBkYXRhOiByYW5nZVJvd0RhdGEsXG4gICAgICAgICAgdHlwZTogJ3JvdydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdFJhbmdlT25DZWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdFJhbmdlT25DZWxsKGV2ZW50LCByb3dSYW5nZVN0YXJ0LCByb3dSYW5nZUVuZCkge1xuICAgICAgdmFyIGNlbGxSYW5nZVN0YXJ0LFxuICAgICAgICAgIGNlbGxSYW5nZUVuZCxcbiAgICAgICAgICBjZWxsSW5kZXggPSBldmVudC5jZWxsSW5kZXg7XG5cbiAgICAgIGlmIChjZWxsSW5kZXggPiB0aGlzLmFuY2hvckNlbGxJbmRleCkge1xuICAgICAgICBjZWxsUmFuZ2VTdGFydCA9IHRoaXMuYW5jaG9yQ2VsbEluZGV4O1xuICAgICAgICBjZWxsUmFuZ2VFbmQgPSBjZWxsSW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGNlbGxJbmRleCA8IHRoaXMuYW5jaG9yQ2VsbEluZGV4KSB7XG4gICAgICAgIGNlbGxSYW5nZVN0YXJ0ID0gY2VsbEluZGV4O1xuICAgICAgICBjZWxsUmFuZ2VFbmQgPSB0aGlzLmFuY2hvckNlbGxJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGxSYW5nZVN0YXJ0ID0gY2VsbFJhbmdlRW5kID0gY2VsbEluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gcm93UmFuZ2VTdGFydDsgaSA8PSByb3dSYW5nZUVuZDsgaSsrKSB7XG4gICAgICAgIHZhciByb3dEYXRhID0gdmFsdWVbaV07XG4gICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zO1xuXG4gICAgICAgIGZvciAodmFyIGogPSBjZWxsUmFuZ2VTdGFydDsgaiA8PSBjZWxsUmFuZ2VFbmQ7IGorKykge1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNvbHVtbnNbal0ucHJvcHMuZmllbGQ7XG5cbiAgICAgICAgICB2YXIgX3ZhbHVlID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShyb3dEYXRhLCBmaWVsZCk7XG5cbiAgICAgICAgICB2YXIgcmFuZ2VSb3dEYXRhID0ge1xuICAgICAgICAgICAgdmFsdWU6IF92YWx1ZSxcbiAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgIHJvd0RhdGE6IHJvd0RhdGEsXG4gICAgICAgICAgICByb3dJbmRleDogaSxcbiAgICAgICAgICAgIGNlbGxJbmRleDogaixcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghdGhpcy5pc1NlbGVjdGFibGUoe1xuICAgICAgICAgICAgZGF0YTogcmFuZ2VSb3dEYXRhLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2gocmFuZ2VSb3dEYXRhKTtcbiAgICAgICAgICB0aGlzLm9uU2VsZWN0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkYXRhOiByYW5nZVJvd0RhdGEsXG4gICAgICAgICAgICB0eXBlOiAnY2VsbCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblNlbGVjdChldmVudCkge1xuICAgICAgaWYgKHRoaXMuYWxsb3dDZWxsU2VsZWN0aW9uKCkpIHRoaXMucHJvcHMub25DZWxsU2VsZWN0ICYmIHRoaXMucHJvcHMub25DZWxsU2VsZWN0KF9vYmplY3RTcHJlYWQkNShfb2JqZWN0U3ByZWFkJDUoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50XG4gICAgICB9LCBldmVudC5kYXRhKSwge30sIHtcbiAgICAgICAgdHlwZTogZXZlbnQudHlwZVxuICAgICAgfSkpO2Vsc2UgdGhpcy5wcm9wcy5vblJvd1NlbGVjdCAmJiB0aGlzLnByb3BzLm9uUm93U2VsZWN0KGV2ZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25VbnNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblVuc2VsZWN0KGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5hbGxvd0NlbGxTZWxlY3Rpb24oKSkgdGhpcy5wcm9wcy5vbkNlbGxVbnNlbGVjdCAmJiB0aGlzLnByb3BzLm9uQ2VsbFVuc2VsZWN0KF9vYmplY3RTcHJlYWQkNShfb2JqZWN0U3ByZWFkJDUoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50XG4gICAgICB9LCBldmVudC5kYXRhKSwge30sIHtcbiAgICAgICAgdHlwZTogZXZlbnQudHlwZVxuICAgICAgfSkpO2Vsc2UgdGhpcy5wcm9wcy5vblJvd1Vuc2VsZWN0ICYmIHRoaXMucHJvcHMub25Sb3dVbnNlbGVjdChldmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVuYWJsZURyYWdTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlRHJhZ1NlbGVjdGlvbihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZHJhZ1NlbGVjdGlvbiAmJiAhdGhpcy5kcmFnU2VsZWN0aW9uSGVscGVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlciwgJ3AtZGF0YXRhYmxlLWRyYWctc2VsZWN0aW9uLWhlbHBlcicpO1xuICAgICAgICB0aGlzLmluaXRpYWxEcmFnUG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICB5OiBldmVudC5jbGllbnRZXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlci5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdChldmVudC5wYWdlWSwgXCJweFwiKTtcbiAgICAgICAgdGhpcy5kcmFnU2VsZWN0aW9uSGVscGVyLnN0eWxlLmxlZnQgPSBcIlwiLmNvbmNhdChldmVudC5wYWdlWCwgXCJweFwiKTtcbiAgICAgICAgdGhpcy5iaW5kRHJhZ1NlbGVjdGlvbkV2ZW50cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c09uRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c09uRWxlbWVudChldmVudCwgaXNGb2N1c2VkKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgaWYgKCF0aGlzLmFsbG93Q2VsbFNlbGVjdGlvbigpICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uQXV0b0ZvY3VzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hTZWxlY3Rpb25Nb2RlSW5Db2x1bW4oKSkge1xuICAgICAgICAgIHZhciBjaGVja2JveCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0YXJnZXQsICd0ZC5wLXNlbGVjdGlvbi1jb2x1bW4gLnAtY2hlY2tib3gtYm94Jyk7XG4gICAgICAgICAgY2hlY2tib3ggJiYgY2hlY2tib3guZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmFkaW9TZWxlY3Rpb25Nb2RlSW5Db2x1bW4oKSkge1xuICAgICAgICAgIHZhciByYWRpbyA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0YXJnZXQsICd0ZC5wLXNlbGVjdGlvbi1jb2x1bW4gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgICAgcmFkaW8gJiYgcmFkaW8uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAhaXNGb2N1c2VkICYmIHRhcmdldCAmJiB0YXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hhbmdlVGFiSW5kZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbmdlVGFiSW5kZXgoZXZlbnQsIHR5cGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIGlzU2VsZWN0YWJsZSA9IERvbUhhbmRsZXIuaGFzQ2xhc3ModGFyZ2V0LCB0eXBlID09PSAnY2VsbCcgPyAncC1zZWxlY3RhYmxlLWNlbGwnIDogJ3Atc2VsZWN0YWJsZS1yb3cnKTtcblxuICAgICAgaWYgKGlzU2VsZWN0YWJsZSkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSB0eXBlID09PSAnY2VsbCcgPyAndHIgPiB0ZCcgOiAndHInO1xuICAgICAgICB2YXIgdGFiYmFibGVFbCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLCBcIlwiLmNvbmNhdChzZWxlY3RvciwgXCJbdGFiaW5kZXg9XFxcIlwiKS5jb25jYXQodGhpcy5wcm9wcy50YWJJbmRleCwgXCJcXFwiXVwiKSk7XG5cbiAgICAgICAgaWYgKHRhYmJhYmxlRWwgJiYgdGFyZ2V0KSB7XG4gICAgICAgICAgdGFiYmFibGVFbC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRhcmdldC50YWJJbmRleCA9IHRoaXMucHJvcHMudGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJvd0NsaWNrKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5hbGxvd0NlbGxTZWxlY3Rpb24oKSB8fCAhdGhpcy5hbGxvd1NlbGVjdGlvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKHRoaXMuYWxsb3dSb3dTZWxlY3Rpb24oKSkge1xuICAgICAgICBpZiAodGhpcy5hbGxvd1JhbmdlU2VsZWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgIHRoaXMub25SYW5nZVNlbGVjdGlvbihldmVudCwgJ3JvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0b2dnbGVhYmxlID0gdGhpcy5pc1JhZGlvU2VsZWN0aW9uTW9kZUluQ29sdW1uKCkgfHwgdGhpcy5pc0NoZWNrYm94U2VsZWN0aW9uTW9kZUluQ29sdW1uKCkgfHwgdGhpcy5hbGxvd01ldGFLZXlTZWxlY3Rpb24oZXZlbnQpO1xuICAgICAgICAgIHRoaXMuYW5jaG9yUm93SW5kZXggPSBldmVudC5pbmRleDtcbiAgICAgICAgICB0aGlzLnJhbmdlUm93SW5kZXggPSBldmVudC5pbmRleDtcbiAgICAgICAgICB0aGlzLmFuY2hvclJvd0ZpcnN0ID0gdGhpcy5wcm9wcy5maXJzdDtcblxuICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMub25TaW5nbGVTZWxlY3Rpb24oX29iamVjdFNwcmVhZCQ1KF9vYmplY3RTcHJlYWQkNSh7fSwgZXZlbnQpLCB7fSwge1xuICAgICAgICAgICAgICB0b2dnbGVhYmxlOiB0b2dnbGVhYmxlLFxuICAgICAgICAgICAgICB0eXBlOiAncm93J1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uTXVsdGlwbGVTZWxlY3Rpb24oX29iamVjdFNwcmVhZCQ1KF9vYmplY3RTcHJlYWQkNSh7fSwgZXZlbnQpLCB7fSwge1xuICAgICAgICAgICAgICB0b2dnbGVhYmxlOiB0b2dnbGVhYmxlLFxuICAgICAgICAgICAgICB0eXBlOiAncm93J1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbmdlVGFiSW5kZXgoZXZlbnQub3JpZ2luYWxFdmVudCwgJ3JvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c09uRWxlbWVudChldmVudC5vcmlnaW5hbEV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yb3dUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93RG91YmxlQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dEb3VibGVDbGljayhlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgICAgIGlmIChEb21IYW5kbGVyLmlzQ2xpY2thYmxlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0RvdWJsZUNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Sb3dEb3VibGVDbGljayhlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dSaWdodENsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93UmlnaHRDbGljayhldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db250ZXh0TWVudSB8fCB0aGlzLnByb3BzLm9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2Uoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIHZhbHVlOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbnRleHRNZW51KSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbnRleHRNZW51KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkYXRhOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93VG91Y2hFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dUb3VjaEVuZCgpIHtcbiAgICAgIHRoaXMucm93VG91Y2hlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93TW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93TW91c2VEb3duKGUpIHtcbiAgICAgIERvbUhhbmRsZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50LnRhcmdldCwgJ3AtZGF0YXRhYmxlLXJlb3JkZXJhYmxlcm93LWhhbmRsZScpKSBldmVudC5jdXJyZW50VGFyZ2V0LmRyYWdnYWJsZSA9IHRydWU7ZWxzZSBldmVudC5jdXJyZW50VGFyZ2V0LmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5hbGxvd1Jvd0RyYWcoZSkpIHtcbiAgICAgICAgdGhpcy5lbmFibGVEcmFnU2VsZWN0aW9uKGV2ZW50LCAncm93Jyk7XG4gICAgICAgIHRoaXMuYW5jaG9yUm93SW5kZXggPSBlLmluZGV4O1xuICAgICAgICB0aGlzLnJhbmdlUm93SW5kZXggPSBlLmluZGV4O1xuICAgICAgICB0aGlzLmFuY2hvclJvd0ZpcnN0ID0gdGhpcy5wcm9wcy5maXJzdDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dNb3VzZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93TW91c2VVcChldmVudCkge1xuICAgICAgdmFyIGlzU2FtZVJvdyA9IGV2ZW50LmluZGV4ID09PSB0aGlzLmFuY2hvclJvd0luZGV4O1xuXG4gICAgICBpZiAodGhpcy5hbGxvd1Jvd0RyYWcoZXZlbnQpICYmICFpc1NhbWVSb3cpIHtcbiAgICAgICAgdGhpcy5vblJhbmdlU2VsZWN0aW9uKGV2ZW50LCAncm93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93VG9nZ2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93VG9nZ2xlKGV2ZW50KSB7XG4gICAgICB2YXIgZXhwYW5kZWRSb3dzO1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLnByb3BzLmRhdGFLZXk7XG4gICAgICB2YXIgaGFzRGF0YUtleSA9IHRoaXMucHJvcHMuZ3JvdXBSb3dzQnkgPyBkYXRhS2V5ID09PSB0aGlzLnByb3BzLmdyb3VwUm93c0J5IDogISFkYXRhS2V5O1xuXG4gICAgICBpZiAoaGFzRGF0YUtleSkge1xuICAgICAgICB2YXIgZGF0YUtleVZhbHVlID0gU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZXZlbnQuZGF0YSwgZGF0YUtleSkpO1xuICAgICAgICBleHBhbmRlZFJvd3MgPSB0aGlzLnByb3BzLmV4cGFuZGVkUm93cyA/IF9vYmplY3RTcHJlYWQkNSh7fSwgdGhpcy5wcm9wcy5leHBhbmRlZFJvd3MpIDoge307XG5cbiAgICAgICAgaWYgKGV4cGFuZGVkUm93c1tkYXRhS2V5VmFsdWVdICE9IG51bGwpIHtcbiAgICAgICAgICBkZWxldGUgZXhwYW5kZWRSb3dzW2RhdGFLZXlWYWx1ZV07XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0NvbGxhcHNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUm93Q29sbGFwc2Uoe1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgZGF0YTogZXZlbnQuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cGFuZGVkUm93c1tkYXRhS2V5VmFsdWVdID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93RXhwYW5kKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUm93RXhwYW5kKHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgIGRhdGE6IGV2ZW50LmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGV4cGFuZGVkUm93SW5kZXggPSB0aGlzLmZpbmRJbmRleCh0aGlzLnByb3BzLmV4cGFuZGVkUm93cywgZXZlbnQuZGF0YSk7XG4gICAgICAgIGV4cGFuZGVkUm93cyA9IHRoaXMucHJvcHMuZXhwYW5kZWRSb3dzID8gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMucHJvcHMuZXhwYW5kZWRSb3dzKSA6IFtdO1xuXG4gICAgICAgIGlmIChleHBhbmRlZFJvd0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGV4cGFuZGVkUm93cyA9IGV4cGFuZGVkUm93cy5maWx0ZXIoZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgIT09IGV4cGFuZGVkUm93SW5kZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0NvbGxhcHNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUm93Q29sbGFwc2Uoe1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgZGF0YTogZXZlbnQuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cGFuZGVkUm93cy5wdXNoKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dFeHBhbmQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Sb3dFeHBhbmQoe1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgZGF0YTogZXZlbnQuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93VG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Sb3dUb2dnbGUoe1xuICAgICAgICAgIGRhdGE6IGV4cGFuZGVkUm93c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dEcmFnU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dEcmFnU3RhcnQoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGluZGV4ID0gZS5pbmRleDtcbiAgICAgIHRoaXMucm93RHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnZ2VkUm93SW5kZXggPSBpbmRleDtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2InKTsgLy8gRm9yIGZpcmVmb3hcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dEcmFnT3ZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJvd0RyYWdPdmVyKGUpIHtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICBpbmRleCA9IGUuaW5kZXg7XG5cbiAgICAgIGlmICh0aGlzLnJvd0RyYWdnaW5nICYmIHRoaXMuZHJhZ2dlZFJvd0luZGV4ICE9PSBpbmRleCkge1xuICAgICAgICB2YXIgcm93RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHZhciByb3dZID0gRG9tSGFuZGxlci5nZXRPZmZzZXQocm93RWxlbWVudCkudG9wICsgRG9tSGFuZGxlci5nZXRXaW5kb3dTY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHBhZ2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIHZhciByb3dNaWRZID0gcm93WSArIERvbUhhbmRsZXIuZ2V0T3V0ZXJIZWlnaHQocm93RWxlbWVudCkgLyAyO1xuICAgICAgICB2YXIgcHJldlJvd0VsZW1lbnQgPSByb3dFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHBhZ2VZIDwgcm93TWlkWSkge1xuICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3Mocm93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC1ib3R0b20nKTtcbiAgICAgICAgICB0aGlzLmRyb3BwZWRSb3dJbmRleCA9IGluZGV4O1xuICAgICAgICAgIGlmIChwcmV2Um93RWxlbWVudCkgRG9tSGFuZGxlci5hZGRDbGFzcyhwcmV2Um93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC1ib3R0b20nKTtlbHNlIERvbUhhbmRsZXIuYWRkQ2xhc3Mocm93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC10b3AnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJldlJvd0VsZW1lbnQpIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MocHJldlJvd0VsZW1lbnQsICdwLWRhdGF0YWJsZS1kcmFncG9pbnQtYm90dG9tJyk7ZWxzZSBEb21IYW5kbGVyLmFkZENsYXNzKHJvd0VsZW1lbnQsICdwLWRhdGF0YWJsZS1kcmFncG9pbnQtdG9wJyk7XG4gICAgICAgICAgdGhpcy5kcm9wcGVkUm93SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhyb3dFbGVtZW50LCAncC1kYXRhdGFibGUtZHJhZ3BvaW50LWJvdHRvbScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93RHJhZ0xlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93RHJhZ0xlYXZlKGUpIHtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIHZhciByb3dFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIHZhciBwcmV2Um93RWxlbWVudCA9IHJvd0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgaWYgKHByZXZSb3dFbGVtZW50KSB7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MocHJldlJvd0VsZW1lbnQsICdwLWRhdGF0YWJsZS1kcmFncG9pbnQtYm90dG9tJyk7XG4gICAgICB9XG5cbiAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3Mocm93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC1ib3R0b20nKTtcbiAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3Mocm93RWxlbWVudCwgJ3AtZGF0YXRhYmxlLWRyYWdwb2ludC10b3AnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dEcmFnRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUm93RHJhZ0VuZChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICB0aGlzLnJvd0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdnZWRSb3dJbmRleCA9IG51bGw7XG4gICAgICB0aGlzLmRyb3BwZWRSb3dJbmRleCA9IG51bGw7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblJvd0Ryb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dEcm9wKGUpIHtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcblxuICAgICAgaWYgKHRoaXMuZHJvcHBlZFJvd0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGRyb3BJbmRleCA9IHRoaXMuZHJhZ2dlZFJvd0luZGV4ID4gdGhpcy5kcm9wcGVkUm93SW5kZXggPyB0aGlzLmRyb3BwZWRSb3dJbmRleCA6IHRoaXMuZHJvcHBlZFJvd0luZGV4ID09PSAwID8gMCA6IHRoaXMuZHJvcHBlZFJvd0luZGV4IC0gMTtcblxuICAgICAgICB2YXIgdmFsID0gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXG4gICAgICAgIE9iamVjdFV0aWxzLnJlb3JkZXJBcnJheSh2YWwsIHRoaXMuZHJhZ2dlZFJvd0luZGV4LCBkcm9wSW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93UmVvcmRlcikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Sb3dSZW9yZGVyKHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgIGRyYWdJbmRleDogdGhpcy5kcmFnZ2VkUm93SW5kZXgsXG4gICAgICAgICAgICBkcm9wSW5kZXg6IHRoaXMuZHJvcHBlZFJvd0luZGV4XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy9jbGVhbnVwXG5cblxuICAgICAgdGhpcy5vblJvd0RyYWdMZWF2ZShlKTtcbiAgICAgIHRoaXMub25Sb3dEcmFnRW5kKGUpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25SYWRpb0NoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJhZGlvQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLm9uU2luZ2xlU2VsZWN0aW9uKF9vYmplY3RTcHJlYWQkNShfb2JqZWN0U3ByZWFkJDUoe30sIGV2ZW50KSwge30sIHtcbiAgICAgICAgdG9nZ2xlYWJsZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3JhZGlvJ1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNoZWNrYm94Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hlY2tib3hDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMub25NdWx0aXBsZVNlbGVjdGlvbihfb2JqZWN0U3ByZWFkJDUoX29iamVjdFNwcmVhZCQ1KHt9LCBldmVudCksIHt9LCB7XG4gICAgICAgIHRvZ2dsZWFibGU6IHRydWUsXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCdcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25EcmFnU2VsZWN0aW9uTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1NlbGVjdGlvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgdmFyIF90aGlzJGluaXRpYWxEcmFnUG9zaSA9IHRoaXMuaW5pdGlhbERyYWdQb3NpdGlvbixcbiAgICAgICAgICB4ID0gX3RoaXMkaW5pdGlhbERyYWdQb3NpLngsXG4gICAgICAgICAgeSA9IF90aGlzJGluaXRpYWxEcmFnUG9zaS55O1xuICAgICAgdmFyIGR4ID0gZXZlbnQuY2xpZW50WCAtIHg7XG4gICAgICB2YXIgZHkgPSBldmVudC5jbGllbnRZIC0geTtcbiAgICAgIGlmIChkeSA8IDApIHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlci5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdChldmVudC5wYWdlWSArIDUsIFwicHhcIik7XG4gICAgICBpZiAoZHggPCAwKSB0aGlzLmRyYWdTZWxlY3Rpb25IZWxwZXIuc3R5bGUubGVmdCA9IFwiXCIuY29uY2F0KGV2ZW50LnBhZ2VYICsgNSwgXCJweFwiKTtcbiAgICAgIHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlci5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdChNYXRoLmFicyhkeSksIFwicHhcIik7XG4gICAgICB0aGlzLmRyYWdTZWxlY3Rpb25IZWxwZXIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChNYXRoLmFicyhkeCksIFwicHhcIik7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkRyYWdTZWxlY3Rpb25Nb3VzZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1NlbGVjdGlvbk1vdXNlVXAoKSB7XG4gICAgICBpZiAodGhpcy5kcmFnU2VsZWN0aW9uSGVscGVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5kcmFnU2VsZWN0aW9uSGVscGVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRyYWdTZWxlY3Rpb25Nb3VzZU1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25EcmFnU2VsZWN0aW9uTW91c2VVcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2VsbENsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2VsbENsaWNrKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuYWxsb3dTZWxlY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKHRoaXMuYWxsb3dDZWxsU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dSYW5nZVNlbGVjdGlvbihldmVudCkpIHtcbiAgICAgICAgICB0aGlzLm9uUmFuZ2VTZWxlY3Rpb24oZXZlbnQsICdjZWxsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRvZ2dsZWFibGUgPSB0aGlzLmFsbG93TWV0YUtleVNlbGVjdGlvbihldmVudCk7XG5cbiAgICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZXZlbnQsIF9leGNsdWRlZCk7XG5cbiAgICAgICAgICB0aGlzLmFuY2hvclJvd0luZGV4ID0gZXZlbnQucm93SW5kZXg7XG4gICAgICAgICAgdGhpcy5yYW5nZVJvd0luZGV4ID0gZXZlbnQucm93SW5kZXg7XG4gICAgICAgICAgdGhpcy5hbmNob3JSb3dGaXJzdCA9IHRoaXMucHJvcHMuZmlyc3Q7XG4gICAgICAgICAgdGhpcy5hbmNob3JDZWxsSW5kZXggPSBldmVudC5jZWxsSW5kZXg7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2luZ2xlU2VsZWN0aW9uKHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgaW5kZXg6IGV2ZW50LnJvd0luZGV4LFxuICAgICAgICAgICAgICB0b2dnbGVhYmxlOiB0b2dnbGVhYmxlLFxuICAgICAgICAgICAgICB0eXBlOiAnY2VsbCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uTXVsdGlwbGVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBpbmRleDogZXZlbnQucm93SW5kZXgsXG4gICAgICAgICAgICAgIHRvZ2dsZWFibGU6IHRvZ2dsZWFibGUsXG4gICAgICAgICAgICAgIHR5cGU6ICdjZWxsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VUYWJJbmRleChldmVudC5vcmlnaW5hbEV2ZW50LCAnY2VsbCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd1RvdWNoZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25DZWxsTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2VsbE1vdXNlRG93bihldmVudCkge1xuICAgICAgaWYgKHRoaXMuYWxsb3dDZWxsRHJhZyhldmVudCkpIHtcbiAgICAgICAgdGhpcy5lbmFibGVEcmFnU2VsZWN0aW9uKGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICB0aGlzLmFuY2hvclJvd0luZGV4ID0gZXZlbnQucm93SW5kZXg7XG4gICAgICAgIHRoaXMucmFuZ2VSb3dJbmRleCA9IGV2ZW50LnJvd0luZGV4O1xuICAgICAgICB0aGlzLmFuY2hvclJvd0ZpcnN0ID0gdGhpcy5wcm9wcy5maXJzdDtcbiAgICAgICAgdGhpcy5hbmNob3JDZWxsSW5kZXggPSBldmVudC5jZWxsSW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2VsbE1vdXNlVXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DZWxsTW91c2VVcChldmVudCkge1xuICAgICAgdmFyIGlzU2FtZUNlbGwgPSBldmVudC5yb3dJbmRleCA9PT0gdGhpcy5hbmNob3JSb3dJbmRleCAmJiBldmVudC5jZWxsSW5kZXggPT09IHRoaXMuYW5jaG9yQ2VsbEluZGV4O1xuXG4gICAgICBpZiAodGhpcy5hbGxvd0NlbGxEcmFnKGV2ZW50KSAmJiAhaXNTYW1lQ2VsbCkge1xuICAgICAgICB0aGlzLm9uUmFuZ2VTZWxlY3Rpb24oZXZlbnQsICdjZWxsJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJpbmREcmFnU2VsZWN0aW9uRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmREcmFnU2VsZWN0aW9uRXZlbnRzKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRyYWdTZWxlY3Rpb25Nb3VzZU1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25EcmFnU2VsZWN0aW9uTW91c2VVcCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ1NlbGVjdGlvbkhlbHBlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZERyYWdTZWxlY3Rpb25FdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRHJhZ1NlbGVjdGlvbkV2ZW50cygpIHtcbiAgICAgIHRoaXMub25EcmFnU2VsZWN0aW9uTW91c2VVcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZyb3plblJvdykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb3plblJvd1N0aWNreVBvc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNjcm9sbGFibGUgJiYgdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUgPT09ICdzdWJoZWFkZXInKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvemVuUm93R3JvdXBIZWFkZXJTdGlja3lQb3NpdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNWaXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZCAmJiB0aGlzLmdldFZpcnR1YWxTY3JvbGxlck9wdGlvbigndmVydGljYWwnKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpcnR1YWxTY3JvbGxlclBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZyb3plblJvdykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb3plblJvd1N0aWNreVBvc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNjcm9sbGFibGUgJiYgdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUgPT09ICdzdWJoZWFkZXInKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvemVuUm93R3JvdXBIZWFkZXJTdGlja3lQb3NpdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNWaXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZCAmJiB0aGlzLmdldFZpcnR1YWxTY3JvbGxlck9wdGlvbigndmVydGljYWwnKSAmJiB0aGlzLmdldFZpcnR1YWxTY3JvbGxlck9wdGlvbignaXRlbVNpemUnLCBwcmV2UHJvcHMudmlydHVhbFNjcm9sbGVyT3B0aW9ucykgIT09IHRoaXMuZ2V0VmlydHVhbFNjcm9sbGVyT3B0aW9uKCdpdGVtU2l6ZScpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbGVyUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kcmFnU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRHJhZ1NlbGVjdGlvbkV2ZW50cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJFbXB0eUNvbnRlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRW1wdHlDb250ZW50KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgdmFyIGNvbFNwYW4gPSB0aGlzLmdldENvbHVtbnNMZW5ndGgoKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlNZXNzYWdlLCB7XG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgZnJvemVuOiB0aGlzLnByb3BzLmZyb3plblJvd1xuICAgICAgICB9KSB8fCBsb2NhbGVPcHRpb24oJ2VtcHR5TWVzc2FnZScpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtZGF0YXRhYmxlLWVtcHR5bWVzc2FnZVwiLFxuICAgICAgICAgIHJvbGU6IFwicm93XCJcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG4gICAgICAgICAgY29sU3BhbjogY29sU3BhbixcbiAgICAgICAgICByb2xlOiBcImNlbGxcIlxuICAgICAgICB9LCBjb250ZW50KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJHcm91cEhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJHcm91cEhlYWRlcihyb3dEYXRhLCBpbmRleCwgZXhwYW5kZWQsIGlzU3ViaGVhZGVyR3JvdXBpbmcsIGNvbFNwYW4pIHtcbiAgICAgIGlmIChpc1N1YmhlYWRlckdyb3VwaW5nICYmIHRoaXMuc2hvdWxkUmVuZGVyUm93R3JvdXBIZWFkZXIodGhpcy5wcm9wcy52YWx1ZSwgcm93RGF0YSwgaW5kZXggLSB0aGlzLnByb3BzLmZpcnN0KSkge1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLnJvd0dyb3VwSGVhZGVyU3R5bGUoKTtcbiAgICAgICAgdmFyIHRvZ2dsZXIgPSB0aGlzLnByb3BzLmV4cGFuZGFibGVSb3dHcm91cHMgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm93VG9nZ2xlckJ1dHRvbiwge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25Sb3dUb2dnbGUsXG4gICAgICAgICAgcm93RGF0YTogcm93RGF0YSxcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgICAgICAgZXhwYW5kZWRSb3dJY29uOiB0aGlzLnByb3BzLmV4cGFuZGVkUm93SWNvbixcbiAgICAgICAgICBjb2xsYXBzZWRSb3dJY29uOiB0aGlzLnByb3BzLmNvbGxhcHNlZFJvd0ljb25cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLnJvd0dyb3VwSGVhZGVyVGVtcGxhdGUsIHJvd0RhdGEsIHtcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wc1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLXJvd2dyb3VwLWhlYWRlclwiLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICByb2xlOiBcInJvd1wiXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuICAgICAgICAgIGNvbFNwYW46IGNvbFNwYW5cbiAgICAgICAgfSwgdG9nZ2xlciwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1yb3dncm91cC1oZWFkZXItbmFtZVwiXG4gICAgICAgIH0sIGNvbnRlbnQpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJSb3dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUm93KHJvd0RhdGEsIGluZGV4LCBleHBhbmRlZCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmV4cGFuZGFibGVSb3dHcm91cHMgfHwgZXhwYW5kZWQpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGlvbkVuYWJsZWQoKSA/IHRoaXMuaXNTZWxlY3RlZChyb3dEYXRhKSA6IGZhbHNlO1xuICAgICAgICB2YXIgY29udGV4dE1lbnVTZWxlY3RlZCA9IHRoaXMuaXNDb250ZXh0TWVudVNlbGVjdGVkKHJvd0RhdGEpO1xuICAgICAgICB2YXIgYWxsb3dSb3dTZWxlY3Rpb24gPSB0aGlzLmFsbG93Um93U2VsZWN0aW9uKCk7XG4gICAgICAgIHZhciBhbGxvd0NlbGxTZWxlY3Rpb24gPSB0aGlzLmFsbG93Q2VsbFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgZWRpdGluZyA9IHRoaXMuaXNSb3dFZGl0aW5nKHJvd0RhdGEpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keVJvdywge1xuICAgICAgICAgIHRhYmxlUHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wcyxcbiAgICAgICAgICB0YWJsZVNlbGVjdG9yOiB0aGlzLnByb3BzLnRhYmxlU2VsZWN0b3IsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgY29sdW1uczogdGhpcy5wcm9wcy5jb2x1bW5zLFxuICAgICAgICAgIHJvd0RhdGE6IHJvd0RhdGEsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgICAgICBjb250ZXh0TWVudVNlbGVjdGVkOiBjb250ZXh0TWVudVNlbGVjdGVkLFxuICAgICAgICAgIG9uUm93Q2xpY2s6IHRoaXMub25Sb3dDbGljayxcbiAgICAgICAgICBvblJvd0RvdWJsZUNsaWNrOiB0aGlzLm9uUm93RG91YmxlQ2xpY2ssXG4gICAgICAgICAgb25Sb3dSaWdodENsaWNrOiB0aGlzLm9uUm93UmlnaHRDbGljayxcbiAgICAgICAgICB0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcbiAgICAgICAgICBpc1NlbGVjdGFibGU6IHRoaXMuaXNTZWxlY3RhYmxlLFxuICAgICAgICAgIG9uUm93VG91Y2hFbmQ6IHRoaXMub25Sb3dUb3VjaEVuZCxcbiAgICAgICAgICBvblJvd01vdXNlRG93bjogdGhpcy5vblJvd01vdXNlRG93bixcbiAgICAgICAgICBvblJvd01vdXNlVXA6IHRoaXMub25Sb3dNb3VzZVVwLFxuICAgICAgICAgIG9uUm93VG9nZ2xlOiB0aGlzLm9uUm93VG9nZ2xlLFxuICAgICAgICAgIG9uUm93RHJhZ1N0YXJ0OiB0aGlzLm9uUm93RHJhZ1N0YXJ0LFxuICAgICAgICAgIG9uUm93RHJhZ092ZXI6IHRoaXMub25Sb3dEcmFnT3ZlcixcbiAgICAgICAgICBvblJvd0RyYWdMZWF2ZTogdGhpcy5vblJvd0RyYWdMZWF2ZSxcbiAgICAgICAgICBvblJvd0RyYWdFbmQ6IHRoaXMub25Sb3dEcmFnRW5kLFxuICAgICAgICAgIG9uUm93RHJvcDogdGhpcy5vblJvd0Ryb3AsXG4gICAgICAgICAgb25SYWRpb0NoYW5nZTogdGhpcy5vblJhZGlvQ2hhbmdlLFxuICAgICAgICAgIG9uQ2hlY2tib3hDaGFuZ2U6IHRoaXMub25DaGVja2JveENoYW5nZSxcbiAgICAgICAgICBvbkNlbGxDbGljazogdGhpcy5vbkNlbGxDbGljayxcbiAgICAgICAgICBvbkNlbGxNb3VzZURvd246IHRoaXMub25DZWxsTW91c2VEb3duLFxuICAgICAgICAgIG9uQ2VsbE1vdXNlVXA6IHRoaXMub25DZWxsTW91c2VVcCxcbiAgICAgICAgICBlZGl0aW5nOiBlZGl0aW5nLFxuICAgICAgICAgIGVkaXRpbmdSb3dzOiB0aGlzLnByb3BzLmVkaXRpbmdSb3dzLFxuICAgICAgICAgIGVkaXRpbmdNZXRhOiB0aGlzLnByb3BzLmVkaXRpbmdNZXRhLFxuICAgICAgICAgIGVkaXRNb2RlOiB0aGlzLnByb3BzLmVkaXRNb2RlLFxuICAgICAgICAgIG9uUm93RWRpdENoYW5nZTogdGhpcy5wcm9wcy5vblJvd0VkaXRDaGFuZ2UsXG4gICAgICAgICAgb25FZGl0aW5nTWV0YUNoYW5nZTogdGhpcy5wcm9wcy5vbkVkaXRpbmdNZXRhQ2hhbmdlLFxuICAgICAgICAgIGdyb3VwUm93c0J5OiB0aGlzLnByb3BzLmdyb3VwUm93c0J5LFxuICAgICAgICAgIGNvbXBhcmVTZWxlY3Rpb25CeTogdGhpcy5wcm9wcy5jb21wYXJlU2VsZWN0aW9uQnksXG4gICAgICAgICAgZGF0YUtleTogdGhpcy5wcm9wcy5kYXRhS2V5LFxuICAgICAgICAgIHJvd0dyb3VwTW9kZTogdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUsXG4gICAgICAgICAgb25Sb3dFZGl0SW5pdDogdGhpcy5wcm9wcy5vblJvd0VkaXRJbml0LFxuICAgICAgICAgIHJvd0VkaXRWYWxpZGF0b3I6IHRoaXMucHJvcHMucm93RWRpdFZhbGlkYXRvcixcbiAgICAgICAgICBvblJvd0VkaXRTYXZlOiB0aGlzLnByb3BzLm9uUm93RWRpdFNhdmUsXG4gICAgICAgICAgb25Sb3dFZGl0Q29tcGxldGU6IHRoaXMucHJvcHMub25Sb3dFZGl0Q29tcGxldGUsXG4gICAgICAgICAgb25Sb3dFZGl0Q2FuY2VsOiB0aGlzLnByb3BzLm9uUm93RWRpdENhbmNlbCxcbiAgICAgICAgICBzZWxlY3Rpb246IHRoaXMucHJvcHMuc2VsZWN0aW9uLFxuICAgICAgICAgIGFsbG93Um93U2VsZWN0aW9uOiBhbGxvd1Jvd1NlbGVjdGlvbixcbiAgICAgICAgICBhbGxvd0NlbGxTZWxlY3Rpb246IGFsbG93Q2VsbFNlbGVjdGlvbixcbiAgICAgICAgICBzZWxlY3RPbkVkaXQ6IHRoaXMucHJvcHMuc2VsZWN0T25FZGl0LFxuICAgICAgICAgIHNlbGVjdGlvbk1vZGU6IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSxcbiAgICAgICAgICBzZWxlY3Rpb25Nb2RlSW5Db2x1bW46IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZUluQ29sdW1uLFxuICAgICAgICAgIGNlbGxDbGFzc05hbWU6IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZSxcbiAgICAgICAgICByZXNwb25zaXZlTGF5b3V0OiB0aGlzLnByb3BzLnJlc3BvbnNpdmVMYXlvdXQsXG4gICAgICAgICAgZnJvemVuUm93OiB0aGlzLnByb3BzLmZyb3plblJvdyxcbiAgICAgICAgICBzaG93U2VsZWN0aW9uRWxlbWVudDogdGhpcy5wcm9wcy5zaG93U2VsZWN0aW9uRWxlbWVudCxcbiAgICAgICAgICBzaG93Um93UmVvcmRlckVsZW1lbnQ6IHRoaXMucHJvcHMuc2hvd1Jvd1Jlb3JkZXJFbGVtZW50LFxuICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgICBleHBhbmRlZFJvd0ljb246IHRoaXMucHJvcHMuZXhwYW5kZWRSb3dJY29uLFxuICAgICAgICAgIGNvbGxhcHNlZFJvd0ljb246IHRoaXMucHJvcHMuY29sbGFwc2VkUm93SWNvbixcbiAgICAgICAgICByb3dDbGFzc05hbWU6IHRoaXMucHJvcHMucm93Q2xhc3NOYW1lLFxuICAgICAgICAgIHZpcnR1YWxTY3JvbGxlck9wdGlvbnM6IHRoaXMucHJvcHMudmlydHVhbFNjcm9sbGVyT3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRXhwYW5zaW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckV4cGFuc2lvbihyb3dEYXRhLCBpbmRleCwgZXhwYW5kZWQsIGlzU3ViaGVhZGVyR3JvdXBpbmcsIGNvbFNwYW4pIHtcbiAgICAgIGlmIChleHBhbmRlZCAmJiAhKGlzU3ViaGVhZGVyR3JvdXBpbmcgJiYgdGhpcy5wcm9wcy5leHBhbmRhYmxlUm93R3JvdXBzKSkge1xuICAgICAgICB2YXIgY29udGVudCA9IE9iamVjdFV0aWxzLmdldEpTWEVsZW1lbnQodGhpcy5wcm9wcy5yb3dFeHBhbnNpb25UZW1wbGF0ZSwgcm93RGF0YSwge1xuICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlkID0gXCJcIi5jb25jYXQodGhpcy5wcm9wcy50YWJsZVNlbGVjdG9yLCBcIl9jb250ZW50X1wiKS5jb25jYXQoaW5kZXgsIFwiX2V4cGFuZGVkXCIpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWRhdGF0YWJsZS1yb3ctZXhwYW5zaW9uXCIsXG4gICAgICAgICAgcm9sZTogXCJyb3dcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcbiAgICAgICAgICByb2xlOiBcImNlbGxcIixcbiAgICAgICAgICBjb2xTcGFuOiBjb2xTcGFuXG4gICAgICAgIH0sIGNvbnRlbnQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckdyb3VwRm9vdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckdyb3VwRm9vdGVyKHJvd0RhdGEsIGluZGV4LCBleHBhbmRlZCwgaXNTdWJoZWFkZXJHcm91cGluZywgY29sU3Bhbikge1xuICAgICAgaWYgKGlzU3ViaGVhZGVyR3JvdXBpbmcgJiYgdGhpcy5zaG91bGRSZW5kZXJSb3dHcm91cEZvb3Rlcih0aGlzLnByb3BzLnZhbHVlLCByb3dEYXRhLCBpbmRleCAtIHRoaXMucHJvcHMuZmlyc3QsIGV4cGFuZGVkKSkge1xuICAgICAgICB2YXIgY29udGVudCA9IE9iamVjdFV0aWxzLmdldEpTWEVsZW1lbnQodGhpcy5wcm9wcy5yb3dHcm91cEZvb3RlclRlbXBsYXRlLCByb3dEYXRhLCB7XG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGNvbFNwYW46IGNvbFNwYW4sXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMudGFibGVQcm9wc1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLXJvd2dyb3VwLWZvb3RlclwiLFxuICAgICAgICAgIHJvbGU6IFwicm93XCJcbiAgICAgICAgfSwgY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWUubWFwKGZ1bmN0aW9uIChyb3dEYXRhLCBpKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF90aGlzNS5nZXRWaXJ0dWFsU2Nyb2xsZXJPcHRpb24oJ2dldEl0ZW1PcHRpb25zJykgPyBfdGhpczUuZ2V0VmlydHVhbFNjcm9sbGVyT3B0aW9uKCdnZXRJdGVtT3B0aW9ucycpKGkpLmluZGV4IDogX3RoaXM1LnByb3BzLmZpcnN0ICsgaTtcblxuICAgICAgICB2YXIga2V5ID0gX3RoaXM1LmdldFJvd0tleShyb3dEYXRhLCBpbmRleCk7XG5cbiAgICAgICAgdmFyIGV4cGFuZGVkID0gX3RoaXM1LmlzUm93RXhwYW5kZWQocm93RGF0YSk7XG5cbiAgICAgICAgdmFyIGlzU3ViaGVhZGVyR3JvdXBpbmcgPSBfdGhpczUuaXNTdWJoZWFkZXJHcm91cGluZygpO1xuXG4gICAgICAgIHZhciBjb2xTcGFuID0gX3RoaXM1LmdldENvbHVtbnNMZW5ndGgoKTtcblxuICAgICAgICB2YXIgZ3JvdXBIZWFkZXIgPSBfdGhpczUucmVuZGVyR3JvdXBIZWFkZXIocm93RGF0YSwgaW5kZXgsIGV4cGFuZGVkLCBpc1N1YmhlYWRlckdyb3VwaW5nLCBjb2xTcGFuKTtcblxuICAgICAgICB2YXIgcm93ID0gX3RoaXM1LnJlbmRlclJvdyhyb3dEYXRhLCBpbmRleCwgZXhwYW5kZWQpO1xuXG4gICAgICAgIHZhciBleHBhbnNpb24gPSBfdGhpczUucmVuZGVyRXhwYW5zaW9uKHJvd0RhdGEsIGluZGV4LCBleHBhbmRlZCwgaXNTdWJoZWFkZXJHcm91cGluZywgY29sU3Bhbik7XG5cbiAgICAgICAgdmFyIGdyb3VwRm9vdGVyID0gX3RoaXM1LnJlbmRlckdyb3VwRm9vdGVyKHJvd0RhdGEsIGluZGV4LCBleHBhbmRlZCwgaXNTdWJoZWFkZXJHcm91cGluZywgY29sU3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7XG4gICAgICAgICAga2V5OiBrZXlcbiAgICAgICAgfSwgZ3JvdXBIZWFkZXIsIHJvdywgZXhwYW5zaW9uLCBncm91cEZvb3Rlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLWRhdGF0YWJsZS10Ym9keScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgIHZhciBjb250ZW50ID0gdGhpcy5wcm9wcy5lbXB0eSA/IHRoaXMucmVuZGVyRW1wdHlDb250ZW50KCkgOiB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIHtcbiAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgIH0sIGNvbnRlbnQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUYWJsZUJvZHk7XG59KENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIG93bktleXMkNChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ0KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDYoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNigpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgRm9vdGVyQ2VsbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRm9vdGVyQ2VsbCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQ2KEZvb3RlckNlbGwpO1xuXG4gIGZ1bmN0aW9uIEZvb3RlckNlbGwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9vdGVyQ2VsbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlT2JqZWN0OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZvb3RlckNlbGwsIFt7XG4gICAga2V5OiBcImdldENvbHVtblByb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcChwcm9wKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb2x1bW4ucHJvcHNbcHJvcF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0eWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgICAgdmFyIGZvb3RlclN0eWxlID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdmb290ZXJTdHlsZScpO1xuICAgICAgdmFyIGNvbHVtblN0eWxlID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdzdHlsZScpO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJykgPyBPYmplY3QuYXNzaWduKHt9LCBjb2x1bW5TdHlsZSwgZm9vdGVyU3R5bGUsIHRoaXMuc3RhdGUuc3R5bGVPYmplY3QpIDogT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uU3R5bGUsIGZvb3RlclN0eWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlU3RpY2t5UG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU3RpY2t5UG9zaXRpb24oKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSBfb2JqZWN0U3ByZWFkJDQoe30sIHRoaXMuc3RhdGUuc3R5bGVPYmplY3QpO1xuXG4gICAgICAgIHZhciBhbGlnbiA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnYWxpZ25Gcm96ZW4nKTtcblxuICAgICAgICBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICB2YXIgcmlnaHQgPSAwO1xuICAgICAgICAgIHZhciBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgcmlnaHQgPSBEb21IYW5kbGVyLmdldE91dGVyV2lkdGgobmV4dCkgKyBwYXJzZUZsb2F0KG5leHQuc3R5bGUucmlnaHQgfHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVPYmplY3RbJ3JpZ2h0J10gPSByaWdodCArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGxlZnQgPSAwO1xuICAgICAgICAgIHZhciBwcmV2ID0gdGhpcy5lbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGxlZnQgPSBEb21IYW5kbGVyLmdldE91dGVyV2lkdGgocHJldikgKyBwYXJzZUZsb2F0KHByZXYuc3R5bGUubGVmdCB8fCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZU9iamVjdFsnbGVmdCddID0gbGVmdCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdHlsZU9iamVjdDogc3R5bGVPYmplY3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJykpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGlja3lQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0aWNreVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgdmFyIGFsaWduID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdhbGlnbicpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5nZXRDb2x1bW5Qcm9wKCdmb290ZXJDbGFzc05hbWUnKSwgdGhpcy5nZXRDb2x1bW5Qcm9wKCdjbGFzc05hbWUnKSwgX2RlZmluZVByb3BlcnR5KHtcbiAgICAgICAgJ3AtZnJvemVuLWNvbHVtbic6IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJylcbiAgICAgIH0sIFwicC1hbGlnbi1cIi5jb25jYXQoYWxpZ24pLCAhIWFsaWduKSk7XG4gICAgICB2YXIgY29sU3BhbiA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnY29sU3BhbicpO1xuICAgICAgdmFyIHJvd1NwYW4gPSB0aGlzLmdldENvbHVtblByb3AoJ3Jvd1NwYW4nKTtcbiAgICAgIHZhciBjb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLmdldENvbHVtblByb3AoJ2Zvb3RlcicpLCB7XG4gICAgICAgIHByb3BzOiB0aGlzLnByb3BzLnRhYmxlUHJvcHNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuZWwgPSBlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcm9sZTogXCJjZWxsXCIsXG4gICAgICAgIGNvbFNwYW46IGNvbFNwYW4sXG4gICAgICAgIHJvd1NwYW46IHJvd1NwYW5cbiAgICAgIH0sIGNvbnRlbnQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb290ZXJDZWxsO1xufShDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkNShEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ1KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ1KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBUYWJsZUZvb3RlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGFibGVGb290ZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkNShUYWJsZUZvb3Rlcik7XG5cbiAgZnVuY3Rpb24gVGFibGVGb290ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhYmxlRm9vdGVyKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUYWJsZUZvb3RlciwgW3tcbiAgICBrZXk6IFwiaGFzRm9vdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0Zvb3RlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvb3RlckNvbHVtbkdyb3VwID8gdHJ1ZSA6IHRoaXMucHJvcHMuY29sdW1ucyA/IHRoaXMucHJvcHMuY29sdW1ucy5zb21lKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgcmV0dXJuIGNvbCAmJiBjb2wucHJvcHMuZm9vdGVyO1xuICAgICAgfSkgOiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyR3JvdXBGb290ZXJDZWxsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJHcm91cEZvb3RlckNlbGxzKHJvdykge1xuICAgICAgdmFyIGNvbHVtbnMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb290ZXJDZWxscyhjb2x1bW5zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRm9vdGVyQ2VsbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9vdGVyQ2VsbHMoY29sdW1ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjb2x1bW5zLCBmdW5jdGlvbiAoY29sLCBpKSB7XG4gICAgICAgIHZhciBpc1Zpc2libGUgPSBjb2wgPyAhY29sLnByb3BzLmhpZGRlbiA6IHRydWU7XG4gICAgICAgIHZhciBrZXkgPSBjb2wgPyBjb2wucHJvcHMuY29sdW1uS2V5IHx8IGNvbC5wcm9wcy5maWVsZCB8fCBpIDogaTtcbiAgICAgICAgcmV0dXJuIGlzVmlzaWJsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXJDZWxsLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdGFibGVQcm9wczogX3RoaXMucHJvcHMudGFibGVQcm9wcyxcbiAgICAgICAgICBjb2x1bW46IGNvbFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuZm9vdGVyQ29sdW1uR3JvdXApIHtcbiAgICAgICAgdmFyIHJvd3MgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuZm9vdGVyQ29sdW1uR3JvdXAucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gcm93cy5tYXAoZnVuY3Rpb24gKHJvdywgaSkge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHtcbiAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgIHJvbGU6IFwicm93XCJcbiAgICAgICAgICB9LCBfdGhpczIucmVuZGVyR3JvdXBGb290ZXJDZWxscyhyb3cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHtcbiAgICAgICAgcm9sZTogXCJyb3dcIlxuICAgICAgfSwgdGhpcy5yZW5kZXJGb290ZXJDZWxscyh0aGlzLnByb3BzLmNvbHVtbnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLmhhc0Zvb3RlcigpKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRmb290XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1kYXRhdGFibGUtdGZvb3RcIlxuICAgICAgICB9LCBjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRhYmxlRm9vdGVyO1xufShDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkNChEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBIZWFkZXJDaGVja2JveCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSGVhZGVyQ2hlY2tib3gsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkNChIZWFkZXJDaGVja2JveCk7XG5cbiAgZnVuY3Rpb24gSGVhZGVyQ2hlY2tib3gocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2hlY2tib3gpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkOiBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMub25Gb2N1cyA9IF90aGlzLm9uRm9jdXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25CbHVyID0gX3RoaXMub25CbHVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uS2V5RG93biA9IF90aGlzLm9uS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGVhZGVyQ2hlY2tib3gsIFt7XG4gICAga2V5OiBcIm9uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25CbHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLnByb3BzLmNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5RG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICAgIHRoaXMub25DbGljayhldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgYm94Q2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1jaGVja2JveC1ib3ggcC1jb21wb25lbnQnLCB7XG4gICAgICAgICdwLWhpZ2hsaWdodCc6IHRoaXMucHJvcHMuY2hlY2tlZCxcbiAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAncC1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXNlZFxuICAgICAgfSk7XG4gICAgICB2YXIgaWNvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY2hlY2tib3gtaWNvbicsIHtcbiAgICAgICAgJ3BpIHBpLWNoZWNrJzogdGhpcy5wcm9wcy5jaGVja2VkXG4gICAgICB9KTtcbiAgICAgIHZhciB0YWJJbmRleCA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyBudWxsIDogMDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja1xuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGJveENsYXNzTmFtZSxcbiAgICAgICAgcm9sZTogXCJjaGVja2JveFwiLFxuICAgICAgICBcImFyaWEtY2hlY2tlZFwiOiB0aGlzLnByb3BzLmNoZWNrZWQsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgICAgIH0pKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhlYWRlckNoZWNrYm94O1xufShDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMyh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMkMyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlciQzKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDMoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDMoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIENvbHVtbkZpbHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sdW1uRmlsdGVyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDMoQ29sdW1uRmlsdGVyKTtcblxuICBmdW5jdGlvbiBDb2x1bW5GaWx0ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sdW1uRmlsdGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3ZlcmxheVZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5vdmVybGF5UmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLmZpbHRlckNhbGxiYWNrID0gX3RoaXMuZmlsdGVyQ2FsbGJhY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZmlsdGVyQXBwbHlDYWxsYmFjayA9IF90aGlzLmZpbHRlckFwcGx5Q2FsbGJhY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25PcGVyYXRvckNoYW5nZSA9IF90aGlzLm9uT3BlcmF0b3JDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuYWRkQ29uc3RyYWludCA9IF90aGlzLmFkZENvbnN0cmFpbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2xlYXJGaWx0ZXIgPSBfdGhpcy5jbGVhckZpbHRlci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5hcHBseUZpbHRlciA9IF90aGlzLmFwcGx5RmlsdGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBfdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvZ2dsZU1lbnUgPSBfdGhpcy50b2dnbGVNZW51LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uT3ZlcmxheUVudGVyID0gX3RoaXMub25PdmVybGF5RW50ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25PdmVybGF5RXhpdCA9IF90aGlzLm9uT3ZlcmxheUV4aXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25PdmVybGF5RXhpdGVkID0gX3RoaXMub25PdmVybGF5RXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ29udGVudEtleURvd24gPSBfdGhpcy5vbkNvbnRlbnRLZXlEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ29udGVudENsaWNrID0gX3RoaXMub25Db250ZW50Q2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Db250ZW50TW91c2VEb3duID0gX3RoaXMub25Db250ZW50TW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb2x1bW5GaWx0ZXIsIFt7XG4gICAga2V5OiBcImZpZWxkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5Qcm9wKCdmaWx0ZXJGaWVsZCcpIHx8IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmllbGQnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3ZlcmxheVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZiA/IHRoaXMub3ZlcmxheVJlZi5jdXJyZW50IDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyTW9kZWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlcnNbdGhpcy5maWVsZF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbHRlclN0b3JlTW9kZWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlcnNTdG9yZVt0aGlzLmZpZWxkXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzRmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0ZpbHRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcnNTdG9yZSkge1xuICAgICAgICB2YXIgZmllbGRGaWx0ZXIgPSB0aGlzLnByb3BzLmZpbHRlcnNTdG9yZVt0aGlzLmZpZWxkXTtcbiAgICAgICAgcmV0dXJuIGZpZWxkRmlsdGVyICYmIChmaWVsZEZpbHRlci5vcGVyYXRvciA/ICF0aGlzLmlzRmlsdGVyQmxhbmsoZmllbGRGaWx0ZXIuY29uc3RyYWludHNbMF0udmFsdWUpIDogIXRoaXMuaXNGaWx0ZXJCbGFuayhmaWVsZEZpbHRlci52YWx1ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc1Jvd0ZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNSb3dGaWx0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJNb2RlbCAmJiAhdGhpcy5pc0ZpbHRlckJsYW5rKHRoaXMuZmlsdGVyTW9kZWwudmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0ZpbHRlckJsYW5rXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmlsdGVyQmxhbmsoZmlsdGVyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNFbXB0eShmaWx0ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1Jvd01hdGNoTW9kZVNlbGVjdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzUm93TWF0Y2hNb2RlU2VsZWN0ZWQobWF0Y2hNb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJNb2RlbCAmJiB0aGlzLmZpbHRlck1vZGVsLm1hdGNoTW9kZSA9PT0gbWF0Y2hNb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG93TWVudUJ1dHRvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93TWVudUJ1dHRvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbHVtblByb3AoJ3Nob3dGaWx0ZXJNZW51JykgJiYgKHRoaXMucHJvcHMuZGlzcGxheSA9PT0gJ3JvdycgPyB0aGlzLmdldENvbHVtblByb3AoJ2RhdGFUeXBlJykgIT09ICdib29sZWFuJyA6IHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaE1vZGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoTW9kZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5Qcm9wKCdmaWx0ZXJNYXRjaE1vZGVPcHRpb25zJykgfHwgUHJpbWVSZWFjdC5maWx0ZXJNYXRjaE1vZGVPcHRpb25zW3RoaXMuZmluZERhdGFUeXBlKCldLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IGxvY2FsZU9wdGlvbihrZXkpLFxuICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1Nob3dNYXRjaE1vZGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2hvd01hdGNoTW9kZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5Qcm9wKCdkYXRhVHlwZScpICE9PSAnYm9vbGVhbicgJiYgdGhpcy5nZXRDb2x1bW5Qcm9wKCdzaG93RmlsdGVyTWF0Y2hNb2RlcycpICYmIHRoaXMubWF0Y2hNb2RlcygpICYmIHRoaXMuZ2V0Q29sdW1uUHJvcCgnc2hvd0ZpbHRlck1lbnVPcHRpb25zJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU2hvd09wZXJhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2hvd09wZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uUHJvcCgnc2hvd0ZpbHRlck9wZXJhdG9yJykgJiYgdGhpcy5maWx0ZXJNb2RlbCAmJiB0aGlzLmZpbHRlck1vZGVsLm9wZXJhdG9yICYmIHRoaXMuZ2V0Q29sdW1uUHJvcCgnc2hvd0ZpbHRlck1lbnVPcHRpb25zJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dSZW1vdmVJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dSZW1vdmVJY29uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRDb25zdHJhaW50cygpLmxlbmd0aCA+IDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU2hvd0FkZENvbnN0cmFpbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTaG93QWRkQ29uc3RyYWludCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbHVtblByb3AoJ3Nob3dBZGRCdXR0b24nKSAmJiB0aGlzLmZpbHRlck1vZGVsICYmIHRoaXMuZmlsdGVyTW9kZWwub3BlcmF0b3IgJiYgdGhpcy5maWVsZENvbnN0cmFpbnRzKCkgJiYgdGhpcy5maWVsZENvbnN0cmFpbnRzKCkubGVuZ3RoIDwgdGhpcy5nZXRDb2x1bW5Qcm9wKCdtYXhDb25zdHJhaW50cycpICYmIHRoaXMuZ2V0Q29sdW1uUHJvcCgnc2hvd0ZpbHRlck1lbnVPcHRpb25zJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzT3V0c2lkZUNsaWNrZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPdXRzaWRlQ2xpY2tlZCh0YXJnZXQpIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc1RhcmdldENsaWNrZWQodGFyZ2V0KSAmJiB0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmN1cnJlbnQgJiYgISh0aGlzLm92ZXJsYXlSZWYuY3VycmVudC5pc1NhbWVOb2RlKHRhcmdldCkgfHwgdGhpcy5vdmVybGF5UmVmLmN1cnJlbnQuY29udGFpbnModGFyZ2V0KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVGFyZ2V0Q2xpY2tlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RhcmdldENsaWNrZWQodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uICYmICh0aGlzLmljb24uaXNTYW1lTm9kZSh0YXJnZXQpIHx8IHRoaXMuaWNvbi5jb250YWlucyh0YXJnZXQpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29sdW1uUHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb2x1bW5Qcm9wKHByb3ApIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbHVtbi5wcm9wc1twcm9wXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RGVmYXVsdENvbnN0cmFpbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnN0cmFpbnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJzU3RvcmUgJiYgdGhpcy5maWx0ZXJTdG9yZU1vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclN0b3JlTW9kZWwub3BlcmF0b3IpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF0Y2hNb2RlOiB0aGlzLmZpbHRlclN0b3JlTW9kZWwuY29uc3RyYWludHNbMF0ubWF0Y2hNb2RlLFxuICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMuZmlsdGVyU3RvcmVNb2RlbC5vcGVyYXRvclxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1hdGNoTW9kZTogdGhpcy5maWx0ZXJTdG9yZU1vZGVsLm1hdGNoTW9kZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZERhdGFUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmREYXRhVHlwZSgpIHtcbiAgICAgIHZhciBkYXRhVHlwZSA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZGF0YVR5cGUnKTtcbiAgICAgIHZhciBtYXRjaE1vZGUgPSB0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlck1hdGNoTW9kZScpO1xuXG4gICAgICB2YXIgaGFzTWF0Y2hNb2RlID0gZnVuY3Rpb24gaGFzTWF0Y2hNb2RlKGtleSkge1xuICAgICAgICByZXR1cm4gUHJpbWVSZWFjdC5maWx0ZXJNYXRjaE1vZGVPcHRpb25zW2tleV0uc29tZShmdW5jdGlvbiAobW9kZSkge1xuICAgICAgICAgIHJldHVybiBtb2RlID09PSBtYXRjaE1vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKG1hdGNoTW9kZSA9PT0gJ2N1c3RvbScgJiYgIWhhc01hdGNoTW9kZShkYXRhVHlwZSkpIHtcbiAgICAgICAgUHJpbWVSZWFjdC5maWx0ZXJNYXRjaE1vZGVPcHRpb25zW2RhdGFUeXBlXS5wdXNoKEZpbHRlck1hdGNoTW9kZS5DVVNUT00pO1xuICAgICAgICByZXR1cm4gZGF0YVR5cGU7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoTW9kZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoUHJpbWVSZWFjdC5maWx0ZXJNYXRjaE1vZGVPcHRpb25zKS5maW5kKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gaGFzTWF0Y2hNb2RlKGtleSk7XG4gICAgICAgIH0pIHx8IGRhdGFUeXBlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVR5cGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyRmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyRmlsdGVyKCkge1xuICAgICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZDtcbiAgICAgIHZhciBmaWx0ZXJDbGVhckNhbGxiYWNrID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdvbkZpbHRlckNsZWFyJyk7XG4gICAgICB2YXIgZGVmYXVsdENvbnN0cmFpbnQgPSB0aGlzLmdldERlZmF1bHRDb25zdHJhaW50KCk7XG5cbiAgICAgIHZhciBmaWx0ZXJzID0gX29iamVjdFNwcmVhZCQzKHt9LCB0aGlzLnByb3BzLmZpbHRlcnMpO1xuXG4gICAgICBpZiAoZmlsdGVyc1tmaWVsZF0ub3BlcmF0b3IpIHtcbiAgICAgICAgZmlsdGVyc1tmaWVsZF0uY29uc3RyYWludHMuc3BsaWNlKDEpO1xuICAgICAgICBmaWx0ZXJzW2ZpZWxkXS5vcGVyYXRvciA9IGRlZmF1bHRDb25zdHJhaW50Lm9wZXJhdG9yO1xuICAgICAgICBmaWx0ZXJzW2ZpZWxkXS5jb25zdHJhaW50c1swXSA9IHtcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBtYXRjaE1vZGU6IGRlZmF1bHRDb25zdHJhaW50Lm1hdGNoTW9kZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyc1tmaWVsZF0udmFsdWUgPSBudWxsO1xuICAgICAgICBmaWx0ZXJzW2ZpZWxkXS5tYXRjaE1vZGUgPSBkZWZhdWx0Q29uc3RyYWludC5tYXRjaE1vZGU7XG4gICAgICB9XG5cbiAgICAgIGZpbHRlckNsZWFyQ2FsbGJhY2sgJiYgZmlsdGVyQ2xlYXJDYWxsYmFjaygpO1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzKTtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJBcHBseSgpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGx5RmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5RmlsdGVyKCkge1xuICAgICAgdmFyIGZpbHRlckFwcGx5Q2xpY2tDYWxsYmFjayA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnb25GaWx0ZXJBcHBseUNsaWNrJyk7XG4gICAgICBmaWx0ZXJBcHBseUNsaWNrQ2FsbGJhY2sgJiYgZmlsdGVyQXBwbHlDbGlja0NhbGxiYWNrKHtcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIGNvbnN0cmFpbnRzOiB0aGlzLmZpbHRlck1vZGVsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJBcHBseSgpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvZ2dsZU1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG92ZXJsYXlWaXNpYmxlOiAhcHJldlN0YXRlLm92ZXJsYXlWaXNpYmxlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Ub2dnbGVCdXR0b25LZXlEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uVG9nZ2xlQnV0dG9uS2V5RG93bihldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNhYmxlID0gRG9tSGFuZGxlci5nZXRGaXJzdEZvY3VzYWJsZUVsZW1lbnQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIGZvY3VzYWJsZSAmJiBmb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNvbnRlbnRLZXlEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ29udGVudEtleURvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLmljb24gJiYgdGhpcy5pY29uLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uSW5wdXRDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShldmVudCwgaW5kZXgpIHtcbiAgICAgIHZhciBmaWx0ZXJzID0gX29iamVjdFNwcmVhZCQzKHt9LCB0aGlzLnByb3BzLmZpbHRlcnMpO1xuXG4gICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkgPT09ICdtZW51Jykge1xuICAgICAgICBmaWx0ZXJzW3RoaXMuZmllbGRdLmNvbnN0cmFpbnRzW2luZGV4XS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyc1t0aGlzLmZpZWxkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGZpbHRlcnMpO1xuXG4gICAgICBpZiAoIXRoaXMuZ2V0Q29sdW1uUHJvcCgnc2hvd0FwcGx5QnV0dG9uJykgfHwgdGhpcy5wcm9wcy5kaXNwbGF5ID09PSAncm93Jykge1xuICAgICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Sb3dNYXRjaE1vZGVDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dNYXRjaE1vZGVDaGFuZ2UobWF0Y2hNb2RlKSB7XG4gICAgICB2YXIgZmlsdGVyTWF0Y2hNb2RlQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLmdldENvbHVtblByb3AoJ29uRmlsdGVyTWF0Y2hNb2RlQ2hhbmdlJyk7XG5cbiAgICAgIHZhciBmaWx0ZXJzID0gX29iamVjdFNwcmVhZCQzKHt9LCB0aGlzLnByb3BzLmZpbHRlcnMpO1xuXG4gICAgICBmaWx0ZXJzW3RoaXMuZmllbGRdLm1hdGNoTW9kZSA9IG1hdGNoTW9kZTtcbiAgICAgIGZpbHRlck1hdGNoTW9kZUNoYW5nZUNhbGxiYWNrICYmIGZpbHRlck1hdGNoTW9kZUNoYW5nZUNhbGxiYWNrKHtcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIG1hdGNoTW9kZTogbWF0Y2hNb2RlXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycyk7XG4gICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQXBwbHkoKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblJvd01hdGNoTW9kZUtleURvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Sb3dNYXRjaE1vZGVLZXlEb3duKGV2ZW50LCBtYXRjaE1vZGUsIGNsZWFyKSB7XG4gICAgICB2YXIgaXRlbSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICB2YXIgbmV4dEl0ZW0gPSB0aGlzLmZpbmROZXh0SXRlbShpdGVtKTtcblxuICAgICAgICAgIGlmIChuZXh0SXRlbSkge1xuICAgICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICBuZXh0SXRlbS50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5maW5kUHJldkl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICBpZiAocHJldkl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgcHJldkl0ZW0udGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgcHJldkl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICBjbGVhciA/IHRoaXMuY2xlYXJGaWx0ZXIoKSA6IHRoaXMub25Sb3dNYXRjaE1vZGVDaGFuZ2UobWF0Y2hNb2RlLnZhbHVlKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk9wZXJhdG9yQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3BlcmF0b3JDaGFuZ2UoZSkge1xuICAgICAgdmFyIGZpbHRlck9wZXJhdGlvbkNoYW5nZUNhbGxiYWNrID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdvbkZpbHRlck9wZXJhdG9yQ2hhbmdlJyk7XG4gICAgICB2YXIgdmFsdWUgPSBlLnZhbHVlO1xuXG4gICAgICB2YXIgZmlsdGVycyA9IF9vYmplY3RTcHJlYWQkMyh7fSwgdGhpcy5wcm9wcy5maWx0ZXJzKTtcblxuICAgICAgZmlsdGVyc1t0aGlzLmZpZWxkXS5vcGVyYXRvciA9IHZhbHVlO1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzKTtcbiAgICAgIGZpbHRlck9wZXJhdGlvbkNoYW5nZUNhbGxiYWNrICYmIGZpbHRlck9wZXJhdGlvbkNoYW5nZUNhbGxiYWNrKHtcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIG9wZXJhdG9yOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5nZXRDb2x1bW5Qcm9wKCdzaG93QXBwbHlCdXR0b24nKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25NZW51TWF0Y2hNb2RlQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudU1hdGNoTW9kZUNoYW5nZSh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBmaWx0ZXJNYXRjaE1vZGVDaGFuZ2VDYWxsYmFjayA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnb25GaWx0ZXJNYXRjaE1vZGVDaGFuZ2UnKTtcblxuICAgICAgdmFyIGZpbHRlcnMgPSBfb2JqZWN0U3ByZWFkJDMoe30sIHRoaXMucHJvcHMuZmlsdGVycyk7XG5cbiAgICAgIGZpbHRlcnNbdGhpcy5maWVsZF0uY29uc3RyYWludHNbaW5kZXhdLm1hdGNoTW9kZSA9IHZhbHVlO1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzKTtcbiAgICAgIGZpbHRlck1hdGNoTW9kZUNoYW5nZUNhbGxiYWNrICYmIGZpbHRlck1hdGNoTW9kZUNoYW5nZUNhbGxiYWNrKHtcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIG1hdGNoTW9kZTogdmFsdWUsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5nZXRDb2x1bW5Qcm9wKCdzaG93QXBwbHlCdXR0b24nKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ29uc3RyYWludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb25zdHJhaW50KCkge1xuICAgICAgdmFyIGZpbHRlckNvbnN0cmFpbnRBZGRDYWxsYmFjayA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnb25GaWx0ZXJDb25zdHJhaW50QWRkJyk7XG4gICAgICB2YXIgZGVmYXVsdENvbnN0cmFpbnQgPSB0aGlzLmdldERlZmF1bHRDb25zdHJhaW50KCk7XG5cbiAgICAgIHZhciBmaWx0ZXJzID0gX29iamVjdFNwcmVhZCQzKHt9LCB0aGlzLnByb3BzLmZpbHRlcnMpO1xuXG4gICAgICB2YXIgbmV3Q29uc3RyYWludCA9IHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIG1hdGNoTW9kZTogZGVmYXVsdENvbnN0cmFpbnQubWF0Y2hNb2RlXG4gICAgICB9O1xuICAgICAgZmlsdGVyc1t0aGlzLmZpZWxkXS5jb25zdHJhaW50cy5wdXNoKG5ld0NvbnN0cmFpbnQpO1xuICAgICAgZmlsdGVyQ29uc3RyYWludEFkZENhbGxiYWNrICYmIGZpbHRlckNvbnN0cmFpbnRBZGRDYWxsYmFjayh7XG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBjb25zdHJhaW50OiBuZXdDb25zdHJhaW50XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycyk7XG5cbiAgICAgIGlmICghdGhpcy5nZXRDb2x1bW5Qcm9wKCdzaG93QXBwbHlCdXR0b24nKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ29uc3RyYWludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDb25zdHJhaW50KGluZGV4KSB7XG4gICAgICB2YXIgZmlsdGVyQ29uc3RyYWludFJlbW92ZUNhbGxiYWNrID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdvbkZpbHRlckNvbnN0cmFpbnRSZW1vdmUnKTtcblxuICAgICAgdmFyIGZpbHRlcnMgPSBfb2JqZWN0U3ByZWFkJDMoe30sIHRoaXMucHJvcHMuZmlsdGVycyk7XG5cbiAgICAgIHZhciByZW1vdmVkQ29uc3RyYWludCA9IGZpbHRlcnNbdGhpcy5maWVsZF0uY29uc3RyYWludHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGZpbHRlckNvbnN0cmFpbnRSZW1vdmVDYWxsYmFjayAmJiBmaWx0ZXJDb25zdHJhaW50UmVtb3ZlQ2FsbGJhY2soe1xuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgY29uc3RyYWludDogcmVtb3ZlZENvbnN0cmFpbnRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzKTtcblxuICAgICAgaWYgKCF0aGlzLmdldENvbHVtblByb3AoJ3Nob3dBcHBseUJ1dHRvbicpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJBcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kTmV4dEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZE5leHRJdGVtKGl0ZW0pIHtcbiAgICAgIHZhciBuZXh0SXRlbSA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHRJdGVtKSByZXR1cm4gRG9tSGFuZGxlci5oYXNDbGFzcyhuZXh0SXRlbSwgJ3AtY29sdW1uLWZpbHRlci1zZXBhcmF0b3InKSA/IHRoaXMuZmluZE5leHRJdGVtKG5leHRJdGVtKSA6IG5leHRJdGVtO2Vsc2UgcmV0dXJuIGl0ZW0ucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFByZXZJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRQcmV2SXRlbShpdGVtKSB7XG4gICAgICB2YXIgcHJldkl0ZW0gPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAocHJldkl0ZW0pIHJldHVybiBEb21IYW5kbGVyLmhhc0NsYXNzKHByZXZJdGVtLCAncC1jb2x1bW4tZmlsdGVyLXNlcGFyYXRvcicpID8gdGhpcy5maW5kUHJldkl0ZW0ocHJldkl0ZW0pIDogcHJldkl0ZW07ZWxzZSByZXR1cm4gaXRlbS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhpZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNvbnRlbnRDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvbnRlbnRDbGljayhldmVudCkge1xuICAgICAgdGhpcy5zZWxmQ2xpY2sgPSB0cnVlO1xuICAgICAgT3ZlcmxheVNlcnZpY2UuZW1pdCgnb3ZlcmxheS1jbGljaycsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIHRhcmdldDogdGhpcy5vdmVybGF5XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db250ZW50TW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ29udGVudE1vdXNlRG93bigpIHtcbiAgICAgIHRoaXMuc2VsZkNsaWNrID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25PdmVybGF5RW50ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PdmVybGF5RW50ZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgWkluZGV4VXRpbHMuc2V0KCdvdmVybGF5JywgdGhpcy5vdmVybGF5LCBQcmltZVJlYWN0LmF1dG9aSW5kZXgsIFByaW1lUmVhY3QuekluZGV4WydvdmVybGF5J10pO1xuICAgICAgRG9tSGFuZGxlci5hbGlnbk92ZXJsYXkodGhpcy5vdmVybGF5LCB0aGlzLmljb24sIFByaW1lUmVhY3QuYXBwZW5kVG8sIGZhbHNlKTtcbiAgICAgIHRoaXMuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5iaW5kUmVzaXplTGlzdGVuZXIoKTtcblxuICAgICAgdGhpcy5vdmVybGF5RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghX3RoaXMyLmlzT3V0c2lkZUNsaWNrZWQoZS50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMyLnNlbGZDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIE92ZXJsYXlTZXJ2aWNlLm9uKCdvdmVybGF5LWNsaWNrJywgdGhpcy5vdmVybGF5RXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uT3ZlcmxheUV4aXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PdmVybGF5RXhpdCgpIHtcbiAgICAgIHRoaXMub25PdmVybGF5SGlkZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk92ZXJsYXlFeGl0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PdmVybGF5RXhpdGVkKCkge1xuICAgICAgWkluZGV4VXRpbHMuY2xlYXIodGhpcy5vdmVybGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25PdmVybGF5SGlkZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk92ZXJsYXlIaWRlKCkge1xuICAgICAgdGhpcy51bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgdGhpcy51bmJpbmRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgdGhpcy51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgT3ZlcmxheVNlcnZpY2Uub2ZmKCdvdmVybGF5LWNsaWNrJywgdGhpcy5vdmVybGF5RXZlbnRMaXN0ZW5lcik7XG4gICAgICB0aGlzLm92ZXJsYXlFdmVudExpc3RlbmVyID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZE91dHNpZGVDbGlja0xpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghX3RoaXMzLnNlbGZDbGljayAmJiBfdGhpczMuaXNPdXRzaWRlQ2xpY2tlZChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICBfdGhpczMuaGlkZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMy5zZWxmQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgIGlmICh0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGZDbGljayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kU2Nyb2xsTGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG5ldyBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcih0aGlzLmljb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXM0LnN0YXRlLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICBfdGhpczQuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kU2Nyb2xsTGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kUmVzaXplTGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5yZXNpemVMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpczUuc3RhdGUub3ZlcmxheVZpc2libGUgJiYgIURvbUhhbmRsZXIuaXNUb3VjaERldmljZSgpKSB7XG4gICAgICAgICAgICBfdGhpczUuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZFJlc2l6ZUxpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgaWYgKHRoaXMucmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmllbGRDb25zdHJhaW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWVsZENvbnN0cmFpbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTW9kZWwgPyB0aGlzLmZpbHRlck1vZGVsLmNvbnN0cmFpbnRzIHx8IFt0aGlzLmZpbHRlck1vZGVsXSA6IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvcGVyYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVyYXRvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlck1vZGVsLm9wZXJhdG9yO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvcGVyYXRvck9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlcmF0b3JPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIGxhYmVsOiBsb2NhbGVPcHRpb24oJ21hdGNoQWxsJyksXG4gICAgICAgIHZhbHVlOiBGaWx0ZXJPcGVyYXRvci5BTkRcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IGxvY2FsZU9wdGlvbignbWF0Y2hBbnknKSxcbiAgICAgICAgdmFsdWU6IEZpbHRlck9wZXJhdG9yLk9SXG4gICAgICB9XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibm9GaWx0ZXJMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub0ZpbHRlckxhYmVsKCkge1xuICAgICAgcmV0dXJuIGxvY2FsZU9wdGlvbignbm9GaWx0ZXInKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlUnVsZUJ1dHRvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVJ1bGVCdXR0b25MYWJlbCgpIHtcbiAgICAgIHJldHVybiBsb2NhbGVPcHRpb24oJ3JlbW92ZVJ1bGUnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkUnVsZUJ1dHRvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJ1bGVCdXR0b25MYWJlbCgpIHtcbiAgICAgIHJldHVybiBsb2NhbGVPcHRpb24oJ2FkZFJ1bGUnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJCdXR0b25MYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckJ1dHRvbkxhYmVsKCkge1xuICAgICAgcmV0dXJuIGxvY2FsZU9wdGlvbignY2xlYXInKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwbHlCdXR0b25MYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBseUJ1dHRvbkxhYmVsKCkge1xuICAgICAgcmV0dXJuIGxvY2FsZU9wdGlvbignYXBwbHknKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyQ2FsbGJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgICAgdmFyIGZpbHRlcnMgPSBfb2JqZWN0U3ByZWFkJDMoe30sIHRoaXMucHJvcHMuZmlsdGVycyk7XG5cbiAgICAgIHZhciBtZXRhID0gZmlsdGVyc1t0aGlzLmZpZWxkXTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGxheSA9PT0gJ21lbnUnICYmIG1ldGEgJiYgbWV0YS5vcGVyYXRvciA/IGZpbHRlcnNbdGhpcy5maWVsZF0uY29uc3RyYWludHNbaW5kZXhdLnZhbHVlID0gdmFsdWUgOiBmaWx0ZXJzW3RoaXMuZmllbGRdLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGZpbHRlcnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaWx0ZXJBcHBseUNhbGxiYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlckFwcGx5Q2FsbGJhY2soKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgYXJncyAmJiB0aGlzLmZpbHRlckNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckFwcGx5KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkgPT09ICdtZW51JyAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgIERvbUhhbmRsZXIuYWxpZ25PdmVybGF5KHRoaXMub3ZlcmxheSwgdGhpcy5pY29uLCBQcmltZVJlYWN0LmFwcGVuZFRvLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgT3ZlcmxheVNlcnZpY2Uub2ZmKCdvdmVybGF5LWNsaWNrJywgdGhpcy5vdmVybGF5RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMub3ZlcmxheUV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgIFpJbmRleFV0aWxzLmNsZWFyKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIHRoaXMub25PdmVybGF5SGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJGaWx0ZXJFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZpbHRlckVsZW1lbnQobW9kZWwsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdmFyIHZhbHVlID0gbW9kZWwgPyBtb2RlbC52YWx1ZSA6IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5Qcm9wKCdmaWx0ZXJFbGVtZW50JykgPyBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyRWxlbWVudCcpLCB7XG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGZpbHRlck1vZGVsOiBtb2RlbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBmaWx0ZXJBcHBseUNhbGxiYWNrOiB0aGlzLmZpbHRlckFwcGx5Q2FsbGJhY2ssXG4gICAgICAgIGZpbHRlckNhbGxiYWNrOiB0aGlzLmZpbHRlckNhbGxiYWNrXG4gICAgICB9KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0VGV4dCwge1xuICAgICAgICB0eXBlOiB0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlclR5cGUnKSxcbiAgICAgICAgdmFsdWU6IHZhbHVlIHx8ICcnLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczYub25JbnB1dENoYW5nZShlLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi1maWx0ZXJcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyUGxhY2Vob2xkZXInKSxcbiAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlck1heExlbmd0aCcpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUm93RmlsdGVyRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSb3dGaWx0ZXJFbGVtZW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheSA9PT0gJ3JvdycpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLnJlbmRlckZpbHRlckVsZW1lbnQodGhpcy5maWx0ZXJNb2RlbCwgMCk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtZmx1aWQgcC1jb2x1bW4tZmlsdGVyLWVsZW1lbnRcIlxuICAgICAgICB9LCBjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVGaWx0ZXJFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnVGaWx0ZXJFbGVtZW50KGZpZWxkQ29uc3RyYWludCwgaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkgPT09ICdtZW51Jykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJGaWx0ZXJFbGVtZW50KGZpZWxkQ29uc3RyYWludCwgaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTWVudUJ1dHRvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51QnV0dG9uKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnNob3dNZW51QnV0dG9uKCkpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY29sdW1uLWZpbHRlci1tZW51LWJ1dHRvbiBwLWxpbmsnLCB7XG4gICAgICAgICAgJ3AtY29sdW1uLWZpbHRlci1tZW51LWJ1dHRvbi1vcGVuJzogdGhpcy5zdGF0ZS5vdmVybGF5VmlzaWJsZSxcbiAgICAgICAgICAncC1jb2x1bW4tZmlsdGVyLW1lbnUtYnV0dG9uLWFjdGl2ZSc6IHRoaXMuaGFzRmlsdGVyKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczcuaWNvbiA9IGVsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogdHJ1ZSxcbiAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogdGhpcy5zdGF0ZS5vdmVybGF5VmlzaWJsZSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZU1lbnUsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uVG9nZ2xlQnV0dG9uS2V5RG93blxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwaSBwaS1maWx0ZXItaWNvbiBwaS1maWx0ZXJcIlxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDbGVhckJ1dHRvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhckJ1dHRvbigpIHtcbiAgICAgIGlmICh0aGlzLmdldENvbHVtblByb3AoJ3Nob3dDbGVhckJ1dHRvbicpICYmIHRoaXMucHJvcHMuZGlzcGxheSA9PT0gJ3JvdycpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY29sdW1uLWZpbHRlci1jbGVhci1idXR0b24gcC1saW5rJywge1xuICAgICAgICAgICdwLWhpZGRlbi1zcGFjZSc6ICF0aGlzLmhhc1Jvd0ZpbHRlcigpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgb25DbGljazogdGhpcy5jbGVhckZpbHRlclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwaSBwaS1maWx0ZXItc2xhc2hcIlxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJSb3dJdGVtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSb3dJdGVtcygpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5pc1Nob3dNYXRjaE1vZGVzKCkpIHtcbiAgICAgICAgdmFyIG1hdGNoTW9kZXMgPSB0aGlzLm1hdGNoTW9kZXMoKTtcbiAgICAgICAgdmFyIG5vRmlsdGVyTGFiZWwgPSB0aGlzLm5vRmlsdGVyTGFiZWwoKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi1maWx0ZXItcm93LWl0ZW1zXCJcbiAgICAgICAgfSwgbWF0Y2hNb2Rlcy5tYXAoZnVuY3Rpb24gKG1hdGNoTW9kZSwgaSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG1hdGNoTW9kZS52YWx1ZSxcbiAgICAgICAgICAgICAgbGFiZWwgPSBtYXRjaE1vZGUubGFiZWw7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY29sdW1uLWZpbHRlci1yb3ctaXRlbScsIHtcbiAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6IF90aGlzOC5pc1Jvd01hdGNoTW9kZVNlbGVjdGVkKHZhbHVlKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciB0YWJJbmRleCA9IGkgPT09IDAgPyAwIDogbnVsbDtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICAgIGtleTogbGFiZWwsXG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXM4Lm9uUm93TWF0Y2hNb2RlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczgub25Sb3dNYXRjaE1vZGVLZXlEb3duKGUsIG1hdGNoTW9kZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4XG4gICAgICAgICAgfSwgbGFiZWwpO1xuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtY29sdW1uLWZpbHRlci1zZXBhcmF0b3JcIlxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtY29sdW1uLWZpbHRlci1yb3ctaXRlbVwiLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuY2xlYXJGaWx0ZXIsXG4gICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzOC5vblJvd01hdGNoTW9kZUtleURvd24oZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBub0ZpbHRlckxhYmVsKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJPcGVyYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJPcGVyYXRvcigpIHtcbiAgICAgIGlmICh0aGlzLmlzU2hvd09wZXJhdG9yKCkpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wZXJhdG9yT3B0aW9ucygpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm9wZXJhdG9yKCk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtY29sdW1uLWZpbHRlci1vcGVyYXRvclwiXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duLCB7XG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25PcGVyYXRvckNoYW5nZSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1jb2x1bW4tZmlsdGVyLW9wZXJhdG9yLWRyb3Bkb3duXCJcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTWF0Y2hNb2RlRHJvcGRvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWF0Y2hNb2RlRHJvcGRvd24oY29uc3RyYWludCwgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5pc1Nob3dNYXRjaE1vZGVzKCkpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm1hdGNoTW9kZXMoKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duLCB7XG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZTogY29uc3RyYWludC5tYXRjaE1vZGUsXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczkub25NZW51TWF0Y2hNb2RlQ2hhbmdlKGUudmFsdWUsIGluZGV4KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi1maWx0ZXItbWF0Y2htb2RlLWRyb3Bkb3duXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJSZW1vdmVCdXR0b25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVtb3ZlQnV0dG9uKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnNob3dSZW1vdmVJY29uKCkpIHtcbiAgICAgICAgdmFyIHJlbW92ZVJ1bGVMYWJlbCA9IHRoaXMucmVtb3ZlUnVsZUJ1dHRvbkxhYmVsKCk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGljb246IFwicGkgcGktdHJhc2hcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1jb2x1bW4tZmlsdGVyLXJlbW92ZS1idXR0b24gcC1idXR0b24tdGV4dCBwLWJ1dHRvbi1kYW5nZXIgcC1idXR0b24tc21cIixcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMTAucmVtb3ZlQ29uc3RyYWludChpbmRleCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogcmVtb3ZlUnVsZUxhYmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ29uc3RyYWludHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29uc3RyYWludHMoKSB7XG4gICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICAgIHZhciBmaWVsZENvbnN0cmFpbnRzID0gdGhpcy5maWVsZENvbnN0cmFpbnRzKCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicC1jb2x1bW4tZmlsdGVyLWNvbnN0cmFpbnRzXCJcbiAgICAgIH0sIGZpZWxkQ29uc3RyYWludHMubWFwKGZ1bmN0aW9uIChmaWVsZENvbnN0cmFpbnQsIGkpIHtcbiAgICAgICAgdmFyIG1hdGNoTW9kZURyb3Bkb3duID0gX3RoaXMxMS5yZW5kZXJNYXRjaE1vZGVEcm9wZG93bihmaWVsZENvbnN0cmFpbnQsIGkpO1xuXG4gICAgICAgIHZhciBtZW51RmlsdGVyRWxlbWVudCA9IF90aGlzMTEucmVuZGVyTWVudUZpbHRlckVsZW1lbnQoZmllbGRDb25zdHJhaW50LCBpKTtcblxuICAgICAgICB2YXIgcmVtb3ZlQnV0dG9uID0gX3RoaXMxMS5yZW5kZXJSZW1vdmVCdXR0b24oaSk7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtY29sdW1uLWZpbHRlci1jb25zdHJhaW50XCJcbiAgICAgICAgfSwgbWF0Y2hNb2RlRHJvcGRvd24sIG1lbnVGaWx0ZXJFbGVtZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCByZW1vdmVCdXR0b24pKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQWRkUnVsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJBZGRSdWxlKCkge1xuICAgICAgaWYgKHRoaXMuaXNTaG93QWRkQ29uc3RyYWludCgpKSB7XG4gICAgICAgIHZhciBhZGRSdWxlTGFiZWwgPSB0aGlzLmFkZFJ1bGVCdXR0b25MYWJlbCgpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi1maWx0ZXItYWRkLXJ1bGVcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGxhYmVsOiBhZGRSdWxlTGFiZWwsXG4gICAgICAgICAgaWNvbjogXCJwaSBwaS1wbHVzXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInAtY29sdW1uLWZpbHRlci1hZGQtYnV0dG9uIHAtYnV0dG9uLXRleHQgcC1idXR0b24tc21cIixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmFkZENvbnN0cmFpbnRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRmlsdGVyQ2xlYXJCdXR0b25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRmlsdGVyQ2xlYXJCdXR0b24oKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdzaG93Q2xlYXJCdXR0b24nKSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyQ2xlYXInKSkge1xuICAgICAgICAgIHZhciBjbGVhckxhYmVsID0gdGhpcy5jbGVhckJ1dHRvbkxhYmVsKCk7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWJ1dHRvbi1vdXRsaW5lZCBwLWJ1dHRvbi1zbVwiLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5jbGVhckZpbHRlcixcbiAgICAgICAgICAgIGxhYmVsOiBjbGVhckxhYmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlckNsZWFyJyksIHtcbiAgICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgICBmaWx0ZXJNb2RlbDogdGhpcy5maWx0ZXJNb2RlbCxcbiAgICAgICAgICBmaWx0ZXJDbGVhckNhbGxiYWNrOiB0aGlzLmNsZWFyRmlsdGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRmlsdGVyQXBwbHlCdXR0b25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRmlsdGVyQXBwbHlCdXR0b24oKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdzaG93QXBwbHlCdXR0b24nKSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyQXBwbHknKSkge1xuICAgICAgICAgIHZhciBhcHBseUxhYmVsID0gdGhpcy5hcHBseUJ1dHRvbkxhYmVsKCk7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWJ1dHRvbi1zbVwiLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5hcHBseUZpbHRlcixcbiAgICAgICAgICAgIGxhYmVsOiBhcHBseUxhYmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlckFwcGx5JyksIHtcbiAgICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgICBmaWx0ZXJNb2RlbDogdGhpcy5maWx0ZXJNb2RlbCxcbiAgICAgICAgICBmaWx0ZXJBcHBseUNhbGxiYWNrOiB0aGlzLmFwcGx5RmlsdGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQnV0dG9uQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbkJhcigpIHtcbiAgICAgIHZhciBjbGVhckJ1dHRvbiA9IHRoaXMucmVuZGVyRmlsdGVyQ2xlYXJCdXR0b24oKTtcbiAgICAgIHZhciBhcHBseUJ1dHRvbiA9IHRoaXMucmVuZGVyRmlsdGVyQXBwbHlCdXR0b24oKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi1maWx0ZXItYnV0dG9uYmFyXCJcbiAgICAgIH0sIGNsZWFyQnV0dG9uLCBhcHBseUJ1dHRvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckl0ZW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckl0ZW1zKCkge1xuICAgICAgdmFyIG9wZXJhdG9yID0gdGhpcy5yZW5kZXJPcGVyYXRvcigpO1xuICAgICAgdmFyIGNvbnN0cmFpbnRzID0gdGhpcy5yZW5kZXJDb25zdHJhaW50cygpO1xuICAgICAgdmFyIGFkZFJ1bGUgPSB0aGlzLnJlbmRlckFkZFJ1bGUoKTtcbiAgICAgIHZhciBidXR0b25CYXIgPSB0aGlzLnJlbmRlckJ1dHRvbkJhcigpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBvcGVyYXRvciwgY29uc3RyYWludHMsIGFkZFJ1bGUsIGJ1dHRvbkJhcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck92ZXJsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHtcbiAgICAgIHZhciBzdHlsZSA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyTWVudVN0eWxlJyk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1jb2x1bW4tZmlsdGVyLW92ZXJsYXkgcC1jb21wb25lbnQgcC1mbHVpZCcsIHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyTWVudUNsYXNzTmFtZScpLCB7XG4gICAgICAgICdwLWNvbHVtbi1maWx0ZXItb3ZlcmxheS1tZW51JzogdGhpcy5wcm9wcy5kaXNwbGF5ID09PSAnbWVudScsXG4gICAgICAgICdwLWlucHV0LWZpbGxlZCc6IFByaW1lUmVhY3QuaW5wdXRTdHlsZSA9PT0gJ2ZpbGxlZCcsXG4gICAgICAgICdwLXJpcHBsZS1kaXNhYmxlZCc6IFByaW1lUmVhY3QucmlwcGxlID09PSBmYWxzZVxuICAgICAgfSk7XG4gICAgICB2YXIgZmlsdGVySGVhZGVyID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlckhlYWRlcicpLCB7XG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBmaWx0ZXJNb2RlbDogdGhpcy5maWx0ZXJNb2RlbCxcbiAgICAgICAgZmlsdGVyQXBwbHlDYWxsYmFjazogdGhpcy5maWx0ZXJBcHBseUNhbGxiYWNrXG4gICAgICB9KTtcbiAgICAgIHZhciBmaWx0ZXJGb290ZXIgPSBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmlsdGVyRm9vdGVyJyksIHtcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIGZpbHRlck1vZGVsOiB0aGlzLmZpbHRlck1vZGVsLFxuICAgICAgICBmaWx0ZXJBcHBseUNhbGxiYWNrOiB0aGlzLmZpbHRlckFwcGx5Q2FsbGJhY2tcbiAgICAgIH0pO1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5wcm9wcy5kaXNwbGF5ID09PSAncm93JyA/IHRoaXMucmVuZGVyUm93SXRlbXMoKSA6IHRoaXMucmVuZGVySXRlbXMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENTU1RyYW5zaXRpb24sIHtcbiAgICAgICAgbm9kZVJlZjogdGhpcy5vdmVybGF5UmVmLFxuICAgICAgICBjbGFzc05hbWVzOiBcInAtY29ubmVjdGVkLW92ZXJsYXlcIixcbiAgICAgICAgXCJpblwiOiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlLFxuICAgICAgICB0aW1lb3V0OiB7XG4gICAgICAgICAgZW50ZXI6IDEyMCxcbiAgICAgICAgICBleGl0OiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcbiAgICAgICAgb25FbnRlcjogdGhpcy5vbk92ZXJsYXlFbnRlcixcbiAgICAgICAgb25FeGl0OiB0aGlzLm9uT3ZlcmxheUV4aXQsXG4gICAgICAgIG9uRXhpdGVkOiB0aGlzLm9uT3ZlcmxheUV4aXRlZFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMub3ZlcmxheVJlZixcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uQ29udGVudEtleURvd24sXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25Db250ZW50Q2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ29udGVudE1vdXNlRG93blxuICAgICAgfSwgZmlsdGVySGVhZGVyLCBpdGVtcywgZmlsdGVyRm9vdGVyKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY29sdW1uLWZpbHRlciBwLWZsdWlkJywge1xuICAgICAgICAncC1jb2x1bW4tZmlsdGVyLXJvdyc6IHRoaXMucHJvcHMuZGlzcGxheSA9PT0gJ3JvdycsXG4gICAgICAgICdwLWNvbHVtbi1maWx0ZXItbWVudSc6IHRoaXMucHJvcHMuZGlzcGxheSA9PT0gJ21lbnUnXG4gICAgICB9KTtcbiAgICAgIHZhciByb3dGaWx0ZXJFbGVtZW50ID0gdGhpcy5yZW5kZXJSb3dGaWx0ZXJFbGVtZW50KCk7XG4gICAgICB2YXIgbWVudUJ1dHRvbiA9IHRoaXMucmVuZGVyTWVudUJ1dHRvbigpO1xuICAgICAgdmFyIGNsZWFyQnV0dG9uID0gdGhpcy5yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgdmFyIG92ZXJsYXkgPSB0aGlzLnJlbmRlck92ZXJsYXkoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICB9LCByb3dGaWx0ZXJFbGVtZW50LCBtZW51QnV0dG9uLCBjbGVhckJ1dHRvbiwgb3ZlcmxheSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbHVtbkZpbHRlcjtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gb3duS2V5cyQyKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDIodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMihPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQyKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQyKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBIZWFkZXJDZWxsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIZWFkZXJDZWxsLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDIoSGVhZGVyQ2VsbCk7XG5cbiAgZnVuY3Rpb24gSGVhZGVyQ2VsbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXJDZWxsKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGVPYmplY3Q6IHt9XG4gICAgfTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uS2V5RG93biA9IF90aGlzLm9uS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTsgLy8gZHJhZ1xuXG4gICAgX3RoaXMub25EcmFnU3RhcnQgPSBfdGhpcy5vbkRyYWdTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkRyYWdPdmVyID0gX3RoaXMub25EcmFnT3Zlci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkRyYWdMZWF2ZSA9IF90aGlzLm9uRHJhZ0xlYXZlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRHJvcCA9IF90aGlzLm9uRHJvcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTsgLy8gcmVzaXplXG5cbiAgICBfdGhpcy5vblJlc2l6ZXJNb3VzZURvd24gPSBfdGhpcy5vblJlc2l6ZXJNb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25SZXNpemVyQ2xpY2sgPSBfdGhpcy5vblJlc2l6ZXJDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vblJlc2l6ZXJEb3VibGVDbGljayA9IF90aGlzLm9uUmVzaXplckRvdWJsZUNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIZWFkZXJDZWxsLCBbe1xuICAgIGtleTogXCJpc0JhZGdlVmlzaWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0JhZGdlVmlzaWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm11bHRpU29ydE1ldGEgJiYgdGhpcy5wcm9wcy5tdWx0aVNvcnRNZXRhLmxlbmd0aCA+IDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU29ydGFibGVEaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NvcnRhYmxlRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuZ2V0Q29sdW1uUHJvcCgnc29ydGFibGUnKSB8fCB0aGlzLmdldENvbHVtblByb3AoJ3NvcnRhYmxlJykgJiYgKHRoaXMucHJvcHMuYWxsU29ydGFibGVEaXNhYmxlZCB8fCB0aGlzLmdldENvbHVtblByb3AoJ3NvcnRhYmxlRGlzYWJsZWQnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbHVtblByb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb2x1bW4gPyB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgPyB0aGlzLnByb3BzLmNvbHVtbi5wcm9wc1thcmdzWzBdXSA6IChhcmdzWzBdIHx8IHRoaXMucHJvcHMuY29sdW1uKS5wcm9wc1thcmdzWzFdXSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0eWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgICAgdmFyIGhlYWRlclN0eWxlID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdoZWFkZXJTdHlsZScpO1xuICAgICAgdmFyIGNvbHVtblN0eWxlID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdzdHlsZScpO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJykgPyBPYmplY3QuYXNzaWduKHt9LCBjb2x1bW5TdHlsZSwgaGVhZGVyU3R5bGUsIHRoaXMuc3RhdGUuc3R5bGVPYmplY3QpIDogT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uU3R5bGUsIGhlYWRlclN0eWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TXVsdGlTb3J0TWV0YUluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE11bHRpU29ydE1ldGFJbmRleCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5tdWx0aVNvcnRNZXRhLmZpbmRJbmRleChmdW5jdGlvbiAobWV0YSkge1xuICAgICAgICByZXR1cm4gbWV0YS5maWVsZCA9PT0gX3RoaXMyLmdldENvbHVtblByb3AoJ2ZpZWxkJykgfHwgbWV0YS5maWVsZCA9PT0gX3RoaXMyLmdldENvbHVtblByb3AoJ3NvcnRGaWVsZCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNvcnRNZXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvcnRNZXRhKCkge1xuICAgICAgdmFyIHNvcnRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHNvcnRPcmRlciA9IDA7XG4gICAgICB2YXIgbWV0YUluZGV4ID0gLTE7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICBzb3J0ZWQgPSB0aGlzLnByb3BzLnNvcnRGaWVsZCAmJiAodGhpcy5wcm9wcy5zb3J0RmllbGQgPT09IHRoaXMuZ2V0Q29sdW1uUHJvcCgnZmllbGQnKSB8fCB0aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdzb3J0RmllbGQnKSk7XG4gICAgICAgIHNvcnRPcmRlciA9IHNvcnRlZCA/IHRoaXMucHJvcHMuc29ydE9yZGVyIDogMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICBtZXRhSW5kZXggPSB0aGlzLmdldE11bHRpU29ydE1ldGFJbmRleCgpO1xuXG4gICAgICAgIGlmIChtZXRhSW5kZXggPiAtMSkge1xuICAgICAgICAgIHNvcnRlZCA9IHRydWU7XG4gICAgICAgICAgc29ydE9yZGVyID0gdGhpcy5wcm9wcy5tdWx0aVNvcnRNZXRhW21ldGFJbmRleF0ub3JkZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc29ydGVkOiBzb3J0ZWQsXG4gICAgICAgIHNvcnRPcmRlcjogc29ydE9yZGVyLFxuICAgICAgICBtZXRhSW5kZXg6IG1ldGFJbmRleFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXJpYVNvcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXJpYVNvcnQoX3JlZikge1xuICAgICAgdmFyIHNvcnRlZCA9IF9yZWYuc29ydGVkLFxuICAgICAgICAgIHNvcnRPcmRlciA9IF9yZWYuc29ydE9yZGVyO1xuXG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdzb3J0YWJsZScpKSB7XG4gICAgICAgIHZhciBzb3J0SWNvbiA9IHNvcnRlZCA/IHNvcnRPcmRlciA8IDAgPyAncGktc29ydC1hbW91bnQtZG93bicgOiAncGktc29ydC1hbW91bnQtdXAtYWx0JyA6ICdwaS1zb3J0LWFsdCc7XG4gICAgICAgIGlmIChzb3J0SWNvbiA9PT0gJ3BpLXNvcnQtYW1vdW50LWRvd24nKSByZXR1cm4gJ2Rlc2NlbmRpbmcnO2Vsc2UgaWYgKHNvcnRJY29uID09PSAncGktc29ydC1hbW91bnQtdXAtYWx0JykgcmV0dXJuICdhc2NlbmRpbmcnO2Vsc2UgcmV0dXJuICdub25lJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVN0aWNreVBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN0aWNreVBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZ2V0Q29sdW1uUHJvcCgnZnJvemVuJykpIHtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gX29iamVjdFNwcmVhZCQyKHt9LCB0aGlzLnN0YXRlLnN0eWxlT2JqZWN0KTtcblxuICAgICAgICB2YXIgYWxpZ24gPSB0aGlzLmdldENvbHVtblByb3AoJ2FsaWduRnJvemVuJyk7XG5cbiAgICAgICAgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgdmFyIHJpZ2h0ID0gMDtcbiAgICAgICAgICB2YXIgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKG5leHQpICsgcGFyc2VGbG9hdChuZXh0LnN0eWxlLnJpZ2h0IHx8IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0eWxlT2JqZWN0WydyaWdodCddID0gcmlnaHQgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBsZWZ0ID0gMDtcbiAgICAgICAgICB2YXIgcHJldiA9IHRoaXMuZWwucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICBsZWZ0ID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHByZXYpICsgcGFyc2VGbG9hdChwcmV2LnN0eWxlLmxlZnQgfHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVPYmplY3RbJ2xlZnQnXSA9IGxlZnQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbHRlclJvdyA9IHRoaXMuZWwucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKGZpbHRlclJvdykge1xuICAgICAgICAgIHZhciBpbmRleCA9IERvbUhhbmRsZXIuaW5kZXgodGhpcy5lbCk7XG4gICAgICAgICAgZmlsdGVyUm93LmNoaWxkcmVuW2luZGV4XS5zdHlsZS5sZWZ0ID0gc3R5bGVPYmplY3RbJ2xlZnQnXTtcbiAgICAgICAgICBmaWx0ZXJSb3cuY2hpbGRyZW5baW5kZXhdLnN0eWxlLnJpZ2h0ID0gc3R5bGVPYmplY3RbJ3JpZ2h0J107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNTYW1lU3R5bGUgPSB0aGlzLnN0YXRlLnN0eWxlT2JqZWN0WydsZWZ0J10gPT09IHN0eWxlT2JqZWN0WydsZWZ0J10gJiYgdGhpcy5zdGF0ZS5zdHlsZU9iamVjdFsncmlnaHQnXSA9PT0gc3R5bGVPYmplY3RbJ3JpZ2h0J107XG4gICAgICAgICFpc1NhbWVTdHlsZSAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdHlsZU9iamVjdDogc3R5bGVPYmplY3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVNvcnRhYmxlRGlzYWJsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU29ydGFibGVEaXNhYmxlZChwcmV2Q29sdW1uKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKHByZXZDb2x1bW4sICdzb3J0YWJsZURpc2FibGVkJykgIT09IHRoaXMuZ2V0Q29sdW1uUHJvcCgnc29ydGFibGVEaXNhYmxlZCcpIHx8IHRoaXMuZ2V0Q29sdW1uUHJvcChwcmV2Q29sdW1uLCAnc29ydGFibGUnKSAhPT0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdzb3J0YWJsZScpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Tb3J0YWJsZUNoYW5nZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc1NvcnRhYmxlRGlzYWJsZWQoKSkge1xuICAgICAgICB2YXIgdGFyZ2V0Tm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICBpZiAoRG9tSGFuZGxlci5oYXNDbGFzcyh0YXJnZXROb2RlLCAncC1zb3J0YWJsZS1jb2x1bW4nKSB8fCBEb21IYW5kbGVyLmhhc0NsYXNzKHRhcmdldE5vZGUsICdwLWNvbHVtbi10aXRsZScpIHx8IERvbUhhbmRsZXIuaGFzQ2xhc3ModGFyZ2V0Tm9kZSwgJ3AtY29sdW1uLWhlYWRlci1jb250ZW50JykgfHwgRG9tSGFuZGxlci5oYXNDbGFzcyh0YXJnZXROb2RlLCAncC1zb3J0YWJsZS1jb2x1bW4taWNvbicpIHx8IERvbUhhbmRsZXIuaGFzQ2xhc3ModGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LCAncC1zb3J0YWJsZS1jb2x1bW4taWNvbicpKSB7XG4gICAgICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgIHRoaXMucHJvcHMub25Tb3J0Q2hhbmdlKHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgY29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcbiAgICAgICAgICAgIHNvcnRhYmxlRGlzYWJsZWRGaWVsZHM6IHRoaXMucHJvcHMuc29ydGFibGVEaXNhYmxlZEZpZWxkc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29sdW1uTW91c2VEb3duKHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbktleURvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IHRoaXMuZWwgJiYgRG9tSGFuZGxlci5oYXNDbGFzcyhldmVudC5jdXJyZW50VGFyZ2V0LCAncC1zb3J0YWJsZS1jb2x1bW4nKSkge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkRyYWdTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbHVtbkRyYWdTdGFydCh7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25EcmFnT3ZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29sdW1uRHJhZ092ZXIoe1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgY29sdW1uOiB0aGlzLnByb3BzLmNvbHVtblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uRHJhZ0xlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29sdW1uRHJhZ0xlYXZlKHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Ecm9wKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29sdW1uRHJvcCh7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVyTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplck1vdXNlRG93bihldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZVN0YXJ0KHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblJlc2l6ZXJDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZXJDbGljayhldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db2x1bW5SZXNpemVyQ2xpY2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZXJDbGljayh7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgZWxlbWVudDogZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgIGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUmVzaXplckRvdWJsZUNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplckRvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZXJEb3VibGVDbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplckRvdWJsZUNsaWNrKHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICBlbGVtZW50OiBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgY29sdW1uOiB0aGlzLnByb3BzLmNvbHVtblxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0aWNreVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0aWNreVBvc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlU29ydGFibGVEaXNhYmxlZChwcmV2UHJvcHMuY29sdW1uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUmVzaXplclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZXNpemVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMucmVzaXphYmxlQ29sdW1ucyAmJiAhdGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1jb2x1bW4tcmVzaXplclwiLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uUmVzaXplck1vdXNlRG93bixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uUmVzaXplckNsaWNrLFxuICAgICAgICAgIG9uRG91YmxlQ2xpY2s6IHRoaXMub25SZXNpemVyRG91YmxlQ2xpY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJUaXRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZSA9IE9iamVjdFV0aWxzLmdldEpTWEVsZW1lbnQodGhpcy5nZXRDb2x1bW5Qcm9wKCdoZWFkZXInKSwge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcy50YWJsZVByb3BzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicC1jb2x1bW4tdGl0bGVcIlxuICAgICAgfSwgdGl0bGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJTb3J0SWNvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTb3J0SWNvbihfcmVmMikge1xuICAgICAgdmFyIHNvcnRlZCA9IF9yZWYyLnNvcnRlZCxcbiAgICAgICAgICBzb3J0T3JkZXIgPSBfcmVmMi5zb3J0T3JkZXI7XG5cbiAgICAgIGlmICh0aGlzLmdldENvbHVtblByb3AoJ3NvcnRhYmxlJykpIHtcbiAgICAgICAgdmFyIHNvcnRJY29uID0gc29ydGVkID8gc29ydE9yZGVyIDwgMCA/ICdwaS1zb3J0LWFtb3VudC1kb3duJyA6ICdwaS1zb3J0LWFtb3VudC11cC1hbHQnIDogJ3BpLXNvcnQtYWx0JztcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3Atc29ydGFibGUtY29sdW1uLWljb24gcGkgcGktZncnLCBzb3J0SWNvbik7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQmFkZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFkZ2UoX3JlZjMpIHtcbiAgICAgIHZhciBtZXRhSW5kZXggPSBfcmVmMy5tZXRhSW5kZXg7XG5cbiAgICAgIGlmIChtZXRhSW5kZXggIT09IC0xICYmIHRoaXMuaXNCYWRnZVZpc2libGUoKSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLmdyb3VwUm93c0J5ICYmIHRoaXMucHJvcHMuZ3JvdXBSb3dzQnkgPT09IHRoaXMucHJvcHMuZ3JvdXBSb3dTb3J0RmllbGQgPyBtZXRhSW5kZXggOiBtZXRhSW5kZXggKyAxO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1zb3J0YWJsZS1jb2x1bW4tYmFkZ2VcIlxuICAgICAgICB9LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDaGVja2JveFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGVja2JveCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3dTZWxlY3RBbGwgJiYgdGhpcy5nZXRDb2x1bW5Qcm9wKCdzZWxlY3Rpb25Nb2RlJykgPT09ICdtdWx0aXBsZScgJiYgdGhpcy5wcm9wcy5maWx0ZXJEaXNwbGF5ICE9PSAncm93Jykge1xuICAgICAgICB2YXIgYWxsUm93c1NlbGVjdGVkID0gdGhpcy5wcm9wcy5hbGxSb3dzU2VsZWN0ZWQodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDaGVja2JveCwge1xuICAgICAgICAgIGNoZWNrZWQ6IGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNvbHVtbkNoZWNrYm94Q2hhbmdlLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmVtcHR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZpbHRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlckRpc3BsYXkgPT09ICdtZW51JyAmJiB0aGlzLmdldENvbHVtblByb3AoJ2ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5GaWx0ZXIsIHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm1lbnVcIixcbiAgICAgICAgICBjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgIGZpbHRlcnM6IHRoaXMucHJvcHMuZmlsdGVycyxcbiAgICAgICAgICBvbkZpbHRlckNoYW5nZTogdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSxcbiAgICAgICAgICBvbkZpbHRlckFwcGx5OiB0aGlzLnByb3BzLm9uRmlsdGVyQXBwbHksXG4gICAgICAgICAgZmlsdGVyc1N0b3JlOiB0aGlzLnByb3BzLmZpbHRlcnNTdG9yZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWFkZXIoc29ydE1ldGEpIHtcbiAgICAgIHZhciB0aXRsZSA9IHRoaXMucmVuZGVyVGl0bGUoKTtcbiAgICAgIHZhciBzb3J0SWNvbiA9IHRoaXMucmVuZGVyU29ydEljb24oc29ydE1ldGEpO1xuICAgICAgdmFyIGJhZGdlID0gdGhpcy5yZW5kZXJCYWRnZShzb3J0TWV0YSk7XG4gICAgICB2YXIgY2hlY2tib3ggPSB0aGlzLnJlbmRlckNoZWNrYm94KCk7XG4gICAgICB2YXIgZmlsdGVyID0gdGhpcy5yZW5kZXJGaWx0ZXIoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWNvbHVtbi1oZWFkZXItY29udGVudFwiXG4gICAgICB9LCB0aXRsZSwgc29ydEljb24sIGJhZGdlLCBjaGVja2JveCwgZmlsdGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJFbGVtZW50KCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBpc1NvcnRhYmxlRGlzYWJsZWQgPSB0aGlzLmlzU29ydGFibGVEaXNhYmxlZCgpO1xuICAgICAgdmFyIHNvcnRNZXRhID0gdGhpcy5nZXRTb3J0TWV0YSgpO1xuICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgdmFyIGFsaWduID0gdGhpcy5nZXRDb2x1bW5Qcm9wKCdhbGlnbkhlYWRlcicpIHx8IHRoaXMuZ2V0Q29sdW1uUHJvcCgnYWxpZ24nKTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHRoaXMuZ2V0Q29sdW1uUHJvcCgnaGVhZGVyQ2xhc3NOYW1lJyksIHRoaXMuZ2V0Q29sdW1uUHJvcCgnY2xhc3NOYW1lJyksIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgICdwLXNvcnRhYmxlLWNvbHVtbic6IHRoaXMuZ2V0Q29sdW1uUHJvcCgnc29ydGFibGUnKSxcbiAgICAgICAgJ3AtcmVzaXphYmxlLWNvbHVtbic6IHRoaXMucHJvcHMucmVzaXphYmxlQ29sdW1ucyxcbiAgICAgICAgJ3AtaGlnaGxpZ2h0Jzogc29ydE1ldGEuc29ydGVkLFxuICAgICAgICAncC1mcm96ZW4tY29sdW1uJzogdGhpcy5nZXRDb2x1bW5Qcm9wKCdmcm96ZW4nKSxcbiAgICAgICAgJ3Atc2VsZWN0aW9uLWNvbHVtbic6IHRoaXMuZ2V0Q29sdW1uUHJvcCgnc2VsZWN0aW9uTW9kZScpLFxuICAgICAgICAncC1zb3J0YWJsZS1kaXNhYmxlZCc6IHRoaXMuZ2V0Q29sdW1uUHJvcCgnc29ydGFibGUnKSAmJiBpc1NvcnRhYmxlRGlzYWJsZWQsXG4gICAgICAgICdwLXJlb3JkZXJhYmxlLWNvbHVtbic6IHRoaXMucHJvcHMucmVvcmRlcmFibGVDb2x1bW5zICYmIHRoaXMuZ2V0Q29sdW1uUHJvcCgncmVvcmRlcmFibGUnKVxuICAgICAgfSwgXCJwLWFsaWduLVwiLmNvbmNhdChhbGlnbiksICEhYWxpZ24pKTtcbiAgICAgIHZhciB0YWJJbmRleCA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnc29ydGFibGUnKSAmJiAhaXNTb3J0YWJsZURpc2FibGVkID8gdGhpcy5wcm9wcy50YWJJbmRleCA6IG51bGw7XG4gICAgICB2YXIgY29sU3BhbiA9IHRoaXMuZ2V0Q29sdW1uUHJvcCgnY29sU3BhbicpO1xuICAgICAgdmFyIHJvd1NwYW4gPSB0aGlzLmdldENvbHVtblByb3AoJ3Jvd1NwYW4nKTtcbiAgICAgIHZhciBhcmlhU29ydCA9IHRoaXMuZ2V0QXJpYVNvcnQoc29ydE1ldGEpO1xuICAgICAgdmFyIHJlc2l6ZXIgPSB0aGlzLnJlbmRlclJlc2l6ZXIoKTtcbiAgICAgIHZhciBoZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlcihzb3J0TWV0YSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5lbCA9IGVsO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIHJvbGU6IFwiY29sdW1uaGVhZGVyXCIsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgIG9uRHJhZ1N0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWdPdmVyOiB0aGlzLm9uRHJhZ092ZXIsXG4gICAgICAgIG9uRHJhZ0xlYXZlOiB0aGlzLm9uRHJhZ0xlYXZlLFxuICAgICAgICBvbkRyb3A6IHRoaXMub25Ecm9wLFxuICAgICAgICBjb2xTcGFuOiBjb2xTcGFuLFxuICAgICAgICByb3dTcGFuOiByb3dTcGFuLFxuICAgICAgICBcImFyaWEtc29ydFwiOiBhcmlhU29ydFxuICAgICAgfSwgcmVzaXplciwgaGVhZGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVsZW1lbnQoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGVhZGVyQ2VsbDtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMShEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBUYWJsZUhlYWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGFibGVIZWFkZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkMShUYWJsZUhlYWRlcik7XG5cbiAgZnVuY3Rpb24gVGFibGVIZWFkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFibGVIZWFkZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzb3J0YWJsZURpc2FibGVkRmllbGRzOiBbXSxcbiAgICAgIGFsbFNvcnRhYmxlRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgc3R5bGVPYmplY3Q6IHt9XG4gICAgfTtcbiAgICBfdGhpcy5vblNvcnRhYmxlQ2hhbmdlID0gX3RoaXMub25Tb3J0YWJsZUNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNoZWNrYm94Q2hhbmdlID0gX3RoaXMub25DaGVja2JveENoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGFibGVIZWFkZXIsIFt7XG4gICAga2V5OiBcImlzU2luZ2xlU29ydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NpbmdsZVNvcnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zb3J0TW9kZSA9PT0gJ3NpbmdsZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzTXVsdGlwbGVTb3J0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTXVsdGlwbGVTb3J0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc29ydE1vZGUgPT09ICdtdWx0aXBsZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQWxsU29ydGFibGVEaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0FsbFNvcnRhYmxlRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1NpbmdsZVNvcnQoKSAmJiB0aGlzLnN0YXRlLmFsbFNvcnRhYmxlRGlzYWJsZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29sdW1uU29ydGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ29sdW1uU29ydGVkKGNvbHVtbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc29ydEZpZWxkICE9PSBudWxsID8gY29sdW1uLnByb3BzLmZpZWxkID09PSB0aGlzLnByb3BzLnNvcnRGaWVsZCB8fCBjb2x1bW4ucHJvcHMuc29ydEZpZWxkID09PSB0aGlzLnByb3BzLnNvcnRGaWVsZCA6IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVTb3J0YWJsZURpc2FibGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNvcnRhYmxlRGlzYWJsZWQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTb3J0KCkgfHwgdGhpcy5pc011bHRpcGxlU29ydCgpICYmIHRoaXMucHJvcHMub25Tb3J0Q2hhbmdlKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZURpc2FibGVkRmllbGRzID0gW107XG4gICAgICAgIHZhciBhbGxTb3J0YWJsZURpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcHMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICBpZiAoY29sdW1uLnByb3BzLnNvcnRhYmxlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHNvcnRhYmxlRGlzYWJsZWRGaWVsZHMucHVzaChjb2x1bW4ucHJvcHMuc29ydEZpZWxkIHx8IGNvbHVtbi5wcm9wcy5maWVsZCk7XG5cbiAgICAgICAgICAgIGlmICghYWxsU29ydGFibGVEaXNhYmxlZCAmJiBfdGhpczIuaXNDb2x1bW5Tb3J0ZWQoY29sdW1uKSkge1xuICAgICAgICAgICAgICBhbGxTb3J0YWJsZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzb3J0YWJsZURpc2FibGVkRmllbGRzOiBzb3J0YWJsZURpc2FibGVkRmllbGRzLFxuICAgICAgICAgIGFsbFNvcnRhYmxlRGlzYWJsZWQ6IGFsbFNvcnRhYmxlRGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uU29ydGFibGVDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Tb3J0YWJsZUNoYW5nZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlU29ydGFibGVEaXNhYmxlZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNoZWNrYm94Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hlY2tib3hDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbHVtbkNoZWNrYm94Q2hhbmdlKGUsIHRoaXMucHJvcHMudmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMudXBkYXRlU29ydGFibGVEaXNhYmxlZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJHcm91cEhlYWRlckNlbGxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckdyb3VwSGVhZGVyQ2VsbHMocm93KSB7XG4gICAgICB2YXIgY29sdW1ucyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocm93LnByb3BzLmNoaWxkcmVuKTtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckhlYWRlckNlbGxzKGNvbHVtbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJIZWFkZXJDZWxsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWFkZXJDZWxscyhjb2x1bW5zKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjb2x1bW5zLCBmdW5jdGlvbiAoY29sLCBpKSB7XG4gICAgICAgIHZhciBpc1Zpc2libGUgPSBjb2wgPyAhY29sLnByb3BzLmhpZGRlbiA6IHRydWU7XG4gICAgICAgIHZhciBrZXkgPSBjb2wgPyBjb2wucHJvcHMuY29sdW1uS2V5IHx8IGNvbC5wcm9wcy5maWVsZCB8fCBpIDogaTtcbiAgICAgICAgcmV0dXJuIGlzVmlzaWJsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDZWxsLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IF90aGlzMy5wcm9wcy52YWx1ZSxcbiAgICAgICAgICB0YWJsZVByb3BzOiBfdGhpczMucHJvcHMudGFibGVQcm9wcyxcbiAgICAgICAgICBjb2x1bW46IGNvbCxcbiAgICAgICAgICB0YWJJbmRleDogX3RoaXMzLnByb3BzLnRhYkluZGV4LFxuICAgICAgICAgIGVtcHR5OiBfdGhpczMucHJvcHMuZW1wdHksXG4gICAgICAgICAgcmVzaXphYmxlQ29sdW1uczogX3RoaXMzLnByb3BzLnJlc2l6YWJsZUNvbHVtbnMsXG4gICAgICAgICAgZ3JvdXBSb3dzQnk6IF90aGlzMy5wcm9wcy5ncm91cFJvd3NCeSxcbiAgICAgICAgICBncm91cFJvd1NvcnRGaWVsZDogX3RoaXMzLnByb3BzLmdyb3VwUm93U29ydEZpZWxkLFxuICAgICAgICAgIHNvcnRNb2RlOiBfdGhpczMucHJvcHMuc29ydE1vZGUsXG4gICAgICAgICAgc29ydEZpZWxkOiBfdGhpczMucHJvcHMuc29ydEZpZWxkLFxuICAgICAgICAgIHNvcnRPcmRlcjogX3RoaXMzLnByb3BzLnNvcnRPcmRlcixcbiAgICAgICAgICBtdWx0aVNvcnRNZXRhOiBfdGhpczMucHJvcHMubXVsdGlTb3J0TWV0YSxcbiAgICAgICAgICBhbGxTb3J0YWJsZURpc2FibGVkOiBfdGhpczMuaXNBbGxTb3J0YWJsZURpc2FibGVkKCksXG4gICAgICAgICAgb25Tb3J0YWJsZUNoYW5nZTogX3RoaXMzLm9uU29ydGFibGVDaGFuZ2UsXG4gICAgICAgICAgc29ydGFibGVEaXNhYmxlZEZpZWxkczogX3RoaXMzLnN0YXRlLnNvcnRhYmxlRGlzYWJsZWRGaWVsZHMsXG4gICAgICAgICAgZmlsdGVyRGlzcGxheTogX3RoaXMzLnByb3BzLmZpbHRlckRpc3BsYXksXG4gICAgICAgICAgZmlsdGVyczogX3RoaXMzLnByb3BzLmZpbHRlcnMsXG4gICAgICAgICAgZmlsdGVyc1N0b3JlOiBfdGhpczMucHJvcHMuZmlsdGVyc1N0b3JlLFxuICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlOiBfdGhpczMucHJvcHMub25GaWx0ZXJDaGFuZ2UsXG4gICAgICAgICAgb25GaWx0ZXJBcHBseTogX3RoaXMzLnByb3BzLm9uRmlsdGVyQXBwbHksXG4gICAgICAgICAgb25Db2x1bW5Nb3VzZURvd246IF90aGlzMy5wcm9wcy5vbkNvbHVtbk1vdXNlRG93bixcbiAgICAgICAgICBvbkNvbHVtbkRyYWdTdGFydDogX3RoaXMzLnByb3BzLm9uQ29sdW1uRHJhZ1N0YXJ0LFxuICAgICAgICAgIG9uQ29sdW1uRHJhZ092ZXI6IF90aGlzMy5wcm9wcy5vbkNvbHVtbkRyYWdPdmVyLFxuICAgICAgICAgIG9uQ29sdW1uRHJhZ0xlYXZlOiBfdGhpczMucHJvcHMub25Db2x1bW5EcmFnTGVhdmUsXG4gICAgICAgICAgb25Db2x1bW5Ecm9wOiBfdGhpczMucHJvcHMub25Db2x1bW5Ecm9wLFxuICAgICAgICAgIG9uQ29sdW1uUmVzaXplU3RhcnQ6IF90aGlzMy5wcm9wcy5vbkNvbHVtblJlc2l6ZVN0YXJ0LFxuICAgICAgICAgIG9uQ29sdW1uUmVzaXplckNsaWNrOiBfdGhpczMucHJvcHMub25Db2x1bW5SZXNpemVyQ2xpY2ssXG4gICAgICAgICAgb25Db2x1bW5SZXNpemVyRG91YmxlQ2xpY2s6IF90aGlzMy5wcm9wcy5vbkNvbHVtblJlc2l6ZXJEb3VibGVDbGljayxcbiAgICAgICAgICBzaG93U2VsZWN0QWxsOiBfdGhpczMucHJvcHMuc2hvd1NlbGVjdEFsbCxcbiAgICAgICAgICBhbGxSb3dzU2VsZWN0ZWQ6IF90aGlzMy5wcm9wcy5hbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgb25Db2x1bW5DaGVja2JveENoYW5nZTogX3RoaXMzLm9uQ2hlY2tib3hDaGFuZ2UsXG4gICAgICAgICAgcmVvcmRlcmFibGVDb2x1bW5zOiBfdGhpczMucHJvcHMucmVvcmRlcmFibGVDb2x1bW5zLFxuICAgICAgICAgIG9uU29ydENoYW5nZTogX3RoaXMzLnByb3BzLm9uU29ydENoYW5nZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDaGVja2JveFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGVja2JveChzZWxlY3Rpb25Nb2RlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93U2VsZWN0QWxsICYmIHNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgdmFyIGFsbFJvd3NTZWxlY3RlZCA9IHRoaXMucHJvcHMuYWxsUm93c1NlbGVjdGVkKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ2hlY2tib3gsIHtcbiAgICAgICAgICBjaGVja2VkOiBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGVja2JveENoYW5nZSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5lbXB0eVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGaWx0ZXIoY29sdW1uLCBmaWx0ZXIpIHtcbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkZpbHRlciwge1xuICAgICAgICAgIGRpc3BsYXk6IFwicm93XCIsXG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgZmlsdGVyczogdGhpcy5wcm9wcy5maWx0ZXJzLFxuICAgICAgICAgIGZpbHRlcnNTdG9yZTogdGhpcy5wcm9wcy5maWx0ZXJzU3RvcmUsXG4gICAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UsXG4gICAgICAgICAgb25GaWx0ZXJBcHBseTogdGhpcy5wcm9wcy5vbkZpbHRlckFwcGx5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRmlsdGVyQ2VsbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRmlsdGVyQ2VsbHMoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNvbHVtbnMsIGZ1bmN0aW9uIChjb2wsIGkpIHtcbiAgICAgICAgdmFyIGlzVmlzaWJsZSA9ICFjb2wucHJvcHMuaGlkZGVuO1xuXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICB2YXIgX2NvbCRwcm9wcyA9IGNvbC5wcm9wcyxcbiAgICAgICAgICAgICAgZmlsdGVySGVhZGVyU3R5bGUgPSBfY29sJHByb3BzLmZpbHRlckhlYWRlclN0eWxlLFxuICAgICAgICAgICAgICBzdHlsZSA9IF9jb2wkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIGZpbHRlckhlYWRlckNsYXNzTmFtZSA9IF9jb2wkcHJvcHMuZmlsdGVySGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfY29sJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgZnJvemVuID0gX2NvbCRwcm9wcy5mcm96ZW4sXG4gICAgICAgICAgICAgIGNvbHVtbktleSA9IF9jb2wkcHJvcHMuY29sdW1uS2V5LFxuICAgICAgICAgICAgICBmaWVsZCA9IF9jb2wkcHJvcHMuZmllbGQsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGUgPSBfY29sJHByb3BzLnNlbGVjdGlvbk1vZGUsXG4gICAgICAgICAgICAgIGZpbHRlciA9IF9jb2wkcHJvcHMuZmlsdGVyO1xuXG4gICAgICAgICAgdmFyIGNvbFN0eWxlID0gX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwgZmlsdGVySGVhZGVyU3R5bGUgfHwge30pLCBzdHlsZSB8fCB7fSk7XG5cbiAgICAgICAgICB2YXIgY29sQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1maWx0ZXItY29sdW1uJywgZmlsdGVySGVhZGVyQ2xhc3NOYW1lLCBjbGFzc05hbWUsIHtcbiAgICAgICAgICAgICdwLWZyb3plbi1jb2x1bW4nOiBmcm96ZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgY29sS2V5ID0gY29sdW1uS2V5IHx8IGZpZWxkIHx8IGk7XG5cbiAgICAgICAgICB2YXIgY2hlY2tib3ggPSBfdGhpczQucmVuZGVyQ2hlY2tib3goc2VsZWN0aW9uTW9kZSk7XG5cbiAgICAgICAgICB2YXIgZmlsdGVyUm93ID0gX3RoaXM0LnJlbmRlckZpbHRlcihjb2wsIGZpbHRlcik7XG5cbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7XG4gICAgICAgICAgICBrZXk6IGNvbEtleSxcbiAgICAgICAgICAgIHN0eWxlOiBjb2xTdHlsZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY29sQ2xhc3NOYW1lXG4gICAgICAgICAgfSwgY2hlY2tib3gsIGZpbHRlclJvdyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyQ29sdW1uR3JvdXApIHtcbiAgICAgICAgdmFyIHJvd3MgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuaGVhZGVyQ29sdW1uR3JvdXAucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gcm93cy5tYXAoZnVuY3Rpb24gKHJvdywgaSkge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHtcbiAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgIHJvbGU6IFwicm93XCJcbiAgICAgICAgICB9LCBfdGhpczUucmVuZGVyR3JvdXBIZWFkZXJDZWxscyhyb3cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaGVhZGVyUm93ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7XG4gICAgICAgICAgcm9sZTogXCJyb3dcIlxuICAgICAgICB9LCB0aGlzLnJlbmRlckhlYWRlckNlbGxzKHRoaXMucHJvcHMuY29sdW1ucykpO1xuICAgICAgICB2YXIgZmlsdGVyUm93ID0gdGhpcy5wcm9wcy5maWx0ZXJEaXNwbGF5ID09PSAncm93JyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHtcbiAgICAgICAgICByb2xlOiBcInJvd1wiXG4gICAgICAgIH0sIHRoaXMucmVuZGVyRmlsdGVyQ2VsbHMoKSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaGVhZGVyUm93LCBmaWx0ZXJSb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInAtZGF0YXRhYmxlLXRoZWFkXCJcbiAgICAgIH0sIGNvbnRlbnQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUYWJsZUhlYWRlcjtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgRGF0YVRhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXRhVGFibGUsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGF0YVRhYmxlKTtcblxuICBmdW5jdGlvbiBEYXRhVGFibGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0YVRhYmxlKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZF9yb3dzOiBwcm9wcy5yb3dzLFxuICAgICAgY29sdW1uT3JkZXI6IFtdLFxuICAgICAgZ3JvdXBSb3dzU29ydE1ldGE6IG51bGwsXG4gICAgICBlZGl0aW5nTWV0YToge30sXG4gICAgICBhdHRyaWJ1dGVTZWxlY3RvcjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAoIV90aGlzLnByb3BzLm9uUGFnZSkge1xuICAgICAgX3RoaXMuc3RhdGUuZmlyc3QgPSBwcm9wcy5maXJzdDtcbiAgICAgIF90aGlzLnN0YXRlLnJvd3MgPSBwcm9wcy5yb3dzO1xuICAgIH1cblxuICAgIGlmICghX3RoaXMucHJvcHMub25Tb3J0KSB7XG4gICAgICBfdGhpcy5zdGF0ZS5zb3J0RmllbGQgPSBwcm9wcy5zb3J0RmllbGQ7XG4gICAgICBfdGhpcy5zdGF0ZS5zb3J0T3JkZXIgPSBwcm9wcy5zb3J0T3JkZXI7XG4gICAgICBfdGhpcy5zdGF0ZS5tdWx0aVNvcnRNZXRhID0gcHJvcHMubXVsdGlTb3J0TWV0YTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZS5kX2ZpbHRlcnMgPSBfdGhpcy5jbG9uZUZpbHRlcnMocHJvcHMuZmlsdGVycyk7XG5cbiAgICBpZiAoIV90aGlzLnByb3BzLm9uRmlsdGVyKSB7XG4gICAgICBfdGhpcy5zdGF0ZS5maWx0ZXJzID0gcHJvcHMuZmlsdGVycztcbiAgICB9IC8vIGhlYWRlclxuXG5cbiAgICBfdGhpcy5vblNvcnRDaGFuZ2UgPSBfdGhpcy5vblNvcnRDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25GaWx0ZXJDaGFuZ2UgPSBfdGhpcy5vbkZpbHRlckNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkZpbHRlckFwcGx5ID0gX3RoaXMub25GaWx0ZXJBcHBseS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNvbHVtbkhlYWRlck1vdXNlRG93biA9IF90aGlzLm9uQ29sdW1uSGVhZGVyTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ29sdW1uSGVhZGVyRHJhZ1N0YXJ0ID0gX3RoaXMub25Db2x1bW5IZWFkZXJEcmFnU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Db2x1bW5IZWFkZXJEcmFnT3ZlciA9IF90aGlzLm9uQ29sdW1uSGVhZGVyRHJhZ092ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Db2x1bW5IZWFkZXJEcmFnTGVhdmUgPSBfdGhpcy5vbkNvbHVtbkhlYWRlckRyYWdMZWF2ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNvbHVtbkhlYWRlckRyb3AgPSBfdGhpcy5vbkNvbHVtbkhlYWRlckRyb3AuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Db2x1bW5SZXNpemVTdGFydCA9IF90aGlzLm9uQ29sdW1uUmVzaXplU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Db2x1bW5IZWFkZXJDaGVja2JveENoYW5nZSA9IF90aGlzLm9uQ29sdW1uSGVhZGVyQ2hlY2tib3hDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuYWxsUm93c1NlbGVjdGVkID0gX3RoaXMuYWxsUm93c1NlbGVjdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBib2R5XG5cbiAgICBfdGhpcy5vbkVkaXRpbmdNZXRhQ2hhbmdlID0gX3RoaXMub25FZGl0aW5nTWV0YUNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTsgLy9wYWdpbmF0b3JcblxuICAgIF90aGlzLm9uUGFnZUNoYW5nZSA9IF90aGlzLm9uUGFnZUNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF0YVRhYmxlLCBbe1xuICAgIGtleTogXCJpc0N1c3RvbVN0YXRlU3RvcmFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0N1c3RvbVN0YXRlU3RvcmFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXRlU3RvcmFnZSA9PT0gJ2N1c3RvbSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzU3RhdGVmdWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdGF0ZWZ1bCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXRlS2V5ICE9IG51bGwgfHwgdGhpcy5pc0N1c3RvbVN0YXRlU3RvcmFnZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZpcnR1YWxTY3JvbGxlckRpc2FibGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlydHVhbFNjcm9sbGVyRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNFbXB0eSh0aGlzLnByb3BzLnZpcnR1YWxTY3JvbGxlck9wdGlvbnMpIHx8ICF0aGlzLnByb3BzLnNjcm9sbGFibGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRXF1YWxzKGRhdGExLCBkYXRhMikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29tcGFyZVNlbGVjdGlvbkJ5ID09PSAnZXF1YWxzJyA/IGRhdGExID09PSBkYXRhMiA6IE9iamVjdFV0aWxzLmVxdWFscyhkYXRhMSwgZGF0YTIsIHRoaXMucHJvcHMuZGF0YUtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc0ZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNGaWx0ZXIoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLmdldEZpbHRlcnMoKSkgfHwgdGhpcy5wcm9wcy5nbG9iYWxGaWx0ZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEZpcnN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpcnN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25QYWdlID8gdGhpcy5wcm9wcy5maXJzdCA6IHRoaXMuc3RhdGUuZmlyc3Q7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJvd3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um93cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uUGFnZSA/IHRoaXMucHJvcHMucm93cyA6IHRoaXMuc3RhdGUucm93cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U29ydEZpZWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvcnRGaWVsZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uU29ydCA/IHRoaXMucHJvcHMuc29ydEZpZWxkIDogdGhpcy5zdGF0ZS5zb3J0RmllbGQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNvcnRPcmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3J0T3JkZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vblNvcnQgPyB0aGlzLnByb3BzLnNvcnRPcmRlciA6IHRoaXMuc3RhdGUuc29ydE9yZGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRNdWx0aVNvcnRNZXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE11bHRpU29ydE1ldGEoKSB7XG4gICAgICByZXR1cm4gKHRoaXMucHJvcHMub25Tb3J0ID8gdGhpcy5wcm9wcy5tdWx0aVNvcnRNZXRhIDogdGhpcy5zdGF0ZS5tdWx0aVNvcnRNZXRhKSB8fCBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RmlsdGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWx0ZXJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25GaWx0ZXIgPyB0aGlzLnByb3BzLmZpbHRlcnMgOiB0aGlzLnN0YXRlLmZpbHRlcnM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbHVtblByb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcChjb2wsIHByb3ApIHtcbiAgICAgIHJldHVybiBjb2wucHJvcHNbcHJvcF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbHVtbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sdW1ucyhpZ25vcmVSZW9yZGVyYWJsZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjb2x1bW5zID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKCFjb2x1bW5zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlnbm9yZVJlb3JkZXJhYmxlICYmIHRoaXMucHJvcHMucmVvcmRlcmFibGVDb2x1bW5zICYmIHRoaXMuc3RhdGUuY29sdW1uT3JkZXIpIHtcbiAgICAgICAgdmFyIG9yZGVyZWRDb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5PcmRlci5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgY29sdW1uS2V5KSB7XG4gICAgICAgICAgdmFyIGNvbHVtbiA9IF90aGlzMi5maW5kQ29sdW1uQnlLZXkoY29sdW1ucywgY29sdW1uS2V5KTtcblxuICAgICAgICAgIGNvbHVtbiAmJiBhcnIucHVzaChjb2x1bW4pO1xuICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob3JkZXJlZENvbHVtbnMpLCBfdG9Db25zdW1hYmxlQXJyYXkoY29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHJldHVybiBvcmRlcmVkQ29sdW1ucy5pbmRleE9mKGNvbCkgPCAwO1xuICAgICAgICB9KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RvcmFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdG9yYWdlKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnN0YXRlU3RvcmFnZSkge1xuICAgICAgICBjYXNlICdsb2NhbCc6XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbiAgICAgICAgY2FzZSAnc2Vzc2lvbic6XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcblxuICAgICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMucHJvcHMuc3RhdGVTdG9yYWdlICsgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIHN0YXRlIHN0b3JhZ2UsIHN1cHBvcnRlZCB2YWx1ZXMgYXJlIFwibG9jYWxcIiwgXCJzZXNzaW9uXCIgYW5kIFwiY3VzdG9tXCIuJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNhdmVTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlU3RhdGUoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB7fTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdG9yKSB7XG4gICAgICAgIHN0YXRlLmZpcnN0ID0gdGhpcy5nZXRGaXJzdCgpO1xuICAgICAgICBzdGF0ZS5yb3dzID0gdGhpcy5nZXRSb3dzKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3J0RmllbGQgPSB0aGlzLmdldFNvcnRGaWVsZCgpO1xuXG4gICAgICBpZiAoc29ydEZpZWxkKSB7XG4gICAgICAgIHN0YXRlLnNvcnRGaWVsZCA9IHNvcnRGaWVsZDtcbiAgICAgICAgc3RhdGUuc29ydE9yZGVyID0gdGhpcy5nZXRTb3J0T3JkZXIoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG11bHRpU29ydE1ldGEgPSB0aGlzLmdldE11bHRpU29ydE1ldGEoKTtcblxuICAgICAgaWYgKG11bHRpU29ydE1ldGEpIHtcbiAgICAgICAgc3RhdGUubXVsdGlTb3J0TWV0YSA9IG11bHRpU29ydE1ldGE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcigpKSB7XG4gICAgICAgIHN0YXRlLmZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMucmVzaXphYmxlQ29sdW1ucykge1xuICAgICAgICB0aGlzLnNhdmVDb2x1bW5XaWR0aHMoc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnMpIHtcbiAgICAgICAgc3RhdGUuY29sdW1uT3JkZXIgPSB0aGlzLnN0YXRlLmNvbHVtbk9yZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRlZFJvd3MpIHtcbiAgICAgICAgc3RhdGUuZXhwYW5kZWRSb3dzID0gdGhpcy5wcm9wcy5leHBhbmRlZFJvd3M7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbiAmJiB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0N1c3RvbVN0YXRlU3RvcmFnZSgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1c3RvbVNhdmVTdGF0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMuY3VzdG9tU2F2ZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShzdGF0ZSkpIHtcbiAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0odGhpcy5wcm9wcy5zdGF0ZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblN0YXRlU2F2ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVTYXZlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclN0YXRlKCkge1xuICAgICAgdmFyIHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKTtcblxuICAgICAgaWYgKHN0b3JhZ2UgJiYgdGhpcy5wcm9wcy5zdGF0ZUtleSkge1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5wcm9wcy5zdGF0ZUtleSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3RvcmVTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0b3JlU3RhdGUoc3RhdGUpIHtcbiAgICAgIHZhciByZXN0b3JlZFN0YXRlID0ge307XG5cbiAgICAgIGlmICh0aGlzLmlzQ3VzdG9tU3RhdGVTdG9yYWdlKCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VzdG9tUmVzdG9yZVN0YXRlKSB7XG4gICAgICAgICAgcmVzdG9yZWRTdGF0ZSA9IHRoaXMucHJvcHMuY3VzdG9tUmVzdG9yZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHZhciBzdGF0ZVN0cmluZyA9IHN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByb3BzLnN0YXRlS2V5KTtcbiAgICAgICAgdmFyIGRhdGVGb3JtYXQgPSAvXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn0uXFxkezN9Wi87XG5cbiAgICAgICAgdmFyIHJldml2ZXIgPSBmdW5jdGlvbiByZXZpdmVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIGRhdGVGb3JtYXQudGVzdCh2YWx1ZSkgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3RhdGVTdHJpbmcpIHtcbiAgICAgICAgICByZXN0b3JlZFN0YXRlID0gSlNPTi5wYXJzZShzdGF0ZVN0cmluZywgcmV2aXZlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdG9yZVN0YXRlKHJlc3RvcmVkU3RhdGUsIHN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdG9yZVRhYmxlU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdG9yZVRhYmxlU3RhdGUocmVzdG9yZWRTdGF0ZSkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5fcmVzdG9yZVN0YXRlKHJlc3RvcmVkU3RhdGUpO1xuXG4gICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShzdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZXN0b3JlU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc3RvcmVTdGF0ZShyZXN0b3JlZFN0YXRlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgaWYgKE9iamVjdFV0aWxzLmlzTm90RW1wdHkocmVzdG9yZWRTdGF0ZSkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdG9yKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYWdlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0T25QYWdlUGFyYW1zID0gZnVuY3Rpb24gZ2V0T25QYWdlUGFyYW1zKGZpcnN0LCByb3dzKSB7XG4gICAgICAgICAgICAgIHZhciB0b3RhbFJlY29yZHMgPSBfdGhpczMuZ2V0VG90YWxSZWNvcmRzKF90aGlzMy5wcm9jZXNzZWREYXRhKCkpO1xuXG4gICAgICAgICAgICAgIHZhciBwYWdlQ291bnQgPSBNYXRoLmNlaWwodG90YWxSZWNvcmRzIC8gcm93cykgfHwgMTtcbiAgICAgICAgICAgICAgdmFyIHBhZ2UgPSBNYXRoLmZsb29yKGZpcnN0IC8gcm93cyk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IHBhZ2VDb3VudFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBhZ2UodGhpcy5jcmVhdGVFdmVudChnZXRPblBhZ2VQYXJhbXMocmVzdG9yZWRTdGF0ZS5maXJzdCwgcmVzdG9yZWRTdGF0ZS5yb3dzKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5maXJzdCA9IHJlc3RvcmVkU3RhdGUuZmlyc3Q7XG4gICAgICAgICAgICBzdGF0ZS5yb3dzID0gcmVzdG9yZWRTdGF0ZS5yb3dzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0b3JlZFN0YXRlLnNvcnRGaWVsZCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uU29ydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNvcnQodGhpcy5jcmVhdGVFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRGaWVsZDogcmVzdG9yZWRTdGF0ZS5zb3J0RmllbGQsXG4gICAgICAgICAgICAgIHNvcnRPcmRlcjogcmVzdG9yZWRTdGF0ZS5zb3J0T3JkZXJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUuc29ydEZpZWxkID0gcmVzdG9yZWRTdGF0ZS5zb3J0RmllbGQ7XG4gICAgICAgICAgICBzdGF0ZS5zb3J0T3JkZXIgPSByZXN0b3JlZFN0YXRlLnNvcnRPcmRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdG9yZWRTdGF0ZS5tdWx0aVNvcnRNZXRhKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Tb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU29ydCh0aGlzLmNyZWF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgbXVsdGlTb3J0TWV0YTogcmVzdG9yZWRTdGF0ZS5tdWx0aVNvcnRNZXRhXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLm11bHRpU29ydE1ldGEgPSByZXN0b3JlZFN0YXRlLm11bHRpU29ydE1ldGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3RvcmVkU3RhdGUuZmlsdGVycykge1xuICAgICAgICAgIHN0YXRlLmRfZmlsdGVycyA9IHRoaXMuY2xvbmVGaWx0ZXJzKHJlc3RvcmVkU3RhdGUuZmlsdGVycyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLmNyZWF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgZmlsdGVyczogcmVzdG9yZWRTdGF0ZS5maWx0ZXJzXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcnMgPSB0aGlzLmNsb25lRmlsdGVycyhyZXN0b3JlZFN0YXRlLmZpbHRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlc2l6YWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICB0aGlzLmNvbHVtbldpZHRoc1N0YXRlID0gcmVzdG9yZWRTdGF0ZS5jb2x1bW5XaWR0aHM7XG4gICAgICAgICAgdGhpcy50YWJsZVdpZHRoU3RhdGUgPSByZXN0b3JlZFN0YXRlLnRhYmxlV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICBzdGF0ZS5jb2x1bW5PcmRlciA9IHJlc3RvcmVkU3RhdGUuY29sdW1uT3JkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdG9yZWRTdGF0ZS5leHBhbmRlZFJvd3MgJiYgdGhpcy5wcm9wcy5vblJvd1RvZ2dsZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Sb3dUb2dnbGUoe1xuICAgICAgICAgICAgZGF0YTogcmVzdG9yZWRTdGF0ZS5leHBhbmRlZFJvd3NcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0b3JlZFN0YXRlLnNlbGVjdGlvbiAmJiB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZSh7XG4gICAgICAgICAgICB2YWx1ZTogcmVzdG9yZWRTdGF0ZS5zZWxlY3Rpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3RhdGVSZXN0b3JlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblN0YXRlUmVzdG9yZShyZXN0b3JlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNhdmVDb2x1bW5XaWR0aHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUNvbHVtbldpZHRocyhzdGF0ZSkge1xuICAgICAgdmFyIHdpZHRocyA9IFtdO1xuICAgICAgdmFyIGhlYWRlcnMgPSBEb21IYW5kbGVyLmZpbmQodGhpcy5lbCwgJy5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgnKTtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICAgIHJldHVybiB3aWR0aHMucHVzaChEb21IYW5kbGVyLmdldE91dGVyV2lkdGgoaGVhZGVyKSk7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmNvbHVtbldpZHRocyA9IHdpZHRocy5qb2luKCcsJyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbHVtblJlc2l6ZU1vZGUgPT09ICdleHBhbmQnKSB7XG4gICAgICAgIHN0YXRlLnRhYmxlV2lkdGggPSBEb21IYW5kbGVyLmdldE91dGVyV2lkdGgodGhpcy50YWJsZSkgKyAncHgnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN0b3JlQ29sdW1uV2lkdGhzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3RvcmVDb2x1bW5XaWR0aHMoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuY29sdW1uV2lkdGhzU3RhdGUpIHtcbiAgICAgICAgdmFyIHdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhzU3RhdGUuc3BsaXQoJywnKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZXhwYW5kJyAmJiB0aGlzLnRhYmxlV2lkdGhTdGF0ZSkge1xuICAgICAgICAgIHRoaXMudGFibGUuc3R5bGUud2lkdGggPSB0aGlzLnRhYmxlV2lkdGhTdGF0ZTtcbiAgICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLm1pbldpZHRoID0gdGhpcy50YWJsZVdpZHRoU3RhdGU7XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMudGFibGVXaWR0aFN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdFV0aWxzLmlzTm90RW1wdHkod2lkdGhzKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlU3R5bGVFbGVtZW50KCk7XG4gICAgICAgICAgdmFyIGlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uICh3aWR0aCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IF90aGlzNC5wcm9wcy5zY3JvbGxhYmxlID8gXCJmbGV4OiAxIDEgXCIuY29uY2F0KHdpZHRoLCBcInB4ICFpbXBvcnRhbnRcIikgOiBcIndpZHRoOiBcIi5jb25jYXQod2lkdGgsIFwicHggIWltcG9ydGFudFwiKTtcbiAgICAgICAgICAgIGlubmVySFRNTCArPSBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZVtcIi5jb25jYXQoX3RoaXM0LnN0YXRlLmF0dHJpYnV0ZVNlbGVjdG9yLCBcIl0gLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aDpudGgtY2hpbGQoXCIpLmNvbmNhdChpbmRleCArIDEsIFwiKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAucC1kYXRhdGFibGVbXCIpLmNvbmNhdChfdGhpczQuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsIFwiXSAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZChcIikuY29uY2F0KGluZGV4ICsgMSwgXCIpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZVtcIikuY29uY2F0KF90aGlzNC5zdGF0ZS5hdHRyaWJ1dGVTZWxlY3RvciwgXCJdIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQ6bnRoLWNoaWxkKFwiKS5jb25jYXQoaW5kZXggKyAxLCBcIikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIikuY29uY2F0KHN0eWxlLCBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIFwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFBhcmVudEhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kUGFyZW50SGVhZGVyKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnVEgnKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICB3aGlsZSAocGFyZW50Lm5vZGVOYW1lICE9PSAnVEgnKSB7XG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFwYXJlbnQpIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0R3JvdXBSb3dTb3J0RmllbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0R3JvdXBSb3dTb3J0RmllbGQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zb3J0TW9kZSA9PT0gJ3NpbmdsZScgPyB0aGlzLnByb3BzLnNvcnRGaWVsZCA6IHRoaXMuc3RhdGUuZ3JvdXBSb3dzU29ydE1ldGEgPyB0aGlzLnN0YXRlLmdyb3VwUm93c1NvcnRNZXRhLmZpZWxkIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2VsZWN0YWJsZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0YWJsZURhdGEodmFsKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd1NlbGVjdGlvbkVsZW1lbnQgfHwgdGhpcy5wcm9wcy5pc0RhdGFTZWxlY3RhYmxlKSB7XG4gICAgICAgIHJldHVybiB2YWwuZmlsdGVyKGZ1bmN0aW9uIChkYXRhLCBpbmRleCkge1xuICAgICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSB0cnVlO1xuICAgICAgICAgIGlmIChfdGhpczUucHJvcHMuc2hvd1NlbGVjdGlvbkVsZW1lbnQpIGlzU2VsZWN0YWJsZSA9IF90aGlzNS5wcm9wcy5zaG93U2VsZWN0aW9uRWxlbWVudCh7XG4gICAgICAgICAgICByb3dJbmRleDogaW5kZXgsXG4gICAgICAgICAgICBwcm9wczogX3RoaXM1LnByb3BzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKF90aGlzNS5wcm9wcy5pc0RhdGFTZWxlY3RhYmxlICYmIGlzU2VsZWN0YWJsZSkgaXNTZWxlY3RhYmxlID0gX3RoaXM1LnByb3BzLmlzRGF0YVNlbGVjdGFibGUoe1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBpc1NlbGVjdGFibGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxSb3dzU2VsZWN0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsUm93c1NlbGVjdGVkKHByb2Nlc3NlZERhdGEpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdEFsbENoYW5nZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RBbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuc2VsZWN0aW9uUGFnZU9ubHkgPyB0aGlzLmRhdGFUb1JlbmRlcihwcm9jZXNzZWREYXRhKSA6IHByb2Nlc3NlZERhdGE7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnByb3BzLmZyb3plblZhbHVlID8gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aGlzLnByb3BzLmZyb3plblZhbHVlKSwgX3RvQ29uc3VtYWJsZUFycmF5KGRhdGEpKSA6IGRhdGE7XG4gICAgICAgIHZhciBzZWxlY3RhYmxlVmFsID0gdGhpcy5nZXRTZWxlY3RhYmxlRGF0YSh2YWwpO1xuICAgICAgICByZXR1cm4gc2VsZWN0YWJsZVZhbCAmJiB0aGlzLnByb3BzLnNlbGVjdGlvbiAmJiBzZWxlY3RhYmxlVmFsLmV2ZXJ5KGZ1bmN0aW9uIChzdikge1xuICAgICAgICAgIHJldHVybiBfdGhpczYucHJvcHMuc2VsZWN0aW9uLnNvbWUoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczYuaXNFcXVhbHMocywgc3YpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2VsZWN0aW9uTW9kZUluQ29sdW1uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGlvbk1vZGVJbkNvbHVtbihjb2x1bW5zKSB7XG4gICAgICBpZiAoY29sdW1ucykge1xuICAgICAgICB2YXIgY29sID0gY29sdW1ucy5maW5kKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuICEhYy5wcm9wcy5zZWxlY3Rpb25Nb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbCA/IGNvbC5wcm9wcy5zZWxlY3Rpb25Nb2RlIDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRDb2x1bW5CeUtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kQ29sdW1uQnlLZXkoY29sdW1ucywga2V5KSB7XG4gICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShjb2x1bW5zKSA/IGNvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHJldHVybiBjb2wucHJvcHMuY29sdW1uS2V5ID09PSBrZXkgfHwgY29sLnByb3BzLmZpZWxkID09PSBrZXk7XG4gICAgICB9KSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRvdGFsUmVjb3Jkc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUb3RhbFJlY29yZHMoZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubGF6eSA/IHRoaXMucHJvcHMudG90YWxSZWNvcmRzIDogZGF0YSA/IGRhdGEubGVuZ3RoIDogMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25FZGl0aW5nTWV0YUNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVkaXRpbmdNZXRhQ2hhbmdlKGUpIHtcbiAgICAgIHZhciByb3dEYXRhID0gZS5yb3dEYXRhLFxuICAgICAgICAgIGZpZWxkID0gZS5maWVsZCxcbiAgICAgICAgICByb3dJbmRleCA9IGUucm93SW5kZXgsXG4gICAgICAgICAgZWRpdGluZyA9IGUuZWRpdGluZztcblxuICAgICAgdmFyIGVkaXRpbmdNZXRhID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5zdGF0ZS5lZGl0aW5nTWV0YSk7XG5cbiAgICAgIHZhciBtZXRhID0gZWRpdGluZ01ldGFbcm93SW5kZXhdO1xuXG4gICAgICBpZiAoZWRpdGluZykge1xuICAgICAgICAhbWV0YSAmJiAobWV0YSA9IGVkaXRpbmdNZXRhW3Jvd0luZGV4XSA9IHtcbiAgICAgICAgICBkYXRhOiBfb2JqZWN0U3ByZWFkKHt9LCByb3dEYXRhKSxcbiAgICAgICAgICBmaWVsZHM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgICBtZXRhWydmaWVsZHMnXS5wdXNoKGZpZWxkKTtcbiAgICAgIH0gZWxzZSBpZiAobWV0YSkge1xuICAgICAgICB2YXIgZmllbGRzID0gbWV0YVsnZmllbGRzJ10uZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgcmV0dXJuIGYgIT09IGZpZWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgIWZpZWxkcy5sZW5ndGggPyBkZWxldGUgZWRpdGluZ01ldGFbcm93SW5kZXhdIDogbWV0YVsnZmllbGRzJ10gPSBmaWVsZHM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlZGl0aW5nTWV0YTogZWRpdGluZ01ldGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhckVkaXRpbmdNZXRhRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckVkaXRpbmdNZXRhRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmVkaXRNb2RlICYmIE9iamVjdFV0aWxzLmlzTm90RW1wdHkodGhpcy5zdGF0ZS5lZGl0aW5nTWV0YSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZWRpdGluZ01ldGE6IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNvbHVtblJlc2l6ZVN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ29sdW1uUmVzaXplU3RhcnQoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGNvbHVtbiA9IGUuY29sdW1uO1xuICAgICAgdmFyIGNvbnRhaW5lckxlZnQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLmVsKS5sZWZ0O1xuICAgICAgdGhpcy5yZXNpemVDb2x1bW4gPSBjb2x1bW47XG4gICAgICB0aGlzLnJlc2l6ZUNvbHVtbkVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICB0aGlzLmNvbHVtblJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFzdFJlc2l6ZUhlbHBlclggPSBldmVudC5wYWdlWCAtIGNvbnRhaW5lckxlZnQgKyB0aGlzLmVsLnNjcm9sbExlZnQ7XG4gICAgICB0aGlzLmJpbmRDb2x1bW5SZXNpemVFdmVudHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db2x1bW5SZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Db2x1bW5SZXNpemUoZXZlbnQpIHtcbiAgICAgIHZhciBjb250YWluZXJMZWZ0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5lbCkubGVmdDtcbiAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ3AtdW5zZWxlY3RhYmxlLXRleHQnKTtcbiAgICAgIHRoaXMucmVzaXplSGVscGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMucmVzaXplSGVscGVyLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xuICAgICAgdGhpcy5yZXNpemVIZWxwZXIuc3R5bGUubGVmdCA9IGV2ZW50LnBhZ2VYIC0gY29udGFpbmVyTGVmdCArIHRoaXMuZWwuc2Nyb2xsTGVmdCArICdweCc7XG4gICAgICB0aGlzLnJlc2l6ZUhlbHBlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db2x1bW5SZXNpemVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Db2x1bW5SZXNpemVFbmQoKSB7XG4gICAgICB2YXIgZGVsdGEgPSB0aGlzLnJlc2l6ZUhlbHBlci5vZmZzZXRMZWZ0IC0gdGhpcy5sYXN0UmVzaXplSGVscGVyWDtcbiAgICAgIHZhciBjb2x1bW5XaWR0aCA9IHRoaXMucmVzaXplQ29sdW1uRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBuZXdDb2x1bW5XaWR0aCA9IGNvbHVtbldpZHRoICsgZGVsdGE7XG4gICAgICB2YXIgbWluV2lkdGggPSB0aGlzLnJlc2l6ZUNvbHVtbkVsZW1lbnQuc3R5bGUubWluV2lkdGggfHwgMTU7XG5cbiAgICAgIGlmIChjb2x1bW5XaWR0aCArIGRlbHRhID4gcGFyc2VJbnQobWluV2lkdGgsIDEwKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZml0Jykge1xuICAgICAgICAgIHZhciBuZXh0Q29sdW1uID0gdGhpcy5yZXNpemVDb2x1bW5FbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICB2YXIgbmV4dENvbHVtbldpZHRoID0gbmV4dENvbHVtbi5vZmZzZXRXaWR0aCAtIGRlbHRhO1xuXG4gICAgICAgICAgaWYgKG5ld0NvbHVtbldpZHRoID4gMTUgJiYgbmV4dENvbHVtbldpZHRoID4gMTUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplVGFibGVDZWxscyhuZXdDb2x1bW5XaWR0aCwgbmV4dENvbHVtbldpZHRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZXhwYW5kJykge1xuICAgICAgICAgIHZhciB0YWJsZVdpZHRoID0gdGhpcy50YWJsZS5vZmZzZXRXaWR0aCArIGRlbHRhICsgJ3B4JztcbiAgICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLndpZHRoID0gdGFibGVXaWR0aDtcbiAgICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLm1pbldpZHRoID0gdGFibGVXaWR0aDtcbiAgICAgICAgICB0aGlzLnJlc2l6ZVRhYmxlQ2VsbHMobmV3Q29sdW1uV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db2x1bW5SZXNpemVFbmQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplRW5kKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucmVzaXplQ29sdW1uRWxlbWVudCxcbiAgICAgICAgICAgIGNvbHVtbjogdGhpcy5yZXNpemVDb2x1bW4sXG4gICAgICAgICAgICBkZWx0YTogZGVsdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGVmdWwoKSkge1xuICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNpemVIZWxwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMucmVzaXplQ29sdW1uID0gbnVsbDtcbiAgICAgIHRoaXMucmVzaXplQ29sdW1uRWxlbWVudCA9IG51bGw7XG4gICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdwLXVuc2VsZWN0YWJsZS10ZXh0Jyk7XG4gICAgICB0aGlzLnVuYmluZENvbHVtblJlc2l6ZUV2ZW50cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNpemVUYWJsZUNlbGxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZVRhYmxlQ2VsbHMobmV3Q29sdW1uV2lkdGgsIG5leHRDb2x1bW5XaWR0aCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHZhciB3aWR0aHMgPSBbXTtcbiAgICAgIHZhciBjb2xJbmRleCA9IERvbUhhbmRsZXIuaW5kZXgodGhpcy5yZXNpemVDb2x1bW5FbGVtZW50KTtcbiAgICAgIHZhciBoZWFkZXJzID0gRG9tSGFuZGxlci5maW5kKHRoaXMudGFibGUsICcucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoJyk7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICByZXR1cm4gd2lkdGhzLnB1c2goRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKGhlYWRlcikpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmRlc3Ryb3lTdHlsZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuY3JlYXRlU3R5bGVFbGVtZW50KCk7XG4gICAgICB2YXIgaW5uZXJIVE1MID0gJyc7XG4gICAgICB3aWR0aHMuZm9yRWFjaChmdW5jdGlvbiAod2lkdGgsIGluZGV4KSB7XG4gICAgICAgIHZhciBjb2xXaWR0aCA9IGluZGV4ID09PSBjb2xJbmRleCA/IG5ld0NvbHVtbldpZHRoIDogbmV4dENvbHVtbldpZHRoICYmIGluZGV4ID09PSBjb2xJbmRleCArIDEgPyBuZXh0Q29sdW1uV2lkdGggOiB3aWR0aDtcbiAgICAgICAgdmFyIHN0eWxlID0gX3RoaXM3LnByb3BzLnNjcm9sbGFibGUgPyBcImZsZXg6IDEgMSBcIi5jb25jYXQoY29sV2lkdGgsIFwicHggIWltcG9ydGFudFwiKSA6IFwid2lkdGg6IFwiLmNvbmNhdChjb2xXaWR0aCwgXCJweCAhaW1wb3J0YW50XCIpO1xuICAgICAgICBpbm5lckhUTUwgKz0gXCJcXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlW1wiLmNvbmNhdChfdGhpczcuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsIFwiXSAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoOm50aC1jaGlsZChcIikuY29uY2F0KGluZGV4ICsgMSwgXCIpLFxcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGVbXCIpLmNvbmNhdChfdGhpczcuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsIFwiXSAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZChcIikuY29uY2F0KGluZGV4ICsgMSwgXCIpLFxcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGVbXCIpLmNvbmNhdChfdGhpczcuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsIFwiXSAucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkOm50aC1jaGlsZChcIikuY29uY2F0KGluZGV4ICsgMSwgXCIpIHtcXG4gICAgICAgICAgICAgICAgICAgIFwiKS5jb25jYXQoc3R5bGUsIFwiXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcIik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZENvbHVtblJlc2l6ZUV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kQ29sdW1uUmVzaXplRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5kb2N1bWVudENvbHVtblJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRDb2x1bW5SZXNpemVMaXN0ZW5lciA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpczguY29sdW1uUmVzaXppbmcpIHtcbiAgICAgICAgICAgIF90aGlzOC5vbkNvbHVtblJlc2l6ZShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q29sdW1uUmVzaXplRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudENvbHVtblJlc2l6ZUVuZExpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXM4LmNvbHVtblJlc2l6aW5nKSB7XG4gICAgICAgICAgICBfdGhpczguY29sdW1uUmVzaXppbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgX3RoaXM4Lm9uQ29sdW1uUmVzaXplRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kQ29sdW1uUmVzaXplRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZENvbHVtblJlc2l6ZUV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLmRvY3VtZW50Q29sdW1uUmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZG9jdW1lbnQnLCB0aGlzLmRvY3VtZW50Q29sdW1uUmVzaXplTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmRvY3VtZW50Q29sdW1uUmVzaXplTGlzdGVuZXIgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kb2N1bWVudENvbHVtblJlc2l6ZUVuZExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RvY3VtZW50JywgdGhpcy5kb2N1bWVudENvbHVtblJlc2l6ZUVuZExpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5kb2N1bWVudENvbHVtblJlc2l6ZUVuZExpc3RlbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db2x1bW5IZWFkZXJNb3VzZURvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Db2x1bW5IZWFkZXJNb3VzZURvd24oZSkge1xuICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGNvbHVtbiA9IGUuY29sdW1uO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnMgJiYgdGhpcy5nZXRDb2x1bW5Qcm9wKGNvbHVtbiwgJ3Jlb3JkZXJhYmxlJykgIT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnVEVYVEFSRUEnIHx8IERvbUhhbmRsZXIuaGFzQ2xhc3MoZXZlbnQudGFyZ2V0LCAncC1jb2x1bW4tcmVzaXplcicpKSBldmVudC5jdXJyZW50VGFyZ2V0LmRyYWdnYWJsZSA9IGZhbHNlO2Vsc2UgZXZlbnQuY3VycmVudFRhcmdldC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNvbHVtbkhlYWRlckNoZWNrYm94Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ29sdW1uSGVhZGVyQ2hlY2tib3hDaGFuZ2UoZSwgcHJvY2Vzc2VkRGF0YSkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RBbGxDaGFuZ2UoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIGNoZWNrZWQgPSBlLmNoZWNrZWQ7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5zZWxlY3Rpb25QYWdlT25seSA/IHRoaXMuZGF0YVRvUmVuZGVyKHByb2Nlc3NlZERhdGEpIDogcHJvY2Vzc2VkRGF0YTtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0aW9uUGFnZU9ubHkgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPyB0aGlzLnByb3BzLnNlbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICByZXR1cm4gIWRhdGEuc29tZShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzOS5pc0VxdWFscyhzLCBkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkgOiBbXTtcblxuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMucHJvcHMuZnJvemVuVmFsdWUgPyBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNlbGVjdGlvbiksIF90b0NvbnN1bWFibGVBcnJheSh0aGlzLnByb3BzLmZyb3plblZhbHVlKSwgX3RvQ29uc3VtYWJsZUFycmF5KGRhdGEpKSA6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc2VsZWN0aW9uKSwgX3RvQ29uc3VtYWJsZUFycmF5KGRhdGEpKTtcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGFibGVEYXRhKHNlbGVjdGlvbik7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkFsbFJvd3NTZWxlY3QgJiYgdGhpcy5wcm9wcy5vbkFsbFJvd3NTZWxlY3Qoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIGRhdGE6IHNlbGVjdGlvbixcbiAgICAgICAgICAgIHR5cGU6ICdhbGwnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkFsbFJvd3NVbnNlbGVjdCAmJiB0aGlzLnByb3BzLm9uQWxsUm93c1Vuc2VsZWN0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkYXRhOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICB0eXBlOiAnYWxsJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlKHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLFxuICAgICAgICAgICAgdHlwZTogJ2FsbCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNvbHVtbkhlYWRlckRyYWdTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvbHVtbkhlYWRlckRyYWdTdGFydChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgY29sdW1uID0gZS5jb2x1bW47XG5cbiAgICAgIGlmICh0aGlzLmNvbHVtblJlc2l6aW5nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2xSZW9yZGVySWNvbldpZHRoID0gRG9tSGFuZGxlci5nZXRIaWRkZW5FbGVtZW50T3V0ZXJXaWR0aCh0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcCk7XG4gICAgICB0aGlzLmNvbFJlb3JkZXJJY29uSGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRIaWRkZW5FbGVtZW50T3V0ZXJIZWlnaHQodGhpcy5yZW9yZGVySW5kaWNhdG9yVXApO1xuICAgICAgdGhpcy5kcmFnZ2VkQ29sdW1uID0gY29sdW1uO1xuICAgICAgdGhpcy5kcmFnZ2VkQ29sdW1uRWxlbWVudCA9IHRoaXMuZmluZFBhcmVudEhlYWRlcihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2InKTsgLy8gRmlyZWZveCByZXF1aXJlcyB0aGlzIHRvIG1ha2UgZHJhZ2dpbmcgcG9zc2libGVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db2x1bW5IZWFkZXJEcmFnT3ZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvbHVtbkhlYWRlckRyYWdPdmVyKGUpIHtcbiAgICAgIHZhciBldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIHZhciBkcm9wSGVhZGVyID0gdGhpcy5maW5kUGFyZW50SGVhZGVyKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnMgJiYgdGhpcy5kcmFnZ2VkQ29sdW1uRWxlbWVudCAmJiBkcm9wSGVhZGVyKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dlZENvbHVtbkVsZW1lbnQgIT09IGRyb3BIZWFkZXIpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyT2Zmc2V0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5lbCk7XG4gICAgICAgICAgdmFyIGRyb3BIZWFkZXJPZmZzZXQgPSBEb21IYW5kbGVyLmdldE9mZnNldChkcm9wSGVhZGVyKTtcbiAgICAgICAgICB2YXIgdGFyZ2V0TGVmdCA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCAtIGNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgICAgICAgIHZhciBjb2x1bW5DZW50ZXIgPSBkcm9wSGVhZGVyT2Zmc2V0LmxlZnQgKyBkcm9wSGVhZGVyLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcC5zdHlsZS50b3AgPSBkcm9wSGVhZGVyT2Zmc2V0LnRvcCAtIGNvbnRhaW5lck9mZnNldC50b3AgLSAodGhpcy5jb2xSZW9yZGVySWNvbkhlaWdodCAtIDEpICsgJ3B4JztcbiAgICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duLnN0eWxlLnRvcCA9IGRyb3BIZWFkZXJPZmZzZXQudG9wIC0gY29udGFpbmVyT2Zmc2V0LnRvcCArIGRyb3BIZWFkZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgIGlmIChldmVudC5wYWdlWCA+IGNvbHVtbkNlbnRlcikge1xuICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXAuc3R5bGUubGVmdCA9IHRhcmdldExlZnQgKyBkcm9wSGVhZGVyLm9mZnNldFdpZHRoIC0gTWF0aC5jZWlsKHRoaXMuY29sUmVvcmRlckljb25XaWR0aCAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvckRvd24uc3R5bGUubGVmdCA9IHRhcmdldExlZnQgKyBkcm9wSGVhZGVyLm9mZnNldFdpZHRoIC0gTWF0aC5jZWlsKHRoaXMuY29sUmVvcmRlckljb25XaWR0aCAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZHJvcFBvc2l0aW9uID0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXAuc3R5bGUubGVmdCA9IHRhcmdldExlZnQgLSBNYXRoLmNlaWwodGhpcy5jb2xSZW9yZGVySWNvbldpZHRoIC8gMikgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yRG93bi5zdHlsZS5sZWZ0ID0gdGFyZ2V0TGVmdCAtIE1hdGguY2VpbCh0aGlzLmNvbFJlb3JkZXJJY29uV2lkdGggLyAyKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmRyb3BQb3NpdGlvbiA9IC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvclVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvckRvd24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Db2x1bW5IZWFkZXJEcmFnTGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Db2x1bW5IZWFkZXJEcmFnTGVhdmUoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnMgJiYgdGhpcy5kcmFnZ2VkQ29sdW1uRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ29sdW1uSGVhZGVyRHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvbHVtbkhlYWRlckRyb3AoZSkge1xuICAgICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgICB2YXIgZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgY29sdW1uID0gZS5jb2x1bW47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2VkQ29sdW1uRWxlbWVudCkge1xuICAgICAgICB2YXIgZHJhZ0luZGV4ID0gRG9tSGFuZGxlci5pbmRleCh0aGlzLmRyYWdnZWRDb2x1bW5FbGVtZW50KTtcbiAgICAgICAgdmFyIGRyb3BJbmRleCA9IERvbUhhbmRsZXIuaW5kZXgodGhpcy5maW5kUGFyZW50SGVhZGVyKGV2ZW50LmN1cnJlbnRUYXJnZXQpKTtcbiAgICAgICAgdmFyIGFsbG93RHJvcCA9IGRyYWdJbmRleCAhPT0gZHJvcEluZGV4O1xuXG4gICAgICAgIGlmIChhbGxvd0Ryb3AgJiYgKGRyb3BJbmRleCAtIGRyYWdJbmRleCA9PT0gMSAmJiB0aGlzLmRyb3BQb3NpdGlvbiA9PT0gLTEgfHwgZHJhZ0luZGV4IC0gZHJvcEluZGV4ID09PSAxICYmIHRoaXMuZHJvcFBvc2l0aW9uID09PSAxKSkge1xuICAgICAgICAgIGFsbG93RHJvcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbG93RHJvcCkge1xuICAgICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG5cbiAgICAgICAgICB2YXIgaXNTYW1lQ29sdW1uID0gZnVuY3Rpb24gaXNTYW1lQ29sdW1uKGNvbDEsIGNvbDIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2wxLnByb3BzLmNvbHVtbktleSB8fCBjb2wyLnByb3BzLmNvbHVtbktleSA/IE9iamVjdFV0aWxzLmVxdWFscyhjb2wxLnByb3BzLCBjb2wyLnByb3BzLCAnY29sdW1uS2V5JykgOiBPYmplY3RVdGlscy5lcXVhbHMoY29sMS5wcm9wcywgY29sMi5wcm9wcywgJ2ZpZWxkJyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBkcmFnQ29sSW5kZXggPSBjb2x1bW5zLmZpbmRJbmRleChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1NhbWVDb2x1bW4oY2hpbGQsIF90aGlzMTAuZHJhZ2dlZENvbHVtbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGRyb3BDb2xJbmRleCA9IGNvbHVtbnMuZmluZEluZGV4KGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzU2FtZUNvbHVtbihjaGlsZCwgY29sdW1uKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChkcm9wQ29sSW5kZXggPCBkcmFnQ29sSW5kZXggJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgIGRyb3BDb2xJbmRleCsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkcm9wQ29sSW5kZXggPiBkcmFnQ29sSW5kZXggJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgICAgICBkcm9wQ29sSW5kZXgtLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3RVdGlscy5yZW9yZGVyQXJyYXkoY29sdW1ucywgZHJhZ0NvbEluZGV4LCBkcm9wQ29sSW5kZXgpO1xuICAgICAgICAgIHZhciBjb2x1bW5PcmRlciA9IGNvbHVtbnMucmVkdWNlKGZ1bmN0aW9uIChvcmRlcnMsIGNvbCkge1xuICAgICAgICAgICAgb3JkZXJzLnB1c2goY29sLnByb3BzLmNvbHVtbktleSB8fCBjb2wucHJvcHMuZmllbGQpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVycztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2x1bW5PcmRlcjogY29sdW1uT3JkZXJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29sUmVvcmRlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbFJlb3JkZXIoe1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgZHJhZ0luZGV4OiBkcmFnQ29sSW5kZXgsXG4gICAgICAgICAgICAgIGRyb3BJbmRleDogZHJvcENvbEluZGV4LFxuICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbkVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbkVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdnZWRDb2x1bW4gPSBudWxsO1xuICAgICAgICB0aGlzLmRyb3BQb3NpdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZVN0eWxlRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnN0eWxlRWxlbWVudCA9IERvbUhhbmRsZXIuY3JlYXRlSW5saW5lU3R5bGUoUHJpbWVSZWFjdC5ub25jZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZVJlc3BvbnNpdmVTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSZXNwb25zaXZlU3R5bGUoKSB7XG4gICAgICBpZiAoIXRoaXMucmVzcG9uc2l2ZVN0eWxlRWxlbWVudCkge1xuICAgICAgICB0aGlzLnJlc3BvbnNpdmVTdHlsZUVsZW1lbnQgPSBEb21IYW5kbGVyLmNyZWF0ZUlubGluZVN0eWxlKFByaW1lUmVhY3Qubm9uY2UpO1xuICAgICAgICB2YXIgaW5uZXJIVE1MID0gXCJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcIi5jb25jYXQodGhpcy5wcm9wcy5icmVha3BvaW50LCBcIikge1xcbiAgICAucC1kYXRhdGFibGVbXCIpLmNvbmNhdCh0aGlzLnN0YXRlLmF0dHJpYnV0ZVNlbGVjdG9yLCBcIl0gLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4gICAgLnAtZGF0YXRhYmxlW1wiKS5jb25jYXQodGhpcy5zdGF0ZS5hdHRyaWJ1dGVTZWxlY3RvciwgXCJdIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5wLWRhdGF0YWJsZVtcIikuY29uY2F0KHRoaXMuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsIFwiXSAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAucC1kYXRhdGFibGVbXCIpLmNvbmNhdCh0aGlzLnN0YXRlLmF0dHJpYnV0ZVNlbGVjdG9yLCBcIl0gLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIGJvcmRlcjogMCBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wLWRhdGF0YWJsZVtcIikuY29uY2F0KHRoaXMuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsIFwiXS5wLWRhdGF0YWJsZS1ncmlkbGluZXMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDA7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XFxuICAgICAgICBib3JkZXItbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAucC1kYXRhdGFibGVbXCIpLmNvbmNhdCh0aGlzLnN0YXRlLmF0dHJpYnV0ZVNlbGVjdG9yLCBcIl0gLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCA+IC5wLWNvbHVtbi10aXRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbn1cXG5cIik7XG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZVN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lSZXNwb25zaXZlU3R5bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVJlc3BvbnNpdmVTdHlsZSgpIHtcbiAgICAgIHRoaXMucmVzcG9uc2l2ZVN0eWxlRWxlbWVudCA9IERvbUhhbmRsZXIucmVtb3ZlSW5saW5lU3R5bGUodGhpcy5yZXNwb25zaXZlU3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVN0eWxlRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95U3R5bGVFbGVtZW50KCkge1xuICAgICAgdGhpcy5zdHlsZUVsZW1lbnQgPSBEb21IYW5kbGVyLnJlbW92ZUlubGluZVN0eWxlKHRoaXMuc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25QYWdlQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUGFnZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLmNsZWFyRWRpdGluZ01ldGFEYXRhKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblBhZ2UpIHRoaXMucHJvcHMub25QYWdlKHRoaXMuY3JlYXRlRXZlbnQoZSkpO2Vsc2UgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpcnN0OiBlLmZpcnN0LFxuICAgICAgICByb3dzOiBlLnJvd3NcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnByb2Nlc3NlZERhdGEoKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uU29ydENoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblNvcnRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5jbGVhckVkaXRpbmdNZXRhRGF0YSgpO1xuICAgICAgdmFyIGV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGNvbHVtbiA9IGUuY29sdW1uLFxuICAgICAgICAgIHNvcnRhYmxlRGlzYWJsZWRGaWVsZHMgPSBlLnNvcnRhYmxlRGlzYWJsZWRGaWVsZHM7XG4gICAgICB2YXIgc29ydEZpZWxkID0gY29sdW1uLnByb3BzLnNvcnRGaWVsZCB8fCBjb2x1bW4ucHJvcHMuZmllbGQ7XG4gICAgICB2YXIgc29ydE9yZGVyID0gdGhpcy5wcm9wcy5kZWZhdWx0U29ydE9yZGVyO1xuICAgICAgdmFyIG11bHRpU29ydE1ldGE7XG4gICAgICB2YXIgZXZlbnRNZXRhO1xuICAgICAgdGhpcy5jb2x1bW5Tb3J0YWJsZSA9IGNvbHVtbi5wcm9wcy5zb3J0YWJsZTtcbiAgICAgIHRoaXMuY29sdW1uU29ydEZ1bmN0aW9uID0gY29sdW1uLnByb3BzLnNvcnRGdW5jdGlvbjtcbiAgICAgIHRoaXMuY29sdW1uRmllbGQgPSBjb2x1bW4ucHJvcHMuc29ydEZpZWxkO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICB2YXIgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcbiAgICAgICAgbXVsdGlTb3J0TWV0YSA9IF90b0NvbnN1bWFibGVBcnJheSh0aGlzLmdldE11bHRpU29ydE1ldGEoKSk7XG4gICAgICAgIHZhciBzb3J0TWV0YSA9IG11bHRpU29ydE1ldGEuZmluZChmdW5jdGlvbiAoc29ydE1ldGEpIHtcbiAgICAgICAgICByZXR1cm4gc29ydE1ldGEuZmllbGQgPT09IHNvcnRGaWVsZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNvcnRPcmRlciA9IHNvcnRNZXRhID8gdGhpcy5nZXRDYWxjdWxhdGVkU29ydE9yZGVyKHNvcnRNZXRhLm9yZGVyKSA6IHNvcnRPcmRlcjtcbiAgICAgICAgdmFyIG5ld01ldGFEYXRhID0ge1xuICAgICAgICAgIGZpZWxkOiBzb3J0RmllbGQsXG4gICAgICAgICAgb3JkZXI6IHNvcnRPcmRlclxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzb3J0T3JkZXIpIHtcbiAgICAgICAgICBtdWx0aVNvcnRNZXRhID0gbWV0YUtleSA/IG11bHRpU29ydE1ldGEgOiBtdWx0aVNvcnRNZXRhLmZpbHRlcihmdW5jdGlvbiAobWV0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGlzYWJsZWRGaWVsZHMuc29tZShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkID09PSBtZXRhLmZpZWxkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hZGRTb3J0TWV0YShuZXdNZXRhRGF0YSwgbXVsdGlTb3J0TWV0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZW1vdmFibGVTb3J0KSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVTb3J0TWV0YShuZXdNZXRhRGF0YSwgbXVsdGlTb3J0TWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudE1ldGEgPSB7XG4gICAgICAgICAgbXVsdGlTb3J0TWV0YTogbXVsdGlTb3J0TWV0YVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc29ydE9yZGVyID0gdGhpcy5nZXRTb3J0RmllbGQoKSA9PT0gc29ydEZpZWxkID8gdGhpcy5nZXRDYWxjdWxhdGVkU29ydE9yZGVyKHRoaXMuZ2V0U29ydE9yZGVyKCkpIDogc29ydE9yZGVyO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlbW92YWJsZVNvcnQpIHtcbiAgICAgICAgICBzb3J0RmllbGQgPSBzb3J0T3JkZXIgPyBzb3J0RmllbGQgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRNZXRhID0ge1xuICAgICAgICAgIHNvcnRGaWVsZDogc29ydEZpZWxkLFxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydE9yZGVyXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU29ydCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU29ydCh0aGlzLmNyZWF0ZUV2ZW50KGV2ZW50TWV0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnRNZXRhLmZpcnN0ID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShldmVudE1ldGEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnByb2Nlc3NlZERhdGEoe1xuICAgICAgICAgIHNvcnRGaWVsZDogc29ydEZpZWxkLFxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydE9yZGVyLFxuICAgICAgICAgIG11bHRpU29ydE1ldGE6IG11bHRpU29ydE1ldGFcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDYWxjdWxhdGVkU29ydE9yZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhbGN1bGF0ZWRTb3J0T3JkZXIoY3VycmVudE9yZGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZW1vdmFibGVTb3J0ID8gdGhpcy5wcm9wcy5kZWZhdWx0U29ydE9yZGVyID09PSBjdXJyZW50T3JkZXIgPyBjdXJyZW50T3JkZXIgKiAtMSA6IDAgOiBjdXJyZW50T3JkZXIgKiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcGFyZVZhbHVlc09uU29ydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wYXJlVmFsdWVzT25Tb3J0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbCkgcmVzdWx0ID0gLTE7ZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDE7ZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDA7ZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMiwgdW5kZWZpbmVkLCB7XG4gICAgICAgIG51bWVyaWM6IHRydWVcbiAgICAgIH0pO2Vsc2UgcmVzdWx0ID0gdmFsdWUxIDwgdmFsdWUyID8gLTEgOiB2YWx1ZTEgPiB2YWx1ZTIgPyAxIDogMDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFNvcnRNZXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNvcnRNZXRhKG1ldGEsIG11bHRpU29ydE1ldGEpIHtcbiAgICAgIHZhciBpbmRleCA9IG11bHRpU29ydE1ldGEuZmluZEluZGV4KGZ1bmN0aW9uIChzb3J0TWV0YSkge1xuICAgICAgICByZXR1cm4gc29ydE1ldGEuZmllbGQgPT09IG1ldGEuZmllbGQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSBtdWx0aVNvcnRNZXRhW2luZGV4XSA9IG1ldGE7ZWxzZSBtdWx0aVNvcnRNZXRhLnB1c2gobWV0YSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVNvcnRNZXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVNvcnRNZXRhKG1ldGEsIG11bHRpU29ydE1ldGEpIHtcbiAgICAgIHZhciBpbmRleCA9IG11bHRpU29ydE1ldGEuZmluZEluZGV4KGZ1bmN0aW9uIChzb3J0TWV0YSkge1xuICAgICAgICByZXR1cm4gc29ydE1ldGEuZmllbGQgPT09IG1ldGEuZmllbGQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbXVsdGlTb3J0TWV0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBtdWx0aVNvcnRNZXRhID0gbXVsdGlTb3J0TWV0YS5sZW5ndGggPiAwID8gbXVsdGlTb3J0TWV0YSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNvcnRTaW5nbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ydFNpbmdsZShkYXRhLCBmaWVsZCwgb3JkZXIpIHtcbiAgICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuZ3JvdXBSb3dzQnkgJiYgdGhpcy5wcm9wcy5ncm91cFJvd3NCeSA9PT0gdGhpcy5wcm9wcy5zb3J0RmllbGQpIHtcbiAgICAgICAgdmFyIG11bHRpU29ydE1ldGEgPSBbe1xuICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLnNvcnRGaWVsZCxcbiAgICAgICAgICBvcmRlcjogdGhpcy5wcm9wcy5zb3J0T3JkZXIgfHwgdGhpcy5wcm9wcy5kZWZhdWx0U29ydE9yZGVyXG4gICAgICAgIH1dO1xuICAgICAgICB0aGlzLnByb3BzLnNvcnRGaWVsZCAhPT0gZmllbGQgJiYgbXVsdGlTb3J0TWV0YS5wdXNoKHtcbiAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgb3JkZXI6IG9yZGVyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0TXVsdGlwbGUoZGF0YSwgbXVsdGlTb3J0TWV0YSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90b0NvbnN1bWFibGVBcnJheShkYXRhKTtcblxuICAgICAgaWYgKHRoaXMuY29sdW1uU29ydGFibGUgJiYgdGhpcy5jb2x1bW5Tb3J0RnVuY3Rpb24pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmNvbHVtblNvcnRGdW5jdGlvbih7XG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgIG9yZGVyOiBvcmRlclxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlLnNvcnQoZnVuY3Rpb24gKGRhdGExLCBkYXRhMikge1xuICAgICAgICAgIHZhciB2YWx1ZTEgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGExLCBmaWVsZCk7XG4gICAgICAgICAgdmFyIHZhbHVlMiA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZGF0YTIsIGZpZWxkKTtcblxuICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpczExLmNvbXBhcmVWYWx1ZXNPblNvcnQodmFsdWUxLCB2YWx1ZTIpO1xuXG4gICAgICAgICAgcmV0dXJuIG9yZGVyICogcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzb3J0TXVsdGlwbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ydE11bHRpcGxlKGRhdGEpIHtcbiAgICAgIHZhciBfdGhpczEyID0gdGhpcztcblxuICAgICAgdmFyIG11bHRpU29ydE1ldGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ncm91cFJvd3NCeSAmJiAodGhpcy5ncm91cFJvd3NTb3J0TWV0YSB8fCBtdWx0aVNvcnRNZXRhLmxlbmd0aCAmJiB0aGlzLnByb3BzLmdyb3VwUm93c0J5ID09PSBtdWx0aVNvcnRNZXRhWzBdLmZpZWxkKSkge1xuICAgICAgICB2YXIgZmlyc3RTb3J0TWV0YSA9IG11bHRpU29ydE1ldGFbMF07XG4gICAgICAgICF0aGlzLmdyb3VwUm93c1NvcnRNZXRhICYmICh0aGlzLmdyb3VwUm93c1NvcnRNZXRhID0gZmlyc3RTb3J0TWV0YSk7XG5cbiAgICAgICAgaWYgKGZpcnN0U29ydE1ldGEuZmllbGQgIT09IHRoaXMuZ3JvdXBSb3dzU29ydE1ldGEuZmllbGQpIHtcbiAgICAgICAgICBtdWx0aVNvcnRNZXRhID0gW3RoaXMuZ3JvdXBSb3dzU29ydE1ldGFdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobXVsdGlTb3J0TWV0YSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90b0NvbnN1bWFibGVBcnJheShkYXRhKTtcblxuICAgICAgaWYgKHRoaXMuY29sdW1uU29ydGFibGUgJiYgdGhpcy5jb2x1bW5Tb3J0RnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIG1ldGEgPSBtdWx0aVNvcnRNZXRhLmZpbmQoZnVuY3Rpb24gKG1ldGEpIHtcbiAgICAgICAgICByZXR1cm4gbWV0YS5maWVsZCA9PT0gX3RoaXMxMi5jb2x1bW5GaWVsZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmaWVsZCA9IHRoaXMuY29sdW1uRmllbGQ7XG4gICAgICAgIHZhciBvcmRlciA9IG1ldGEgPyBtZXRhLm9yZGVyIDogdGhpcy5kZWZhdWx0U29ydE9yZGVyO1xuICAgICAgICB2YWx1ZSA9IHRoaXMuY29sdW1uU29ydEZ1bmN0aW9uKHtcbiAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgb3JkZXI6IG9yZGVyXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUuc29ydChmdW5jdGlvbiAoZGF0YTEsIGRhdGEyKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTIubXVsdGlzb3J0RmllbGQoZGF0YTEsIGRhdGEyLCBtdWx0aVNvcnRNZXRhLCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibXVsdGlzb3J0RmllbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXVsdGlzb3J0RmllbGQoZGF0YTEsIGRhdGEyLCBtdWx0aVNvcnRNZXRhLCBpbmRleCkge1xuICAgICAgdmFyIHZhbHVlMSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZGF0YTEsIG11bHRpU29ydE1ldGFbaW5kZXhdLmZpZWxkKTtcbiAgICAgIHZhciB2YWx1ZTIgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGEyLCBtdWx0aVNvcnRNZXRhW2luZGV4XS5maWVsZCk7XG5cbiAgICAgIGlmICh2YWx1ZTEgPT09IHZhbHVlMikge1xuICAgICAgICByZXR1cm4gbXVsdGlTb3J0TWV0YS5sZW5ndGggLSAxID4gaW5kZXggPyB0aGlzLm11bHRpc29ydEZpZWxkKGRhdGExLCBkYXRhMiwgbXVsdGlTb3J0TWV0YSwgaW5kZXggKyAxKSA6IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLmNvbXBhcmVWYWx1ZXNPblNvcnQodmFsdWUxLCB2YWx1ZTIpO1xuICAgICAgcmV0dXJuIG11bHRpU29ydE1ldGFbaW5kZXhdLm9yZGVyICogcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkZpbHRlckNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZpbHRlckNoYW5nZShmaWx0ZXJzKSB7XG4gICAgICB0aGlzLmNsZWFyRWRpdGluZ01ldGFEYXRhKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZF9maWx0ZXJzOiBmaWx0ZXJzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25GaWx0ZXJBcHBseVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZpbHRlckFwcGx5KCkge1xuICAgICAgdmFyIF90aGlzMTMgPSB0aGlzO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUaW1lb3V0KTtcbiAgICAgIHRoaXMuZmlsdGVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmlsdGVycyA9IF90aGlzMTMuY2xvbmVGaWx0ZXJzKF90aGlzMTMuc3RhdGUuZF9maWx0ZXJzKTtcblxuICAgICAgICBpZiAoX3RoaXMxMy5wcm9wcy5vbkZpbHRlcikge1xuICAgICAgICAgIF90aGlzMTMucHJvcHMub25GaWx0ZXIoX3RoaXMxMy5jcmVhdGVFdmVudCh7XG4gICAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMTMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlyc3Q6IDAsXG4gICAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMxMy5wcm9wcy5vblZhbHVlQ2hhbmdlKSB7XG4gICAgICAgICAgX3RoaXMxMy5wcm9wcy5vblZhbHVlQ2hhbmdlKF90aGlzMTMucHJvY2Vzc2VkRGF0YSh7XG4gICAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnByb3BzLmZpbHRlckRlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyTG9jYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyTG9jYWwoZGF0YSwgZmlsdGVycykge1xuICAgICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgICBmaWx0ZXJzID0gZmlsdGVycyB8fCB7fTtcbiAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG4gICAgICB2YXIgZmlsdGVyZWRWYWx1ZSA9IFtdO1xuICAgICAgdmFyIGlzR2xvYmFsRmlsdGVyID0gZmlsdGVyc1snZ2xvYmFsJ10gfHwgdGhpcy5wcm9wcy5nbG9iYWxGaWx0ZXI7XG4gICAgICB2YXIgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXk7XG5cbiAgICAgIGlmIChpc0dsb2JhbEZpbHRlcikge1xuICAgICAgICBnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheSA9IHRoaXMucHJvcHMuZ2xvYmFsRmlsdGVyRmllbGRzIHx8IGNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gIWNvbC5wcm9wcy5leGNsdWRlR2xvYmFsRmlsdGVyO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHJldHVybiBjb2wucHJvcHMuZmlsdGVyRmllbGQgfHwgY29sLnByb3BzLmZpZWxkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsb2NhbE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgdmFyIGdsb2JhbE1hdGNoID0gZmFsc2U7XG4gICAgICAgIHZhciBsb2NhbEZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBmaWx0ZXJzKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWx0ZXJzLCBwcm9wKSAmJiBwcm9wICE9PSAnZ2xvYmFsJykge1xuICAgICAgICAgICAgbG9jYWxGaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgZmlsdGVyRmllbGQgPSBwcm9wO1xuICAgICAgICAgICAgdmFyIGZpbHRlck1ldGEgPSBmaWx0ZXJzW2ZpbHRlckZpZWxkXTtcblxuICAgICAgICAgICAgaWYgKGZpbHRlck1ldGEub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWx0ZXJNZXRhLmNvbnN0cmFpbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlckNvbnN0cmFpbnQgPSBmaWx0ZXJNZXRhLmNvbnN0cmFpbnRzW2pdO1xuICAgICAgICAgICAgICAgIGxvY2FsTWF0Y2ggPSB0aGlzLmV4ZWN1dGVMb2NhbEZpbHRlcihmaWx0ZXJGaWVsZCwgZGF0YVtpXSwgZmlsdGVyQ29uc3RyYWludCwgaik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyTWV0YS5vcGVyYXRvciA9PT0gRmlsdGVyT3BlcmF0b3IuT1IgJiYgbG9jYWxNYXRjaCB8fCBmaWx0ZXJNZXRhLm9wZXJhdG9yID09PSBGaWx0ZXJPcGVyYXRvci5BTkQgJiYgIWxvY2FsTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9jYWxNYXRjaCA9IHRoaXMuZXhlY3V0ZUxvY2FsRmlsdGVyKGZpbHRlckZpZWxkLCBkYXRhW2ldLCBmaWx0ZXJNZXRhLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFsb2NhbE1hdGNoKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0dsb2JhbEZpbHRlciAmJiAhZ2xvYmFsTWF0Y2ggJiYgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaiA9IDA7IF9qIDwgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkubGVuZ3RoOyBfaisrKSB7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsRmlsdGVyRmllbGQgPSBnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheVtfal07XG4gICAgICAgICAgICB2YXIgbWF0Y2hNb2RlID0gZmlsdGVyc1snZ2xvYmFsJ10gPyBmaWx0ZXJzWydnbG9iYWwnXS5tYXRjaE1vZGUgOiBGaWx0ZXJNYXRjaE1vZGUuQ09OVEFJTlM7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBmaWx0ZXJzWydnbG9iYWwnXSA/IGZpbHRlcnNbJ2dsb2JhbCddLnZhbHVlIDogdGhpcy5wcm9wcy5nbG9iYWxGaWx0ZXI7XG4gICAgICAgICAgICBnbG9iYWxNYXRjaCA9IEZpbHRlclNlcnZpY2UuZmlsdGVyc1ttYXRjaE1vZGVdKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZGF0YVtpXSwgZ2xvYmFsRmlsdGVyRmllbGQpLCB2YWx1ZSwgdGhpcy5wcm9wcy5maWx0ZXJMb2NhbGUpO1xuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsTWF0Y2gpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKGlzR2xvYmFsRmlsdGVyKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IGxvY2FsRmlsdGVyZWQgPyBsb2NhbEZpbHRlcmVkICYmIGxvY2FsTWF0Y2ggJiYgZ2xvYmFsTWF0Y2ggOiBnbG9iYWxNYXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVzID0gbG9jYWxGaWx0ZXJlZCAmJiBsb2NhbE1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBmaWx0ZXJlZFZhbHVlLnB1c2goZGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlcmVkVmFsdWUubGVuZ3RoID09PSB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcmVkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4ZWN1dGVMb2NhbEZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleGVjdXRlTG9jYWxGaWx0ZXIoZmllbGQsIHJvd0RhdGEsIGZpbHRlck1ldGEsIGluZGV4KSB7XG4gICAgICB2YXIgZmlsdGVyVmFsdWUgPSBmaWx0ZXJNZXRhLnZhbHVlO1xuICAgICAgdmFyIGZpbHRlck1hdGNoTW9kZSA9IGZpbHRlck1ldGEubWF0Y2hNb2RlID09PSAnY3VzdG9tJyA/IFwiY3VzdG9tX1wiLmNvbmNhdChmaWVsZCkgOiBmaWx0ZXJNZXRhLm1hdGNoTW9kZSB8fCBGaWx0ZXJNYXRjaE1vZGUuU1RBUlRTX1dJVEg7XG4gICAgICB2YXIgZGF0YUZpZWxkVmFsdWUgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHJvd0RhdGEsIGZpZWxkKTtcbiAgICAgIHZhciBmaWx0ZXJDb25zdHJhaW50ID0gRmlsdGVyU2VydmljZS5maWx0ZXJzW2ZpbHRlck1hdGNoTW9kZV07XG4gICAgICByZXR1cm4gZmlsdGVyQ29uc3RyYWludChkYXRhRmllbGRWYWx1ZSwgZmlsdGVyVmFsdWUsIHRoaXMucHJvcHMuZmlsdGVyTG9jYWxlLCBpbmRleCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb25lRmlsdGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZUZpbHRlcnMoZmlsdGVycykge1xuICAgICAgdmFyIF90aGlzMTQgPSB0aGlzO1xuXG4gICAgICBmaWx0ZXJzID0gZmlsdGVycyB8fCB0aGlzLnByb3BzLmZpbHRlcnM7XG4gICAgICB2YXIgY2xvbmVkID0ge307XG5cbiAgICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgcHJvcCA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICB2YWx1ZSA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgY2xvbmVkW3Byb3BdID0gdmFsdWUub3BlcmF0b3IgPyB7XG4gICAgICAgICAgICBvcGVyYXRvcjogdmFsdWUub3BlcmF0b3IsXG4gICAgICAgICAgICBjb25zdHJhaW50czogdmFsdWUuY29uc3RyYWludHMubWFwKGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBjb25zdHJhaW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSA6IF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgICAgICBjbG9uZWQgPSBjb2x1bW5zLnJlZHVjZShmdW5jdGlvbiAoX2ZpbHRlcnMsIGNvbCkge1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNvbC5wcm9wcy5maWx0ZXJGaWVsZCB8fCBjb2wucHJvcHMuZmllbGQ7XG4gICAgICAgICAgdmFyIGZpbHRlckZ1bmN0aW9uID0gY29sLnByb3BzLmZpbHRlckZ1bmN0aW9uO1xuICAgICAgICAgIHZhciBkYXRhVHlwZSA9IGNvbC5wcm9wcy5kYXRhVHlwZTtcbiAgICAgICAgICB2YXIgbWF0Y2hNb2RlID0gY29sLnByb3BzLmZpbHRlck1hdGNoTW9kZSB8fCAoUHJpbWVSZWFjdC5maWx0ZXJNYXRjaE1vZGVPcHRpb25zW2RhdGFUeXBlXSA/IFByaW1lUmVhY3QuZmlsdGVyTWF0Y2hNb2RlT3B0aW9uc1tkYXRhVHlwZV1bMF0gOiBGaWx0ZXJNYXRjaE1vZGUuU1RBUlRTX1dJVEgpO1xuICAgICAgICAgIHZhciBjb25zdHJhaW50ID0ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBtYXRjaE1vZGU6IG1hdGNoTW9kZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoZmlsdGVyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIEZpbHRlclNlcnZpY2UucmVnaXN0ZXIoXCJjdXN0b21fXCIuY29uY2F0KGZpZWxkKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlckZ1bmN0aW9uLmFwcGx5KHZvaWQgMCwgYXJncy5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICBjb2x1bW46IGNvbFxuICAgICAgICAgICAgICB9XSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2ZpbHRlcnNbZmllbGRdID0gX3RoaXMxNC5wcm9wcy5maWx0ZXJEaXNwbGF5ID09PSAnbWVudScgPyB7XG4gICAgICAgICAgICBvcGVyYXRvcjogRmlsdGVyT3BlcmF0b3IuQU5ELFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtjb25zdHJhaW50XVxuICAgICAgICAgIH0gOiBjb25zdHJhaW50O1xuICAgICAgICAgIHJldHVybiBfZmlsdGVycztcbiAgICAgICAgfSwge30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaWx0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKHZhbHVlLCBmaWVsZCwgbWF0Y2hNb2RlKSB7XG4gICAgICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cbiAgICAgIHZhciBmaWx0ZXJzID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5zdGF0ZS5kX2ZpbHRlcnMpO1xuXG4gICAgICB2YXIgbWV0YSA9IGZpbHRlcnNbZmllbGRdO1xuICAgICAgdmFyIGNvbnN0cmFpbnQgPSBtZXRhICYmIG1ldGEub3BlcmF0b3IgPyBtZXRhLmNvbnN0cmFpbnRzW2luZGV4XSA6IG1ldGE7XG4gICAgICBjb25zdHJhaW50ID0gbWV0YSA/IHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBtYXRjaE1vZGU6IG1hdGNoTW9kZSB8fCBjb25zdHJhaW50Lm1hdGNoTW9kZVxuICAgICAgfSA6IHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBtYXRjaE1vZGU6IG1hdGNoTW9kZVxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuZmlsdGVyRGlzcGxheSA9PT0gJ21lbnUnICYmIG1ldGEgJiYgbWV0YS5vcGVyYXRvciA/IGZpbHRlcnNbZmllbGRdLmNvbnN0cmFpbnRzW2luZGV4XSA9IGNvbnN0cmFpbnQgOiBmaWx0ZXJzW2ZpZWxkXSA9IGNvbnN0cmFpbnQ7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZF9maWx0ZXJzOiBmaWx0ZXJzXG4gICAgICB9LCB0aGlzLm9uRmlsdGVyQXBwbHkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgZF9yb3dzOiB0aGlzLnByb3BzLnJvd3MsXG4gICAgICAgIGRfZmlsdGVyczogdGhpcy5jbG9uZUZpbHRlcnModGhpcy5wcm9wcy5maWx0ZXJzKSxcbiAgICAgICAgZ3JvdXBSb3dzU29ydE1ldGE6IG51bGwsXG4gICAgICAgIGVkaXRpbmdNZXRhOiB7fVxuICAgICAgfTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uUGFnZSkge1xuICAgICAgICBzdGF0ZS5maXJzdCA9IHRoaXMucHJvcHMuZmlyc3Q7XG4gICAgICAgIHN0YXRlLnJvd3MgPSB0aGlzLnByb3BzLnJvd3M7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5vblNvcnQpIHtcbiAgICAgICAgc3RhdGUuc29ydEZpZWxkID0gdGhpcy5wcm9wcy5zb3J0RmllbGQ7XG4gICAgICAgIHN0YXRlLnNvcnRPcmRlciA9IHRoaXMucHJvcHMuc29ydE9yZGVyO1xuICAgICAgICBzdGF0ZS5tdWx0aVNvcnRNZXRhID0gdGhpcy5wcm9wcy5tdWx0aVNvcnRNZXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMub25GaWx0ZXIpIHtcbiAgICAgICAgc3RhdGUuZmlsdGVycyA9IHRoaXMucHJvcHMuZmlsdGVycztcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNldENvbHVtbk9yZGVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRDb2x1bW5PcmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldENvbHVtbk9yZGVyKCkge1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnModHJ1ZSk7XG4gICAgICB2YXIgY29sdW1uT3JkZXIgPSBbXTtcblxuICAgICAgaWYgKGNvbHVtbnMpIHtcbiAgICAgICAgY29sdW1uT3JkZXIgPSBjb2x1bW5zLnJlZHVjZShmdW5jdGlvbiAob3JkZXJzLCBjb2wpIHtcbiAgICAgICAgICBvcmRlcnMucHVzaChjb2wucHJvcHMuY29sdW1uS2V5IHx8IGNvbC5wcm9wcy5maWVsZCk7XG4gICAgICAgICAgcmV0dXJuIG9yZGVycztcbiAgICAgICAgfSwgW10pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sdW1uT3JkZXI6IGNvbHVtbk9yZGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXhwb3J0Q1NWXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cG9ydENTVihvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMxNSA9IHRoaXM7XG5cbiAgICAgIHZhciBkYXRhO1xuICAgICAgdmFyIGNzdiA9IFwiXFx1RkVGRlwiO1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnMoKTtcblxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZWxlY3Rpb25Pbmx5KSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLnNlbGVjdGlvbiB8fCBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMucHJvcHMuZnJvemVuVmFsdWUgfHwgW10pLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5wcm9jZXNzZWREYXRhKCkgfHwgW10pKTtcbiAgICAgIH0gLy9oZWFkZXJzXG5cblxuICAgICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcbiAgICAgICAgdmFyIF9jb2x1bW4kcHJvcHMgPSBjb2x1bW4ucHJvcHMsXG4gICAgICAgICAgICBmaWVsZCA9IF9jb2x1bW4kcHJvcHMuZmllbGQsXG4gICAgICAgICAgICBoZWFkZXIgPSBfY29sdW1uJHByb3BzLmhlYWRlcixcbiAgICAgICAgICAgIGV4cG9ydGFibGUgPSBfY29sdW1uJHByb3BzLmV4cG9ydGFibGU7XG5cbiAgICAgICAgaWYgKGV4cG9ydGFibGUgJiYgZmllbGQpIHtcbiAgICAgICAgICBjc3YgKz0gJ1wiJyArIChoZWFkZXIgfHwgZmllbGQpICsgJ1wiJztcblxuICAgICAgICAgIGlmIChpIDwgY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjc3YgKz0gX3RoaXMxNS5wcm9wcy5jc3ZTZXBhcmF0b3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTsgLy9ib2R5XG5cbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgIGNzdiArPSAnXFxuJztcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcbiAgICAgICAgICB2YXIgX2NvbHVtbiRwcm9wczIgPSBjb2x1bW4ucHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtbkZpZWxkID0gX2NvbHVtbiRwcm9wczIuZmllbGQsXG4gICAgICAgICAgICAgIGV4cG9ydEZpZWxkID0gX2NvbHVtbiRwcm9wczIuZXhwb3J0RmllbGQsXG4gICAgICAgICAgICAgIGV4cG9ydGFibGUgPSBfY29sdW1uJHByb3BzMi5leHBvcnRhYmxlO1xuICAgICAgICAgIHZhciBmaWVsZCA9IGV4cG9ydEZpZWxkIHx8IGNvbHVtbkZpZWxkO1xuXG4gICAgICAgICAgaWYgKGV4cG9ydGFibGUgJiYgZmllbGQpIHtcbiAgICAgICAgICAgIHZhciBjZWxsRGF0YSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocmVjb3JkLCBmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChjZWxsRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNlbGxEYXRhID0gX3RoaXMxNS5wcm9wcy5leHBvcnRGdW5jdGlvbiA/IF90aGlzMTUucHJvcHMuZXhwb3J0RnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgIGRhdGE6IGNlbGxEYXRhLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICByb3dEYXRhOiByZWNvcmQsXG4gICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgICAgfSkgOiBTdHJpbmcoY2VsbERhdGEpLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XG4gICAgICAgICAgICB9IGVsc2UgY2VsbERhdGEgPSAnJztcblxuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBjZWxsRGF0YSArICdcIic7XG5cbiAgICAgICAgICAgIGlmIChpIDwgY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGNzdiArPSBfdGhpczE1LnByb3BzLmNzdlNlcGFyYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBEb21IYW5kbGVyLmV4cG9ydENTVihjc3YsIHRoaXMucHJvcHMuZXhwb3J0RmlsZW5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9zZUVkaXRpbmdDZWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlRWRpdGluZ0NlbGwoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5lZGl0TW9kZSAhPT0gXCJyb3dcIikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KGV2ZW50KSB7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGZpcnN0OiB0aGlzLmdldEZpcnN0KCksXG4gICAgICAgIHJvd3M6IHRoaXMuZ2V0Um93cygpLFxuICAgICAgICBzb3J0RmllbGQ6IHRoaXMuZ2V0U29ydEZpZWxkKCksXG4gICAgICAgIHNvcnRPcmRlcjogdGhpcy5nZXRTb3J0T3JkZXIoKSxcbiAgICAgICAgbXVsdGlTb3J0TWV0YTogdGhpcy5nZXRNdWx0aVNvcnRNZXRhKCksXG4gICAgICAgIGZpbHRlcnM6IHRoaXMuZ2V0RmlsdGVycygpXG4gICAgICB9LCBldmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByb2Nlc3NlZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvY2Vzc2VkRGF0YShsb2NhbFN0YXRlKSB7XG4gICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMudmFsdWUgfHwgW107XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5sYXp5KSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGZpbHRlcnMgPSBsb2NhbFN0YXRlICYmIGxvY2FsU3RhdGUuZmlsdGVycyB8fCB0aGlzLmdldEZpbHRlcnMoKTtcbiAgICAgICAgICB2YXIgc29ydEZpZWxkID0gbG9jYWxTdGF0ZSAmJiBsb2NhbFN0YXRlLnNvcnRGaWVsZCB8fCB0aGlzLmdldFNvcnRGaWVsZCgpO1xuICAgICAgICAgIHZhciBzb3J0T3JkZXIgPSBsb2NhbFN0YXRlICYmIGxvY2FsU3RhdGUuc29ydE9yZGVyIHx8IHRoaXMuZ2V0U29ydE9yZGVyKCk7XG4gICAgICAgICAgdmFyIG11bHRpU29ydE1ldGEgPSBsb2NhbFN0YXRlICYmIGxvY2FsU3RhdGUubXVsdGlTb3J0TWV0YSB8fCB0aGlzLmdldE11bHRpU29ydE1ldGEoKTtcblxuICAgICAgICAgIGlmIChPYmplY3RVdGlscy5pc05vdEVtcHR5KGZpbHRlcnMpIHx8IHRoaXMucHJvcHMuZ2xvYmFsRmlsdGVyKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5maWx0ZXJMb2NhbChkYXRhLCBmaWx0ZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc29ydEZpZWxkIHx8IE9iamVjdFV0aWxzLmlzTm90RW1wdHkobXVsdGlTb3J0TWV0YSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNvcnRNb2RlID09PSAnc2luZ2xlJykgZGF0YSA9IHRoaXMuc29ydFNpbmdsZShkYXRhLCBzb3J0RmllbGQsIHNvcnRPcmRlcik7ZWxzZSBpZiAodGhpcy5wcm9wcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykgZGF0YSA9IHRoaXMuc29ydE11bHRpcGxlKGRhdGEsIG11bHRpU29ydE1ldGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVRvUmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGFUb1JlbmRlcihkYXRhKSB7XG4gICAgICBpZiAoZGF0YSAmJiB0aGlzLnByb3BzLnBhZ2luYXRvcikge1xuICAgICAgICB2YXIgZmlyc3QgPSB0aGlzLnByb3BzLmxhenkgPyAwIDogdGhpcy5nZXRGaXJzdCgpO1xuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShmaXJzdCwgZmlyc3QgKyB0aGlzLmdldFJvd3MoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczE2ID0gdGhpcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF0dHJpYnV0ZVNlbGVjdG9yOiBVbmlxdWVDb21wb25lbnRJZCgpXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTYuZWwuc2V0QXR0cmlidXRlKF90aGlzMTYuc3RhdGUuYXR0cmlidXRlU2VsZWN0b3IsICcnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXNwb25zaXZlTGF5b3V0ID09PSAnc3RhY2snICYmICF0aGlzLnByb3BzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVSZXNwb25zaXZlU3R5bGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNTdGF0ZWZ1bCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5yZXN0b3JlU3RhdGUodGhpcy5zdGF0ZSkpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlc2l6YWJsZUNvbHVtbnMpIHtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVDb2x1bW5XaWR0aHMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5pc1N0YXRlZnVsKCkpIHtcbiAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy5yZXNwb25zaXZlTGF5b3V0ICE9PSB0aGlzLnByb3BzLnJlc3BvbnNpdmVMYXlvdXQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95UmVzcG9uc2l2ZVN0eWxlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVzcG9uc2l2ZUxheW91dCA9PT0gJ3N0YWNrJyAmJiAhdGhpcy5wcm9wcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVSZXNwb25zaXZlU3R5bGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJldlByb3BzLmZpbHRlcnMgIT09IHRoaXMucHJvcHMuZmlsdGVycykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmNsb25lRmlsdGVycyh0aGlzLnByb3BzLmZpbHRlcnMpLFxuICAgICAgICAgIGRfZmlsdGVyczogdGhpcy5jbG9uZUZpbHRlcnModGhpcy5wcm9wcy5maWx0ZXJzKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy5nbG9iYWxGaWx0ZXIgIT09IHRoaXMucHJvcHMuZ2xvYmFsRmlsdGVyKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyKHRoaXMucHJvcHMuZ2xvYmFsRmlsdGVyLCAnZ2xvYmFsJywgJ2NvbnRhaW5zJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bmJpbmRDb2x1bW5SZXNpemVFdmVudHMoKTtcbiAgICAgIHRoaXMuZGVzdHJveVN0eWxlRWxlbWVudCgpO1xuICAgICAgdGhpcy5kZXN0cm95UmVzcG9uc2l2ZVN0eWxlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxvYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XG4gICAgICAgIHZhciBpY29uQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1kYXRhdGFibGUtbG9hZGluZy1pY29uIHBpLXNwaW4nLCB0aGlzLnByb3BzLmxvYWRpbmdJY29uKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1kYXRhdGFibGUtbG9hZGluZy1vdmVybGF5IHAtY29tcG9uZW50LW92ZXJsYXlcIlxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLmhlYWRlciwge1xuICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWRhdGF0YWJsZS1oZWFkZXJcIlxuICAgICAgICB9LCBjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclRhYmxlSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRhYmxlSGVhZGVyKG9wdGlvbnMsIGVtcHR5KSB7XG4gICAgICB2YXIgc29ydEZpZWxkID0gdGhpcy5nZXRTb3J0RmllbGQoKTtcbiAgICAgIHZhciBzb3J0T3JkZXIgPSB0aGlzLmdldFNvcnRPcmRlcigpO1xuXG4gICAgICB2YXIgbXVsdGlTb3J0TWV0YSA9IF90b0NvbnN1bWFibGVBcnJheSh0aGlzLmdldE11bHRpU29ydE1ldGEoKSk7XG5cbiAgICAgIHZhciBncm91cFJvd1NvcnRGaWVsZCA9IHRoaXMuZ2V0R3JvdXBSb3dTb3J0RmllbGQoKTtcbiAgICAgIHZhciBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5kX2ZpbHRlcnM7XG4gICAgICB2YXIgZmlsdGVyc1N0b3JlID0gdGhpcy5nZXRGaWx0ZXJzKCk7XG4gICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IG9wdGlvbnMuaXRlbXMsXG4gICAgICAgICAgY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUhlYWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvY2Vzc2VkRGF0YSxcbiAgICAgICAgdGFibGVQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXgsXG4gICAgICAgIGVtcHR5OiBlbXB0eSxcbiAgICAgICAgaGVhZGVyQ29sdW1uR3JvdXA6IHRoaXMucHJvcHMuaGVhZGVyQ29sdW1uR3JvdXAsXG4gICAgICAgIHJlc2l6YWJsZUNvbHVtbnM6IHRoaXMucHJvcHMucmVzaXphYmxlQ29sdW1ucyxcbiAgICAgICAgb25Db2x1bW5SZXNpemVTdGFydDogdGhpcy5vbkNvbHVtblJlc2l6ZVN0YXJ0LFxuICAgICAgICBvbkNvbHVtblJlc2l6ZXJDbGljazogdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZXJDbGljayxcbiAgICAgICAgb25Db2x1bW5SZXNpemVyRG91YmxlQ2xpY2s6IHRoaXMucHJvcHMub25Db2x1bW5SZXNpemVyRG91YmxlQ2xpY2ssXG4gICAgICAgIHNvcnRNb2RlOiB0aGlzLnByb3BzLnNvcnRNb2RlLFxuICAgICAgICBzb3J0RmllbGQ6IHNvcnRGaWVsZCxcbiAgICAgICAgc29ydE9yZGVyOiBzb3J0T3JkZXIsXG4gICAgICAgIG11bHRpU29ydE1ldGE6IG11bHRpU29ydE1ldGEsXG4gICAgICAgIGdyb3VwUm93c0J5OiB0aGlzLnByb3BzLmdyb3VwUm93c0J5LFxuICAgICAgICBncm91cFJvd1NvcnRGaWVsZDogZ3JvdXBSb3dTb3J0RmllbGQsXG4gICAgICAgIG9uU29ydENoYW5nZTogdGhpcy5vblNvcnRDaGFuZ2UsXG4gICAgICAgIGZpbHRlckRpc3BsYXk6IHRoaXMucHJvcHMuZmlsdGVyRGlzcGxheSxcbiAgICAgICAgZmlsdGVyczogZmlsdGVycyxcbiAgICAgICAgZmlsdGVyc1N0b3JlOiBmaWx0ZXJzU3RvcmUsXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiB0aGlzLm9uRmlsdGVyQ2hhbmdlLFxuICAgICAgICBvbkZpbHRlckFwcGx5OiB0aGlzLm9uRmlsdGVyQXBwbHksXG4gICAgICAgIHNob3dTZWxlY3RBbGw6IHRoaXMucHJvcHMuc2hvd1NlbGVjdEFsbCxcbiAgICAgICAgYWxsUm93c1NlbGVjdGVkOiB0aGlzLmFsbFJvd3NTZWxlY3RlZCxcbiAgICAgICAgb25Db2x1bW5DaGVja2JveENoYW5nZTogdGhpcy5vbkNvbHVtbkhlYWRlckNoZWNrYm94Q2hhbmdlLFxuICAgICAgICBvbkNvbHVtbk1vdXNlRG93bjogdGhpcy5vbkNvbHVtbkhlYWRlck1vdXNlRG93bixcbiAgICAgICAgb25Db2x1bW5EcmFnU3RhcnQ6IHRoaXMub25Db2x1bW5IZWFkZXJEcmFnU3RhcnQsXG4gICAgICAgIG9uQ29sdW1uRHJhZ092ZXI6IHRoaXMub25Db2x1bW5IZWFkZXJEcmFnT3ZlcixcbiAgICAgICAgb25Db2x1bW5EcmFnTGVhdmU6IHRoaXMub25Db2x1bW5IZWFkZXJEcmFnTGVhdmUsXG4gICAgICAgIG9uQ29sdW1uRHJvcDogdGhpcy5vbkNvbHVtbkhlYWRlckRyb3AsXG4gICAgICAgIHJvd0dyb3VwTW9kZTogdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUsXG4gICAgICAgIHJlb3JkZXJhYmxlQ29sdW1uczogdGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJUYWJsZUJvZHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGFibGVCb2R5KG9wdGlvbnMsIHNlbGVjdGlvbk1vZGVJbkNvbHVtbiwgZW1wdHksIGlzVmlydHVhbFNjcm9sbGVyRGlzYWJsZWQpIHtcbiAgICAgIHZhciB0YWJsZVNlbGVjdG9yID0gdGhpcy5zdGF0ZS5hdHRyaWJ1dGVTZWxlY3RvcjtcbiAgICAgIHZhciBmaXJzdCA9IHRoaXMuZ2V0Rmlyc3QoKTtcbiAgICAgIHZhciBlZGl0aW5nTWV0YSA9IHRoaXMuc3RhdGUuZWRpdGluZ01ldGE7XG4gICAgICB2YXIgcm93cyA9IG9wdGlvbnMucm93cyxcbiAgICAgICAgICBjb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zLFxuICAgICAgICAgIGNvbnRlbnRSZWYgPSBvcHRpb25zLmNvbnRlbnRSZWYsXG4gICAgICAgICAgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgICB2YXIgZnJvemVuQm9keSA9IHRoaXMucHJvcHMuZnJvemVuVmFsdWUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVCb2R5LCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmZyb3plblZhbHVlLFxuICAgICAgICBjbGFzc05hbWU6IFwicC1kYXRhdGFibGUtZnJvemVuLXRib2R5XCIsXG4gICAgICAgIGZyb3plblJvdzogdHJ1ZSxcbiAgICAgICAgdGFibGVQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgdGFibGVTZWxlY3RvcjogdGFibGVTZWxlY3RvcixcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgc2VsZWN0aW9uTW9kZUluQ29sdW1uOiBzZWxlY3Rpb25Nb2RlSW5Db2x1bW4sXG4gICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgZWRpdGluZ01ldGE6IGVkaXRpbmdNZXRhLFxuICAgICAgICBvbkVkaXRpbmdNZXRhQ2hhbmdlOiB0aGlzLm9uRWRpdGluZ01ldGFDaGFuZ2UsXG4gICAgICAgIHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4LFxuICAgICAgICBvblJvd0NsaWNrOiB0aGlzLnByb3BzLm9uUm93Q2xpY2ssXG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2s6IHRoaXMucHJvcHMub25Sb3dEb3VibGVDbGljayxcbiAgICAgICAgb25DZWxsQ2xpY2s6IHRoaXMucHJvcHMub25DZWxsQ2xpY2ssXG4gICAgICAgIHNlbGVjdGlvbjogdGhpcy5wcm9wcy5zZWxlY3Rpb24sXG4gICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlLFxuICAgICAgICBsYXp5OiB0aGlzLnByb3BzLmxhenksXG4gICAgICAgIHBhZ2luYXRvcjogdGhpcy5wcm9wcy5wYWdpbmF0b3IsXG4gICAgICAgIG9uQ2VsbFNlbGVjdDogdGhpcy5wcm9wcy5vbkNlbGxTZWxlY3QsXG4gICAgICAgIG9uQ2VsbFVuc2VsZWN0OiB0aGlzLnByb3BzLm9uQ2VsbFVuc2VsZWN0LFxuICAgICAgICBvblJvd1NlbGVjdDogdGhpcy5wcm9wcy5vblJvd1NlbGVjdCxcbiAgICAgICAgb25Sb3dVbnNlbGVjdDogdGhpcy5wcm9wcy5vblJvd1Vuc2VsZWN0LFxuICAgICAgICBkcmFnU2VsZWN0aW9uOiB0aGlzLnByb3BzLmRyYWdTZWxlY3Rpb24sXG4gICAgICAgIG9uQ29udGV4dE1lbnU6IHRoaXMucHJvcHMub25Db250ZXh0TWVudSxcbiAgICAgICAgb25Db250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNvbnRleHRNZW51U2VsZWN0aW9uQ2hhbmdlLFxuICAgICAgICBtZXRhS2V5U2VsZWN0aW9uOiB0aGlzLnByb3BzLm1ldGFLZXlTZWxlY3Rpb24sXG4gICAgICAgIHNlbGVjdGlvbk1vZGU6IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSxcbiAgICAgICAgY2VsbFNlbGVjdGlvbjogdGhpcy5wcm9wcy5jZWxsU2VsZWN0aW9uLFxuICAgICAgICBjb250ZXh0TWVudVNlbGVjdGlvbjogdGhpcy5wcm9wcy5jb250ZXh0TWVudVNlbGVjdGlvbixcbiAgICAgICAgZGF0YUtleTogdGhpcy5wcm9wcy5kYXRhS2V5LFxuICAgICAgICBleHBhbmRlZFJvd3M6IHRoaXMucHJvcHMuZXhwYW5kZWRSb3dzLFxuICAgICAgICBvblJvd0NvbGxhcHNlOiB0aGlzLnByb3BzLm9uUm93Q29sbGFwc2UsXG4gICAgICAgIG9uUm93RXhwYW5kOiB0aGlzLnByb3BzLm9uUm93RXhwYW5kLFxuICAgICAgICBvblJvd1RvZ2dsZTogdGhpcy5wcm9wcy5vblJvd1RvZ2dsZSxcbiAgICAgICAgZWRpdE1vZGU6IHRoaXMucHJvcHMuZWRpdE1vZGUsXG4gICAgICAgIGVkaXRpbmdSb3dzOiB0aGlzLnByb3BzLmVkaXRpbmdSb3dzLFxuICAgICAgICBvblJvd1Jlb3JkZXI6IHRoaXMucHJvcHMub25Sb3dSZW9yZGVyLFxuICAgICAgICBzY3JvbGxhYmxlOiB0aGlzLnByb3BzLnNjcm9sbGFibGUsXG4gICAgICAgIHJvd0dyb3VwTW9kZTogdGhpcy5wcm9wcy5yb3dHcm91cE1vZGUsXG4gICAgICAgIGdyb3VwUm93c0J5OiB0aGlzLnByb3BzLmdyb3VwUm93c0J5LFxuICAgICAgICBleHBhbmRhYmxlUm93R3JvdXBzOiB0aGlzLnByb3BzLmV4cGFuZGFibGVSb3dHcm91cHMsXG4gICAgICAgIGxvYWRpbmc6IHRoaXMucHJvcHMubG9hZGluZyxcbiAgICAgICAgZW1wdHlNZXNzYWdlOiB0aGlzLnByb3BzLmVtcHR5TWVzc2FnZSxcbiAgICAgICAgcm93R3JvdXBIZWFkZXJUZW1wbGF0ZTogdGhpcy5wcm9wcy5yb3dHcm91cEhlYWRlclRlbXBsYXRlLFxuICAgICAgICByb3dFeHBhbnNpb25UZW1wbGF0ZTogdGhpcy5wcm9wcy5yb3dFeHBhbnNpb25UZW1wbGF0ZSxcbiAgICAgICAgcm93R3JvdXBGb290ZXJUZW1wbGF0ZTogdGhpcy5wcm9wcy5yb3dHcm91cEZvb3RlclRlbXBsYXRlLFxuICAgICAgICBvblJvd0VkaXRDaGFuZ2U6IHRoaXMucHJvcHMub25Sb3dFZGl0Q2hhbmdlLFxuICAgICAgICBjb21wYXJlU2VsZWN0aW9uQnk6IHRoaXMucHJvcHMuY29tcGFyZVNlbGVjdGlvbkJ5LFxuICAgICAgICBzZWxlY3RPbkVkaXQ6IHRoaXMucHJvcHMuc2VsZWN0T25FZGl0LFxuICAgICAgICBvblJvd0VkaXRJbml0OiB0aGlzLnByb3BzLm9uUm93RWRpdEluaXQsXG4gICAgICAgIHJvd0VkaXRWYWxpZGF0b3I6IHRoaXMucHJvcHMucm93RWRpdFZhbGlkYXRvcixcbiAgICAgICAgb25Sb3dFZGl0U2F2ZTogdGhpcy5wcm9wcy5vblJvd0VkaXRTYXZlLFxuICAgICAgICBvblJvd0VkaXRDb21wbGV0ZTogdGhpcy5wcm9wcy5vblJvd0VkaXRDb21wbGV0ZSxcbiAgICAgICAgb25Sb3dFZGl0Q2FuY2VsOiB0aGlzLnByb3BzLm9uUm93RWRpdENhbmNlbCxcbiAgICAgICAgY2VsbENsYXNzTmFtZTogdGhpcy5wcm9wcy5jZWxsQ2xhc3NOYW1lLFxuICAgICAgICByZXNwb25zaXZlTGF5b3V0OiB0aGlzLnByb3BzLnJlc3BvbnNpdmVMYXlvdXQsXG4gICAgICAgIHNlbGVjdGlvbkF1dG9Gb2N1czogdGhpcy5wcm9wcy5zZWxlY3Rpb25BdXRvRm9jdXMsXG4gICAgICAgIGlzRGF0YVNlbGVjdGFibGU6IHRoaXMucHJvcHMuaXNEYXRhU2VsZWN0YWJsZSxcbiAgICAgICAgc2hvd1NlbGVjdGlvbkVsZW1lbnQ6IHRoaXMucHJvcHMuc2hvd1NlbGVjdGlvbkVsZW1lbnQsXG4gICAgICAgIHNob3dSb3dSZW9yZGVyRWxlbWVudDogdGhpcy5wcm9wcy5zaG93Um93UmVvcmRlckVsZW1lbnQsXG4gICAgICAgIGV4cGFuZGVkUm93SWNvbjogdGhpcy5wcm9wcy5leHBhbmRlZFJvd0ljb24sXG4gICAgICAgIGNvbGxhcHNlZFJvd0ljb246IHRoaXMucHJvcHMuY29sbGFwc2VkUm93SWNvbixcbiAgICAgICAgcm93Q2xhc3NOYW1lOiB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZSxcbiAgICAgICAgaXNWaXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB2YXIgYm9keSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlQm9keSwge1xuICAgICAgICB2YWx1ZTogdGhpcy5kYXRhVG9SZW5kZXIocm93cyksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBlbXB0eTogZW1wdHksXG4gICAgICAgIGZyb3plblJvdzogZmFsc2UsXG4gICAgICAgIHRhYmxlUHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIHRhYmxlU2VsZWN0b3I6IHRhYmxlU2VsZWN0b3IsXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIHNlbGVjdGlvbk1vZGVJbkNvbHVtbjogc2VsZWN0aW9uTW9kZUluQ29sdW1uLFxuICAgICAgICBmaXJzdDogZmlyc3QsXG4gICAgICAgIGVkaXRpbmdNZXRhOiBlZGl0aW5nTWV0YSxcbiAgICAgICAgb25FZGl0aW5nTWV0YUNoYW5nZTogdGhpcy5vbkVkaXRpbmdNZXRhQ2hhbmdlLFxuICAgICAgICB0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcbiAgICAgICAgb25Sb3dDbGljazogdGhpcy5wcm9wcy5vblJvd0NsaWNrLFxuICAgICAgICBvblJvd0RvdWJsZUNsaWNrOiB0aGlzLnByb3BzLm9uUm93RG91YmxlQ2xpY2ssXG4gICAgICAgIG9uQ2VsbENsaWNrOiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrLFxuICAgICAgICBzZWxlY3Rpb246IHRoaXMucHJvcHMuc2VsZWN0aW9uLFxuICAgICAgICBvblNlbGVjdGlvbkNoYW5nZTogdGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZSxcbiAgICAgICAgbGF6eTogdGhpcy5wcm9wcy5sYXp5LFxuICAgICAgICBwYWdpbmF0b3I6IHRoaXMucHJvcHMucGFnaW5hdG9yLFxuICAgICAgICBvbkNlbGxTZWxlY3Q6IHRoaXMucHJvcHMub25DZWxsU2VsZWN0LFxuICAgICAgICBvbkNlbGxVbnNlbGVjdDogdGhpcy5wcm9wcy5vbkNlbGxVbnNlbGVjdCxcbiAgICAgICAgb25Sb3dTZWxlY3Q6IHRoaXMucHJvcHMub25Sb3dTZWxlY3QsXG4gICAgICAgIG9uUm93VW5zZWxlY3Q6IHRoaXMucHJvcHMub25Sb3dVbnNlbGVjdCxcbiAgICAgICAgZHJhZ1NlbGVjdGlvbjogdGhpcy5wcm9wcy5kcmFnU2VsZWN0aW9uLFxuICAgICAgICBvbkNvbnRleHRNZW51OiB0aGlzLnByb3BzLm9uQ29udGV4dE1lbnUsXG4gICAgICAgIG9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2U6IHRoaXMucHJvcHMub25Db250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZSxcbiAgICAgICAgbWV0YUtleVNlbGVjdGlvbjogdGhpcy5wcm9wcy5tZXRhS2V5U2VsZWN0aW9uLFxuICAgICAgICBzZWxlY3Rpb25Nb2RlOiB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUsXG4gICAgICAgIGNlbGxTZWxlY3Rpb246IHRoaXMucHJvcHMuY2VsbFNlbGVjdGlvbixcbiAgICAgICAgY29udGV4dE1lbnVTZWxlY3Rpb246IHRoaXMucHJvcHMuY29udGV4dE1lbnVTZWxlY3Rpb24sXG4gICAgICAgIGRhdGFLZXk6IHRoaXMucHJvcHMuZGF0YUtleSxcbiAgICAgICAgZXhwYW5kZWRSb3dzOiB0aGlzLnByb3BzLmV4cGFuZGVkUm93cyxcbiAgICAgICAgb25Sb3dDb2xsYXBzZTogdGhpcy5wcm9wcy5vblJvd0NvbGxhcHNlLFxuICAgICAgICBvblJvd0V4cGFuZDogdGhpcy5wcm9wcy5vblJvd0V4cGFuZCxcbiAgICAgICAgb25Sb3dUb2dnbGU6IHRoaXMucHJvcHMub25Sb3dUb2dnbGUsXG4gICAgICAgIGVkaXRNb2RlOiB0aGlzLnByb3BzLmVkaXRNb2RlLFxuICAgICAgICBlZGl0aW5nUm93czogdGhpcy5wcm9wcy5lZGl0aW5nUm93cyxcbiAgICAgICAgb25Sb3dSZW9yZGVyOiB0aGlzLnByb3BzLm9uUm93UmVvcmRlcixcbiAgICAgICAgc2Nyb2xsYWJsZTogdGhpcy5wcm9wcy5zY3JvbGxhYmxlLFxuICAgICAgICByb3dHcm91cE1vZGU6IHRoaXMucHJvcHMucm93R3JvdXBNb2RlLFxuICAgICAgICBncm91cFJvd3NCeTogdGhpcy5wcm9wcy5ncm91cFJvd3NCeSxcbiAgICAgICAgZXhwYW5kYWJsZVJvd0dyb3VwczogdGhpcy5wcm9wcy5leHBhbmRhYmxlUm93R3JvdXBzLFxuICAgICAgICBsb2FkaW5nOiB0aGlzLnByb3BzLmxvYWRpbmcsXG4gICAgICAgIGVtcHR5TWVzc2FnZTogdGhpcy5wcm9wcy5lbXB0eU1lc3NhZ2UsXG4gICAgICAgIHJvd0dyb3VwSGVhZGVyVGVtcGxhdGU6IHRoaXMucHJvcHMucm93R3JvdXBIZWFkZXJUZW1wbGF0ZSxcbiAgICAgICAgcm93RXhwYW5zaW9uVGVtcGxhdGU6IHRoaXMucHJvcHMucm93RXhwYW5zaW9uVGVtcGxhdGUsXG4gICAgICAgIHJvd0dyb3VwRm9vdGVyVGVtcGxhdGU6IHRoaXMucHJvcHMucm93R3JvdXBGb290ZXJUZW1wbGF0ZSxcbiAgICAgICAgb25Sb3dFZGl0Q2hhbmdlOiB0aGlzLnByb3BzLm9uUm93RWRpdENoYW5nZSxcbiAgICAgICAgY29tcGFyZVNlbGVjdGlvbkJ5OiB0aGlzLnByb3BzLmNvbXBhcmVTZWxlY3Rpb25CeSxcbiAgICAgICAgc2VsZWN0T25FZGl0OiB0aGlzLnByb3BzLnNlbGVjdE9uRWRpdCxcbiAgICAgICAgb25Sb3dFZGl0SW5pdDogdGhpcy5wcm9wcy5vblJvd0VkaXRJbml0LFxuICAgICAgICByb3dFZGl0VmFsaWRhdG9yOiB0aGlzLnByb3BzLnJvd0VkaXRWYWxpZGF0b3IsXG4gICAgICAgIG9uUm93RWRpdFNhdmU6IHRoaXMucHJvcHMub25Sb3dFZGl0U2F2ZSxcbiAgICAgICAgb25Sb3dFZGl0Q29tcGxldGU6IHRoaXMucHJvcHMub25Sb3dFZGl0Q29tcGxldGUsXG4gICAgICAgIG9uUm93RWRpdENhbmNlbDogdGhpcy5wcm9wcy5vblJvd0VkaXRDYW5jZWwsXG4gICAgICAgIGNlbGxDbGFzc05hbWU6IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZSxcbiAgICAgICAgcmVzcG9uc2l2ZUxheW91dDogdGhpcy5wcm9wcy5yZXNwb25zaXZlTGF5b3V0LFxuICAgICAgICBzZWxlY3Rpb25BdXRvRm9jdXM6IHRoaXMucHJvcHMuc2VsZWN0aW9uQXV0b0ZvY3VzLFxuICAgICAgICBpc0RhdGFTZWxlY3RhYmxlOiB0aGlzLnByb3BzLmlzRGF0YVNlbGVjdGFibGUsXG4gICAgICAgIHNob3dTZWxlY3Rpb25FbGVtZW50OiB0aGlzLnByb3BzLnNob3dTZWxlY3Rpb25FbGVtZW50LFxuICAgICAgICBzaG93Um93UmVvcmRlckVsZW1lbnQ6IHRoaXMucHJvcHMuc2hvd1Jvd1Jlb3JkZXJFbGVtZW50LFxuICAgICAgICBleHBhbmRlZFJvd0ljb246IHRoaXMucHJvcHMuZXhwYW5kZWRSb3dJY29uLFxuICAgICAgICBjb2xsYXBzZWRSb3dJY29uOiB0aGlzLnByb3BzLmNvbGxhcHNlZFJvd0ljb24sXG4gICAgICAgIHJvd0NsYXNzTmFtZTogdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxlckNvbnRlbnRSZWY6IGNvbnRlbnRSZWYsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxlck9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGlzVmlydHVhbFNjcm9sbGVyRGlzYWJsZWQ6IGlzVmlydHVhbFNjcm9sbGVyRGlzYWJsZWRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBmcm96ZW5Cb2R5LCBib2R5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyVGFibGVGb290ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGFibGVGb290ZXIob3B0aW9ucykge1xuICAgICAgdmFyIGNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVGb290ZXIsIHtcbiAgICAgICAgdGFibGVQcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgZm9vdGVyQ29sdW1uR3JvdXA6IHRoaXMucHJvcHMuZm9vdGVyQ29sdW1uR3JvdXBcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQocHJvY2Vzc2VkRGF0YSwgY29sdW1ucywgc2VsZWN0aW9uTW9kZUluQ29sdW1uLCBlbXB0eSkge1xuICAgICAgdmFyIF90aGlzMTcgPSB0aGlzO1xuXG4gICAgICBpZiAoIWNvbHVtbnMpIHJldHVybjtcbiAgICAgIHZhciBpc1ZpcnR1YWxTY3JvbGxlckRpc2FibGVkID0gdGhpcy5pc1ZpcnR1YWxTY3JvbGxlckRpc2FibGVkKCk7XG4gICAgICB2YXIgdmlydHVhbFNjcm9sbGVyT3B0aW9ucyA9IHRoaXMucHJvcHMudmlydHVhbFNjcm9sbGVyT3B0aW9ucyB8fCB7fTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLWRhdGF0YWJsZS13cmFwcGVyXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbWF4SGVpZ2h0OiBpc1ZpcnR1YWxTY3JvbGxlckRpc2FibGVkID8gdGhpcy5wcm9wcy5zY3JvbGxIZWlnaHQgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpcnR1YWxTY3JvbGxlciwgX2V4dGVuZHMoe30sIHZpcnR1YWxTY3JvbGxlck9wdGlvbnMsIHtcbiAgICAgICAgaXRlbXM6IHByb2Nlc3NlZERhdGEsXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIHNjcm9sbEhlaWdodDogdGhpcy5wcm9wcy5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGRpc2FibGVkOiBpc1ZpcnR1YWxTY3JvbGxlckRpc2FibGVkLFxuICAgICAgICBsb2FkZXJEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgc2hvd1NwYWNlcjogZmFsc2UsXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZTogZnVuY3Rpb24gY29udGVudFRlbXBsYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgICB2YXIgcmVmID0gZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgICBfdGhpczE3LnRhYmxlID0gZWw7XG4gICAgICAgICAgICBvcHRpb25zLnNwYWNlclJlZiAmJiBvcHRpb25zLnNwYWNlclJlZihlbCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciB0YWJsZUNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtZGF0YXRhYmxlLXRhYmxlJywgX3RoaXMxNy5wcm9wcy50YWJsZUNsYXNzTmFtZSk7XG5cbiAgICAgICAgICB2YXIgdGFibGVIZWFkZXIgPSBfdGhpczE3LnJlbmRlclRhYmxlSGVhZGVyKG9wdGlvbnMsIGVtcHR5KTtcblxuICAgICAgICAgIHZhciB0YWJsZUJvZHkgPSBfdGhpczE3LnJlbmRlclRhYmxlQm9keShvcHRpb25zLCBzZWxlY3Rpb25Nb2RlSW5Db2x1bW4sIGVtcHR5LCBpc1ZpcnR1YWxTY3JvbGxlckRpc2FibGVkKTtcblxuICAgICAgICAgIHZhciB0YWJsZUZvb3RlciA9IF90aGlzMTcucmVuZGVyVGFibGVGb290ZXIob3B0aW9ucyk7XG5cbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7XG4gICAgICAgICAgICByZWY6IHJlZixcbiAgICAgICAgICAgIHN0eWxlOiBfdGhpczE3LnByb3BzLnRhYmxlU3R5bGUsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRhYmxlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgcm9sZTogXCJ0YWJsZVwiXG4gICAgICAgICAgfSwgdGFibGVIZWFkZXIsIHRhYmxlQm9keSwgdGFibGVGb290ZXIpO1xuICAgICAgICB9XG4gICAgICB9KSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJGb290ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZm9vdGVyKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLmZvb3Rlciwge1xuICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwLWRhdGF0YWJsZS1mb290ZXJcIlxuICAgICAgICB9LCBjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclBhZ2luYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQYWdpbmF0b3IocG9zaXRpb24sIHRvdGFsUmVjb3Jkcykge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtcGFnaW5hdG9yLScgKyBwb3NpdGlvbiwgdGhpcy5wcm9wcy5wYWdpbmF0b3JDbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRvciwge1xuICAgICAgICBmaXJzdDogdGhpcy5nZXRGaXJzdCgpLFxuICAgICAgICByb3dzOiB0aGlzLmdldFJvd3MoKSxcbiAgICAgICAgcGFnZUxpbmtTaXplOiB0aGlzLnByb3BzLnBhZ2VMaW5rU2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5vblBhZ2VDaGFuZ2UsXG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLnByb3BzLnBhZ2luYXRvclRlbXBsYXRlLFxuICAgICAgICB0b3RhbFJlY29yZHM6IHRvdGFsUmVjb3JkcyxcbiAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zOiB0aGlzLnByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICAgICAgY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZTogdGhpcy5wcm9wcy5jdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlLFxuICAgICAgICBsZWZ0Q29udGVudDogdGhpcy5wcm9wcy5wYWdpbmF0b3JMZWZ0LFxuICAgICAgICByaWdodENvbnRlbnQ6IHRoaXMucHJvcHMucGFnaW5hdG9yUmlnaHQsXG4gICAgICAgIGFsd2F5c1Nob3c6IHRoaXMucHJvcHMuYWx3YXlzU2hvd1BhZ2luYXRvcixcbiAgICAgICAgZHJvcGRvd25BcHBlbmRUbzogdGhpcy5wcm9wcy5wYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUGFnaW5hdG9yVG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBhZ2luYXRvclRvcCh0b3RhbFJlY29yZHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRvciAmJiB0aGlzLnByb3BzLnBhZ2luYXRvclBvc2l0aW9uICE9PSAnYm90dG9tJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJQYWdpbmF0b3IoJ3RvcCcsIHRvdGFsUmVjb3Jkcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJQYWdpbmF0b3JCb3R0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUGFnaW5hdG9yQm90dG9tKHRvdGFsUmVjb3Jkcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdG9yICYmIHRoaXMucHJvcHMucGFnaW5hdG9yUG9zaXRpb24gIT09ICd0b3AnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclBhZ2luYXRvcignYm90dG9tJywgdG90YWxSZWNvcmRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclJlc2l6ZUhlbHBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZXNpemVIZWxwZXIoKSB7XG4gICAgICB2YXIgX3RoaXMxOCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnJlc2l6YWJsZUNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMTgucmVzaXplSGVscGVyID0gZWw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1jb2x1bW4tcmVzaXplci1oZWxwZXJcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclJlb3JkZXJJbmRpY2F0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJlb3JkZXJJbmRpY2F0b3JzKCkge1xuICAgICAgdmFyIF90aGlzMTkgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZW9yZGVyYWJsZUNvbHVtbnMpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczE5LnJlb3JkZXJJbmRpY2F0b3JVcCA9IGVsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInBpIHBpLWFycm93LWRvd24gcC1kYXRhdGFibGUtcmVvcmRlci1pbmRpY2F0b3ItdXBcIixcbiAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczE5LnJlb3JkZXJJbmRpY2F0b3JEb3duID0gZWw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGkgcGktYXJyb3ctdXAgcC1kYXRhdGFibGUtcmVvcmRlci1pbmRpY2F0b3ItZG93blwiLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMjAgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IHRoaXMucHJvY2Vzc2VkRGF0YSgpO1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnMoKTtcbiAgICAgIHZhciB0b3RhbFJlY29yZHMgPSB0aGlzLmdldFRvdGFsUmVjb3Jkcyhwcm9jZXNzZWREYXRhKTtcbiAgICAgIHZhciBlbXB0eSA9IE9iamVjdFV0aWxzLmlzRW1wdHkocHJvY2Vzc2VkRGF0YSk7XG4gICAgICB2YXIgc2VsZWN0aW9uTW9kZUluQ29sdW1uID0gdGhpcy5nZXRTZWxlY3Rpb25Nb2RlSW5Db2x1bW4oY29sdW1ucyk7XG4gICAgICB2YXIgc2VsZWN0YWJsZSA9IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB8fCBzZWxlY3Rpb25Nb2RlSW5Db2x1bW47XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1kYXRhdGFibGUgcC1jb21wb25lbnQnLCB7XG4gICAgICAgICdwLWRhdGF0YWJsZS1ob3ZlcmFibGUtcm93cyc6IHRoaXMucHJvcHMucm93SG92ZXIsXG4gICAgICAgICdwLWRhdGF0YWJsZS1zZWxlY3RhYmxlJzogc2VsZWN0YWJsZSAmJiAhdGhpcy5wcm9wcy5jZWxsU2VsZWN0aW9uLFxuICAgICAgICAncC1kYXRhdGFibGUtc2VsZWN0YWJsZS1jZWxsJzogc2VsZWN0YWJsZSAmJiB0aGlzLnByb3BzLmNlbGxTZWxlY3Rpb24sXG4gICAgICAgICdwLWRhdGF0YWJsZS1hdXRvLWxheW91dCc6IHRoaXMucHJvcHMuYXV0b0xheW91dCxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLXJlc2l6YWJsZSc6IHRoaXMucHJvcHMucmVzaXphYmxlQ29sdW1ucyxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLXJlc2l6YWJsZS1maXQnOiB0aGlzLnByb3BzLnJlc2l6YWJsZUNvbHVtbnMgJiYgdGhpcy5wcm9wcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZml0JyxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLXNjcm9sbGFibGUnOiB0aGlzLnByb3BzLnNjcm9sbGFibGUsXG4gICAgICAgICdwLWRhdGF0YWJsZS1zY3JvbGxhYmxlLXZlcnRpY2FsJzogdGhpcy5wcm9wcy5zY3JvbGxhYmxlICYmIHRoaXMucHJvcHMuc2Nyb2xsRGlyZWN0aW9uID09PSAndmVydGljYWwnLFxuICAgICAgICAncC1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ob3Jpem9udGFsJzogdGhpcy5wcm9wcy5zY3JvbGxhYmxlICYmIHRoaXMucHJvcHMuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICAgICdwLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWJvdGgnOiB0aGlzLnByb3BzLnNjcm9sbGFibGUgJiYgdGhpcy5wcm9wcy5zY3JvbGxEaXJlY3Rpb24gPT09ICdib3RoJyxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLWZsZXgtc2Nyb2xsYWJsZSc6IHRoaXMucHJvcHMuc2Nyb2xsYWJsZSAmJiB0aGlzLnByb3BzLnNjcm9sbEhlaWdodCA9PT0gJ2ZsZXgnLFxuICAgICAgICAncC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1zdGFjayc6IHRoaXMucHJvcHMucmVzcG9uc2l2ZUxheW91dCA9PT0gJ3N0YWNrJyxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLXJlc3BvbnNpdmUtc2Nyb2xsJzogdGhpcy5wcm9wcy5yZXNwb25zaXZlTGF5b3V0ID09PSAnc2Nyb2xsJyxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLXN0cmlwZWQnOiB0aGlzLnByb3BzLnN0cmlwZWRSb3dzLFxuICAgICAgICAncC1kYXRhdGFibGUtZ3JpZGxpbmVzJzogdGhpcy5wcm9wcy5zaG93R3JpZGxpbmVzLFxuICAgICAgICAncC1kYXRhdGFibGUtZ3JvdXBlZC1oZWFkZXInOiB0aGlzLnByb3BzLmhlYWRlckNvbHVtbkdyb3VwICE9IG51bGwsXG4gICAgICAgICdwLWRhdGF0YWJsZS1ncm91cGVkLWZvb3Rlcic6IHRoaXMucHJvcHMuZm9vdGVyQ29sdW1uR3JvdXAgIT0gbnVsbCxcbiAgICAgICAgJ3AtZGF0YXRhYmxlLXNtJzogdGhpcy5wcm9wcy5zaXplID09PSAnc21hbGwnLFxuICAgICAgICAncC1kYXRhdGFibGUtbGcnOiB0aGlzLnByb3BzLnNpemUgPT09ICdsYXJnZSdcbiAgICAgIH0sIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgIHZhciBsb2FkZXIgPSB0aGlzLnJlbmRlckxvYWRlcigpO1xuICAgICAgdmFyIGhlYWRlciA9IHRoaXMucmVuZGVySGVhZGVyKCk7XG4gICAgICB2YXIgcGFnaW5hdG9yVG9wID0gdGhpcy5yZW5kZXJQYWdpbmF0b3JUb3AodG90YWxSZWNvcmRzKTtcbiAgICAgIHZhciBjb250ZW50ID0gdGhpcy5yZW5kZXJDb250ZW50KHByb2Nlc3NlZERhdGEsIGNvbHVtbnMsIHNlbGVjdGlvbk1vZGVJbkNvbHVtbiwgZW1wdHkpO1xuICAgICAgdmFyIHBhZ2luYXRvckJvdHRvbSA9IHRoaXMucmVuZGVyUGFnaW5hdG9yQm90dG9tKHRvdGFsUmVjb3Jkcyk7XG4gICAgICB2YXIgZm9vdGVyID0gdGhpcy5yZW5kZXJGb290ZXIoKTtcbiAgICAgIHZhciByZXNpemVIZWxwZXIgPSB0aGlzLnJlbmRlclJlc2l6ZUhlbHBlcigpO1xuICAgICAgdmFyIHJlb3JkZXJJbmRpY2F0b3JzID0gdGhpcy5yZW5kZXJSZW9yZGVySW5kaWNhdG9ycygpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyMC5lbCA9IGVsO1xuICAgICAgICB9LFxuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICBcImRhdGEtc2Nyb2xsc2VsZWN0b3JzXCI6IFwiLnAtZGF0YXRhYmxlLXdyYXBwZXJcIlxuICAgICAgfSwgbG9hZGVyLCBoZWFkZXIsIHBhZ2luYXRvclRvcCwgY29udGVudCwgcGFnaW5hdG9yQm90dG9tLCBmb290ZXIsIHJlc2l6ZUhlbHBlciwgcmVvcmRlckluZGljYXRvcnMpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMucm93cyAhPT0gcHJldlN0YXRlLmRfcm93cyAmJiAhbmV4dFByb3BzLm9uUGFnZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJvd3M6IG5leHRQcm9wcy5yb3dzLFxuICAgICAgICAgIGRfcm93czogbmV4dFByb3BzLnJvd3NcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGFUYWJsZTtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KERhdGFUYWJsZSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBpZDogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIGhlYWRlcjogbnVsbCxcbiAgZm9vdGVyOiBudWxsLFxuICBzdHlsZTogbnVsbCxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICB0YWJsZVN0eWxlOiBudWxsLFxuICB0YWJsZUNsYXNzTmFtZTogbnVsbCxcbiAgcGFnaW5hdG9yOiBmYWxzZSxcbiAgcGFnaW5hdG9yUG9zaXRpb246ICdib3R0b20nLFxuICBhbHdheXNTaG93UGFnaW5hdG9yOiB0cnVlLFxuICBwYWdpbmF0b3JDbGFzc05hbWU6IG51bGwsXG4gIHBhZ2luYXRvclRlbXBsYXRlOiAnRmlyc3RQYWdlTGluayBQcmV2UGFnZUxpbmsgUGFnZUxpbmtzIE5leHRQYWdlTGluayBMYXN0UGFnZUxpbmsgUm93c1BlclBhZ2VEcm9wZG93bicsXG4gIHBhZ2luYXRvckxlZnQ6IG51bGwsXG4gIHBhZ2luYXRvclJpZ2h0OiBudWxsLFxuICBwYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvOiBudWxsLFxuICBwYWdlTGlua1NpemU6IDUsXG4gIHJvd3NQZXJQYWdlT3B0aW9uczogbnVsbCxcbiAgY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZTogJyh7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfSknLFxuICBmaXJzdDogMCxcbiAgcm93czogbnVsbCxcbiAgdG90YWxSZWNvcmRzOiBudWxsLFxuICBsYXp5OiBmYWxzZSxcbiAgc29ydEZpZWxkOiBudWxsLFxuICBzb3J0T3JkZXI6IG51bGwsXG4gIG11bHRpU29ydE1ldGE6IG51bGwsXG4gIHNvcnRNb2RlOiAnc2luZ2xlJyxcbiAgZGVmYXVsdFNvcnRPcmRlcjogMSxcbiAgcmVtb3ZhYmxlU29ydDogZmFsc2UsXG4gIGVtcHR5TWVzc2FnZTogbnVsbCxcbiAgc2VsZWN0aW9uTW9kZTogbnVsbCxcbiAgZHJhZ1NlbGVjdGlvbjogZmFsc2UsXG4gIGNlbGxTZWxlY3Rpb246IGZhbHNlLFxuICBzZWxlY3Rpb246IG51bGwsXG4gIG9uU2VsZWN0aW9uQ2hhbmdlOiBudWxsLFxuICBjb250ZXh0TWVudVNlbGVjdGlvbjogbnVsbCxcbiAgb25Db250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZTogbnVsbCxcbiAgY29tcGFyZVNlbGVjdGlvbkJ5OiAnZGVlcEVxdWFscycsXG4gIGRhdGFLZXk6IG51bGwsXG4gIG1ldGFLZXlTZWxlY3Rpb246IHRydWUsXG4gIHNlbGVjdE9uRWRpdDogdHJ1ZSxcbiAgc2VsZWN0aW9uUGFnZU9ubHk6IGZhbHNlLFxuICBzZWxlY3Rpb25BdXRvRm9jdXM6IHRydWUsXG4gIHNob3dTZWxlY3RBbGw6IHRydWUsXG4gIHNlbGVjdEFsbDogZmFsc2UsXG4gIG9uU2VsZWN0QWxsQ2hhbmdlOiBudWxsLFxuICBoZWFkZXJDb2x1bW5Hcm91cDogbnVsbCxcbiAgZm9vdGVyQ29sdW1uR3JvdXA6IG51bGwsXG4gIHJvd0V4cGFuc2lvblRlbXBsYXRlOiBudWxsLFxuICBleHBhbmRlZFJvd3M6IG51bGwsXG4gIG9uUm93VG9nZ2xlOiBudWxsLFxuICByZXNpemFibGVDb2x1bW5zOiBmYWxzZSxcbiAgY29sdW1uUmVzaXplTW9kZTogJ2ZpdCcsXG4gIHJlb3JkZXJhYmxlQ29sdW1uczogZmFsc2UsXG4gIGZpbHRlcnM6IG51bGwsXG4gIGdsb2JhbEZpbHRlcjogbnVsbCxcbiAgZmlsdGVyRGVsYXk6IDMwMCxcbiAgZmlsdGVyTG9jYWxlOiB1bmRlZmluZWQsXG4gIHNjcm9sbGFibGU6IGZhbHNlLFxuICBzY3JvbGxIZWlnaHQ6IG51bGwsXG4gIHNjcm9sbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgdmlydHVhbFNjcm9sbGVyT3B0aW9uczogbnVsbCxcbiAgZnJvemVuV2lkdGg6IG51bGwsXG4gIGZyb3plblZhbHVlOiBudWxsLFxuICBjc3ZTZXBhcmF0b3I6ICcsJyxcbiAgZXhwb3J0RmlsZW5hbWU6ICdkb3dubG9hZCcsXG4gIHJvd0dyb3VwTW9kZTogbnVsbCxcbiAgYXV0b0xheW91dDogZmFsc2UsXG4gIHJvd0NsYXNzTmFtZTogbnVsbCxcbiAgY2VsbENsYXNzTmFtZTogbnVsbCxcbiAgcm93R3JvdXBIZWFkZXJUZW1wbGF0ZTogbnVsbCxcbiAgcm93R3JvdXBGb290ZXJUZW1wbGF0ZTogbnVsbCxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGxvYWRpbmdJY29uOiAncGkgcGktc3Bpbm5lcicsXG4gIHRhYkluZGV4OiAwLFxuICBzdGF0ZUtleTogbnVsbCxcbiAgc3RhdGVTdG9yYWdlOiAnc2Vzc2lvbicsXG4gIGdyb3VwUm93c0J5OiBudWxsLFxuICBlZGl0TW9kZTogJ2NlbGwnLFxuICBlZGl0aW5nUm93czogbnVsbCxcbiAgZXhwYW5kYWJsZVJvd0dyb3VwczogZmFsc2UsXG4gIHJvd0hvdmVyOiBmYWxzZSxcbiAgc2hvd0dyaWRsaW5lczogZmFsc2UsXG4gIHN0cmlwZWRSb3dzOiBmYWxzZSxcbiAgc2l6ZTogJ25vcm1hbCcsXG4gIHJlc3BvbnNpdmVMYXlvdXQ6ICdzdGFjaycsXG4gIGJyZWFrcG9pbnQ6ICc5NjBweCcsXG4gIGZpbHRlckRpc3BsYXk6ICdtZW51JyxcbiAgZXhwYW5kZWRSb3dJY29uOiAncGkgcGktY2hldnJvbi1kb3duJyxcbiAgY29sbGFwc2VkUm93SWNvbjogJ3BpIHBpLWNoZXZyb24tcmlnaHQnLFxuICBvblJvd0VkaXRDb21wbGV0ZTogbnVsbCxcbiAgZ2xvYmFsRmlsdGVyRmllbGRzOiBudWxsLFxuICBzaG93U2VsZWN0aW9uRWxlbWVudDogbnVsbCxcbiAgc2hvd1Jvd1Jlb3JkZXJFbGVtZW50OiBudWxsLFxuICBpc0RhdGFTZWxlY3RhYmxlOiBudWxsLFxuICBvbkNvbHVtblJlc2l6ZUVuZDogbnVsbCxcbiAgb25Db2x1bW5SZXNpemVyQ2xpY2s6IG51bGwsXG4gIG9uQ29sdW1uUmVzaXplckRvdWJsZUNsaWNrOiBudWxsLFxuICBvblNvcnQ6IG51bGwsXG4gIG9uUGFnZTogbnVsbCxcbiAgb25GaWx0ZXI6IG51bGwsXG4gIG9uQWxsUm93c1NlbGVjdDogbnVsbCxcbiAgb25BbGxSb3dzVW5zZWxlY3Q6IG51bGwsXG4gIG9uUm93Q2xpY2s6IG51bGwsXG4gIG9uUm93RG91YmxlQ2xpY2s6IG51bGwsXG4gIG9uUm93U2VsZWN0OiBudWxsLFxuICBvblJvd1Vuc2VsZWN0OiBudWxsLFxuICBvblJvd0V4cGFuZDogbnVsbCxcbiAgb25Sb3dDb2xsYXBzZTogbnVsbCxcbiAgb25Db250ZXh0TWVudTogbnVsbCxcbiAgb25Db2xSZW9yZGVyOiBudWxsLFxuICBvbkNlbGxDbGljazogbnVsbCxcbiAgb25DZWxsU2VsZWN0OiBudWxsLFxuICBvbkNlbGxVbnNlbGVjdDogbnVsbCxcbiAgb25Sb3dSZW9yZGVyOiBudWxsLFxuICBvblZhbHVlQ2hhbmdlOiBudWxsLFxuICByb3dFZGl0VmFsaWRhdG9yOiBudWxsLFxuICBvblJvd0VkaXRJbml0OiBudWxsLFxuICBvblJvd0VkaXRTYXZlOiBudWxsLFxuICBvblJvd0VkaXRDYW5jZWw6IG51bGwsXG4gIG9uUm93RWRpdENoYW5nZTogbnVsbCxcbiAgZXhwb3J0RnVuY3Rpb246IG51bGwsXG4gIGN1c3RvbVNhdmVTdGF0ZTogbnVsbCxcbiAgY3VzdG9tUmVzdG9yZVN0YXRlOiBudWxsLFxuICBvblN0YXRlU2F2ZTogbnVsbCxcbiAgb25TdGF0ZVJlc3RvcmU6IG51bGxcbn0pO1xuXG5leHBvcnQgeyBEYXRhVGFibGUgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzLCBPYmplY3RVdGlscyB9IGZyb20gJ3ByaW1lcmVhY3QvdXRpbHMnO1xuaW1wb3J0IHsgUmlwcGxlIH0gZnJvbSAncHJpbWVyZWFjdC9yaXBwbGUnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dG51bWJlcic7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlciQ4KERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDgoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDgoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIEZpcnN0UGFnZUxpbmsgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZpcnN0UGFnZUxpbmssIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkOChGaXJzdFBhZ2VMaW5rKTtcblxuICBmdW5jdGlvbiBGaXJzdFBhZ2VMaW5rKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaXJzdFBhZ2VMaW5rKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaXJzdFBhZ2VMaW5rLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtcGFnaW5hdG9yLWZpcnN0IHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rJywge1xuICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgIH0pO1xuICAgICAgdmFyIGljb25DbGFzc05hbWUgPSAncC1wYWdpbmF0b3ItaWNvbiBwaSBwaS1hbmdsZS1kb3VibGUtbGVmdCc7XG4gICAgICB2YXIgZWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGljayxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZVxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJpcHBsZSwgbnVsbCkpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy50ZW1wbGF0ZSkge1xuICAgICAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIGljb25DbGFzc05hbWU6IGljb25DbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLnRlbXBsYXRlLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaXJzdFBhZ2VMaW5rO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoRmlyc3RQYWdlTGluaywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHRlbXBsYXRlOiBudWxsXG59KTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDcoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNygpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNygpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgTmV4dFBhZ2VMaW5rID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOZXh0UGFnZUxpbmssIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkNyhOZXh0UGFnZUxpbmspO1xuXG4gIGZ1bmN0aW9uIE5leHRQYWdlTGluaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmV4dFBhZ2VMaW5rKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOZXh0UGFnZUxpbmssIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1wYWdpbmF0b3ItbmV4dCBwLXBhZ2luYXRvci1lbGVtZW50IHAtbGluaycsIHtcbiAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICB9KTtcbiAgICAgIHZhciBpY29uQ2xhc3NOYW1lID0gJ3AtcGFnaW5hdG9yLWljb24gcGkgcGktYW5nbGUtcmlnaHQnO1xuICAgICAgdmFyIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2ssXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSaXBwbGUsIG51bGwpKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMudGVtcGxhdGUpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGljayxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmdldEpTWEVsZW1lbnQodGhpcy5wcm9wcy50ZW1wbGF0ZSwgZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTmV4dFBhZ2VMaW5rO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoTmV4dFBhZ2VMaW5rLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DbGljazogbnVsbCxcbiAgdGVtcGxhdGU6IG51bGxcbn0pO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkNihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ2KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQ2KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBQcmV2UGFnZUxpbmsgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFByZXZQYWdlTGluaywgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQ2KFByZXZQYWdlTGluayk7XG5cbiAgZnVuY3Rpb24gUHJldlBhZ2VMaW5rKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmV2UGFnZUxpbmspO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByZXZQYWdlTGluaywgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLXBhZ2luYXRvci1wcmV2IHAtcGFnaW5hdG9yLWVsZW1lbnQgcC1saW5rJywge1xuICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgIH0pO1xuICAgICAgdmFyIGljb25DbGFzc05hbWUgPSAncC1wYWdpbmF0b3ItaWNvbiBwaSBwaS1hbmdsZS1sZWZ0JztcbiAgICAgIHZhciBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmlwcGxlLCBudWxsKSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnRlbXBsYXRlKSB7XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgaWNvbkNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMudGVtcGxhdGUsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByZXZQYWdlTGluaztcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFByZXZQYWdlTGluaywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHRlbXBsYXRlOiBudWxsXG59KTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDUoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgTGFzdFBhZ2VMaW5rID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMYXN0UGFnZUxpbmssIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkNShMYXN0UGFnZUxpbmspO1xuXG4gIGZ1bmN0aW9uIExhc3RQYWdlTGluaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGFzdFBhZ2VMaW5rKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMYXN0UGFnZUxpbmssIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1wYWdpbmF0b3ItbGFzdCBwLXBhZ2luYXRvci1lbGVtZW50IHAtbGluaycsIHtcbiAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICB9KTtcbiAgICAgIHZhciBpY29uQ2xhc3NOYW1lID0gJ3AtcGFnaW5hdG9yLWljb24gcGkgcGktYW5nbGUtZG91YmxlLXJpZ2h0JztcbiAgICAgIHZhciBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmlwcGxlLCBudWxsKSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnRlbXBsYXRlKSB7XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgaWNvbkNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMudGVtcGxhdGUsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExhc3RQYWdlTGluaztcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KExhc3RQYWdlTGluaywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHRlbXBsYXRlOiBudWxsXG59KTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDQoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkNCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgUGFnZUxpbmtzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYWdlTGlua3MsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkNChQYWdlTGlua3MpO1xuXG4gIGZ1bmN0aW9uIFBhZ2VMaW5rcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnZUxpbmtzKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYWdlTGlua3MsIFt7XG4gICAga2V5OiBcIm9uUGFnZUxpbmtDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblBhZ2VMaW5rQ2xpY2soZXZlbnQsIHBhZ2VMaW5rKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayh7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgdmFsdWU6IHBhZ2VMaW5rXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGVsZW1lbnRzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB2YXIgc3RhcnRQYWdlSW5WaWV3ID0gdGhpcy5wcm9wcy52YWx1ZVswXTtcbiAgICAgICAgdmFyIGVuZFBhZ2VJblZpZXcgPSB0aGlzLnByb3BzLnZhbHVlW3RoaXMucHJvcHMudmFsdWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5wcm9wcy52YWx1ZS5tYXAoZnVuY3Rpb24gKHBhZ2VMaW5rLCBpKSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtcGFnaW5hdG9yLXBhZ2UgcC1wYWdpbmF0b3ItZWxlbWVudCBwLWxpbmsnLCB7XG4gICAgICAgICAgICAncC1wYWdpbmF0b3ItcGFnZS1zdGFydCc6IHBhZ2VMaW5rID09PSBzdGFydFBhZ2VJblZpZXcsXG4gICAgICAgICAgICAncC1wYWdpbmF0b3ItcGFnZS1lbmQnOiBwYWdlTGluayA9PT0gZW5kUGFnZUluVmlldyxcbiAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6IHBhZ2VMaW5rIC0gMSA9PT0gX3RoaXMucHJvcHMucGFnZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblBhZ2VMaW5rQ2xpY2soZSwgcGFnZUxpbmspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHBhZ2VMaW5rLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSaXBwbGUsIG51bGwpKTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMub25QYWdlTGlua0NsaWNrKGUsIHBhZ2VMaW5rKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgIHZpZXc6IHtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2U6IHN0YXJ0UGFnZUluVmlldyAtIDEsXG4gICAgICAgICAgICAgICAgZW5kUGFnZTogZW5kUGFnZUluVmlldyAtIDFcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGFnZTogcGFnZUxpbmsgLSAxLFxuICAgICAgICAgICAgICBjdXJyZW50UGFnZTogX3RoaXMucHJvcHMucGFnZSxcbiAgICAgICAgICAgICAgdG90YWxQYWdlczogX3RoaXMucHJvcHMucGFnZUNvdW50LFxuICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICBwcm9wczogX3RoaXMucHJvcHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlbGVtZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudChfdGhpcy5wcm9wcy50ZW1wbGF0ZSwgZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge1xuICAgICAgICAgICAga2V5OiBwYWdlTGlua1xuICAgICAgICAgIH0sIGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJwLXBhZ2luYXRvci1wYWdlc1wiXG4gICAgICB9LCBlbGVtZW50cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhZ2VMaW5rcztcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFBhZ2VMaW5rcywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICB2YWx1ZTogbnVsbCxcbiAgcGFnZTogbnVsbCxcbiAgcm93czogbnVsbCxcbiAgcGFnZUNvdW50OiBudWxsLFxuICBsaW5rczogbnVsbCxcbiAgdGVtcGxhdGU6IG51bGxcbn0pO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMyhEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQzKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQzKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBSb3dzUGVyUGFnZURyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3dzUGVyUGFnZURyb3Bkb3duLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDMoUm93c1BlclBhZ2VEcm9wZG93bik7XG5cbiAgZnVuY3Rpb24gUm93c1BlclBhZ2VEcm9wZG93bigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm93c1BlclBhZ2VEcm9wZG93bik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm93c1BlclBhZ2VEcm9wZG93biwgW3tcbiAgICBrZXk6IFwiaGFzT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9ucyAmJiB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBoYXNPcHRpb25zID0gdGhpcy5oYXNPcHRpb25zKCk7XG4gICAgICB2YXIgb3B0aW9ucyA9IGhhc09wdGlvbnMgPyB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogU3RyaW5nKG9wdCksXG4gICAgICAgICAgdmFsdWU6IG9wdFxuICAgICAgICB9O1xuICAgICAgfSkgOiBbXTtcbiAgICAgIHZhciBlbGVtZW50ID0gaGFzT3B0aW9ucyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgYXBwZW5kVG86IHRoaXMucHJvcHMuYXBwZW5kVG8sXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICB9KSA6IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnRlbXBsYXRlKSB7XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIGFwcGVuZFRvOiB0aGlzLnByb3BzLmFwcGVuZFRvLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLnByb3BzLnBhZ2UsXG4gICAgICAgICAgdG90YWxQYWdlczogdGhpcy5wcm9wcy5wYWdlQ291bnQsXG4gICAgICAgICAgdG90YWxSZWNvcmRzOiB0aGlzLnByb3BzLnRvdGFsUmVjb3JkcyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMudGVtcGxhdGUsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvd3NQZXJQYWdlRHJvcGRvd247XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSb3dzUGVyUGFnZURyb3Bkb3duLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIG9wdGlvbnM6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICBwYWdlOiBudWxsLFxuICBwYWdlQ291bnQ6IG51bGwsXG4gIHRvdGFsUmVjb3JkczogMCxcbiAgYXBwZW5kVG86IG51bGwsXG4gIG9uQ2hhbmdlOiBudWxsLFxuICB0ZW1wbGF0ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59KTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgQ3VycmVudFBhZ2VSZXBvcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEN1cnJlbnRQYWdlUmVwb3J0LCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDIoQ3VycmVudFBhZ2VSZXBvcnQpO1xuXG4gIGZ1bmN0aW9uIEN1cnJlbnRQYWdlUmVwb3J0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDdXJyZW50UGFnZVJlcG9ydCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ3VycmVudFBhZ2VSZXBvcnQsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVwb3J0ID0ge1xuICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5wcm9wcy5wYWdlICsgMSxcbiAgICAgICAgdG90YWxQYWdlczogdGhpcy5wcm9wcy5wYWdlQ291bnQsXG4gICAgICAgIGZpcnN0OiBNYXRoLm1pbih0aGlzLnByb3BzLmZpcnN0ICsgMSwgdGhpcy5wcm9wcy50b3RhbFJlY29yZHMpLFxuICAgICAgICBsYXN0OiBNYXRoLm1pbih0aGlzLnByb3BzLmZpcnN0ICsgdGhpcy5wcm9wcy5yb3dzLCB0aGlzLnByb3BzLnRvdGFsUmVjb3JkcyksXG4gICAgICAgIHJvd3M6IHRoaXMucHJvcHMucm93cyxcbiAgICAgICAgdG90YWxSZWNvcmRzOiB0aGlzLnByb3BzLnRvdGFsUmVjb3Jkc1xuICAgICAgfTtcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5wcm9wcy5yZXBvcnRUZW1wbGF0ZS5yZXBsYWNlKFwie2N1cnJlbnRQYWdlfVwiLCByZXBvcnQuY3VycmVudFBhZ2UpLnJlcGxhY2UoXCJ7dG90YWxQYWdlc31cIiwgcmVwb3J0LnRvdGFsUGFnZXMpLnJlcGxhY2UoXCJ7Zmlyc3R9XCIsIHJlcG9ydC5maXJzdCkucmVwbGFjZShcIntsYXN0fVwiLCByZXBvcnQubGFzdCkucmVwbGFjZShcIntyb3dzfVwiLCByZXBvcnQucm93cykucmVwbGFjZShcInt0b3RhbFJlY29yZHN9XCIsIHJlcG9ydC50b3RhbFJlY29yZHMpO1xuICAgICAgdmFyIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicC1wYWdpbmF0b3ItY3VycmVudFwiXG4gICAgICB9LCB0ZXh0KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMudGVtcGxhdGUpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXBvcnQpLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncC1wYWdpbmF0b3ItY3VycmVudCcsXG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLnRlbXBsYXRlLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDdXJyZW50UGFnZVJlcG9ydDtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KEN1cnJlbnRQYWdlUmVwb3J0LCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIHBhZ2VDb3VudDogbnVsbCxcbiAgcGFnZTogbnVsbCxcbiAgZmlyc3Q6IG51bGwsXG4gIHJvd3M6IG51bGwsXG4gIHRvdGFsUmVjb3JkczogbnVsbCxcbiAgcmVwb3J0VGVtcGxhdGU6ICcoe2N1cnJlbnRQYWdlfSBvZiB7dG90YWxQYWdlc30pJyxcbiAgdGVtcGxhdGU6IG51bGxcbn0pO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMShEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBKdW1wVG9QYWdlSW5wdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEp1bXBUb1BhZ2VJbnB1dCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQxKEp1bXBUb1BhZ2VJbnB1dCk7XG5cbiAgZnVuY3Rpb24gSnVtcFRvUGFnZUlucHV0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEp1bXBUb1BhZ2VJbnB1dCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5vbkNoYW5nZSA9IF90aGlzLm9uQ2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhKdW1wVG9QYWdlSW5wdXQsIFt7XG4gICAga2V5OiBcIm9uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMucm93cyAqIChldmVudC52YWx1ZSAtIDEpLCB0aGlzLnByb3BzLnJvd3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5wYWdlQ291bnQgPiAwID8gdGhpcy5wcm9wcy5wYWdlICsgMSA6IDA7XG4gICAgICB2YXIgZWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0TnVtYmVyLCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgIGNsYXNzTmFtZTogXCJwLXBhZ2luYXRvci1wYWdlLWlucHV0XCIsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMudGVtcGxhdGUpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdwLXBhZ2luYXRvci1wYWdlLWlucHV0JyxcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5nZXRKU1hFbGVtZW50KHRoaXMucHJvcHMudGVtcGxhdGUsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEp1bXBUb1BhZ2VJbnB1dDtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KEp1bXBUb1BhZ2VJbnB1dCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBwYWdlOiBudWxsLFxuICByb3dzOiBudWxsLFxuICBwYWdlQ291bnQ6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgdGVtcGxhdGU6IG51bGwsXG4gIG9uQ2hhbmdlOiBudWxsXG59KTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgUGFnaW5hdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYWdpbmF0b3IsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUGFnaW5hdG9yKTtcblxuICBmdW5jdGlvbiBQYWdpbmF0b3IocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnaW5hdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLmNoYW5nZVBhZ2VUb0ZpcnN0ID0gX3RoaXMuY2hhbmdlUGFnZVRvRmlyc3QuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2hhbmdlUGFnZVRvUHJldiA9IF90aGlzLmNoYW5nZVBhZ2VUb1ByZXYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2hhbmdlUGFnZVRvTmV4dCA9IF90aGlzLmNoYW5nZVBhZ2VUb05leHQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuY2hhbmdlUGFnZVRvTGFzdCA9IF90aGlzLmNoYW5nZVBhZ2VUb0xhc3QuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Sb3dzQ2hhbmdlID0gX3RoaXMub25Sb3dzQ2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNoYW5nZVBhZ2UgPSBfdGhpcy5jaGFuZ2VQYWdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uUGFnZUxpbmtDbGljayA9IF90aGlzLm9uUGFnZUxpbmtDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFnaW5hdG9yLCBbe1xuICAgIGtleTogXCJpc0ZpcnN0UGFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZpcnN0UGFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFBhZ2UoKSA9PT0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNMYXN0UGFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0xhc3RQYWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZSgpID09PSB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGFnZUNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhZ2VDb3VudCgpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbFJlY29yZHMgLyB0aGlzLnByb3BzLnJvd3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYWxjdWxhdGVQYWdlTGlua0JvdW5kYXJpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlUGFnZUxpbmtCb3VuZGFyaWVzKCkge1xuICAgICAgdmFyIG51bWJlck9mUGFnZXMgPSB0aGlzLmdldFBhZ2VDb3VudCgpO1xuICAgICAgdmFyIHZpc2libGVQYWdlcyA9IE1hdGgubWluKHRoaXMucHJvcHMucGFnZUxpbmtTaXplLCBudW1iZXJPZlBhZ2VzKTsgLy9jYWxjdWxhdGUgcmFuZ2UsIGtlZXAgY3VycmVudCBpbiBtaWRkbGUgaWYgbmVjZXNzYXJ5XG5cbiAgICAgIHZhciBzdGFydCA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCh0aGlzLmdldFBhZ2UoKSAtIHZpc2libGVQYWdlcyAvIDIpKTtcbiAgICAgIHZhciBlbmQgPSBNYXRoLm1pbihudW1iZXJPZlBhZ2VzIC0gMSwgc3RhcnQgKyB2aXNpYmxlUGFnZXMgLSAxKTsgLy9jaGVjayB3aGVuIGFwcHJvYWNoaW5nIHRvIGxhc3QgcGFnZVxuXG4gICAgICB2YXIgZGVsdGEgPSB0aGlzLnByb3BzLnBhZ2VMaW5rU2l6ZSAtIChlbmQgLSBzdGFydCArIDEpO1xuICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCAtIGRlbHRhKTtcbiAgICAgIHJldHVybiBbc3RhcnQsIGVuZF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVBhZ2VMaW5rc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVQYWdlTGlua3MoKSB7XG4gICAgICB2YXIgcGFnZUxpbmtzID0gW107XG4gICAgICB2YXIgYm91bmRhcmllcyA9IHRoaXMuY2FsY3VsYXRlUGFnZUxpbmtCb3VuZGFyaWVzKCk7XG4gICAgICB2YXIgc3RhcnQgPSBib3VuZGFyaWVzWzBdO1xuICAgICAgdmFyIGVuZCA9IGJvdW5kYXJpZXNbMV07XG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICBwYWdlTGlua3MucHVzaChpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTGlua3M7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoYW5nZVBhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbmdlUGFnZShmaXJzdCwgcm93cykge1xuICAgICAgdmFyIHBjID0gdGhpcy5nZXRQYWdlQ291bnQoKTtcbiAgICAgIHZhciBwID0gTWF0aC5mbG9vcihmaXJzdCAvIHJvd3MpO1xuXG4gICAgICBpZiAocCA+PSAwICYmIHAgPCBwYykge1xuICAgICAgICB2YXIgbmV3UGFnZVN0YXRlID0ge1xuICAgICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIHBhZ2U6IHAsXG4gICAgICAgICAgcGFnZUNvdW50OiBwY1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKG5ld1BhZ2VTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYWdlKCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5wcm9wcy5maXJzdCAvIHRoaXMucHJvcHMucm93cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVtcHR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgdmFyIHBhZ2VDb3VudCA9IHRoaXMuZ2V0UGFnZUNvdW50KCk7XG4gICAgICByZXR1cm4gcGFnZUNvdW50ID09PSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2VQYWdlVG9GaXJzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VQYWdlVG9GaXJzdChldmVudCkge1xuICAgICAgdGhpcy5jaGFuZ2VQYWdlKDAsIHRoaXMucHJvcHMucm93cyk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2VQYWdlVG9QcmV2XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVBhZ2VUb1ByZXYoZXZlbnQpIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLnByb3BzLmZpcnN0IC0gdGhpcy5wcm9wcy5yb3dzLCB0aGlzLnByb3BzLnJvd3MpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25QYWdlTGlua0NsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUGFnZUxpbmtDbGljayhldmVudCkge1xuICAgICAgdGhpcy5jaGFuZ2VQYWdlKChldmVudC52YWx1ZSAtIDEpICogdGhpcy5wcm9wcy5yb3dzLCB0aGlzLnByb3BzLnJvd3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2VQYWdlVG9OZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVBhZ2VUb05leHQoZXZlbnQpIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLnByb3BzLmZpcnN0ICsgdGhpcy5wcm9wcy5yb3dzLCB0aGlzLnByb3BzLnJvd3MpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hhbmdlUGFnZVRvTGFzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VQYWdlVG9MYXN0KGV2ZW50KSB7XG4gICAgICB0aGlzLmNoYW5nZVBhZ2UoKHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSAqIHRoaXMucHJvcHMucm93cywgdGhpcy5wcm9wcy5yb3dzKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uUm93c0NoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJvd3NDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHZhciByb3dzID0gZXZlbnQudmFsdWU7XG4gICAgICB0aGlzLmlzUm93Q2hhbmdlZCA9IHJvd3MgIT09IHRoaXMucHJvcHMucm93cztcbiAgICAgIHRoaXMuY2hhbmdlUGFnZSgwLCByb3dzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMucm93cyAhPT0gcHJldlByb3BzLnJvd3MgJiYgIXRoaXMuaXNSb3dDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSgwLCB0aGlzLnByb3BzLnJvd3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFBhZ2UoKSA+IDAgJiYgcHJldlByb3BzLnRvdGFsUmVjb3JkcyAhPT0gdGhpcy5wcm9wcy50b3RhbFJlY29yZHMgJiYgdGhpcy5wcm9wcy5maXJzdCA+PSB0aGlzLnByb3BzLnRvdGFsUmVjb3Jkcykge1xuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoKHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSAqIHRoaXMucHJvcHMucm93cywgdGhpcy5wcm9wcy5yb3dzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1Jvd0NoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJFbGVtZW50KGtleSwgdGVtcGxhdGUpIHtcbiAgICAgIHZhciBlbGVtZW50O1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdGaXJzdFBhZ2VMaW5rJzpcbiAgICAgICAgICBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmlyc3RQYWdlTGluaywge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmNoYW5nZVBhZ2VUb0ZpcnN0LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNGaXJzdFBhZ2UoKSB8fCB0aGlzLmVtcHR5KCksXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQcmV2UGFnZUxpbmsnOlxuICAgICAgICAgIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQcmV2UGFnZUxpbmssIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5jaGFuZ2VQYWdlVG9QcmV2LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNGaXJzdFBhZ2UoKSB8fCB0aGlzLmVtcHR5KCksXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdOZXh0UGFnZUxpbmsnOlxuICAgICAgICAgIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOZXh0UGFnZUxpbmssIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5jaGFuZ2VQYWdlVG9OZXh0LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNMYXN0UGFnZSgpIHx8IHRoaXMuZW1wdHkoKSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xhc3RQYWdlTGluayc6XG4gICAgICAgICAgZWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExhc3RQYWdlTGluaywge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmNoYW5nZVBhZ2VUb0xhc3QsXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0xhc3RQYWdlKCkgfHwgdGhpcy5lbXB0eSgpLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZUxpbmtzJzpcbiAgICAgICAgICBlbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUxpbmtzLCB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5nZXRQYWdlKCksXG4gICAgICAgICAgICByb3dzOiB0aGlzLnByb3BzLnJvd3MsXG4gICAgICAgICAgICBwYWdlQ291bnQ6IHRoaXMuZ2V0UGFnZUNvdW50KCksXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uUGFnZUxpbmtDbGljayxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1Jvd3NQZXJQYWdlRHJvcGRvd24nOlxuICAgICAgICAgIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3dzUGVyUGFnZURyb3Bkb3duLCB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnJvd3MsXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmdldFBhZ2UoKSxcbiAgICAgICAgICAgIHBhZ2VDb3VudDogdGhpcy5nZXRQYWdlQ291bnQoKSxcbiAgICAgICAgICAgIHRvdGFsUmVjb3JkczogdGhpcy5wcm9wcy50b3RhbFJlY29yZHMsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uUm93c0NoYW5nZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiB0aGlzLnByb3BzLmRyb3Bkb3duQXBwZW5kVG8sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5lbXB0eSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQ3VycmVudFBhZ2VSZXBvcnQnOlxuICAgICAgICAgIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDdXJyZW50UGFnZVJlcG9ydCwge1xuICAgICAgICAgICAgcmVwb3J0VGVtcGxhdGU6IHRoaXMucHJvcHMuY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZSxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgcGFnZTogdGhpcy5nZXRQYWdlKCksXG4gICAgICAgICAgICBwYWdlQ291bnQ6IHRoaXMuZ2V0UGFnZUNvdW50KCksXG4gICAgICAgICAgICBmaXJzdDogdGhpcy5wcm9wcy5maXJzdCxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucHJvcHMucm93cyxcbiAgICAgICAgICAgIHRvdGFsUmVjb3JkczogdGhpcy5wcm9wcy50b3RhbFJlY29yZHMsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdKdW1wVG9QYWdlSW5wdXQnOlxuICAgICAgICAgIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKdW1wVG9QYWdlSW5wdXQsIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5nZXRQYWdlKCksXG4gICAgICAgICAgICBwYWdlQ291bnQ6IHRoaXMuZ2V0UGFnZUNvdW50KCksXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2VQYWdlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZW1wdHkoKSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJFbGVtZW50cygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnByb3BzLnRlbXBsYXRlO1xuXG4gICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgaWYgKF90eXBlb2YodGVtcGxhdGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5sYXlvdXQgPyB0ZW1wbGF0ZS5sYXlvdXQuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5yZW5kZXJFbGVtZW50KGtleSwgdGVtcGxhdGVba2V5XSk7XG4gICAgICAgICAgfSkgOiBPYmplY3QuZW50cmllcyh0ZW1wbGF0ZSkubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgICBrZXkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgICAgICBfdGVtcGxhdGUgPSBfcmVmMlsxXTtcblxuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5yZW5kZXJFbGVtZW50KGtleSwgX3RlbXBsYXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlckVsZW1lbnQodmFsdWUudHJpbSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmFsd2F5c1Nob3cgJiYgdGhpcy5nZXRQYWdlQ291bnQoKSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLXBhZ2luYXRvciBwLWNvbXBvbmVudCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgdmFyIGxlZnRDb250ZW50ID0gT2JqZWN0VXRpbHMuZ2V0SlNYRWxlbWVudCh0aGlzLnByb3BzLmxlZnRDb250ZW50LCB0aGlzLnByb3BzKTtcbiAgICAgICAgdmFyIHJpZ2h0Q29udGVudCA9IE9iamVjdFV0aWxzLmdldEpTWEVsZW1lbnQodGhpcy5wcm9wcy5yaWdodENvbnRlbnQsIHRoaXMucHJvcHMpO1xuICAgICAgICB2YXIgZWxlbWVudHMgPSB0aGlzLnJlbmRlckVsZW1lbnRzKCk7XG4gICAgICAgIHZhciBsZWZ0RWxlbWVudCA9IGxlZnRDb250ZW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1wYWdpbmF0b3ItbGVmdC1jb250ZW50XCJcbiAgICAgICAgfSwgbGVmdENvbnRlbnQpO1xuICAgICAgICB2YXIgcmlnaHRFbGVtZW50ID0gcmlnaHRDb250ZW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicC1wYWdpbmF0b3ItcmlnaHQtY29udGVudFwiXG4gICAgICAgIH0sIHJpZ2h0Q29udGVudCk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgfSwgbGVmdEVsZW1lbnQsIGVsZW1lbnRzLCByaWdodEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYWdpbmF0b3I7XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShQYWdpbmF0b3IsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgdG90YWxSZWNvcmRzOiAwLFxuICByb3dzOiAwLFxuICBmaXJzdDogMCxcbiAgcGFnZUxpbmtTaXplOiA1LFxuICByb3dzUGVyUGFnZU9wdGlvbnM6IG51bGwsXG4gIGFsd2F5c1Nob3c6IHRydWUsXG4gIHN0eWxlOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIHRlbXBsYXRlOiAnRmlyc3RQYWdlTGluayBQcmV2UGFnZUxpbmsgUGFnZUxpbmtzIE5leHRQYWdlTGluayBMYXN0UGFnZUxpbmsgUm93c1BlclBhZ2VEcm9wZG93bicsXG4gIG9uUGFnZUNoYW5nZTogbnVsbCxcbiAgbGVmdENvbnRlbnQ6IG51bGwsXG4gIHJpZ2h0Q29udGVudDogbnVsbCxcbiAgZHJvcGRvd25BcHBlbmRUbzogbnVsbCxcbiAgY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZTogJyh7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfSknXG59KTtcblxuZXhwb3J0IHsgUGFnaW5hdG9yIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSBcInByaW1lcmVhY3QvZmllbGRzZXRcIjtcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSBcInByaW1lcmVhY3QvaW5wdXR0ZXh0XCI7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcInByaW1lcmVhY3QvY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dG51bWJlclwiO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3ByaW1lcmVhY3QvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBsb2FkVXNlckVudGl0eVNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckVudGl0eVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5Rm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyRW50aXR5U2VsZWN0ZWQsIHNldFVzZXJFbnRpdHlTZWxlY3RlZF0gPSB1c2VTdGF0ZSh1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlTZWxlY3RlZFJlZHVjZXIudXNlckVudGl0eVNlbGVjdGVkKSk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94QWNjZXNzUHJvZmlsZXMsIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29tYm9Cb3hBY2Nlc3NQcm9maWxlLCBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdCwgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX2NvbWJvQm94QWNjZXNzUHJvZmlsZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUocmVzcG9uc2UuZGF0YVswXSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyRW50aXR5U2VsZWN0ZWQuaWQpIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHVzZXJFbnRpdHlTZWxlY3RlZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wdXQodXNlckVudGl0eVNlbGVjdGVkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBVVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5hbWUoZSkge1xyXG4gICAgICAgIGxldCB1c2VyRW50aXR5QXV4ID0geyAuLi51c2VyRW50aXR5U2VsZWN0ZWQgfTtcclxuICAgICAgICB1c2VyRW50aXR5QXV4Lm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRVc2VyRW50aXR5U2VsZWN0ZWQodXNlckVudGl0eUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VFbWFpbChlKSB7XHJcbiAgICAgICAgbGV0IHVzZXJFbnRpdHlBdXggPSB7IC4uLnVzZXJFbnRpdHlTZWxlY3RlZCB9O1xyXG4gICAgICAgIHVzZXJFbnRpdHlBdXguZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRVc2VyRW50aXR5U2VsZWN0ZWQodXNlckVudGl0eUF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWNjZXNzUHJvZmlsZUNvbWJvQm94KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS52YWx1ZSB9KS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZShjb21ib0JveEFjY2Vzc1Byb2ZpbGVzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUFjY2Vzc1Byb2ZpbGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCA9IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCAhPT0gcm93RGF0YS5pZCB9KTtcclxuICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZXNBdXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzO1xyXG4gICAgICAgIGNvbWJvQm94QWNjZXNzUHJvZmlsZXNBdXgucHVzaCh7IHZhbHVlOiByb3dEYXRhLmlkLCBsYWJlbDogcm93RGF0YS5uYW1lIH0pO1xyXG4gICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlc0F1eCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEFjY2Vzc1Byb2ZpbGUoY29tYm9Cb3hBY2Nlc3NQcm9maWxlc0F1eFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGdW5jdGlvbmFsaXR5KHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19IGxlZ2VuZD1cIkNhZGFzdHJvIGRlIFVzdcOhcmlvc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJuYW1lXCIgdmFsdWU9e3VzZXJFbnRpdHlTZWxlY3RlZCAmJiB1c2VyRW50aXR5U2VsZWN0ZWQubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU5hbWUoZSl9IGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RS1tYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImVtYWlsXCIgdmFsdWU9e3VzZXJFbnRpdHlTZWxlY3RlZCAmJiB1c2VyRW50aXR5U2VsZWN0ZWQuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VFbWFpbChlKX0gY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY2Vzc1Byb2ZpbGVzXCI+UGVyZmlzIGRlIEFjZXNzbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBlbXB0eU1lc3NhZ2U9XCJOZW5odW0gUGVyZmlsIGRlIEFjZXNzbyBEaXNwb27DrXZlbFwiIGNsYXNzTmFtZT1cImlucHV0ZmllbGRcIiBvcHRpb25WYWx1ZT1cInZhbHVlXCIgb3B0aW9uTGFiZWw9XCJsYWJlbFwiIG9wdGlvbnM9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXN9IHZhbHVlPXtzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZSAmJiBzZWxlY3RlZENvbWJvQm94QWNjZXNzUHJvZmlsZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBY2Nlc3NQcm9maWxlQ29tYm9Cb3goZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVMYXlvdXQ9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJTZWxlY2lvbmFkb1wiIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17eyB3aWR0aDogXCIzZW1cIiB9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5hbWVcIiBoZWFkZXI9XCJGdW5jaW9uYWxpZGFkZVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJFbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiYmFjay1idXR0b25cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX0gbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJTYWx2YXJcIiBvbkNsaWNrPXtfc2F2ZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChVc2VyRW50aXR5Rm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==