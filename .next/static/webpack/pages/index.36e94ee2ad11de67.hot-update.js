"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/WaitlistForm.tsx":
/*!*****************************************!*\
  !*** ./src/components/WaitlistForm.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WaitlistForm\": function() { return /* binding */ WaitlistForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ \"./node_modules/tailwind-merge/dist/tailwind-merge.mjs\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.tsx\");\n\n\n\nconst WaitlistForm = (props)=>{\n    const { id , ...divProps } = props;\n    const email = \"developedlastweek@gmail.com\";\n    const mailtoLink = \"mailto:\".concat(email, \"?subject=SellMore%20|\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...divProps,\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"col\", divProps.className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative gap-2 md:gap-4 row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    id: id,\n                    className: \"px-4 py-2 bg-custom-light-lighter rounded-lg text-lg text-gray-800\",\n                    children: email\n                }, void 0, false, {\n                    fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    type: \"button\",\n                    onClick: ()=>window.location.href = mailtoLink,\n                    children: \"Email Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/justincasler/Projects/SellMoreLandingPage/src/components/WaitlistForm.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WaitlistForm;\nvar _c;\n$RefreshReg$(_c, \"WaitlistForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYWl0bGlzdEZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFFUDtBQUUzQixNQUFNRSxlQUFlLENBQzFCQyxRQUdHO0lBQ0gsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0MsVUFBVSxHQUFHRjtJQUU1QixNQUFNRyxRQUFRO0lBRWQsTUFBTUMsYUFBYSxVQUFnQixPQUFORCxPQUFNO0lBRW5DLHFCQUNFLDhEQUFDRTtRQUFLLEdBQUdILFFBQVE7UUFBRUksV0FBV1QsdURBQU9BLENBQUMsT0FBT0ssU0FBU0ksU0FBUztrQkFDN0QsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFDQ04sSUFBSUE7b0JBQ0pLLFdBQVU7OEJBRVRIOzs7Ozs7OEJBRUgsOERBQUNMLDJDQUFNQTtvQkFDTFUsTUFBSztvQkFDTEMsU0FBUyxJQUFPQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR1I7OEJBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1ULEVBQUU7S0E5QldMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dhaXRsaXN0Rm9ybS50c3g/OTQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXRhaWxlZEhUTUxQcm9wcywgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmV4cG9ydCBjb25zdCBXYWl0bGlzdEZvcm0gPSAoXG4gIHByb3BzOiBEZXRhaWxlZEhUTUxQcm9wczxIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4sIEhUTUxEaXZFbGVtZW50PiAmIHtcbiAgICBpZDogc3RyaW5nO1xuICB9LFxuKSA9PiB7XG4gIGNvbnN0IHsgaWQsIC4uLmRpdlByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBlbWFpbCA9IFwiZGV2ZWxvcGVkbGFzdHdlZWtAZ21haWwuY29tXCI7XG5cbiAgY29uc3QgbWFpbHRvTGluayA9IGBtYWlsdG86JHtlbWFpbH0/c3ViamVjdD1TZWxsTW9yZSUyMHxgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4uZGl2UHJvcHN9IGNsYXNzTmFtZT17dHdNZXJnZShcImNvbFwiLCBkaXZQcm9wcy5jbGFzc05hbWUpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ2FwLTIgbWQ6Z2FwLTQgcm93XCI+XG4gICAgICAgIHsvKiBEaXNwbGF5IHRoZSBlbWFpbCB3aXRoIHJvdW5kZWQgcmVjdGFuZ2xlIGJhY2tncm91bmQgKi99XG4gICAgICAgIDxwXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1jdXN0b20tbGlnaHQtbGlnaHRlciByb3VuZGVkLWxnIHRleHQtbGcgdGV4dC1ncmF5LTgwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7ZW1haWx9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1haWx0b0xpbmspfVxuICAgICAgICA+XG4gICAgICAgICAgRW1haWwgVXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidHdNZXJnZSIsIkJ1dHRvbiIsIldhaXRsaXN0Rm9ybSIsInByb3BzIiwiaWQiLCJkaXZQcm9wcyIsImVtYWlsIiwibWFpbHRvTGluayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ0eXBlIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WaitlistForm.tsx\n"));

/***/ })

});