import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../../data/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    cards: PropTypes.array, 
    icon: PropTypes.string,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, icon, cards} = this.props;
    console.log(cards);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>{Icon(icon)}</span>{title}</h3>
        
        <div className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;