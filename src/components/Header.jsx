import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      select: 'All',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange({ target: { name, value } } ) {
    this.setState({ [name]: value });
  }

  handleSelect(value) {
    this.setState({ select: value });
  }
  render() {
    const { input, select } = this.state;
    const { handleChange, handleSelect } = this;
    return (
      <header>
        <h1>PokeSearch</h1>
        <div className="searchComponent">
          <Form.Label className="searchBar">
            <Form.Control type="text" name="input" value={ input } onChange={ handleChange } />
            <Form.Text>gotta catch 'em all</Form.Text>
          </Form.Label>

          <Dropdown >
            <Dropdown.Toggle >
              { select }
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