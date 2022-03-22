let userInput = document.getElementById("userInput");

 //Computer choose a random word from word list
 //Wishlist for later: computer keep same random word for 24 hours depending on user's geo-location

function computerChoose(){

    let randomIndex = Math.floor(Math.random()*testWords.length);
    let computerChoice = testWords[randomIndex];

    console.log(computerChoice);
    return computerChoice;

 }

const testWords = ['AALII']

 //list for guessing, human words for those answers

function compareWords(){
    
   // Get input from user
   //turn both inputs into an array

   let userInputValue = userInput.value.toUpperCase(); 
   let userInputArray = userInputValue.split("");
  
   let computerChoiceArray = computerChoose().split("");

   //if letter and index match, then green
   //if letter only matches, then yellow

   console.log(userInputArray)

   let letterPosition = 0

   for (const letter of userInputArray){

      //if userinput and position are correct

            if(userInputArray[letterPosition] === computerChoiceArray[letterPosition]){
               
               console.log(userInputArray[letterPosition])
               console.log("green" + userInputArray[letterPosition]);

           
      //if only userinput matches   

            } else if (computerChoiceArray.includes(letter)){

            console.log(userInputArray[letterPosition]);
            console.log("yellow" + userInputArray[letterPosition])
           
      //else if nothing matches
            } else {

               console.log(userInputArray[letterPosition])
               console.log("grey" + userInputArray[letterPosition]);
            }

         letterPosition++;

   }

}

   



//if userinput is less than 5 letters
  //if userinput is not a valid word



  //make green class, if 5 classlength green - "you've won"
   //make guess counter, end game at 6 guesses
   
  
  
  
  
   // for (const letter of computerChoiceArray){

      //    for(index in userInputArray){
 
      //       if(userInputArray[index] == letter){

      //          console.log(userInputArray[index]);
      //       }

      //    }
         
      // }

   //computer compare index text