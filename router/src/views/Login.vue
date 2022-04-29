<template>
  <form @submit.prevent="submit" class="container mt-3">
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();

    const submit = async () => {
      await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      console.log("here");

      await router.push("/");
    };

    return {
      data,
      submit,
    };
  },
};
</script>