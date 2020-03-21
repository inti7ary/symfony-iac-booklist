<template>

        <div style="margin: 2% 0 4% 0" class="custom-file">
            <input @change="uploadImg" accept="image/x-png,image/jpeg" type="file" class="custom-file-input" id="customFileLang" lang="es">
            <label  class="custom-file-label" for="customFileLang">Выберите фото</label>
        </div>

</template>

<script>
import axios from 'axios';


export default{
    data(){
        return {
            request_url: this.url
        }
    },
    props:{
        url:{
            type: String,
            default: '/books/img'
        }
    },
    methods: {
            uploadImg(event){
                let data = new FormData();

                var file = event.target.files[0];
                data.set('img', file);
               
                var config = {
                   headers: {'Content-Type': 'multipart/form-data'}
                };

               console.log(data);

                axios
                    .post(this.request_url, data, config)
                    .then(response => {
                        var img_url = response.data.img;
                        console.log('img_url' + img_url);
                        this.$emit('uploaded', img_url);
                        
                    }).catch(error => {
           
                    });
            }},
    name: "img_upload"
}


</script>
