let userInput = document.getElementById("userInput");

 //Computer choose a random word from word list
 //Wishlist for later: computer keep same random word for 24 hours depending on user's geo-location

function computerChoose(){

    let randomIndex = Math.floor(Math.random()*testWords.length);
    let computerChoice = testWords[randomIndex];

    console.log(computerChoice);
    return computerChoice;

 }

const testWords = ['AALII', 'AARGH', 'AARTI', 'ABACA']

 //list for guessing, human words for those answers

function compareWords(){
    
   // Get input from user
   //turn both inputs into an array

   let userInputValue = userInput.value; 
   let userInputArray = userInputValue.split("");
   let userInputArrayUpperCase = userInputArray.toUpperCase();
   let computerChoiceArray = computerChoose().split("");

   //if letter and index match, then green
   //if letter only matches, then yellow

   console.log(userInputArray)

   if(userInputArray.includes(computerChoiceArray) == true ){

      console.log()

   }
  
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

}

 
