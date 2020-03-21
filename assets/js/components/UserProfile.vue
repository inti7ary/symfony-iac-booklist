
<template>

    <div v-if="is_initialized" id='profile-card' class="card bg-light" style="max-width: 640px;">
        <div style="position: relative;" class="row no-gutters jumbotron">
            <div v-if="!isEdited" style="position: absolute; right: 3%; top: 3%;" >
                <a v-if="enable_editing" @click.prevent="enableProfileEditing" href="#">редактировать</a>
            </div>
             
              <a v-if="isEdited" style="position: absolute; right: 3%; top: 3%;" @click.prevent="handlePatchRequest" href="#">сохранить</a>
            <div class="col-md-6">
                <img :src='user.img' class="card-img" alt="...">
                
                <div v-if="isEdited && enable_editing" >
                
                  
                    <img_upload 
                    url="/users/img"
                    @uploaded="user.img = $event"
                    ></img_upload>


                </div>

                <a v-if="enable_editing && !isPasswordEdited && !isEdited" @click.prevent="enablePasswordEditing" href="#">изменить пароль</a>
                <div style="margin-top: 5%" v-if="isPasswordEdited" class="row justify-content-center" id="password-reset">

                        <input id="current-password-input" v-model='current_password' type="password" class="form-control" placeholder="Текущий пароль">
                        <span class="invalid-feedback d-block">{{current_password_error}}</span>


                        <input id="new-password-input" v-model='new_password' type="password" class="form-control" placeholder="Новый пароль">
                        <span class="invalid-feedback d-block">{{new_password_error}}</span>

                          <button v-if="enable_editing" class="btn btn-info"  @click.prevent="handlePasswordReset">сохранить</button>
                </div>
                 <span class="valid-feedback d-block">{{password_status}}</span>


             </div>

            <div  class="col-md-5 ">
              
                
          
                <div class="card-body">
                    <h3 v-if="!isEdited" class="card-title">{{user.username}}</h3>

                    <div v-if="isEdited">
                        <input id="username-input" v-model='user.username' type="text" class="form-control" placeholder="Логин">
                        <span class="invalid-feedback d-block">{{username_error}}</span>
                    </div>
                    
                    <div style="margin-top: 26%" id="user-static-info">

                        <span  :class="roleClass" class="card-text">{{roleLabel}}</span>
                        <p class="card-text "><small class="text-muted"> {{'Зарегистрирован ' + formattedRegDate}}</small></p>

                    </div>
                    
                
                </div>
            
            </div>
        </div>

        

        <button v-if="user.role === 'ROLE_ADMIN' || user.role === 'ROLE_ROOT'" type="button" @click="redirectTo('/usermanagment')" class="btn btn-info">Управление пользователями</button> 

        
        
    </div>



</template>


<script>
import axios from 'axios';
import img_upload from './ImgUpload.vue';

export default{
    components: {img_upload},
    data: function(){
        return {
            user: {
                id: 0,
                email: '',
                username: '',
                img: '',
                reg_date: new Date(),
                role: ''
            },
            current_password: '',
            new_password: '',
            isEdited: false,
            isPasswordEdited: false,
            is_initialized: false,
            email_error: '',
            username_error: '',
            current_password_error: '',
            new_password_error: '',
            password_status: ''
            
        }
    },

    props: {
        id: {
            type: Number,
            default: 0
        },
        admin: {
            type: Boolean,
            default: false
        },
        enable_editing: {
            type: Boolean,
            default: false
        }
    },
    created: function(){
        if(this.id === 0) return;

        var url = '/api/users/' + this.id + '.json';

        axios.
            get(url)
            .then(response => {
                this.user = response.data;  
                this.user.reg_date = new Date(this.user.reg_date);

                this.is_initialized = true;              
            });
            
        
           
    },
    methods: {
            enableProfileEditing(){
                this.isEdited = true;
                this.isPasswordEdited = false;
                this.password_status = '';
            },
            enablePasswordEditing(){
                this.new_password = '';
                this.current_password = '';
                this.new_password_error = '';
                this.current_password_error = '';
                this.isPasswordEdited = true
                this.password_status = '';
            },
            redirectTo(path){
                 window.location.href= path;
             },
             validateInput(){
                 var user = this.user;

                 if(!user.username) this.username_error = "Укажите логин"
                 else this.username_error = "";


             },
            validatePasswordInput(){
                 

                 if(!this.current_password) this.current_password_error = "Укажите текущий пароль"
                 else this.current_password_error = "";

                 if(!this.new_password) this.new_password_error = "Укажите новый пароль"
                 else this.new_password_error = "";


             },
             handlePasswordReset(){
                this.validatePasswordInput();

                if(this.new_password_error || this.current_password_error ) return;
                
                var data = {
                    current_password: this.current_password,
                    password: this.new_password

                };

                var url = '/api/users/' + this.user.id;

                axios.
                    patch(url, data, {headers: {"Content-Type" : "application/merge-patch+json"}})
                    .then(response => {
                        this.isPasswordEdited = false;
                        this.password_status = "Пароль успешно изменён";

                    })
                    .catch(error => {
                        let violations = error.response.data.violations;
                         for(const violation of violations){
             
                            if(violation.propertyPath === 'password') this.new_password_error = violation.message;  
                            else if(violation.propertyPath === 'current_password') this.current_password_error = violation.message;  
                        }
                    })

             },
             handlePatchRequest(){
                this.validateInput();

                if(this.username_error) return;
         

                var data = {
                    username: this.user.username,
                    img: this.user.img

                };

                var url = '/api/users/' + this.user.id;
                axios
                    .patch(url, data, {headers: {"Content-Type" : "application/merge-patch+json"}})
                    .then(response => {
                        this.isEdited = false;
                    })
                    .catch(error => {
     
                        let violations = error.response.data.violations;
                         for(const violation of violations){
             
                            if(violation.propertyPath === 'username') this.username_error = violation.message;  
                        }
                     });

                
             }
    },
    computed:{
        formattedRegDate: function(){
            if(this.is_initialized)
            return this.user.reg_date.toLocaleDateString(
                    'ru-RU', 
                    {day:'numeric', month: 'long', year: 'numeric'}
                    );

            else return '';
        },
        roleClass: function(){
             let role = this.user.role;
            if(role === 'ROLE_ADMIN' || role === 'ROLE_ROOT') return 'text-danger';
            else if(role === 'ROLE_MODERATOR') return 'text-primary';
            else if(role === 'ROLE_USER') return 'text-dark';
        },
        roleLabel: function(){
            let role = this.user.role;
            if(role === 'ROLE_ROOT') return '≧〔゜゜〕≦';
            if(role === 'ROLE_ADMIN') return 'администратор';
            else if(role === 'ROLE_MODERATOR') return 'модератор';
            else if(role === 'ROLE_USER') return 'пользователь';
        }
    },
    name: "user_profile"
}
</script>