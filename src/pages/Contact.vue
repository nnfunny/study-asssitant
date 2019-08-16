<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Contact'></Header>
            <div style="height: 20vh"></div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header'
    import SideBar from '../components/SideBar'
    import Footer from '../components/Footer'
    export default {
        name: 'Contact',
        components: {
            Header,
            SideBar,
            Footer,
        }
    }
</script>
