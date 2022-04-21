import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('can reverse string', () => {
  render(<App />);
  const input = screen.getByLabelText('your string');
  const radio = screen.getByLabelText('reverse');
  const output = screen.getByTestId('output');

  fireEvent.change(input, { target: { value: 'abcdef' } });
  fireEvent.click(radio);

  expect(output.innerHTML).toEqual('fedcba');
});

test('can uppercase string', () => {
  render(<App />);
  const input = screen.getByLabelText('your string');
  const radio = screen.getByLabelText('uppercase');
  const output = screen.getByTestId('output');

  fireEvent.change(input, { target: { value: 'abcdef' } });
  fireEvent.click(radio);

  expect(output.innerHTML).toEqual('ABCDEF');
});
