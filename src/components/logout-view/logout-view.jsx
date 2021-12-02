import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function LogoutView(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLoggedOut() 
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.setState({
              user: null,
            });
        }
    }
