const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  computed: {
    fullname() {
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },

    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
