import React from 'react'


export default function ModalCase({setIsOpen, film}) {
  const handleClose = () => {
    setIsOpen(false);
  };

    return (
      <div className='modal-show' onClick={handleClose}>
        <div id="modal" className="modal" style={{display: 'block',top:'35%'}}>
            <div className='modal-content'>
                <h4>Video for {film.Title}</h4>
                <p><iframe width="100%" height="400px" src={film.clip} title={film.Title} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></p>
            </div>
            <div className='modal-footer'>
            <a className="modal-close" onClick={handleClose}>Back</a>
            </div>
        </div>
      </div>
    )
  
}
