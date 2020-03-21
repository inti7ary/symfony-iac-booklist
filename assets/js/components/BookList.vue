<template>

    <div>
        <div v-if="collection_is_empty" class="alert alert-danger">
            <span>Ничего не найдено</span>
        </div>

        <div v-if="books.length">
            
            <pagination v-if="pagination" :url="pagination_url" :total_pages="total_pages" :current_page="page"></pagination>

            <book_card  :book="book" v-for="book in books" :key="book.id"></book_card>

            <pagination v-if="pagination" :url="pagination_url" :total_pages="total_pages" :current_page="page"></pagination>
            
        </div>
    </div>

</template>

<script>

import book_card from './BookCard.vue'
import pagination from './Pagination.vue';

import axios from 'axios';

export default{
    components: {
		book_card, pagination
	},
    data: function(){
        return {
            books: [],
            total_pages: 0,
            collection_is_empty: false,
            pagination_url: '/books'
            }},

    props: {
         page: {
             type: Number,
             default: 1
         },
         pagination: {
             type: Boolean,
             default: false
         },
        collection: {
            type: Array,
            default: () => []
        }, 
        search_query: {
            type: String,
            default: ''
        }
    },
    created: function(){

        
        if(this.collection.length){
            this.books =  this.collection;

        }else if(this.search_query.length){
            var url = '/api/books/search?query=' + this.search_query + '&page=' + this.page;
            console.log(url);
            axios
                .get(url)
                .then(response => {
                    this.books = response.data['hydra:member'];
                    this.total_pages = 0//Math.ceil(response.data['hydra:totalItems'] / 10);
                    this.pagination_url = '/books/search?query=' + this.search_query;
                    if(!this.books.length) this.collection_is_empty = true;

             
                })
        }else{

        var url = '/api/books?page=' + this.page;
  
        axios
            .get(url)
            .then(response => {
                this.books = response.data['hydra:member'];
                this.total_pages = Math.ceil(response.data['hydra:totalItems'] / 10);
            })
        }
    },
    methods: {
             
            },

    name: "book_list"
}
</script>


