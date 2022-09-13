//imports api
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

//imports styles
import styles from '../../styles/login.module.css'

//imports bibliotecas
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Alert } from 'reactstrap';
import { Toast } from "primereact/toast";

//imports services
import { LoginDataService } from '../../services/LoginDataService';

//actions
import { showButtonLoginAction } from '../../store/actions/login_logout';
import { localStorageManager } from '@chakra-ui/color-mode';


function Login(props) {

    const dispatch = useDispatch();
    const toast = useRef(null);
    const router = useRouter()

    const [loadingCredentials, setLoadingCredentials] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (router.asPath === '/login' && localStorage.getItem('accessToken') !== null) {
            router.push('/');
        }
    }, [])

    function handleInputEmailChange(e) {
        setValue('email', e.target.value);
    }

    function handleInputPasswordChange(e) {
        setValue('password', e.target.value);
    }

    const { control, register, handleSubmit, setValue, errors, getValues } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        setLoadingCredentials(true);
        if (data.email !== "" && data.password !== "") {
            LoginDataService.logIn(data.email, data.password).then(response => {
                if (response.data.code > 300) {
                    toast.current.show({ severity: "warn", summary: "Aviso", detail: response.data.message, life: 3000 });
                    setVisible(true);
                    setLoadingCredentials(false);
                } else {
                    setVisible(false);
                    localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
                    setLoadingCredentials(false);
                    dispatch(showButtonLoginAction(false));
                    router.push('/');
                }
            }).catch(error => {
                if (error.response.data.message.includes("401")) {
                    toast.current.show({ severity: "warn", summary: "Aviso", detail: error.response.data.message, life: 3000 });
                } else {
                    toast.current.show({ severity: "warn", summary: "Aviso", detail: "Erro no sistema, contate o administrador", life: 3000 });
                }
                setLoadingCredentials(false);
            })
        } else {
            toast.current.show({ severity: "warn", summary: "Aviso", detail: "Preencha os campos, E-mail e Senha", life: 3000 });
            setLoadingCredentials(false);
        }
    }

    return (
        <div className={styles.layout_login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <div className={styles.box_login}>
                    <h5 style={{marginTop: "15px"}}>E-mail</h5>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue={undefined}
                        rules={{
                            required: true, maxLength: 50
                        }}
                        render={({ onBlur, onChange, value }) => (
                            <InputText
                                id="email"
                                name="email"
                                onChange={(e) => handleInputEmailChange(e)}
                                value={value}
                                placeholder="E-mail"
                            />
                        )}
                    />

                    <h5 style={{marginTop: "15px"}}>Senha</h5>
                    <Controller
                        control={control}
                        name="password"
                        defaultValue={undefined}
                        rules={{
                            required: true, maxLength: 50
                        }}
                        render={({ onBlur, onChange, value }) => (
                            <Password
                                // style={{ width: '100%', borderColor: errors.nome ? 'red' : '' }}
                                id="password"
                                name="password"
                                onChange={(e) => handleInputPasswordChange(e)}
                                value={value}
                                placeholder="Senha"
                                toggleMask
                                weakLabel="Fraca"
                                mediumLabel="Média"
                                strongLabel="Forte"
                                promptLabel="Por favor entre com a senha"
                                autoComplete="new-password"
                            />
                        )}
                    />
                    <Button style={{marginTop: "20px", backgroundColor: "#fff", color: "#000", fontWeight: "bold"}} type="submit" label="Entrar" />
                    {loadingCredentials &&
                        <ProgressSpinner />
                    }
                </div>
            </form>
        </div>
    )
}

export default (Login)