import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import AboutMe from './pages/AboutMe.vue'


export default [
    {
        name: 'home',
        path: '/', 
        component: Home,
    },
    {
        name: 'about-me',
        path: '/about-me', 
        component: AboutMe,
    },
    {
        name: 'contact',
        path: '/contact', 
        component: Contact,
    },
]