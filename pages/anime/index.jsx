import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';

import { AnimeDataService } from '../../services/AnimeDataService';
import withAuth from '../../components/withAuth';
import { loadSelectedDataAction, loadAnimeListAction } from '../../store/actions/anime';


function Anime(props) {

    const [animeDataPage, setAnimeDataPage] = useState(useSelector((state) => state.animeListReducer.animeDataPage));

    const [animeSelected, setAnimeSelected] = useState(useSelector((state) => state.animeSelectedReducer.animeSelected));


    const [first, setfirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [sortBy, setSortBy] = useState("nome");


    const toast = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        page(first, rows, sortBy);
    }, [])

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
            toast.current.show({ severity: 'warn', summary: 'Aviso', detail: error.response.data.message, life: 3000 });
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
        const index = paginator.content.indexOf(rowData);
        AnimeDataService._delete(rowData.id).then(response => {
            toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Anime ' + rowData.nome + ' excluído com sucesso!', life: 3000 });
            list();
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

    function onCustomPage(e) {
        setfirst(e.first);
        setRows(e.rows);
    }

    function selectAnime(e) {
        if(e.value){
            dispatch(loadSelectedDataAction(e.value))
            setAnimeSelected(e.value)
        }else {
            dispatch(loadSelectedDataAction(null))
            setAnimeSelected(null)
        }
        
    }

    const template = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Anime">

                <Link href="/anime/form">
                    <Button id='new-button' label="Novo" onClick={() => novo({})} />
                </Link>

                <DataTable
                    header="Animes Cadastrados"
                    value={ animeDataPage && animeDataPage.content }
                    selection={animeSelected}
                    onSelectionChange={e => selectAnime(e)}
                    dataKey="id"
                    paginator
                    paginatorTemplate={template}
                    first={first}
                    rows={rows}
                    onPage={onCustomPage}
                    paginatorClassName="justify-content-end"
                >
                    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                    <Column field="nome" header="Nome"></Column>
                    <Column field="temporada" header="Temporada"></Column>
                    <Column field={e => possuiManga(e.possuiManga)} header="Possui mangá ?"></Column>
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