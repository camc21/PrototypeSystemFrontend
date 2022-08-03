import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Fieldset } from 'primereact/fieldset';
import Select from 'react-select'

import { AnimeDataService } from '../../services/AnimeDataService';
import withAuth from '../../components/withAuth';
import { loadSelectedDataAction, loadAnimeListAction } from '../../store/actions/anime';



function Anime(props) {

    const [animeDataPage, setAnimeDataPage] = useState(useSelector((state) => state.animeListReducer.animeDataPage));

    const [animeSelected, setAnimeSelected] = useState(useSelector((state) => state.animeSelectedReducer.animeSelected));

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
        AnimeDataService._page(pageNo, pageSize, sortBy).then(response => {
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
            dispatch(loadAnimeListAction(responseAux));
            setAnimeDataPage(responseAux);
        }).catch(error => {
            if(error.response){
                switch (error.response.status) {
                    case 401:
                        toast.current.show({ severity: 'warn', summary: 'Aviso', detail: error.response.data.message, life: 3000 });
                        break;
                    case 404:
                        toast.current.show({ severity: 'warn', summary: 'Aviso', detail: "Serviço indisponível", life: 3000 });
                        break;
                    default:
                        toast.current.show({ severity: 'warn', summary: 'Aviso', detail: "Erro no sistema, contate o administrador", life: 3000 });
                        break;
                }
            } else {
                toast.current.show({ severity: 'warn', summary: 'Aviso', detail: "Serviço indisponível", life: 3000 });
            }
      
        })
    }

    const novo = () => {
        dispatch(loadSelectedDataAction(null));
    }

    const editar = (rowData) => {
        dispatch(loadSelectedDataAction(rowData));
        setAnimeSelected(rowData)
    }

    const _delete = (rowData) => {
        const index = animeDataPage.content.indexOf(rowData);
        AnimeDataService._delete(rowData.id).then(response => {
            toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Anime ' + rowData.nome + ' excluído com sucesso!', life: 3000 });
            page(numberPage, rows.value, sortBy);
        }).catch(error => {
            toast.current.show({ severity: 'warn', summary: 'Aviso', detail: error.response.data.message, life: 3000 });
        })
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Link href="/anime/form">
                    <Button style={{ marginRight: '10px' }} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editar(rowData)} disabled={!animeSelected || !animeSelected.id} />
                </Link>

                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => _delete(rowData)} disabled={!animeSelected || !animeSelected.id} />
            </>
        );
    }

    const possuiManga = (atributte) => {
        if (atributte) {
            return 'Possui Mangá';
        } return 'Não Possui Mangá';
    }

    function selectAnime(e) {
        if (e.value) {
            dispatch(loadSelectedDataAction(e.value))
            setAnimeSelected(e.value)
        } else {
            dispatch(loadSelectedDataAction(null))
            setAnimeSelected(null)
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
        'RowsPerPageDropdown': () => {
            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Itens por página: </span>
                    <Select options={itensPerPage} value={rows} onChange={(e) => handleItemPerPage(e)} isDisabled={!animeDataPage} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': () => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {animeDataPage && animeDataPage.number + 1} - {animeDataPage && animeDataPage.numberOfElements} de {animeDataPage && animeDataPage.totalElements}
                </span>
            )
        },
        'PrevPageLink': () => {
            return (
                <Button label="Anterior" onClick={() => numberPageMinus(numberPage)} disabled={!animeDataPage || animeDataPage.first} style={{ marginRight: '10px' }} />
            )
        },
        'NextPageLink': () => {
            return (
                <Button label="Próximo" onClick={() => numberPageSum(numberPage)} disabled={!animeDataPage || animeDataPage.last} />
            )
        },
    };

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Anime">

                <Link href="/anime/form">
                    <Button id='new-button' label="Novo" onClick={() => novo({})} />
                </Link>

                <DataTable
                    scrollHeight="400px"
                    scrollable
                    header="Animes Cadastrados"
                    value={animeDataPage && animeDataPage.content}
                    selection={animeSelected}
                    onSelectionChange={e => selectAnime(e)}
                    dataKey="id"
                    paginator
                    paginatorTemplate={template}
                    first={numberPage}
                    rows={rows.value}
                    paginatorClassName="justify-content-end"
                >
                    <Column header="Selecionado" selectionMode="single" headerStyle={{ width: '3em' }}></Column>
                    <Column field="name" header="Nome" sortable></Column>
                    <Column field="season" header="Temporada" sortable></Column>
                    <Column field={e => possuiManga(e.hasManga)} header="Possui mangá ?" sortable></Column>
                    <Column body={actionBodyTemplate}></Column>
                </DataTable>

                <Link href="/">
                    <Button id='back-button' label="Voltar" />
                </Link>

            </Fieldset>
        </>
    )
}

export default withAuth(Anime);