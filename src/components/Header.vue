<template>
  <header id="header">
    <strong  id="nameApp">NextRep</strong>
    <nav id="nav">
      <ul class="nav-links">
        <li><a href="">Тренировки</a></li>
        <li><a href="">Статистика</a></li>
        <li><a href="">О сайте</a></li>
      </ul>
    </nav>
  </header>  
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
function goTo( path , event){
    router.push(path)
    //const parent = event.target.closest('#sectionTrek')
    //if(parent) parent.remove()
}
</script>

<style scoped>
#header{
  width:100%;
  height:auto;
  background:var(--text-muted);
  align-items:center;
  justify-content:center;
  justify-items:center;
  display:grid;
  grid-template-columns:35% 65%;
  color:var(--text-main);
  min-height:5rem;
}
#nameApp{
    font-size:3rem;
}
.nav-links{
  list-style:none;
  display:flex;
  gap:6.5rem;
  font-size:1.1rem;
}
.nav-links a{
  text-decoration:none;
  color:var(--text-main);
  display:block;
  position: relative;

}
.nav-links a::after{
  content:'';
  position: absolute;
  width:0%;
  bottom:-4px;
  height:2px;
  left:0;
  background-color:var(--accent);
  transition:width 0.3s ease;
}
.nav-links a:hover::after{
  width:100%;

}
.nav-links a:hover{
  transform:translateY(-2px);
  transition:transform 0.3s ;

}
@media (max-width:1023px){
  .nav-links{
    gap:5rem;
    font-size:1.2rem;
  }
    #nameApp{
    font-size:2.2rem;
  }
}
@media (max-width:840px){
  .nav-links{
    gap:4rem;
    font-size:1.1rem;
  }
    #nameApp{
    font-size:1.9rem;
  }
}
@media (max-width:640px){
  .nav-links{
    gap:1.8rem;
    font-size:0.95rem;
  }
      #nameApp{
    font-size:1.75rem;
  }
}
@media (max-width:440px){
  .nav-links{
    gap:0.75rem;
    font-size:0.75rem;
  }
}
@media (max-width:344px){
  .nav-links{
    gap:0.65em;
    font-size:0.7rem;
  }
        #nameApp{
    font-size:1.2rem;
  }
}


</style>