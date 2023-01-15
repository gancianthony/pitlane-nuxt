<script setup lang="ts">
const route = useRoute()
const season = useSeasonStore()
const { data, pending, error, refresh} = await useFetch(`http://localhost:3001/standings`, 
    {
      method: 'POST', 
      body: {'year': '2022'},
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

let standings =   [ [ 1, "Max Verstappen", 454 ], [ 2, "Charles Leclerc", 308 ], [ 3, "Sergio Pérez", 305 ], [ 4, "George Russell", 275 ], [ 5, "Carlos Sainz", 246 ], [ 6, "Lewis Hamilton", 240 ], [ 7, "Lando Norris", 122 ], [ 8, "Esteban Ocon", 92 ], [ 9, "Fernando Alonso", 81 ], [ 10, "Valtteri Bottas", 49 ], [ 11, "Daniel Ricciardo", 37 ], [ 12, "Sebastian Vettel", 37 ], [ 13, "Kevin Magnussen", 25 ], [ 14, "Pierre Gasly", 23 ], [ 15, "Lance Stroll", 18 ], [ 16, "Mick Schumacher", 12 ], [ 17, "Yuki Tsunoda", 12 ], [ 18, "Guanyu Zhou", 6 ], [ 19, "Alexander Albon", 4 ], [ 20, "Nicholas Latifi", 2 ], [ 21, "Nyck de Vries", 2 ], [ 22, "Nico Hülkenberg", 0 ] ];
if (error.value) console.log('ERROR from useFetch: ', error.value)
if (data.value) console.log('data returned from useFetch: ', data.value)
if (data.value) standings = data.value.standings
// const standings = ref([ [ "Bahrain Grand Prix", "2023-03-05", "15:00:00Z" ], [ "Saudi Arabian Grand Prix", "2023-03-19", "17:00:00Z" ], [ "Australian Grand Prix", "2023-04-02", "05:00:00Z" ], [ "Azerbaijan Grand Prix", "2023-04-30", "11:00:00Z" ], [ "Miami Grand Prix", "2023-05-07", "19:30:00Z" ], [ "Emilia Romagna Grand Prix", "2023-05-21", "13:00:00Z" ], [ "Monaco Grand Prix", "2023-05-28", "13:00:00Z" ], [ "Spanish Grand Prix", "2023-06-04", "13:00:00Z" ], [ "Canadian Grand Prix", "2023-06-18", "18:00:00Z" ], [ "Austrian Grand Prix", "2023-07-02", "13:00:00Z" ], [ "British Grand Prix", "2023-07-09", "14:00:00Z" ], [ "Hungarian Grand Prix", "2023-07-23", "13:00:00Z" ], [ "Belgian Grand Prix", "2023-07-30", "13:00:00Z" ], [ "Dutch Grand Prix", "2023-08-27", "13:00:00Z" ], [ "Italian Grand Prix", "2023-09-03", "13:00:00Z" ], [ "Singapore Grand Prix", "2023-09-17", "12:00:00Z" ], [ "Japanese Grand Prix", "2023-09-24", "05:00:00Z" ], [ "Qatar Grand Prix", "2023-10-08", "14:00:00Z" ], [ "United States Grand Prix", "2023-10-22", "19:00:00Z" ], [ "Mexico City Grand Prix", "2023-10-29", "20:00:00Z" ], [ "São Paulo Grand Prix", "2023-11-05", "18:00:00Z" ], [ "Las Vegas Grand Prix", "2023-11-18", "13:00:00Z" ], [ "Abu Dhabi Grand Prix", "2023-11-26", "13:00:00Z" ] ])
// standings = data.value.standings;

watchEffect(() => {
  season.setNewYear(route.params.id as string)
})

// definePageMeta({
//   layout: 'default',
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
  <p p-block-2 text-3xl fw500>Standings for all Formula1 Seasons</p>
  <p p-block-2 text-xl fw400>Standings for the 2022 season</p>
    <div pt-6 flex flex-row justify-center>
        <StandingsSelect p-inline-10/>
        <div>
          <table class="table">
            <!-- <tr id="header">
              <th id="race-name">Rank</th>
              <th id="race-date">Driver</th>
              <th id="race-time">Points</th>
            </tr>
            <tr v-for="(driver, index) in standings" :key="index">
              <td>{{driver[0]}}</td>
              <td>{{driver[1]}}</td>
              <td>{{driver[2]}}</td>
            </tr> -->
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
        <!-- <InputEntry /> -->
    </div>
</template>