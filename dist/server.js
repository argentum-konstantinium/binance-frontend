/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/router/routes.js":
/*!*************************************!*\
  !*** ./src/client/router/routes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"./src/api/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _constants_store_staking_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/store/staking/actions */ \"./src/constants/store/staking/actions.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  \"path\": \"/\",\n  \"page\": \"Home\"\n}, {\n  \"path\": \"/staking\",\n  \"page\": \"Staking\",\n  loader: async () => {\n    const response = await _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staking.getStakingList();\n    _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch({\n      type: `staking/${_constants_store_staking_actions__WEBPACK_IMPORTED_MODULE_2__.SET_COINS}`,\n      coins: response.data\n    });\n    return null;\n  }\n}]);\n\n//# sourceURL=webpack://binance-frontend/./src/client/router/routes.js?");

/***/ }),

/***/ "./src/server/createRequest.js":
/*!*************************************!*\
  !*** ./src/server/createRequest.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRequest\": () => (/* binding */ createRequest)\n/* harmony export */ });\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/request */ \"./src/server/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/client/router */ \"./src/client/router/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst createRequest = async req => {\n  const fetchRequest = _server_request__WEBPACK_IMPORTED_MODULE_0___default()(req);\n  const handler = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__.createStaticHandler)(_client_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  const context = await handler.query(fetchRequest);\n  const serverState = _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState();\n  const staticRouter = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__.createStaticRouter)(handler.dataRoutes, context);\n  const renderedString = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n    store: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__.StaticRouterProvider, {\n    router: staticRouter,\n    context: context\n  })));\n  const html = `\n            <!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"./static/main.css\">\n    <title>binance frontend\n    </title>\n    <script>\n    window.__INITIAL_STATE__ = ${JSON.stringify(serverState)}\n</script>\n</head>\n<body>\n<div id=\"root\">${renderedString}</div>\n<script src=\"./static/client.js\"></script> \n</body>\n</html>`;\n  return html;\n};\n\n//# sourceURL=webpack://binance-frontend/./src/server/createRequest.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_createRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/server/createRequest */ \"./src/server/createRequest.js\");\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst app = express();\napp.use(express.static('dist'));\nconst PORT = 5000;\napp.get('*', async (req, res) => {\n  const html = await (0,_server_createRequest__WEBPACK_IMPORTED_MODULE_1__.createRequest)(req);\n  res.send(html);\n});\napp.listen(PORT, () => {\n  console.log(`app listen: ${PORT}`);\n});\n\n//# sourceURL=webpack://binance-frontend/./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = function createFetchRequest(req) {\n  let origin = `${req.protocol}://${req.get(\"host\")}`;\n  // Note: This had to take originalUrl into account for presumably vite's proxying\n  let url = new URL(req.originalUrl || req.url, origin);\n  let controller = new AbortController();\n  req.on(\"close\", () => controller.abort());\n  let headers = new Headers();\n  for (let [key, values] of Object.entries(req.headers)) {\n    if (values) {\n      if (Array.isArray(values)) {\n        for (let value of values) {\n          headers.append(key, value);\n        }\n      } else {\n        headers.set(key, values);\n      }\n    }\n  }\n  let init = {\n    method: req.method,\n    headers,\n    signal: controller.signal\n  };\n  if (req.method !== \"GET\" && req.method !== \"HEAD\") {\n    init.body = req.body;\n  }\n  return new Request(url.href, init);\n};\n\n//# sourceURL=webpack://binance-frontend/./src/server/request.js?");

/***/ }),

/***/ "./src/client/components/Header/Navigation/style.scss":
/*!************************************************************!*\
  !*** ./src/client/components/Header/Navigation/style.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"navigation\":\"Cv6wOdFfIJ_KtYBFhzUb\",\"navigation__list\":\"tvPfx6YtOXzeICgiQea5\",\"navigation__list-item\":\"F9Dj0qGr3AqW2ozlOyRb\",\"navigation__list-link\":\"VyxgiItgmEh14vTGnbwz\"});\n\n//# sourceURL=webpack://binance-frontend/./src/client/components/Header/Navigation/style.scss?");

/***/ }),

