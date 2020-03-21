<template>
    <div>

            <h2>Новый автор</h2>
        
            <form>

                <div class="form-group">
                    <label for="surname-input">Фамилия</label>
                    <input id="surname-input" v-model='surname' type="text" class="form-control" placeholder="Фамилия">
                    <span class="invalid-feedback d-block">{{surname_error}}</span>
                </div>

                 <div class="form-group">
                    <label for="first-name-input">Имя</label>
                    <input id="first-name-input" v-model='first_name' type="text" class="form-control" placeholder="Имя">
                    <span class="invalid-feedback d-block">{{first_name_error}}</span>
                </div>

                <div class="form-group">
                    <label for="patronymic-input">Отчество</label>
                    <input id="patronymic-input" v-model='patronymic' type="text" class="form-control" placeholder="Отчество">
                    <span class="invalid-feedback d-block">{{patronymic_error}}</span>
                </div>

                 <div class="form-group">
                    <label for="description-input">Описание</label>
                    <textarea rows="3" id="description-input" v-model='description' type="text" class="form-control" placeholder=""></textarea>

                    <span class="invalid-feedback d-block">{{description_error}}</span>
                </div>

                <div>
                                
                    <img_upload
                    @uploaded="img = $event"
                    :url="'/authors/img'"
                    ></img_upload>

                </div>

                <div class="form-group">
                    <input 
                    type="submit" 
                    @click.prevent="handleSubmit" 
                    class="btn btn-outline-primary" 
                    value="Добавить"
                    :disabled="isHandling">
                </div>
            
            </form>
    </div>
</template>

<script>
import axios from 'axios';
import img_upload from './ImgUpload.vue';

export default{
    components: {img_upload},
    data: function(){
        return {
        isHandling: false,
        first_name: '',
        surname: '',
        patronymic: '',
        description: '',
        img: '',
        status_message: '',
        description_error: '',
        first_name_error: '',
        surname_error: '',
        patronymic_error: ''
            }},
    methods: {
            validateInput(){
                if(!this.first_name.trim()){
                    this.first_name_error = 'Укажите имя';
                }else  this.first_name_error = '';

                if(!this.surname.trim()){
                    this.surname_error = 'Укажите фамилию';
                }else  this.surname_error = '';

                if(!this.description.trim()){
                    this.description_error = 'Укажите описание';
                }else this.description_error = '';

            },
             handleSubmit(){
                 this.validateInput();

                 if(this.first_name_error || this.surname_error || this.description_error) return;
                 
                 this.isHandling = true;

                 var data = {
                     surname: this.surname.trim(),
                     first_name: this.first_name.trim(),
                     patronymic: this.patronymic.trim(),
                     description: this.description,
                 };

                 if(this.img.length) data.img = this.img; 
                 
                 var url = '/api/authors.json';
                 var name = data.surname + ' ' + data.first_name + ' ' + data.patronymic;
                 var redirectUrl = "/authors?status=new_author_success&name=" + encodeURIComponent(name);
                 this.name_error = '';
                 this.description_error = '';
                 
                 axios
                    .post(url, data)
                    .then(response => {
                        this.redirectTo(redirectUrl);
                    })
                    .catch(error => {
                       for(const violation of error.response.data.violations){
                           if(violation.propertyPath === 'first_name') this.first_name_error = violation.message;
                           else if(violation.propertyPath === 'description') this.description_error = violation.message;
                           else if(violation.propertyPath === 'surname') this.surname_error = violation.message;
                          
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

    name: "author_form"
}


</script>
