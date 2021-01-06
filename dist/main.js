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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 3,\n  JUMP_SPEED: 70,\n  DASH_SPEED: 250,\n  NO_SPEED: 50,\n  CHAR_WIDTH: 100,\n  CHAR_HEIGHT: 100,\n};\n\n\n\nclass Charmander {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    this.dashing = false \n\n    this.gameover = false \n\n    this.x = 50;\n    this.y = 185;\n    this.vel = 0;\n  }\n\n  jump() {\n\n    let i = 0; \n\n    while(i < CONSTANTS.JUMP_SPEED){\n      this.vel = -1 * i\n      i +=1\n    }\n  }\n\n  dash() {\n    this.dashing = true;\n\n    let i = 50; \n\n    while(i < CONSTANTS.DASH_SPEED){\n      this.x = i; \n      i += 1\n    }\n  }\n\n  flash() {\n    this.gameover = true;\n  }\n\n  moveChar(level) {\n\n\n    // y axis \n    this.y += this.vel;\n    this.vel = CONSTANTS.GRAVITY;\n\n    level.grass.forEach(grass => {\n      if(this.x > grass.left && this.x < grass.right) {\n             if (this.y > (grass.bottom - 50)) {\n               this.vel = 0\n             }\n        }\n    })\n\n\n    // x axis \n    if(this.x > 50){\n      this.x -= 5\n    } else {\n      this.dashing = false;\n    }\n    \n  }\n\n  drawFlash(ctx){\n    let flash = new Image();\n    flash.src = \"../images/flash.png\"\n\n    // ctx.globalCompositeOperation='destination-over'\n\n        ctx.drawImage(\n          flash,\n          this.x,\n          (this.y - 20),\n          (CONSTANTS.CHAR_WIDTH * 2),\n          (CONSTANTS.CHAR_HEIGHT * 2)\n        );\n\n        flash.onload = () => {\n          ctx.drawImage(\n            flash,\n            this.x,\n            (this.y - 20),\n            (CONSTANTS.CHAR_WIDTH * 2),\n            (CONSTANTS.CHAR_HEIGHT * 2)\n          );\n\n          // ctx.clearRect();\n        };\n\n  }\n\n  drawChar(ctx) {\n    let char = new Image();\n    char.src = \"../images/charmander.png\";\n\n    ctx.drawImage(\n      char,\n      this.x,\n      this.y,\n      CONSTANTS.CHAR_WIDTH,\n      CONSTANTS.CHAR_HEIGHT\n    );\n\n\n    char.onload = () => {\n      ctx.drawImage(\n        char,\n        this.x,\n        this.y,\n        CONSTANTS.CHAR_WIDTH,\n        CONSTANTS.CHAR_HEIGHT\n      );\n\n      // ctx.clearRect();\n    };\n  }\n\n  drawFlames(ctx) {\n    let flames = new Image();\n    flames.src = \"../images/flames.png\";\n\n    ctx.drawImage(\n      flames,\n      (this.x - 100),\n      this.y,\n      (CONSTANTS.CHAR_WIDTH * 2),\n      CONSTANTS.CHAR_HEIGHT\n    );\n\n  }\n\n  animate(ctx, level) {\n    this.moveChar(level);\n    this.drawChar(ctx);\n    if(this.dashing === true) {\n      this.drawFlames(ctx)\n    }\n    \n    if(this.gameover === true){\n      this.drawFlash(ctx)\n    }\n  }\n\n  bounds() {\n\n    if(this.dashing === true ){\n      return {\n        left: 0, \n        right: 0, \n        top: 0, \n        bottom: 0\n      }   \n    } else {\n      return {\n        left: this.x,\n        right: this.x + CONSTANTS.CHAR_WIDTH,\n        top: this.y,\n        bottom: this.y,\n      };\n    }\n  }\n\n  outOfBounds() {\n    // const aboveTheTop = this.y < -50\n    const belowTheBottom = this.y > 350\n    return belowTheBottom\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charmander);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/charmander.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _charmander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charmander */ \"./src/charmander.js\");\n/* harmony import */ var _pokeballs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeballs */ \"./src/pokeballs.js\");\n\n\n\n\nclass CharmandersRevenge {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.registerEvents();\n    this.restart();\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n\n    this.ctx.canvas.addEventListener(\"keydown\", this.boundClickHandler);\n  }\n\n  restart() {\n    this.running = false;\n\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n    this.charmander = new _charmander__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.pokeballs = new _pokeballs__WEBPACK_IMPORTED_MODULE_2__.default(this.dimensions);\n    this.animate();\n  }\n\n  animate() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n    this.level.animate(this.ctx);\n    this.charmander.animate(this.ctx, this.level);\n    this.pokeballs.animate(this.ctx);\n\n    if(this.gameOver()) {\n      \n     \n\n      this.charmander.flash()\n      setTimeout(() => (this.restart(), alert('GAME OVER')), 100)\n    }\n\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    }\n\n    if (e.keyCode === 38) {\n      this.charmander.jump();\n    }\n\n    if(e.keyCode === 39) {\n      this.charmander.dash();\n    }\n  }\n\n  gameOver() {\n    return (\n      this.pokeballs.collidesWith(this.charmander.bounds()) ||\n      this.charmander.outOfBounds(this.height)  \n    );\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharmandersRevenge);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconst canvas = document.getElementById(\"pokemon-game\");\nnew _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas)\n\n\n\n\n//# sourceURL=webpack://CharmandersRevenge/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst CONSTANTS = {\n    GRASS_SPEED: 3.5,\n    GRASS_WIDTH: 450, \n    GRASS_HEIGHT: 100,\n    GRASS_SPACING: 700\n}\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    const grassDistance = 0\n\n\n    this.grass = [\n      this.randomGrass(grassDistance),\n      this.randomGrass(grassDistance + CONSTANTS.GRASS_SPACING),\n      this.randomGrass(grassDistance + (CONSTANTS.GRASS_SPACING * 2)),\n    ];\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.moveGrass();\n    this.drawGrass(ctx)\n\n  }\n\n  drawBackground(ctx) {\n    let sky = new Image();\n    sky.src = \"../images/sky.png\";\n    ctx.drawImage(sky, 0, 0, this.dimensions.width, this.dimensions.height);\n    sky.onload = () => {\n      ctx.drawImage(sky, 0, 0, this.dimensions.width, this.dimensions.height);\n    };\n  }\n\n  randomGrass(x){\n\n    const grass = {\n      left: x,\n      right: CONSTANTS.GRASS_WIDTH + x,\n      bottom: Math.floor(Math.random() * 60) + 200,\n    };\n\n\n    return grass\n  }\n\n  moveGrass(){\n      this.eachGrass(function(grass) {\n        grass.left -= CONSTANTS.GRASS_SPEED, \n        grass.right -= CONSTANTS.GRASS_SPEED, \n        grass.bottom\n      })\n      \n    \n      \n      // to make game go faster find a way to -= 2 more over time \n      \n      if(this.grass[0].right <= 0) {\n        \n        \n        // console.log(count)\n          this.grass.shift();\n          const newG = this.grass[1].left + CONSTANTS.GRASS_SPACING;\n          this.grass.push(this.randomGrass(newG))\n      \n      }\n  }\n\n  drawGrass(ctx){\n\n        this.eachGrass(function (grass) {\n          let ground = new Image();\n          ground.src = \"../images/grass.png\";\n\n          // let height = \n\n\n            ctx.drawImage(ground, grass.left, grass.bottom, CONSTANTS.GRASS_WIDTH, CONSTANTS.GRASS_HEIGHT);\n\n\n            ground.onload = () => {\n  \n     \n            ctx.drawImage(\n              ground,\n              grass.left,\n              grass.bottom,\n              CONSTANTS.GRASS_WIDTH,\n              CONSTANTS.GRASS_HEIGHT\n            );\n\n\n          };\n        });\n  }\n\n\neachGrass(callback) {\n    this.grass.forEach(callback.bind(this));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/level.js?");

/***/ }),