/***/ "./src/client/components/Header/style.scss":
/*!*************************************************!*\
  !*** ./src/client/components/Header/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"header\":\"alGIP5RSFYME5dg4LbqO\"});\n\n//# sourceURL=webpack://binance-frontend/./src/client/components/Header/style.scss?");

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_staking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/staking */ \"./src/api/staking.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    staking: _api_staking__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n\n//# sourceURL=webpack://binance-frontend/./src/api/index.ts?");

/***/ }),

/***/ "./src/api/staking.ts":
/*!****************************!*\
  !*** ./src/api/staking.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/api */ \"./src/constants/api.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    axiosInstance: axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n        baseURL: \"\".concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__.API_URL, \"/staking\")\n    }),\n    getStakingList: function () {\n        return this.axiosInstance.get('/list');\n    }\n});\n\n\n//# sourceURL=webpack://binance-frontend/./src/api/staking.ts?");

/***/ }),

/***/ "./src/client/components/Header/Navigation/index.tsx":
/*!***********************************************************!*\
  !*** ./src/client/components/Header/Navigation/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/client/components/Header/Navigation/style.scss\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar Navigation = function () {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navigation }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navigation__list }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"navigation__list-item\"] }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"navigation__list-link\"], to: \"/\" }, { children: \"Home\" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"navigation__list-item\"] }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"navigation__list-link\"], to: \"/staking\" }, { children: \"Staking\" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"navigation__list-item\"] }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"navigation__list-link\"], to: \"/all-info\" }, { children: \"All coins info\" })) }))] })) })));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/components/Header/Navigation/index.tsx?");

/***/ }),

/***/ "./src/client/components/Header/index.tsx":
/*!************************************************!*\
  !*** ./src/client/components/Header/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ \"./src/client/components/Header/Navigation/index.tsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/client/components/Header/style.scss\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar Header = function () {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", __assign({ className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navigation__WEBPACK_IMPORTED_MODULE_1__.Navigation, {}) })));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/components/Header/index.tsx?");

/***/ }),

/***/ "./src/client/components/StakingTable/index.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/StakingTable/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StakingTable\": () => (/* binding */ StakingTable)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/client/components/Table */ \"./src/client/components/Table/index.tsx\");\n\n// @ts-nocheck\n\nvar StakingTable = function (props) {\n    var tableCoinsData = props.tableCoinsData;\n    var headData = [\n        { content: 'Ticker' },\n        { content: 'Quantity' },\n    ];\n    var bodyData = {\n        rows: []\n    };\n    for (var asset in tableCoinsData) {\n        var coins = tableCoinsData[asset];\n        var quantity = coins.reduce(function (acc, coin) { return acc + Number(coin.amount); }, 0);\n        bodyData.rows.push([\n            { content: asset },\n            { content: String(quantity) },\n        ]);\n    }\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_client_components_Table__WEBPACK_IMPORTED_MODULE_1__.Table, { label: 'Staking table', head: headData, body: bodyData }));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/components/StakingTable/index.tsx?");

/***/ }),

/***/ "./src/client/components/Table/index.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/Table/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TableBody */ \"@mui/material/TableBody\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableCell */ \"@mui/material/TableCell\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableContainer */ \"@mui/material/TableContainer\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableHead */ \"@mui/material/TableHead\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableRow */ \"@mui/material/TableRow\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__);\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\nvar mapCell = function (item, index) {\n    if (typeof item.content === 'string') {\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), { children: item.content }, index);\n    }\n    var Content = item.content;\n    // @ts-ignore\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, {}) }, index);\n};\nvar Table = function (props) {\n    var label = props.label, head = props.head, body = props.body;\n    var headContent = head.map(mapCell);\n    var bodyContent = body.rows.map(function (row, index) {\n        var rowContent = row.map(mapCell);\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6___default()), { children: rowContent }, index);\n    });\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4___default()), __assign({ component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Table, __assign({ sx: { minWidth: 650 }, size: \"small\", \"aria-label\": label }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5___default()), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6___default()), { children: headContent }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2___default()), { children: bodyContent })] })) })));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/components/Table/index.tsx?");

