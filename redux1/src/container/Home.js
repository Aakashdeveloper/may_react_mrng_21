import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionFile';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component{
    //call action 
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>My Movies</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }
}

//we will recive updated state from store;
function mapStateToProps(state){
    return{
        mydata:state.films
    }
}


export default connect(mapStateToProps)(Home)