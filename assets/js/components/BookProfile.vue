
<template>

    <div v-if="is_initialized" id='book-card' class="card bg-light" style="max-width: 740px;">

        <div class="row no-gutters">

            <div class="col-md-4 pt-4">
                    <img :src='book.img' class="card-img" alt="...">

                    <div v-if="isEdited" style="padding-top: 10%">
                        <img_upload
                        @uploaded="book.img = $event"
                        ></img_upload>
                    </div>

            </div>

            <div class="col-md-8 ">
                <div class="card-body">
                        <h3 class="card-title">
                            <span v-if="!isEdited">{{book.title}}</span>
                            <input class="form-control" v-model="book.title" v-if="isEdited">
                        </h3>
                        <span v-if="isEdited" class="invalid-feedback d-block">{{title_error}}</span>

                        <div v-if="!isEdited">
                            <div id="book-profile-authors">
                                <span> <small>Авторы:</small> </span>

                                <span v-for="author in book.authors" :key="author.id" class="badge badge-light">
                                    <a :href="'/authors/' + author.id">{{getInitials(author)}}</a>
                                </span>
                            
                            </div>
                            
                            <div id="book-profile-genres">
                                <span> <small>Жанры:</small> </span>

                                <span v-for="genre in book.genres" :key="genre.id" class="badge badge-light">
                                    <a :href="'/genres/' + genre.id">{{genre.name}}</a>
                                </span>
                            </div>

                        </div>

                       <genres_and_authors_select 
                                v-if="isEdited"
                                @genres-changed="book.genres = $event"
                                @authors-changed="book.authors = $event"
                                :genres_error="genres_error"
                                :authors_error="authors_error"
                                :genres="book.genres"
                                :authors="book.authors">
                        </genres_and_authors_select>

                        <br>
                        <!-- <small class="card-text text-info">Книга находится на модерации</small> 
                        
                        <div class="alert alert-success">
                        {{message}}
                        </div>
                        -->
                        <p v-if="!isEdited">{{book.description}}</p>   
                        <textarea v-if="isEdited" :rows="rowsCount" style="width: 100%;" v-model="book.description" class="form-control card-text"></textarea>
                        <span v-if="isEdited" class="invalid-feedback d-block">{{description_error}}</span>
                </div>
        
            </div>  

            
       

        </div>

        <div v-if="enable_editing" id="book-profile-edit-panel">

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
 

</template>


<script>
import axios from 'axios';
import genres_and_authors_select from './GenresAndAuthorsSelect.vue';
import img_upload from './ImgUpload.vue';

export default{
    components: {genres_and_authors_select, img_upload},
    data: function(){
        return {
            book: {
                id: '0',
                title: '',
                authors: [],
                genres: [],
                description: '',
                img: ''
            },
            isEdited: false,
            genres_error: '',
            authors_error: '',
            description_error: '',
            title_error: '',
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

        var url = '/api/books/' + this.id + '.json';

        axios.
            get(url)
            .then(response => {
                this.book = response.data;
                this.is_initialized = true;

            })
            .catch(error => {
               
            });
    },
    methods: {
             validateInput(){
                 var book = this.book;

                 if(!book.title) this.title_error = "Укажите название"
                 else this.title_error = "";

                 if(!book.description) this.description_error = "Укажите описание"
                 else this.description_error = "";

                 if(!book.genres.length) this.genres_error = "Выберите жанр"
                 else this.genres_error = "";

                 if(!book.authors.length) this.authors_error = "Укажите автора"
                 else this.authors_error = "";
             },
             handlePatchRequest(){
                this.validateInput();

                if(this.title_error || this.description_error
                  || this.genres_error || this.authors_error) return;
                
                var genres_iri = [];
                var authors_iri = [];

                for(const genre of this.book.genres){
                    genres_iri.push('/api/genres/' + genre.id);
                }

                for(const author of this.book.authors){
                    authors_iri.push('/api/authors/' + author.id);
                }

                var data = {
                    title: this.book.title,
                    description: this.book.description,
                    authors: authors_iri,
                    genres: genres_iri,
                };
                
                if(this.book.img) data.img = this.book.img;

                var url = '/api/books/' + this.book.id;
                axios
                    .patch(url, data, {headers: {"Content-Type" : "application/merge-patch+json"}})
                    .then(response => {
                        this.isEdited = false;
                    })

                
             },
             handleDeleteRequest(){
                var url = '/api/books/' + this.book.id;
                axios
                    .delete(url)
                    .then(response =>{
                        var redirect_url = 
                        '/books?status=book_deleted_success&title=' 
                        + encodeURIComponent(this.book.title);

                        window.location.href = redirect_url;
                    })
             },
              getInitials(author){
                var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
                initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
                return initials;
            }
            },
    computed: {
        rowsCount: function(){
            return Math.ceil(this.book.description.length / 51);
        }
    },

    name: "book_profile"
}
</script>