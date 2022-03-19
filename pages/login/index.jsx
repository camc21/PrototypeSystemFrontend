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

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loadingCredentials, setLoadingCredentials] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (router.asPath === '/login' && localStorage.getItem('accessToken') !== null) {
            router.push('/');
        }
    }, [])

    function handleInputLoginChange(e) {
        setValue('login', e.target.value);
    }

    function handleInputPasswordChange(e) {
        setValue('password', e.target.value);
    }

    const { control, register, handleSubmit, setValue, errors, getValues } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        console.log(data);
        setLoadingCredentials(true);
        if (data.login !== "" && data.password !== "") {
            LoginDataService.logIn(data.login, data.password).then(response => {
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
            });
        } else {
            toast.current.show({ severity: "warn", summary: "Aviso", detail: "Preencha os campos, Login e Senha", life: 3000 });
            setLoadingCredentials(false);
        }
    }

    return (
        <div className={styles.layout_login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <div className={styles.layout_login_no_messages}>
                    <div className={styles.box_login}>
                        <h5>Login</h5>
                        <Controller
                            control={control}
                            name="login"
                            defaultValue={undefined}
                            rules={{
                                required: true, maxLength: 50
                            }}
                            render={({ onBlur, onChange, value }) => (
                                <InputText
                                    id="login"
                                    name="login"
                                    onChange={(e) => handleInputLoginChange(e)}
                                    value={value}
                                    placeholder="Login"
                                />
                            )}
                        />

                        <h5>Senha</h5>
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
                        <Button type="submit" label="Login" />
                        {loadingCredentials &&
                            <ProgressSpinner />
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default (Login)