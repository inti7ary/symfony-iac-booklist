<template>

    <div>
        <h2>Вход</h2>
        <span>Заполните поля, чтобы войти на сайт</span>
        <form>
            <div class="form-group">
                <label for="email-input">Email</label>
                <input id="email-input" v-model='email' type="text" class="form-control" placeholder="Email">
                <span class="invalid-feedback d-block">{{email_error}}</span>
            </div>

            <div class="form-group">
                <label for="password-input">Пароль</label>
                <input id="password-input" v-model="password" type="password" class="form-control" placeholder="Пароль">
                <span class="invalid-feedback d-block">{{password_error}}</span>
            </div>

            <div class="form-group">
                <input type="submit" @click.prevent="validateInputAndSubmit" class="btn btn-primary" value="Вход">  
                <a style="padding-left: 5%"  href="/password/restore"><span>Восстановление пароля</span></a>
            </div>
        
        
        
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default{
    data: function(){
        return {
            email: '',
            password: '',
            email_error: '',
            password_error: ''    
            }},
    methods: {
             validateInputAndSubmit(){
                 if(!this.email.trim()) this.email_error = "Введите email";
                 else{
                 var url = '/api/users.json?email=' + encodeURIComponent(this.email.trim());
                 axios
                    .get(url)
                    .then(response => {
                        if(!response.data.length){
                            this.email_error = 'Аккаунт не существует';
                            this.password_error = '';
                        }
                        else{
                             this.email_error = '';
                             this.validatePassword();
                        }
                    }).finally(() => {
                          this.handleSubmit();
                    });
                }
             },
             validatePassword(){
                  if(!this.password) this.password_error = 'Введите пароль';
                  else this.password_error = '';
             },
             handleSubmit() {
                if(this.email_error || this.password_error) return;

                var data = {
                        email: this.email.trim(),
                        password: this.password
                };

       

                axios
                    .post('/login', data)
                    .then(response => {
                
                        window.location.href = "/";
                        //this.$emit('user-authenticated', userUri);
                        //this.email = '';
                        //this.password = '';
                    }).catch(error => {
                        console.log(error.response.data);
                        this.password_error = 'Неверный пароль';
                    }).finally(() => {
                        
                    });
                }
            },

    name: "login_form"
}
</script>


