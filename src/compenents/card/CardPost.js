import React from "react";
import "./CardPost.css"
import ReactLoading from 'react-loading';

const CardPost = ({ posts }) => {
  if (posts === null) {
    return (
      <div className="looding">
        <h1>Loading...</h1>
        <ReactLoading type={'spin'} color={'#ffffff'} height={50} width={50} />
    </div>
    );
  }

  return (
    <div className="card">
      <div className="baslik">
        <h1>API: https://jsonplaceholder.typicode.com/posts</h1>
      </div>
      {posts.map((post, index) => (
        <div key={index} className="card-post">
          <div className="card-index">
            <h1>{index + 1}</h1>
          </div>
          <div className="card-title">
            <p><span>Title: </span>{post.title}</p>
            <p><span>Post: </span>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default CardPost;
