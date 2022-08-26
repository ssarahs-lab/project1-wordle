
# Wordle - A General Assembly project # 

<a href="https://ssarahs-lab.github.io/project1-wordle/" target="_blank">Live site</a>

## Background ##

This fun project is something I made as part of General Assembly's Software Engineering Flex Immersive Course, taught by Katie Bell and Kenni Bawden.

It involves the use of HTML, CSS and vanilla Javascript.

Wordle is a popular online game (in 2022) that involves guessing a five letter word. The user types in a guess and the game gives feedback by colouring each tile according to whether it matches the word - green for correct placement and letter, yellow for a matching letter, grey for no matches at all. 


## Process
In making this, I began with a Javascript function to test user input, console-logging all the way. 

Once this was completed, I made a HTML page styled with CSS grid and flex, so that it would be responsive to a smaller page and would be mobile friendly - given most users play this via mobile. 

Because of the short timeframe required to make the game (one week), some hurdles for me involved identifying which components of the game were more critical in building the "skateboard"/basic working version of the game, before upgrading various things on top of this working version - i.e. adding a functional keyboard, sharing to social media option, sessional/local storage for user's game.

In my function, I prioritised
1. checking that the user entered five letters
2. checking that it was a valid word..

..before..
3. Checking for letters that don't match
4. Checking for yellow letters (matching letter only)
5. Checking for green letters (matching position and letter)

going from the biggest filter, to the most narrow filter for my if-statements.



## Side comments 
I loved making this game, 10/10 would do it again!


## Future updates
- Share to social media option
- Add a functional keyboard with greyed out keys indicating previous use in a guess
