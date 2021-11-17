import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './profile-view.scss';
import axios from 'axios';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import { Container, Col, Row, Card } from 'react-bootstrap';
export function ProfileView({ movies, onUpdateUserInfo }) {
    const [user, setUser] = useState({

    })
    const favoriteMovieList = movies.filter((movies) => {

    });
    const getUser = () => {

    }
    const handleSubmit = (e) => {

    }
    const removeFav = (id) => {

    }
    const handleUpdate = (e) => {

    };
    useEffect(() => {

    }, [])
    //this is all the children that we import the parents
    return
    <Container>
        <Row>
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                <UserInfo name={user.Username} email={user.Email} />
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={8}>
                <Card>
                    <Card.Body>
                <UpdateUser user={user} setUser={setUser} />
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <FavoriteMovies favoriteMovieList={favoriteMovieList} />

    </Container>
}