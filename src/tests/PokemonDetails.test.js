import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails.js', () => {
  test('Testando se as infos dos detalhes são mostradas na página', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const titleDetails = screen.getByRole('heading', { level: 2,
      name: 'Pikachu Details' });
    expect(titleDetails).toBeInTheDocument();

    const linkDetails = screen.queryByRole('link', { name: /more details/i });
    expect(linkDetails).not.toBeInTheDocument();

    const summaryTitle = screen.getByRole('heading', { name: /summary/i });
    expect(summaryTitle).toBeInTheDocument();

    const summaryDescri = screen.getByText(/This intelligent Pokémon/i);
    expect(summaryDescri).toBeInTheDocument();
  });
  test('Testando se os mapas estão sendo exibidos na página', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(linkMoreDetails);

    const tittleLocal = screen.getByRole('heading',
      { name: 'Game Locations of Pikachu' });
    expect(tittleLocal).toBeInTheDocument();

    const locationsPikachu = screen.getAllByAltText('Pikachu location');
    expect(locationsPikachu).toHaveLength(2);

    const firstMap = locationsPikachu[0];

    const imgMap = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    expect(firstMap.src).toMatch(imgMap);

    const altMap = 'Pikachu location';
    expect(firstMap.alt).toMatch(altMap);
  });
  test('Testando se é possível favoritar o pokémon através da página', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(linkMoreDetails);

    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);
    const imgStar = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(imgStar).toBeInTheDocument();
    expect(imgStar.src).toMatch('star-icon.svg');

    userEvent.click(checkbox);
    expect(imgStar).not.toBeInTheDocument();
  });
});
