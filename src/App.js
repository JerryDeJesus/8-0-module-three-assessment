import "./App.css";
import { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

class App extends Component{
  render(){
    return (
      <div className="app">
        <NavBar/>

       <Switch>
         <Route exact path="/">
          <Home/>
         </Route>

         <Route path="/movies">
          <Movies/>
         </Route>

         <Route path="/people">
          <People/>
         </Route>

         <Route path="/locations">
          <Locations/>
         </Route>
       </Switch>
      </div>
    )
  }
}

export default App