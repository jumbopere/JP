(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");


var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ "./src/themes/default.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/styles/globals.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\styles\\theme.js";




const Theme = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
  theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__.default,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-normalize");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy90aGVtZXMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BvcnRmb2xpby9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1ub3JtYWxpemVcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIm5vcm1hbGl6ZSIsInByb3BzIiwidGhlbWUiLCJmb250cyIsIm1haW4iLCJjb2xvcnMiLCJiYWNrZ3JvdW5kMSIsInByaW1hcnkxIiwidGl0bGUiLCJUaGVtZSIsImNoaWxkcmVuIiwiYWNjZW50MSIsImJ1dHRvbiIsImJhY2tncm91bmQyIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUNBO0FBRUEsTUFBTUMsWUFBWSxHQUFHQyxnRUFBa0I7QUFDdkMsSUFBSUMsdURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLElBQUs7QUFDbkQ7QUFDQSxrQkFBa0JILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQVk7QUFDMUQsYUFBYUwsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkUsUUFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQk4sS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkssS0FBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EvQkE7QUFpQ0EsK0RBQWVWLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1XLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDWiw4REFBQyw0REFBRDtBQUFlLE9BQUssRUFBRVIsb0RBQXRCO0FBQUEsMEJBQ0UsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdRLFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBT0EsK0RBQWVELEtBQWYsRTs7Ozs7Ozs7Ozs7O0FDWkEsK0RBQWU7QUFDYjtBQUNBTixPQUFLLEVBQUU7QUFDTEssU0FBSyxFQUFFLDJCQURGO0FBRUxKLFFBQUksRUFBRTtBQUZELEdBRk07QUFNYjtBQUNBQyxRQUFNLEVBQUU7QUFDTkUsWUFBUSxFQUFFLHNCQURKO0FBRU5ELGVBQVcsRUFBRSxTQUZQO0FBR05LLFdBQU8sRUFBRSx1QkFISDtBQUlOQyxVQUFNLEVBQUUsdUJBSkY7QUFLTkMsZUFBVyxFQUFFO0FBTFAsR0FQSztBQWNiO0FBQ0FDLGFBQVcsRUFBRTtBQUNYQyxNQUFFLEVBQUUsK0JBRE87QUFFWEMsTUFBRSxFQUFFLCtCQUZPO0FBR1hDLE1BQUUsRUFBRSxnQ0FITztBQUlYQyxNQUFFLEVBQUU7QUFKTztBQWZBLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaGVtZT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVGhlbWU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiAiLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAke25vcm1hbGl6ZX07XHJcblxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5cclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5tYWlufTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZDF9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkxfTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgfVxyXG4gIGgxLGgyLGgzLGg0LGg1LGg2LGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy50aXRsZX07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlczsiLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZXMvZGVmYXVsdFwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4vZ2xvYmFscyc7XHJcblxyXG5jb25zdCBUaGVtZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvVGhlbWVQcm92aWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lOyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBUZW1wIGZvbnRzXHJcbiAgZm9udHM6IHtcclxuICAgIHRpdGxlOiBcIlNwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWZcIixcclxuICAgIG1haW46IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiXHJcbiAgfSxcclxuICAvLyBDb2xvcnMgZm9yIGxheW91dFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTE6IFwiaHNsKDIwNCwyMy44JSw5NS45JSlcIixcclxuICAgIGJhY2tncm91bmQxOiBcIiMwRjE2MjRcIixcclxuICAgIGFjY2VudDE6IFwiaHNsKDM0LjksOTguNiUsNzIuOSUpXCIsXHJcbiAgICBidXR0b246IFwiaHNsKDIwNS4xLDEwMCUsMzYuMSUpXCIsXHJcbiAgICBiYWNrZ3JvdW5kMjogXCJoc2woMjMyLjcsMjcuMyUsMjMuNyUpXCIsXHJcbiAgfSxcclxuICAvLyBCcmVha3BvaW50cyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ25cclxuICBicmVha3BvaW50czoge1xyXG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXHJcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJ1xyXG4gIH0sXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLW5vcm1hbGl6ZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==