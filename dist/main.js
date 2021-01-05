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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 2,\n  JUMP_SPEED: 50,\n//   TERMINAL_VEL: 12,\n  CHAR_WIDTH: 100,\n  CHAR_HEIGHT: 100,\n};\n\n\n\nclass Charmander {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    this.x = 50;\n    this.y = this.dimensions.height - 200;\n    this.vel = 0;\n  }\n\n  drawChar(ctx) {\n    let char = new Image();\n    char.src = '../images/charmander.png'\n\n    ctx.drawImage(\n      char,\n      this.x,\n      this.y,\n      CONSTANTS.CHAR_WIDTH,\n      CONSTANTS.CHAR_HEIGHT\n    );\n\n    char.onload = () => {\n        ctx.drawImage(\n         char,\n         this.x,\n         this.y,\n         CONSTANTS.CHAR_WIDTH,\n         CONSTANTS.CHAR_HEIGHT\n       )\n    }\n\n  }\n\n  animate(ctx) {\n    this.moveChar()\n    this.drawChar(ctx);\n  }\n\n  moveChar(){\n\n    this.y += this.vel\n    this.vel = CONSTANTS.GRAVITY\n\n    if(this.y === this.dimensions.height - 200) {\n        this.vel = 0\n    }\n  }\n\n  jump(){\n\n    this.vel = -1 * CONSTANTS.JUMP_SPEED;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charmander);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/charmander.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _charmander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charmander */ \"./src/charmander.js\");\n\n\n\nclass CharmandersRevenge {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.registerEvents();\n    this.restart();\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n\n    this.ctx.canvas.addEventListener(\"keydown\", this.boundClickHandler);\n  }\n\n  restart() {\n    this.running = false;\n\n    this.charmander = new _charmander__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n    this.animate();\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.charmander.animate(this.ctx);\n\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    }\n    \n    if(e.keyCode === 38) {\n        this.charmander.jump();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharmandersRevenge);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/game.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst CONSTANTS = {\n  BALL_SPEED: 2,\n  BALL_WIDTH: 50,\n  EDGE_BUFFER: 50,\n  PIPE_SPACING: 220,\n  WARM_UP_SECONDS: 1\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    const firstBallDistance = this.dimensions.width \n\n    this.balls = [\n        this.randomBall(firstBallDistance), \n        this.randomBall(firstBallDistance + 220)\n    ]\n\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.moveBalls()\n    this.drawBalls(ctx)\n  }\n\n  drawBackground(ctx) {\n    let sky = new Image();\n    sky.src = \"../images/sky.png\";\n    ctx.drawImage(sky, 0, 0, this.dimensions.width, this.dimensions.height);\n    sky.onload = () => {\n      ctx.drawImage(sky, 0, 0, this.dimensions.width, this.dimensions.height);\n    };\n  }\n\n  randomBall(x){\n  \n      const ball = {\n          left: x, \n          right: 35 + x\n      }\n\n      return ball;\n  }\n\n  moveBalls(){\n      this.eachBall(function(ball) {\n          ball.left -= 2; \n          ball.right -= 2;\n      })\n\n      if(this.balls[0].left <= 0) {\n          this.balls.shift();\n          const newX = this.balls[1].left + 220;\n          this.balls.push(this.randomBall(newX))\n      }\n  }\n\n  drawBalls(ctx){\n      this.eachBall(function(ball) {\n            let pokeball = new Image();\n            pokeball.src = \"../images/pokeball.png\";\n    \n            ctx.drawImage(pokeball, ball.left, ball.right, 35, 35\n            );\n    \n            pokeball.onload = () => {\n            ctx.drawImage(pokeball, ball.left, ball.right, 35, 35);\n            };\n      })\n  }\n\neachBall(callback) {\n    this.balls.forEach(callback.bind(this));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/level.js?");

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