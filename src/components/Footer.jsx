import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import './footer.css';

class Footer extends React.Component {
  render() {
    const { handlePage } = this.props;
    return (
      <footer>
        { Array.from({ length: 8 }).map((_item, index) => <Icon onClick={ () => handlePage(index) } className="pokeball-icon" icon="mdi:pokeball" />)}
      </footer>
    );
  }
}

Footer.propTypes = {
  handlePage: PropTypes.func.isRequired,
}

export default Footer;