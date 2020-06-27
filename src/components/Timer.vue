<template>
  <div class="full-width text-center">
    <div class="text-center text-grey-2 full-width bg-dark q-pa-md">
      Choose your time:
      <q-option-group v-model="timeChoose" :options="timeOptions" color="blue" dark inline />
    </div>
    <q-circular-progress
      show-value
      class="text-white q-mb-none q-mt-lg"
      :max="initialTime"
      :value="totalTime"
      size="230px"
      :thickness="0.13"
      :color="timerColor"
      track-color="dark"
    >
      <span :class="`text-${timerColor}`">{{minutes}}:{{seconds}}</span>
    </q-circular-progress>
    <div class="text-center q-mt-lg q-mb-lg full-width bg-dark q-pa-md">
      <q-btn
        flat
        v-if="!pauseButton"
        size="15px"
        color="white"
        label="Start"
        stack
        icon="play_arrow"
        @click="startTimer"
      ></q-btn>
      <q-btn
        flat
        size="15px"
        color="white"
        label="Pause"
        @click="pauseTimer"
        v-if="pauseButton"
        stack
        icon="pause"
      ></q-btn>
      <q-btn
        v-show="resetButton"
        flat
        size="15px"
        color="white"
        label="Reset"
        @click="resetTimer"
        stack
        icon="restore"
      ></q-btn>
    </div>
  </div>
</template>
<script>
import BrowserNotifications from '../mixins/BrowserNotifications'
export default {
  mixins: [BrowserNotifications],
  data () {
    return {
      timer: null,
      timeChoose: 25,
      pauseButton: false,
      resetButton: false,
      totalTime: 25 * 60,
      timeOptions: [{ label: 'Pomodoro', value: 25 }, { label: 'Short Break', value: 5 }, { label: 'Long Break', value: 10 }]
    }
  },
  computed: {
    initialTime () {
      return this.timeChoose * 60
    },
    minutes () {
      const minutes = Math.floor(this.totalTime / 60)
      return this.padTime(minutes)
    },
    seconds () {
      const seconds = this.totalTime - (this.minutes * 60)
      return this.padTime(seconds)
    },
    timerColor () {
      const value = this.totalTime / 60
      return value <= 3 ? 'red-6' : value <= 10 ? 'orange-6' : 'white'
    }
  },
  watch: {
    timeChoose () {
      this.resetTimer()
    },
    totalTime () {
      if (this.totalTime === 0) {
        this.showNotification('Time is up!', '', 'statics/app-logo-128x128.png')
      }
    }
  },
  meta () {
    return {
      title: this.timer ? `(${this.minutes}:${this.seconds}) Pomodoro Timer` : 'Pomodoro Timer'
    }
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => this.countdown(), 1000)
      this.resetButton = true
      this.pauseButton = true
    },
    pauseTimer () {
      this.pauseButton = false
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = true
    },
    resetTimer () {
      this.totalTime = (this.timeChoose * 60)
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = false
      this.pauseButton = false
    },
    padTime (time) {
      return (time < 10 ? '0' : '') + time
    },
    countdown () {
      if (this.totalTime >= 1) {
        this.totalTime--
      } else {
        this.totalTime = 0
        this.resetTimer()
      }
    }
  }
}
</script>
