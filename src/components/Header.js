import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import { Button } from 'antd';


const Header = styled.header`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: #394460;
    color: #f1f4fc;
    padding: 10px 100px;
            vertical-align: center;
    >nav{
        display: flex;
        align-items: center;
        justify-content: center;
        >img{
        width: 30px;
        height:30px;
        }
        >ul{
            display: flex;
            margin: 0;
            >li{
                margin-left: 30px;
                >a{
                   color:#f1f4fc;
                   &.active{
                      color:#fda601;
                   }
                }

            }
        }
    }
    >.userRelated{
          >.rightButton{
            margin-left: 20px;
          }
        }

`

const Component = observer(() => {
    const {AuthStore,UserStore} = useStores();
    const history=new useHistory();
    const handleLogout=()=>{
        AuthStore.logout();
        history.push('/login')
    }

    const handleLogin=()=>{
        history.push('/login')
    }

    const handleRegister=()=>{
        history.push('/register')
    }
    return (
        <Header>
            <nav>
                <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <NavLink activeClassName='active' to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/history">History</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/about">About me</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="userRelated">
                {UserStore.currentUser ?
                    <>
                        {UserStore.currentUser.attributes.username}
                        <Button className="rightButton" onClick={handleLogout}>注销</Button>
                    </>
                    : <>
                        <Button  onClick={handleLogin}>Login
                        </Button>
                        <Button onClick={handleRegister} className="rightButton">Register
                        </Button>
                    </>}
            </div>

        </Header>
    );
});

export default Component;