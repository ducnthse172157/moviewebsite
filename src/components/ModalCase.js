import React from 'react'

export default function ModalCase({setIsOpen, film, currentUrl}) {
  const handleClose = () => {
    setIsOpen(false);
  };

    return (
      <div className={`modal-show`} style={{ position: 'fixed', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
      <div id="modal" className={`modal`} style={{display: 'block',top:'35%'}}>
            <div className='modal-content'>
                <h4>Video for {film.Title}</h4>
                <p><iframe width="100%" height="400px" src={film.clip} title={film.Title} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></p>
            </div>
            <div className='modal-footer'>
            <a href={currentUrl} className="modal-close" onClick={handleClose}>Back</a>
            </div>
        </div>
      </div>
    )
  
}
