<template>

    <div>

        <pagination v-if="pagination" :url="'/authors'" :total_pages="total_pages" :current_page="page"></pagination>

        <author_card  :author="author" v-for="author in authors" :key="author.id"></author_card>

        <pagination v-if="pagination" :url="'/authors'" :total_pages="total_pages" :current_page="page"></pagination>
        
    </div>

</template>

<script>

import author_card from './AuthorCard.vue'
import pagination from './Pagination.vue';

import axios from 'axios';

export default{
    components: {
		author_card, pagination
	},
    data: function(){
        return {
            authors: [],
            total_pages: 0
            }},

    props: {
         page: {
             type: Number,
             default: 1
         },
         pagination: {
             type: Boolean,
             default: false
         }
    },
    created: function(){
        var url = '/api/authors?page=' + this.page;
  
        axios
            .get(url)
            .then(response => {
                this.authors = response.data['hydra:member'];
                this.total_pages = Math.ceil(response.data['hydra:totalItems'] / 10);
            })
    },
    methods: {
             
            },

    name: "author_list"
}
</script>


