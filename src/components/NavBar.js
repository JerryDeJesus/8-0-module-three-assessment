import { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component{
  constructor(){
    super()
  }
  render(){
    return (
    <nav id="navbar">
        <ul>
            <li key="1" class="navbar-item" ><Link onClick={()=> this.props.colorChanger("coral")} exact to="/"><img id="home-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" alt="Home"/></Link></li>
            <li key="2" class="navbar-item"><Link onClick={()=> this.props.colorChanger("lavender")} to="/movies">Movies</Link></li>
            <li key="3" class="navbar-item"><Link onClick={()=> this.props.colorChanger("beige")} to="/people">People</Link></li>
            <li key="4" class="navbar-item"><Link onClick={()=> this.props.colorChanger("cadetblue")} to="/locations">Locations</Link></li>
        </ul>
    </nav>
      
    )
  }
}

export default NavBar