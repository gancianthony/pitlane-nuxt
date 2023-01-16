<script setup lang="ts">
const sidebarHover = ref(false);

</script>

<template>
  <main class="h-full text-center bg-dark-700">
    <div class="container">
      <div  v-on:mouseenter="sidebarHover = true" v-on:mouseleave="sidebarHover = false"  bg-dark-400 class="sidebar">
        <div v-if="sidebarHover" class="expanded">
          <h1 class="title" p-block-2 text-2xl fw400>Pitlane</h1>
          <div flex flex-col text-start pl-2>
            <div>
              <NuxtLink class="hover-color-red-600 text-sm" to="/">
                Home
              </NuxtLink>
            </div>
            <div>
              <!-- <div i-carbon-calendar-heat-map /> -->
              <NuxtLink class="hover-color-red-600 text-sm" to="/schedule">
                Schedule
              </NuxtLink>
            </div>
            <div>
              <NuxtLink class="hover-color-red-600 text-sm" to="/standings">
                Standings
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-if="!sidebarHover" class="collapsed">
          <p p-block-2 text-2xl fw400>🏎️</p>
          <div pt-2 flex flex-col items-center>
            <div m-2 i-carbon-home />
            <div m-2 i-carbon-calendar-heat-map />
            <div m-2 i-carbon-chart-column />
          </div>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div class="bg-dark-700 right-0 left-0 bottom-5 pt-5 mx-auto text-center text-sm">
      <p op-50>Pitlane @2023.</p>
    </div>
  </main>
</template>


<style>
.container {
  display: grid;
  /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
  grid-template-columns: minmax(50px, 120px) auto;
  grid-template-rows: none;
  max-width: none;
  height: 100vh;
}
.sidebar {
  width: 60px;
  grid-column-start: 1;
  transition: width 400ms;
}
.sidebar:hover {
  width: 120px;
  transition: width 400ms ease;
}
.content {
  grid-column-start: 2;
}
</style>