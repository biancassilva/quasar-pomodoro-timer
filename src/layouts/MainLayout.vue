<template>
  <q-layout view="hhh Lpr lFf">
    <q-header bordered class="bg-blue-grey-9">
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="text-weight-regular text-subtitle1">
          <q-item>
            <q-item-section side>
              <q-img src="statics/tomato-timer.svg" style="width:50px"></q-img>
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">Pomodoro Timer</q-item-label>
              <q-item-label caption class="text-grey-4">Optimize your time</q-item-label>
            </q-item-section>
          </q-item>
        </q-toolbar-title>
        <q-space></q-space>
        <div class="q-gutter-x-sm">
          <q-btn icon="fab fa-github" dense color="white" @click="openGithub" flat></q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import BrowserNotifications from '../mixins/BrowserNotifications'
export default {
  name: 'MainLayout',
  mixins: [BrowserNotifications],
  mounted () {
    this.askNotificationPermission()
  },
  methods: {
    openGithub () {
      openURL('https://github.com/biancassilva/quasar-pomodoro-timer')
    }
  }
}
</script>
