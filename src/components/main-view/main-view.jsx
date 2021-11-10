import React from 'react';
import axios from 'axios';

//importing React-router-dom components


import { LoginView } from '../login-view/login-view';

import { MovieCard } from '../movie-card/movie-card';

import { MovieView } from '../movie-view/movie-view';

import { RegistrationView } from '../registration-view/registration-view';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-router-dom';

//Importing SCSS styling component
import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
    super();
    //Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }
  componentDidMount() {
    axios.get('https://thawing-wildwood-26003.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
  /*When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }
  /*when a new user need to register*/
  onRegistration(register) {
    this.setState({
      register
    });
  }

  render() {
    const { movies, selectedMovie, user, register } = this.state;
    console.log('movies', movies);
    /* If there is no user, the LoginView is rendered. If there is a user logged in, 
    the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    if (!register) return <RegistrationView onRegistration={register => this.onRegistration(register)} />
    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        <Navbar bg="navColor" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href='#login-view.jsx'>users</Navbar.Brand>
            <Nav className="movies">
              <Nav.Link href="#movie-view.jsx">Home-Page</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Container>
            {selectedMovie
              ? (
                <Row className="justify-content-lg-center">
                  <Col lg={9} >
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                  </Col>
                </Row>
              )
              : (
                <Row className="justify-content-lg-center">
                  {movies.map(movie => (
                    <Col lg={3} md={4} sm={6} >
                      <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    </Col>
                  ))
                  }
                </Row>
              )}
          </Container>
        </div>
      </div>
    );
  }
}

export default MainView;

// Import statement to indicate that you need to bundle `./index.scss`
import '../../index.scss';
import { Nav } from 'react-bootstrap';
