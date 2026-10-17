<script setup lang="ts">
  import { email, socialLinks } from "~/data/contact";

  const showResume = ref(false);
</script>

<template>
  <section
    class="mx-auto min-h-[70vh] max-w-4xl scroll-mt-24 border-b border-white/10 px-6 py-20"
  >
    <p class="text-md font-medium text-teal-300">GET IN TOUCH</p>

    <h1 class="mt-4 text-4xl font-semibold sm:text-6xl">Let's talk.</h1>

    <p class="mt-6 max-w-2xl leading-8 text-zinc-400">
      Have an opportunity, a project idea, or just want to connect? Feel free to
      reach out.
    </p>

    <div class="mt-10 rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
      <p class="text-md text-zinc-500">EMAIL</p>

      <a
        :href="`mailto:${email}`"
        class="mt-3 inline-block break-all text-xl font-medium text-teal-300 hover:text-teal-200 sm:text-2xl"
      >
        {{ email }}
      </a>
    </div>

    <div class="mt-10">
      <h2 class="text-lg font-semibold">Find me online</h2>

      <div class="mt-5 flex flex-wrap gap-3">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noreferrer"
          class="rounded-lg border border-white/10 px-5 py-3 text-md transition hover:border-teal-300/50 hover:text-teal-300"
        >
          {{ link.label }} ↗
        </a>

        <button
          type="button"
          class="rounded-lg border cursor-pointer border-white/10 px-5 py-3 text-md transition hover:border-teal-300/50 hover:text-teal-300"
          @click="showResume = true"
        >
          View Resume
        </button>

        <PDFViewerModal
          :open="showResume"
          src="/resume.pdf"
          title="Resume"
          @close="showResume = false"
        />
      </div>
    </div>
  </section>
</template>
