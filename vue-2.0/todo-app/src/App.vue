<template>
  <div>
    <Header />
    <!--<add-todo @add-todo="addTodo"/>
    <todos :todos="todos" @del-todo="deleteTodo"/> -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: "App",
  components: { Header},
  
  methods:{
    
  },
  mounted(){
    this.$root.$on('del-todo', (id) =>{
      this.todos = this.todos.filter(t => t.id != id)
    })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: Ariel, Helventica, sans-serif;
  line-height: 1.4;
}
</style>
