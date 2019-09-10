<template>
    <button>{{ valueButton }}</button>
</template>
<script>
export default {
    name: "Button",
    props: ['valueButton']
}
</script>
<style scoped>
    button {
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

    button:hover {
        background: white;
        color: rgb(166, 209, 166);
    }

    button:active {
        background-color: #93ad93;
        box-shadow: 0 2px rgb(114, 112, 112);
        transform: translateY(3px);
    }
</style>