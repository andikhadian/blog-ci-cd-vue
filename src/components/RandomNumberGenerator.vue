<template>
  <div>
    <span class="number">{{ randomNumber }}</span>
    <button class="btn" @click="generateRandomNumber">
      Generate Random number
    </button>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      randomNumber: 0
    }
  },
  methods:{
    generateRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1))  + this.min
    }
  }
}
</script>

<style>
</style>