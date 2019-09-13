<template>
    <div>
        <h4 class="writing-title">Write your own story in English</h4>
        <div class="tool-bar">
            <button 
                    v-for="toolClass in toolClasses" 
                    v-bind:key='toolClass' 
                    v-bind:class='[toolClass.tool]'
                    v-on:click='selectedTool(toolClass.name)'
            ></button>
        </div>
        <hr>
        <div class="writing-content">
            <div class="story-content" contenteditable>
                <p style="color: black">Delete this line and start your story</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WriteStory',
    data: function(){
        return {
            toolClasses: [
                {
                    name: 'underline',
                    tool: 'tool fas fa-underline',
                },
                {
                    name: 'italic',
                    tool: 'tool fas fa-italic',
                }, 
                {
                    name: 'bold',
                    tool: 'tool fas fa-bold',
                },
                {
                    name: 'strikeThrough',
                    tool: 'tool fas fa-strikethrough',
                },
                {
                    name: 'cut',
                    tool: 'tool fas fa-clone',
                },
                {
                    name: 'delete',
                    tool: 'tool fas fa-trash',
                },
                {
                    name: 'undo',
                    tool: 'tool fas fa-undo',
                },
                {
                    name: 'redo',
                    tool: 'tool fas fa-redo',
                },
                {
                    name: 'foreColor',
                    tool: 'tool fas fa-fill',
                },
                {
                    name: 'justifyCenter',
                    tool: 'tool fas fa-align-center',
                },
                {
                    name: 'justifyLeft',
                    tool: 'tool fas fa-align-left',
                },
                {
                    name: 'justifyRight',
                    tool: 'tool fas fa-align-right',
                },
            ]
        }
    },
    methods: {
        underline: function(){
            document.execCommand('underline', false, '');
        },
        italic: function(){
            document.execCommand('italic', false, '');
        },
        bold: function(){
            document.execCommand('bold', false, '');
        },
        strikeThrough: function(){
            document.execCommand('strikeThrough',false,'');
        },
        cut: function(){
            document.execCommand("cut", false, "");
        },
        delete: function(){
            document.execCommand('delete',false,'');
        },
        undo: function(){
            document.execCommand('undo',false,'');
        },
        redo: function(){
            document.execCommand('redo',false,'');
        },
        foreColor: function(){
            let color = prompt("Enter your color in HEX, for example: #4287f5");
            document.execCommand('foreColor',false, color);
        },
        justifyCenter: function(){
            document.execCommand('justifyCenter',false,'')
        },
        justifyLeft: function(){
            document.execCommand('justifyLeft',false,'')
        },
        justifyRight: function(){
            document.execCommand('justifyRight',false,'')
        },
        selectedTool: function(tool){
            eval('this.' + tool +'()')
        }
    }
}
</script>
<style>
    .writing-title {
        text-align: center;
        color: rgb(80, 180, 80);
        margin-bottom: 20px;
    }
    
    .tool-bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tool-bar button {
        border-radius: 3px;
        font-size: 1.2rem;
        padding: 4px;
        margin: 5px;
        outline: none;
        cursor: pointer;
        background: rgb(119, 180, 119);
        border: 1px solid rgb(135, 180, 135);
        overflow: hidden;
        background-repeat:no-repeat;
        color: white;
    }

    .writing-content {
        margin-top: 30px;
    }

    @media (max-width: 768px) {
        .tool-bar button {
            font-size: 1rem;
            margin: 1px;
        }
    }
</style>