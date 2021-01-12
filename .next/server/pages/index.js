module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Assets/Logo.svg":
/*!*******************************!*\
  !*** ./pages/Assets/Logo.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M334 292v31h613v-62H334v31zM334.2 391.2l.3 31.3 306.3.3 306.2.2v-63H334l.2 31.2zM334 491.5V523h613v-63H334v31.5zM334.7 559.7c-.4.3-.7 14.5-.7 31.5V622h613l-.2-31.3-.3-31.2-305.6-.3c-168.1-.1-305.9.1-306.2.5zM334 690v31h613v-62H334v31zM334 789.5V821l306.3-.2 306.2-.3.3-31.3.2-31.2H334v31.5zM334.7 857.7c-.4.3-.7 14.5-.7 31.5V920h613l-.2-31.3-.3-31.2-305.6-.3c-168.1-.1-305.9.1-306.2.5zM518.4 947c-9.8 2.1-18.7 8.3-24.5 17.2-5.4 8.5-7.2 16.2-6.7 29.4.3 9.8.7 11.6 3.7 18 4.1 8.8 11.3 16.3 19.6 20.1 4.9 2.2 7.8 2.8 15.5 3.1 11 .5 15.4-.5 23-5 6.9-4.2 12.5-11.5 15-19.7 3.2-10 3.4-9.7-7.1-9.1l-9.2.5-1.2 4.1c-2.7 9.1-8.8 13.6-18.7 13.5-15.5 0-25.2-15.5-21.8-34.9 2.3-13.3 9-20.8 19.6-21.9 9.3-1 19.1 4.8 21 12.2.6 2.4.9 2.5 9.5 2.5 10.3 0 10.4 0 6.7-9.7-2.9-7.8-10.3-15.2-18.3-18.3-6.7-2.5-19.3-3.5-26.1-2zM603 947.5c-14.9 4.2-24.8 15.4-28.6 32.2-3 13.5-.6 27.3 6.7 38.2 7.6 11.4 19 17.1 34.1 17.1 16.6 0 28.2-6.5 36.1-20.1 4.2-7.2 6-16.1 5.4-26.9-1-19.5-9.9-33.1-25.5-39.1-7.5-2.8-20.7-3.5-28.2-1.4zm21.6 16.4c9.1 4.2 13.8 14.4 13.2 28.9-.6 16.6-7.6 25.3-20.8 26-8.9.5-13.1-1-17.8-6.4-5-5.6-6.7-11.6-6.6-22.9.1-17.9 8-27.4 22.9-27.4 2.8 0 6.8.8 9.1 1.8zM899.8 947c-6.4 1.6-15.3 6.7-19 10.8-9.1 10-12.2 19.5-11.7 35.6.4 10.6.6 11.6 4.1 18.7 4.5 9.2 10.2 15 18.6 19.1 5.6 2.8 7.8 3.3 15.8 3.6 8.2.4 9.8.2 14.6-2.1 2.9-1.3 6.7-3.9 8.5-5.6l3.2-3.2.8 4.3.9 4.3 6.2.3 6.2.3V987h-36v14h9.5c5.2 0 9.5.4 9.5.9 0 2.5-3.4 9.9-5.7 12.3-7.5 7.8-24.9 6.5-31.7-2.5-5.2-6.8-7.4-17.7-5.6-27.7 2.6-14.6 10.4-22 22.9-22 2.3 0 5.6.6 7.4 1.4 3.8 1.5 8.4 6.6 9.3 10.2.6 2.3.9 2.4 9.9 2.4h9.3l-.9-4.1c-2.2-9.7-8.8-17.5-18.7-22.2-5.2-2.4-7.9-3-15-3.3-4.8-.2-10.4.1-12.4.6zM359.1 964.7c-3.6 9.3-7.4 19.5-8.7 22.8-1.2 3.3-5.6 14.9-9.7 25.7l-7.5 19.8h19.5l1.3-4.3c.7-2.3 2.1-6.6 3.2-9.5l1.9-5.2h31.5l1.3 3.7c.7 2.1 2.2 6.4 3.3 9.5l2.1 5.8h19.4l-13.4-35.8c-7.3-19.6-14.5-38.7-15.9-42.5l-2.6-6.7H365.5l-6.4 16.7zm21.4 19.9c2.5 7.3 4.5 13.7 4.5 14.3 0 .7-3.5 1.1-10.6 1.1-9.7 0-10.6-.1-9.9-1.8.4-.9 2.8-7.7 5.3-14.9 2.6-7.3 5-12.9 5.4-12.5.4.4 2.8 6.6 5.3 13.8zM422 990.5v42.5h61.1l-.3-7.8-.3-7.7-19-.2c-10.4-.1-19.8-.3-20.7-.3-1.7 0-1.8-2.3-1.8-34.5V948h-19v42.5zM667 990.4v42.6h22.3c24.7 0 28.8-.7 37-6 11.8-7.9 17.8-24.6 15.6-43.6-1.7-15.4-9-26.4-21.2-32-6.2-2.9-6.3-2.9-29.9-3.2l-23.8-.4v42.6zm44.7-24.1c8.1 4.3 11.7 12.3 11.6 25.7 0 9.4-1.7 14.7-6.1 19.4-4.3 4.6-8 5.6-20.2 5.6h-11v-53.2l11.3.4c8.1.3 12.1.9 14.4 2.1zM753.5 949c-.3.5-.5 19.6-.4 42.5l.2 41.5H772v-85h-8.9c-5 0-9.2.4-9.6 1zM786 990.5v42.5h18l.2-28.1.3-28.1 7.9 12.8c4.4 7.1 12.2 19.8 17.4 28.1l9.5 15.3H858v-85h-17l-.2 28.6-.3 28.6-17.6-28.4-17.6-28.3-9.7-.3-9.6-.3v42.6z"
});

function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1706.667,
    height: 1706.667,
    viewBox: "0 0 1280 1280"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLogo);

/***/ }),

