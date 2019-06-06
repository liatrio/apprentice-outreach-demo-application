import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { expect as chaiExpect } from 'chai';

import Greeting from '../src/components/Greeting';
import App from '../src/App';

Enzyme.configure({adapter: new Adapter()});

test('Greeting component is rendered with app', () => {
  const wrapper = Enzyme.mount(
    <App />
  );

  chaiExpect(wrapper.find(Greeting)).to.have.lengthOf(1);
});

test('Text box accepts input from user', () => {
  const wrapper = Enzyme.mount(
    <Greeting />
  );

  // Simulate user entry into text box
  const r = wrapper.find("#userInput");
  r.simulate('change', { target: { value: "anything" }});

  const textBox = wrapper.state('input');
  expect(textBox).not.toBe("");
});

test('Submit button grabs secret from backend', () => {
  var spy = jest.spyOn(Greeting.prototype, 'setSecret');
  const wrapper = Enzyme.mount(
    <Greeting />
  );

  wrapper.find('form').simulate('submit');
  expect(spy).toHaveBeenCalled();
});
