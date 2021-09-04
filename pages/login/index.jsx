//imports api
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";

//imports styles
import styles from '../../styles/login.module.css'

//imports bibliotecas
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"

//imports services
import { LoginDataService } from '../../services/LoginDataService';

//actions
import { showButtonLoginLogoutAction } from '../../store/actions/login_logout';


function Login(props) {

    const dispatch = useDispatch();

    const router = useRouter()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loadingCredentials, setLoadingCredentials] = useState(false);

    const logIn = (e) => {
        e.preventDefault()
        setLoadingCredentials(true);
        LoginDataService.logIn(login, password).then(response => {
            if(response.data === "UNAUTHORIZED"){
                router.push('/');
                <Alert status="warning">
                    <AlertIcon />
                    Usuário ou senha incorretos
                </Alert>
            } else {
                localStorage.setItem('accessToken', 'Bearer ' + response.data.token);
                setLoadingCredentials(false);
                dispatch(showButtonLoginLogoutAction(false));
                router.push('/');
                console.log(response);
            }
        });
      }

    return(
        <div className={styles.layout_login}>
            <div className={styles.box_login}>
                <h5>Login</h5>
                <InputText value={login} onChange={(e) => setLogin(e.target.value)} />

                <h5>Senha</h5>
                <Password className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />

                <Button label="Login" onClick={logIn} />
                {loadingCredentials &&
                    <ProgressSpinner />
                }
                
            </div>
        </div>
    )
}

export default(Login)