import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import {Row, Col, Card, Container, Section } from 'react-materialize'
export default function FilmsPresentation() {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const filmsPerPage = 6;

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    try {
      const response = await fetch(`https://653740ccbb226bb85dd2fd5c.mockapi.io/films?page=${page}&limit=${filmsPerPage}`);
      if (!response.ok) {
        throw new Error(`HTTP Status: ${response.status}`);
      }
      const data = await response.json();
      setFilms(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };
  const openPopup = (film) => {
    setSelectedFilm(film);
  };

     return (
<Section>
      <Container className='container'>
        <Row>
          {films.map((film) => (
            <Col className='col s4' key={film.id}>
              <Card className='card'>
                <img alt='' src={film.Image} />
                <h3 className='title'>{film.Title}</h3>
                <p className='year'>{film.Year}</p>
                <p className='nation'>{film.Nation}</p>
                <p>
                  <button className='bt' onClick={() => openPopup(film)}>
                    <a className='pop' href='#popup1' id='openPopUp'>
                      Preview
                    </a>
                  </button>
                </p>
                <Link to={`detail/${film.id}`}>
                  <p>
                    <button className='dbt'>Detail</button>
                  </p>
                </Link>
              </Card>
            </Col>
          ))}
          <div id='popup1' className='overlay'>
            {selectedFilm && (
              <div className='popup'>
                <div className='pop-image'>
                  <img alt='' src={selectedFilm.Image} />
                </div>
                <h2>{selectedFilm.Title}</h2>
                <a className='close' href="/#">
                  X
                </a>
                <div className='content'>{selectedFilm.info}</div>
              </div>
            )}
          </div>
        </Row>
        <ReactPaginate
          className='pagination'
          previousLabel={'previous'}
          nextLabel={'next'}
          pageCount={3}
          onPageChange={handlePageClick}
        />
      </Container>
    </Section>
    )
}
