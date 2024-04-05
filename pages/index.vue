<script setup lang="ts">
import { appName } from '~/constants'

defineOgImageComponent('NuxtSeo', {
  title: appName,
})
</script>

<template>
  <div>
    <div class="min-h-screen w-full bg-background  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <p class="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-emerald-200 to-text py-8">
        Nuxt - Shadcn Starter
      </p>
      <div class="absolute top-2 left-2">
        <BaseToggleTheme />
      </div>
    </div>
  </div>
</template>
