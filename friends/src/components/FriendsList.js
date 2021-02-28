import react, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function FriendsList() {
    useEffect(() => {
        getData(); 
    })
    const getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
        }) 
        .catch(err => console.log(err)) 
    };
    return (
        <div>
            friendslist
        </div>
    )
}