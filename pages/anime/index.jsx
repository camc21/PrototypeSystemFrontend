import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'

import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Fieldset } from 'primereact/fieldset';

import { AnimeDataService } from '../../services/AnimeDataService';
import withAuth from '../../components/withAuth';
import { loadSelectedDataAction } from '../../store/actions/anime';

function Anime(props) {

    const [listaAnimes, setListaAnimes] = useState([]);
    const [animeSelecionado, setAnimeSelecionado] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        listarAnimes();
    }, [])

    function listarAnimes(){
        AnimeDataService.listarAnimes().then(response => {
            console.log(response.data);
            try {
                setListaAnimes(response.data.animes);
            } catch (error) {
                console.log(response.data);
            }
            
        })
    }

    function listarAnimesPorId(idAnime){
        AnimeDataService.listarAnimesPorId(idAnime).then(response => {
            setAnimeSelecionado(response.data);
        })
    }

    const animeEdit = (rowData) => {
        setAnimeSelecionado(rowData);
        dispatch(loadSelectedDataAction(rowData));
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
            <Link href="/anime/form">
                <Button style={{marginRight: '10px'}} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => animeEdit(rowData)} />
            </Link>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => console.log(rowData)} />
            </>
        );
    }

    const possuiManga = (atributte) => {
        if(atributte){
            return 'Possui Mangá';
        } return 'Não Possui Mangá';
    }

    return(
        <>
            <Fieldset legend="Anime">
                <div className='container'>
                
                    <Link href="/anime/form">
                        <Button label="Novo" onClick={() => animeEdit({})} />
                    </Link>

                    <DataTable 
                        header="Animes Cadastrados" 
                        responsiveLayout="scroll"
                        scrollable scrollHeight="400px"
                        value={listaAnimes}
                        selectionMode="single"
                        selection={animeSelecionado}
                        onSelectionChange={e => {setAnimeSelecionado(e.value)}}
                        dataKey="idAnime">
                        <Column field="nome" header="Nome"></Column>
                        <Column field="temporada" header="Temporada"></Column>
                        <Column field={e => possuiManga(e.possuiManga)} header="Possui mangá ?"></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>
                <div className='container'>
                    <Link href="/">
                        <Button label="Voltar" />
                    </Link>
                </div>
            </Fieldset>
        </>
    )
}

export default withAuth(Anime);