import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";

export default function LoginForm() {
    const [user, setUser] = useState({username: '', password: ''});

    const history = useHistory();

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', user)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            history.push('/friendslist');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={login}>
            <label> Username:
                <input
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleChanges}
                />
            </label>
            <label> Password:
                <input
                    type='text'
                    name='password'
                    value={user.password}
                    onChange={handleChanges}
                />
            </label>
            <button>Login</button>
        </form>
    )
}