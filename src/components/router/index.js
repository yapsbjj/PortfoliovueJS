import Vue from 'vue';
import {CreateRouter, createWebHistory} from 'vue-router';
import VueRouter from 'vue-router';
import MainCard from '.../components/MainCard.vue';
import NotFound from '.../components/NotFound.vue';

Vue.use(VueRouter);
export const router = CreateRouter ( options= {
history: createWebHistory(),
routes: [
  {
    path: '/',
    name: 'MainCard',
    component: MainCard,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound,
  },
],

})

export default router;

