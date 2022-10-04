// const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });

  // solicitud de vista previa de peliculas en tendencia 
async function getTrendingMoviesPreview(){
    const res = await api.get( '/trending/movie/week',{
        params:{
            api_key: API_KEY
        }    
    })
    console.log(res.data.results);

    trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList');
    
    res.data.results.map(movie =>{
        
        divMovieContainer = document.createElement('div');
        divMovieContainer.classList.add('movie-container');

        imgMovie = document.createElement('img');
        imgMovie.classList = 'movie-img';

        imgMovie.src = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
        imgMovie.alt = movie.title;

        // div.appendChild(imgMovie);
        divMovieContainer.appendChild(imgMovie);
                trendingPreviewMovieList.appendChild(divMovieContainer);
    })
    
    
}

getTrendingMoviesPreview();

async function getCategoriessPreview(){
    const res = await api.get( '/genre/movie/list',{
        params:{
            api_key: API_KEY
        }    
    })
    console.log(res.data.genres);

    // trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList');
    
    // res.data.results.map(movie =>{
        
    //     divMovieContainer = document.createElement('div');
    //     divMovieContainer.classList.add('movie-container');

    //     imgMovie = document.createElement('img');
    //     imgMovie.classList = 'movie-img';

    //     imgMovie.src = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    //     imgMovie.alt = movie.title;

    //     // div.appendChild(imgMovie);
    //     divMovieContainer.appendChild(imgMovie);
    //             trendingPreviewMovieList.appendChild(divMovieContainer);
    // })
    
    
}

getCategoriessPreview();
