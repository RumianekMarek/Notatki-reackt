import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../../data/Icon';

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
            icon:'book',
            cards:[]
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><i className={`fas fa-${this.props.icon}`}></i></span>{this.props.title}</h3>
        <div className={styles.component}>
          {this.state.cards.map(({key, ...cardsProps}) =>(
            <Card key={key} {...cardsProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }
}

export default Column;