import React from 'react';
import StoryReel from '../storyReel/storyReel';
import MessageSender from '../messageSender/messageSender';
import Post from '../post/post';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            <Post
                profilePic='https://ridkadri.com/static/rid.5801c40167.jpg'
                message='Yoo this is a message'
                timeStamp='time'
                imgName='imgName'
                username='Ridwan'
            />

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
