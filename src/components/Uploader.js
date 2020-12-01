import React from 'react'
import logo from '../assets/1.jpg'
import styled from 'styled-components';

const Uploader=()=>{
    const UploaderWrapper=styled.div`
       width: 50vw;
       height: 70vh;
       background: url("${logo}") no-repeat;
`;

    return (
        <UploaderWrapper>
            <input type="file" />
        </UploaderWrapper>
    )
}

export default Uploader;