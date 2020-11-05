
// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'search';

const initialState =  (localStorage.searchString == undefined) ? localStorage.setItem('searchString', '') : '';

// actions types
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const CHANGE = createActionName('CHANGE');

export const createAction_changeSearchString = payload => ({payload, type:CHANGE});

// reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:      
      return action.payload;
    default:
      return statePart;
  }
}

