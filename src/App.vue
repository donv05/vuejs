<template>
    <div id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/login">Login</router-link>
    </div>
    <router-view />

    <div class="u-box">
        <h1>Provide/Inject</h1>
        <div>
            <p>{{user.email}}</p>
            <p>{{user.phone}}</p>
            <p>{{user.gender}}</p>
        </div>
        <button type="button" @click="randomInfo">Random Information</button>
    </div>
    </template>
<script> 
    import axios from '../api.js'
    import  Vue from 'vue'
    export default {
        data() {
            return {
                user: {},
                getrandomuser: function() {
                axios.get('https://randomuser.me/api/').then(response => {
                    this.user = response.data.results[0]
                })
            }
            }
        },
        provide() {
            return {
                // user: this.user
                user: this.update
            }    
        },
        methods: {
            randomInfo() {
                this.getrandomuser()
            }

           
        },
        mounted () {
            // console.log('mounted')
             
            this.getrandomuser()
        },
        computed: {
            update() {
                console.log('fsdfds')
                return this.user
            }
        }
    }
</script>
<style lang="scss">
    @import "../src/styles/abstracts/_variables.scss";
    * {
        box-sizing: border-box;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #nav {
        padding: 30px;

        a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: $color-red-light;
        }
        }
    }

    body {
        background-color: $color-dark-light;
    }
    
</style>
