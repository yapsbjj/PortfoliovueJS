<template>
  <h1>Mes projets</h1>
  <router-link to="/">Revenir à l'accueil</router-link>
  <div class="main-container">
  <div class="project-card" v-for="(items, index) in projectData.ProjectArray" v-bind:key="items">
  <h2>{{projectData.ProjectArray[index].Title}}</h2>
  <img src="../../assets/image/ImageProjet.jpg" alt="ImageProjet">
  <p>{{projectData.ProjectArray[index].About}}</p>
  <div class="links">
    <a :href="projectData.ProjectArray[index].Link1" target="blank"><img src="../../assets/image/github-mark.png" alt="logo github"></a>
    <a :href="projectData.ProjectArray[index].Link2" target="blank"><img src="../../assets/image/lien.png" alt="logo liens"></a>
  </div>
  </div>
  </div>
  <router-link to="/">Revenir à l'accueil</router-link>
  <router-view/>
</template>

<script>
import jsonData from "../../components/project.json"
export default {
data(){
return{
    projectData : jsonData 
}
}
}
</script>

<style scoped>
.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: darkolivegreen;
}

.project-card{
  margin: 10px;
  padding: 10px;
  flex-wrap: 0 0 40%;
  background-color: aqua;
  border-radius: 25px;
  box-shadow: black(0, 0, 0, 0.24) 0px 3px 8px;
}
.project-card img {
height: 15rem;
}
.links{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.links img{
  height: 1.5rem;
  margin: 5px;
}
</style>