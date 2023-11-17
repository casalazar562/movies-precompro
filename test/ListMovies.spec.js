import { mount, createLocalVue } from "@vue/test-utils";
import ListMovies from "@/components/ListMovies.vue";
import FilterMovies from "@/components/FilterMovies.vue";
import CardMovie from "@/components/CardMovie.vue";

const localVue = createLocalVue();

describe("ListMovies.vue", () => {
  it("renders FilterMovies and CardMovie components", async () => {
    const wrapper = mount(ListMovies, {
      localVue,
      stubs: {
        FilterMovies: true,
        CardMovie: true,
      },
    });

    expect(wrapper.findComponent(FilterMovies).exists()).toBe(true);
    expect(wrapper.findComponent(CardMovie).exists()).toBe(true);
  });
});
