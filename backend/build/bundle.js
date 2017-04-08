/*! require("source-map-support").install() */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("feathers");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = middlewares;

var _feathers = __webpack_require__(0);

var _feathers2 = _interopRequireDefault(_feathers);

var _feathersHooks = __webpack_require__(9);

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _feathersRest = __webpack_require__(10);

var _feathersRest2 = _interopRequireDefault(_feathersRest);

var _feathersSocketio = __webpack_require__(11);

var _feathersSocketio2 = _interopRequireDefault(_feathersSocketio);

var _feathersSync = __webpack_require__(12);

var _feathersSync2 = _interopRequireDefault(_feathersSync);

var _handler = __webpack_require__(8);

var _handler2 = _interopRequireDefault(_handler);

var _winston = __webpack_require__(14);

var _cors = __webpack_require__(7);

var _cors2 = _interopRequireDefault(_cors);

var _path = __webpack_require__(13);

var _path2 = _interopRequireDefault(_path);

var _cookieParser = __webpack_require__(6);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(5);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function middlewares() {
  this.use(_feathers2.default.static(_path2.default.join(__dirname, "public")));
  this.use((0, _cors2.default)());
  this.use(_bodyParser2.default.json());
  this.use(_bodyParser2.default.urlencoded({ extended: true }));
  this.use((0, _cookieParser2.default)());

  this.configure((0, _feathersHooks2.default)());
  this.configure((0, _feathersRest2.default)());
  this.configure((0, _feathersSocketio2.default)());
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = services;

var _debug = __webpack_require__(4);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function services() {
  this.configure(_debug2.default);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _feathers = __webpack_require__(0);

var _feathers2 = _interopRequireDefault(_feathers);

var _middleware = __webpack_require__(1);

var _middleware2 = _interopRequireDefault(_middleware);

var _services = __webpack_require__(2);

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _feathers2.default)();

app.configure(_middleware2.default);
app.configure(_services2.default);

console.log("info", process.env.NODE_ENV);

app.listen("3000");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = debug;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DebugService = function () {
  function DebugService() {
    _classCallCheck(this, DebugService);

    this.find = function () {
      return Promise.resolve({ node: "OK" });
    };
  }

  _createClass(DebugService, [{
    key: "setup",
    value: function setup(app) {
      this.app = app;
    }
  }]);

  return DebugService;
}();

function debug() {
  this.use("debug", new DebugService());
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("feathers-errors/handler");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("feathers-hooks");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("feathers-rest");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("feathers-socketio");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("feathers-sync");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map