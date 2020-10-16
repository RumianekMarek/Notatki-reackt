import shortid from 'shortid';

export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));


const reducerName = 'card';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_CARD = createActionName('ADD_CARD');

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      console.log(state);
      return [...state, action.payload];
    default:
      return state;
  }
}
