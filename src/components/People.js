import { Component } from 'react';

class People extends Component{
  constructor(){
    super()
    this.state = {
      characterInfo: [],
      searchValue: "",
      displayedPerson:[]
    }
  }

  handleInput = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const person = this.state.characterInfo.find((character) => {
      return character.name.toLowerCase() === this.state.searchValue.toLowerCase()
    })
    this.setState({
      displayedPerson: person
    })

  }

  fetchPeople = () => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        characterInfo: data
      })
    })
  }
  
  componentDidMount = () => {
    this.fetchPeople();
  }

  render(){
    // const display = <h3>Name: {this.state.displayedPerson.name}</h3>
    // <h3>Age: {this.state.displayedPerson.age}</h3>
    // <h3>Gender: {this.state.displayedPerson.gender}</h3>
    
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          placeholder="Find your person"
          value={this.state.searchValue}
          onInput={this.handleInput}
          />
          <button>Submit</button>
        </form>
        <h3>
          {this.state.displayedPerson
            ? this.state.displayedPerson.name
            : "Not Found"}{" "}
        </h3>
        <h3>{this.state.displayedPerson?.age}</h3>
        <h3>{this.state.displayedPerson?.gender}</h3>
      </div>
    )
  }
}

export default People