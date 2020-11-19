import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import {
  Switch,
  Route
} from 'react-router-dom';
import {Suspense,lazy} from 'react';

const Home=lazy(()=>import('./views/Home'))
const History=lazy(()=>import('./views/History'))
const About=lazy(()=>import('./views/About'))

function App() {
  return (
    <div className="App">
        <div>
          <Header/>

          <Suspense fallback={Loading}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Suspense>

          <Footer/>
        </div>
    </div>
  );
}

export default App;
