<script setup lang="ts">
  import { projects } from "~/data/projects";

  const { fullName } = useAppConf();
</script>

<template>
  <section
    class="mx-auto min-h-[70vh] max-w-6xl scroll-mt-24 border-b border-white/10 px-6 py-20"
  >
    <p class="text-sm font-medium tracking-wide text-emerald-300">MY WORK</p>

    <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
      Projects
    </h1>

    <p class="mt-5 max-w-2xl leading-8 text-zinc-400">
      A collection of software projects, experiments, and applications I've
      contributed to or built.
    </p>

    <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </section>
</template>
