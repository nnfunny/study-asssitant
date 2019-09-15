import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import AboutMe from './pages/AboutMe.vue'
import EnglishStory from './pages/Tools/EnglishStory.vue'
import Calculator from './pages/Tools/Calculator.vue'
import Dictionary from './pages/Tools/Dictionary.vue'
import TodoList from './pages/Tools/TodoList.vue'
import CountDown from './pages/Tools/CountDown.vue'
import RPS from './pages/Games/RPS.vue'
import Dinosaur from './pages/Games/Dinosaur.vue'
import FlappyBird from './pages/Games/FlappyBird.vue'


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
    },
    {
        name: 'dictionary',
        path:'/dictionary-word',
        component: Dictionary,
    },
    {
        name: 'todo-list',
        path:'/todo-list',
        component: TodoList,
    },
    {
        name: 'countdown',
        path:'/countdown-timer',
        component: CountDown,
    },
    {
        name: 'rock-papper-scissors',
        path:'/rock-papper-scissors',
        component: RPS,
    },
    {
        name: 'dinosaur',
        path:'/dinosaur',
        component: Dinosaur,
    },
    {
        name: 'flappy-bird',
        path:'/flappy-bird',
        component: FlappyBird,
    }
]