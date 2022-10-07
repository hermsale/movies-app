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
    try {
        const res = await api.get( '/trending/movie/week')
        console.log(res.data.results);
       
        // limpiamos la lista para evitar duplicado 
        trendingMoviesPreviewList.innerHTML = '';

        res.data.results.map(movie =>{
            
            divMovieContainer = document.createElement('div');
            divMovieContainer.classList.add('movie-container');
    
            imgMovie = document.createElement('img');
            imgMovie.classList = 'movie-img';
    
            imgMovie.src = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
            imgMovie.alt = movie.title;
    
            divMovieContainer.appendChild(imgMovie);
            trendingMoviesPreviewList.appendChild(divMovieContainer);
        })    
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

// solicitud de categorias  
async function getCategoriesPreview(){
    try {
        const res = await api.get( '/genre/movie/list')
        console.log(res.data.genres);
            
        // limpiamos la lista para evitar duplicado 
        categoriesPreviewList.innerHTML = '';

        res.data.genres.map(genres =>{
            divCategoryContainer = document.createElement('div');
            divCategoryContainer.classList.add('category-container');
    
            h3CategoryTitle = document.createElement('h3');
            h3CategoryTitle.classList.add('category-title');
            h3CategoryTitle.innerText = genres.name;
            h3CategoryTitle.addEventListener('click', () => {
                window.location.href = `#category=${genres.id}/${genres.name}`;
            });
            h3CategoryTitle.id = 'id'+genres.id;
    
            divCategoryContainer.appendChild(h3CategoryTitle);
            categoriesPreviewList.appendChild(divCategoryContainer);
            
        })
    } catch (error) {
        console.log('Ocurrio un error '+error)
    }
    
}

async function getMoviesByCategory(id){
    try {
        console.log(id)
        const res = await api.get( '/discover/movie',{
            params: {
                with_genres: id,
            }
        })
        console.log(res);
       
        // limpiamos la lista para evitar duplicado 
        // genericList.innerHTML = '';

        // res.data.results.map(movie =>{
            
        //     divMovieContainer = document.createElement('div');
        //     divMovieContainer.classList.add('movie-container');
    
        //     imgMovie = document.createElement('img');
        //     imgMovie.classList = 'movie-img';
    
        //     imgMovie.src = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
        //     imgMovie.alt = movie.title;
    
        //     divMovieContainer.appendChild(imgMovie);
        //     trendingMoviesPreviewList.appendChild(divMovieContainer);
        // })    
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

getMoviesByCategory(28);