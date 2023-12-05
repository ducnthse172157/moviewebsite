import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {FilmsData} from '../shared/ListOfFilms'
export default function FilmsDemo() {
  const [film, setFilm] = useState([])
    return (
    <div className='container'>
        {FilmsData.map((film)=>(
            <div className='column'>
            <div className='card'>
            <img alt='' src={film.Image}/>
              <h3>{film.Title}</h3>
              <p className='year'>{film.Year}</p>
              <p className='nation'>{film.Nation}</p>
              <p><button className='bt' onClick={()=>{setFilm(film)}}><a className='pop' href='#popup1' id='openPopUp'>Preview</a></button></p>
              <Link to={`detail/${film.id}`}> 
             <p><button className='dbt'>Detail</button></p>
            </Link>
            </div>
          </div>
         ))}
          <div id='popup1' className='overlay'>
          <div className='popup'>
           <div className='pop-image'>
           <img alt='' src={film.Image}/></div>
           <h2>{film.Title}</h2>
           <a className='close' href="/#">X</a>
           <div className='content'>
             {film.info}
           </div>
          </div>
       </div>
     </div>
  )
}


