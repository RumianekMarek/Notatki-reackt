import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    cards: PropTypes.array, 
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  addCard(title){
    this.setState(state =>(
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon:'list-alt',
            cards:[]
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.component}>
          {this.state.cards.map(({key, ...cardsProps}) =>(
            <Card key={key} {...cardsProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default Column;