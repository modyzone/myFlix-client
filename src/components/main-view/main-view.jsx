import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';

import { MovieCard } from '../movie-card/movie-card';

import { MovieView } from '../movie-view/movie-view';

import { RegistrationView } from '../registration-view/registration-view';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      /*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/
      <Row className="main-view justify-content-md-center">
        {selectedMovie
          ? (
            <Col md={8}>
              <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
            </Col>
          )
          : movies.map(movie => (
            <Col md={3}>
              <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
            </Col>
          ))
        }
      </Row>
    );
  }
}

export default MainView;

// Import statement to indicate that you need to bundle `./index.scss`
import '../../index.scss';