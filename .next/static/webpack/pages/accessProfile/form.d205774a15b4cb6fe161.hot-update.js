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
      accessProfileId: accessProfileSelectedRedux.id,
      functionalityName: selectedComboBoxFunctionality.label,
      functonalityId: selectedComboBoxFunctionality.value,
      profileDescription: accessProfileSelectedRedux.description,
      profileName: accessProfileSelectedRedux.name,
      readPermission: permissions.readingPermission,
      writePermission: permissions.writingPermission
    });
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
        lineNumber: 169,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
      ref: toast
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
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
          lineNumber: 180,
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
          lineNumber: 181,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "desciption",
          children: "Descri\xE7\xE3o:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
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
          lineNumber: 186,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
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
            lineNumber: 191,
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
            lineNumber: 192,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
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
            lineNumber: 196,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "readingPermission",
            children: "Permiss\xE3o de leitura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
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
            lineNumber: 201,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "writingPermission",
            children: "Permiss\xE3o de escrita"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
            lineNumber: 206,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
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
            lineNumber: 216,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: "functionalityName",
            header: "Funcionalidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: function field(e) {
              return convertBooleanToText(e.readPermission);
            },
            header: "Leitura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            field: function field(e) {
              return convertBooleanToText(e.writePermission);
            },
            header: "Escrita"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_12__["Column"], {
            body: actionBodyTemplate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
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
          lineNumber: 227,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        label: "Salvar",
        onClick: _save
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjZXNzUHJvZmlsZS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJBY2Nlc3NQcm9maWxlRm9ybSIsInByb3BzIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdWNlciIsImFjY2Vzc1Byb2ZpbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwiY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMiLCJzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJhY2Nlc3NQcm9maWxlRGF0YSIsInNldEFjY2Vzc1Byb2ZpbGVEYXRhIiwic2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkiLCJzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eSIsImRhdGFUYWJsZVBlcm1pc3Npb24iLCJzZXREYXRhVGFibGVQZXJtaXNzaW9uIiwicmVhZGluZ1Blcm1pc3Npb24iLCJ3cml0aW5nUGVybWlzc2lvbiIsInNldFBlcm1pc3Npb25zIiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiRnVuY3Rpb25hbGl0eURhdGFTZXJ2aWNlIiwiX2NvbWJvQm94IiwidGhlbiIsInJlc3BvbnNlIiwiY29tYm9Cb3hBdXgiLCJpIiwiaiIsImxlbmd0aCIsInZhbHVlIiwiZmluZCIsIml0ZW0iLCJmdW5jdG9uYWxpdHlJZCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJzdGF0dXMiLCJjdXJyZW50Iiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIm1lc3NhZ2UiLCJsaWZlIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc1Byb2ZpbGVEYXRhQXV4IiwiX3NhdmUiLCJBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UiLCJfcG9zdCIsInNldFRpbWVvdXQiLCJfcHV0Iiwib25DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsIm9uQ2hhbmdlRGVzY3JpcHRpb24iLCJoYW5kbGVGdW5jdGlvbmFsaXR5Q29tYm9Cb3giLCJpbmRleCIsIm1hcCIsImluZGV4T2YiLCJvbkNoYW5nZVJlYWRpbmdQZXJtaXNzaW9uIiwiY2hlY2tlZCIsIm9uQ2hhbmdlV3JpdGluZ1Blcm1pc3Npb24iLCJhZGRGdW5jdGlvbmFsaXR5IiwiZGF0YVRhYmxlUGVybWlzc2lvbkF1eCIsImFjY2Vzc1Byb2ZpbGVJZCIsImZ1bmN0aW9uYWxpdHlOYW1lIiwibGFiZWwiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJwcm9maWxlTmFtZSIsInJlYWRQZXJtaXNzaW9uIiwid3JpdGVQZXJtaXNzaW9uIiwiY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXgiLCJmaWx0ZXIiLCJyZW1vdmVGdW5jdGlvbmFsaXR5Iiwicm93RGF0YSIsImNvbnZlcnRCb29sZWFuVG9UZXh0IiwiYWN0aW9uQm9keVRlbXBsYXRlIiwibWFyZ2luVG9wIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQTs7QUFBQTs7QUFFOUIsTUFBTUMsMEJBQTBCLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsNEJBQU4sQ0FBbUNDLHFCQUE5QztBQUFBLEdBQUQsQ0FBOUM7O0FBRjhCLGtCQUlnQ0Msc0RBQVEsQ0FBQyxFQUFELENBSnhDO0FBQUEsTUFJdkJDLHVCQUp1QjtBQUFBLE1BSUVDLDBCQUpGOztBQUFB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QUssRUFBQyxRQUFkO0FBQXVCLGVBQU8sRUFBRWpDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQThESDs7R0FqTlF4RCxpQjtVQUU4QkcsdUQsRUFVcEJ1QixxRCxFQUNFRSx1RDs7O0tBYlo1QixpQjtBQW1OTSxxRUFBQTBGLHFFQUFRLENBQUMxRixpQkFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2Nlc3NQcm9maWxlL2Zvcm0uZDIwNTc3NGExNWI0Y2I2ZmUxNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdwcmltZXJlYWN0L2NoZWNrYm94JztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0FjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsaXR5RGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvRnVuY3Rpb25hbGl0eURhdGFTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBsb2FkQWNjZXNzUHJvZmlsZVNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWNjZXNzUHJvZmlsZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBY2Nlc3NQcm9maWxlRm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1Y2VyLmFjY2Vzc1Byb2ZpbGVTZWxlY3RlZCk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94RnVuY3Rpb25hbGl0aWVzLCBzZXRDb21ib0JveEZ1bmN0aW9uYWxpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2FjY2Vzc1Byb2ZpbGVEYXRhLCBzZXRBY2Nlc3NQcm9maWxlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkOiBudWxsLCBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGVybWlzc2lvbnM6IFtdIH0pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5LCBzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YVRhYmxlUGVybWlzc2lvbiwgc2V0RGF0YVRhYmxlUGVybWlzc2lvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGVybWlzc2lvbnMsIHNldFBlcm1pc3Npb25zXSA9IHVzZVN0YXRlKHsgcmVhZGluZ1Blcm1pc3Npb246IGZhbHNlLCB3cml0aW5nUGVybWlzc2lvbjogZmFsc2UgfSk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEZ1bmN0aW9uYWxpdHlEYXRhU2VydmljZS5fY29tYm9Cb3goKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbWJvQm94QXV4ID0gW107XHJcbiAgICAgICAgICAgIGlmIChhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eCAmJiBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5mdW5jdG9uYWxpdHlJZCA9PT0gcmVzcG9uc2UuZGF0YVtpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21ib0JveEF1eC5wdXNoKHJlc3BvbnNlLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzKGNvbWJvQm94QXV4KTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5KGNvbWJvQm94QXV4WzBdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENvbWJvQm94RnVuY3Rpb25hbGl0aWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkocmVzcG9uc2UuZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJ3YXJuXCIsIHN1bW1hcnk6IFwiQXZpc29cIiwgZGV0YWlsOiBcIlNlcnZpw6dvIGluZGlzcG9uw612ZWxcIiwgbGlmZTogNTAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwid2FyblwiLCBzdW1tYXJ5OiBcIkF2aXNvXCIsIGRldGFpbDogXCJFcnJvIG5vIHNpc3RlbWEsIGNvbnRhdGUgbyBhZG1pbmlzdHJhZG9yXCIsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW2FjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXggJiYgYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgucGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXgpO1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzUHJvZmlsZURhdGFBdXggPSB7fTtcclxuICAgICAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXguaWQgPSBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5pZDtcclxuICAgICAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXgubmFtZSA9IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4Lm5hbWU7XHJcbiAgICAgICAgICAgIGFjY2Vzc1Byb2ZpbGVEYXRhQXV4LmRlc2NyaXB0aW9uID0gYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXguZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVEYXRhKGFjY2Vzc1Byb2ZpbGVEYXRhQXV4KTtcclxuICAgICAgICAgICAgc2V0RGF0YVRhYmxlUGVybWlzc2lvbihhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5wZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4XSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX3NhdmUoKSB7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Byb2ZpbGVEYXRhQXV4ID0gYWNjZXNzUHJvZmlsZURhdGE7XHJcbiAgICAgICAgYWNjZXNzUHJvZmlsZURhdGFBdXgucGVybWlzc2lvbnMgPSBkYXRhVGFibGVQZXJtaXNzaW9uO1xyXG4gICAgICAgIGlmICghYWNjZXNzUHJvZmlsZURhdGFBdXguaWQpIHtcclxuICAgICAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9wb3N0KGFjY2Vzc1Byb2ZpbGVEYXRhQXV4KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBjcmlhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQT1NUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FjY2Vzc1Byb2ZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX3B1dChhY2Nlc3NQcm9maWxlRGF0YUF1eCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjZXNzUHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5hbWUoZSkge1xyXG4gICAgICAgIHNldEFjY2Vzc1Byb2ZpbGVEYXRhKHsgLi4uYWNjZXNzUHJvZmlsZURhdGEsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VEZXNjcmlwdGlvbihlKSB7XHJcbiAgICAgICAgc2V0QWNjZXNzUHJvZmlsZURhdGEoeyAuLi5hY2Nlc3NQcm9maWxlRGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRnVuY3Rpb25hbGl0eUNvbWJvQm94KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb21ib0JveEZ1bmN0aW9uYWxpdGllcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udmFsdWUgfSkuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkoY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNbaW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VSZWFkaW5nUGVybWlzc2lvbihlKSB7XHJcbiAgICAgICAgc2V0UGVybWlzc2lvbnMoeyAuLi5wZXJtaXNzaW9ucywgcmVhZGluZ1Blcm1pc3Npb246IGUuY2hlY2tlZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVdyaXRpbmdQZXJtaXNzaW9uKGUpIHtcclxuICAgICAgICBzZXRQZXJtaXNzaW9ucyh7IC4uLnBlcm1pc3Npb25zLCB3cml0aW5nUGVybWlzc2lvbjogZS5jaGVja2VkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFUYWJsZVBlcm1pc3Npb25BdXggPSBkYXRhVGFibGVQZXJtaXNzaW9uO1xyXG4gICAgICAgIGRhdGFUYWJsZVBlcm1pc3Npb25BdXgucHVzaCh7IGFjY2Vzc1Byb2ZpbGVJZDogYWNjZXNzUHJvZmlsZVNlbGVjdGVkUmVkdXguaWQsIGZ1bmN0aW9uYWxpdHlOYW1lOiBzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eS5sYWJlbCwgIGZ1bmN0b25hbGl0eUlkOiBzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eS52YWx1ZSwgcHJvZmlsZURlc2NyaXB0aW9uOiBhY2Nlc3NQcm9maWxlU2VsZWN0ZWRSZWR1eC5kZXNjcmlwdGlvbiwgcHJvZmlsZU5hbWU6IGFjY2Vzc1Byb2ZpbGVTZWxlY3RlZFJlZHV4Lm5hbWUsIHJlYWRQZXJtaXNzaW9uOiBwZXJtaXNzaW9ucy5yZWFkaW5nUGVybWlzc2lvbiwgd3JpdGVQZXJtaXNzaW9uOiBwZXJtaXNzaW9ucy53cml0aW5nUGVybWlzc2lvbiB9KTtcclxuICAgICAgICBkYXRhVGFibGVQZXJtaXNzaW9uQXV4LnB1c2goeyBpZDogc2VsZWN0ZWRDb21ib0JveEZ1bmN0aW9uYWxpdHkudmFsdWUsIG5hbWU6IHNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5LmxhYmVsLCByZWFkaW5nUGVybWlzc2lvbjogcGVybWlzc2lvbnMucmVhZGluZ1Blcm1pc3Npb24sIHdyaXRpbmdQZXJtaXNzaW9uOiBwZXJtaXNzaW9ucy53cml0aW5nUGVybWlzc2lvbiB9KTtcclxuICAgICAgICBsZXQgY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXggPSBjb21ib0JveEZ1bmN0aW9uYWxpdGllcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsICE9PSBzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eS5sYWJlbCk7XHJcblxyXG4gICAgICAgIC8vYXR1YWxpemEgY29tYm9ib3ggZGFzIGZ1bmNpb25hbGlkYWRlIGRlaXhhbmRvIGFwZW5hcyBhIGZ1bmNpb25hbGlkYWRlcyBuw6NvIGFkaWNpb25hZGFzIG5vIGNvbWJvYm94XHJcbiAgICAgICAgc2V0Q29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMoY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXgpO1xyXG4gICAgICAgIC8vYXR1YWxpemEgYSBmdW5jaW9uYWxpZGFkZSBzZWxlY2lvbmFkYSBhcMOzcyBhIGF0dWFsaXphw6fDo28gZG8gYXJyYXkgZGUgZnVuY2lvYWxpZGFkZXNcclxuICAgICAgICBzZXRTZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eShjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eFswXSk7XHJcbiAgICAgICAgLy9hdHVhbGl6YSBhIHRhYmVsYSBjb20gb3MgZGFkb3MgZGEgZnVuY2lvbmFsaWRhZGUgZSBhcyBwZXJtaXNzw7VlcyBkYSBtZXNtYVxyXG4gICAgICAgIHNldERhdGFUYWJsZVBlcm1pc3Npb24oZGF0YVRhYmxlUGVybWlzc2lvbkF1eCk7XHJcbiAgICAgICAgLy9hdHVhbGl6YSBvcyBjaGVja2JveCBjb20gcGVybWlzc8O1ZXMgc2V0YW5kbyBvcyBtZXNtbyBjb21vIGZhbHNlIGFww7NzIGFkaWNpb25hclxyXG4gICAgICAgIHNldFBlcm1pc3Npb25zKHsgcmVhZGluZ1Blcm1pc3Npb246IGZhbHNlLCB3cml0aW5nUGVybWlzc2lvbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRnVuY3Rpb25hbGl0eSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFUYWJsZVBlcm1pc3Npb25BdXggPSBkYXRhVGFibGVQZXJtaXNzaW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCAhPT0gcm93RGF0YS5pZCB9KTtcclxuICAgICAgICBzZXREYXRhVGFibGVQZXJtaXNzaW9uKGRhdGFUYWJsZVBlcm1pc3Npb25BdXgpO1xyXG5cclxuICAgICAgICBsZXQgY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXggPSBjb21ib0JveEZ1bmN0aW9uYWxpdGllcztcclxuICAgICAgICBjb21ib0JveEZ1bmN0aW9uYWxpdGllc0F1eC5wdXNoKHsgdmFsdWU6IHJvd0RhdGEuaWQsIGxhYmVsOiByb3dEYXRhLm5hbWUgfSk7XHJcbiAgICAgICAgc2V0Q29tYm9Cb3hGdW5jdGlvbmFsaXRpZXMoY29tYm9Cb3hGdW5jdGlvbmFsaXRpZXNBdXgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ29tYm9Cb3hGdW5jdGlvbmFsaXR5KGNvbWJvQm94RnVuY3Rpb25hbGl0aWVzQXV4WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0Qm9vbGVhblRvVGV4dCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJTaW1cIjtcclxuICAgICAgICB9IHJldHVybiBcIk7Do29cIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZ1bmN0aW9uYWxpdHkocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkc2V0IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX0gbGVnZW5kPVwiQ2FkYXN0cm8gZGUgUGVyZmlzIGRlIEFjZXNzb1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIiBpZD1cIm5hbWVcIiB2YWx1ZT17YWNjZXNzUHJvZmlsZURhdGEubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU5hbWUoZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjaXB0aW9uXCI+RGVzY3Jpw6fDo286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXthY2Nlc3NQcm9maWxlRGF0YS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZURlc2NyaXB0aW9uKGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtZ3JvdXAtaW5saW5lIGZsZXggYWxpZ24taXRlbXMtc3RyZXRjaCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVuY3Rpb25hbGl0aWVzXCI+RnVuY2lvbmFsaWRhZGVzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiIG9wdGlvblZhbHVlPVwidmFsdWVcIiBvcHRpb25MYWJlbD1cImxhYmVsXCIgb3B0aW9ucz17Y29tYm9Cb3hGdW5jdGlvbmFsaXRpZXN9IHZhbHVlPXtzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eSAmJiBzZWxlY3RlZENvbWJvQm94RnVuY3Rpb25hbGl0eS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGdW5jdGlvbmFsaXR5Q29tYm9Cb3goZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWNoZWNrYm94IGZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlucHV0SWQ9XCJyZWFkaW5nUGVybWlzc2lvblwiIGNoZWNrZWQ9e3Blcm1pc3Npb25zLnJlYWRpbmdQZXJtaXNzaW9ufSBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZVJlYWRpbmdQZXJtaXNzaW9uKGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlYWRpbmdQZXJtaXNzaW9uXCI+UGVybWlzc8OjbyBkZSBsZWl0dXJhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1jaGVja2JveCBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBpbnB1dElkPVwid3JpdGluZ1Blcm1pc3Npb25cIiBjaGVja2VkPXtwZXJtaXNzaW9ucy53cml0aW5nUGVybWlzc2lvbn0gb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VXcml0aW5nUGVybWlzc2lvbihlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3cml0aW5nUGVybWlzc2lvblwiPlBlcm1pc3PDo28gZGUgZXNjcml0YTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiYmFjay1idXR0b25cIiBsYWJlbD1cIkFkaWNpb25hclwiIG9uQ2xpY2s9e2FkZEZ1bmN0aW9uYWxpdHl9IGRpc2FibGVkPXtjb21ib0JveEZ1bmN0aW9uYWxpdGllcy5sZW5ndGggPCAxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVRhYmxlUGVybWlzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZUxheW91dD1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGhlYWRlcj1cIlNlbGVjaW9uYWRvXCIgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7IHdpZHRoOiBcIjNlbVwiIH19PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZnVuY3Rpb25hbGl0eU5hbWVcIiBoZWFkZXI9XCJGdW5jaW9uYWxpZGFkZVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPXsoZSkgPT4gY29udmVydEJvb2xlYW5Ub1RleHQoZS5yZWFkUGVybWlzc2lvbil9IGhlYWRlcj1cIkxlaXR1cmFcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD17KGUpID0+IGNvbnZlcnRCb29sZWFuVG9UZXh0KGUud3JpdGVQZXJtaXNzaW9uKX0gaGVhZGVyPVwiRXNjcml0YVwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjZXNzUHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJiYWNrLWJ1dHRvblwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fSBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhbHZhclwiIG9uQ2xpY2s9e19zYXZlfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFjY2Vzc1Byb2ZpbGVGb3JtKTsiXSwic291cmNlUm9vdCI6IiJ9