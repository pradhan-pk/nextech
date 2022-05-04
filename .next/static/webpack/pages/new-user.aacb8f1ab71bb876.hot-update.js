"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-user",{

/***/ "./pages/new-user.js":
/*!***************************!*\
  !*** ./pages/new-user.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar NewUserForm = function() {\n    _s();\n    // use of useRef to capture input value\n    var userNameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var userCollegeInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var userBranchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // use of useRouter from next/router to redirect this page to the Homepage\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // implementation of newUserHandler function\n    var newUserHandler = function() {\n        var _ref = _asyncToGenerator(E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var userData, response, data;\n            return E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        userData = {\n                            name: userNameInputRef.current.value,\n                            college: userCollegeInputRef.current.value,\n                            branch: userBranchInputRef.current.value\n                        };\n                        _ctx.next = 4;\n                        return fetch(\"/api/new-user\", {\n                            method: \"POST\",\n                            body: JSON.stringify(userData),\n                            headers: {\n                                \"content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        data = _ctx.sent;\n                        console.log(data);\n                        // redirects this page to the Homepage\n                        router.replace(\"/\");\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newUserHandler(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var INPUT_STYLE = \"my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"font-light text-4xl\",\n                children: \"Add a new User \"\n            }, void 0, false, {\n                fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: newUserHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"User Name\",\n                        required: true,\n                        ref: userNameInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"College\",\n                        required: true,\n                        ref: userCollegeInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Positions\",\n                        required: true,\n                        ref: userPositionsInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-yellow-500 text-gray-800 font-medium text-xl inline-flex w-full items-center px-4 py-4 rounded-xl\",\n                        children: \"Add Now\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewUserForm, \"ojfJaWCkfrv6gkHG7ryrup+ZieI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewUserForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewUserForm);\nvar _c;\n$RefreshReg$(_c, \"NewUserForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFnZXMvbmV3LXVzZXIuanM/OGY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOZXdVc2VyRm9ybSA9ICgpID0+IHtcclxuICAvLyB1c2Ugb2YgdXNlUmVmIHRvIGNhcHR1cmUgaW5wdXQgdmFsdWVcclxuICBjb25zdCB1c2VyTmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdXNlckNvbGxlZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHVzZXJCcmFuY2hJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyB1c2Ugb2YgdXNlUm91dGVyIGZyb20gbmV4dC9yb3V0ZXIgdG8gcmVkaXJlY3QgdGhpcyBwYWdlIHRvIHRoZSBIb21lcGFnZVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBuZXdVc2VySGFuZGxlciBmdW5jdGlvblxyXG4gIGNvbnN0IG5ld1VzZXJIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIHN0b3JlIHVzZXIgZGF0YSBpbiBhbiBvYmplY3RcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICBuYW1lOiB1c2VyTmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGNvbGxlZ2U6IHVzZXJDb2xsZWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgYnJhbmNoOiB1c2VyQnJhbmNoSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gdXNlIG9mIEZldGNoIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0byB0aGUgbmV3LXVzZXIgYXBpIGFuZCBnZXQgYmFjayBhIHJlc3BvbnNlXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9uZXctdXNlclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiY29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIC8vIHJlZGlyZWN0cyB0aGlzIHBhZ2UgdG8gdGhlIEhvbWVwYWdlXHJcbiAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgSU5QVVRfU1RZTEUgPVxyXG4gICAgXCJteS0yIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby0zMDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGwgaC0xMCByb3VuZGVkLW1kXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIHB4LTEyIHB5LTEyIG1heC13LTN4bCBteC1hdXRvIHNoYWRvdy14bCByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LTR4bFwiPkFkZCBhIG5ldyBVc2VyIDwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtuZXdVc2VySGFuZGxlcn0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcmVmPXt1c2VyTmFtZUlucHV0UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtJTlBVVF9TVFlMRX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb2xsZWdlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICByZWY9e3VzZXJDb2xsZWdlSW5wdXRSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e0lOUFVUX1NUWUxFfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc2l0aW9uc1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcmVmPXt1c2VyUG9zaXRpb25zSW5wdXRSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e0lOUFVUX1NUWUxFfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHRleHQtZ3JheS04MDAgZm9udC1tZWRpdW0gdGV4dC14bCBpbmxpbmUtZmxleCAgdy1mdWxsIGl0ZW1zLWNlbnRlciBweC00IHB5LTQgcm91bmRlZC14bFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE5vd1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VXNlckZvcm07Il0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVJvdXRlciIsIk5ld1VzZXJGb3JtIiwidXNlck5hbWVJbnB1dFJlZiIsInVzZXJDb2xsZWdlSW5wdXRSZWYiLCJ1c2VyQnJhbmNoSW5wdXRSZWYiLCJyb3V0ZXIiLCJuZXdVc2VySGFuZGxlciIsImV2ZW50IiwidXNlckRhdGEiLCJyZXNwb25zZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJjb2xsZWdlIiwiYnJhbmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJJTlBVVF9TVFlMRSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInJlZiIsInVzZXJQb3NpdGlvbnNJbnB1dFJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-user.js\n");

/***/ })

});