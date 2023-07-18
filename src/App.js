
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import CardPost from './compenents/card/CardPost';
import CardUser from './compenents/card/CardUser';
import CardComments from './compenents/card/CardComments';
import CardTodos from './compenents/card/CardTodos';
import logo from './logo.svg';



function App() {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [comments, setComments] = useState(null);
  const [todos, setTodos] = useState(null);
  const [urlLink, setUrlLink] = useState(null);

  useEffect(() => {
    if (urlLink === "posts") {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setTimeout(() => {
            console.log(res);
            setPosts(res.data);
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (urlLink === "users") {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setTimeout(() => {
            console.log(res);
            setUsers(res.data);
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (urlLink === "comments") {
      axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
          setTimeout(() => {
            console.log(res);
            setComments(res.data);
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    }
    else if (urlLink === "todos") {
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTimeout(() => {
            console.log(res);
            setTodos(res.data);
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [urlLink]);

  const handleButtonClick = (link) => {
    setUrlLink(link);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, React</h1>
          <p>#axios #useState #useEffect #handleButtonClick </p>
        </header>
      </div >
      <div className='buttons'>
        <button className='post' type='button' onClick={() => handleButtonClick("posts")}>Post</button>
        <button className='user' onClick={() => handleButtonClick("users")}>Users</button>
        <button className='commen' onClick={() => handleButtonClick("comments")}>Comments</button>
        <button className='todo' onClick={() => handleButtonClick("todos")}>Todos</button>
      </div>

      <div className='cardDisplay'>
        {urlLink === "posts" && <CardPost posts={posts} />}
        {urlLink === "users" && <CardUser users={users} />}
        {urlLink === "comments" && <CardComments comments={comments} />}
        {urlLink === "todos" && <CardTodos todos={todos} />}
      </div>
    </div>

  );
}

export default App;
