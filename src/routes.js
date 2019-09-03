import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import AboutMe from './pages/AboutMe.vue'
import EnglishStory from './pages/Tools/EnglishStory.vue'
import Calculator from './pages/Tools/Calculator.vue'


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
    {
        name: 'english-story',
        path:'/english-story',
        component: EnglishStory,
    },
    {
        name: 'calculator',
        path:'/calculator',
        component: Calculator,
    }
]