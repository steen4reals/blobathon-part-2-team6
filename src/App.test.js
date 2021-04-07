import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cuteness overload text', () => {
  render(<App />);
  const linkElement = screen.getByText(/cuteness overload/i);
  expect(linkElement).toBeInTheDocument();
});
