import { Avatar, Input } from '@material-ui/core';
import React,{useState} from 'react';
import './messageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.value) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('Submitting')
    }

    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src='https://ridkadri.com/static/rid.5801c40167.jpg'/>
                <form>
                    <input
                        type='text'
                        className='messageSender_input'
                        placeholder='Whats on your mind?'
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />
                    <Input 
                        type='file' 
                        className='messageSender_fileSelector'
                        onChange={handleChange}
                    />
                    <button 
                        onClick={handleSubmit} 
                        type='submit'></button>
                </form>
            </div>

            <div className='messageSender_bottom'>
                <div className='messageSender_option'>
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender_option'>
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender_option'>
                    <InsertEmoticonIcon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
