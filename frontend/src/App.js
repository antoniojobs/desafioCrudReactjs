import React from 'react';
import './global.css';
// import Routes from './routes';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Logon from './pages/Logon';
import Cadastro from './pages/Register';

function App() {
  return (
      <BrowserRouter>
      <Switch>
      {/* <Route path="/" component ={Logon} />
      <Route path="/cadastro"exact component ={Cadastro} /> */}
        <Cadastro />
        <Logon />
      </Switch>
      </BrowserRouter>

  );
}

export default App;
