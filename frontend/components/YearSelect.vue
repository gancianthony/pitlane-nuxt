<script setup lang="ts">
const year = ref(2023)

const router = useRouter()
const go = () => {
  if (year.value)
    router.push(`/schedule/${encodeURIComponent(year.value)}`)
}
</script>

<template>
  <div>
    <select         p-block-1.5
        p-inline-4
        text-center
        color-white
        border-rounded-2
        bg-dark200 v-model="year" @keydown.enter="go"
      @change="go">
      <option selected> {{ 2023 }} </option>
      <option v-for="n in 73" :value="2023 - n" :key="2023 - n">{{ 2023 - n }}</option>
    </select>
  </div>
</template>
