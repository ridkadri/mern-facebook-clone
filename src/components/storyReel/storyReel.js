import React from 'react';
import './storyReel.css';

import Story from '../story/story';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://images.statusfacebook.com/profile_pictures/cool_profile_pictures/cool_profile_picture_85.jpg'
                profileSrc='https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/82383166_10214886153059226_2643633515505123328_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7gQIJlGuLLUAX9sEOLE&_nc_ht=scontent.facc5-1.fna&oh=606c5588932405946280764e24ab2d1c&oe=60827143'
                title='Akosua Oppong'
            />
            <Story
                image='https://scontent.facc5-2.fna.fbcdn.net/v/t1.0-9/165141744_291671308996978_3420961135702181275_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=XSRLybInApoAX8dDGll&_nc_ht=scontent.facc5-2.fna&oh=4ce3280f044fb494cfec0d89852ca79d&oe=608388DC'
                profileSrc='https://scontent.facc5-2.fna.fbcdn.net/v/t1.0-9/139822416_250747133089396_4647882228699982025_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2-tSUmIGBwUAX-4wz-0&_nc_ht=scontent.facc5-2.fna&oh=5498f3951c35c0ce1b57c1f99d78b823&oe=60846655'
                title='DJ Black'
            />
            <Story
                image='https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/161266531_5461512537222913_7627859094587086018_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=ouhoVVm4ZikAX-JLrZn&_nc_ht=scontent.facc5-1.fna&oh=274124273f2f4dfaea5854f5465779a3&oe=6084DAF4'
                profileSrc='https://scontent.facc5-2.fna.fbcdn.net/v/t1.0-9/161378822_5461542157219951_2264865491770013940_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IpoJloXRos0AX9fl3hu&_nc_ht=scontent.facc5-2.fna&oh=55b3648c61b78516f2b0fe3dbaec8292&oe=60844F30'
                title='Joojo Miyagi'
            />
        </div>
    )
}

export default StoryReel
