import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function FilmsPresentation({films}) {
  const [film, setFilm] = useState([])
     console.log(films);
     return (

      <Container className='container'>
        <Row>
          {films.map((film)=>(             
              <Col className='col s4'>          
              <Card className='card'>
             <img alt='' src={film.Image}/>
               <h3 className='title'>{film.Title}</h3>
               <p className='year'>{film.Year}</p>
               <p className='nation'>{film.Nation}</p>
               <p><button className='bt' onClick={()=>{setFilm(film)}}><a className='pop' href='#popup1' id='openPopUp'>Preview</a></button></p>
               <Link to={`detail/${film.id}`}> 
              <p><button className='dbt'>Detail</button></p>
             </Link>
             </Card>             
             </Col>           
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
        </Row>
        </Container>
     
    )
}
