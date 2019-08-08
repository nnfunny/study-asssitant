<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light"> 
        <div class="container-fluid"> 
            <button type="button" id="sidebarCollapse" class="navbar-btn"> 
                <span></span> 
                <span></span> 
                <span></span> 
            </button>
            <h3 id="title-site">{{ title }}</h3> 
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        props: ['title'],
    }
</script>