<template>
  <div id="app">
    <!-- <random-number-generator :min="100" :max="200" /> -->
    <div class="max-w-lg m-auto">
      <div class="flex flex-col w-full">
        <NewsletterBanner />
        <h2
          class="leading-loose text-3xl mb-8 font-bold text-green-500 border-b"
        >
          The Workshop Blog NEW
        </h2>
        <router-view :posts="posts"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import RandomNumberGenerator from '@/components/RandomNumberGenerator.vue'
const NewsletterBanner = () => import('@/components/NewsletterBanner.vue')
// const PostList = () => import('@/components/PostList.vue')
export default {
  name: 'App',
  components: {
    NewsletterBanner,
  },
  data() {
    return {
      posts: [
        {
          slug: 'vuejs-for-beginner',
          title: 'Vue.js for beginner',
          description: 'Vue.js has massive popularity here are the key benefits',
          tags: ['vue', 'beginner']
        },
        {

          slug: 'react-for-beginner',
          title: 'React for beginner',
          description: 'React has massive popularity here are the key benefits',
          tags: ['react', 'beginner']
        },
        {
          slug: 'deploying-web-app-with-aws-using-vuejs',
          title: 'Deploying web app with AWS using Vue.js',
          description: 'With many breaking changes, Vue.js developers have found it easier to deploy',
          tags: ['vue', 'aws']
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
