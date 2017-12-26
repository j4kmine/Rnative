import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import Hero from './Hero';
import Anime from '../components/Anime';
import axios from 'axios';
import { Container, Header, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List,ListItem, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import SyncStorage from 'sync-storage';
import {diffDate} from '../helpers/Helpers';
export default class Heroes extends Component <{}>{		
	// heroes = [
	// 	{
	// 		name:"test",
	// 		title:"im under attack",
	// 		ImageUrl:'https://images-na.ssl-images-amazon.com/images/I/610XDecSssL._SY550_.jpg'

	// 	},
	// 	{
	// 		name:"ee",
	// 		title:"im undere attack",
	// 		ImageUrl:'https://target.scene7.com/is/image/Target/17131126?wid=520&hei=520&fmt=pjpeg'

	// 	},
	// 	{
	// 		name:"tesft",
	// 		title:"im undeer attack",
	// 		ImageUrl:'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111115052816'

	// 	}

	// ]
	constructor(props) {
	  super(props);
	  console.log("zombie");
	  console.log(SyncStorage.get('expired_in'));
	  this.state = {
	  	heroes:[]
	  };
	}
	componentWillMount(){
		const self = this;
    	const access_token = SyncStorage.get('access_token');
 		const expired_in = SyncStorage.get('expired_in');
 		
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
	renderHeader(){
		return (
			<Header>
				<Left>

				</Left>
				<Body>
					<Text>Heroes</Text>
				</Body>
				<Right>
					 	<TouchableOpacity onPress={()=>this.props.navigator.push({screen: 'push.HeroAdd'})}>
						<Icon name="add" style={{color:'#62AEFF'}} />
						</TouchableOpacity>
					
					
				</Right>
			</Header>
		)
		
	}

	componentDidMount(){
		this.props.fetchHeroesnative();
		
		//const self = this;
		// fetch('http://rest.learncode.academy/api/ade/hero')
	 //    .then((response) => response.json())
	 //    .then((responseJson) => {
	 //       self.setState({heroes:responseJson});
	 //    })
	 //    .catch((error) => {
	 //      console.error(error);
	 //    });
		// axios.get('http://rest.learncode.academy/api/ade/hero')
		//   .then(function (response) {
		//     self.setState({heroes:response.data});
		   
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });
	}
	render(){
		return(
			<Container>
				<Content>
					{this.renderHeader()}

					<List>
						{this.props.data.heroes.map((heroes,key)=><Hero key={key} anime={heroes} navigator={this.props.navigator} />)}
						
					</List>
				</Content>
			</Container>
		);
	}
	
}