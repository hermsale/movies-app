const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Accept': 'application/json',
    },
    params: {
        'api_key': API_KEY,
    }
  });

// UTILIDADES  //////////////////////////////////////////////////////////////////
//  funcion para reutilizar código 

// generador de peliculas para getMoviesByCategory y getTrendingMoviesPreview
function viewMovies(movies,container){
    container.innerHTML = '';
    console.log(movies.results);
    movies.results.map(movie => {
    divMovieContainer = document.createElement('div');
    divMovieContainer.classList.add('movie-container');

    // lo utilizamos como boton para ir a la vista movie details
    divMovieContainer.addEventListener('click', () => { 
        console.log(movie.title);
        console.log(movie.id);
        // agregamos al hash el id de la pelicula 
        location.hash = '#movie='+movie.id;
    });
    imgMovie = document.createElement('img');
    imgMovie.classList = 'movie-img';

    imgMovie.src = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    imgMovie.alt = movie.title;

    divMovieContainer.appendChild(imgMovie);
    container.appendChild(divMovieContainer);
    })
}

function viewCategories(categorie,container){
    container.innerHTML = '';
    categorie.genres.map(category => {
        divCategoryContainer = document.createElement('div');
            divCategoryContainer.classList.add('category-container');
    
            h3CategoryTitle = document.createElement('h3');
            h3CategoryTitle.classList.add('category-title');
            h3CategoryTitle.innerText = category.name;
            h3CategoryTitle.addEventListener('click', () => {
                window.location.href = `#category=${category.id}/${category.name}`;
            });
            h3CategoryTitle.id = 'id'+category.id;
    
            divCategoryContainer.appendChild(h3CategoryTitle);
            container.appendChild(divCategoryContainer);
})
}
// SOLICITUDES A LA API ////////////////////////////////////////

  // solicitud de vista previa de peliculas en tendencia - visual homepage 
async function getTrendingMoviesPreview(){
    try {
        const {data} = await api.get( '/trending/movie/week')
            viewMovies(data,trendingMoviesPreviewList);        
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

// muestra las peliculas en tendencia en la vista de tendencia 
async function getTrendingMovies(){
    try {
        const {data} = await api.get( '/trending/movie/week')
            viewMovies(data,genericSection);        
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

// solicitud de peliculas por seleccion de categoria 
async function getMoviesByCategory(id,name){
    try {
        // indicamos al titulo el nombre del genero 
        headerCategoryTitle.innerText = name;
        console.log(id)
        const {data} = await api.get( '/discover/movie',{
            params: {
                with_genres: id,
            }
        })
        viewMovies(data,genericSection);  
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

// solicitud de categorias  ///////////////////////////////////////////////
async function getCategoriesPreview(){
    try {
        // hacemos destructuring para solo obtener <data> del objeto solicitado
        const {data} = await api.get( '/genre/movie/list')
        viewCategories(data,categoriesPreviewList)
    } catch (error) {
        console.log('Ocurrio un error '+error)
    }
    
}


async function getMoviesBySearch(query){
    try {
        // indicamos al titulo el nombre del genero 
        // headerCategoryTitle.innerText = name;
        // console.log(id)
        const {data} = await api.get( '/search/movie',{
            params: {
                query: query,
            }
        })
        viewMovies(data,genericSection);  
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

// solicitud de peliculas por seleccion de categoria 
async function getMovieDetail(movie_id){
    try {
        // indicamos al titulo el nombre del genero 
        // headerCategoryTitle.innerText = name;
        // console.log(id)
        const {data:movie} = await api.get( `/movie/${movie_id}`)
        console.log(movie)

        // imagen de background
        const backgroundImg = 'https://image.tmdb.org/t/p/w500'+movie.poster_path;
        headerSection.style.background = `
            linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.35) 19.27%, 
            rgba(0, 0, 0, 0) 29.17%
            ),url(${backgroundImg})`;

        movieDetailTitle.innerText = movie.title;
        movieDetailDescription.innerText = movie.overview;
        movieDetailScore.innerText = movie.vote_average;
        // url('https://pics.filmaffinity.com/Deadpool-777527803-large.jpg')
        // console.log(data.poster_path)
        viewCategories(movie,movieDetailCategoriesList)
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}