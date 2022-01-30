<template>
  <div class="home">
    <add-todo @add-todo="addTodo" :todos="todos" />
    <todos :todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '../components/AddTodo.vue';
import Todos from '../components/Todos.vue';

export default {
  name: 'Home',
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false,
        },
        {
          id: 2,
          title: "Todo Two",
          completed: true,
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false,
        },
      ],
      lastId: 0
    };
  },
  methods:{
    deleteTodo(id){
      this.todos = this.todos.filter(t => t.id != id)
    },

    addTodo(todo){
      this.todos = [...this.todos, todo]
    }
  },
}
</script>
