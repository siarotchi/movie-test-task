import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import useGetFilms from './hooks/api';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Popular from './components/Popular/Popular';
import Upcoming from './components/Upcoming/Upcoming';
import Header from './components/Header/Header';

function App() {
  const { nowPlayingFilms, popularFilms, upcomingFilms, genres } = useGetFilms();
  return (
    <div className="App">
      {/* <Row> */}
      <header span={24}>
        <Header />
      </header>
      {/* </Row> */}

      <Row>
        <Col className="col" span={24}>
          <h1>Now Playing</h1>
          <NowPlaying nowPlayingFilms={nowPlayingFilms} genres={genres} />
        </Col>

        <Col className="col" span={24}>
          <h1>Popular</h1>
          <Popular popularFilms={popularFilms} />
        </Col>

        <Col className="col" span={24}>
          <h1>Upcoming</h1>
          <Upcoming upcomingFilms={upcomingFilms} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
