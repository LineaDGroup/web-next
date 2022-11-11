"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/streaming",{

/***/ "./components/shared/navbar.tsx":
/*!**************************************!*\
  !*** ./components/shared/navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar(param) {\n    let { logo =\"/images/logo.png\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pages = [\n        {\n            link: \"/\".concat(router.locale, \"/\"),\n            name: \"Home\"\n        },\n        {\n            link: \"/\".concat(router.locale, \"/development\"),\n            name: \"Desarrollo\"\n        },\n        {\n            link: \"/\".concat(router.locale, \"/streaming\"),\n            name: \"Streaming\"\n        },\n        // {\n        //     link: '/projects',\n        //     name: 'Proyectos'\n        // },\n        // {\n        //     link: '/clients',\n        //     name: 'Clientes'\n        // },\n        {\n            link: \"#contact\",\n            name: \"Contactenos\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-black px-2 sm:px-4 py-2.5 fixed w-full z-50 top-0 left-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex flex-wrap justify-between items-center mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/\",\n                    className: \"flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        alt: \"LineaD Group\",\n                        src: logo,\n                        className: \"mr-3 h-6 sm:h-9\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden justify-between items-center w-full md:flex md:w-auto md:order-1\",\n                    id: \"navbar-sticky\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0\",\n                        children: pages.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: page.link,\n                                    className: \"block uppercase py-2 pr-4 pl-3 text-white md:p-0 dark:text-white text-lg md:hover:border-b-2 border-primary \".concat(page.link === \"/\" + router.locale + router.pathname && \"md:border-b-2\"),\n                                    \"aria-current\": \"page\",\n                                    children: page.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 3\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n            lineNumber: 38,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/eduardo/Dev/LineaD/web-next/components/shared/navbar.tsx\",\n        lineNumber: 37,\n        columnNumber: 1\n    }, this);\n}\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFFUztBQUd6QixTQUFTRSxPQUFPLEtBQXlDLEVBQUU7UUFBM0MsRUFBQ0MsTUFBSyxtQkFBa0IsRUFBaUIsR0FBekM7O0lBQzNCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxRQUFRO1FBQ1Y7WUFDSUMsTUFBTSxJQUFrQixPQUFkRixPQUFPRyxNQUFNLEVBQUM7WUFDeEJDLE1BQU07UUFDVjtRQUNBO1lBQ0lGLE1BQU0sSUFBa0IsT0FBZEYsT0FBT0csTUFBTSxFQUFDO1lBQ3hCQyxNQUFNO1FBQ1Y7UUFDQTtZQUNJRixNQUFNLElBQWtCLE9BQWRGLE9BQU9HLE1BQU0sRUFBQztZQUN4QkMsTUFBTTtRQUNWO1FBQ0EsSUFBSTtRQUNKLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsS0FBSztRQUNMLElBQUk7UUFDSix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLEtBQUs7UUFDTDtZQUNJRixNQUFNO1lBQ05FLE1BQU07UUFDVjtLQUNIO0lBQ0gscUJBRUYsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNmLDhEQUFDRTtvQkFBRUMsTUFBSztvQkFBSUgsV0FBVTs4QkFDbEIsNEVBQUNWLG1EQUFLQTt3QkFBQ2MsS0FBSTt3QkFBZUMsS0FBS1o7d0JBQU1PLFdBQVU7d0JBQWtCTSxNQUFNLElBQUk7Ozs7Ozs7Ozs7OzhCQUUvRSw4REFBQ0w7b0JBQUlELFdBQVU7b0JBQTBFTyxJQUFHOzhCQUMxRiw0RUFBQ0M7d0JBQUdSLFdBQVU7a0NBQ1RMLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ0M7MENBQ0csNEVBQUNWO29DQUFFQyxNQUFNTyxLQUFLZCxJQUFJO29DQUFFSSxXQUFXLCtHQUFvTCxPQUFyRVUsS0FBS2QsSUFBSSxLQUFLLE1BQUlGLE9BQU9HLE1BQU0sR0FBR0gsT0FBT21CLFFBQVEsSUFBSTtvQ0FBbUJDLGdCQUFhOzhDQUFRSixLQUFLWixJQUFJOzs7Ozs7K0JBRC9PYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXckIsQ0FBQztHQWxEdUJuQjs7UUFDTEQsa0RBQVNBOzs7S0FESkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyLnRzeD9hODU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoe2xvZ289Jy9pbWFnZXMvbG9nby5wbmcnfToge2xvZ28/OnN0cmluZ30pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHBhZ2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiBgLyR7cm91dGVyLmxvY2FsZX0vYCxcbiAgICAgICAgICAgIG5hbWU6ICdIb21lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiBgLyR7cm91dGVyLmxvY2FsZX0vZGV2ZWxvcG1lbnRgLFxuICAgICAgICAgICAgbmFtZTogJ0Rlc2Fycm9sbG8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpbms6IGAvJHtyb3V0ZXIubG9jYWxlfS9zdHJlYW1pbmdgLFxuICAgICAgICAgICAgbmFtZTogJ1N0cmVhbWluZydcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgbGluazogJy9wcm9qZWN0cycsXG4gICAgICAgIC8vICAgICBuYW1lOiAnUHJveWVjdG9zJ1xuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBsaW5rOiAnL2NsaWVudHMnLFxuICAgICAgICAvLyAgICAgbmFtZTogJ0NsaWVudGVzJ1xuICAgICAgICAvLyB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiAnI2NvbnRhY3QnLFxuICAgICAgICAgICAgbmFtZTogJ0NvbnRhY3Rlbm9zJ1xuICAgICAgICB9XG4gICAgXVxuICByZXR1cm4gKFxuXG48bmF2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHB4LTIgc206cHgtNCBweS0yLjUgZml4ZWQgdy1mdWxsIHotNTAgdG9wLTAgbGVmdC0wXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXgtYXV0b1wiPlxuICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8SW1hZ2UgYWx0PVwiTGluZWFEIEdyb3VwXCIgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJtci0zIGgtNiBzbTpoLTlcIiBmaWxsPXt0cnVlfS8+XG4gIDwvYT5cbiAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4ganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWQ6ZmxleCBtZDp3LWF1dG8gbWQ6b3JkZXItMVwiIGlkPVwibmF2YmFyLXN0aWNreVwiPlxuICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNCBtdC00IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtZDptdC0wIG1kOnRleHQtc20gbWQ6Zm9udC1tZWRpdW0gbWQ6Ym9yZGVyLTBcIj5cbiAgICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BhZ2UubGlua30gY2xhc3NOYW1lPXtgYmxvY2sgdXBwZXJjYXNlIHB5LTIgcHItNCBwbC0zIHRleHQtd2hpdGUgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSB0ZXh0LWxnIG1kOmhvdmVyOmJvcmRlci1iLTIgYm9yZGVyLXByaW1hcnkgJHtwYWdlLmxpbmsgPT09ICcvJytyb3V0ZXIubG9jYWxlICsgcm91dGVyLnBhdGhuYW1lICYmICdtZDpib3JkZXItYi0yJ31gfSBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+e3BhZ2UubmFtZX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgXG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uYXY+XG5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsIk5hdmJhciIsImxvZ28iLCJyb3V0ZXIiLCJwYWdlcyIsImxpbmsiLCJsb2NhbGUiLCJuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJhbHQiLCJzcmMiLCJmaWxsIiwiaWQiLCJ1bCIsIm1hcCIsInBhZ2UiLCJpbmRleCIsImxpIiwicGF0aG5hbWUiLCJhcmlhLWN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/shared/navbar.tsx\n"));

/***/ })

});