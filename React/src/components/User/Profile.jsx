import React from 'react'

function Profile() {

    const user = sessionStorage.getItem("Username");

    return (
        <>
            <h3>Hii {user}</h3>
        </>    
    )
}

export default Profile
