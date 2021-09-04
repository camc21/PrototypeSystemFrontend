import React, { useState, useEffect } from 'react';

import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Fieldset } from 'primereact/fieldset';

import { AnimeDataService } from '../../services/AnimeDataService';
import withAuth from '../../components/withAuth';

function Anime(props) {

    const [listaAnimes, setListaAnimes] = useState([]);
    const [animeSelecionado, setAnimeSelecionado] = useState({});

    useEffect(() => {
        listarAnimes();
    }, [])

    function listarAnimes(){
        AnimeDataService.listarAnimes().then(response => {
            try {
                setListaAnimes(response.data);
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

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button style={{marginRight: '10px'}} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => console.log(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => console.log(rowData)} />
            </>
        );
    }

    return(
        <>
            <Fieldset legend="Anime">
                <div className='container'>
                    <DataTable 
                        value={listaAnimes}
                        selectionMode="single"
                        selection={animeSelecionado}
                        onSelectionChange={e => {setAnimeSelecionado(e.value)}}
                        dataKey="idAnime">
                        <Column field="nome" header="Nome"></Column>
                        <Column field="temporada" header="Temporada"></Column>
                        <Column field="possuiManga" header="Possui mangá ?"></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>
            </Fieldset>
        </>
    )
}

export default withAuth(Anime);