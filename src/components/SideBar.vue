<template>
    <!-- Sidebar --> 
    <nav id="sidebar"> 
        <div class="sidebar-header"> 
            <a href="/"><h3>Study Assistant</h3></a> 
        </div> 
        <ul class="list-unstyled components"> 
            <!-- Home Page --> 
            <li> 
                <a href="/">Home</a> 
            </li> 
            <!-- Tools Page --> 
            <li class="active"> 
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Study Tools</a> 
                <ul class="collapse list-unstyled" id="homeSubmenu"> 
                    <li> <a href="/english-story">English Story</a> </li> 
                    <li> <a href="/calculator">Calculator</a> </li> 
                    <li> <a href="/todo-list">Todo List</a> </li> 
                    <li> <a href="/dictionary-word">Dictionary</a> </li> 
                    <li> <a href="/countdown-timer">Countdown</a> </li> 
                </ul> 
            </li> 
            <!-- Game Page --> 
            <li> 
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Games</a> 
                <ul class="collapse list-unstyled" id="pageSubmenu"> 
                    <li> <a href="/flappy-bird">Flappy Bird</a> </li> 
                    <li> <a href="/dinosaur">Dinasour</a> </li> 
                    <li> <a href="/rock-papper-scissors">Rock Papper Scissor</a> </li> 
                </ul> 
            </li> 
            <!-- README page --> 
            <li> 
                <a href="/about-me">About Me</a> 
            </li>
            <!-- Contact page -->
            <li> 
                <a href="/contact">Contact</a> 
            </li> 
        </ul> 
        <!-- Subscribe the website --> 
        <ul class="list-unstyled CTAs"> 
            <li> 
                <a class="download" ><button type="submit" id="subscribe" style="border: none; background: none; color: #84d184; box-shadow: none; cursor: pointer; outline: none;">Subscribe to Newsletters</button> </a> 
            </li> 
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'SideBar',
    }
</script>