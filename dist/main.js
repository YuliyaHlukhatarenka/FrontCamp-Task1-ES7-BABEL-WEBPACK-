/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/drawArticlesList.js":
/*!*********************************!*\
  !*** ./src/drawArticlesList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function drowArticlesList(list) {
  const fragment = document.createDocumentFragment();
  const table = document.createElement('table');
  list.map(item => {
    const row = document.createElement('tr');
    const columnImg = document.createElement('td');
    let img = document.createElement('img');
    img.style = 'top:10px;left:10px;width:200px;height:auto';
    img.src = item.urlToImage;
    columnImg.appendChild(img);
    row.appendChild(columnImg);
    const columnText = document.createElement('td');
    columnText.innerHTML = `<div><h3> ${item.title} </h3><p>Author: ${item.author}</p><p>Published: ${item.publishedAt}</p><p>${item.description}</p><a href=${item.url} target="_blank">more..</a></div>`;
    row.appendChild(columnText);
    table.appendChild(row);
  });
  fragment.appendChild(table);
  const div = document.createElement('div');
  div.className = 'news-list';
  div.style.width = '600px';
  div.appendChild(fragment);
  document.body.appendChild(div);
}

/* harmony default export */ __webpack_exports__["default"] = (drowArticlesList);

/***/ }),

/***/ "./src/getArticles.js":
/*!****************************!*\
  !*** ./src/getArticles.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
async function getArticles(id) {
  let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=e09036cd7e8d417db292088ad70ea084`);
  let news = await response.json();
  let articles = news.articles;
  return articles;
}

/* harmony default export */ __webpack_exports__["default"] = (getArticles);

/***/ }),

/***/ "./src/getChanels.js":
/*!***************************!*\
  !*** ./src/getChanels.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
async function getChanels() {
  let response = await fetch('https://newsapi.org/v2/sources?apiKey=e09036cd7e8d417db292088ad70ea084');
  let chanels = await response.json();
  let sources = chanels.sources;
  return sources;
}

/* harmony default export */ __webpack_exports__["default"] = (getChanels);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getChanels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getChanels */ "./src/getChanels.js");
/* harmony import */ var _showChanels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showChanels */ "./src/showChanels.js");


Object(_getChanels__WEBPACK_IMPORTED_MODULE_0__["default"])().then(response => Object(_showChanels__WEBPACK_IMPORTED_MODULE_1__["default"])(response));

/***/ }),

/***/ "./src/showChanels.js":
/*!****************************!*\
  !*** ./src/showChanels.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawArticlesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawArticlesList */ "./src/drawArticlesList.js");
/* harmony import */ var _getArticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getArticles */ "./src/getArticles.js");



function showChanels(items) {
  let i = 1;
  const fragment = document.createDocumentFragment();
  const noSelection = document.createElement('option');
  noSelection.value = 0;
  noSelection.innerHTML = 'Select a chanel';
  fragment.appendChild(noSelection);
  items.map(item => {
    const selectItem = document.createElement('option');
    selectItem.id = item.id;
    selectItem.value = i;
    i++;
    selectItem.innerHTML = item.name;
    fragment.appendChild(selectItem);
  });
  const input = document.createElement('div');
  input.className = 'chanels';
  input.style.width = '200px';
  const datalist = document.createElement('select');
  input.addEventListener('click', showChanelNews);
  datalist.appendChild(fragment);
  input.appendChild(datalist);
  document.body.appendChild(input);
}

function showChanelNews(e) {
  if (e.target.selectedIndex) {
    Object(_getArticles__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target[e.target.selectedIndex].id).then(response => Object(_drawArticlesList__WEBPACK_IMPORTED_MODULE_0__["default"])(response));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (showChanels);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map