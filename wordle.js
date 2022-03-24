let userInput = document.getElementById("userInput");
let mainContainer = document.getElementById("mainContainer");
let guessCounter = 1;

let number = 0;
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");
let row6 = document.getElementById("row6");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");



//to do:
//link keyboard to input tag
//input user output into grid
//win/lose link

//link and play around with animate.css
//change font

   

 //Computer choose a random word from word list
 //Wishlist for later: computer keep same random word for 24 hours depending on user's geo-location
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
         return;

   }
    
   //check if a valid word

   if(!validWords.includes(userInputValue)){

   console.log("this is not a valid word!");
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

//Keyboard
//Code from Kenni Bawden

// let output =[]
//         let keys = document.getElementsByClassName('key');
//         for (let keyElement of keys) {
//             let key = keyElement
            
//             keyElement.addEventListener('click', function() {
//                 switch (key) {
//                     case '␡':
//                         output  = output.slice(0, output.length-1);
//                         break;
//                     case '␡ all':
//                         output = '';
//                         break;
//                     default:
//                         output.push(keyElement);
//                 }
//             })
//         }

//         console.log(output);

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