(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: "Acomplishments"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "sc-1i2l04t-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "sc-1i2l04t-1"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "sc-1i2l04t-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "sc-1i2l04t-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "sc-1i2l04t-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "sc-1i2l04t-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "sc-1i2l04t-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\Footer\\Footer.js";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkList, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Call"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "tel:+2349032276546",
          children: "+2349032276546"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "mailto:jumboperebara0@gmail.com",
          children: "jumboperebara0@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIconsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.CompanyContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Slogan, {
          children: "Learning, Building, Relearning"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://github.com/jumbopere",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://linkedin.com/in/perejumbo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://twiiter.com/jumbopere",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillTwitterSquare, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1eh4ra0-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1eh4ra0-1"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1eh4ra0-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1eh4ra0-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1eh4ra0-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1eh4ra0-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1eh4ra0-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1eh4ra0-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1eh4ra0-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
          display: 'flex',
          alignItems: 'center',
          color: "white",
          marginBottom: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiCssdeck, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Span, {
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 36
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#tech",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Technologies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://github.com/jumbopere",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://twitter.com/jumbopere",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillTwitterSquare, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://linkedin.com/in/perejumbo",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-12smpbe-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-12smpbe-1"
})(["font-size:2rem"]);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-12smpbe-2"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-12smpbe-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-12smpbe-4"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-12smpbe-5"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-12smpbe-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-12smpbe-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-12smpbe-8"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\Hero\\Hero.js";





