<template>

    <div v-if="book">
    
        <div class="card bg-light mb-3" style="max-width: 640px;">

            <div class="row no-gutters">
                <div class="col-md-4 book-img-container">
                    <img :src="book.img" class="card-img" alt="...">
                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h5 class="card-title"><b>{{book.title}}</b></h5>
                        
                        <div>
                            
                            
                            <template v-for="author in book.authors">

                            <a :key="author.id" :href="'/authors/' + author.id" ><small>{{getInitials(author)}} </small></a>

                                
                            </template>


                        </div>

                        <p class="card-text">{{getShortDescription()}}</p>

                        <div id="button-details" class="text-lg-right">
                            <button type="button" class="btn btn-success" @click="redirectTo('/books/' + book.id)">Подробнее</button>
                        </div>
            

                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default{
    data: function(){
        return {
    
            }},

    props: ['book'],
    methods: {
             redirectTo(path){
                 window.location.href= path;
             },
             getInitials(author){
                var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
                initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
                return initials;
            },
            getShortDescription(){
                return (this.book.description.length < 200) ?
                this.book.description : this.book.description.substring(0, 200) + '...';
            }
            },


    name: "book_card"
}
</script>


