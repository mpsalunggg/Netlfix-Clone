const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const reqApi = {
    moviesTrending : `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
    moviesOriginal : `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&with_networks=213`,
    moviesTopRate : `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
    moviesAction : `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
    moviesComedy : `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`,
    moviesHorror : `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=27`,
    moviesRomance : `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`,
    moviesDocumentary : `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99`,
}
