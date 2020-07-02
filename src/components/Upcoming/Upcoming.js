import React, { Component } from 'react';
import s from './Upcoming.module.css';
import { Card, List, Modal, Button } from 'antd/lib';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

class Upcoming extends Component {
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

  moveLeft = () => {
    // 1.Using slide step by margin
    // 2.hardcoded stops just for 20pcs
    if (this.state.margin <= -195) {
      this.setState((prevState) => ({
        margin: prevState.margin + 195,
      }));
    }
  };
  moveRight = () => {
    if (this.state.margin >= -2535) {
      this.setState((prevState) => ({
        margin: prevState.margin - 195,
      }));
    }
  };

  setModalVisible = (modalVisible, poster_path, backdrop_path, title, overview, release_date, vote_average, genres) => {
    this.setState({ modalVisible, poster_path, backdrop_path, title, overview, release_date, vote_average, genres });
    const element = document.querySelector('body');
    modalVisible ? element.classList.add('hideScroll') : element.classList.remove('hideScroll');
  };

  render() {
    const { margin } = this.state;
    const { upcomingFilms, genres } = this.props;

    const style = {
      left: margin,
    };

    return (
      <div className={s.lineContainer}>
        <div className={s.lineCarousel}>
          <div className={s.lineSlider} style={style}>
            {upcomingFilms.map((item, index) => (
              <div style={{ marginTop: '20px' }} key={index}>
                <section
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
                </section>
                <section>
                  <p style={{ marginLeft: '20px', marginTop: ' 10px' }}>{item.title}</p>
                  <ul className="genres">
                    {/* {genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))} */}
                  </ul>
                </section>
              </div>
            ))}
          </div>
          <div className={s.lineSliderControls}>
            <LeftOutlined style={{ fontSize: '50px' }} onClick={this.moveLeft} className={s.lineSliderLeft}>
              L
            </LeftOutlined>
            <RightOutlined style={{ fontSize: '50px' }} onClick={this.moveRight} className={s.lineSliderRight}>
              R
            </RightOutlined>
          </div>
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
            className={s.modalContainer}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w185/${this.state.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className={s.modalWrapper}>
              <div className={s.modalImage}>
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
      </div>
    );
  }
}

export default Upcoming;
