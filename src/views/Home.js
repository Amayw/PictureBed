import React from 'react';
import {useStores} from '../stores'
import Uploader from '../components/Uploader';
import PleaseLogin from '../components/PleaseLogin';
import styled from 'styled-components';

const HomeWrapper=styled.div`

  
`
function Home() {
    const {UserStore} =useStores();
    return (
        <HomeWrapper>
            {UserStore.currentUser?<Uploader/>:<PleaseLogin/>}
        </HomeWrapper>
    );
}

export default Home;