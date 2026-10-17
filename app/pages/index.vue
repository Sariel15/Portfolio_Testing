<script setup lang="ts">
  import { skills } from "~/data/skills";
  import ProjectsSection from "~/components/sections/projects.vue";
  import AboutSection from "~/components/sections/about.vue";
  import ContactSection from "~/components/sections/contact.vue";
  const { fullName } = useAppConf();

  useSeoMeta({
    title: `${fullName} | Software Developer`,
    description:
      "Explore my software projects, technical skills, and experience.",
    ogTitle: `${fullName} | Software Developer`,
    ogDescription: "Building practical, user-focused web applications.",
  });
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      id="home"
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

    <!-- Skills -->
    <section class="mx-auto scroll-mt-24 bg-[0.02] max-w-6xl border-b border-white/10">
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

    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
  </div>
</template>
