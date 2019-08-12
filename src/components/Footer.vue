<template>
    <footer>
        <div class="container footer">
            <router-link class="logo-font" :to="{ name: 'home' }">
                Study Assistant
            </router-link>
            <span class="attribution">
                &copy; Copyright 2019, Nam Nguyen
            </span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>