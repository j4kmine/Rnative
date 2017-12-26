import {connect} from 'react-redux';
import Heroes from '../screens/Heroes';
import {fetchHeroes} from '../actions/heroes';
const  mapStateToProps = (state) =>({
		data:state
});
const mapDispatchToProps = (dispatch) => ({
	fetchHeroesnative:()=>{
		dispatch(fetchHeroes())
	}

});
export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Heroes);