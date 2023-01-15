import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSeasonStore = defineStore('year', () => {
  /**
   * Current named of the user.
   */
  const savedYear = ref('')
  const previousYears = ref(new Set<string>())

  const usedYears = computed(() => Array.from(previousYears.value))
  const otherYears = computed(() => usedYears.value.filter(year => year !== savedYear.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param year - new name to set
   */
  function setNewYear(year: string) {
    if (savedYear.value)
      previousYears.value.add(savedYear.value)

    savedYear.value = year
  }

  return {
    setNewYear,
    otherYears,
    savedYear,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSeasonStore, import.meta.hot))
