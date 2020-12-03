import React from 'react';
import styled from 'styled-components'

const LoadingWrapper=styled.div`
    >span{
      color: #84c2f1;
    }
  

`

function Loading() {
    return (
        <LoadingWrapper>
            <span>嘻嘻~~~使出吃铜锣烧的劲来加载~</span>
        </LoadingWrapper>
    );
}

export default Loading;