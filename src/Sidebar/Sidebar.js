import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItems = topic => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg" alt="avatar" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Lorem ipsum</p>
                    <p className='sidebar__num'>3000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Lorem ipsum </p>
                    <p className='sidebar__num'>5000</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h5>Recent</h5>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('softwareengineering')}
                {recentItems('design')}
                {recentItems('developer')}
            </div>
        </div>
    )
}

export default Sidebar
