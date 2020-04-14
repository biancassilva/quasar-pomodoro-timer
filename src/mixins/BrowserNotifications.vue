<script>
export default {
  methods: {
    askNotificationPermission () {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission()
      }
    },
    showNotification (msg, text, img) {
      const notification = new Notification(msg, { body: text, icon: img })
      return notification
    }
  }
}
</script>