/***/ "./src/pokeballs.js":
/*!**************************!*\
  !*** ./src/pokeballs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst CONSTANTS = {\n  BALL_SPEED: 3.5,\n  BALL_WIDTH: 95,\n  BALL_HEIGHT: 95,\n  EDGE_BUFFER: 50,\n  BALL_SPACING: 1000,\n  WARM_UP_SECONDS: 1,\n};\n\nclass PokeBall {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    const firstBallDistance = 800;\n\n    this.balls = [\n      this.randomBall(firstBallDistance),\n      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING),\n      this.randomBall(firstBallDistance + (CONSTANTS.BALL_SPACING * 2)),\n    ];\n  }\n\n  animate(ctx) {\n    this.moveBalls();\n    this.drawBalls(ctx);\n  }\n\n  randomBall(x) {\n    const ball = {\n      left: x,\n      right: CONSTANTS.BALL_WIDTH + x,\n      bottom: 150\n      // bottom: Math.floor(Math.random() * 10) + 140,\n    };\n\n    return ball;\n  }\n\n  moveBalls() {\n    this.eachBall(function (ball) {\n      ball.left -= CONSTANTS.BALL_SPEED;\n      ball.right -= CONSTANTS.BALL_SPEED;\n    });\n\n    if (this.balls[0].right <= 0) {\n      this.balls.shift();\n      const newB = this.balls[1].left + CONSTANTS.BALL_SPACING;\n      this.balls.push(this.randomBall(newB));\n    }\n  }\n\n  drawBalls(ctx) {\n\n    this.eachBall(function (ball) {\n      let pokeball = new Image();\n      pokeball.src = \"../images/pokeball.png\";\n\n      // image, x, y, width, height)\n      ctx.drawImage(pokeball, ball.left, ball.bottom, CONSTANTS.BALL_WIDTH, CONSTANTS.BALL_HEIGHT);\n\n\n      pokeball.onload = () => {\n        ctx.drawImage(pokeball, ball.left, ball.bottom, CONSTANTS.BALL_WIDTH, CONSTANTS.BALL_HEIGHT);\n      };\n    });\n  }\n\n  eachBall(callback) {\n    this.balls.forEach(callback.bind(this));\n  }\n\n\n  collidesWith(char) {\n    let collision = false;\n\n    this.eachBall((ball) => {\n      if (\n\n        (ball.left >= 150 && ball.left <= 160) && char.bottom >= 55 \n      ) {\n        collision = true;\n      } \n    });\n\n    return collision;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeBall);\n\n\n// {left: 50, right: 125, top: 186, bottom: 196}\n// char bounds \n\n//# sourceURL=webpack://CharmandersRevenge/./src/pokeballs.js?");

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