/***/ }),

/***/ "./src/client/layouts/Default.tsx":
/*!****************************************!*\
  !*** ./src/client/layouts/Default.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Default\": () => (/* binding */ Default)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/client/components/Header */ \"./src/client/components/Header/index.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n// @ts-ignore\nvar Default = function (_a) {\n    var children = _a.children;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: 'default-layout' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_client_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: 'main' }, { children: children })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: 'footer' }, { children: \"Footer\" }))] })));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/layouts/Default.tsx?");

/***/ }),

/***/ "./src/client/layouts/index.ts":
/*!*************************************!*\
  !*** ./src/client/layouts/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Default\": () => (/* reexport safe */ _Default__WEBPACK_IMPORTED_MODULE_0__.Default)\n/* harmony export */ });\n/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ \"./src/client/layouts/Default.tsx\");\n\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/layouts/index.ts?");

/***/ }),

/***/ "./src/client/pages/About.tsx":
/*!************************************!*\
  !*** ./src/client/pages/About.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar About = function () {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \"About\" }) }));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/pages/About.tsx?");

/***/ }),

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Home = function () {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {}) }) }));\n};\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/pages/Home.tsx?");

/***/ }),

/***/ "./src/client/pages/Staking.tsx":
/*!**************************************!*\
  !*** ./src/client/pages/Staking.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Staking\": () => (/* binding */ Staking)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_components_StakingTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/client/components/StakingTable */ \"./src/client/components/StakingTable/index.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar mapStateToProps = function (state) {\n    return {\n        staking: state.staking\n    };\n};\nvar Staking = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(function (props) {\n    var dispatch = props.dispatch;\n    var coins = props.staking.coins;\n    var coinsString = JSON.stringify(coins);\n    var preparedCoins = {};\n    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {\n        var coin = coins_1[_i];\n        if (preparedCoins[coin.asset]) {\n            preparedCoins[coin.asset].push(coin);\n        }\n        else {\n            preparedCoins[coin.asset] = [coin];\n        }\n    }\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: 'staking' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_client_components_StakingTable__WEBPACK_IMPORTED_MODULE_2__.StakingTable, { tableCoinsData: preparedCoins }) })));\n});\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/pages/Staking.tsx?");

/***/ }),

/***/ "./src/client/pages/index.ts":
/*!***********************************!*\
  !*** ./src/client/pages/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": () => (/* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_1__.About),\n/* harmony export */   \"Home\": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Home),\n/* harmony export */   \"Staking\": () => (/* reexport safe */ _Staking__WEBPACK_IMPORTED_MODULE_2__.Staking)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/client/pages/Home.tsx\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/client/pages/About.tsx\");\n/* harmony import */ var _Staking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Staking */ \"./src/client/pages/Staking.tsx\");\n\n\n\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/pages/index.ts?");

/***/ }),

/***/ "./src/client/router/index.ts":
/*!************************************!*\
  !*** ./src/client/router/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_build_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/build-route */ \"./src/utils/build-route.tsx\");\n/* harmony import */ var _client_router_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/client/router/routes */ \"./src/client/router/routes.js\");\n\n\nvar router = (0,_utils_build_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_client_router_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://binance-frontend/./src/client/router/index.ts?");

/***/ }),

/***/ "./src/constants/api.ts":
/*!******************************!*\
  !*** ./src/constants/api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL)\n/* harmony export */ });\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/config */ \"./src/constants/config/index.ts\");\n\nvar API_URL = _constants_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].API_URL;\n\n\n//# sourceURL=webpack://binance-frontend/./src/constants/api.ts?");

/***/ }),

