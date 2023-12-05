import React, { useState, useEffect } from 'react';
import ModalCase from './ModalCase';
import { Icon } from 'react-materialize';
import { useParams, Link } from 'react-router-dom';

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const [APIData, setAPIData] = useState([])
  const baseURL = 'https://653740ccbb226bb85dd2fd5c.mockapi.io/films';

  useEffect(() => {
    fetch((baseURL))
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => { setAPIData(data) })
      .catch(error => console.log(error.message));
  }, []);
  //set params 
  const news = useParams();
  const data = APIData.find(obj => {
    return obj.id === news.id;
  });
  console.log(news.id);
  console.log(data);

  const openModal = () => {
    setIsOpen(true);
  };
  
  if (!data) {
    return <div>...Loading...</div>;
  }
 const isURL = /^(http|https):/.test(data.Image);

  return (
    <div className='detail-container'>
      <div className='product-card'>
        <div className='badge'>{data.Title}</div>
        <div className='product-tumb'>
        {isURL ? (
            <img src={data.Image} alt='' />
          ) : (
            <img src={`../${data.Image}`} alt='' />
          )}
        </div>
        <div className='product-details'>
          <h4 style={{color: 'white'}}>{data.Title}</h4>
          <div className='product-price'>Ticket Price: {data.cost} vnd</div>
          <p>{data.info}</p>
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
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={data} />}
    </div>
  );
}

