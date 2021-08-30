//imports api
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

//imports styles
import styles from '../../styles/login.module.css'

//imports bibliotecas
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

//services
import { LoginDataService } from '../../services/LoginDataService';


export default function Login(props) {

    const baseUrl = `http://localhost:3000`;
    const router = useRouter();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loadingCredentials, setLoadingCredentials] = useState(false);

    function logIn(){
        setLoadingCredentials(true);
        LoginDataService.logIn(login, password).then(response => {
            localStorage.setItem('token','Bearer ' + response.data.token);
            setLoadingCredentials(false);
            router.push(baseUrl+'/anime')
        })
    }

    return(
        <div className={styles.layout_login}>
            <div className={styles.box_login}>
                <h5>Login</h5>
                <InputText value={login} onChange={(e) => setLogin(e.target.value)} />

                <h5>Senha</h5>
                <Password className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />

                <Button label="Login" onClick={() => logIn()} />
                {loadingCredentials &&
                    <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
                }
                
            </div>
        </div>
    )
}