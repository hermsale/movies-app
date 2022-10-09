// botones de navegacion 
searchFormBtn.addEventListener("click", () => { 
    location.hash = '#search='
});

arrowBtn.addEventListener("click", () => { 
    location.hash = '#home'
});

trendingBtn.addEventListener("click", () => { 
    location.hash = '#trends'
});
// escuchamos los cambios en windows 
window.addEventListener('DOMContentLoaded', navigator,false);
window.addEventListener('hashchange',navigator,false)


function navigator(){
    if (location.hash === '#trends') {
        trendsPage();
    }else if (location.hash.startsWith('#category=')) {
        categoryPage();
    }else if (location.hash.startsWith('#search=')) {
        searchPage();
    }else if (location.hash.startsWith('#movie=')) {
        moviePage();
    }else{
        homePage();
    }

  // realizamos un scrollTop para que las vistas inicien siempre en el mismo lugar 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function trendsPage(){
    console.log('vista trends');
    // seccion header vista
      // esta vista es solo para movie details 
      headerSection.classList.remove('header-container--long');
      // limpiamos la imagen background del movie detail 
      headerSection.style.background = '';

      // mostramos la flechita para volver  
      arrowBtn.classList.remove('inactive');
      arrowBtn.classList.remove('header-arrow--white');
      // mostramos el titulo de la categoria 
      headerCategoryTitle.classList.remove('inactive');
      // ocultamos el titulo 
      headerTitle.classList.add('inactive');
      // ocultamos el buscador
      searchForm.classList.add('inactive');
      
      
      // secciones vista
      genericSection.classList.remove('inactive');
      //   mostramos la generic section 
      movieDetailSection.classList.add('inactive');
      // removemos categories movieDetail y trending preview 
      trendingPreviewSection.classList.add('inactive'); 
    //   ocultamos la lista de categorias 
      categoriesPreviewSection.classList.add('inactive');

    
}

function categoryPage(){
    console.log('vista category');

    // seccion header vista
      // esta vista es solo para movie details 
      headerSection.classList.add('.inactive');
      // limpiamos la imagen background del movie detail 
      headerSection.style.background = '';

      // mostramos la flechita para volver  
      arrowBtn.classList.remove('inactive');
      // mostramos el titulo de la categoria 
      headerCategoryTitle.classList.remove('inactive');
      // ocultamos el titulo 
      headerTitle.classList.add('inactive');
      // ocultamos el buscador
      searchForm.classList.add('inactive');


    // secciones vista
      // removemos categories movieDetail y trending preview 
      trendingPreviewSection.classList.add('inactive'); 
    //   ocultamos la lista de categorias 
      categoriesPreviewSection.classList.add('inactive');
      movieDetailSection.classList.add('inactive');
    //   mostramos la generic section y movie detail 
      genericSection.classList.remove('inactive');


    // generamos el ID para pasar por parametro al main 
    // con la funcion split separamos el string que se encuentra en .hash, utilizando el '=' de separador  
    // utilizamos destructuring para guardar por separado cada string
      [ , genero] = location.hash.split('=');
      [id, nombreCompleto] = genero.split('/');
      // filtramos los nombres con varias palabras
      nombre = nombreCompleto.replace('%20',' ');
      getMoviesByCategory(id,nombre);
}

function searchPage(){
    console.log('vista search');
      // seccion header vista
      // esta vista es solo para movie details 
      headerSection.classList.remove('header-container--long');
      // limpiamos la imagen background del movie detail 
      headerSection.style.background = '';

      // mostramos la flechita para volver  
      arrowBtn.classList.remove('inactive');
      arrowBtn.classList.add('header-arrow');
      // mostramos el titulo de la categoria 
      headerCategoryTitle.classList.remove('inactive');
      // ocultamos el titulo 
      headerTitle.classList.add('inactive');
      // ocultamos el buscador
      searchForm.classList.remove('inactive');
      
      
      // secciones vista
      genericSection.classList.remove('inactive');
      //   mostramos la generic section 
      movieDetailSection.classList.add('inactive');
      // removemos categories movieDetail y trending preview 
      trendingPreviewSection.classList.add('inactive'); 
    //   ocultamos la lista de categorias 
      categoriesPreviewSection.classList.add('inactive');
}

function moviePage(){
    console.log('vista movie');
      // seccion header vista
      // esta vista es solo para movie details 
      headerSection.classList.add('header-container--long');
      
      // limpiamos la imagen background del movie detail 
    //   headerSection.style.background = '';

      // mostramos la flechita para volver  
      arrowBtn.classList.remove('inactive');
      arrowBtn.classList.add('header-arrow--white');
      // mostramos el titulo de la categoria 
      headerCategoryTitle.classList.remove('inactive');
      // ocultamos el titulo 
      headerTitle.classList.add('inactive');
      // ocultamos el buscador
      searchForm.classList.add('inactive');
      
      
      // secciones vista
      movieDetailSection.classList.remove('inactive');
      //   mostramos la generic section 
      genericSection.classList.add('inactive');
      // removemos categories movieDetail y trending preview 
      trendingPreviewSection.classList.add('inactive'); 
    //   ocultamos la lista de categorias 
      categoriesPreviewSection.classList.add('inactive');
}

function homePage(){
    console.log('vista home'); 

    // seccion header vista
      // esta vista es solo para movie details 
      headerSection.classList.remove('header-container--long');
      // limpiamos la imagen background del movie detail 
      headerSection.style.background = '';
      // ocultamos la flechita para volver  
      arrowBtn.classList.add('inactive');
      // ocultamos el titulo de la categoria 
      headerCategoryTitle.classList.add('inactive');
      // mostramos el titulo 
      headerTitle.classList.remove('inactive');
      // mostramos el buscador
      searchForm.classList.remove('inactive');

      categoriesPreviewSection.classList.remove('inactive'); 
    // secciones vista
      // mostramos categories y trending preview 
      trendingPreviewSection.classList.remove('inactive'); 
    //   ocultamos la generic section y movie detail 
      genericSection.classList.add('inactive');
      movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
   
}