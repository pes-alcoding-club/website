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
var _jsxFileName = "D:\\website-1\\pages\\Components\\AboutUs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AboutUs = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: "center",
      margin: "70px auto 50px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "About Us"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    align: "center",
    style: {
      padding: "0 110px 0 110px",
      margin: "0 0 70px 0"
    },
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Nulla sit amet sapien vitae mauris tempor ultricies nec finibus sapien. Nunc id nisi in velit vulputate finibus. Aenean bibendum magna sit amet pellentesque rhoncus. Vestibulum et finibus arcu, in posuere nibh. Praesent sagittis lectus ac enim porttitor maximus. Pellentesque varius, nulla at suscipit ornare, ipsum erat facilisis leo, sit amet congue diam sapien et nulla. In ut turpis non arcu maximus congue. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus."), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
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
var _jsxFileName = "D:\\website-1\\pages\\Components\\Floating.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Floating = () => {
  const {
    0: Ans,
    1: setAns
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("1");
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    _hover: {
      textColor: "whitesmoke"
    },
    boxShadow: "lg",
    bgColor: "#e94560",
    style: {
      opacity: Ans,
      position: "fixed",
      bottom: "30px",
      right: "30px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Apply Now");
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
var _jsxFileName = "D:\\website-1\\pages\\Components\\Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => {
  return __jsx("footer", {
    style: {
      width: '100%',
      padding: "20px",
      position: "relative",
      backgroundColor: "black"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    align: "center",
    fontSize: "xl",
    color: "whitesmoke",
    style: {
      margin: "10px 0 20px 2px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Contact Us"), __jsx("div", {
    style: {
      display: "flex",
      position: "relative",
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      margin: "0px auto",
      display: "flex"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/thealcodingclub/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: "#bc2a8d",
      textColor: "whitesmoke"
    },
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 131
      }
    }),
    to: "https://www.instagram.com/thealcodingclub",
    style: {
      display: "flex",
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 66
    }
  }, "Instagram")), __jsx("a", {
    href: "https://www.linkedin.com/company/the-alcoding-club/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: "#0e76a8",
      textColor: "whitesmoke"
    },
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
      style: {
        margin: "0 3px 0 3px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 140
      }
    }),
    style: {
      display: "flex",
      margin: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 75
    }
  }, "LinkedIn")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    _hover: {
      bg: "#DB4437",
      textColor: "whitesmoke"
    },
    leftIcon: __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiGmail"], {
      style: {
        margin: "0 5px 0 5px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 78
      }
    }),
    style: {
      display: "flex",
      margin: "10px",
      padding: "0 27px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Mail"))));
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
var _jsxFileName = "D:\\website-1\\pages\\Components\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_Assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      height: '200px',
      width: "200px",
      margin: "30px auto 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: "center",
      margin: "10px 0 0 0",
      fontSize: "65px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "The Alcoding Club"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    _hover: {
      bg: "#0f3460",
      textColor: "whitesmoke"
    },
    bgColor: "#e94560",
    style: {
      margin: "30px auto 90px",
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Apply To Our Monthly Challenge"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Register"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Editorials"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
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
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_Components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(_Components_AboutUs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx(_Components_Floating__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXNzZXRzL0xvZ28uc3ZnIiwid2VicGFjazovLy8uL3BhZ2VzL0NvbXBvbmVudHMvQWJvdXRVcy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29tcG9uZW50cy9GbG9hdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Db21wb25lbnRzL05hdi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvc2lcIiJdLCJuYW1lcyI6WyJBYm91dFVzIiwidGV4dEFsaWduIiwibWFyZ2luIiwicGFkZGluZyIsIkZsb2F0aW5nIiwiQW5zIiwic2V0QW5zIiwidXNlU3RhdGUiLCJ0ZXh0Q29sb3IiLCJvcGFjaXR5IiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsIkZvb3RlciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImJnIiwiSGVhZGVyIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJOYXYiLCJqdXN0aWZ5Q29udGVudCIsIkxhbmRpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKO0FBUUgsQ0FURDs7QUFXZUEsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNsQkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMzNCAyOTJ2MzFoNjEzdi02MkgzMzR2MzF6TTMzNC4yIDM5MS4ybC4zIDMxLjMgMzA2LjMuMyAzMDYuMi4ydi02M0gzMzRsLjIgMzEuMnpNMzM0IDQ5MS41VjUyM2g2MTN2LTYzSDMzNHYzMS41ek0zMzQuNyA1NTkuN2MtLjQuMy0uNyAxNC41LS43IDMxLjVWNjIyaDYxM2wtLjItMzEuMy0uMy0zMS4yLTMwNS42LS4zYy0xNjguMS0uMS0zMDUuOS4xLTMwNi4yLjV6TTMzNCA2OTB2MzFoNjEzdi02MkgzMzR2MzF6TTMzNCA3ODkuNVY4MjFsMzA2LjMtLjIgMzA2LjItLjMuMy0zMS4zLjItMzEuMkgzMzR2MzEuNXpNMzM0LjcgODU3LjdjLS40LjMtLjcgMTQuNS0uNyAzMS41VjkyMGg2MTNsLS4yLTMxLjMtLjMtMzEuMi0zMDUuNi0uM2MtMTY4LjEtLjEtMzA1LjkuMS0zMDYuMi41ek01MTguNCA5NDdjLTkuOCAyLjEtMTguNyA4LjMtMjQuNSAxNy4yLTUuNCA4LjUtNy4yIDE2LjItNi43IDI5LjQuMyA5LjguNyAxMS42IDMuNyAxOCA0LjEgOC44IDExLjMgMTYuMyAxOS42IDIwLjEgNC45IDIuMiA3LjggMi44IDE1LjUgMy4xIDExIC41IDE1LjQtLjUgMjMtNSA2LjktNC4yIDEyLjUtMTEuNSAxNS0xOS43IDMuMi0xMCAzLjQtOS43LTcuMS05LjFsLTkuMi41LTEuMiA0LjFjLTIuNyA5LjEtOC44IDEzLjYtMTguNyAxMy41LTE1LjUgMC0yNS4yLTE1LjUtMjEuOC0zNC45IDIuMy0xMy4zIDktMjAuOCAxOS42LTIxLjkgOS4zLTEgMTkuMSA0LjggMjEgMTIuMi42IDIuNC45IDIuNSA5LjUgMi41IDEwLjMgMCAxMC40IDAgNi43LTkuNy0yLjktNy44LTEwLjMtMTUuMi0xOC4zLTE4LjMtNi43LTIuNS0xOS4zLTMuNS0yNi4xLTJ6TTYwMyA5NDcuNWMtMTQuOSA0LjItMjQuOCAxNS40LTI4LjYgMzIuMi0zIDEzLjUtLjYgMjcuMyA2LjcgMzguMiA3LjYgMTEuNCAxOSAxNy4xIDM0LjEgMTcuMSAxNi42IDAgMjguMi02LjUgMzYuMS0yMC4xIDQuMi03LjIgNi0xNi4xIDUuNC0yNi45LTEtMTkuNS05LjktMzMuMS0yNS41LTM5LjEtNy41LTIuOC0yMC43LTMuNS0yOC4yLTEuNHptMjEuNiAxNi40YzkuMSA0LjIgMTMuOCAxNC40IDEzLjIgMjguOS0uNiAxNi42LTcuNiAyNS4zLTIwLjggMjYtOC45LjUtMTMuMS0xLTE3LjgtNi40LTUtNS42LTYuNy0xMS42LTYuNi0yMi45LjEtMTcuOSA4LTI3LjQgMjIuOS0yNy40IDIuOCAwIDYuOC44IDkuMSAxLjh6TTg5OS44IDk0N2MtNi40IDEuNi0xNS4zIDYuNy0xOSAxMC44LTkuMSAxMC0xMi4yIDE5LjUtMTEuNyAzNS42LjQgMTAuNi42IDExLjYgNC4xIDE4LjcgNC41IDkuMiAxMC4yIDE1IDE4LjYgMTkuMSA1LjYgMi44IDcuOCAzLjMgMTUuOCAzLjYgOC4yLjQgOS44LjIgMTQuNi0yLjEgMi45LTEuMyA2LjctMy45IDguNS01LjZsMy4yLTMuMi44IDQuMy45IDQuMyA2LjIuMyA2LjIuM1Y5ODdoLTM2djE0aDkuNWM1LjIgMCA5LjUuNCA5LjUuOSAwIDIuNS0zLjQgOS45LTUuNyAxMi4zLTcuNSA3LjgtMjQuOSA2LjUtMzEuNy0yLjUtNS4yLTYuOC03LjQtMTcuNy01LjYtMjcuNyAyLjYtMTQuNiAxMC40LTIyIDIyLjktMjIgMi4zIDAgNS42LjYgNy40IDEuNCAzLjggMS41IDguNCA2LjYgOS4zIDEwLjIuNiAyLjMuOSAyLjQgOS45IDIuNGg5LjNsLS45LTQuMWMtMi4yLTkuNy04LjgtMTcuNS0xOC43LTIyLjItNS4yLTIuNC03LjktMy0xNS0zLjMtNC44LS4yLTEwLjQuMS0xMi40LjZ6TTM1OS4xIDk2NC43Yy0zLjYgOS4zLTcuNCAxOS41LTguNyAyMi44LTEuMiAzLjMtNS42IDE0LjktOS43IDI1LjdsLTcuNSAxOS44aDE5LjVsMS4zLTQuM2MuNy0yLjMgMi4xLTYuNiAzLjItOS41bDEuOS01LjJoMzEuNWwxLjMgMy43Yy43IDIuMSAyLjIgNi40IDMuMyA5LjVsMi4xIDUuOGgxOS40bC0xMy40LTM1LjhjLTcuMy0xOS42LTE0LjUtMzguNy0xNS45LTQyLjVsLTIuNi02LjdIMzY1LjVsLTYuNCAxNi43em0yMS40IDE5LjljMi41IDcuMyA0LjUgMTMuNyA0LjUgMTQuMyAwIC43LTMuNSAxLjEtMTAuNiAxLjEtOS43IDAtMTAuNi0uMS05LjktMS44LjQtLjkgMi44LTcuNyA1LjMtMTQuOSAyLjYtNy4zIDUtMTIuOSA1LjQtMTIuNS40LjQgMi44IDYuNiA1LjMgMTMuOHpNNDIyIDk5MC41djQyLjVoNjEuMWwtLjMtNy44LS4zLTcuNy0xOS0uMmMtMTAuNC0uMS0xOS44LS4zLTIwLjctLjMtMS43IDAtMS44LTIuMy0xLjgtMzQuNVY5NDhoLTE5djQyLjV6TTY2NyA5OTAuNHY0Mi42aDIyLjNjMjQuNyAwIDI4LjgtLjcgMzctNiAxMS44LTcuOSAxNy44LTI0LjYgMTUuNi00My42LTEuNy0xNS40LTktMjYuNC0yMS4yLTMyLTYuMi0yLjktNi4zLTIuOS0yOS45LTMuMmwtMjMuOC0uNHY0Mi42em00NC43LTI0LjFjOC4xIDQuMyAxMS43IDEyLjMgMTEuNiAyNS43IDAgOS40LTEuNyAxNC43LTYuMSAxOS40LTQuMyA0LjYtOCA1LjYtMjAuMiA1LjZoLTExdi01My4ybDExLjMuNGM4LjEuMyAxMi4xLjkgMTQuNCAyLjF6TTc1My41IDk0OWMtLjMuNS0uNSAxOS42LS40IDQyLjVsLjIgNDEuNUg3NzJ2LTg1aC04LjljLTUgMC05LjIuNC05LjYgMXpNNzg2IDk5MC41djQyLjVoMThsLjItMjguMS4zLTI4LjEgNy45IDEyLjhjNC40IDcuMSAxMi4yIDE5LjggMTcuNCAyOC4xbDkuNSAxNS4zSDg1OHYtODVoLTE3bC0uMiAyOC42LS4zIDI4LjYtMTcuNi0yOC40LTE3LjYtMjguMy05LjctLjMtOS42LS4zdjQyLjZ6XCJcbn0pO1xuXG5mdW5jdGlvbiBTdmdMb2dvKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICB3aWR0aDogMTcwNi42NjcsXG4gICAgaGVpZ2h0OiAxNzA2LjY2NyxcbiAgICB2aWV3Qm94OiBcIjAgMCAxMjgwIDEyODBcIlxuICB9LCBwcm9wcyksIF9yZWYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMb2dvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLEJ1dHRvbixUZXh0LEhlYWRpbmcsRGl2aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLG1hcmdpbjpcIjcwcHggYXV0byA1MHB4XCJ9fT5BYm91dCBVczwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17e3BhZGRpbmc6XCIwIDExMHB4IDAgMTEwcHhcIixtYXJnaW46XCIwIDAgNzBweCAwXCJ9fSBmb250U2l6ZT1cImxnXCI+TnVsbGEgc2l0IGFtZXQgc2FwaWVuIHZpdGFlIG1hdXJpcyB0ZW1wb3IgdWx0cmljaWVzIG5lYyBmaW5pYnVzIHNhcGllbi4gTnVuYyBpZCBuaXNpIGluIHZlbGl0IHZ1bHB1dGF0ZSBmaW5pYnVzLiBBZW5lYW4gYmliZW5kdW0gbWFnbmEgc2l0IGFtZXQgcGVsbGVudGVzcXVlIHJob25jdXMuIFZlc3RpYnVsdW0gZXQgZmluaWJ1cyBhcmN1LCBpbiBwb3N1ZXJlIG5pYmguIFByYWVzZW50IHNhZ2l0dGlzIGxlY3R1cyBhYyBlbmltIHBvcnR0aXRvciBtYXhpbXVzLiBQZWxsZW50ZXNxdWUgdmFyaXVzLCBudWxsYSBhdCBzdXNjaXBpdCBvcm5hcmUsIGlwc3VtIGVyYXQgZmFjaWxpc2lzIGxlbywgc2l0IGFtZXQgY29uZ3VlIGRpYW0gc2FwaWVuIGV0IG51bGxhLiBJbiB1dCB0dXJwaXMgbm9uIGFyY3UgbWF4aW11cyBjb25ndWUuIE51bGxhIGZhY2lsaXNpLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuPC9UZXh0PlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0VXMiLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLEJ1dHRvbiwgSGVhZGluZyxEaXZpZGVyLExpbmt9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmNvbnN0IEZsb2F0aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW0FucyxzZXRBbnNdPXVzZVN0YXRlKFwiMVwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgX2hvdmVyPXt7dGV4dENvbG9yOlwid2hpdGVzbW9rZVwifX0gYm94U2hhZG93PVwibGdcIiBiZ0NvbG9yPVwiI2U5NDU2MFwiIHN0eWxlPXt7b3BhY2l0eTpBbnMscG9zaXRpb246XCJmaXhlZFwiLGJvdHRvbTpcIjMwcHhcIixyaWdodDpcIjMwcHhcIn19PkFwcGx5IE5vdzwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJ1dHRvbiwgSGVhZGluZywgRGl2aWRlciwgSFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBGYUluc3RhZ3JhbSwgRmFMaW5rZWRpbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQge1NpR21haWx9IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBzdHlsZT17eyB3aWR0aDogJzEwMCUnLHBhZGRpbmc6XCIyMHB4XCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cInhsXCIgY29sb3I9XCJ3aGl0ZXNtb2tlXCIgc3R5bGU9e3ttYXJnaW46XCIxMHB4IDAgMjBweCAycHhcIn19PkNvbnRhY3QgVXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIix3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjBweCBhdXRvXCIsZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGVhbGNvZGluZ2NsdWIvXCI+PEJ1dHRvbiBfaG92ZXI9e3tiZzpcIiNiYzJhOGRcIix0ZXh0Q29sb3I6XCJ3aGl0ZXNtb2tlXCJ9fSBsZWZ0SWNvbj17PEZhSW5zdGFncmFtIC8+fSB0bz1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlYWxjb2RpbmdjbHViXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS90aGUtYWxjb2RpbmctY2x1Yi9cIj48QnV0dG9uIF9ob3Zlcj17e2JnOlwiIzBlNzZhOFwiLHRleHRDb2xvcjpcIndoaXRlc21va2VcIn19IGxlZnRJY29uPXs8RmFMaW5rZWRpbiBzdHlsZT17e21hcmdpbjpcIjAgM3B4IDAgM3B4XCJ9fSAvPn0gc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpbjpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgTGlua2VkSW5cclxuICAgICAgICAgICAgPC9CdXR0b24+PC9hPlxyXG4gICAgICAgICAgICA8QnV0dG9uIF9ob3Zlcj17e2JnOlwiI0RCNDQzN1wiLHRleHRDb2xvcjpcIndoaXRlc21va2VcIn19IGxlZnRJY29uPXs8U2lHbWFpbCBzdHlsZT17e21hcmdpbjpcIjAgNXB4IDAgNXB4XCJ9fSAvPn0gc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpbjpcIjEwcHhcIixwYWRkaW5nOlwiMCAyN3B4XCJ9fT5cclxuICAgICAgICAgICAgICAgIE1haWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsQnV0dG9uLCBIZWFkaW5nLERpdmlkZXJ9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Bc3NldHMvTG9nby5zdmdcIjtcclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TG9nbyBzdHlsZT17e2hlaWdodDonMjAwcHgnLHdpZHRoOlwiMjAwcHhcIixtYXJnaW46XCIzMHB4IGF1dG8gMFwifX0vPlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLG1hcmdpbjpcIjEwcHggMCAwIDBcIixmb250U2l6ZTpcIjY1cHhcIn19PlRoZSBBbGNvZGluZyBDbHViPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIF9ob3Zlcj17e2JnOlwiIzBmMzQ2MFwiLHRleHRDb2xvcjpcIndoaXRlc21va2VcIn19IGJnQ29sb3I9XCIjZTk0NTYwXCIgc3R5bGU9e3ttYXJnaW46XCIzMHB4IGF1dG8gOTBweFwiLGRpc3BsYXk6XCJibG9ja1wifX0+QXBwbHkgVG8gT3VyIE1vbnRobHkgQ2hhbGxlbmdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxOYXYvPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLEJ1dHRvbiwgSGVhZGluZyxEaXZpZGVyLExpbmt9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIscGFkZGluZzpcIjMwcHhcIix3aWR0aDpcIjEwMCVcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgIDxMaW5rPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluaz5FZGl0b3JpYWxzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluaz5Db250YWN0IFVzPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZyxDaGFrcmFQcm92aWRlcn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9Db21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgQWJvdXRVcyBmcm9tIFwiLi9Db21wb25lbnRzL0Fib3V0VXNcIjtcclxuaW1wb3J0IEZsb2F0aW5nIGZyb20gXCIuL0NvbXBvbmVudHMvRmxvYXRpbmdcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Db21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPEFib3V0VXMvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPEZsb2F0aW5nLz5cclxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvc2lcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==