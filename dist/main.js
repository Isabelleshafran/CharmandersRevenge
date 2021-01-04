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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 1,\n  JUMP_SPEED: 1,\n//   TERMINAL_VEL: 12,\n  CHAR_WIDTH: 100,\n  CHAR_HEIGHT: 100,\n};\n\n\n\nclass Charmander {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    this.x = 50;\n    this.y = this.dimensions.height - 200;\n    this.vel = 0;\n  }\n\n  drawChar(ctx) {\n    let char = new Image();\n    char.src = '../images/charmander.png'\n    ctx.drawImage(\n      char,\n      this.x,\n      this.y,\n      CONSTANTS.CHAR_WIDTH,\n      CONSTANTS.CHAR_HEIGHT\n    );\n\n  }\n\n  animate(ctx) {\n    this.moveChar()\n    this.drawChar(ctx);\n  }\n\n  moveChar(){\n\n  \n    // this.y_v += CONSTANTS.GRAVITY\n    this.y = this.vel\n    this.vel += 1;\n\n  }\n\n  jump(){\n    //   this.y_vel = -10\n\n\n    this.vel = -1 * CONSTANTS.JUMP_SPEED;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charmander);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/charmander.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _charmander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charmander */ \"./src/charmander.js\");\n\n\n\nclass CharmandersRevenge {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.registerEvents();\n    this.restart();\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n    this.ctx.canvas.addEventListener(\"mousedown\", this.boundClickHandler);\n    // this.ctx.canvas.addEventListener(\"keydown\", this.boundClickHandler);\n\n  }\n\n  restart() {\n    this.running = false;\n\n    this.charmander = new _charmander__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n    this.animate();\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.charmander.animate(this.ctx);\n\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    }\n\n    this.charmander.jump();\n\n    // if(e.keyCode === 38) {\n    //     this.charmander.jump();\n    // }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharmandersRevenge);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconst canvas = document.getElementById(\"pokemon-game\");\nnew _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas)\n\n\n\n//# sourceURL=webpack://CharmandersRevenge/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n\n  drawBackground(ctx) {\n       let sky = new Image();\n       sky.src = \"../images/sky.png\";\n       ctx.drawImage(\n         sky,\n         0,\n         0,\n         this.dimensions.width, this.dimensions.height\n       );\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://CharmandersRevenge/./src/level.js?");

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