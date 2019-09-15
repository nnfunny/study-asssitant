<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='About Me'></Header>
            <div class="me-container">
                <img :src="linkImage">
                <div>
                    <p>I am Nam. My full name is Nam Nguyen</p>
                    <p>I am currently an international student at Deakin University in Melbourne, Australia.</p>
                    <p>I specialize in Computer Science. I am a passion of becoming a software engineer, focusing on web developement.</p>
                    <p>In terms of technical interest, my favorite programming languages are Python, Javascript and C#.</p>
                    <p>And for non-technical interest, making videos and reading books are two hobbies on which I spend my spare time.</p>
                    <p>Any feedback about Study Assistant's content and design, please feel free to contact me via <a href="https://www.facebook.com/vietnam.nguyen.186" style="color: blue">Facebook</a>, <a style="color: blue" href="https://www.instagram.com/nam.viet.nguyen/">Instagram</a> or email me: <a style="color: blue" href="/contact">vnngu@deakin.edu.au</a></p>
                </div>
                <div style="height: 5vh"></div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header'
    import SideBar from '../components/SideBar'
    import Footer from '../components/Footer'
    import me from './Tools/img/me.jpg'
    export default {
        name: 'AboutMe',
        components: {
            Header,
            SideBar,
            Footer,
        },
        data: function() {
            return {
                linkImage: me
            }
        }
    }
</script>
<style scoped>
    img{
        width: 250px;
        height: 200px;
        border-radius: 50%;
        box-shadow: 1px 1px 2px 1px rgb(161, 153, 153);
        margin: 50px;
    }

    .me-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 50px;
    }

    @media (max-width: 765px){
        .me-container {
            margin: 20px;
        }
    }

</style>
