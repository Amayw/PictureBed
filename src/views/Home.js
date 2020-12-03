import React, {useEffect} from 'react';
import Uploader from '../components/Uploader';
import {useStores} from '../stores';
import PleaseLogin from '../components/PleaseLogin'

function Home() {
    const {AuthStore,UserStore}=useStores();
    useEffect(()=>{
        UserStore.pullUser();
    },[])
    return (
        <>
        {UserStore.currentUser?<Uploader/>:<PleaseLogin/>}
        </>
    );
}

export default Home;