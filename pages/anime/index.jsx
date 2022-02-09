import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'

import { Toast } from 'primereact/toast';
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

    const toast = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
      return () => {
        console.log('Foi desmontado');
        setListaAnimes(null);
        setAnimeSelecionado(null);
      };
    }, []);
    

    useEffect(() => {
        listarAnimes();
    }, [listaAnimes])

    function listarAnimes(){
        AnimeDataService.listarAnimes().then(response => {
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

    const novo = () => {
        setAnimeSelecionado(null);
        dispatch(loadSelectedDataAction(null));
    }

    const editar = (rowData) => {
        setAnimeSelecionado(rowData);
        dispatch(loadSelectedDataAction(rowData));
    }

    const _delete = (rowData) => {
        AnimeDataService._delete(rowData.idAnime).then(response => {
        toast.current.show({severity:'success', summary: 'Sucesso', detail:'Anime ' + rowData.nome + ' excluído com sucesso!', life: 3000});
        })
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
            <Link href="/anime/form">
                <Button style={{marginRight: '10px'}} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editar(rowData)} />
            </Link>

            <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => _delete(rowData)} />
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
            <Toast ref={toast} />
            <Fieldset legend="Anime">
              
                <Link href="/anime/form">
                    <Button id='new-button' label="Novo" onClick={() => novo({})} />
                </Link>

                <DataTable 
                    header="Animes Cadastrados" 
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
             
                <Link href="/">
                    <Button id='back-button' label="Voltar" />
                </Link>
           
            </Fieldset>
        </>
    )
}

export default withAuth(Anime);