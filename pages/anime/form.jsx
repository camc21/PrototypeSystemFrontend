import React, { useState, useEffect, useRef  } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'

import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import withAuth from '../../components/withAuth';

import 'primeflex/primeflex.css';
import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import { AnimeDataService } from '../../services/AnimeDataService';



function AnimeForm(props) {

    const [animeSelected, setAnimeSelected] = useState(useSelector((state) => state.loadSelectedDataReducer.animeSelected))

    const [nome, setNome] = useState(animeSelected.nome);

    const [possuiManga, setPossuiManga] = useState(animeSelected.possuiManga);

    const [temporada, setTemporada] = useState(animeSelected.temporada);

    const toast = useRef(null);


    function save(){
        const anime = {idAnime: null, nome: nome, possuiManga: possuiManga, temporada: Number(temporada)}
     
        AnimeDataService.save(anime).then(response => {
        console.log(response);
        toast.current.show({severity:'success', summary: 'Sucesso', detail:'Cadastro efetuado com sucesso!', life: 3000});
        })
        // } catch (error) {
        //     console.log(error);
        //     messages.current.show({ severity: 'error', summary: 'Erro', detail: error });
        // }
    }


    return(
        <>
            <Toast ref={toast} />
            <Fieldset legend="Anime Form">
                
                <div className='container'>
                    <div className="p-fluid">
                        <div className="p-field p-grid">
                            <label htmlFor="nome" className="p-col-12 p-md-2">Nome: </label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="temporada" className="p-col-12 p-md-2">Temporada:</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="temporada" type="text" value={temporada} onChange={(e) => setTemporada(e.target.value)}/>
                            </div>
                        </div>
                        <div className="p-field-checkbox">
                            <div className="p-field-checkbox">
                                <Checkbox inputId="possuiManga" onChange={e => setPossuiManga(e.checked)} checked={possuiManga} />
                                <label htmlFor="possuiManga">Possui mangá ?</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <Link href="/anime">
                        <Button style={{marginRight: '15px'}} label="Voltar" />
                    </Link>

                    <Button label="Salvar" onClick={() => save()}/>
                </div>
            </Fieldset>
        </>
    )

}

export default withAuth(AnimeForm);