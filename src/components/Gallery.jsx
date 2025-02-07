import { Component, Row, Col } from "react";

class Gallery extends Component {
  state = {
    movies: [],
  };
  getMovies = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=314fa703&s=Star%20Wars");
      if (response.ok) {
        const movies = await response.json();
        this.setState({ movies });
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Row>
        {this.state.movies.Search.map((movie) => {
          return (
            <Col key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
            </Col>
          );
        })}
      </Row>
    );
  }
}
export default Gallery;
