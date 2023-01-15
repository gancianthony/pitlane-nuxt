<script setup lang="ts">
const year = ref('')

const router = useRouter()
const go = () => {
  if (year.value)
    router.push(`/schedule/${encodeURIComponent(year.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="year"
      placeholder="What year would you like to see?"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="300px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <div>
      <button
        m-3 text-sm btn
        :disabled="!year"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
