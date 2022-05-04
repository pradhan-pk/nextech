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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar NewUserForm = function() {\n    _s();\n    // use of useRef to capture input value\n    var userNameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var userCollegeInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var userBranchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // use of useRouter from next/router to redirect this page to the Homepage\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // implementation of newUserHandler function\n    var newUserHandler = function() {\n        var _ref = _asyncToGenerator(E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var userData, response, data;\n            return E_GGI_APM_nextech_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        userData = {\n                            name: userNameInputRef.current.value,\n                            college: userCollegeInputRef.current.value,\n                            branch: userBranchInputRef.current.value\n                        };\n                        _ctx.next = 4;\n                        return fetch(\"/api/new-user\", {\n                            method: \"POST\",\n                            body: JSON.stringify(userData),\n                            headers: {\n                                \"content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        data = _ctx.sent;\n                        console.log(data);\n                        // redirects this page to the Homepage\n                        router.replace(\"/\");\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newUserHandler(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var INPUT_STYLE = \"my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"font-light text-4xl\",\n                children: \"Add a new User \"\n            }, void 0, false, {\n                fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: newUserHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"User Name\",\n                        required: true,\n                        ref: userNameInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"College\",\n                        required: true,\n                        ref: userOccupationInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Positions\",\n                        required: true,\n                        ref: userPositionsInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-yellow-500 text-gray-800 font-medium text-xl inline-flex w-full items-center px-4 py-4 rounded-xl\",\n                        children: \"Add Now\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\GGI APM\\\\nextech\\\\pages\\\\new-user.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewUserForm, \"ojfJaWCkfrv6gkHG7ryrup+ZieI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewUserForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewUserForm);\nvar _c;\n$RefreshReg$(_c, \"NewUserForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2VzL25ldy11c2VyLmpzPzhmOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmV3VXNlckZvcm0gPSAoKSA9PiB7XHJcbiAgLy8gdXNlIG9mIHVzZVJlZiB0byBjYXB0dXJlIGlucHV0IHZhbHVlXHJcbiAgY29uc3QgdXNlck5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHVzZXJDb2xsZWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB1c2VyQnJhbmNoSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gdXNlIG9mIHVzZVJvdXRlciBmcm9tIG5leHQvcm91dGVyIHRvIHJlZGlyZWN0IHRoaXMgcGFnZSB0byB0aGUgSG9tZXBhZ2VcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaW1wbGVtZW50YXRpb24gb2YgbmV3VXNlckhhbmRsZXIgZnVuY3Rpb25cclxuICBjb25zdCBuZXdVc2VySGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBzdG9yZSB1c2VyIGRhdGEgaW4gYW4gb2JqZWN0XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogdXNlck5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBjb2xsZWdlOiB1c2VyQ29sbGVnZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGJyYW5jaDogdXNlckJyYW5jaElucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVzZSBvZiBGZXRjaCBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG8gdGhlIG5ldy11c2VyIGFwaSBhbmQgZ2V0IGJhY2sgYSByZXNwb25zZVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LXVzZXJcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcImNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAvLyByZWRpcmVjdHMgdGhpcyBwYWdlIHRvIHRoZSBIb21lcGFnZVxyXG4gICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IElOUFVUX1NUWUxFID1cclxuICAgIFwibXktMiBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tMzAwIGZvY3VzOnJpbmctb3BhY2l0eS01MCBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsIGgtMTAgcm91bmRlZC1tZFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBweC0xMiBweS0xMiBtYXgtdy0zeGwgbXgtYXV0byBzaGFkb3cteGwgcm91bmRlZC0yeGxcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC00eGxcIj5BZGQgYSBuZXcgVXNlciA8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17bmV3VXNlckhhbmRsZXJ9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHJlZj17dXNlck5hbWVJbnB1dFJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17SU5QVVRfU1RZTEV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29sbGVnZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcmVmPXt1c2VyT2NjdXBhdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtJTlBVVF9TVFlMRX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3NpdGlvbnNcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHJlZj17dXNlclBvc2l0aW9uc0lucHV0UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtJTlBVVF9TVFlMRX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB0ZXh0LWdyYXktODAwIGZvbnQtbWVkaXVtIHRleHQteGwgaW5saW5lLWZsZXggIHctZnVsbCBpdGVtcy1jZW50ZXIgcHgtNCBweS00IHJvdW5kZWQteGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBOb3dcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1VzZXJGb3JtOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJOZXdVc2VyRm9ybSIsInVzZXJOYW1lSW5wdXRSZWYiLCJ1c2VyQ29sbGVnZUlucHV0UmVmIiwidXNlckJyYW5jaElucHV0UmVmIiwicm91dGVyIiwibmV3VXNlckhhbmRsZXIiLCJldmVudCIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwiY29sbGVnZSIsImJyYW5jaCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiSU5QVVRfU1RZTEUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyZWYiLCJ1c2VyT2NjdXBhdGlvbklucHV0UmVmIiwidXNlclBvc2l0aW9uc0lucHV0UmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/new-user.js\n");

/***/ })

});