/***/ "./pages/Components/AboutUs.tsx":
/*!**************************************!*\
  !*** ./pages/Components/AboutUs.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\website-1\\pages\\Components\\AboutUs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AboutUs = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, {
    minDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center',
      margin: '70px auto 50px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, "About Us"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    align: "center",
    style: {
      padding: '0 110px 0 110px',
      margin: '0 0 70px 0'
    },
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Nulla sit amet sapien vitae mauris tempor ultricies nec finibus sapien. Nunc id nisi in velit vulputate finibus. Aenean bibendum magna sit amet pellentesque rhoncus. Vestibulum et finibus arcu, in posuere nibh. Praesent sagittis lectus ac enim porttitor maximus. Pellentesque varius, nulla at suscipit ornare, ipsum erat facilisis leo, sit amet congue diam sapien et nulla. In ut turpis non arcu maximus congue. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus."), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, {
    maxDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: "140%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center',
      margin: '70px auto 50px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "About Us"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    align: "center",
    style: {
      padding: '0 110px 0 110px',
      margin: '0 0 70px 0'
    },
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Nulla sit amet sapien vitae mauris tempor ultricies nec finibus sapien. Nunc id nisi in velit vulputate finibus. Aenean bibendum magna sit amet pellentesque rhoncus. Vestibulum et finibus arcu, in posuere nibh. Praesent sagittis lectus ac enim porttitor maximus. Pellentesque varius, nulla at suscipit ornare, ipsum erat facilisis leo, sit amet congue diam sapien et nulla. In ut turpis non arcu maximus congue. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus."), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./pages/Components/Floating.tsx":
/*!***************************************!*\
  !*** ./pages/Components/Floating.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\website-1\\pages\\Components\\Floating.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Floating = () => {
  const {
    0: Ans,
    1: setAns
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, {
    minDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    _hover: {
      textColor: 'whitesmoke'
    },
    boxShadow: "lg",
    bgColor: "#e94560",
    style: {
      opacity: Ans,
      position: 'fixed',
      bottom: '30px',
      right: '30px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Apply Now")), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_2___default.a, {
    maxDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    _hover: {
      color: "whitesmoke",
      textColor: "whitesmoke"
    },
    bgColor: "#e94560",
    color: "black",
    style: {
      bottom: "0",
      width: "100%",
      height: "80px",
      position: "fixed"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    align: "center",
    style: {
      margin: "25px auto",
      fontSize: "25px"
    },
    fontWeight: "500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Apply To Our Monthly Challenge")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Floating);

/***/ }),

