(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_LoginForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginForm.vue */ "./assets/js/components/LoginForm.vue");
/* harmony import */ var _components_SignUpForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SignUpForm.vue */ "./assets/js/components/SignUpForm.vue");
/* harmony import */ var _components_PasswordRestoreForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PasswordRestoreForm.vue */ "./assets/js/components/PasswordRestoreForm.vue");
/* harmony import */ var _components_BookList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BookList.vue */ "./assets/js/components/BookList.vue");
/* harmony import */ var _components_AuthorList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AuthorList.vue */ "./assets/js/components/AuthorList.vue");
/* harmony import */ var _components_GenreList_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/GenreList.vue */ "./assets/js/components/GenreList.vue");
/* harmony import */ var _components_GenreForm_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/GenreForm.vue */ "./assets/js/components/GenreForm.vue");
/* harmony import */ var _components_AuthorForm_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AuthorForm.vue */ "./assets/js/components/AuthorForm.vue");
/* harmony import */ var _components_BookForm_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/BookForm.vue */ "./assets/js/components/BookForm.vue");
/* harmony import */ var _components_BookProfile_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/BookProfile.vue */ "./assets/js/components/BookProfile.vue");
/* harmony import */ var _components_GenreProfile_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/GenreProfile.vue */ "./assets/js/components/GenreProfile.vue");
/* harmony import */ var _components_SearchField_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/SearchField.vue */ "./assets/js/components/SearchField.vue");
/* harmony import */ var _components_UserProfile_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/UserProfile.vue */ "./assets/js/components/UserProfile.vue");
/* harmony import */ var _components_AuthorProfile_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AuthorProfile.vue */ "./assets/js/components/AuthorProfile.vue");
/* harmony import */ var _components_UserList_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/UserList.vue */ "./assets/js/components/UserList.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

















new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#app',
  components: {
    login_form: _components_LoginForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    signup_form: _components_SignUpForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    password_restore_form: _components_PasswordRestoreForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    book_list: _components_BookList_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    author_list: _components_AuthorList_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    genre_list: _components_GenreList_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    genre_form: _components_GenreForm_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    author_form: _components_AuthorForm_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    book_form: _components_BookForm_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    book_profile: _components_BookProfile_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    genre_profile: _components_GenreProfile_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    user_profile: _components_UserProfile_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    author_profile: _components_AuthorProfile_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    user_list: _components_UserList_vue__WEBPACK_IMPORTED_MODULE_16__["default"]
  }
});
new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#header',
  components: {
    search_field: _components_SearchField_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
});
new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#search-box',
  components: {
    search_field: _components_SearchField_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    login_form: _components_LoginForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}); // import Vue from 'vue';
// import Example from './components/Example.vue'
// /**
// * Create a fresh Vue Application instance
// */
// new Vue({
//   el: '#app',
//   components: {Example}
// });
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/components/AuthorCard.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/AuthorCard.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorCard_vue_vue_type_template_id_24bf92c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorCard.vue?vue&type=template&id=24bf92c8& */ "./assets/js/components/AuthorCard.vue?vue&type=template&id=24bf92c8&");
/* harmony import */ var _AuthorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorCard.vue?vue&type=script&lang=js& */ "./assets/js/components/AuthorCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorCard_vue_vue_type_template_id_24bf92c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorCard_vue_vue_type_template_id_24bf92c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/AuthorCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/AuthorCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/AuthorCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/AuthorCard.vue?vue&type=template&id=24bf92c8&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/AuthorCard.vue?vue&type=template&id=24bf92c8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorCard_vue_vue_type_template_id_24bf92c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorCard.vue?vue&type=template&id=24bf92c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorCard.vue?vue&type=template&id=24bf92c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorCard_vue_vue_type_template_id_24bf92c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorCard_vue_vue_type_template_id_24bf92c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/AuthorForm.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/AuthorForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorForm_vue_vue_type_template_id_0a59ce50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorForm.vue?vue&type=template&id=0a59ce50& */ "./assets/js/components/AuthorForm.vue?vue&type=template&id=0a59ce50&");
/* harmony import */ var _AuthorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorForm.vue?vue&type=script&lang=js& */ "./assets/js/components/AuthorForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorForm_vue_vue_type_template_id_0a59ce50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorForm_vue_vue_type_template_id_0a59ce50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/AuthorForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/AuthorForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/AuthorForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/AuthorForm.vue?vue&type=template&id=0a59ce50&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/AuthorForm.vue?vue&type=template&id=0a59ce50& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorForm_vue_vue_type_template_id_0a59ce50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorForm.vue?vue&type=template&id=0a59ce50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorForm.vue?vue&type=template&id=0a59ce50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorForm_vue_vue_type_template_id_0a59ce50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorForm_vue_vue_type_template_id_0a59ce50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/AuthorList.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/AuthorList.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorList_vue_vue_type_template_id_3e52f52a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorList.vue?vue&type=template&id=3e52f52a& */ "./assets/js/components/AuthorList.vue?vue&type=template&id=3e52f52a&");
/* harmony import */ var _AuthorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorList.vue?vue&type=script&lang=js& */ "./assets/js/components/AuthorList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorList_vue_vue_type_template_id_3e52f52a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorList_vue_vue_type_template_id_3e52f52a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/AuthorList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/AuthorList.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/AuthorList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/AuthorList.vue?vue&type=template&id=3e52f52a&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/AuthorList.vue?vue&type=template&id=3e52f52a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorList_vue_vue_type_template_id_3e52f52a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorList.vue?vue&type=template&id=3e52f52a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorList.vue?vue&type=template&id=3e52f52a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorList_vue_vue_type_template_id_3e52f52a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorList_vue_vue_type_template_id_3e52f52a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/AuthorProfile.vue":
/*!************************************************!*\
  !*** ./assets/js/components/AuthorProfile.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorProfile_vue_vue_type_template_id_7ca7cb66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorProfile.vue?vue&type=template&id=7ca7cb66& */ "./assets/js/components/AuthorProfile.vue?vue&type=template&id=7ca7cb66&");
/* harmony import */ var _AuthorProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorProfile.vue?vue&type=script&lang=js& */ "./assets/js/components/AuthorProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthorProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorProfile_vue_vue_type_template_id_7ca7cb66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorProfile_vue_vue_type_template_id_7ca7cb66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/AuthorProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/AuthorProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/AuthorProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/AuthorProfile.vue?vue&type=template&id=7ca7cb66&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/AuthorProfile.vue?vue&type=template&id=7ca7cb66& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorProfile_vue_vue_type_template_id_7ca7cb66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorProfile.vue?vue&type=template&id=7ca7cb66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorProfile.vue?vue&type=template&id=7ca7cb66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorProfile_vue_vue_type_template_id_7ca7cb66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorProfile_vue_vue_type_template_id_7ca7cb66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/BookCard.vue":
/*!*******************************************!*\
  !*** ./assets/js/components/BookCard.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookCard_vue_vue_type_template_id_a14fdf8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCard.vue?vue&type=template&id=a14fdf8c& */ "./assets/js/components/BookCard.vue?vue&type=template&id=a14fdf8c&");
/* harmony import */ var _BookCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookCard.vue?vue&type=script&lang=js& */ "./assets/js/components/BookCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookCard_vue_vue_type_template_id_a14fdf8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookCard_vue_vue_type_template_id_a14fdf8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/BookCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/BookCard.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./assets/js/components/BookCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/BookCard.vue?vue&type=template&id=a14fdf8c&":
/*!**************************************************************************!*\
  !*** ./assets/js/components/BookCard.vue?vue&type=template&id=a14fdf8c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCard_vue_vue_type_template_id_a14fdf8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookCard.vue?vue&type=template&id=a14fdf8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookCard.vue?vue&type=template&id=a14fdf8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCard_vue_vue_type_template_id_a14fdf8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCard_vue_vue_type_template_id_a14fdf8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/BookForm.vue":
/*!*******************************************!*\
  !*** ./assets/js/components/BookForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookForm_vue_vue_type_template_id_67dcb024___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookForm.vue?vue&type=template&id=67dcb024& */ "./assets/js/components/BookForm.vue?vue&type=template&id=67dcb024&");
/* harmony import */ var _BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookForm.vue?vue&type=script&lang=js& */ "./assets/js/components/BookForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookForm_vue_vue_type_template_id_67dcb024___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookForm_vue_vue_type_template_id_67dcb024___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/BookForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/BookForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./assets/js/components/BookForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/BookForm.vue?vue&type=template&id=67dcb024&":
/*!**************************************************************************!*\
  !*** ./assets/js/components/BookForm.vue?vue&type=template&id=67dcb024& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_67dcb024___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookForm.vue?vue&type=template&id=67dcb024& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookForm.vue?vue&type=template&id=67dcb024&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_67dcb024___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_67dcb024___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/BookList.vue":
/*!*******************************************!*\
  !*** ./assets/js/components/BookList.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookList_vue_vue_type_template_id_000acec8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookList.vue?vue&type=template&id=000acec8& */ "./assets/js/components/BookList.vue?vue&type=template&id=000acec8&");
/* harmony import */ var _BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookList.vue?vue&type=script&lang=js& */ "./assets/js/components/BookList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookList_vue_vue_type_template_id_000acec8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookList_vue_vue_type_template_id_000acec8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/BookList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/BookList.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./assets/js/components/BookList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/BookList.vue?vue&type=template&id=000acec8&":
/*!**************************************************************************!*\
  !*** ./assets/js/components/BookList.vue?vue&type=template&id=000acec8& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_template_id_000acec8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookList.vue?vue&type=template&id=000acec8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookList.vue?vue&type=template&id=000acec8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_template_id_000acec8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_template_id_000acec8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/BookProfile.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/BookProfile.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookProfile_vue_vue_type_template_id_18fd1822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookProfile.vue?vue&type=template&id=18fd1822& */ "./assets/js/components/BookProfile.vue?vue&type=template&id=18fd1822&");
/* harmony import */ var _BookProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookProfile.vue?vue&type=script&lang=js& */ "./assets/js/components/BookProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookProfile_vue_vue_type_template_id_18fd1822___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookProfile_vue_vue_type_template_id_18fd1822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/BookProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/BookProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/BookProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/BookProfile.vue?vue&type=template&id=18fd1822&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/BookProfile.vue?vue&type=template&id=18fd1822& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookProfile_vue_vue_type_template_id_18fd1822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookProfile.vue?vue&type=template&id=18fd1822& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookProfile.vue?vue&type=template&id=18fd1822&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookProfile_vue_vue_type_template_id_18fd1822___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookProfile_vue_vue_type_template_id_18fd1822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/GenreCard.vue":
/*!********************************************!*\
  !*** ./assets/js/components/GenreCard.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenreCard_vue_vue_type_template_id_66e8a63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenreCard.vue?vue&type=template&id=66e8a63c& */ "./assets/js/components/GenreCard.vue?vue&type=template&id=66e8a63c&");
/* harmony import */ var _GenreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenreCard.vue?vue&type=script&lang=js& */ "./assets/js/components/GenreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenreCard_vue_vue_type_template_id_66e8a63c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenreCard_vue_vue_type_template_id_66e8a63c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/GenreCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/GenreCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/GenreCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/GenreCard.vue?vue&type=template&id=66e8a63c&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/GenreCard.vue?vue&type=template&id=66e8a63c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreCard_vue_vue_type_template_id_66e8a63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreCard.vue?vue&type=template&id=66e8a63c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreCard.vue?vue&type=template&id=66e8a63c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreCard_vue_vue_type_template_id_66e8a63c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreCard_vue_vue_type_template_id_66e8a63c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/GenreForm.vue":
/*!********************************************!*\
  !*** ./assets/js/components/GenreForm.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenreForm_vue_vue_type_template_id_2d7576d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenreForm.vue?vue&type=template&id=2d7576d4& */ "./assets/js/components/GenreForm.vue?vue&type=template&id=2d7576d4&");
/* harmony import */ var _GenreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenreForm.vue?vue&type=script&lang=js& */ "./assets/js/components/GenreForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenreForm_vue_vue_type_template_id_2d7576d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenreForm_vue_vue_type_template_id_2d7576d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/GenreForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/GenreForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/GenreForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/GenreForm.vue?vue&type=template&id=2d7576d4&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/GenreForm.vue?vue&type=template&id=2d7576d4& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreForm_vue_vue_type_template_id_2d7576d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreForm.vue?vue&type=template&id=2d7576d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreForm.vue?vue&type=template&id=2d7576d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreForm_vue_vue_type_template_id_2d7576d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreForm_vue_vue_type_template_id_2d7576d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/GenreList.vue":
/*!********************************************!*\
  !*** ./assets/js/components/GenreList.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenreList_vue_vue_type_template_id_1d3e6b70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenreList.vue?vue&type=template&id=1d3e6b70& */ "./assets/js/components/GenreList.vue?vue&type=template&id=1d3e6b70&");
/* harmony import */ var _GenreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenreList.vue?vue&type=script&lang=js& */ "./assets/js/components/GenreList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenreList_vue_vue_type_template_id_1d3e6b70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenreList_vue_vue_type_template_id_1d3e6b70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/GenreList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/GenreList.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/GenreList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/GenreList.vue?vue&type=template&id=1d3e6b70&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/GenreList.vue?vue&type=template&id=1d3e6b70& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreList_vue_vue_type_template_id_1d3e6b70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreList.vue?vue&type=template&id=1d3e6b70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreList.vue?vue&type=template&id=1d3e6b70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreList_vue_vue_type_template_id_1d3e6b70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreList_vue_vue_type_template_id_1d3e6b70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/GenreProfile.vue":
/*!***********************************************!*\
  !*** ./assets/js/components/GenreProfile.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenreProfile_vue_vue_type_template_id_2ca4b647___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenreProfile.vue?vue&type=template&id=2ca4b647& */ "./assets/js/components/GenreProfile.vue?vue&type=template&id=2ca4b647&");
/* harmony import */ var _GenreProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenreProfile.vue?vue&type=script&lang=js& */ "./assets/js/components/GenreProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenreProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenreProfile_vue_vue_type_template_id_2ca4b647___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenreProfile_vue_vue_type_template_id_2ca4b647___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/GenreProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/GenreProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./assets/js/components/GenreProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/GenreProfile.vue?vue&type=template&id=2ca4b647&":
/*!******************************************************************************!*\
  !*** ./assets/js/components/GenreProfile.vue?vue&type=template&id=2ca4b647& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreProfile_vue_vue_type_template_id_2ca4b647___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GenreProfile.vue?vue&type=template&id=2ca4b647& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreProfile.vue?vue&type=template&id=2ca4b647&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreProfile_vue_vue_type_template_id_2ca4b647___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenreProfile_vue_vue_type_template_id_2ca4b647___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/GenresAndAuthorsSelect.vue":
/*!*********************************************************!*\
  !*** ./assets/js/components/GenresAndAuthorsSelect.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenresAndAuthorsSelect_vue_vue_type_template_id_044481c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4& */ "./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4&");
/* harmony import */ var _GenresAndAuthorsSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenresAndAuthorsSelect.vue?vue&type=script&lang=js& */ "./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenresAndAuthorsSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenresAndAuthorsSelect_vue_vue_type_template_id_044481c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenresAndAuthorsSelect_vue_vue_type_template_id_044481c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/GenresAndAuthorsSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenresAndAuthorsSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GenresAndAuthorsSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenresAndAuthorsSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4&":
/*!****************************************************************************************!*\
  !*** ./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenresAndAuthorsSelect_vue_vue_type_template_id_044481c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenresAndAuthorsSelect_vue_vue_type_template_id_044481c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenresAndAuthorsSelect_vue_vue_type_template_id_044481c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/ImgUpload.vue":
/*!********************************************!*\
  !*** ./assets/js/components/ImgUpload.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImgUpload_vue_vue_type_template_id_1bbbfe5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgUpload.vue?vue&type=template&id=1bbbfe5a& */ "./assets/js/components/ImgUpload.vue?vue&type=template&id=1bbbfe5a&");
/* harmony import */ var _ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImgUpload.vue?vue&type=script&lang=js& */ "./assets/js/components/ImgUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImgUpload_vue_vue_type_template_id_1bbbfe5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImgUpload_vue_vue_type_template_id_1bbbfe5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/ImgUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/ImgUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/ImgUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImgUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ImgUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/ImgUpload.vue?vue&type=template&id=1bbbfe5a&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/ImgUpload.vue?vue&type=template&id=1bbbfe5a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_1bbbfe5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImgUpload.vue?vue&type=template&id=1bbbfe5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ImgUpload.vue?vue&type=template&id=1bbbfe5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_1bbbfe5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_1bbbfe5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/LoginForm.vue":
/*!********************************************!*\
  !*** ./assets/js/components/LoginForm.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_template_id_6c56e47c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=6c56e47c& */ "./assets/js/components/LoginForm.vue?vue&type=template&id=6c56e47c&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./assets/js/components/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_6c56e47c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginForm_vue_vue_type_template_id_6c56e47c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/LoginForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/LoginForm.vue?vue&type=template&id=6c56e47c&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/LoginForm.vue?vue&type=template&id=6c56e47c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_6c56e47c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=template&id=6c56e47c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginForm.vue?vue&type=template&id=6c56e47c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_6c56e47c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_6c56e47c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Pagination.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/Pagination.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_7026d37b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7026d37b& */ "./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./assets/js/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_7026d37b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_7026d37b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_7026d37b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=7026d37b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_7026d37b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_7026d37b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/PasswordRestoreForm.vue":
/*!******************************************************!*\
  !*** ./assets/js/components/PasswordRestoreForm.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordRestoreForm_vue_vue_type_template_id_7c1255c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordRestoreForm.vue?vue&type=template&id=7c1255c6& */ "./assets/js/components/PasswordRestoreForm.vue?vue&type=template&id=7c1255c6&");
/* harmony import */ var _PasswordRestoreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordRestoreForm.vue?vue&type=script&lang=js& */ "./assets/js/components/PasswordRestoreForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordRestoreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordRestoreForm_vue_vue_type_template_id_7c1255c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordRestoreForm_vue_vue_type_template_id_7c1255c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/PasswordRestoreForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/PasswordRestoreForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/PasswordRestoreForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRestoreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordRestoreForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/PasswordRestoreForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRestoreForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/PasswordRestoreForm.vue?vue&type=template&id=7c1255c6&":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/PasswordRestoreForm.vue?vue&type=template&id=7c1255c6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRestoreForm_vue_vue_type_template_id_7c1255c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordRestoreForm.vue?vue&type=template&id=7c1255c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/PasswordRestoreForm.vue?vue&type=template&id=7c1255c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRestoreForm_vue_vue_type_template_id_7c1255c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRestoreForm_vue_vue_type_template_id_7c1255c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/SearchField.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/SearchField.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchField_vue_vue_type_template_id_6a3c60a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchField.vue?vue&type=template&id=6a3c60a1& */ "./assets/js/components/SearchField.vue?vue&type=template&id=6a3c60a1&");
/* harmony import */ var _SearchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchField.vue?vue&type=script&lang=js& */ "./assets/js/components/SearchField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchField_vue_vue_type_template_id_6a3c60a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchField_vue_vue_type_template_id_6a3c60a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/SearchField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/SearchField.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/SearchField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SearchField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/SearchField.vue?vue&type=template&id=6a3c60a1&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/SearchField.vue?vue&type=template&id=6a3c60a1& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_template_id_6a3c60a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchField.vue?vue&type=template&id=6a3c60a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SearchField.vue?vue&type=template&id=6a3c60a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_template_id_6a3c60a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_template_id_6a3c60a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/SignUpForm.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/SignUpForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpForm_vue_vue_type_template_id_41b3c606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpForm.vue?vue&type=template&id=41b3c606& */ "./assets/js/components/SignUpForm.vue?vue&type=template&id=41b3c606&");
/* harmony import */ var _SignUpForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpForm.vue?vue&type=script&lang=js& */ "./assets/js/components/SignUpForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUpForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUpForm_vue_vue_type_template_id_41b3c606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUpForm_vue_vue_type_template_id_41b3c606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/SignUpForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/SignUpForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/SignUpForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SignUpForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/SignUpForm.vue?vue&type=template&id=41b3c606&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/SignUpForm.vue?vue&type=template&id=41b3c606& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_template_id_41b3c606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpForm.vue?vue&type=template&id=41b3c606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SignUpForm.vue?vue&type=template&id=41b3c606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_template_id_41b3c606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_template_id_41b3c606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/UserList.vue":
/*!*******************************************!*\
  !*** ./assets/js/components/UserList.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_68cd7daa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=68cd7daa& */ "./assets/js/components/UserList.vue?vue&type=template&id=68cd7daa&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./assets/js/components/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_68cd7daa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_68cd7daa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/UserList.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./assets/js/components/UserList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/UserList.vue?vue&type=template&id=68cd7daa&":
/*!**************************************************************************!*\
  !*** ./assets/js/components/UserList.vue?vue&type=template&id=68cd7daa& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_68cd7daa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=68cd7daa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserList.vue?vue&type=template&id=68cd7daa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_68cd7daa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_68cd7daa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/UserProfile.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/UserProfile.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_0afec1cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=0afec1cd& */ "./assets/js/components/UserProfile.vue?vue&type=template&id=0afec1cd&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./assets/js/components/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_0afec1cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_0afec1cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/UserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/UserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/UserProfile.vue?vue&type=template&id=0afec1cd&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/UserProfile.vue?vue&type=template&id=0afec1cd& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_0afec1cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=0afec1cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserProfile.vue?vue&type=template&id=0afec1cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_0afec1cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_0afec1cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['author'],
  methods: {
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    },
    getShortDescription: function getShortDescription() {
      return this.author.description.length < 200 ? this.author.description : this.author.description.substring(0, 200) + '...';
    }
  },
  computed: {
    fullname: function fullname() {
      var fullname = this.author.surname;
      fullname += this.author.first_name ? ' ' + this.author.first_name : '';
      fullname += this.author.patronymic ? ' ' + this.author.patronymic : '';
      return fullname;
    }
  },
  name: "author_card"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImgUpload.vue */ "./assets/js/components/ImgUpload.vue");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    img_upload: _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      isHandling: false,
      first_name: '',
      surname: '',
      patronymic: '',
      description: '',
      img: '',
      status_message: '',
      description_error: '',
      first_name_error: '',
      surname_error: '',
      patronymic_error: ''
    };
  },
  methods: {
    validateInput: function validateInput() {
      if (!this.first_name.trim()) {
        this.first_name_error = 'Укажите имя';
      } else this.first_name_error = '';

      if (!this.surname.trim()) {
        this.surname_error = 'Укажите фамилию';
      } else this.surname_error = '';

      if (!this.description.trim()) {
        this.description_error = 'Укажите описание';
      } else this.description_error = '';
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.validateInput();
      if (this.first_name_error || this.surname_error || this.description_error) return;
      this.isHandling = true;
      var data = {
        surname: this.surname.trim(),
        first_name: this.first_name.trim(),
        patronymic: this.patronymic.trim(),
        description: this.description
      };
      if (this.img.length) data.img = this.img;
      var url = '/api/authors.json';
      var name = data.surname + ' ' + data.first_name + ' ' + data.patronymic;
      var redirectUrl = "/authors?status=new_author_success&name=" + encodeURIComponent(name);
      this.name_error = '';
      this.description_error = '';
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, data).then(function (response) {
        _this.redirectTo(redirectUrl);
      })["catch"](function (error) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = error.response.data.violations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var violation = _step.value;
            if (violation.propertyPath === 'first_name') _this.first_name_error = violation.message;else if (violation.propertyPath === 'description') _this.description_error = violation.message;else if (violation.propertyPath === 'surname') _this.surname_error = violation.message;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this.isHandling = false;
      });
    },
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    }
  },
  computed: {},
  name: "author_form"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthorCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorCard.vue */ "./assets/js/components/AuthorCard.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue */ "./assets/js/components/Pagination.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    author_card: _AuthorCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      authors: [],
      total_pages: 0
    };
  },
  props: {
    page: {
      type: Number,
      "default": 1
    },
    pagination: {
      type: Boolean,
      "default": false
    }
  },
  created: function created() {
    var _this = this;

    var url = '/api/authors?page=' + this.page;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (response) {
      _this.authors = response.data['hydra:member'];
      _this.total_pages = Math.ceil(response.data['hydra:totalItems'] / 10);
    });
  },
  methods: {},
  name: "author_list"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BookList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookList.vue */ "./assets/js/components/BookList.vue");
/* harmony import */ var _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImgUpload.vue */ "./assets/js/components/ImgUpload.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    book_list: _BookList_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    img_upload: _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      author: {
        id: 0,
        first_name: '',
        surname: '',
        patronymic: '',
        img: ''
      },
      books: [],
      isEdited: false,
      is_initialized: false,
      description_error: '',
      first_name_error: '',
      surname_error: '',
      patronymic_error: ''
    };
  },
  props: {
    id: {
      type: Number,
      "default": 0
    },
    enable_editing: {
      type: Boolean,
      "default": false
    }
  },
  created: function created() {
    var _this = this;

    if (this.id === 0) return;
    var url = '/api/authors/' + this.id + '.json';
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (response) {
      _this.author = response.data;
      url = '/api/authors/' + _this.id + '/books.json';
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (response) {
        _this.books = response.data;
        _this.is_initialized = true;
      });
    });
  },
  methods: {
    getInitials: function getInitials(author) {
      var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
      initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
      return initials;
    },
    validateInput: function validateInput() {
      var author = this.author;
      if (!author.first_name) this.first_name_error = "Укажите имя";else this.first_name_error = "";
      if (!author.surname) this.surname_error = "Укажите фамилию";else this.surname_error = "";
      if (!author.description) this.description_error = "Укажите описание";else this.description_error = "";
    },
    handlePatchRequest: function handlePatchRequest() {
      var _this2 = this;

      this.validateInput();
      if (this.surname_error || this.description_error || this.first_name_error) return;
      var data = {
        first_name: this.author.first_name,
        surname: this.author.surname,
        patronymic: this.author.patronymic,
        description: this.author.description
      };
      if (this.author.img) data.img = this.author.img;
      var url = '/api/authors/' + this.author.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(url, data, {
        headers: {
          "Content-Type": "application/merge-patch+json"
        }
      }).then(function (response) {
        _this2.isEdited = false;
      });
    },
    handleDeleteRequest: function handleDeleteRequest() {
      var _this3 = this;

      var url = '/api/authors/' + this.author.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](url).then(function (response) {
        var redirect_url = '/authors?status=author_deleted_success&name=' + encodeURIComponent(_this3.getInitials(_this3.author));
        window.location.href = redirect_url;
      });
    }
  },
  computed: {
    rowsCount: function rowsCount() {
      return Math.ceil(this.author.description.length / 51);
    }
  },
  name: "author_profile"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['book'],
  methods: {
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    },
    getInitials: function getInitials(author) {
      var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
      initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
      return initials;
    },
    getShortDescription: function getShortDescription() {
      return this.book.description.length < 200 ? this.book.description : this.book.description.substring(0, 200) + '...';
    }
  },
  name: "book_card"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GenresAndAuthorsSelect_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GenresAndAuthorsSelect.vue */ "./assets/js/components/GenresAndAuthorsSelect.vue");
