import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <h1>My First React App</h1>
            <h2>Test</h2>
            <Footer year="2021" month="May"/>
        </React.Fragment>
    ) 
}


export default Home
