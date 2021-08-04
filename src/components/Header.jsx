import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component {

  render() {    
    const { handleInput, handleSelect, inputValue, selectValue } = this.props;
    return (
      <header>
        <h1>PokeSearch</h1>
        <div className="searchComponent">
          <Form.Label className="searchBar">
            <Form.Control type="text" name="input" value={ inputValue } onChange={ handleInput } />
            <Form.Text>gotta catch 'em all</Form.Text>
          </Form.Label>

          <Dropdown >
            <Dropdown.Toggle >
              { selectValue }
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item onSelect={ () => handleSelect('All') } >All</Dropdown.Item>
              <Dropdown.Item onSelect={ () => handleSelect('Type') }>Type</Dropdown.Item>
              <Dropdown.Item onSelect={ () => handleSelect('Alphabetic') }>Alphabetic</Dropdown.Item>
              <Dropdown.Item onSelect={ () => handleSelect('Number') }>Number</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    );
  }
}

export default Header;