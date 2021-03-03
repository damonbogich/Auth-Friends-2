// [PUT] to /api/friends/:id: updates the friend using the id passed as part of the URL. Send the an object with the updated information as the body of the request (the second argument passed to axios.put).
import React, {useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export default function EditFriendForm({friend_id, setView}) {
    const [friend, setFriend] = useState({name: "", age: "", email: ""});
    // const history = useHistory();

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
        .put(`/api/friends/${friend_id}`, friend)
        .then(res => {
            console.log(res, 'response from edit friend put request')
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
            <h1>Edit friend</h1>
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
            <button>Edit Friend</button>
        </form>
    )
};