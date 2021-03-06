/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/charmander.js":
/*!***************************!*\
  !*** ./src/charmander.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst CONSTANTS = {\n  GRAVITY: 3,\n  JUMP_SPEED: 70,\n  DASH_SPEED: 300,\n  NO_SPEED: 50,\n  CHAR_WIDTH: 220,\n  CHAR_HEIGHT: 150,\n};\n\nclass Charmander {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.dashing = false;\n    this.gameover = false;\n    this.tick = 0;\n    this.x = 20;\n    this.y = 155;\n    this.vel = 0;\n    this.currentFrame = 0;\n    this.srcX;\n    this.srcY = 1;\n    this.sheetWidth = 900;\n    this.sheetHeight = 600;\n    this.cols = 2;\n    this.rows = 2;\n    this.width = this.sheetWidth / this.cols;\n    this.height = this.sheetHeight / this.rows;\n  }\n\n  animate(ctx, level) {\n      this.moveChar(level);\n      this.drawChar(ctx);\n      if (this.dashing === true) {\n        this.drawFlames(ctx);\n      }\n      if (this.gameover === true) {\n        this.drawFlash(ctx);\n      }\n  }\n\n  jump() {\n    let i = 0;\n    while (i < CONSTANTS.JUMP_SPEED) {\n      this.vel = -1 * i;\n      i += 1;\n    }\n  }\n\n  dash() {\n    if(this.dashing === false) {\n      this.dashing = true;\n      let i = 50;\n  \n      while (i < CONSTANTS.DASH_SPEED) {\n        this.x = i;\n        i += 1;\n      }\n    }\n  }\n\n  moveChar(level) {\n    this.y += this.vel;\n    this.vel = CONSTANTS.GRAVITY;\n\n    level.grass.forEach((grass) => {\n      if (this.x > grass.left && this.x < grass.right) {\n        if (this.y > grass.bottom - 75) {\n          this.vel = 0;\n        }\n      }\n    });\n\n    if (this.x > 50) {\n      this.x -= 5;\n    } else {\n      this.dashing = false;\n    }\n  }\n\n  drawFlash(ctx) {\n    let flash = new Image();\n    flash.src = \"./assets/images/flash.png\";\n\n    ctx.drawImage(\n      flash,\n      this.x - 75,\n      this.y - 75,\n      CONSTANTS.CHAR_WIDTH * 2,\n      CONSTANTS.CHAR_HEIGHT * 2\n    );\n\n    flash.onload = () => {\n      ctx.drawImage(\n        flash,\n        this.x - 75,\n        this.y - 75,\n        CONSTANTS.CHAR_WIDTH * 2,\n        CONSTANTS.CHAR_HEIGHT * 2\n      );\n    };\n  }\n\n  updateFrame() {\n    this.srcX = this.currentFrame * this.width;\n    this.srcY = this.currentFrame * this.height;\n    this.tick++;\n\n    if (this.tick === 13) {\n      this.currentFrame = ++this.currentFrame % this.cols; // 2% 2 = 1\n      this.tick = 0;\n    }\n  }\n\n  drawChar(ctx) {\n    let char = new Image();\n    char.src = \"./assets/images/charsprite.png\";\n\n    this.updateFrame();\n\n    char.onload = () => {\n      ctx.drawImage(\n        char,\n        this.srcX,\n        this.srcY,\n        this.width,\n        this.height,\n        this.x,\n        this.y,\n        CONSTANTS.CHAR_WIDTH,\n        CONSTANTS.CHAR_HEIGHT\n      );\n    };\n\n    ctx.drawImage(\n      char,\n      this.srcX,\n      this.srcY,\n      this.width,\n      this.height,\n      this.x,\n      this.y,\n      CONSTANTS.CHAR_WIDTH,\n      CONSTANTS.CHAR_HEIGHT\n    );\n  }\n\n  drawFlames(ctx) {\n    let flames = new Image();\n    flames.src = \"./assets/images/flames.png\";\n\n    ctx.drawImage(flames, this.x - 90, this.y, 200, CONSTANTS.CHAR_HEIGHT);\n  }\n\n  bounds() {\n      return {\n        left: this.x,\n        right: this.x + CONSTANTS.CHAR_WIDTH,\n        top: this.y,\n        bottom: this.y,\n      };\n\n  }\n\n  outOfBounds() {\n    const aboveTheTop = this.y < -100;\n    const belowTheBottom = this.y > 310;\n    return belowTheBottom || aboveTheTop;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charmander);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/charmander.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _charmander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charmander */ \"./src/charmander.js\");\n/* harmony import */ var _pokeballs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeballs */ \"./src/pokeballs.js\");\n/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructions */ \"./src/instructions.js\");\n\n\n\n\n\nclass CharmandersRevenge {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.registerEvents();\n    this.restart();\n\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n    document.addEventListener(\"keydown\", this.boundClickHandler);\n  }\n\n  restart() {\n    document.addEventListener(\"keydown\", this.boundClickHandler);\n    this.running = false;\n    this.score = 0;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n    this.pokeballs = new _pokeballs__WEBPACK_IMPORTED_MODULE_2__.default(this.dimensions);\n    this.charmander = new _charmander__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.instructions = new _instructions__WEBPACK_IMPORTED_MODULE_3__.default(this.dimensions);\n    this.animate();\n  }\n\n  animate() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n    this.level.animate(this.ctx, this.score);\n    this.pokeballs.animate(this.ctx, this.charmander, this.score);\n    this.charmander.animate(this.ctx, this.level);\n\n    if (!this.running) {\n      this.instructions.animate(this.ctx);\n    }\n  \n    if (this.gameOver()) {\n      document.removeEventListener(\"keydown\", this.boundClickHandler)\n      this.charmander.drawFlash(this.ctx);\n\n      this.drawGameOver();\n      this.drawRestarting();\n      this.running = false;\n\n      setTimeout(() => {\n        this.restart();\n      }, 3000);\n    }\n\n    this.pokeballs.passedBall(this.charmander.bounds(), () => {\n      this.score += 1;\n      // console.log(this.score);\n    });\n\n    if (this.running) {\n      this.drawScore();\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    }\n\n    if (e.keyCode === 38) {\n      this.charmander.jump();\n    }\n\n    if (e.keyCode === 39) {\n      this.charmander.dash();\n    }\n  }\n\n  // controls(e)\n\n  gameOver() {\n    return (\n      this.pokeballs.collidesWith(this.charmander) ||\n      this.charmander.outOfBounds(this.height)\n    );\n  }\n\n  drawScore() {\n    const loc = {\n      x: this.dimensions.width / 2,\n      y: this.dimensions.height / 4,\n    };\n    this.ctx.font = \"bold 50pt sigmar one\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.score, loc.x, loc.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(this.score, loc.x, loc.y);\n  }\n\n  drawGameOver() {\n    const loc = {\n      x: this.dimensions.width - 550,\n      y: this.dimensions.height / 4 + 150,\n    };\n    this.ctx.font = \"bold 50pt sigmar one\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(\"GAME OVER\", loc.x, loc.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(\"GAME OVER\", loc.x, loc.y);\n  }\n\n\n  drawRestarting() {\n    const loc = {\n      x: this.dimensions.width - 550,\n      y: 385,\n    };\n    this.ctx.font = \"bold 30pt sigmar one\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(\"RESTARTING NOW...\", loc.x, loc.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(\"RESTARTING NOW...\", loc.x, loc.y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharmandersRevenge);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById(\"pokemon-game\");\n    new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas)\n\n    const sound = document.getElementById('sound');\n    const soundOn = document.getElementById('sound-on')\n    const soundOff = document.getElementById('sound-off')\n\n\n    soundOn.addEventListener(\"click\", () => {\n        sound.play();\n    })\n\n    soundOff.addEventListener('click', () => {\n        sound.pause();        \n    })\n\n  \n})\n\n//# sourceURL=webpack://CharmandersRevenge/./src/index.js?");

