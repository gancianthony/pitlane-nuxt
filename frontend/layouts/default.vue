<script setup lang="ts">
const sidebarHover = ref(true);

</script>

<template>
  <main class=" text-center bg-dark-700">
    <div class="container">
      <div overflow-hidden bg-dark-400 class="sidebar">
        <div  ml-2 flex flex-col justify-start>
          <div flex flex-row justify-start>
            <p p-2 text-2xl fw400>🏎️</p>
            <h1 class="title" p-block-2 pl-10px text-2xl fw400>Pitlane</h1>
          </div>
          <div pt-2 flex flex-col>
            <div m-2 ml-4 flex flex-row justify-start items-center hover-color-red-600>
              <NuxtLink class="pr-28px" to="/">
               <div i-carbon-home />
              </NuxtLink>
              <NuxtLink class="" to="/">
                Home 
              </NuxtLink>
            </div>
            <div m-2 ml-4 flex flex-row justify-start items-center hover-color-red-600>
              <NuxtLink class="pr-28px" to="/schedule">
               <div i-carbon-calendar-heat-map />
              </NuxtLink>
              <NuxtLink class="" to="/schedule">
                Schedule 
              </NuxtLink>
            </div>
            <div m-2 ml-4 flex flex-row justify-start items-center hover-color-red-600>
              <NuxtLink class="pr-28px" to="/standings">
               <div i-carbon-chart-column />
              </NuxtLink>
              <NuxtLink class="" to="/standings">
                Standings 
              </NuxtLink>
            </div>
            <div m-2 ml-4 flex flex-row justify-start items-center hover-color-red-600>
              <NuxtLink class="pr-28px" to="/pitwall">
               <div i-carbon-activity />
              </NuxtLink>
              <NuxtLink class="" to="/pitwall">
                Pitwall 
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div class="bg-dark-100 right-0 left-0 bottom-5 pt-5 text-center text-sm">
      <p op-50>Pitlane @2023.</p>
    </div>
  </main>
</template>


<style>
/* grid */
/* .container {
  display: grid;
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
} */
/* flexbox */
.container {
  min-height: 100vh;
  max-height: none;
  height: auto;
  max-width: none;
  display: flex;
}
.sidebar {
  width: 60px;
  transition: 0.4s ease;
}
.content {
  flex-grow: 1;
}
/* this part */
.sidebar:hover {
  width: 180px;
}
</style>