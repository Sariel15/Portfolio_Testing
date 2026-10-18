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
  const displayedIndex = ref(0);

  const hasScreenshots = computed(() => (props.screenshots?.length ?? 0) > 0);

  const displayedScreenshot = computed(
    () => props.screenshots?.[displayedIndex.value],
  );

  let preloadId = 0;

  watch(
    () => props.screenshots,
    () => {
      activeIndex.value = 0;
      displayedIndex.value = 0;
    },
  );

  watch(activeIndex, (index) => {
    const screenshot = props.screenshots?.[index];
    if (!screenshot) return;

    const currentPreloadId = ++preloadId;
    const image = new Image();
    const displayWhenSettled = () => {
      if (currentPreloadId === preloadId && activeIndex.value === index) {
        displayedIndex.value = index;
      }
    };

    image.onload = displayWhenSettled;
    image.onerror = displayWhenSettled;
    image.src = screenshot.src;
  });

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
    <div v-if="displayedScreenshot" class="relative">
      <img
        :key="displayedScreenshot.src"
        :src="displayedScreenshot.src"
        :alt="displayedScreenshot.alt || `${title} screenshot`"
        class="block h-auto w-full"
      />

      <div
        v-if="activeIndex !== displayedIndex"
        role="status"
        aria-label="Loading screenshot"
        class="absolute inset-0 flex items-center justify-center bg-black/30"
      >
        <span
          aria-hidden="true"
          class="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-teal-300"
        />
      </div>
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
