import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import Option from './Option/Option';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post/Post';
// import { db } from '../firebase';
import firebase from 'firebase'

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     db.collection('posts').onSnapshot((snapshot) => (
    //         setPosts(snapshot.docs.map((doc) => (
    //             {
    //                 id: doc.id,
    //                 data: doc.data()
    //             }
    //         )))
    //     ))
    // }, [])

    const sendPost = e => {
        e.preventDefault();
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} type="text" />
                        <button onClick={sendPost} type='submit'>send</button>
                    </form>
                </div>
                <div className="Options">
                    <Option Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <Option Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <Option Icon={EventNoteIcon} title='Event' color='#C8CBCD' />
                    <Option Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
                </div>
            </div>
            {/* POSTS */}
            {posts.map(post => { 
                <Post />
            })}
            <Post name='Andrii Slobodianyk' description='test' message='worked' />
        </div>
    );
}

export default Feed;
