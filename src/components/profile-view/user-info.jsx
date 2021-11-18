import React from 'react'

function UserInfo({ email, name, birthdate }) {
    return (
        <>
            <h4>Your Info</h4>
            <p>Name: {name}</p>
            <p>e-mail: {email}</p>
            <p>birthdate: {birthdate}</p>
        </>
    )
}
export default UserInfo