<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Home'></Header>
            <img src="../assets/study.jpg" alt="Study" class="landing-image">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, molestias rerum animi laborum sed quidem eaque tenetur veritatis explicabo? Nisi atque ipsum doloremque laborum quas nostrum quidem asperiores. Architecto, enim!</p>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header'
    import SideBar from '../components/SideBar'
    import Footer from '../components/Footer'
    export default {
        name: 'Home',
        components: {
            Header,
            SideBar,
            Footer,
        }
    }
</script>
<style>
    .landing-image {
        max-width: 100%;
        height: auto;
    }
</style>

