<template>
<div id="boxProfile" v-if="widthWindow >= 840">

<div id="sectionProfileOne">
    <div class="avatar">
    </div>
    <p id="nameUser"> {{user.name}} </p>
    <button id="leaveProfile" @click="$emit('toggle')">Выйти</button>
        <p class="stats" id="height">Рост {{user.height}}см </p>
        <p class="stats" id="weight">Вес {{user.weight}}кг</p>            
</div>
        <div id="tools">
            
        </div>
            <div id="prodaction">
                Добавить тренировку
            </div>

</div>
<div v-if="widthTabbar <=840" id="tabBar" >
        <avatar class="avatar" @click="tooggleBoxProfile"> </avatar>
        <div id="workout" class="icon"></div>
        <statistic id="tabBarStat" class="icon"></statistic> 
        <div id="tabBarSet" class="icon"></div>
</div>

</template>
<script setup>
import { ref , watch , computed , onMounted, onBeforeMount} from 'vue'
const widthWindow = ref(window.innerWidth)
const widthTabbar = ref(window.innerWidth)

function nowWindow(){
widthWindow.value = window.innerWidth
}
onMounted(() => {
    window.addEventListener('resize' ,nowWindow)
})
onBeforeMount(() => {
    window.removeEventListener('resize' , nowWindow)
})

function nowTabBarWindow(){
    widthTabbar.value = window.innerWidth
}
onMounted(() => {
    window.addEventListener('resize' , nowTabBarWindow)
})
onBeforeMount(() => {
    window.removeEventListener('resize' , nowTabBarWindow)
})
const props = defineProps({
    user:Object,
})
defineEmits(['toggle'])
</script>
<style >
#height{
    grid-row:2;
}
#weight{
    grid-row:2;
}
#boxProfile{
    width:90%;
    height:90%;
    background-color:var(--bg-card);
    margin:1rem;
    border-radius:20px;
    display:grid;
    grid-template-rows:40% 50% 10%;
    font-size:1.1rem;
    box-shadow:0px 2px 10px var(--text-muted);
}
#sectionProfileOne{
    display:grid;
    grid-template-rows:60% 40%;
    grid-template-columns:60% 40%;
}
#nameUser{
    grid-column:1;
    grid-row:1;
    margin-top:6rem;
    font-size:1.35rem;
    margin-left:1rem;
}
#tools{
    grid-row: 2;
    display:flex;
    flex-direction: column;
    margin:1rem;
    gap:4rem;
    align-content:center;
    list-style:none;
    justify-items:center;
    font-size:1rem;
    margin-left:1rem;
}

#prodaction{
    grid-row:3;
    background-color: var(--text-muted);
    margin:0.5rem;
    display:flex;
    opacity:1;
    border-radius:10px;
    box-shadow:0px 2px 10px var(--text-muted);
    justify-content:center;
    align-items:center;
    color:var(--text-main);
    transition:transform 0.3s ease;
}
#prodaction:hover{
    transform:scale(1.009) translateY(-2px);
}

.avatar{
    width:5rem;
    height:4rem;
    background-image: url('fotoProfile.webp');
    border-radius:100%;
    grid-row:1;
    grid-column:1;
    margin-left:1rem;
    margin-top:1rem;
    border:2px solid var(--text-muted);
    box-shadow:0px 2px 10px var(--text-muted);
    background-size:cover;
    background-repeat:no-repeat;
}
#tabBar{
    width:5rem;
    height:100%;
    background-color:var(--bg-card);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-items:center;
    gap:6rem;
    box-shadow:0px 2px 10px var(--text-muted);
}
#tabBar .avatar{
    width:4rem;
    height:3.5rem;
    margin:1rem;

}
.stats{
    font-size:1.2rem;
    margin:1rem;
}
#tabBarStat{
    background-image:url('stat.webp');
    display:flex;
    width:3.5rem;
    height:3.3rem;
    background-size:cover;
    transition:transform 0.3s ease;
}

#tabBarSet{
    background-image: url('settings.png');
    display:flex;
    width:3.5rem;
    height:3.5rem;
    background-size:cover;
    transition:transform 1s ease;
}
#workout{
    background-image: url('workaut.jpg');
    display:flex;
    width:4.2rem;
    height:4.2rem;
    background-size:cover;
    transition:transform 0.5s ease;

}
#workout:hover{
    transform:translateY(-10px) scale(1.05);
}
#tabBarSet:hover{
    transform:rotate(360deg) translateY(1px);
}
#tabBarStat:hover{
    transform:scale(1.1) translateY(-5px);
}
#leaveProfile{
    width:6rem;
    height:3rem;
    border-radius:12px;
    border:1px solid var(--text-muted);
    font-size:0.9rem;
    transition:transform 0.3s ease;
    background-color:var(--bg-card);
    margin:1rem;
}
#leaveProfile:hover{
        transform:scale(1.05) translateY(-1px);
}
@media(max-width:1024px){
    #nameUser{
        font-size:1.4rem;
    }
}


</style>
