<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content" >
            <Header title='Home'></Header>
            <div style="height: auto;">
                <img src="../assets/study.jpg" alt="Study" class="landing-image">
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum. Voluptate quod amet assumenda aperiam, molestiae odio alias eveniet? Illo, architecto praesentium fuga odio cum quos magni blanditiis repudiandae in.</p>
                <Footer></Footer>
            </div>
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

