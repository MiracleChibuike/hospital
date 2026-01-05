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

/***/ "./public/assets/js/Dashboard.js"
/*!***************************************!*\
  !*** ./public/assets/js/Dashboard.js ***!
  \***************************************/
() {

eval("{// Retrieve and display the userName on the dashboard page\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  let pageTitle = document.getElementById(\"page_title\");\r\n  let msg_Welcome = document.querySelector(\".Message_D\");\r\n  msg_Welcome.style.display = \"flex\";\r\n  let lastNameContainer = document.querySelector(\".Last\");\r\n  let f_D = document.querySelector(\".FDisplay\");\r\n\r\n  const firstNameDisplay = document.getElementById(\"userFirstName\");\r\n  const lastNameDisplay = document.getElementById(\"Lastname\");\r\n\r\n  const storedFirstName = localStorage.getItem(\"FirstName\");\r\n  const storedLastname = localStorage.getItem(\"LastName\");\r\n\r\n  if (storedFirstName && storedLastname) {\r\n   firstNameDisplay.textContent = `${storedFirstName}`;\r\n    lastNameDisplay.textContent = `${storedLastname}`;\r\n\r\n    // Apply styles separately\r\n    lastNameDisplay.style.fontWeight = \"bold\";\r\n    firstNameDisplay.style.fontWeight = \"lighter\";\r\n    lastNameDisplay.style.position = \"relative\";\r\n    lastNameDisplay.style.left = \"5px\";\r\n  };\r\n  pageTitle.textContent = `${storedLastname}'s Dashboard || C-Health`\r\n});\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n        let genderUser = document.getElementById(\"userGender\");\r\n      const storeGender = localStorage.getItem(\"gender\");\r\n        if (storeGender) {\r\n            genderUser.textContent = `${storeGender}`;\r\n        }\r\n});\r\n\r\n// Prevent Image Dragging\r\ndocument.querySelectorAll(\"img\").forEach((img) => {\r\n  img.addEventListener(\"mousedown\", (event) => {\r\n    event.preventDefault();\r\n  });\r\n  img.addEventListener(\"contextmenu\", (event) => {\r\n    event.preventDefault()\r\n  })\r\n});\r\n\r\n// Append an active border style to the Home Page of dashboard Desktop\r\nlet homeActive = document.querySelector(\".home\");\r\nconst homeText = document.getElementById(\"HomeText\");\r\nconst addActiveLink = () => {\r\n  if (homeActive) {\r\n     homeActive.classList.add(\"active_Nav\");\r\n    //  console.log(homeText)\r\n    homeText.style.display = \"block\";\r\n    homeText.style.fontWeight = \"bold\"\r\n  }else{\r\n    homeActive.classList.remove(\"active_Nav\");\r\n  }\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", addActiveLink);\r\n\r\n// Append an active border style to the Home Page of dashboard Mobile\r\nlet divHome_Mobile = document.getElementById(\"homeDiv\");\r\nlet textHome_Mobile = document.getElementById(\"homeTxtMobile\");\r\nconst appendMobileActive = () => {\r\n  if (divHome_Mobile) {\r\n    divHome_Mobile.classList.add(\"appendStyle\");\r\n    textHome_Mobile.style.fontWeight = \"bold\"\r\n  }else{\r\n    divHome_Mobile.classList.remove(\"appendStyle\");\r\n  }\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", appendMobileActive)\r\n\r\n\r\nlet feeds = document.querySelector(\".feeds\")\r\nlet mainFeeds = document.querySelector(\".main_Feeds\");\r\n\r\nconst retrieveFeeds = () => {\r\n  setTimeout(() => {\r\n    feeds.classList.add(\"feedLoad\");\r\n    feeds.style.display = \"none\";\r\n    mainFeeds.style.display = \"block\";\r\n  }, 2000)\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", retrieveFeeds);\r\n\r\n// Run a loop to show other available feeds\r\nlet moreFeeds = document.querySelectorAll(\".moreFeeds\");\r\n\r\nconst viewMoreButton = document.querySelector(\".viewMore\");\r\nmoreFeeds.forEach((feeds) => {\r\n  viewMoreButton.addEventListener(\"click\", () => {\r\n    feeds.style.contentVisibility = \"visible\"\r\n  })\r\n})\r\n// Load the Appointment page\r\n// const preview_Appointment = () => {\r\n//   window.location.href = \"Appointment.html\";\r\n// };\n\n//# sourceURL=webpack://capital_heath_org/./public/assets/js/Dashboard.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/Dashboard.js"]();
/******/ 	
/******/ })()
;