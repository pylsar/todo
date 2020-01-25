import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

const Badge = ({ color, onClick, className }) => {
    return (
        <div>
            <i
             onClick={onClick}
             className={classNames('badge', {[`badge--${color}`]: color}, className)}
            >
            </i>
        </div>
    )
}
export default Badge;