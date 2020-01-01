import React from 'react'

import './menu-item.styles.scss'
const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h4 className='tilte'>{title.toUpperCase()}</h4>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;