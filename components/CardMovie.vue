<template>
  <div>
    <div class="bg-white cursor-pointer shadow-md rounded-lg hover:shadow-xl hover:transition-shadow" @click="openModalMovie">
      <div>
        <img class="object-cover w-full" :src="pathImage" :alt="movie.original_title">
      </div>
      <div class="p-5 space-y-1">

        <h3 class="text-md font-bold truncate text-gray-900 uppercase" v-text="movie.original_title ?? movie.original_name"></h3>

        <div>
          <p class="text-xs text-yellow-500 font-bold">{{
              genders.map(gender => {
                return gender?.name
              }).join(' - ')
            }}</p>
        </div>

        <div class="pt-2">
          <div class="flex items-center space-x-1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
            </div>
            <div>
              <p class="text-md font-medium">{{ movie.vote_average | average }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-down float-right">
      </div>
      <div class="relative float-right icon-plus">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white icon-plus" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"/></svg>
      </div>
    </div>

    <ModalMovie :movie="movie" ref="modal"/>
  </div>
</template>
<script>
export default {
  name: "CardMovie",

  props: ['movie'],

  computed: {

    pathImage() {
      return this.$config.baseUrlImage+this.movie.poster_path
    },

    genders() {
      let gendersApi = this.$store.getters["genres/listGenres"]
      let movieGenres = []

      this.movie.genre_ids.forEach(movieGenre => {

        movieGenres.push(gendersApi.find(genre => genre?.id === movieGenre));
      })

      return this.movie.genres = movieGenres
    }
  },
  methods:{
    openModalMovie(){

       this.$refs.modal.openModal()
    }
  },
  async beforeMount() {
    await this.$store.dispatch('genres/getGenres')
  }
}
</script>

<style scoped>
.arrow-down {
  width: 0;
  height: 0;
  position: relative;
  top: -33px;
  left: 26px;
  border-left: 39px solid transparent;
  border-right: 40px solid transparent;
  transform: rotate(315deg);
  border-top: 38px solid #eab308;

}
.icon-plus{
  left: 4.5rem;
  top: -1.7rem;
}

</style>
