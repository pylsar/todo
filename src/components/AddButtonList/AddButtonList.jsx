import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../Badge/Badge';

import './AddButtonList.scss';
import iconPlus from '../../assets/img/plus.png';
import iconClose from '../../assets/img/close.png';



const AddButtonList = ({ colors, onAdd })=>{
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const onClose = () =>{
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    } 

    const addList = () =>{
        if(!inputValue){
            alert('введите значение');
            return; // обрывает все что идет дальше
        }

        onAdd({id: Math.random(), name: inputValue, color: colors.filter(c => c.id === selectedColor)[0].name})
        onClose();
    }

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
                <input 
                    value={inputValue} 
                    onChange={(e)=>{
                        setInputValue(e.target.value); // получаем данные из инпута
                    }}
                    className="field" 
                    type="text" 
                    placeholder="писать тут"
                />
                <div className="add-list__popup-colors">
                    {colors.map(color =>(
                    <Badge  onClick={()=> selectColor(color.id)}
                    key={color.id} 
                    color={color.name}
                    className={selectedColor === color.id && 'active'}
                    />
                    ))}
                </div>
                <button onClick={addList} className="button">Добавить</button>
                <img 
                   onClick={onClose}
                   className="add-list__popup-closeBtn" 
                   src={iconClose} alt="close"
                />
            </div>}
        </div>
    )
}




export default AddButtonList;