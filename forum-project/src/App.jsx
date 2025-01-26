import { useState } from 'react';

import CreatePostPage from './pages/CreatePostPage'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState([])

  
  return (
    <div>
      <h1> You're gay </h1>

      <CreatePostPage posts={posts} setPosts={setPosts} id={id} setId={setId} />

      {posts.map((post) => {
        return (
        <div key={post.id} style={{border:"1px solid lightblue"}}> 
          <h4> {post.subject} </h4>
          <p> {post.message} </p>
        </div>
      )})}
    </div>
  )
}

export default App;