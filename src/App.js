import React from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import {
    Switch,
    Route,
} from 'react-router-dom';
import {Suspense, lazy} from 'react';

const Home = lazy(() => import('./views/Home'));
const History = lazy(() => import('./views/History'));
const About = lazy(() => import('./views/About'));
const Login = lazy(() => import('./views/Login'));
const Register = lazy(() => import('./views/Register'));

const App=()=>{
    return (
        <>
            <Header/>
            <main>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/history">
                            <History/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </>
    );
}

export default App;
