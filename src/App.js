import "./App.css"
import { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Movies from "./components/Movies"
import People from "./components/People"
import Locations from "./components/Locations"

class App extends Component{
  constructor(){
    super()
    this.state = {
      color:"coral"
    }
  }

  colorChanger = (choice) => {
    this.setState({
      color: choice
    })
  }

  render(){
    return (
      <div className="app" style={{backgroundColor: this.state.color}}>
        <NavBar colorChanger={this.colorChanger}/>

       <Switch>
         <Route exact path="/">
          <Home />
         </Route>

         <Route path="/movies">
          <Movies />
         </Route>

         <Route path="/people">
          <People />
         </Route>

         <Route path="/locations">
          <Locations />
         </Route>
       </Switch>
      </div>
    )
  }
}

export default App