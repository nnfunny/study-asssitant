<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='English Story'></Header>
            <WritePost></WritePost>
            <StoryPost></StoryPost>
            <div style="height: 20vh"></div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import SideBar from '@/components/SideBar'
    import Footer from '@/components/Footer'
    import StoryPost from '@/components/StoryPost'
    import WritePost from '@/components/WritePost'
    export default {
        name: 'EnglishStory',
        components: {
            Header,
            SideBar,
            Footer,
            StoryPost,
            WritePost,
        },
    }
</script>
