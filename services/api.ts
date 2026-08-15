export const TMD_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fecthMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMD_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`An error occures ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};

// export const TMDB_CONFIG = {
//     BASE_URL:  'https://api.themoviedb.org/3',
//     API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
//     headers: {
//         accept: 'application/json',
//          Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
//     }
// }

// export const fetchMovies = async ({query} : {query: string}) => {
//     const endpoint = query
//     ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
//     : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

//     const response = await fetch(endpoint, {
//         method: 'GET',
//         headers: TMDB_CONFIG.headers
//     });

//     if(!response.ok) {
//         // @ts-ignore
//         throw new Error('Failed to fetch movies', response.statusText)
//     }
//     const data = await response.json();
//     return data.results;
// }

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTIzNTYyNzVlMDIxNGVmM2ZiOTA4ZjdiYjk2ZmNkYyIsIm5iZiI6MTc3MTI4NjAxMC41OTUsInN1YiI6IjY5OTNhZGZhY2ZmM2ZmNzllMjA2NWQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nn9aScI-hF979ZheKot6GEBxCYMzYOjbIMcqO7tV3Fw'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
