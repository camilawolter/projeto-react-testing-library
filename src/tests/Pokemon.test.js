import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

const testPokemon = pokemons[0];

describe('Testando o componente Pokemon.js', () => {
  test('Testando se o card de info são renderizados corretamente', () => {
    renderWithRouter(<Pokemon pokemon={ testPokemon } isFavorite={ false } />);

    const { name, type, averageWeight, image } = testPokemon;
    const namePokemon = screen.getByText(name);
    expect(namePokemon).toBeInTheDocument();

    const typePokemon = screen.getByText(type);
    expect(typePokemon).toBeInTheDocument();

    const weightPokemon = screen.getByText(`Average weight: ${averageWeight.value} kg`);
    expect(weightPokemon).toBeInTheDocument();

    const imgPokemon = screen.getByRole('img', { name: /sprite/i });
    expect(imgPokemon.src).toBe(image);
  });
  test('Testando o link de "More details"', () => {
    const { history } = renderWithRouter(
      <Pokemon pokemon={ testPokemon } isFavorite={ false } />,
    );

    const { id } = testPokemon;

    const linkMoreDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkMoreDetails).toBeInTheDocument();

    userEvent.click(linkMoreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe(`/pokemons/${id}`);
  });
  test('Testando se o ícone de estrela existe nos pokémons favoritados', () => {
    renderWithRouter(<Pokemon pokemon={ testPokemon } isFavorite />);

    const imgStar = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(imgStar).toBeInTheDocument();
    expect(imgStar.src).toMatch('star-icon.svg');
  });
});
