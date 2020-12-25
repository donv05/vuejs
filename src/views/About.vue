<template>
    <div class="about">
        <h1 class="heading-primary">This is an about page</h1>
        <div>
            <ul>
                <li v-for="item in items" :key="item.id">{{item.name}}</li>
            </ul>
            <button @click="editedName">Edit</button>
        </div>
    </div>
</template>

<script>
    
  export default {
    data() {
        return {
            items: [{name: 'Angular', id: '123'}, {name: 'React', id: '2'}, {name: 'Vue', id: '3'}]
        }
    },
    methods: {
        editedName() {
            console.log('edit')
        }
    }
  }
</script>

<style lang="scss">
    @import "../styles/abstracts/_variables.scss";
    @import "../styles/base/_typography.scss";
    .about {
        h1 {
        color: $color-red-light;
        }
    }
</style>