/***/ }),

/***/ "./src/instructions.js":
/*!*****************************!*\
  !*** ./src/instructions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Instructions {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    this.sigmar = new FontFace(\n      \"Sigmar One\",\n      \"url(assets/SigmarOne-Regular.ttf)\"\n    );\n  }\n\n  animate(ctx) {\n    this.drawHowToPlay(ctx);\n    this.drawRightArrow(ctx);\n    this.drawRightArrowInstructions(ctx);\n    this.drawUpArrow(ctx);\n    this.drawAnyKey(ctx);\n  }\n\n  drawHowToPlay(ctx) {\n    this.sigmar.load().then((font) => {\n     \n      const loc = {\n        x: 175,\n        y: 50,\n      };\n      ctx.font = \"bold 30pt sigmar one\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"HOW TO PLAY\", loc.x, loc.y);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n      ctx.strokeText(\"HOW TO PLAY\", loc.x, loc.y);\n    })\n  \n  }\n\n  drawRightArrow(ctx) {\n    this.sigmar.load().then((font) => {\n      const loc = {\n        x: 125,\n        y: 120,\n      };\n      ctx.font = \"bold 20pt sigmar one\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"RIGHT ARROW TO DASH &\", loc.x, loc.y);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n      ctx.strokeText(\"RIGHT ARROW TO DASH &\", loc.x, loc.y);\n    })\n  }\n\n  drawRightArrowInstructions(ctx) {\n\n    this.sigmar.load().then((font) => {\n      const loc = {\n        x: 150,\n        y: 155,\n      };\n      ctx.font = \"bold 20pt sigmar one\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"DESTROY POKEBALLS\", loc.x, loc.y);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n      ctx.strokeText(\"DESTROY POKEBALLS\", loc.x, loc.y);\n    })\n  }\n\n  drawUpArrow(ctx) {\n\n    this.sigmar.load().then((font) => {\n      const loc = {\n        x: 170,\n        y: 220,\n      };\n      ctx.font = \"bold 20pt sigmar one\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"UP ARROW TO JUMP\", loc.x, loc.y);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n      ctx.strokeText(\"UP ARROW TO JUMP\", loc.x, loc.y);\n    })\n  }\n\n  drawAnyKey(ctx){\n\n    this.sigmar.load().then((font) => {\n      const loc = {\n        x: 80,\n        y: 385,\n      };\n      ctx.font = \"bold 24pt sigmar one\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"PRESS ANY KEY TO START\", loc.x, loc.y);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n      ctx.strokeText(\"PRESS ANY KEY TO START\", loc.x, loc.y);\n    })\n\n  }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instructions);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/instructions.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst CONSTANTS = {\n    GRASS_SPEED: 3.5,\n    GRASS_WIDTH: 450, \n    GRASS_HEIGHT: 100,\n    GRASS_SPACING: 700\n}\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    const grassDistance = 0\n    this.speed = 3.5;\n\n    this.grass = [\n      this.randomGrass(grassDistance),\n      this.randomGrass(grassDistance + CONSTANTS.GRASS_SPACING),\n      this.randomGrass(grassDistance + (CONSTANTS.GRASS_SPACING * 2)),\n    ];\n  }\n\n  animate(ctx, score) {\n    this.moveGrass(score);\n    this.drawGrass(ctx)\n\n  }\n\n  randomGrass(x){\n    const grass = {\n      left: x,\n      right: CONSTANTS.GRASS_WIDTH + x,\n      bottom: Math.floor(Math.random() * 60) + 200,\n    };\n    return grass\n  }\n\n\n  moveGrass(score){\n      this.eachGrass(function(grass) {\n       if (score >= 2) {\n         this.speed = 4.5;\n       }\n       if (score >= 5) {\n         this.speed = 5.5;\n       }\n       if (score > 9) {\n         this.speed = 7;\n       }\n\n       if (score > 15) {\n         this.speed = 8.5\n       }\n\n        grass.left -= this.speed\n        grass.right -= this.speed\n\n        grass.bottom\n      })\n      \n      if(this.grass[0].right <= 0) {\n          this.grass.shift();\n          let newG;\n\n          if(score < 5){\n            newG = this.grass[1].left + CONSTANTS.GRASS_SPACING;\n          }\n\n          if(score >= 5 ){\n            newG = this.grass[1].left + 1100;\n          }\n\n          this.grass.push(this.randomGrass(newG))\n      }\n  }\n\n  drawGrass(ctx){\n    this.eachGrass(function (grass) {\n      let ground = new Image();\n      ground.src = \"./assets/images/grass.png\";\n\n      ctx.drawImage(ground, grass.left, grass.bottom, CONSTANTS.GRASS_WIDTH, CONSTANTS.GRASS_HEIGHT);\n\n      ground.onload = () => {\n        ctx.drawImage(\n          ground,\n          grass.left,\n          grass.bottom,\n          CONSTANTS.GRASS_WIDTH,\n          CONSTANTS.GRASS_HEIGHT\n        );\n      };\n    });\n  }\n\n\neachGrass(callback) {\n    this.grass.forEach(callback.bind(this));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/level.js?");

/***/ }),

