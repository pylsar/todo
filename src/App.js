import React from 'react';
import List from './components/List/List';
import AddButtonList from './components/AddButtonList/AddButtonList';


import iconList from './assets/img/main.png';
import DB from './assets/db';


function App() {

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
        <List items={[
          {
            color: "lime",
            name: "Покупки"
          },
          {
            color: "orange",
            name: "Фронтенд"
          },
          {
            color: "blue",
            name: "Уборка"
          },
          {
            color: "green",
            name: "Спорт"
          },
        ]}
        isRemovble
        />
        <AddButtonList colors={DB.colors} />
      </div>  
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
