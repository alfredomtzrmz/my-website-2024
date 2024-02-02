<template>
  <ULink class="flex flex-shrink-0 items-center space-x-3">
    <ColorModeAvatar placeholder />
    <div class="flex flex-col space-y-0.5 text-left text-sm leading-4">
      <h2 class="font-medium text-black dark:text-white">Alfredo Martínez</h2>
      <p class="text-gray-600/70 dark:text-gray-500">FrontEnd Engineer</p>
    </div>
  </ULink>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MeHeader',
});
</script>
