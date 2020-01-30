import React from 'react';

import './Tasks.scss';
import iconPencil from '../../assets/img/pencil.png';
import iconCheck from '../../assets/img/check.svg';


const Tasks = ()=> {
    return(
        <div className="tasks">
        <h2 className="tasks__title">
            Фронтенд
            <img src={iconPencil} alt="edit"/>
        </h2>
        <div className="tasks__items">
            <div className="checkbox">
                <input id="check" type="checkbox"/>
                <label htmlFor="check">
                    <img className="checkbox__icon" src={iconCheck} alt="check icon"/>
                </label>
            </div>
        </div>

        </div>
    )
}

export default Tasks;