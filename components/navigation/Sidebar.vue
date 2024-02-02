<template>
  <div class="sidebar">
    <USlideover v-model="sidebar.show" side="left">
      <div
        class="h-full w-full bg-gray-200/20 dark:bg-gray-700/20 border-r border-gray-800/10 dark:border-gray-200/10"
      >
        <div class="flex flex-col flex-1 px-4 pt-6 pb-5 h-full">
          <MeHeader />
          <nav class="mt-8 flex-1 flex-col space-y-8">
            <div class="space-y-0.5">
              <SidebarItemLink
                v-for="item in mainNavigation"
                :key="item.text"
                :item="item"
              />
            </div>
            <div class="flex flex-col space-y-3">
              <h4
                class="text-sxs font-medium uppercase text-gray-700/70 dark:text-gray-300/60"
              >
                Resources
              </h4>
              <div class="flex flex-col space-y-0.5">
                <SidebarItemLink
                  v-for="item in resourcesNavigation"
                  :key="item.text"
                  :item="item"
                />
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <h4
                class="text-sxs font-medium uppercase text-gray-700/70 dark:text-gray-300/60"
              >
                Connect
              </h4>
              <div class="flex flex-col space-y-0.5">
                <SidebarItemLink
                  v-for="item in connectNavigation"
                  :key="item.text"
                  :item="item"
                />
              </div>
            </div>
          </nav>
          <ColorModeButton />
        </div>
      </div>
    </USlideover>
    <!-- Static sidebar for desktop -->
    <div class="hidden xl:fixed xl:inset-y-0 xl:flex xl:w-60 xl:flex-col">
      <aside
        class="flex min-h-0 flex-1 flex-col overflow-y-auto border-r border-gray-800/10 bg-gray-200/20 dark:border-gray-200/10 dark:bg-gray-700/20"
      >
        <div class="flex flex-1 flex-col px-4 pt-6 pb-5">
          <MeHeader />
          <nav class="mt-8 flex-1 flex-col space-y-8">
            <div class="space-y-0.5">
              <SidebarItemLink
                v-for="item in mainNavigation"
                :key="item.text"
                :item="item"
              />
            </div>
            <div class="flex flex-col space-y-3">
              <h4
                class="text-sxs font-medium uppercase text-gray-700/70 dark:text-gray-300/60"
              >
                Resources
              </h4>
              <div class="flex flex-col space-y-0.5">
                <SidebarItemLink
                  v-for="item in resourcesNavigation"
                  :key="item.text"
                  :item="item"
                />
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <h4
                class="text-sxs font-medium uppercase text-gray-700/70 dark:text-gray-300/60"
              >
                Connect
              </h4>
              <div class="flex flex-col space-y-0.5">
                <SidebarItemLink
                  v-for="item in connectNavigation"
                  :key="item.text"
                  :item="item"
                />
              </div>
            </div>
          </nav>
          <ColorModeButton />
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SidebarItem } from '@/types/navigation/Sidebar.types';
import { useSidebarStore } from '@/store/sidebar';

defineOptions({
  name: 'Sidebar',
});

const sidebar = useSidebarStore();

const mainNavigation = [
  {
    text: 'Explore',
    to: '/',
    icon: 'i-solar-compass-linear',
    kbd: '1',
  },
  {
    text: 'Writing',
    to: '/writing',
    icon: 'i-solar-pen-2-outline',
    kbd: '2',
  },
  {
    text: 'Projects',
    to: '/projects',
    icon: 'i-solar-suitcase-outline',
    kbd: '3',
  },
  {
    text: 'Services',
    to: '/services',
    icon: 'i-solar-box-linear',
    kbd: '4',
  },
  {
    text: 'About',
    to: '/about',
    icon: 'i-ph-brain',
    kbd: '5',
  },
] as SidebarItem[];

const resourcesNavigation = [
  {
    text: 'Bookmarks',
    to: '/bookmarks',
    icon: 'i-solar-bookmark-outline',
    kbd: '6',
  },
  {
    text: 'Stack',
    to: '/stack',
    icon: 'i-solar-magic-stick-3-linear',
    kbd: '7',
  },
  // {
  //   text: 'Workspace',
  //   to: '/workspace',
  //   icon: 'i-solar-sofa-linear',
  //   kbd: '8',
  // },
] as SidebarItem[];

const connectNavigation = [
  {
    text: 'Contact',
    to: '/contact',
    icon: 'i-solar-mailbox-linear',
    kbd: 'C',
  },
  {
    text: 'Twitter',
    to: 'https://twitter.com/alfredo_mtzrmz',
    target: '_blank',
    icon: 'i-ph-twitter-logo',
  },
  {
    text: 'Github',
    to: 'https://github.com/alfredomtzrmz',
    target: '_blank',
    icon: 'i-ph-github-logo',
  },
  {
    text: 'LinkedIn',
    to: 'https://linkedin.com/in/alfredomtzrmz',
    target: '_blank',
    icon: 'i-ph-linkedin-logo',
  },
] as SidebarItem[];
</script>
