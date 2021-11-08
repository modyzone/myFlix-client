import React from 'react';
import propTypes from 'prop-types';

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
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
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