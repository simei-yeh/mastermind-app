# Application

This application allows you to play the game Mastermind using 4 numbers between 0 and 7.

-Deployed at [https://mastermind-app.vercel.app/](https://mastermind-app.vercel.app/)
<br />
-Best played on a webpage at 767px width or higher (however, can be played on a screen min-width 360px)
<br />
-Includes sound and graphics (audio can be turned off before entering or during the game)
<br />
-To persist game history, uses localStorage
<br />
-Uses Random Number Generator API to retrieve random numbers [https://www.random.org/integers](https://www.random.org/integers)

## How to play on the website

1. To play, navigate to [https://mastermind-app.vercel.app/](https://mastermind-app.vercel.app/). 
2. To enter, click on 'Click here to play!' button. **Sound will start after you enter**
3. **To turn on/off sound**, click on the blinking button at the bottom of the screen 
(after entry, another button will appear as well if you want to turn on / off sound at any time).
4. Click anywhere on the shaded gray circles to start entering numbers guesses
5. Once 4 numbers have been entered, the guesses will automatically be saved in state and considered a submitted guess
6. the submitted guess will appear instantly on the right under "past guesses" with color-coded feedback
7. Either win the game by guessing correct numbers, running out of rounds, or click "End Game" under the input circles 
(premature end of a game without winning is considered a loss)
 _for your convenience, the winning numbers are displayed in the developers console :)_
8. A modal and image will pop up depending if you win or lose. Click on the 'Close' button at the top right of the modal
or anywhere on the screen to close the modal and continue playing.
10. Click "Start New Game" if you would like to start a new game. Another series of random numbers will be generated
11. Bottom left of the screen will show game information including games played and games won. You can also choose to clear
full game history (games played and won), and turn on/off audio at any time

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start a development server, navigate to the root directory and run:

```
npm install
```

Installs all required dependencies for this project.

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Folder Structure

    ├── build                   # Compiled files
    ├── src                     # Source files  
    │ └─ App.js                 # App is the root container and inserts App into DOM 
    │ └─ components             # individual game components
    │     └─── API              # API call to Random Number Generator
    │     └─── buttons
    │     └─── currentGuess     # container to show the 'Current Guesses'
    │     └─── gameContainer    # container when game starts playing
    │     └─── gameHistory      # container to show the 'Past Guesses'
    │     └─── header
    │     └─── inputs
    │     └─── mainContainer    # main container landing page for app
    │     └─── media            # contains png, svg and MP3 for the game
    │     │     ├── images
    │     │     └── sounds
    │     └─── modal            # modal pop-up on game win/loss
    │             
    └── README.md

This app was built to be modular and includes reusable components including buttons, header, and inputs.
The app was built to separate concerns between 
<br />
  1. initial landing page (mainContainer)
<br />
  2. game container (gameContainer) which includes: 
<br />
      a. overall game-level information, 
<br />
      b. current guesses for the current game (currentGuess)
<br />
      c. past guesses for the current game (gameHistory)
<br />
      d. past game information (saved in state in the gameContainer)
<br />
      e. modal on game win/loss (Modal)
<br />
The API call was built as a separate OOP to instantiate new APIs each time a game is created. Additional functionality could be built out to further add configurable difficulty levels when sending the API call.


