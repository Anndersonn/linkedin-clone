import React from 'react';
import './Option.css'

function Option({Icon, title, color}) {
    return (
        <div className='option'>
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    );
}

export default Option;
