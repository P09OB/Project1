import { type } from 'os';
import React from 'react';
import DeparElemForm from '../DeparElemForm/DeparElemForm';
import DeparElem, { DeparElemProps } from '../Department/Department';
import { Link } from '../Link/Link';
import logo from '../../img/logo.svg'
import './App.css';

type DeparElemObj = DeparElemProps & {
  id: number
}

function App() {

  const [deparElem, setDeparElem] = React.useState<DeparElemObj[]>([]);

  const handleCreate = (newDeparElem: DeparElemProps) => {

    const newArray = [
      ...deparElem,
      {
        id: Math.random(),
        img: newDeparElem.img,
        title: newDeparElem.title,
        description: newDeparElem.description,
      }
    ]

    setDeparElem(newArray);
  }

  return (
    <div className="App">
      <section className="App__banner">
        <div className="App__nav">
          <img src={logo}></img>
          <div className="App__link">
            <Link text={'Inicio'} active url={''}></Link>
            <Link text={'¿Que hacer?'} url={''}></Link>
            <Link text={'Departamentos'} url={''}></Link>
            <Link text={'Lugares'} url={''}></Link>
          </div>
          <div className="App_user"></div>
        </div>
        <p className="App__text">Viajes inolvidables
          experiencias de viaje con
          un impacto positivo</p>
      </section>

      <section className="App__forms">
        <DeparElemForm onCreate={handleCreate}></DeparElemForm>

        {deparElem.map((elem) => {
          return <DeparElem img={elem.img} title={elem.title} description={elem.description}></DeparElem>
        })}

      </section>

    </div>
  );
}

export default App;
