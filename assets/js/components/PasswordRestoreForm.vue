<template>
    <div>
        <div v-if="email_form">
            <h2>Восстановление пароля</h2>
            <form>
                <div class="form-group">
                    <label for="email-input">Укажите email, чтобы восстановить доступ к аккаунту</label>
                    <input id="email-input" v-model='email' type="text" class="form-control" placeholder="Email">
                    <span :class="is_feedback_valid ? valid_feedback_class : invalid_feedback_class" class="d-block">{{status_message}}</span>
                </div>

                <div class="form-group">
                    <input type="submit" @click.prevent="generateToken" class="btn btn-primary" value="Отправить">
                </div>
            
            </form>
        </div>

        <div v-if="code_form">
            <form>
                <div id="verification-code" class="form-group">
            
                    <label for="verification-code-input" >Код подтверждения</label>
                    <input id="verification-code-input" v-model='restore_token' type="text" class="form-control" placeholder="">
                    <span :class="is_feedback_valid ? valid_feedback_class : invalid_feedback_class" class="d-block">{{status_message}}</span>
                </div>

                <div class="form-group">
                    <input type="submit" @click.prevent="verifyToken" class="btn btn-primary" value="Отправить">
                </div>
            </form>
        </div>


        <div v-if="password_form">

            <form>
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
                        <input type="submit" @click.prevent="sendNewPassword" class="btn btn-primary" value="Отправить">
                    </div>

            </form>
        
        </div>


        <div v-if="password_restored">
            <span style="padding-top: 15%" class="valid-feedback d-block"><b>{{status_message}}</b></span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data: function(){
        return {
            email: '',
            id: 0,
            restore_token: '',
            email_form: true,
            status_message: '',
            valid_feedback_class: 'valid-feedback',
            invalid_feedback_class: 'invalid-feedback',
            is_feedback_valid: true,
            password_form: false,
            code_form: false,
            password_restored: false,
            password: '',
            password_error: '',
            password_confirmation: '',
            password_confirmation_error: ''
            }},
    methods: {
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
        generateToken(){
            if(!this.email){
                this.is_feedback_valid = false;
                this.status_message = 'Введите email, который привязан к вашему аккаунту';
                return;
            }
            this.status_message = '';
            axios
                .post('/password/restore', {email: this.email})
                .then(response => {
                    this.email_form = false;
                    this.code_form = true;
                    this.is_feedback_valid = true;
                    this.status_message = response.data.message;
                    this.id = response.data.id;
                })
                .catch(error => {
                     this.is_feedback_valid = false;
                     this.status_message = error.response.data.message;
                });
        },
        verifyToken(){
            if(!this.restore_token){
                this.is_feedback_valid = false;
                this.status_message = 'Введите код для подтверждения восстановления пароля';
                return;
            }
            var data = {
                email: this.email,
                restore_token: this.restore_token
            };

            var url = '/api/users/' + this.id + '.json';
            this.status_message = '';
            axios
                .patch(url, data, {
                    headers: {'Content-Type' : "application/merge-patch+json"}
                })
                .then(response => {
                    // this.code_form = false;
                    // this.password_form = true;

                })
                .catch(error => {
                    let violations = error.response.data.violations;
                
                    for(const violation of violations){
                        if(violation.propertyPath == 'password'){
                            this.status_message = '';
                            this.is_feedback_valid = true;
                            this.code_form = false;
                            this.password_form = true;
                            break;
                        }else{
                            this.is_feedback_valid = false;
                            this.status_message = violation.message;
                        }
                    }
                    
                })
        },
        sendNewPassword(){
            this.validatePassword();
            if(this.password_error || this.password_confirmation_error) return;

            var data = {
                email: this.email,
                restore_token: this.restore_token,
                password: this.password
            };

            var url = '/api/users/' + this.id + '.json';
            axios
                .patch(url, data, {
                    headers: {'Content-Type' : "application/merge-patch+json"}
                })
                .then(response => {
                    this.status_message = "Пароль успешно восстановлен!";
                    this.password_form = false;
                    this.password_restored = true;
                    
                    this.login();
            
                })
                .catch(error =>{
                    let violations = error.response.data.violations;
                    this.is_feedback_valid = false;
                    this.status_message = '';
                    for(const violation of violations){
                           
                        this.status_message += violation.message + '<br>';

                    }
                    
                })
        },
        login(){
            
            var url = "/login";
            var data = {
                email: this.email,
                password: this.password
            };

            axios.post(url, data)
                .then(response => window.location.href = "/")
        }
    },

    name: "password_restore_form"
}
</script>