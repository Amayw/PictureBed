import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

const Header = styled.header`
    display:flex;
    align-items: center;
    padding: 10px 100px;
    background: #394460;
    color: #f1f4fc;
    >img{
        height:30px;
    }
    >nav{
        >ul{
            display: flex;
            >li{
                margin-left: 30px;
                >a{

                   &.active{
                      color:#fda601;
                   }
                }

            }
        }
    }
`;

function Component() {
    return (
        <Header>
                {/*<img src={logo}/>*/}
                <nav>
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
        </Header>
    );
}

export default Component;