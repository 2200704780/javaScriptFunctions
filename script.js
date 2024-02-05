//  //function declaration
//  function greetUser(){
//   console.log('hello BBC')  
// }
// //calling a function
// greetUser();
    
//  function greetUser(name){
//     console.log('KI EKIRIWO MWANA Kalwaaza' + name)
//  }
//    greetUser(' Christopher');
//    greetUser(' ivan');
//concatinating  a string and a variable
// function greetUser(name){
//     console.log(`hello, ${name}`)
//  }
//    greetUser(' Christopher');
//    greetUser(' ivan');


// // the number of parameters should be equivalent to the number of arguments
// function greetUser(age, name){
//     console.log(`hello, ${name} is ${age} years old` )
//  }
//    greetUser(25,' Christopher');
//    greetUser(17, ' ivan');

//    console.log('hello julius is 30 years old');

  
  // function addNumbers( firstNumber, secondNumber){
  //   return console.log (firstNumber + secondNumber);

  // }
  //  addNumbers( 20, 30 );
  // the DRY PRINCIPAL states that no repeating code
    // let ugxResult= null;//global variable

  function convertUsDollarsToUgx(dollars, rate){
    //let ugxResult= null //local variable 
     ugxResult =dollars * rate;
    return console.log(ugxResult)
  }
  convertUsDollarsToUgx(100 , 3650)
  
