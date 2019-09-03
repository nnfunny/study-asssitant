<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='English Story'></Header>
            <div class="container">
                <div class="btn-story">    
                    <button 
                        v-for="section in sections"
                        v-bind:key="section"
                        v-on:click="currentSection = section"
                    >{{ section }}</button>
                </div>

                <keep-alive>
                    <transition name="fade">
                        <component
                            v-bind:is="currentSectionComponent"
                        ></component>
                    </transition>
                </keep-alive>
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
    import StoryPost from '@/components/StoryPost'
    import WriteStory from '@/components/WriteStory'
    export default {
        name: 'EnglishStory',
        components: {
            Header,
            SideBar,
            Footer,
            StoryPost,
            WriteStory,
        },
        data: function(){
            return {
                currentSection: 'Story Post',
                sections: ['Story Post', 'Write Story']
            }
        },
        computed: {
            currentSectionComponent: function() {
                let section = this.currentSection.replace(/\s+/g, '')
                return section
            }
        }
    }
</script>
<style>
    .btn-story {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }

    .btn-story button {
        border-radius: 5px;
        color: white;
        font-weight: bold;
        box-shadow: 0 5px rgb(212, 206, 206);
        margin: 5px;
        outline: none;
        cursor: pointer;
        background: rgb(166, 209, 166);
        border: 1px solid rgb(173, 206, 173);
        overflow: hidden;
        background-repeat:no-repeat;

    }

    .btn-story button:hover {
        background: white;
        color: rgb(166, 209, 166);
    }

    .btn-story button:active {
        background-color: #93ad93;
        box-shadow: 0 2px rgb(114, 112, 112);
        transform: translateY(3px);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.45s ease-in-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
