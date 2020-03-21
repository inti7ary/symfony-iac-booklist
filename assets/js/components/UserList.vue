<template>


<div v-if="is_initialized" class='table-container'>

  
    <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Логин</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Дата регистрации</th>
                </tr>
            </thead>

            <tbody>

                <tr v-for="user in users" :key="user.id">
                    <th scope="row">#</th>
                    <td><a :href="'/users/' + user.id">  {{user.username}}</a></td>
                    <td :class="getRoleClass(user.role)">{{getRoleLabel(user.role)}}</td>
                    <td>
                    {{formatRegDate(user.reg_date)}}
                    </td>
                </tr>

    
            </tbody>
    </table>
    


    </div>



</template>




<script>
import axios from 'axios';

export default{
    data: function(){
        return {
            users: [],
            is_initialized: false
        }
    },
    created: function(){
        if(this.id === 0) return;

        var url = '/api/users.json';

        axios.
            get(url)
            .then(response => {
                this.users = response.data;  
                for(const user of this.users) user.reg_date = new Date(user.reg_date);
                this.is_initialized = true;              
            });
            
        
           
    },
    methods: {
        formatRegDate: function(date){
            return date.toLocaleDateString(
                    'ru-RU', 
                    {day:'numeric', month: 'long', year: 'numeric'}
                    );
        },
        getRoleClass: function(role){
            if(role === 'ROLE_ADMIN' || role === 'ROLE_ROOT') return 'text-danger';
            else if(role === 'ROLE_MODERATOR') return 'text-primary';
            else if(role === 'ROLE_USER') return 'text-dark';
        },
        getRoleLabel: function(role){
            if(role === 'ROLE_ROOT') return '≧〔゜゜〕≦';
            if(role === 'ROLE_ADMIN') return 'администратор';
            else if(role === 'ROLE_MODERATOR') return 'модератор';
            else if(role === 'ROLE_USER') return 'пользователь';
        }

    },

    name: "user_list"
}
</script>