import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Upcoming.module.css';
import { Modal } from 'antd/lib';

const Upcoming = ({ upcomingFilms }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [films, setFilms] = useState(upcomingFilms);
  const [modalDetails, setModalDetails] = useState({});

  useEffect(() => {
    setFilms(upcomingFilms);
  }, [upcomingFilms]);

  const updateModalDetails = (item) => {
    setModalDetails(item);
    setModalVisible(true);
  };

  return (
    <>
      <div className={s.container}>
        {films.map((item) => (
          <div key={item.id} onClick={() => updateModalDetails(item)}>
            <img alt="filmImage" src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <Modal
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={816}
        bodyStyle={{ padding: '0' }}
        // closable={false}
      >
        <div
          className={s.modalContainer}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w185/${modalDetails.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={s.modalWrapper}>
            <div className={s.modalImage}>
              <img alt="modalImg" src={`https://image.tmdb.org/t/p/w185/${modalDetails.poster_path}`} />
            </div>
            <div>
              <h1 align="center"> {modalDetails.title}</h1>
              <hr></hr>

              <div>
                <h2>Date: {modalDetails.release_date}</h2>
                <hr></hr>
                <h2>
                  Genre:
                  {modalDetails.genres?.map((genre) => (
                    <ul key={genre}>
                      <li>{genre}</li>
                    </ul>
                  ))}
                </h2>
                <hr></hr>
                <h2>Rating: {modalDetails.vote_average}</h2>
              </div>

              <hr></hr>

              <h1>Description:</h1>
              <p> {modalDetails.overview}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

Upcoming.propTypes = {
  nowPlayingFilms: PropTypes.arrayOf(
    PropTypes.shape({
      genres: PropTypes.array,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      id: PropTypes.integer,
      title: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};

export default Upcoming;
