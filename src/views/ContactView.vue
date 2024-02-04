<script setup>
import Map from '../components/Map.vue'
</script>

<template>
  <div class="relative h-screen overflow-hidden before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:bg-black before:opacity-30">
    <img src="../assets/images/dumptruck.jpg" class="grayscale-[75%] md:hidden absolute top-0 left-0 min-h-full ob" alt="">
    <img src="../assets/images/diggers.jpeg" class="grayscale-[50%] hidden md:block absolute top-0 left-0 min-h-full ob" alt="">
    <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
      <div id="fade" class="col-span-6 hidden md:flex justify-end mr-10">
      </div>
      <div id="fade" class="col-span-8 pl-12 md:hidden">
        <dl class="max-w-md divide-y divide-white text-white">
          <div class="flex flex-col pb-3">
              <dd class="text-base md:text-xl">Email</dd>
              <dd class="text-xl md:text-3xl font-semibold">martin@intelsys.uk</dd>
          </div>
          <div class="flex flex-col py-3">
              <dd class="text-base md:text-xl">Address</dd>
              <dd class="text-xl md:text-3xl font-semibold">
                14 Sandholes Road
              </dd>
              <dd class="text-xl md:text-3xl font-semibold">
                Cookstown
              </dd>
              <dd class="text-xl md:text-3xl font-semibold">
                Co Tyrone
              </dd>
              <dd class="text-xl md:text-3xl font-semibold">
                BT80 9AR
              </dd>
          </div>
          <div class="flex flex-col pt-3">
              <dd class="text-base md:text-xl">Phone</dd>
              <dd class="text-xl md:text-3xl font-semibold">07864266125</dd>
          </div>
        </dl>
      </div>
      <div id="fade" class="hidden col-span-6 pl-12 md:pl-0 md:flex">
        <dl class="max-w-md divide-y divide-white text-white">
          <div class="flex flex-col pb-3">
              <dd class="text-base md:text-xl">Email</dd>
              <dd class="text-xl md:text-3xl font-semibold">martin@intelsys.uk</dd>
          </div>
          <div class="flex flex-col py-3">
              <dd class="text-base md:text-xl">Address</dd>
              <dd class="text-xl md:text-3xl font-semibold">
                14 Sandholes Road
              </dd>
              <dd class="text-xl md:text-3xl font-semibold">
                Cookstown
              </dd>
              <dd class="text-xl md:text-3xl font-semibold">
                Co Tyrone
              </dd>
              <dd class="text-xl md:text-3xl font-semibold">
                BT80 9AR
              </dd>
          </div>
          <div class="flex flex-col pt-3">
              <dd class="text-base md:text-xl">Phone</dd>
              <dd class="text-xl md:text-3xl font-semibold">07864266125</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div>
    <div class="mx-auto flex justify-around items-center">
      <Map />
    </div>
  </div>
</template>
<style scoped>
#fade {
    animation: fadein 3s;
    -moz-animation: fadein 3s; /* Firefox */
    -webkit-animation: fadein 3s; /* Safari and Chrome */
    -o-animation: fadein 3s; /* Opera */
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
/* Always set the map height explicitly to define the size of the div
 * element that contains the map. */
 gmp-map {
  height: 100%;
}

/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
