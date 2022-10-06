const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Accept': 'application/json',
    },
    params: {
        'api_key': API_KEY,
    }
  });

  // solicitud de vista previa de peliculas en tendencia 
async function getTrendingMoviesPreview(){
    const res = await api.get( '/trending/movie/week')
    console.log(res.data.results);

    trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList');
    
    res.data.results.map(movie =>{
        
        divMovieContainer = document.createElement('div');
        divMovieContainer.classList.add('movie-container');

        imgMovie = document.createElement('img');
        imgMovie.classList = 'movie-img';

        imgMovie.src = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
        imgMovie.alt = movie.title;

        divMovieContainer.appendChild(imgMovie);
                trendingPreviewMovieList.appendChild(divMovieContainer);
    })
    
    
}

// solicitud de categorias  
async function getCategoriesPreview(){
    const res = await api.get( '/genre/movie/list')
    console.log(res.data.genres);

    categoriesList = document.querySelector('.categoriesPreview-list');
    

    res.data.genres.map(genres =>{
        divCategoryContainer = document.createElement('div');
        divCategoryContainer.classList.add('category-container');

        h3CategoryTitle = document.createElement('h3');
        h3CategoryTitle.classList.add('category-title');
        h3CategoryTitle.innerText = genres.name;
        h3CategoryTitle.id = 'id'+genres.id;

        divCategoryContainer.appendChild(h3CategoryTitle);
        categoriesList.appendChild(divCategoryContainer);
        
    })
    
}
