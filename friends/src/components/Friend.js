import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function Friend({friend, setFriendIdToEdit, setView, setFriends}) {
    const handleClick = e => {
        e.preventDefault();
        setFriendIdToEdit(friend.id);
        setView('edit')
    };
    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${friend.id}`)
        .then(res => {
            console.log(res)
            setFriends(res.data)

        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <h3>Age: {friend.age} </h3>
            <h3>Email: {friend.email}</h3>
            <button onClick={handleClick}>Edit {friend.name}</button>
            <button onClick={handleDelete}>Delete {friend.name}</button>
        </div>
    )
}