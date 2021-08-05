import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import './header.css';

class Header extends React.Component {

  render() {    
    const {
      handleInput,
      handleSearch,
      inputValue,
    } = this.props;
    return (
      <header className="header-container">
        <h1>PokeSearch</h1>
        <div className="search-component">
          <Form.Label className="search-bar">
            <Form.Control type="text" name="input" value={ inputValue } onChange={ handleInput } />
            <Button onClick={ handleSearch } variant="light">Search</Button>
            <Form.Text className="pokemon-phrase">gotta catch 'em all</Form.Text>
          </Form.Label>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}

export default Header;