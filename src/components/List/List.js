import React from 'react';
import styles from './List.scss'
import Hero from '../Hero/Hero'

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero />
        <h2 className={styles.subtitle}>Dowolna treść</h2>

      </section>
    )
  }
}

export default List;