/***/ "./pages/Components/Footer.tsx":
/*!*************************************!*\
  !*** ./pages/Components/Footer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ "react-icons/si");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\website-1\\pages\\Components\\Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_4___default.a, {
    minDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("footer", {
    style: {
      width: '100%',
      padding: '20px',
      position: 'relative',
      backgroundColor: 'black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    align: "center",
    fontSize: "xl",
    color: "whitesmoke",
    style: {
      margin: '10px 0 20px 2px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Contact Us"), __jsx("div", {
    style: {
      display: 'flex',
      position: 'relative',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      margin: '0px auto',
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/thealcodingclub/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: '#bc2a8d',
      textColor: 'whitesmoke'
    },
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 47
      }
    }),
    to: "https://www.instagram.com/thealcodingclub",
    style: {
      display: 'flex',
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "Instagram")), __jsx("a", {
    href: "https://www.linkedin.com/company/the-alcoding-club/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: '#0e76a8',
      textColor: 'whitesmoke'
    },
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
      style: {
        margin: '0 3px 0 3px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 41
      }
    }),
    style: {
      display: 'flex',
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "LinkedIn")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: '#DB4437',
      textColor: 'whitesmoke'
    },
    leftIcon: __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiGmail"], {
      style: {
        margin: '0 5px 0 5px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 37
      }
    }),
    style: {
      display: 'flex',
      margin: '10px',
      padding: '0 27px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Mail"))))), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("footer", {
    style: {
      width: '140%',
      padding: '20px 20px 90px 20px',
      position: 'relative',
      backgroundColor: 'black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    align: "center",
    fontSize: "xl",
    color: "whitesmoke",
    style: {
      margin: '10px 0 20px 2px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, "Contact Us"), __jsx("div", {
    style: {
      display: 'flex',
      position: 'relative',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      margin: '0px auto',
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/thealcodingclub/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: '#bc2a8d',
      textColor: 'whitesmoke'
    },
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 47
      }
    }),
    to: "https://www.instagram.com/thealcodingclub",
    style: {
      display: 'flex',
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "Instagram")), __jsx("a", {
    href: "https://www.linkedin.com/company/the-alcoding-club/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: '#0e76a8',
      textColor: 'whitesmoke'
    },
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
      style: {
        margin: '0 3px 0 3px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 41
      }
    }),
    style: {
      display: 'flex',
      margin: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "LinkedIn")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: '#DB4437',
      textColor: 'whitesmoke'
    },
    leftIcon: __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiGmail"], {
      style: {
        margin: '0 5px 0 5px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 37
      }
    }),
    style: {
      display: 'flex',
      margin: '10px',
      padding: '0 27px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, "Mail"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/Components/Header.tsx":
/*!*************************************!*\
  !*** ./pages/Components/Header.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./pages/Components/Nav.tsx");
/* harmony import */ var _Assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/Logo.svg */ "./pages/Assets/Logo.svg");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\website-1\\pages\\Components\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_4___default.a, {
    minDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' + ')',
      backgroundSize: '1550px 750px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx(_Assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      height: '200px',
      width: '200px',
      margin: '0 auto 0',
      padding: '10px 0 0 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center',
      margin: '10px 0 0 0',
      fontSize: '65px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "The Alcoding Club"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    _hover: {
      bg: '#0f3460',
      textColor: 'whitesmoke'
    },
    bgColor: "#e94560",
    style: {
      margin: '30px auto 90px',
      display: 'block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Apply To Our Monthly Challenge"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }))), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxDeviceWidth: 1224,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' + ')',
      backgroundSize: '1550px 750px',
      width: '140%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_Assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      height: '200px',
      width: '200px',
      margin: '0 auto 0',
      padding: '10px 0 0 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center',
      margin: '10px 0 0 0',
      fontSize: '65px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "The Alcoding Club"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    _hover: {
      bg: '#0f3460',
      textColor: 'whitesmoke'
    },
    bgColor: "#e94560",
    style: {
      margin: '30px auto 90px',
      display: 'block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "Apply To Our Monthly Challenge"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/Components/Nav.tsx":
/*!**********************************!*\
  !*** ./pages/Components/Nav.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\website-1\\pages\\Components\\Nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Nav = () => {
  return __jsx("div", {
    style: {
      display: "flex",
      padding: "30px",
      width: "100%",
      justifyContent: "space-around"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    _hover: {
      color: "#e94560"
    },
    color: "whitesmoke",
    style: {
      fontSize: "20px",
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Register"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    _hover: {
      color: "#e94560"
    },
    color: "whitesmoke",
    style: {
      fontSize: "20px",
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Editorials"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    _hover: {
      color: "#e94560"
    },
    color: "whitesmoke",
    style: {
      fontSize: "20px",
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Contact Us"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Header */ "./pages/Components/Header.tsx");
/* harmony import */ var _Components_AboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/AboutUs */ "./pages/Components/AboutUs.tsx");
/* harmony import */ var _Components_Floating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Floating */ "./pages/Components/Floating.tsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Footer */ "./pages/Components/Footer.tsx");
var _jsxFileName = "D:\\website-1\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Landing = () => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ChakraProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_Components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx(_Components_AboutUs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx(_Components_Floating__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXNzZXRzL0xvZ28uc3ZnIiwid2VicGFjazovLy8uL3BhZ2VzL0NvbXBvbmVudHMvQWJvdXRVcy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29tcG9uZW50cy9GbG9hdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Db21wb25lbnRzL05hdi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvc2lcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlXCIiXSwibmFtZXMiOlsiQWJvdXRVcyIsInRleHRBbGlnbiIsIm1hcmdpbiIsInBhZGRpbmciLCJ3aWR0aCIsIkZsb2F0aW5nIiwiQW5zIiwic2V0QW5zIiwidXNlU3RhdGUiLCJ0ZXh0Q29sb3IiLCJvcGFjaXR5IiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImNvbG9yIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJGb290ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYmciLCJIZWFkZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIk5hdiIsImp1c3RpZnlDb250ZW50IiwiZm9udFdlaWdodCIsIkxhbmRpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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LEdBQUcsTUFBTTtBQUNsQixTQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLEVBRVEsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlIsRUFHUSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixFQUlRLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpSLENBREo7QUFRSCxDQVREOztBQVdlQSxzRUFBZixFOzs7Ozs7Ozs7OztBQ25CQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMzM0IDI5MnYzMWg2MTN2LTYySDMzNHYzMXpNMzM0LjIgMzkxLjJsLjMgMzEuMyAzMDYuMy4zIDMwNi4yLjJ2LTYzSDMzNGwuMiAzMS4yek0zMzQgNDkxLjVWNTIzaDYxM3YtNjNIMzM0djMxLjV6TTMzNC43IDU1OS43Yy0uNC4zLS43IDE0LjUtLjcgMzEuNVY2MjJoNjEzbC0uMi0zMS4zLS4zLTMxLjItMzA1LjYtLjNjLTE2OC4xLS4xLTMwNS45LjEtMzA2LjIuNXpNMzM0IDY5MHYzMWg2MTN2LTYySDMzNHYzMXpNMzM0IDc4OS41VjgyMWwzMDYuMy0uMiAzMDYuMi0uMy4zLTMxLjMuMi0zMS4ySDMzNHYzMS41ek0zMzQuNyA4NTcuN2MtLjQuMy0uNyAxNC41LS43IDMxLjVWOTIwaDYxM2wtLjItMzEuMy0uMy0zMS4yLTMwNS42LS4zYy0xNjguMS0uMS0zMDUuOS4xLTMwNi4yLjV6TTUxOC40IDk0N2MtOS44IDIuMS0xOC43IDguMy0yNC41IDE3LjItNS40IDguNS03LjIgMTYuMi02LjcgMjkuNC4zIDkuOC43IDExLjYgMy43IDE4IDQuMSA4LjggMTEuMyAxNi4zIDE5LjYgMjAuMSA0LjkgMi4yIDcuOCAyLjggMTUuNSAzLjEgMTEgLjUgMTUuNC0uNSAyMy01IDYuOS00LjIgMTIuNS0xMS41IDE1LTE5LjcgMy4yLTEwIDMuNC05LjctNy4xLTkuMWwtOS4yLjUtMS4yIDQuMWMtMi43IDkuMS04LjggMTMuNi0xOC43IDEzLjUtMTUuNSAwLTI1LjItMTUuNS0yMS44LTM0LjkgMi4zLTEzLjMgOS0yMC44IDE5LjYtMjEuOSA5LjMtMSAxOS4xIDQuOCAyMSAxMi4yLjYgMi40LjkgMi41IDkuNSAyLjUgMTAuMyAwIDEwLjQgMCA2LjctOS43LTIuOS03LjgtMTAuMy0xNS4yLTE4LjMtMTguMy02LjctMi41LTE5LjMtMy41LTI2LjEtMnpNNjAzIDk0Ny41Yy0xNC45IDQuMi0yNC44IDE1LjQtMjguNiAzMi4yLTMgMTMuNS0uNiAyNy4zIDYuNyAzOC4yIDcuNiAxMS40IDE5IDE3LjEgMzQuMSAxNy4xIDE2LjYgMCAyOC4yLTYuNSAzNi4xLTIwLjEgNC4yLTcuMiA2LTE2LjEgNS40LTI2LjktMS0xOS41LTkuOS0zMy4xLTI1LjUtMzkuMS03LjUtMi44LTIwLjctMy41LTI4LjItMS40em0yMS42IDE2LjRjOS4xIDQuMiAxMy44IDE0LjQgMTMuMiAyOC45LS42IDE2LjYtNy42IDI1LjMtMjAuOCAyNi04LjkuNS0xMy4xLTEtMTcuOC02LjQtNS01LjYtNi43LTExLjYtNi42LTIyLjkuMS0xNy45IDgtMjcuNCAyMi45LTI3LjQgMi44IDAgNi44LjggOS4xIDEuOHpNODk5LjggOTQ3Yy02LjQgMS42LTE1LjMgNi43LTE5IDEwLjgtOS4xIDEwLTEyLjIgMTkuNS0xMS43IDM1LjYuNCAxMC42LjYgMTEuNiA0LjEgMTguNyA0LjUgOS4yIDEwLjIgMTUgMTguNiAxOS4xIDUuNiAyLjggNy44IDMuMyAxNS44IDMuNiA4LjIuNCA5LjguMiAxNC42LTIuMSAyLjktMS4zIDYuNy0zLjkgOC41LTUuNmwzLjItMy4yLjggNC4zLjkgNC4zIDYuMi4zIDYuMi4zVjk4N2gtMzZ2MTRoOS41YzUuMiAwIDkuNS40IDkuNS45IDAgMi41LTMuNCA5LjktNS43IDEyLjMtNy41IDcuOC0yNC45IDYuNS0zMS43LTIuNS01LjItNi44LTcuNC0xNy43LTUuNi0yNy43IDIuNi0xNC42IDEwLjQtMjIgMjIuOS0yMiAyLjMgMCA1LjYuNiA3LjQgMS40IDMuOCAxLjUgOC40IDYuNiA5LjMgMTAuMi42IDIuMy45IDIuNCA5LjkgMi40aDkuM2wtLjktNC4xYy0yLjItOS43LTguOC0xNy41LTE4LjctMjIuMi01LjItMi40LTcuOS0zLTE1LTMuMy00LjgtLjItMTAuNC4xLTEyLjQuNnpNMzU5LjEgOTY0LjdjLTMuNiA5LjMtNy40IDE5LjUtOC43IDIyLjgtMS4yIDMuMy01LjYgMTQuOS05LjcgMjUuN2wtNy41IDE5LjhoMTkuNWwxLjMtNC4zYy43LTIuMyAyLjEtNi42IDMuMi05LjVsMS45LTUuMmgzMS41bDEuMyAzLjdjLjcgMi4xIDIuMiA2LjQgMy4zIDkuNWwyLjEgNS44aDE5LjRsLTEzLjQtMzUuOGMtNy4zLTE5LjYtMTQuNS0zOC43LTE1LjktNDIuNWwtMi42LTYuN0gzNjUuNWwtNi40IDE2Ljd6bTIxLjQgMTkuOWMyLjUgNy4zIDQuNSAxMy43IDQuNSAxNC4zIDAgLjctMy41IDEuMS0xMC42IDEuMS05LjcgMC0xMC42LS4xLTkuOS0xLjguNC0uOSAyLjgtNy43IDUuMy0xNC45IDIuNi03LjMgNS0xMi45IDUuNC0xMi41LjQuNCAyLjggNi42IDUuMyAxMy44ek00MjIgOTkwLjV2NDIuNWg2MS4xbC0uMy03LjgtLjMtNy43LTE5LS4yYy0xMC40LS4xLTE5LjgtLjMtMjAuNy0uMy0xLjcgMC0xLjgtMi4zLTEuOC0zNC41Vjk0OGgtMTl2NDIuNXpNNjY3IDk5MC40djQyLjZoMjIuM2MyNC43IDAgMjguOC0uNyAzNy02IDExLjgtNy45IDE3LjgtMjQuNiAxNS42LTQzLjYtMS43LTE1LjQtOS0yNi40LTIxLjItMzItNi4yLTIuOS02LjMtMi45LTI5LjktMy4ybC0yMy44LS40djQyLjZ6bTQ0LjctMjQuMWM4LjEgNC4zIDExLjcgMTIuMyAxMS42IDI1LjcgMCA5LjQtMS43IDE0LjctNi4xIDE5LjQtNC4zIDQuNi04IDUuNi0yMC4yIDUuNmgtMTF2LTUzLjJsMTEuMy40YzguMS4zIDEyLjEuOSAxNC40IDIuMXpNNzUzLjUgOTQ5Yy0uMy41LS41IDE5LjYtLjQgNDIuNWwuMiA0MS41SDc3MnYtODVoLTguOWMtNSAwLTkuMi40LTkuNiAxek03ODYgOTkwLjV2NDIuNWgxOGwuMi0yOC4xLjMtMjguMSA3LjkgMTIuOGM0LjQgNy4xIDEyLjIgMTkuOCAxNy40IDI4LjFsOS41IDE1LjNIODU4di04NWgtMTdsLS4yIDI4LjYtLjMgMjguNi0xNy42LTI4LjQtMTcuNi0yOC4zLTkuNy0uMy05LjYtLjN2NDIuNnpcIlxufSk7XG5cbmZ1bmN0aW9uIFN2Z0xvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiAxNzA2LjY2NyxcbiAgICBoZWlnaHQ6IDE3MDYuNjY3LFxuICAgIHZpZXdCb3g6IFwiMCAwIDEyODAgMTI4MFwiXG4gIH0sIHByb3BzKSwgX3JlZik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0xvZ287IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJ1dHRvbiwgVGV4dCwgSGVhZGluZywgRGl2aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXHJcbmNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbkRldmljZVdpZHRoPXsxMjI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc3MHB4IGF1dG8gNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxMTBweCAwIDExMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCA3MHB4IDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bGxhIHNpdCBhbWV0IHNhcGllbiB2aXRhZSBtYXVyaXMgdGVtcG9yIHVsdHJpY2llcyBuZWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaWJ1cyBzYXBpZW4uIE51bmMgaWQgbmlzaSBpbiB2ZWxpdCB2dWxwdXRhdGUgZmluaWJ1cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWVuZWFuIGJpYmVuZHVtIG1hZ25hIHNpdCBhbWV0IHBlbGxlbnRlc3F1ZSByaG9uY3VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWZXN0aWJ1bHVtIGV0IGZpbmlidXMgYXJjdSwgaW4gcG9zdWVyZSBuaWJoLiBQcmFlc2VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWdpdHRpcyBsZWN0dXMgYWMgZW5pbSBwb3J0dGl0b3IgbWF4aW11cy4gUGVsbGVudGVzcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcml1cywgbnVsbGEgYXQgc3VzY2lwaXQgb3JuYXJlLCBpcHN1bSBlcmF0IGZhY2lsaXNpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW8sIHNpdCBhbWV0IGNvbmd1ZSBkaWFtIHNhcGllbiBldCBudWxsYS4gSW4gdXQgdHVycGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbiBhcmN1IG1heGltdXMgY29uZ3VlLiBOdWxsYSBmYWNpbGlzaS4gSW50ZXJkdW0gZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWF4RGV2aWNlV2lkdGg9ezEyMjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTQwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc3MHB4IGF1dG8gNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxMTBweCAwIDExMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCA3MHB4IDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bGxhIHNpdCBhbWV0IHNhcGllbiB2aXRhZSBtYXVyaXMgdGVtcG9yIHVsdHJpY2llcyBuZWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaWJ1cyBzYXBpZW4uIE51bmMgaWQgbmlzaSBpbiB2ZWxpdCB2dWxwdXRhdGUgZmluaWJ1cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWVuZWFuIGJpYmVuZHVtIG1hZ25hIHNpdCBhbWV0IHBlbGxlbnRlc3F1ZSByaG9uY3VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWZXN0aWJ1bHVtIGV0IGZpbmlidXMgYXJjdSwgaW4gcG9zdWVyZSBuaWJoLiBQcmFlc2VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWdpdHRpcyBsZWN0dXMgYWMgZW5pbSBwb3J0dGl0b3IgbWF4aW11cy4gUGVsbGVudGVzcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcml1cywgbnVsbGEgYXQgc3VzY2lwaXQgb3JuYXJlLCBpcHN1bSBlcmF0IGZhY2lsaXNpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW8sIHNpdCBhbWV0IGNvbmd1ZSBkaWFtIHNhcGllbiBldCBudWxsYS4gSW4gdXQgdHVycGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbiBhcmN1IG1heGltdXMgY29uZ3VlLiBOdWxsYSBmYWNpbGlzaS4gSW50ZXJkdW0gZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJ1dHRvbiwgSGVhZGluZywgRGl2aWRlciwgTGluayxCb3gsVGV4dH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSdcclxuY29uc3QgRmxvYXRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbQW5zLCBzZXRBbnNdID0gdXNlU3RhdGUoJzEnKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNZWRpYVF1ZXJ5IG1pbkRldmljZVdpZHRoPXsxMjI0fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyB0ZXh0Q29sb3I6ICd3aGl0ZXNtb2tlJyB9fVxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93PVwibGdcIlxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNlOTQ1NjBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBBbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFwcGx5IE5vd1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgPE1lZGlhUXVlcnkgbWF4RGV2aWNlV2lkdGg9ezEyMjR9PlxyXG4gICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgPEJveCBfaG92ZXI9e3tjb2xvcjpcIndoaXRlc21va2VcIix0ZXh0Q29sb3I6XCJ3aGl0ZXNtb2tlXCJ9fSBiZ0NvbG9yPVwiI2U5NDU2MFwiIGNvbG9yPVwiYmxhY2tcIiBzdHlsZT17e2JvdHRvbTpcIjBcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCI4MHB4XCIscG9zaXRpb246XCJmaXhlZFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7bWFyZ2luOlwiMjVweCBhdXRvXCIsZm9udFNpemU6XCIyNXB4XCJ9fSBmb250V2VpZ2h0PVwiNTAwXCI+QXBwbHkgVG8gT3VyIE1vbnRobHkgQ2hhbGxlbmdlPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBIZWFkaW5nLCBEaXZpZGVyLCBIU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgRmFJbnN0YWdyYW0sIEZhTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgU2lHbWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL3NpJ1xyXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbkRldmljZVdpZHRoPXsxMjI0fT5cclxuICAgICAgICAgICAgICAgIDxmb290ZXJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlc21va2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMjBweCAycHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMHB4IGF1dG8nLCBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGVhbGNvZGluZ2NsdWIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiAnI2JjMmE4ZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZXNtb2tlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEljb249ezxGYUluc3RhZ3JhbSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZWFsY29kaW5nY2x1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhZ3JhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3RoZS1hbGNvZGluZy1jbHViL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZzogJyMwZTc2YTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGVzbW9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJY29uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUxpbmtlZGluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCAzcHggMCAzcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmtlZEluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiAnI0RCNDQzNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ3doaXRlc21va2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lHbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCA1cHggMCA1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDI3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWF4RGV2aWNlV2lkdGg9ezEyMjR9PlxyXG4gICAgICAgICAgICAgICAgPGZvb3RlclxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTQwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4IDIwcHggOTBweCAyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVzbW9rZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4IDJweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwcHggYXV0bycsIGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZWFsY29kaW5nY2x1Yi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6ICcjYmMyYThkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ3doaXRlc21va2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0SWNvbj17PEZhSW5zdGFncmFtIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlYWxjb2RpbmdjbHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvdGhlLWFsY29kaW5nLWNsdWIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiAnIzBlNzZhOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZXNtb2tlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhTGlua2VkaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwIDNweCAwIDNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlua2VkSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6ICcjREI0NDM3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGVzbW9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0SWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaUdtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwIDVweCAwIDVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMjdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBIZWFkaW5nLCBEaXZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdidcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vQXNzZXRzL0xvZ28uc3ZnJ1xyXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbkRldmljZVdpZHRoPXsxMjI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXJsKCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ5ODgwMTgxLTU2YTQ0Y2Y0YTlhNT9peGlkPU1Yd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHclM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxNTUwcHggNzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvIDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMCAwIDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxMHB4IDAgMCAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnNjVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgQWxjb2RpbmcgQ2x1YlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogJyMwZjM0NjAnLCB0ZXh0Q29sb3I6ICd3aGl0ZXNtb2tlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2U5NDU2MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzMwcHggYXV0byA5MHB4JywgZGlzcGxheTogJ2Jsb2NrJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbHkgVG8gT3VyIE1vbnRobHkgQ2hhbGxlbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxyXG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtYXhEZXZpY2VXaWR0aD17MTIyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCgnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0OTg4MDE4MS01NmE0NGNmNGE5YTU/aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnMTU1MHB4IDc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNDAlJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0byAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDAgMCAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCAwIDAgMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzY1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEFsY29kaW5nIENsdWJcclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYmc6ICcjMGYzNDYwJywgdGV4dENvbG9yOiAnd2hpdGVzbW9rZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNlOTQ1NjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICczMHB4IGF1dG8gOTBweCcsIGRpc3BsYXk6ICdibG9jaycgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcGx5IFRvIE91ciBNb250aGx5IENoYWxsZW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsQnV0dG9uLCBIZWFkaW5nLERpdmlkZXIsTGluayxUZXh0fSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLHBhZGRpbmc6XCIzMHB4XCIsd2lkdGg6XCIxMDAlXCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICA8TGluayBfaG92ZXI9e3tjb2xvcjpcIiNlOTQ1NjBcIn19IGNvbG9yPVwid2hpdGVzbW9rZVwiIHN0eWxlPXt7Zm9udFNpemU6XCIyMHB4XCIsZm9udFdlaWdodDpcImJvbGRcIn19PlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBfaG92ZXI9e3tjb2xvcjpcIiNlOTQ1NjBcIn19IGNvbG9yPVwid2hpdGVzbW9rZVwiIHN0eWxlPXt7Zm9udFNpemU6XCIyMHB4XCIsZm9udFdlaWdodDpcImJvbGRcIn19PkVkaXRvcmlhbHM8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIF9ob3Zlcj17e2NvbG9yOlwiI2U5NDU2MFwifX0gY29sb3I9XCJ3aGl0ZXNtb2tlXCIgc3R5bGU9e3tmb250U2l6ZTpcIjIwcHhcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgQWJvdXRVcyBmcm9tICcuL0NvbXBvbmVudHMvQWJvdXRVcydcclxuaW1wb3J0IEZsb2F0aW5nIGZyb20gJy4vQ29tcG9uZW50cy9GbG9hdGluZydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xyXG5cclxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8QWJvdXRVcyAvPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nIC8+XHJcbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3NpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==