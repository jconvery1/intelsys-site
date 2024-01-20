<script setup>
import Map from '../components/Map.vue'
</script>

<template>
  <div class="relative h-screen overflow-hidden before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:bg-black before:opacity-30">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1959176.jpg&f=1&nofb=1&ipt=e8749622eeb2f43b7dc39b2d5e1329a4e22d8e8071142f38ed73442c2c3ef780&ipo=images" class="absolute top-0 left-0 min-h-full ob" alt="">
    <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
      <div id="fade" class="col-span-6 flex justify-end mr-10">
        <img src="../assets/images/new_intelsys_logo.png" class="w-2/3" alt="">
      </div>
      <div id="fade" class="col-span-6">
        <dl class="max-w-md text-gray-900 divide-y divide-white dark:text-white dark:divide-white">
          <div class="flex flex-col pb-3">
              <dd class="text-xl">Email</dd>
              <dd class="text-3xl font-semibold">james.convery@intelsys.com</dd>
          </div>
          <div class="flex flex-col py-3">
              <dd class="text-xl">Address</dd>
              <dd class="text-3xl font-semibold">
                14 Sandholes Rd
              </dd>
              <dd class="text-3xl font-semibold">
                Cookstown
              </dd>
              <dd class="text-3xl font-semibold">
                Co Tyrone
              </dd>
              <dd class="text-3xl font-semibold">
                BT80 9AR
              </dd>
          </div>
          <div class="flex flex-col pt-3">
              <dd class="text-xl">Telephone</dd>
              <dd class="text-3xl font-semibold">01234567890</dd>
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
