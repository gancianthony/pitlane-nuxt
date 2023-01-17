<!-- Data Visualization Page Implemented by Anthony Ganci -->

<template>
  <div flex flex-col justify-center>
    <div class="button-group">
      <button type="button" class="fastf1-button" @click="(showForm = 1)">
        Head-to-Head
      </button>
      <button type="button" class="fastf1-button" @click="(showForm = 2)">
        Gear Shifts
      </button>
      <button type="button" class="fastf1-button" @click="(showForm = 3)">
        Speed Visualization
      </button>
    </div>
    <div class="fastf1">
      <form @submit.prevent="onSubmitH2H()" v-if="showForm == 1">
        <div>
          <label>Driver1: </label>
          <input bg-dark-200 type="text" v-model="form.driver1" placeholder="Driver1" />
        </div>
        <div>
          <label>Driver2: </label>
          <input bg-dark-200 type="text" v-model="form.driver2" placeholder="Driver2" />
        </div>
        <div>
          <label>Track: </label>
          <select bg-dark-200 v-model="form.track">
            <option disabled value="">Please select one</option>
            <option>British Grand Prix</option>
            <option>Monaco Grand Prix</option>
            <option>Italian Grand Prix</option>
          </select>
        </div>
        <div>
          <label>Year: </label>
          <input bg-dark-200 type="text" v-model="form.year" placeholder="Year" />
        </div>
        <div>
          <input type="radio" id="race" value="R" v-model="form.session" />
          <label for="race">Race</label>

          <input type="radio" id="qual" value="Q" v-model="form.session" />
          <label for="qual">Qualifiying</label>
        </div>
        <input type="submit" value="Get Graph" class="btn btn-block" />
      </form>
      <form @submit.prevent="onSubmitGear" v-if="showForm == 2">
        <div>
          <label>Track: </label>
          <!-- <input v-model="gearForm.track" placeholder="Track" /> -->
          <select bg-dark-200 v-model="form.track">
            <option disabled value="">Please select one</option>
            <option>British Grand Prix</option>
            <option>Monaco Grand Prix</option>
            <option>Italian Grand Prix</option>
          </select>
        </div>
        <div>
          <label>Year: </label>
          <input bg-dark-200 type="text" v-model="form.year" placeholder="Year" />
        </div>
        <div>
          <input type="radio" id="race" value="R" v-model="form.session" />
          <label for="race">Race</label>

          <input type="radio" id="qual" value="Q" v-model="form.session" />
          <label for="qual">Qualifiying</label>
        </div>
        <input type="submit" value="Get Graph" class="btn btn-block" />
      </form>
      <form @submit.prevent="onSubmitSpeedVisual" v-if="showForm == 3">
        <div>
          <label>Driver: </label>
          <input type="text" v-model="form.driver" placeholder="Driver" />
        </div>
        <div>
          <label>Track: </label>
          <!-- <input v-model="gearForm.track" placeholder="Track" /> -->
          <select v-model="form.track">
            <option disabled value="">Please select one</option>
            <option>British Grand Prix</option>
            <option>Monaco Grand Prix</option>
            <option>Italian Grand Prix</option>
          </select>
        </div>
        <div>
          <label>Year </label>
          <input type="text" v-model="form.year" placeholder="Year" />
        </div>
        <div>
          <input type="radio" id="race" value="R" v-model="form.session" />
          <label for="race">Race</label>

          <input type="radio" id="qual" value="Q" v-model="form.session" />
          <label for="qual">Qualifiying</label>
        </div>
        <input type="submit" value="Get Graph" class="btn btn-block" />
      </form>
    </div>
    <div justify-center>
      <img :src="src" />
    </div>
  </div>
</template>
  
<style>
  /* $charade: #282a37;
  $bluebell: #979fd0;
  $darkish: #133337; */
  /* body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #353839;
  } */
  .button-group {
    padding: 20px;
  }
  .fastf1-button {
    font-family: "Roboto Mono";
    font-size: 28px;
    text-align: center;
    margin: 5px;
    background-color: #005b96;
    color: #0e1111;
    border-radius: 4px;
    cursor: pointer;
  }
  .fastf1-button:hover {
    background-color: #03396c;
  }
  .fastf1 {
    font-family: "Roboto Mono";
    font-size: 20px;
    color: $darkish;
  }
  .fastf1 input[type="text"],
  select {
    font-size: 18px;
  }
  .fastf1 label {
    text-align: right;
  }
  .fastf1 input[type="submit"] {
    background-color: #ff2800;
    font-family: "Roboto Mono";
    font-size: 20px;
    border-radius: 4px;
    border-width: 1px;
    margin-top: 8px;
  }
  /* .loading {
    display: flex;
    justify-content: center;
    div {
      width: 1rem;
      height: 1rem;
      margin: 2rem 0.3rem;
      background: #b3cde0;
      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }
  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  } */
  </style>
  
<script setup lang="ts">
// const showForm = ref(0);
// // const src = ref("");
// // let src = "";
// // let form = new Map([["driver1", ""], ["driver2", ""], ["track", ""], ["year", ""], ["session", ""]])
// // let form = new Map([]);
// // const form = ref({driver1: '', driver2: '', track: '', year: '', session: '', method: ''})
// interface form {
//     driver1: string,
//     driver2: string,
//     year: string,
//     track: string,
//     session: string,
//     method: string,
// }

// let form: form = {
//     driver1: "",
//     driver2: "",
//     year: "",
//     track: "",
//     session: "",
//     method: "",
// };

// async function sendForm() {
//   const {data, error} = await useFetch(`http://localhost:3001/pitlane`, 
//     {
//       method: 'POST', 
//       body: {form},
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//     if (error.value) console.log('ERROR from useFetch: ', error.value)
//     if (data.value) console.log('data returned from useFetch: ', data.value)
//     // console.log(data.value.src)
//     return data;
// }

// function onSubmitH2H() {
//   form.method = "h2h"
//   sendForm().then((result) => {
//     console.log(result.value)
//     // src = result.value.src;
//   })
//   // if (data.value) src = data.value.src;
//   // console.log(src)
// }
// function onSubmitGear() {
//   form.method = "gear"
// }
// function onSubmitSpeedVisual() {
//   form.method = "speed"
// }
</script>

<script lang="ts">
export default {
  data() {
    return {
      src: "",
      showForm: 0,
      form: {
        driver1: "",
        driver2: "",
        year: "",
        track: "",
        session: "",
        method: "",
      },
    }
  },
  methods: {
    async sendForm(form) {
      return await useFetch(`http://localhost:3001/pitlane`, 
      {
        method: 'POST', 
        body: {form},
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  },
  onSubmitH2H() {
    this.form.method = "h2h"
    this.sendForm(this.form).then((result) => {
      console.log(result.data.value.src)
      this.src = result.data.value.src;
    })
    // if (data.value) src = data.value.src;
    console.log(this.src)
  },
  onSubmitGear() {
    this.form.method = "gear"
    this.sendForm(this.form).then((result) => {
      console.log(result.data.value.src)
      this.src = result.data.value.src;
    })
    // if (data.value) src = data.value.src;
    console.log(this.src)
  },
  onSubmitSpeedVisual() {
    this.form.method = "speed"
    this.sendForm(this.form).then((result) => {
      console.log(result.data.value.src)
      this.src = result.data.value.src;
    })
    // if (data.value) src = data.value.src;
    console.log(this.src)
  }
  }
}
</script>