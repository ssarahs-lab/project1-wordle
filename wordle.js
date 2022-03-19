

 //Computer choose a random word from word list

 //list for guessing, human words for those answers
 
 function computerChoose(){

    let randomIndex = Math.floor(Math.random()*validWords.length);
    let computerChoice = validWords[randomIndex];

    console.log(randomIndex);

    return computerChoice;

 }

 console.log(validWords[randomIndex]);
 console.log(computerChoose());

 
 
 // Get input from user
 // check if matches 




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


    
