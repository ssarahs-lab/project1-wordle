let userInput = document.getElementById("userInput");
let mainContainer = document.getElementById("mainContainer");
let guessCounter = 1;
let messageContainer = document.getElementById("messageContainer");

let number = 0;
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");
let row6 = document.getElementById("row6");



//to do:

//win/lose link 

 //Computer choose a random word from word list
 
const wordleAnswer = computerChoose();

function computerChoose(){

    let randomIndex = Math.floor(Math.random()*validWords.length);
    let computerChoice = validWords[randomIndex];

    console.log(computerChoice);
    return computerChoice;

 }

 //list for guessing, human words for those answers

function compareWords(){

   //end if guesses exceed 6 guesses
   
   if(guessCounter > 6){
         
      return;

   }
    
   let userInputValue = userInput.value.toUpperCase(); 
   let userInputArray = userInputValue.split("");
   let computerChoiceArray = wordleAnswer.split("");
   

   console.log(userInputArray)

   //make sure it has 5 letters
   
   if(userInputArray.length < 5){

         console.log("you have less than five letters!");
         messageContainer.textContent = "Oops, you have less than five letters!"
         
         return;

   }
    
   //check if a valid word

   if(!validWords.includes(userInputValue)){

   console.log("this is not a valid word!");
   messageContainer.textContent = "This is not a valid word!"
  
   
   return;

   }
   let letterPosition = 1;
   
//for loop to check the guesses 

for (const letter of userInputArray){

   
      //get current position for letter
      const currentBox = document.getElementById("row"+guessCounter+"-box"+(letterPosition));
      
      currentBox.innerHTML = letter;
           

            //if userinput and position are correct

            if(userInputArray[letterPosition] === computerChoiceArray[letterPosition]){
                           
            console.log(userInputArray[letterPosition]);

            console.log("green" + userInputArray[letterPosition]);

            currentBox.classList.add("green");

                     
            //if only userinput matches   

            } else if (computerChoiceArray.includes(letter)){

            console.log(userInputArray[letterPosition]);
            console.log("yellow" + userInputArray[letterPosition])
            currentBox.classList.add("yellow");
                     
            //else if nothing matches
                        
            } else {

            console.log(userInputArray[letterPosition]);
            console.log("grey" + userInputArray[letterPosition]);
            currentBox.classList.add("grey");
            
         }
            
         letterPosition++;
         

      }
         
        guessCounter++;

}


//toggle dark mode

// Select the button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
 

  if(btn.textContent== "Switch to Light Mode"){

   btn.textContent = "Switch to Dark Mode";
   document.body.classList.add('light-theme');  
  document.body.classList.remove('dark-theme');

  } else if (btn.textContent== "Switch to Dark Mode"){

   btn.textContent = "Switch to Light Mode";
   document.body.classList.remove('light-theme');  
  document.body.classList.add('dark-theme');
  }

})