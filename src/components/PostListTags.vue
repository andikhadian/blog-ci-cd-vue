<template>
  <div class="flex flex-col w-full m-auto">
    <h3 class="font-semibold text-sm text-center mb-6">#{{ tagName }}</h3>
    <PostList :posts="tagPosts" />
  </div>
</template>
<script>
import PostList from '@/components/PostList'
export default {
  components: {
    PostList
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tagName() {
      return this.$route.params.tagName
    },
    tagPosts() {
      return this.posts.filter(p => p.tags.includes(this.tagName))
    }
  }
}
</script>