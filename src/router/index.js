import FriendsView from '@/views/FriendsView';
import HomeView from '@/views/HomeView';
import  ChatView from '@/views/ChatView'
import  MatchView from '@/views/MatchView'

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
        },
        {
            path: '/chat/:username',
            name: 'Chat',
            component: ChatView,
            props: true
        },
        {
            path: '/Match/:name',
            name: 'Match',
            component: MatchView,
            props: true
        }
    ]
})

export default router;