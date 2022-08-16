import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testando o componente FavoritePokemons.js', () => {
  test('Testando se a mensagem é exibida corretamente sem nenhum pokémon', () => {
    renderWithRouter(<FavoritePokemons />);

    const msg = screen.getByText(/No favorite pokemon found/i);
    expect(msg).toBeInTheDocument();
  });
});
