<template>
  <div class="not-found">
    <h2>404 - Page non trouvée</h2>
    <p>Désolé, la page que vous recherchez n'existe pas.</p>
    <router-link to="/">Retour à l'accueil</router-link>
    <router-views></router-views>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}


</style>
