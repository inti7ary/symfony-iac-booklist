<template>

    <div>
    
        <div class="card bg-light mb-3" style="max-width: 640px;">

            <div class="row no-gutters">
                <div class="col-md-4 book-img-container">
                    <img :src="author.img" class="card-img" alt="...">
                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h5 class="card-title"><b>{{fullname}}</b></h5>
<!--                         
                        <div>
                            
                            <template v-for="author in book.authors">

                            <a :key="author.id" :href="'/authors/' + author.id" ><small>{{author.name}} </small></a>

                                
                            </template>


                        </div> -->

                        <p class="card-text">{{getShortDescription()}}</p>

                        <div id="button-details" class="text-lg-right">
                            <button type="button" class="btn btn-success" @click="redirectTo('/authors/' + author.id)">Подробнее</button>
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

    props: ['author'],
    methods: {
             redirectTo(path){
                 window.location.href= path;
             },
             getShortDescription(){
                return (this.author.description.length < 200) ?
                this.author.description : this.author.description.substring(0, 200) + '...';
            }
            },
    computed: {
        fullname: function(){
            var fullname = this.author.surname;
            fullname += this.author.first_name ? ' ' + this.author.first_name : ''
            fullname += this.author.patronymic ? ' ' + this.author.patronymic : ''
            return fullname;
        }
    },

    name: "author_card"
}
</script>


