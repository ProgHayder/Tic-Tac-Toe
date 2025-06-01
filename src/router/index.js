import FriendsView from '@/views/FriendsView';
import HomeView from '@/views/HomeView';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/friends',
            name: 'friends',
            component: FriendsView
        }
    ]
})

export default router;