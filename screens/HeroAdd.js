import React, {Component} from 'react';
import { Container, Header, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List, ListItem,Form,Item,Input,Label,Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import {fetchHeroes} from '../actions/heroes';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import SyncStorage from 'sync-storage';
import {diffDate} from '../helpers/Helpers';
 class HeroAdd extends Component{
	constructor(props) {
	  super(props);
	
	 this.state = {
	  	name:"",
	  	title:"",
	  	role:"",
	  	speciality:"",
	  	imageUri:"",
	  	isValid:false

	  };
	}
	static navigatorStyle ={
		navBarHidden:true,
		tabBarHidden:true
	}
	
	handleDone(){
		const self = this;
		axios.post('http://rest.learncode.academy/api/ade/hero', {
		   name:this.state.name,  title:this.state.title,  role:this.state.role,  speciality:this.state.speciality,ImageUrl:this.state.imageUri
		  })
		  .then(()=>
		  	self.props.dispatch(fetchHeroes()),
		  	self.props.navigator.pop()


		  )
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	_checkisValid(){
		const self = this;
		setTimeout(()=>{
			const {name,title,role,speciality,imageUri} = self.state;
			if(name != "" && title != "" && role != "" && speciality != "" && imageUri != ""){
				self.setState({isValid:true});
			}else{
				self.setState({isValid:false});
			}

		},1000);
	}
	renderHeader(){
		return (
			<Header>
				<Left>
					<TouchableOpacity onPress={()=>this.props.navigator.pop()}>
						<Icon name="arrow-back" />
					</TouchableOpacity>
				</Left>
				<Body>
					<Text>new Hero</Text>
				</Body>
				<Right>
				{
					this.state.isValid?(
						<TouchableOpacity onPress={()=>this.handleDone()}>
							<Text>Done</Text>
						</TouchableOpacity>

					):(

						<Text>Done</Text>
					)


				}
				
				</Right>
			</Header>
		);
	}
	render(){
		return (
			<Container>
				{this.renderHeader()}
				<Content>
					<Text>
						Last Hero {'\n'}
	                    Nama: {this.state.name}{'\n'}
	                    Role: {this.state.role}
	                </Text>
					<Form>
		            <Item floatingLabel>
		             	<Label>Name</Label>
		              	<Input onChangeText={(text)=>{
		              		this.setState({name:text}); 
		              		this._checkisValid();
		              }} />
		            </Item>
		            <Item floatingLabel>
		             	<Label>image uri</Label>
		              	<Input onChangeText={(text)=>{
		              		this.setState({imageUri:text}); 
		              		this._checkisValid();
		              }} />
		              </Item>
		               <Item floatingLabel>
		             	<Label>Title</Label>
		              	<Input onChangeText={(text)=>{
		              		this.setState({title:text}); 
		              		this._checkisValid();
		              }} />
		            </Item>
		             <Item floatingLabel>
		             	<Label>Role</Label>
		              	<Input onChangeText={(text)=>{
		              		this.setState({role:text}); 
		              		this._checkisValid();
		              }} />
		            </Item>
		             <Item floatingLabel>
		             	<Label>Speciality</Label>
		              	<Input onChangeText={(text)=>{
		              		this.setState({speciality:text}); 
		              		this._checkisValid();
		              }} />
		            </Item>
		          </Form>
				</Content>
			</Container>

		)

	}
}
// const mapStateToPropss = (state) =>({

// });

//gunakan redux
//pertama -- kayaknya opsional 
//kedua class yang mau di export
export default connect() (HeroAdd);