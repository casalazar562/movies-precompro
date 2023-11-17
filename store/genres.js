export const state = () => ({
  genres: []
})

export const mutations = {
  SET_GENRES(state, data) {
    state.genres = data
  },
}

export const getters = {
  listGenres: state => state.genres
}


export const actions = {
  async getGenres({commit, state}) {
    try {
      const response = await this.$axios.get('/genre/movie/list')
      if (response && response.data.genres && response.data.genres.length > 0) {
        commit('SET_GENRES', response.data.genres)
        return true
      } else {
        console.log('No se encontraron géneros')
        return false
      }

    } catch (error) {

      return false
    }
  },
}
