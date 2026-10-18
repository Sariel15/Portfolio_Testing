<script setup lang="ts">
  import { projects } from "~/data/projects";

  const { fullName } = useAppConf();

  const route = useRoute();

  const project = computed(() =>
    projects.find((item) => item.slug === route.params.slug),
  );

  if (!project.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found",
    });
  }
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16">
    <!-- Back link -->
    <NuxtLink
      to="/#projects"
      class="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-teal-300 border border-white/10 p-2 rounded-2xl hover:border-teal-300/40"
    >
      ← Back to Projects
    </NuxtLink>

    <!-- Project heading -->
    <header class="mb-8">
      <p class="mb-3 text-sm text-teal-300">
        {{ project.year }}
      </p>

      <h1 class="text-4xl font-bold tracking-tight text-white">
        {{ project.title }}
      </h1>

      <p class="mt-4 max-w-3xl leading-7 text-zinc-400">
        {{ project.description }}
      </p>

      <!-- Tech stack -->
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300 cursor-default"
        >
          {{ tech }}
        </span>
      </div>
    </header>

    <!-- Screenshots appear only when available -->
    <section v-if="project.screenshots?.length" class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-white">Project Preview</h2>

      <ProjectSlideshow
        :screenshots="project.screenshots"
        :title="project.title"
      />
    </section>

    <!-- Project overview -->
    <section class="mb-10">
      <h2 class="mb-3 text-xl font-semibold text-white">Overview</h2>

      <p class="leading-7 text-zinc-400">
        {{ project.overview }}
      </p>
    </section>

    <!-- Your role -->
    <section class="mb-10">
      <h2 class="mb-3 text-xl font-semibold text-white">My Role</h2>

      <p class="leading-7 text-zinc-400">
        {{ project.role }}
      </p>
    </section>
  </div>
</template>
