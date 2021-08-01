<template>
  <div class="flex flex-col items-center font-bold text-2xl">
    <div class="p-4 text-green-500">Demo Page</div>
    <button
      @click="$router.back()"
      class="w-32 p-2 my-4 text-white bg-green-500 active:bg-green-700 rounded"
    >
      goBack
    </button>
  </div>
</template>
<script setup>
const conut = ref(1);
const add = () => conut.value++;
</script>
