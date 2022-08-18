import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
        // eta direct o dewa jae abr templete string diyeo dewa jae 
        //amra dynamic route hshebe ek ta place e jete pari link banae o korte pari
        //abr coding er maddhomeo jete pari use navigate use kore 
        //link banae o korte pari btn banae o korte pari
    }
    return (
        <div>
            <h2>Name: {name} </h2>
            <Link to={'/friend/' + id}>show detail</Link>
            <button onClick={showFriendDetail}>{username} id: {id}</button>
            {/* dynamic kortesi  */}
        </div>
    );
};

export default Friend;