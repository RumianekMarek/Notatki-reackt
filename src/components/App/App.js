import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class App extends React.Component {
  static propTypes = {
    lists: PropTypes.array,
  }

  render() {
    const {lists} = this.props;
    return (
      <Container lists={lists}/>
    );
  }
}
export default App;
