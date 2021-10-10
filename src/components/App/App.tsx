import { type } from 'os';
import React from 'react';
import DeparElemForm from '../DeparElemForm/DeparElemForm';
import DeparElem, { DeparElemProps } from '../Department/Department';
import { Link } from '../Link/Link';
import logo from '../../img/logo.svg'
import './App.css';
import { HashRouter, Route } from 'react-router-dom'

type DeparElemObj = {
  id: number;
  img: string;
  title: string;
  description:string;
}

function App() {

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editId, setEditId] = React.useState<number | null>(null);

  const [deparElem, setDeparElem] = React.useState<DeparElemObj[]>([]);

  const handleCreate = (newDeparElem: {img: string, title: string, description:string}) => {

    const arrayCopy = deparElem.slice();

    arrayCopy.push({
      id: Math.random(),
      img: newDeparElem.img,
      title: newDeparElem.title,
      description: newDeparElem.description,
    });

    setDeparElem(arrayCopy);
  }

  const handleDelate = (delateId:number) =>{

    const deparElemCopy = deparElem.filter((elem) =>{

      if(elem.id === delateId){
        return false;
      } else{
        return true;
      }

    });

    setDeparElem(deparElemCopy);

  }

  const handleBeginEdit = (editId:number) =>{
    setEditId(editId)
    setFormType('edit')
  }

  const handleEdit = (editId: number, editDeparElem: { img: string, description: string})=>{
    const deparElemCopy = deparElem.slice();
    const editIndex = deparElem.findIndex((elem)=>{
      if(elem.id === editId) {
        return true
      }else{
        return false
      }

    });

    deparElemCopy[editIndex] = {
      ...deparElem[editIndex],
      ...editDeparElem,

    }

    setDeparElem(deparElemCopy);
  }

  return (
    <HashRouter>
    <div className="App">
      <div className="App__nav">
          <img src={logo}></img>
          <div className="App__link">
            <Link text={'Inicio'} url={'/home'}></Link>
            <Link text={'Formulario'} url={'/form'}></Link>
            <Link text={'Departamentos'} url={'/depar'}></Link>
            <Link text={'Lugares'} url={'/places'}></Link>
          </div>
          <div className="App_user"></div>
      </div>
    <Route path='/'>
      <section className="App__banner">
        <p className="App__text">Viajes inolvidables
          experiencias de viaje con
          un impacto positivo</p>
      </section>

      <section className="App__depar">
        <div className="App_depar-text">
          <h2>Municipios</h2>
          <p>Conoce los mejores lugares de cada municipio de nuestro país.</p>
        </div>
        <div className="App_depar-list">
        {deparElem.map((elem) => {
          return <DeparElem 
            id={elem.id}
            img={elem.img}
            title={elem.title}
            description={elem.description}
            onDelate={handleDelate} 
            onEdit={handleBeginEdit}
          >
          </DeparElem>
        })}
        </div>
      </section>
      </Route>

    <Route path='/form'>
      <section className="App__forms">
        <DeparElemForm
          type={formType}
          onCreate={handleCreate} 
          editId={editId} 
          onEdit={handleEdit}>
        </DeparElemForm>
      </section>
      </Route>


    </div>
    </HashRouter>
  );
}

export default App;
