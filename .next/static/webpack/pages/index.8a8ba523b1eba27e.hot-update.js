"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./src/sections/Header.tsx":
    /*!*********************************!*\
  !*** ./src/sections/Header.tsx ***!
  \*********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Header": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! usehooks-ts */ "./node_modules/usehooks-ts/dist/index.mjs");\n/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LinkButton */ "./src/components/LinkButton.tsx");\n/* harmony import */ var _svg_DarkModeIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/DarkModeIcons */ "./src/svg/DarkModeIcons.tsx");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { isDarkMode , toggleDarkMode  } = param;\n    _s();\n    const [top, setTop] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [nextSection, setNextSection] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [reloaded, setReloaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // Handle scrolling logic\n    const handleScroll = ()=>{\n        setTop(window.pageYOffset <= 10);\n        setNextSection(window.pageYOffset > window.innerHeight);\n    };\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useEventListener)("scroll", handleScroll);\n    // Clean up stale dark mode\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useEffectOnce)(()=>setReloaded(true));\n    const goToEmail = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: "smooth"\n        });\n    };\n    const Logo = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: "/",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "items-center block gap-1 row",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "text-3xl font-bold",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                        className: "items-center gap-4 row",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: "/images/logo.png",\n                                alt: "SellMore Logo",\n                                height: "60",\n                                width: "60"\n                            }, void 0, false, {\n                                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                className: "text-neon-blue",\n                                children: "SellMore"\n                            }, void 0, false, {\n                                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n            lineNumber: 41,\n            columnNumber: 5\n        }, undefined);\n    const Navigation = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                className: "items-center gap-2 row",\n                children: [\n                    reloaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {\n                            button: true,\n                            onClick: toggleDarkMode,\n                            title: "Toggle dark mode",\n                            "aria-label": "Toggle dark mode",\n                            children: isDarkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_DarkModeIcons__WEBPACK_IMPORTED_MODULE_5__.Moon, {}, void 0, false, {\n                                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                                lineNumber: 69,\n                                columnNumber: 29\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_DarkModeIcons__WEBPACK_IMPORTED_MODULE_5__.Sun, {}, void 0, false, {\n                                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                                lineNumber: 69,\n                                columnNumber: 40\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {\n                            href: _constants__WEBPACK_IMPORTED_MODULE_6__.FRONTEND_URL,\n                            children: "Sign In"\n                        }, void 0, false, {\n                            fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n            lineNumber: 59,\n            columnNumber: 5\n        }, undefined);\n    return(// Colors must be set explicitly since opacity and blur don\'t work together\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {\n        className: "fixed w-full z-30 transition duration-300 ".concat(!top && "bg-custom-light/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "items-center justify-between h-16 px-5 mx-auto row md:h-20 max-w-7xl sm:px-6",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                    fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navigation, {}, void 0, false, {\n                    fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/sections/Header.tsx",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined));\n};\n_s(Header, "bzvrHjcX74oDfArpM/q5wnTseTI=", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useEventListener,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useEffectOnce\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, "Header");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ0Y7QUFDSTtBQUM2QjtBQUdSO0FBQ0w7QUFDTDtBQUdyQyxNQUFNUyxTQUFTLFNBTWhCO1FBTmlCLEVBQ3JCQyxXQUFVLEVBQ1ZDLGVBQWMsRUFJZjs7SUFDQyxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUNuQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUU5Qyx5QkFBeUI7SUFDekIsTUFBTWdCLGVBQWUsSUFBTTtRQUN6QkwsT0FBT00sT0FBT0MsV0FBVyxJQUFJO1FBQzdCTCxlQUFlSSxPQUFPQyxXQUFXLEdBQUdELE9BQU9FLFdBQVc7SUFDeEQ7SUFDQWpCLDZEQUFnQkEsQ0FBQyxVQUFVYztJQUUzQiwyQkFBMkI7SUFDM0JmLDBEQUFhQSxDQUFDLElBQU1jLFlBQVksSUFBSTtJQUVwQyxNQUFNSyxZQUFZLElBQU07UUFDdEJILE9BQU9JLFFBQVEsQ0FBQztZQUNkWCxLQUFLO1lBQ0xZLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUMsT0FBTyxrQkFDWCw4REFBQ3hCLGtEQUFJQTtZQUFDeUIsTUFBSztzQkFDVCw0RUFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUM1QixtREFBS0E7Z0NBQ0Y2QixLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxRQUFPO2dDQUNQQyxPQUFNOzs7Ozs7MENBRVIsOERBQUNDO2dDQUFLTCxXQUFVOzBDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTzNDLE1BQU1NLGFBQWEsa0JBQ2pCLDhEQUFDQztzQkFDQyw0RUFBQ0M7Z0JBQUdSLFdBQVU7O29CQUNYWix5QkFDQyw4REFBQ3FCO2tDQUNDLDRFQUFDaEMsOERBQVVBOzRCQUNUaUMsTUFBTTs0QkFDTkMsU0FBUzVCOzRCQUNUNkIsT0FBTTs0QkFDTkMsY0FBVztzQ0FFVi9CLDJCQUFhLDhEQUFDSixvREFBSUE7Ozs7MERBQU0sOERBQUNDLG1EQUFHQTs7Ozt5Q0FBRzs7Ozs7Ozs7OztvQ0FHbEMsSUFBSTtrQ0FDUiw4REFBQzhCO2tDQUNDLDRFQUFDaEMsOERBQVVBOzRCQUFDcUIsTUFBTWxCLG9EQUFZQTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU14QyxPQUNFLDJFQUEyRTtrQkFDM0UsOERBQUNrQztRQUNDZCxXQUFXLDZDQUdWLE9BRkMsQ0FBQ2hCLE9BQ0Q7a0JBSUYsNEVBQUNlO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDSDs7Ozs7OEJBQ0QsOERBQUNTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQsRUFBRTtHQW5GV3pCOztRQWdCWEwseURBQWdCQTtRQUdoQkQsc0RBQWFBOzs7S0FuQkZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9IZWFkZXIudHN4PzEwZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0T25jZSwgdXNlRXZlbnRMaXN0ZW5lciB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rQnV0dG9uXCI7XG5pbXBvcnQgeyBNb29uLCBTdW4gfSBmcm9tIFwiLi4vc3ZnL0RhcmtNb2RlSWNvbnNcIjtcbmltcG9ydCB7IEZST05URU5EX1VSTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHtcbiAgaXNEYXJrTW9kZSxcbiAgdG9nZ2xlRGFya01vZGUsXG59OiB7XG4gIGlzRGFya01vZGU6IGJvb2xlYW47XG4gIHRvZ2dsZURhcmtNb2RlOiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtuZXh0U2VjdGlvbiwgc2V0TmV4dFNlY3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVsb2FkZWQsIHNldFJlbG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBIYW5kbGUgc2Nyb2xsaW5nIGxvZ2ljXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBzZXRUb3Aod2luZG93LnBhZ2VZT2Zmc2V0IDw9IDEwKTtcbiAgICBzZXROZXh0U2VjdGlvbih3aW5kb3cucGFnZVlPZmZzZXQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9O1xuICB1c2VFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgLy8gQ2xlYW4gdXAgc3RhbGUgZGFyayBtb2RlXG4gIHVzZUVmZmVjdE9uY2UoKCkgPT4gc2V0UmVsb2FkZWQodHJ1ZSkpO1xuXG4gIGNvbnN0IGdvVG9FbWFpbCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgTG9nbyA9ICgpID0+IChcbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgYmxvY2sgZ2FwLTEgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGdhcC00IHJvd1wiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiU2VsbE1vcmUgTG9nb1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjYwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI2MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1uZW9uLWJsdWVcIj5TZWxsTW9yZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG5cbiAgY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IChcbiAgICA8bmF2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBnYXAtMiByb3dcIj5cbiAgICAgICAge3JlbG9hZGVkID8gKCAvLyBPbmx5IHNob3cgYWZ0ZXIgZmlyc3QgcmVsb2FkXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfVxuICAgICAgICAgICAgICB0aXRsZT1cIlRvZ2dsZSBkYXJrIG1vZGVcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIGRhcmsgbW9kZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc0RhcmtNb2RlID8gPE1vb24gLz4gOiA8U3VuIC8+fVxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17RlJPTlRFTkRfVVJMfT5TaWduIEluPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIC8vIENvbG9ycyBtdXN0IGJlIHNldCBleHBsaWNpdGx5IHNpbmNlIG9wYWNpdHkgYW5kIGJsdXIgZG9uJ3Qgd29yayB0b2dldGhlclxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHctZnVsbCB6LTMwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwICR7XG4gICAgICAgICF0b3AgJiZcbiAgICAgICAgXCJiZy1jdXN0b20tbGlnaHQvOTAgZGFyazpiZy1ncmF5LTkwMC85MCBiYWNrZHJvcC1ibHVyLXNtIHNoYWRvdy1sZ1wiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICB7LyogSGVhZGVyIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNiBweC01IG14LWF1dG8gcm93IG1kOmgtMjAgbWF4LXctN3hsIHNtOnB4LTZcIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdE9uY2UiLCJ1c2VFdmVudExpc3RlbmVyIiwiTGlua0J1dHRvbiIsIk1vb24iLCJTdW4iLCJGUk9OVEVORF9VUkwiLCJIZWFkZXIiLCJpc0RhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJ0b3AiLCJzZXRUb3AiLCJuZXh0U2VjdGlvbiIsInNldE5leHRTZWN0aW9uIiwicmVsb2FkZWQiLCJzZXRSZWxvYWRlZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJnb1RvRW1haWwiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiTG9nbyIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInNwYW4iLCJOYXZpZ2F0aW9uIiwibmF2IiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0aXRsZSIsImFyaWEtbGFiZWwiLCJoZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/Header.tsx\n',
        ),
      );

      /***/
    },
});
