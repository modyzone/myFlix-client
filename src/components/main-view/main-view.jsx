import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// Import statement to indicate that you need to bundle `./index.scss`
import "../../index.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//importing React-router-dom components

/*
#1 The rest of components import statements but without the MovieCard's because it will be imported and used in the Movies List component rather than in here.
*/


import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { ProfileView } from "../profile-view/profile-view";
import { MovieView } from "../movie-view/movie-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { RegistrationView } from "../registration-view/registration-view";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Nav } from "react-bootstrap";
import NavBar from '../nav-bar/nav-bar';

//Importing SCSS styling component
import "./main-view.scss";
// #0
import { setMovies } from '../../actions/actions';
// we haven't written this one yet
import MoviesList from '../movies-list/movies-list';

class MainView extends React.Component {
  constructor() {
    super();
    //Initial state is set to null
    this.state = {
      /*movies: [],*/
      /*selectedMovie: null,*/
      /*Description: null,*/
      user: null
    };
  }
  getUsers(token) {
    axios
      .get("https://thawing-wildwood-26003.herokuapp.com/users/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getMovies(token) {
    axios
      .get("https://thawing-wildwood-26003.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    console.log(accessToken);
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  /*When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }
  onRegistration(authData) {
    console.log(authData);
    this.setState({});
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  render() {
    let { movies } = this.props;
    let { user } = this.state;

    return (
      <Router>
        <Row className="main-view justify-content-md-center">
        <Link to={`/profile`}>Profile</Link>
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              // #6
              return <MoviesList movies={movies} />;
            }}
          />
          <Route
            exact
            path="/profile"
            render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );

              // #6
              return <ProfileView movies={movies} />
            }}
          />
          <Route
            exact
            path="/users/:Username"
            render={({ match, history }) => {
              if (!user)
                return (<Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
            }}
          />
          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />
          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );

              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <DirectorView
                    Director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                    movies={movies}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <GenreView
                    Genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          {/* The rest of routes */}
          <Col md={6}>
            <button onClick={() => { this.onLoggedOut() }}>Logout</button>
          </Col>
        </Row>
      </Router>
    );
  }
}
// #7
let mapStateToProps = state => {
  return { movies: state.movies }
}
//#8
export default connect(mapStateToProps, { setMovies })(MainView);