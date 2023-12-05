import React, { useState, useEffect } from 'react';
import ModalCase from './ModalCase';
import { Icon } from 'react-materialize';
import { useParams, Link } from 'react-router-dom';

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const [film, setFilm] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFilmData(id);
  }, [id]);

  const fetchFilmData = (filmId) => {
    fetch(`https://653740ccbb226bb85dd2fd5c.mockapi.io/films/${filmId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFilm(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  if (!film) {
    return <div>Loading...</div>;
  }

  let cost = film.cost.toLocaleString();

  return (
    <div className='detail-container'>
      <div className='product-card'>
        <div className='badge'>{film.Title}</div>
        <div className='product-tumb'>
              <img src={`../${film.Image}`} alt=''/>
          </div>
        <div className='product-details'>
          <h4>{film.Title}</h4>
          <div className='product-price'>Ticket Price: {cost} vnd</div>
          <p>{film.info}</p>
          <div className='product-bottom-details'></div>
          <a onClick={openModal} className='btn-floating halfway-fab waves-effect waves-light red'>
            <Icon>ondemand_video</Icon>
          </a>
          <Link to='/'>
            <a className='close' href='/#'>
              Back
            </a>
          </Link>
        </div>
      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </div>
  );
}
