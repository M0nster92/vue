const app = new Vue({
  el: "#app",
  data: {
    title: "Computed Properties",
    counter: 0,
    result: "",
  },
  computed: {
    output: function () {
      return this.counter > 5 ? "Greater than 5" : "Less than 5";
    },
  },
});
