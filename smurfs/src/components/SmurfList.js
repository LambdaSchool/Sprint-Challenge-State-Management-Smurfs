import React from 'react';
import { connect} from 'react-redux';
import {fetchPosts} from '../actions';

const SmurfList = props => {
    console.log(`smurf list`, props);
    const getPosts = e => {
        e.preventDefault();
        props.fetchPosts();
    }
    return   (
        <div className="list-container">
            <button onClick={getPosts}>FETCH POSTS</button>
            <div className="list">{props.smurfs.map(post => (
                  <div className="list-item" key={post.id}>
                      <h1>{post.name}</h1>
                      <p>{post.age}</p>
                      <p>{post.height}</p>
                  </div>
            ))
            }
            </div> 
        </div>
    )
}


const mapStateToProps = state => {
    console.log(`smurf`,state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        smurfs: state.smurfs
    }
}     



export default connect(mapStateToProps, {fetchPosts})(SmurfList); 