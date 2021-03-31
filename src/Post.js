import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'
import firebase from 'firebase';

function Post({username, profile, message, image, timestamp}) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profile} className='post__avatar' />
                <div className='post__info'>
                    <h3>{username}</h3>
                    <p>{timestamp.toString()}</p>
                    
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                <img src={image} alt='' />
            </div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMe />
                    <p>Share</p>
                </div>
                <AccountCircle />
                <ExpandMoreOutlined />
            </div>
        </div>
    )
}

export default Post
