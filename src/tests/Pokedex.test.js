import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex.js', () => {
  test('Testando se a página contém um heading', () => {
    renderWithRouter(<App />);

    const msgHeading = screen.getByRole('heading', { level: 2,
      name: 'Encountered pokémons' });
    expect(msgHeading).toBeInTheDocument();
  });
  test('Testando ao clicar no botão "Próximo pokémon" é exibido cada pokémon', () => {
    renderWithRouter(<App />);

    const buttonNext = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonNext).toBeInTheDocument();

    userEvent.click(buttonNext);
    const charmanderPokemon = screen.getByText(/Charmander/i);
    expect(charmanderPokemon).toBeInTheDocument();

    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    const pikachuPokemon = screen.getByText(/Pikachu/i);
    expect(pikachuPokemon).toBeInTheDocument();
  });
  test('Testando os botões de filtro e o botão de All', () => {
    renderWithRouter(<App />);

    const allButtonsFilter = 7;
    const buttonsFilter = screen.getAllByTestId(/pokemon-type-button/i);
    expect(buttonsFilter).toHaveLength(allButtonsFilter);

    const fireButton = screen.getByRole('button', { name: 'Fire' });
    const buttonAll = screen.getByRole('button', { name: 'All' });

    expect(fireButton).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(fireButton);
    const charmanderPokemon = screen.getByText(/Charmander/i);
    expect(charmanderPokemon).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
    const pikachuPokemon = screen.getByText(/Pikachu/i);
    expect(pikachuPokemon).toBeInTheDocument();
  });
});
