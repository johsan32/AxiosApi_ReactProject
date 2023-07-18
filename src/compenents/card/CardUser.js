import React from 'react';
import "./CardUser.css";
import ReactLoading from 'react-loading';

const CardUser = ({ users }) => {
  if (users === null) {
    return (
      <div className="looding">
        <h1>Loading...</h1>
        <ReactLoading type={'spin'} color={'#ffffff'} height={50} width={50} />
    </div>
    );
  }

  return (
    <div className='users'>
      <div className="baslik">
        <h1>API: https://jsonplaceholder.typicode.com/users</h1>
      </div>
      {users.map((user, index) => (
        <div key={index} className='card-user'>
          <div className="user-image">
            <img src="" alt="Looding"/>
            <p>"{user.username}"</p>
          </div>
          <div className="user-title">
            <p><span>Name: </span>{user.name}</p>
            <p><span>Phone: </span>{user.phone}</p>
            <p><span>Email: </span>{user.email}</p>
            <p><span>Company: </span>{user.company.name}</p>
            <p><span>City: </span>{user.address.city}</p>
            <a href="/">Website: {user.website}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUser;
