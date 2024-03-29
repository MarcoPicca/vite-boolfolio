import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import TypesList from './pages/TypesList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/types',
            name: 'types',
            component: TypesList
        },
    ]
});

export { router }