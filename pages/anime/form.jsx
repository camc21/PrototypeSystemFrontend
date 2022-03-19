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

    function onChangeName(e) {
        let animeAux = { ...animeSelected };
        animeAux.name = e.target.value;
        setAnimeSelected(animeAux);
    }

    function onChangeSeason(e) {
        let animeAux = { ...animeSelected };
        animeAux.season = e.value;
        setAnimeSelected(animeAux);
    }

    function onChangeHasManga(e) {
        let animeAux = { ...animeSelected };
        animeAux.hasManga = e.checked;
        setAnimeSelected(animeAux);
    }

    return (
        <>
            <Toast ref={toast} />
            <Fieldset legend="Anime Form">

                <div className="p-fluid">
                    <div className="p-field p-grid">
                        <label htmlFor="name" className="p-col-12 p-md-2">Nome: </label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="name" value={animeSelected && animeSelected.name} onChange={(e) => onChangeName(e)} />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="season" className="p-col-12 p-md-2">Temporada:</label>
                        <div className="p-col-12 p-md-10">
                            <InputNumber id="season" value={animeSelected && animeSelected.season} onChange={(e) => onChangeSeason(e)} />
                        </div>
                    </div>
                    <div className="p-field-checkbox">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="hasManga" checked={animeSelected && animeSelected.hasManga} onChange={e => onChangeHasManga(e)} />
                            <label htmlFor="hasManga">Possui mangá ?</label>
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