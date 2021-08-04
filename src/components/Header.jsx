import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button'

class Header extends React.Component {

  render() {    
    const { handleInput, handleSearch, handleSelect, inputValue, selectValue } = this.props;
    return (
      <header>
        <h1>PokeSearch</h1>
        <div className="searchComponent">
          <Form.Label className="searchBar">
            <Form.Control type="text" name="input" value={ inputValue } onChange={ handleInput } />
            <Button onClick={ handleSearch } variant="dark">Search</Button>
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