# ArrowScript

ArrowScript is a game designed for young kids to learn logic by using Arrows to create logic programs to move a character from a Start Point to an End point.


## User Stories

A user should be able to:

* 1.	Navigate to “<project URL>” and see the initial screen with:
*   a.	The name of the Game
*   b.	A brief description of the game
*   c.	A Play Button
*   d.	Basic Instructions of the Game
*   e.	A See more button
* 2.	Clicking at the See More button, the user should be redirected to the Instructions Page, and must see:
*   a.	All the instructions for the game
*   b.	A Play Button
* 3.	By Clicking at the Play Button, the user will be redirected to the Game Start screen and should be able to see:
*   a.	A box with:
*   i.	A character at a Start Point
*     ii.	A path way
*     iii.	An end point
*   b.	A box with all the available ArrowScript commands
*   c.	The level number
*   d.	The score number
*   e.	An incremental timer
*   f.	And empty box where the selected ArrowScript commands will be listed in the sequence they’ll be executed.
*   g.	A Run Button
*  4.	By clicking at the ArrowScript commands available in the box named Commands, the program will:
*   a.	Insert the command which was clicked in the box named Your program.
*   b.	Keep adding the commands in sequence according to the sequence of clicks.
* 5.	By clicking at the Run Button, the game is going to:
*   a.	Execute the sequence of commands placed in the box named Your Program
*   b.	Show the End Point of the character at the game screen.
*   c.	Stop the timer
*   d.	Verify if the commands sequence is Correct or not.
* 6.	If the commands sequence is correct:
*   a.	Show the character at the End Point.
*   b.	The user wins 3 score points
*   c.	If the timer is under than 1 minute, the won score points are doubled.
* 7.	If the commands sequence is incorrect:
*   a.	The user the user will be able to do it again
*   b.	The user is going to lose one of the score points available for that level (3 in this case).


## Stretch Goals

The stretch goals for this project are:

1.	Make an animation that show the character going thru the path way.

2.	Create new level with random path ways.


### Technologies Used

* *HTML*
* *Javascript*
* *CSS*
* *jQuery*
