import { mount, shallowMount, flushPromises } from "@vue/test-utils";
import ApiComponent from "../../src/components/ApiComponent.vue";
import axios from "axios";

const mockPostList = { data: "value" };

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.spyOn(axios, "get").mockResolvedValue(mockPostList);

test("load the component", async () => {
  const wrapper = mount(ApiComponent);

  await wrapper.get("[data-test=btn]").trigger("click");

  expect(axios.get).toHaveBeenCalledTimes(1);
  await flushPromises();

  expect(wrapper.vm.value).toBe("value");
});
