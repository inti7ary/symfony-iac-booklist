<template>
    <div>

           
            <form>

                <div class="container">
                    
                    <div class="row">
                        


                        <div class="col-sm-5">
                            <h2>Новая книга</h2>
                            <div class="form-group">
                                
                                <label for="title-input">Название</label>
                                <input id="title-input" v-model='title' type="text" class="form-control" placeholder="Название">
                                <span class="invalid-feedback d-block">{{title_error}}</span>

                            </div>


                            
                            

                            <div class="form-group">
                                <label for="description-input">Описание</label>
                                <textarea rows="6" id="description-input" v-model='description' type="text" class="form-control" placeholder=""></textarea>

                                <span class="invalid-feedback d-block">{{description_error}}</span>
                            </div>

                            <div>
                                
                                <img_upload
                                @uploaded="img = $event"
                                ></img_upload>

                            </div>
                            

                        
                        
                        </div>

                        <div class="col-sm-4" id="book-form-genres-and-authors-select">

                            <genres_and_authors_select 
                                @genres-changed="genres = $event"
                                @authors-changed="authors = $event"
                                :genres_error="genres_error"
                                :authors_error="authors_error">
                            </genres_and_authors_select>

                        </div>


                        <div style="padding: 5% 0 0 0;" class="col-sm-2" >

                            <img  class="img-thumbnail" :src="img">
                        </div>
        
                    
                    </div>

                    <div style="padding: 3% 0 0 0" class="form-group">
                             <input type="submit" @click.prevent="handleSubmit()" class="btn btn-outline-primary" value="Добавить">
                    </div>

                </div>

            </form>
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
        authors: [],
        genres: [],
        title: '',
        description: '',
        status_message: '',
        description_error: '',
        genres_error: '',
        authors_error: '',
        title_error: '',
        img: '/img/books/book-default.jpg'

    }},
    methods: {
            validateInput(){
                if(!this.title){
                    this.title_error = 'Укажите название';
                }else  this.title_error = '';

                if(!this.description){
                    this.description_error = 'Укажите описание';
                }else this.description_error = '';

                if(!this.genres.length){
                    this.genres_error = 'Выберите жанр';
                }else this.genres_error = '';

                if(!this.authors.length){
                    this.authors_error = 'Укажите автора';
                }else this.authors_error = '';

            },
             handleSubmit(){
                 this.validateInput();
                 

                 if(this.title_error || this.description_error 
                 || this.genres_error || this.authors_error) return;
                
                
                 let genres_iri = [];
                 let authors_iri = [];
                 for(const genre of this.genres){
                     genres_iri.push('/api/genres/' + genre.id);
                 }

                 for(const author of this.authors){
                     authors_iri.push('/api/authors/' + author.id);
                 }

                console.log(this.img);
                 var data = {
                     title: this.title,
                     description: this.description,
                     genres: genres_iri,
                     authors: authors_iri,
                     img: this.img
                 };
                 
                 var url = '/api/books.json';
                 var redirectUrl = "/books?status=new_book_success&title=" + encodeURIComponent(this.title);
                 this.title_error = '';
                 this.description_error = '';
                 
                 axios
                    .post(url, data)
                    .then(response => {
                        this.redirectTo(redirectUrl);
                    })
                    .catch(error => {
                       for(const violation of error.response.data.violations){
                           if(violation.propertyPath === 'title') this.title_error = violation.message;
                           else if(violation.propertyPath === 'description') this.description_error = violation.message;
                       }
                    });
             },
             redirectTo(path){
                 window.location.href= path;
             }
            },

    name: "book_form"
}


</script>
