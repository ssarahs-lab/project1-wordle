let userInput = document.getElementById("userInput");

 //Computer choose a random word from word list
 //Wishlist for later: computer keep same random word for 24 hours depending on user's geo-location

function computerChoose(){

    let randomIndex = Math.floor(Math.random()*validWords.length);
    let computerChoice = validWords[randomIndex];

    console.log(computerChoice);
    return computerChoice;

 }



 //list for guessing, human words for those answers

function compareWords(){
    
   let userInputValue = userInput.value.toUpperCase(); 
   let userInputArray = userInputValue.split("");
  
   let computerChoiceArray = computerChoose().split("");

    console.log(userInputArray)

    //make sure it has 5 letters

    if(userInputArray.length < 5){

      console.log("you have less than five letters!");
      return;

    }
    
    //check if a valid word

    if(!validWords.includes(userInputValue)){

      console.log("this is not a valid word!");
      return;

    }

   
   //for loop to check the guesses 
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