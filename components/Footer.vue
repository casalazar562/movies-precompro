<template>
  <footer
    class="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:p-6"
  >

  <div class="flex items-center w-full">
    <div class="justify-center flex-grow md:flex-none flex flex-none w-30">
      <div>
        <img
          class="h-11"
          :src="require(`~/assets/images/logo-gris.webp`)"
          alt="Your Company"
        />
      </div>
    </div>

    <div class="flex gap-x-8 justify-center flex-initial w-full">
    
    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 h-5 w-5" viewBox="0 0 64 64"><path fill="currentColor" d="m60 16l-6 1l4-5l-7 2c-9-10-23 1-19 10C16 24 8 12 8 12s-6 9 4 16l-6-2c0 6 4 10 11 12h-7c4 8 11 8 11 8s-6 5-17 5c33 16 53-14 50-30Z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z"/><path fill="currentColor" fill-rule="evenodd" d="M4.5 0A4.5 4.5 0 0 0 0 4.5v6A4.5 4.5 0 0 0 4.5 15h6a4.5 4.5 0 0 0 4.5-4.5v-6A4.5 4.5 0 0 0 10.5 0h-6ZM4 7.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0ZM11 4h1V3h-1v1Z" clip-rule="evenodd"/></svg>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
