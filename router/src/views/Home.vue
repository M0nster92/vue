<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const message = ref("You are not logged in!");
    const store = useStore();
    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "content-type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();

        if (content.name) {
          message.value = "Hi " + content.name;
          await store.dispatch("setAuth", true);
        } else {
          await store.dispatch("setAuth", false);
        }
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      message,
    };
  },
};
</script>