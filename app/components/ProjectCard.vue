<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40"
  >
    <div class="p-5">
      <p class="mb-2 text-sm text-zinc-400">
        {{ project.year }}
      </p>

      <h3
        class="text-xl font-semibold text-white transition-colors group-hover:text-teal-300"
      >
        {{ project.title }}
      </h3>

      <p class="mt-3 text-sm leading-6 text-zinc-400">
        {{ project.description }}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { Project } from "~/data/projects";

  defineProps<{
    project: Project;
  }>();
</script>
