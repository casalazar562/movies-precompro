<template>
  <div>
    <!--  Menu Principal  -->
    <div>
      <MenuPrincipal />
    </div>

    <!--  Slide Images  -->
    <div>
      <!--  Slide 1  -->
      <div>
        <div>
          <!--  Contenido  -->
          <div
            class="absolute top-24 left-12 md:top-48 md:left-40 md:space-y-4"
          >
            <!--  Título  -->
            <div>
              <h2 class="md:text-6xl text-4xl font-bold text-white title-image">
                THE MARTIAN
              </h2>
            </div>
            <!--  Géneros  -->
            <div class="flex space-x-5">
              <p class="text-xs text-white">ADVENTURE</p>
              <p class="text-xs text-white">SCI-F</p>
              <p class="text-xs text-white">THRILLER</p>
            </div>
            <!--  Boton  -->
            <div class="absolute top-20 md:top-32">
              <button
                type="button"
                class="text-gray-900 bg-yellow-400 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Watch Trailer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Zm4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!--  Imagen  -->
          <div>
            <img
              class="w-full"
              :src="require(`~/assets/images/slide-2.webp`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.title-image {
  letter-spacing: 3px;
}
</style>
