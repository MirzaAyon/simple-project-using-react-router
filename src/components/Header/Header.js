import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'


const Header = () => {
    return (
        <div>
            <h1>Welcome to my router website with header</h1>
            {/* eta app.js theke ekhane boshalam  */}
            <nav>
                {/* first way */}
                {/* <a href="/">Home</a>
                <Link to="/friends">Friends</Link>
                <a href="/about">About</a> */}
                {/* a diye korle reload hbe  */}

                {/* second way  */}
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                {/* 3rd way */}
                {/* <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink> */}
            </nav>
            {/* jetay click korbo shetai chole jachche  */}
        </div>
    );
};

export default Header;