<template>

    <div>
    
        <div class="card bg-light mb-3" style="max-width: 640px;">

            <div class="row no-gutters">
                <div class="col-md-4 book-img-container">
                    <img :src="genre.img" class="card-img" alt="...">
                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h5 class="card-title"><b>{{genre.name}}</b></h5>
                        
                       

                        <p class="card-text">{{genre.description}}</p>

                        <div id="button-details" class="text-lg-right">
                            <button type="button" class="btn btn-success" @click="redirectTo('/genres/' + genre.id)">Подробнее</button>
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

    props: ['genre'],
    methods: {
             redirectTo(path){
                 window.location.href= path;
             }
            },
    computed: {
        
    },

    name: "genre_card"
}
</script>


