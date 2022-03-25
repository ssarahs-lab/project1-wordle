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

const validWords = computerChoiceWords;
 
const wordleAnswer = computerChoose();

function computerChoose(){

    let randomIndex = Math.floor(Math.random()*validWords.length);
    let computerChoice = validWords[randomIndex].toUpperCase();

    console.log(computerChoice);
    return computerChoice;

 }

 //list for guessing, human words for those answers

function compareWords(){

   
   messageContainer.textContent = ""
   //end if guesses exceed 6 guesses
   
   if(guessCounter > 6){
         
      return;

   }
    
   console.log("wordleAnswer " + wordleAnswer);

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

   if(!allWords.includes(userInputValue)){

   console.log("this is not a valid word!");
   messageContainer.textContent = "This is not a valid word!"
  
   
   return;

   }
   
   let letterPosition = 0;
//for loop to check the guesses 

for (const letter of userInputArray){

  
            //get current position for letter and print into box
            const currentBox = document.querySelector(".row"+guessCounter+".box"+(letterPosition+1));

            console.log(currentBox)
            currentBox.innerHTML = letter;
            // currentBox.classList.add("animate__flip")
               

                  //if userinput and position are correct

                  if(userInputArray[letterPosition] === computerChoiceArray[letterPosition]){
                
                  currentBox.classList.add("green");
               
                  //if only userinput matches  

                  } else if (computerChoiceArray.includes(letter)){

                  currentBox.classList.add("yellow");
            
                  //else if nothing matches
                              
                  } else {

                  currentBox.classList.add("grey");
               
                  }
                  
         letterPosition++;
         
         const p = document.querySelectorAll('p');
   
               // if (p.classList.contains('green') == true && p.classList.contains('row'+guessCounter)){
               //    console.log("You've won!");
               
               //    return
               // }



      }
            //select current row of boxes that are all green

            const p = document.querySelectorAll('.row'+guessCounter+".green")

           
            //if 5 boxes are green, you've won
            
              if(guessCounter > 5 && p.length == 5) {
            
                  messageContainer.textContent = "Youve won! That was close"
                 
                  return
                  
               } else if(p.length == 5){
                
                  messageContainer.textContent = "You've won!"
                
                  return
               
               }
               
               else if (guessCounter > 5) {
                  
                  messageContainer.textContent = "Better luck next time "
                  
                  return
               }
               guessCounter++;
               //clear user input, refocus on input bar for next guess

               userInput.value = "";
               userInput.focus();

}


// Event listener so user can press Enter instead of clicking submit

userInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});

//switch between dark mode / lightmode

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

let keys = document.getElementsByClassName('key');

        for (let keyElement of keys) {

      
            let key = keyElement.textContent;
            let userInputValue = userInput.value.toUpperCase(); 
            let userInputArray = userInputValue.split("");

            for (const letter of userInputArray){

  
               //for every letter in the box, make the keyboard grey

            }



            keyElement.addEventListener('click', function() {
                switch (key) {

                  
                    case '␡':
                        userInput.value = userInput.value.slice(0, userInput.value.length-1);
                        break;
                    case '␡ all':
                        userInput.value = '';
                        break;
                    default:
                        userInput.value += key;
                }
            });
        }