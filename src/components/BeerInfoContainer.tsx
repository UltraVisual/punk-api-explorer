import { connect } from 'react-redux';
import BeerInfo from './BeerInfo';


const mapStateToProps = (state:any) => {
	return {
		beer: state.beerInfo
	};
}

export default connect(mapStateToProps)(BeerInfo);