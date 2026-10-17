<script setup>
  import { skills } from "~/data/skills";
</script>

<template>
  <!-- Skills -->
  <section
    class="mx-auto scroll-mt-24 bg-[0.02] max-w-6xl border-b border-white/10"
  >
    <div class="mx-auto max-w-6xl px-6 py-12">
      <p
        class="mb-6 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase"
      >
        Technologies I work with
      </p>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in skills"
          :key="skill"
          class="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
