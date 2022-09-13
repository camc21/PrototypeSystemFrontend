import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link"

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Fieldset } from "primereact/fieldset";
import Select from "react-select"

import { AccessProfileDataService } from "../../services/AccessProfileDataService";
import withAuth from "../../components/withAuth";
import { loadAccessProfileSelectedAction, loadAccessProfileListAction } from "../../store/actions/accessProfile";



function AccessProfile(props) {

    const [accessProfilePage, setAccessProfilePage] = useState(useSelector((state) => state.accessProfileListReducer.accessProfilePage));
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
        return () => {
            setAccessProfilePage(null);
            setItensPage(null);
            setRows(null);
            setSortBy(null);
            setNumberPage(null);
        }
    }, [])



    useEffect(() => {
        page(numberPage, rows.value, sortBy);
    }, [rows, numberPage])

    function page(pageNo, pageSize, sortBy) {
        AccessProfileDataService._page(pageNo, pageSize, sortBy).then(response => {
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
            dispatch(loadAccessProfileListAction(responseAux));
            setAccessProfilePage(responseAux);
        }).catch(error => {
            if (error.response.data.message.includes("403")) {
                toast.current.show({ severity: "warn", summary: "Aviso", detail: error.response.data.message, life: 3000 });
            } else {
                toast.current.show({ severity: "warn", summary: "Aviso", detail: "Erro no sistema, contate o administrador", life: 3000 });
            }
        })
    }

    const novo = () => {
        dispatch(loadAccessProfileSelectedAction(null));
    }

    const _delete = (rowData) => {
        const index = accessProfilePage.content.indexOf(rowData);
        AccessProfileDataService._delete(rowData.id).then(response => {
            toast.current.show({ severity: "error", summary: "Erro", detail: "Perfil de Acesso " + rowData.nome + " excluído com sucesso!", life: 3000 });
            page(numberPage, rows.value, sortBy);
        }).catch(error => {
            toast.current.show({ severity: "warn", summary: "Aviso", detail: error.response.data.message, life: 3000 });
        })
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Link href="/access-profile/form">
                    <Button style={{ marginRight: "10px" }} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" disabled={!selectedLocalData || rowData.id !== selectedLocalData.id} />
                </Link>

                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => _delete(rowData)} disabled={!selectedLocalData || rowData.id !== selectedLocalData.id} />
            </>
        );
    }

    function selectLocalData(e) {
        if (e && e.value) {
            dispatch(loadAccessProfileSelectedAction(e.value));
            setSelectedLocalData(e.value);
        } else {
            dispatch(loadAccessProfileSelectedAction(null));
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
                    <Select options={itensPerPage} value={rows} onChange={(e) => handleItemPerPage(e)} isDisabled={!accessProfilePage} />
                </React.Fragment>
            );
        },
        "CurrentPageReport": () => {
            return (
                <span style={{ color: "var(--text-color)", userSelect: "none", width: "120px", textAlign: "center" }}>
                    {accessProfilePage && accessProfilePage.number + 1} - {accessProfilePage && accessProfilePage.numberOfElements} de {accessProfilePage && accessProfilePage.totalElements}
                </span>
            )
        },
        "PrevPageLink": () => {
            return (
                <Button label="Anterior" onClick={() => numberPageMinus(numberPage)} disabled={!accessProfilePage || accessProfilePage.first} style={{ marginRight: "10px" }} />
            )
        },
        "NextPageLink": () => {
            return (
                <Button label="Próximo" onClick={() => numberPageSum(numberPage)} disabled={!accessProfilePage || accessProfilePage.last} />
            )
        },
    };

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Lista de Perfis">

                <Link href="/access-profile/form">
                    <Button id="new-button" label="Novo" onClick={() => novo({})} />
                </Link>

                <DataTable
                    scrollHeight="400px"
                    scrollable
                    header="Perfis de Acesso Cadastrados"
                    value={accessProfilePage && accessProfilePage.content}
                    selection={selectedLocalData}
                    onSelectionChange={e => selectLocalData(e)}
                    dataKey="id"
                    paginator
                    paginatorTemplate={template}
                    first={numberPage}
                    rows={rows.value}
                    paginatorClassName="justify-content-end"
                >
                    <Column header="Selecionado" selectionMode="single" headerStyle={{ width: "3em" }}></Column>
                    <Column field="name" header="Nome" sortable></Column>
                    <Column field="description" header="Descrição" sortable></Column>
                    <Column body={actionBodyTemplate}></Column>
                </DataTable>

                <Link href="/">
                    <Button id="back-button" label="Voltar" />
                </Link>

            </Fieldset>
        </>
    )
}

export default withAuth(AccessProfile);