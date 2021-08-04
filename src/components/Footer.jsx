import React from 'react';
import pokeball from '../images/poke_ball.png';
import './footer.css';

class Footer extends React.Component {
  render() {
    console.log(pokeball)
    return (
      <footer>
        { Array.from({ length: 6 }).map((_item, index) => <img className="pokeball-icon" alt="pokeball icon" src={ pokeball } />)}
      </footer>
    );
  }
}

export default Footer;