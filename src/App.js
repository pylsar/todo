import React, {useState} from 'react';
import List from './components/List/List';
import AddButtonList from './components/AddButtonList/AddButtonList';


import iconList from './assets/img/main.png';
import DB from './assets/db';


function App() {

  const [lists, setLists] = useState(DB.lists.map( item =>{
    //вытаскиваем цвет для каждго id(чтобы связать таблицы в DB(id должен быть равен colorId))
    item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
    return item;
  }))

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
        <List items={lists}
        isRemovble
        />
        <AddButtonList onAdd={onAddList} colors={DB.colors} />
      </div>  
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
