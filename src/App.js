import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 8px'}}/>
      <div>
        <MySelect
          defaultValue= 'Sort'
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'},
          ]}
        />
      </div>
      {posts.length 
        ? <PostList remove={removePost} posts={posts} title='Post list 1'/>
        : <h2 style={{textAlign: 'center', color: 'grey'}}>Posts not found</h2>
      }
    </div>
  )
}

export default App
