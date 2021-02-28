import React from 'react';

export default function Friend({friend}) {
    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <h3>Age: {friend.age} </h3>
            <h3>Email: {friend.email}</h3>
        </div>
    )
}