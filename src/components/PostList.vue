<template>
  <div class="flex flex-col w-full">
    <PostListItem
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
    />
  </div>
</template>

<script>
const PostListItem = () => import('@/components/PostListItem.vue')
export default {
    components: {
        PostListItem,
    },
    props: {
        posts: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>
</style>