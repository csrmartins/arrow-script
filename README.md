# ArrowScript

ArrowScript is a game designed for young kids to learn logic by using Arrows to create logic programs to move a character from a Start Point to an End point.

## Wireframes
![Welcome Screen](/wireframes/welcome-screen.png)
Format: ![Alt Text](url)

![How to Play](/wireframes/how-to-play-screen.png)
Format: ![Alt Text](url)

![Game Start](/wireframes/game-start-screen.png)
Format: ![Alt Text](url)

![User Input](/wireframes/user-input.png)
Format: ![Alt Text](url)

![Program Executed](/wireframes/program-Executed.png)
Format: ![Alt Text](url)


## User Stories

A user should be able to:

* Navigate to https://csrmartins.github.io/arrow-script/html/game.html and see the initial screen with:
  *   The name of the Game
  *   A brief description of the game
  *   A Play Button
  *   Basic Instructions of the Game
  *   A See more button
* Clicking at the See More button, the user should be redirected to the Instructions Page, and must see:
  *   All the instructions for the game
  *   A Play Button
* By Clicking at the Play Button, the user will be redirected to the Game Start screen and should be able to see:
  *   A box with:
  *   A character at a Start Point
    *     A path way
    *     An end point
    *   A box with all the available ArrowScript commands
    *   The level number
    *   The score number
    *   An incremental timer
    *   And empty box where the selected ArrowScript commands will be listed in the sequence they’ll be executed.
    *   A Run Button
* By clicking at the ArrowScript commands available in the box named Commands, the program will:
    *   Insert the command which was clicked in the box named Your program.
    *   Keep adding the commands in sequence according to the sequence of clicks.
* By clicking at the Run Button, the game is going to:
    *   Execute the sequence of commands placed in the box named Your Program
    *   Show the End Point of the character at the game screen.
    *   Stop the timer
    *   Verify if the commands sequence is Correct or not.
* If the commands sequence is correct:
    *   Show the character at the End Point.
    *   The user wins 3 score points
    *   If the timer is under than 1 minute, the won score points are doubled.
* If the commands sequence is incorrect:
    *   The user the user will be able to do it again
    *   The user is going to lose one of the score points available for that level (3 in this case).


## Stretch Goals

The stretch goals for this project are:

1. Make an animation that show the character going thru the path way.

2. Create new level with random path ways.


## Technologies Used

* **HTML**
* **Javascript**
* **CSS**
* **jQuery**
