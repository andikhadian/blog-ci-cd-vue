<template>
  <div>
    <button class="btn" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    }
  },
}
</script>

<style>
</style>