import './App.css';
import { HashRouter as Router,  Switch,  Route,  NavLink, useLocation } from "react-router-dom";
import Contact from './components/Contact'
import Home from './components/Home'
import Skills from './components/Skills'
import Works from './components/Works'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.activeStyle = {
      fontWeight: "bold", 
      backgroundColor: "black" ,
      color: "white",
      borderRadius: "2rem",
      padding:"10px 20px"
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
      <nav>
          <ul>
            <li>
              <NavLink activeStyle={this.activeStyle} exact to="/"><button name="Home">Home</button></NavLink>
            </li>
            <li>
              <NavLink activeStyle={this.activeStyle} to="/Works"><button name="Works" >Works</button></NavLink>
            </li>
            <li>
              <NavLink activeStyle={this.activeStyle} to="/Skills"><button name="Skills" >Skills</button></NavLink>
            </li>
            <li>
              <NavLink activeStyle={this.activeStyle} to="/Contact"><button name="Contact" >Contact</button></NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route exact path="/Works">
            <Works />
          </Route>
          <Route exact path="/Skills">
            <Skills />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    )
  }
}
