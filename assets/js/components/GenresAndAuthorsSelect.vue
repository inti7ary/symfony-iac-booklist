<template>

    <div class="row">
         <div style="padding-top: 7%" id="authors" class="col-sm-6">

                <div class="btn-group">
                    
                    <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Авторы
                    </button>

                    <div style="max-height: 250px; overflow-y: scroll" class="dropdown-menu dropdown-menu-left">
                        <a class="dropdown-item disabled"  href="#">Выберите автора</a>
                        <div class="dropdown-divider"></div>
                        <a @click="addAuthorToSelected(author)" href="#" :key="author.id" v-for="author in authors_all" class="dropdown-item" >
                            {{getInitials(author)}}
                        </a>

                    </div>


                    
                </div>

                <div>
                    <span style="margin: 0 1% 0 1%" :key="author.id" v-for="author in authors_selected" class="badge badge-primary">
                    {{getInitials(author)}}  <a @click="removeAuthorFromSelected(author)" style="color: white; text-decoration: none" href="#"> x </a>

                    </span>

                </div>

                 <span class="invalid-feedback d-block">{{authors_error}}</span>
        </div>

        <div style="padding-top: 7%" id="genres" class="col-sm-6">
            <div class="btn-group">
                
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Жанры
                </button>

                <div style="max-height: 250px; overflow-y: scroll" class="dropdown-menu dropdown-menu-left">
                    <a class="dropdown-item disabled"  href="#">Выберите жанр</a>
                    <div class="dropdown-divider"></div>
                    
                    <a @click="addGenreToSelected(genre)" href="#" :key="genre.id" v-for="genre in genres_all" class="dropdown-item" >
                        {{genre.name}}
                    </a>

                </div>


                
            </div>

            <div>
                <span style="margin: 0 1% 0 1%" :key="genre.id" v-for="genre in genres_selected" class="badge badge-primary">
                {{genre.name}}  <a @click="removeGenreFromSelected(genre)" style="color: white; text-decoration: none" href="#"> x </a>

                </span>

            </div>

             <span class="invalid-feedback d-block">{{genres_error}}</span>

        </div>
    </div>

</template>

<script>
import axios from 'axios';



export default{

    data: function(){
        return {
        authors_selected: this.authors,
        authors_all: [],
        genres_selected: this.genres,
        genres_all: []

    }},
    created: function(){
        var authors_url = '/api/authors.json?pagination=false&properties[]=id&properties[]=firstName&properties[]=surname&properties[]=patronymic';
        var genres_url = '/api/genres.json?pagination=false&properties[]=id&properties[]=name';
        
        axios.get(authors_url)
        .then(response => {
            this.authors_all = response.data.sort((a, b) => {
                        if(a.surname > b.surname) return 1;
                        else return -1;
            });

            axios.get(genres_url)
            .then(response => {
                this.genres_all = response.data.sort((a, b) => {
                        if(a.name > b.name) return 1;
                        else return -1;
                    });
             })

        })

    },
    props: {
        authors_error: {
            type: String,
            default: ''
        },
        genres_error: {
            type: String,
            default: ''
        },
        authors:{
            type: Array,
            default: function() {return [];}
        },
        genres:{
            type: Array,
            default: function() {return [];}
        }
    },
    methods: {
            getInitials(author){
                var initials = author.surname + ' ' + author.first_name.charAt(0) + '.';
                initials += author.patronymic ? ' ' + author.patronymic.charAt(0) + '.' : '';
                return initials;
            },
            getItemIndexFromArray(array, object){

                for(var i = 0; i < array.length; i++){
                    if(JSON.stringify(array[i]) === JSON.stringify(object)) return i;
                }

                return -1;
            },
            addGenreToSelected(genre){
                var index = this.getItemIndexFromArray(this.genres_selected, genre)
                if(index === - 1){
                    this.genres_selected.push(genre);
                    index = this.getItemIndexFromArray(this.genres_all, genre);
                    this.genres_all.splice(index, 1);
                    
                    this.$emit('genres-changed', this.genres_selected);

                }
            },
            removeGenreFromSelected(genre){
                var index = this.getItemIndexFromArray(this.genres_selected, genre);
                if(index !== -1){
                    
                    this.genres_selected.splice(index, 1);
                    this.genres_all.push(genre);
                    
                    this.$emit('genres-changed', this.genres_selected);

                    this.genres_all = this.genres_all.sort((a, b) => {
                        if(a.name > b.name) return 1;
                        else return -1;
                    });
                    
                }
            },
            addAuthorToSelected(author){
                var index = this.getItemIndexFromArray(this.authors_selected, author)
                if(index === - 1){
                    this.authors_selected.push(author);
                    index = this.getItemIndexFromArray(this.authors_all, author);
                    this.authors_all.splice(index, 1);

                    this.$emit('authors-changed', this.authors_selected);
                }
            },
            removeAuthorFromSelected(author){
                var index = this.getItemIndexFromArray(this.authors_selected, author);
                if(index !== -1){
                    
                    this.authors_selected.splice(index, 1);
                    this.authors_all.push(author);

                    this.$emit('authors-changed', this.authors_selected);
                    
                    this.authors_all = this.authors_all.sort((a, b) => {
                        if(a.name > b.name) return 1;
                        else return -1;
                    });
                    
                }
            },
            },

    name: "genres_and_authors_select"
}


</script>