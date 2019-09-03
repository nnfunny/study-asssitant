<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Calculator'></Header>
            <div class="container">
                <h1>Calculator</h1>
                <div style="height: 20vh"></div>
                <Footer></Footer>
            </div>
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