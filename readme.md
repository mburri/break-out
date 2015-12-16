#break-out
[check it out (work in progress)](http://mburri.github.io/break-out/dist/index.html)
- An attempt to implement a break-out clone using the redux/ elm-architecture pattern.
- based on:
   - http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html (project setup, tdd, es6)
   - https://github.com/evancz/elm-architecture-tutorial (functional reactive programming)
   - https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript (canvas, drawing, user input)
   - https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations (e.g. for scenes)

   - this project is part of "Thömus Open Source Advents-Challenge 2015"

##Tests
- npm run test (run all tests)
- npm run test:watch (run all tests and check for changes in files)

##Log

###2015-12-01

- npm install --save-dev babel-core babel-cli babel-preset-es2015
- npm install --save-dev mocha chai
- run tests with: ./node_modules/mocha/bin/mocha --compilers js:babel-core/register --recursive
- added npm scripts (test & test:watch)
- npm install --save immutable
- npm install --save-dev chai-immutable
- created test/setup.js

(see http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html for project setup )

- implementend first tests and functions for scenes
- added a scene reducer. possible changes between states need some rethinking, especially the initial state - but it's enough for today

###2015-12-02
- used reducer function with array.reduce in a test just to make it clear why it's called a reducer function :-)
- npm install --save redux
- implemented the store with tests
- added index.html
- npm install --save-dev webpack webpack-dev-server
- setup index.js and webpack config
- npm install --save-dev babel-loader
- added npm task to serve application: npm run serve
- application is accessible at http://localhost:8080/webpack-dev-server/index.html
- implemented very simple frontend. it just writes the current scene as text. Actions can be dispatched with simple mouse clicks. Press ESC while GAME is the current scene to GAME_OVER...

###2015-12-03
- render scenes to canvas (with very nice colors)
- added functions and reducer for paddle movement
- created gh-pages branch for this repo.

###2015-12-04
- major refactorings to be able to combine reducers - lesson learned...
- ... and it moves! implementing paddle movement was a breeze...

###2015-12-05
- adding a moving ball
- collision detection and game over...

###2015-12-6 - 2015-12-15
- removed reducers. theres only one reducer left - because it does not make sense to split them yet (yagni?)
- added bricks, collision detection
- the state tree is now visible when playing the game
- i was not fully aware that you're able to mutate an object inside an immutable list - using Object.assign() solved the problem. I'll implement my next project without Immutable.js jus t to practice ES2015 features.

###2015-12-16
- extract key codes to constants in separate file. Are there any open source key code modules yet?
- extract rendering functions from main application file
- action creators

##TODOs
~~constants for key codes~~

~~extract render functions from index.js~~

~~constants for action types~~

- use ball radius in collision detection
- set speed only when in game scene
- fancy gh-page and reasonable build/ deploy
