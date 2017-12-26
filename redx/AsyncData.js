import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';
const initialState = {
	fetching:false,
	fetched:false,
	error:null,
	heroes:[]
}
const reducer = function(state=initialState,action){
	switch(action.type){
		case 'FETCH_HEROES_PENDING' :
		return {...state,fetching:true};
		break;
		case 'FETCH_HEROES_FULFILLED' :
		return {...state,fetching:false,fetched:true,heroes:action.payload};
		break;
		case 'FETCH_HEROES_REJECTED' :
		return {...state,fetching:false,fetched:false,error:action.payload};
		break;
		default:


	}
	return state;

}
const middleware = applyMiddleware(logger,thunk,promise());
const store = createStore(reducer,middleware);
store.subscribe(()=>{
	console.log("current state" ,store.getState());
})
//ini menggunakan promis lebih mudah
//jadi kita tinggal panggil payload nya dan otomatis abis FETCH_HEROES langsung ke FETCH_HEROES_FULFILLED
//kita otomatis diarahkan ke FULLFILLED
store.dispatch({
	type:'FETCH_HEROES',//bebas ini tapi nanti prefix reducer nya jadi ngikut 
	payload:axios.get('http://rest.learncode.academy/api/ade/hero')
})


//asyn dispatcher multiple dispather dalam satu dispatch
//harus menggunakan thunk
// store.dispatch((dispatch)=>{
// 	dispatch({type:'FETCH_HEROES_PENDING'});
// 	axios.get('http://rest.learncode.academy/api/ade/hero')
// 	.then((response)=>{
// 		dispatch({type:'FETCH_HEROES_FULFILLED',payload:response.data});
// 	})
// 	.catch((err)=>{
// 		dispatch({type:'FETCH_HEROES_REJECTED',payload:err});
// 	})
// });