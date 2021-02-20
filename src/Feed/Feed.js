import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import Option from './Option/Option';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post/Post';
import { db } from '../firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
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
            <FlipMove>
            {posts.map(({ id, data: { name, descripption, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    descripption={descripption}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
