<script setup lang="ts">
const route = useRoute()
const season = useSeasonStore()
const year = route.params.id

// const { data: post, refresh } = await useFetch(`https://ergast.com/api/f1/${year}.json`)
const { data, pending, error, refresh} = await useFetch(`http://localhost:3001/standings`, 
    {
      method: 'POST', 
      body: {'year': year},
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
let standings = ref([])
if (error.value) console.log('ERROR from useFetch: ', error.value)
if (data.value) console.log('data returned from useFetch: ', data.value)
if (data.value) standings = data.value.standings

watchEffect(() => {
  season.setNewYear(route.params.id as string)
})

// definePageMeta({
//   layout: 'schedules',
// })
</script>

<style>
.standings td {
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  padding-right: 20px;
  padding-left: 20px;
}
#title {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
#header {
  border-bottom: 1px solid;
}
#driver-name {
  border-right: 1px solid;
  min-width: 150px;
}
#driver-rank {
  border-right: 1px solid;
  min-width: 50px;
}
#driver-points {
  min-width: 50px;
}
#table-driver {
  text-align: left;
}
</style>

<template>
  <div>
    <p p-block-2 text-3xl fw500>
      Standings for {{ year }},
    </p>
    <div flex flex-col items-center>
      <div pb-2>
        <NuxtLink
          class="btn bg-red-500 hover-bg-red-700 m-3 text-sm"
          to="/standings"
        >
          Back
        </NuxtLink>
      </div>
      <table class="table">
        <tr id="header">
                <th id="driver-rank">Rank</th>
                <th id="driver-name">Driver</th>
                <th id="driver-points">Points</th>
            </tr>
            <tr v-for="(driver, index) in standings" :key="index">
              <td>{{driver[0]}}</td>
              <td id="table-driver">{{driver[1]}}</td>
              <td>{{driver[2]}}</td>
            </tr>
      </table>
    </div>
    <template v-if="season.otherYears.length">
      <p text-sm my-4>
        <span op-50>Recently viewed years:</span>
        <ul>
          <li v-for="otherYears in season.otherYears" :key="otherYears">
            <router-link :to="`/standings/${otherYears}`" replace>
              {{ otherYears }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>
  </div>
</template>
