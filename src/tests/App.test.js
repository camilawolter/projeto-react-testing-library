import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente App.js', () => {
  test('Testando se a página inicial é rendirecionada corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Testando se a página About é rendirecionada corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('Testando se a página Pokémons Favoritados é rendirecionada corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavoritePokemons = screen.getByText(/Favorite Pokémons/i);
    expect(linkFavoritePokemons).toBeInTheDocument();
    userEvent.click(linkFavoritePokemons);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test('Testando se a página Not Found é rendirecionada corretamente', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
