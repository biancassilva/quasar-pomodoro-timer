<template>
  <q-btn flat icon="fas fa-sign-in-alt" color="white">
    <q-menu content-class="bg-dark">
      <q-list style="min-width: 200px">
        <q-item-label header class="text-grey-5 q-pb-xs">Login with:</q-item-label>
        <q-item class="q-mt-none">
          <q-btn no-caps color="blue-5" outline="" class="full-width">
            <q-icon name="fab fa-facebook-f" class="q-mr-sm" size="15px"></q-icon>
            <span>Facebook</span>
          </q-btn>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
