import React from 'react';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export class DirectorView extends React.Component {

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
                    <Col>
                        <div className="director-view">
                            <span className="label">Director: </span>
                            <span className="value">{movie.Director}</span>
                        </div>
                        <div className="director-description">
                            <span className="description">Description:</span>
                            <span className="value">{director.Description}</span>
                        </div>
                        <Route path="/directors/:name" render={({ match, history }) => {
                            if (movies.length === 0) return <div className="main-view" />
                            return <Col md={8}>
                                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />
                    </Col>
                </Row>
            </Container>
        );
    }
}
DirectorView.propTypes = {
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