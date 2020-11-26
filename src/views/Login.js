import React from 'react';
import {observer} from 'mobx-react'
import {useStores} from '../stores/index.js'

const Login=observer(
    ()=> {
        const {AuthStore}=useStores();
        return (
            <footer>
                <h1>Login</h1>
                <span>{AuthStore.values.username}</span>
            </footer>
        );
    }
)

export default Login;