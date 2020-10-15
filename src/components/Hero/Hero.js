import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

class Hero extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    titleImage: PropTypes.string,
  }
  
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(this.props.titleText)}</h2>     
        <img className={styles.image} src={this.props.titleImage}></img>
      </header >
    );
  }
}

Hero.propTypes = {
  titleText: PropTypes.node,
};
export default Hero;
