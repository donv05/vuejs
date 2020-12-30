<template>
    <!--<li class="list__item" v-for="item in items.frameworks" :key="item.id">-->
    <li class="list__item">
        <span :class="{active: lang.isUppercase}">{{lang.name}}</span> 
        <span>Has published books: {{publishedBookMessage}}</span>
        <!--<button class="btn btn--dark login-box__btn" @click="upperCase(item)">UpperCase</button>-->
        <button class="btn btn--dark login-box__btn" @click.prevent="$emit('upperCase',lang)">UpperCase</button>
    </li>
    <span>Email: {{this.user.email}}</span>
</template>

<script>
    export default {
        inject: ['user'],
        props: {
            lang: {
                reqired: true,
                type: Object
            },
            publishedBookMessage: {
                required: false
            }
        },
        created() {
            console.log(`inject: ${this.user.email}`)
            // console.log('init component')
        },
        mounted() {
            // console.log('mounted')
        },
        updated() {
            // console.log('updated')
             console.log(`inject: ${this.user.email}`)
        },
        unmounted() {
            // console.log('unmounted')
        }
    }
</script>

<style lang="scss">

</style>