import React from 'react'; 
import classNames from 'classnames';
import axios from 'axios';

import Badge from '../Badge/Badge';


import './List.scss';
import iconClose from '../../assets/img/close.png';


const List = ({ items, isRemovble , onClick, onRemove })=>{

    const RemoveList = (item)=>{
        if(window.confirm('Вы действительно хотите удалить список?')){
            axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
                onRemove(item.id);
            })
        }
    }

    return(
        <ul onClick={onClick} className="list">
          {
            items.map((item, index) =>(
            // <li key={index} className={item.active ? 'active' : ''}>
            <li key={index} className={classNames(item.className, {'active': item.active})}>
            <i> 
                {item.icon ? (item.icon) : (<Badge color={item.color.name}/>)} 
            </i>
            <span>
                { item.name}    
            </span>
                { isRemovble && 
                <img className="list__img" 
                src={iconClose} 
                alt="close"
                onClick={()=>{RemoveList(item)}}
                />}
            </li>
            )
            )}
          
        </ul>
    );
};

export default List;