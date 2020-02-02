import React, {useState, useEffect} from 'react';
import axios from 'axios';


import List from './components/List/List';
import AddButtonList from './components/AddButtonList/AddButtonList';
import Tasks from './components/Tasks/Tasks';

import iconList from './assets/img/main.png';
// import DB from './assets/db';


function App() {

  // const [lists, setLists] = useState(DB.lists.map( item =>{
  //   //вытаскиваем цвет для каждго id(чтобы связать таблицы в DB(id должен быть равен colorId))
  //   item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
  //   return item;
  // }))
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);


  useEffect(()=>{
    axios.get('http://localhost:3001/lists?_expand=color').then(({data}) =>{
      setLists(data);
    });
    axios.get('http://localhost:3001/colors').then(({data}) => {
      setColors(data);
    });
  }, []);

  const onAddList = (obj)=>{
    const newList = [
      ...lists, obj
    ];
    setLists(newList)
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: <img src={iconList} alt="some icon"/> ,
            name: "Все задачи",
            active: true
          }
        ]}/>
        {lists ? (
        <List items={lists}
          isRemovble
          onRemove = {(id) =>{
             const newList = lists.filter(item => item.id !== id); // отфильтрует весь массив и там где id не совпадает, уберет его из массива
            setLists(newList); // обновим состояние после удаления из бд
          }}
        />
        ) : (
          'Загрузка...'
        )}  
        <AddButtonList onAdd={onAddList} colors={colors} />
      </div>  
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
