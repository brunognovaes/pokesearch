import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import './footer.css';

class Footer extends React.Component {
  render() {
    const { handlePage, currentPage } = this.props;
    return (
      <footer>
        { Array.from({ length: 8 }).map((_item, index) => {
          const className = currentPage === index ? 'selected' : '';
          return <Icon onClick={ () => handlePage(index) } className={ `pokeball-icon ${className}` } icon="mdi:pokeball" />
         })
        }
      </footer>
    );
  }
}

Footer.propTypes = {
  handlePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Footer;