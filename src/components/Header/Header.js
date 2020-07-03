import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <div>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      </div>
      <div>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="The Movie Database (TMDb)"
          
        />
      </div>
    </div>
  );
};

export default Header;
