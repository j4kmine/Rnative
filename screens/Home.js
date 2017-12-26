import React , {Component} from 'react';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
import SyncStorage from 'sync-storage';
import {diffDate} from '../helpers/Helpers';
import { Container, Header,Thumbnail, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List, ListItem, Text } from 'native-base';
export default  class extends Component <{}>{	
	 constructor() {
        super();  
        SyncStorage.set('expired_in', 'ahava');
    	console.log(SyncStorage.get('expired_in'));      
    }
    componentWillMount(){
    	
    	  
  //   	const self = this;
  //   	const access_token = SyncStorage.get('access_token');
 	// 	const expired_in = SyncStorage.get('expired_in');
 		
		// if(access_token  != undefined  && access_token != ''){
		// 	if(diffDate(expired_in) <= 1){
		// 		this.props.navigator.push({
		// 		  		screen:'tab.Login'
		// 		 })
		// 	}
		// }else{
		// 	this.props.navigator.push({
		// 	  		screen:'tab.Login'
		// 	 })
		// }
    	
    }
	render(){

		return(
			<Container style={{justifyContent:"center",alignSelf:  "center"  }} >
		<Content>
			
			<Thumbnail Large source={{ uri:'https://d1qgcmfii0ptfa.cloudfront.net/K/content/common/images/mno/ML_Logo.png'}} style={{alignItems:'center', width:250, height: 200 }}/>
			<Text style={nbStyle.subtitle}>Welcome To Mobile Legend</Text>
			<Text style={nbStyle.subtitle}>Heroes Dictionary</Text>
			<Text style={nbStyle.subtitle}>Start Exploring Creating</Text>
			<Text style={nbStyle.subtitle}>Your Favourites Heroes</Text>
	
			<Button block style={nbStyle.btn} onPress={() => {
    this.props.navigator.switchToTab({
    tabIndex: 1 // (optional) if missing, this screen's tab will become selected
});
  }}
			> 
			<Text>First</Text>
			</Button>
		</Content>
	</Container>
		);
	}
	

}
const nbStyle ={
	substitle:{
		textAlign: 'center',
		color: '#ACD2FA' 
	},
	btn:{
		marginTop: 15
	}
}