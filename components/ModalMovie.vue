<template>
  <div>
    <!-- Modal -->
    <div
      v-if="isOpenModal"
      class="modal fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div
        class="modal-container bg-white w-full md:w-2/3 rounded-lg shadow-lg"
      >
        <div class="grid grid-cols-12">
          <div class="col-span-5">
            <div class="h-screen">
              <img
                class="w-full h-full"
                :src="pathImage"
                :alt="movie.original_title"
              />
            </div>
          </div>

          <div class="col-span-7">
            <!-- Cerrar Modal -->
            <div class="flex justify-end">
              <button @click="closeModal" class="absolute p-2">
                <svg
                  class="h-6 w-6 text-gray-600 hover:text-gray-800"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <!-- Contenido Modal -->

            <!--  Tarjeta Sección    -->

            <div
              class="p-5 bg-white shadow-2xl relative top-10 card-section w-full"
            >
              <h2
                class="text-2xl font-medium"
                v-text="movie.original_title ?? movie.original_name"
              ></h2>
              <div>
                <p class="text-xs text-yellow-500 font-bold">
                  {{
                    movie.genres
                      .map((gender) => {
                        return gender?.name;
                      })
                      .join(" - ")
                  }}
                </p>
              </div>
              <hr class="h-px my-5 bg-gray-200 border-0" />
              <!--  Calificaciones  -->
              <div class="py-2 px-8 flex justify-between">
                <!--  Rating  -->
                <div class="text-center">
                  <div class="flex items-center space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-md font-medium m-0">
                        {{ movie.vote_average | average }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p class="text-xs">Rating</p>
                  </div>
                </div>
                <!--  Popularity  -->
                <div class="text-center">
                  <div class="flex items-center space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-blue-600"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.783 4.783 0 0 0-.09-1.973a1.635 1.635 0 0 0-1.092-1.137l-.145-.047a1.346 1.346 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.628 7.628 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735Z"
                        />
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-md font-medium m-0">
                        {{ movie.popularity | average }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p class="text-xs">Popularity</p>
                  </div>
                </div>
                <!--  Vote  -->
                <div class="text-center">
                  <div class="flex items-center space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958Zm-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162Z"
                        />
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M16.377 2.347A26.373 26.373 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-md font-medium m-0">
                        {{ movie.vote_count | average }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p class="text-xs">Vote</p>
                  </div>
                </div>
              </div>
            </div>
            <!--  Descripción  -->
            <div class="mt-20 px-5 text-justify">
              <p class="text-xs">{{ movie.overview }}</p>
            </div>

            <div
              class="mt-10 px-5 text-justify flex gap-x-2.5 cursor-pointer text-blue-300 font-bold"
            >
              <p class="text-xs">FULL MOVIE PEOPLE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-blue-300 font-bold"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m218.83 130.83l-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66Z"
                />
              </svg>
            </div>
            <div class="flex button-footer">
              <div
                class="h-full w-3/6 flex items-center bg-yellow-500 p-5 justify-center"
              >
                <button
                  class="font-bold text-white text-center inline-flex items-center px-4 gap-x-2"
                >
                  Watch Triller
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-white mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M10 17V7l5 5l-5 5Z" />
                  </svg>
                </button>
              </div>
              <div
                class="h-full w-3/6 flex items-center bg-gray-700 p-5 justify-center"
              >
                <button
                  class="font-bold text-yellow-400 text-center inline-flex items-center px-4 gap-x-2.5"
                >
                  To watchlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalMovie",

  props: ["movie"],

  data() {
    return {
      isOpenModal: false,
    };
  },

  computed: {
    pathImage() {
      return this.$config.baseUrlImage + this.movie.poster_path;
    },
  },

  methods: {
    openModal() {
      this.isOpenModal = true;
    },

    closeModal() {
      this.isOpenModal = false;
    },
  },
};
</script>

<style scoped>
.card-section {
  margin-left: -30px;
}
.button-footer {
  position: absolute;
  top: 90.5vh;
  width: 38.9%;
}

.modal-container {
  z-index: 9999;
  min-height: 80vh;
  overflow-y: auto;
}
</style>
