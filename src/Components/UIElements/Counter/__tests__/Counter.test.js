import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter'

describe ('Counter', () => {
  it('Initial Render', () => {
    const wrapper = shallow(<Counter />)
    const paragraph = wrapper.find('p').text();
    expect(paragraph).toBe('0');
  })

  it('increments counter', () => {
    const wrapper = shallow(<Counter />)
    const buttons = wrapper.find('button');
    buttons.at(0).simulate('click');
    const paragraph = wrapper.find('p').text();
    expect(paragraph).toBe('1');
  })

  it('decrements counter', () => {
    const wrapper = shallow(<Counter />)
    const buttons = wrapper.find('button');
    buttons.at(1).simulate('click');
    const paragraph = wrapper.find('p').text();
    expect(paragraph).toBe('-1');
  })
})