import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f02b39f36febafba0161b0cd7bb4e12f",
    language: "ko-KR",
  },
});

const api2 = axios.create({
  baseURL: "http://localhost:5000/",
});

export const dbApi = {
  list: () => api2.get("wish"),
  clickMovie: (id, pathname) => api2.get(`clickmovie/${id}&${pathname}`),
  clickShow: (id, pathname) => api2.get(`clickshow/${id}&${pathname}`),
  wishmovie: () => api2.get("wishmovie"),
  wishshow: () => api2.get("wishshow"),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