/* harmony import */ var _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImgUpload.vue */ "./assets/js/components/ImgUpload.vue");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    genres_and_authors_select: _GenresAndAuthorsSelect_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    img_upload: _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      isHandling: false,
      authors: [],
      genres: [],
      title: '',
      description: '',
      status_message: '',
      description_error: '',
      genres_error: '',
      authors_error: '',
      title_error: '',
      img: '/img/books/book-default.jpg'
    };
  },
  methods: {
    validateInput: function validateInput() {
      if (!this.title.trim()) {
        this.title_error = 'Укажите название';
      } else this.title_error = '';

      if (!this.description.trim()) {
        this.description_error = 'Укажите описание';
      } else this.description_error = '';

      if (!this.genres.length) {
        this.genres_error = 'Выберите жанр';
      } else this.genres_error = '';

      if (!this.authors.length) {
        this.authors_error = 'Укажите автора';
      } else this.authors_error = '';
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.validateInput();
      if (this.title_error || this.description_error || this.genres_error || this.authors_error) return;
      this.isHandling = true;
      var genres_iri = [];
      var authors_iri = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.genres[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var genre = _step.value;
          genres_iri.push('/api/genres/' + genre.id);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.authors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var author = _step2.value;
          authors_iri.push('/api/authors/' + author.id);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var data = {
        title: this.title.trim(),
        description: this.description,
        genres: genres_iri,
        authors: authors_iri,
        img: this.img
      };
      var url = '/api/books.json';
      var redirectUrl = "/books?status=new_book_success&title=" + encodeURIComponent(data.title);
      this.title_error = '';
      this.description_error = '';
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, data).then(function (response) {
        _this.redirectTo(redirectUrl);
      })["catch"](function (error) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = error.response.data.violations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var violation = _step3.value;
            if (violation.propertyPath === 'title') _this.title_error = violation.message;else if (violation.propertyPath === 'description') _this.description_error = violation.message;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        _this.isHandling = false;
      });
    },
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    }
  },
  name: "book_form"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BookCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookCard.vue */ "./assets/js/components/BookCard.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue */ "./assets/js/components/Pagination.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    book_card: _BookCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      books: [],
      total_pages: 0,
      collection_is_empty: false,
      pagination_url: '/books'
    };
  },
  props: {
    page: {
      type: Number,
      "default": 1
    },
    pagination: {
      type: Boolean,
      "default": false
    },
    collection: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    search_query: {
      type: String,
      "default": ''
    }
  },
  created: function created() {
    var _this = this;

    if (this.collection.length) {
      this.books = this.collection;
    } else if (this.search_query.length) {
      var url = '/api/books/search?query=' + this.search_query + '&page=' + this.page;
      console.log(url);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (response) {
        _this.books = response.data['hydra:member'];
        _this.total_pages = 0; //Math.ceil(response.data['hydra:totalItems'] / 10);

        _this.pagination_url = '/books/search?query=' + _this.search_query;
        if (!_this.books.length) _this.collection_is_empty = true;
      });
    } else {
      var url = '/api/books?page=' + this.page;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (response) {
        _this.books = response.data['hydra:member'];
        _this.total_pages = Math.ceil(response.data['hydra:totalItems'] / 10);
      });
    }
  },
  methods: {},
  name: "book_list"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GenresAndAuthorsSelect_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GenresAndAuthorsSelect.vue */ "./assets/js/components/GenresAndAuthorsSelect.vue");
