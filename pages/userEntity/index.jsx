import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link"

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Fieldset } from "primereact/fieldset";
import Select from "react-select"

import { UserEntityDataService } from "../../services/UserEntityDataService";
import withAuth from "../../components/withAuth";
import { loadUserEntitySelectedAction, loadUserEntityListAction } from "../../store/actions/userEntity";



function UserEntity(props) {

    const [userEntityPage, setUserEntityPage] = useState(useSelector((state) => state.userEntityListReducer.userEntityPage));

    const [selectedLocalData, setSelectedLocalData] = useState(null);

    const [itensPerPage, setItensPage] = useState([
        { value: 10, label: 10 },
        { value: 20, label: 20 },
        { value: 50, label: 50 }
    ]);

    const [rows, setRows] = useState(itensPerPage[0]);
    const [sortBy, setSortBy] = useState("name");
    const [numberPage, setNumberPage] = useState(0);

    const toast = useRef(null);

    const dispatch = useDispatch();


    useEffect(() => {
        page(numberPage, rows.value, sortBy);
    }, [rows, numberPage])

    function page(pageNo, pageSize, sortBy) {
        UserEntityDataService._page(pageNo, pageSize, sortBy).then(response => {
            const responseAux = {
                content: response.data.content,
                empty: response.data.empty,
                first: response.data.first,
                last: response.data.last,
                number: response.data.number,
                numberOfElements: response.data.numberOfElements,
                size: response.data.size,
                totalElements: response.data.totalElements,
                totalPages: response.data.totalPages
            }
            dispatch(loadUserEntityListAction(responseAux));
            setUserEntityPage(responseAux);
        }).catch(error => {
            if (error.response.data.message.indexOf("Usuário") === -1) {
                toast.current.show({ severity: "warn", summary: "Aviso", detail: "Servidor indisponível, contate o administrador", life: 3000 });
            } else {
                switch (error.response.status) {
                    case 401:
                        toast.current.show({ severity: "warn", summary: "Aviso", detail: error.response.data.message, life: 3000 });
                        break;
                    case 404:
                        toast.current.show({ severity: "warn", summary: "Aviso", detail: "Serviço indisponível", life: 3000 });
                        break;
                    default:
                        toast.current.show({ severity: "warn", summary: "Aviso", detail: "Erro no sistema, contate o administrador", life: 3000 });
                        break;
                }
            }
        })
    }

    const novo = () => {
        dispatch(loadUserEntitySelectedAction(null));
    }

    const _delete = (idUserEntity) => {
        UserEntityDataService._delete(idUserEntity).then(response => {
            toast.current.show({ severity: "success", summary: "Sucesso", detail: "Registro excluído com sucesso!", life: 3000 });
            setTimeout(() => {
                console.log("EXECUTADO DELETE");
            }, 3000);
            page(numberPage, rows.value, sortBy);
        }).catch(error => {
            console.log(error);
        })
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Link href="/userEntity/form">
                    <Button style={{ marginRight: "10px" }} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" disabled={!selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity} />
                </Link>

                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => _delete(rowData.idUserEntity)} disabled={!selectedLocalData || rowData.idUserEntity !== selectedLocalData.idUserEntity} />
            </>
        );
    }

    function selectLocalData(e) {
        if (e && e.value) {
            dispatch(loadUserEntitySelectedAction(e.value));
            setSelectedLocalData(e.value);
        } else {
            dispatch(loadUserEntitySelectedAction(null));
            setSelectedLocalData(null);
        }

    }

    function handleItemPerPage(item) {
        const index = itensPerPage.indexOf(item)
        if (index >= 0) {
            setRows(itensPerPage[index]);
        }
    }

    function numberPageSum(numberPage) {
        setNumberPage(numberPage--);
    }

    function numberPageMinus(numberPage) {
        setNumberPage(numberPage++);
    }


    const template = {
        "RowsPerPageDropdown": () => {
            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: "var(--text-color)", userSelect: "none" }}>Itens por página: </span>
                    <Select options={itensPerPage} value={rows} onChange={(e) => handleItemPerPage(e)} isDisabled={!userEntityPage} />
                </React.Fragment>
            );
        },
        "CurrentPageReport": () => {
            return (
                <span style={{ color: "var(--text-color)", userSelect: "none", width: "120px", textAlign: "center" }}>
                    {userEntityPage && userEntityPage.number + 1} - {userEntityPage && userEntityPage.numberOfElements} de {userEntityPage && userEntityPage.totalElements}
                </span>
            )
        },
        "PrevPageLink": () => {
            return (
                <Button label="Anterior" onClick={() => numberPageMinus(numberPage)} disabled={!userEntityPage || userEntityPage.first} style={{ marginRight: "10px" }} />
            )
        },
        "NextPageLink": () => {
            return (
                <Button label="Próximo" onClick={() => numberPageSum(numberPage)} disabled={!userEntityPage || userEntityPage.last} />
            )
        },
    };

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Lista de Usuários">

                <Link href="/userEntity/form">
                    <Button id="new-button" label="Novo" onClick={() => novo({})} />
                </Link>

                <DataTable
                    scrollHeight="400px"
                    scrollable
                    header="Usuários Cadastrados"
                    value={userEntityPage && userEntityPage.content}
                    dataKey="idUserEntity"
                    selection={selectedLocalData}
                    onSelectionChange={e => selectLocalData(e)}
                    paginator
                    paginatorTemplate={template}
                    first={numberPage}
                    rows={rows.value}
                    paginatorClassName="justify-content-end"
                >
                    <Column header="Selecionado" selectionMode="single" headerStyle={{ width: "3em" }}></Column>
                    <Column field="name" header="Nome" sortable></Column>
                    <Column field="email" header="E-mail" sortable></Column>
                    <Column field="accessProfilesText" header="Perfis de Acesso" sortable></Column>
                    <Column body={actionBodyTemplate}></Column>
                </DataTable>

                <Link href="/">
                    <Button id="back-button" label="Voltar" />
                </Link>

            </Fieldset>
        </>
    )
}

export default withAuth(UserEntity);