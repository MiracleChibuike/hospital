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

/***/ "./public/assets/js/Departments.js"
/*!*****************************************!*\
  !*** ./public/assets/js/Departments.js ***!
  \*****************************************/
() {

eval("{\r\n\r\n // Prevent Image dragging\r\n\r\n    document.querySelectorAll(\"img\").forEach((img) => {\r\n      img.addEventListener(\"mousedown\", function (event) {\r\n        event.preventDefault();\r\n      });\r\n      img.addEventListener(\"contextmenu\", function (event) {\r\n        event.preventDefault();\r\n      });\r\n    });\r\n\r\n// Validate departmenrts buttons to pop out corresponding container\r\n// Defining containers to hold the departments div\r\nvar Cardiology_Dept,\r\n  Neurology_Dept,\r\n  Diagnostics_Dept,\r\n  Dental_Dept,\r\n  Opthalmalogy_Dept,\r\n  Emergency_Dept,\r\n  Oncology_Dept;\r\n\r\nCardiology_Dept = document.getElementById(\"Cardiology_target\");\r\nNeurology_Dept = document.getElementById(\"Neurology_target\");\r\nDiagnostics_Dept = document.getElementById(\"Diagnostics_target\");\r\nDental_Dept = document.getElementById(\"Dental_target\");\r\nOpthalmalogy_Dept = document.getElementById(\"Ophthalmology_target\");\r\nEmergency_Dept = document.getElementById(\"Emergency_target\");\r\nOncology_Dept = document.getElementById(\"Oncology_target\");\r\n\r\nlet btnDepartments = document.querySelectorAll(\".btn_dept\");\r\nlet departments = document.querySelectorAll(\".dept\");\r\n\r\n// optional default\r\nbtnDepartments[0]?.classList.add(\"active\");\r\ndepartments[0]?.classList.add(\"active\");\r\n\r\nbtnDepartments.forEach((btn) => {\r\n  btn.addEventListener(\"click\", () => {\r\n    const dept = btn.dataset.dept;\r\n\r\n    // REMOVE active from ALL buttons\r\n    btnDepartments.forEach((b) => b.classList.remove(\"active\"));\r\n\r\n    // REMOVE active from ALL sections\r\n    departments.forEach((section) => section.classList.remove(\"active\"));\r\n\r\n    // ADD active to clicked button\r\n    btn.classList.add(\"active\");\r\n\r\n    // ADD active to matching section\r\n    document\r\n      .querySelector(`.dept[data-dept=\"${dept}\"]`)\r\n      ?.classList.add(\"active\");\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://capital_heath_org/./public/assets/js/Departments.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/Departments.js"]();
/******/ 	
/******/ })()
;