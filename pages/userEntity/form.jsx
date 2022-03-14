import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link"
import { useRouter } from "next/router"

import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import withAuth from "../../components/withAuth";

import "primeflex/primeflex.css";

import { UserEntityDataService } from "../../services/UserEntityDataService";
import { AccessProfileDataService } from "../../services/AccessProfileDataService";

import { loadUserEntitySelectedAction } from "../../store/actions/userEntity";



function UserEntityForm(props) {

    const [userEntitySelected, setUserEntitySelected] = useState(useSelector((state) => state.userEntitySelectedReducer.userEntitySelected));

    const [comboBoxAccessProfiles, setComboBoxAccessProfiles] = useState([]);
    const [selectedComboBoxAccessProfile, setSelectedComboBoxAccessProfile] = useState(null);
    const [selectedAccessProfilesList, setSelectedAccessProfileList] = useState([]);


    const toast = useRef(null);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        AccessProfileDataService._comboBoxAccessProfiles().then(response => {
            setComboBoxAccessProfiles(response.data);
            setSelectedComboBoxAccessProfile(response.data[0])
        })
    }, []);


    function _save() {

        if (!userEntitySelected.id) {
            UserEntityDataService._post(userEntitySelected).then(response => {
                toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro criado com sucesso!", life: 3000 });
                setTimeout(() => {
                    console.log("EXECUTADO POST");
                    router.push("/userEntity");
                }, 3000);
            })
        } else {
            UserEntityDataService._put(userEntitySelected).then(response => {
                toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro alterado com sucesso!", life: 3000 });
                setTimeout(() => {
                    console.log("EXECUTADO PUT");
                    router.push("/userEntity");
                }, 3000);

            })
        }
    }

    function onChangeName(e) {
        let userEntityAux = { ...userEntitySelected };
        userEntityAux.name = e.target.value;
        setUserEntitySelected(userEntityAux);
    }

    function onChangeEmail(e) {
        let userEntityAux = { ...userEntitySelected };
        userEntityAux.email = e.target.value;
        setUserEntitySelected(userEntityAux);
    }

    function handleAccessProfileComboBox(value) {
        const index = comboBoxAccessProfiles.map(function (item) { return item.value }).indexOf(value);
        if (index >= 0) {
            setSelectedComboBoxAccessProfile(comboBoxAccessProfiles[index]);
        }
    }

    const removeAccessProfile = (rowData) => {
        let selectedAccessProfilesListAux = selectedAccessProfilesList.filter(function (item) { return item.id !== rowData.id });
        setSelectedAccessProfileList(selectedAccessProfilesListAux);

        let comboBoxAccessProfilesAux = comboBoxAccessProfiles;
        comboBoxAccessProfilesAux.push({ value: rowData.id, label: rowData.name });
        setComboBoxAccessProfiles(comboBoxAccessProfilesAux);
        setSelectedComboBoxAccessProfile(comboBoxAccessProfilesAux[0]);
    }

    const addAccessProfile = () => {
        let selectedAccessProfilesListAux = selectedAccessProfilesList;
        selectedAccessProfilesListAux.push({ id: selectedComboBoxAccessProfile.value, name: selectedComboBoxAccessProfile.label });
        let comboBoxAccessProfileAux = comboBoxAccessProfiles.filter(item => item.label !== selectedComboBoxAccessProfile.label);

        //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox
        setComboBoxAccessProfiles(comboBoxAccessProfileAux);
        //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades
        setSelectedComboBoxAccessProfile(comboBoxAccessProfileAux[0]);
        //atualiza a tabela com os dados da funcionalidade e as permissões da mesma
        setSelectedAccessProfileList(selectedAccessProfilesListAux);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => removeAccessProfile(rowData)} />
            </>
        );
    }

    return (
        <>
            <Toast ref={toast} />
            <Fieldset style={{ marginTop: "15px" }} legend="Cadastro de Usuários">

                <div className="field">
                    <label htmlFor="name">Nome: </label>
                    <InputText id="name" value={userEntitySelected && userEntitySelected.name} onChange={(e) => onChangeName(e)} className="inputfield w-full" />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail:</label>
                    <InputText id="email" value={userEntitySelected && userEntitySelected.email} onChange={(e) => onChangeEmail(e)} className="inputfield w-full" />
                </div>

                <div className="formgrid grid">
                    <div className="field col-12">
                        <label htmlFor="accessProfiles">Perfis de Acesso:</label>
                        <Dropdown emptyMessage="Nenhum Perfil de Acesso Disponível" className="inputfield w-full" optionValue="value" optionLabel="label" options={comboBoxAccessProfiles} value={selectedComboBoxAccessProfile && selectedComboBoxAccessProfile.value} onChange={(e) => handleAccessProfileComboBox(e.target.value)} />
                    </div>
                    <div className="field col-12 md:col-6">
                        <Button id="back-button" label="Adicionar" onClick={addAccessProfile} disabled={comboBoxAccessProfiles.length < 1} />
                    </div>
                </div>

                <div>
                    <DataTable
                        scrollHeight="300px"
                        scrollable
                        value={selectedAccessProfilesList}
                        responsiveLayout="scroll">
                        <Column header="Selecionado" selectionMode="single" headerStyle={{ width: "3em" }}></Column>
                        <Column field="name" header="Funcionalidade"></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>

                <Link href="/userEntity">
                    <Button id="back-button" style={{ marginRight: "15px" }} label="Voltar" />
                </Link>

                <Button label="Salvar" onClick={_save} />

            </Fieldset>
        </>
    )

}

export default withAuth(UserEntityForm);