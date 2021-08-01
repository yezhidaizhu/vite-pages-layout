<template>
  <div class="flex flex-col items-center font-bold text-2xl">
    <div class="p-4 text-green-500">Index</div>
    <button
      @click="$router.push('/demo')"
      class="w-32 my-4 p-2 text-white bg-green-500 active:bg-green-700 rounded"
    >
      demo
    </button>
    <button
      @click="add"
      class="w-32 p-1 text-lg text-white bg-blue-500 active:bg-blue-700 rounded"
    >
      Add {{ conut }}
    </button>
  </div>
</template>
<script setup>
const conut = ref(1);
const add = () => conut.value++;
</script>
