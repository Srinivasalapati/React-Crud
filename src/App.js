import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AddData from './components/AddData'
import UsersList from './components/UsersList'
import UserDetails from "./components/UserDetails";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={UsersList} />
          <Route path="/users-list" component={UsersList} />
          <Route path="/add-user" exact component={AddData} />
          <Route path="/user-details/:id" exact component={UserDetails} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
