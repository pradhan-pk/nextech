"use strict";
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
exports.id = "pages/api/new-user";
exports.ids = ["pages/api/new-user"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-user.js":
/*!*******************************!*\
  !*** ./pages/api/new-user.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const DATABASE_NAME = \"NexTech\";\n    const DATABASE_PASSWORD = \"Nextech\";\n    if (req.method === \"POST\") {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://master:${DATABASE_PASSWORD}@nextech.5d1pu.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`);\n        const db = client.db();\n        const usersCollection = db.collection(\"users\");\n        await usersCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"User added!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LXVzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNQyxhQUFhLEdBQUcsU0FBUztJQUMvQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFTO0lBRW5DLElBQUlILEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQ3BDLENBQUMscUJBQXFCLEVBQUVLLGlCQUFpQixDQUFDLDJCQUEyQixFQUFFRCxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FDckg7UUFDRCxNQUFNSyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBQ3RCLE1BQU1DLGVBQWUsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzlDLE1BQU1ELGVBQWUsQ0FBQ0UsU0FBUyxDQUFDVixHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO1FBRTFDTixNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO1FBRWZYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGFBQWE7U0FBRSxDQUFDLENBQUM7S0FDbEQ7Q0FDRjtBQUVELGlFQUFlaEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGVjaC8uL3BhZ2VzL2FwaS9uZXctdXNlci5qcz8xZWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBEQVRBQkFTRV9OQU1FID0gXCJOZXhUZWNoXCI7XHJcbiAgY29uc3QgREFUQUJBU0VfUEFTU1dPUkQgPSBcIk5leHRlY2hcIjtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgIGBtb25nb2RiK3NydjovL21hc3Rlcjoke0RBVEFCQVNFX1BBU1NXT1JEfUBuZXh0ZWNoLjVkMXB1Lm1vbmdvZGIubmV0LyR7REFUQUJBU0VfTkFNRX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbiAgICBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHJlcS5ib2R5KTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuc2VuZCh7IE1lc3NhZ2U6IFwiVXNlciBhZGRlZCFcIiB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG5cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIkRBVEFCQVNFX05BTUUiLCJEQVRBQkFTRV9QQVNTV09SRCIsIm1ldGhvZCIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsInVzZXJzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJib2R5IiwiY2xvc2UiLCJzdGF0dXMiLCJzZW5kIiwiTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-user.js"));
module.exports = __webpack_exports__;

})();