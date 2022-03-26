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
    userLogin.idUserEntity = null;
    userLogin.idLogin = null;
    userLogin.name = data.name;
    userLogin.email = data.email;

    var bcrypt = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(data.password, salt);
    userLogin.password = hash;
    userLogin.accessProfileList = selectedAccessProfilesList;
    console.log(userLogin); // if(!userLogin.idUserEntity){
    //     UserEntityDataService._post(userLogin).then(response => {
    //         console.log(response);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // } else {
    //     UserEntityDataService._put(userLogin).then(response => {
    //         console.log(response);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }
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
        lineNumber: 157,
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
        lineNumber: 165,
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
            lineNumber: 169,
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
                lineNumber: 175,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "E-mail:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
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
                lineNumber: 193,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
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
                lineNumber: 210,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
              lineNumber: 228,
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
                  lineNumber: 234,
                  columnNumber: 37
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
              lineNumber: 245,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
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
              lineNumber: 255,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              field: "label",
              header: "Perfil de Acesso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              body: actionBodyTemplate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
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
            lineNumber: 262,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit",
          id: "buttonSave",
          label: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhbERhdGEiLCJzZXRTZWxlY3RlZExvY2FsRGF0YSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QiLCJzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0IiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJMb2dpbiIsImlkVXNlckVudGl0eSIsImlkTG9naW4iLCJuYW1lIiwiZW1haWwiLCJiY3J5cHQiLCJyZXF1aXJlIiwic2FsdCIsImdlblNhbHRTeW5jIiwiaGFzaCIsImhhc2hTeW5jIiwicGFzc3dvcmQiLCJhY2Nlc3NQcm9maWxlTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UiLCJfY29tYm9Cb3hBY2Nlc3NQcm9maWxlcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCIsImZvckVhY2giLCJhcCIsIm9iamVjdCIsImZpbmQiLCJhcEF1eCIsInZhbHVlIiwicHVzaCIsImxlbmd0aCIsIl9zYXZlIiwiaWQiLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJfcHV0IiwiYWRkQWNjZXNzUHJvZmlsZSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4IiwiaXRlbSIsImZpbHRlciIsInJlbW92ZUFjY2Vzc1Byb2ZpbGUiLCJyb3dEYXRhIiwiaWRCdXR0b25SZW1vdmVMaXN0R2VuZXJhdGUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5Ub3AiLCJmaWVsZCIsIm9uQ2hhbmdlIiwidW5kZWZpbmVkIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTs7QUFLQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUUzQixNQUFNQyx1QkFBdUIsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyx5QkFBTixDQUFnQ0Msa0JBQTNDO0FBQUEsR0FBRCxDQUEzQzs7QUFGMkIsa0JBSXVCQyxzREFBUSxDQUFDLElBQUQsQ0FKL0I7QUFBQSxNQUlwQkMsaUJBSm9CO0FBQUEsTUFJREMsb0JBSkM7O0FBQUEsbUJBTWlDRixzREFBUSxDQUFDLEVBQUQsQ0FOekM7QUFBQSxNQU1wQkcsc0JBTm9CO0FBQUEsTUFNSUMseUJBTko7O0FBQUEsbUJBT3dDSixzREFBUSxDQUFDLEVBQUQsQ0FQaEQ7QUFBQSxNQU9wQkssMEJBUG9CO0FBQUEsTUFPUUMsNEJBUFI7O0FBVTNCLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFB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QW5GSixlQStGSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQUEsaUNBQ0kscUVBQUMseURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsY0FBRSxFQUFDLFlBQXpCO0FBQXNDLGlCQUFLLEVBQUU7QUFBRU0seUJBQVcsRUFBRTtBQUFmLGFBQTdDO0FBQXNFLGlCQUFLLEVBQUM7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0ZKLGVBbUdJLHFFQUFDLHlEQUFEO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsWUFBRSxFQUFDLFlBQXpCO0FBQXNDLGVBQUssRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5HSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQThHSDs7R0FwUFFwRixjO1VBRTJCRyx1RCxFQVNqQmMscUQsRUFDRUUsdUQsRUFFd0RDLHVEOzs7S0FkcEVwQixjO0FBc1BNLHFFQUFBcUYscUVBQVEsQ0FBQ3JGLGNBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlckVudGl0eS9mb3JtLjQyYzdlMjE4ZWE3ZmEwZjQ4Y2U0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmltcG9ydCB7IEZpZWxkc2V0IH0gZnJvbSBcInByaW1lcmVhY3QvZmllbGRzZXRcIjtcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSBcInByaW1lcmVhY3QvaW5wdXR0ZXh0XCI7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcInByaW1lcmVhY3QvY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInByaW1lcmVhY3QvdG9hc3RcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tICdwcmltZXJlYWN0L3Bhc3N3b3JkJztcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcblxyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJwcmltZWZsZXgvcHJpbWVmbGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckVudGl0eURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1VzZXJFbnRpdHlEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyRW50aXR5Rm9ybShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyRW50aXR5U2VsZWN0ZWRSZWR1Y2VyLnVzZXJFbnRpdHlTZWxlY3RlZCk7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkTG9jYWxEYXRhLCBzZXRTZWxlY3RlZExvY2FsRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbY29tYm9Cb3hBY2Nlc3NQcm9maWxlcywgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QsIHNldFNlbGVjdGVkQWNjZXNzUHJvZmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUsIGVycm9ycywgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtKHsgbW9kZTogJ29uQ2hhbmdlJyB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCB1c2VyTG9naW4gPSB7fTtcclxuICAgICAgICB1c2VyTG9naW4uaWRVc2VyRW50aXR5ID0gbnVsbDtcclxuICAgICAgICB1c2VyTG9naW4uaWRMb2dpbiA9IG51bGw7XHJcbiAgICAgICAgdXNlckxvZ2luLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdXNlckxvZ2luLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICAgICAgICBjb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHRqcycpO1xyXG4gICAgICAgIGNvbnN0IHNhbHQgPSBiY3J5cHQuZ2VuU2FsdFN5bmMoMTApO1xyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBiY3J5cHQuaGFzaFN5bmMoZGF0YS5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICAgICAgdXNlckxvZ2luLnBhc3N3b3JkID0gaGFzaDtcclxuICAgICAgICB1c2VyTG9naW4uYWNjZXNzUHJvZmlsZUxpc3QgPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdDtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyTG9naW4pO1xyXG4gICAgICAgIC8vIGlmKCF1c2VyTG9naW4uaWRVc2VyRW50aXR5KXtcclxuICAgICAgICAvLyAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHVzZXJMb2dpbikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX3B1dCh1c2VyTG9naW4pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJuYW1lXCIsIHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJlbWFpbFwiLCB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShcInBhc3N3b3JkXCIsIHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQWNjZXNzUHJvZmlsZUxpc3QodXNlckVudGl0eVNlbGVjdGVkUmVkdXguYWNjZXNzUHJvZmlsZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKGFwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5hY2Nlc3NQcm9maWxlTGlzdC5maW5kKGFwQXV4ID0+IGFwQXV4LnZhbHVlID09PSBhcC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4LnB1c2goYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgpO1xyXG4gICAgICAgICAgICAgICAgaWYoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiYWNjZXNzUHJvZmlsZVwiLCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXhbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJhY2Nlc3NQcm9maWxlXCIsIHJlc3BvbnNlLmRhdGFbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW3VzZXJFbnRpdHlTZWxlY3RlZFJlZHV4XSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIF9zYXZlKCkge1xyXG5cclxuICAgICAgICBpZiAoIXNlbGVjdGVkTG9jYWxEYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcG9zdChzZWxlY3RlZExvY2FsRGF0YSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wdXQoc2VsZWN0ZWRMb2NhbERhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGFsdGVyYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUFVUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJFbnRpdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEFjY2Vzc1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4ID0gc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgYXAgPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBnZXRWYWx1ZXMoXCJhY2Nlc3NQcm9maWxlXCIpKTtcclxuICAgICAgICBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eC5wdXNoKGFwKTtcclxuICAgICAgICBsZXQgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBnZXRWYWx1ZXMoXCJhY2Nlc3NQcm9maWxlXCIpKTtcclxuXHJcbiAgICAgICAgLy9hdHVhbGl6YSBjb21ib2JveCBkYXMgZnVuY2lvbmFsaWRhZGUgZGVpeGFuZG8gYXBlbmFzIGEgZnVuY2lvbmFsaWRhZGVzIG7Do28gYWRpY2lvbmFkYXMgbm8gY29tYm9ib3hcclxuICAgICAgICBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzKGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCk7XHJcbiAgICAgICAgLy9hdHVhbGl6YSBhIGZ1bmNpb25hbGlkYWRlIHNlbGVjaW9uYWRhIGFww7NzIGEgYXR1YWxpemHDp8OjbyBkbyBhcnJheSBkZSBmdW5jaW9hbGlkYWRlc1xyXG4gICAgICAgIGlmIChjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXggJiYgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0VmFsdWUoXCJhY2Nlc3NQcm9maWxlXCIsIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eFswXS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYXR1YWxpemEgYSB0YWJlbGEgY29tIG9zIGRhZG9zIGRhIGZ1bmNpb25hbGlkYWRlIGUgYXMgcGVybWlzc8O1ZXMgZGEgbWVzbWFcclxuICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVBY2Nlc3NQcm9maWxlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXggPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udmFsdWUgIT09IHJvd0RhdGEudmFsdWUgfSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdChzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCk7XHJcblxyXG4gICAgICAgIGxldCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzO1xyXG4gICAgICAgIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eC5wdXNoKHJvd0RhdGEpO1xyXG4gICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4KTtcclxuICAgICAgICBzZXRWYWx1ZShcImFjY2Vzc1Byb2ZpbGVcIiwgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4WzBdLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpZEJ1dHRvblJlbW92ZUxpc3RHZW5lcmF0ZShyb3dEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnV0dG9uUmVtb3ZlRnJvbUxpc3RcIiArIHJvd0RhdGEudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9e2lkQnV0dG9uUmVtb3ZlTGlzdEdlbmVyYXRlKHJvd0RhdGEpfSBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVBY2Nlc3NQcm9maWxlKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRzZXQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fSBsZWdlbmQ9XCJDYWRhc3RybyBkZSBVc3XDoXJpb3NcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHZhbHVlIH0gfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IG9uQ2hhbmdlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkUtbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWFrTGFiZWw9XCJGcmFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bUxhYmVsPVwiTcOpZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nTGFiZWw9XCJGb3J0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdExhYmVsPVwiUG9yIGZhdm9yIGVudHJlIGNvbSBhIHNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ncmlkIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWNjZXNzUHJvZmlsZXNcIj5QZXJmaXMgZGUgQWNlc3NvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2Nlc3NQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY2Vzc1Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY2Vzc1Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y29tYm9Cb3hBY2Nlc3NQcm9maWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT1cIk5lbmh1bSBQZXJmaWwgRGlzcG9uw612ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidXR0b25BZGRMaXN0XCIgbGFiZWw9XCJBZGljaW9uYXJcIiBvbkNsaWNrPXthZGRBY2Nlc3NQcm9maWxlfSBkaXNhYmxlZD17Y29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5sZW5ndGggPCAxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZUxheW91dD1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJTZWxlY2lvbmFkb1wiIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17eyB3aWR0aDogXCIzZW1cIiB9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJsYWJlbFwiIGhlYWRlcj1cIlBlcmZpbCBkZSBBY2Vzc29cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImJ1dHRvbkJhY2tcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX0gbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJidXR0b25TYXZlXCIgbGFiZWw9XCJTYWx2YXJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFVzZXJFbnRpdHlGb3JtKTsiXSwic291cmNlUm9vdCI6IiJ9