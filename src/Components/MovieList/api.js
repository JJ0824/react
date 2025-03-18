import axios from "axios";

const header = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI4N2EzOWQ3MzA5ZTljZjJjZWYwZmVjMTdiNzFlMSIsIm5iZiI6MTc0MjE4MzMxMy40NDMsInN1YiI6IjY3ZDc5YjkxNWFkZGYyMDk1NWYxNTc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwYyS_qHSuFvbKGBYTk6Cx2vw67eGMcgr3v3sitxlfk",
  },
};

export const categories = [
  { category : "Now Playing", func : getMoviesNowPlaying }, 
  { category : "Popular", func : getMoviesPopular }, 
  { category : "Top Rated", func : getMoviesTopRated }, 
  { category : "Upcoming", func : getMoviesUpcoming }
]

export async function getGenreListMovie() {
    return axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1", header);
}

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", header);
}

export function getMoviesPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", header);
}

export function getMoviesTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", header);
}

export function getMoviesUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", header);
}

export function getGenreName(idList) {
  // [10, 20, 30]
  const genreList = JSON.parse(sessionStorage.getItem("GenreList"));
  return idList
  .map( (id) => {
    const found = genreList.genres.find((genre) => genre.id == id);
    return found ? found.name : "";
  })
  .filter((name) => name)
  .join(", ");
}