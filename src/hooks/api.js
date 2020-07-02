import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetFilms() {
  const [nowPlayingFilms, setNowPlayingFilms] = useState([]);
  const [popularFilms, setPopularFilms] = useState([]);
  const [upcomingFilms, setUpcomingFilms] = useState([]);
  const [genres, setGenres] = useState([]);

  const url = 'https://api.themoviedb.org/3/';
  const apiKey = '41c4a5e44b7710cf541f1065bacf3af8';

  useEffect(() => {
    axios.get(`${url}movie/now_playing?api_key=${apiKey}&language=en-US&page=1`).then(
      (res) => setNowPlayingFilms(res.data.results)
      // console.log(res)
    );
    axios.get(`${url}movie/popular?api_key=${apiKey}&language=en-US&page=1`).then(
      (res) => setPopularFilms(res.data.results)
      // console.log(res)
    );
    axios.get(`${url}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`).then(
      (res) => setUpcomingFilms(res.data.results)
      // console.log(res.data.results)
    );
    axios.get(`${url}genre/movie/list?api_key=${apiKey}`).then(
      (res) => setGenres(res.data.genres)
      // console.log(res.data.genres)
    );
  }, []);
  return { nowPlayingFilms, popularFilms, upcomingFilms, genres };
}
