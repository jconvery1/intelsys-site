<script setup>
</script>

<template>
  <div class="relative h-screen overflow-hidden before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:bg-black before:opacity-30">
    <img src="../assets/images/digger.jpg" class="absolute top-0 left-0 min-h-full ob" alt="">
    <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
      <div id="fade" class="col-span-6">
        <span class="uppercase text-white text-xs font-bold mb-2 block ml-6 md:ml-0">WE ARE EXPERTS</span>
        <h1 class="text-white font-extrabold mb-6 lg:text-5xl sm:text-2xl ml-6 md:ml-0">Step into the future of machine control with Intelsys.</h1>
        <p class="text-stone-100 text-base font-semibold ml-6 md:ml-0">
          We specialize in crafting intelligent solutions that seamlessly integrate with machinery, setting new standards for precision, adaptability, and operational excellence.
        </p>
        <a class="ml-6 md:ml-0" href="/#/about">
          <button class="mt-8 text-white uppercase py-4 text-base font-semibold px-10 border border-white hover:bg-white hover:bg-opacity-10">learn more</button>
        </a>
      </div>
      <div id="fade" class="col-span-6">
        <img src="../assets/images/new_intelsys_logo.png" class="w-2/3" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
#fade h1, span, p, button {
    animation: fadein 3s;
    -moz-animation: fadein 3s; /* Firefox */
    -webkit-animation: fadein 3s; /* Safari and Chrome */
    -o-animation: fadein 3s; /* Opera */
}
#fade img {
  animation: fadein 6s;
    -moz-animation: fadein 6s; /* Firefox */
    -webkit-animation: fadein 6s; /* Safari and Chrome */
    -o-animation: fadein 6s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}
</style>
