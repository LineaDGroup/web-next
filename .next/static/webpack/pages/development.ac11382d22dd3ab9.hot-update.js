"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/development",{

/***/ "./components/cards/card.base.tsx":
/*!****************************************!*\
  !*** ./components/cards/card.base.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(param) {\n    let { children , config  } = param;\n    return(// Main container\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative p-4 \".concat(config.type === \"imageBackground\" && \"aspect-square pl-8\", \" bg-white w-full\"),\n        children: [\n            config.type === \"imageBackground\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-cover bg-center absolute w-full h-full top-0 left-0 \".concat(config.border && \"border-l-8\"),\n                style: {\n                    backgroundImage: \"url(\".concat(config.image, \")\"),\n                    borderColor: config.border\n                }\n            }, void 0, false, {\n                fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/cards/card.base.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            config.type !== \"imageBackground\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"aspect-video\",\n                src: config.image,\n                alt: \"LineaD Group\",\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/cards/card.base.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col flex \".concat(config.type === \"imageBackground\" && \"h-full\", \" relative w-full\"),\n                style: {\n                    justifyContent: config.justify,\n                    alignItems: config.align,\n                    textAlign: config.textAlign\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/cards/card.base.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/cards/card.base.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL2NhcmQuYmFzZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUdoQixTQUFTQyxLQUFLLEtBQXVCLEVBQUU7UUFBekIsRUFBQ0MsU0FBUSxFQUFFQyxPQUFNLEVBQU0sR0FBdkI7SUFDM0IsT0FDRSxpQkFBaUI7a0JBQ2pCLDhEQUFDQztRQUFJQyxXQUFXLGdCQUEwRSxPQUExREYsT0FBT0csSUFBSSxLQUFLLHFCQUFxQixzQkFBcUI7O1lBR2xGSCxPQUFPRyxJQUFJLEtBQUssbUNBQ2hCLDhEQUFDRjtnQkFBSUMsV0FBVywwREFBd0YsT0FBOUJGLE9BQU9JLE1BQU0sSUFBSTtnQkFBZ0JDLE9BQU87b0JBQUNDLGlCQUFpQixPQUFvQixPQUFiTixPQUFPTyxLQUFLLEVBQUM7b0JBQUlDLGFBQWFSLE9BQU9JLE1BQU07Z0JBQUE7Ozs7OztZQUl0TEosT0FBT0csSUFBSSxLQUFLLG1DQUNoQiw4REFBQ04sbURBQUtBO2dCQUFDSyxXQUFZO2dCQUFlTyxLQUFLVCxPQUFPTyxLQUFLO2dCQUFFRyxLQUFJO2dCQUFlQyxPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBR2hHLDhEQUFDWDtnQkFBSUMsV0FBVyxpQkFBK0QsT0FBOUNGLE9BQU9HLElBQUksS0FBSyxxQkFBcUIsVUFBUztnQkFBbUJFLE9BQU87b0JBQUNRLGdCQUFnQmIsT0FBT2MsT0FBTztvQkFBRUMsWUFBWWYsT0FBT2dCLEtBQUs7b0JBQUVDLFdBQVdqQixPQUFPaUIsU0FBUztnQkFBQTswQkFDMUxsQjs7Ozs7Ozs7Ozs7O0FBSWIsQ0FBQztLQXBCdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvY2FyZC5iYXNlLnRzeD9mMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVybCB9IGZyb20gXCJpbnNwZWN0b3JcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoe2NoaWxkcmVuLCBjb25maWd9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBNYWluIGNvbnRhaW5lclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcC00ICR7Y29uZmlnLnR5cGUgPT09ICdpbWFnZUJhY2tncm91bmQnICYmICdhc3BlY3Qtc3F1YXJlIHBsLTgnfSBiZy13aGl0ZSB3LWZ1bGxgfT5cbiAgICAgICAgey8qIEltYWdlIGFzIGJhY2tncm91bmQgKi99XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSAnaW1hZ2VCYWNrZ3JvdW5kJyAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiZy1jb3ZlciBiZy1jZW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0b3AtMCBsZWZ0LTAgJHtjb25maWcuYm9yZGVyICYmICdib3JkZXItbC04J31gfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2NvbmZpZy5pbWFnZX0pYCwgYm9yZGVyQ29sb3I6IGNvbmZpZy5ib3JkZXJ9fT48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7LyogSW1hZ2UgaW4gY2FyZCAqL31cbiAgICAgICAge1xuICAgICAgICAgICAgY29uZmlnLnR5cGUgIT09ICdpbWFnZUJhY2tncm91bmQnICYmXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtgYXNwZWN0LXZpZGVvYH0gc3JjPXtjb25maWcuaW1hZ2V9IGFsdD1cIkxpbmVhRCBHcm91cFwiIHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfT48L0ltYWdlPlxuICAgICAgICB9XG4gICAgICAgIHsvKiBDYXJkIGNvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1jb2wgZmxleCAke2NvbmZpZy50eXBlID09PSAnaW1hZ2VCYWNrZ3JvdW5kJyAmJiAnaC1mdWxsJ30gcmVsYXRpdmUgdy1mdWxsYH0gc3R5bGU9e3tqdXN0aWZ5Q29udGVudDogY29uZmlnLmp1c3RpZnksIGFsaWduSXRlbXM6IGNvbmZpZy5hbGlnbiwgdGV4dEFsaWduOiBjb25maWcudGV4dEFsaWdufX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmQiLCJjaGlsZHJlbiIsImNvbmZpZyIsImRpdiIsImNsYXNzTmFtZSIsInR5cGUiLCJib3JkZXIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwiYm9yZGVyQ29sb3IiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwianVzdGlmeSIsImFsaWduSXRlbXMiLCJhbGlnbiIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/card.base.tsx\n"));

/***/ })

});