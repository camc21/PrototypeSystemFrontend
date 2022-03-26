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
              return item.functonalityId === response.data[i].value;
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
            field: "functionalityName",
            header: "Funcionalidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: function field(e) {
              return convertBooleanToText(e.readPermission);
            },
            header: "Leitura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: function field(e) {
              return convertBooleanToText(e.writePermission);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJBY2Nlc3NQcm9maWxlRm9ybSIsInByb3BzIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdWNlciIsImFjY2Vzc1Byb2ZpbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwiY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMiLCJzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJhY2Nlc3NQcm9maWxlRGF0YSIsInNldEFjY2Vzc1Byb2ZpbGVEYXRhIiwic2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkiLCJzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eSIsImRhdGFUYWJsZVBlcm1pc3Npb24iLCJzZXREYXRhVGFibGVQZXJtaXNzaW9uIiwicmVhZGluZ1Blcm1pc3Npb24iLCJ3cml0aW5nUGVybWlzc2lvbiIsInNldFBlcm1pc3Npb25zIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiRnVuY3Rpb25hbGl0eURhdGFTZXJ2aWNlIiwiX2NvbWJvQm94IiwidGhlbiIsInJlc3BvbnNlIiwiY29tYm9Cb3hBdXgiLCJpIiwiaiIsImxlbmd0aCIsInZhbHVlIiwiZmluZCIsIml0ZW0iLCJmdW5jdG9uYWxpdHlJZCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJzdGF0dXMiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc1Byb2ZpbGVEYXRhQXV4IiwiX3NhdmUiLCJBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UiLCJfcG9zdCIsInNldFRpbWVvdXQiLCJfcHV0Iiwib25DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsIm9uQ2hhbmdlRGVzY3JpcHRpb24iLCJoYW5kbGVGdW5jdGlvbmFsaXR5Q29tYm9Cb3giLCJpbmRleCIsIm1hcCIsImluZGV4T2YiLCJvbkNoYW5nZVJlYWRpbmdQZXJtaXNzaW9uIiwiY2hlY2tlZCIsIm9uQ2hhbmdlV3JpdGluZ1Blcm1pc3Npb24iLCJhZGRGdW5jdGlvbmFsaXR5IiwiZGF0YVRhYmxlUGVybWlzc2lvbkF1eCIsImxhYmVsIiwiY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXgiLCJmaWx0ZXIiLCJyZW1vdmVGdW5jdGlvbmFsaXR5Iiwicm93RGF0YSIsImNvbnZlcnRCb29sZWFuVG9UZXh0IiwiYWN0aW9uQm9keVRlbXBsYXRlIiwibWFyZ2luVG9wIiwid2lkdGgiLCJyZWFkUGVybWlzc2lvbiIsIndyaXRlUGVybWlzc2lvbiIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUlBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBOztBQUU5QixNQUFNQywwQkFBMEIsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyw0QkFBTixDQUFtQ0MscUJBQTlDO0FBQUEsR0FBRCxDQUE5Qzs7QUFGOEIsa0JBSWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FKeEM7QUFBQSxNQUl2QkMsdUJBSnVCO0FBQUEsTUFJRUMsMEJBSkY7O0FBQUEsbUJBTW9CRixzREFBUSxDQUFDO0FBQUVHLE1BQUUsRUFBRSxJQUFOO0FBQVlDLFFBQUksRUFBRSxFQUFsQjtBQUFzQkMsZUFB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QSxrQkFQSixlQVFJLHFFQUFDLHlEQUFEO0FBQVEsaUJBQUssRUFBRSxlQUFDckIsQ0FBRDtBQUFBLHFCQUFPaUIsb0JBQW9CLENBQUNqQixDQUFDLENBQUNzQixlQUFILENBQTNCO0FBQUEsYUFBZjtBQUErRCxrQkFBTSxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkosZUFTSSxxRUFBQyx5REFBRDtBQUFRLGdCQUFJLEVBQUVKO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNKLGVBaURJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGdCQUFYO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxZQUFFLEVBQUMsYUFBWDtBQUF5QixlQUFLLEVBQUU7QUFBRUssdUJBQVcsRUFBRTtBQUFmLFdBQWhDO0FBQXlELGVBQUssRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpESixlQXFESSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQXVCLGVBQU8sRUFBRTdCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQThESDs7R0FoTlF4RCxpQjtVQUU4QkcsdUQsRUFVcEJ1QixxRCxFQUNFRSx1RDs7O0tBYlo1QixpQjtBQWtOTSxxRUFBQXNGLHFFQUFRLENBQUN0RixpQkFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2Nlc3NQcm9maWxlL2Zvcm0uM2NiNDU2YWYxNTg0M2IyMjdmN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdwcmltZXJlYWN0L2NoZWNrYm94JztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0FjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsaXR5RGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvRnVuY3Rpb25hbGl0eURhdGFTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWNjZXNzUHJvZmlsZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBY2Nlc3NQcm9maWxlRm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1Y2VyLmFjY2Vzc1Byb2ZpbGVTZWxlY3RlZCk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94RnVuY3Rpb25hbGl0aWVzLCBzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2FjY2Vzc1Byb2ZpbGVEYXRhLCBzZXRBY2Nlc3NQcm9maWxlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkOiBudWxsLCBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGVybWlzc2lvbnM6IFtdIH0pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5LCBzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YVRhYmxlUGVybWlzc2lvbiwgc2V0RGF0YVRhYmxlUGVybWlzc2lvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGVybWlzc2lvbnMsIHNldFBlcm1pc3Npb25zXSA9IHVzZVN0YXRlKHsgcmVhZGluZ1Blcm1pc3Npb246IGZhbHNlLCB3cml0aW5nUGVybWlzc2lvbjogZmFsc2UgfSk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEZ1bmN0aW9uYWxpdHlEYXRhU2VydmljZS5fY29tYm9Cb3goKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbWJvQm94QXV4ID0gW107XHJcbiAgICAgICAgICAgIGlmIChhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eCAmJiBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5mdW5jdG9uYWxpdHlJZCA9PT0gcmVzcG9uc2UuZGF0YVtpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21ib0JveEF1eC5wdXNoKHJlc3BvbnNlLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzKGNvbWJvQm94QXV4KTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5KGNvbWJvQm94QXV4WzBdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkocmVzcG9uc2UuZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlNlcnZpw6dvIGluZGlzcG9uw612ZWxcIiwgbGlmZTogNTAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJFcnJvIG5vIHNpc3RlbWEsIGNvbnRhdGUgbyBhZG1pbmlzdHJhZG9yXCIsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW2FjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXggJiYgYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgucGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgpO1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzUHJvZmlsZURhdGFBdXggPSB7fTtcclxuICAgICAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXguaWQgPSBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5pZDtcclxuICAgICAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXgubmFtZSA9IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4Lm5hbWU7XHJcbiAgICAgICAgICAgIGFjY2Vzc1Byb2ZpbGVEYXRhQXV4LmRlc2NyaXB0aW9uID0gYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXguZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVEYXRhKGFjY2Vzc1Byb2ZpbGVEYXRhQXV4KTtcclxuICAgICAgICAgICAgc2V0RGF0YVRhYmxlUGVybWlzc2lvbihhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4XSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX3NhdmUoKSB7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Byb2ZpbGVEYXRhQXV4ID0gYWNjZXNzUHJvZmlsZURhdGE7XHJcbiAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXgucGVybWlzc2lvbnMgPSBkYXRhVGFibGVQZXJtaXNzaW9uO1xyXG4gICAgICAgIGlmICghYWNjZXNzUHJvZmlsZURhdGFBdXguaWQpIHtcclxuICAgICAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9wb3N0KGFjY2Vzc1Byb2ZpbGVEYXRhQXV4KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBjcmlhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQT1NUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FjY2Vzc1Byb2ZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX3B1dChhY2Nlc3NQcm9maWxlRGF0YUF1eCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjZXNzUHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5hbWUoZSkge1xyXG4gICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVEYXRhKHsgLi4uYWNjZXNzUHJvZmlsZURhdGEsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VEZXNjcmlwdGlvbihlKSB7XHJcbiAgICAgICAgc2V0QWNjZXNzUHJvZmlsZURhdGEoeyAuLi5hY2Nlc3NQcm9maWxlRGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRnVuY3Rpb25hbGl0eUNvbWJvQm94KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb21ib0JveEZ1bmN0aW9uYWxpdGllcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udmFsdWUgfSkuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkoY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNbaW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VSZWFkaW5nUGVybWlzc2lvbihlKSB7XHJcbiAgICAgICAgc2V0UGVybWlzc2lvbnMoeyAuLi5wZXJtaXNzaW9ucywgcmVhZGluZ1Blcm1pc3Npb246IGUuY2hlY2tlZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVdyaXRpbmdQZXJtaXNzaW9uKGUpIHtcclxuICAgICAgICBzZXRQZXJtaXNzaW9ucyh7IC4uLnBlcm1pc3Npb25zLCB3cml0aW5nUGVybWlzc2lvbjogZS5jaGVja2VkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFUYWJsZVBlcm1pc3Npb25BdXggPSBkYXRhVGFibGVQZXJtaXNzaW9uO1xyXG4gICAgICAgIGRhdGFUYWJsZVBlcm1pc3Npb25BdXgucHVzaCh7IGlkOiBzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eS52YWx1ZSwgbmFtZTogc2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkubGFiZWwsIHJlYWRpbmdQZXJtaXNzaW9uOiBwZXJtaXNzaW9ucy5yZWFkaW5nUGVybWlzc2lvbiwgd3JpdGluZ1Blcm1pc3Npb246IHBlcm1pc3Npb25zLndyaXRpbmdQZXJtaXNzaW9uIH0pO1xyXG4gICAgICAgIGxldCBjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eCA9IGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzLmZpbHRlcihpdGVtID0+IGl0ZW0ubGFiZWwgIT09IHNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5LmxhYmVsKTtcclxuXHJcbiAgICAgICAgLy9hdHVhbGl6YSBjb21ib2JveCBkYXMgZnVuY2lvbmFsaWRhZGUgZGVpeGFuZG8gYXBlbmFzIGEgZnVuY2lvbmFsaWRhZGVzIG7Do28gYWRpY2lvbmFkYXMgbm8gY29tYm9ib3hcclxuICAgICAgICBzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllcyhjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eCk7XHJcbiAgICAgICAgLy9hdHVhbGl6YSBhIGZ1bmNpb25hbGlkYWRlIHNlbGVjaW9uYWRhIGFww7NzIGEgYXR1YWxpemHDp8OjbyBkbyBhcnJheSBkZSBmdW5jaW9hbGlkYWRlc1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5KGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4WzBdKTtcclxuICAgICAgICAvL2F0dWFsaXphIGEgdGFiZWxhIGNvbSBvcyBkYWRvcyBkYSBmdW5jaW9uYWxpZGFkZSBlIGFzIHBlcm1pc3PDtWVzIGRhIG1lc21hXHJcbiAgICAgICAgc2V0RGF0YVRhYmxlUGVybWlzc2lvbihkYXRhVGFibGVQZXJtaXNzaW9uQXV4KTtcclxuICAgICAgICAvL2F0dWFsaXphIG9zIGNoZWNrYm94IGNvbSBwZXJtaXNzw7VlcyBzZXRhbmRvIG9zIG1lc21vIGNvbW8gZmFsc2UgYXDDs3MgYWRpY2lvbmFyXHJcbiAgICAgICAgc2V0UGVybWlzc2lvbnMoeyByZWFkaW5nUGVybWlzc2lvbjogZmFsc2UsIHdyaXRpbmdQZXJtaXNzaW9uOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVGdW5jdGlvbmFsaXR5ID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBsZXQgZGF0YVRhYmxlUGVybWlzc2lvbkF1eCA9IGRhdGFUYWJsZVBlcm1pc3Npb24uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkICE9PSByb3dEYXRhLmlkIH0pO1xyXG4gICAgICAgIHNldERhdGFUYWJsZVBlcm1pc3Npb24oZGF0YVRhYmxlUGVybWlzc2lvbkF1eCk7XHJcblxyXG4gICAgICAgIGxldCBjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eCA9IGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzO1xyXG4gICAgICAgIGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4LnB1c2goeyB2YWx1ZTogcm93RGF0YS5pZCwgbGFiZWw6IHJvd0RhdGEubmFtZSB9KTtcclxuICAgICAgICBzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllcyhjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkoY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXhbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRCb29sZWFuVG9UZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNpbVwiO1xyXG4gICAgICAgIH0gcmV0dXJuIFwiTsOjb1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkJvZHlUZW1wbGF0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlRnVuY3Rpb25hbGl0eShyb3dEYXRhKX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICA8RmllbGRzZXQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fSBsZWdlbmQ9XCJDYWRhc3RybyBkZSBQZXJmaXMgZGUgQWNlc3NvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiIGlkPVwibmFtZVwiIHZhbHVlPXthY2Nlc3NQcm9maWxlRGF0YS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlTmFtZShlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NpcHRpb25cIj5EZXNjcmnDp8Ojbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiBpZD1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e2FjY2Vzc1Byb2ZpbGVEYXRhLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRGVzY3JpcHRpb24oZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ncm91cC1pbmxpbmUgZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdW5jdGlvbmFsaXRpZXNcIj5GdW5jaW9uYWxpZGFkZXM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgb3B0aW9uVmFsdWU9XCJ2YWx1ZVwiIG9wdGlvbkxhYmVsPVwibGFiZWxcIiBvcHRpb25zPXtjb21ib0JveEZ1bmN0aW9uYWxpdGllc30gdmFsdWU9e3NlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5ICYmIHNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZ1bmN0aW9uYWxpdHlDb21ib0JveChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtY2hlY2tib3ggZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggaW5wdXRJZD1cInJlYWRpbmdQZXJtaXNzaW9uXCIgY2hlY2tlZD17cGVybWlzc2lvbnMucmVhZGluZ1Blcm1pc3Npb259IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlUmVhZGluZ1Blcm1pc3Npb24oZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVhZGluZ1Blcm1pc3Npb25cIj5QZXJtaXNzw6NvIGRlIGxlaXR1cmE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWNoZWNrYm94IGZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlucHV0SWQ9XCJ3cml0aW5nUGVybWlzc2lvblwiIGNoZWNrZWQ9e3Blcm1pc3Npb25zLndyaXRpbmdQZXJtaXNzaW9ufSBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZVdyaXRpbmdQZXJtaXNzaW9uKGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndyaXRpbmdQZXJtaXNzaW9uXCI+UGVybWlzc8OjbyBkZSBlc2NyaXRhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIGxhYmVsPVwiQWRpY2lvbmFyXCIgb25DbGljaz17YWRkRnVuY3Rpb25hbGl0eX0gZGlzYWJsZWQ9e2NvbWJvQm94RnVuY3Rpb25hbGl0aWVzLmxlbmd0aCA8IDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhVGFibGVQZXJtaXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlTGF5b3V0PVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJmdW5jdGlvbmFsaXR5TmFtZVwiIGhlYWRlcj1cIkZ1bmNpb25hbGlkYWRlXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9eyhlKSA9PiBjb252ZXJ0Qm9vbGVhblRvVGV4dChlLnJlYWRQZXJtaXNzaW9uKX0gaGVhZGVyPVwiTGVpdHVyYVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPXsoZSkgPT4gY29udmVydEJvb2xlYW5Ub1RleHQoZS53cml0ZVBlcm1pc3Npb24pfSBoZWFkZXI9XCJFc2NyaXRhXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2Nlc3NQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJhY2stYnV0dG9uXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FsdmFyXCIgb25DbGljaz17X3NhdmV9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQWNjZXNzUHJvZmlsZUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=