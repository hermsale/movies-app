// const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });

//   api.defaults.headers.common['X-API-KEY'] = API_KEY;

//   movie/week 


// solicitud a clonar 
{/* <div class="trendingPreview-header">
<h2 class="trendingPreview-title">Tendencias</h2>
<button class="trendingPreview-btn">Ver más</button>
</div> */}

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
        console.log(movie.title)
        div = document.createElement('div');
        div.classList = 'movie-container';
    })

    
}

getTrendingMoviesPreview();