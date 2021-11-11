import React from 'react';
import DeparElemForm from '../DeparElemForm/DeparElemForm';
import DeparElem from '../Department/Department';
import { Link } from '../Link/Link';
import logo from '../../img/logo.svg'
import croquis from '../../img/croquis.svg'
import './App.css';
import { HashRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import DeparElemDetails from '../DeparElemDetails/DeparElemDetails';
import Page404 from '../Page404/Page404';
import { DeparElemObj } from '../types/DeparElemObj';
import { MuniciElemObjt } from '../types/MuniciElemObj';
import MuniciElemDetails from '../MuniciElemDetails/MuniciElemDetails';
import Carousel from 'react-elastic-carousel'
import { PlaceElemObj } from '../types/PlaceElemObj';
import PlaceElemDetails from '../PlaceElem/PlaceElemDetails';
import MuniciElem from '../MuniciElem/MuniciElem';
import { Bar } from 'react-chartjs-2';
import { TagOption } from '../types/TagOption';
import PlaceElem from '../PlaceElem/PlaceElem';

const bool = false;


function App() {

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editId, setEditId] = React.useState<number | null>(null);
  const [deparElem, setDeparElem] = React.useState<DeparElemObj[]>([

    {
      id: 0,
      img: 'https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png',
      title: 'Valle Del Cauca',
      description: 'Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el océano Pacífico, mientras que en el interior está la cordillera de los Andes.',
      mapImg: 'https://lh3.googleusercontent.com/-U9y4fsOqYpQ/YYndVTc4sdI/AAAAAAAAH20/G6PyFPm1zh04XpM5XOVpqE40Ijq65tMhACLcBGAsYHQ/MapValle.png',
      munici: [{
        id: 0.3,
        idDepar: 0,
        title: 'Cali',
        weather: '20',
        description: 'Es conocida por el baile de la salsa, del que hay muchos clubes en el suburbio de Juanchito.',
        img: 'https://blogs.iadb.org/ciudades-sostenibles/wp-content/uploads/sites/17/2016/04/cali-3.jpg',
      }, {
        id: 0.5,
        idDepar: 0,
        title: 'Ginebra',
        weather: '18',
        description: 'Es conocida a nivel internacional por su sancocho de gallina, por la producción de uva isabella y por el festival Mono Núñez. Es la ciudad natal del portero Miguel Calero.',
        img: 'https://elturismoencolombia.com/wp-content/uploads/2017/10/ginebra_iglesia_nuestra_se%C3%B1ora_del_rosario_valle_turismo_colombia_travel.jpg',
      }, {
        id: 0.6,
        idDepar: 0,
        title: 'Buga',
        weather: '23',
        description: 'Es conocida por su Basílica del Señor de los Milagros de comienzos del siglo XX, un sitio de peregrinación que alberga una imagen sagrada de Cristo que se cree que hace milagros',
        img: 'https://www.las2orillas.co/wp-content/uploads/2017/11/buga_0.jpg',
      }],
      place: [],

    },
    {
      id: 1,
      img: 'https://lh3.googleusercontent.com/-McqWm9Q4KbQ/YYnLB2CE_ZI/AAAAAAAAH1U/F-W2J9Xrlh8LkgbrC4pAlo19XIv6aGjrQCLcBGAsYHQ/boyaca.png',
      title: 'Boyaca',
      description: 'Tiene ciudades coloniales que se destacan por su arquitectura y fue el lugar de victorias cruciales durante la lucha de Colombia por su independencia. ',
      mapImg: 'https://lh3.googleusercontent.com/-sSL8PNBRe6s/YYndVSy98BI/AAAAAAAAH24/kXAm_IyA-_YhC3J5yVndQ8RuOay_nHrBQCLcBGAsYHQ/MapBoyaca.png',
      munici: [],
      place: [],

    },
    {
      id: 2,
      img: 'https://lh3.googleusercontent.com/-XVYG9-exyZM/YYnXwmSadsI/AAAAAAAAH2Q/y7kmgoYYkd8DGOzIB3dsItOF4FvnV6nZwCLcBGAsYHQ/AMAZONAS.png',
      title: 'Amazonas',
      description: 'La Amazonia Colombiana es un lugar increíble para los turistas que buscan tener contacto extremo con la naturaleza y conocer algunas de las culturas más representativas del país.      ',
      mapImg: 'https://lh3.googleusercontent.com/-La8UkjdPHgA/YYneQb7yBSI/AAAAAAAAH3Q/nysYjUnfR0wLuU_mwMQB0fIQLPYMpP05wCLcBGAsYHQ/MapAmazonas.png',
      munici: [],
      place: [],

    },

  ]);
  const handleCreate = (newDeparElem: { img: string, title: string, description: string, mapImg: string }) => {
    const arrayCopy = deparElem.slice();
    arrayCopy.push({
      id: Math.random(),
      img: newDeparElem.img,
      title: newDeparElem.title,
      description: newDeparElem.description,
      mapImg: newDeparElem.mapImg,
      munici: [],
      place: [],
    });

    setDeparElem(arrayCopy);
  }

  const handleDelate = (delateId: number) => {

    const deparElemCopy = deparElem.filter((elem) => {

      if (elem.id === delateId) {
        return false;
      } else {
        return true;
      }

    });

    setDeparElem(deparElemCopy);

  }

  const handleDeleteMunici = (deparId:number, municiId:number) =>{
    const index = deparElem.findIndex((elem)=> elem.id === deparId);
    const newArray = deparElem[index].munici.filter((e)=>{
      if(e.id === municiId){
        return false;
      }
      return true;
    });

    setDeparElem((v)=>{
      const copy = v;
      copy[index].munici = newArray
       
      return [...copy]
    })

    
  }

  const handleDelatePlace = (deparId:number, placeId:number) =>{
    const index = deparElem.findIndex((elem)=> elem.id === deparId);
    const newArray = deparElem[index].place.filter((e)=>{
      if(e.id === placeId){
        return false;
      }
      return true;
    });

    setDeparElem((v)=>{
      const copy = v;
      copy[index].place = newArray
       
      return [...copy]
    })


  }

  //const data = getChartData(deparElem);


  const handleBeginEdit = (editId: number) => {
    setEditId(editId)
    setFormType('edit')
  }

  const handleEdit = (editId: number, editDeparElem: { img: string, description: string }) => {
    const deparElemCopy = deparElem.slice();
    const editIndex = deparElem.findIndex((elem) => {
      if (elem.id === editId) {
        return true
      } else {
        return false
      }

    });

    deparElemCopy[editIndex] = {
      ...deparElem[editIndex],
      ...editDeparElem,

    }

    setDeparElem(deparElemCopy);
  }

  const handleCreateMunici = (deparElemId: number, newMuniciElem: MuniciElemObjt) => {
    const deparElemCopy = deparElem.slice();
    const editIndex = deparElem.findIndex((elem) => {
      if (elem.id === deparElemId) {
        return true
      } else {
        return false
      }

    });

    deparElemCopy[editIndex] = {
      ...deparElem[editIndex],
      munici: [
        ...deparElem[editIndex].munici,
        newMuniciElem
      ]

    }

    setDeparElem(deparElemCopy);
  }

  const handleCreatePlace = (deparElemId: number, newPlaceElem: PlaceElemObj) => {
    const deparElemCopy = deparElem.slice();
    const editIndex = deparElem.findIndex((elem) => {
      if (elem.id === deparElemId) {
        return true
      } else {
        return false
      }

    });

    deparElemCopy[editIndex] = {
      ...deparElem[editIndex],
      place: [
        ...deparElem[editIndex].place,
        newPlaceElem
      ]

    }
    setDeparElem(deparElemCopy);

  }


  let municiArray: MuniciElemObjt[] = [];
  let placeArray: PlaceElemObj[] = [];


  deparElem.forEach((element) => {
    element.munici.forEach((municiElem) => {
      municiArray.push(municiElem)

    });
  });

  deparElem.forEach((element) => {
    element.place.forEach((placeElem) => {
      placeArray.push(placeElem)

    });

  });




  return (

    <HashRouter>
      <div className="App">
        <div className="App__nav">
          <NavLink to={'/home'}><img src={logo} ></img></NavLink>
          <div className="App__link">
            <Link text={'Inicio'} url={'/home'}></Link>
            <Link text={'Formulario'} url={'/form'}></Link>
            <Link text={'Departamentos'} url={'/depar'}></Link>
            <Link text={'Lugares'} url={'/places'}></Link>
          </div>
          <Avatar sx={{ bgcolor: green[500] }}>PO</Avatar>
        </div>
        <Switch>
          <Route path='/home'>
            <section className="App__banner">
              <p className="App__text">Viajes inolvidables
                experiencias de viaje con
                un impacto positivo</p>
            </section>
            <Carousel isRTL={bool} itemsToShow={3}>
              <div className="App__banner-text">
                <h2 className="App__banner-title">Municipios</h2>
                <p>Conoce los mejores lugares de cada municipio de nuestro país.</p>
              </div>
              {municiArray.map((elem) => {
                return <MuniciElem id={elem.id}
                  idDepar={elem.idDepar}
                  title={elem.title}
                  weather={elem.weather}
                  description={elem.description}
                  img={elem.img}
                  type='detail'
                />

              })}

              <div>

              </div>

            </Carousel>

            <section className='App__banner--places'>
              <PlaceElem
                id={0}
                name={'Casa Terracota'}
                coordinates={''}
                score={0.4}
                description={'Una casa de arcilla que ocupa quinientos metros cuadrados es considerada la cerámica más grande del mundo. '}
                img={'https://blog.redbus.co/wp-content/uploads/2019/03/AAvEJSR.jpg'}
                format='slide'
                type='detail'>

              </PlaceElem>

              <div className='App__banner--comp'>
                <h2 className='App__banner--title'>Lugares más visitados de Colombia</h2>
                <PlaceElem
                  id={0}
                  name={'Casa Terracota'}
                  coordinates={''}
                  score={0.4}
                  description={'Una casa de arcilla que ocupa quinientos metros cuadrados es considerada la cerámica más grande del mundo. '}
                  img={'https://blog.redbus.co/wp-content/uploads/2019/03/AAvEJSR.jpg'}
                  format='slide'
                  type='detail'>

                </PlaceElem>

              </div>


              <PlaceElem
                id={0}
                name={'Casa Terracota'}
                coordinates={''}
                score={0.4}
                description={'Una casa de arcilla que ocupa quinientos metros cuadrados es considerada la cerámica más grande del mundo. '}
                img={'https://blog.redbus.co/wp-content/uploads/2019/03/AAvEJSR.jpg'}
                format='slide'
                type='detail'>

              </PlaceElem>
            </section>

            <section >
              <Carousel isRTL={bool} itemsToShow={1}>

                {deparElem.map((elem) => {
                  return <DeparElem
                    id={elem.id}
                    img={elem.img}
                    title={elem.title}
                    description={elem.description}
                    mapImg={elem.mapImg}
                    type='detail'
                    format='slide'
                    onDelate={handleDelate}
                    onEdit={handleBeginEdit}
                  >
                  </DeparElem>
                })}
              </Carousel>

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

          <Route path='/depar'>

            <section className="App__banner--depar">
              <div className="App__banner--text">
                <p> <b>32</b> Departamentos por recorrer</p>
                <img src={croquis}></img>
              </div>

              <section className="App__depar">
                {deparElem.map((elem) => {
                  return <DeparElem
                    id={elem.id}
                    img={elem.img}
                    title={elem.title}
                    description={elem.description}
                    mapImg={elem.mapImg}
                    type='edit'
                    format='card'
                    onDelate={handleDelate}
                    onEdit={handleBeginEdit}
                  >
                  </DeparElem>
                })}
              </section>
            </section>
          </Route>

          <Route path="/details/:id">
            <DeparElemDetails
              list={deparElem}
              onCreateMunicipi={handleCreateMunici} 
              onDelate={handleDeleteMunici}/>
          </Route>

          <Route path="/municipio/:id">
            <MuniciElemDetails
              listPlace={placeArray}
              list={municiArray}
              onCreatePlace={handleCreatePlace}
              onDelate = {handleDelatePlace}
            />

          </Route>



          <Route path="/place/:id">
            <PlaceElemDetails listPlace={placeArray}
            />
          </Route>

          <Route path="/404">
            <Page404 />
          </Route>

          <Redirect to="/home"></Redirect>
        </Switch>

      </div>

    </HashRouter>
  );
}

export default App;


