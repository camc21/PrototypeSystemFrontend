webpackHotUpdate_N_E("pages/accessProfile/form",{

/***/ "./pages/accessProfile/form.jsx":
/*!**************************************!*\
  !*** ./pages/accessProfile/form.jsx ***!
  \**************************************/
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
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox/checkbox.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/AccessProfileDataService */ "./services/AccessProfileDataService.jsx");
/* harmony import */ var _services_FunctionalityDataService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/FunctionalityDataService */ "./services/FunctionalityDataService.jsx");
/* harmony import */ var _store_actions_accessProfile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/accessProfile */ "./store/actions/accessProfile/index.jsx");




var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\accessProfile\\form.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















function AccessProfileForm(props) {
  _s();

  var _this = this;

  var accessProfileSelectedRedux = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.accessProfileSelectedReducer.accessProfileSelected;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      comboBoxFunctionalities = _useState[0],
      setComboBoxFunctionalities = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    id: null,
    name: "",
    description: "",
    permissions: []
  }),
      accessProfileData = _useState2[0],
      setAccessProfileData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      selectedComboBoxFunctionality = _useState3[0],
      setSelectedComboBoxFunctionality = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dataTablePermission = _useState4[0],
      setDataTablePermission = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    readingPermission: false,
    writingPermission: false
  }),
      permissions = _useState5[0],
      setPermissions = _useState5[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _services_FunctionalityDataService__WEBPACK_IMPORTED_MODULE_17__["FunctionalityDataService"]._comboBox().then(function (response) {
      var comboBoxAux = [];

      if (accessProfileSelectedRedux && accessProfileSelectedRedux.permissions) {
        var _loop = function _loop(i) {
          for (var j = 0; j < accessProfileSelectedRedux.permissions.length; j++) {
            var value = accessProfileSelectedRedux.permissions.find(function (item) {
              return item.id === response.data[i].value;
            });

            if (!value) {
              comboBoxAux.push(response.data[i]);
              break;
            }
          }
        };

        for (var i = 0; i < response.data.length; i++) {
          _loop(i);
        }

        setComboBoxFunctionalities(comboBoxAux);
        setSelectedComboBoxFunctionality(comboBoxAux[0]);
      } else {
        setComboBoxFunctionalities(response.data);
        setSelectedComboBoxFunctionality(response.data[0]);
      }
    })["catch"](function (error) {
      switch (error.response.status) {
        case 401:
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: error.response.data.message,
            life: 5000
          });
          break;

        case 404:
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: "Serviço indisponível",
            life: 5000
          });
          break;

        default:
          toast.current.show({
            severity: "warn",
            summary: "Aviso",
            detail: "Erro no sistema, contate o administrador",
            life: 5000
          });
          break;
      }
    });
  }, [accessProfileSelectedRedux]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (accessProfileSelectedRedux && accessProfileSelectedRedux.permissions) {
      console.log(accessProfileSelectedRedux);
      var accessProfileDataAux = {};
      accessProfileDataAux.id = accessProfileSelectedRedux.id;
      accessProfileDataAux.name = accessProfileSelectedRedux.name;
      accessProfileDataAux.description = accessProfileSelectedRedux.description;
      setAccessProfileData(accessProfileDataAux);
      setDataTablePermission(accessProfileSelectedRedux.permissions);
    }
  }, [accessProfileSelectedRedux]);

  function _save() {
    var accessProfileDataAux = accessProfileData;
    accessProfileDataAux.permissions = dataTablePermission;

    if (!accessProfileDataAux.id) {
      _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_16__["AccessProfileDataService"]._post(accessProfileDataAux).then(function (response) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro criado com sucesso!",
          life: 5000
        });
        setTimeout(function () {
          console.log("EXECUTADO POST");
          router.push("/accessProfile");
        }, 3000);
      });
    } else {
      _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_16__["AccessProfileDataService"]._put(accessProfileDataAux).then(function (response) {
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro alterado com sucesso!",
          life: 5000
        });
        setTimeout(function () {
          console.log("EXECUTADO PUT");
          router.push("/accessProfile");
        }, 3000);
      });
    }
  }

  function onChangeName(e) {
    setAccessProfileData(_objectSpread(_objectSpread({}, accessProfileData), {}, {
      name: e.target.value
    }));
  }

  function onChangeDescription(e) {
    setAccessProfileData(_objectSpread(_objectSpread({}, accessProfileData), {}, {
      description: e.target.value
    }));
  }

  function handleFunctionalityComboBox(value) {
    var index = comboBoxFunctionalities.map(function (item) {
      return item.value;
    }).indexOf(value);

    if (index >= 0) {
      setSelectedComboBoxFunctionality(comboBoxFunctionalities[index]);
    }
  }

  function onChangeReadingPermission(e) {
    setPermissions(_objectSpread(_objectSpread({}, permissions), {}, {
      readingPermission: e.checked
    }));
  }

  function onChangeWritingPermission(e) {
    setPermissions(_objectSpread(_objectSpread({}, permissions), {}, {
      writingPermission: e.checked
    }));
  }

  var addFunctionality = function addFunctionality() {
    var dataTablePermissionAux = dataTablePermission;
    dataTablePermissionAux.push({
      id: selectedComboBoxFunctionality.value,
      name: selectedComboBoxFunctionality.label,
      readingPermission: permissions.readingPermission,
      writingPermission: permissions.writingPermission
    });
    var comboBoxFunctionalitiesAux = comboBoxFunctionalities.filter(function (item) {
      return item.label !== selectedComboBoxFunctionality.label;
    }); //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox

    setComboBoxFunctionalities(comboBoxFunctionalitiesAux); //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades

    setSelectedComboBoxFunctionality(comboBoxFunctionalitiesAux[0]); //atualiza a tabela com os dados da funcionalidade e as permissões da mesma

    setDataTablePermission(dataTablePermissionAux); //atualiza os checkbox com permissões setando os mesmo como false após adicionar

    setPermissions({
      readingPermission: false,
      writingPermission: false
    });
  };

  var removeFunctionality = function removeFunctionality(rowData) {
    var dataTablePermissionAux = dataTablePermission.filter(function (item) {
      return item.id !== rowData.id;
    });
    setDataTablePermission(dataTablePermissionAux);
    var comboBoxFunctionalitiesAux = comboBoxFunctionalities;
    comboBoxFunctionalitiesAux.push({
      value: rowData.id,
      label: rowData.name
    });
    setComboBoxFunctionalities(comboBoxFunctionalitiesAux);
    setSelectedComboBoxFunctionality(comboBoxFunctionalitiesAux[0]);
  };

  function convertBooleanToText(value) {
    if (value) {
      return "Sim";
    }

    return "Não";
  }

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return removeFunctionality(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_6__["Fieldset"], {
      style: {
        marginTop: "15px"
      },
      legend: "Cadastro de Perfis de Acesso",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Nome: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
          className: "inputfield w-full",
          id: "name",
          value: accessProfileData.name,
          onChange: function onChange(e) {
            return onChangeName(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "desciption",
          children: "Descri\xE7\xE3o:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
          className: "inputfield w-full",
          id: "description",
          value: accessProfileData.description,
          onChange: function onChange(e) {
            return onChangeDescription(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "formgroup-inline flex align-items-stretch flex-wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "functionalities",
            children: "Funcionalidades:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_13__["Dropdown"], {
            className: "inputfield w-full",
            optionValue: "value",
            optionLabel: "label",
            options: comboBoxFunctionalities,
            value: selectedComboBoxFunctionality && selectedComboBoxFunctionality.value,
            onChange: function onChange(e) {
              return handleFunctionalityComboBox(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "field-checkbox flex align-items-center justify-content-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
            inputId: "readingPermission",
            checked: permissions.readingPermission,
            onChange: function onChange(e) {
              return onChangeReadingPermission(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "readingPermission",
            children: "Permiss\xE3o de leitura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "field-checkbox flex align-items-center justify-content-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
            inputId: "writingPermission",
            checked: permissions.writingPermission,
            onChange: function onChange(e) {
              return onChangeWritingPermission(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "writingPermission",
            children: "Permiss\xE3o de escrita"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "field flex align-items-center justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            id: "back-button",
            label: "Adicionar",
            onClick: addFunctionality,
            disabled: comboBoxFunctionalities.length < 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_11__["DataTable"], {
          scrollHeight: "300px",
          scrollable: true,
          value: dataTablePermission,
          responsiveLayout: "scroll",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            header: "Selecionado",
            selectionMode: "single",
            headerStyle: {
              width: "3em"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: "name",
            header: "Funcionalidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: function field(e) {
              return convertBooleanToText(e.readingPermission);
            },
            header: "Leitura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: function field(e) {
              return convertBooleanToText(e.writingPermission);
            },
            header: "Escrita"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            body: actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/accessProfile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          id: "back-button",
          style: {
            marginRight: "15px"
          },
          label: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(AccessProfileForm, "lzKH4xcLX1Jw+SblmI0a8wRK1lc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = AccessProfileForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_14__["default"])(AccessProfileForm));

var _c, _c2;

$RefreshReg$(_c, "AccessProfileForm");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJBY2Nlc3NQcm9maWxlRm9ybSIsInByb3BzIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdWNlciIsImFjY2Vzc1Byb2ZpbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwiY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMiLCJzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJhY2Nlc3NQcm9maWxlRGF0YSIsInNldEFjY2Vzc1Byb2ZpbGVEYXRhIiwic2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkiLCJzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eSIsImRhdGFUYWJsZVBlcm1pc3Npb24iLCJzZXREYXRhVGFibGVQZXJtaXNzaW9uIiwicmVhZGluZ1Blcm1pc3Npb24iLCJ3cml0aW5nUGVybWlzc2lvbiIsInNldFBlcm1pc3Npb25zIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiRnVuY3Rpb25hbGl0eURhdGFTZXJ2aWNlIiwiX2NvbWJvQm94IiwidGhlbiIsInJlc3BvbnNlIiwiY29tYm9Cb3hBdXgiLCJpIiwiaiIsImxlbmd0aCIsInZhbHVlIiwiZmluZCIsIml0ZW0iLCJkYXRhIiwicHVzaCIsImVycm9yIiwic3RhdHVzIiwiY3VycmVudCIsInNob3ciLCJzZXZlcml0eSIsInN1bW1hcnkiLCJkZXRhaWwiLCJtZXNzYWdlIiwibGlmZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NQcm9maWxlRGF0YUF1eCIsIl9zYXZlIiwiQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIiwiX3Bvc3QiLCJzZXRUaW1lb3V0IiwiX3B1dCIsIm9uQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJvbkNoYW5nZURlc2NyaXB0aW9uIiwiaGFuZGxlRnVuY3Rpb25hbGl0eUNvbWJvQm94IiwiaW5kZXgiLCJtYXAiLCJpbmRleE9mIiwib25DaGFuZ2VSZWFkaW5nUGVybWlzc2lvbiIsImNoZWNrZWQiLCJvbkNoYW5nZVdyaXRpbmdQZXJtaXNzaW9uIiwiYWRkRnVuY3Rpb25hbGl0eSIsImRhdGFUYWJsZVBlcm1pc3Npb25BdXgiLCJsYWJlbCIsImNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4IiwiZmlsdGVyIiwicmVtb3ZlRnVuY3Rpb25hbGl0eSIsInJvd0RhdGEiLCJjb252ZXJ0Qm9vbGVhblRvVGV4dCIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsIm1hcmdpblRvcCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBSUEsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUE7O0FBQUE7O0FBRTlCLE1BQU1DLDBCQUEwQixHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLDRCQUFOLENBQW1DQyxxQkFBOUM7QUFBQSxHQUFELENBQTlDOztBQUY4QixrQkFJZ0NDLHNEQUFRLENBQUMsRUFBRCxDQUp4QztBQUFBLE1BSXZCQyx1QkFKdUI7QUFBQSxNQUlFQywwQkFKRjs7QUFBQSxtQkFNb0JGLHNEQUFRLENBQUM7QUFBRUcsTUFBRSxFQUFFLElBQU47QUFBWUMsUUFBSSxFQUFFLEVBQWxCO0FBQXNCQyxlQUFXLEVBQUUsRUFBbkM7QUFBdUNDLGVBQVcsRUFBRTtBQUFwRCxHQUFELENBTjVCO0FBQUEs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RDtBQUFBLHFCQUFPaUIsb0JBQW9CLENBQUNqQixDQUFDLENBQUN4QyxpQkFBSCxDQUEzQjtBQUFBLGFBQWY7QUFBaUUsa0JBQU0sRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLGVBU0kscUVBQUMseURBQUQ7QUFBUSxnQkFBSSxFQUFFMEQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0osZUFpREkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFRLFlBQUUsRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBRTtBQUFFRyx1QkFBVyxFQUFFO0FBQWYsV0FBaEM7QUFBeUQsZUFBSyxFQUFDO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakRKLGVBcURJLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBdUIsZUFBTyxFQUFFM0I7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBOERIOztHQWhOUXZELGlCO1VBRThCRyx1RCxFQVVwQnVCLHFELEVBQ0VFLHVEOzs7S0FiWjVCLGlCO0FBa05NLHFFQUFBbUYscUVBQVEsQ0FBQ25GLGlCQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjY2Vzc1Byb2ZpbGUvZm9ybS44NzA0NzU3MjFjOGUxZjM3MzBjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gXCJwcmltZXJlYWN0L2ZpZWxkc2V0XCI7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ3ByaW1lcmVhY3QvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcclxuXHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuXHJcbmltcG9ydCBcInByaW1lZmxleC9wcmltZWZsZXguY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxpdHlEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9GdW5jdGlvbmFsaXR5RGF0YVNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IGxvYWRBY2Nlc3NQcm9maWxlU2VsZWN0ZWRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY2Nlc3NQcm9maWxlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFjY2Vzc1Byb2ZpbGVGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHVjZXIuYWNjZXNzUHJvZmlsZVNlbGVjdGVkKTtcclxuXHJcbiAgICBjb25zdCBbY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMsIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbYWNjZXNzUHJvZmlsZURhdGEsIHNldEFjY2Vzc1Byb2ZpbGVEYXRhXSA9IHVzZVN0YXRlKHsgaWQ6IG51bGwsIG5hbWU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwZXJtaXNzaW9uczogW10gfSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHksIHNldFNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtkYXRhVGFibGVQZXJtaXNzaW9uLCBzZXREYXRhVGFibGVQZXJtaXNzaW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJtaXNzaW9ucywgc2V0UGVybWlzc2lvbnNdID0gdXNlU3RhdGUoeyByZWFkaW5nUGVybWlzc2lvbjogZmFsc2UsIHdyaXRpbmdQZXJtaXNzaW9uOiBmYWxzZSB9KTtcclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgRnVuY3Rpb25hbGl0eURhdGFTZXJ2aWNlLl9jb21ib0JveCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29tYm9Cb3hBdXggPSBbXTtcclxuICAgICAgICAgICAgaWYgKGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4ICYmIGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4LnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4LnBlcm1pc3Npb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4LnBlcm1pc3Npb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSByZXNwb25zZS5kYXRhW2ldLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJvQm94QXV4LnB1c2gocmVzcG9uc2UuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMoY29tYm9Cb3hBdXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkoY29tYm9Cb3hBdXhbMF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eShyZXNwb25zZS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbGlmZTogNTAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcIndhcm5cIiwgc3VtbWFyeTogXCJBdmlzb1wiLCBkZXRhaWw6IFwiU2VydmnDp28gaW5kaXNwb27DrXZlbFwiLCBsaWZlOiA1MDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIkVycm8gbm8gc2lzdGVtYSwgY29udGF0ZSBvIGFkbWluaXN0cmFkb3JcIiwgbGlmZTogNTAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXhdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eCAmJiBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eCk7XHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NQcm9maWxlRGF0YUF1eCA9IHt9O1xyXG4gICAgICAgICAgICBhY2Nlc3NQcm9maWxlRGF0YUF1eC5pZCA9IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4LmlkO1xyXG4gICAgICAgICAgICBhY2Nlc3NQcm9maWxlRGF0YUF1eC5uYW1lID0gYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgubmFtZTtcclxuICAgICAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXguZGVzY3JpcHRpb24gPSBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgc2V0QWNjZXNzUHJvZmlsZURhdGEoYWNjZXNzUHJvZmlsZURhdGFBdXgpO1xyXG4gICAgICAgICAgICBzZXREYXRhVGFibGVQZXJtaXNzaW9uKGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4LnBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXhdKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuICAgICAgICBsZXQgYWNjZXNzUHJvZmlsZURhdGFBdXggPSBhY2Nlc3NQcm9maWxlRGF0YTtcclxuICAgICAgICBhY2Nlc3NQcm9maWxlRGF0YUF1eC5wZXJtaXNzaW9ucyA9IGRhdGFUYWJsZVBlcm1pc3Npb247XHJcbiAgICAgICAgaWYgKCFhY2Nlc3NQcm9maWxlRGF0YUF1eC5pZCkge1xyXG4gICAgICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX3Bvc3QoYWNjZXNzUHJvZmlsZURhdGFBdXgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGNyaWFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogNTAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjZXNzUHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZS5fcHV0KGFjY2Vzc1Byb2ZpbGVEYXRhQXV4KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogNTAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBVVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hY2Nlc3NQcm9maWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlTmFtZShlKSB7XHJcbiAgICAgICAgc2V0QWNjZXNzUHJvZmlsZURhdGEoeyAuLi5hY2Nlc3NQcm9maWxlRGF0YSwgbmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZURlc2NyaXB0aW9uKGUpIHtcclxuICAgICAgICBzZXRBY2Nlc3NQcm9maWxlRGF0YSh7IC4uLmFjY2Vzc1Byb2ZpbGVEYXRhLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGdW5jdGlvbmFsaXR5Q29tYm9Cb3godmFsdWUpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS52YWx1ZSB9KS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eShjb21ib0JveEZ1bmN0aW9uYWxpdGllc1tpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVJlYWRpbmdQZXJtaXNzaW9uKGUpIHtcclxuICAgICAgICBzZXRQZXJtaXNzaW9ucyh7IC4uLnBlcm1pc3Npb25zLCByZWFkaW5nUGVybWlzc2lvbjogZS5jaGVja2VkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlV3JpdGluZ1Blcm1pc3Npb24oZSkge1xyXG4gICAgICAgIHNldFBlcm1pc3Npb25zKHsgLi4ucGVybWlzc2lvbnMsIHdyaXRpbmdQZXJtaXNzaW9uOiBlLmNoZWNrZWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YVRhYmxlUGVybWlzc2lvbkF1eCA9IGRhdGFUYWJsZVBlcm1pc3Npb247XHJcbiAgICAgICAgZGF0YVRhYmxlUGVybWlzc2lvbkF1eC5wdXNoKHsgaWQ6IHNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5LnZhbHVlLCBuYW1lOiBzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eS5sYWJlbCwgcmVhZGluZ1Blcm1pc3Npb246IHBlcm1pc3Npb25zLnJlYWRpbmdQZXJtaXNzaW9uLCB3cml0aW5nUGVybWlzc2lvbjogcGVybWlzc2lvbnMud3JpdGluZ1Blcm1pc3Npb24gfSk7XHJcbiAgICAgICAgbGV0IGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4ID0gY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbCAhPT0gc2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkubGFiZWwpO1xyXG5cclxuICAgICAgICAvL2F0dWFsaXphIGNvbWJvYm94IGRhcyBmdW5jaW9uYWxpZGFkZSBkZWl4YW5kbyBhcGVuYXMgYSBmdW5jaW9uYWxpZGFkZXMgbsOjbyBhZGljaW9uYWRhcyBubyBjb21ib2JveFxyXG4gICAgICAgIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzKGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4KTtcclxuICAgICAgICAvL2F0dWFsaXphIGEgZnVuY2lvbmFsaWRhZGUgc2VsZWNpb25hZGEgYXDDs3MgYSBhdHVhbGl6YcOnw6NvIGRvIGFycmF5IGRlIGZ1bmNpb2FsaWRhZGVzXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkoY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXhbMF0pO1xyXG4gICAgICAgIC8vYXR1YWxpemEgYSB0YWJlbGEgY29tIG9zIGRhZG9zIGRhIGZ1bmNpb25hbGlkYWRlIGUgYXMgcGVybWlzc8O1ZXMgZGEgbWVzbWFcclxuICAgICAgICBzZXREYXRhVGFibGVQZXJtaXNzaW9uKGRhdGFUYWJsZVBlcm1pc3Npb25BdXgpO1xyXG4gICAgICAgIC8vYXR1YWxpemEgb3MgY2hlY2tib3ggY29tIHBlcm1pc3PDtWVzIHNldGFuZG8gb3MgbWVzbW8gY29tbyBmYWxzZSBhcMOzcyBhZGljaW9uYXJcclxuICAgICAgICBzZXRQZXJtaXNzaW9ucyh7IHJlYWRpbmdQZXJtaXNzaW9uOiBmYWxzZSwgd3JpdGluZ1Blcm1pc3Npb246IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZ1bmN0aW9uYWxpdHkgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhVGFibGVQZXJtaXNzaW9uQXV4ID0gZGF0YVRhYmxlUGVybWlzc2lvbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgIT09IHJvd0RhdGEuaWQgfSk7XHJcbiAgICAgICAgc2V0RGF0YVRhYmxlUGVybWlzc2lvbihkYXRhVGFibGVQZXJtaXNzaW9uQXV4KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4ID0gY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXM7XHJcbiAgICAgICAgY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXgucHVzaCh7IHZhbHVlOiByb3dEYXRhLmlkLCBsYWJlbDogcm93RGF0YS5uYW1lIH0pO1xyXG4gICAgICAgIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzKGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4KTtcclxuICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eShjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVydEJvb2xlYW5Ub1RleHQodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiU2ltXCI7XHJcbiAgICAgICAgfSByZXR1cm4gXCJOw6NvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGdW5jdGlvbmFsaXR5KHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZHNldCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19IGxlZ2VuZD1cIkNhZGFzdHJvIGRlIFBlcmZpcyBkZSBBY2Vzc29cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgaWQ9XCJuYW1lXCIgdmFsdWU9e2FjY2Vzc1Byb2ZpbGVEYXRhLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VOYW1lKGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY2lwdGlvblwiPkRlc2NyacOnw6NvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiIGlkPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT17YWNjZXNzUHJvZmlsZURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VEZXNjcmlwdGlvbihlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWdyb3VwLWlubGluZSBmbGV4IGFsaWduLWl0ZW1zLXN0cmV0Y2ggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZ1bmN0aW9uYWxpdGllc1wiPkZ1bmNpb25hbGlkYWRlczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiBvcHRpb25WYWx1ZT1cInZhbHVlXCIgb3B0aW9uTGFiZWw9XCJsYWJlbFwiIG9wdGlvbnM9e2NvbWJvQm94RnVuY3Rpb25hbGl0aWVzfSB2YWx1ZT17c2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkgJiYgc2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRnVuY3Rpb25hbGl0eUNvbWJvQm94KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1jaGVja2JveCBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBpbnB1dElkPVwicmVhZGluZ1Blcm1pc3Npb25cIiBjaGVja2VkPXtwZXJtaXNzaW9ucy5yZWFkaW5nUGVybWlzc2lvbn0gb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VSZWFkaW5nUGVybWlzc2lvbihlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWFkaW5nUGVybWlzc2lvblwiPlBlcm1pc3PDo28gZGUgbGVpdHVyYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtY2hlY2tib3ggZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggaW5wdXRJZD1cIndyaXRpbmdQZXJtaXNzaW9uXCIgY2hlY2tlZD17cGVybWlzc2lvbnMud3JpdGluZ1Blcm1pc3Npb259IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlV3JpdGluZ1Blcm1pc3Npb24oZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid3JpdGluZ1Blcm1pc3Npb25cIj5QZXJtaXNzw6NvIGRlIGVzY3JpdGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgbGFiZWw9XCJBZGljaW9uYXJcIiBvbkNsaWNrPXthZGRGdW5jdGlvbmFsaXR5fSBkaXNhYmxlZD17Y29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMubGVuZ3RoIDwgMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFUYWJsZVBlcm1pc3Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVMYXlvdXQ9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJTZWxlY2lvbmFkb1wiIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17eyB3aWR0aDogXCIzZW1cIiB9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cIm5hbWVcIiBoZWFkZXI9XCJGdW5jaW9uYWxpZGFkZVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPXsoZSkgPT4gY29udmVydEJvb2xlYW5Ub1RleHQoZS5yZWFkaW5nUGVybWlzc2lvbil9IGhlYWRlcj1cIkxlaXR1cmFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD17KGUpID0+IGNvbnZlcnRCb29sZWFuVG9UZXh0KGUud3JpdGluZ1Blcm1pc3Npb24pfSBoZWFkZXI9XCJFc2NyaXRhXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2Nlc3NQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FsdmFyXCIgb25DbGljaz17X3NhdmV9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQWNjZXNzUHJvZmlsZUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=