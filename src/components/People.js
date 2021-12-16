import { Component } from 'react';

class People extends Component{
  constructor(){
    super()
    this.state = {
      characterInfo: [],
      searchValue: ""
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
        <h3>this is the spot</h3>
      </div>
    )
  }
}

export default People