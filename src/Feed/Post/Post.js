import React, { forwardRef } from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';
import Option from '../Option/Option';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Post = forwardRef(({ message, description, name }, ref) => {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className='post'>
            <div className="info">
                <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
                <div className="description">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="text">
                <p>{message}</p>
            </div>
            <div className="buttons">
                <Option Icon={ThumbUpAltIcon} title='Like' color='gray' />
                <Option Icon={CommentIcon} title='Comment' color='gray' />
                <Option Icon={ShareIcon} title='Share' color='gray' />
                <Option Icon={SendIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post;