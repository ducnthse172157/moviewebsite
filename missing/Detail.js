import React from 'react'
import ModalCase from './ModalCase';
import{Icon} from 'react-materialize'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { FilmsData } from '../shared/ListOfFilms'
 
export default function Detail(){
  const [isOpen, setIsOpen] = useState(false);
  
   const userName = useParams();
    const film = FilmsData.find(obj => {
      return obj.id === userName.id;
    });
     let cost = film.cost.toLocaleString();
     return(
      <div className='detail-container'>
       <div className='product-card'>
          <div className='badge'>{film.name}</div>
          <div className='product-tumb'>
              <img src={`../${film.Image}`} alt=''/>
          </div>
          <div className='product-details'>
              <h4>{film.club}</h4>
                <div className='product-price'>Ticket Price:{cost} vnd</div>
                <p>{film.info}</p>
                <div className='product-bottom-details'></div>
                <a  onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon>ondemand_video</Icon>
                </a>
                <a className='close' href="/#">Back</a>
          </div>
    </div>
    {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
  </div>
     )
  
}
