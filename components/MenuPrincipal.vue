<template>
  <div>
    <nav class="bg-gray-800 bg-opacity-90  md:bg-gray-800 md:bg-opacity-50 lg:bg-gray-800 lg:bg-opacity-50 absolute w-full z-50">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile botón-->
            <button @click="toggleMobileMenu" type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
<!--              <span class="sr-only">Open main menu</span>-->
              <!--
               Icono para abrir el menú en mobile
              -->
              <svg :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }" class="h-6 w-6 text-white"
                   fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
              <!--
                Icono para cerrar el menú en mobile
              -->
              <svg :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="h-6 w-6 text-white"
                   fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <!-- LOGO -->
          <div class="justify-center flex-grow md:flex-none flex">
            <div>
              <img class="h-11" :src="require(`~/assets/images/logo.webp`)" alt="Your Company">
            </div>
          </div>


          <div class="flex items-center justify-center md:flex-grow lg:flex-grow">

            <!--MENU -->
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <div v-for="menu in menuData" :key="menu.id">
                  <a :href="menu.route" :class="menu.label === 'Movies' ? 'text-yellow-500' : 'text-gray-300'" class=" rounded-md px-3 py-2 text-sm font-medium uppercase">{{ menu.label }}</a>
                </div>

              </div>
            </div>
          </div>


          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Perfil dropdown -->
            <div class="relative ml-3">
              <div>
                <button type="button"
                        class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt="">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2" v-for="menu in menuData" :key="menu.id">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a  :href="menu.route" :class="menu.label === 'Movies' ? 'text-yellow-500' : 'text-gray-300'" class="text-white block rounded-md px-3 py-2 text-base font-medium">{{ menu.label }}</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuPrincipal",
  data() {
    return {
      isMobileMenuOpen: false,
      menuData: []
    };
  },
  methods: {

    async asyncData() {

      this.menuData = await import('~/static/menu.json')

    },

    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  },

  mounted() {
    this.asyncData()
  }
}
</script>

<style scoped>

</style>
