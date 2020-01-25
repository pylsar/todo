import React from 'react';

import './Badge.scss';

const Badge = ({ color }) => {
    return (
        <div>
            <i className={`badge badge--${color}`}></i>
        </div>
    )
}
export default Badge;