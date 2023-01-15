<template>
  <main class="h-full text-center bg-dark-700">
    <div class="container">
      <div bg-dark-400 class="sidebar">
        <h1 p-block-2 text-2xl fw400>Sidebar</h1>
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
  grid-template-columns: 120px auto;
  grid-template-rows: none;
  max-width: none;
  height: 100vh;
}
.sidebar {
  grid-column-start: 1;
}
.content {
  grid-column-start: 2;
}
</style>