/* harmony import */ var _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImgUpload.vue */ "./assets/js/components/ImgUpload.vue");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    genres_and_authors_select: _GenresAndAuthorsSelect_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    img_upload: _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      book: {
        id: '0',
        title: '',
        authors: [],
        genres: [],
        description: '',
        img: ''
      },
      isEdited: false,
      genres_error: '',
      authors_error: '',
      description_error: '',
      title_error: '',
      is_initialized: false
    };
  },
  props: {
    id: {
      type: Number,
      "default": 0
    },
    enable_editing: {
      type: Boolean,
      "default": false
    }
  },
  created: function created() {
    var _this = this;

    if (this.id === 0) return;
    var url = '/api/books/' + this.id + '.json';
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url).then(function (response) {
      _this.book = response.data;
      _this.is_initialized = true;
    })["catch"](function (error) {});
  },
  methods: {
    validateInput: function validateInput() {
      var book = this.book;
      if (!book.title) this.title_error = "Укажите название";else this.title_error = "";
      if (!book.description) this.description_error = "Укажите описание";else this.description_error = "";
      if (!book.genres.length) this.genres_error = "Выберите жанр";else this.genres_error = "";
      if (!book.authors.length) this.authors_error = "Укажите автора";else this.authors_error = "";
    },
    handlePatchRequest: function handlePatchRequest() {
      var _this2 = this;

      this.validateInput();
      if (this.title_error || this.description_error || this.genres_error || this.authors_error) return;
      var genres_iri = [];
      var authors_iri = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.book.genres[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var genre = _step.value;
          genres_iri.push('/api/genres/' + genre.id);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.book.authors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var author = _step2.value;
          authors_iri.push('/api/authors/' + author.id);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var data = {
        title: this.book.title,
        description: this.book.description,
        authors: authors_iri,
        genres: genres_iri
      };
      if (this.book.img) data.img = this.book.img;
      var url = '/api/books/' + this.book.id;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.patch(url, data, {
        headers: {
          "Content-Type": "application/merge-patch+json"
        }
      }).then(function (response) {
        _this2.isEdited = false;
      });
    },
    handleDeleteRequest: function handleDeleteRequest() {
      var _this3 = this;

      var url = '/api/books/' + this.book.id;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"](url).then(function (response) {
        var redirect_url = '/books?status=book_deleted_success&title=' + encodeURIComponent(_this3.book.title);
        window.location.href = redirect_url;
      });
    },
    getInitials: function getInitials(author) {
      var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
      initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
      return initials;
    }
  },
  computed: {
    rowsCount: function rowsCount() {
      return Math.ceil(this.book.description.length / 51);
    }
  },
  name: "book_profile"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['genre'],
  methods: {
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    },
    getShortDescription: function getShortDescription() {
      return this.genre.description.length < 200 ? this.genre.description : this.genre.description.substring(0, 200) + '...';
    }
  },
  computed: {},
  name: "genre_card"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isHandling: false,
      name: '',
      description: '',
      status_message: '',
      description_error: '',
      name_error: ''
    };
  },
  methods: {
    validateInput: function validateInput() {
      if (!this.name.trim()) {
        this.name_error = 'Укажите название';
      } else this.name_error = '';

      if (!this.description.trim()) {
        this.description_error = 'Укажите описание';
      } else this.description_error = '';
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.validateInput();
      if (this.name_error || this.description_error) return;
      this.isHandling = true;
      var data = {
        name: this.name.trim(),
        description: this.description
      };
      var url = '/api/genres.json';
      var redirectUrl = "/genres?status=new_genre_success&name=" + encodeURIComponent(data.name);
      this.name_error = '';
      this.description_error = '';
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(url, data).then(function (response) {
        _this.redirectTo(redirectUrl);
      })["catch"](function (error) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = error.response.data.violations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var violation = _step.value;
            if (violation.propertyPath === 'name') _this.name_error = violation.message;else if (violation.propertyPath === 'description') _this.description_error = violation.message;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this.isHandling = false;
      });
    },
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    }
  },
  computed: {},
  name: "genre_form"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenreCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenreCard.vue */ "./assets/js/components/GenreCard.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue */ "./assets/js/components/Pagination.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    genre_card: _GenreCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      genres: [],
      total_pages: 0
    };
  },
  props: {
    page: {
      type: Number,
      "default": 1
    },
    pagination: {
      type: Boolean,
      "default": false
    }
  },
  created: function created() {
    var _this = this;

    var url = '/api/genres?page=' + this.page;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (response) {
      _this.genres = response.data['hydra:member'];
      _this.total_pages = Math.ceil(response.data['hydra:totalItems'] / 10);
    });
  },
  methods: {},
  name: "genre_list"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BookList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BookList.vue */ "./assets/js/components/BookList.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    book_list: _BookList_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      genre: {
        id: 0,
        name: '',
        books: []
      },
      isEdited: false,
      description_error: '',
      name_error: '',
      is_initialized: false
    };
  },
  props: {
    id: {
      type: Number,
      "default": 0
    },
    enable_editing: {
      type: Boolean,
      "default": false
    }
  },
  created: function created() {
    var _this = this;

    if (this.id === 0) return;
    var url = '/api/genres/' + this.id + '.json';
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(function (response) {
      _this.genre = response.data;
      _this.is_initialized = true;
    });
  },
  methods: {
    validateInput: function validateInput() {
      var genre = this.genre;
      if (!genre.name) this.name_error = "Укажите название";else this.name_error = "";
      if (!genre.description) this.description_error = "Укажите описание";else this.description_error = "";
    },
    handlePatchRequest: function handlePatchRequest() {
      var _this2 = this;

      this.validateInput();
      if (this.name_error || this.description_error) return;
      var data = {
        name: this.genre.name,
        description: this.genre.description
      };
      var url = '/api/genres/' + this.genre.id;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(url, data, {
        headers: {
          "Content-Type": "application/merge-patch+json"
        }
      }).then(function (response) {
        _this2.isEdited = false;
      });
    },
    handleDeleteRequest: function handleDeleteRequest() {
      var _this3 = this;

      var url = '/api/genres/' + this.genre.id;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"](url).then(function (response) {
        var redirect_url = '/genres?status=genre_deleted_success&name=' + encodeURIComponent(_this3.genre.name);
        window.location.href = redirect_url;
      });
    }
  },
  computed: {
    rowsCount: function rowsCount() {
      return Math.ceil(this.genre.description.length / 51);
    }
  },
  name: "genre_profile"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      authors_selected: this.authors,
      authors_all: [],
      genres_selected: this.genres,
      genres_all: []
    };
  },
  created: function created() {
    var _this = this;

    var authors_url = '/api/authors.json?pagination=false&properties[]=id&properties[]=firstName&properties[]=surname&properties[]=patronymic';
    var genres_url = '/api/genres.json?pagination=false&properties[]=id&properties[]=name';
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(authors_url).then(function (response) {
      _this.authors_all = response.data.sort(function (a, b) {
        if (a.surname > b.surname) return 1;else return -1;
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(genres_url).then(function (response) {
        _this.genres_all = response.data.sort(function (a, b) {
          if (a.name > b.name) return 1;else return -1;
        });
      });
    });
  },
  props: {
    authors_error: {
      type: String,
      "default": ''
    },
    genres_error: {
      type: String,
      "default": ''
    },
    authors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    genres: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  methods: {
    getInitials: function getInitials(author) {
      var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
      initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
      return initials;
    },
    getItemIndexFromArray: function getItemIndexFromArray(array, object) {
      for (var i = 0; i < array.length; i++) {
        if (JSON.stringify(array[i]) === JSON.stringify(object)) return i;
      }

      return -1;
    },
    addGenreToSelected: function addGenreToSelected(genre) {
      var index = this.getItemIndexFromArray(this.genres_selected, genre);

      if (index === -1) {
        this.genres_selected.push(genre);
        index = this.getItemIndexFromArray(this.genres_all, genre);
        this.genres_all.splice(index, 1);
        this.$emit('genres-changed', this.genres_selected);
      }
    },
    removeGenreFromSelected: function removeGenreFromSelected(genre) {
      var index = this.getItemIndexFromArray(this.genres_selected, genre);

      if (index !== -1) {
        this.genres_selected.splice(index, 1);
        this.genres_all.push(genre);
        this.$emit('genres-changed', this.genres_selected);
        this.genres_all = this.genres_all.sort(function (a, b) {
          if (a.name > b.name) return 1;else return -1;
        });
      }
    },
    addAuthorToSelected: function addAuthorToSelected(author) {
      var index = this.getItemIndexFromArray(this.authors_selected, author);

      if (index === -1) {
        this.authors_selected.push(author);
        index = this.getItemIndexFromArray(this.authors_all, author);
        this.authors_all.splice(index, 1);
        this.$emit('authors-changed', this.authors_selected);
      }
    },
    removeAuthorFromSelected: function removeAuthorFromSelected(author) {
      var index = this.getItemIndexFromArray(this.authors_selected, author);

      if (index !== -1) {
        this.authors_selected.splice(index, 1);
        this.authors_all.push(author);
        this.$emit('authors-changed', this.authors_selected);
        this.authors_all = this.authors_all.sort(function (a, b) {
          if (a.name > b.name) return 1;else return -1;
        });
      }
    }
  },
  name: "genres_and_authors_select"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ImgUpload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/ImgUpload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      request_url: this.url
    };
  },
  props: {
    url: {
      type: String,
      "default": '/books/img'
    }
  },
  methods: {
    uploadImg: function uploadImg(event) {
      var _this = this;

      var data = new FormData();
      var file = event.target.files[0];
      data.set('img', file);
      var config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      console.log(data);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.request_url, data, config).then(function (response) {
        var img_url = response.data.img;
        console.log('img_url' + img_url);

        _this.$emit('uploaded', img_url);
      })["catch"](function (error) {});
    }
  },
  name: "img_upload"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      email_error: '',
      password_error: ''
    };
  },
  methods: {
    validateInputAndSubmit: function validateInputAndSubmit() {
      var _this = this;

      if (!this.email.trim()) this.email_error = "Введите email";else {
        var url = '/api/users.json?email=' + encodeURIComponent(this.email.trim());
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(function (response) {
          if (!response.data.length) {
            _this.email_error = 'Аккаунт не существует';
            _this.password_error = '';
          } else {
            _this.email_error = '';

            _this.validatePassword();
          }
        })["finally"](function () {
          _this.handleSubmit();
        });
      }
    },
    validatePassword: function validatePassword() {
      if (!this.password) this.password_error = 'Введите пароль';else this.password_error = '';
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      if (this.email_error || this.password_error) return;
      var data = {
        email: this.email.trim(),
        password: this.password
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/login', data).then(function (response) {
        window.location.href = "/"; //this.$emit('user-authenticated', userUri);
        //this.email = '';
        //this.password = '';
      })["catch"](function (error) {
        console.log(error.response.data);
        _this2.password_error = 'Неверный пароль';
      })["finally"](function () {});
    }
  },
  name: "login_form"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      books: [],
      offset: 3
    };
  },
  props: ['current_page', 'total_pages', 'url'],
  computed: {},
  methods: {
    pagination_range: function pagination_range() {
      var pagination_start = this.current_page - this.offset > 1 ? this.current_page - this.offset : 1;
      var pagination_end = this.current_page + this.offset < this.total_pages ? this.current_page + this.offset : this.total_pages;
      var range = [];

      for (var i = pagination_start; i <= pagination_end; i++) {
        range.push(i);
      }

      console.log(pagination_start);
      return range;
    },
    addPage: function addPage(url, page) {
      var result = url;

      if (url.includes('?')) {
        result += '&page=' + page;
      } else {
        result += '?page=' + page;
      }

      return result;
    }
  },
  name: "pagination"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/PasswordRestoreForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/PasswordRestoreForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      id: 0,
      restore_token: '',
      email_form: true,
      status_message: '',
      valid_feedback_class: 'valid-feedback',
      invalid_feedback_class: 'invalid-feedback',
      is_feedback_valid: true,
      password_form: false,
      code_form: false,
      password_restored: false,
      password: '',
      password_error: '',
      password_confirmation: '',
      password_confirmation_error: ''
    };
  },
  methods: {
    validatePassword: function validatePassword() {
      if (!this.password) this.password_error = "Введите пароль";else if (this.password.length < 6) this.password_error = "Пароль должен содержать не менее 5 символов";else if (!/\d/.test(this.password)) {
        this.password_error = "Пароль должен содержать цифры";
      } else this.password_error = "";

      if (!this.password_error && this.password !== this.password_confirmation) {
        this.password_confirmation_error = "Пароли не совпадают";
      } else this.password_confirmation_error = "";
    },
    generateToken: function generateToken() {
      var _this = this;

      if (!this.email) {
        this.is_feedback_valid = false;
        this.status_message = 'Введите email, который привязан к вашему аккаунту';
        return;
      }

      this.status_message = '';
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/password/restore', {
        email: this.email
      }).then(function (response) {
        _this.email_form = false;
        _this.code_form = true;
        _this.is_feedback_valid = true;
        _this.status_message = response.data.message;
        _this.id = response.data.id;
      })["catch"](function (error) {
        _this.is_feedback_valid = false;
        _this.status_message = error.response.data.message;
      });
    },
    verifyToken: function verifyToken() {
      var _this2 = this;

      if (!this.restore_token) {
        this.is_feedback_valid = false;
        this.status_message = 'Введите код для подтверждения восстановления пароля';
        return;
      }

      var data = {
        email: this.email,
        restore_token: this.restore_token
      };
      var url = '/api/users/' + this.id + '.json';
      this.status_message = '';
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.patch(url, data, {
        headers: {
          'Content-Type': "application/merge-patch+json"
        }
      }).then(function (response) {// this.code_form = false;
        // this.password_form = true;
      })["catch"](function (error) {
        var violations = error.response.data.violations;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = violations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var violation = _step.value;

            if (violation.propertyPath == 'password') {
              _this2.status_message = '';
              _this2.is_feedback_valid = true;
              _this2.code_form = false;
              _this2.password_form = true;
              break;
            } else {
              _this2.is_feedback_valid = false;
              _this2.status_message = violation.message;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    },
    sendNewPassword: function sendNewPassword() {
      var _this3 = this;

      this.validatePassword();
      if (this.password_error || this.password_confirmation_error) return;
      var data = {
        email: this.email,
        restore_token: this.restore_token,
        password: this.password
      };
      var url = '/api/users/' + this.id + '.json';
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.patch(url, data, {
        headers: {
          'Content-Type': "application/merge-patch+json"
        }
      }).then(function (response) {
        _this3.status_message = "Пароль успешно восстановлен!";
        _this3.password_form = false;
        _this3.password_restored = true;

        _this3.login();
      })["catch"](function (error) {
        var violations = error.response.data.violations;
        _this3.is_feedback_valid = false;
        _this3.status_message = '';
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = violations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var violation = _step2.value;
            _this3.status_message += violation.message + '<br>';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    },
    login: function login() {
      var url = "/login";
      var data = {
        email: this.email,
        password: this.password
      };
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, data).then(function (response) {
        return window.location.href = "/";
      });
    }
  },
  name: "password_restore_form"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SearchField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SearchField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      query: this.value
    };
  },
  props: {
    value: {
      type: String,
      "default": ''
    },
    side: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    find: function find() {
      var url = '';
      if (this.query.length) url = '/books/search?query=' + encodeURIComponent(this.query);else url = '/books';
      window.location.href = url;
    }
  },
  name: 'search_field'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SignUpForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SignUpForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
      email_error: '',
      username_error: '',
      password_error: '',
      password_confirmation_error: '',
      verification_code: '',
      verification_code_status: '',
      signup_form: true,
      valid_feedback_class: 'valid-feedback',
      invalid_feedback_class: 'invalid-feedback',
      is_feedback_valid: true
    };
  },
  computed: {
    verification_form: function verification_form() {
      return !this.signup_form;
    }
  },
  methods: {
    validateInputAndSendCode: function validateInputAndSendCode() {
      var _this = this;

      if (!this.username) {
        this.username_error = "Введите логин";
        this.validateEmail();
      } else if (this.username.length < 3) {
        this.username_error = "Логин должен содержать минимум 3 символа";
        this.validateEmail();
      } else {
        var url = '/api/users.json?username=' + encodeURIComponent(this.username);
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url).then(function (response) {
          if (response.data.length) _this.username_error = "Логин занят";else _this.username_error = "";
        })["finally"](function () {
          return _this.validateEmail();
        });
      }
    },
    validateEmail: function validateEmail() {
      var _this2 = this;

      this.validatePassword();
      if (!this.email.trim()) this.email_error = "Введите email";else {
        //email validation
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
        if (!re.test(this.email)) this.email_error = 'Некорректный формат';else {
          var url = '/api/users.json?email=' + encodeURIComponent(this.email);
          axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url).then(function (response) {
            if (response.data.length) _this2.email_error = "Email занят";else _this2.email_error = "";
          })["finally"](function () {
            _this2.generateCode();
          });
        }
      }
    },
    validatePassword: function validatePassword() {
      if (!this.password) this.password_error = "Введите пароль";else if (this.password.length < 6) this.password_error = "Пароль должен содержать не менее 5 символов";else if (!/\d/.test(this.password)) {
        this.password_error = "Пароль должен содержать цифры";
      } else this.password_error = "";

      if (!this.password_error && this.password !== this.password_confirmation) {
        this.password_confirmation_error = "Пароли не совпадают";
      } else this.password_confirmation_error = "";
    },
    generateCode: function generateCode() {
      var _this3 = this;

      if (this.username_error || this.email_error || this.password_error || this.password_confirmation_error) return;
      var data = {
        email: this.email.trim()
      };
      var url = '/verification_code/generate';
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(url, data).then(function (response) {
        _this3.signup_form = false;
        _this3.verification_code_status = response.data.message;
      });
    },
    handleSubmit: function handleSubmit() {
      var _this4 = this;

      if (this.username_error || this.email_error || this.password_error || this.password_confirmation_error) return;
      var data = {
        email: this.email.trim(),
        username: this.username,
        password: this.password,
        verification_code: this.verification_code
      };
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/api/users', data).then(function () {
        return _this4.login();
      })["catch"](function (error) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = error.response.data.violations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var violation = _step.value;
            var property = violation.propertyPath;
            var message = violation.message;
            /*if(property === "username") this.username_error = message;
            else if(property === "email") this.email_error = message;
            else */

            if (property === 'verification_code') {
              _this4.is_feedback_valid = false;
              _this4.verification_code_status = message;
            } else {
              _this4.is_feedback_valid = false;
              _this4.verification_code_status = "Произошла непредвиденная ошибка, перезагрузите страницу и попробуйте снова.";
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    },
    login: function login() {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/login', {
        email: this.email.trim(),
        password: this.password
      }).then(function (response) {
        return window.location.href = "/";
      });
    } // validateUsername(){
    //     if(!this.username) this.username_error = 'Введите логин';
    //     else if(this.username < 3) this.username_error = 'Логин должен содержать не менее 3 символов';
    //     else{
    //         var url = '/api/users.json?username=' + encodeURIComponent(this.username);
    //         axios
    //             .get(url)
    //             .then(response => {
    //                 this.username_error = (response.data.length) ? 'Логин занят' : '';
    //             })
    //     }
    // }

  },
  name: "signup_form"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/UserList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      is_initialized: false
    };
  },
  created: function created() {
    var _this = this;

    if (this.id === 0) return;
    var url = '/api/users.json';
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url).then(function (response) {
      _this.users = response.data;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var user = _step.value;
          user.reg_date = new Date(user.reg_date);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.is_initialized = true;
    });
  },
  methods: {
    formatRegDate: function formatRegDate(date) {
      return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    },
    getRoleClass: function getRoleClass(role) {
      if (role === 'ROLE_ADMIN' || role === 'ROLE_ROOT') return 'text-danger';else if (role === 'ROLE_MODERATOR') return 'text-primary';else if (role === 'ROLE_USER') return 'text-dark';
    },
    getRoleLabel: function getRoleLabel(role) {
      if (role === 'ROLE_ROOT') return '≧〔゜゜〕≦';
      if (role === 'ROLE_ADMIN') return 'администратор';else if (role === 'ROLE_MODERATOR') return 'модератор';else if (role === 'ROLE_USER') return 'пользователь';
    }
  },
  name: "user_list"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/UserProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImgUpload.vue */ "./assets/js/components/ImgUpload.vue");









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    img_upload: _ImgUpload_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      user: {
        id: 0,
        email: '',
        username: '',
        img: '',
        reg_date: new Date(),
        role: ''
      },
      current_password: '',
      new_password: '',
      isEdited: false,
      isPasswordEdited: false,
      is_initialized: false,
      email_error: '',
      username_error: '',
      current_password_error: '',
      new_password_error: '',
      password_status: ''
    };
  },
  props: {
    id: {
      type: Number,
      "default": 0
    },
    admin: {
      type: Boolean,
      "default": false
    },
    enable_editing: {
      type: Boolean,
      "default": false
    }
  },
  created: function created() {
    var _this = this;

    if (this.id === 0) return;
    var url = '/api/users/' + this.id + '.json';
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url).then(function (response) {
      _this.user = response.data;
      _this.user.reg_date = new Date(_this.user.reg_date);
      _this.is_initialized = true;
    });
  },
  methods: {
    enableProfileEditing: function enableProfileEditing() {
      this.isEdited = true;
      this.isPasswordEdited = false;
      this.password_status = '';
    },
    enablePasswordEditing: function enablePasswordEditing() {
      this.new_password = '';
      this.current_password = '';
      this.new_password_error = '';
      this.current_password_error = '';
      this.isPasswordEdited = true;
      this.password_status = '';
    },
    redirectTo: function redirectTo(path) {
      window.location.href = path;
    },
    validateInput: function validateInput() {
      var user = this.user;
      if (!user.username) this.username_error = "Укажите логин";else this.username_error = "";
    },
    validatePasswordInput: function validatePasswordInput() {
      if (!this.current_password) this.current_password_error = "Укажите текущий пароль";else this.current_password_error = "";
      if (!this.new_password) this.new_password_error = "Укажите новый пароль";else this.new_password_error = "";
    },
    handlePasswordReset: function handlePasswordReset() {
      var _this2 = this;

      this.validatePasswordInput();
      if (this.new_password_error || this.current_password_error) return;
      var data = {
        current_password: this.current_password,
        password: this.new_password
      };
      var url = '/api/users/' + this.user.id;
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch(url, data, {
        headers: {
          "Content-Type": "application/merge-patch+json"
        }
      }).then(function (response) {
        _this2.isPasswordEdited = false;
        _this2.password_status = "Пароль успешно изменён";
      })["catch"](function (error) {
        var violations = error.response.data.violations;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = violations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var violation = _step.value;
            if (violation.propertyPath === 'password') _this2.new_password_error = violation.message;else if (violation.propertyPath === 'current_password') _this2.current_password_error = violation.message;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    },
    handlePatchRequest: function handlePatchRequest() {
      var _this3 = this;

      this.validateInput();
      if (this.username_error) return;
      var data = {
        username: this.user.username,
        img: this.user.img
      };
      var url = '/api/users/' + this.user.id;
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch(url, data, {
        headers: {
          "Content-Type": "application/merge-patch+json"
        }
      }).then(function (response) {
        _this3.isEdited = false;
      })["catch"](function (error) {
        var violations = error.response.data.violations;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = violations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var violation = _step2.value;
            if (violation.propertyPath === 'username') _this3.username_error = violation.message;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    }
  },
  computed: {
    formattedRegDate: function formattedRegDate() {
      if (this.is_initialized) return this.user.reg_date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });else return '';
    },
    roleClass: function roleClass() {
      var role = this.user.role;
      if (role === 'ROLE_ADMIN' || role === 'ROLE_ROOT') return 'text-danger';else if (role === 'ROLE_MODERATOR') return 'text-primary';else if (role === 'ROLE_USER') return 'text-dark';
    },
    roleLabel: function roleLabel() {
      var role = this.user.role;
      if (role === 'ROLE_ROOT') return '≧〔゜゜〕≦';
      if (role === 'ROLE_ADMIN') return 'администратор';else if (role === 'ROLE_MODERATOR') return 'модератор';else if (role === 'ROLE_USER') return 'пользователь';
    }
  },
  name: "user_profile"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorCard.vue?vue&type=template&id=24bf92c8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorCard.vue?vue&type=template&id=24bf92c8& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "card bg-light mb-3",
        staticStyle: { "max-width": "640px" }
      },
      [
        _c("div", { staticClass: "row no-gutters" }, [
          _c("div", { staticClass: "col-md-4 book-img-container" }, [
            _c("img", {
              staticClass: "card-img",
              attrs: { src: _vm.author.img, alt: "..." }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _c("b", [_vm._v(_vm._s(_vm.fullname))])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(_vm._s(_vm.getShortDescription()))
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "text-lg-right",
                  attrs: { id: "button-details" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.redirectTo("/authors/" + _vm.author.id)
                        }
                      }
                    },
                    [_vm._v("Подробнее")]
                  )
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorForm.vue?vue&type=template&id=0a59ce50&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorForm.vue?vue&type=template&id=0a59ce50& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Новый автор")]),
    _vm._v(" "),
    _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "surname-input" } }, [_vm._v("Фамилия")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.surname,
              expression: "surname"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "surname-input", type: "text", placeholder: "Фамилия" },
          domProps: { value: _vm.surname },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.surname = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.surname_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "first-name-input" } }, [_vm._v("Имя")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.first_name,
              expression: "first_name"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "first-name-input", type: "text", placeholder: "Имя" },
          domProps: { value: _vm.first_name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.first_name = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.first_name_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "patronymic-input" } }, [
          _vm._v("Отчество")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.patronymic,
              expression: "patronymic"
            }
          ],
          staticClass: "form-control",
          attrs: {
            id: "patronymic-input",
            type: "text",
            placeholder: "Отчество"
          },
          domProps: { value: _vm.patronymic },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.patronymic = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.patronymic_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "description-input" } }, [
          _vm._v("Описание")
        ]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.description,
              expression: "description"
            }
          ],
          staticClass: "form-control",
          attrs: {
            rows: "3",
            id: "description-input",
            type: "text",
            placeholder: ""
          },
          domProps: { value: _vm.description },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.description = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.description_error))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("img_upload", {
            attrs: { url: "/authors/img" },
            on: {
              uploaded: function($event) {
                _vm.img = $event
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "btn btn-outline-primary",
          attrs: {
            type: "submit",
            value: "Добавить",
            disabled: _vm.isHandling
          },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.handleSubmit($event)
            }
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorList.vue?vue&type=template&id=3e52f52a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorList.vue?vue&type=template&id=3e52f52a& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.pagination
        ? _c("pagination", {
            attrs: {
              url: "/authors",
              total_pages: _vm.total_pages,
              current_page: _vm.page
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.authors, function(author) {
        return _c("author_card", { key: author.id, attrs: { author: author } })
      }),
      _vm._v(" "),
      _vm.pagination
        ? _c("pagination", {
            attrs: {
              url: "/authors",
              total_pages: _vm.total_pages,
              current_page: _vm.page
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/AuthorProfile.vue?vue&type=template&id=7ca7cb66&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/AuthorProfile.vue?vue&type=template&id=7ca7cb66& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "card bg-light col-sm-6",
        staticStyle: { "max-width": "740px" },
        attrs: { id: "book-card" }
      },
      [
        _c("div", { staticClass: "row no-gutters" }, [
          _c("div", { staticClass: "col-md-4 pt-4" }, [
            _c("img", {
              staticClass: "card-img",
              attrs: { src: _vm.author.img, alt: "..." }
            }),
            _vm._v(" "),
            _vm.isEdited
              ? _c(
                  "div",
                  { staticStyle: { "padding-top": "10%" } },
                  [
                    _c("img_upload", {
                      attrs: { url: "/authors/img" },
                      on: {
                        uploaded: function($event) {
                          _vm.author.img = $event
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8 " }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h3", { staticClass: "card-title" }, [
                !_vm.isEdited
                  ? _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.author.surname +
                            " " +
                            _vm.author.first_name +
                            " " +
                            _vm.author.patronymic
                        )
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.isEdited
                ? _c("div", { attrs: { id: "edit-form" } }, [
                    _c("form", [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "surname-input" } }, [
                          _vm._v("Фамилия")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.author.surname,
                              expression: "author.surname"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "surname-input",
                            type: "text",
                            placeholder: "Фамилия"
                          },
                          domProps: { value: _vm.author.surname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.author,
                                "surname",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.surname_error))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "first-name-input" } }, [
                          _vm._v("Имя")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.author.first_name,
                              expression: "author.first_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "first-name-input",
                            type: "text",
                            placeholder: "Имя"
                          },
                          domProps: { value: _vm.author.first_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.author,
                                "first_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.first_name_error))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "patronymic-input" } }, [
                          _vm._v("Отчество")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.author.patronymic,
                              expression: "author.patronymic"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "patronymic-input",
                            type: "text",
                            placeholder: "Отчество"
                          },
                          domProps: { value: _vm.author.patronymic },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.author,
                                "patronymic",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.patronymic_error))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "description-input" } }, [
                          _vm._v("Описание")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.author.description,
                              expression: "author.description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            rows: "3",
                            id: "description-input",
                            type: "text",
                            placeholder: ""
                          },
                          domProps: { value: _vm.author.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.author,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.description_error))]
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              !_vm.isEdited
                ? _c("p", [_vm._v(_vm._s(_vm.author.description))])
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.enable_editing
          ? _c("div", { attrs: { id: "author-profile-edit-panel" } }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-5 " }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-sm-7",
                    style: { padding: _vm.isEdited ? "0 0 0 15%" : "0 0 0 8%" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6 col-7" }, [
                        !_vm.isEdited
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                on: {
                                  click: function($event) {
                                    _vm.isEdited = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    Редактировать\n                                "
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 col-4" }, [
                        !_vm.isEdited
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: { click: _vm.handleDeleteRequest }
                              },
                              [
                                _vm._v(
                                  "\n                                    Удалить\n                                "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.isEdited
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            on: { click: _vm.handlePatchRequest }
                          },
                          [
                            _vm._v(
                              "\n                            Сохранить\n                        "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ])
            ])
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm.books.length
      ? _c(
          "div",
          { staticStyle: { "max-width": "740px" }, attrs: { id: "book-card" } },
          [
            _c(
              "div",
              { staticClass: "row no-gutters" },
              [
                _c("h3", [_vm._v("Книги")]),
                _vm._v(" "),
                _c("book_list", { attrs: { collection: _vm.books } })
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookCard.vue?vue&type=template&id=a14fdf8c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookCard.vue?vue&type=template&id=a14fdf8c& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.book
    ? _c("div", [
        _c(
          "div",
          {
            staticClass: "card bg-light mb-3",
            staticStyle: { "max-width": "640px" }
          },
          [
            _c("div", { staticClass: "row no-gutters" }, [
              _c("div", { staticClass: "col-md-4 book-img-container" }, [
                _c("img", {
                  staticClass: "card-img",
                  attrs: { src: _vm.book.img, alt: "..." }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c("b", [_vm._v(_vm._s(_vm.book.title))])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm._l(_vm.book.authors, function(author) {
                        return [
                          _c(
                            "a",
                            {
                              key: author.id,
                              attrs: { href: "/authors/" + author.id }
                            },
                            [
                              _c("small", [
                                _vm._v(_vm._s(_vm.getInitials(author)) + " ")
                              ])
                            ]
                          )
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(_vm._s(_vm.getShortDescription()))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "text-lg-right",
                      attrs: { id: "button-details" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.redirectTo("/books/" + _vm.book.id)
                            }
                          }
                        },
                        [_vm._v("Подробнее")]
                      )
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookForm.vue?vue&type=template&id=67dcb024&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookForm.vue?vue&type=template&id=67dcb024& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("form", [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-5" }, [
            _c("h2", [_vm._v("Новая книга")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "title-input" } }, [
                _vm._v("Название")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.title,
                    expression: "title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "title-input",
                  type: "text",
                  placeholder: "Название"
                },
                domProps: { value: _vm.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.title = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.title_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description-input" } }, [
                _vm._v("Описание")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.description,
                    expression: "description"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  rows: "6",
                  id: "description-input",
                  type: "text",
                  placeholder: ""
                },
                domProps: { value: _vm.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.description = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.description_error))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("img_upload", {
                  on: {
                    uploaded: function($event) {
                      _vm.img = $event
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-sm-4",
              attrs: { id: "book-form-genres-and-authors-select" }
            },
            [
              _c("genres_and_authors_select", {
                attrs: {
                  genres_error: _vm.genres_error,
                  authors_error: _vm.authors_error
                },
                on: {
                  "genres-changed": function($event) {
                    _vm.genres = $event
                  },
                  "authors-changed": function($event) {
                    _vm.authors = $event
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-2", staticStyle: { padding: "5% 0 0 0" } },
            [
              _c("img", {
                staticClass: "img-thumbnail",
                attrs: { src: _vm.img }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group", staticStyle: { padding: "3% 0 0 0" } },
          [
            _c("input", {
              staticClass: "btn btn-outline-primary",
              attrs: {
                type: "submit",
                value: "Добавить",
                disabled: _vm.isHandling
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.handleSubmit()
                }
              }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookList.vue?vue&type=template&id=000acec8&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookList.vue?vue&type=template&id=000acec8& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.collection_is_empty
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("span", [_vm._v("Ничего не найдено")])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.books.length
      ? _c(
          "div",
          [
            _vm.pagination
              ? _c("pagination", {
                  attrs: {
                    url: _vm.pagination_url,
                    total_pages: _vm.total_pages,
                    current_page: _vm.page
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.books, function(book) {
              return _c("book_card", { key: book.id, attrs: { book: book } })
            }),
            _vm._v(" "),
            _vm.pagination
              ? _c("pagination", {
                  attrs: {
                    url: _vm.pagination_url,
                    total_pages: _vm.total_pages,
                    current_page: _vm.page
                  }
                })
              : _vm._e()
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BookProfile.vue?vue&type=template&id=18fd1822&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BookProfile.vue?vue&type=template&id=18fd1822& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_initialized
    ? _c(
        "div",
        {
          staticClass: "card bg-light",
          staticStyle: { "max-width": "740px" },
          attrs: { id: "book-card" }
        },
        [
          _c("div", { staticClass: "row no-gutters" }, [
            _c("div", { staticClass: "col-md-4 pt-4" }, [
              _c("img", {
                staticClass: "card-img",
                attrs: { src: _vm.book.img, alt: "..." }
              }),
              _vm._v(" "),
              _vm.isEdited
                ? _c(
                    "div",
                    { staticStyle: { "padding-top": "10%" } },
                    [
                      _c("img_upload", {
                        on: {
                          uploaded: function($event) {
                            _vm.book.img = $event
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 " }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("h3", { staticClass: "card-title" }, [
                    !_vm.isEdited
                      ? _c("span", [_vm._v(_vm._s(_vm.book.title))])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEdited
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.book.title,
                              expression: "book.title"
                            }
                          ],
                          staticClass: "form-control",
                          domProps: { value: _vm.book.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.book, "title", $event.target.value)
                            }
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("span", { staticClass: "invalid-feedback d-block" }, [
                        _vm._v(_vm._s(_vm.title_error))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isEdited
                    ? _c("div", [
                        _c(
                          "div",
                          { attrs: { id: "book-profile-authors" } },
                          [
                            _vm._m(0),
                            _vm._v(" "),
                            _vm._l(_vm.book.authors, function(author) {
                              return _c(
                                "span",
                                {
                                  key: author.id,
                                  staticClass: "badge badge-light"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "/authors/" + author.id }
                                    },
                                    [_vm._v(_vm._s(_vm.getInitials(author)))]
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { id: "book-profile-genres" } },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _vm._l(_vm.book.genres, function(genre) {
                              return _c(
                                "span",
                                {
                                  key: genre.id,
                                  staticClass: "badge badge-light"
                                },
                                [
                                  _c(
                                    "a",
                                    { attrs: { href: "/genres/" + genre.id } },
                                    [_vm._v(_vm._s(genre.name))]
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("genres_and_authors_select", {
                        attrs: {
                          genres_error: _vm.genres_error,
                          authors_error: _vm.authors_error,
                          genres: _vm.book.genres,
                          authors: _vm.book.authors
                        },
                        on: {
                          "genres-changed": function($event) {
                            _vm.book.genres = $event
                          },
                          "authors-changed": function($event) {
                            _vm.book.authors = $event
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  !_vm.isEdited
                    ? _c("p", [_vm._v(_vm._s(_vm.book.description))])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.book.description,
                            expression: "book.description"
                          }
                        ],
                        staticClass: "form-control card-text",
                        staticStyle: { width: "100%" },
                        attrs: { rows: _vm.rowsCount },
                        domProps: { value: _vm.book.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.book,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("span", { staticClass: "invalid-feedback d-block" }, [
                        _vm._v(_vm._s(_vm.description_error))
                      ])
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm.enable_editing
            ? _c("div", { attrs: { id: "book-profile-edit-panel" } }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-5 " }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-sm-7",
                      style: {
                        padding: _vm.isEdited ? "0 0 0 15%" : "0 0 0 8%"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-6 col-7" }, [
                          !_vm.isEdited
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  on: {
                                    click: function($event) {
                                      _vm.isEdited = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Редактировать\n                            "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6 col-4" }, [
                          !_vm.isEdited
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  on: { click: _vm.handleDeleteRequest }
                                },
                                [
                                  _vm._v(
                                    "\n                                Удалить\n                            "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.isEdited
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              on: { click: _vm.handlePatchRequest }
                            },
                            [
                              _vm._v(
                                "\n                        Сохранить\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ])
              ])
            : _vm._e()
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("small", [_vm._v("Авторы:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("small", [_vm._v("Жанры:")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreCard.vue?vue&type=template&id=66e8a63c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreCard.vue?vue&type=template&id=66e8a63c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "card bg-light mb-3",
        staticStyle: { "max-width": "640px" }
      },
      [
        _c("div", { staticClass: "row no-gutters" }, [
          _c("div", { staticClass: "col-md-4 book-img-container" }, [
            _c("img", {
              staticClass: "card-img",
              attrs: { src: _vm.genre.img, alt: "..." }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _c("b", [_vm._v(_vm._s(_vm.genre.name))])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(_vm._s(_vm.getShortDescription()))
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "text-lg-right",
                  attrs: { id: "button-details" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.redirectTo("/genres/" + _vm.genre.id)
                        }
                      }
                    },
                    [_vm._v("Подробнее")]
                  )
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreForm.vue?vue&type=template&id=2d7576d4&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreForm.vue?vue&type=template&id=2d7576d4& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Новый жанр")]),
    _vm._v(" "),
    _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "name-input" } }, [_vm._v("Название")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name,
              expression: "name"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "name-input", type: "text", placeholder: "Название" },
          domProps: { value: _vm.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.name_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "description-input" } }, [
          _vm._v("Описание")
        ]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.description,
              expression: "description"
            }
          ],
          staticClass: "form-control",
          attrs: {
            rows: "8",
            id: "description-input",
            type: "text",
            placeholder: ""
          },
          domProps: { value: _vm.description },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.description = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.description_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "btn btn-outline-primary",
          attrs: {
            type: "submit",
            value: "Добавить",
            disabled: _vm.isHandling
          },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.handleSubmit()
            }
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreList.vue?vue&type=template&id=1d3e6b70&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreList.vue?vue&type=template&id=1d3e6b70& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.pagination
        ? _c("pagination", {
            attrs: {
              url: "/genres",
              total_pages: _vm.total_pages,
              current_page: _vm.page
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.genres, function(genre) {
        return _c("genre_card", { key: genre.id, attrs: { genre: genre } })
      }),
      _vm._v(" "),
      _vm.pagination
        ? _c("pagination", {
            attrs: {
              url: "/genres",
              total_pages: _vm.total_pages,
              current_page: _vm.page
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenreProfile.vue?vue&type=template&id=2ca4b647&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenreProfile.vue?vue&type=template&id=2ca4b647& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_initialized
    ? _c("div", [
        _c(
          "div",
          {
            staticClass: "card bg-light col-sm-6",
            staticStyle: { "max-width": "740px" },
            attrs: { id: "book-card" }
          },
          [
            _c("div", { staticClass: "row no-gutters" }, [
              _c("div", { staticClass: "col-md-4 pt-4" }, [
                _c("img", {
                  staticClass: "card-img",
                  attrs: { src: _vm.genre.img, alt: "..." }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 " }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h3", { staticClass: "card-title" }, [
                    !_vm.isEdited
                      ? _c("span", [_vm._v(_vm._s(_vm.genre.name))])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEdited
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.genre.name,
                              expression: "genre.name"
                            }
                          ],
                          staticClass: "form-control",
                          domProps: { value: _vm.genre.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.genre, "name", $event.target.value)
                            }
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("span", { staticClass: "invalid-feedback d-block" }, [
                        _vm._v(_vm._s(_vm.name_error))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  !_vm.isEdited
                    ? _c("p", [_vm._v(_vm._s(_vm.genre.description))])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.genre.description,
                            expression: "genre.description"
                          }
                        ],
                        staticClass: "form-control card-text",
                        staticStyle: { width: "100%" },
                        attrs: { rows: _vm.rowsCount },
                        domProps: { value: _vm.genre.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.genre,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("span", { staticClass: "invalid-feedback d-block" }, [
                        _vm._v(_vm._s(_vm.description_error))
                      ])
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.enable_editing
              ? _c("div", { attrs: { id: "genre-profile-edit-panel" } }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-5 " }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-sm-7",
                        style: {
                          padding: _vm.isEdited ? "0 0 0 15%" : "0 0 0 8%"
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6 col-7" }, [
                            !_vm.isEdited
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-info",
                                    on: {
                                      click: function($event) {
                                        _vm.isEdited = true
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Редактировать\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6 col-4" }, [
                            !_vm.isEdited
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger",
                                    on: { click: _vm.handleDeleteRequest }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Удалить\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.isEdited
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                on: { click: _vm.handlePatchRequest }
                              },
                              [
                                _vm._v(
                                  "\n                            Сохранить\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "max-width": "740px" }, attrs: { id: "book-card" } },
          [
            _c(
              "div",
              { staticClass: "row no-gutters" },
              [
                _vm.genre.books.length
                  ? _c("book_list", { attrs: { collection: _vm.genre.books } })
                  : _vm._e()
              ],
              1
            )
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/GenresAndAuthorsSelect.vue?vue&type=template&id=044481c4& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        staticClass: "col-sm-6",
        staticStyle: { "padding-top": "7%" },
        attrs: { id: "authors" }
      },
      [
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-dark dropdown-toggle",
              attrs: {
                type: "button",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false"
              }
            },
            [_vm._v("\n                    Авторы\n                ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dropdown-menu dropdown-menu-left",
              staticStyle: { "max-height": "250px", "overflow-y": "scroll" }
            },
            [
              _c(
                "a",
                { staticClass: "dropdown-item disabled", attrs: { href: "#" } },
                [_vm._v("Выберите автора")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _vm._l(_vm.authors_all, function(author) {
                return _c(
                  "a",
                  {
                    key: author.id,
                    staticClass: "dropdown-item",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.addAuthorToSelected(author)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.getInitials(author)) +
                        "\n                    "
                    )
                  ]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          _vm._l(_vm.authors_selected, function(author) {
            return _c(
              "span",
              {
                key: author.id,
                staticClass: "badge badge-primary",
                staticStyle: { margin: "0 1% 0 1%" }
              },
              [
                _vm._v(
                  "\n                " + _vm._s(_vm.getInitials(author)) + "  "
                ),
                _c(
                  "a",
                  {
                    staticStyle: { color: "white", "text-decoration": "none" },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.removeAuthorFromSelected(author)
                      }
                    }
                  },
                  [_vm._v(" x ")]
                )
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.authors_error))
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-sm-6",
        staticStyle: { "padding-top": "7%" },
        attrs: { id: "genres" }
      },
      [
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-dark dropdown-toggle",
              attrs: {
                type: "button",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false"
              }
            },
            [_vm._v("\n                Жанры\n            ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dropdown-menu dropdown-menu-left",
              staticStyle: { "max-height": "250px", "overflow-y": "scroll" }
            },
            [
              _c(
                "a",
                { staticClass: "dropdown-item disabled", attrs: { href: "#" } },
                [_vm._v("Выберите жанр")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _vm._l(_vm.genres_all, function(genre) {
                return _c(
                  "a",
                  {
                    key: genre.id,
                    staticClass: "dropdown-item",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.addGenreToSelected(genre)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(genre.name) +
                        "\n                "
                    )
                  ]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          _vm._l(_vm.genres_selected, function(genre) {
            return _c(
              "span",
              {
                key: genre.id,
                staticClass: "badge badge-primary",
                staticStyle: { margin: "0 1% 0 1%" }
              },
              [
                _vm._v("\n            " + _vm._s(genre.name) + "  "),
                _c(
                  "a",
                  {
                    staticStyle: { color: "white", "text-decoration": "none" },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.removeGenreFromSelected(genre)
                      }
                    }
                  },
                  [_vm._v(" x ")]
                )
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.genres_error))
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ImgUpload.vue?vue&type=template&id=1bbbfe5a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/ImgUpload.vue?vue&type=template&id=1bbbfe5a& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "custom-file", staticStyle: { margin: "2% 0 4% 0" } },
    [
      _c("input", {
        staticClass: "custom-file-input",
        attrs: {
          accept: "image/x-png,image/jpeg",
          type: "file",
          id: "customFileLang",
          lang: "es"
        },
        on: { change: _vm.uploadImg }
      }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "custom-file-label", attrs: { for: "customFileLang" } },
        [_vm._v("Выберите фото")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginForm.vue?vue&type=template&id=6c56e47c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/LoginForm.vue?vue&type=template&id=6c56e47c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Вход")]),
    _vm._v(" "),
    _c("span", [_vm._v("Заполните поля, чтобы войти на сайт")]),
    _vm._v(" "),
    _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "email-input" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "email-input", type: "text", placeholder: "Email" },
          domProps: { value: _vm.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.email = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.email_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "password-input" } }, [_vm._v("Пароль")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.password,
              expression: "password"
            }
          ],
          staticClass: "form-control",
          attrs: {
            id: "password-input",
            type: "password",
            placeholder: "Пароль"
          },
          domProps: { value: _vm.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.password = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "invalid-feedback d-block" }, [
          _vm._v(_vm._s(_vm.password_error))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "btn btn-primary",
          attrs: { type: "submit", value: "Вход" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.validateInputAndSubmit($event)
            }
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticStyle: { "padding-left": "5%" },
        attrs: { href: "/password/restore" }
      },
      [_c("span", [_vm._v("Восстановление пароля")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.total_pages > 1
    ? _c("div", { attrs: { id: "pagination" } }, [
        _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
          _c(
            "ul",
            { staticClass: "pagination" },
            [
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: _vm.addPage(_vm.url, 1),
                      "aria-label": "Previous"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("«")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._l(_vm.pagination_range(), function(page) {
                return _c(
                  "li",
                  {
                    key: page,
                    class: [
                      page == _vm.current_page ? "active" : "",
                      "page-item"
                    ]
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: _vm.addPage(_vm.url, page) }
                      },
                      [_vm._v(_vm._s(page))]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: _vm.addPage(_vm.url, _vm.total_pages),
                      "aria-label": "Previous"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("»")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
                  ]
                )
              ])
            ],
            2
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/PasswordRestoreForm.vue?vue&type=template&id=7c1255c6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/PasswordRestoreForm.vue?vue&type=template&id=7c1255c6& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.email_form
      ? _c("div", [
          _c("h2", [_vm._v("Восстановление пароля")]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "email-input" } }, [
                _vm._v("Укажите email, чтобы восстановить доступ к аккаунту")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "email-input",
                  type: "text",
                  placeholder: "Email"
                },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "d-block",
                  class: _vm.is_feedback_valid
                    ? _vm.valid_feedback_class
                    : _vm.invalid_feedback_class
                },
                [_vm._v(_vm._s(_vm.status_message))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "btn btn-primary",
                attrs: { type: "submit", value: "Отправить" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.generateToken($event)
                  }
                }
              })
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.code_form
      ? _c("div", [
          _c("form", [
            _c(
              "div",
              { staticClass: "form-group", attrs: { id: "verification-code" } },
              [
                _c("label", { attrs: { for: "verification-code-input" } }, [
                  _vm._v("Код подтверждения")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.restore_token,
                      expression: "restore_token"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "verification-code-input",
                    type: "text",
                    placeholder: ""
                  },
                  domProps: { value: _vm.restore_token },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.restore_token = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "d-block",
                    class: _vm.is_feedback_valid
                      ? _vm.valid_feedback_class
                      : _vm.invalid_feedback_class
                  },
                  [_vm._v(_vm._s(_vm.status_message))]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "btn btn-primary",
                attrs: { type: "submit", value: "Отправить" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.verifyToken($event)
                  }
                }
              })
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.password_form
      ? _c("div", [
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password-input" } }, [
                _vm._v("Пароль")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "password-input",
                  type: "password",
                  placeholder: "Пароль"
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.password_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password-confirmation-input" } }, [
                _vm._v("Подтверждение пароля")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password_confirmation,
                    expression: "password_confirmation"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "password-confirmation-input",
                  type: "password",
                  placeholder: "Пароль"
                },
                domProps: { value: _vm.password_confirmation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password_confirmation = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.password_confirmation_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "btn btn-primary",
                attrs: { type: "submit", value: "Отправить" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.sendNewPassword($event)
                  }
                }
              })
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.password_restored
      ? _c("div", [
          _c(
            "span",
            {
              staticClass: "valid-feedback d-block",
              staticStyle: { "padding-top": "15%" }
            },
            [_c("b", [_vm._v(_vm._s(_vm.status_message))])]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SearchField.vue?vue&type=template&id=6a3c60a1&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SearchField.vue?vue&type=template&id=6a3c60a1& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { attrs: { id: _vm.side ? "side-search" : "search" } }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.query,
          expression: "query"
        }
      ],
      staticClass: "form-control mr-sm-2 search-field",
      attrs: { type: "search", placeholder: "Поиск", "aria-label": "Search" },
      domProps: { value: _vm.query },
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          $event.preventDefault()
          return _vm.find()
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.query = $event.target.value
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SignUpForm.vue?vue&type=template&id=41b3c606&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SignUpForm.vue?vue&type=template&id=41b3c606& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.signup_form
      ? _c("div", { attrs: { id: "signup" } }, [
          _c("h2", [_vm._v("Регистрация")]),
          _vm._v(" "),
          _c("p", [_vm._v("Заполните поля, чтобы зарегистрироваться")]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "username-input" } }, [
                _vm._v("Логин")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "username-input",
                  type: "text",
                  placeholder: "Логин"
                },
                domProps: { value: _vm.username },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.username = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block " }, [
                _vm._v(_vm._s(_vm.username_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group " }, [
              _c("label", { attrs: { for: "email-input" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "email-input",
                  type: "email",
                  placeholder: "Email"
                },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.email_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password-input" } }, [
                _vm._v("Пароль")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "password-input",
                  type: "password",
                  placeholder: "Пароль"
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.password_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password-confirmation-input" } }, [
                _vm._v("Подтверждение пароля")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password_confirmation,
                    expression: "password_confirmation"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "password-confirmation-input",
                  type: "password",
                  placeholder: "Пароль"
                },
                domProps: { value: _vm.password_confirmation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password_confirmation = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "invalid-feedback d-block" }, [
                _vm._v(_vm._s(_vm.password_confirmation_error))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "btn btn-primary",
                attrs: { type: "submit", value: "Создать аккаунт" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.validateInputAndSendCode($event)
                  }
                }
              })
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.verification_form
      ? _c("div", { attrs: { id: "verification" } }, [
          _c("form", [
            _c(
              "div",
              { staticClass: "form-group", attrs: { id: "verification-code" } },
              [
                _c("label", { attrs: { for: "verification-code-input" } }, [
                  _vm._v("Код подтверждения")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.verification_code,
                      expression: "verification_code"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "verification-code-input",
                    type: "text",
                    placeholder: ""
                  },
                  domProps: { value: _vm.verification_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.verification_code = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "d-block",
                    class: _vm.is_feedback_valid
                      ? _vm.valid_feedback_class
                      : _vm.invalid_feedback_class
                  },
                  [_vm._v(_vm._s(_vm.verification_code_status))]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "btn btn-primary",
                attrs: { type: "submit", value: "Отправить" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.handleSubmit($event)
                  }
                }
              })
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserList.vue?vue&type=template&id=68cd7daa&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/UserList.vue?vue&type=template&id=68cd7daa& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_initialized
    ? _c("div", { staticClass: "table-container" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.users, function(user) {
              return _c("tr", { key: user.id }, [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("#")]),
                _vm._v(" "),
                _c("td", [
                  _c("a", { attrs: { href: "/users/" + user.id } }, [
                    _vm._v("  " + _vm._s(user.username))
                  ])
                ]),
                _vm._v(" "),
                _c("td", { class: _vm.getRoleClass(user.role) }, [
                  _vm._v(_vm._s(_vm.getRoleLabel(user.role)))
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.formatRegDate(user.reg_date)) +
                      "\n                    "
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Логин")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Статус")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Дата регистрации")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/UserProfile.vue?vue&type=template&id=0afec1cd&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/UserProfile.vue?vue&type=template&id=0afec1cd& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_initialized
    ? _c(
        "div",
        {
          staticClass: "card bg-light",
          staticStyle: { "max-width": "640px" },
          attrs: { id: "profile-card" }
        },
        [
          _c(
            "div",
            {
              staticClass: "row no-gutters jumbotron",
              staticStyle: { position: "relative" }
            },
            [
              !_vm.isEdited
                ? _c(
                    "div",
                    {
                      staticStyle: {
                        position: "absolute",
                        right: "3%",
                        top: "3%"
                      }
                    },
                    [
                      _vm.enable_editing
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.enableProfileEditing($event)
                                }
                              }
                            },
                            [_vm._v("редактировать")]
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isEdited
                ? _c(
                    "a",
                    {
                      staticStyle: {
                        position: "absolute",
                        right: "3%",
                        top: "3%"
                      },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.handlePatchRequest($event)
                        }
                      }
                    },
                    [_vm._v("сохранить")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("img", {
                  staticClass: "card-img",
                  attrs: { src: _vm.user.img, alt: "..." }
                }),
                _vm._v(" "),
                _vm.isEdited && _vm.enable_editing
                  ? _c(
                      "div",
                      [
                        _c("img_upload", {
                          attrs: { url: "/users/img" },
                          on: {
                            uploaded: function($event) {
                              _vm.user.img = $event
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.enable_editing && !_vm.isPasswordEdited && !_vm.isEdited
                  ? _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.enablePasswordEditing($event)
                          }
                        }
                      },
                      [_vm._v("изменить пароль")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isPasswordEdited
                  ? _c(
                      "div",
                      {
                        staticClass: "row justify-content-center",
                        staticStyle: { "margin-top": "5%" },
                        attrs: { id: "password-reset" }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.current_password,
                              expression: "current_password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "current-password-input",
                            type: "password",
                            placeholder: "Текущий пароль"
                          },
                          domProps: { value: _vm.current_password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.current_password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.current_password_error))]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_password,
                              expression: "new_password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "new-password-input",
                            type: "password",
                            placeholder: "Новый пароль"
                          },
                          domProps: { value: _vm.new_password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.new_password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.new_password_error))]
                        ),
                        _vm._v(" "),
                        _vm.enable_editing
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.handlePasswordReset($event)
                                  }
                                }
                              },
                              [_vm._v("сохранить")]
                            )
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { staticClass: "valid-feedback d-block" }, [
                  _vm._v(_vm._s(_vm.password_status))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5 " }, [
                _c("div", { staticClass: "card-body" }, [
                  !_vm.isEdited
                    ? _c("h3", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.user.username))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdited
                    ? _c("div", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.username,
                              expression: "user.username"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "username-input",
                            type: "text",
                            placeholder: "Логин"
                          },
                          domProps: { value: _vm.user.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "invalid-feedback d-block" },
                          [_vm._v(_vm._s(_vm.username_error))]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: { "margin-top": "26%" },
                      attrs: { id: "user-static-info" }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "card-text", class: _vm.roleClass },
                        [_vm._v(_vm._s(_vm.roleLabel))]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text " }, [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(
                            " " +
                              _vm._s("Зарегистрирован " + _vm.formattedRegDate)
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.user.role === "ROLE_ADMIN" || _vm.user.role === "ROLE_ROOT"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.redirectTo("/usermanagment")
                    }
                  }
                },
                [_vm._v("Управление пользователями")]
              )
            : _vm._e()
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JDYXJkLnZ1ZT84Njk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvckNhcmQudnVlP2FjMjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yRm9ybS52dWU/Y2YwZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JGb3JtLnZ1ZT8wNTg2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvckxpc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvckxpc3QudnVlPzkxNzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yTGlzdC52dWU/NjQyYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JQcm9maWxlLnZ1ZT8wZTFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvclByb2ZpbGUudnVlPzAwMGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm9va0NhcmQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tDYXJkLnZ1ZT81Nzc5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tDYXJkLnZ1ZT80M2M1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rRm9ybS52dWU/OGQ5ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rRm9ybS52dWU/YmZhMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm9va0xpc3QudnVlP2RkYzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm9va0xpc3QudnVlPzQ2NTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm9va1Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tQcm9maWxlLnZ1ZT81MTQ3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tQcm9maWxlLnZ1ZT8xMzVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVDYXJkLnZ1ZT82MzJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlQ2FyZC52dWU/ZDY5NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZUZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlRm9ybS52dWU/ZWY3OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZUZvcm0udnVlPzkyNjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZUxpc3QudnVlPzE4Y2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVMaXN0LnZ1ZT9hZWU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVQcm9maWxlLnZ1ZT84YTRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlUHJvZmlsZS52dWU/MmRhNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZXNBbmRBdXRob3JzU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZXNBbmRBdXRob3JzU2VsZWN0LnZ1ZT82MmVmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlc0FuZEF1dGhvcnNTZWxlY3QudnVlP2Y2NjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1nVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9JbWdVcGxvYWQudnVlPzA1ZTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1nVXBsb2FkLnZ1ZT9iODBhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5Gb3JtLnZ1ZT8yM2JmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luRm9ybS52dWU/MzRjOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT8zYWE4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlP2U3NzgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXN0b3JlRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXN0b3JlRm9ybS52dWU/YjVjZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYXNzd29yZFJlc3RvcmVGb3JtLnZ1ZT9iZDc0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaEZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2hGaWVsZC52dWU/OTY4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2hGaWVsZC52dWU/NWRjOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZT9hOGUwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NpZ25VcEZvcm0udnVlP2E5YTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlckxpc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJMaXN0LnZ1ZT82YzQ2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJMaXN0LnZ1ZT8wZDI0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWU/MzczMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWU/YWM5YyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvckZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm9va0Zvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltZ1VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9QYXNzd29yZFJlc3RvcmVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoRmllbGQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlckxpc3QudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yQ2FyZC52dWU/YjYyYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JGb3JtLnZ1ZT9jMmM3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvckxpc3QudnVlP2MyNmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yUHJvZmlsZS52dWU/YzAzNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rQ2FyZC52dWU/MGMwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rRm9ybS52dWU/ODE2NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rTGlzdC52dWU/MGRkOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rUHJvZmlsZS52dWU/ODhhMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZUNhcmQudnVlPzI3MTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVGb3JtLnZ1ZT83NWM3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlTGlzdC52dWU/OTA4OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9HZW5yZVByb2ZpbGUudnVlPzRhNmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWU/NTM4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9JbWdVcGxvYWQudnVlPzc4YjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5Gb3JtLnZ1ZT83NWE1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlP2M3MzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXN0b3JlRm9ybS52dWU/NzQ5MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2hGaWVsZC52dWU/ZDc1NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZT9lODE1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJMaXN0LnZ1ZT9kZGMwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJQcm9maWxlLnZ1ZT8yMzk0Il0sIm5hbWVzIjpbIlZ1ZSIsImVsIiwiY29tcG9uZW50cyIsImxvZ2luX2Zvcm0iLCJzaWdudXBfZm9ybSIsInBhc3N3b3JkX3Jlc3RvcmVfZm9ybSIsImJvb2tfbGlzdCIsImF1dGhvcl9saXN0IiwiZ2VucmVfbGlzdCIsImdlbnJlX2Zvcm0iLCJhdXRob3JfZm9ybSIsImJvb2tfZm9ybSIsImJvb2tfcHJvZmlsZSIsImdlbnJlX3Byb2ZpbGUiLCJ1c2VyX3Byb2ZpbGUiLCJhdXRob3JfcHJvZmlsZSIsInVzZXJfbGlzdCIsInNlYXJjaF9maWVsZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGxvZ2luX2Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luRm9ybS52dWUnO1xuaW1wb3J0IHNpZ251cF9mb3JtIGZyb20gJy4vY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZSc7XG5pbXBvcnQgcGFzc3dvcmRfcmVzdG9yZV9mb3JtIGZyb20gJy4vY29tcG9uZW50cy9QYXNzd29yZFJlc3RvcmVGb3JtLnZ1ZSc7XG5pbXBvcnQgYm9va19saXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rTGlzdC52dWUnO1xuaW1wb3J0IGF1dGhvcl9saXN0IGZyb20gJy4vY29tcG9uZW50cy9BdXRob3JMaXN0LnZ1ZSc7XG5pbXBvcnQgZ2VucmVfbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvR2VucmVMaXN0LnZ1ZSc7XG5pbXBvcnQgZ2VucmVfZm9ybSBmcm9tICcuL2NvbXBvbmVudHMvR2VucmVGb3JtLnZ1ZSc7XG5pbXBvcnQgYXV0aG9yX2Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0F1dGhvckZvcm0udnVlJztcbmltcG9ydCBib29rX2Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tGb3JtLnZ1ZSc7XG5pbXBvcnQgYm9va19wcm9maWxlIGZyb20gJy4vY29tcG9uZW50cy9Cb29rUHJvZmlsZS52dWUnO1xuaW1wb3J0IGdlbnJlX3Byb2ZpbGUgZnJvbSAnLi9jb21wb25lbnRzL0dlbnJlUHJvZmlsZS52dWUnO1xuaW1wb3J0IHNlYXJjaF9maWVsZCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoRmllbGQudnVlJztcbmltcG9ydCB1c2VyX3Byb2ZpbGUgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLnZ1ZSc7XG5pbXBvcnQgYXV0aG9yX3Byb2ZpbGUgZnJvbSAnLi9jb21wb25lbnRzL0F1dGhvclByb2ZpbGUudnVlJztcbmltcG9ydCB1c2VyX2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJMaXN0LnZ1ZSc7XG5cbm5ldyBWdWUoe1xuXG4gICAgZWw6ICcjYXBwJyxcbiAgICBjb21wb25lbnRzOiB7bG9naW5fZm9ybSwgc2lnbnVwX2Zvcm0sIHBhc3N3b3JkX3Jlc3RvcmVfZm9ybSxcbiAgICAgICAgICBib29rX2xpc3QsIGF1dGhvcl9saXN0LCBnZW5yZV9saXN0LCBnZW5yZV9mb3JtLCBhdXRob3JfZm9ybSwgYm9va19mb3JtLFxuICAgICAgICAgIGJvb2tfcHJvZmlsZSwgZ2VucmVfcHJvZmlsZSwgdXNlcl9wcm9maWxlLCBhdXRob3JfcHJvZmlsZSwgdXNlcl9saXN0fVxufSk7XG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2hlYWRlcicsXG4gICAgY29tcG9uZW50czoge3NlYXJjaF9maWVsZH1cbn0pO1xuXG5uZXcgVnVlKHtcbiAgICBlbDogJyNzZWFyY2gtYm94JyxcbiAgICBjb21wb25lbnRzOiB7c2VhcmNoX2ZpZWxkLCBsb2dpbl9mb3JtfVxufSk7XG5cblxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJ1xuLy8gLyoqXG4vLyAqIENyZWF0ZSBhIGZyZXNoIFZ1ZSBBcHBsaWNhdGlvbiBpbnN0YW5jZVxuLy8gKi9cbi8vIG5ldyBWdWUoe1xuLy8gICBlbDogJyNhcHAnLFxuLy8gICBjb21wb25lbnRzOiB7RXhhbXBsZX1cbi8vIH0pO1xuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BdXRob3JDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGJmOTJjOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BdXRob3JDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXV0aG9yQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjRiZjkyYzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjRiZjkyYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjRiZjkyYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0F1dGhvckNhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0YmY5MmM4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0YmY5MmM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JDYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXV0aG9yQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXV0aG9yQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXV0aG9yQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRiZjkyYzgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0F1dGhvckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNTljZTUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0F1dGhvckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BdXRob3JGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9sbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYTU5Y2U1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYTU5Y2U1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYTU5Y2U1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXV0aG9yRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE1OWNlNTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGE1OWNlNTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0F1dGhvckZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BdXRob3JGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BdXRob3JGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BdXRob3JGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTU5Y2U1MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXV0aG9yTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U1MmY1MmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXV0aG9yTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0F1dGhvckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9odG1sL2xsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlNTJmNTJhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlNTJmNTJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlNTJmNTJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BdXRob3JMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTUyZjUyYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZTUyZjUyYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQXV0aG9yTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0F1dGhvckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0F1dGhvckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0F1dGhvckxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTJmNTJhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BdXRob3JQcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2E3Y2I2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BdXRob3JQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXV0aG9yUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2NhN2NiNjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2NhN2NiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2NhN2NiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0F1dGhvclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjYTdjYjY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjYTdjYjY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9BdXRob3JQcm9maWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXV0aG9yUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXV0aG9yUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXV0aG9yUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NhN2NiNjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jvb2tDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMTRmZGY4YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb29rQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jvb2tDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9sbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhMTRmZGY4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhMTRmZGY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhMTRmZGY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9va0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNGZkZjhjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ExNGZkZjhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9Cb29rQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jvb2tDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb29rQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm9va0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNGZkZjhjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Cb29rRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdkY2IwMjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQm9va0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb29rRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjdkY2IwMjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdkY2IwMjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdkY2IwMjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jvb2tGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2RjYjAyNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2N2RjYjAyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQm9va0Zvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb29rRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm9va0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jvb2tGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2RjYjAyNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQm9va0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAwMGFjZWM4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jvb2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQm9va0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9odG1sL2xsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAwMGFjZWM4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAwMGFjZWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAwMGFjZWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Cb29rTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAwYWNlYzgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDAwYWNlYzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jvb2tMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm9va0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jvb2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb29rTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAwYWNlYzgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jvb2tQcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGZkMTgyMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb29rUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jvb2tQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9sbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOGZkMTgyMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOGZkMTgyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOGZkMTgyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9va1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4ZmQxODIyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4ZmQxODIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9Cb29rUHJvZmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jvb2tQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb29rUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm9va1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4ZmQxODIyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HZW5yZUNhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2ZThhNjNjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dlbnJlQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dlbnJlQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjZlOGE2M2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjZlOGE2M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjZlOGE2M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dlbnJlQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZlOGE2M2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjZlOGE2M2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dlbnJlQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW5yZUNhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2ZThhNjNjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HZW5yZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkNzU3NmQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dlbnJlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dlbnJlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmQ3NTc2ZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmQ3NTc2ZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmQ3NTc2ZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dlbnJlRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQ3NTc2ZDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmQ3NTc2ZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dlbnJlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW5yZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkNzU3NmQ0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HZW5yZUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkM2U2YjcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dlbnJlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dlbnJlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWQzZTZiNzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWQzZTZiNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWQzZTZiNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dlbnJlTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQzZTZiNzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWQzZTZiNzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dlbnJlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW5yZUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkM2U2YjcwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HZW5yZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjYTRiNjQ3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dlbnJlUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dlbnJlUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmNhNGI2NDcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmNhNGI2NDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmNhNGI2NDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dlbnJlUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNhNGI2NDcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmNhNGI2NDcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0dlbnJlUHJvZmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dlbnJlUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW5yZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjYTRiNjQ3JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HZW5yZXNBbmRBdXRob3JzU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDQ0ODFjNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HZW5yZXNBbmRBdXRob3JzU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDQ0NDgxYzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDQ0NDgxYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDQ0NDgxYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dlbnJlc0FuZEF1dGhvcnNTZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0NDQ4MWM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA0NDQ4MWM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9HZW5yZXNBbmRBdXRob3JzU2VsZWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQ0NDgxYzQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ltZ1VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJiYmZlNWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1nVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW1nVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9sbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYmJiZmU1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYmJiZmU1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYmJiZmU1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW1nVXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmJiZmU1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYmJiZmU1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1nVXBsb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1nVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWdVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltZ1VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJiYmZlNWEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmM1NmU0N2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9sbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YzU2ZTQ3YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YzU2ZTQ3YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YzU2ZTQ3YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzU2ZTQ3YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YzU2ZTQ3YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5Gb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmM1NmU0N2MmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwMjZkMzdiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9sbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MDI2ZDM3YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MDI2ZDM3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MDI2ZDM3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzAyNmQzN2ImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzAyNmQzN2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDI2ZDM3YiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFzc3dvcmRSZXN0b3JlRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2MxMjU1YzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFzc3dvcmRSZXN0b3JlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bhc3N3b3JkUmVzdG9yZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9odG1sL2xsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdjMTI1NWM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdjMTI1NWM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdjMTI1NWM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXNzd29yZFJlc3RvcmVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzEyNTVjNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YzEyNTVjNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXN0b3JlRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bhc3N3b3JkUmVzdG9yZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bhc3N3b3JkUmVzdG9yZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bhc3N3b3JkUmVzdG9yZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjMTI1NWM2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZWFyY2hGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmEzYzYwYTEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VhcmNoRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWFyY2hGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmEzYzYwYTEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmEzYzYwYTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmEzYzYwYTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlYXJjaEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTNjNjBhMSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YTNjNjBhMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2hGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VhcmNoRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTNjNjBhMSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2lnblVwRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDFiM2M2MDYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2lnblVwRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpZ25VcEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9odG1sL2xsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQxYjNjNjA2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQxYjNjNjA2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQxYjNjNjA2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaWduVXBGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWIzYzYwNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MWIzYzYwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvU2lnblVwRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZ25VcEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZ25VcEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZ25VcEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxYjNjNjA2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhjZDdkYWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvbGwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjhjZDdkYWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjhjZDdkYWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjhjZDdkYWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGNkN2RhYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OGNkN2RhYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlckxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGNkN2RhYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZmVjMWNkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9odG1sL2xsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhZmVjMWNkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhZmVjMWNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhZmVjMWNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFmZWMxY2QmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGFmZWMxY2QnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJQcm9maWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFmZWMxY2QmXCIiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2PlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy1saWdodCBtYi0zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDY0MHB4O1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgYm9vay1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImF1dGhvci5pbWdcIiBjbGFzcz1cImNhcmQtaW1nXCIgYWx0PVwiLi4uXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj48Yj57e2Z1bGxuYW1lfX08L2I+PC9oNT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImF1dGhvciBpbiBib29rLmF1dGhvcnNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDprZXk9XCJhdXRob3IuaWRcIiA6aHJlZj1cIicvYXV0aG9ycy8nICsgYXV0aG9yLmlkXCIgPjxzbWFsbD57e2F1dGhvci5uYW1lfX0gPC9zbWFsbD48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3tnZXRTaG9ydERlc2NyaXB0aW9uKCl9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbi1kZXRhaWxzXCIgY2xhc3M9XCJ0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJyZWRpcmVjdFRvKCcvYXV0aG9ycy8nICsgYXV0aG9yLmlkKVwiPtCf0L7QtNGA0L7QsdC90LXQtTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICBcbiAgICAgICAgICAgIH19LFxuXG4gICAgcHJvcHM6IFsnYXV0aG9yJ10sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgIHJlZGlyZWN0VG8ocGF0aCl7XG4gICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSBwYXRoO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgZ2V0U2hvcnREZXNjcmlwdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5hdXRob3IuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMjAwKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRob3IuZGVzY3JpcHRpb24gOiB0aGlzLmF1dGhvci5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMjAwKSArICcuLi4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBmdWxsbmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBmdWxsbmFtZSA9IHRoaXMuYXV0aG9yLnN1cm5hbWU7XG4gICAgICAgICAgICBmdWxsbmFtZSArPSB0aGlzLmF1dGhvci5maXJzdF9uYW1lID8gJyAnICsgdGhpcy5hdXRob3IuZmlyc3RfbmFtZSA6ICcnXG4gICAgICAgICAgICBmdWxsbmFtZSArPSB0aGlzLmF1dGhvci5wYXRyb255bWljID8gJyAnICsgdGhpcy5hdXRob3IucGF0cm9ueW1pYyA6ICcnXG4gICAgICAgICAgICByZXR1cm4gZnVsbG5hbWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbmFtZTogXCJhdXRob3JfY2FyZFwiXG59XG48L3NjcmlwdD5cblxuXG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cblxuICAgICAgICAgICAgPGgyPtCd0L7QstGL0Lkg0LDQstGC0L7RgDwvaDI+XG4gICAgICAgIFxuICAgICAgICAgICAgPGZvcm0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3VybmFtZS1pbnB1dFwiPtCk0LDQvNC40LvQuNGPPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3VybmFtZS1pbnB1dFwiIHYtbW9kZWw9J3N1cm5hbWUnIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCk0LDQvNC40LvQuNGPXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tzdXJuYW1lX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0LW5hbWUtaW5wdXRcIj7QmNC80Y88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdC1uYW1lLWlucHV0XCIgdi1tb2RlbD0nZmlyc3RfbmFtZScgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tmaXJzdF9uYW1lX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF0cm9ueW1pYy1pbnB1dFwiPtCe0YLRh9C10YHRgtCy0L48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXRyb255bWljLWlucHV0XCIgdi1tb2RlbD0ncGF0cm9ueW1pYycgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J7RgtGH0LXRgdGC0LLQvlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7cGF0cm9ueW1pY19lcnJvcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvbi1pbnB1dFwiPtCe0L/QuNGB0LDQvdC40LU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjNcIiBpZD1cImRlc2NyaXB0aW9uLWlucHV0XCIgdi1tb2RlbD0nZGVzY3JpcHRpb24nIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e2Rlc2NyaXB0aW9uX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZ191cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgQHVwbG9hZGVkPVwiaW1nID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgOnVybD1cIicvYXV0aG9ycy9pbWcnXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nX3VwbG9hZD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlU3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLQlNC+0LHQsNCy0LjRgtGMXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiaXNIYW5kbGluZ1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBpbWdfdXBsb2FkIGZyb20gJy4vSW1nVXBsb2FkLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXBvbmVudHM6IHtpbWdfdXBsb2FkfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICBpc0hhbmRsaW5nOiBmYWxzZSxcbiAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgIHN1cm5hbWU6ICcnLFxuICAgICAgICBwYXRyb255bWljOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBpbWc6ICcnLFxuICAgICAgICBzdGF0dXNfbWVzc2FnZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uX2Vycm9yOiAnJyxcbiAgICAgICAgZmlyc3RfbmFtZV9lcnJvcjogJycsXG4gICAgICAgIHN1cm5hbWVfZXJyb3I6ICcnLFxuICAgICAgICBwYXRyb255bWljX2Vycm9yOiAnJ1xuICAgICAgICAgICAgfX0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdmFsaWRhdGVJbnB1dCgpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmZpcnN0X25hbWUudHJpbSgpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdF9uYW1lX2Vycm9yID0gJ9Cj0LrQsNC20LjRgtC1INC40LzRjyc7XG4gICAgICAgICAgICAgICAgfWVsc2UgIHRoaXMuZmlyc3RfbmFtZV9lcnJvciA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3VybmFtZS50cmltKCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cm5hbWVfZXJyb3IgPSAn0KPQutCw0LbQuNGC0LUg0YTQsNC80LjQu9C40Y4nO1xuICAgICAgICAgICAgICAgIH1lbHNlICB0aGlzLnN1cm5hbWVfZXJyb3IgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmRlc2NyaXB0aW9uLnRyaW0oKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSAn0KPQutCw0LbQuNGC0LUg0L7Qv9C40YHQsNC90LjQtSc7XG4gICAgICAgICAgICAgICAgfWVsc2UgdGhpcy5kZXNjcmlwdGlvbl9lcnJvciA9ICcnO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICBpZih0aGlzLmZpcnN0X25hbWVfZXJyb3IgfHwgdGhpcy5zdXJuYW1lX2Vycm9yIHx8IHRoaXMuZGVzY3JpcHRpb25fZXJyb3IpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIHRoaXMuaXNIYW5kbGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICBzdXJuYW1lOiB0aGlzLnN1cm5hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5maXJzdF9uYW1lLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgIHBhdHJvbnltaWM6IHRoaXMucGF0cm9ueW1pYy50cmltKCksXG4gICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICBpZih0aGlzLmltZy5sZW5ndGgpIGRhdGEuaW1nID0gdGhpcy5pbWc7IFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2F1dGhvcnMuanNvbic7XG4gICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZGF0YS5zdXJuYW1lICsgJyAnICsgZGF0YS5maXJzdF9uYW1lICsgJyAnICsgZGF0YS5wYXRyb255bWljO1xuICAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3RVcmwgPSBcIi9hdXRob3JzP3N0YXR1cz1uZXdfYXV0aG9yX3N1Y2Nlc3MmbmFtZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgICAgICAgICAgdGhpcy5uYW1lX2Vycm9yID0gJyc7XG4gICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlZGlyZWN0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHZpb2xhdGlvbiBvZiBlcnJvci5yZXNwb25zZS5kYXRhLnZpb2xhdGlvbnMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlvbGF0aW9uLnByb3BlcnR5UGF0aCA9PT0gJ2ZpcnN0X25hbWUnKSB0aGlzLmZpcnN0X25hbWVfZXJyb3IgPSB2aW9sYXRpb24ubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodmlvbGF0aW9uLnByb3BlcnR5UGF0aCA9PT0gJ2Rlc2NyaXB0aW9uJykgdGhpcy5kZXNjcmlwdGlvbl9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2aW9sYXRpb24ucHJvcGVydHlQYXRoID09PSAnc3VybmFtZScpIHRoaXMuc3VybmFtZV9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNIYW5kbGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgcmVkaXJlY3RUbyhwYXRoKXtcbiAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9IHBhdGg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgbmFtZTogXCJhdXRob3JfZm9ybVwiXG59XG5cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2PlxuXG4gICAgICAgIDxwYWdpbmF0aW9uIHYtaWY9XCJwYWdpbmF0aW9uXCIgOnVybD1cIicvYXV0aG9ycydcIiA6dG90YWxfcGFnZXM9XCJ0b3RhbF9wYWdlc1wiIDpjdXJyZW50X3BhZ2U9XCJwYWdlXCI+PC9wYWdpbmF0aW9uPlxuXG4gICAgICAgIDxhdXRob3JfY2FyZCAgOmF1dGhvcj1cImF1dGhvclwiIHYtZm9yPVwiYXV0aG9yIGluIGF1dGhvcnNcIiA6a2V5PVwiYXV0aG9yLmlkXCI+PC9hdXRob3JfY2FyZD5cblxuICAgICAgICA8cGFnaW5hdGlvbiB2LWlmPVwicGFnaW5hdGlvblwiIDp1cmw9XCInL2F1dGhvcnMnXCIgOnRvdGFsX3BhZ2VzPVwidG90YWxfcGFnZXNcIiA6Y3VycmVudF9wYWdlPVwicGFnZVwiPjwvcGFnaW5hdGlvbj5cbiAgICAgICAgXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBhdXRob3JfY2FyZCBmcm9tICcuL0F1dGhvckNhcmQudnVlJ1xuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uLnZ1ZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXBvbmVudHM6IHtcblx0XHRhdXRob3JfY2FyZCwgcGFnaW5hdGlvblxuXHR9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdXRob3JzOiBbXSxcbiAgICAgICAgICAgIHRvdGFsX3BhZ2VzOiAwXG4gICAgICAgICAgICB9fSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgIH0sXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHVybCA9ICcvYXBpL2F1dGhvcnM/cGFnZT0nICsgdGhpcy5wYWdlO1xuICBcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9ycyA9IHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxfcGFnZXMgPSBNYXRoLmNlaWwocmVzcG9uc2UuZGF0YVsnaHlkcmE6dG90YWxJdGVtcyddIC8gMTApO1xuICAgICAgICAgICAgfSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG5cbiAgICBuYW1lOiBcImF1dGhvcl9saXN0XCJcbn1cbjwvc2NyaXB0PlxuXG5cbiIsIlxuPHRlbXBsYXRlPlxuPGRpdj5cblxuICAgIDxkaXYgaWQ9J2Jvb2stY2FyZCcgY2xhc3M9XCJjYXJkIGJnLWxpZ2h0IGNvbC1zbS02XCIgc3R5bGU9XCJtYXgtd2lkdGg6IDc0MHB4O1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9J2F1dGhvci5pbWcnIGNsYXNzPVwiY2FyZC1pbWdcIiBhbHQ9XCIuLi5cIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0VkaXRlZFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ191cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDp1cmw9XCInL2F1dGhvcnMvaW1nJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBAdXBsb2FkZWQ9XCJhdXRob3IuaW1nID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZ191cGxvYWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFpc0VkaXRlZFwiPnt7YXV0aG9yLnN1cm5hbWUgKyAnICcgKyBhdXRob3IuZmlyc3RfbmFtZSArICcgJyArIGF1dGhvci5wYXRyb255bWljfX08L3NwYW4+ICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9J2lzRWRpdGVkJyBpZD0nZWRpdC1mb3JtJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN1cm5hbWUtaW5wdXRcIj7QpNCw0LzQuNC70LjRjzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdXJuYW1lLWlucHV0XCIgdi1tb2RlbD0nYXV0aG9yLnN1cm5hbWUnIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCk0LDQvNC40LvQuNGPXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7c3VybmFtZV9lcnJvcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0LW5hbWUtaW5wdXRcIj7QmNC80Y88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3QtbmFtZS1pbnB1dFwiIHYtbW9kZWw9J2F1dGhvci5maXJzdF9uYW1lJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tmaXJzdF9uYW1lX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF0cm9ueW1pYy1pbnB1dFwiPtCe0YLRh9C10YHRgtCy0L48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGF0cm9ueW1pYy1pbnB1dFwiIHYtbW9kZWw9J2F1dGhvci5wYXRyb255bWljJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQntGC0YfQtdGB0YLQstC+XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7cGF0cm9ueW1pY19lcnJvcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uLWlucHV0XCI+0J7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjNcIiBpZD1cImRlc2NyaXB0aW9uLWlucHV0XCIgdi1tb2RlbD0nYXV0aG9yLmRlc2NyaXB0aW9uJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7ZGVzY3JpcHRpb25fZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCIhaXNFZGl0ZWRcIj57e2F1dGhvci5kZXNjcmlwdGlvbn19PC9wPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj4gIFxuXG4gICAgICAgICAgICBcbiAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtaWY9XCJlbmFibGVfZWRpdGluZ1wiIGlkPVwiYXV0aG9yLXByb2ZpbGUtZWRpdC1wYW5lbFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNSBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XCJ7IHBhZGRpbmc6IGlzRWRpdGVkID8gJzAgMCAwIDE1JScgOiAnMCAwIDAgOCUnfVwiIGNsYXNzPVwiY29sLXNtLTdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImlzRWRpdGVkID0gdHJ1ZVwiIHYtaWY9XCIhaXNFZGl0ZWRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtNFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiaGFuZGxlRGVsZXRlUmVxdWVzdFwiIHYtaWY9XCIhaXNFZGl0ZWRcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImhhbmRsZVBhdGNoUmVxdWVzdFwiIHYtaWY9XCJpc0VkaXRlZFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIFxuXG4gICAgPC9kaXY+XG4gICAgXG5cbiAgICA8ZGl2IHYtaWY9XCJib29rcy5sZW5ndGhcIiBpZD0nYm9vay1jYXJkJyAgc3R5bGU9XCJtYXgtd2lkdGg6IDc0MHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgIDxoMz7QmtC90LjQs9C4PC9oMz5cbiAgICAgICAgICAgIDxib29rX2xpc3QgOmNvbGxlY3Rpb249XCJib29rc1wiPjwvYm9va19saXN0PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuXG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGJvb2tfbGlzdCBmcm9tICcuL0Jvb2tMaXN0LnZ1ZSc7XG5pbXBvcnQgaW1nX3VwbG9hZCBmcm9tICcuL0ltZ1VwbG9hZC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBjb21wb25lbnRzOiB7Ym9va19saXN0LCBpbWdfdXBsb2FkfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgc3VybmFtZTogJycsXG4gICAgICAgICAgICAgICAgcGF0cm9ueW1pYzogJycsXG4gICAgICAgICAgICAgICAgaW1nOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvb2tzOiBbXSxcbiAgICAgICAgICAgIGlzRWRpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzX2luaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIGZpcnN0X25hbWVfZXJyb3I6ICcnLFxuICAgICAgICAgICAgc3VybmFtZV9lcnJvcjogJycsXG4gICAgICAgICAgICBwYXRyb255bWljX2Vycm9yOiAnJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9fSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZV9lZGl0aW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5pZCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS9hdXRob3JzLycgKyB0aGlzLmlkICsgJy5qc29uJztcblxuICAgICAgICBheGlvcy5cbiAgICAgICAgICAgIGdldCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRob3IgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gJy9hcGkvYXV0aG9ycy8nICsgdGhpcy5pZCArICcvYm9va3MuanNvbic7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldEluaXRpYWxzKGF1dGhvcil7XG4gICAgICAgICAgICAgICAgdmFyIGluaXRpYWxzID0gYXV0aG9yLnN1cm5hbWUgKyAnICcgKyBhdXRob3IuZmlyc3RfbmFtZS5jaGFyQXQoMCkgKyAnLic7XG4gICAgICAgICAgICAgICAgaW5pdGlhbHMgKz0gYXV0aG9yLnBhdHJvbnltaWMgPyAnICcgKyBhdXRob3IucGF0cm9ueW1pYy5jaGFyQXQoMCkgKyAnLicgOiAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIHZhbGlkYXRlSW5wdXQoKXtcbiAgICAgICAgICAgICAgICAgdmFyIGF1dGhvciA9IHRoaXMuYXV0aG9yO1xuXG4gICAgICAgICAgICAgICAgIGlmKCFhdXRob3IuZmlyc3RfbmFtZSkgdGhpcy5maXJzdF9uYW1lX2Vycm9yID0gXCLQo9C60LDQttC40YLQtSDQuNC80Y9cIlxuICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZmlyc3RfbmFtZV9lcnJvciA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgaWYoIWF1dGhvci5zdXJuYW1lKSB0aGlzLnN1cm5hbWVfZXJyb3IgPSBcItCj0LrQsNC20LjRgtC1INGE0LDQvNC40LvQuNGOXCJcbiAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLnN1cm5hbWVfZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgIGlmKCFhdXRob3IuZGVzY3JpcHRpb24pIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSBcItCj0LrQsNC20LjRgtC1INC+0L/QuNGB0LDQvdC40LVcIlxuICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBoYW5kbGVQYXRjaFJlcXVlc3QoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VybmFtZV9lcnJvciB8fCB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yIHx8IHRoaXMuZmlyc3RfbmFtZV9lcnJvcikgcmV0dXJuO1xuICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5hdXRob3IuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3VybmFtZTogdGhpcy5hdXRob3Iuc3VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0cm9ueW1pYzogdGhpcy5hdXRob3IucGF0cm9ueW1pYyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuYXV0aG9yLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXV0aG9yLmltZykgZGF0YS5pbWcgPSB0aGlzLmF1dGhvci5pbWc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2F1dGhvcnMvJyArIHRoaXMuYXV0aG9yLmlkO1xuICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5wYXRjaCh1cmwsIGRhdGEsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb24vbWVyZ2UtcGF0Y2granNvblwifX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaGFuZGxlRGVsZXRlUmVxdWVzdCgpe1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL2FwaS9hdXRob3JzLycgKyB0aGlzLmF1dGhvci5pZDtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlKHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3RfdXJsID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2F1dGhvcnM/c3RhdHVzPWF1dGhvcl9kZWxldGVkX3N1Y2Nlc3MmbmFtZT0nIFxuICAgICAgICAgICAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRJbml0aWFscyh0aGlzLmF1dGhvcikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0X3VybDtcblxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICByb3dzQ291bnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuYXV0aG9yLmRlc2NyaXB0aW9uLmxlbmd0aCAvIDUxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBuYW1lOiBcImF1dGhvcl9wcm9maWxlXCJcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgdi1pZj1cImJvb2tcIj5cbiAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYmctbGlnaHQgbWItM1wiIHN0eWxlPVwibWF4LXdpZHRoOiA2NDBweDtcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGJvb2staW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJib29rLmltZ1wiIGNsYXNzPVwiY2FyZC1pbWdcIiBhbHQ9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPjxiPnt7Ym9vay50aXRsZX19PC9iPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYXV0aG9yIGluIGJvb2suYXV0aG9yc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmtleT1cImF1dGhvci5pZFwiIDpocmVmPVwiJy9hdXRob3JzLycgKyBhdXRob3IuaWRcIiA+PHNtYWxsPnt7Z2V0SW5pdGlhbHMoYXV0aG9yKX19IDwvc21hbGw+PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3tnZXRTaG9ydERlc2NyaXB0aW9uKCl9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbi1kZXRhaWxzXCIgY2xhc3M9XCJ0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJyZWRpcmVjdFRvKCcvYm9va3MvJyArIGJvb2suaWQpXCI+0J/QvtC00YDQvtCx0L3QtdC1PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgIFxuICAgICAgICAgICAgfX0sXG5cbiAgICBwcm9wczogWydib29rJ10sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgIHJlZGlyZWN0VG8ocGF0aCl7XG4gICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSBwYXRoO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgZ2V0SW5pdGlhbHMoYXV0aG9yKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbHMgPSBhdXRob3Iuc3VybmFtZSArICcgJyArIGF1dGhvci5maXJzdF9uYW1lLmNoYXJBdCgwKSArICcuJztcbiAgICAgICAgICAgICAgICBpbml0aWFscyArPSBhdXRob3IucGF0cm9ueW1pYyA/ICcgJyArIGF1dGhvci5wYXRyb255bWljLmNoYXJBdCgwKSArICcuJyA6ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFscztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTaG9ydERlc2NyaXB0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmJvb2suZGVzY3JpcHRpb24ubGVuZ3RoIDwgMjAwKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5ib29rLmRlc2NyaXB0aW9uIDogdGhpcy5ib29rLmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAyMDApICsgJy4uLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG5cbiAgICBuYW1lOiBcImJvb2tfY2FyZFwiXG59XG48L3NjcmlwdD5cblxuXG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cblxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxmb3JtPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPtCd0L7QstCw0Y8g0LrQvdC40LPQsDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZS1pbnB1dFwiPtCd0LDQt9Cy0LDQvdC40LU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZS1pbnB1dFwiIHYtbW9kZWw9J3RpdGxlJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3t0aXRsZV9lcnJvcn19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uLWlucHV0XCI+0J7Qv9C40YHQsNC90LjQtTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNlwiIGlkPVwiZGVzY3JpcHRpb24taW5wdXRcIiB2LW1vZGVsPSdkZXNjcmlwdGlvbicgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCI+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7ZGVzY3JpcHRpb25fZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nX3VwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBsb2FkZWQ9XCJpbWcgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWdfdXBsb2FkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCIgaWQ9XCJib29rLWZvcm0tZ2VucmVzLWFuZC1hdXRob3JzLXNlbGVjdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdlbnJlc19hbmRfYXV0aG9yc19zZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBnZW5yZXMtY2hhbmdlZD1cImdlbnJlcyA9ICRldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBhdXRob3JzLWNoYW5nZWQ9XCJhdXRob3JzID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmdlbnJlc19lcnJvcj1cImdlbnJlc19lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphdXRob3JzX2Vycm9yPVwiYXV0aG9yc19lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZ2VucmVzX2FuZF9hdXRob3JzX3NlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDUlIDAgMCAwO1wiIGNsYXNzPVwiY29sLXNtLTJcIiA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzcz1cImltZy10aHVtYm5haWxcIiA6c3JjPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMyUgMCAwIDBcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlU3VibWl0KClcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cItCU0L7QsdCw0LLQuNGC0YxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJpc0hhbmRsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGdlbnJlc19hbmRfYXV0aG9yc19zZWxlY3QgZnJvbSAnLi9HZW5yZXNBbmRBdXRob3JzU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgaW1nX3VwbG9hZCBmcm9tICcuL0ltZ1VwbG9hZC52dWUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXBvbmVudHM6IHtnZW5yZXNfYW5kX2F1dGhvcnNfc2VsZWN0LCBpbWdfdXBsb2FkfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICBpc0hhbmRsaW5nOiBmYWxzZSxcbiAgICAgICAgYXV0aG9yczogW10sXG4gICAgICAgIGdlbnJlczogW10sXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBzdGF0dXNfbWVzc2FnZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uX2Vycm9yOiAnJyxcbiAgICAgICAgZ2VucmVzX2Vycm9yOiAnJyxcbiAgICAgICAgYXV0aG9yc19lcnJvcjogJycsXG4gICAgICAgIHRpdGxlX2Vycm9yOiAnJyxcbiAgICAgICAgaW1nOiAnL2ltZy9ib29rcy9ib29rLWRlZmF1bHQuanBnJ1xuXG4gICAgfX0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdmFsaWRhdGVJbnB1dCgpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnRpdGxlLnRyaW0oKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVfZXJyb3IgPSAn0KPQutCw0LbQuNGC0LUg0L3QsNC30LLQsNC90LjQtSc7XG4gICAgICAgICAgICAgICAgfWVsc2UgIHRoaXMudGl0bGVfZXJyb3IgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmRlc2NyaXB0aW9uLnRyaW0oKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSAn0KPQutCw0LbQuNGC0LUg0L7Qv9C40YHQsNC90LjQtSc7XG4gICAgICAgICAgICAgICAgfWVsc2UgdGhpcy5kZXNjcmlwdGlvbl9lcnJvciA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZ2VucmVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VucmVzX2Vycm9yID0gJ9CS0YvQsdC10YDQuNGC0LUg0LbQsNC90YAnO1xuICAgICAgICAgICAgICAgIH1lbHNlIHRoaXMuZ2VucmVzX2Vycm9yID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRob3JzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9yc19lcnJvciA9ICfQo9C60LDQttC40YLQtSDQsNCy0YLQvtGA0LAnO1xuICAgICAgICAgICAgICAgIH1lbHNlIHRoaXMuYXV0aG9yc19lcnJvciA9ICcnO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgaWYodGhpcy50aXRsZV9lcnJvciB8fCB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yIFxuICAgICAgICAgICAgICAgICB8fCB0aGlzLmdlbnJlc19lcnJvciB8fCB0aGlzLmF1dGhvcnNfZXJyb3IpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgdGhpcy5pc0hhbmRsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgbGV0IGdlbnJlc19pcmkgPSBbXTtcbiAgICAgICAgICAgICAgICAgbGV0IGF1dGhvcnNfaXJpID0gW107XG4gICAgICAgICAgICAgICAgIGZvcihjb25zdCBnZW5yZSBvZiB0aGlzLmdlbnJlcyl7XG4gICAgICAgICAgICAgICAgICAgICBnZW5yZXNfaXJpLnB1c2goJy9hcGkvZ2VucmVzLycgKyBnZW5yZS5pZCk7XG4gICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICBmb3IoY29uc3QgYXV0aG9yIG9mIHRoaXMuYXV0aG9ycyl7XG4gICAgICAgICAgICAgICAgICAgICBhdXRob3JzX2lyaS5wdXNoKCcvYXBpL2F1dGhvcnMvJyArIGF1dGhvci5pZCk7XG4gICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgZ2VucmVzOiBnZW5yZXNfaXJpLFxuICAgICAgICAgICAgICAgICAgICAgYXV0aG9yczogYXV0aG9yc19pcmksXG4gICAgICAgICAgICAgICAgICAgICBpbWc6IHRoaXMuaW1nXG4gICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvYm9va3MuanNvbic7XG4gICAgICAgICAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IFwiL2Jvb2tzP3N0YXR1cz1uZXdfYm9va19zdWNjZXNzJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEudGl0bGUpO1xuICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlX2Vycm9yID0gJyc7XG4gICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlZGlyZWN0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHZpb2xhdGlvbiBvZiBlcnJvci5yZXNwb25zZS5kYXRhLnZpb2xhdGlvbnMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlvbGF0aW9uLnByb3BlcnR5UGF0aCA9PT0gJ3RpdGxlJykgdGhpcy50aXRsZV9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2aW9sYXRpb24ucHJvcGVydHlQYXRoID09PSAnZGVzY3JpcHRpb24nKSB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yID0gdmlvbGF0aW9uLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSGFuZGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICByZWRpcmVjdFRvKHBhdGgpe1xuICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0gcGF0aDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgbmFtZTogXCJib29rX2Zvcm1cIlxufVxuXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiY29sbGVjdGlvbl9pc19lbXB0eVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICA8c3Bhbj7QndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3Qvjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiYm9va3MubGVuZ3RoXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwYWdpbmF0aW9uIHYtaWY9XCJwYWdpbmF0aW9uXCIgOnVybD1cInBhZ2luYXRpb25fdXJsXCIgOnRvdGFsX3BhZ2VzPVwidG90YWxfcGFnZXNcIiA6Y3VycmVudF9wYWdlPVwicGFnZVwiPjwvcGFnaW5hdGlvbj5cblxuICAgICAgICAgICAgPGJvb2tfY2FyZCAgOmJvb2s9XCJib29rXCIgdi1mb3I9XCJib29rIGluIGJvb2tzXCIgOmtleT1cImJvb2suaWRcIj48L2Jvb2tfY2FyZD5cblxuICAgICAgICAgICAgPHBhZ2luYXRpb24gdi1pZj1cInBhZ2luYXRpb25cIiA6dXJsPVwicGFnaW5hdGlvbl91cmxcIiA6dG90YWxfcGFnZXM9XCJ0b3RhbF9wYWdlc1wiIDpjdXJyZW50X3BhZ2U9XCJwYWdlXCI+PC9wYWdpbmF0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgYm9va19jYXJkIGZyb20gJy4vQm9va0NhcmQudnVlJ1xuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uLnZ1ZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXBvbmVudHM6IHtcblx0XHRib29rX2NhcmQsIHBhZ2luYXRpb25cblx0fSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9va3M6IFtdLFxuICAgICAgICAgICAgdG90YWxfcGFnZXM6IDAsXG4gICAgICAgICAgICBjb2xsZWN0aW9uX2lzX2VtcHR5OiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25fdXJsOiAnL2Jvb2tzJ1xuICAgICAgICAgICAgfX0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICBkZWZhdWx0OiAxXG4gICAgICAgICB9LFxuICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgIH0sXG4gICAgICAgIGNvbGxlY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICAgICAgfSwgXG4gICAgICAgIHNlYXJjaF9xdWVyeToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcblxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmJvb2tzID0gIHRoaXMuY29sbGVjdGlvbjtcblxuICAgICAgICB9ZWxzZSBpZih0aGlzLnNlYXJjaF9xdWVyeS5sZW5ndGgpe1xuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2Jvb2tzL3NlYXJjaD9xdWVyeT0nICsgdGhpcy5zZWFyY2hfcXVlcnkgKyAnJnBhZ2U9JyArIHRoaXMucGFnZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rcyA9IHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsX3BhZ2VzID0gMC8vTWF0aC5jZWlsKHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOnRvdGFsSXRlbXMnXSAvIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uX3VybCA9ICcvYm9va3Mvc2VhcmNoP3F1ZXJ5PScgKyB0aGlzLnNlYXJjaF9xdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYm9va3MubGVuZ3RoKSB0aGlzLmNvbGxlY3Rpb25faXNfZW1wdHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgdmFyIHVybCA9ICcvYXBpL2Jvb2tzP3BhZ2U9JyArIHRoaXMucGFnZTtcbiAgXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tzID0gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ107XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbF9wYWdlcyA9IE1hdGguY2VpbChyZXNwb25zZS5kYXRhWydoeWRyYTp0b3RhbEl0ZW1zJ10gLyAxMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuXG4gICAgbmFtZTogXCJib29rX2xpc3RcIlxufVxuPC9zY3JpcHQ+XG5cblxuIiwiXG48dGVtcGxhdGU+XG5cbiAgICA8ZGl2IHYtaWY9XCJpc19pbml0aWFsaXplZFwiIGlkPSdib29rLWNhcmQnIGNsYXNzPVwiY2FyZCBiZy1saWdodFwiIHN0eWxlPVwibWF4LXdpZHRoOiA3NDBweDtcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPSdib29rLmltZycgY2xhc3M9XCJjYXJkLWltZ1wiIGFsdD1cIi4uLlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzRWRpdGVkXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMTAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nX3VwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgQHVwbG9hZGVkPVwiYm9vay5pbWcgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nX3VwbG9hZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhaXNFZGl0ZWRcIj57e2Jvb2sudGl0bGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiYm9vay50aXRsZVwiIHYtaWY9XCJpc0VkaXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJpc0VkaXRlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3t0aXRsZV9lcnJvcn19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhaXNFZGl0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYm9vay1wcm9maWxlLWF1dGhvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxzbWFsbD7QkNCy0YLQvtGA0Ys6PC9zbWFsbD4gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiYXV0aG9yIGluIGJvb2suYXV0aG9yc1wiIDprZXk9XCJhdXRob3IuaWRcIiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvYXV0aG9ycy8nICsgYXV0aG9yLmlkXCI+e3tnZXRJbml0aWFscyhhdXRob3IpfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYm9vay1wcm9maWxlLWdlbnJlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPHNtYWxsPtCW0LDQvdGA0Ys6PC9zbWFsbD4gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiZ2VucmUgaW4gYm9vay5nZW5yZXNcIiA6a2V5PVwiZ2VucmUuaWRcIiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvZ2VucmVzLycgKyBnZW5yZS5pZFwiPnt7Z2VucmUubmFtZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgIDxnZW5yZXNfYW5kX2F1dGhvcnNfc2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNFZGl0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZ2VucmVzLWNoYW5nZWQ9XCJib29rLmdlbnJlcyA9ICRldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBhdXRob3JzLWNoYW5nZWQ9XCJib29rLmF1dGhvcnMgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Z2VucmVzX2Vycm9yPVwiZ2VucmVzX2Vycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmF1dGhvcnNfZXJyb3I9XCJhdXRob3JzX2Vycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmdlbnJlcz1cImJvb2suZ2VucmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmF1dGhvcnM9XCJib29rLmF1dGhvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZ2VucmVzX2FuZF9hdXRob3JzX3NlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c21hbGwgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1pbmZvXCI+0JrQvdC40LPQsCDQvdCw0YXQvtC00LjRgtGB0Y8g0L3QsCDQvNC+0LTQtdGA0LDRhtC40Lg8L3NtYWxsPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cIiFpc0VkaXRlZFwiPnt7Ym9vay5kZXNjcmlwdGlvbn19PC9wPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtaWY9XCJpc0VkaXRlZFwiIDpyb3dzPVwicm93c0NvdW50XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiB2LW1vZGVsPVwiYm9vay5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNhcmQtdGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiaXNFZGl0ZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7ZGVzY3JpcHRpb25fZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj4gIFxuXG4gICAgICAgICAgICBcbiAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtaWY9XCJlbmFibGVfZWRpdGluZ1wiIGlkPVwiYm9vay1wcm9maWxlLWVkaXQtcGFuZWxcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTUgXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVwieyBwYWRkaW5nOiBpc0VkaXRlZCA/ICcwIDAgMCAxNSUnIDogJzAgMCAwIDglJ31cIiBjbGFzcz1cImNvbC1zbS03XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC03XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJpc0VkaXRlZCA9IHRydWVcIiB2LWlmPVwiIWlzRWRpdGVkXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImhhbmRsZURlbGV0ZVJlcXVlc3RcIiB2LWlmPVwiIWlzRWRpdGVkXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJoYW5kbGVQYXRjaFJlcXVlc3RcIiB2LWlmPVwiaXNFZGl0ZWRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiBcblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBnZW5yZXNfYW5kX2F1dGhvcnNfc2VsZWN0IGZyb20gJy4vR2VucmVzQW5kQXV0aG9yc1NlbGVjdC52dWUnO1xuaW1wb3J0IGltZ191cGxvYWQgZnJvbSAnLi9JbWdVcGxvYWQudnVlJztcblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcG9uZW50czoge2dlbnJlc19hbmRfYXV0aG9yc19zZWxlY3QsIGltZ191cGxvYWR9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib29rOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW10sXG4gICAgICAgICAgICAgICAgZ2VucmVzOiBbXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgICAgaW1nOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRWRpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGdlbnJlc19lcnJvcjogJycsXG4gICAgICAgICAgICBhdXRob3JzX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIHRpdGxlX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIGlzX2luaXRpYWxpemVkOiBmYWxzZVxuICAgICAgICAgICAgfX0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuICAgICAgICBlbmFibGVfZWRpdGluZzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMuaWQgPT09IDApIHJldHVybjtcblxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvYm9va3MvJyArIHRoaXMuaWQgKyAnLmpzb24nO1xuXG4gICAgICAgIGF4aW9zLlxuICAgICAgICAgICAgZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2sgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgdmFsaWRhdGVJbnB1dCgpe1xuICAgICAgICAgICAgICAgICB2YXIgYm9vayA9IHRoaXMuYm9vaztcblxuICAgICAgICAgICAgICAgICBpZighYm9vay50aXRsZSkgdGhpcy50aXRsZV9lcnJvciA9IFwi0KPQutCw0LbQuNGC0LUg0L3QsNC30LLQsNC90LjQtVwiXG4gICAgICAgICAgICAgICAgIGVsc2UgdGhpcy50aXRsZV9lcnJvciA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgaWYoIWJvb2suZGVzY3JpcHRpb24pIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSBcItCj0LrQsNC20LjRgtC1INC+0L/QuNGB0LDQvdC40LVcIlxuICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgIGlmKCFib29rLmdlbnJlcy5sZW5ndGgpIHRoaXMuZ2VucmVzX2Vycm9yID0gXCLQktGL0LHQtdGA0LjRgtC1INC20LDQvdGAXCJcbiAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmdlbnJlc19lcnJvciA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgaWYoIWJvb2suYXV0aG9ycy5sZW5ndGgpIHRoaXMuYXV0aG9yc19lcnJvciA9IFwi0KPQutCw0LbQuNGC0LUg0LDQstGC0L7RgNCwXCJcbiAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmF1dGhvcnNfZXJyb3IgPSBcIlwiO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaGFuZGxlUGF0Y2hSZXF1ZXN0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnRpdGxlX2Vycm9yIHx8IHRoaXMuZGVzY3JpcHRpb25fZXJyb3JcbiAgICAgICAgICAgICAgICAgIHx8IHRoaXMuZ2VucmVzX2Vycm9yIHx8IHRoaXMuYXV0aG9yc19lcnJvcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBnZW5yZXNfaXJpID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGF1dGhvcnNfaXJpID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgZ2VucmUgb2YgdGhpcy5ib29rLmdlbnJlcyl7XG4gICAgICAgICAgICAgICAgICAgIGdlbnJlc19pcmkucHVzaCgnL2FwaS9nZW5yZXMvJyArIGdlbnJlLmlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgYXV0aG9yIG9mIHRoaXMuYm9vay5hdXRob3JzKXtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yc19pcmkucHVzaCgnL2FwaS9hdXRob3JzLycgKyBhdXRob3IuaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5ib29rLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5ib29rLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3JzOiBhdXRob3JzX2lyaSxcbiAgICAgICAgICAgICAgICAgICAgZ2VucmVzOiBnZW5yZXNfaXJpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib29rLmltZykgZGF0YS5pbWcgPSB0aGlzLmJvb2suaW1nO1xuXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2Jvb2tzLycgKyB0aGlzLmJvb2suaWQ7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBhdGNoKHVybCwgZGF0YSwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9tZXJnZS1wYXRjaCtqc29uXCJ9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBoYW5kbGVEZWxldGVSZXF1ZXN0KCl7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2Jvb2tzLycgKyB0aGlzLmJvb2suaWQ7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZSh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0X3VybCA9IFxuICAgICAgICAgICAgICAgICAgICAgICAgJy9ib29rcz9zdGF0dXM9Ym9va19kZWxldGVkX3N1Y2Nlc3MmdGl0bGU9JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYm9vay50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RfdXJsO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdldEluaXRpYWxzKGF1dGhvcil7XG4gICAgICAgICAgICAgICAgdmFyIGluaXRpYWxzID0gYXV0aG9yLnN1cm5hbWUgKyAnICcgKyBhdXRob3IuZmlyc3RfbmFtZS5jaGFyQXQoMCkgKyAnLic7XG4gICAgICAgICAgICAgICAgaW5pdGlhbHMgKz0gYXV0aG9yLnBhdHJvbnltaWMgPyAnICcgKyBhdXRob3IucGF0cm9ueW1pYy5jaGFyQXQoMCkgKyAnLicgOiAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHJvd3NDb3VudDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5ib29rLmRlc2NyaXB0aW9uLmxlbmd0aCAvIDUxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBuYW1lOiBcImJvb2tfcHJvZmlsZVwiXG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2PlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy1saWdodCBtYi0zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDY0MHB4O1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgYm9vay1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdlbnJlLmltZ1wiIGNsYXNzPVwiY2FyZC1pbWdcIiBhbHQ9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPjxiPnt7Z2VucmUubmFtZX19PC9iPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3tnZXRTaG9ydERlc2NyaXB0aW9uKCl9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbi1kZXRhaWxzXCIgY2xhc3M9XCJ0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJyZWRpcmVjdFRvKCcvZ2VucmVzLycgKyBnZW5yZS5pZClcIj7Qn9C+0LTRgNC+0LHQvdC10LU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgXG4gICAgICAgICAgICB9fSxcblxuICAgIHByb3BzOiBbJ2dlbnJlJ10sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgIHJlZGlyZWN0VG8ocGF0aCl7XG4gICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSBwYXRoO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdldFNob3J0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZ2VucmUuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMjAwKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5yZS5kZXNjcmlwdGlvbiA6IHRoaXMuZ2VucmUuZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDIwMCkgKyAnLi4uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIG5hbWU6IFwiZ2VucmVfY2FyZFwiXG59XG48L3NjcmlwdD5cblxuXG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cblxuICAgICAgICAgICAgPGgyPtCd0L7QstGL0Lkg0LbQsNC90YA8L2gyPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWUtaW5wdXRcIj7QndCw0LfQstCw0L3QuNC1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZS1pbnB1dFwiIHYtbW9kZWw9J25hbWUnIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e25hbWVfZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb24taW5wdXRcIj7QntC/0LjRgdCw0L3QuNC1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI4XCIgaWQ9XCJkZXNjcmlwdGlvbi1pbnB1dFwiIHYtbW9kZWw9J2Rlc2NyaXB0aW9uJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tkZXNjcmlwdGlvbl9lcnJvcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cImhhbmRsZVN1Ym1pdCgpXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLQlNC+0LHQsNCy0LjRgtGMXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiaXNIYW5kbGluZ1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICBpc0hhbmRsaW5nOiBmYWxzZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgc3RhdHVzX21lc3NhZ2U6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbl9lcnJvcjogJycsXG4gICAgICAgIG5hbWVfZXJyb3I6ICcnXG4gICAgICAgICAgICB9fSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB2YWxpZGF0ZUlucHV0KCl7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMubmFtZS50cmltKCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVfZXJyb3IgPSAn0KPQutCw0LbQuNGC0LUg0L3QsNC30LLQsNC90LjQtSc7XG4gICAgICAgICAgICAgICAgfWVsc2UgIHRoaXMubmFtZV9lcnJvciA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZGVzY3JpcHRpb24udHJpbSgpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbl9lcnJvciA9ICfQo9C60LDQttC40YLQtSDQvtC/0LjRgdCw0L3QuNC1JztcbiAgICAgICAgICAgICAgICB9ZWxzZSB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yID0gJyc7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaGFuZGxlU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgIGlmKHRoaXMubmFtZV9lcnJvciB8fCB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yKSByZXR1cm47XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB0aGlzLmlzSGFuZGxpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZ2VucmVzLmpzb24nO1xuICAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3RVcmwgPSBcIi9nZW5yZXM/c3RhdHVzPW5ld19nZW5yZV9zdWNjZXNzJm5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgdGhpcy5uYW1lX2Vycm9yID0gJyc7XG4gICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25fZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlZGlyZWN0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHZpb2xhdGlvbiBvZiBlcnJvci5yZXNwb25zZS5kYXRhLnZpb2xhdGlvbnMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlvbGF0aW9uLnByb3BlcnR5UGF0aCA9PT0gJ25hbWUnKSB0aGlzLm5hbWVfZXJyb3IgPSB2aW9sYXRpb24ubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodmlvbGF0aW9uLnByb3BlcnR5UGF0aCA9PT0gJ2Rlc2NyaXB0aW9uJykgdGhpcy5kZXNjcmlwdGlvbl9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0hhbmRsaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICByZWRpcmVjdFRvKHBhdGgpe1xuICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0gcGF0aDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBuYW1lOiBcImdlbnJlX2Zvcm1cIlxufVxuXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cblxuICAgICAgICA8cGFnaW5hdGlvbiB2LWlmPVwicGFnaW5hdGlvblwiIDp1cmw9XCInL2dlbnJlcydcIiA6dG90YWxfcGFnZXM9XCJ0b3RhbF9wYWdlc1wiIDpjdXJyZW50X3BhZ2U9XCJwYWdlXCI+PC9wYWdpbmF0aW9uPlxuXG4gICAgICAgIDxnZW5yZV9jYXJkICA6Z2VucmU9XCJnZW5yZVwiIHYtZm9yPVwiZ2VucmUgaW4gZ2VucmVzXCIgOmtleT1cImdlbnJlLmlkXCI+PC9nZW5yZV9jYXJkPlxuXG4gICAgICAgIDxwYWdpbmF0aW9uIHYtaWY9XCJwYWdpbmF0aW9uXCIgOnVybD1cIicvZ2VucmVzJ1wiIDp0b3RhbF9wYWdlcz1cInRvdGFsX3BhZ2VzXCIgOmN1cnJlbnRfcGFnZT1cInBhZ2VcIj48L3BhZ2luYXRpb24+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZ2VucmVfY2FyZCBmcm9tICcuL0dlbnJlQ2FyZC52dWUnXG5pbXBvcnQgcGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24udnVlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcG9uZW50czoge1xuXHRcdGdlbnJlX2NhcmQsIHBhZ2luYXRpb25cblx0fSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2VucmVzOiBbXSxcbiAgICAgICAgICAgIHRvdGFsX3BhZ2VzOiAwXG4gICAgICAgICAgICB9fSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgIH0sXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHVybCA9ICcvYXBpL2dlbnJlcz9wYWdlPScgKyB0aGlzLnBhZ2U7XG4gIFxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5yZXMgPSByZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsX3BhZ2VzID0gTWF0aC5jZWlsKHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOnRvdGFsSXRlbXMnXSAvIDEwKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuXG4gICAgbmFtZTogXCJnZW5yZV9saXN0XCJcbn1cbjwvc2NyaXB0PlxuXG5cbiIsIlxuPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwiaXNfaW5pdGlhbGl6ZWRcIiA+XG5cbiAgICA8ZGl2IGlkPSdib29rLWNhcmQnIGNsYXNzPVwiY2FyZCBiZy1saWdodCBjb2wtc20tNlwiIHN0eWxlPVwibWF4LXdpZHRoOiA3NDBweDtcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPSdnZW5yZS5pbWcnIGNsYXNzPVwiY2FyZC1pbWdcIiBhbHQ9XCIuLi5cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhaXNFZGl0ZWRcIj57e2dlbnJlLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZ2VucmUubmFtZVwiIHYtaWY9XCJpc0VkaXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJpc0VkaXRlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tuYW1lX2Vycm9yfX08L3NwYW4+XG5cbiAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cIiFpc0VkaXRlZFwiPnt7Z2VucmUuZGVzY3JpcHRpb259fTwvcD4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LWlmPVwiaXNFZGl0ZWRcIiA6cm93cz1cInJvd3NDb3VudFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdi1tb2RlbD1cImdlbnJlLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2FyZC10ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJpc0VkaXRlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tkZXNjcmlwdGlvbl9lcnJvcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgXG5cbiAgICAgICAgICAgIFxuICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1pZj1cImVuYWJsZV9lZGl0aW5nXCIgaWQ9XCJnZW5yZS1wcm9maWxlLWVkaXQtcGFuZWxcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTUgXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVwieyBwYWRkaW5nOiBpc0VkaXRlZCA/ICcwIDAgMCAxNSUnIDogJzAgMCAwIDglJ31cIiBjbGFzcz1cImNvbC1zbS03XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC03XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJpc0VkaXRlZCA9IHRydWVcIiB2LWlmPVwiIWlzRWRpdGVkXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImhhbmRsZURlbGV0ZVJlcXVlc3RcIiB2LWlmPVwiIWlzRWRpdGVkXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJoYW5kbGVQYXRjaFJlcXVlc3RcIiB2LWlmPVwiaXNFZGl0ZWRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICBcblxuICAgIDwvZGl2PlxuICAgIFxuXG4gICAgPGRpdiBpZD0nYm9vay1jYXJkJyAgc3R5bGU9XCJtYXgtd2lkdGg6IDc0MHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cblxuICAgICAgICAgICAgPGJvb2tfbGlzdCB2LWlmPVwiZ2VucmUuYm9va3MubGVuZ3RoXCIgOmNvbGxlY3Rpb249XCJnZW5yZS5ib29rc1wiPjwvYm9va19saXN0PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuXG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGJvb2tfbGlzdCBmcm9tICcuL0Jvb2tMaXN0LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbXBvbmVudHM6IHtib29rX2xpc3R9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZW5yZToge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGJvb2tzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRWRpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIG5hbWVfZXJyb3I6ICcnLFxuICAgICAgICAgICAgaXNfaW5pdGlhbGl6ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9fSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZV9lZGl0aW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5pZCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS9nZW5yZXMvJyArIHRoaXMuaWQgKyAnLmpzb24nO1xuXG4gICAgICAgIGF4aW9zLlxuICAgICAgICAgICAgZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbnJlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgdmFsaWRhdGVJbnB1dCgpe1xuICAgICAgICAgICAgICAgICB2YXIgZ2VucmUgPSB0aGlzLmdlbnJlO1xuXG4gICAgICAgICAgICAgICAgIGlmKCFnZW5yZS5uYW1lKSB0aGlzLm5hbWVfZXJyb3IgPSBcItCj0LrQsNC20LjRgtC1INC90LDQt9Cy0LDQvdC40LVcIlxuICAgICAgICAgICAgICAgICBlbHNlIHRoaXMubmFtZV9lcnJvciA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgaWYoIWdlbnJlLmRlc2NyaXB0aW9uKSB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yID0gXCLQo9C60LDQttC40YLQtSDQvtC/0LjRgdCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRlc2NyaXB0aW9uX2Vycm9yID0gXCJcIjtcblxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaGFuZGxlUGF0Y2hSZXF1ZXN0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm5hbWVfZXJyb3IgfHwgdGhpcy5kZXNjcmlwdGlvbl9lcnJvcikgcmV0dXJuO1xuICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5nZW5yZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZW5yZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnL2FwaS9nZW5yZXMvJyArIHRoaXMuZ2VucmUuaWQ7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBhdGNoKHVybCwgZGF0YSwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9tZXJnZS1wYXRjaCtqc29uXCJ9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBoYW5kbGVEZWxldGVSZXF1ZXN0KCl7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2dlbnJlcy8nICsgdGhpcy5nZW5yZS5pZDtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlKHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3RfdXJsID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2dlbnJlcz9zdGF0dXM9Z2VucmVfZGVsZXRlZF9zdWNjZXNzJm5hbWU9JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2VucmUubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RfdXJsO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcm93c0NvdW50OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmdlbnJlLmRlc2NyaXB0aW9uLmxlbmd0aCAvIDUxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBuYW1lOiBcImdlbnJlX3Byb2ZpbGVcIlxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctdG9wOiA3JVwiIGlkPVwiYXV0aG9yc1wiIGNsYXNzPVwiY29sLXNtLTZcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQkNCy0YLQvtGA0YtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC1oZWlnaHQ6IDI1MHB4OyBvdmVyZmxvdy15OiBzY3JvbGxcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZGlzYWJsZWRcIiAgaHJlZj1cIiNcIj7QktGL0LHQtdGA0LjRgtC1INCw0LLRgtC+0YDQsDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJhZGRBdXRob3JUb1NlbGVjdGVkKGF1dGhvcilcIiBocmVmPVwiI1wiIDprZXk9XCJhdXRob3IuaWRcIiB2LWZvcj1cImF1dGhvciBpbiBhdXRob3JzX2FsbFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2dldEluaXRpYWxzKGF1dGhvcil9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbjogMCAxJSAwIDElXCIgOmtleT1cImF1dGhvci5pZFwiIHYtZm9yPVwiYXV0aG9yIGluIGF1dGhvcnNfc2VsZWN0ZWRcIiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tnZXRJbml0aWFscyhhdXRob3IpfX0gIDxhIEBjbGljaz1cInJlbW92ZUF1dGhvckZyb21TZWxlY3RlZChhdXRob3IpXCIgc3R5bGU9XCJjb2xvcjogd2hpdGU7IHRleHQtZGVjb3JhdGlvbjogbm9uZVwiIGhyZWY9XCIjXCI+IHggPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3thdXRob3JzX2Vycm9yfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDogNyVcIiBpZD1cImdlbnJlc1wiIGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYXJrIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICDQltCw0L3RgNGLXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LWhlaWdodDogMjUwcHg7IG92ZXJmbG93LXk6IHNjcm9sbFwiIGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGRpc2FibGVkXCIgIGhyZWY9XCIjXCI+0JLRi9Cx0LXRgNC40YLQtSDQttCw0L3RgDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImFkZEdlbnJlVG9TZWxlY3RlZChnZW5yZSlcIiBocmVmPVwiI1wiIDprZXk9XCJnZW5yZS5pZFwiIHYtZm9yPVwiZ2VucmUgaW4gZ2VucmVzX2FsbFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2VucmUubmFtZX19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luOiAwIDElIDAgMSVcIiA6a2V5PVwiZ2VucmUuaWRcIiB2LWZvcj1cImdlbnJlIGluIGdlbnJlc19zZWxlY3RlZFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIHt7Z2VucmUubmFtZX19ICA8YSBAY2xpY2s9XCJyZW1vdmVHZW5yZUZyb21TZWxlY3RlZChnZW5yZSlcIiBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgdGV4dC1kZWNvcmF0aW9uOiBub25lXCIgaHJlZj1cIiNcIj4geCA8L2E+XG5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e2dlbnJlc19lcnJvcn19PC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0e1xuXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aG9yc19zZWxlY3RlZDogdGhpcy5hdXRob3JzLFxuICAgICAgICBhdXRob3JzX2FsbDogW10sXG4gICAgICAgIGdlbnJlc19zZWxlY3RlZDogdGhpcy5nZW5yZXMsXG4gICAgICAgIGdlbnJlc19hbGw6IFtdXG5cbiAgICB9fSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYXV0aG9yc191cmwgPSAnL2FwaS9hdXRob3JzLmpzb24/cGFnaW5hdGlvbj1mYWxzZSZwcm9wZXJ0aWVzW109aWQmcHJvcGVydGllc1tdPWZpcnN0TmFtZSZwcm9wZXJ0aWVzW109c3VybmFtZSZwcm9wZXJ0aWVzW109cGF0cm9ueW1pYyc7XG4gICAgICAgIHZhciBnZW5yZXNfdXJsID0gJy9hcGkvZ2VucmVzLmpzb24/cGFnaW5hdGlvbj1mYWxzZSZwcm9wZXJ0aWVzW109aWQmcHJvcGVydGllc1tdPW5hbWUnO1xuICAgICAgICBcbiAgICAgICAgYXhpb3MuZ2V0KGF1dGhvcnNfdXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhvcnNfYWxsID0gcmVzcG9uc2UuZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhLnN1cm5hbWUgPiBiLnN1cm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KGdlbnJlc191cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5yZXNfYWxsID0gcmVzcG9uc2UuZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcblxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgYXV0aG9yc19lcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgZ2VucmVzX2Vycm9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBhdXRob3JzOntcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7cmV0dXJuIFtdO31cbiAgICAgICAgfSxcbiAgICAgICAgZ2VucmVzOntcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7cmV0dXJuIFtdO31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0SW5pdGlhbHMoYXV0aG9yKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbHMgPSBhdXRob3Iuc3VybmFtZSArICcgJyArIGF1dGhvci5maXJzdF9uYW1lLmNoYXJBdCgwKSArICcuJztcbiAgICAgICAgICAgICAgICBpbml0aWFscyArPSBhdXRob3IucGF0cm9ueW1pYyA/ICcgJyArIGF1dGhvci5wYXRyb255bWljLmNoYXJBdCgwKSArICcuJyA6ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFscztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJdGVtSW5kZXhGcm9tQXJyYXkoYXJyYXksIG9iamVjdCl7XG5cbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShhcnJheVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KG9iamVjdCkpIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRHZW5yZVRvU2VsZWN0ZWQoZ2VucmUpe1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4RnJvbUFycmF5KHRoaXMuZ2VucmVzX3NlbGVjdGVkLCBnZW5yZSlcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gLSAxKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5yZXNfc2VsZWN0ZWQucHVzaChnZW5yZSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXhGcm9tQXJyYXkodGhpcy5nZW5yZXNfYWxsLCBnZW5yZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VucmVzX2FsbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZ2VucmVzLWNoYW5nZWQnLCB0aGlzLmdlbnJlc19zZWxlY3RlZCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlR2VucmVGcm9tU2VsZWN0ZWQoZ2VucmUpe1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4RnJvbUFycmF5KHRoaXMuZ2VucmVzX3NlbGVjdGVkLCBnZW5yZSk7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VucmVzX3NlbGVjdGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VucmVzX2FsbC5wdXNoKGdlbnJlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2dlbnJlcy1jaGFuZ2VkJywgdGhpcy5nZW5yZXNfc2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VucmVzX2FsbCA9IHRoaXMuZ2VucmVzX2FsbC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkQXV0aG9yVG9TZWxlY3RlZChhdXRob3Ipe1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4RnJvbUFycmF5KHRoaXMuYXV0aG9yc19zZWxlY3RlZCwgYXV0aG9yKVxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAtIDEpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhvcnNfc2VsZWN0ZWQucHVzaChhdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4RnJvbUFycmF5KHRoaXMuYXV0aG9yc19hbGwsIGF1dGhvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9yc19hbGwuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhdXRob3JzLWNoYW5nZWQnLCB0aGlzLmF1dGhvcnNfc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVBdXRob3JGcm9tU2VsZWN0ZWQoYXV0aG9yKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleEZyb21BcnJheSh0aGlzLmF1dGhvcnNfc2VsZWN0ZWQsIGF1dGhvcik7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9yc19zZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhvcnNfYWxsLnB1c2goYXV0aG9yKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhdXRob3JzLWNoYW5nZWQnLCB0aGlzLmF1dGhvcnNfc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRob3JzX2FsbCA9IHRoaXMuYXV0aG9yc19hbGwuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICBuYW1lOiBcImdlbnJlc19hbmRfYXV0aG9yc19zZWxlY3RcIlxufVxuXG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAyJSAwIDQlIDBcIiBjbGFzcz1cImN1c3RvbS1maWxlXCI+XG4gICAgICAgICAgICA8aW5wdXQgQGNoYW5nZT1cInVwbG9hZEltZ1wiIGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWdcIiB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIiBpZD1cImN1c3RvbUZpbGVMYW5nXCIgbGFuZz1cImVzXCI+XG4gICAgICAgICAgICA8bGFiZWwgIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBmb3I9XCJjdXN0b21GaWxlTGFuZ1wiPtCS0YvQsdC10YDQuNGC0LUg0YTQvtGC0L48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgZGF0YSgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWVzdF91cmw6IHRoaXMudXJsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOntcbiAgICAgICAgdXJsOntcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcvYm9va3MvaW1nJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGxvYWRJbWcoZXZlbnQpe1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICBkYXRhLnNldCgnaW1nJywgZmlsZSk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy5yZXF1ZXN0X3VybCwgZGF0YSwgY29uZmlnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nX3VybCA9IHJlc3BvbnNlLmRhdGEuaW1nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltZ191cmwnICsgaW1nX3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWRlZCcsIGltZ191cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX0sXG4gICAgbmFtZTogXCJpbWdfdXBsb2FkXCJcbn1cblxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXY+XG4gICAgICAgIDxoMj7QktGF0L7QtDwvaDI+XG4gICAgICAgIDxzcGFuPtCX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvRjywg0YfRgtC+0LHRiyDQstC+0LnRgtC4INC90LAg0YHQsNC50YI8L3NwYW4+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWwtaW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWwtaW5wdXRcIiB2LW1vZGVsPSdlbWFpbCcgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7ZW1haWxfZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZC1pbnB1dFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e3Bhc3N3b3JkX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwidmFsaWRhdGVJbnB1dEFuZFN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9XCLQktGF0L7QtFwiPiAgXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDUlXCIgIGhyZWY9XCIvcGFzc3dvcmQvcmVzdG9yZVwiPjxzcGFuPtCS0L7RgdGB0YLQsNC90L7QstC70LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9zcGFuPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgZW1haWxfZXJyb3I6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRfZXJyb3I6ICcnICAgIFxuICAgICAgICAgICAgfX0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgIHZhbGlkYXRlSW5wdXRBbmRTdWJtaXQoKXtcbiAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZW1haWwudHJpbSgpKSB0aGlzLmVtYWlsX2Vycm9yID0gXCLQktCy0LXQtNC40YLQtSBlbWFpbFwiO1xuICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvdXNlcnMuanNvbj9lbWFpbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZW1haWwudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5kYXRhLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWFpbF9lcnJvciA9ICfQkNC60LrQsNGD0L3RgiDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkX2Vycm9yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsX2Vycm9yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQYXNzd29yZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgdmFsaWRhdGVQYXNzd29yZCgpe1xuICAgICAgICAgICAgICAgICAgaWYoIXRoaXMucGFzc3dvcmQpIHRoaXMucGFzc3dvcmRfZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMJztcbiAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5wYXNzd29yZF9lcnJvciA9ICcnO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaGFuZGxlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZW1haWxfZXJyb3IgfHwgdGhpcy5wYXNzd29yZF9lcnJvcikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbC50cmltKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICBcblxuICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KCcvbG9naW4nLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLiRlbWl0KCd1c2VyLWF1dGhlbnRpY2F0ZWQnLCB1c2VyVXJpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5lbWFpbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9lcnJvciA9ICfQndC10LLQtdGA0L3Ri9C5INC/0LDRgNC+0LvRjCc7XG4gICAgICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICBuYW1lOiBcImxvZ2luX2Zvcm1cIlxufVxuPC9zY3JpcHQ+XG5cblxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiB2LWlmPVwidG90YWxfcGFnZXMgPiAxXCIgaWQ9XCJwYWdpbmF0aW9uXCI+XG4gICAgXG4gICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvbiBleGFtcGxlXCI+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIDpocmVmPVwiYWRkUGFnZSh1cmwsIDEpXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJwYWdlIGluIHBhZ2luYXRpb25fcmFuZ2UoKVwiIDprZXk9XCJwYWdlXCIgOmNsYXNzPVwiW3BhZ2UgPT0gY3VycmVudF9wYWdlID8gJ2FjdGl2ZScgOiAnJywgJ3BhZ2UtaXRlbSddXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdwYWdlLWxpbmsnIDpocmVmPVwiYWRkUGFnZSh1cmwsIHBhZ2UpXCI+e3twYWdlfX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiA6aHJlZj1cImFkZFBhZ2UodXJsLCB0b3RhbF9wYWdlcylcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9uYXY+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgY29tcG9uZW50czoge1xuXHRcdFxuXHR9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib29rczogW10sXG4gICAgICAgICAgICBvZmZzZXQ6IDNcbiAgICAgICAgICAgIH19LFxuXG4gICAgcHJvcHM6IFsnY3VycmVudF9wYWdlJywndG90YWxfcGFnZXMnLCAndXJsJ10sXG4gICAgY29tcHV0ZWQ6e1xuXG4gICAgfSxcbiBcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHBhZ2luYXRpb25fcmFuZ2UoKXtcbiAgICAgICAgICAgIGxldCBwYWdpbmF0aW9uX3N0YXJ0ID0gKHRoaXMuY3VycmVudF9wYWdlIC0gdGhpcy5vZmZzZXQgPiAxKSA/IHRoaXMuY3VycmVudF9wYWdlIC0gdGhpcy5vZmZzZXQgOiAxO1xuICAgICAgICAgICAgbGV0IHBhZ2luYXRpb25fZW5kID0gKHRoaXMuY3VycmVudF9wYWdlICsgdGhpcy5vZmZzZXQgPCB0aGlzLnRvdGFsX3BhZ2VzKSA/IHRoaXMuY3VycmVudF9wYWdlICsgdGhpcy5vZmZzZXQgOiB0aGlzLnRvdGFsX3BhZ2VzO1xuXG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHBhZ2luYXRpb25fc3RhcnQ7IGkgPD0gcGFnaW5hdGlvbl9lbmQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnaW5hdGlvbl9zdGFydCk7XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFBhZ2UodXJsLCBwYWdlKXtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB1cmw7XG4gICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcmcGFnZT0nICsgcGFnZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnP3BhZ2U9JyArIHBhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICBuYW1lOiBcInBhZ2luYXRpb25cIlxufVxuPC9zY3JpcHQ+XG5cblxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cImVtYWlsX2Zvcm1cIj5cbiAgICAgICAgICAgIDxoMj7QktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1INC/0LDRgNC+0LvRjzwvaDI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWwtaW5wdXRcIj7Qo9C60LDQttC40YLQtSBlbWFpbCwg0YfRgtC+0LHRiyDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LTQvtGB0YLRg9C/INC6INCw0LrQutCw0YPQvdGC0YM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbC1pbnB1dFwiIHYtbW9kZWw9J2VtYWlsJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJpc19mZWVkYmFja192YWxpZCA/IHZhbGlkX2ZlZWRiYWNrX2NsYXNzIDogaW52YWxpZF9mZWVkYmFja19jbGFzc1wiIGNsYXNzPVwiZC1ibG9ja1wiPnt7c3RhdHVzX21lc3NhZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJnZW5lcmF0ZVRva2VuXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1pZj1cImNvZGVfZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInZlcmlmaWNhdGlvbi1jb2RlXCIgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZlcmlmaWNhdGlvbi1jb2RlLWlucHV0XCIgPtCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInZlcmlmaWNhdGlvbi1jb2RlLWlucHV0XCIgdi1tb2RlbD0ncmVzdG9yZV90b2tlbicgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImlzX2ZlZWRiYWNrX3ZhbGlkID8gdmFsaWRfZmVlZGJhY2tfY2xhc3MgOiBpbnZhbGlkX2ZlZWRiYWNrX2NsYXNzXCIgY2xhc3M9XCJkLWJsb2NrXCI+e3tzdGF0dXNfbWVzc2FnZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInZlcmlmeVRva2VuXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgdi1pZj1cInBhc3N3b3JkX2Zvcm1cIj5cblxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmQtaW5wdXRcIj7Qn9Cw0YDQvtC70Yw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiB2LW1vZGVsPSdwYXNzd29yZCcgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e3Bhc3N3b3JkX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmQtY29uZmlybWF0aW9uLWlucHV0XCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkLWNvbmZpcm1hdGlvbi1pbnB1dFwiIHYtbW9kZWw9J3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e3Bhc3N3b3JkX2NvbmZpcm1hdGlvbl9lcnJvcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInNlbmROZXdQYXNzd29yZFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiB2LWlmPVwicGFzc3dvcmRfcmVzdG9yZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy10b3A6IDE1JVwiIGNsYXNzPVwidmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPjxiPnt7c3RhdHVzX21lc3NhZ2V9fTwvYj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHJlc3RvcmVfdG9rZW46ICcnLFxuICAgICAgICAgICAgZW1haWxfZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXR1c19tZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIHZhbGlkX2ZlZWRiYWNrX2NsYXNzOiAndmFsaWQtZmVlZGJhY2snLFxuICAgICAgICAgICAgaW52YWxpZF9mZWVkYmFja19jbGFzczogJ2ludmFsaWQtZmVlZGJhY2snLFxuICAgICAgICAgICAgaXNfZmVlZGJhY2tfdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBwYXNzd29yZF9mb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIGNvZGVfZm9ybTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZF9yZXN0b3JlZDogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBwYXNzd29yZF9lcnJvcjogJycsXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uX2Vycm9yOiAnJ1xuICAgICAgICAgICAgfX0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB2YWxpZGF0ZVBhc3N3b3JkKCl7XG4gICAgICAgICAgICBpZighdGhpcy5wYXNzd29yZCkgdGhpcy5wYXNzd29yZF9lcnJvciA9IFwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCI7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMucGFzc3dvcmQubGVuZ3RoIDwgNikgdGhpcy5wYXNzd29yZF9lcnJvciA9IFwi0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDQvNC10L3QtdC1IDUg0YHQuNC80LLQvtC70L7QslwiO1xuICAgICAgICAgICAgZWxzZSBpZighL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9lcnJvciA9IFwi0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0YbQuNGE0YDRi1wiO1xuICAgICAgICAgICAgfWVsc2UgIHRoaXMucGFzc3dvcmRfZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZighdGhpcy5wYXNzd29yZF9lcnJvciAmJiB0aGlzLnBhc3N3b3JkICE9PSB0aGlzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbil7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9jb25maXJtYXRpb25fZXJyb3IgPSBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiO1xuICAgICAgICAgICAgfWVsc2UgIHRoaXMucGFzc3dvcmRfY29uZmlybWF0aW9uX2Vycm9yID0gXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVUb2tlbigpe1xuICAgICAgICAgICAgaWYoIXRoaXMuZW1haWwpe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfZmVlZGJhY2tfdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c19tZXNzYWdlID0gJ9CS0LLQtdC00LjRgtC1IGVtYWlsLCDQutC+0YLQvtGA0YvQuSDQv9GA0LjQstGP0LfQsNC9INC6INCy0LDRiNC10LzRgyDQsNC60LrQsNGD0L3RgtGDJztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXR1c19tZXNzYWdlID0gJyc7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wb3N0KCcvcGFzc3dvcmQvcmVzdG9yZScsIHtlbWFpbDogdGhpcy5lbWFpbH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsX2Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlX2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzX2ZlZWRiYWNrX3ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfbWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHJlc3BvbnNlLmRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc19mZWVkYmFja192YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdmVyaWZ5VG9rZW4oKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLnJlc3RvcmVfdG9rZW4pe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfZmVlZGJhY2tfdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c19tZXNzYWdlID0gJ9CS0LLQtdC00LjRgtC1INC60L7QtCDQtNC70Y8g0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDQv9Cw0YDQvtC70Y8nO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJlc3RvcmVfdG9rZW46IHRoaXMucmVzdG9yZV90b2tlblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLycgKyB0aGlzLmlkICsgJy5qc29uJztcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzX21lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBhdGNoKHVybCwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZScgOiBcImFwcGxpY2F0aW9uL21lcmdlLXBhdGNoK2pzb25cIn1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb2RlX2Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYXNzd29yZF9mb3JtID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpb2xhdGlvbnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLnZpb2xhdGlvbnM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCB2aW9sYXRpb24gb2YgdmlvbGF0aW9ucyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aW9sYXRpb24ucHJvcGVydHlQYXRoID09ICdwYXNzd29yZCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX21lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzX2ZlZWRiYWNrX3ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGVfZm9ybSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRfZm9ybSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzX2ZlZWRiYWNrX3ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfbWVzc2FnZSA9IHZpb2xhdGlvbi5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNlbmROZXdQYXNzd29yZCgpe1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVBhc3N3b3JkKCk7XG4gICAgICAgICAgICBpZih0aGlzLnBhc3N3b3JkX2Vycm9yIHx8IHRoaXMucGFzc3dvcmRfY29uZmlybWF0aW9uX2Vycm9yKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJlc3RvcmVfdG9rZW46IHRoaXMucmVzdG9yZV90b2tlbixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLycgKyB0aGlzLmlkICsgJy5qc29uJztcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBhdGNoKHVybCwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZScgOiBcImFwcGxpY2F0aW9uL21lcmdlLXBhdGNoK2pzb25cIn1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfbWVzc2FnZSA9IFwi0J/QsNGA0L7Qu9GMINGD0YHQv9C10YjQvdC+INCy0L7RgdGB0YLQsNC90L7QstC70LXQvSFcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9mb3JtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRfcmVzdG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB2aW9sYXRpb25zID0gZXJyb3IucmVzcG9uc2UuZGF0YS52aW9sYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzX2ZlZWRiYWNrX3ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX21lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHZpb2xhdGlvbiBvZiB2aW9sYXRpb25zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfbWVzc2FnZSArPSB2aW9sYXRpb24ubWVzc2FnZSArICc8YnI+JztcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ2luKCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB1cmwgPSBcIi9sb2dpblwiO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbmFtZTogXCJwYXNzd29yZF9yZXN0b3JlX2Zvcm1cIlxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0gOmlkPVwic2lkZSA/ICdzaWRlLXNlYXJjaCcgOiAnc2VhcmNoJ1wiID5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJxdWVyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIG1yLXNtLTIgc2VhcmNoLWZpZWxkXCIgdHlwZT1cInNlYXJjaFwiICBAa2V5ZG93bi5lbnRlci5wcmV2ZW50PVwiZmluZCgpXCIgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6XCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiPlxuICAgIDwvZm9ybT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbmRhdGEoKXtcbiAgICByZXR1cm57XG4gICAgICAgIHF1ZXJ5OiB0aGlzLnZhbHVlXG4gICAgfVxufSxcbnByb3BzOntcbnZhbHVlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcnXG59LFxuc2lkZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2Vcbn1cbn0sXG5tZXRob2RzOntcbiAgICBmaW5kKCl7XG4gICAgICAgIHZhciB1cmwgPSAnJztcbiAgICAgICAgaWYodGhpcy5xdWVyeS5sZW5ndGgpIHVybCA9ICcvYm9va3Mvc2VhcmNoP3F1ZXJ5PScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5xdWVyeSk7XG4gICAgICAgIGVsc2UgdXJsID0gJy9ib29rcyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgIH1cbn0sXG5uYW1lOiAnc2VhcmNoX2ZpZWxkJ1xufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cInNpZ251cF9mb3JtXCIgaWQ9XCJzaWdudXBcIj5cbiAgICAgICAgICAgIDxoMj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMj5cbiAgICAgICAgICAgIDxwPtCX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvRjywg0YfRgtC+0LHRiyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L3A+XG4gICAgICAgICAgICA8Zm9ybT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lLWlucHV0XCIgPtCb0L7Qs9C40L08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiIHYtbW9kZWw9J3VzZXJuYW1lJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQm9C+0LPQuNC9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrIFwiPnt7dXNlcm5hbWVfZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWwtaW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsLWlucHV0XCIgdi1tb2RlbD0nZW1haWwnIHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7ZW1haWxfZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZC1pbnB1dFwiPtCf0LDRgNC+0LvRjDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkLWlucHV0XCIgdi1tb2RlbD0ncGFzc3dvcmQnIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e3Bhc3N3b3JkX2Vycm9yfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmQtY29uZmlybWF0aW9uLWlucHV0XCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmQtY29uZmlybWF0aW9uLWlucHV0XCIgdi1tb2RlbD0ncGFzc3dvcmRfY29uZmlybWF0aW9uJyB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3twYXNzd29yZF9jb25maXJtYXRpb25fZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJ2YWxpZGF0ZUlucHV0QW5kU2VuZENvZGVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwi0KHQvtC30LTQsNGC0Ywg0LDQutC60LDRg9C90YJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwidmVyaWZpY2F0aW9uX2Zvcm1cIiBpZD1cInZlcmlmaWNhdGlvblwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInZlcmlmaWNhdGlvbi1jb2RlXCIgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZlcmlmaWNhdGlvbi1jb2RlLWlucHV0XCIgPtCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInZlcmlmaWNhdGlvbi1jb2RlLWlucHV0XCIgdi1tb2RlbD0ndmVyaWZpY2F0aW9uX2NvZGUnIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJpc19mZWVkYmFja192YWxpZCA/IHZhbGlkX2ZlZWRiYWNrX2NsYXNzIDogaW52YWxpZF9mZWVkYmFja19jbGFzc1wiIGNsYXNzPVwiZC1ibG9ja1wiPnt7dmVyaWZpY2F0aW9uX2NvZGVfc3RhdHVzfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlU3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgZGF0YSgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgIGVtYWlsX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIHVzZXJuYW1lX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbl9lcnJvcjogJycsXG4gICAgICAgICAgICB2ZXJpZmljYXRpb25fY29kZTogJycsXG4gICAgICAgICAgICB2ZXJpZmljYXRpb25fY29kZV9zdGF0dXM6ICcnLFxuICAgICAgICAgICAgc2lnbnVwX2Zvcm06IHRydWUsXG4gICAgICAgICAgICB2YWxpZF9mZWVkYmFja19jbGFzczogJ3ZhbGlkLWZlZWRiYWNrJyxcbiAgICAgICAgICAgIGludmFsaWRfZmVlZGJhY2tfY2xhc3M6ICdpbnZhbGlkLWZlZWRiYWNrJyxcbiAgICAgICAgICAgIGlzX2ZlZWRiYWNrX3ZhbGlkOiB0cnVlXG4gICAgICAgICAgICB9fSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB2ZXJpZmljYXRpb25fZm9ybTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zaWdudXBfZm9ybTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIHZhbGlkYXRlSW5wdXRBbmRTZW5kQ29kZSgpe1xuICAgICAgICAgICAgICBpZighdGhpcy51c2VybmFtZSl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lX2Vycm9yID0gXCLQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9XCI7XG4gICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRW1haWwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYodGhpcy51c2VybmFtZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlcm5hbWVfZXJyb3IgPSBcItCb0L7Qs9C40L0g0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAzINGB0LjQvNCy0L7Qu9CwXCI7XG4gICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRW1haWwoKVxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICcvYXBpL3VzZXJzLmpzb24/dXNlcm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmxlbmd0aCkgdGhpcy51c2VybmFtZV9lcnJvciA9IFwi0JvQvtCz0LjQvSDQt9Cw0L3Rj9GCXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMudXNlcm5hbWVfZXJyb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnZhbGlkYXRlRW1haWwoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRlRW1haWwoKXtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQYXNzd29yZCgpO1xuICAgICAgICAgICAgaWYoIXRoaXMuZW1haWwudHJpbSgpKSB0aGlzLmVtYWlsX2Vycm9yID0gXCLQktCy0LXQtNC40YLQtSBlbWFpbFwiO1xuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvL2VtYWlsIHZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17MiwyNH0pKSQvO1xuICAgICAgICAgICAgICAgIGlmKCFyZS50ZXN0KHRoaXMuZW1haWwpKSB0aGlzLmVtYWlsX2Vycm9yID0gJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDRhNC+0YDQvNCw0YInO1xuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gJy9hcGkvdXNlcnMuanNvbj9lbWFpbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB0aGlzLmVtYWlsX2Vycm9yID0gXCJFbWFpbCDQt9Cw0L3Rj9GCXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtYWlsX2Vycm9yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZVBhc3N3b3JkKCl7XG4gICAgICAgICAgICBpZighdGhpcy5wYXNzd29yZCkgdGhpcy5wYXNzd29yZF9lcnJvciA9IFwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCI7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMucGFzc3dvcmQubGVuZ3RoIDwgNikgdGhpcy5wYXNzd29yZF9lcnJvciA9IFwi0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDQvNC10L3QtdC1IDUg0YHQuNC80LLQvtC70L7QslwiO1xuICAgICAgICAgICAgZWxzZSBpZighL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9lcnJvciA9IFwi0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0YbQuNGE0YDRi1wiO1xuICAgICAgICAgICAgfWVsc2UgIHRoaXMucGFzc3dvcmRfZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZighdGhpcy5wYXNzd29yZF9lcnJvciAmJiB0aGlzLnBhc3N3b3JkICE9PSB0aGlzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbil7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9jb25maXJtYXRpb25fZXJyb3IgPSBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiO1xuICAgICAgICAgICAgfWVsc2UgIHRoaXMucGFzc3dvcmRfY29uZmlybWF0aW9uX2Vycm9yID0gXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVDb2RlKCl7XG4gICAgICAgICAgICBpZih0aGlzLnVzZXJuYW1lX2Vycm9yIHx8IHRoaXMuZW1haWxfZXJyb3IgXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5wYXNzd29yZF9lcnJvciB8fCB0aGlzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbl9lcnJvcikgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwudHJpbSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHVybCA9ICcvdmVyaWZpY2F0aW9uX2NvZGUvZ2VuZXJhdGUnO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cF9mb3JtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZpY2F0aW9uX2NvZGVfc3RhdHVzID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVTdWJtaXQoKXsgICAgXG4gICAgICAgICAgICBpZih0aGlzLnVzZXJuYW1lX2Vycm9yIHx8IHRoaXMuZW1haWxfZXJyb3IgXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5wYXNzd29yZF9lcnJvciB8fCB0aGlzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbl9lcnJvcikgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbC50cmltKCksXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGU6IHRoaXMudmVyaWZpY2F0aW9uX2NvZGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGF4aW9zIFxuICAgICAgICAgICAgICAgIC5wb3N0KCcvYXBpL3VzZXJzJywgZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmxvZ2luKCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgdmlvbGF0aW9uIG9mIGVycm9yLnJlc3BvbnNlLmRhdGEudmlvbGF0aW9ucyl7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IHZpb2xhdGlvbi5wcm9wZXJ0eVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdmlvbGF0aW9uLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgIC8qaWYocHJvcGVydHkgPT09IFwidXNlcm5hbWVcIikgdGhpcy51c2VybmFtZV9lcnJvciA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocHJvcGVydHkgPT09IFwiZW1haWxcIikgdGhpcy5lbWFpbF9lcnJvciA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgIGVsc2UgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvcGVydHkgPT09ICd2ZXJpZmljYXRpb25fY29kZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNfZmVlZGJhY2tfdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbl9jb2RlX3N0YXR1cyA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc19mZWVkYmFja192YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZmljYXRpb25fY29kZV9zdGF0dXMgPSBcItCf0YDQvtC40LfQvtGI0LvQsCDQvdC10L/RgNC10LTQstC40LTQtdC90L3QsNGPINC+0YjQuNCx0LrQsCwg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyDQuCDQv9C+0L/RgNC+0LHRg9C50YLQtSDRgdC90L7QstCwLlwiO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9naW4oKXtcbiAgICAgICAgICAgIGF4aW9zLlxuICAgICAgICAgICAgICAgIHBvc3QoJy9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhbGlkYXRlVXNlcm5hbWUoKXtcbiAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBpZighdGhpcy51c2VybmFtZSkgdGhpcy51c2VybmFtZV9lcnJvciA9ICfQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9JztcbiAgICAgICAgLy8gICAgIGVsc2UgaWYodGhpcy51c2VybmFtZSA8IDMpIHRoaXMudXNlcm5hbWVfZXJyb3IgPSAn0JvQvtCz0LjQvSDQtNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LzQtdC90LXQtSAzINGB0LjQvNCy0L7Qu9C+0LInO1xuICAgICAgICAvLyAgICAgZWxzZXtcbiAgICAgICAgLy8gICAgICAgICB2YXIgdXJsID0gJy9hcGkvdXNlcnMuanNvbj91c2VybmFtZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXNlcm5hbWUpO1xuICAgICAgICAvLyAgICAgICAgIGF4aW9zXG4gICAgICAgIC8vICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAvLyAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lX2Vycm9yID0gKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSA/ICfQm9C+0LPQuNC9INC30LDQvdGP0YInIDogJyc7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG5cbiAgICB9LFxuXG4gICAgbmFtZTogXCJzaWdudXBfZm9ybVwiXG59XG5cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXG5cbjxkaXYgdi1pZj1cImlzX2luaXRpYWxpemVkXCIgY2xhc3M9J3RhYmxlLWNvbnRhaW5lcic+XG5cbiAgXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+0JvQvtCz0LjQvTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPtCh0YLQsNGC0YPRgTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPtCU0LDRgtCwINGA0LXQs9C40YHRgtGA0LDRhtC40Lg8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIHVzZXJzXCIgOmtleT1cInVzZXIuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+IzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cIicvdXNlcnMvJyArIHVzZXIuaWRcIj4gIHt7dXNlci51c2VybmFtZX19PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJnZXRSb2xlQ2xhc3ModXNlci5yb2xlKVwiPnt7Z2V0Um9sZUxhYmVsKHVzZXIucm9sZSl9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge3tmb3JtYXRSZWdEYXRlKHVzZXIucmVnX2RhdGUpfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgXG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgXG5cblxuICAgIDwvZGl2PlxuXG5cblxuPC90ZW1wbGF0ZT5cblxuXG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICBpc19pbml0aWFsaXplZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5pZCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS91c2Vycy5qc29uJztcblxuICAgICAgICBheGlvcy5cbiAgICAgICAgICAgIGdldCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGE7ICBcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgdXNlciBvZiB0aGlzLnVzZXJzKSB1c2VyLnJlZ19kYXRlID0gbmV3IERhdGUodXNlci5yZWdfZGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc19pbml0aWFsaXplZCA9IHRydWU7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICBcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZm9ybWF0UmVnRGF0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICdydS1SVScsIFxuICAgICAgICAgICAgICAgICAgICB7ZGF5OidudW1lcmljJywgbW9udGg6ICdsb25nJywgeWVhcjogJ251bWVyaWMnfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSb2xlQ2xhc3M6IGZ1bmN0aW9uKHJvbGUpe1xuICAgICAgICAgICAgaWYocm9sZSA9PT0gJ1JPTEVfQURNSU4nIHx8IHJvbGUgPT09ICdST0xFX1JPT1QnKSByZXR1cm4gJ3RleHQtZGFuZ2VyJztcbiAgICAgICAgICAgIGVsc2UgaWYocm9sZSA9PT0gJ1JPTEVfTU9ERVJBVE9SJykgcmV0dXJuICd0ZXh0LXByaW1hcnknO1xuICAgICAgICAgICAgZWxzZSBpZihyb2xlID09PSAnUk9MRV9VU0VSJykgcmV0dXJuICd0ZXh0LWRhcmsnO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSb2xlTGFiZWw6IGZ1bmN0aW9uKHJvbGUpe1xuICAgICAgICAgICAgaWYocm9sZSA9PT0gJ1JPTEVfUk9PVCcpIHJldHVybiAn4omn44CU44Kc44Kc44CV4ommJztcbiAgICAgICAgICAgIGlmKHJvbGUgPT09ICdST0xFX0FETUlOJykgcmV0dXJuICfQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCc7XG4gICAgICAgICAgICBlbHNlIGlmKHJvbGUgPT09ICdST0xFX01PREVSQVRPUicpIHJldHVybiAn0LzQvtC00LXRgNCw0YLQvtGAJztcbiAgICAgICAgICAgIGVsc2UgaWYocm9sZSA9PT0gJ1JPTEVfVVNFUicpIHJldHVybiAn0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJztcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG5hbWU6IFwidXNlcl9saXN0XCJcbn1cbjwvc2NyaXB0PiIsIlxuPHRlbXBsYXRlPlxuXG4gICAgPGRpdiB2LWlmPVwiaXNfaW5pdGlhbGl6ZWRcIiBpZD0ncHJvZmlsZS1jYXJkJyBjbGFzcz1cImNhcmQgYmctbGlnaHRcIiBzdHlsZT1cIm1heC13aWR0aDogNjQwcHg7XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCIgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBqdW1ib3Ryb25cIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFpc0VkaXRlZFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMyU7IHRvcDogMyU7XCIgPlxuICAgICAgICAgICAgICAgIDxhIHYtaWY9XCJlbmFibGVfZWRpdGluZ1wiIEBjbGljay5wcmV2ZW50PVwiZW5hYmxlUHJvZmlsZUVkaXRpbmdcIiBocmVmPVwiI1wiPtGA0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxhIHYtaWY9XCJpc0VkaXRlZFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMyU7IHRvcDogMyU7XCIgQGNsaWNrLnByZXZlbnQ9XCJoYW5kbGVQYXRjaFJlcXVlc3RcIiBocmVmPVwiI1wiPtGB0L7RhdGA0LDQvdC40YLRjDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz0ndXNlci5pbWcnIGNsYXNzPVwiY2FyZC1pbWdcIiBhbHQ9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0VkaXRlZCAmJiBlbmFibGVfZWRpdGluZ1wiID5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nX3VwbG9hZCBcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwiL3VzZXJzL2ltZ1wiXG4gICAgICAgICAgICAgICAgICAgIEB1cGxvYWRlZD1cInVzZXIuaW1nID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nX3VwbG9hZD5cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YSB2LWlmPVwiZW5hYmxlX2VkaXRpbmcgJiYgIWlzUGFzc3dvcmRFZGl0ZWQgJiYgIWlzRWRpdGVkXCIgQGNsaWNrLnByZXZlbnQ9XCJlbmFibGVQYXNzd29yZEVkaXRpbmdcIiBocmVmPVwiI1wiPtC40LfQvNC10L3QuNGC0Ywg0L/QsNGA0L7Qu9GMPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiA1JVwiIHYtaWY9XCJpc1Bhc3N3b3JkRWRpdGVkXCIgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiIGlkPVwicGFzc3dvcmQtcmVzZXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY3VycmVudC1wYXNzd29yZC1pbnB1dFwiIHYtbW9kZWw9J2N1cnJlbnRfcGFzc3dvcmQnIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQotC10LrRg9GJ0LjQuSDQv9Cw0YDQvtC70YxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tjdXJyZW50X3Bhc3N3b3JkX2Vycm9yfX08L3NwYW4+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXBhc3N3b3JkLWlucHV0XCIgdi1tb2RlbD0nbmV3X3Bhc3N3b3JkJyB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi0J3QvtCy0YvQuSDQv9Cw0YDQvtC70YxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3tuZXdfcGFzc3dvcmRfZXJyb3J9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJlbmFibGVfZWRpdGluZ1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlUGFzc3dvcmRSZXNldFwiPtGB0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57e3Bhc3N3b3JkX3N0YXR1c319PC9zcGFuPlxuXG5cbiAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtbWQtNSBcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFpc0VkaXRlZFwiIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7dXNlci51c2VybmFtZX19PC9oMz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0VkaXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWUtaW5wdXRcIiB2LW1vZGVsPSd1c2VyLnVzZXJuYW1lJyB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLQm9C+0LPQuNC9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7dXNlcm5hbWVfZXJyb3J9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjYlXCIgaWQ9XCJ1c2VyLXN0YXRpYy1pbmZvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICA6Y2xhc3M9XCJyb2xlQ2xhc3NcIiBjbGFzcz1cImNhcmQtdGV4dFwiPnt7cm9sZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+IHt7J9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSAnICsgZm9ybWF0dGVkUmVnRGF0ZX19PC9zbWFsbD48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG5cbiAgICAgICAgPGJ1dHRvbiB2LWlmPVwidXNlci5yb2xlID09PSAnUk9MRV9BRE1JTicgfHwgdXNlci5yb2xlID09PSAnUk9MRV9ST09UJ1wiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJyZWRpcmVjdFRvKCcvdXNlcm1hbmFnbWVudCcpXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj7Qo9C/0YDQsNCy0LvQtdC90LjQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4PC9idXR0b24+IFxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICA8L2Rpdj5cblxuXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgaW1nX3VwbG9hZCBmcm9tICcuL0ltZ1VwbG9hZC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBjb21wb25lbnRzOiB7aW1nX3VwbG9hZH0sXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGltZzogJycsXG4gICAgICAgICAgICAgICAgcmVnX2RhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgcm9sZTogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW50X3Bhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIG5ld19wYXNzd29yZDogJycsXG4gICAgICAgICAgICBpc0VkaXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Bhc3N3b3JkRWRpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzX2luaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVtYWlsX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIHVzZXJuYW1lX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIGN1cnJlbnRfcGFzc3dvcmRfZXJyb3I6ICcnLFxuICAgICAgICAgICAgbmV3X3Bhc3N3b3JkX2Vycm9yOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkX3N0YXR1czogJydcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlX2VkaXRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmlkID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLycgKyB0aGlzLmlkICsgJy5qc29uJztcblxuICAgICAgICBheGlvcy5cbiAgICAgICAgICAgIGdldCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YTsgIFxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5yZWdfZGF0ZSA9IG5ldyBEYXRlKHRoaXMudXNlci5yZWdfZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzX2luaXRpYWxpemVkID0gdHJ1ZTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgIFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZW5hYmxlUHJvZmlsZUVkaXRpbmcoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRWRpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc3dvcmRFZGl0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkX3N0YXR1cyA9ICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuYWJsZVBhc3N3b3JkRWRpdGluZygpe1xuICAgICAgICAgICAgICAgIHRoaXMubmV3X3Bhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3Bhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdfcGFzc3dvcmRfZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfcGFzc3dvcmRfZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc3dvcmRFZGl0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZF9zdGF0dXMgPSAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdFRvKHBhdGgpe1xuICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0gcGF0aDtcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIHZhbGlkYXRlSW5wdXQoKXtcbiAgICAgICAgICAgICAgICAgdmFyIHVzZXIgPSB0aGlzLnVzZXI7XG5cbiAgICAgICAgICAgICAgICAgaWYoIXVzZXIudXNlcm5hbWUpIHRoaXMudXNlcm5hbWVfZXJyb3IgPSBcItCj0LrQsNC20LjRgtC1INC70L7Qs9C40L1cIlxuICAgICAgICAgICAgICAgICBlbHNlIHRoaXMudXNlcm5hbWVfZXJyb3IgPSBcIlwiO1xuXG5cbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsaWRhdGVQYXNzd29yZElucHV0KCl7XG4gICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgIGlmKCF0aGlzLmN1cnJlbnRfcGFzc3dvcmQpIHRoaXMuY3VycmVudF9wYXNzd29yZF9lcnJvciA9IFwi0KPQutCw0LbQuNGC0LUg0YLQtdC60YPRidC40Lkg0L/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmN1cnJlbnRfcGFzc3dvcmRfZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgIGlmKCF0aGlzLm5ld19wYXNzd29yZCkgdGhpcy5uZXdfcGFzc3dvcmRfZXJyb3IgPSBcItCj0LrQsNC20LjRgtC1INC90L7QstGL0Lkg0L/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLm5ld19wYXNzd29yZF9lcnJvciA9IFwiXCI7XG5cblxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaGFuZGxlUGFzc3dvcmRSZXNldCgpe1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQYXNzd29yZElucHV0KCk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm5ld19wYXNzd29yZF9lcnJvciB8fCB0aGlzLmN1cnJlbnRfcGFzc3dvcmRfZXJyb3IgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6IHRoaXMuY3VycmVudF9wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubmV3X3Bhc3N3b3JkXG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLycgKyB0aGlzLnVzZXIuaWQ7XG5cbiAgICAgICAgICAgICAgICBheGlvcy5cbiAgICAgICAgICAgICAgICAgICAgcGF0Y2godXJsLCBkYXRhLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL21lcmdlLXBhdGNoK2pzb25cIn19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc3dvcmRFZGl0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRfc3RhdHVzID0gXCLQn9Cw0YDQvtC70Ywg0YPRgdC/0LXRiNC90L4g0LjQt9C80LXQvdGR0L1cIjtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpb2xhdGlvbnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLnZpb2xhdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHZpb2xhdGlvbiBvZiB2aW9sYXRpb25zKXtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2aW9sYXRpb24ucHJvcGVydHlQYXRoID09PSAncGFzc3dvcmQnKSB0aGlzLm5ld19wYXNzd29yZF9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih2aW9sYXRpb24ucHJvcGVydHlQYXRoID09PSAnY3VycmVudF9wYXNzd29yZCcpIHRoaXMuY3VycmVudF9wYXNzd29yZF9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGhhbmRsZVBhdGNoUmVxdWVzdCgpe1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VybmFtZV9lcnJvcikgcmV0dXJuO1xuICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB0aGlzLnVzZXIuaW1nXG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLycgKyB0aGlzLnVzZXIuaWQ7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBhdGNoKHVybCwgZGF0YSwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9tZXJnZS1wYXRjaCtqc29uXCJ9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aW9sYXRpb25zID0gZXJyb3IucmVzcG9uc2UuZGF0YS52aW9sYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCB2aW9sYXRpb24gb2YgdmlvbGF0aW9ucyl7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmlvbGF0aW9uLnByb3BlcnR5UGF0aCA9PT0gJ3VzZXJuYW1lJykgdGhpcy51c2VybmFtZV9lcnJvciA9IHZpb2xhdGlvbi5tZXNzYWdlOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOntcbiAgICAgICAgZm9ybWF0dGVkUmVnRGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNfaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLnJlZ19kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgJ3J1LVJVJywgXG4gICAgICAgICAgICAgICAgICAgIHtkYXk6J251bWVyaWMnLCBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYyd9XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICByb2xlQ2xhc3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnVzZXIucm9sZTtcbiAgICAgICAgICAgIGlmKHJvbGUgPT09ICdST0xFX0FETUlOJyB8fCByb2xlID09PSAnUk9MRV9ST09UJykgcmV0dXJuICd0ZXh0LWRhbmdlcic7XG4gICAgICAgICAgICBlbHNlIGlmKHJvbGUgPT09ICdST0xFX01PREVSQVRPUicpIHJldHVybiAndGV4dC1wcmltYXJ5JztcbiAgICAgICAgICAgIGVsc2UgaWYocm9sZSA9PT0gJ1JPTEVfVVNFUicpIHJldHVybiAndGV4dC1kYXJrJztcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZUxhYmVsOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnVzZXIucm9sZTtcbiAgICAgICAgICAgIGlmKHJvbGUgPT09ICdST0xFX1JPT1QnKSByZXR1cm4gJ+KJp+OAlOOCnOOCnOOAleKJpic7XG4gICAgICAgICAgICBpZihyb2xlID09PSAnUk9MRV9BRE1JTicpIHJldHVybiAn0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YAnO1xuICAgICAgICAgICAgZWxzZSBpZihyb2xlID09PSAnUk9MRV9NT0RFUkFUT1InKSByZXR1cm4gJ9C80L7QtNC10YDQsNGC0L7RgCc7XG4gICAgICAgICAgICBlbHNlIGlmKHJvbGUgPT09ICdST0xFX1VTRVInKSByZXR1cm4gJ9C/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5hbWU6IFwidXNlcl9wcm9maWxlXCJcbn1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBiZy1saWdodCBtYi0zXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNjQwcHhcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBuby1ndXR0ZXJzXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgYm9vay1pbWctY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5hdXRob3IuaW1nLCBhbHQ6IFwiLi4uXCIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLThcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5mdWxsbmFtZSkpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRTaG9ydERlc2NyaXB0aW9uKCkpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWxnLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJidXR0b24tZGV0YWlsc1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUbyhcIi9hdXRob3JzL1wiICsgX3ZtLmF1dGhvci5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQn9C+0LTRgNC+0LHQvdC10LVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihcItCd0L7QstGL0Lkg0LDQstGC0L7RgFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJzdXJuYW1lLWlucHV0XCIgfSB9LCBbX3ZtLl92KFwi0KTQsNC80LjQu9C40Y9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN1cm5hbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3VybmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJzdXJuYW1lLWlucHV0XCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLQpNCw0LzQuNC70LjRj1wiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdXJuYW1lIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLnN1cm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1cm5hbWVfZXJyb3IpKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImZpcnN0LW5hbWUtaW5wdXRcIiB9IH0sIFtfdm0uX3YoXCLQmNC80Y9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJmaXJzdC1uYW1lLWlucHV0XCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLQmNC80Y9cIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmlyc3RfbmFtZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5maXJzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5maXJzdF9uYW1lX2Vycm9yKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXRyb255bWljLWlucHV0XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi0J7RgtGH0LXRgdGC0LLQvlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhdHJvbnltaWMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF0cm9ueW1pY1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwicGF0cm9ueW1pYy1pbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQntGC0YfQtdGB0YLQstC+XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGF0cm9ueW1pYyB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5wYXRyb255bWljID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYXRyb255bWljX2Vycm9yKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJkZXNjcmlwdGlvbi1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcItCe0L/QuNGB0LDQvdC40LVcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm93czogXCIzXCIsXG4gICAgICAgICAgICBpZDogXCJkZXNjcmlwdGlvbi1pbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5kZXNjcmlwdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVzY3JpcHRpb25fZXJyb3IpKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImltZ191cGxvYWRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdXJsOiBcIi9hdXRob3JzL2ltZ1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB1cGxvYWRlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmltZyA9ICRldmVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogXCLQlNC+0LHQsNCy0LjRgtGMXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmlzSGFuZGxpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlU3VibWl0KCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5wYWdpbmF0aW9uXG4gICAgICAgID8gX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHVybDogXCIvYXV0aG9yc1wiLFxuICAgICAgICAgICAgICB0b3RhbF9wYWdlczogX3ZtLnRvdGFsX3BhZ2VzLFxuICAgICAgICAgICAgICBjdXJyZW50X3BhZ2U6IF92bS5wYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmF1dGhvcnMsIGZ1bmN0aW9uKGF1dGhvcikge1xuICAgICAgICByZXR1cm4gX2MoXCJhdXRob3JfY2FyZFwiLCB7IGtleTogYXV0aG9yLmlkLCBhdHRyczogeyBhdXRob3I6IGF1dGhvciB9IH0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFnaW5hdGlvblxuICAgICAgICA/IF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB1cmw6IFwiL2F1dGhvcnNcIixcbiAgICAgICAgICAgICAgdG90YWxfcGFnZXM6IF92bS50b3RhbF9wYWdlcyxcbiAgICAgICAgICAgICAgY3VycmVudF9wYWdlOiBfdm0ucGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBiZy1saWdodCBjb2wtc20tNlwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjc0MHB4XCIgfSxcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYm9vay1jYXJkXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbm8tZ3V0dGVyc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IHB0LTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmF1dGhvci5pbWcsIGFsdDogXCIuLi5cIiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy10b3BcIjogXCIxMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nX3VwbG9hZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdXJsOiBcIi9hdXRob3JzL2ltZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhvci5pbWcgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhvci5zdXJuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhvci5maXJzdF9uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhvci5wYXRyb255bWljXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImVkaXQtZm9ybVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwic3VybmFtZS1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQpNCw0LzQuNC70LjRj1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXV0aG9yLnN1cm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImF1dGhvci5zdXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInN1cm5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQpNCw0LzQuNC70LjRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uYXV0aG9yLnN1cm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3VybmFtZV9lcnJvcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJmaXJzdC1uYW1lLWlucHV0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCY0LzRj1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXV0aG9yLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImF1dGhvci5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZpcnN0LW5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQmNC80Y9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmF1dGhvci5maXJzdF9uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpcnN0X25hbWVfZXJyb3IpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicGF0cm9ueW1pYy1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQntGC0YfQtdGB0YLQstC+XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hdXRob3IucGF0cm9ueW1pYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYXV0aG9yLnBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGF0cm9ueW1pYy1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCe0YLRh9C10YHRgtCy0L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmF1dGhvci5wYXRyb255bWljIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0cm9ueW1pY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnBhdHJvbnltaWNfZXJyb3IpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiZGVzY3JpcHRpb24taW5wdXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXV0aG9yLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhdXRob3IuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVzY3JpcHRpb24taW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmF1dGhvci5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGVzY3JpcHRpb25fZXJyb3IpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmF1dGhvci5kZXNjcmlwdGlvbikpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZW5hYmxlX2VkaXRpbmdcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXV0aG9yLXByb2ZpbGUtZWRpdC1wYW5lbFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS01IFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tN1wiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBwYWRkaW5nOiBfdm0uaXNFZGl0ZWQgPyBcIjAgMCAwIDE1JVwiIDogXCIwIDAgMCA4JVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLTdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNiBjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlRGVsZXRlUmVxdWVzdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVQYXRjaFJlcXVlc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5ib29rcy5sZW5ndGhcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNzQwcHhcIiB9LCBhdHRyczogeyBpZDogXCJib29rLWNhcmRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IG5vLWd1dHRlcnNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwi0JrQvdC40LPQuFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJib29rX2xpc3RcIiwgeyBhdHRyczogeyBjb2xsZWN0aW9uOiBfdm0uYm9va3MgfSB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uYm9va1xuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgYmctbGlnaHQgbWItM1wiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI2NDBweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG5vLWd1dHRlcnNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgYm9vay1pbWctY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5ib29rLmltZywgYWx0OiBcIi4uLlwiIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmJvb2sudGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYm9vay5hdXRob3JzLCBmdW5jdGlvbihhdXRob3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYXV0aG9yLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYXV0aG9ycy9cIiArIGF1dGhvci5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2V0SW5pdGlhbHMoYXV0aG9yKSkgKyBcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFNob3J0RGVzY3JpcHRpb24oKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGctcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJidXR0b24tZGV0YWlsc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG8oXCIvYm9va3MvXCIgKyBfdm0uYm9vay5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J/QvtC00YDQvtCx0L3QtdC1XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwi0J3QvtCy0LDRjyDQutC90LjQs9CwXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRpdGxlLWlucHV0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtVwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJ0aXRsZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGl0bGUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0udGl0bGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlX2Vycm9yKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJkZXNjcmlwdGlvbi1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCe0L/QuNGB0LDQvdC40LVcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93czogXCI2XCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJkZXNjcmlwdGlvbi1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5kZXNjcmlwdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVzY3JpcHRpb25fZXJyb3IpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ191cGxvYWRcIiwge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbWcgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYm9vay1mb3JtLWdlbnJlcy1hbmQtYXV0aG9ycy1zZWxlY3RcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImdlbnJlc19hbmRfYXV0aG9yc19zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBnZW5yZXNfZXJyb3I6IF92bS5nZW5yZXNfZXJyb3IsXG4gICAgICAgICAgICAgICAgICBhdXRob3JzX2Vycm9yOiBfdm0uYXV0aG9yc19lcnJvclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwiZ2VucmVzLWNoYW5nZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5nZW5yZXMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF1dGhvcnMtY2hhbmdlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhvcnMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yXCIsIHN0YXRpY1N0eWxlOiB7IHBhZGRpbmc6IFwiNSUgMCAwIDBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctdGh1bWJuYWlsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaW1nIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLCBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjMlIDAgMCAwXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwi0JTQvtCx0LDQstC40YLRjFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uaXNIYW5kbGluZ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZVN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5jb2xsZWN0aW9uX2lzX2VtcHR5XG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L5cIildKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5ib29rcy5sZW5ndGhcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0ucGFnaW5hdGlvblxuICAgICAgICAgICAgICA/IF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IF92bS5wYWdpbmF0aW9uX3VybCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxfcGFnZXM6IF92bS50b3RhbF9wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wYWdlOiBfdm0ucGFnZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5ib29rcywgZnVuY3Rpb24oYm9vaykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJib29rX2NhcmRcIiwgeyBrZXk6IGJvb2suaWQsIGF0dHJzOiB7IGJvb2s6IGJvb2sgfSB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnBhZ2luYXRpb25cbiAgICAgICAgICAgICAgPyBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBfdm0ucGFnaW5hdGlvbl91cmwsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX3BhZ2VzOiBfdm0udG90YWxfcGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogX3ZtLnBhZ2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc19pbml0aWFsaXplZFxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLWxpZ2h0XCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI3NDBweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYm9vay1jYXJkXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbm8tZ3V0dGVyc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgcHQtNFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uYm9vay5pbWcsIGFsdDogXCIuLi5cIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy10b3BcIjogXCIxMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ191cGxvYWRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib29rLmltZyA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5ib29rLnRpdGxlKSldKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYm9vay50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYm9vay50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5ib29rLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmJvb2ssIFwidGl0bGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGVfZXJyb3IpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcImJvb2stcHJvZmlsZS1hdXRob3JzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ib29rLmF1dGhvcnMsIGZ1bmN0aW9uKGF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYXV0aG9yLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2F1dGhvcnMvXCIgKyBhdXRob3IuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRJbml0aWFscyhhdXRob3IpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBpZDogXCJib29rLXByb2ZpbGUtZ2VucmVzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ib29rLmdlbnJlcywgZnVuY3Rpb24oZ2VucmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGdlbnJlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL2dlbnJlcy9cIiArIGdlbnJlLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGdlbnJlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImdlbnJlc19hbmRfYXV0aG9yc19zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VucmVzX2Vycm9yOiBfdm0uZ2VucmVzX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzX2Vycm9yOiBfdm0uYXV0aG9yc19lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VucmVzOiBfdm0uYm9vay5nZW5yZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM6IF92bS5ib29rLmF1dGhvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImdlbnJlcy1jaGFuZ2VkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib29rLmdlbnJlcyA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dGhvcnMtY2hhbmdlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9vay5hdXRob3JzID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYm9vay5kZXNjcmlwdGlvbikpXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJvb2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJib29rLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBjYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogX3ZtLnJvd3NDb3VudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5ib29rLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlc2NyaXB0aW9uX2Vycm9yKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZW5hYmxlX2VkaXRpbmdcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJib29rLXByb2ZpbGUtZWRpdC1wYW5lbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNSBcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS03XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IF92bS5pc0VkaXRlZCA/IFwiMCAwIDAgMTUlXCIgOiBcIjAgMCAwIDglXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLTdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRWRpdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZURlbGV0ZVJlcXVlc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVQYXRjaFJlcXVlc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgW19jKFwic21hbGxcIiwgW192bS5fdihcItCQ0LLRgtC+0YDRizpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCBbX2MoXCJzbWFsbFwiLCBbX3ZtLl92KFwi0JbQsNC90YDRizpcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLWxpZ2h0IG1iLTNcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI2NDBweFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG5vLWd1dHRlcnNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBib29rLWltZy1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdlbnJlLmltZywgYWx0OiBcIi4uLlwiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2VucmUubmFtZSkpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRTaG9ydERlc2NyaXB0aW9uKCkpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWxnLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJidXR0b24tZGV0YWlsc1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUbyhcIi9nZW5yZXMvXCIgKyBfdm0uZ2VucmUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J/QvtC00YDQvtCx0L3QtdC1XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLQndC+0LLRi9C5INC20LDQvdGAXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWUtaW5wdXRcIiB9IH0sIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmFtZS1pbnB1dFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0J3QsNC30LLQsNC90LjQtVwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5hbWVfZXJyb3IpKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImRlc2NyaXB0aW9uLWlucHV0XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi0J7Qv9C40YHQsNC90LjQtVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb3dzOiBcIjhcIixcbiAgICAgICAgICAgIGlkOiBcImRlc2NyaXB0aW9uLWlucHV0XCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLmRlc2NyaXB0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZXNjcmlwdGlvbl9lcnJvcikpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogXCLQlNC+0LHQsNCy0LjRgtGMXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmlzSGFuZGxpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlU3VibWl0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5wYWdpbmF0aW9uXG4gICAgICAgID8gX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHVybDogXCIvZ2VucmVzXCIsXG4gICAgICAgICAgICAgIHRvdGFsX3BhZ2VzOiBfdm0udG90YWxfcGFnZXMsXG4gICAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogX3ZtLnBhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZ2VucmVzLCBmdW5jdGlvbihnZW5yZSkge1xuICAgICAgICByZXR1cm4gX2MoXCJnZW5yZV9jYXJkXCIsIHsga2V5OiBnZW5yZS5pZCwgYXR0cnM6IHsgZ2VucmU6IGdlbnJlIH0gfSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYWdpbmF0aW9uXG4gICAgICAgID8gX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHVybDogXCIvZ2VucmVzXCIsXG4gICAgICAgICAgICAgIHRvdGFsX3BhZ2VzOiBfdm0udG90YWxfcGFnZXMsXG4gICAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogX3ZtLnBhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc19pbml0aWFsaXplZFxuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgYmctbGlnaHQgY29sLXNtLTZcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNzQwcHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYm9vay1jYXJkXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbm8tZ3V0dGVyc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBwdC00XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZW5yZS5pbWcsIGFsdDogXCIuLi5cIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2VucmUubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmdlbnJlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImdlbnJlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZ2VucmUubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5nZW5yZSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5hbWVfZXJyb3IpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZW5yZS5kZXNjcmlwdGlvbikpXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmdlbnJlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZ2VucmUuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBfdm0ucm93c0NvdW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmdlbnJlLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2VucmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZXNjcmlwdGlvbl9lcnJvcikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZW5hYmxlX2VkaXRpbmdcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImdlbnJlLXByb2ZpbGUtZWRpdC1wYW5lbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTUgXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IF92bS5pc0VkaXRlZCA/IFwiMCAwIDAgMTUlXCIgOiBcIjAgMCAwIDglXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02IGNvbC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZURlbGV0ZVJlcXVlc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVQYXRjaFJlcXVlc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNzQwcHhcIiB9LCBhdHRyczogeyBpZDogXCJib29rLWNhcmRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IG5vLWd1dHRlcnNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmdlbnJlLmJvb2tzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImJvb2tfbGlzdFwiLCB7IGF0dHJzOiB7IGNvbGxlY3Rpb246IF92bS5nZW5yZS5ib29rcyB9IH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tNlwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctdG9wXCI6IFwiNyVcIiB9LFxuICAgICAgICBhdHRyczogeyBpZDogXCJhdXRob3JzXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtZGFyayBkcm9wZG93bi10b2dnbGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDQkNCy0YLQvtGA0YtcXG4gICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1sZWZ0XCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LWhlaWdodFwiOiBcIjI1MHB4XCIsIFwib3ZlcmZsb3cteVwiOiBcInNjcm9sbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbSBkaXNhYmxlZFwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcItCS0YvQsdC10YDQuNGC0LUg0LDQstGC0L7RgNCwXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hdXRob3JzX2FsbCwgZnVuY3Rpb24oYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYXV0aG9yLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRBdXRob3JUb1NlbGVjdGVkKGF1dGhvcilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0SW5pdGlhbHMoYXV0aG9yKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5hdXRob3JzX3NlbGVjdGVkLCBmdW5jdGlvbihhdXRob3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGF1dGhvci5pZCxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjAgMSUgMCAxJVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5nZXRJbml0aWFscyhhdXRob3IpKSArIFwiICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUF1dGhvckZyb21TZWxlY3RlZChhdXRob3IpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIiB4IFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdXRob3JzX2Vycm9yKSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tNlwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctdG9wXCI6IFwiNyVcIiB9LFxuICAgICAgICBhdHRyczogeyBpZDogXCJnZW5yZXNcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1kYXJrIGRyb3Bkb3duLXRvZ2dsZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0JbQsNC90YDRi1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtbGVmdFwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC1oZWlnaHRcIjogXCIyNTBweFwiLCBcIm92ZXJmbG93LXlcIjogXCJzY3JvbGxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW0gZGlzYWJsZWRcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQktGL0LHQtdGA0LjRgtC1INC20LDQvdGAXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZW5yZXNfYWxsLCBmdW5jdGlvbihnZW5yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGdlbnJlLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRHZW5yZVRvU2VsZWN0ZWQoZ2VucmUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhnZW5yZS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIF92bS5fbChfdm0uZ2VucmVzX3NlbGVjdGVkLCBmdW5jdGlvbihnZW5yZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogZ2VucmUuaWQsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDElIDAgMSVcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhnZW5yZS5uYW1lKSArIFwiICBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUdlbnJlRnJvbVNlbGVjdGVkKGdlbnJlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgeCBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2VucmVzX2Vycm9yKSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGVcIiwgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjIlIDAgNCUgMFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtaW5wdXRcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UveC1wbmcsaW1hZ2UvanBlZ1wiLFxuICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgIGlkOiBcImN1c3RvbUZpbGVMYW5nXCIsXG4gICAgICAgICAgbGFuZzogXCJlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnVwbG9hZEltZyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWxhYmVsXCIsIGF0dHJzOiB7IGZvcjogXCJjdXN0b21GaWxlTGFuZ1wiIH0gfSxcbiAgICAgICAgW192bS5fdihcItCS0YvQsdC10YDQuNGC0LUg0YTQvtGC0L5cIildXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwi0JLRhdC+0LRcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9GPLCDRh9GC0L7QsdGLINCy0L7QudGC0Lgg0L3QsCDRgdCw0LnRglwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJlbWFpbC1pbnB1dFwiIH0gfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJlbWFpbC1pbnB1dFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW1haWxcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtYWlsX2Vycm9yKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXNzd29yZC1pbnB1dFwiIH0gfSwgW192bS5fdihcItCf0LDRgNC+0LvRjFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcInBhc3N3b3JkLWlucHV0XCIsXG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQn9Cw0YDQvtC70YxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFzc3dvcmRfZXJyb3IpKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCLQktGF0L7QtFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS52YWxpZGF0ZUlucHV0QW5kU3VibWl0KCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJhXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1sZWZ0XCI6IFwiNSVcIiB9LFxuICAgICAgICBhdHRyczogeyBocmVmOiBcIi9wYXNzd29yZC9yZXN0b3JlXCIgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCS0L7RgdGB0YLQsNC90L7QstC70LXQvdC40LUg0L/QsNGA0L7Qu9GPXCIpXSldXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnRvdGFsX3BhZ2VzID4gMVxuICAgID8gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJwYWdpbmF0aW9uXCIgfSB9LCBbXG4gICAgICAgIF9jKFwibmF2XCIsIHsgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJwYWdlLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmFkZFBhZ2UoX3ZtLnVybCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiUHJldmlvdXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKrXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIlByZXZpb3VzXCIpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhZ2luYXRpb25fcmFuZ2UoKSwgZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPT0gX3ZtLmN1cnJlbnRfcGFnZSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicGFnZS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uYWRkUGFnZShfdm0udXJsLCBwYWdlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwYWdlKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnZS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5hZGRQYWdlKF92bS51cmwsIF92bS50b3RhbF9wYWdlcyksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiUHJldmlvdXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsK7XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIlByZXZpb3VzXCIpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5lbWFpbF9mb3JtXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLQktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1INC/0LDRgNC+0LvRj1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJlbWFpbC1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCj0LrQsNC20LjRgtC1IGVtYWlsLCDRh9GC0L7QsdGLINCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQtNC+0YHRgtGD0L8g0Log0LDQutC60LDRg9C90YLRg1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJlbWFpbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uaXNfZmVlZGJhY2tfdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0udmFsaWRfZmVlZGJhY2tfY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uaW52YWxpZF9mZWVkYmFja19jbGFzc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnN0YXR1c19tZXNzYWdlKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdlbmVyYXRlVG9rZW4oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uY29kZV9mb3JtXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLCBhdHRyczogeyBpZDogXCJ2ZXJpZmljYXRpb24tY29kZVwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidmVyaWZpY2F0aW9uLWNvZGUtaW5wdXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcItCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRj1wiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXN0b3JlX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVzdG9yZV90b2tlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZlcmlmaWNhdGlvbi1jb2RlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVzdG9yZV90b2tlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN0b3JlX3Rva2VuID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uaXNfZmVlZGJhY2tfdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS52YWxpZF9mZWVkYmFja19jbGFzc1xuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmludmFsaWRfZmVlZGJhY2tfY2xhc3NcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3RhdHVzX21lc3NhZ2UpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCLQntGC0L/RgNCw0LLQuNGC0YxcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmVyaWZ5VG9rZW4oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucGFzc3dvcmRfZm9ybVxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXNzd29yZC1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCf0LDRgNC+0LvRjFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwYXNzd29yZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhc3N3b3JkX2Vycm9yKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXNzd29yZC1jb25maXJtYXRpb24taW5wdXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y9cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwYXNzd29yZC1jb25maXJtYXRpb24taW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCf0LDRgNC+0LvRjFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZF9jb25maXJtYXRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbl9lcnJvcikpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcItCe0YLQv9GA0LDQstC40YLRjFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZW5kTmV3UGFzc3dvcmQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucGFzc3dvcmRfcmVzdG9yZWRcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjE1JVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zdGF0dXNfbWVzc2FnZSkpXSldXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJmb3JtXCIsIHsgYXR0cnM6IHsgaWQ6IF92bS5zaWRlID8gXCJzaWRlLXNlYXJjaFwiIDogXCJzZWFyY2hcIiB9IH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnF1ZXJ5LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicXVlcnlcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIG1yLXNtLTIgc2VhcmNoLWZpZWxkXCIsXG4gICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCLQn9C+0LjRgdC6XCIsIFwiYXJpYS1sYWJlbFwiOiBcIlNlYXJjaFwiIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnF1ZXJ5IH0sXG4gICAgICBvbjoge1xuICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHJldHVybiBfdm0uZmluZCgpXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0ucXVlcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5zaWdudXBfZm9ybVxuICAgICAgPyBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNpZ251cFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItCg0LXQs9C40YHRgtGA0LDRhtC40Y9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9GPLCDRh9GC0L7QsdGLINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ1c2VybmFtZS1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCb0L7Qs9C40L1cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwidXNlcm5hbWUtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JvQvtCz0LjQvVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnVzZXJuYW1lIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXJuYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2sgZC1ibG9jayBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlcm5hbWVfZXJyb3IpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJlbWFpbC1pbnB1dFwiIH0gfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1haWwtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtYWlsX2Vycm9yKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXNzd29yZC1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcItCf0LDRgNC+0LvRjFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwYXNzd29yZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhc3N3b3JkX2Vycm9yKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJwYXNzd29yZC1jb25maXJtYXRpb24taW5wdXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y9cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwYXNzd29yZC1jb25maXJtYXRpb24taW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCf0LDRgNC+0LvRjFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZF9jb25maXJtYXRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbl9lcnJvcikpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcItCh0L7Qt9C00LDRgtGMINCw0LrQutCw0YPQvdGCXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkYXRlSW5wdXRBbmRTZW5kQ29kZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS52ZXJpZmljYXRpb25fZm9ybVxuICAgICAgPyBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInZlcmlmaWNhdGlvblwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiZm9ybVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsIGF0dHJzOiB7IGlkOiBcInZlcmlmaWNhdGlvbi1jb2RlXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ2ZXJpZmljYXRpb24tY29kZS1pbnB1dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0JrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZlcmlmaWNhdGlvbl9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmVyaWZpY2F0aW9uX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2ZXJpZmljYXRpb24tY29kZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZlcmlmaWNhdGlvbl9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcmlmaWNhdGlvbl9jb2RlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uaXNfZmVlZGJhY2tfdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS52YWxpZF9mZWVkYmFja19jbGFzc1xuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmludmFsaWRfZmVlZGJhY2tfY2xhc3NcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udmVyaWZpY2F0aW9uX2NvZGVfc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZVN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmlzX2luaXRpYWxpemVkXG4gICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdXNlci5pZCB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvdXNlcnMvXCIgKyB1c2VyLmlkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgIFwiICsgX3ZtLl9zKHVzZXIudXNlcm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBjbGFzczogX3ZtLmdldFJvbGVDbGFzcyh1c2VyLnJvbGUpIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFJvbGVMYWJlbCh1c2VyLnJvbGUpKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0UmVnRGF0ZSh1c2VyLnJlZ19kYXRlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGVhZC1saWdodFwiIH0sIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwi0JvQvtCz0LjQvVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwi0KHRgtCw0YLRg9GBXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCLQlNCw0YLQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc19pbml0aWFsaXplZFxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLWxpZ2h0XCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI2NDBweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicHJvZmlsZS1jYXJkXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgbm8tZ3V0dGVycyBqdW1ib3Ryb25cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmlzRWRpdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIzJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVuYWJsZV9lZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVuYWJsZVByb2ZpbGVFZGl0aW5nKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItGA0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIzJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlUGF0Y2hSZXF1ZXN0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLRgdC+0YXRgNCw0L3QuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0udXNlci5pbWcsIGFsdDogXCIuLi5cIiB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWQgJiYgX3ZtLmVuYWJsZV9lZGl0aW5nXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdfdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdXJsOiBcIi91c2Vycy9pbWdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmltZyA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lbmFibGVfZWRpdGluZyAmJiAhX3ZtLmlzUGFzc3dvcmRFZGl0ZWQgJiYgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbmFibGVQYXNzd29yZEVkaXRpbmcoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0LjQt9C80LXQvdC40YLRjCDQv9Cw0YDQvtC70YxcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaXNQYXNzd29yZEVkaXRlZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI1JVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXNzd29yZC1yZXNldFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRfcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY3VycmVudC1wYXNzd29yZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQotC10LrRg9GJ0LjQuSDQv9Cw0YDQvtC70YxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmN1cnJlbnRfcGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudF9wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudF9wYXNzd29yZF9lcnJvcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdfcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld19wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJuZXctcGFzc3dvcmQtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0J3QvtCy0YvQuSDQv9Cw0YDQvtC70YxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld19wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdfcGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm5ld19wYXNzd29yZF9lcnJvcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW5hYmxlX2VkaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZVBhc3N3b3JkUmVzZXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLRgdC+0YXRgNCw0L3QuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhc3N3b3JkX3N0YXR1cykpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTUgXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgIV92bS5pc0VkaXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci51c2VybmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzZXJuYW1lLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JvQvtCz0LjQvVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udXNlci51c2VybmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnVzZXJuYW1lX2Vycm9yKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjI2JVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXNlci1zdGF0aWMtaW5mb1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiLCBjbGFzczogX3ZtLnJvbGVDbGFzcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJvbGVMYWJlbCkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHQgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXCLQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0gXCIgKyBfdm0uZm9ybWF0dGVkUmVnRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXIucm9sZSA9PT0gXCJST0xFX0FETUlOXCIgfHwgX3ZtLnVzZXIucm9sZSA9PT0gXCJST0xFX1JPT1RcIlxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUbyhcIi91c2VybWFuYWdtZW50XCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C/0YDQsNCy0LvQtdC90LjQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvNC4XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==