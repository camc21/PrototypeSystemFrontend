import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link"
import { useRouter } from "next/router"

import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Password } from 'primereact/password';
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
    const [selectedAccessProfilesList, setSelectedAccessProfileList] = useState([]);


    const toast = useRef(null);
    const router = useRouter();
    const dispatch = useDispatch();


    useEffect(() => {
        AccessProfileDataService._comboBoxAccessProfiles().then(response => {
            setComboBoxAccessProfiles(response.data);
            setValue("accessProfile", response.data[0].value);
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

    const addAccessProfile = () => {
        let selectedAccessProfilesListAux = selectedAccessProfilesList;
        const ap = comboBoxAccessProfiles.find(item => item.value === getValues("accessProfile"));
        selectedAccessProfilesListAux.push(ap);
        let comboBoxAccessProfileAux = comboBoxAccessProfiles.filter(item => item.value !== getValues("accessProfile"));

        //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox
        setComboBoxAccessProfiles(comboBoxAccessProfileAux);
        //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades
        if(comboBoxAccessProfileAux && comboBoxAccessProfileAux.length > 0){
            setValue("accessProfile", comboBoxAccessProfileAux[0].value);
        }
        //atualiza a tabela com os dados da funcionalidade e as permissões da mesma
        setSelectedAccessProfileList(selectedAccessProfilesListAux);
    }

    const removeAccessProfile = (rowData) => {
        console.log(rowData);
        let selectedAccessProfilesListAux = selectedAccessProfilesList.filter(function (item) { return item.value !== rowData.value });
        setSelectedAccessProfileList(selectedAccessProfilesListAux);

        let comboBoxAccessProfileAux = comboBoxAccessProfiles;
        comboBoxAccessProfileAux.push(rowData);
        setComboBoxAccessProfiles(comboBoxAccessProfileAux);
        setValue("accessProfile", comboBoxAccessProfileAux[0].value);
    }

    function idButtonRemoveListGenerate(rowData){
        return "buttonRemoveFromList" + rowData.id;
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button type="button" id={idButtonRemoveListGenerate(rowData)} icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => removeAccessProfile(rowData)} />
            </>
        );
    }

    const { control, register, handleSubmit, setValue, errors, getValues } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <Fieldset style={{ marginTop: "15px" }} legend="Cadastro de Usuários">

                    <div className="field">
                        <label htmlFor="name">Nome: </label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={""}
                            render={({ field }) =>
                                <InputText
                                    {...field}
                                    id="name"
                                    name="name"
                                    placeholder="Nome"
                                    className="inputfield w-full"
                                />}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="email">E-mail:</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue={""}
                            render={({ field }) =>
                                <InputText
                                    {...field}
                                    id="email"
                                    name="email"
                                    placeholder="E=mail"
                                    className="inputfield w-full"
                                />}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="login">Login:</label>
                        <Controller
                            name="login"
                            control={control}
                            defaultValue={""}
                            render={({ field }) =>
                                <InputText
                                    {...field}
                                    id="login"
                                    name="login"
                                    placeholder="Login"
                                    className="inputfield w-full"
                                />}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password:</label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue={""}
                            render={({ field }) =>
                                <Password
                                    {...field}
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    toggleMask
                                    autoComplete="new-password"
                                    weakLabel="Fraca"
                                    mediumLabel="Média"
                                    strongLabel="Forte"
                                    promptLabel="Por favor entre com a senha"
                                    className="inputfield w-full"
                                />}
                        />
                    </div>

                    <div className="formgrid grid">
                        <div className="field col-12">
                            <label htmlFor="accessProfiles">Perfis de Acesso:</label>
                            <Controller
                                name="accessProfile"
                                control={control}
                                defaultValue={undefined}
                                render={({ field }) =>
                                    <Dropdown
                                        {...field}
                                        id="accessProfile"
                                        name="accessProfile"
                                        options={comboBoxAccessProfiles}
                                        className="inputfield w-full"
                                        emptyMessage="Nenhum Perfil Disponível"
                                    />}
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <Button type="button" id="buttonAddList" label="Adicionar" onClick={addAccessProfile} disabled={comboBoxAccessProfiles.length < 1} />
                        </div>
                    </div>

                    <div>
                        <DataTable
                            scrollHeight="300px"
                            scrollable
                            value={selectedAccessProfilesList}
                            responsiveLayout="scroll">
                            <Column header="Selecionado" selectionMode="single" headerStyle={{ width: "3em" }}></Column>
                            <Column field="label" header="Perfil de Acesso"></Column>
                            <Column body={actionBodyTemplate}></Column>
                        </DataTable>
                    </div>

                    <Link href="/userEntity">
                        <Button type="button" id="buttonBack" style={{ marginRight: "15px" }} label="Voltar" />
                    </Link>

                    <Button type="submit" id="buttonSave" label="Salvar" />

                </Fieldset>
            </form>
        </>
    )

}

export default withAuth(UserEntityForm);