<template>

    <div v-if="total_pages > 1" id="pagination">
    
        <nav aria-label="Page navigation example">

            <ul class="pagination">

                <li class="page-item">
                    <a class="page-link" :href="addPage(url, 1)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>


                <li v-for="page in pagination_range()" :key="page" :class="[page == current_page ? 'active' : '', 'page-item']">
                    <a class='page-link' :href="addPage(url, page)">{{page}}</a>
                </li>

                    
                <li class="page-item">
                    <a class="page-link" :href="addPage(url, total_pages)" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>

            </ul>

        </nav>

    </div>

</template>

<script>
import axios from 'axios';


export default{
    components: {
		
	},
    data: function(){
        return {
            books: [],
            offset: 3
            }},

    props: ['current_page','total_pages', 'url'],
    computed:{

    },
 
    methods: {
        pagination_range(){
            let pagination_start = (this.current_page - this.offset > 1) ? this.current_page - this.offset : 1;
            let pagination_end = (this.current_page + this.offset < this.total_pages) ? this.current_page + this.offset : this.total_pages;

            let range = [];
            for(let i = pagination_start; i <= pagination_end; i++){
                range.push(i);
            }

            console.log(pagination_start);
            return range;
        },
        addPage(url, page){
            var result = url;
            if(url.includes('?')){
                result += '&page=' + page;
            }else{
                result += '?page=' + page;
            }

            return result;
        }
            },

    name: "pagination"
}
</script>


