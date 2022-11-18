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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/contact.tsx":
/*!*******************************!*\
  !*** ./pages/api/contact.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default().setApiKey(\"***REMOVED***\");\nasync function handler(req, res) {\n    try {\n        const body = JSON.parse(req.body);\n        if (body[\"token\"] === undefined || body[\"token\"] === \"\" || body[\"token\"] === null) {\n            return res.status(403).json({\n                success: false,\n                code: 1,\n                message: \"No token provided\"\n            });\n        }\n        // Put your secret key here.\n        var secretKey = \"***REMOVED***\";\n        // req.connection.remoteAddress will provide IP address of connected user.\n        var verificationUrl = \"https://www.google.com/recaptcha/api/siteverify?secret=\" + secretKey + \"&response=\" + body[\"token\"] + \"&remoteip=\" + req.connection.remoteAddress;\n        // Hitting GET request to the URL, Google will respond with success or error scenario.\n        console.log(verificationUrl);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(verificationUrl);\n        const responseBody = response.data;\n        console.log(responseBody);\n        // Success will be true or false depending upon captcha validation.\n        if (responseBody.success !== undefined && !responseBody.success) {\n            return res.status(403).json({\n                success: false,\n                code: 1,\n                message: \"Recaptcha validation failed\"\n            });\n        }\n        const msg = {\n            to: \"eduardo@lineadgroup.com\",\n            from: \"eduardo@lineadgroup.com\",\n            subject: \"Nuevo contacto\",\n            text: `Nuevo contacto de ${body.email}`,\n            html: `<ul>${Object.keys(body).map((key)=>`<li>${key}: ${body[key]}</li>`).join(\"<br/>\")}\n        </ul>`\n        };\n        const mailResponse = await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default().send(msg);\n    } catch (error) {\n        console.error(JSON.stringify(error));\n        return res.status(403).json({\n            success: false,\n            code: 2,\n            message: \"Hubo un error al enviar el formulario, intente m\\xe1s tarde\"\n        });\n    }\n    res.status(200).json({\n        success: true,\n        code: 200,\n        message: \"Gracias por contactarse\"\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUNuRDtBQUVVO0FBRXBDQywrREFBZ0IsQ0FBQztBQVNGLGVBQWVFLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBOEIsRUFDOUI7SUFFQSxJQUFJO1FBRUYsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSixJQUFJRSxJQUFJO1FBQ2hDLElBQUdBLElBQUksQ0FBQyxRQUFRLEtBQUtHLGFBQWFILElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTUEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDaEYsT0FBT0QsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0MsU0FBUyxLQUFLO2dCQUFDQyxNQUFPO2dCQUFFQyxTQUFVO1lBQW1CO1FBQ3BGLENBQUM7UUFDRCw0QkFBNEI7UUFDNUIsSUFBSUMsWUFBWTtRQUNoQiwwRUFBMEU7UUFDMUUsSUFBSUMsa0JBQWtCLDREQUE0REQsWUFBWSxlQUFlVCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWVGLElBQUlhLFVBQVUsQ0FBQ0MsYUFBYTtRQUN4SyxzRkFBc0Y7UUFFdEZDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWixNQUFNSyxXQUFXLE1BQU1yQixpREFBUyxDQUFDZ0I7UUFFakMsTUFBTU8sZUFBZUYsU0FBU0csSUFBSTtRQUNsQ0wsUUFBUUMsR0FBRyxDQUFDRztRQUNaLG1FQUFtRTtRQUNuRSxJQUFHQSxhQUFhWCxPQUFPLEtBQUtILGFBQWEsQ0FBQ2MsYUFBYVgsT0FBTyxFQUFFO1lBQzlELE9BQU9QLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVMsS0FBSztnQkFBQ0MsTUFBTztnQkFBRUMsU0FBVTtZQUE2QjtRQUM5RixDQUFDO1FBRUQsTUFBTVcsTUFBTTtZQUNWQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxNQUFNLENBQUMsa0JBQWtCLEVBQUV2QixLQUFLd0IsS0FBSyxDQUFDLENBQUM7WUFDdkNDLE1BQU0sQ0FBQyxJQUFJLEVBQUVDLE9BQU9DLElBQUksQ0FBQzNCLE1BQU00QixHQUFHLENBQUNDLENBQUFBLE1BQy9CLENBQUMsSUFBSSxFQUFFQSxJQUFJLEVBQUUsRUFBRTdCLElBQUksQ0FBQzZCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDL0JDLElBQUksQ0FBQyxTQUFTO2FBQ1gsQ0FBQztRQUNWO1FBRUEsTUFBTUMsZUFBZSxNQUNyQnBDLDBEQUNLLENBQUN3QjtJQUNSLEVBQUUsT0FBT2MsT0FBTztRQUNkcEIsUUFBUW9CLEtBQUssQ0FBQ2hDLEtBQUtpQyxTQUFTLENBQUNEO1FBQzdCLE9BQU9sQyxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVMsS0FBSztZQUFDQyxNQUFPO1lBQUVDLFNBQVU7UUFBMEQ7SUFDM0g7SUFFQVQsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxTQUFRLElBQUk7UUFBRUMsTUFBTTtRQUFJQyxTQUFTO0lBQTBCO0FBQ3BGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW9iYXJpY2Etd2ViLW5leHQvLi9wYWdlcy9hcGkvY29udGFjdC50c3g/ZDM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgc2dNYWlsIGZyb20gJ0BzZW5kZ3JpZC9tYWlsJztcblxuc2dNYWlsLnNldEFwaUtleSgnU0cuYVFNLVhpSVNTYm1zTmpIeklhZWY2US54Z0Q2V0N4ZlZQNGN4MHpyb09vLS1FaGhmQTlrcW55YzE0anE2Yy1ScVVjJylcblxudHlwZSBSZXNwb25zZSA9IHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgYm9keT86IGFueTtcbiAgY29kZTogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2U+XG4pIHtcblxuICB0cnkge1xuICAgIFxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICBpZihib2R5Wyd0b2tlbiddID09PSB1bmRlZmluZWQgfHwgYm9keVsndG9rZW4nXSA9PT0gJycgfHwgYm9keVsndG9rZW4nXSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtzdWNjZXNzOiBmYWxzZSxjb2RlIDogMSxtZXNzYWdlIDogXCJObyB0b2tlbiBwcm92aWRlZFwifSk7XG4gICAgfVxuICAgIC8vIFB1dCB5b3VyIHNlY3JldCBrZXkgaGVyZS5cbiAgICB2YXIgc2VjcmV0S2V5ID0gXCI2TGREamdjakFBQUFBTUQwX3F0bzBoc3NSUWIxTE9VTjNlWUVBUTlMXCI7XG4gICAgLy8gcmVxLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzcyB3aWxsIHByb3ZpZGUgSVAgYWRkcmVzcyBvZiBjb25uZWN0ZWQgdXNlci5cbiAgICB2YXIgdmVyaWZpY2F0aW9uVXJsID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkvc2l0ZXZlcmlmeT9zZWNyZXQ9XCIgKyBzZWNyZXRLZXkgKyBcIiZyZXNwb25zZT1cIiArIGJvZHlbJ3Rva2VuJ10gKyBcIiZyZW1vdGVpcD1cIiArIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3M7XG4gICAgLy8gSGl0dGluZyBHRVQgcmVxdWVzdCB0byB0aGUgVVJMLCBHb29nbGUgd2lsbCByZXNwb25kIHdpdGggc3VjY2VzcyBvciBlcnJvciBzY2VuYXJpby5cbiAgXG4gICAgY29uc29sZS5sb2codmVyaWZpY2F0aW9uVXJsKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh2ZXJpZmljYXRpb25VcmwpO1xuICBcbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSByZXNwb25zZS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlQm9keSk7XG4gICAgLy8gU3VjY2VzcyB3aWxsIGJlIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIHVwb24gY2FwdGNoYSB2YWxpZGF0aW9uLlxuICAgIGlmKHJlc3BvbnNlQm9keS5zdWNjZXNzICE9PSB1bmRlZmluZWQgJiYgIXJlc3BvbnNlQm9keS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLGNvZGUgOiAxLG1lc3NhZ2UgOiBcIlJlY2FwdGNoYSB2YWxpZGF0aW9uIGZhaWxlZFwifSk7XG4gICAgfVxuICBcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICB0bzogJ2VkdWFyZG9AbGluZWFkZ3JvdXAuY29tJywgLy8gQ2hhbmdlIHRvIHlvdXIgcmVjaXBpZW50XG4gICAgICBmcm9tOiAnZWR1YXJkb0BsaW5lYWRncm91cC5jb20nLCAvLyBDaGFuZ2UgdG8geW91ciB2ZXJpZmllZCBzZW5kZXJcbiAgICAgIHN1YmplY3Q6ICdOdWV2byBjb250YWN0bycsXG4gICAgICB0ZXh0OiBgTnVldm8gY29udGFjdG8gZGUgJHtib2R5LmVtYWlsfWAsXG4gICAgICBodG1sOiBgPHVsPiR7T2JqZWN0LmtleXMoYm9keSkubWFwKGtleSA9PiBcbiAgICAgICAgICBgPGxpPiR7a2V5fTogJHtib2R5W2tleV19PC9saT5gXG4gICAgICAgICkuam9pbignPGJyLz4nKX1cbiAgICAgICAgPC91bD5gLFxuICAgIH1cbiAgXG4gICAgY29uc3QgbWFpbFJlc3BvbnNlID0gYXdhaXQgXG4gICAgc2dNYWlsXG4gICAgLnNlbmQobXNnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7c3VjY2VzczogZmFsc2UsY29kZSA6IDIsbWVzc2FnZSA6IFwiSHVibyB1biBlcnJvciBhbCBlbnZpYXIgZWwgZm9ybXVsYXJpbywgaW50ZW50ZSBtw6FzIHRhcmRlXCJ9KTtcbiAgfVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2Vzczp0cnVlLCBjb2RlOiAyMDAsbWVzc2FnZTogJ0dyYWNpYXMgcG9yIGNvbnRhY3RhcnNlJyB9KVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwic2dNYWlsIiwic2V0QXBpS2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImNvZGUiLCJtZXNzYWdlIiwic2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uVXJsIiwiY29ubmVjdGlvbiIsInJlbW90ZUFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJnZXQiLCJyZXNwb25zZUJvZHkiLCJkYXRhIiwibXNnIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJlbWFpbCIsImh0bWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Iiwiam9pbiIsIm1haWxSZXNwb25zZSIsInNlbmQiLCJlcnJvciIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.tsx"));
module.exports = __webpack_exports__;

})();