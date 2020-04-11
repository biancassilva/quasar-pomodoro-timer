<template>
  <q-layout view="hhh Lpr lFf">
    <q-header bordered class="bg-blue-grey-9">
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="text-weight-regular text-subtitle1">Quasar Pomodoro Timer</q-toolbar-title>
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
export default {
  name: 'MainLayout',
  methods: {
    openGithub () {
      openURL('https://github.com/biancassilva/quasar-pomodoro-timer')
    }
  }
}
</script>
