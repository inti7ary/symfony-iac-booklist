/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

import Vue from 'vue';
import login_form from './components/LoginForm.vue';
import signup_form from './components/SignUpForm.vue';
import password_restore_form from './components/PasswordRestoreForm.vue';
import book_list from './components/BookList.vue';
import author_list from './components/AuthorList.vue';
import genre_list from './components/GenreList.vue';
import genre_form from './components/GenreForm.vue';
import author_form from './components/AuthorForm.vue';
import book_form from './components/BookForm.vue';
import book_profile from './components/BookProfile.vue';
import genre_profile from './components/GenreProfile.vue';
import search_field from './components/SearchField.vue';
import user_profile from './components/UserProfile.vue';
import author_profile from './components/AuthorProfile.vue';
import user_list from './components/UserList.vue';

new Vue({

    el: '#app',
    components: {login_form, signup_form, password_restore_form,
          book_list, author_list, genre_list, genre_form, author_form, book_form,
          book_profile, genre_profile, user_profile, author_profile, user_list}
});

new Vue({
    el: '#header',
    components: {search_field}
});

new Vue({
    el: '#search-box',
    components: {search_field, login_form}
});


// import Vue from 'vue';
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
