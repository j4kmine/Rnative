import {createStore,applyMiddleware} from 'redux';

//REDUCER

const reducer = function (state,action){
	if(action.type == "INC"){
		return state + action.payload;
	}

	if(action.type == "DEC"){
	
		return state - action.payload;
	}
	if(action.type == "ERR"){
		throw new Error("ERROR");
	}
	return state;
}
//Middleware
const logger = (store)=>(next)=>(action)=>{
	console.log("logger middleware called");
	next(action);
}
// const error (store)=>(next)=>(action)=>{
// 	try{
// 		next(action);
// 	}catch(e){
// 		console.log("error");
// 	}
// }
const middleware = applyMiddleware(logger);

//STORE
const store = createStore(reducer,0,middleware);

//SUBCRIPTION
store.subscribe(()=>{
	console.log('store change',store.getState());
})

//DISPATCH

store.dispatch({type:"INC",payload:1});
// store.dispatch({type:"ERR"});
store.dispatch({type:"INC",payload:10});