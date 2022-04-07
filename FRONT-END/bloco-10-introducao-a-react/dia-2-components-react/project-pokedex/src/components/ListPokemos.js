import React, {Component} from "react";
import Data from '../data.js';
import PokemosCard from './PokemosCard';

class ListPokemos extends Component {
  render() {
    return (
      <section className="container-cards">
       {Data.map((value, index) => <PokemosCard pokemon={value} key={index} />)}
      </section>
    )
  }
}

export default ListPokemos;