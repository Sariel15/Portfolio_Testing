<script setup lang="ts">
  import { links } from "~/data/header";

  const { fullName } = useAppConf();
</script>

<template>
  <header
    class="border-b border-white/10 sticky top-0 z-50 bg-zinc-950/90 backdrop-blur"
  >
    <nav
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      aria-label="Main navigation"
    >
      <NuxtLink to="/" class="text-lg font-bold tracking-tight">
        {{ fullName }}<span class="text-emerald-300">.</span>
      </NuxtLink>

      <div class="flex flex-wrap items-center gap-5 text-sm">
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          class="text-zinc-400 transition hover:text-emerald-300"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>
</template>
