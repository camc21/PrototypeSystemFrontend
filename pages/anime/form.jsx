import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';


import withAuth from '../../components/withAuth';

import 'primeflex/primeflex.css';

import { AnimeDataService } from '../../services/AnimeDataService';

import { loadSelectedDataAction } from '../../store/actions/anime';



function AnimeForm(props) {

    const [animeSelected, setAnimeSelected] = useState(useSelector((state) => state.animeSelectedReducer.animeSelected));

    const toast = useRef(null);
    const router = useRouter();
    const dispatch = useDispatch();


    function _save() {

        if (!animeSelected.id) {
            AnimeDataService._post(animeSelected).then(response => {
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro criado com sucesso!', life: 3000 });
                setTimeout(() => {
                    console.log('EXECUTADO POST');
                    router.push('/anime');
                }, 3000);
            })
        } else {
            AnimeDataService._put(animeSelected).then(response => {
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro alterado com sucesso!', life: 3000 });
                setTimeout(() => {
                    console.log('EXECUTADO PUT');
                    router.push('/anime');
                }, 3000);

            })
        }
    }

    function onChangeNome(e) {
        let animeAux = { ...animeSelected };
        animeAux.nome = e.target.value;
        setAnimeSelected(animeAux);
    }

    function onChangeTemporada(e) {
        let animeAux = { ...animeSelected };
        animeAux.temporada = e.value;
        setAnimeSelected(animeAux);
    }

    function onChangePossuiManga(e) {
        let animeAux = { ...animeSelected };
        animeAux.possuiManga = e.checked;
        setAnimeSelected(animeAux);
    }

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Anime Form">

                <div className="p-fluid">
                    <div className="p-field p-grid">
                        <label htmlFor="nome" className="p-col-12 p-md-2">Nome: </label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="nome" value={animeSelected && animeSelected.nome} onChange={(e) => onChangeNome(e)} />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="temporada" className="p-col-12 p-md-2">Temporada:</label>
                        <div className="p-col-12 p-md-10">
                            <InputNumber id="temporada" value={animeSelected && animeSelected.temporada} onChange={(e) => onChangeTemporada(e)} />
                        </div>
                    </div>
                    <div className="p-field-checkbox">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="possuiManga" checked={animeSelected && animeSelected.possuiManga} onChange={e => onChangePossuiManga(e)} />
                            <label htmlFor="possuiManga">Possui mangá ?</label>
                        </div>
                    </div>
                </div>


                <Link href="/anime">
                    <Button id='back-button' style={{ marginRight: '15px' }} label="Voltar" />
                </Link>

                <Button label="Salvar" onClick={_save} />

            </Fieldset>
        </>
    )

}

export default withAuth(AnimeForm);