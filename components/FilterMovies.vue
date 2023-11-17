<template>
  <nav class="bg-white  w-82 z-20 bottom-55 relative start-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button"
                class="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mr-4" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/>
          </svg>
          179
        </button>
      </div>
      <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li v-for="filter in filtersData" :key="filter.id">
            <a :class="filterActive(filter.name) ? 'text-yellow-500' : ''"
               class="block py-2 text-gray-900 p-0 uppercase cursor-pointer" aria-current="page"
               @click="updateFilter(filter)">{{ filter.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "FilterMovies",
  data() {
    return {
      filtersData: []
    }
  },

  methods: {

    async asyncData() {

      this.filtersData = await import('~/static/filters.json')

    },

    async updateFilter(filter) {

      const selectFilter = {filterName: filter.name, filterUrl: filter.url};

      await this.currentRouteValidation(selectFilter)
    },

    async currentRouteValidation(selectFilter) {

      const filterValue = this.$route.params.filter

      if (selectFilter.filterName !== filterValue) {

        await this.$store.dispatch('movies/updateFilter', selectFilter);

        await this.$router.push({name: 'FilteredMovies', params: {filter: selectFilter.filterName}});
      }
    },

    filterActive(name) {

      return this.$store.getters["movies/currentFilter"] === name
    }
  },
  mounted() {
    this.asyncData()
  }
};
</script>

<style scoped></style>
