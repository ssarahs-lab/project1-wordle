let userInput = document.getElementById("userInput");
let mainContainer = document.getElementById("mainContainer");
let  guessCounter = 1;

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

   //end if guesses exceed 6 guesses 
      if(guessCounter > 6){
         
         return;

      }

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
  

    let div = document.createElement('div');
    mainContainer.appendChild(div);
    div.classList.add('container','row'+guessCounter);

for (const letter of userInputArray){

         let p = document.createElement('p');
         
         
         console.log(letter);
         
         //the div text content is every item in this for-loop
         p.textContent = letter;

         //give every div a class of box, and row number
         p.classList.add('box');
         
         p.classList.add('row'+ guessCounter);

         //append the new div into the container div
         
         div.appendChild(p);

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
        

         console.log("guess counter " + guessCounter);
         console.log("letterPosition" + letterPosition);
        guessCounter++;

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