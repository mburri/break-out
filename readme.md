#break-out
- An attempt to implement a break-out clone using the redux/ elm-architecture pattern.
- based on:
   - http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html (project setup, tdd, es6)
   - https://github.com/evancz/elm-architecture-tutorial (functional reactive programming)
   - https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript (canvas, drawing, user input)
   - https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations (e.g. for scenes)

##Tests
- npm run test (run all tests)
- npm run test:watch (run all tests and check for changes in files)

##Log

###2015-01-01

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
