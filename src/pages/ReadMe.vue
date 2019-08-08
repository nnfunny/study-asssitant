<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='README'></Header>
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
