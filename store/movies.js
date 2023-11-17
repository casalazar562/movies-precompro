export const state = () => ({
  movies: [],
  filter: {
    name: 'in-theaters',
    url: '/movie/now_playing'
  },
  dataLoading: false
})

export const mutations = {

  SET_MOVIES(state, data) {
    if (data.length > 0) {
      state.movies = data
      state.dataLoading = false
    } else {
      state.dataLoading = true
    }
  },

  SET_FILTER(state, filter) {
    state.filter.name = filter.filterName;

    state.filter.url = filter.filterUrl;
  },
}

export const getters = {
  listMovies: state => state.movies,

  currentFilter: state => state.filter.name
}

export const actions = {

  async getMovies({commit, state}) {
    try {

      const response = await this.$axios.get(`${state.filter.url}`)

      if (response && response.data.results && response.data.results.length > 0) {

        commit('SET_MOVIES', response.data.results)
        return true

      } else {

        console.log('No se encontraron peliculas')
        return false
      }

    } catch (error) {
      return false
    }
  },

  async updateFilter({ commit, dispatch }, filter) {

    commit('SET_FILTER', filter);

    await dispatch('getMovies');
  },
}
