import React from 'react';
import PropTypes from 'prop-types';

import './genre-view.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class GenreView extends React.Component {

    keypressCallback(event) {
        console.log(event.key);
    }
    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }
    render() {

        const { genre, onBackClick } = this.props;

        return (
            <Container className="genreContainer">
                <Row>
                    <Col>
                        <div className="genre-view">
                            <div className="genre-name">
                                <span className="label">Genre: </span>
                                <span className="value">{movie.Genre}</span>
                            </div>

                            <div className="genre-description">
                                <span className="description">Description:</span>
                                <span className="value">{genre.Description}</span>
                            </div>
                            <Route path="/genres/:name" render={({ match, history }) => {
                            if (movies.length === 0) return <div className="main-view" />
                            return <Col md={8}>
                                <DirectorView director={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}

GenreView.propTypes = {
    movie: PropTypes.shape({
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }).isRequired,
    })
};