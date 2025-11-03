/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(pages-dir-node)/../../node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/../../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Page transition variants\nconst pageVariants = {\n    initial: {\n        opacity: 0,\n        y: 8\n    },\n    in: {\n        opacity: 1,\n        y: 0\n    },\n    out: {\n        opacity: 0,\n        y: -8\n    }\n};\n// Transition settings\nconst pageTransition = {\n    type: 'tween',\n    ease: 'anticipate',\n    duration: 0.4\n};\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Yatra+One&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                mode: \"wait\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: \"initial\",\n                    animate: \"in\",\n                    exit: \"out\",\n                    variants: pageVariants,\n                    transition: pageTransition,\n                    className: \"page-transition-wrapper\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, router.route, false, {\n                    fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mahi Karna R\\\\OneDrive\\\\Desktop\\\\SevaSahayak\\\\packages\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRztBQUVSO0FBQzhCO0FBQ2hCO0FBQ1g7QUFFN0IsMkJBQTJCO0FBQzNCLE1BQU1LLGVBQWU7SUFDbkJDLFNBQVM7UUFDUEMsU0FBUztRQUNUQyxHQUFHO0lBQ0w7SUFDQUMsSUFBSTtRQUNGRixTQUFTO1FBQ1RDLEdBQUc7SUFDTDtJQUNBRSxLQUFLO1FBQ0hILFNBQVM7UUFDVEMsR0FBRyxDQUFDO0lBQ047QUFDRjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNRyxpQkFBaUI7SUFDckJDLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0FBQ1o7QUFFQSxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLE1BQU1DLFNBQVNmLHNEQUFTQTtJQUV4QixxQkFDRTs7MEJBQ0UsOERBQUNDLGtEQUFJQTs7a0NBQ0gsOERBQUNlO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUFLRSxNQUFLO3dCQUFtR0QsS0FBSTs7Ozs7O2tDQUNsSCw4REFBQ0Q7d0JBQUtFLE1BQUs7d0JBQXdGRCxLQUFJOzs7Ozs7Ozs7Ozs7MEJBRXpHLDhEQUFDbkIsMERBQWVBO2dCQUFDc0IsTUFBSzswQkFDcEIsNEVBQUNyQixpREFBTUEsQ0FBQ3NCLEdBQUc7b0JBRVRsQixTQUFRO29CQUNSbUIsU0FBUTtvQkFDUkMsTUFBSztvQkFDTEMsVUFBVXRCO29CQUNWdUIsWUFBWWpCO29CQUNaa0IsV0FBVTs4QkFFViw0RUFBQ2I7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O21CQVJuQkMsT0FBT1ksS0FBSzs7Ozs7Ozs7Ozs7O0FBYTNCO0FBRUEsaUVBQWVmLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFoaSBLYXJuYSBSXFxPbmVEcml2ZVxcRGVza3RvcFxcU2V2YVNhaGF5YWtcXHBhY2thZ2VzXFx3ZWJcXHNyY1xccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG4vLyBQYWdlIHRyYW5zaXRpb24gdmFyaWFudHNcclxuY29uc3QgcGFnZVZhcmlhbnRzID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB5OiA4LFxyXG4gIH0sXHJcbiAgaW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gIH0sXHJcbiAgb3V0OiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgeTogLTgsXHJcbiAgfSxcclxufTtcclxuXHJcbi8vIFRyYW5zaXRpb24gc2V0dGluZ3NcclxuY29uc3QgcGFnZVRyYW5zaXRpb24gPSB7XHJcbiAgdHlwZTogJ3R3ZWVuJyxcclxuICBlYXNlOiAnYW50aWNpcGF0ZScsXHJcbiAgZHVyYXRpb246IDAuNCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTZXJpZitEZXZhbmFnYXJpOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmZhbWlseT1ZYXRyYStPbmUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBrZXk9e3JvdXRlci5yb3V0ZX1cclxuICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgIGFuaW1hdGU9XCJpblwiXHJcbiAgICAgICAgICBleGl0PVwib3V0XCJcclxuICAgICAgICAgIHZhcmlhbnRzPXtwYWdlVmFyaWFudHN9XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXtwYWdlVHJhbnNpdGlvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtdHJhbnNpdGlvbi13cmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VSb3V0ZXIiLCJIZWFkIiwicGFnZVZhcmlhbnRzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiaW4iLCJvdXQiLCJwYWdlVHJhbnNpdGlvbiIsInR5cGUiLCJlYXNlIiwiZHVyYXRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NPcmlnaW4iLCJtb2RlIiwiZGl2IiwiYW5pbWF0ZSIsImV4aXQiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJjbGFzc05hbWUiLCJyb3V0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/leaflet"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();