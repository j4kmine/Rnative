import {createStore} from 'redux';

//REDUCER

const reducer = function (state,action){
	if(action.type == "INC"){
		return state + action.payload;
	}

	if(action.type == "DEC"){
	
		return state - action.payload;
	}
	return state;
}

//STORE
const store = createStore(reducer,0);

//SUBCRIPTION
store.subscribe(()=>{
	console.log('store change',store.getState());
})

//DISPATCH

store.dispatch({type:"INC",payload:1});
store.dispatch({type:"INC",payload:10});