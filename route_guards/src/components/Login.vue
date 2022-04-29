<template>
  <div>
    <h1>Login page</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="username"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="password"
    />
    <button type="button" @click="login">Log in</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "pass") {
        this.$store.commit("setAuthentication", true);
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push("/secure");
        }
      } else {
        console.log("username or password is not correct");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
