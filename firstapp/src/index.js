import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header/>
            <h1>My First React App</h1>
            <h2>Class React</h2>
        </div>
        
    ) 
}

// we are binding component in html file
ReactDOM.render(<App/>,document.getElementById('root'));





//es5
// var React = require('react')
/*
function App(){
    return (
        <h1>My React App</h1>
    )
}*/