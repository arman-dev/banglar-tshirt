import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    return (
        <div>
            <h3>This is my Home</h3>
            <h3>T shirts: {tshirt.length}</h3>
        </div>
    );
};

export default Home;