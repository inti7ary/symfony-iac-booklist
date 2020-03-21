<template>

    <form :id="side ? 'side-search' : 'search'" >
        <input v-model="query" class="form-control mr-sm-2 search-field" type="search"  @keydown.enter.prevent="find()" placeholder="Поиск" aria-label="Search">
    </form>

</template>

<script>
import axios from 'axios';

export default {
data(){
    return{
        query: this.value
    }
},
props:{
value: {
    type: String,
    default: ''
},
side: {
    type: Boolean,
    default: false
}
},
methods:{
    find(){
        var url = '';
        if(this.query.length) url = '/books/search?query=' + encodeURIComponent(this.query);
        else url = '/books';
        window.location.href = url;
    }
},
name: 'search_field'
}
</script>