const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  row: true,
  nopadding: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      main: true,
      center: true,
      children: ["Welcome to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 38
      }, undefined), "Jumbo Pere"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
      children: " I am a young web developer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
      onClick: () => window.location = "https://twitter.cm/jumbopere",
      children: "Learn more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "ggdmsh-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  nopadding: true,
  id: "projects",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    main: true,
    children: "Projects"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(({
      title,
      id,
      source,
      visit,
      image,
      description,
      tags
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
          title: true,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
        children: [" ", description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
          children: "Stack"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
          children: tags.map((tag, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
            children: tag
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
          href: source,
          children: " source"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 1
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 1
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 1
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "sc-1tcu2iw-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "sc-1tcu2iw-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "sc-1tcu2iw-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "sc-1tcu2iw-3"
})(["text-align:center;z-index:20;width:100%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "sc-1tcu2iw-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], props => props.title ? '3rem' : '2rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "sc-1tcu2iw-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "sc-1tcu2iw-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "sc-1tcu2iw-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "sc-1tcu2iw-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "sc-1tcu2iw-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "sc-1tcu2iw-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "sc-1tcu2iw-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    divider: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Technologies"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
    children: "I've worked with a range a technologies in the web development world. From Back-end To Front-End"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.List, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiReact, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Front-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experiece with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 28
          }, undefined), "React.js"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiFirebase, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Back-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, undefined), "Node and MongoDB"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    colorAlt: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-14p26t3-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-14p26t3-1"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-14p26t3-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-14p26t3-3"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-14p26t3-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-14p26t3-5"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-14p26t3-6"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-14p26t3-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");


var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "Jumbo Pere is a web devloper based in Lagos, Nigeria. I am based in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  "fill-opacity": "0.33"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      "stop-color": "white"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      offset: "0.79478",
                      "stop-color": "white",
                      "stop-opacity": "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined))
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "sc-18wyebz-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "sc-18wyebz-1"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "sc-18wyebz-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "sc-18wyebz-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "sc-18wyebz-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "sc-18wyebz-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "sc-18wyebz-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "sc-18wyebz-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "sc-18wyebz-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'MERN Memories',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  image: '/images/1.png',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'E-Commerce',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: '/images/2.png',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'WebRTC App',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/3.jpg',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
const TimeLineData = [{
  year: 2019,
  text: 'Started my journey'
}, {
  year: 2020,
  text: 'Worked on a lot of projects'
}, {
  year: 2021,
  text: 'Looking a job'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "ea3b0r-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\Aisha bello\\Desktop\\Bouyant\\me\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-1i9p3c7-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-1i9p3c7-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-1i9p3c7-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-1i9p3c7-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-1i9p3c7-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-1i9p3c7-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-1i9p3c7-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-1i9p3c7-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-1i9p3c7-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-1i9p3c7-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-92d9c1"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50c1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXNTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2lnbm9yZWR8QzpcXFVzZXJzXFxBaXNoYSBiZWxsb1xcRGVza3RvcFxcQm91eWFudFxcbWVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwiQm94ZXMiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZCIsInNtIiwiQm94IiwibGciLCJCb3hOdW0iLCJCb3hUZXh0IiwiSm9pbiIsIkpvaW5UZXh0IiwiSWNvbkNvbnRhaW5lciIsIkJhY2tncm91bmRBbmltYXRpb24iLCJGb290ZXIiLCJGb290ZXJXcmFwcGVyIiwiTGlua0l0ZW0iLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTbG9nYW4iLCJTb2NpYWxDb250YWluZXIiLCJMaW5rTGlzdCIsIkxpbmtDb2x1bW4iLCJMaW5rVGl0bGUiLCJIZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiQ29udGFpbmVyIiwiU3BhbiIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJDb250YWN0RHJvcERvd24iLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyIsIkhlcm8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIkxlZnRTZWN0aW9uIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInRpdGxlIiwiaWQiLCJzb3VyY2UiLCJ2aXNpdCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIiwiaSIsIkltZyIsIkdyaWRDb250YWluZXIiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyIsIlRlY2hub2xvZ2llcyIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsIkxpc3RDb250YWluZXIiLCJMaXN0VGl0bGUiLCJMaXN0UGFyYWdyYXBoIiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiVGltZUxpbmVEYXRhIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJmaW5hbCIsIkNhcm91c2VsSXRlbSIsImFjdGl2ZSIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkhvbWUiLCJCdXR0b24iLCJhbHQiLCJmb3JtIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiU2VjdGlvbiIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJTZWN0aW9uVGl0bGUiLCJtYWluIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uRGl2aWRlciIsImNvbG9yQWx0IiwiZGl2aWRlciIsIlNlY3Rpb25TdWJUZXh0IiwiU2Vjb25kYXJ5QnRuIiwiQnV0dG9uQmFjayIsIkJ1dHRvbkZyb250IiwiTGlua0NvbnRhaW5lciIsImxhcmdlIiwiTGlua0ljb25JbWciLCJuYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FB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V0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBYnBCLEVBY1AsQ0FBQztBQUFFd0k7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksS0FkekIsRUFpQmQzSSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWpCcEIsRUFrQlAsQ0FBQztBQUFFdUk7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxHQUFILEdBQVMsS0FsQnRCLENBQW5CO0FBc0JBLE1BQU1DLFdBQVcsR0FBRzdJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUVaLENBQUM7QUFBRTRJO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BRnBCLEVBSVozSSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUp0QixFQUtWLENBQUM7QUFBRTBJO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BTGxCLEVBUVo3SSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVJ0QixFQVNWLENBQUM7QUFBRXVJO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BVHRCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDN1FQLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnfSxcclxuICB7IG51bWJlcjogMTAwMCwgdGV4dDogJ1N0dWRlbnRzJywgfSxcclxuICB7IG51bWJlcjogMTkwMCwgdGV4dDogJ0dpdGh1YiBGb2xsb3dlcnMnLCB9LFxyXG4gIHsgbnVtYmVyOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxyXG5dO1xyXG5cclxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIEFjb21wbGlzaG1lbnRzXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEJveGVzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIG1hcmdpbjogMjRweCAwIDQwcHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGdhcDogMTZweDtcclxuICAgIG1hcmdpbjogMjBweCAwIDMycHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzIxMkQ0NTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogMTQ0cHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBcclxuICAgICY6bnRoLWNoaWxkKDJuKXtcclxuICAgICAgZ3JpZC1yb3c6MjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJveE51bSA9IHN0eWxlZC5oNWBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hUZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH07XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBKb2luID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2NHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSm9pblRleHQgPSBzdHlsZWQuaDVgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufTtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQmFja2dyb3VuZEFuaW1hdGlvbiA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzc05hbWU9XCJCZ0FuaW1hdGlvbl9fc3ZnXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA2MDIgNjAyXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPGcgb3BhY2l0eT1cIjAuMTVcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBkPVwiTTIwMS4zMzcgODcuNDM3QzE5My40NzQgNzkuNTczOCAxODAuNzI1IDc5LjU3MzggMTcyLjg2MiA4Ny40MzdMODcuNDM3IDE3Mi44NjJDNzkuNTczOSAxODAuNzI1IDc5LjU3MzkgMTkzLjQ3NCA4Ny40MzcgMjAxLjMzN0w0MDAuNjYzIDUxNC41NjNDNDA4LjUyNiA1MjIuNDI2IDQyMS4yNzUgNTIyLjQyNiA0MjkuMTM4IDUxNC41NjNMNTE0LjU2MyA0MjkuMTM4QzUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQwOC41MjYgNTE0LjU2MyA0MDAuNjYzTDIwMS4zMzcgODcuNDM3Wk0zMC40ODY5IDExNS45MTJDLTguODI4OTcgMTU1LjIyOCAtOC44Mjg5NyAyMTguOTcyIDMwLjQ4NjkgMjU4LjI4N0wzNDMuNzEzIDU3MS41MTNDMzgzLjAyOCA2MTAuODI5IDQ0Ni43NzIgNjEwLjgyOSA0ODYuMDg4IDU3MS41MTNMNTcxLjUxMyA0ODYuMDg4QzYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDM4My4wMjggNTcxLjUxMyAzNDMuNzEzTDI1OC4yODcgMzAuNDg2OUMyMTguOTcyIC04LjgyODk2IDE1NS4yMjggLTguODI4OTYgMTE1LjkxMiAzMC40ODY5TDMwLjQ4NjkgMTE1LjkxMlpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDBfcmFkaWFsKVwiXHJcbiAgICAgICAgICBpZD1cInBhdGhfMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk01MTQuNTYzIDIwMS4zMzdDNTIyLjQyNiAxOTMuNDc0IDUyMi40MjYgMTgwLjcyNSA1MTQuNTYzIDE3Mi44NjJMNDI5LjEzOCA4Ny40MzdDNDIxLjI3NSA3OS41NzM4IDQwOC41MjYgNzkuNTczOSA0MDAuNjYzIDg3LjQzN0wzNTguMDk4IDEzMC4wMDJMMzAxLjE0OCA3My4wNTE2TDM0My43MTMgMzAuNDg2OUMzODMuMDI4IC04LjgyODk2IDQ0Ni43NzIgLTguODI4OTYgNDg2LjA4OCAzMC40ODY5TDU3MS41MTMgMTE1LjkxMkM2MTAuODI5IDE1NS4yMjggNjEwLjgyOSAyMTguOTcyIDU3MS41MTMgMjU4LjI4N0wzNTcuODAyIDQ3MS45OTlMMzAwLjg1MiA0MTUuMDQ5TDUxNC41NjMgMjAxLjMzN1pcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDFfcmFkaWFsKVwiXHJcbiAgICAgICAgICBpZD1cInBhdGhfMVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yNDMuOTAxIDQ3MS45OTlMMjAxLjMzNyA1MTQuNTYzQzE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUyMi40MjYgMTcyLjg2MiA1MTQuNTYzTDg3LjQzNyA0MjkuMTM4Qzc5LjU3MzkgNDIxLjI3NSA3OS41NzM5IDQwOC41MjYgODcuNDM3IDQwMC42NjNMMzAxLjE0OCAxODYuOTUyTDI0NC4xOTggMTMwLjAwMkwzMC40ODY5IDM0My43MTNDLTguODI4OTcgMzgzLjAyOCAtOC44Mjg5NyA0NDYuNzcyIDMwLjQ4NjkgNDg2LjA4OEwxMTUuOTEyIDU3MS41MTNDMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNjEwLjgyOSAyNTguMjg3IDU3MS41MTNMMzAwLjg1MiA1MjguOTQ5TDI0My45MDEgNDcxLjk5OVpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDJfcmFkaWFsKVwiXHJcbiAgICAgICAgICBpZD1cInBhdGhfMlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiMjk1LjAyN1wiXHJcbiAgICAgICAgY3k9XCIxOTMuMTE4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NS4wMjcgLTE5My4xMTgpXCJcclxuICAgICAgICByeD1cIjEuMDczMDZcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjk0LjY4NSAxOTMuNDc0TDI2OC45MzIgMjE5LjI1OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDNfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIyOTUuMDI3XCJcclxuICAgICAgICBjeT1cIjE5My4xMThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICBmaWxsPVwiIzQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk0LjY4NSAtMTkzLjQ3NCkgcm90YXRlKDQ1IDI5NC42ODUgMTkzLjQ3NClcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ3X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXHJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXHJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDc2LjE3MSAzNjIuOTUyTDQ1MC40MTcgMzM3LjE2OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoLTQ1IDQ3Ni4xNzEgMzYyLjk1MilcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ0X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiMzgyLjE2NFwiXHJcbiAgICAgICAgY3k9XCIxNTUuMDI5XCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODIuMTY0IC0xNTUuMDI5KSByb3RhdGUoOTAgMzgyLjE2NCAxNTUuMDI5KVwiXHJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTM4MS44MSAxNTQuNjY5TDM1Ni4wNTcgMTI4Ljg4NVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODEuODEgLTE1NC42NjkpIHJvdGF0ZSgtNDUgMzgxLjgxIDE1NC42NjkpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NV9saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMHNcIlxyXG4gICAgICAgICAgYmVnaW49XCIxXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIzMzMuMzI0XCJcclxuICAgICAgICBjeT1cIjM4Mi42OTFcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMzMy4zMjQgLTM4Mi42OTEpIHJvdGF0ZSgtMTgwIDMzMy4zMjQgMzgyLjY5MSlcIlxyXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8xXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTMzMy42NjcgMzgyLjMzNUwzNTkuNDIgMzU2LjU1MVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoLTEgMSkgdHJhbnNsYXRlKC0zMzMuNjY3IC0zODIuMzM1KSByb3RhdGUoNDUgMzMzLjY2NyAzODIuMzM1KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDZfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiNXNcIlxyXG4gICAgICAgICAgYmVnaW49XCIwXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIxNjUuNTI0XCJcclxuICAgICAgICBjeT1cIjkzLjk1OTZcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NS41MjQgLTkzLjk1OTYpXCJcclxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiM1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTY1LjE4MiA5NC4zMTU5TDEzOS40MjkgMTIwLjFcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjE4MiAtOTQuMzE1OSkgcm90YXRlKDQ1IDE2NS4xODIgOTQuMzE1OSlcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ3X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjQ3Ni41MjVcIlxyXG4gICAgICAgIGN5PVwiMzYzLjMxM1wiXHJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcclxuICAgICAgICByeT1cIjEuMDczMDZcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKDkwIDQ3Ni41MjUgMzYzLjMxMylcIlxyXG4gICAgICAgIGZpbGw9XCIjMTNBREM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMnNcIlxyXG4gICAgICAgICAgYmVnaW49XCI0XCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSgtNDUgNDc2LjE3MSAzNjIuOTUyKVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDExX2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEyc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MF9yYWRpYWxcIlxyXG4gICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgIGN5PVwiMFwiXHJcbiAgICAgICAgICByPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDFfcmFkaWFsXCJcclxuICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICBjeT1cIjBcIlxyXG4gICAgICAgICAgcj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4zMzMzMzNcIiBzdG9wQ29sb3I9XCIjRkJGQkZCXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQyX3JhZGlhbFwiXHJcbiAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgY3k9XCIwXCJcclxuICAgICAgICAgIHI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDEgMzAxKSByb3RhdGUoOTApIHNjYWxlKDMwMClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50M19saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCIyOTUuMDQzXCJcclxuICAgICAgICAgIHkxPVwiMTkzLjExNlwiXHJcbiAgICAgICAgICB4Mj1cIjI2OS45NzVcIlxyXG4gICAgICAgICAgeTI9XCIyMTguMTU0XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ0X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjQ3Ni41MjlcIlxyXG4gICAgICAgICAgeTE9XCIzNjMuMzFcIlxyXG4gICAgICAgICAgeDI9XCI0NTEuNDYxXCJcclxuICAgICAgICAgIHkyPVwiMzM4LjI3MlwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5NDVERDZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50NV9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCIzODIuMTY4XCJcclxuICAgICAgICAgIHkxPVwiMTU1LjAyN1wiXHJcbiAgICAgICAgICB4Mj1cIjM1Ny4xXCJcclxuICAgICAgICAgIHkyPVwiMTI5Ljk4OVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50Nl9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCIzMzMuMzA5XCJcclxuICAgICAgICAgIHkxPVwiMzgyLjY5M1wiXHJcbiAgICAgICAgICB4Mj1cIjM1OC4zNzZcIlxyXG4gICAgICAgICAgeTI9XCIzNTcuNjU1XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ3X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjE2NS41NFwiXHJcbiAgICAgICAgICB5MT1cIjkzLjk1NzhcIlxyXG4gICAgICAgICAgeDI9XCIxNDAuNDcyXCJcclxuICAgICAgICAgIHkyPVwiMTE4Ljk5NlwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50OF9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCI0MTQuMzY3XCJcclxuICAgICAgICAgIHkxPVwiMzAxLjE1NlwiXHJcbiAgICAgICAgICB4Mj1cIjQzOS40MzVcIlxyXG4gICAgICAgICAgeTI9XCIyNzYuMTE4XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzEzQURDN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ5X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjUxNS45NDNcIlxyXG4gICAgICAgICAgeTE9XCIyODguMjM4XCJcclxuICAgICAgICAgIHgyPVwiNTQxLjMzOVwiXHJcbiAgICAgICAgICB5Mj1cIjI5MS40NTRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDEwX2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjExNy4wMDFcIlxyXG4gICAgICAgICAgeTE9XCIyMzAuNjE5XCJcclxuICAgICAgICAgIHgyPVwiMTE3LjM2XCJcclxuICAgICAgICAgIHkyPVwiMjU4LjE5M1wiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5NDVERDZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MTFfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXHJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXHJcbiAgICAgICAgICB4Mj1cIjQ1MS40NjFcIlxyXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzEzQURDN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQW5pbWF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlGaWxsVHdpdHRlclNxdWFyZSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcblxyXG5pbXBvcnQgeyBTb2NpYWxJY29ucyB9IGZyb20gJy4uL0hlYWRlci9IZWFkZXJTdHlsZXMnO1xyXG5pbXBvcnQgeyBDb21wYW55Q29udGFpbmVyLCBGb290ZXJXcmFwcGVyLCBMaW5rQ29sdW1uLCBMaW5rSXRlbSwgTGlua0xpc3QsIExpbmtUaXRsZSwgU2xvZ2FuLCBTb2NpYWxDb250YWluZXIsIFNvY2lhbEljb25zQ29udGFpbmVyIH0gZnJvbSAnLi9Gb290ZXJTdHlsZXMnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9vdGVyV3JhcHBlcj5cclxuICAgICAgPExpbmtMaXN0PlxyXG4gICAgICAgIDxMaW5rQ29sdW1uPlxyXG4gICAgICAgICAgPExpbmtUaXRsZT5DYWxsPC9MaW5rVGl0bGU+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cInRlbDorMjM0OTAzMjI3NjU0NlwiPisyMzQ5MDMyMjc2NTQ2PC9MaW5rSXRlbT5cclxuICAgICAgICA8L0xpbmtDb2x1bW4+XHJcbiAgICAgICAgPExpbmtDb2x1bW4+XHJcbiAgICAgICAgICA8TGlua1RpdGxlPkVtYWlsPC9MaW5rVGl0bGU+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIm1haWx0bzpqdW1ib3BlcmViYXJhMEBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAganVtYm9wZXJlYmFyYTBAZ21haWwuY29tXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvTGlua0NvbHVtbj5cclxuICAgICAgPC9MaW5rTGlzdD5cclxuICAgICAgPFNvY2lhbEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxDb21wYW55Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFNsb2dhbj5MZWFybmluZywgQnVpbGRpbmcsIFJlbGVhcm5pbmc8L1Nsb2dhbj5cclxuICAgICAgICA8L0NvbXBhbnlDb250YWluZXI+XHJcbiAgICAgICAgPFNvY2lhbENvbnRhaW5lcj5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2p1bWJvcGVyZVwiPlxyXG4gICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tL2luL3BlcmVqdW1ib1wiPlxyXG4gICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly90d2lpdGVyLmNvbS9qdW1ib3BlcmVcIj5cclxuICAgICAgICAgICAgPEFpRmlsbFR3aXR0ZXJTcXVhcmUgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICA8L1NvY2lhbENvbnRhaW5lcj5cclxuICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuICAgIDwvRm9vdGVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcblx0d2lkdGg6IGNhbGMoMTAwdncgLSA5NnB4KTtcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBwYWRkaW5nOiAycmVtIDQ4cHggNDBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggNDhweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0l0ZW0gPSBzdHlsZWQuYWBcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bGVmdDogMDtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGxlZnQ6IDZweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjhweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0Zm9udC1zaXplOiA4cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTRweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOiAxMDQwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczpiYXNlbGluZTtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdFxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW46IDAgMCAzMnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2xvZ2FuID0gc3R5bGVkLnBgXHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRtaW4td2lkdGg6IDI4MHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtMaXN0ID0gc3R5bGVkLnVsYFxyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoODVweCwgMjIwcHgpKTtcclxuXHRnYXA6IDQwcHg7XHJcbiAgcGFkZGluZzogNDBweCAwIDI4cHg7XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDAgMTZweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xyXG5cdFx0Z2FwOiAxNnB4O1xyXG5cdH1cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDRweCAxNnB4O1xyXG5cdFx0Z2FwOiA1cHg7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbHVtbiA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1heC13aWR0aDogMjIwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmBcclxuZXhwb3J0IGNvbnN0IExpbmtUaXRsZSA9IHN0eWxlZC5oNGBcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHR9XHJcbmBcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsVHdpdHRlclNxdWFyZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXYxLCBEaXYyLCBEaXYzLCBOYXZMaW5rLCBTb2NpYWxJY29ucywgU3BhbiB9IGZyb20gJy4vSGVhZGVyU3R5bGVzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+ICAoXHJcbiAgPENvbnRhaW5lcj5cclxuICAgIDxEaXYxPlxyXG4gICAgICA8TGluayBocmVmID0gXCIvXCI+XHJcbiAgICAgIDxhIHN0eWxlID0ge3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJyxjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5Cb3R0b206ICcyMHB4J319PlxyXG4gICAgICAgIDxEaUNzc2RlY2sgc2l6ZSA9IFwiM3JlbVwiLz4gPFNwYW4+UG9ydGZvbGlvPC9TcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvRGl2MT5cclxuICAgIDxEaXYyPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZiA9IFwiI3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5Qcm9qZWN0czwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmID0gXCIjdGVjaFwiPlxyXG4gICAgICAgICAgPE5hdkxpbms+VGVjaG5vbG9naWVzPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIiNhYm91dFwiPlxyXG4gICAgICAgICAgPE5hdkxpbms+QWJvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9EaXYyPlxyXG4gICAgPERpdjM+XHJcbiAgICAgIDxTb2NpYWxJY29ucyBocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vanVtYm9wZXJlXCI+XHJcbiAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplID0gXCIzcmVtXCIvPlxyXG4gICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgIDxTb2NpYWxJY29ucyBocmVmID0gXCJodHRwczovL3R3aXR0ZXIuY29tL2p1bWJvcGVyZVwiPlxyXG4gICAgICAgIDxBaUZpbGxUd2l0dGVyU3F1YXJlIHNpemUgPSBcIjNyZW1cIi8+XHJcbiAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgPFNvY2lhbEljb25zIGhyZWYgPSBcImh0dHBzOi8vbGlua2VkaW4uY29tL2luL3BlcmVqdW1ib1wiPlxyXG4gICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplID0gXCIzcmVtXCIvPlxyXG4gICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICA8L0RpdjM+XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuZm9udC1zaXplOiAycmVtXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYxID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIExpbmtzXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vLyBEcm9wRG93biBDb250YWN0XHJcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG5cclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XHJcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG4vLyBTb2NpYWwgSWNvbnMgXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuYWBcclxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICB9XHJcbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXHJcbiAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cclxuICAgIDxMZWZ0U2VjdGlvbj5cclxuPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlcj5XZWxjb21lIHRvIDxici8+SnVtYm8gUGVyZTwvU2VjdGlvblRpdGxlPlxyXG48U2VjdGlvblRleHQ+IEkgYW0gYSB5b3VuZyB3ZWIgZGV2ZWxvcGVyPC9TZWN0aW9uVGV4dD5cclxuICAgIDxCdXR0b24gb25DbGljayA9IHsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBcImh0dHBzOi8vdHdpdHRlci5jbS9qdW1ib3BlcmVcIn0+TGVhcm4gbW9yZTwvQnV0dG9uPlxyXG4gICAgPC9MZWZ0U2VjdGlvbj5cclxuICA8L1NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBFeHRlcm5hbExpbmtzLCBHcmlkQ29udGFpbmVyLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBVdGlsaXR5TGlzdCwgSW1nIH0gZnJvbSAnLi9Qcm9qZWN0c1N0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcclxuICA8U2VjdGlvbiBub3BhZGRpbmcgaWQgPSBcInByb2plY3RzXCI+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIvPlxyXG4gICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgIHsgcHJvamVjdHMubWFwKCh7dGl0bGUsIGlkLCBzb3VyY2UsIHZpc2l0LGltYWdlLCBkZXNjcmlwdGlvbiwgdGFnc30pID0+KFxyXG48QmxvZ0NhcmQga2V5ID0ge2lkfT5cclxuPEltZyBzcmMgPXtpbWFnZX0vPlxyXG48VGl0bGVDb250ZW50PlxyXG4gIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cclxuICA8SHIvPlxyXG48L1RpdGxlQ29udGVudD5cclxuPENhcmRJbmZvPiB7ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cclxuPGRpdj5cclxuICA8VGl0bGVDb250ZW50PlN0YWNrPC9UaXRsZUNvbnRlbnQ+XHJcbiAgPFRhZ0xpc3Q+XHJcbiAgICB7dGFncy5tYXAoKHRhZywgaSkgPT4gKFxyXG4gICAgICA8VGFnIGtleT0ge2l9ID57dGFnfTwvVGFnPlxyXG4gICAgKSl9XHJcbiAgPC9UYWdMaXN0PlxyXG48L2Rpdj5cclxuPFV0aWxpdHlMaXN0PlxyXG48RXh0ZXJuYWxMaW5rcyBocmVmID17c291cmNlfT4gc291cmNlPC9FeHRlcm5hbExpbmtzPlxyXG48L1V0aWxpdHlMaXN0PlxyXG48L0Jsb2dDYXJkPlxyXG4gICAgICAgKSlcclxuICAgICAgIH1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICA8L1NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAzcmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAycmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzljYzllMztcclxuICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRpdGxlID8gJzNyZW0nIDogJzJyZW0nfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBjb2xvcjogI2U0ZTZlNztcclxuICBmb250LXN0eWxlOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzouM3JlbVxyXG4gIFxyXG59XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXHJcbmNvbG9yOiNkNGMwYzA7XHJcbmZvbnQtc2l6ZTogMS42cmVtO1xyXG5wYWRkaW5nOjFyZW0gMS41cmVtO1xyXG5iYWNrZ3JvdW5kOiAjNmIzMDMwO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG50cmFuc2l0aW9uOiAwLjVzO1xyXG4mOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XHJcblxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbnBhZGRpbmc6IDJyZW07XHJcbmBcclxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcclxuY29sb3I6ICNkOGJmYmY7XHJcbmZvbnQtc2l6ZTogMS41cmVtO1xyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGlGaXJlYmFzZSwgRGlSZWFjdCwgRGlaZW5kIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSB9IGZyb20gJy4vVGVjaG5vbG9naWVzU3R5bGVzJztcclxuXHJcbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+ICAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJ0ZWNoXCI+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIgZGl2aWRlciAvPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5UZWNobm9sb2dpZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgSSd2ZSB3b3JrZWQgd2l0aCBhIHJhbmdlIGEgdGVjaG5vbG9naWVzIGluIHRoZSB3ZWIgZGV2ZWxvcG1lbnQgd29ybGQuXHJcbiAgICAgIEZyb20gQmFjay1lbmQgVG8gRnJvbnQtRW5kXHJcbiAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgPExpc3Q+XHJcbiAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgIDxEaVJlYWN0IHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICA8TGlzdFRpdGxlPkZyb250LUVuZDwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIEV4cGVyaWVjZSB3aXRoIDxiciAvPlxyXG4gICAgICAgICAgICBSZWFjdC5qc1xyXG4gICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPERpRmlyZWJhc2Ugc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaXN0VGl0bGU+QmFjay1FbmQ8L0xpc3RUaXRsZT5cclxuICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGggPGJyIC8+XHJcbiAgICAgICAgICAgIE5vZGUgYW5kIE1vbmdvREJcclxuICAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cclxuICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgIDwvTGlzdD5cclxuICAgIDxTZWN0aW9uRGl2aWRlciBjb2xvckFsdCAvPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlY2hub2xvZ2llczsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgcmdiYSg3OSwgMTA4LCAxNzYsIDAuMjUpIDUzLjglLCByZ2JhKDc5LCAxMDgsIDE3NiwgMCkgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgICBnYXA6IDI0cHhcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDMycHggMDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIG1heC13aWR0aDogMjAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcclxuXHJcbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XHJcbiAgICAgIFxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxyXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgSnVtYm8gUGVyZSBpcyBhIHdlYiBkZXZsb3BlciBiYXNlZCBpbiBMYWdvcywgTmlnZXJpYS4gSSBhbSBiYXNlZCBpbiBcclxuICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9PlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLnllYXJ9YH1cclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Atb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UZXh0PntpdGVtLnRleHR9PC9DYXJvdXNlbEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lOyIsIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgcGFkZGluZzogMHJlbTtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIFxyXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlID0gc3R5bGVkLmRpdmBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogJHsoeyBmaW5hbCB9KSA9PiBmaW5hbCA/IGAxMjAlO2AgOiBgbWluLWNvbnRlbnRgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWF4LXdpZHRoOiAxOTZweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogMTI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEUxMzFGO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBcclxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYG9wYWNpdHk6IDFgIDogYG9wYWNpdHk6IDAuNWB9OyBcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtSW1nID0gc3R5bGVkLnN2Z2BcclxuICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25zID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjg4cHg7XHJcblxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgMWAgOiBgLjMzYH07XHJcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbmBcclxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTUVSTiBNZW1vcmllcycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJVc2luZyBSZWFjdCwgTm9kZS5qcywgRXhwcmVzcyAmIE1vbmdvREIgeW91J2xsIGxlYXJuIGhvdyB0byBidWlsZCBhIEZ1bGwgU3RhY2sgTUVSTiBBcHBsaWNhdGlvbiAtIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGUgQXBwIGlzIGNhbGxlZCBNZW1vcmllcyBhbmQgaXQgaXMgYSBzaW1wbGUgc29jaWFsIG1lZGlhIGFwcCB0aGF0IGFsbG93cyB1c2VycyB0byBwb3N0IGludGVyZXN0aW5nIGV2ZW50cyB0aGF0IGhhcHBlbmVkIGluIHRoZWlyIGxpdmVzLlwiLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMS5wbmcnLFxyXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFLUNvbW1lcmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlwiV2hpbGUgYnVpbGRpbmcgaXQgeW91J3JlIGdvaW5nIHRvIGxlYXJuIG1hbnkgYWR2YW5jZWQgUmVhY3QgJiBKYXZhU2NyaXB0IHRvcGljcywgYXMgd2VsbCBhcyBob3cgdG8gdXNlIFN0cmlwZSBmb3IgY2FyZCB0cmFuc2FjdGlvbnMuIE9uIHRvcCBvZiB0aGF0LCBhdCB0aGUgZW5kIG9mIHRoZSB2aWRlbywgeW91IHdpbGwgaGF2ZSB0aGlzIHVuaXF1ZSBhbmQgY29tcGxleCB3ZWJzaG9wIGFwcCB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYWRkIHRvIHlvdXIgcG9ydGZvbGlvLiBBbmQgdHJ1c3QgbWUsIGUtY29tbWVyY2UgYXBwbGljYXRpb25zIGFyZSBpbXByZXNzaXZlLlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzIucG5nJyxcclxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdXZWJSVEMgQXBwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMuanBnJyxcclxuICAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVW5pY2hhdCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXHJcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLCB9LFxyXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1dvcmtlZCBvbiBhIGxvdCBvZiBwcm9qZWN0cycsIH0sXHJcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnTG9va2luZyBhIGpvYicsIH0sXHJcbl07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcydcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgIDxIZWFkZXIvPlxyXG4gICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+IFxyXG4gICAgIDxGb290ZXIvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogMTI4MHB4O1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luOiBhdXRvO1xyXG5gO1xyXG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XHJcbmltcG9ydCBCZ0FuaW1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm9vdW5kQW5pbWF0aW9uL0JhY2tncm91bmRBbmltYXRpb24nO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcclxuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tICcuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMnO1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgIDxTZWN0aW9uIGdyaWQ+IFxyXG4gICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgIDxCZ0FuaW1hdGlvbiAvPlxyXG4gICAgICAgPC9TZWN0aW9uPiBcclxuICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgIDxUZWNobm9sb2dpZXMgLz5cclxuICAgICAgPFRpbWVsaW5lIC8+XHJcbiAgICAgey8qIDxBY29tcGxpc2htZW50cyAvPiovfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkJhY2ssIEJ1dHRvbkZyb250IH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDxCdXR0b25CYWNrIGFsdD17cHJvcHMuYWx0fSBmb3JtPXtwcm9wcy5mb3JtfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn1cclxuICAgIDxCdXR0b25Gcm9udCBhbHQ9e3Byb3BzLmFsdH0gb25DbGljaz17cHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59PC9CdXR0b25Gcm9udD5cclxuICA8L0J1dHRvbkJhY2s+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwiIH07XHJcbiAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIiB9O1xyXG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIiB9IDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIiB9IDtcclxuXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzY1cHgnIDogJzU2cHgnfTtcclxuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNzJweCcgOiAnNTZweCd9O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1OHB4IDAgMTZweCcgOiAnMCd9O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNDBweCAwIDEycHgnIDogJzAnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcyOHB4JyA6ICczMnB4J307XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMTZweCAwIDhweCcgOiAnMCd9O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgPyBcclxuICAgICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6XHJcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xyXG5cclxuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIiB9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogI0ZGRjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZjE2MjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA0MTY5O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzI2MnB4J307XHJcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNjRweCd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtKSA/ICcwJyA6ICcwIDAgODBweCd9O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJ307XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzE4NHB4J307XHJcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnNjRweCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICdpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyknIDogJ25vbmUnfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcxNnB4JyA6ICc4cHgnfTtcclxuXHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzAnIDogJzhweCd9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzI0cHgnfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IG5hdiB9KSA9PiBuYXYgPyAnMTZweCcgOiAnMjRweCd9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcclxuICB9XHJcbmBcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9