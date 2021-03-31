import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({imageSrc, profileSrc, profileName}) {
    return (
        <div style={{backgroundImage: `url(${imageSrc})`}} className='story'>
            <Avatar className='story__avatar' src={profileSrc} />
            <h4>{profileName}</h4>
        </div>
    )
}

export default Story;
