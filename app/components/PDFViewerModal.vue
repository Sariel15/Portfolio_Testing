<script setup lang="ts">
  import { onBeforeUnmount, watch } from "vue";

  const props = defineProps<{
    open: boolean;
    src: string;
    title?: string;
  }>();

  const emit = defineEmits<{
    close: [];
  }>();

  function close() {
    emit("close");
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && props.open) {
      close();
    }
  }

  watch(
    () => props.open,
    (isOpen) => {
      if (import.meta.client) {
        document.body.style.overflow = isOpen ? "hidden" : "";
      }
    },
    { immediate: true },
  );

  if (import.meta.client) {
    watch(
      () => props.open,
      (isOpen) => {
        if (isOpen) {
          window.addEventListener("keydown", handleKeydown);
        } else {
          window.removeEventListener("keydown", handleKeydown);
        }
      },
      { immediate: true },
    );
  }

  onBeforeUnmount(() => {
    if (import.meta.client) {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    }
  });
</script>

<template>
  <Teleport to="body">
    <Transition name="pdf-modal">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
        @click.self="close"
      >
        <section
          role="dialog"
          aria-modal="true"
          :aria-label="title || 'PDF viewer'"
          class="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        >
          <!-- Toolbar -->
          <header
            class="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6"
          >
            <h2 class="truncate font-semibold text-white">
              {{ title || "PDF Viewer" }}
            </h2>

            <div class="flex shrink-0 items-center gap-2">
              <a
                :href="src"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-teal-300/40 hover:text-teal-300"
              >
                Open PDF
              </a>

              <a
                :href="src"
                download
                class="hidden rounded-lg bg-teal-300 px-3 py-2 text-sm font-medium text-zinc-950 transition hover:bg-teal-200 sm:inline-flex"
              >
                Download
              </a>

              <button
                type="button"
                aria-label="Close PDF viewer"
                class="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                @click="close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </header>

          <!-- PDF content -->
          <div class="min-h-0 flex-1 bg-zinc-800">
            <iframe
              :src="src"
              :title="title || 'PDF document'"
              class="h-full w-full border-0"
            />
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
  .pdf-modal-enter-active,
  .pdf-modal-leave-active {
    transition: opacity 200ms ease;
  }

  .pdf-modal-enter-active section,
  .pdf-modal-leave-active section {
    transition: transform 200ms ease;
  }

  .pdf-modal-enter-from,
  .pdf-modal-leave-to {
    opacity: 0;
  }

  .pdf-modal-enter-from section,
  .pdf-modal-leave-to section {
    transform: translateY(12px) scale(0.99);
  }

  @media (prefers-reduced-motion: reduce) {
    .pdf-modal-enter-active,
    .pdf-modal-leave-active,
    .pdf-modal-enter-active section,
    .pdf-modal-leave-active section {
      transition: none;
    }
  }
</style>
