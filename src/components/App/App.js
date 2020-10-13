import React from 'react';
import PropTypes from 'prop-types'
import styles from './App.scss'
import List from '../List/List'

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Things TO-DO, better to do it or else ... </h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} image={['http://uploads.kodilla.com/bootcamp/fer/11.react/space.png']}>
        </List>
      </main>
    )
  }
}

export default App;
