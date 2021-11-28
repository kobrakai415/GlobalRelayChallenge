import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SearchSection from './components/SearchSection/index';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('gets search bar input field', () => {
  render(<SearchSection />);
  const inputField = screen.getByTestId(/search-bar/i);

  expect(inputField).toBeInTheDocument();
  userEvent.type(screen.getByTestId(/search-bar/i), "akdflsdklfj")

  expect.screen

});
