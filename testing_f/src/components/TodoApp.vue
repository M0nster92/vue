<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    data-test="todo"
    :class="todo.completed ? 'completed' : ''"
  >
    {{ todo.text }} - {{ todo.completed }}
    <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
  </div>
  <form data-test="form" @submit.prevent="createTodo">
    <input type="text" v-model="newTodo" data-test="new-todo" />
  </form>
</template>

<script>
  export default {
    name: "TodoApp",
    data() {
      return {
        newTodo: "",
        todos: [
          {
            id: 1,
            text: "Go to market",
            completed: false,
          },
        ],
      };
    },
    methods: {
      createTodo() {
        this.todos.push({
          id: 2,
          text: this.newTodo,
          completed: false,
        });

        this.newTodo = "";
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .completed {
    text-decoration: line-through;
    color: green;
  }
</style>
