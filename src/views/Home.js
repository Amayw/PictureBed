import React from 'react';
import Uploader from '../components/Uploader';
import {useStores} from '../stores';
import PleaseLogin from '../components/PleaseLogin'

function Home() {
    const {AuthStore}=useStores();
    return (
        <>
        {AuthStore.isLogin?<Uploader/>:<PleaseLogin/>}
        </>
    );
}

export default Home;