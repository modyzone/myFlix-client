import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./movie-view.scss";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    console.log("movie", movie);

    return (
      <Container className="movie-view">
        <Row className="mt-5 pt-5">
          <Col>
            <Row>
              <Col className="movie-poster value">
                <img src={movie.ImagePath} />
              </Col>
            </Row>
            <Row className="movie-title">
              <Col className="value pb-5" style={{ fontSize: "40px" }}>
                {movie.Title}
              </Col>
            </Row>
            <Row className="movie-description">
              <Col className="label pt-2" md={2}>
                Description:{" "}
              </Col>
            </Row>
            <Row className="movie-description">
              <Col className="value">{movie.Description}</Col>
            </Row>

            <Row>
              <Button
                variant="link"
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
