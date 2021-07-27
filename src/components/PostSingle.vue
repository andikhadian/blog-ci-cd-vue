<template>
  <div class="flex flex-col w-full md:w-1/2 m-auto">
    <h2 class="font-semibold text-xl mb-4">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    post() {
      const { slug } = this.$route.params
      return this.posts.find(p => p.slug === slug)
    },
    title() {
      return this.post && this.post.title
    },
    content() {
      return this.post && this.post.description
    }
  }
}
</script>

<style>
</style>