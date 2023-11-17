<template>
  <div class="md:px-40 px-5 relative content-movies">
    <div class="bg-white w-full mt-4 px-12">
      <FilterMovies class=""/>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10 px-6">
        <CardMovie :movie="movie" v-for="(movie, index) in movies" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListMovies",

  computed: {
    movies() {
      return this.$store.getters['movies/listMovies']
    }
  },

  async beforeMount() {

    await this.$store.dispatch('movies/getMovies');
  }
}
</script>

<style scoped>
.content-movies {
  top: -3rem;
}
</style>
