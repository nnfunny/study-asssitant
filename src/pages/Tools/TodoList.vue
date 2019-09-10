<template>  
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='To-do List'></Header>
            <div class="whole-container">
                <div class="todo-container">
                    <header>
                        <input type="text" placeholder="Enter an activity.." id="todo-item" v-model="inputText" v-on:keyup.enter="addTodoItem">
                        <button id="todo-add" v-on:click="addTodoItem">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><g><path class="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></svg>
                        </button>
                    </header>
                </div>
                
                <div class="list-container">
                    <!-- Uncompleted Tasks -->
                    <ul class="todo" id="todo" style="padding: 0">
                        <h3 style="text-align: center; margin: 10px 0 10px 0" class="todo_header">To-do</h3>
                        <div v-if="completedList.length !== 0  && completedList">
                        <li
                            v-for="item in completedList"
                            v-bind:key="item"
                        >
                            {{ item }}
                            <div class="buttons">
                                <button class="remove" v-on:click="deleteUncompletedItem(item)">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>
                                </button>
                                <button class="complete" v-on:click="doneItem(item)">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>
                                </button>
                            </div>
                        </li>
                        </div>
                    </ul>

                    <!-- Compeleted Tasks -->
                    <ul class="todo" id="completed">
                        <h3 style="text-align: center; margin: 10px 0 10px 0" class="completed_header">Done</h3>
                        <div  v-if="uncompletedList.length !== 0  && uncompletedList">
                            <li
                                v-for="item in uncompletedList"
                                v-bind:key="item"
                            >
                                {{ item }}
                                <div class="buttons">
                                    <button class="remove"  v-on:click="deleteCompletedItem(item)">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>
                                    </button>
                                    <button class="complete" v-on:click="undoneItem(item)">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>
                                    </button>
                                </div>
                            </li>
                        </div>
                    </ul>
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
export default {
    name: 'TodoList',
    components: {
        Header,
        SideBar,
        Footer,
    },
    data: function(){
        return {
            completedList: [],
            uncompletedList: [],
            inputText: null,
        }
    },
    methods: {
        addTodoItem: function() {
            this.completedList.push(this.inputText);
            this.inputText = null;
        },
        deleteUncompletedItem: function(item) {
            let index = this.completedList.indexOf(item)
            this.completedList.splice(index, 1)
        },
        deleteCompletedItem: function(item) {
            let index = this.uncompletedList.indexOf(item)
            this.uncompletedList.splice(index, 1)
        },
        doneItem: function(item){
            let index = this.completedList.indexOf(item)
            let removedItem = this.completedList.splice(index, 1)
            this.uncompletedList.push(removedItem.toString())
        },
        undoneItem: function(item){
            let index = this.uncompletedList.indexOf(item)
            let removedItem = this.uncompletedList.splice(index, 1)
            this.completedList.push(removedItem.toString())
        }
    },
}
</script>
<style scoped>
    li {
        list-style: none;
    }
    .whole-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .list-container {
        position:absolute;
        top: 25vh;
    }
    .noFill {
        fill: none;
    }

    .todo-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header {
        width: 350px;
        height: 80px;
        padding: 15px;
        background: #cdd4cf4b;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 30px;
        box-shadow: 0px 0px 5px 0px rgba(161, 156, 156, 0.274);
    }

    header input {
        width: 100%;
        height: 50px;
        float: left;
        color: gray;
        font-size: 15px;
        font-weight: 400;
        text-indent: 18px;
        padding: 0 60px 0 0;
        background: rgba(128, 177, 138, 0.171);
        border-radius: 5px 25px 25px 5px;
        border: 0px;
        -webkit-box-shadow: none;
                box-shadow: none;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        z-index: 1;
    }

    header button {
        position: absolute;
        right: 10px;
        width: 50px;
        height: 50px;
        z-index: 3;
        border-radius: 25px;
        background: rgba(187, 181, 181, 0.404);
        border: 0;
        -webkit-box-shadow: none;
                box-shadow: none;
        outline: none;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    header button svg {
        width: 16px;
        height: 16px;
    }

    ul.todo {
        width: 100%;
        float: left;
    }

    ul.todo li {
        width: 100%;
        height: 50px;
        float: left;
        margin: 0 0 10px 0;
        position: relative;
        background: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.15);
                box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.15);
        font-size: 14px;
        font-weight: 500;
        color: #444;
        line-height: 22px;
        padding: 14px 100px 14px 14px;
    }

    ul.todo li .buttons {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
    }

    ul.todo li .buttons button {
        width: 50px;
        height: 50px;
        position: relative;
        float: left;
        background: none;
        border: 0px;
        -webkit-box-shadow: none;
                box-shadow: none;
        outline: none;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    ul.todo li .buttons button svg {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -11px 0 0 -11px;
    }

    ul.todo li .buttons button svg .fill {
        fill: #c0cecb;
        -webkit-transition: fill 0.2s ease-in-out;
        transition: fill 0.2s ease-in-out;
    }

    ul.todo li .buttons .remove:hover svg .fill {
        fill: #e85656;
    }

    ul.todo li .buttons .complete svg {
        border-radius: 50%;
        border: 1.5px solid #56e86e;
    }

    ul.todo li .buttons .complete svg .fill {
        fill: #56e86e;
    }

    ul.todo li:last-of-type {
        margin: 0;
    }

    ul.todo li .buttons button:last-of-type:before {
        content: "";
        width: 1px;
        height: 30px;
        position: absolute;
        background: #edf0f1;
        left: 0;
        top: 10px;
    }

    ul.todo#completed li .buttons button.complete svg {
        background: #56e86e;
        border: 0px;
    }

    ul.todo#completed li .buttons button.complete svg .fill {
        fill: white;
    }

    ul.todo:not(#completed) li .buttons button.complete:hover svg {
        background: rgba(37, 185, 154, 0.75);
    }

    ul.todo:not(#completed) li .buttons button.complete:hover svg .fill {
        fill: #fff;
    }

    ul.todo#completed:not(:empty) {
        opacity: 0.5;
        position: relative;
        padding: 60px 0 0 0;
    }

    ul.todo#completed:not(:empty):before {
        content: '';
        width: 150px;
        height: 1px;
        background: #64c092;
        position: absolute;
        top: 30px;
        left: 50%;
        margin: 0 0 0 -75px;
    }
    @media (min-width: 756px) {
        header {
            width: 600px;
        }
    }
</style>