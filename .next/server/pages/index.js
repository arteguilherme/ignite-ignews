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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9mNTY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NjQ1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    async function handleSubscribe() {\n        const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            console.log(response);\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (error) {\n            return error.message;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ1o7QUFDYztBQUNiO0FBTTNCLFNBQVNLLGVBQWUsQ0FBQyxFQUN0Q0MsT0FBTyxHQUNjLEVBQUU7SUFDdkIsZUFBZUMsZUFBZSxHQUFHO1FBQy9CLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR1IsMkRBQVUsRUFBRTtRQUV0QyxJQUFJLENBQUNRLE9BQU8sRUFBRTtZQUNaVCx1REFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSTtZQUNGLE1BQU1VLFFBQVEsR0FBRyxNQUFNUixtREFBUSxDQUFDLFlBQVksQ0FBQztZQUM3Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQyxDQUFDO1lBRXRCLE1BQU0sRUFBRUksU0FBUyxHQUFFLEdBQUdKLFFBQVEsQ0FBQ0YsSUFBSTtZQUNuQyxNQUFNTyxNQUFNLEdBQUcsTUFBTVosZ0VBQVcsRUFBRTtZQUVsQyxNQUFNWSxNQUFNLENBQUNDLGtCQUFrQixDQUFDO2dCQUFFRixTQUFTO2FBQUUsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsT0FBT0csS0FBSyxFQUFFO1lBQ2QsT0FBT0EsS0FBSyxDQUFDQyxPQUFPLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFFRCxxQkFDRSw4REFBQ0MsUUFBTTtRQUNMQyxJQUFJLEVBQUMsUUFBUTtRQUNiQyxTQUFTLEVBQUVqQiw0RUFBc0I7UUFDakNtQixPQUFPLEVBQUVoQixlQUFlO2tCQUN6QixlQUVEOzs7OztZQUFTLENBQ1Q7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHJpcGUtanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBTdWJzY3JpYmVCdXR0b25Qcm9wcyB7XG4gIHByaWNlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHtcbiAgcHJpY2VJZCxcbn06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1YnNjcmliZSgpIHtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgc2lnbkluKCdnaXRodWInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3N1YnNjcmliZScpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZUpzKCk7XG5cbiAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XG4gICAgPlxuICAgICAgU3Vic2NyaWJlIG5vd1xuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJoYW5kbGVTdWJzY3JpYmUiLCJkYXRhIiwic2Vzc2lvbiIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uSWQiLCJzdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnJvciIsIm1lc3NhZ2UiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3Vic2NyaWJlQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | ig.news\"\n                }, void 0, false, {\n                    fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 24\n                                    }, this),\n                                    \" the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 35\n                                    }, this),\n                                    \" world\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get acess to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 47\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for $\",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Imagem de uma mulher no computador\"\n                    }, void 0, false, {\n                        fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/guilherme/workspace/ignite-aulas/reactjs/ignite-ignews/src/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1KX9J3EfJnDzwDuQak7s6aB0\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUMrQjtBQUNoQjtBQUNKO0FBU3pCLFNBQVNJLElBQUksQ0FBQyxFQUFFQyxPQUFPLEdBQWEsRUFBRTtJQUNuRCxxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDTSxPQUFLOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUTs7Ozs7b0JBQ3hCOzBCQUNQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUF1Qjs7a0NBQ3RDLDhEQUFDTyxTQUFPO3dCQUFDRixTQUFTLEVBQUVMLCtEQUFXOzswQ0FDN0IsOERBQUNTLE1BQUk7MENBQUMsMkJBQWM7Ozs7O29DQUFPOzBDQUMzQiw4REFBQ0MsSUFBRTs7b0NBQUMsYUFDUztrREFBQSw4REFBQ0MsSUFBRTs7Ozs0Q0FBRztvQ0FBQSxPQUFLO2tEQUFBLDhEQUFDRixNQUFJO2tEQUFDLE9BQUs7Ozs7OzRDQUFPO29DQUFBLFFBQzFDOzs7Ozs7b0NBQUs7MENBQ0wsOERBQUNHLEdBQUM7O29DQUFDLG9DQUNpQztrREFBQSw4REFBQ0QsSUFBRTs7Ozs0Q0FBRztrREFDeEMsOERBQUNGLE1BQUk7OzRDQUFDLE9BQUs7NENBQUNQLE9BQU8sQ0FBQ1csTUFBTTs0Q0FBQyxRQUFNOzs7Ozs7NENBQU87Ozs7OztvQ0FDdEM7MENBQ0osOERBQUNmLG1FQUFlO2dDQUFDZ0IsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7O29DQUFJOzs7Ozs7NEJBQ3JDO2tDQUNWLDhEQUFDQyxLQUFHO3dCQUNGQyxHQUFHLEVBQUMsb0JBQW9CO3dCQUN4QkMsR0FBRyxFQUFDLG9DQUFvQzs7Ozs7NEJBQ3hDOzs7Ozs7b0JBQ0c7O29CQUNOLENBQ0g7QUFDSixDQUFDO0FBRU0sTUFBTUMsY0FBYyxHQUFtQixVQUFZO0lBQ3hELE1BQU1DLEtBQUssR0FBRyxNQUFNcEIsb0VBQXNCLENBQ3hDLGdDQUFnQyxDQUNqQztJQUVELE1BQU1HLE9BQU8sR0FBRztRQUNkWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0csRUFBRTtRQUNqQlQsTUFBTSxFQUFFLElBQUlVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNyQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLFdBQVcsR0FBRyxHQUFHLENBQUM7S0FDbkM7SUFFRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMM0IsT0FBTztTQUNSO1FBQ0Q0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQ3pCLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU3Vic2NyaWJlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9kdWN0OiB7XG4gICAgcHJpY2VJZDogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgPHNwYW4+8J+RjyBIZXksIHdlbGNvbWU8L3NwYW4+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgTmV3cyBhYm91dCA8YnIgLz4gdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3IgJHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIlxuICAgICAgICAgIGFsdD1cIkltYWdlbSBkZSB1bWEgbXVsaGVyIG5vIGNvbXB1dGFkb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoXG4gICAgJ3ByaWNlXzFLWDlKM0VmSm5EendEdVFhazdzNmFCMCdcbiAgKTtcblxuICBjb25zdCBwcm9kdWN0ID0ge1xuICAgIHByaWNlSWQ6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gMjQgaG9yYXNcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwiYnIiLCJwIiwiYW1vdW50IiwicHJpY2VJZCIsImltZyIsInNyYyIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJy9hcGknXG59KSJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_Cg24mL0Igcs2clSgmYvJe3cJ\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxlQUFlQyxXQUFXLEdBQUc7SUFDbEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLGtDQUF5QyxDQUFDO0lBQzVFLE9BQU9ELFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUtanMudHM/NTk4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCkge1xuICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpXG4gIHJldHVybiBzdHJpcGVKc1xufSJdLCJuYW1lcyI6WyJsb2FkU3RyaXBlIiwiZ2V0U3RyaXBlSnMiLCJzdHJpcGVKcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2022-08-01\",\n    appInfo: {\n        name: \"ignews\",\n        version: \"0.1.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0VDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsT0FBTyxFQUFFLE9BQU87S0FDakI7Q0FDSixDQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gIHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMi0wOC0wMScsXG4gICAgYXBwSW5mbzoge1xuICAgICAgbmFtZTogJ2lnbmV3cycsXG4gICAgICB2ZXJzaW9uOiAnMC4xLjAnLFxuICAgIH0sXG59XG4pIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSIsInZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();