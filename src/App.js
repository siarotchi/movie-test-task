import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import useGetFilms from './hooks/api';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Popular from './components/Popular/Popular';
import Upcoming from './components/Upcoming/Upcoming';
import Header from './components/Header/Header';

const App = () => {
  const films = useGetFilms();

  return (
    <div className="App">
      <header span={24}>
        <Header />
      </header>

      <Row>
        <Col className="col" xs={21} sm={22} md={23} xl={24} span={24}>
          <h1>Now Playing</h1>
          <NowPlaying nowPlayingFilms={films.nowPlayingFilms || []} />
        </Col>

        <Col className="col" xs={21} sm={22} md={23} xl={24} span={24}>
          <h1>Popular</h1>
          <Popular popularFilms={films.popularFilms || []} />
        </Col>

        <Col className="col" xs={21} sm={22} md={23} xl={24} span={24}>
          <h1>Upcoming</h1>
          <Upcoming upcomingFilms={films.upcomingFilms || []} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
