<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" placeholder="Add Todo...." />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  data() {
    return {
      title: "",
      maxId: this.todos.sort((a, b) => b.id - a.id)[0].id,
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: this.maxId + 1,
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);

      this.title = "";
      this.maxId = this.maxId + 1;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>
