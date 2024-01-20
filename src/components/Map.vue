<template>
    <GoogleMap api-key="AIzaSyDUDcjStN9SpvGemQrQBRGwLUiAJkkYQJU" style="width: 100%; height: 500px" :center="center" :zoom="15">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: 54.62385940551758, lng: -6.758367538452148 };
  
      return { center };
    },
  });
  </script>
