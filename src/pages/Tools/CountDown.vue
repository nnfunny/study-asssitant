<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Countdown'></Header>
            <div class="timer">
                <div class="timer-controller">
                    <div>
                        <button
                                v-for="button in timeAmountButtons"
                                v-bind:key="button.id"
                                class="timer-button"
                                v-on:click="startTimer(button.data)"
                        >{{ button.text }}</button>
                    </div>
                    <input 
                            type="text" 
                            name="minutes" 
                            placeholder="Enter minutes" 
                            v-model="minutes"
                            v-on:keyup.enter="minutesInput"
                    >
                </div>
                <div class="time-display">
                    <h1 class="time-left"> {{ displayTime }}</h1>
                    <p class="end-time-clock">{{ displayEndTime }}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import SideBar from '@/components/SideBar'
    import Footer from '@/components/Footer'
    import { times } from '@/mixins/time.js'
    export default {
        mixins: [times],
        name: 'CountDown',
        components: {
            Header,
            SideBar,
            Footer,
        },
        data: function(){
            return {
                minutes: "",
                displayTime: "",
                displayEndTime: "",
                countdown: ""
            }
        },
        methods: {
            timeLeft: function(seconds) {
                const minutes = Math.floor(seconds / 60);
                const remainderSeconds = seconds % 60;
                const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
                this.displayTime = display
            },
            endTime: function(timestamp) {
                const end = new Date(timestamp);
                const hour = end.getHours();
                const adjustedHour = hour > 12 ? hour - 12 : hour;
                const minutes = end.getMinutes();
                this.displayEndTime = `Stop At ${adjustedHour < 10 ? '0' : ''}${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
            },
            startTimer: function(time){
                let seconds = parseInt(time);

                // Clear any last timers
                clearInterval(this.countdown)

                const now = Date.now();
                const then = now + seconds * 1000;
                this.timeLeft(seconds);
                this.endTime(then);

                this.countdown = setInterval(() => {
                    const secondsLeft = Math.round((then - Date.now()) / 1000);
                    if(secondsLeft < 0){
                        clearInterval(this.countdown);
                        return;
                    }
                    this.timeLeft(secondsLeft)
                }, 1000)
            },
            minutesInput: function() {
                let minutes = parseFloat(this.minutes)
                this.startTimer(minutes * 60);
                this.minutes = ""
            } 
        }
    }
</script>
<style scoped>
    .timer {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .timer-controller div {
        flex: 2;
        display: flex
    }

    .timer-controller {
        display: flex;
    }

    .timer-controller input {
        flex: 1;
        border: 1px solid rgba(173, 173, 173, 0.568);
        padding: 0.6rem;
        font-weight: bold;
        box-shadow: 0px 1px 1px 1px gray;
        height: 80px;
    }

    .timer-button {
        flex: 1;
        font-weight: bold;
        color: white;
        background: rgb(116, 231, 116);
        cursor: pointer;
        font-size: 1.3rem;
        border: 1px solid rgba(127, 139, 127, 0.479);
        box-shadow: 0px 1px 1px 1px gray;
        height: 80px;
    }

    .timer-button:hover,
    .timer-button:focus {
        background: rgba(0,0,0,0.2);
    }

    .time-display {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .time-left {
        font-size: 8rem;
    }

     .end-time-clock {
        font-size: 2rem;
    }

    @media (max-width: 700px) {
        .timer {
            display: flex;
        }

        .timer-controller {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .timer-controller div {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .timer-controller input {
            width: 100vw;
        }

        .timer-button {
            font-size: 1.09rem;
        }
    }
</style>
