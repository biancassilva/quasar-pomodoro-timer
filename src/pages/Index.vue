<template>
  <q-page class="row bg-blue-grey-10 justify-center">
    <div class="col-12 justify-center flex items-center">
      <timer></timer>
    </div>
    <div class="col-10">
      <todo-list></todo-list>
    </div>
  </q-page>
</template>

<script>
import Timer from 'components/Timer'
import TodoList from 'components/TodoList'
export default {
  name: 'PageIndex',
  components: {
    Timer,
    TodoList
  }
}
</script>
