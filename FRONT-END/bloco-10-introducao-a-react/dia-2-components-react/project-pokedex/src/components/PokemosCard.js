import React, {Component} from "react";
import PropTypes from 'prop-types';
import './PokemosCard.css';

class PokemosCard extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="Card">
        <div className="text">
          <p>{pokemon.name}</p>
          <p> {pokemon.type}</p>
          <p>Average Weight: {`${pokemon. averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <div className="Image">
          <img src={pokemon.image} alt="Imagem de um pokemom"></img>
        </div>
      </div>

    )
  }
}


PokemosCard.propTypes = {
  pokemon: PropTypes.shape ({
    name: PropTypes.string,
    type: PropTypes.string,
  })
};

export default PokemosCard;