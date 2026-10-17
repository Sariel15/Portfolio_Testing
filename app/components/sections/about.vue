<script setup lang="ts">

import { experience, education } from '~/data/about'

</script>

<template>
  <section
    class="mx-auto max-w-4xl scroll-mt-24 border-b border-white/10 px-6 py-20"
  >
    <p class="text-sm font-medium text-teal-300">ABOUT ME</p>

    <h1 class="mt-4 text-4xl font-semibold sm:text-5xl">
      The developer behind the code.
    </h1>

    <div class="mt-8 space-y-5 text-base leading-8 text-zinc-400">
      <p>
        I'm a software developer interested in building practical, maintainable,
        and user-focused applications.
      </p>

      <p>
        My experience includes frontend development, backend API integration,
        database management, and improving existing business workflows through
        software.
      </p>

      <p>
        I enjoy learning new technologies, solving technical problems, and
        turning requirements into working solutions.
      </p>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-semibold">Experience</h2>

      <div
        v-for="job in experience"
        :key="job.role"
        class="mt-7 border-l border-teal-300/40 pl-6"
      >
        <p class="text-sm text-teal-300">{{ job.period }}</p>
        <h3 class="mt-2 text-lg font-semibold">{{ job.role }}</h3>
        <p class="mt-1 text-sm text-zinc-400">
          {{ job.organization }}
        </p>
        <p class="mt-4 leading-7 text-zinc-400">
          {{ job.description }}
        </p>
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-semibold">Education</h2>

      <div
        v-for="item in education"
        :key="item.degree"
        class="mt-7 rounded-xl border border-white/10 p-6"
      >
        <h3 class="text-lg font-semibold">{{ item.degree }}</h3>
        <p class="mt-2 text-zinc-400">{{ item.school }}</p>
        <p class="mt-2 text-sm text-zinc-500">{{ item.detail }}</p>
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-semibold">Beyond the code</h2>
      <p class="mt-4 leading-8 text-zinc-400">
        I'm always looking for opportunities to grow as an engineer, collaborate
        with others, and build software that makes a meaningful difference.
      </p>
    </div>
  </section>
</template>
