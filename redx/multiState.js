import {createStore,combineReducers} from 'redux';
const heroesReducer = function(state={},action){
	switch(action.type){
		case "SET_NAME":
		state ={...state , name:action.payload};
		break;
		case "SET_ROLE":
		state ={...state , role:action.payload};
		break;
		default:
	}
	return state;
}
const skillReducers = function(state={},action){
	return state;
}
const reducers = combineReducers({
	heroes:heroesReducer,
	skills:skillReducers
});
const store = createStore(reducers);
store.subscribe(()=>{
	console.log('store change',store.getState());
})
store.dispatch({type:"SET_NAME",payload:'Eudora'});
store.dispatch({type:"SET_ROLE",payload:'Mage'});