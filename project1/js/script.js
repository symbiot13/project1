let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","" );
}
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




      const options = {
          name: 'oleg',
          width : 1024,
          height : 1024,
          colors : {
              bg : 'red',
              border : 'black'
          }
      };
      let counter = 0;
      for (let key in options ){
          if (typeof(options[key]) === 'object') {
            for(let i in options[key] )  {
                console.log(`key ${i} with ${options[key][i]}`);
                counter++;
            }  
        } else {
            console.log(`key ${key} with ${options[key]}`);
            conter++;
        }
      }
      console.log(counter);


      