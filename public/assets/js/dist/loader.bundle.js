/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/loader.js"
/*!************************************!*\
  !*** ./public/assets/js/loader.js ***!
  \************************************/
() {

eval("{// Loads the animation on a succesful page load\r\n\r\nconst AnimationLoad = () => {\r\n  const loader = document.querySelector(\".loader\");\r\n  var headre = document.getElementById(\"header\");\r\n  var mainDiv = document.querySelector(\".main\");\r\n\r\n  // Show Loader Initially\r\n  headre.style.display = \"block\";\r\n\r\n  // Hide loader according to when Page is ready\r\n  if ((mainDiv.style.display = \"none\")) {\r\n    headre.style.display = \"none\";\r\n    mainDiv.style.display = \"block\";\r\n  }\r\n};\r\n\r\n// Call the AnimationLoad function when page is ready\r\ndocument.addEventListener(\"DOMContentLoaded\", AnimationLoad);\r\n\n\n//# sourceURL=webpack://capital_heath_org/./public/assets/js/loader.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/loader.js"]();
/******/ 	
/******/ })()
;