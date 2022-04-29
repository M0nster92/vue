<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item" v-if="!auth">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!auth">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="auth">
            <router-link class="nav-link" to="/login" @click="logout"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Navbar",
  setup() {
    const store = useStore();
    const auth = computed(() => store.state.authenticated);
    const logout = async () => {
      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });

      await store.dispatch("setAuth", false);
    };
    return {
      auth,
      logout,
    };
  },
};
</script>