/***/ "./src/constants/config/development.ts":
/*!*********************************************!*\
  !*** ./src/constants/config/development.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = Object.freeze({\n    API_URL: 'http://localhost:3000',\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n\n//# sourceURL=webpack://binance-frontend/./src/constants/config/development.ts?");

/***/ }),

/***/ "./src/constants/config/index.ts":
/*!***************************************!*\
  !*** ./src/constants/config/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_config_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/config/development */ \"./src/constants/config/development.ts\");\n/* harmony import */ var _constants_config_production__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/config/production */ \"./src/constants/config/production.ts\");\n\n\nvar isProduction = false;\nvar config = isProduction ? _constants_config_production__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _constants_config_development__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n\n//# sourceURL=webpack://binance-frontend/./src/constants/config/index.ts?");

/***/ }),

/***/ "./src/constants/config/production.ts":
/*!********************************************!*\
  !*** ./src/constants/config/production.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n\n//# sourceURL=webpack://binance-frontend/./src/constants/config/production.ts?");

/***/ }),

/***/ "./src/constants/store/staking/actions.ts":
/*!************************************************!*\
  !*** ./src/constants/store/staking/actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_COINS\": () => (/* binding */ SET_COINS)\n/* harmony export */ });\nvar SET_COINS = 'SET_COINS';\n\n\n//# sourceURL=webpack://binance-frontend/./src/constants/store/staking/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/reducer */ \"./src/store/reducer.ts\");\n\n\n// @ts-ignore\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], typeof window !== 'undefined' ? window.__INITIAL_STATE__ : { staking: { coins: [] } }));\n\n\n//# sourceURL=webpack://binance-frontend/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_staking_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/staking/reducers */ \"./src/store/staking/reducers/index.ts\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    staking: _store_staking_reducers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n\n//# sourceURL=webpack://binance-frontend/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/staking/reducers/index.ts":
/*!*********************************************!*\
  !*** ./src/store/staking/reducers/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_store_staking_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/store/staking/actions */ \"./src/constants/store/staking/actions.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar stakingReducer = function (state, action) {\n    if (state === void 0) { state = { coins: [] }; }\n    switch (action.type) {\n        case \"staking/\".concat(_constants_store_staking_actions__WEBPACK_IMPORTED_MODULE_0__.SET_COINS):\n            return __assign(__assign({}, state), { coins: action.coins });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stakingReducer);\n\n\n//# sourceURL=webpack://binance-frontend/./src/store/staking/reducers/index.ts?");

/***/ }),

/***/ "./src/utils/build-route.tsx":
/*!***********************************!*\
  !*** ./src/utils/build-route.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/client/pages */ \"./src/client/pages/index.ts\");\n/* harmony import */ var _client_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/client/layouts */ \"./src/client/layouts/index.ts\");\n\n\n\nvar buildRoute = function (routes) {\n    return routes.map(function (route) {\n        var _a;\n        var page = route.page, layout = route.layout;\n        // @ts-ignore\n        var LayoutElement = layout ? _client_layouts__WEBPACK_IMPORTED_MODULE_2__[layout] : _client_layouts__WEBPACK_IMPORTED_MODULE_2__.Default;\n        // @ts-ignore\n        var PageElement = _client_pages__WEBPACK_IMPORTED_MODULE_1__[page];\n        route.element = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutElement, { children: [\" \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PageElement, {}), \" \"] });\n        if (((_a = route.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {\n            route.children = buildRoute(route.children);\n        }\n        return route;\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildRoute);\n\n\n//# sourceURL=webpack://binance-frontend/./src/utils/build-route.tsx?");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/TableBody":
/*!******************************************!*\
  !*** external "@mui/material/TableBody" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ "@mui/material/TableCell":
/*!******************************************!*\
  !*** external "@mui/material/TableCell" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ "@mui/material/TableContainer":
/*!***********************************************!*\
  !*** external "@mui/material/TableContainer" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ "@mui/material/TableHead":
/*!******************************************!*\
  !*** external "@mui/material/TableHead" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ "@mui/material/TableRow":
/*!*****************************************!*\
  !*** external "@mui/material/TableRow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;