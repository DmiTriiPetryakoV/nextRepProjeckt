<template>
<div id="sectionForm">
    <form @submit.prevent="handleSubmit" id="form" >
        <h2>Вход</h2>
        <input id="nameUser2" class="vvod" placeholder="Имя" maxlength="30" v-model="nameUser"/>
        <input id="Login" class="vvod" placeholder="Логин" maxlength="15" v-model="Login"/>
        <input id="height" class="vvod" placeholder="Рост" maxlength="4" v-model="heightUser"/>
        <input id="weight" class="vvod" placeholder="Вес" maxlength="4" v-model="weightUser">
        <p v-if="errorMessage">{{ errorMessage }}</p>
       
        <button type="submit" id="avto"  >Авторизация</button>
    </form>
</div>  
</template>
<script setup>
import { ref , watch , computed , onMounted, triggerRef} from 'vue'
const nameUser = ref('')
const Login = ref('')
const heightUser = ref('')
const weightUser = ref('')
const errorMessage = ref('')
const emit = defineEmits(['auth-success'])

function handleSubmit(){
    errorMessage.value = ''
 

if(!nameUser.value.trim()){
    errorMessage.value = 'Введите ваше имя'
    return;
    }
if(!Login.value.trim()){
    errorMessage.value = 'Введите логин'
    return;
    }
if(heightUser.value.trim() && isNaN(+heightUser.value)){
    errorMessage.value = 'Рост должен быть числом'
    return;
}
if(weightUser.value.trim() && isNaN(+weightUser.value)){
    errorMessage.value = 'Вес должен быть числом'
    return;
}
    emit('set-user', {
        name:nameUser.value,
        height:heightUser.value,
        weight: weightUser.value,
        login:Login.value,
    
})
   emit('auth-success')


}

</script>




<style scoped>
#sectionForm{
    width:100%;
    height:100%;
    justify-content:center;
    justify-items:center;
    align-items:center;
    display:flex;
    background-color:var(--text-main);
}



#form{
    width:50%;
    height:70%;
    background-color:var(--text-muted);
    margin:0;
    border:2px solid var(--text-main);
    flex-direction:column;
    gap:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:2rem;  
    box-shadow:1px 5px 10px var(--text-muted);
}
p{
    font-size:1.2rem;

}



.vvod{
    width:80%;
    min-height:3rem;
    border-radius:1.5rem;
    font-size:1.2rem;
    background-color:var(--bg-main);
    border:2px solid var(--text-main);
    box-shadow:1px 5px 10px var(--text-main);
}
#avto{
    width:8.5rem;
    height:2.5rem;    
    border-radius:10px;
    transition:transform 0.3s;
    font-size:0.9rem;
    font-family:'Poppins' sans-serif;
}
#avto:hover{
    transform:scale(1.05);
}
@media(max-width:640px){
    #form{
        width:70%;
    }
}
@media(max-width:540px){
    #form{
        width:80%;
        height:80%;
    }
}




</style>