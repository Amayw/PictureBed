import React,{useRef,useState} from 'react';
import {observer} from 'mobx-react'
import {useStores} from '../stores'

const Login=observer(
        ()=> {
        console.log('执行了');
        const {AuthStore}=useStores();
        const inputRef=useRef();
        // const setN=useState(0)[1];

        const bindChange = e => {
            AuthStore.setUsername(inputRef.current.value)
            // setN(inputRef.current.value);
        }

        return (
            <>
                <h1>Login:{AuthStore.values.username}</h1>
                <input onChange={bindChange} ref={inputRef}/>
            </>
        );
    }
)

export default Login;
