<template>
  <div class="w-screen h-screen bg-gray-200 flex justify-center">
    <div class="w-full max-w-[1900px] w-full h-screen bg-white">
      <AdminLayout v-if="$route.meta.layout === 'admin'"/>
      <DefaultLayout v-if="$route.meta.layout === 'default'"/>
    </div>
  </div>

</template>
<script setup>
import DefaultLayout from "@/views/Layout/DefaultLayout.vue";
</script>
<style scoped>
</style>
