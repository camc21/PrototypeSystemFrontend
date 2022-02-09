import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


import withAuth from '../../components/withAuth';

import 'primeflex/primeflex.css';

import { AnimeDataService } from '../../services/AnimeDataService';



function AnimeForm(props) {

    const [animeSelected, setAnimeSelected] = useState(useSelector((state) => state.loadSelectedDataReducer.animeSelected));

    const [nome, setNome] = useState(animeSelected ? animeSelected.nome : null);

    const [possuiManga, setPossuiManga] = useState(animeSelected ? animeSelected.possuiManga : false);

    const [temporada, setTemporada] = useState(animeSelected ? animeSelected.temporada : null);

    const toast = useRef(null);

    const router = useRouter();

    function showMessage() {
        router.push('/anime')
    }


    function _save() {
        const anime = { id: animeSelected.id, nome: nome, possuiManga: possuiManga, temporada: Number(temporada) };
        if (!anime.id) {
            AnimeDataService._post(anime).then(response => {
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro criado com sucesso!', life: 3000 });
                setTimeout(() => {
                    console.log('EXECUTADO POST');
                    router.push('/anime');
                }, 3000);
            })
        } else {
            AnimeDataService._put(anime).then(response => {
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro alterado com sucesso!', life: 3000 });
                setTimeout(() => {
                    console.log('EXECUTADO PUT');
                    router.push('/anime');
                }, 3000);

            })
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Anime Form">

                <div className="p-fluid">
                    <div className="p-field p-grid">
                        <label htmlFor="nome" className="p-col-12 p-md-2">Nome: </label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="temporada" className="p-col-12 p-md-2">Temporada:</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="temporada" type="text" value={temporada} onChange={(e) => setTemporada(e.target.value)} />
                        </div>
                    </div>
                    <div className="p-field-checkbox">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="possuiManga" onChange={e => setPossuiManga(e.checked)} checked={possuiManga} />
                            <label htmlFor="possuiManga">Possui mangá ?</label>
                        </div>
                    </div>
                </div>


                <Link href="/anime">
                    <Button id='back-button' style={{ marginRight: '15px' }} label="Voltar" />
                </Link>

                <Button label="Salvar" onClick={() => _save()} />

            </Fieldset>
        </>
    )

}

export default withAuth(AnimeForm);