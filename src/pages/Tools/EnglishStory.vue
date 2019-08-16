<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='English Story'></Header>
            <div style="height: 100vh; position: relative">

            </div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import SideBar from '@/components/SideBar'
    import Footer from '@/components/Footer'
    export default {
        name: 'EnglishStory',
        components: {
            Header,
            SideBar,
            Footer,
        }
    }
</script>
