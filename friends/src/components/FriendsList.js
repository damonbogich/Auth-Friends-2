import react, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import NavBar from './NavBar';
import AddFriendForm from './forms/AddFriendForm';
import DeleteFriendForm from './forms/DeleteFriend';
import EditFriendForm from './forms/EditFriendForm';

import Friend from './Friend';

export default function FriendsList() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [view, setView] = useState(null);
    const [friendIdToEdit, setFriendIdToEdit] = useState(null);

    useEffect(() => {
        getData(); 
    }, [view])
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
        <NavBar view={view} setView={setView}/>
        {isLoading && <Loader type="Puff" color="#204963" height="160" width="160"/>}
        {!(view) && friends.map((friend) => {
            return <Friend friend={friend} key={friend.id} setFriendIdToEdit={setFriendIdToEdit} setView={setView}/>
        })}
        {(view ==='add') && <AddFriendForm setView={setView}/>}
        {(view ==='edit') && <EditFriendForm friend_id={friendIdToEdit} setView={setView}/>}
        {(view ==='delete') && <DeleteFriendForm/>}
        </>
    )
}