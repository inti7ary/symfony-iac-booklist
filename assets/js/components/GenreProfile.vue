
<template>
<div v-if="is_initialized" >

    <div id='book-card' class="card bg-light col-sm-6" style="max-width: 740px;">

        <div class="row no-gutters">

            <div class="col-md-4 pt-4">
                    <img :src='genre.img' class="card-img" alt="...">
            </div>

            <div class="col-md-8 ">
                <div class="card-body">
                        <h3 class="card-title">
                            <span v-if="!isEdited">{{genre.name}}</span>
                            <input class="form-control" v-model="genre.name" v-if="isEdited">
                        </h3>
                        <span v-if="isEdited" class="invalid-feedback d-block">{{name_error}}</span>

    

                        <br>
          
                        <p v-if="!isEdited">{{genre.description}}</p>   
                        <textarea v-if="isEdited" :rows="rowsCount" style="width: 100%;" v-model="genre.description" class="form-control card-text"></textarea>
                        <span v-if="isEdited" class="invalid-feedback d-block">{{description_error}}</span>
                </div>
        
            </div>  

            
       

        </div>

        <div v-if="enable_editing" id="genre-profile-edit-panel">

            <div class="row">
                    <div class="col-sm-5 "></div>
                    <div :style="{ padding: isEdited ? '0 0 0 15%' : '0 0 0 8%'}" class="col-sm-7">

                        <div class="row"> 
                            <div class="col-sm-6 col-7">

                                <button @click="isEdited = true" v-if="!isEdited" class="btn btn-info">
                                    Редактировать
                                </button>

                            </div>

                            <div class="col-sm-6 col-4">

                                <button @click="handeDeleteRequest" v-if="!isEdited" class="btn btn-danger">
                                    Удалить
                                </button>
                                
                            </div>




                        </div>

                       

                        <button @click="handePatchRequest" v-if="isEdited" class="btn btn-info">
                            Сохранить
                        </button>


                        
                    </div>
                    
            </div>
            

        </div>


        

    </div>
    

    <div id='book-card'  style="max-width: 740px;">
        <div class="row no-gutters">

            <book_list v-if="genre.books.length" :collection="genre.books"></book_list>

        </div>
          

    </div>

</div>

</template>


<script>
import axios from 'axios';
import book_list from './BookList.vue';

export default{
    components: {book_list},
    data: function(){
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
            }},

    props: {
        id: {
            type: Number,
            default: 0
        },
        enable_editing: {
            type: Boolean,
            default: false
        }
    },
    created: function(){
        if(this.id === 0) return;

        var url = '/api/genres/' + this.id + '.json';

        axios.
            get(url)
            .then(response => {
                this.genre = response.data;
                this.is_initialized = true;
            });
        
           
    },
    methods: {
             validateInput(){
                 var genre = this.genre;

                 if(!genre.name) this.name_error = "Укажите название"
                 else this.name_error = "";

                 if(!genre.description) this.description_error = "Укажите описание"
                 else this.description_error = "";

             },
             handePatchRequest(){
                this.validateInput();

                if(this.name_error || this.description_error) return;
         

                var data = {
                    name: this.genre.name,
                    description: this.genre.description
                };
                
                var url = '/api/genres/' + this.genre.id;
                axios
                    .patch(url, data, {headers: {"Content-Type" : "application/merge-patch+json"}})
                    .then(response => {
                        this.isEdited = false;
                    })

                
             },
             handeDeleteRequest(){
                var url = '/api/genres/' + this.genre.id;
                axios
                    .delete(url)
                    .then(response =>{
                        var redirect_url = 
                        '/genres?status=genre_deleted_success&name=' 
                        + encodeURIComponent(this.genre.name);

                        window.location.href = redirect_url;
                    })
             }
            },
    computed: {
        rowsCount: function(){
            return Math.ceil(this.genre.description.length / 51);
        }
    },

    name: "genre_profile"
}
</script>