import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from '../List/List';
import Badge from '../Badge/Badge';

import './AddButtonList.scss';
import iconPlus from '../../assets/img/plus.png';
import iconClose from '../../assets/img/close.png';



const AddButtonList = ({ colors, onAdd })=>{
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if(Array.isArray(colors)){
            selectColor(colors[0].id);
        }
    },[colors]);

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

        setIsLoading(true); // перед тем как отправить запрос делаем загрузку
        axios.post('http://localhost:3001/lists',{
            name: inputValue, colorId: selectedColor}).then(({data}) => {
                const color = colors.filter(c => c.id === selectedColor)[0].name
                const listObj = {...data, color: {name: color}};
        onAdd(listObj);
        onClose();
        }).finally(() => {
            setIsLoading(false); // после успешной загрузки убираем загрузку
        })
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
                <button onClick={addList} className="button">
                    {isLoading ? 'Добавление...' : 'Добавить'}
                </button>
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