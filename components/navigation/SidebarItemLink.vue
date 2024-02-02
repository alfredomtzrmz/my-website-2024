<template>
  <ULink
    v-slot="{ isActive }"
    class="flex w-full items-center p-2 group"
    active-class="rounded-md bg-gray-200/30 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-700"
    :to="item.to"
    :target="item.target || '_self'"
  >
    <UIcon
      :name="item.icon"
      class="h-5 w-5 mr-2.5"
      :class="[
        isActive
          ? 'text-black dark:text-white'
          : 'text-gray-700/60 dark:text-gray-300/50 group-hover:text-black dark:group-hover:text-white',
      ]"
    />
    <span
      class="text-sm font-medium leading-6"
      :class="[
        isActive
          ? 'text-black dark:text-white '
          : 'text-gray-700/70 dark:text-gray-300/60 group-hover:text-black dark:group-hover:text-white',
      ]"
    >
      {{ item.text }}
    </span>
    <UKbd
      v-if="item.kbd"
      :value="item.kbd"
      class="ml-auto"
      :class="[
        isActive
          ? 'text-black dark:text-white'
          : 'text-gray-700/70 dark:text-gray-300/60 group-hover:text-black dark:group-hover:text-white',
      ]"
    />
    <div
      v-else
      class="ml-auto inline-flex h-5 items-center justify-center min-w-[20px] text-[11px] ring-1 ring-gray-300 dark:ring-gray-700 ring-inset rounded bg-gray-100 dark:bg-gray-800"
    >
      <UIcon
        name="i-ph-arrow-up-right"
        class="h-4 w-4"
        :class="[
          isActive
            ? 'text-black dark:text-white'
            : 'text-gray-700/70 dark:text-gray-300/60 group-hover:text-black dark:group-hover:text-white',
        ]"
      />
    </div>
  </ULink>
</template>

<script setup lang="ts">
import type { SidebarItem } from '@/types/navigation/Sidebar.types';

defineOptions({
  name: 'SidebarItemLink',
});

defineProps<{
  item: SidebarItem;
}>();
</script>
