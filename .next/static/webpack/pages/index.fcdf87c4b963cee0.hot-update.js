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

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar User = function(param) {\n    var user = param.user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 p-8 shadow-lg rounded-lg bg-yellow-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-normal\",\n                    children: [\n                        user.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"px-3 font-light text-yellow-500\",\n                            children: [\n                                \"(\",\n                                user.occupation,\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\GGI APM\\\\nextech\\\\components\\\\User.js\",\n                            lineNumber: 7,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\GGI APM\\\\nextech\\\\components\\\\User.js\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-500 text-base\",\n                    children: user.positions\n                }, void 0, false, {\n                    fileName: \"E:\\\\GGI APM\\\\nextech\\\\components\\\\User.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2\",\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\GGI APM\\\\nextech\\\\components\\\\User.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\GGI APM\\\\nextech\\\\components\\\\User.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\GGI APM\\\\nextech\\\\components\\\\User.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, _this);\n};\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTtJQUNsQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkNBQTZDO2tCQUMxRCw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzs4QkFDL0IsOERBQUNDLElBQUU7b0JBQUNELFNBQVMsRUFBQyxxQkFBcUI7O3dCQUNoQ0YsSUFBSSxDQUFDSSxJQUFJO3NDQUNaLDhEQUFDQyxHQUFDOzRCQUFDSCxTQUFTLEVBQUMsaUNBQWlDOztnQ0FBQyxHQUMxQztnQ0FBQ0YsSUFBSSxDQUFDTSxVQUFVO2dDQUFDLEdBQ3RCOzs7Ozs7aUNBQUk7Ozs7Ozt5QkFDQzs4QkFDTCw4REFBQ0QsR0FBQztvQkFBQ0gsU0FBUyxFQUFDLHlCQUF5Qjs4QkFBRUYsSUFBSSxDQUFDTyxTQUFTOzs7Ozt5QkFBSzs4QkFDM0QsOERBQUNDLFFBQU07b0JBQUNOLFNBQVMsRUFBQyxrRUFBa0U7OEJBQUMsU0FFckY7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0w7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBakJLSCxLQUFBQSxJQUFJO0FBa0JSLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyLmpzP2Q2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlciA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IHAtOCBzaGFkb3ctbGcgcm91bmRlZC1sZyBiZy15ZWxsb3ctNTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0yXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ub3JtYWxcIj5cclxuICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMyBmb250LWxpZ2h0IHRleHQteWVsbG93LTUwMFwiPlxyXG4gICAgICAgICAgICAoe3VzZXIub2NjdXBhdGlvbn0pXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LWJhc2VcIj57dXNlci5wb3NpdGlvbnN9PC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCBweC00IHB5LTIgcm91bmRlZC1sZyB0ZXh0LWdyYXktNTAgZm9udC1tZWRpdW0gbXQtMlwiPlxyXG4gICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiAgZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsiVXNlciIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm5hbWUiLCJwIiwib2NjdXBhdGlvbiIsInBvc2l0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ })

});