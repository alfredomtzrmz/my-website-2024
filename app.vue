<template>
  <div class="h-full w-full">
    <Sidebar />
    <div class="flex flex-1 flex-col xl:pl-64">
      <Nabvar />
      <main class="flex-1">
        <div class="xl:py-[8rem] py-12 md:py-16">
          <div class="2xl:max-w-4xl md:max-w-3xl px-6 sm:px-12 mx-auto">
            <NuxtPage />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

useHead({
  bodyAttrs: {
    class: 'bg-gray-50 dark:bg-gray-950 antialiased',
  },
});

defineShortcuts({
  1: () => {
    router.push('/');
  },
  2: () => {
    router.push('/writing');
  },
  3: () => {
    router.push('/projects');
  },
  4: () => {
    router.push('/services');
  },
  5: () => {
    router.push('/about');
  },
  6: () => {
    router.push('/bookmarks');
  },
  7: () => {
    router.push('/stack');
  },
});
</script>
