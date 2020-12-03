import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import { Button } from 'antd';
import logo from '../assets/smile.png'

const Header = styled.header`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: #677097;
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
        margin-right: 20px;
        }
        >span{
        font-weight: bold;
        }
        >ul{
            display: flex;
            margin: 0;
            >li{
                margin-left: 30px;
                >a{
                   color:#f1f4fc;
                   &.active{
                   font-weight: bold;
                      color:#84c2f1;
                   }
                }

            }
        }
    }
    >.userRelated{
          display: flex;
          align-items: center;
          >.rightButton{
            margin-left: 20px;
          }
        }
    @media (max-width: 800px){
      padding: 20px 6px;
      >nav{
        >span{
          display: none;
        }
        >img{
           margin-right: 1px;
        }
        >ul{
          >li{
            margin-left: 0;
            >a{
              padding: 0 4px;
            }
          }
        }
      }
      >.userRelated{
        >button{
          padding: 0 6px;
          &.rightButton{
            margin-left: 4px;
          }
        }
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
                <span>Doraemon Picture Bed</span>
                <ul>
                    <li>
                        <NavLink activeClassName='active' to="/" exact>首页</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/history">上传历史</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/about">关于我</NavLink>
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
                        <Button  onClick={handleLogin}>登录
                        </Button>
                        <Button onClick={handleRegister} className="rightButton">注册
                        </Button>
                    </>}
            </div>

        </Header>
    );
});

export default Component;