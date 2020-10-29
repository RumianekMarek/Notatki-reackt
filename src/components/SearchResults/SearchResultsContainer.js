import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch} from '../../redux/cardsRedux';
import { 
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  return {
    cards: getCardsForSearch(state, props.id),
    searchString: getSearchString(state),
    countVisible: countVisibleCards(state),
    countAll: countAllCards(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);