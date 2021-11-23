import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post(
        `https://thawing-wildwood-26003.herokuapp.com/login?Username=${username}&Password=${password}`,
        {
          Username: username,
          Password: password,
        }
      )
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("no such user");
      });
  };
  /* then call props.onLoggedIn(username) which provides the username to our parent component
  (child to parent communication) */
  // props.onLoggedIn(username);
  //};

  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Link to={`/register`}>
            <Button className="login-register-button" variant="link">
              Register
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  Register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
};
