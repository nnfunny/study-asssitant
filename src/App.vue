<template>  
    <router-view></router-view>
</template>

<script>
    import JQuery from 'jquery'
    let $ = JQuery
    // window.$ = require('jquery')
    // window.JQuery = require('jquery')
    export default {
        name: 'app',
    }

    // Once clicked on the "hamburger" button, the sidebar can toggle, hidden or visual
    $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
        $("#title-site").toggleClass('active')
    });
    });

    // Reload the current page when user clicks the "Subscribe to Newsletter" button 
    $("#subscribe").click( function () { location.reload(); });
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
    body {
        font-family: 'Poppins', sans-serif;
        background: #fafafa;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.7em;
        color: #999;
    }

    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }
</style>
