import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, 
            data: doc.data() })))
        );
    }, []);

    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender />

            {posts.map((post) => ( 
                 <Post 
                 key={post.id}
                 username= {post.data.username}
                 profile={post.data.profile}
                 message={post.data.message}
                 image={post.data.image}
                 timestamp={post.data.timestamp}/>
                )
            )}

            <Post 
                username='' 
                profilePic=''
                message='' 
                image='' 
                timestamp=''/>
            <Post 
                username='' 
                profilePic='' 
                message='' 
                image='' 
                timestamp=''/>
                
        </div>
    )
}

export default Feed
