<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Home'></Header>
            <img src="../assets/study.png" alt="Study" class="landing-image">
            <div class="feature-container">
                <div class="feature-statement">Study Assistant <b>facilitates</b> your learning and <b>boosts up</b> your motivation</div>
                <div class="features">
                    <div class="feature" v-for="feature in features" v-bind:key="feature.id">
                        <div class="feature-name">
                            {{ feature.name }} 
                        </div>
                        <div class="feature-icon"><i v-bind:class="[feature.icon]"></i></div>
                        <div class="feature-description">
                            {{ feature.description }}
                        </div>
                    </div>
                        
                </div>
                <div class="get-started">
                    <router-link to="/english-story"><button class="button-started">Let's get started!</button></router-link>
                </div>
            </div>
            <div style="height: 10vh"></div>
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
        data: function () {
            return {
                features: [
                    {
                        name: "Increase Productivity",
                        description: "Boost up your value of progression and Extract certain achievements",
                        icon: "fas fa-award",
                    },
                    {
                        name: "Manifold Useful Tools",
                        description: "Deploy and Run necessary study applications on browers, light and fast",
                        icon: "fas fa-toolbox",
                    },
                    {
                        name: "Relaxing time",
                        description: "Proivide some simple games to reduce stress",
                        icon: "fas fa-gamepad",
                    },
                ]
            }
        },
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

    .feature-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 100px 20px 20px 20px;
    }

    .features {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 20px 30px 20px;
    }

    .feature {
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .feature-description {
        text-align: center;
        font-size: 1rem;
    }

    .feature-statement {
        font-size: 1.5rem;
        text-align: center;
    }

    .feature-name {
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
    }

    .feature-icon {
        font-size: 3rem;
    }

    .button-started {
        color: rgb(54, 52, 52);
        cursor: pointer;
        padding: 10px 30px;
        display: inline-block;
        letter-spacing: 1px;
        font-weight: 700;
        outline: none;
        position: relative;
        transition: all 0.3s;
        
        border-radius: 50px;
        overflow: hidden;
        background: #dfe4e4;
    }

    .button-started:hover{
        background: #c5c4c4;
    }

    .button-started:before {
        position: absolute;
        content: '→';
        transition: all 0.2s ease-in-out;
        left: 150%;
        top: 25%;
    }

    .button-started:hover:before {
        left: 88%;
    }

    /* ---------------------------------------------------
    MEDIAQUERIES
    ----------------------------------------------------- */    
    @media (max-width: 768px) {
        .features {
            flex-direction: column;
        }

        .feature-description {
            text-align: center;
            font-size: 0.8rem;
        }

        .feature-statement {
            font-size: 1.1rem;
            text-align: center;
        }

        .feature-name {
            font-weight: bold;
            font-size: 1rem;
        }
    }
</style>

