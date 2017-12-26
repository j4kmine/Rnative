import React, {Component} from 'react';
import axios from 'axios';
import { Container, Header, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List,ListItem,Text,Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native';
import {getHero,fetchHeroes} from '../actions/heroes';
import {connect} from 'react-redux';
import t from 'tcomb-form-native';
import {diffDate} from '../helpers/Helpers';
import SyncStorage from 'sync-storage';
const Form = t.form.Form;
const FormSchema = t.struct({
	name:t.String,
	title:t.String,
	role:t.String,
	speciality:t.maybe(t.String),
	ImageUrl:t.String,
});
class HeroEdit extends Component{
static navigatorStyle ={
		navBarHidden:true,
		tabBarHidden:true
}
state ={
	value:{}
}
handleEdit(){
	const {id} = this.props;
	const value =this.refs.form.getValue();
	const self = this;
	axios.put('http://rest.learncode.academy/api/ade/hero/'+this.props.id,value)
	.then(()=>
		  	self.props.dispatch(fetchHeroes()),
		  	self.props.navigator.resetTo({
		  		screen:'tab.Heroes'
		  	})

		  )
		  .catch(function (error) {
		    console.log(error);
		  });
	
}

componentDidMount(){
	const {id} = this.props;
	this.props.dispatch(getHero(id));
	
	//hasil props di masukan ke function mapStateToProps
	//ditampung di variabel props data
}

render(){
	const {fetching,hero} = this.props.data;
	//const {hero} =this.props.data;
	if(fetching){
		return(
			<Container>
				<Content>
					<Text>Loading..</Text>
				</Content>
			</Container>
		)
	}
	return(
		<Container style={{padding:10}}>
			<Content>
				<Form ref="form" type={FormSchema} value={hero} />
				<Button full success onPress={()=>this.handleEdit()}>
					<Text>Edit</Text>
				</Button>
			</Content>
		</Container>
	);
} 

}
const mapStateToProps = (state) =>({
	data:state
})
export default connect(mapStateToProps) (HeroEdit);