<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Home'></Header>
            <img src="../assets/study.jpg" alt="Study" class="landing-image">
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header'
    import SideBar from '../components/SideBar'
    export default {
        name: 'Home',
        components: {
            Header,
            SideBar,
        }
    }
</script>
<style>
    .landing-image {
        max-width: 100%;
        height: auto;
    }
</style>

