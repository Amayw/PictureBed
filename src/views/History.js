import React from 'react';
import DisplayList from '../components/DisplayList';
import {useStores} from '../stores'

const History=()=>{
    const {AuthStore} =useStores();
    return (
        <>
       {/*{AuthStore.isLogin?<List/>:'没登录'}*/}
       <DisplayList/>
       </>
    );
}

export default History;