import React from 'react';

import './Tasks.scss';
import iconPencil from '../../assets/img/pencil.png';
import iconCheck from '../../assets/img/check.svg';


const Tasks = ({list})=> {
    return(
        <div className="tasks">
        <h2 className="tasks__title">
            {list.name}
            <img src={iconPencil} alt="edit"/>
        </h2>
        <div className="tasks__items">
            {
                list.tasks.map( task => <div key={task.id} className="tasks__items--row">
                <div className="checkbox">
                    <input id={`task-${task.id}`} type="checkbox"/>
                    <label htmlFor={`task-${task.id}`}>
                        <img className="checkbox__icon" src={iconCheck} alt="check icon"/>
                    </label>
                </div>
                <input readOnly value={task.text} />
            </div>)
            }

            
        </div>

        </div>
    )
}

export default Tasks;