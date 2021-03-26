import React from 'react';
import StoryReel from '../storyReel/storyReel';
import MessageSender from '../messageSender/messageSender';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {/*{
                postsDate.map(entry => (
                    <Post
                        profilePic = {entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName = {entry.imgName}
                        username={entry.user}
                    />
                ))
            }*/}
        </div>
    )
}

export default Feed
