import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import Counter from './Counter';

test('renders counter', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText(/0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments the counter', () => {
  const { getByText } = render(<Counter />);
  const button = getByText(/increment/i);
  fireEvent.click(button);
  const countElement = getByText(/1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrements the counter', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText(/increment/i);
  const decrementButton = getByText(/decrement/i);
  
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  
  const countElement = getByText(/0/i);
  expect(countElement).toBeInTheDocument();
});
