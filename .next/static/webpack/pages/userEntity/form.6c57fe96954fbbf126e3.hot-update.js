webpackHotUpdate_N_E("pages/userEntity/form",{

/***/ "./pages/userEntity/form.jsx":
/*!***********************************!*\
  !*** ./pages/userEntity/form.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_fieldset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/fieldset */ "./node_modules/primereact/fieldset/fieldset.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox/checkbox.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");
/* harmony import */ var primereact_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/password */ "./node_modules/primereact/password/password.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/withAuth */ "./components/withAuth.jsx");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeflex/primeflex.css */ "./node_modules/primeflex/primeflex.css");
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/UserEntityDataService */ "./services/UserEntityDataService.jsx");
/* harmony import */ var _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/AccessProfileDataService */ "./services/AccessProfileDataService.jsx");




var _jsxFileName = "D:\\PROJETOS\\PrototypeSystemFrontend\\pages\\userEntity\\form.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJETOS_PrototypeSystemFrontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















function UserEntityForm(props) {
  _s();

  var _this = this;

  var userEntitySelectedRedux = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.userEntitySelectedReducer.userEntitySelected;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedLocalData = _useState[0],
      setSelectedLocalData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      comboBoxAccessProfiles = _useState2[0],
      setComboBoxAccessProfiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedAccessProfilesList = _useState3[0],
      setSelectedAccessProfileList = _useState3[1];

  var toast = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    mode: 'onChange'
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      errors = _useForm.errors,
      getValues = _useForm.getValues;

  var onSubmit = function onSubmit(data) {
    var userLogin = {};
    userLogin.idUserEntity = userEntitySelectedRedux ? userEntitySelectedRedux.idUserEntity : null;
    userLogin.idLogin = userEntitySelectedRedux ? userEntitySelectedRedux.idLogin : null;
    userLogin.name = data.name;
    userLogin.email = data.email;

    if (data.password) {
      var bcrypt = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(data.password, salt);
      userLogin.password = hash;
    }

    userLogin.accessProfileList = selectedAccessProfilesList;
    console.log(userLogin);

    if (!userLogin.idUserEntity) {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__["UserEntityDataService"]._post(userLogin).then(function (response) {
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
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__["UserEntityDataService"]._put(userLogin).then(function (response) {
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
      })["catch"](function (error) {
        console.log(error);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _services_AccessProfileDataService__WEBPACK_IMPORTED_MODULE_19__["AccessProfileDataService"]._comboBoxAccessProfiles().then(function (response) {
      if (userEntitySelectedRedux) {
        setValue("name", userEntitySelectedRedux.name);
        setValue("email", userEntitySelectedRedux.email);
        setValue("password", userEntitySelectedRedux.password);
        setSelectedAccessProfileList(userEntitySelectedRedux.accessProfileList);
        var comboBoxAccessProfileAux = [];
        response.data.forEach(function (ap) {
          var object = userEntitySelectedRedux.accessProfileList.find(function (apAux) {
            return apAux.value === ap.value;
          });

          if (!object) {
            comboBoxAccessProfileAux.push(ap);
          }
        });
        setComboBoxAccessProfiles(comboBoxAccessProfileAux);

        if (comboBoxAccessProfileAux.length > 0) {
          setValue("accessProfile", comboBoxAccessProfileAux[0].value);
        }
      } else {
        setComboBoxAccessProfiles(response.data);

        if (response.data.length > 0) {
          setValue("accessProfile", response.data[0].value);
        }
      }
    });
  }, [userEntitySelectedRedux]);

  function _save() {
    if (!selectedLocalData.id) {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__["UserEntityDataService"]._post(selectedLocalData).then(function (response) {
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
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__["UserEntityDataService"]._put(selectedLocalData).then(function (response) {
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

  var addAccessProfile = function addAccessProfile() {
    var selectedAccessProfilesListAux = selectedAccessProfilesList;
    var ap = comboBoxAccessProfiles.find(function (item) {
      return item.value === getValues("accessProfile");
    });
    selectedAccessProfilesListAux.push(ap);
    var comboBoxAccessProfileAux = comboBoxAccessProfiles.filter(function (item) {
      return item.value !== getValues("accessProfile");
    }); //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox

    setComboBoxAccessProfiles(comboBoxAccessProfileAux); //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades

    if (comboBoxAccessProfileAux && comboBoxAccessProfileAux.length > 0) {
      setValue("accessProfile", comboBoxAccessProfileAux[0].value);
    } //atualiza a tabela com os dados da funcionalidade e as permissões da mesma


    setSelectedAccessProfileList(selectedAccessProfilesListAux);
  };

  var removeAccessProfile = function removeAccessProfile(rowData) {
    var selectedAccessProfilesListAux = selectedAccessProfilesList.filter(function (item) {
      return item.value !== rowData.value;
    });
    setSelectedAccessProfileList(selectedAccessProfilesListAux);
    var comboBoxAccessProfileAux = comboBoxAccessProfiles;
    comboBoxAccessProfileAux.push(rowData);
    setComboBoxAccessProfiles(comboBoxAccessProfileAux);
    setValue("accessProfile", comboBoxAccessProfileAux[0].value);
  };

  function idButtonRemoveListGenerate(rowData) {
    return "buttonRemoveFromList" + rowData.value;
  }

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "button",
        id: idButtonRemoveListGenerate(rowData),
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-warning",
        onClick: function onClick() {
          return removeAccessProfile(rowData);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      autoComplete: "off",
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_toast__WEBPACK_IMPORTED_MODULE_11__["Toast"], {
        ref: toast
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_fieldset__WEBPACK_IMPORTED_MODULE_7__["Fieldset"], {
        style: {
          marginTop: "15px"
        },
        legend: "Cadastro de Usu\xE1rios",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Nome: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
            name: "name",
            control: control,
            defaultValue: "",
            render: function render(_ref) {
              var _ref$field = _ref.field,
                  _onChange = _ref$field.onChange,
                  value = _ref$field.value;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], {
                id: "name",
                name: "name",
                placeholder: "Nome",
                onChange: function onChange(value) {
                  return _onChange(value);
                },
                value: value,
                className: "inputfield w-full"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "E-mail:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
            name: "email",
            control: control,
            defaultValue: "",
            render: function render(_ref2) {
              var field = _ref2.field;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _objectSpread(_objectSpread({}, field), {}, {
                id: "email",
                name: "email",
                placeholder: "E-mail",
                className: "inputfield w-full"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
            name: "password",
            control: control,
            defaultValue: "",
            render: function render(_ref3) {
              var field = _ref3.field;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_password__WEBPACK_IMPORTED_MODULE_12__["Password"], _objectSpread(_objectSpread({}, field), {}, {
                id: "password",
                name: "password",
                placeholder: "Senha",
                toggleMask: true,
                autoComplete: "new-password",
                weakLabel: "Fraca",
                mediumLabel: "M\xE9dia",
                strongLabel: "Forte",
                promptLabel: "Por favor entre com a senha",
                className: "inputfield w-full"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "formgrid grid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "field col-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "accessProfiles",
              children: "Perfis de Acesso:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
              name: "accessProfile",
              control: control,
              defaultValue: undefined,
              render: function render(_ref4) {
                var field = _ref4.field;
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_dropdown__WEBPACK_IMPORTED_MODULE_13__["Dropdown"], _objectSpread(_objectSpread({}, field), {}, {
                  id: "accessProfile",
                  name: "accessProfile",
                  options: comboBoxAccessProfiles,
                  className: "inputfield w-full",
                  emptyMessage: "Nenhum Perfil Dispon\xEDvel"
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 37
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "field col-12 md:col-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              type: "button",
              id: "buttonAddList",
              label: "Adicionar",
              onClick: addAccessProfile,
              disabled: comboBoxAccessProfiles.length < 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_datatable__WEBPACK_IMPORTED_MODULE_14__["DataTable"], {
            scrollHeight: "300px",
            scrollable: true,
            value: selectedAccessProfilesList,
            responsiveLayout: "scroll",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              header: "Selecionado",
              selectionMode: "single",
              headerStyle: {
                width: "3em"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              field: "label",
              header: "Perfil de Acesso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              body: actionBodyTemplate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/userEntity",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            type: "button",
            id: "buttonBack",
            style: {
              marginRight: "15px"
            },
            label: "Voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit",
          id: "buttonSave",
          label: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(UserEntityForm, "pqDLE0pUYiEw42E1/9S0dSfAhRM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"]];
});

_c = UserEntityForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_16__["default"])(UserEntityForm));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhbERhdGEiLCJzZXRTZWxlY3RlZExvY2FsRGF0YSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QiLCJzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0IiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJMb2dpbiIsImlkVXNlckVudGl0eSIsImlkTG9naW4iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJjcnlwdCIsInJlcXVpcmUiLCJzYWx0IiwiZ2VuU2FsdFN5bmMiLCJoYXNoIiwiaGFzaFN5bmMiLCJhY2Nlc3NQcm9maWxlTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJwdXNoIiwiZXJyb3IiLCJfcHV0IiwidXNlRWZmZWN0IiwiQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIiwiX2NvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgiLCJmb3JFYWNoIiwiYXAiLCJvYmplY3QiLCJmaW5kIiwiYXBBdXgiLCJ2YWx1ZSIsImxlbmd0aCIsIl9zYXZlIiwiaWQiLCJhZGRBY2Nlc3NQcm9maWxlIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgiLCJpdGVtIiwiZmlsdGVyIiwicmVtb3ZlQWNjZXNzUHJvZmlsZSIsInJvd0RhdGEiLCJpZEJ1dHRvblJlbW92ZUxpc3RHZW5lcmF0ZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsIm1hcmdpblRvcCIsImZpZWxkIiwib25DaGFuZ2UiLCJ1bmRlZmluZWQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBOztBQUtBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBRTNCLE1BQU1DLHVCQUF1QixHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHlCQUFOLENBQWdDQyxrQkFBM0M7QUFBQSxHQUFELENBQTNDOztBQUYyQixrQkFJdUJDLHNEQUFRLENBQUMsSUFBRCxDQUovQjtBQUFBLE1BSXBCQyxpQkFKb0I7QUFBQSxNQUlEQyxvQkFKQzs7QUFBQSxtQkFNaUNGLHNEQUFRLENBQUMsRUFBRCxDQU56QztBQUFBLE1BTXBCRyxzQkFOb0I7QUFBQSxNQU1JQyx5QkFOSjs7QUFBQSxtQkFPd0NKLHNEQUFRLENBQUMsRUFBRCxDQVBoRDtBQUFBLE1BT3BCSywwQkFQb0I7QUFBQSxNQU9RQyw0QkFQUjs7QUFVM0IsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNQyxNQUFNLEdB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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkZKLGVBK0ZJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBQSxpQ0FDSSxxRUFBQyx5REFBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixjQUFFLEVBQUMsWUFBekI7QUFBc0MsaUJBQUssRUFBRTtBQUFFTSx5QkFBVyxFQUFFO0FBQWYsYUFBN0M7QUFBc0UsaUJBQUssRUFBQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRkosZUFtR0kscUVBQUMseURBQUQ7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFFLEVBQUMsWUFBekI7QUFBc0MsZUFBSyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBOEdIOztHQTlQUXJGLGM7VUFFMkJHLHVELEVBU2pCYyxxRCxFQUNFRSx1RCxFQUV3REMsdUQ7OztLQWRwRXBCLGM7QUFnUU0scUVBQUFzRixxRUFBUSxDQUFDdEYsY0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRW50aXR5L2Zvcm0uNmM1N2ZlOTY5NTRmYmJmMTI2ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwicHJpbWVyZWFjdC9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJ3ByaW1lcmVhY3QvcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3ByaW1lcmVhY3QvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuXHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuXHJcbmltcG9ydCBcInByaW1lZmxleC9wcmltZWZsZXguY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyRW50aXR5RGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvVXNlckVudGl0eURhdGFTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFVzZXJFbnRpdHlGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgdXNlckVudGl0eVNlbGVjdGVkUmVkdXggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlTZWxlY3RlZFJlZHVjZXIudXNlckVudGl0eVNlbGVjdGVkKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMb2NhbERhdGEsIHNldFNlbGVjdGVkTG9jYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLCBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdCwgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBzZXRWYWx1ZSwgZXJyb3JzLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm0oeyBtb2RlOiAnb25DaGFuZ2UnIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJMb2dpbiA9IHt9O1xyXG4gICAgICAgIHVzZXJMb2dpbi5pZFVzZXJFbnRpdHkgPSB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eCA/IHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmlkVXNlckVudGl0eSA6IG51bGw7XHJcbiAgICAgICAgdXNlckxvZ2luLmlkTG9naW4gPSB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eCA/IHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmlkTG9naW4gOiBudWxsO1xyXG4gICAgICAgIHVzZXJMb2dpbi5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHVzZXJMb2dpbi5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICAgICAgaWYoZGF0YS5wYXNzd29yZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbHQgPSBiY3J5cHQuZ2VuU2FsdFN5bmMoMTApO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYmNyeXB0Lmhhc2hTeW5jKGRhdGEucGFzc3dvcmQsIHNhbHQpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW4ucGFzc3dvcmQgPSBoYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyTG9naW4uYWNjZXNzUHJvZmlsZUxpc3QgPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdDtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyTG9naW4pO1xyXG4gICAgICAgIGlmKCF1c2VyTG9naW4uaWRVc2VyRW50aXR5KXtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHVzZXJMb2dpbikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX3B1dCh1c2VyTG9naW4pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGFsdGVyYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUFVUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJFbnRpdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZS5fY29tYm9Cb3hBY2Nlc3NQcm9maWxlcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlckVudGl0eVNlbGVjdGVkUmVkdXgpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKFwibmFtZVwiLCB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiZW1haWxcIiwgdXNlckVudGl0eVNlbGVjdGVkUmVkdXguZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJwYXNzd29yZFwiLCB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmFjY2Vzc1Byb2ZpbGVMaXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXggPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaChhcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gdXNlckVudGl0eVNlbGVjdGVkUmVkdXguYWNjZXNzUHJvZmlsZUxpc3QuZmluZChhcEF1eCA9PiBhcEF1eC52YWx1ZSA9PT0gYXAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eC5wdXNoKGFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4KTtcclxuICAgICAgICAgICAgICAgIGlmKGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShcImFjY2Vzc1Byb2ZpbGVcIiwgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4WzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiYWNjZXNzUHJvZmlsZVwiLCByZXNwb25zZS5kYXRhWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFt1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eF0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfc2F2ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZExvY2FsRGF0YS5pZCkge1xyXG4gICAgICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX3Bvc3Qoc2VsZWN0ZWRMb2NhbERhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGNyaWFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBPU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlckVudGl0eVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcHV0KHNlbGVjdGVkTG9jYWxEYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBhbHRlcmFkbyBjb20gc3VjZXNzbyFcIiwgbGlmZTogMzAwMCB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUQURPIFBVVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRBY2Nlc3NQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCA9IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0O1xyXG4gICAgICAgIGNvbnN0IGFwID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gZ2V0VmFsdWVzKFwiYWNjZXNzUHJvZmlsZVwiKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgucHVzaChhcCk7XHJcbiAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCA9IGNvbWJvQm94QWNjZXNzUHJvZmlsZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gZ2V0VmFsdWVzKFwiYWNjZXNzUHJvZmlsZVwiKSk7XHJcblxyXG4gICAgICAgIC8vYXR1YWxpemEgY29tYm9ib3ggZGFzIGZ1bmNpb25hbGlkYWRlIGRlaXhhbmRvIGFwZW5hcyBhIGZ1bmNpb25hbGlkYWRlcyBuw6NvIGFkaWNpb25hZGFzIG5vIGNvbWJvYm94XHJcbiAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgpO1xyXG4gICAgICAgIC8vYXR1YWxpemEgYSBmdW5jaW9uYWxpZGFkZSBzZWxlY2lvbmFkYSBhcMOzcyBhIGF0dWFsaXphw6fDo28gZG8gYXJyYXkgZGUgZnVuY2lvYWxpZGFkZXNcclxuICAgICAgICBpZiAoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4ICYmIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKFwiYWNjZXNzUHJvZmlsZVwiLCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXhbMF0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2F0dWFsaXphIGEgdGFiZWxhIGNvbSBvcyBkYWRvcyBkYSBmdW5jaW9uYWxpZGFkZSBlIGFzIHBlcm1pc3PDtWVzIGRhIG1lc21hXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdChzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQWNjZXNzUHJvZmlsZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4ID0gc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnZhbHVlICE9PSByb3dEYXRhLnZhbHVlIH0pO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQWNjZXNzUHJvZmlsZUxpc3Qoc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgpO1xyXG5cclxuICAgICAgICBsZXQgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcztcclxuICAgICAgICBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgucHVzaChyb3dEYXRhKTtcclxuICAgICAgICBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzKGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCk7XHJcbiAgICAgICAgc2V0VmFsdWUoXCJhY2Nlc3NQcm9maWxlXCIsIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eFswXS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaWRCdXR0b25SZW1vdmVMaXN0R2VuZXJhdGUocm93RGF0YSkge1xyXG4gICAgICAgIHJldHVybiBcImJ1dHRvblJlbW92ZUZyb21MaXN0XCIgKyByb3dEYXRhLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkJvZHlUZW1wbGF0ZSA9IChyb3dEYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPXtpZEJ1dHRvblJlbW92ZUxpc3RHZW5lcmF0ZShyb3dEYXRhKX0gaWNvbj1cInBpIHBpLXRyYXNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlQWNjZXNzUHJvZmlsZShyb3dEYXRhKX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxUb2FzdCByZWY9e3RvYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkc2V0IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX0gbGVnZW5kPVwiQ2FkYXN0cm8gZGUgVXN1w6FyaW9zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCB2YWx1ZSB9IH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBvbkNoYW5nZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FLW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1hc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vha0xhYmVsPVwiRnJhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1MYWJlbD1cIk3DqWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZ0xhYmVsPVwiRm9ydGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRMYWJlbD1cIlBvciBmYXZvciBlbnRyZSBjb20gYSBzZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtZ3JpZCBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY2Vzc1Byb2ZpbGVzXCI+UGVyZmlzIGRlIEFjZXNzbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjZXNzUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2Nlc3NQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2Nlc3NQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2U9XCJOZW5odW0gUGVyZmlsIERpc3BvbsOtdmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYnV0dG9uQWRkTGlzdFwiIGxhYmVsPVwiQWRpY2lvbmFyXCIgb25DbGljaz17YWRkQWNjZXNzUHJvZmlsZX0gZGlzYWJsZWQ9e2NvbWJvQm94QWNjZXNzUHJvZmlsZXMubGVuZ3RoIDwgMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVMYXlvdXQ9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiU2VsZWNpb25hZG9cIiBzZWxlY3Rpb25Nb2RlPVwic2luZ2xlXCIgaGVhZGVyU3R5bGU9e3sgd2lkdGg6IFwiM2VtXCIgfX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwibGFiZWxcIiBoZWFkZXI9XCJQZXJmaWwgZGUgQWNlc3NvXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGJvZHk9e2FjdGlvbkJvZHlUZW1wbGF0ZX0+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJFbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidXR0b25CYWNrXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19IGxhYmVsPVwiVm9sdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYnV0dG9uU2F2ZVwiIGxhYmVsPVwiU2FsdmFyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChVc2VyRW50aXR5Rm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==