/***/ "./src/pokeballs.js":
/*!**************************!*\
  !*** ./src/pokeballs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst CONSTANTS = {\n  BALL_SPEED: 3.5,\n  BALL_WIDTH: 95,\n  BALL_HEIGHT: 95,\n  EDGE_BUFFER: 50,\n  BALL_SPACING: 800,\n  WARM_UP_SECONDS: 1,\n};\n\nclass PokeBall {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    const firstBallDistance = 800;\n    this.speed = 3.5;\n    this.pokeballPic = new Image();\n    this.pokeballPic.src = \"./assets/images/pokeball.png\";\n\n    this.balls = [\n      this.randomBall(firstBallDistance),\n      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING),\n      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING * 2),\n    ];\n  }\n\n  animate(ctx, charmander, score) {\n    this.moveBalls(score);\n    this.drawBalls(ctx, charmander);\n  }\n\n  randomBall(x) {\n    const ball = {\n      left: x,\n      right: CONSTANTS.BALL_WIDTH + x,\n      bottom: 150,\n      passed: false,\n    };\n\n    return ball;\n  }\n\n  passedBall(char, callback) {\n    this.eachBall((ball) => {\n      if (ball.right < char.left) {\n        if (!ball.passed) {\n          ball.passed = true;\n          callback();\n        }\n      }\n    });\n  }\n\n  moveBalls(score) {\n    this.eachBall(function (ball) {\n\n       if (score >= 2) {\n         this.speed = 4.5;\n       } \n       if(score >= 5) {\n         this.speed = 5.5 \n       }\n       if(score > 9) {\n         this.speed = 7\n       }\n      \n       if (score > 15) {\n         this.speed = 8.5;\n       }\n\n  \n       \n      ball.left -= this.speed;\n      ball.right -= this.speed;\n    });\n\n    // console.log(score)\n\n\n    if (this.balls[0].right <= 0) {\n      this.balls.shift();\n      // console.log(score)\n      let newB;\n      if(score < 5){\n        newB = this.balls[1].left + CONSTANTS.BALL_SPACING;\n      }\n\n      if(score >= 5) {\n        newB = this.balls[1].left + 500;\n      }\n      this.balls.push(this.randomBall(newB));\n    }\n  }\n\n  drawBalls(ctx, charmander) {\n    this.eachBall(function (ball) {\n\n      if((ball.left - 100) > (charmander.x)) { \n          ctx.drawImage(\n            this.pokeballPic,\n            ball.left,\n            ball.bottom,\n            CONSTANTS.BALL_WIDTH,\n            CONSTANTS.BALL_HEIGHT\n          );\n    \n          this.pokeballPic.onload = () => {\n            ctx.drawImage(\n              this.pokeballPic,\n              ball.left,\n              ball.bottom,\n              CONSTANTS.BALL_WIDTH,\n              CONSTANTS.BALL_HEIGHT\n            );\n          };\n      }\n    });\n  }\n\n  eachBall(callback) {\n    this.balls.forEach(callback.bind(this));\n  }\n\n  collidesWith(char) {\n    let collision = false;\n\n    if(char.dashing) {\n      return collision = false\n    }\n    \n    this.eachBall((ball) => {\n      if (ball.left >= 125 && ball.left <= 135 && char.bounds().bottom >= 55) {\n        collision = true;\n      }\n    });\n\n    return collision;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeBall);\n\n\n\n//# sourceURL=webpack://CharmandersRevenge/./src/pokeballs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;