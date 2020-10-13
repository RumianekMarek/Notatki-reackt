import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

class Hero extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{this.props.titleText}</h2>     
        <img className={styles.image} src={this.props.titleImage}></img>
      </header >
    )
  }
}

Hero.propTypes = {
  titleText: PropTypes.node,
}
export default Hero;
