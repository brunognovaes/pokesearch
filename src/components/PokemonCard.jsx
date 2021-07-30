import React from 'react';
import Card from 'react-bootstrap/Card';
import './pokemonCard.css';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const { src, name, } = this.props;
    console.log(name)
    return (
        <Card className="pokemon-card">
          <div className="img-container">
          <Card.Img className="pokemon-img" src={ src } variant="top" />
          </div>
          <Card.Title>
            { name }
          </Card.Title>
        </Card>
    );
  }
};

PokemonCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default PokemonCard;