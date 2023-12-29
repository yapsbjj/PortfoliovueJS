import { createRouter, createWebHistory } from 'vue-router';

import MainCard from '../../components/views/MainCard';
import ProjectCard from '../../components/views/ProjectCard';
import NotFound from '../../components/views/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: MainCard
        },
        {
            path: '/ProjectCard',
            name: 'ProjectCard',
            component: ProjectCard
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router