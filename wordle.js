 //Computer choose a random word from word list
 //Wishlist for later: computer keep same random word for 24 hours depending on user's geo-location

 function computerChoose(){

    let randomIndex = Math.floor(Math.random()*validWords.length);
    let computerChoice = validWords[randomIndex];

    

    return computerChoice;

 }

 //list for guessing, human words for those answers
 
let userInput = document.getElementById("userInput").value;

console.log(computerChoose());

let computerChoiceArray = computerChoose().split("");
let userInputArray = userInput.split("");

console.log(computerChoiceArray);
console.log(userInputArray);

function compareWords(){
    
   // Get input from user
 //turn both inputs into an array
 //

 


//computer compare index text
}

 

 // check if matches 

//count number of guesses


    //   let figures = document.getElementById("userInput").value
    //   let placeHolder = ".";

    //   for (const word of words){

    //         if (word.match(figures, placeHolder)){

    //             const element = document.createElement('p');
    //             element.textContent = word;
    //             document.body.appendChild(element);

    //         } else if (word.match(figures, placeHolder, placeHolder)){

    //             const element = document.createElement('p');
    //             element.textContent = word;
    //             document.body.appendChild(element);

    //         } else if (word.match(figures,placeHolder,placeHolder, placeHolder)){

    //             const element = document.createElement('p');
    //             element.textContent = word;
    //             document.body.appendChild(element);
            
    //         } else if (word.match(figures,placeHolder,placeHolder, placeHolder, placeHolder)){

    //             const element = document.createElement('p');
    //             element.textContent = word;
    //             document.body.appendChild(element);
        
    //         }
    //     }

    //     //clears user input bar after search is done

    //     userInput = document.getElementById("userInput");
    //     userInput.value ="";


    
