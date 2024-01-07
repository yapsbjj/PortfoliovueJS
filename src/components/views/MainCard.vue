<template>
<div class="wrapper">
 <div class="main-container">
    <div class="container-one">
        <div class="Profile">
            <img src="../../assets/image/Photo.jpg" alt="photo de moi">
            <h1>Yassine Ramdane</h1>
            <p>Développer web</p>
        </div>
     <div class="link">

            <a :href="'https://github.com/yapsbjj'"><h2>Github</h2>
            <img  id="photo" src="../../assets/image/github-mark.png" alt="logo-github"></a>
        </div>
        <div class="link">
            
        <a :href="'https://www.instagram.com/yapsbjj/'"><h2>instagram</h2>
       <img src="../../assets/image/instagram.256x256.png" alt="logo-instagram"></a>
        </div>
        <div class="link">
            
           <a :href="'https://fr.linkedin.com/in/yassine-ramdane-12845a160'"><h2>Linkedin</h2>
        <img src='../../assets/image/linkedin.256x256.png' alt="logo-linkedin"></a>
        </div>
        
    </div>
    <div class="container-two">
        <div class="About-me">
             <h1>A Propos de moi</h1>
             <p>Bonjour à tous, je m'appelle Yassine Ramdane et je suis chef de rang depuis 2008.<br>
                J'ai travaillé dans plusieurs maisons étoilés et aussi dans des palaces parisien notament le Ritz.<br>
            Etant en ce moment en reconversion professionelle, j'étudie pour devenir développeur Web en full stack.</p>
             <div class="Technology-section">
                <h1>Technologies étudiées</h1>
                <div class="logos">
                    
                    <img src="../../assets/image/html-5-logo.219x256.png" alt="logo-html">
                    <img src="../../assets/image/css.256x246.png" alt="logo-css">
                    <img src="../../assets/image/javascript-39424.png" alt="logo-js">
                    <div class="button-container">
                        <div class="project-button">
                        <router-link to="/ProjectCard">Mes Projets</router-link>
                        </div>
                        <div class="project-button">
                            <a href="https://github.com/yapsbjj/Mon-C.V">Mon C.V</a>
                        </div>
                           
                       
                    </div>
                </div>

             </div>
        </div>
    

    </div>
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
    background-color: white;
}
img {
    height: 20px;
}
.main-container {
display: flex;
flex-direction: row;
background-color: blueviolet;
border-radius: 25px;
width: 62%;
}
.container-one ,.container-two{
flex: 1;
}
@media screen and (max-width: 641px){
    .main-container{
        flex-direction: column;
    }
}
    

.container-one{
    background-color:turquoise;
    padding: 2.5%;

    border-radius: 25px;
}
 .Profile img {
    height: 200px;
    border-radius: 50%;
}
.container-two{
    background-color: rgb(143, 143, 202);
    margin: 2.5%;
    width: 60%;
}
.link a{
    text-decoration: none;
    color: black;
    font-size: 10px;
}
.link img{
    height: 2rem;
}
.About-me{
text-align: left;
}
.logos img{
    height: 2.5rem;

}
.Technology-section{
    text-align: center;
}
.button-container{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.project-button{
    background-color: blueviolet;
    border-radius: 15px;
    margin: 5px;
    padding: 5px;

}
.project-button a{
    text-decoration: none;
    color: white;
}

</style>
