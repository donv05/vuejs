<template>
  <div class="shadow-card login-box">
    <h1 class="heading-secondary login-box__heading">Sign In</h1>
   <form class="form">
        <div class="form-group">
            <label class="form__label" for="username">Username: </label>
            <input class="form__input" type="text" name="username" v-model="username"/>
        </div>
        <div class="form-group">
            <label class="form__label" for="password">Password: </label>
            <input class="form__input" type="password" name="password" v-model="password"/>
        </div>
        <button class="btn btn--primary login-box__btn" type="button" @click="login()">Login</button>
   </form>
  </div>
</template>

<script lang="ts">
    import { Vue, Options } from 'vue-class-component'

    Vue.registerHooks([
        'beforeRouteEnter',
        'beforeRouteLeave',
        'beforeRouteUpdate'
    ])

    // Component definition
    @Options({
    // Define component options
        // watch: {
        //     count: value => {
        //     console.log(value)
        //     }
        // }
    })
    export default class Login extends Vue {
        username = ''
        password = ''
        // Lifecycle hook
        mounted () {
            // console.log(this.$refs.pwd)
            // var pwd = this.$refs.pwd as HTMLElement
            //   console.log(pwd)
            // pwd.addEventListener("keyup", function(event) {
            //     if(event.keyCode === 13) {
            //         console.log('Enter');
            //     }
            // })
            document.querySelectorAll('.form__input').forEach(item => {
                item.addEventListener("keyup", (event: any)=> {
                // item.addEventListener("keyup", function(event: any){    
                if(event.keyCode === 13) {
                    console.log('data')
                    this.login()
                }
            })
            // .addEventListener("keyup", function(event: any) {
            //     // debugger
            //     console.log(event)
            //     if(event.keyCode === 13) {
            //         console.log('Enter');
            //     }
            })
        }

        created() {
            // let name = document.getElementById("pwd")
            // name?.addEventListener("keyup", (event)=> {
            //     // if(event.keyCode === 13) {
            //     //     console.log('Enter');
            //     // }
            // })
            
            // this.$refs.pwd.addEventListener("keyup", (event)=> {
            //     if(event.keyCode === 13) {
            //         console.log('Enter');
            //     }
            // })
        }

        public login() {
            if(this.username && this.password) {
                // console.log(this.username)
                console.log(this.$router);
                // this.$router.meta.requireAuth = false
                localStorage.setItem("jwt", 'string');
                this.$router.push('home')
            } else {
                console.log('error')
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/components/_form.scss";
    @import "../styles/components/_button.scss";
    @import "../styles/components/_card.scss";
    @import "../styles/base/_typography.scss";

    .login-box {
        height: 25rem;
        position: relative;
        perspective: 150rem;
        -moz-perspective: 150rem;
        max-width: 22rem;
        margin: 0 auto;
        padding: 1.5rem 2.5rem; 
        &__heading {
            text-align: center;
        }

        &__btn {
            margin-top: 3.5rem;
        }
    }

</style>