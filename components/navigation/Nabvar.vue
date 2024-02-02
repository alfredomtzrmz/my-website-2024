<template>
  <div
    class="sticky top-0 z-10 flex items-center justify-between border-b p-5 xl:hidden border-gray-800/10 dark:border-gray-200/10 bg-gray-50 dark:bg-gray-950"
  >
    <MeHeader />
    <UButton
      icon="i-solar-hamburger-menu-outline"
      size="sm"
      color="gray"
      variant="solid"
      @click="sidebar.open"
    />
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';

defineOptions({
  name: 'Navbar',
});
const sidebar = useSidebarStore();
</script>
