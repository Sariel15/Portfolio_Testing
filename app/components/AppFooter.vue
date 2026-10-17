<script setup lang="ts">
  import { socialLinks } from "~/data/contact";
</script>

<template>
  <footer class="border-t border-white/10">
    <div
      class="mx-auto flex max-w-6xl flex-wrap justify-between px-6 py-8 text-sm text-zinc-500"
    >
      <p>© {{ new Date().getFullYear() }} Rhonee James Tolentino.</p>

      <a
        :href="socialLinks[0].url"
        target="_blank"
        rel="noreferrer"
        class="transition hover:text-emerald-300"
      >
        GitHub ↗
      </a>
    </div>
  </footer>
</template>
