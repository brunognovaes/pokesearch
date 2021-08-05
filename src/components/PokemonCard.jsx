import React from 'react';
import Card from 'react-bootstrap/Card';
import './pokemonCard.css';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const officialArtwork = 'official-artwork';
    const { pokemon } = this.props;
    const {
      name,
      sprites: {
        other: {
          [officialArtwork]: {
            front_default,
          },
        },
      },
      types,
    } = pokemon;
    const pokemonType = types[0].type.name;
    return (
        <Card className={`pokemon-card ${pokemonType}`}>
          <div className="img-container">
          <Card.Img className="pokemon-img" src={ front_default } variant="top" />
          </div>
          <Card.Title>
            { name }
          </Card.Title>
        </Card>
    );
  }
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    abilities: PropTypes.arrayOf(PropTypes.object),
    base_experience: PropTypes.number,
    forms: PropTypes.arrayOf(PropTypes.object),
    game_indices: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    held_items: PropTypes.arrayOf(PropTypes.any),
    id: PropTypes.number,
    is_default: PropTypes.bool,
    location_area_encounters: PropTypes.string,
    moves: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.arrayOf(PropTypes.any),
    species: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    sprites: PropTypes.objectOf(PropTypes.any),
    stats: PropTypes.arrayOf(PropTypes.object),
    types: PropTypes.arrayOf(PropTypes.object),
    weight: PropTypes.number,
  }),
};

export default PokemonCard;
