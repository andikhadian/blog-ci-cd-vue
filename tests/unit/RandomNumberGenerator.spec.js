import { mount, shallowMount } from '@vue/test-utils';
import RandomNumberGenerator from '@/components/RandomNumberGenerator.vue';

describe('RandomNumberGenerator', () => {
  const wrapper = shallowMount(RandomNumberGenerator);

  test('should start with assign random number', () => {
    expect(wrapper.vm.randomNumber).not.toBe(undefined);
  });

  test('should the random number start with 0', () => {
    expect(wrapper.vm.$data.randomNumber).toEqual(0);
  });

  test('should get a random number between 1 and 10 by default', () => {
    wrapper.find('.btn').trigger('click');
    const { randomNumber } = wrapper.vm.$data;
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  test('should get a random number between 100 and 200 by passing the props', () => {
    const min = 100;
    const max = 200;
    const wrapper = shallowMount(RandomNumberGenerator, {
      propsData: { min, max },
    });
    wrapper.find('.btn').trigger('click');
    const { randomNumber } = wrapper.vm.$data;
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});
