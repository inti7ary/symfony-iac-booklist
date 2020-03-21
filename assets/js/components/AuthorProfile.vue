
<template>
<div>

    <div id='book-card' class="card bg-light col-sm-6" style="max-width: 740px;">

        <div class="row no-gutters">

            <div class="col-md-4 pt-4">
                    <img :src='author.img' class="card-img" alt="...">

                    <div v-if="isEdited" style="padding-top: 10%">
                        <img_upload
                        :url="'/authors/img'"
                        @uploaded="author.img = $event"
                        ></img_upload>
                    </div>
                    
            </div>
            

            <div class="col-md-8 ">
                <div class="card-body">
                        <h3 class="card-title">
                            <span v-if="!isEdited">{{author.surname + ' ' + author.first_name + ' ' + author.patronymic}}</span>     
                        </h3>

                        
                       <div v-if='isEdited' id='edit-form'>

                                <form>

                                <div class="form-group">
                                    <label for="surname-input">Фамилия</label>
                                    <input id="surname-input" v-model='author.surname' type="text" class="form-control" placeholder="Фамилия">
                                    <span class="invalid-feedback d-block">{{surname_error}}</span>
                                </div>

                                <div class="form-group">
                                    <label for="first-name-input">Имя</label>
                                    <input id="first-name-input" v-model='author.first_name' type="text" class="form-control" placeholder="Имя">
                                    <span class="invalid-feedback d-block">{{first_name_error}}</span>
                                </div>

                                <div class="form-group">
                                    <label for="patronymic-input">Отчество</label>
                                    <input id="patronymic-input" v-model='author.patronymic' type="text" class="form-control" placeholder="Отчество">
                                    <span class="invalid-feedback d-block">{{patronymic_error}}</span>
                                </div>

                                <div class="form-group">
                                    <label for="description-input">Описание</label>
                                    <textarea rows="3" id="description-input" v-model='author.description' type="text" class="form-control" placeholder=""></textarea>

                                    <span class="invalid-feedback d-block">{{description_error}}</span>
                                </div>
                            
                            </form>

                       </div>

                            

                        <br>
          
                        <p v-if="!isEdited">{{author.description}}</p>   
                       
                </div>
        
            </div>  

            
       

        </div>

        <div v-if="enable_editing" id="author-profile-edit-panel">

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

                                <button @click="handleDeleteRequest" v-if="!isEdited" class="btn btn-danger">
                                    Удалить
                                </button>
                                
                            </div>




                        </div>

                       

                        <button @click="handlePatchRequest" v-if="isEdited" class="btn btn-info">
                            Сохранить
                        </button>


                        
                    </div>
                    
            </div>
            

        </div>


        

    </div>
    

    <div v-if="books.length" id='book-card'  style="max-width: 740px;">
        <div class="row no-gutters">
            <h3>Книги</h3>
            <book_list :collection="books"></book_list>

        </div>
          

    </div>

</div>

</template>


<script>
import axios from 'axios';
import book_list from './BookList.vue';
import img_upload from './ImgUpload.vue';

export default{
    components: {book_list, img_upload},
    data: function(){
        return {
            author: {
                id: 0,
                first_name: '',
                surname: '',
                patronymic: '',
                img: ''
            },
            books: [],
            isEdited: false,
            is_initialized: false,
            description_error: '',
            first_name_error: '',
            surname_error: '',
            patronymic_error: ''
            
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

        var url = '/api/authors/' + this.id + '.json';

        axios.
            get(url)
            .then(response => {
                this.author = response.data;

                url = '/api/authors/' + this.id + '/books.json';
                axios.get(url)
                    .then(response => {
                        this.books = response.data;
                     
                        this.is_initialized = true;
                    });
                
            });
        
           
    },
    methods: {
        getInitials(author){
                var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
                initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
                return initials;
            },
             validateInput(){
                 var author = this.author;

                 if(!author.first_name) this.first_name_error = "Укажите имя"
                 else this.first_name_error = "";

                 if(!author.surname) this.surname_error = "Укажите фамилию"
                 else this.surname_error = "";

                 if(!author.description) this.description_error = "Укажите описание"
                 else this.description_error = "";

             },
             handlePatchRequest(){
                this.validateInput();

                if(this.surname_error || this.description_error || this.first_name_error) return;
         

                var data = {
                    first_name: this.author.first_name,
                    surname: this.author.surname,
                    patronymic: this.author.patronymic,
                    description: this.author.description,
                };

                

                if(this.author.img) data.img = this.author.img;
                
                var url = '/api/authors/' + this.author.id;
                axios
                    .patch(url, data, {headers: {"Content-Type" : "application/merge-patch+json"}})
                    .then(response => {
                        this.isEdited = false;
                    })

                
             },
             handleDeleteRequest(){
                var url = '/api/authors/' + this.author.id;
                axios
                    .delete(url)
                    .then(response =>{
                        var redirect_url = 
                        '/authors?status=author_deleted_success&name=' 
                        + encodeURIComponent(this.getInitials(this.author));

                        window.location.href = redirect_url;


                    })
             }
            },
    computed: {
        rowsCount: function(){
            return Math.ceil(this.author.description.length / 51);
        }
    },

    name: "author_profile"
}
</script>