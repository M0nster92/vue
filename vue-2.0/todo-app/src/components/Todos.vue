<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo="todo" @del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
  name: 'Todos',
  props: {
    todos : Array
  },
  mounted(){
    console.log('props',this.todos)
  },
  methods:{
  }
};
</script>

<style></style>
