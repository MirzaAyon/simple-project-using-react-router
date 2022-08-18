import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    // but evabe na kore destructuring krbo
    const { friendId } = useParams();
    return (
        <div>
            <h2>This is details of a bondhu : {friendId}</h2>
        </div>
    );
};

export default FriendDetail;