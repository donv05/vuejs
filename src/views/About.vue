<template>
    <HeaderComponent></HeaderComponent>
    <div class="about">
        <h1 class="heading-primary about__heading">This is an about page</h1>
        <div>
            <ul class="list">
                <TodoComponent :publishedBookMessage="publishedBook" @upperCase="upperCase" v-for="item in items.frameworks" :key="item.id" :lang="item"></TodoComponent>
            </ul>
            <button class="btn btn--green login-box__btn" @click="editedName">Edit</button>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './Header.vue'
    import TodoComponent from './TodoItem.vue'

    export default {
        components: {
            HeaderComponent,
            TodoComponent
        },
        data() {
            return {
                items: {
                    published: {
                        books:[
                            'Vue 2 - Advanced Guide',
                            'Vue 3 - Basic Guide',
                            'Vue 4 - The mystery'
                        ]
                    },
                    frameworks: [
                        {name: 'Angular', id: '123', isUppercase: false}, 
                        {name: 'React', id: '2',  isUppercase: false}, 
                        {name: 'Vue', id: '3',  isUppercase: false}
                    ],
                },
                password: 'pass',
                publishedBook: ''
            }
        },
        created() {
            // console.log('init component')
            this.publishedBook = this.publishedBookMessage
            console.log(this.publishedBook)
        },
        mounted() {
            // console.log('mounted')
        },
        updated() {
            // console.log('updated')
        },
        unmounted() {
            // console.log('unmounted')
        },
        methods: {
            editedName() {
                console.log('edit')
            },
            upperCase(item) {
                item.name = item.name.toUpperCase()
                item.isUppercase = true;
            }
        },
        computed: {
            publishedBookMessage() {
                return this.items.published && this.items.published.books.length > 0 ? 'Yes' : 'No'
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/abstracts/_variables.scss";
    @import "../styles/base/_typography.scss";
    @import "../styles/components/_button.scss";
    .about {
        max-width: 33.9rem;
        &__heading {
            
        }
    }
    .list{
        &__item {
            display: grid;
            grid-template-columns: 1fr 1fr 10rem;
            justify-items: initial;
            align-items: center;
            margin-bottom: 2rem;
        }
    }

    .active {
        color: $color-red-light
    }
</style>