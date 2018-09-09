import { connect } from 'react-redux';
import { GET_BEER_REQUEST, GET_BEERS_REQUEST } from '../types/Actions';
import BeerList from './BeerList';

const mapDispatchToProps = (dispatch:(arg:any) => object, ownProps:any) => ({
	getBeer: (id:string) => dispatch({ type: GET_BEER_REQUEST, id }),
	getBeers: () => dispatch({ type: GET_BEERS_REQUEST }),
})

const mapStateToProps = (state:any) => {
	const { beers } = state.beerList;

	return {
		data: beers
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
