<template>
  <router-link
    :to="`/${slug}`"
    class="
      flex flex-col
      m-auto
      w-full
      mb-4
      border
      rounded-md
      p-5
      cursor-pointer
      hover:shadow-lg
    "
  >
    <h3 class="text-left text-xl font-semibold text-gray-900">
      {{ title }}
    </h3>
    <p class="text-left leading-relaxed">{{ description | truncate }}</p>
    <div class="flex flex-row flex-wrap mt-4">
      <router-link
        v-for="tag in tags"
        :to="`/tags/${tag}`"
        :key="tag"
        class="
          text-xs
          font-semibold
          px-2
          py-1
          mr-2
          rounded-md
          border border-green-500
          text-green-500
          cursor-pointer
          hover:bg-green-500
          hover:text-white
        "
        >#{{ tag }}</router-link
      >
    </div>
  </router-link>
</template>

<script>
export default {
    props: {
        slug: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        tags: {
            type: Array,
            default: () => []
        },
    },
    filters: {
        truncate(value) {
            return value && value.length > 65 ? `${value.slice(0, 65)}...` : value
        }
    }
}
</script>

<style>
</style>