let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","" );
let personalMovieDB = {
    count:numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false, 
};
const a = prompt("last viewed film",""),
      b =  prompt("mark",""),
      c = prompt("last viewed film",""),
      d =  prompt("mark","");
      personalMovieDB.movies[a] =b;
      personalMovieDB.movies[c] =d;
      
      console.log(personalMovieDB);