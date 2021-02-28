import react, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import NavBar from './NavBar';

import Friend from './Friend';

export default function FriendsList() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData(); 
    }, [])
    const getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
            setIsLoading(false)
        }) 
        .catch(err => console.log(err)) 
    };
    return (
        <>
        <NavBar/>
        {isLoading && <Loader type="Puff" color="#204963" height="160" width="160"/>}
        {friends.map((friend) => {
            return <Friend friend={friend} key={friend.id}/>
        })}

        </>
    )
}