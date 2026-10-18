<script setup lang="ts">
  import { computed, ref, watch } from "vue";

  interface Screenshot {
    src: string;
    alt: string;
  }

  const props = defineProps<{
    screenshots?: Screenshot[];
    title: string;
  }>();

  const activeIndex = ref(0);

  const hasScreenshots = computed(() => (props.screenshots?.length ?? 0) > 0);

  const activeScreenshot = computed(
    () => props.screenshots?.[activeIndex.value],
  );

  watch(
    () => props.screenshots,
    () => {
      activeIndex.value = 0;
    },
  );

  function previous() {
    if (!props.screenshots?.length) return;

    activeIndex.value =
      (activeIndex.value - 1 + props.screenshots.length) %
      props.screenshots.length;
  }

  function next() {
    if (!props.screenshots?.length) return;

    activeIndex.value = (activeIndex.value + 1) % props.screenshots.length;
  }
</script>

<template>
  <div
    v-if="hasScreenshots"
    class="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
  >
    <div v-if="activeScreenshot">
      <Transition name="slide-fade" mode="out-in">
        <img
          :key="activeScreenshot.src"
          :src="activeScreenshot.src"
          :alt="activeScreenshot.alt || `${title} screenshot`"
          loading="lazy"
          class="block h-auto w-full"
        />
      </Transition>
    </div>

    <template v-if="screenshots!.length > 1">
      <button
        type="button"
        aria-label="Previous screenshot"
        class="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-teal-300 hover:text-black sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
        @click.prevent.stop="previous"
      >
        <span aria-hidden="true">←</span>
      </button>

      <button
        type="button"
        aria-label="Next screenshot"
        class="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-teal-300 hover:text-black sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
        @click.prevent.stop="next"
      >
        <span aria-hidden="true">→</span>
      </button>

      <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        <button
          v-for="(screenshot, index) in screenshots"
          :key="screenshot.src"
          type="button"
          :aria-label="`Show screenshot ${index + 1}`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          class="h-4 rounded-full transition-all duration-300 cursor-pointer"
          :class="
            index === activeIndex
              ? 'w-8 bg-teal-300'
              : 'w-4 bg-gray-400 hover:bg-gray-700'
          "
          @click.prevent.stop="activeIndex = index"
        />
      </div>

      <span
        class="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white"
      >
        {{ activeIndex + 1 }} / {{ screenshots!.length }}
      </span>
    </template>
  </div>
</template>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  .slide-fade-enter-from {
    opacity: 0;
    transform: translateX(10px);
  }

  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }

  @media (prefers-reduced-motion: reduce) {
    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: none;
    }
  }
</style>
