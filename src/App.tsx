import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Menu from './containers/Menu';
import Areas from './containers/Areas';
import IngresarItem from './containers/IngresarItem';
import RebajarItem from './containers/RebajarItem';
import Login from './containers/Login';
import Categorias from './containers/Categorias';
import Items from './containers/Items';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/items" component={Items} />
        <Route path="/areas" component={Areas} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/ingresar-item" component={IngresarItem} />
        <Route path="/rebajar-item" component={RebajarItem} />
        <Route path="/" component={Areas} />
      </Switch>
    </Router>
  );
}
