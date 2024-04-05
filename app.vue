<script setup lang="ts">
useHead({
  title: 'Nuxt Starter',

})
</script>

<template>
  <NuxtPwaAssets />

  <NuxtLayout>
    <NuxtLoadingIndicator :size="3" />
    <NuxtPage />
  </NuxtLayout>
</template>
