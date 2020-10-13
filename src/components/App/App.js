import React from 'react';
import PropTypes from 'prop-types'
import styles from './App.scss'
import List from '../List/List'
import {pageContents, listData} from '../../data/dataStore'

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}
//['Things to do', <sup key='1'>soon!</sup>]} image={['http://uploads.kodilla.com/bootcamp/fer/11.react/space.png']}
export default App;
