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

/***/ "./public/assets/js/api_domain.js"
/*!****************************************!*\
  !*** ./public/assets/js/api_domain.js ***!
  \****************************************/
() {

eval("{// This file gonna help us to make sure that we don't repeat same tasks over and over again\r\n// Check if the device is online =======\r\nfunction isOnline() {\r\n  return navigator.onLine;\r\n}\r\n\r\n\r\n// Disable form and page interactions if offline\r\nconst disablePage = () => {\r\n  document.body.innerHTML = `\r\n    <div style=\"text-align: center; margin-top: 20%;\">\r\n      <h1>You are offline</h1>\r\n      <p>Try turning on Wi-Fi or mobile data and we'll get you back.</p>\r\n      <div>\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"84\" height=\"84\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#af4848\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-wifi\">\r\n          <path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path>\r\n          <path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path>\r\n          <path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path>\r\n          <line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n  `;\r\n};\r\n\r\n// Check online/offline status on page load\r\nwindow.addEventListener('load', () => {\r\n    if (!isOnline()) {\r\n        disablePage();\r\n    }\r\n});\r\n\r\n// Listen for online/offline changes\r\nwindow.addEventListener('online', () => {\r\n    location.reload();\r\n});\r\n\r\nwindow.addEventListener('offline', () => {\r\n    disablePage();\r\n});\r\n\r\n\r\n// Set API domain based on environment =============\r\n// const API_DOMAIN = location.hostname == \"localhost\" || location.hostname == \"127.0.0.1\" ? myLocalHost : myProductionHost;\r\nconst API_DOMAIN =\r\n  location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\"\r\n    ? \"http://localhost/Capital_Health(original)/Capital_Heath_org/api\"\r\n    : location.origin;\r\n\r\n// The above code will help us to be using API_DOMAIN as our localhost\n\n//# sourceURL=webpack://capital_heath_org/./public/assets/js/api_domain.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/api_domain.js"]();
/******/ 	
/******/ })()
;