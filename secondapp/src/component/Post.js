import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    //console.log(props)
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3>Post Page</h3>
            </div>
            <div className="panel-body">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
                <h3>JavaScript</h3>
                <Link to="/post/JavaScript?page=1">Details</Link>
                <h3>React</h3>
                <Link to="/post/React?page=2">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node">Details</Link>
            </div>
        </div>
    )
}

export default Post;