import React from 'react';

//HOC

const withSearch = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: '',
    };

    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      return (
        <>
          <input
            placeholder='search'
            className='search'
            value={this.state.searchTerm}
            onChange={this.handleSearch} />
          <wrappedComponent searchTerm={this.state.searchTerm} />

        </>
      );
    }
  }
}

export default (withSearch);

