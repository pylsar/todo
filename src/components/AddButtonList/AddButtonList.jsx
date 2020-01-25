import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../Badge/Badge';

import './AddButtonList.scss';
import iconPlus from '../../assets/img/plus.png';



const AddButtonList = ({ colors })=>{
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(null);

    // console.log(selectedColor);

    return(
        <div className="add-list">
            <List 
            onClick ={()=> setVisiblePopup(true)}
            items={[
                { 
                    className: "list__add-button",
                    icon: <img src={iconPlus} alt="add icon"/>,
                    name: "Добавить таску"
                }
                ]}
            />
            {visiblePopup && <div className="add-list__popup">
                <input className="field" type="text" placeholder="писать тут"/>
                <div className="add-list__popup-colors">
                {colors.map(color =>(
                <Badge  onClick={()=> selectColor(color.id)}
                 key={color.id} 
                 color={color.name}
                 className={selectColor === color.id && 'active'}
                 />
                ))}
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}




export default AddButtonList;