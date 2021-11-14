const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manual Lopez",
          phone: "235345543",
          email: "email@email.com",
        },
        {
          id: "jack",
          name: "Jack Roy",
          phone: "435245345",
          email: "email@email.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">
        {{detailsAreVisible? 'Hide Details' : 'Show Details'}}
        </button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
        </li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manual Lopez",
        phone: "235345543",
        email: "email@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
