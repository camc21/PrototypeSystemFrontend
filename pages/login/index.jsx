//imports api
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";

//imports styles
import styles from '../../styles/login.module.css'

//imports bibliotecas
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Alert } from 'reactstrap';

//imports services
import { LoginDataService } from '../../services/LoginDataService';

//actions
import { showButtonLoginAction } from '../../store/actions/login_logout';
import { localStorageManager } from '@chakra-ui/color-mode';


function Login(props) {

    const dispatch = useDispatch();

    const router = useRouter()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loadingCredentials, setLoadingCredentials] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dadosErroLogin, setDadosErroLogin] = useState({});

    useEffect(() => {
        if(router.asPath === '/login' && localStorage.getItem('accessToken') !== null) {
            router.push('/');
        }
    }, [])

    const logIn = () => {
        setLoadingCredentials(true);
        LoginDataService.logIn(login, password).then(response => {
            if(response.data.code > 300){
                setDadosErroLogin(response.data);
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
    } 

    const onDismiss = () => setVisible(false);

    return(
        <div className={styles.layout_login}>

            <div className={styles.box_messages}>
                <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    {dadosErroLogin.message}
                </Alert>
            </div>
            <div className={styles.layout_login_no_messages}>
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

        </div>
    )
}

export default(Login)