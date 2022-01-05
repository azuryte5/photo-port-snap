// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

//This is for Baseline tests TEST1
describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />);
  });
//This is for snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})
//Test 2
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
  const { getByLabelText } = render(<Nav />);

  expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})  

//Test 3
describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})