<template>
  <div>
    <form @submit.prevent="submit" class="container mt-3">
      <h1>Register</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          v-model="data.name"
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="data.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
    });
    const router = useRouter();

    const submit = async () => {
      await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      await router.push("/login");
    };

    return { data, submit };
  },
};
</script>
