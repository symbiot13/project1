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

//tipa conspectik


      const options = {
          name: 'oleg',
          width : 1024,
          height : 1024,
          colors : {
              bg : 'red',
              border : 'black'
          },
          makeTest : function ( ){
              console.log('test');
          }
      };
      options.makeTest();
      const {border,bg} = options.colors;
      console.log(border);
      /*let counter = 0;
      for (let key in options ){
          if (typeof(options[key]) === 'object') {
            for(let i in options[key] )  {
                console.log(`key ${i} with ${options[key][i]}`);
                counter++;
            }  
        } else {
            console.log(`key ${key} with ${options[key]}`);
            counter++;
        }
      }
      console.log(counter); */
      console.log(Object.keys(options).length);

/*const obj = {
    a:5,
    b:1,
};
const copy = obj;
copy.a = 10;*/
//copy object 1-viy sposob
function copy(main) {
 let objCopy = {};
let key;
for(key in main){
    objCopy[key]=main[key];
}

return objCopy;
}
const numbers= {
    a: 2,
    b :5,
    c: {
        x:7,
        y:4
    }
};
  const newNumbers = copy(numbers)  ;
  newNumbers.a = 10;
  console.log(newNumbers);
  console.log(numbers);  
  //2-roy sposob
  const add = {
      d:17,
      e:20

  };
  // 1 argument v kotoriy dodaem vtoroy kotoriy dobavlyaem
  const clone = Object.assign({},add); 

  clone.d = 14;
  console.log(add);
  console.log(clone);


  // toje ale z massivami

  const oldArray = [1,2,3];
  const newArray = oldArray.slice();
  newArray[1] = 3;
  console.log(oldArray);
  console.log(newArray);

  //4 sposob ES6,ES8

  const video = ['youtube','rutube','tiktok'],
        blogs = ['wordpress','livejour','blogger'],
        internet = [...video, ...blogs, 'vk' , 'facebook'];
        console.log(internet);

        //2-roy varik iz massivami
        const oldArr = [1,2,3];
  const newArr = [...oldArr];
  console.log(oldArr);
  console.log(newArr);

        
  //oop
  const soldier = {
      health : 400,
      armor :100
  };

  /*const john = {
    health : 100
};*/

//stariy sposob prototipa (do not use)
const john = Object.create(soldier);
john._proto_  =  soldier; 

//noviy sposob

Object.setPrototypeOf(john, soldier);

// To string
// 1) staraya
console.log(typeof(String(null)));

//2)
console.log(typeof(5 + ''));

//To number
// 1) staree 4em v string (useless)
console.log(typeof(Number('4')));

//2)

console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px',10)));

// To boolean
// false 0,'',null,undefined,NaN;

