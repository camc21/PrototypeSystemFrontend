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
    userLogin.idUserEntity = userEntitySelectedRedux.idUserEntity;
    userLogin.idLogin = userEntitySelectedRedux.idLogin;
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
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      _services_UserEntityDataService__WEBPACK_IMPORTED_MODULE_18__["UserEntityDataService"]._put(userLogin).then(function (response) {
        console.log(response);
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
        lineNumber: 159,
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
        lineNumber: 167,
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
            lineNumber: 171,
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
                lineNumber: 177,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "E-mail:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
                lineNumber: 195,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "field",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
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
                lineNumber: 212,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
              lineNumber: 230,
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
                  lineNumber: 236,
                  columnNumber: 37
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
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
              lineNumber: 247,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
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
              lineNumber: 257,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              field: "label",
              header: "Perfil de Acesso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_column__WEBPACK_IMPORTED_MODULE_15__["Column"], {
              body: actionBodyTemplate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
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
            lineNumber: 264,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit",
          id: "buttonSave",
          label: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckVudGl0eS9mb3JtLmpzeCJdLCJuYW1lcyI6WyJVc2VyRW50aXR5Rm9ybSIsInByb3BzIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlckVudGl0eVNlbGVjdGVkUmVkdWNlciIsInVzZXJFbnRpdHlTZWxlY3RlZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhbERhdGEiLCJzZXRTZWxlY3RlZExvY2FsRGF0YSIsImNvbWJvQm94QWNjZXNzUHJvZmlsZXMiLCJzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3QiLCJzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0IiwidG9hc3QiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRm9ybSIsIm1vZGUiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJMb2dpbiIsImlkVXNlckVudGl0eSIsImlkTG9naW4iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJjcnlwdCIsInJlcXVpcmUiLCJzYWx0IiwiZ2VuU2FsdFN5bmMiLCJoYXNoIiwiaGFzaFN5bmMiLCJhY2Nlc3NQcm9maWxlTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJVc2VyRW50aXR5RGF0YVNlcnZpY2UiLCJfcG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiX3B1dCIsInVzZUVmZmVjdCIsIkFjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZSIsIl9jb21ib0JveEFjY2Vzc1Byb2ZpbGVzIiwiY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4IiwiZm9yRWFjaCIsImFwIiwib2JqZWN0IiwiZmluZCIsImFwQXV4IiwidmFsdWUiLCJwdXNoIiwibGVuZ3RoIiwiX3NhdmUiLCJpZCIsImN1cnJlbnQiLCJzaG93Iiwic2V2ZXJpdHkiLCJzdW1tYXJ5IiwiZGV0YWlsIiwibGlmZSIsInNldFRpbWVvdXQiLCJhZGRBY2Nlc3NQcm9maWxlIiwic2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgiLCJpdGVtIiwiZmlsdGVyIiwicmVtb3ZlQWNjZXNzUHJvZmlsZSIsInJvd0RhdGEiLCJpZEJ1dHRvblJlbW92ZUxpc3RHZW5lcmF0ZSIsImFjdGlvbkJvZHlUZW1wbGF0ZSIsIm1hcmdpblRvcCIsImZpZWxkIiwib25DaGFuZ2UiLCJ1bmRlZmluZWQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBOztBQUtBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBRTNCLE1BQU1DLHVCQUF1QixHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLHlCQUFOLENBQWdDQyxrQkFBM0M7QUFBQSxHQUFELENBQTNDOztBQUYyQixrQkFJdUJDLHNEQUFRLENBQUMsSUFBRCxDQUovQjtBQUFBLE1BSXBCQyxpQkFKb0I7QUFBQSxNQUlEQyxvQkFKQzs7QUFBQSxtQkFNaUNGLHNEQUFRLENBQUMsRUFBRCxDQU56QztBQUFBLE1BTXBCRyxzQkFOb0I7QUFBQSxNQU1JQyx5QkFOSjs7QUFBQSxtQkFPd0NKLHNEQUFRLENBQUMsRUFBRCxDQVBoRDtBQUFBLE1BT3BCSywwQkFQb0I7QUFBQSxNQU9RQyw0QkFQUjs7QUFVM0IsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNQyxNQUFNLEdB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cEIsYztBQXdQTSxxRUFBQXNGLHFFQUFRLENBQUN0RixjQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJFbnRpdHkvZm9ybS45NTlkMGJkNDA3M2NhZTYyNzI1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgeyBGaWVsZHNldCB9IGZyb20gXCJwcmltZXJlYWN0L2ZpZWxkc2V0XCI7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gXCJwcmltZXJlYWN0L2lucHV0dGV4dFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJwcmltZXJlYWN0L2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJwcmltZXJlYWN0L2J1dHRvblwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJwcmltZXJlYWN0L3RvYXN0XCI7XHJcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAncHJpbWVyZWFjdC9wYXNzd29yZCc7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gJ3ByaW1lcmVhY3QvZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncHJpbWVyZWFjdC9jb2x1bW4nO1xyXG5cclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xyXG5cclxuaW1wb3J0IFwicHJpbWVmbGV4L3ByaW1lZmxleC5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJFbnRpdHlEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Vc2VyRW50aXR5RGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzUHJvZmlsZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0FjY2Vzc1Byb2ZpbGVEYXRhU2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVXNlckVudGl0eUZvcm0ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlckVudGl0eVNlbGVjdGVkUmVkdWNlci51c2VyRW50aXR5U2VsZWN0ZWQpO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZExvY2FsRGF0YSwgc2V0U2VsZWN0ZWRMb2NhbERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2NvbWJvQm94QWNjZXNzUHJvZmlsZXMsIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0LCBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlLCBlcnJvcnMsIGdldFZhbHVlcyB9ID0gdXNlRm9ybSh7IG1vZGU6ICdvbkNoYW5nZScgfSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IHtcclxuICAgICAgICBsZXQgdXNlckxvZ2luID0ge307XHJcbiAgICAgICAgdXNlckxvZ2luLmlkVXNlckVudGl0eSA9IHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmlkVXNlckVudGl0eTtcclxuICAgICAgICB1c2VyTG9naW4uaWRMb2dpbiA9IHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmlkTG9naW47XHJcbiAgICAgICAgdXNlckxvZ2luLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdXNlckxvZ2luLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICAgICAgICBpZihkYXRhLnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBiY3J5cHQuaGFzaFN5bmMoZGF0YS5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbi5wYXNzd29yZCA9IGhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXJMb2dpbi5hY2Nlc3NQcm9maWxlTGlzdCA9IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJMb2dpbik7XHJcbiAgICAgICAgaWYoIXVzZXJMb2dpbi5pZFVzZXJFbnRpdHkpe1xyXG4gICAgICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX3Bvc3QodXNlckxvZ2luKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVzZXJFbnRpdHlEYXRhU2VydmljZS5fcHV0KHVzZXJMb2dpbikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBY2Nlc3NQcm9maWxlRGF0YVNlcnZpY2UuX2NvbWJvQm94QWNjZXNzUHJvZmlsZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShcIm5hbWVcIiwgdXNlckVudGl0eVNlbGVjdGVkUmVkdXgubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShcImVtYWlsXCIsIHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKFwicGFzc3dvcmRcIiwgdXNlckVudGl0eVNlbGVjdGVkUmVkdXgucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBY2Nlc3NQcm9maWxlTGlzdCh1c2VyRW50aXR5U2VsZWN0ZWRSZWR1eC5hY2Nlc3NQcm9maWxlTGlzdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4ID0gW107XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goYXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IHVzZXJFbnRpdHlTZWxlY3RlZFJlZHV4LmFjY2Vzc1Byb2ZpbGVMaXN0LmZpbmQoYXBBdXggPT4gYXBBdXgudmFsdWUgPT09IGFwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgucHVzaChhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzKGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCk7XHJcbiAgICAgICAgICAgICAgICBpZihjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJhY2Nlc3NQcm9maWxlXCIsIGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eFswXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21ib0JveEFjY2Vzc1Byb2ZpbGVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShcImFjY2Vzc1Byb2ZpbGVcIiwgcmVzcG9uc2UuZGF0YVswXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbdXNlckVudGl0eVNlbGVjdGVkUmVkdXhdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX3NhdmUoKSB7XHJcblxyXG4gICAgICAgIGlmICghc2VsZWN0ZWRMb2NhbERhdGEuaWQpIHtcclxuICAgICAgICAgICAgVXNlckVudGl0eURhdGFTZXJ2aWNlLl9wb3N0KHNlbGVjdGVkTG9jYWxEYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmN1cnJlbnQuc2hvdyh7IHNldmVyaXR5OiBcInN1Y2Nlc3NcIiwgc3VtbWFyeTogXCJTdWNlc3NvXCIsIGRldGFpbDogXCJSZWdpc3RybyBjcmlhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQT1NUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJFbnRpdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVc2VyRW50aXR5RGF0YVNlcnZpY2UuX3B1dChzZWxlY3RlZExvY2FsRGF0YSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5jdXJyZW50LnNob3coeyBzZXZlcml0eTogXCJzdWNjZXNzXCIsIHN1bW1hcnk6IFwiU3VjZXNzb1wiLCBkZXRhaWw6IFwiUmVnaXN0cm8gYWx0ZXJhZG8gY29tIHN1Y2Vzc28hXCIsIGxpZmU6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYRUNVVEFETyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlckVudGl0eVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkQWNjZXNzUHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXggPSBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdDtcclxuICAgICAgICBjb25zdCBhcCA9IGNvbWJvQm94QWNjZXNzUHJvZmlsZXMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IGdldFZhbHVlcyhcImFjY2Vzc1Byb2ZpbGVcIikpO1xyXG4gICAgICAgIHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4LnB1c2goYXApO1xyXG4gICAgICAgIGxldCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXggPSBjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IGdldFZhbHVlcyhcImFjY2Vzc1Byb2ZpbGVcIikpO1xyXG5cclxuICAgICAgICAvL2F0dWFsaXphIGNvbWJvYm94IGRhcyBmdW5jaW9uYWxpZGFkZSBkZWl4YW5kbyBhcGVuYXMgYSBmdW5jaW9uYWxpZGFkZXMgbsOjbyBhZGljaW9uYWRhcyBubyBjb21ib2JveFxyXG4gICAgICAgIHNldENvbWJvQm94QWNjZXNzUHJvZmlsZXMoY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4KTtcclxuICAgICAgICAvL2F0dWFsaXphIGEgZnVuY2lvbmFsaWRhZGUgc2VsZWNpb25hZGEgYXDDs3MgYSBhdHVhbGl6YcOnw6NvIGRvIGFycmF5IGRlIGZ1bmNpb2FsaWRhZGVzXHJcbiAgICAgICAgaWYgKGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCAmJiBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShcImFjY2Vzc1Byb2ZpbGVcIiwgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4WzBdLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9hdHVhbGl6YSBhIHRhYmVsYSBjb20gb3MgZGFkb3MgZGEgZnVuY2lvbmFsaWRhZGUgZSBhcyBwZXJtaXNzw7VlcyBkYSBtZXNtYVxyXG4gICAgICAgIHNldFNlbGVjdGVkQWNjZXNzUHJvZmlsZUxpc3Qoc2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3RBdXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUFjY2Vzc1Byb2ZpbGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEFjY2Vzc1Byb2ZpbGVzTGlzdEF1eCA9IHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS52YWx1ZSAhPT0gcm93RGF0YS52YWx1ZSB9KTtcclxuICAgICAgICBzZXRTZWxlY3RlZEFjY2Vzc1Byb2ZpbGVMaXN0KHNlbGVjdGVkQWNjZXNzUHJvZmlsZXNMaXN0QXV4KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbWJvQm94QWNjZXNzUHJvZmlsZUF1eCA9IGNvbWJvQm94QWNjZXNzUHJvZmlsZXM7XHJcbiAgICAgICAgY29tYm9Cb3hBY2Nlc3NQcm9maWxlQXV4LnB1c2gocm93RGF0YSk7XHJcbiAgICAgICAgc2V0Q29tYm9Cb3hBY2Nlc3NQcm9maWxlcyhjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXgpO1xyXG4gICAgICAgIHNldFZhbHVlKFwiYWNjZXNzUHJvZmlsZVwiLCBjb21ib0JveEFjY2Vzc1Byb2ZpbGVBdXhbMF0udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlkQnV0dG9uUmVtb3ZlTGlzdEdlbmVyYXRlKHJvd0RhdGEpIHtcclxuICAgICAgICByZXR1cm4gXCJidXR0b25SZW1vdmVGcm9tTGlzdFwiICsgcm93RGF0YS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3Rpb25Cb2R5VGVtcGxhdGUgPSAocm93RGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD17aWRCdXR0b25SZW1vdmVMaXN0R2VuZXJhdGUocm93RGF0YSl9IGljb249XCJwaSBwaS10cmFzaFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUFjY2Vzc1Byb2ZpbGUocm93RGF0YSl9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3QgcmVmPXt0b2FzdH0gLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZHNldCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19IGxlZ2VuZD1cIkNhZGFzdHJvIGRlIFVzdcOhcmlvc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2UodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0ZmllbGQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RS1tYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYWtMYWJlbD1cIkZyYWNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtTGFiZWw9XCJNw6lkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmdMYWJlbD1cIkZvcnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0TGFiZWw9XCJQb3IgZmF2b3IgZW50cmUgY29tIGEgc2VuaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dGZpZWxkIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY2Nlc3NQcm9maWxlc1wiPlBlcmZpcyBkZSBBY2Vzc286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY2Vzc1Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjZXNzUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjZXNzUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb21ib0JveEFjY2Vzc1Byb2ZpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRmaWVsZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlPVwiTmVuaHVtIFBlcmZpbCBEaXNwb27DrXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyIG1kOmNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImJ1dHRvbkFkZExpc3RcIiBsYWJlbD1cIkFkaWNpb25hclwiIG9uQ2xpY2s9e2FkZEFjY2Vzc1Byb2ZpbGV9IGRpc2FibGVkPXtjb21ib0JveEFjY2Vzc1Byb2ZpbGVzLmxlbmd0aCA8IDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBY2Nlc3NQcm9maWxlc0xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlTGF5b3V0PVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGhlYWRlcj1cIlNlbGVjaW9uYWRvXCIgc2VsZWN0aW9uTW9kZT1cInNpbmdsZVwiIGhlYWRlclN0eWxlPXt7IHdpZHRoOiBcIjNlbVwiIH19PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImxhYmVsXCIgaGVhZGVyPVwiUGVyZmlsIGRlIEFjZXNzb1wiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBib2R5PXthY3Rpb25Cb2R5VGVtcGxhdGV9PjwvQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyRW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYnV0dG9uQmFja1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fSBsYWJlbD1cIlZvbHRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImJ1dHRvblNhdmVcIiBsYWJlbD1cIlNhbHZhclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9GaWVsZHNldD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVXNlckVudGl0eUZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=