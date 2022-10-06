window.addEventListener('DOMContentLoaded', navigator,false);
window.addEventListener('hashchange',navigator,false)


function navigator(){
    if (location.hash === '#trends') {
        trendsPage();
    }else if (location.hash === '#category') {
        categoryPage();
    }else if (location.hash.startsWith('#search=')) {
        searchPage();
    }else if (location.hash.startsWith('#movie=')) {
        moviePage();
    }else{
        homePage();
    }
}

function trendsPage(){
    console.log('vista trends');
}

function categoryPage(){
    console.log('vista category');
}

function searchPage(){
    console.log('vista search');
}

function moviePage(){
    console.log('vista movie');
}

function homePage(){
    console.log('vista home'); 
    getTrendingMoviesPreview();
    getCategoriesPreview();
}