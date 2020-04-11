<template>
  <div class="row justify-center">
    <q-card class="bg-dark col-12 q-pa-lg shadow-0" bordered>
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
          <q-select
            v-model="task.level"
            :options="levelOptions"
            label="Select the task level"
            map-options
            emit-value
            filled
            dark
          ></q-select>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-12 col-xs-12 q-pa-sm">
          <q-input
            dark
            filled
            color="blue-5"
            v-model="task.description"
            label="Enter the task description"
          />
        </div>
        <div class="col-xl-1 col-lg-1 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
           <q-btn outline color="white" class="full-width" icon="add" stack label="Add task" @click="addTask"></q-btn>
        </div>
      </div>
    </q-card>
    <div class="col-12 q-mt-md q-mb-xl">
      <q-list separator class="bg-dark">
        <q-item class="bg-blue-grey-9">
          <q-item-label class="flex items-center text-weight-medium text-white">
            TO DO
            <q-badge color="dark" class="text-subtitle2 text-grey-3 q-ml-sm">{{totalTasks}}</q-badge>
          </q-item-label>
        </q-item>
        <q-item v-for="(task, idx) in todoList" :key="idx">
          <q-item-section avatar style="width:100px">
            <q-badge :color="levelColor(task.level)">
              <span class="text-uppercase text-body2 text-weight-bold">{{levelName(task.level)}}</span>
            </q-badge>
          </q-item-section>
          <q-item-section class="text-white text-left">{{task.description}}</q-item-section>
          <q-item-section side>
            <q-item-label lines="1">
              <q-checkbox @input="finishTask(task)" v-model="task.status" color="blue-5">
                <q-tooltip content-class="bg-dark">Finish task</q-tooltip>
              </q-checkbox>
              <q-btn
                fab-mini
                icon="remove_circle"
                flat
                color="blue-grey-8"
                @click="removeTask(task)"
              >
                <q-tooltip content-class="bg-dark">Remove task</q-tooltip>
              </q-btn>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="!todoList.length">
          <q-item-label class="flex items-center text-grey-5">You have no tasks to do</q-item-label>
        </q-item>
      </q-list>
      <q-list separator class="bg-dark">
        <q-item class="bg-blue-grey-9">
          <q-item-label class="flex items-center text-weight-medium text-white">
            DONE
            <q-badge
              color="dark"
              class="text-subtitle2 text-grey-3 q-ml-sm"
            >{{completedTasksList.length}}/{{totalTasks}}</q-badge>
          </q-item-label>
        </q-item>
        <q-item v-for="(task, idx) in completedTasksList" :key="idx">
          <q-item-section avatar style="width:100px">
            <q-badge :color="levelColor(task.level)">
              <span class="text-uppercase text-body2 text-weight-bold">{{levelName(task.level)}}</span>
            </q-badge>
          </q-item-section>
          <q-item-section class="text-white text-left">{{task.description}}</q-item-section>
          <q-item-section side>
            <q-item-label lines="1">
              <q-checkbox @input="finishTask(task)" v-model="task.status" color="blue-5"></q-checkbox>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="!completedTasksList.length">
          <q-item-label class="flex items-center text-grey-5">You have no completed tasks</q-item-label>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      task: {
        description: '',
        level: 1,
        status: false
      },
      todoList: [],
      completedTasksList: [],
      levelOptions: [
        {
          label: 'Easy',
          value: 1
        },
        {
          label: 'Medium',
          value: 2
        },
        {
          label: 'Hard',
          value: 3
        }
      ],
      levelSelected: null
    }
  },
  computed: {
    totalTasks () {
      return this.todoList.length + this.completedTasksList.length
    }
  },
  methods: {
    addTask () {
      if (this.task.description) {
        this.todoList.push({ ...this.task })
        this.task.description = null
        return
      }
      this.$q.notify({
        color: 'red-5',
        position: 'bottom-right',
        message: 'Enter a description for your task'
      })
    },
    finishTask (task) {
      if (task.status) {
        this.completedTasksList.push(task)
        const pos = this.todoList.indexOf(task)
        this.todoList.splice(pos, 1)
      } else {
        this.todoList.push(task)
        const pos = this.completedTasksList.indexOf(task)
        this.completedTasksList.splice(pos, 1)
      }
    },
    removeTask (task) {
      const pos = this.todoList.indexOf(task)
      this.todoList.splice(pos, 1)
    },
    levelColor (lvl) {
      switch (lvl) {
        case 1:
          return 'blue-5'
        case 2:
          return 'orange-5'
        case 3:
          return 'red-5'
      }
    },
    levelName (lvl) {
      switch (lvl) {
        case 1:
          return 'Easy'
        case 2:
          return 'Medium'
        case 3:
          return 'Hard'
      }
    }
  }
}
</script>
