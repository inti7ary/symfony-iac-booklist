<template>

    <div>

        <pagination v-if="pagination" :url="'/genres'" :total_pages="total_pages" :current_page="page"></pagination>

        <genre_card  :genre="genre" v-for="genre in genres" :key="genre.id"></genre_card>

        <pagination v-if="pagination" :url="'/genres'" :total_pages="total_pages" :current_page="page"></pagination>
        
    </div>

</template>

<script>

import genre_card from './GenreCard.vue'
import pagination from './Pagination.vue';

import axios from 'axios';

export default{
    components: {
		genre_card, pagination
	},
    data: function(){
        return {
            genres: [],
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
        var url = '/api/genres?page=' + this.page;
  
        axios
            .get(url)
            .then(response => {
                this.genres = response.data['hydra:member'];
                this.total_pages = Math.ceil(response.data['hydra:totalItems'] / 10);
            })
    },
    methods: {
             
            },

    name: "genre_list"
}
</script>


