import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } } ) {
    this.setState({ [name]: value });
  }
  render() {
    const { input } = this.state;
    const { handleChange } = this;
    return (
      <header>
        <h1>PokeSearch</h1>
        <div className="searchComponent">
          <Form.Label className="searchBar">
            <Form.Control type="text" name="input" value={ input } onChange={ handleChange } />
            <Form.Text>gotta catch 'em all</Form.Text>
          </Form.Label>

          <Dropdown>
            <Dropdown.Toggle>
              Filters
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Type</Dropdown.Item>
              <Dropdown.Item>Alphabetic</Dropdown.Item>
              <Dropdown.Item>Number</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    );
  }
}

export default Header;