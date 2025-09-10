<template>
<FormAuto v-if="isAvto" @auth-success="onAuthSuccess" @set-user="userSet"/>
<div id="sectionMain" v-else>
  <Header />
  <div id="mainBox">
    <main>
      <Profile :user="user" @toggle="isAvto = !isAvto"/>
    </main>
      <Main/>
  </div>
</div>
</template>
<script setup>
import { ref , watch , computed , onMounted} from 'vue'
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import FormAuto from './components/FormAuto.vue'
import Main from './components/Main.vue'




const isAvto = ref(true)
const user = ref({name:'',height:'',weight:'',login:''})
function userSet(userData){
  user.value = userData

}

function onAuthSuccess(){
  isAvto.value = false
}
onMounted(() =>{
  const savedData = localStorage.getItem('user')
  if(savedData){
    user.value = JSON.parse(savedData)
    isAvto.value = false
  }
})
watch(user , (newVal) => {
  localStorage.setItem('user' , JSON.stringify(newVal))

}, { deep:true })

function leaveProfile(){
    isAvto.value = true
}


</script>
<style>

#sectionMain{
  width:100%;
  height:100%;
  display:grid;
  grid-template-rows:auto 1fr;
}
#mainBox{
  width:100%;
  height:100%;
  background:var(--bg-main);
  display:grid;
  grid-template-columns:25% 75%;
}
@media(max-width:1250px){
    #mainBox{
        grid-template-columns:30% 70%;
    }
}
@media(max-width:1024px){
        #mainBox{
        grid-template-columns:40% 60%;
    }
}
@media(max-width:840px){
        #mainBox{
        grid-template-columns:11% 89%;
    }
}

</style>
