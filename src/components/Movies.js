import { Component } from 'react';

class Movies extends Component{
  constructor(){
    super()
    this.state = {
      movieInfo:[],
      currentMovie: null
    }
  }

  fetchMovies = () => {
    fetch(`https://ghibliapi.herokuapp.com/films/`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        movieInfo: data
      })
    })
  }

  componentDidMount = () => {
    this.fetchMovies();
  };

  handleDropdownChange = (e) => {
    
    const chosenMovie = this.state.movieInfo.find((movie) => {
      return movie.title === e.target.value;
    });

    this.setState({
      currentMovie: chosenMovie,
    });
    console.log(this.state.currentMovie);
  };

  render(){
    const movieOptions = this.state.movieInfo.map((movieItem) => {
      return(
        <option> {movieItem.title} </option>
      )
    });

    return (
      <div className="movies">  
        <h1>Select a Movie</h1>
        <select onChange={this.handleDropdownChange}>
          <option></option>
          {movieOptions}
        </select>
        <h3>{this.state.currentMovie?.title}</h3>
        <h3>{this.state.currentMovie?.release_date}</h3>
        <h3>{this.state.currentMovie?.description}</h3>
      </div>
    )
  }
}

export default Movies