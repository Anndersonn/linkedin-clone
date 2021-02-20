import React from 'react';
import './Widgets.css'

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__articles">
            <div className="widgets__articlesLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articlesRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="header__widgets">
                <h2>Linkedin news</h2>
                <InfoIcon />
            </div>
            {newsArticle('PL: hello world', 'over 9999 readers')}
            {newsArticle('UA: hello world', 'over 9999 readers')}
            {newsArticle('UK: hello world', 'over 9999 readers')}
            {newsArticle('USA: hello world', 'over 9999 readers')}
        </div>
    );
}

export default Widgets;