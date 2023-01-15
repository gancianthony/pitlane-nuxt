<script setup>
useHead({
  title: 'Pitlane',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap'
    }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}

html.dark {
  background: #222;
  color: white;
}
</style>
