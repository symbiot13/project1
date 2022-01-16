let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","" );
let personalMovieDB = {
    count:numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false, 
};

      

      for (let i = 0; i < 2; i++) {
        const a = prompt("last viewed film", ""),
             b =  prompt("mark", "");

             if (a != null && b !=null &&  a != "" && b!= "" && a.length<50) {
                personalMovieDB.movies[a] =b; 
                console.log("done");
             } else {
                 console.log("error");
                 i--;
             }     
      }
      if (personalMovieDB.count <  10) {
          console.log("low");
      } else if (personalMovieDB.count >= 10 &&  personalMovieDB.count <= 30){
      console.log("nice");
      } else if ( personalMovieDB.count > 30 ){
          console.log ("sheesh");
      }else {
          console.log("error");
      }
     
      console.log(personalMovieDB);