import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    //2nd pm ta dependancy and first pm ta anonymous func
    return (
        <div>
            <h2>Hello friends how are you</h2>
            <p><small>give me some money as a dhar {friends.length}</small></p>
            {
                friends.map(friend =>
                    <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;