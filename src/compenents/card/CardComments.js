import React from 'react';
import "./CardComments.css";
import ReactLoading from 'react-loading';

const CardComments = ({ comments }) => {
  if (comments === null) {
    return (
      <div className="looding">
        <h1>Loading...</h1>
        <ReactLoading type={'spin'} color={'#ffffff'} height={50} width={50} />
    </div>
    );
  }
  const limitedComments = comments.slice(0, 100); 
  return (
    <div className='comments'>
            <div className="baslik">
        <h1>API: https://jsonplaceholder.typicode.com/comments</h1>
      </div>
      {limitedComments.map((comment, index) => (
        <div key={index} className='comment'>
          <div className="user-title">
            <p><span>Name: </span>{comment.name}</p>
            <p><span>Email: </span>{comment.email}</p>
            <p><span>Comment: </span>{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComments;