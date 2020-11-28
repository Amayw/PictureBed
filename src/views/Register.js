import React from 'react';
import {observer} from 'mobx-react'
import {useStores} from '../stores';

const Register=observer(()=>{
    const {AuthStore}=useStores();
    return (
        <footer>
            <h1>Register</h1>
            {AuthStore.values.username}
        </footer>
    );
})

export default Register;