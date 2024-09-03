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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! usehooks-ts */ \"usehooks-ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([usehooks_ts__WEBPACK_IMPORTED_MODULE_7__]);\nusehooks_ts__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst siteTitle = \"Vivid — Build visually. Code faster.\";\nconst siteDescription = \"Make CSS styling a breeze with Vivid's in-browser visual editor that automatically updates your code.\";\nconst App = ({ Component , pageProps  })=>{\n    const { isDarkMode , toggle: toggleDarkMode  } = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useDarkMode)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (isDarkMode) {\n            document.documentElement.classList.add(\"dark\");\n            document.documentElement.style.setProperty(\"color-scheme\", \"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n            document.documentElement.style.setProperty(\"color-scheme\", \"light\");\n        }\n    }, [\n        isDarkMode\n    ]);\n    // Initialize animations\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useEffectOnce)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n            once: true,\n            // Animations always disabled in dev mode; disabled on phones in prod\n            disable:  true ? true : 0,\n            duration: 700,\n            easing: \"ease-out-cubic\"\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        sizes: \"180x180\",\n                        href: \"/apple-touch-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/pages/_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/pages/_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://vivid.lol/images/landing-page.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/pages/_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_5__.NextSeo, {\n                title: siteTitle,\n                description: siteDescription,\n                themeColor: isDarkMode ? \"#18181b\" : \"#fafafa\",\n                openGraph: {\n                    title: siteTitle,\n                    description: siteDescription\n                }\n            }, void 0, false, {\n                fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/pages/_app.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                isDarkMode: isDarkMode,\n                toggleDarkMode: toggleDarkMode\n            }, void 0, false, {\n                fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/pages/_app.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUVUO0FBRU87QUFDTTtBQUNEO0FBQ3VCO0FBRXpELE1BQU1NLFlBQVk7QUFDbEIsTUFBTUMsa0JBQ0o7QUFFRixNQUFNQyxNQUFNLENBQUMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBSztJQUNsRCxNQUFNLEVBQUVDLFdBQVUsRUFBRUMsUUFBUUMsZUFBYyxFQUFFLEdBQUdULHdEQUFXQTtJQUUxREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLFlBQVk7WUFDZEcsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUN2Q0gsU0FBU0MsZUFBZSxDQUFDRyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxnQkFBZ0I7UUFDN0QsT0FBTztZQUNMTCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO1lBQzFDTixTQUFTQyxlQUFlLENBQUNHLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGdCQUFnQjtRQUM3RCxDQUFDO0lBQ0gsR0FBRztRQUFDUjtLQUFXO0lBRWYsd0JBQXdCO0lBQ3hCTiwwREFBYUEsQ0FBQyxJQUFNO1FBQ2xCTCwrQ0FBUSxDQUFDO1lBQ1BzQixNQUFNLElBQUk7WUFDVixxRUFBcUU7WUFDckVDLFNBQVNDLEtBQXNDLEdBQUcsSUFBSSxHQUFHLENBQU87WUFDaEVDLFVBQVU7WUFDVkMsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN6QixrREFBSUE7O2tDQUNILDhEQUFDMEI7d0JBQ0NDLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ0g7d0JBQUtDLEtBQUk7d0JBQU9FLE1BQUs7Ozs7OztrQ0FDdEIsOERBQUNDO3dCQUNDQyxVQUFTO3dCQUNUQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUMvQiw2Q0FBT0E7Z0JBQ05nQyxPQUFPNUI7Z0JBQ1A2QixhQUFhNUI7Z0JBQ2I2QixZQUFZekIsYUFBYSxZQUFZLFNBQVM7Z0JBQzlDMEIsV0FBVztvQkFDVEgsT0FBTzVCO29CQUNQNkIsYUFBYTVCO2dCQUNmOzs7Ozs7MEJBRUYsOERBQUNFO2dCQUNFLEdBQUdDLFNBQVM7Z0JBQ2JDLFlBQVlBO2dCQUNaRSxnQkFBZ0JBOzs7Ozs7OztBQUl4QjtBQUVBLGlFQUFlTCxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdml2aWQtbGFuZGluZy10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEYXJrTW9kZSwgdXNlRWZmZWN0T25jZSB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuXG5jb25zdCBzaXRlVGl0bGUgPSBcIlZpdmlkIOKAlCBCdWlsZCB2aXN1YWxseS4gQ29kZSBmYXN0ZXIuXCI7XG5jb25zdCBzaXRlRGVzY3JpcHRpb24gPVxuICBcIk1ha2UgQ1NTIHN0eWxpbmcgYSBicmVlemUgd2l0aCBWaXZpZCdzIGluLWJyb3dzZXIgdmlzdWFsIGVkaXRvciB0aGF0IGF1dG9tYXRpY2FsbHkgdXBkYXRlcyB5b3VyIGNvZGUuXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXNEYXJrTW9kZSwgdG9nZ2xlOiB0b2dnbGVEYXJrTW9kZSB9ID0gdXNlRGFya01vZGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0RhcmtNb2RlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zY2hlbWVcIiwgXCJkYXJrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zY2hlbWVcIiwgXCJsaWdodFwiKTtcbiAgICB9XG4gIH0sIFtpc0RhcmtNb2RlXSk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBhbmltYXRpb25zXG4gIHVzZUVmZmVjdE9uY2UoKCkgPT4ge1xuICAgIEFPUy5pbml0KHtcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgICAvLyBBbmltYXRpb25zIGFsd2F5cyBkaXNhYmxlZCBpbiBkZXYgbW9kZTsgZGlzYWJsZWQgb24gcGhvbmVzIGluIHByb2RcbiAgICAgIGRpc2FibGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyB0cnVlIDogXCJwaG9uZVwiLFxuICAgICAgZHVyYXRpb246IDcwMCxcbiAgICAgIGVhc2luZzogXCJlYXNlLW91dC1jdWJpY1wiLFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29ucy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vdml2aWQubG9sL2ltYWdlcy9sYW5kaW5nLXBhZ2UucG5nXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXtzaXRlVGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtzaXRlRGVzY3JpcHRpb259XG4gICAgICAgIHRoZW1lQ29sb3I9e2lzRGFya01vZGUgPyBcIiMxODE4MWJcIiA6IFwiI2ZhZmFmYVwifVxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0aXRsZTogc2l0ZVRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzaXRlRGVzY3JpcHRpb24sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICBpc0RhcmtNb2RlPXtpc0RhcmtNb2RlfVxuICAgICAgICB0b2dnbGVEYXJrTW9kZT17dG9nZ2xlRGFya01vZGV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkFPUyIsIkhlYWQiLCJOZXh0U2VvIiwidXNlRWZmZWN0IiwidXNlRGFya01vZGUiLCJ1c2VFZmZlY3RPbmNlIiwic2l0ZVRpdGxlIiwic2l0ZURlc2NyaXB0aW9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNEYXJrTW9kZSIsInRvZ2dsZSIsInRvZ2dsZURhcmtNb2RlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicmVtb3ZlIiwiaW5pdCIsIm9uY2UiLCJkaXNhYmxlIiwicHJvY2VzcyIsImR1cmF0aW9uIiwiZWFzaW5nIiwibGluayIsInJlbCIsInNpemVzIiwiaHJlZiIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGhlbWVDb2xvciIsIm9wZW5HcmFwaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "usehooks-ts":
/*!******************************!*\
  !*** external "usehooks-ts" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("usehooks-ts");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();