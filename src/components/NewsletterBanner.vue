<template>
  <div
    v-if="showBanner"
    class="
      flex
      justify-between
      items-center
      bg-green-500
      text-white
      leading-none
      rounded-md
      w-full
      py-2
      px-4
      mt-2
      mb-8
    "
    role="alert"
  >
    <span class="font-semibold text-left flex-auto">
      Subscribe to the our newsletter
    </span>
    <svg
      @click="closeBanner"
      class="w-6 h-6 text-white font-bold cursor-pointer close"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    closeBanner() {
      this.$store.commit('dismissSubscribeBanner')
    }
  },
  computed: {
    showBanner() {
      return !this.$store.state.dismissedSubscribeBanner
    }
  }
}
</script>

<style>
</style>