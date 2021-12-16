import { Component } from 'react'

class Locations extends Component{
  constructor(){
    super()
    this.state = {
      buttonText:"Show Locations",
      locations:[]
    }
  }

  fetchLocations = () => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.setState({
        locations: data
      })
    })
  }

  componentDidMount = () => {
    this.fetchLocations()
  }

  showAndHide = () => {
    if(this.state.buttonText[0] === "S"){
      this.setState({
        buttonText:"Hide Locations"
      })

      



    }else{
      this.setState({
        buttonText:"Show Locations"
      })




    }
  }

  render(){
    const locationInformationCongregation = this.state.locations.map((location) => {
      if(this.state.buttonText[0] === "H"){
        return (
        <li>
          <h3>Name: {location.name}</h3>
          <h3>Climate: {location.climate}</h3>
          <h3>Terrain: {location.terrain}</h3>
        </li>
        )
      }
    })
    // {this.state.currentMovie?.title}

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.showAndHide}>{this.state.buttonText}</button>
        {locationInformationCongregation}
      </div>
    )
  }
}

export default Locations