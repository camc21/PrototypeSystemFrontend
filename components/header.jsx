//react
import {React, useState, useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'

//styles
import styles from '../styles/header.module.css';

//services
import { LoginDataService } from '../services/LoginDataService';

//actions
import { showButtonLoginLogoutAction } from '../store/actions/login_logout';


export default function Header(props) {

    const router = useRouter()

    const dispatch = useDispatch();

    const showLoginLogout = useSelector((state) => state.showLoginLogoutReducer.showLoginLogout);

    const logIn = () => {
        router.push('/login')
    }

    const logOut = () =>{
        dispatch(showButtonLoginLogoutAction(true));
        localStorage.removeItem('accessToken');
    }

    return(
        <>
            <header className={styles.header}>
                <div style={{display: 'flex', height: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
                    {
                        showLoginLogout &&
                        <Link href="/login">
                            <a style={{marginRight: '10px'}} onClick={logIn}>Login</a>
                        </Link>
                    }
                    {
                        !showLoginLogout &&
                        <Link href="/">
                            <a style={{marginRight: '10px'}} onClick={logOut}>Logout</a>
                        </Link>
                    }
                </div>
            </header>
        </>
    )
}