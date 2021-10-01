import { type } from 'os';
import React from 'react';
import DeparElemForm from '../DeparElemForm/DeparElemForm';
import DeparElem, { DeparElemProps } from '../Department/Department';
import { Link } from '../Link/Link';
import './App.css';

type DeparElemObj = DeparElemProps & {
  id:number
}

function App() {

  const [deparElem, setDeparElem] = React.useState<DeparElemObj[]>([]);

  const handleCreate =(newDeparElem: DeparElemProps) =>{
    console.log('holisxs',newDeparElem)

    const newArray = [
      ...deparElem,
      {
        id: Math.random(),
        img: 'ijinuiniu',
        title: newDeparElem.title,
        description:'niunio',
      }
    ]

    setDeparElem(newArray);
  }

  return (
    <div className="App">

      

      <section className="App__banner">

      <div className="link">
      <Link text={'Inicio'} url={''}></Link>
      <Link text={'¿Que hacer?'} url={''}></Link>
      <Link text={'Departamentos'} url={''}></Link>
      <Link text={'Lugares'} url={''}></Link>

      </div>
      <p className="App__text">Viajes inolvidables
      experiencias de viaje con
      un impacto positivo</p>
      <div className="App_img"></div>

      </section>

      <DeparElemForm onCreate={handleCreate}></DeparElemForm>

      {deparElem.map((elem)=>{
        return <DeparElem img={elem.img} title={elem.title} description={elem.description}></DeparElem>
      })}


      

    </div>
  );
}

export default App;
