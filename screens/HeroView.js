import React, {Component} from 'react';
import axios from 'axios';
import { Container, Header, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List,ListItem,Text,Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native';
import {fetchHeroes} from '../actions/heroes';
import {connect} from 'react-redux';
import SyncStorage from 'sync-storage';
import {diffDate} from '../helpers/Helpers';

class HeroView extends Component{
	static navigatorStyle ={
		navBarHidden:true,
		tabBarHidden:true
}

 componentWillMount(){
 	
    	const self = this;
    	const access_token = SyncStorage.get('access_token');
 		const expired_in = SyncStorage.get('expired_in');
		if(access_token  != undefined ){
			if(diffDate(expired_in) <= 1){
				this.props.navigator.push({
				  		screen:'tab.Login'
				 })
			}
		}else{
			this.props.navigator.push({
			  		screen:'tab.Login'
			 })
		}
    	
    }
renderHeader(){
	return (
		<Header>
			<Left>
				<TouchableOpacity onPress={()=>this.props.navigator.pop()}>
					<Icon name="arrow-back"/>
				</TouchableOpacity>
			</Left>
			<Body>
				<Text>Hero Detail</Text>
			</Body>
			<Right>
			</Right>
		</Header>
	);
}
handleGoEdit(id){
	this.props.navigator.push({

		screen:'push.HeroEdit',
		title:'hero edit',
		passProps:{
			id:id
		}
	})
}
handleDelete(id){
	const self = this;
	axios.delete(`http://rest.learncode.academy/api/ade/hero/${id}`)
	.then(()=>{
		self.props.dispatch(fetchHeroes()),
		self.props.navigator.pop()
	})
}
	render(){
		const {hero} = this.props;
		return(
			<Container>
				{this.renderHeader()}
				<Content>
					<List>
						<ListItem>
							<Thumbnail square  size={80} source={{uri:hero.anime.ImageUrl}} />
							<Body>
								<Text>{hero.anime.name}</Text>
								<Text>{hero.anime.title}</Text>
								<TouchableOpacity onPress={()=>this.handleGoEdit(hero.anime.id) }>
									<Text>Edit</Text>
								</TouchableOpacity>
							</Body>
						</ListItem>
						<ListItem itemDivider>
							<Text>Role</Text>
						</ListItem>
						<ListItem >
							<Text>{hero.anime.role}</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text>Speciality</Text>
						</ListItem>
						<ListItem >
							<Text>{hero.anime.speciality}</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text>Skills</Text>
						</ListItem>
							<ListItem itemDivider>
							<Text>....</Text>
						</ListItem>
					</List>
					<Button full danger onPress={()=>this.handleDelete(hero.anime.id)}>
						<Text>Delete </Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
export default connect() (HeroView);