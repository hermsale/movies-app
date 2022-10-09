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
    movies.results.map(movie => {
    divMovieContainer = document.createElement('div');
    divMovieContainer.classList.add('movie-container');

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

  // solicitud de vista previa de peliculas en tendencia 
async function getTrendingMoviesPreview(){
    try {
        const {data} = await api.get( '/trending/movie/week')
            viewMovies(data,trendingMoviesPreviewList);        
    } catch (error) {
        console.log('Ocurrio un error '+error);
    }    
}

// solicitud de categorias  
async function getCategoriesPreview(){
    try {
        // hacemos destructuring para solo obtener <data> del objeto solicitado
        const {data} = await api.get( '/genre/movie/list')
        viewCategories(data,categoriesPreviewList)
    } catch (error) {
        console.log('Ocurrio un error '+error)
    }
    
}

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

