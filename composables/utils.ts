// Split number by , 10000 => 10,000
export function splitNumber(value: number | string | null) {
  if (value === null || value === undefined || value === 0)
    return '0'

  // Round the number to 2 decimal places
  const roundedValue = Math.round(Number(value) * 100) / 100

  // Use Intl.NumberFormat to format the rounded value with commas
  return new Intl.NumberFormat().format(roundedValue)
}

export function calcDiffPercentage(originalPrice: number, discount: number) {
  // Calculate the diffrent price percentage
  return Math.floor(((originalPrice - discount) / originalPrice) * 100)
}

export function useCapitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


interface useTimerArgs {
  second?: number
  minute?: number
  hour?: number
}
// Timer that used for Resend OTP and ...
export function useTimer(option: useTimerArgs) {
  // Calculate total time in milliseconds
  const totalTimeInMilliseconds
    = (option.second || 0) * 1000
    + (option.minute || 0) * 60 * 1000
    + (option.hour || 0) * 60 * 60 * 1000
    // Calculate total time in seconds
  const totalTimeInSeconds
    = (option.second || 0)
    + (option.minute || 0) * 60
    + (option.hour || 0) * 60 * 60
  const { isPending, start: startTimer } = useTimeoutFn(() => {}, totalTimeInMilliseconds)
  const { counter, reset, pause } = useInterval(1000, { controls: true })
  watch(() => isPending, (oldVal, newVal) => {
    if (oldVal && !newVal)
      pause()
  })
  function resetTimer() {
    reset()
    startTimer()
  }
  const getCounter = computed((): number => totalTimeInSeconds - counter.value)

  const getFormattedCounter = computed(() => {
    const remainingTimeInSeconds = getCounter.value
    const formattedMinutes = Math.floor(remainingTimeInSeconds / 60)
    const formattedSeconds = remainingTimeInSeconds % 60
    return `${formattedSeconds.toString().padStart(2, '0')} : ${formattedMinutes}`
  })

  return {
    isPending,
    getFormattedCounter,

    startTimer,
    resetTimer,
  }
}


// Lock Body Scroll ( Use With modals,Sheets and ... )
export function useWebScrollLock() {
  const isLocked = ref<boolean>(false)

  if (import.meta.client) {
    const refRoot = ref()
    const scrollbarWidth = useCssVar('--scrollbar-width', refRoot)
    const windowScrollTop = useCssVar('--window-scroll-top', refRoot)

    if (!scrollbarWidth.value)
      scrollbarWidth.value = `${window.innerWidth - document.body.clientWidth}px`

    const classes = document.documentElement.classList

    watch(isLocked, (val) => {
      if (val) {
        windowScrollTop.value = `-${window.scrollY}px`
        classes.add('scroll-lock')
      }
      else {
        const scrollY = windowScrollTop.value
        classes.remove('scroll-lock')
        window.scrollTo(0, Number.parseInt(scrollY || '0') * -1)
      }
    })
  }

  return computed<boolean>({
    get() {
      return isLocked.value
    },
    set(v) {
      isLocked.value = v
    },
  })
}

// Generate Random Background Color
export function useGetRandomColor() {
  const tailwindColorClasses = {
    background: [
      'bg-red-500 dark:bg-red-400',
      'bg-rose-500 dark:bg-rose-400',
      'bg-blue-500 dark:bg-blue-400',
      'bg-green-500 dark:bg-green-400',
      'bg-emerald-500 dark:bg-emerald-400',
      'bg-teal-500 dark:bg-teal-400',
      'bg-sky-500 dark:bg-sky-400',
      'bg-yellow-500 dark:bg-yellow-400',
      'bg-indigo-500 dark:bg-indigo-400',
      'bg-purple-500 dark:bg-purple-400',
      'bg-pink-500 dark:bg-pink-400',
      'bg-violet-500 dark:bg-violet-400',
      // Add more Tailwind color classes as needed
    ],
    text: [
      'text-red-500 dark:text-red-400',
      'text-rose-500 dark:text-rose-400',
      'text-blue-500 dark:text-blue-400',
      'text-green-500 dark:text-green-400',
      'text-emerald-500 dark:text-emerald-400',
      'text-teal-500 dark:text-teal-400',
      'text-sky-500 dark:text-sky-400',
      'text-yellow-500 dark:text-yellow-400',
      'text-indigo-500 dark:text-indigo-400',
      'text-purple-500 dark:text-purple-400',
      'text-pink-500 dark:text-pink-400',
      'text-violet-500 dark:text-violet-400',
      // Add more Tailwind color classes as needed
    ],
  }

  return (type: 'background' | 'text'): string => {
    const colorClasses = tailwindColorClasses[type] || tailwindColorClasses.background

    return colorClasses[Math.floor(Math.random() * colorClasses.length)]
  }
}
export function useGetRandomHoverColor() {
  const tailwindHoverColorClasses = {
    background: [
      'hover:bg-red-500 dark:hover:bg-red-400',
      'hover:bg-rose-500 dark:hover:bg-rose-400',
      'hover:bg-blue-500 dark:hover:bg-blue-400',
      'hover:bg-green-500 dark:hover:bg-green-400',
      'hover:bg-emerald-500 dark:hover:bg-emerald-400',
      'hover:bg-teal-500 dark:hover:bg-teal-400',
      'hover:bg-sky-500 dark:hover:bg-sky-400',
      'hover:bg-yellow-500 dark:hover:bg-yellow-400',
      'hover:bg-indigo-500 dark:hover:bg-indigo-400',
      'hover:bg-purple-500 dark:hover:bg-purple-400',
      'hover:bg-pink-500 dark:hover:bg-pink-400',
      'hover:bg-violet-500 dark:hover:bg-violet-400',
      // Add more Tailwind color classes as needed
    ],
    text: [
      'hover:text-red-500 dark:hover:text-red-400',
      'hover:text-rose-500 dark:hover:text-rose-400',
      'hover:text-blue-500 dark:hover:text-blue-400',
      'hover:text-green-500 dark:hover:text-green-400',
      'hover:text-emerald-500 dark:hover:text-emerald-400',
      'hover:text-teal-500 dark:hover:text-teal-400',
      'hover:text-sky-500 dark:hover:text-sky-400',
      'hover:text-yellow-500 dark:hover:text-yellow-400',
      'hover:text-indigo-500 dark:hover:text-indigo-400',
      'hover:text-purple-500 dark:hover:text-purple-400',
      'hover:text-pink-500 dark:hover:text-pink-400',
      'hover:text-violet-500 dark:hover:text-violet-400',
      // Add more Tailwind color classes as needed
    ],

  }
  return (type: 'background' | 'text'): string => {
    const colorClasses = tailwindHoverColorClasses[type]

    return colorClasses[Math.floor(Math.random() * colorClasses.length)]
  }
}
