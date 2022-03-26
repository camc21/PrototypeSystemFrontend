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
    console.log(userLogin);

    _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__["UserEntityDataService"]._post(userLogin).then(function (response) {
      console.log(response);
    });
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
        lineNumber: 146,
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
        lineNumber: 154,
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
            lineNumber: 158,
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
                lineNumber: 164,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "E-mail:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
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
                lineNumber: 182,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
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
                lineNumber: 199,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
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
              lineNumber: 217,
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
                  lineNumber: 223,
                  columnNumber: 37
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 216,
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
              lineNumber: 234,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
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
              lineNumber: 244,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              field: "label",
              header: "Perfil de Acesso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              body: actionBodyTemplate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
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
            lineNumber: 251,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit",
          id: "buttonSave",
          label: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhbERhdGEiLCJzZXRTZWxlY3RlZExvY2FsRGF0YSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QiLCJzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0IiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJMb2dpbiIsImlkVXNlckVudGl0eSIsImlkTG9naW4iLCJuYW1lIiwiZW1haWwiLCJiY3J5cHQiLCJyZXF1aXJlIiwic2FsdCIsImdlblNhbHRTeW5jIiwiaGFzaCIsImhhc2hTeW5jIiwicGFzc3dvcmQiLCJhY2Nlc3NQcm9maWxlTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwiY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4IiwiZm9yRWFjaCIsImFwIiwib2JqZWN0IiwiZmluZCIsImFwQXV4IiwidmFsdWUiLCJwdXNoIiwibGVuZ3RoIiwiX3NhdmUiLCJpZCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJfcHV0IiwiYWRkQWNjZXNzUHJvZmlsZSIsInNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4IiwiaXRlbSIsImZpbHRlciIsInJlbW92ZUFjY2Vzc1Byb2ZpbGUiLCJyb3dEYXRhIiwiaWRCdXR0b25SZW1vdmVMaXN0R2VuZXJhdGUiLCJhY3Rpb25Cb2R5VGVtcGxhdGUiLCJtYXJnaW5Ub3AiLCJmaWVsZCIsIm9uQ2hhbmdlIiwidW5kZWZpbmVkIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTs7QUFLQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUUzQixNQUFNQyx1QkFBdUIsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyx5QkFBTixDQUFnQ0Msa0JBQTNDO0FBQUEsR0FBRCxDQUEzQzs7QUFGMkIsa0JBSXVCQyxzREFBUSxDQUFDLElBQUQsQ0FKL0I7QUFBQSxNQUlwQkMsaUJBSm9CO0FBQUEsTUFJREMsb0JBSkM7O0FBQUEsbUJBTWlDRixzREFBUSxDQUFDLEVBQUQsQ0FOekM7QUFBQSxNQU1wQkcsc0JBTm9CO0FBQUEsTUFNSUMseUJBTko7O0FBQUEsbUJBT3dDSixzREFBUSxDQUFDLEVBQUQsQ0FQaEQ7QUFBQSxNQU9wQkssMEJBUG9CO0FBQUEsTUFPUUMsNEJBUFI7O0FBVTNCLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkZKLGVBK0ZJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBQSxpQ0FDSSxxRUFBQyx5REFBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixjQUFFLEVBQUMsWUFBekI7QUFBc0MsaUJBQUssRUFBRTtBQUFFTSx5QkFBVyxFQUFFO0FBQWYsYUFBN0M7QUFBc0UsaUJBQUssRUFBQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRkosZUFtR0kscUVBQUMseURBQUQ7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFFLEVBQUMsWUFBekI7QUFBc0MsZUFBSyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBOEdIOztHQXpPUXBGLGM7VUFFMkJHLHVELEVBU2pCYyxxRCxFQUNFRSx1RCxFQUV3REMsdUQ7OztLQWRwRXBCLGM7QUEyT00scUVBQUFxRixxRUFBUSxDQUFDckYsY0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRW50aXR5L2Zvcm0uZWRiOWNjOGE2YTY4NDZkYjA1MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgRmllbGRzZXQgfSBmcm9tIFwicHJpbWVyZWFjdC9maWVsZHNldFwiO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tIFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwicHJpbWVyZWFjdC9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicHJpbWVyZWFjdC90b2FzdFwiO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJ3ByaW1lcmVhY3QvcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3ByaW1lcmVhY3QvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuXHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuXHJcbmltcG9ydCBcInByaW1lZmxleC9wcmltZWZsZXguY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyRW50aXR5RGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvVXNlckVudGl0eURhdGFTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFVzZXJFbnRpdHlGb3JtKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgdXNlckVudGl0eVNlbGVjdGVkUmVkdXggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJFbnRpdHlTZWxlY3RlZFJlZHVjZXIudXNlckVudGl0eVNlbGVjdGVkKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMb2NhbERhdGEsIHNldFNlbGVjdGVkTG9jYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLCBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdCwgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBzZXRWYWx1ZSwgZXJyb3JzLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm0oeyBtb2RlOiAnb25DaGFuZ2UnIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJMb2dpbiA9IHt9O1xyXG4gICAgICAgIHVzZXJMb2dpbi5pZFVzZXJFbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIHVzZXJMb2dpbi5pZExvZ2luID0gbnVsbDtcclxuICAgICAgICB1c2VyTG9naW4ubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB1c2VyTG9naW4uZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgICAgIGNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XHJcbiAgICAgICAgY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGJjcnlwdC5oYXNoU3luYyhkYXRhLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgICB1c2VyTG9naW4ucGFzc3dvcmQgPSBoYXNoO1xyXG4gICAgICAgIHVzZXJMb2dpbi5hY2Nlc3NQcm9maWxlTGlzdCA9IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJMb2dpbik7XHJcbiAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHVzZXJMb2dpbikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlLl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJuYW1lXCIsIHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJlbWFpbFwiLCB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShcInBhc3N3b3JkXCIsIHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQWNjZXNzUHJvZmlsZUxpc3QodXNlckVudGl0eVNlbGVjdGVkUmVkdXguYWNjZXNzUHJvZmlsZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKGFwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5hY2Nlc3NQcm9maWxlTGlzdC5maW5kKGFwQXV4ID0+IGFwQXV4LnZhbHVlID09PSBhcC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4LnB1c2goYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgpO1xyXG4gICAgICAgICAgICAgICAgaWYoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiYWNjZXNzUHJvZmlsZVwiLCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXhbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJhY2Nlc3NQcm9maWxlXCIsIHJlc3BvbnNlLmRhdGFbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW3VzZXJFbnRpdHlTZWxlY3RlZFJlZHV4XSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIF9zYXZlKCkge1xyXG5cclxuICAgICAgICBpZiAoIXNlbGVjdGVkTG9jYWxEYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcG9zdChzZWxlY3RlZExvY2FsRGF0YSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUE9TVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2VyRW50aXR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wdXQoc2VsZWN0ZWRMb2NhbERhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuY3VycmVudC5zaG93KHsgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiLCBzdW1tYXJ5OiBcIlN1Y2Vzc29cIiwgZGV0YWlsOiBcIlJlZ2lzdHJvIGFsdGVyYWRvIGNvbSBzdWNlc3NvIVwiLCBsaWZlOiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRBRE8gUFVUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJFbnRpdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEFjY2Vzc1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4ID0gc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgYXAgPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBnZXRWYWx1ZXMoXCJhY2Nlc3NQcm9maWxlXCIpKTtcclxuICAgICAgICBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eC5wdXNoKGFwKTtcclxuICAgICAgICBsZXQgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4ID0gY29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBnZXRWYWx1ZXMoXCJhY2Nlc3NQcm9maWxlXCIpKTtcclxuXHJcbiAgICAgICAgLy9hdHVhbGl6YSBjb21ib2JveCBkYXMgZnVuY2lvbmFsaWRhZGUgZGVpeGFuZG8gYXBlbmFzIGEgZnVuY2lvbmFsaWRhZGVzIG7Do28gYWRpY2lvbmFkYXMgbm8gY29tYm9ib3hcclxuICAgICAgICBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzKGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCk7XHJcbiAgICAgICAgLy9hdHVhbGl6YSBhIGZ1bmNpb25hbGlkYWRlIHNlbGVjaW9uYWRhIGFww7NzIGEgYXR1YWxpemHDp8OjbyBkbyBhcnJheSBkZSBmdW5jaW9hbGlkYWRlc1xyXG4gICAgICAgIGlmIChjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXggJiYgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0VmFsdWUoXCJhY2Nlc3NQcm9maWxlXCIsIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eFswXS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYXR1YWxpemEgYSB0YWJlbGEgY29tIG9zIGRhZG9zIGRhIGZ1bmNpb25hbGlkYWRlIGUgYXMgcGVybWlzc8O1ZXMgZGEgbWVzbWFcclxuICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVBY2Nlc3NQcm9maWxlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXggPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udmFsdWUgIT09IHJvd0RhdGEudmFsdWUgfSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdChzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCk7XHJcblxyXG4gICAgICAgIGxldCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzO1xyXG4gICAgICAgIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eC5wdXNoKHJvd0RhdGEpO1xyXG4gICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4KTtcclxuICAgICAgICBzZXRWYWx1ZShcImFjY2Vzc1Byb2ZpbGVcIiwgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4WzBdLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpZEJ1dHRvblJlbW92ZUxpc3RHZW5lcmF0ZShyb3dEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnV0dG9uUmVtb3ZlRnJvbUxpc3RcIiArIHJvd0RhdGEudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uQm9keVRlbXBsYXRlID0gKHJvd0RhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9e2lkQnV0dG9uUmVtb3ZlTGlzdEdlbmVyYXRlKHJvd0RhdGEpfSBpY29uPVwicGkgcGktdHJhc2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVBY2Nlc3NQcm9maWxlKHJvd0RhdGEpfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0IHJlZj17dG9hc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRzZXQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fSBsZWdlbmQ9XCJDYWRhc3RybyBkZSBVc3XDoXJpb3NcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob21lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHZhbHVlIH0gfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IG9uQ2hhbmdlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkUtbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWFrTGFiZWw9XCJGcmFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bUxhYmVsPVwiTcOpZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nTGFiZWw9XCJGb3J0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdExhYmVsPVwiUG9yIGZhdm9yIGVudHJlIGNvbSBhIHNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ncmlkIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWNjZXNzUHJvZmlsZXNcIj5QZXJmaXMgZGUgQWNlc3NvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2Nlc3NQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY2Vzc1Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY2Vzc1Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y29tYm9Cb3hBY2Nlc3NQcm9maWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT1cIk5lbmh1bSBQZXJmaWwgRGlzcG9uw612ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidXR0b25BZGRMaXN0XCIgbGFiZWw9XCJBZGljaW9uYXJcIiBvbkNsaWNrPXthZGRBY2Nlc3NQcm9maWxlfSBkaXNhYmxlZD17Y29tYm9Cb3hBY2Nlc3NQcm9maWxlcy5sZW5ndGggPCAxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZUxheW91dD1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJTZWxlY2lvbmFkb1wiIHNlbGVjdGlvbk1vZGU9XCJzaW5nbGVcIiBoZWFkZXJTdHlsZT17eyB3aWR0aDogXCIzZW1cIiB9fT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJsYWJlbFwiIGhlYWRlcj1cIlBlcmZpbCBkZSBBY2Vzc29cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4gYm9keT17YWN0aW9uQm9keVRlbXBsYXRlfT48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlckVudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImJ1dHRvbkJhY2tcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX0gbGFiZWw9XCJWb2x0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJidXR0b25TYXZlXCIgbGFiZWw9XCJTYWx2YXJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFVzZXJFbnRpdHlGb3JtKTsiXSwic291cmNlUm9vdCI6IiJ9