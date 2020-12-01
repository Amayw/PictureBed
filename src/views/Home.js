import React from 'react';
import {useStores} from '../stores'

function Home() {
    const {UserStore} =useStores();
    return (
        <>
            <h1>Home</h1>
            {UserStore.currentUser?UserStore.currentUser.attributes.username:'请登录'}
        </>
    );
}

export default Home;