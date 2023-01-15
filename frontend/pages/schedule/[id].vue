<script setup lang="ts">
const route = useRoute()
const season = useSeasonStore()
const year = route.params.id

// const { data: post, refresh } = await useFetch(`https://ergast.com/api/f1/${year}.json`)
const { data, pending, error, refresh} = await useFetch(`http://localhost:3001/schedule`, 
    {
      method: 'POST', 
      body: {'year': year},
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
let schedule = ref([])
if (error.value) console.log('ERROR from useFetch: ', error.value)
if (data.value) console.log('data returned from useFetch: ', data.value)
if (data.value) schedule = data.value.schedule

watchEffect(() => {
  season.setNewYear(route.params.id as string)
})

// definePageMeta({
//   layout: 'schedules',
// })
</script>

<style>
#header {
  border: 1px solid;
}
#race-name {
  border-right: 1px solid;
  min-width: 280px;
}
#race-date {
  border-right: 1px solid;
  min-width: 135px;
}
#race-time {
  min-width: 135px;
}
.schedule td {
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  padding-right: 20px;
  padding-left: 20px;
  text-align: left;
}
</style>

<template>
  <div>
    <p p-block-2 text-3xl fw500>
      Schedule for {{ year }},
    </p>
    <div flex flex-col items-center>
      <div pb-2>
        <NuxtLink
          class="btn bg-red-500 hover-bg-red-700 m-3 text-sm"
          to="/schedule"
        >
          Back
        </NuxtLink>
      </div>
      <table class="table">
        <tr id="header">
          <th id="race-name">Track</th>
          <th id="race-date">Date</th>
          <th id="race-time">Time</th>
        </tr>
        <tr v-for="(race, index) in schedule" :key="index">
          <td>{{race[0]}}</td>
          <td>{{race[1]}}</td>
          <td>{{race[2]}}</td>
        </tr>
      </table>
    </div>
    <template v-if="season.otherYears.length">
      <p text-sm my-4>
        <span op-50>Recently viewed years:</span>
        <ul>
          <li v-for="otherYears in season.otherYears" :key="otherYears">
            <router-link :to="`/schedule/${otherYears}`" replace>
              {{ otherYears }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>
  </div>
</template>
