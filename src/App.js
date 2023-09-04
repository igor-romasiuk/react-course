import React, { useState } from "react";
import Counter from "./components/Counter";
import './styles/app.css'
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])

  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  )
}

export default App
