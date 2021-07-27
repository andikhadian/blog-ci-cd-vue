// import { render, fireEvent } from '@testing-library/vue';
import NewsletterBanner from '@/components/NewsletterBanner.vue';
import Vuex from 'vuex';
import mainStore from '@/store';
import { createLocalVue, shallowMount } from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('NewsletterBanner', () => {
  test('should display if store is initialize with it not dismissed', () => {
    const store = mainStore;
    const wrapper = shallowMount(NewsletterBanner, { store, localVue });
    expect(wrapper.isVisible()).toBeFalsy();
  });

  test('should call the mutation and changed the state when click close button', async () => {
    const store = mainStore;
    const wrapper = shallowMount(NewsletterBanner, {
      store,
      localVue,
    });

    store.commit('dismissSubscribeBanner');
    expect(store.state.dismissedSubscribeBanner).toBeTruthy();
  });

  test('should not display if  dismissed', () => {
    const store = mainStore;
    store.state.dismissedSubscribeBanner = true;
    const wrapper = shallowMount(NewsletterBanner, { store, localVue });

    expect(wrapper.isVisible()).toBeFalsy();
  });
});
