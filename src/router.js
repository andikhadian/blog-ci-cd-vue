import Vue from 'vue';
import VueRouter from 'vue-router';
const PostList = () => import('@/components/PostList.vue');
const PostSingle = () => import('@/components/PostSingle.vue');
const PostListTags = () => import('@/components/PostListTags.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: PostList,
  },
  {
    path: '/:slug',
    component: PostSingle,
  },
  {
    path: '/tags/:tagName',
    component: PostListTags,
  },
];

export default new VueRouter({ routes });
