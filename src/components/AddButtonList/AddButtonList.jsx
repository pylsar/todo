import React, { useState } from 'react';
import List from '../List/List';

import './AddButtonList.scss';
import iconPlus from '../../assets/img/plus.png';


const AddButtonList = ()=>{
    const [visiblePopup, setVisiblePopup] = useState(false);


    return(
        <div className="add-list">
            <List items={[
                {
                    className: "list__add-button",
                    icon: <img src={iconPlus} alt="add icon"/>,
                    name: "Добавить таску"
                }
                ]}
            />
            {visiblePopup && <div className="add-list__popup">
                asd
            </div>}
        </div>
    )
}




export default AddButtonList;