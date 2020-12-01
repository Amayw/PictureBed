import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const PleaseLogin=()=>{
    const UploaderWrapper=styled.div`
       width: 80vw;
       height: 76vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       >div{
          color:#394460;
          margin-bottom: 16px;
       }
`;

    return (
        <UploaderWrapper>
            <div>
                <span>
                哆啦A梦友情提醒您，
            </span>
                <span>
                请先<NavLink to="/login">登录</NavLink>
            或者
            <NavLink to="/register">注册</NavLink>
            ，
            </span>
                <span>再上传文件哦</span>
            </div>
            <img src='/1.jpg' />

        </UploaderWrapper>
    )
}

export default PleaseLogin;