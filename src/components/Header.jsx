import React from 'react';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } } ) {
    console.log(value)
    this.setState({ [name]: value });
  }
  render() {
    const { input } = this.state;
    const { handleChange } = this;
    return (
      <header>
        <h1>PokeSearch</h1>
        <div className="searchComponent">
        <input className="searchBar" type="text" name="input" value={ input } onChange={ handleChange } />
        </div>
      </header>
    );
  }
}

export default Header;