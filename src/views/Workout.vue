<template>
    <div id="rep">
        <button id="exitTren" @click="trenBack">exit</button>   
    </div>
     
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const trenBack= () => {
router.back()
}

</script>


<style scoped>
#rep{   
    width:100%;
    height:100%;
    background-color:red;
    border:1px solid grey;
    display:grid;
    grid-auto-columns:repeat(3,1fr);
    grid-template-rows:repeat(2,1fr);
}
#exitTren{
    width:7rem;
    height:3.5rem;
    border:1px solid grey;
    border-radius:1rem;
    grid-column:1;
    margin:1rem;

}
</style>
