<template>
    <div>
        <div v-if="signup_form" id="signup">
            <h2>Регистрация</h2>
            <p>Заполните поля, чтобы зарегистрироваться</p>
            <form>

                <div class="form-group">
            
                    <label for="username-input" >Логин</label>
                    <input id="username-input" v-model='username' type="text" class="form-control" placeholder="Логин">
                    <span class="invalid-feedback d-block ">{{username_error}}</span>
                </div>

                <div class="form-group ">
                    <label for="email-input">Email</label>
                    <input id="email-input" v-model='email' type="email" class="form-control" placeholder="Email">
                    <span class="invalid-feedback d-block">{{email_error}}</span>
                </div>
            
                <div class="form-group">
                    <label for="password-input">Пароль</label>
                    <input id="password-input" v-model='password' type="password" class="form-control" placeholder="Пароль">
                    <span class="invalid-feedback d-block">{{password_error}}</span>
                </div>

                <div class="form-group">
                    <label for="password-confirmation-input">Подтверждение пароля</label>
                    <input id="password-confirmation-input" v-model='password_confirmation' type="password" class="form-control" placeholder="Пароль">
                    <span class="invalid-feedback d-block">{{password_confirmation_error}}</span>
                </div>

                <div class="form-group">
                    <input type="submit" @click.prevent="validateInputAndSendCode" class="btn btn-primary" value="Создать аккаунт">
                </div>
            </form>
        </div>

        <div v-if="verification_form" id="verification">
            <form>
                <div id="verification-code" class="form-group">
            
                    <label for="verification-code-input" >Код подтверждения</label>
                    <input id="verification-code-input" v-model='verification_code' type="text" class="form-control" placeholder="">
                    <span :class="is_feedback_valid ? valid_feedback_class : invalid_feedback_class" class="d-block">{{verification_code_status}}</span>
                </div>

                <div class="form-group">
                    <input type="submit" @click.prevent="handleSubmit" class="btn btn-primary" value="Отправить">

                </div>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return {
            email: '',
            username: '',
            password: '',
            password_confirmation: '',
            email_error: '',
            username_error: '',
            password_error: '',
            password_confirmation_error: '',
            verification_code: '',
            verification_code_status: '',
            signup_form: true,
            valid_feedback_class: 'valid-feedback',
            invalid_feedback_class: 'invalid-feedback',
            is_feedback_valid: true
            }},
    computed: {
        verification_form: function(){
            return !this.signup_form;
        }
    },
    methods: {

        validateInputAndSendCode(){
              if(!this.username){
                  this.username_error = "Введите логин";
                  this.validateEmail()
              }
              else if(this.username.length < 3){
                  this.username_error = "Логин должен содержать минимум 3 символа";
                  this.validateEmail()
              } 
              else{
                  let url = '/api/users.json?username=' + encodeURIComponent(this.username);
                  axios
                    .get(url)
                    .then(response => {
                        if(response.data.length) this.username_error = "Логин занят";
                        else this.username_error = "";
                    })
                    .finally(() => this.validateEmail());
              }
              
        },
        validateEmail(){
            this.validatePassword();
            if(!this.email.trim()) this.email_error = "Введите email";
            else{
                //email validation
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
                if(!re.test(this.email)) this.email_error = 'Некорректный формат';
                else{
                     let url = '/api/users.json?email=' + encodeURIComponent(this.email);
                     axios
                        .get(url)
                        .then(response => {
                            if(response.data.length) this.email_error = "Email занят";
                            else this.email_error = "";
                        })
                        .finally(() => {
                            this.generateCode();
                        });
                }
            
            }
        },
        validatePassword(){
            if(!this.password) this.password_error = "Введите пароль";
            else if(this.password.length < 6) this.password_error = "Пароль должен содержать не менее 5 символов";
            else if(!/\d/.test(this.password)){
                this.password_error = "Пароль должен содержать цифры";
            }else  this.password_error = "";

            if(!this.password_error && this.password !== this.password_confirmation){
                this.password_confirmation_error = "Пароли не совпадают";
            }else  this.password_confirmation_error = "";
        },
        generateCode(){
            if(this.username_error || this.email_error 
                || this.password_error || this.password_confirmation_error) return;
            var data = {
                email: this.email.trim(),
            };
            
            var url = '/verification_code/generate';
            axios
                .post(url, data)
                .then(response => {
                    this.signup_form = false;
                    this.verification_code_status = response.data.message;
                });
        },
        handleSubmit(){    
            if(this.username_error || this.email_error 
                || this.password_error || this.password_confirmation_error) return;

            var data = {
                email: this.email.trim(),
                username: this.username,
                password: this.password,
                verification_code: this.verification_code
            };

            axios 
                .post('/api/users', data)
                .then(() => this.login())
                .catch(error => {
                   for(const violation of error.response.data.violations){
                       let property = violation.propertyPath;
                       let message = violation.message;
                       /*if(property === "username") this.username_error = message;
                       else if(property === "email") this.email_error = message;
                       else */
                       if(property === 'verification_code'){
                            this.is_feedback_valid = false;
                            this.verification_code_status = message;
                       }else{
                           this.is_feedback_valid = false;
                           this.verification_code_status = "Произошла непредвиденная ошибка, перезагрузите страницу и попробуйте снова.";
        
                       }
                   }
                });
        },
        login(){
            axios.
                post('/login', {
                    email: this.email.trim(),
                    password: this.password
                    }).then(response => window.location.href = "/");
        }
        // validateUsername(){
           
        //     if(!this.username) this.username_error = 'Введите логин';
        //     else if(this.username < 3) this.username_error = 'Логин должен содержать не менее 3 символов';
        //     else{
        //         var url = '/api/users.json?username=' + encodeURIComponent(this.username);
        //         axios
        //             .get(url)
        //             .then(response => {
        //                 this.username_error = (response.data.length) ? 'Логин занят' : '';
        //             })
        //     }
            
         
                 
                  
        // }

    },

    name: "signup_form"
}


</script>