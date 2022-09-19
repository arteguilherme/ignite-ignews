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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].tsx":
/*!**********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_faunaDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/faunaDB */ \"(api)/./src/services/faunaDB.ts\");\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            try {\n                const { email  } = user;\n                await _services_faunaDB__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email))))).then((ret)=>console.log(ret)).catch((err)=>console.error(\"Error: [%s] %s: %s\", err.name, err.message, err.errors()[0].description));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ25CO0FBRWE7QUFFM0MsTUFBTUssV0FBVyxHQUFHO0lBQ3pCLGlEQUFpRDtJQUNqREMsU0FBUyxFQUFFO1FBQ1RMLGlFQUFjLENBQUM7WUFDYk0sUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjtTQUNGLENBQUM7S0FFSDtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxNQUFNLEVBQUMsRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQ3ZDLElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0gsSUFBSTtnQkFFdEIsTUFBTWQsMERBQ0UsQ0FDSkQsNkNBQUksQ0FDRkEsOENBQUssQ0FDSEEsaURBQVEsQ0FDTkEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyxlQUFlLENBQUMsRUFDeEJBLG1EQUFVLENBQUNlLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQ3ZCLENBQ0YsQ0FDRixFQUNEbEIsaURBQVEsQ0FBQ0EscURBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFBRTJCLElBQUksRUFBRTt3QkFBRVQsS0FBSztxQkFBRTtpQkFBRSxDQUFDLEVBQ3BEbEIsOENBQUssQ0FDSEEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyxlQUFlLENBQUMsRUFDeEJBLG1EQUFVLENBQUNlLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQ3ZCLENBQ0YsQ0FDRixDQUNGLENBQ0FXLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUMvQkcsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FDVEgsT0FBTyxDQUFDSSxLQUFLLENBQ1gsb0JBQW9CLEVBQ3BCRCxHQUFHLENBQUNFLElBQUksRUFDUkYsR0FBRyxDQUFDRyxPQUFPLEVBQ1hILEdBQUcsQ0FBQ0ksTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FDNUIsQ0FDRixDQUFDO2dCQUVKLE9BQU8sSUFBSSxDQUFDO1lBQ2QsRUFBRSxPQUFNO2dCQUNOLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZTFDLGdEQUFRLENBQUNLLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHN4P2VhMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xuXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hREInO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzY29wZTogJ3JlYWQ6dXNlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlcjtcblxuICAgICAgICBhd2FpdCBmYXVuYVxuICAgICAgICAgIC5xdWVyeShcbiAgICAgICAgICAgIHEuSWYoXG4gICAgICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgICAgIHEuRXhpc3RzKFxuICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBxLkNyZWF0ZShxLkNvbGxlY3Rpb24oJ3VzZXJzJyksIHsgZGF0YTogeyBlbWFpbCB9IH0pLFxuICAgICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigocmV0KSA9PiBjb25zb2xlLmxvZyhyZXQpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ0Vycm9yOiBbJXNdICVzOiAlcycsXG4gICAgICAgICAgICAgIGVyci5uYW1lLFxuICAgICAgICAgICAgICBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgICAgZXJyLmVycm9ycygpWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwicXVlcnkiLCJxIiwiZmF1bmEiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsIkdldCIsInRoZW4iLCJyZXQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm5hbWUiLCJtZXNzYWdlIiwiZXJyb3JzIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].tsx\n");

/***/ }),

/***/ "(api)/./src/services/faunaDB.ts":
/*!*********************************!*\
  !*** ./src/services/faunaDB.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_SECRETY_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmFEQi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFFMUIsTUFBTUMsS0FBSyxHQUFHLElBQUlELDJDQUFNLENBQUM7SUFDOUJFLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQjtDQUN4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5hREIudHM/YTM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiZmF1bmFkYlwiO1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX1NFQ1JFVFlfS0VZXG59KSJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX1NFQ1JFVFlfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/faunaDB.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].tsx"));
module.exports = __webpack_exports__;

})();