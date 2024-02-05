<template>
  <Disclosure as="nav" class="bg-black absolute w-full" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">
              Open main menu
            </span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <a href="https://intelsys.uk/">
              <img class="grayscale h-8 w-auto" src="../assets/images/intelsys_text.jpg" alt="Intelsys Ltd." />
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink to="/" class="text-white hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold" activeClass="bg-zinc-700 text-white hover:bg-zinc-700 hover:text-white">
                Home
              </RouterLink>
              <RouterLink to="/what-we-do" class="text-white hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold" activeClass="bg-zinc-700 text-white hover:bg-zinc-700 hover:text-white">
                What We Do
              </RouterLink>
              <RouterLink to="/our-mission" class="text-white hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold" activeClass="bg-zinc-700 text-white hover:bg-zinc-700 hover:text-white">
                Our Mission
              </RouterLink>
              <RouterLink to="/contact" class="text-white hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold" activeClass="bg-zinc-700 text-white hover:bg-zinc-700 hover:text-white">
                Contact Us
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white hover:bg-gray-900 hover:text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-bold']" :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
{ name: 'Home', href: '/', current: false },
{ name: 'What We Do', href: '/#/what-we-do', current: false },
{ name: 'Our Mission', href: '/#/our-mission', current: false },
{ name: 'Contact Us', href: '/#/contact', current: false }
]
</script>
