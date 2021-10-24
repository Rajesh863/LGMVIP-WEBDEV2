import React from 'react';
import Navbar from './components/Navbar';
import BoxContainer from './components/BoxContainer';
import GetUser from './components/Getuser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={GetUser} />
          <Route path='/getuser' component={BoxContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
