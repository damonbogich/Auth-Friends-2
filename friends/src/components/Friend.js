import React from 'react';

export default function Friend({friend, setFriendIdToEdit, setView}) {
    const handleClick = e => {
        e.preventDefault();
        setFriendIdToEdit(friend.id);
        setView('edit')
    };
    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <h3>Age: {friend.age} </h3>
            <h3>Email: {friend.email}</h3>
            <button onClick={handleClick}>Edit {friend.name}</button>
        </div>
    )
}