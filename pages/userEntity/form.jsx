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




function UserEntityForm(props) {

    const userEntitySelectedRedux = useSelector((state) => state.userEntitySelectedReducer.userEntitySelected);

    const [selectedPermissionDataTable, setSelectedPermissionDataTable] = useState(null);

    const [comboBoxAccessProfiles, setComboBoxAccessProfiles] = useState([]);
    const [selectedAccessProfilesList, setSelectedAccessProfileList] = useState([]);


    const toast = useRef(null);
    const router = useRouter();
    const dispatch = useDispatch();

    const { control, register, handleSubmit, setValue, errors, getValues } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        let userLogin = {};
        userLogin.idUserEntity = userEntitySelectedRedux ? userEntitySelectedRedux.idUserEntity : null;
        userLogin.idLogin = userEntitySelectedRedux ? userEntitySelectedRedux.idLogin : null;
        userLogin.name = data.name;
        userLogin.email = data.email;
        if(data.password){
            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(data.password, salt);
            userLogin.password = hash;
        }
        userLogin.accessProfileList = selectedAccessProfilesList;
        if(!userLogin.idUserEntity){
            UserEntityDataService._post(userLogin).then(response => {
                toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro criado com sucesso!", life: 3000 });
                setTimeout(() => {
                    console.log("EXECUTADO POST");
                    router.push("/userEntity");
                }, 3000);
            }).catch(error => {
                console.log(error);
            })
        } else {
            UserEntityDataService._put(userLogin).then(response => {
                toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro alterado com sucesso!", life: 3000 });
                setTimeout(() => {
                    console.log("EXECUTADO PUT");
                    router.push("/userEntity");
                }, 3000);
            }).catch(error => {
                console.log(error);
            })
        }
        
        
    }

    useEffect(() => {
        console.log(userEntitySelectedRedux);
        AccessProfileDataService._comboBoxAccessProfiles().then(response => {
            if (userEntitySelectedRedux) {
                setValue("name", userEntitySelectedRedux.name);
                setValue("email", userEntitySelectedRedux.email);
                setValue("password", "");
                setSelectedAccessProfileList(userEntitySelectedRedux.accessProfileList);
                let comboBoxAccessProfileAux = [];
                response.data.forEach(ap => {
                    const object = userEntitySelectedRedux.accessProfileList.find(apAux => apAux.value === ap.value);
                    if (!object) {
                        comboBoxAccessProfileAux.push(ap);
                    }
                });
                setComboBoxAccessProfiles(comboBoxAccessProfileAux);
                if(comboBoxAccessProfileAux.length > 0){
                    setValue("accessProfile", comboBoxAccessProfileAux[0].value);
                }
            } else {
                setComboBoxAccessProfiles(response.data);
                if(response.data.length > 0){
                    setValue("accessProfile", response.data[0].value);
                }
                
            }
        })
    }, [userEntitySelectedRedux]);


    const addAccessProfile = () => {
        let selectedAccessProfilesListAux = selectedAccessProfilesList;
        const ap = comboBoxAccessProfiles.find(item => item.value === getValues("accessProfile"));
        selectedAccessProfilesListAux.push(ap);
        let comboBoxAccessProfileAux = comboBoxAccessProfiles.filter(item => item.value !== getValues("accessProfile"));

        //atualiza combobox das funcionalidade deixando apenas a funcionalidades não adicionadas no combobox
        setComboBoxAccessProfiles(comboBoxAccessProfileAux);
        //atualiza a funcionalidade selecionada após a atualização do array de funcioalidades
        if (comboBoxAccessProfileAux && comboBoxAccessProfileAux.length > 0) {
            setValue("accessProfile", comboBoxAccessProfileAux[0].value);
        }
        //atualiza a tabela com os dados da funcionalidade e as permissões da mesma
        setSelectedAccessProfileList(selectedAccessProfilesListAux);
    }

    const removeAccessProfile = (rowData) => {
        let selectedAccessProfilesListAux = selectedAccessProfilesList.filter(function (item) { return item.value !== rowData.value });
        setSelectedAccessProfileList(selectedAccessProfilesListAux);

        let comboBoxAccessProfileAux = comboBoxAccessProfiles;
        comboBoxAccessProfileAux.push(rowData);
        setComboBoxAccessProfiles(comboBoxAccessProfileAux);
        setValue("accessProfile", comboBoxAccessProfileAux[0].value);
    }

    function idButtonRemoveListGenerate(rowData) {
        return "buttonRemoveFromList" + rowData.value;
    }

    function selectedPermissionDataTableFunction(e) {
        if (e && e.value) {
            setSelectedPermissionDataTable(e.value);
        } else {
            setSelectedPermissionDataTable(null);
        }
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button type="button" id={idButtonRemoveListGenerate(rowData)} icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => removeAccessProfile(rowData)} />
            </>
        );
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
                            render={({ field: { onChange, value } }) =>
                                <InputText
                                    id="name"
                                    name="name"
                                    placeholder="Nome"
                                    onChange={value => onChange(value)}
                                    value={value}
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
                                    placeholder="E-mail"
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
                                    defaultValue={undefined}
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
                            selection={selectedPermissionDataTable}
                            onSelectionChange={e => selectedPermissionDataTableFunction(e)}
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