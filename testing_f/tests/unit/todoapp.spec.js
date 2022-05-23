import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp.vue", () => {
  it("should render todo text", () => {
    const wrapper = mount(TodoApp);

    const todo = wrapper.get('[data-test="todo"]');

    expect(todo.text()).toContain("Go to market");
  });

  it("should add new todo", async () => {
    const wrapper = mount(TodoApp);

    expect(wrapper.findAll("[data-test=todo]")).toHaveLength(1);

    await wrapper.get("[data-test=new-todo]").setValue("New todo");
    await wrapper.get("[data-test=form]").trigger("submit");

    expect(wrapper.findAll("[data-test=todo]")).toHaveLength(2);
  });

  it("should clear the input after creating a new todo", async () => {
    const wrapper = mount(TodoApp);

    await wrapper.get("[data-test=new-todo]").setValue("New todo");
    await wrapper.get("[data-test=form]").trigger("submit");

    expect(wrapper.find("[data-test=new-todo]").element.value).toEqual("");
  });

  it("should be able to complete todo", async () => {
    const wrapper = mount(TodoApp);

    await wrapper.get("[data-test=todo-checkbox]").setValue(true);

    expect(wrapper.get("[data-test=todo]").classes()).toContain("completed");
  });
});
