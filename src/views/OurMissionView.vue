<script setup>
</script>

<template>
  <div class="relative h-screen overflow-hidden before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:bg-black before:opacity-30">
    <img src="../assets/images/pattern-vertical.jpg" class="grayscale-[75%] md:hidden absolute top-0 left-0 min-h-full ob" alt="">
    <img src="../assets/images/quarry.jpg" class="grayscale-[50%] hidden md:block absolute top-0 left-0 min-h-full ob" alt="">
    <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
      <div id="fade" class="col-span-12">
        <span class="uppercase text-white text-xs font-bold mb-2 hidden md:block ml-6 md:ml-0">WHAT WE STAND FOR</span>
        <h1 class="text-white font-extrabold mb-6 text-s md:text-5xl ml-6 md:ml-0">At Intelsys, we stand out from the competition for several compelling reasons:</h1>
        <div class="grid grid-cols-12 text-stone-100 lg:text-base text-xs md:text-3xl font-semibold">
          <div id="fade" class="col-span-12">
            <ol class="space-y-4">
              <li>
                <div class="flex justify-center items-center"> <!-- Use flex container -->
                  <img src="../assets/images/new_intelsys_logo.png" class="w-6 h-6 md:w-12 md:h-12 mr-3 md:mr-5" alt="">
                  <div class="grid">
                    <strong>Professionalism:</strong>
                    <p>We take pride in our unwavering commitment to professionalism in everything we do. Our team at Intelsys conducts business with the highest ethical standards, ensuring that every project, interaction, and decision reflects our dedication to excellence.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex justify-center items-center"> <!-- Use flex container -->
                  <img src="../assets/images/new_intelsys_logo.png" class="w-6 h-6 md:w-12 md:h-12 mr-3 md:mr-5" alt="">
                  <div class="grid">
                    <strong>Accountability:</strong>
                    <p>Accountability is not just a word; it's a fundamental principle at Intelsys. We take full responsibility for our actions and the results we deliver. You can trust Intelsys to meet deadlines and exceed expectations.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex justify-center items-center"> <!-- Use flex container -->
                  <img src="../assets/images/new_intelsys_logo.png" class="w-6 h-6 md:w-12 md:h-12 mr-3 md:mr-5" alt="">
                  <div class="grid">
                    <strong>Quality:</strong>
                    <p>Quality is a cornerstone of our work at Intelsys. Our Engineers are obsessed with delivering top-notch solutions and services that consistently exceed industry standards.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex justify-center items-center"> <!-- Use flex container -->
                  <img src="../assets/images/new_intelsys_logo.png" class="w-6 h-6 md:w-12 md:h-12 mr-3 md:mr-5" alt="">
                  <div class="grid">
                    <strong>Integrity:</strong>
                    <p>Our unwavering commitment to integrity means you can trust Intelsys implicitly. We believe in transparency, honesty, and doing what's right, even when no one is watching.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex justify-center items-center"> <!-- Use flex container -->
                  <img src="../assets/images/new_intelsys_logo.png" class="w-6 h-6 md:w-12 md:h-12 mr-3 md:mr-5" alt="">
                  <div class="grid">
                    <strong>Innovation:</strong>
                    <p>Innovation drives us forward. Our team at Intelsys is constantly exploring new ideas, technologies, and strategies to provide you with cutting-edge solutions tailored to your needs.</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div id="fade" class="col-span-6">
          </div>
        </div>
      </div>
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
</style>
