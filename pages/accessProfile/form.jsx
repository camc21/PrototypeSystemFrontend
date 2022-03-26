import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link"
import { useRouter } from "next/router"

import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';


import withAuth from "../../components/withAuth";

import "primeflex/primeflex.css";

import { AccessProfileDataService } from "../../services/AccessProfileDataService";
import { FunctionalityDataService } from "../../services/FunctionalityDataService";

import { loadAccessProfileSelectedAction } from "../../store/actions/accessProfile";



function AccessProfileForm(props) {

    const accessProfileSelectedRedux = useSelector((state) => state.accessProfileSelectedReducer.accessProfileSelected);

    const [comboBoxFunctionalities, setComboBoxFunctionalities] = useState([]);

    const [accessProfileData, setAccessProfileData] = useState({ id: null, name: "", description: "", permissions: [] });
    const [selectedComboBoxFunctionality, setSelectedComboBoxFunctionality] = useState({});
    const [dataTablePermission, setDataTablePermission] = useState([]);
    const [permissions, setPermissions] = useState({ readingPermission: false, writingPermission: false });

    const toast = useRef(null);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        FunctionalityDataService._comboBox().then(response => {
            let comboBoxAux = [];
            if (accessProfileSelectedRedux && accessProfileSelectedRedux.permissions) {
                for (let i = 0; i < response.data.length; i++) {
                    for (let j = 0; j < accessProfileSelectedRedux.permissions.length; j++) {
                        let value = accessProfileSelectedRedux.permissions.find(item => item.functonalityId === response.data[i].value);
                        if(!value){
                            comboBoxAux.push(response.data[i]);
                            break
                        }
                    }
                }
                setComboBoxFunctionalities(comboBoxAux);
                setSelectedComboBoxFunctionality(comboBoxAux[0]);
            } else {
                setComboBoxFunctionalities(response.data);
                setSelectedComboBoxFunctionality(response.data[0]);
            }
        }).catch(error => {
            switch (error.response.status) {
                case 401:
                    toast.current.show({ severity: "warn", summary: "Aviso", detail: error.response.data.message, life: 5000 });
                    break;
                case 404:
                    toast.current.show({ severity: "warn", summary: "Aviso", detail: "Serviço indisponível", life: 5000 });
                    break;
                default:
                    toast.current.show({ severity: "warn", summary: "Aviso", detail: "Erro no sistema, contate o administrador", life: 5000 });
                    break;
            }
        })
    }, [accessProfileSelectedRedux]);

    useEffect(() => {
        if (accessProfileSelectedRedux && accessProfileSelectedRedux.permissions) {
            let accessProfileDataAux = {};
            accessProfileDataAux.id = accessProfileSelectedRedux.id;
            accessProfileDataAux.name = accessProfileSelectedRedux.name;
            accessProfileDataAux.description = accessProfileSelectedRedux.description;
            setAccessProfileData(accessProfileDataAux);
            setDataTablePermission(accessProfileSelectedRedux.permissions);
        }
    }, [accessProfileSelectedRedux])


    function _save() {
        let accessProfileDataAux = accessProfileData;
        accessProfileDataAux.permissions = dataTablePermission;
        if (!accessProfileDataAux.id) {
            AccessProfileDataService._post(accessProfileDataAux).then(response => {
                toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro criado com sucesso!", life: 5000 });
                setTimeout(() => {
                    console.log("EXECUTADO POST");
                    router.push("/accessProfile");
                }, 3000);
            })
        } else {
            AccessProfileDataService._put(accessProfileDataAux).then(response => {
                toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro alterado com sucesso!", life: 5000 });
                setTimeout(() => {
                    console.log("EXECUTADO PUT");
                    router.push("/accessProfile");
                }, 3000);
            })
        }
    }

    function onChangeName(e) {
        setAccessProfileData({ ...accessProfileData, name: e.target.value })
    }

    function onChangeDescription(e) {
        setAccessProfileData({ ...accessProfileData, description: e.target.value })
    }

    function handleFunctionalityComboBox(value) {
        const index = comboBoxFunctionalities.map(function (item) { return item.value }).indexOf(value);
        if (index >= 0) {
            setSelectedComboBoxFunctionality(comboBoxFunctionalities[index]);
        }
    }

    function onChangeReadingPermission(e) {
        setPermissions({ ...permissions, readingPermission: e.checked });
    }

    function onChangeWritingPermission(e) {
        setPermissions({ ...permissions, writingPermission: e.checked });
    }

    const addFunctionality = () => {
        let dataTablePermissionAux = dataTablePermission;
        dataTablePermissionAux.push({ accessProfileId: accessProfileSelectedRedux.id, profileName: accessProfileSelectedRedux.name, profileDescription: accessProfileSelectedRedux.description, functonalityId: selectedComboBoxFunctionality.value, functionalityName: selectedComboBoxFunctionality.label, writePermission: permissions.writingPermission, readPermission: permissions.readingPermission });
        let comboBoxFunctionalitiesAux = comboBoxFunctionalities.filter(item => item.label !== selectedComboBoxFunctionality.label);

        //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox
        setComboBoxFunctionalities(comboBoxFunctionalitiesAux);
        //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades
        setSelectedComboBoxFunctionality(comboBoxFunctionalitiesAux[0]);
        //atualiza a tabela com os dados da funcionalidade e as permissões da mesma
        setDataTablePermission(dataTablePermissionAux);
        //atualiza os checkbox com permissões setando os mesmo como false após adicionar
        setPermissions({ readingPermission: false, writingPermission: false });
    }

    const removeFunctionality = (rowData) => {
        let dataTablePermissionAux = dataTablePermission.filter(function (item) { return item.functonalityId !== rowData.functonalityId });
        setDataTablePermission(dataTablePermissionAux);

        let comboBoxFunctionalitiesAux = comboBoxFunctionalities;
        comboBoxFunctionalitiesAux.push({ value: rowData.functonalityId, label: rowData.functionalityName });
        setComboBoxFunctionalities(comboBoxFunctionalitiesAux);
        setSelectedComboBoxFunctionality(comboBoxFunctionalitiesAux[0]);
    }

    function convertBooleanToText(value) {
        if (value) {
            return "Sim";
        } return "Não";
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => removeFunctionality(rowData)} />
            </>
        );
    }

    return (
        <>
            <Toast ref={toast} />
            <Fieldset style={{ marginTop: "15px" }} legend="Cadastro de Perfis de Acesso">

                <div className="field">
                    <label htmlFor="name">Nome: </label>
                    <InputText className="inputfield w-full" id="name" value={accessProfileData.name} onChange={(e) => onChangeName(e)} />
                </div>

                <div className="field">
                    <label htmlFor="desciption">Descrição:</label>
                    <InputText className="inputfield w-full" id="description" value={accessProfileData.description} onChange={(e) => onChangeDescription(e)} />
                </div>

                <div className="formgroup-inline flex align-items-stretch flex-wrap">
                    <div className="field">
                        <label htmlFor="functionalities">Funcionalidades:</label>
                        <Dropdown className="inputfield w-full" optionValue="value" optionLabel="label" options={comboBoxFunctionalities} value={selectedComboBoxFunctionality && selectedComboBoxFunctionality.value} onChange={(e) => handleFunctionalityComboBox(e.target.value)} />
                    </div>

                    <div className="field-checkbox flex align-items-center justify-content-center">
                        <Checkbox inputId="readingPermission" checked={permissions.readingPermission} onChange={e => onChangeReadingPermission(e)} />
                        <label htmlFor="readingPermission">Permissão de leitura</label>
                    </div>

                    <div className="field-checkbox flex align-items-center justify-content-center">
                        <Checkbox inputId="writingPermission" checked={permissions.writingPermission} onChange={e => onChangeWritingPermission(e)} />
                        <label htmlFor="writingPermission">Permissão de escrita</label>
                    </div>

                    <div className="field flex align-items-center justify-content-center">
                        <Button id="back-button" label="Adicionar" onClick={addFunctionality} disabled={comboBoxFunctionalities.length < 1} />
                    </div>
                </div>

                <div>
                    <DataTable
                        scrollHeight="300px"
                        scrollable
                        value={dataTablePermission}
                        responsiveLayout="scroll">
                        <Column header="Selecionado" selectionMode="single" headerStyle={{ width: "3em" }}></Column>
                        <Column field="functionalityName" header="Funcionalidade"></Column>
                        <Column field={(e) => convertBooleanToText(e.readPermission)} header="Leitura"></Column>
                        <Column field={(e) => convertBooleanToText(e.writePermission)} header="Escrita"></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>



                <Link href="/accessProfile">
                    <Button id="back-button" style={{ marginRight: "15px" }} label="Voltar" />
                </Link>

                <Button label="Salvar" onClick={_save} />

            </Fieldset>
        </>
    )

}

export default withAuth(AccessProfileForm);