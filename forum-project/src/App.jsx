import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const App = () => {
  const [posts, setPosts] = useState([]);

  const [upvoteAscending, setUpvoteAscending] = useState(false);

  const sortPostByUpvote = () => {
    const sortedPosts = posts;

    sortedPosts.sort((postA, postB) => {
      if (postA.upvote > postB.upvote) {
        return upvoteAscending ? 1 : -1;
      }else {
        return upvoteAscending ? -1 :  1;
      }
    })
    

    setPosts(sortedPosts);
  }

  const getPosts = async () => {
    const response = await supabase.from('post').select();
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, [])
  
  const deletePost = async (id) => {
    const response = await supabase.from('post').delete().eq('id', id);
    console.log(response);
    if(response.status == 204) {
      alert("your post has been successfully deleted");
      getPosts();
    }
  }

  const upvotePost = async (post) => {
    const response = await supabase.from('post').update({upvote: post.upvote + 1}).eq('id', post.id);
    console.log(response);

    if(response.status == 204) {
      alert("the post has been successfully upvoted");
      getPosts();
    }
  }

  const downvotePost = async (post) => {
    const response = await supabase.from('post').update({downvote: post.downvote + 1}).eq('id', post.id);
    console.log(response);

    if(response.status == 204) {
      alert("the post has been successfully downvoted");
      getPosts();
    }
  }


  return (
    <div className='pb-20'>
      <h1 className='p-8 flex justify-center bg-gradient-to-r from-emerald-500 to-orange-300 '> Poster </h1>

      <div className='fixed bottom-0 w-full bg-stone-50'>
        <button className='m-8 text-orange-300'> <Link to='/create'> Create a Post <img src="https://www.svgrepo.com/show/511906/edit-1483.svg" alt = "add" width="20" height="20" /></Link> </button>
        <button className='m-8 text-orange-300' onClick={() => {
          setUpvoteAscending(!upvoteAscending)
          sortPostByUpvote(posts);
          }}> Sort Post by Upvote {upvoteAscending ? 'v' : '^'} </button>
      </div>

      {posts.map((post) => {
        return (
        <div className='flex flex-col gap-2 rounded-xl shadow-2xl m-10 p-2 ' key={post.id} style={{border:"2px"}}> 
          <h4 className=''> {post.subject} </h4>
          <p className=''> {post.content} </p>
          <p>post created at: {new Date(post.created_at).toString()}</p>
          <dev className='flex align-items items-center gap-3 '>
            <p className=''>Upvote: {post.upvote}</p>
            <img src = "https://www.svgrepo.com/show/512413/like-1385.svg" alt="like" width="20" height="20" onClick={() => upvotePost(post)}/>
            <img src = "https://www.svgrepo.com/show/511863/dislike-1387.svg" alt="dislike" width="20" height="20" onClick={() => downvotePost(post)}/>
            <img src = "https://www.svgrepo.com/show/511788/delete-1487.svg" alt="delete" width="20" height="20" onClick={() => deletePost(post.id)}/>
          </dev>
        </div>
      )})}
    </div>
  )
}


export default App;