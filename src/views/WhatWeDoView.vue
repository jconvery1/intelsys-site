<template>
  <div class="relative h-screen overflow-hidden before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:bg-black before:opacity-30">
    <img src="../assets/images/panel-vertical.jpg" class="grayscale-[75%] md:hidden absolute top-0 left-0 min-h-full ob" alt="">
    <img src="../assets/images/plc.jpeg" class="hidden md:block absolute top-0 left-0 min-h-full ob" alt="">
    <div class="relative z-20 max-w-screen-lg mx-auto flex md:grid grid-cols-12 h-full items-center">
      <div class="col-span-6 hidden md:grid">
        <div id="fade">
          <h1 class="text-white font-extrabold lg:text-5xl sm:text-2xl mb-6">
            State Of The Art
          </h1>      
        </div>
        <div id="fade">
          <h1 class="text-white font-extrabold lg:text-5xl sm:text-2xl mb-6">
            Machinery Control
          </h1>      
        </div>
        <div id="fade">
          <span class="uppercase text-white text-xs font-bold mb-2 block">
            LEAVE IT TO US
          </span>  
        </div>
      </div>
      <div id="fade" class="col-span-6">
        <p class="text-stone-100 lg:text-base sm:text-xs font-semibold">
          At Intelsys, excellence in machinery control software is complemented by our engineering know-how and hands on experience.
          Our engineering team meticulously analyses client requirements, employing cutting-edge technologies to craft tailored and efficient PLC code.
          We pride ourselves on our rigorous testing and quality assurance that ensures unrivaled reliability.
          With a commitment to continuous learning, Intelsys delivers next-generation software, providing unparalleled performance and exceeding expectations.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-black py-10">
    <div class="max-w-screen-lg mx-auto flex justify-around items-center">
      <div id="fade" class="max-w-xl">
        <h2 class="font-black text-white lg:text-3xl sm:text-xl mb-4">
          Our team are experts in this field and have years of experience with the companies you know and trust.
        </h2>
        <p class="lg:text-base sm:text-xs text-white">
          We are familiar with all aspects of machinery control and are constantly expanding our knowledge.
        </p>
      </div>
      <img id="fade" src="../assets/images/new_intelsys_logo.png" class="w-48" alt="">
    </div>
  </div>
  <div class="relative h-screen overflow-hidden before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:bg-black before:opacity-30">
    <img src="../assets/images/mine-vertical.jpg" class="grayscale-[75%] md:hidden absolute top-0 left-0 min-h-full ob" alt="">
    <img src="../assets/images/engineer.jpeg" class="hidden md:block absolute top-0 left-0 min-h-full ob" alt="">
    <div class="relative z-20 max-w-screen-lg mx-auto flex md:grid grid-cols-12 h-full items-center">
      <div id="fade" class="col-span-6">
        <h1 class="text-white hidden md:grid font-extrabold lg:text-5xl sm:text-2xl mb-6">
          On-site support.
        </h1>
        <p class="text-stone-100 lg:text-base sm:text-xs font-semibold">
          We go beyond delivering cutting-edge solutions by offering unparalleled global on-site support for the commissioning and maintenance of machinery.
          Our team of skilled support engineers is dedicated to ensuring a seamless integration of our technologies into your operational environment, wherever you located.
          Whether it's fine-tuning during the commissioning phase or addressing ongoing maintenance needs, our experts are readily available to provide hands-on assistance.
          This commitment to on-site support not only underscores our dedication to client success but also ensures that our solutions operate at peak performance,
          minimising downtime and maximising the efficiency of your machinery.
          With Intelsys, you gain a trusted partner committed to the success of your operations through comprehensive on-site support.
        </p>
      </div>
      <div class="col-span-6" />
    </div>
  </div>
</template>
<script setup />
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
</style>
