import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import Error404 from './Error404';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
