import { mount, shallowMount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';
import HelloWorld from '@/components/HelloWorld.vue';
describe('AppHeader', () => {
  const wrapper = mount(AppHeader);
  test('if a user is not logged in, should not show the logout button', () => {
    // const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });
  test('should if a user is logged in, should show the logout button', async () => {
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
});
