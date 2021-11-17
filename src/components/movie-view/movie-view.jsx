import React from 'react';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }
  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }


  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <div className="movie-view">
            <div className="movie-poster">
              <img src={movie.ImagePath} />
            </div>
            <div className="movie-title">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>
            </div>
            <Link to={`/directors/${movie.Director.Name}`}>
              <Button variant="link">Director</Button>
            </Link>
            <Link to={`/genres/${movie.Genre.Name}`}>
              <Button varaint="link">Genre</Button>
            </Link>
            <Route path="/movies/:moviesId" render={({ match, history }) => {
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            }} />
          </div>
        </Row>
      </Container>
    );
  }
}
MovieView.propTypes = {
  movie: propTypes.shape({
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    Imagepath: propTypes.string.isRequired,
    Genre: propTypes.shape({
      Name: propTypes.string.isRequired,
    }),
    Director: propTypes.shape({
      Name: propTypes.string.isRequired,
    })
  }),
};