<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Calculator'></Header>
            <div class="container">
                <div class="calculator-box">
                    <div class="row">
                        <input  type="text" v-model="inputValue" class="entry" readonly>
                    </div>
                    <div class="row">
                        <button
                            v-for="button in row1"
                            v-bind:key="button.id"
                            v-bind:class='[button.style]'
                            v-on:click='runFunction(button.action, button.item)'
                        >{{ button.item }}</button>
                    </div>
                    <div class="row">
                        <button
                            v-for="button in row2"
                            v-bind:key="button.id"
                            v-bind:class='[button.style]'
                            v-on:click='runFunction(button.action, button.item)'
                        >{{ button.item }}</button>
                    </div>
                    <div class="row">
                        <button
                            v-for="button in row3"
                            v-bind:key="button.id"
                            v-bind:class='[button.style]'
                            v-on:click='runFunction(button.action, button.item)'
                        >{{ button.item }}</button>
                    </div>
                    <div class="row">
                        <button
                            v-for="button in row4"
                            v-bind:key="button.id"
                            v-bind:class='[button.style]'
                            v-on:click='runFunction(button.action, button.item)'
                        >{{ button.item }}</button>
                    </div>
                    <div class="row">
                        <button
                            v-for="button in row5"
                            v-bind:key="button.id"
                            v-bind:class='[button.style]'
                            v-on:click='runFunction(button.action, button.item)'
                        >{{ button.item }}</button>
                    </div>
                </div>
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
import { calButtons } from '@/mixins/calButtons.js'

export default {
    mixins: [calButtons],
    name: 'Calculator',
    components: {
        Header,
        SideBar,
        Footer,
    },
    data: function() {
        return {
            inputValue: "",
            valMemoryStored: "",
            text: ''
        }
    },
    methods: {
        numberButton: function(number) {
            this.inputValue += number
        },
        operatorButton: function(operator) {
            this.inputValue += operator
        },
        equalButton: function(){
            this.inputValue = eval(this.inputValue)
        },
        clearButton: function(clear){
            this.text = clear
            this.inputValue = "";
            this.previousValue = "";
        },
        earseButton: function() {
            let sequenceInput = this.inputValue.split("")
            sequenceInput.pop()
            this.inputValue = sequenceInput.join("")
        },
        copyButton: function(copy){
            this.text = copy
            this.valMemoryStored = this.inputValue;
            this.inputValue = 0;
        },
        pasteButton: function(paste) {
            this.text = paste
            if(this.valMemoryStored){
                this.inputValue = this.valMemoryStored;
                this.newValue = this.valMemoryStored;
            }
        },
        runFunction: function(funcName, value){
            eval("this."+ funcName + "('" + value + "')")
        }
    }
}
</script>
<style scoped>
    .calculator-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 570px;
        transform: scale(1.1)
        
    }

    .entry {
        width: 282px;
        height: 60px;
        border-radius: 10px;
        padding: 10.5px;
        font-size: 30px;
        font-weight: bold;
        text-align: right;
        color: white;
        background: rgba(101, 212, 27, 0.644);
        border: 1px solid rgb(190, 221, 173);
        box-shadow: 1px 1px 1px rgba(119, 116, 116, 0.726);
        margin: 10px;
        letter-spacing: 0.05cm;
    }

    .number-button {
        color: white;
        width: 61px;
        height: 61px;
        font-size: 30px;
        margin: 10px 4px;
        border: 1px solid rgb(162, 212, 167);
        font-weight: bold;
        background: rgba(111, 177, 111, 0.726);
        box-shadow: 1px 1px 1px rgba(119, 116, 116, 0.726);
    }

    .number-button:hover {
        background: rgb(67, 155, 67);
    }

    .operator-button {
        color: white;
        width: 61px;
        height: 61px;
        font-size: 30px;
        margin: 10px 4px;
        border: 1px solid rgba(119, 187, 192, 0.692);
        font-weight: bold;
        background: rgba(93, 211, 201, 0.534);
        box-shadow: 1px 1px 1px rgba(119, 116, 116, 0.726);
    }

    .operator-button:hover {
        background: rgb(49, 166, 196);
    }

    .clear-button {
        color: white;
        width: 61px;
        height: 61px;
        font-size: 25px;
        margin: 10px 4px;
        border: 1px solid rgba(119, 187, 192, 0.692);
        font-weight: bold;
        background: rgba(207, 130, 124, 0.822);
        box-shadow: 1px 1px 1px rgba(119, 116, 116, 0.726); 
    }

    .clear-button:hover {
        background: rgb(192, 50, 40);
    }

    .special-button {
        color: white;
        width: 61px;
        height: 61px;
        font-size: 25px;
        margin: 10px 4px;
        border: 1px solid rgba(171, 206, 77, 0.692);
        font-weight: bold;
        background: rgba(197, 216, 23, 0.74);
        box-shadow: 1px 1px 1px rgba(119, 116, 116, 0.726); 
    }

    .special-button:hover {
        background: rgb(217, 255, 0);
    }

    .equal-button {
        color: white;
        width: 61px;
        height: 61px;
        font-size: 25px;
        margin: 10px 4px;
        border: 1px solid rgba(183, 102, 199, 0.692);
        font-weight: bold;
        background: rgba(199, 111, 202, 0.671);
        box-shadow: 1px 1px 1px rgba(119, 116, 116, 0.726); 
    }

    .equal-button:hover {
        background: rgb(166, 34, 199);
    }

    @media (max-width: 765px) {
        .calculator-box {
            transform: scale(1);
            height: 500px;
        }
    }
</style>