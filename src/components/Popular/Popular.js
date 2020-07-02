import React, { Component } from 'react';
import './Popular.scss';
import { Modal } from 'antd/lib';

// Horisontal scrolling

class Popular extends Component {
  state = {
    margin: 0,
    modalVisible: false,
    poster_path: '',
    backdrop_path: '',
    title: '',
    overview: '',
    release_date: '',
    vote_average: '',
    genres: [],
  };

  setModalVisible = (modalVisible, poster_path, backdrop_path, title, overview, release_date, vote_average, genres) => {
    this.setState({ modalVisible, poster_path, backdrop_path, title, overview, release_date, vote_average, genres });
    const element = document.querySelector('body');
    modalVisible ? element.classList.add('hideScroll') : element.classList.remove('hideScroll');
  };

  render() {
    const { popularFilms } = this.props;

    return (
      <>
        <div className="horizontal-scroll-wrapper squares">
          {popularFilms.map((item, index) => (
            <section
              key={index}
              onClick={() =>
                this.setModalVisible(
                  true,
                  item.poster_path,
                  item.backdrop_path,
                  item.title,
                  item.overview,
                  item.release_date,
                  item.vote_average,
                  item.genres
                )
              }
            >
              <img alt="filmImage" src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} />
              <p>{item.title}</p>
            </section>
          ))}
        </div>
        <Modal
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          footer={null}
          // height={635}
          width={816}
          bodyStyle={{ padding: '0' }}
          // closable={false}
        >
          <div
            className="modalContainer"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w185/${this.state.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="modalWrapper">
              <div className="modalImage">
                <img alt="modalImg" src={`https://image.tmdb.org/t/p/w185/${this.state.poster_path}`} />
              </div>
              <div>
                <h1 align="center"> {this.state.title}</h1>
                <hr></hr>

                <div>
                  <div>
                    <h2>Date: {this.state.release_date}</h2>
                  </div>
                  <hr></hr>
                  <div>
                    <h2>Genre</h2>
                  </div>
                  <hr></hr>
                  <div>
                    <h2>Rating: {this.state.vote_average}</h2>
                  </div>
                </div>

                <hr></hr>

                <h1>Description:</h1>
                <p> {this.state.overview}</p>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Popular;
