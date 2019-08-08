import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import ReadMe from './pages/ReadMe.vue'


export default [
    {
        name: 'home',
        path: '/', 
        component: Home,
    },
    {
        name: 'read-me',
        path: '/read-me', 
        component: ReadMe,
    },
    {
        name: 'contact',
        path: '/contact', 
        component: Contact,
    },
]