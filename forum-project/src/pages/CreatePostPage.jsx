const CreatePostPage = ({posts, setPosts, id, setId}) => {

    const createPost = (e) => {
        e.preventDefault();
    
        console.log(e.target.subject.value);
        console.log(e.target.message.value);
    
        const subject = e.target.subject.value;
        const message = e.target.message.value;
    
        setPosts([...posts, {
          id,
          subject,
          message
        }])
    
        console.log(posts);
    
        setId(id+1);
        console.log('Post Created');
    }

    return (
        <div>
            <form onSubmit={(e) => createPost(e)}>
                <input type='text' placeholder="Enter your subject" id='subject'/>
                <br></br>
                <textarea placeholder='Enter your post message in here' id='message'/>
                <br></br>
                <button type='submit'> Create Post </button>
            </form>
        </div>
    )
}

export default CreatePostPage;