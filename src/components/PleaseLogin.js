import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import pic from '../assets/1.jpg'

const PleaseLogin=()=>{
    const UploaderWrapper=styled.div`
       //width: 80vw;
       //height: 76vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       >div{
          color:#394460;
          margin-bottom: 16px;
          .linkA{
            color:#ff7b89;
          }
       }
`;

    return (
        <UploaderWrapper>
            <div>
                哆啦A梦友情提醒您，
                请先<NavLink className="linkA" to="/login">登录</NavLink>
            或者
            <NavLink className="linkA" to="/register">注册</NavLink>哦
            </div>
            <img alt="哆啦A梦" src={pic} />

        </UploaderWrapper>
    )
}

export default PleaseLogin;