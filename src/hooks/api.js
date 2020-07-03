import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetFilms() {
  const [films, setFilms] = useState({});

  const url = 'https://api.themoviedb.org/3/';
  const apiKey = '41c4a5e44b7710cf541f1065bacf3af8';

  useEffect(() => {
    const nowPlayingFilmsFetch = axios.get(`
      ${url}movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);

    const popularFilmsFetch = axios.get(`
      ${url}movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    const upcomingFilmsFetch = axios.get(`
      ${url}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);

    const genresFetch = axios.get(`${url}genre/movie/list?api_key=${apiKey}`);

    Promise.all([nowPlayingFilmsFetch, popularFilmsFetch, upcomingFilmsFetch, genresFetch]).then((values) => {
      const [nowPlayingFilms, popularFilms, upcomingFilms, genres] = values;
      const genresObj = genres.data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});

      setFilms({
        nowPlayingFilms: nowPlayingFilms.data.results.map((film) => {
          const genres = film.genre_ids.map((genre_id) => genresObj[genre_id]);
          return { ...film, genres };
        }),

        popularFilms: popularFilms.data.results.map((film) => {
          const genres = film.genre_ids.map((genre_id) => genresObj[genre_id]);
          return { ...film, genres };
        }),

        upcomingFilms: upcomingFilms.data.results.map((film) => {
          const genres = film.genre_ids.map((genre_id) => genresObj[genre_id]);
          return { ...film, genres };
        }),
      });
    });
  }, []);

  return films;
}
