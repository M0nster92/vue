Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>",
});

var app = new Vue({
  el: "#app",
  data: {
    title: "Vue Template",
    message:
      "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
    link: "https://vuejs.org/v2/guide/",
    todos: [
      { id: 1, text: "Learn JavaScript" },
      { id: 2, text: "Learn Vue" },
      { id: 3, text: "Build something awesome" },
    ],
  },
});
