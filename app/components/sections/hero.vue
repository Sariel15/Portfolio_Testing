<template>
  <!-- Hero -->
  <section
    class="mx-auto flex max-w-6xl scroll-mt-24 flex-col justify-center border-b border-white/10 px-6 py-24"
  >
    <p
      class="mb-6 flex items-center gap-2 text-sm font-medium tracking-wide text-emerald-300"
    >
      <span class="h-2 w-2 rounded-full bg-teal-300"></span>
      Software Developer
    </p>

    <h1
      class="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
    >
      I build digital
      <span class="text-emerald-300">experiences</span>
      that solve real problems.
    </h1>

    <p class="mt-8 max-w-2xl text-base leading-8 text-zinc-400">
      I develop web applications with a focus on clean architecture, useful
      features, and thoughtful user experiences.
    </p>

    <div class="mt-10 flex flex-wrap gap-4">
      <NuxtLink
        to="/#projects"
        class="rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200"
      >
        Explore my work ↗
      </NuxtLink>

      <NuxtLink
        to="/#contact"
        class="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-teal-300/50"
      >
        Get in touch
      </NuxtLink>
    </div>

    <div class="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
      <span>Frontend Development</span>
      <span>Full-Stack Applications</span>
      <span>Database Design</span>
    </div>
  </section>
</template>

<script setup></script>

