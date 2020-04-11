<template>
  <div class="full-width text-center">
    <q-circular-progress
      show-value
      class="text-white q-mb-none q-mt-lg"
      :max="initialTime"
      :value="totalTime"
      size="200px"
      :thickness="0.1"
      color="white"
      track-color="dark"
    >
      <span>{{minutes}}:{{seconds}}</span>
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
export default {
  data () {
    return {
      timer: null,
      selectedTime: 25,
      pauseButton: false,
      resetButton: false,
      totalTime: 25 * 60,
      initialTime: 25 * 60
    }
  },
  computed: {
    minutes () {
      const minutes = Math.floor(this.totalTime / 60)
      return this.padTime(minutes)
    },
    seconds () {
      const seconds = this.totalTime - (this.minutes * 60)
      return this.padTime(seconds)
    },
    value () {
      return (this.seconds * this.minutes) / 60
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
      this.totalTime = (25 * 60)
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
<style scoped>
.timer {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 13px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 70px;
}
</style>
