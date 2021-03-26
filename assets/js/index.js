// let counter = 0;

// while (counter <10 ){
//    if(counter % 2 === 0){
//     console.log(counter);
//   }
//   counter++;
// }


const GOOD_PASSWORD = "qwerty123";

let counter=0;

while (counter < 5 ){
  const parol = prompt("Введите пароль:");
  if(parol != GOOD_PASSWORD){
    console.log("Пароль введён неверно");
  }
  else{
    break;
  }
   counter++ 
  
}