// [POST] * to /api/login: returns a token to be added to the header of all other requests. Pass in the following credentials as the body of the request: { username: 'Lambda School', password: 'i<3Lambd4' }
import React, {useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { useHistory } from "react-router";

export default function AddFriendForm({setView}) {
    const [friend, setFriend] = useState({name: "", age: "", email: ""});
    const history = useHistory();

    const handleChanges = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name] : e.target.value
        });
        console.log(e.target.name)
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
            console.log(res, 'response from add friend post request')
            setFriend({
                name: "", age: "", email: ""
            });
            setView(null)
        })
        .catch(err => {
            console.log(err)
        })

    };

    return (
        <form onSubmit={handleSubmit} >
            <h1>Add friend</h1>
            <label> Name:
                <input
                    type='text'
                    name='name'
                    value={friend.name}
                    onChange={handleChanges}
                />
            </label>
            <label> Age:
                <input
                    type='number'
                    name='age'
                    value={friend.age}
                    onChange={handleChanges}
                />
            </label>
            <label> Email:
                <input
                    type='text'
                    name='email'
                    value={friend.email}
                    onChange={handleChanges}
                />
            </label>
            <button>Add Friend</button>
        </form>
    )
};