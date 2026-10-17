<script setup lang="ts">
  import ProjectsSection from "~/components/sections/projects.vue";
  import Skills from "~/components/sections/skills.vue";
  import AboutSection from "~/components/sections/about.vue";
  import ContactSection from "~/components/sections/contact.vue";
  import Hero from "~/components/sections/hero.vue";
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
    <Hero id="home" />
    <Skills id="skills" />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
  </div>
</template>
