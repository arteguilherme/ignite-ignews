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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_faunaDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/faunaDB */ \"(api)/./src/services/faunaDB.ts\");\n\n\n\n\nconsole.log(\"GITHUB_ID\", process.env.GITHUB_ID);\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            try {\n                const { email  } = user;\n                await _services_faunaDB__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email))))).then((ret)=>console.log(ret)).catch((err)=>console.error(\"Error: [%s] %s: %s\", err.name, err.message, err.errors()[0].description));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ25CO0FBRWE7QUFFbERLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLE1BQU1DLFdBQVcsR0FBRztJQUN6QixpREFBaUQ7SUFDakRDLFNBQVMsRUFBRTtRQUNUVixpRUFBYyxDQUFDO1lBQ2JXLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JJLFlBQVksRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNNLGFBQWE7WUFDdkNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjtTQUNGLENBQUM7S0FFSDtJQUNEQyxNQUFNLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxlQUFlO0lBQ25DQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxNQUFNLEVBQUMsRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQ3ZDLElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0gsSUFBSTtnQkFFdEIsTUFBTWxCLDBEQUNFLENBQ0pELDZDQUFJLENBQ0ZBLDhDQUFLLENBQ0hBLGlEQUFRLENBQ05BLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZUFBZSxDQUFDLEVBQ3hCQSxtREFBVSxDQUFDbUIsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FDdkIsQ0FDRixDQUNGLEVBQ0R0QixpREFBUSxDQUFDQSxxREFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUFFK0IsSUFBSSxFQUFFO3dCQUFFVCxLQUFLO3FCQUFFO2lCQUFFLENBQUMsRUFDcER0Qiw4Q0FBSyxDQUNIQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGVBQWUsQ0FBQyxFQUN4QkEsbURBQVUsQ0FBQ21CLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQ3ZCLENBQ0YsQ0FDRixDQUNGLENBQ0FXLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtoQyxPQUFPLENBQUNDLEdBQUcsQ0FBQytCLEdBQUcsQ0FBQyxDQUFDLENBQy9CQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUNUbEMsT0FBTyxDQUFDbUMsS0FBSyxDQUNYLG9CQUFvQixFQUNwQkQsR0FBRyxDQUFDRSxJQUFJLEVBQ1JGLEdBQUcsQ0FBQ0csT0FBTyxFQUNYSCxHQUFHLENBQUNJLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQzVCLENBQ0YsQ0FBQztnQkFFSixPQUFPLElBQUksQ0FBQztZQUNkLEVBQUUsT0FBTTtnQkFDTixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsaUVBQWU1QyxnREFBUSxDQUFDVSxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeD9lYTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJztcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYURCJztcblxuY29uc29sZS5sb2coJ0dJVEhVQl9JRCcsIHByb2Nlc3MuZW52LkdJVEhVQl9JRCk7XG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgICAgIGF3YWl0IGZhdW5hXG4gICAgICAgICAgLnF1ZXJ5KFxuICAgICAgICAgICAgcS5JZihcbiAgICAgICAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHEuQ3JlYXRlKHEuQ29sbGVjdGlvbigndXNlcnMnKSwgeyBkYXRhOiB7IGVtYWlsIH0gfSksXG4gICAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChyZXQpID0+IGNvbnNvbGUubG9nKHJldCkpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnRXJyb3I6IFslc10gJXM6ICVzJyxcbiAgICAgICAgICAgICAgZXJyLm5hbWUsXG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlLFxuICAgICAgICAgICAgICBlcnIuZXJyb3JzKClbMF0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0SHViUHJvdmlkZXIiLCJxdWVyeSIsInEiLCJmYXVuYSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsIklmIiwiTm90IiwiRXhpc3RzIiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiLCJHZXQiLCJ0aGVuIiwicmV0IiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm5hbWUiLCJtZXNzYWdlIiwiZXJyb3JzIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].tsx\n");

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