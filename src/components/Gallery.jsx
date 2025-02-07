import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
  };
  getMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=314fa703&s=${this.props.movies}`);
      if (response.ok) {
        const movies = await response.json();
        this.setState({ movies: movies.Search });
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
      <>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies.slice(0, 6).map((movie) => {
            return (
              <Col key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
export default Gallery;
