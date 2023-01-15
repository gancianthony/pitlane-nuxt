<template>
  <!-- move this container thing into one level above so sidebar is always present -->
      <!-- <Suspense>
        <PageView />
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense> -->
  <h1 p-block-2 text-4xl fw500>Pitlane</h1>
  <h2 op30 text-xl>Formula1 made simple. </h2>
  <div pt-20 flex flex-row justify-evenly>
    <div>
      <NuxtLink class="btn bg-red-500 hover-bg-red-700 m-3" to="/schedule">
        Schedules
      </NuxtLink>
    </div>
    <div>
      <NuxtLink class="btn bg-red-500 hover-bg-red-700 m-3" to="/standings">
        Standings
      </NuxtLink>
    </div>
  </div>
</template>