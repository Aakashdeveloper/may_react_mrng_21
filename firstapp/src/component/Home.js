import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        return (
            <React.Fragment>
                <Header/>
                <NewsDisplay newsData={this.state.news}/>
                <Footer year="2021" month="May"/>
            </React.Fragment>
        ) 
    }
    
}


export default Home
