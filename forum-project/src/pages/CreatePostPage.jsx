import { Link, useNavigate } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const CreatePostPage = () => {

    console.log(SUPABASE_URL);
    console.log(SUPABASE_ANON_KEY);

    const navigate = useNavigate();

    const createPost = async (e) => {
        
        e.preventDefault();
    
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        
        const response = await supabase.from('post').insert({
            subject: subject,
            content: message
        })

        if(response.status == 201) {
            alert("your post has been successfully created");
            navigate('/');
        }
        else {
            alert("there was an error creating your post");
    }}

    return (
        <div className='flex flex-col justify-center h-[100vh]'>
            <button className='m-5 '><Link to='/'> go back to Home page </Link></button>
            <h3 className='text-5xl'> Make a Post</h3>
            <form onSubmit={(e) => createPost(e)} className='flex flex-col gap-4 p-8 max-w-5xl' >
                <input className='m-2 bg-stone-100' type='text' placeholder="Enter your subject" id='subject'/>
                <br></br>
                <textarea className='m-2 bg-stone-100' placeholder='Enter your post message in here' id='message'/>
                <br></br>
                <button className='m-2' type='submit'> Create Post </button>
            </form>
        </div>
    )
}

export default CreatePostPage;