import React from 'react';
import DisplayList from '../components/DisplayList';
import {useStores} from '../stores'

const History=()=>{
    const {AuthStore} =useStores();
    return (
        <>
       <DisplayList/>
       </>
    );
}

export default History;