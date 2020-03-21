<template>
    <div>

            <h2>Новый жанр</h2>
            <form>
                <div class="form-group">
                    <label for="name-input">Название</label>
                    <input id="name-input" v-model='name' type="text" class="form-control" placeholder="Название">
                    <span class="invalid-feedback d-block">{{name_error}}</span>
                </div>

                 <div class="form-group">
                    <label for="description-input">Описание</label>
                    <textarea rows="8" id="description-input" v-model='description' type="text" class="form-control" placeholder=""></textarea>

                    <span class="invalid-feedback d-block">{{description_error}}</span>
                </div>

               

                <div class="form-group">
                    <input 
                    type="submit" 
                    @click.prevent="handleSubmit()" 
                    class="btn btn-outline-primary" 
                    value="Добавить"
                    :disabled="isHandling">
                </div>
            
            </form>
    </div>
</template>

<script>
import axios from 'axios';


export default{
    data: function(){
        return {
        isHandling: false,
        name: '',
        description: '',
        status_message: '',
        description_error: '',
        name_error: ''
            }},
    methods: {
            validateInput(){
                if(!this.name.trim()){
                    this.name_error = 'Укажите название';
                }else  this.name_error = '';

                if(!this.description.trim()){
                    this.description_error = 'Укажите описание';
                }else this.description_error = '';

            },
             handleSubmit(){
                 this.validateInput();

                 if(this.name_error || this.description_error) return;
                 
                 this.isHandling = true;

                 var data = {
                     name: this.name.trim(),
                     description: this.description
                 };
                 
                 var url = '/api/genres.json';
                 var redirectUrl = "/genres?status=new_genre_success&name=" + encodeURIComponent(data.name);
                 this.name_error = '';
                 this.description_error = '';
                 
                 axios
                    .post(url, data)
                    .then(response => {
                        this.redirectTo(redirectUrl);
                    })
                    .catch(error => {
                       for(const violation of error.response.data.violations){
                           if(violation.propertyPath === 'name') this.name_error = violation.message;
                           else if(violation.propertyPath === 'description') this.description_error = violation.message;
                       }

                       this.isHandling = false;

                    });
             },
             redirectTo(path){
                 window.location.href= path;
             }
            },
    computed: {
        
    },

    name: "genre_form"
}


</script>
