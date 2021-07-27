import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import PostList from '@/components/PostList.vue';
import PostListItem from '@/components/PostListItem.vue';

describe('Post List', () => {
  test('Post List Item renders title and description correctly', () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        title: 'Blog Post Title',
        description: 'Blog Post Description',
      },
      stubs: ['router-link'],
    });

    expect(wrapper.text()).toMatch('Blog Post Title');
    expect(wrapper.text()).toMatch('Blog Post Description');
  });

  test('Post List Item renders tags with a # prepended to them', () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        tags: ['react', 'vue'],
      },
      stubs: ['router-link'],
    });

    expect(wrapper.text()).toMatch('#react');
    expect(wrapper.text()).toMatch('#vue');
  });

  test('Post List Item truncate should take only 65 characters', () => {
    expect(
      PostListItem.filters.truncate(
        'Very long blog post description that goes will be over 65 characters'
      )
    ).toEqual(
      'Very long blog post description that goes will be over 65 charact...'
    );
  });

  // test('Post List renders passed title and description for each passed post', () => {
  //   const wrapper = mount(PostList, {
  //     propsData: {
  //       posts: [
  //         {
  //           title: 'Title 1',
  //           description: 'Description 1',
  //         },
  //         {
  //           title: 'Title 2',
  //           description: 'Description 2',
  //         },
  //       ],
  //     },
  //   });

  // expect(wrapper.findComponent(PostListItem)).toHaveLength(2);
  // const outputText = wrapper.text();
  // expect(wrapper.text()).toContain('Title 1');
  // expect(wrapper.text()).toContain('Description 1');
  // expect(wrapper.text()).toContain('Title 2');
  // expect(wrapper.text()).toContain('Description 2');
  // });
});
