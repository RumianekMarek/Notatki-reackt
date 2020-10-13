import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p> I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImage={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={['Animals']}/>
          <Column title={['Planets']}/>
          <Column title={['Minerals']}/>
        </div>
      </section>
    )
  }
}

export default List;
