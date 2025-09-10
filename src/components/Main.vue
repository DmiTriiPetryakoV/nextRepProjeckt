<template>
    <div id="goga">
        <router-view />
        <div id="sectionTrek">
            <div  id="sport" class="trek" @click="goToTren">
                <p>Тренировки</p>
            </div>
            <div  id="sleep" class="trek">
               <p>Сон</p>
            </div>
            <div  id="eat" class="trek" @click="goToEat">
                <p>Еда</p>
            </div>
        </div>
        <div id="sectionStat">

        </div>


    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const goToTren = () =>{
    router.push('/Workout')
}
const goToEat= () =>{
    router.push('/Eat')
}
const goToSleep = () =>{
    router.push('/Workout')
}
</script>
<style scoped>
#goga{
    width:95%;
    height:90%;
    background:var(--bg-main);
    display:grid;
    grid-template-rows:repeat(2,1fr);
    border-radius:20px;
    border:1px solid var(--text-muted);
    box-shadow:2px 5px 10px var(--text-muted);
    place-items:center;
    margin-top:1rem;
    overflow:hidden;
}
#sectionTrek{
    width:90%;
    height:90%;
    display:flex;
    border:1px solid var(--text-muted);
    justify-content:center;
    align-items:center;
    border-radius:20px;
    flex-direction:row;
    overflow-x:auto;
    overflow-y:hidden;
    white-space:nowrap;
    justify-content:flex-start;
    scroll-behavior:smooth;
    gap:2rem;
    scrollbar-width:none;
    -webkit-ofervlow-scrolling:touch;
    box-shadow:2px 5px 10px var(--text-muted);


}
#sectionStat{
    width:90%;
    height:90%;
    display:flex;
    border:1px solid var(--text-muted);
    justify-content:center;
    align-items:center;
    border-radius:20px;
    box-shadow:2px 5px 10px var(--text-muted);
}
.trek{
    width:17rem;
    height:12rem;
    display:flex;
    flex:0 0 auto;
    margin-left:1rem;
    margin-right:1rem;
    border-radius:15px;
    border:1px solid var(--text-main);
    box-shadow:2px 5px 10px var(--text-muted);
}
#sport{
    background-color:var(--accent);
}
#sleep{
    background-color:var(--accent)
}
#eat{
    background-color:var(--accent);
}
p{
    font-size:1.5rem;
    margin:1rem;
    color:var(--text-main);
    font-family:'Poppins' sans-serif;
}
@media(max-width:840px){
    #goga{
        width:85%;
        height:95%;
        margin-left:3rem;
    }
    .trek{
        width:19rem;
    }
    #sectionTrek{
        gap:4rem;
    }
}

</style>