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
  /***/ "./src/components/WaitlistForm.tsx":
    /*!*****************************************!*\
  !*** ./src/components/WaitlistForm.tsx ***!
  \*****************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "WaitlistForm": function() { return /* binding */ WaitlistForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/tailwind-merge.mjs");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.tsx");\n\n\n\nconst WaitlistForm = (props)=>{\n    const { id , ...divProps } = props;\n    const email = "developedlastweek@gmail.com";\n    const EmailMessage = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n            className: "mt-3 text-sm text-light",\n            children: "Be the first to experience SellMore."\n        }, void 0, false, {\n            fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx",\n            lineNumber: 16,\n            columnNumber: 5\n        }, undefined);\n    const mailtoLink = "mailto:".concat(email, "?subject=SellMore%20|");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        ...divProps,\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)("col", divProps.className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "relative gap-2 md:gap-4 row",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                        id: id,\n                        className: "px-4 py-2 bg-gray-200 rounded-lg text-lg text-gray-800",\n                        children: email\n                    }, void 0, false, {\n                        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: "button",\n                        onClick: ()=>window.location.href = mailtoLink,\n                        children: "Email Us"\n                    }, void 0, false, {\n                        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmailMessage, {}, void 0, false, {\n                fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WaitlistForm;\nvar _c;\n$RefreshReg$(_c, "WaitlistForm");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYWl0bGlzdEZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFFUDtBQUUzQixNQUFNRSxlQUFlLENBQzFCQyxRQUdHO0lBQ0gsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0MsVUFBVSxHQUFHRjtJQUU1QixNQUFNRyxRQUFRO0lBRWQsTUFBTUMsZUFBZSxrQkFDbkIsOERBQUNDO1lBQUVDLFdBQVU7c0JBQTBCOzs7Ozs7SUFLekMsTUFBTUMsYUFBYSxVQUFnQixPQUFOSixPQUFNO0lBRW5DLHFCQUNFLDhEQUFDSztRQUFLLEdBQUdOLFFBQVE7UUFBRUksV0FBV1QsdURBQU9BLENBQUMsT0FBT0ssU0FBU0ksU0FBUzs7MEJBQzdELDhEQUFDRTtnQkFBSUYsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUNDSixJQUFJQTt3QkFDSkssV0FBVTtrQ0FFVEg7Ozs7OztrQ0FJSCw4REFBQ0wsMkNBQU1BO3dCQUNMVyxNQUFLO3dCQUNMQyxTQUFTLElBQU9DLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHTjtrQ0FDeEM7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ0g7Ozs7Ozs7Ozs7O0FBR1AsRUFBRTtLQXZDV0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV2FpdGxpc3RGb3JtLnRzeD85NDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldGFpbGVkSFRNTFByb3BzLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IFdhaXRsaXN0Rm9ybSA9IChcbiAgcHJvcHM6IERldGFpbGVkSFRNTFByb3BzPEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiwgSFRNTERpdkVsZW1lbnQ+ICYge1xuICAgIGlkOiBzdHJpbmc7XG4gIH0sXG4pID0+IHtcbiAgY29uc3QgeyBpZCwgLi4uZGl2UHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGVtYWlsID0gXCJkZXZlbG9wZWRsYXN0d2Vla0BnbWFpbC5jb21cIjtcblxuICBjb25zdCBFbWFpbE1lc3NhZ2UgPSAoKSA9PiAoXG4gICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LXNtIHRleHQtbGlnaHRcIj5cbiAgICAgIEJlIHRoZSBmaXJzdCB0byBleHBlcmllbmNlIFNlbGxNb3JlLlxuICAgIDwvcD5cbiAgKTtcblxuICBjb25zdCBtYWlsdG9MaW5rID0gYG1haWx0bzoke2VtYWlsfT9zdWJqZWN0PVNlbGxNb3JlJTIwfGA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5kaXZQcm9wc30gY2xhc3NOYW1lPXt0d01lcmdlKFwiY29sXCIsIGRpdlByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBnYXAtMiBtZDpnYXAtNCByb3dcIj5cbiAgICAgICAgey8qIERpc3BsYXkgdGhlIGVtYWlsIHdpdGggcm91bmRlZCByZWN0YW5nbGUgYmFja2dyb3VuZCAqL31cbiAgICAgICAgPHBcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgdGV4dC1sZyB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtlbWFpbH1cbiAgICAgICAgPC9wPlxuICAgICAgICB7LyogTGluZSBiZW5lYXRoIGxhYmVsIHRvIGhpZGUgb3V0bGluZSAqL31cbiAgICAgICAgey8qIEJ1dHRvbiB0aGF0IHN0YXJ0cyBhbiBlbWFpbCAqL31cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1haWx0b0xpbmspfVxuICAgICAgICA+XG4gICAgICAgICAgRW1haWwgVXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxFbWFpbE1lc3NhZ2UgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidHdNZXJnZSIsIkJ1dHRvbiIsIldhaXRsaXN0Rm9ybSIsInByb3BzIiwiaWQiLCJkaXZQcm9wcyIsImVtYWlsIiwiRW1haWxNZXNzYWdlIiwicCIsImNsYXNzTmFtZSIsIm1haWx0b0xpbmsiLCJkaXYiLCJ0eXBlIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WaitlistForm.tsx\n',
        ),
      );

      /***/
    },
});
