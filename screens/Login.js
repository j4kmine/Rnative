import React, {Component} from 'react';
import { Container, Header, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List, ListItem,Form,Item,Input,Label,Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import {diffDate} from '../helpers/Helpers';
import SyncStorage from 'sync-storage';
export default class Login extends Component{
	static navigatorStyle ={
		navBarHidden:true,
		tabBarHidden:true
	}
	constructor(props) {
	  super(props);	
	  this.state = {
	  	access_token:"",
	  	username:"",
	  	password:"",
	  	expired_date:"",
	  	isValids:false	  
	  };
	}

	handleLogin(){
	  	const self = this;
	  	const dates = new Date().getDate() ;
	  	const date = new Date().getDate() + 3;
	    const month = new Date().getMonth() + 1;
	    const year = new Date().getFullYear();
	    const init_date = `${month}/${date}/${year}`;	 
		let diffDays = diffDate(init_date); 	    
		axios.post('http://45.63.62.230:8012/sys/public/api/login', {
	    email: this.state.email,
	    password: this.state.password
	  })
		.then(response => { 
		   let jokes = response.data;
		   if (!jokes || jokes.length === 0) {
		     throw new Error("end of pagination");
		   }
		   
		   SyncStorage.set('access_token', response.data.access_token);
		   SyncStorage.set('expired_in', init_date);
		   this.props.navigator.resetTo({
					  		screen:'tab.Home'
			 });
		})
	  // .then((response)=> 	 
	  // 	resolve(response.json().then(data => (
	  // 		console.log("here")
	  // 	))) 	   	   
   //  	 SyncStorage.set('access_token', response.data.access_token),
   //  	 SyncStorage.set('expired_in', init_date),
    	
   //  	 this.props.navigator.resetTo({
			// 	  		screen:'tab.Home'
		 // })
	//  )
	  .catch(function (error) {
	    console.log(error);
	  });
	}
	_checkisValid(){
		const self = this;
		setTimeout(()=>{
			const {email,password} = self.state;
			if(email != "" && password != "" ){
				self.setState({isValids:true});
			}else{
				self.setState({isValids:false});
			}

		},1000);
	}
	renderButtons(){
		const self = this;
		return(
			
				this.state.isValids?(

					 <Button full onPress={()=>this.handleLogin()}>
							<Text>Login</Text>
					</Button>
				):(
					<Button full >
							<Text>Disable</Text>
					</Button>
				)
					

				

			
		);
	}
	render(){
		return (
			<Container>
				<Content>
					<Item floatingLabel>
		             	<Label>Email</Label>
		              	<Input onChangeText={(text)=>{
		              		this.setState({email:text}); 
		              		this._checkisValid();
		              }} />
		            </Item>
		            <Item floatingLabel>
		             	<Label>Password</Label>
		              	<Input secureTextEntry={true} onChangeText={(text)=>{
		              		this.setState({password:text}); 
		              		this._checkisValid();
		              }} />
		            </Item>
		          {this.renderButtons()}
				</Content>
			</Container>
		);
	}

}